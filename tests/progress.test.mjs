import { test } from "node:test";
import assert from "node:assert/strict";

import {
  STORAGE_KEY,
  boxOf,
  recordAnswer,
  pickNext,
  weakAreas,
  progressSummary,
  loadProgress,
  saveProgress,
  resetProgress
} from "../src/progress.js";
import { QUIZ_QUESTIONS } from "../src/data/quiz.js";
import { REGIONS } from "../src/data/france.js";

// A small fixed set of questions so the expectations are easy to read.
const Q = [
  { id: "a", type: "map", answer: "loire" },
  { id: "b", type: "connection", region: "loire", answer: 1 },
  { id: "c", type: "connection", region: "alsace", answer: 0 },
  { id: "d", type: "scenario", region: "champagne", answer: 2 },
  { id: "e", type: "map", answer: "provence" }
];

// A deterministic rng: hands out the given values in order, then repeats the last.
const seq = (...vals) => {
  let i = 0;
  return () => vals[Math.min(i++, vals.length - 1)];
};

// Answer a question with a given result at a given time, in one line.
let clock = 1000;
const answer = (p, id, correct) => recordAnswer(p, id, correct, (clock += 1));

test("boxes move up on a correct answer, cap at 3, and drop to 1 on a wrong one", () => {
  let p = {};
  assert.equal(boxOf(p, "a"), 0, "unseen is box 0");
  p = answer(p, "a", true);
  assert.equal(boxOf(p, "a"), 1);
  p = answer(p, "a", true);
  assert.equal(boxOf(p, "a"), 2);
  p = answer(p, "a", true);
  assert.equal(boxOf(p, "a"), 3);
  p = answer(p, "a", true);
  assert.equal(boxOf(p, "a"), 3, "box never goes above 3");
  p = answer(p, "a", false);
  assert.equal(boxOf(p, "a"), 1, "a wrong answer sends it back to box 1");
  assert.equal(p.a.attempts, 5);
  assert.equal(p.a.correct, 4);
  assert.ok(p.a.lastAnswered > 1000);
});

test("recordAnswer does not mutate the progress it was given", () => {
  const before = { a: { attempts: 1, correct: 1, box: 1, lastAnswered: 5 } };
  const frozen = JSON.stringify(before);
  const after = recordAnswer(before, "a", true, 6);
  assert.equal(JSON.stringify(before), frozen);
  assert.equal(after.a.box, 2);
});

test("unseen questions come first, whatever the rng says", () => {
  let p = {};
  p = answer(p, "a", false);
  p = answer(p, "b", true);
  p = answer(p, "c", true);
  // d and e are unseen; rng 0 → d, rng 0.99 → e
  assert.equal(pickNext(Q, p, "a", seq(0)).id, "d");
  assert.equal(pickNext(Q, p, "a", seq(0.99)).id, "e");
  // Once everything has been seen, no unseen question can be picked.
  p = answer(p, "d", true);
  p = answer(p, "e", true);
  for (let r = 0; r < 1; r += 0.1) {
    assert.ok(Q.some((q) => q.id === pickNext(Q, p, "a", seq(r)).id));
  }
});

test("the question on screen is never repeated when another one exists", () => {
  // Only "a" is in box 1; everything else is in box 3. Even so, "a" must not
  // be picked again immediately.
  let p = {};
  p = answer(p, "a", false);
  for (const id of ["b", "c", "d", "e"]) {
    p = answer(p, id, true);
    p = answer(p, id, true);
    p = answer(p, id, true);
  }
  for (let r = 0; r < 1; r += 0.05) {
    const next = pickNext(Q, p, "a", seq(r));
    assert.notEqual(next.id, "a", `rng ${r} repeated the current question`);
  }
  // With a single question there is nothing else to show, so it is allowed.
  assert.equal(pickNext([Q[0]], p, "a", seq(0)).id, "a");
  assert.equal(pickNext([], p, null, seq(0)), null);
});

test("box 1 is asked before box 2, and box 2 comes round only after every box-1 question has been seen since", () => {
  let p = {};
  // b in box 2; a and c in box 1; d and e in box 3.
  p = answer(p, "b", true);
  p = answer(p, "b", true);
  p = answer(p, "a", false);
  p = answer(p, "c", false);
  for (const id of ["d", "e"]) for (let i = 0; i < 3; i++) p = answer(p, id, true);

  // a and c were both answered after b, so b is due and comes first.
  assert.equal(pickNext(Q, p, "e", seq(0)).id, "b");

  // Fresh scenario: b answered most recently, so it is NOT due yet.
  let p2 = {};
  p2 = answer(p2, "a", false);
  p2 = answer(p2, "c", false);
  p2 = answer(p2, "b", true);
  p2 = answer(p2, "b", true);
  for (const id of ["d", "e"]) for (let i = 0; i < 3; i++) p2 = answer(p2, id, true);
  // b is in box 2 but a and c have not been seen since → box-1 questions come first.
  const first = pickNext(Q, p2, "e", seq(0)).id;
  const second = pickNext(Q, p2, "e", seq(0.99)).id;
  assert.deepEqual([first, second].sort(), ["a", "c"]);
  // After a and c are answered again, b is due.
  p2 = answer(p2, "a", false);
  p2 = answer(p2, "c", false);
  assert.equal(pickNext(Q, p2, "c", seq(0)).id, "b");
});

test("box 3 waits until everything in boxes 1 and 2 has been seen since", () => {
  let p = {};
  // c, d, e answered right three times → box 3, seen earliest.
  for (const id of ["c", "d", "e"]) for (let i = 0; i < 3; i++) p = answer(p, id, true);
  // a wrong → box 1. b right twice → box 2. Both seen after the box-3 questions.
  p = answer(p, "a", false);
  p = answer(p, "b", true);
  p = answer(p, "b", true);
  assert.equal(boxOf(p, "a"), 1);
  assert.equal(boxOf(p, "b"), 2);
  assert.equal(boxOf(p, "e"), 3);

  // b (box 2) is not due because a was answered before b. So a (box 1) comes next,
  // and the box-3 questions wait even though the rng would happily pick them.
  for (let r = 0; r < 1; r += 0.25) assert.equal(pickNext(Q, p, "d", seq(r)).id, "a");

  // Answer a; now b is due (a has been seen since b). Box 3 still waits.
  p = answer(p, "a", false);
  for (let r = 0; r < 1; r += 0.25) assert.equal(pickNext(Q, p, "a", seq(r)).id, "b");

  // Answer b wrong → back to box 1. Now a and b are both box 1, b is on screen → a.
  p = answer(p, "b", false);
  assert.equal(pickNext(Q, p, "b", seq(0)).id, "a");

  // Box 3 only comes round once every box-1 and box-2 question has been seen since.
  // c, d, e were all answered before a and b, so once a is answered again they are due —
  // but a box-1 question (b) still exists and is not on screen, so b wins.
  p = answer(p, "a", true); // a → box 2
  assert.equal(pickNext(Q, p, "a", seq(0)).id, "b");
  p = answer(p, "b", true); // b → box 2; box 1 is now empty
  // a (box 2) is due (no box-1 questions left) and comes before box 3.
  assert.equal(pickNext(Q, p, "b", seq(0)).id, "a");
  p = answer(p, "a", true); // a → box 3
  // Now boxes 1–2 hold only b, which is not on screen and is due → b again, box 3 still waits.
  assert.equal(pickNext(Q, p, "a", seq(0)).id, "b");
  p = answer(p, "b", true); // b → box 3; every question is now in box 3
  // Everything lower has been seen; the box-3 questions are due and b is on screen, so
  // the pick is one of a, c, d, e.
  const picks = new Set();
  for (let r = 0; r < 1; r += 0.2) picks.add(pickNext(Q, p, "b", seq(r)).id);
  assert.ok(!picks.has("b"), "the question on screen must not repeat");
  assert.ok([...picks].every((id) => ["a", "c", "d", "e"].includes(id)), `unexpected picks ${[...picks]}`);
  assert.ok(picks.size >= 3, "different rng values should reach different due questions");
});

test("weak areas are sorted weakest first and ignore regions with fewer than 2 attempts", () => {
  let p = {};
  // loire: a wrong, a wrong, b right → 1 of 3
  p = answer(p, "a", false);
  p = answer(p, "a", false);
  p = answer(p, "b", true);
  // alsace: c right, c right → 2 of 2
  p = answer(p, "c", true);
  p = answer(p, "c", true);
  // champagne: one attempt only → ignored
  p = answer(p, "d", false);
  const weak = weakAreas(Q, p, REGIONS);
  assert.deepEqual(weak.map((w) => w.key), ["loire", "alsace"]);
  assert.equal(weak[0].name, "Loire Valley");
  assert.equal(weak[0].attempts, 3);
  assert.equal(weak[0].correct, 1);
  assert.ok(Math.abs(weak[0].accuracy - 1 / 3) < 1e-9);
  assert.equal(weak[1].name, "Alsace");
  assert.equal(weak[1].accuracy, 1);
  assert.deepEqual(weakAreas(Q, {}, REGIONS), []);
});

test("weak areas work on the real question set and use q.answer for map questions", () => {
  let p = {};
  const champagneMap = QUIZ_QUESTIONS.find((q) => q.type === "map" && q.answer === "champagne");
  p = answer(p, champagneMap.id, false);
  p = answer(p, champagneMap.id, false);
  const weak = weakAreas(QUIZ_QUESTIONS, p, REGIONS);
  assert.equal(weak.length, 1);
  assert.equal(weak[0].key, "champagne");
  assert.equal(weak[0].name, REGIONS.champagne.name);
});

test("progressSummary counts answers, unseen questions and questions due for review", () => {
  let p = {};
  assert.deepEqual(progressSummary(Q, p), { answered: 0, unseen: 5, due: 0 });
  p = answer(p, "a", false);
  p = answer(p, "b", true);
  p = answer(p, "b", true);
  const s = progressSummary(Q, p);
  assert.equal(s.answered, 3);
  assert.equal(s.unseen, 3);
  // a (box 1) is due; b (box 2) is due too because a was answered before b.
  assert.equal(s.due, 1 + 0);
});

test("a missing localStorage behaves as empty and never throws", () => {
  const had = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  try {
    delete globalThis.localStorage;
    assert.deepEqual(loadProgress(), {});
    assert.equal(saveProgress({ a: { attempts: 1, correct: 1, box: 1, lastAnswered: 1 } }), false);
    assert.deepEqual(resetProgress(), {});
  } finally {
    if (had) Object.defineProperty(globalThis, "localStorage", had);
  }
});

test("a throwing localStorage behaves as empty and never throws", () => {
  const had = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  const boom = () => { throw new Error("SecurityError: access denied"); };
  try {
    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      get() { return { getItem: boom, setItem: boom, removeItem: boom }; }
    });
    assert.deepEqual(loadProgress(), {});
    assert.equal(saveProgress({}), false);
    assert.deepEqual(resetProgress(), {});
    // The accessor itself throwing must also be safe.
    Object.defineProperty(globalThis, "localStorage", { configurable: true, get: boom });
    assert.deepEqual(loadProgress(), {});
    assert.equal(saveProgress({}), false);
    assert.deepEqual(resetProgress(), {});
  } finally {
    delete globalThis.localStorage;
    if (had) Object.defineProperty(globalThis, "localStorage", had);
  }
});

test("a working localStorage round-trips under one key and ignores junk", () => {
  const had = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  const store = new Map();
  try {
    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      value: {
        getItem: (k) => (store.has(k) ? store.get(k) : null),
        setItem: (k, v) => store.set(k, String(v)),
        removeItem: (k) => store.delete(k)
      }
    });
    const p = recordAnswer({}, "a", true, 42);
    assert.equal(saveProgress(p), true);
    assert.deepEqual([...store.keys()], [STORAGE_KEY]);
    assert.deepEqual(loadProgress(), p);
    store.set(STORAGE_KEY, "not json");
    assert.deepEqual(loadProgress(), {});
    store.set(STORAGE_KEY, "[1,2,3]");
    assert.deepEqual(loadProgress(), {});
    resetProgress();
    assert.equal(store.size, 0);
  } finally {
    delete globalThis.localStorage;
    if (had) Object.defineProperty(globalThis, "localStorage", had);
  }
});
