import { test } from "node:test";
import assert from "node:assert/strict";

import {
  makeBackup, readBackup, mergeProgress, mergeTaste, backupFileName,
  loadLastBackup, saveLastBackup, lastBackupLabel, LAST_BACKUP_KEY, describeBackup,
  BACKUP_VERSION, MAX_BACKUP_BYTES
} from "../src/backup.js";
import { recordAnswer } from "../src/progress.js";
import { QUIZ_QUESTIONS } from "../src/data/quiz.js";

const rec = (attempts, correct, box, lastAnswered) => ({ attempts, correct, box, lastAnswered });
const ids = new Set(QUIZ_QUESTIONS.map((q) => q.id));

test("a backup read back is exactly what was saved", () => {
  let quiz = {};
  quiz = recordAnswer(quiz, "fr-01", true, 1000);
  quiz = recordAnswer(quiz, "fr-01", true, 2000);
  quiz = recordAnswer(quiz, "fr-02", false, 3000);
  const file = JSON.stringify(makeBackup({ quiz, taste: { wines: 7, fullyRight: 3 }, now: 5000 }));
  const back = readBackup(file, ids);
  assert.equal(back.ok, true);
  assert.deepEqual(back.quiz, quiz);
  assert.deepEqual(back.taste, { wines: 7, fullyRight: 3 });
  assert.equal(back.kept, 2);
  assert.equal(back.dropped, 0);
  assert.equal(back.savedAt, new Date(5000).toISOString());
});

test("things that are not backups are refused with a reason, never thrown", () => {
  for (const bad of ["", "not json", "[]", "null", "42", JSON.stringify({ app: "something-else", version: 1, quiz: {} })]) {
    const r = readBackup(bad);
    assert.equal(r.ok, false, bad);
    assert.ok(r.reason.length > 10, bad);
  }
  assert.equal(readBackup(undefined).ok, false);
  assert.equal(readBackup("x".repeat(MAX_BACKUP_BYTES + 1)).ok, false);
});

test("a backup from a newer version is refused, and one with no quiz section too", () => {
  const newer = readBackup(JSON.stringify({ app: "terroir-study", version: BACKUP_VERSION + 1, quiz: {} }));
  assert.equal(newer.ok, false);
  assert.match(newer.reason, /newer version/);
  assert.equal(readBackup(JSON.stringify({ app: "terroir-study", version: 1 })).ok, false);
  assert.equal(readBackup(JSON.stringify({ app: "terroir-study", version: 1, quiz: [] })).ok, false);
});

test("damaged records are dropped one by one and counted, and the good ones survive", () => {
  const file = JSON.stringify({
    app: "terroir-study", version: 1,
    quiz: {
      "fr-01": rec(3, 2, 2, 100),
      "fr-02": rec(1, 5, 1, 100),        // more right than attempts
      "fr-03": rec(2, 1, 9, 100),        // a box that does not exist
      "fr-04": rec(-1, 0, 1, 100),       // negative attempts
      "fr-05": rec(1, 1, 1, "yesterday"), // not a time
      "fr-06": "corrupt",
      "fr-07": rec(1.5, 1, 1, 100)       // not a whole number
    }
  });
  const r = readBackup(file, ids);
  assert.equal(r.ok, true);
  assert.deepEqual(Object.keys(r.quiz), ["fr-01"]);
  assert.equal(r.dropped, 6);
});

test("questions this version of the app does not have are set aside, not kept", () => {
  const file = JSON.stringify({ app: "terroir-study", version: 1, quiz: { "fr-01": rec(1, 1, 1, 1), "zz-99": rec(1, 1, 1, 1) } });
  const r = readBackup(file, ids);
  assert.deepEqual(Object.keys(r.quiz), ["fr-01"]);
  assert.equal(r.unknown, 1);
  assert.equal(readBackup(file).kept, 2);
});

test("tasting totals that cannot be true are reset to zero rather than trusted", () => {
  const mk = (taste) => readBackup(JSON.stringify({ app: "terroir-study", version: 1, quiz: {}, taste })).taste;
  assert.deepEqual(mk({ wines: 4, fullyRight: 9 }), { wines: 4, fullyRight: 0 });
  assert.deepEqual(mk({ wines: -3, fullyRight: 1 }), { wines: 0, fullyRight: 0 });
  assert.deepEqual(mk("many"), { wines: 0, fullyRight: 0 });
  assert.deepEqual(mk(undefined), { wines: 0, fullyRight: 0 });
});

test("a key called __proto__ is dropped and cannot change what every record inherits", () => {
  const file = '{"app":"terroir-study","version":1,"quiz":{"__proto__":{"attempts":1,"correct":1,"box":1,"lastAnswered":1},"fr-01":{"attempts":1,"correct":1,"box":1,"lastAnswered":1}}}';
  const r = readBackup(file);
  assert.equal(r.ok, true);
  assert.deepEqual(Object.keys(r.quiz), ["fr-01"]);
  assert.equal(r.dropped, 1);
  assert.equal(Object.getPrototypeOf(r.quiz), Object.prototype);
  assert.equal(r.quiz.attempts, undefined);
  const hostile = JSON.parse('{"__proto__":{"attempts":9}}');
  assert.equal(mergeProgress({}, hostile).attempts, undefined);
});

test("merging keeps the more recently answered record whole, and never adds up", () => {
  const local = { a: rec(5, 5, 3, 900), b: rec(1, 0, 1, 100) };
  const incoming = { a: rec(2, 1, 1, 400), b: rec(3, 3, 2, 800), c: rec(1, 1, 1, 50) };
  const merged = mergeProgress(local, incoming);
  assert.deepEqual(merged.a, local.a);
  assert.deepEqual(merged.b, incoming.b);
  assert.deepEqual(merged.c, incoming.c);
  assert.deepEqual(mergeProgress(merged, incoming), merged, "restoring the same file twice changes nothing");
  assert.deepEqual(local.b, rec(1, 0, 1, 100), "the input is not changed");
  assert.deepEqual(mergeProgress(null, null), {});
});

test("tasting results merge to the larger record, and twice changes nothing", () => {
  const a = { wines: 10, fullyRight: 4 };
  const b = { wines: 6, fullyRight: 6 };
  assert.deepEqual(mergeTaste(a, b), a);
  assert.deepEqual(mergeTaste(b, a), a);
  assert.deepEqual(mergeTaste(mergeTaste(a, b), b), a);
  assert.deepEqual(mergeTaste(undefined, undefined), { wines: 0, fullyRight: 0 });
});

test("the file name carries the date", () => {
  assert.equal(backupFileName(Date.UTC(2026, 8, 21, 23, 30)), "terroir-study-progress-2026-09-21.json");
});

test("the last-backup time is remembered, and storage that is missing or throws means never", () => {
  const before = globalThis.localStorage;
  try {
    delete globalThis.localStorage;
    assert.equal(loadLastBackup(), null);
    assert.equal(saveLastBackup(5), false);

    const mem = new Map();
    globalThis.localStorage = { getItem: (k) => mem.get(k) ?? null, setItem: (k, v) => mem.set(k, v) };
    assert.equal(loadLastBackup(), null);
    assert.equal(saveLastBackup(123456), true);
    assert.equal(loadLastBackup(), 123456);
    mem.set(LAST_BACKUP_KEY, "soon");
    assert.equal(loadLastBackup(), null);

    globalThis.localStorage = { getItem() { throw new Error("blocked"); }, setItem() { throw new Error("full"); } };
    assert.equal(loadLastBackup(), null);
    assert.equal(saveLastBackup(1), false);
  } finally {
    if (before === undefined) delete globalThis.localStorage; else globalThis.localStorage = before;
  }
});

test("the reminder says how long ago in words", () => {
  const day = 86_400_000;
  const now = 100 * day;
  assert.equal(lastBackupLabel(null, now), "Never saved");
  assert.equal(lastBackupLabel(now - 3600_000, now), "Saved today");
  assert.equal(lastBackupLabel(now - day, now), "Saved yesterday");
  assert.equal(lastBackupLabel(now - 9 * day, now), "Saved 9 days ago");
});

test("a file is described in plain words before it is loaded", () => {
  assert.equal(
    describeBackup({ kept: 47, taste: { wines: 12, fullyRight: 5 }, savedAt: "2026-09-20T10:00:00.000Z" }),
    "This file saved on 2026-09-20 holds answers to 47 quiz questions and 12 tasted wines."
  );
  assert.equal(describeBackup({ kept: 1, taste: { wines: 0, fullyRight: 0 }, savedAt: null }), "This file holds answers to 1 quiz question.");
  assert.match(describeBackup({ kept: 3, taste: { wines: 1 }, dropped: 1, unknown: 1, savedAt: "garbage" }), /2 entries in it could not be used/);
  assert.match(describeBackup({ kept: 3, taste: { wines: 1 }, dropped: 1, savedAt: "garbage" }), /1 entry in it could not be used/);
});
