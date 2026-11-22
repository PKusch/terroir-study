import test from "node:test";
import assert from "node:assert/strict";
import { addStudyDay, dailyTarget, dayKey, daysUntil, lastWeek, streak, loadDays, loadExamDate, saveExamDate, markStudied, MAX_DAYS, REVISION_DAYS } from "../src/studyplan.js";

const at = (day) => new Date(`${day}T10:00:00`).getTime();

test("days are stored once each, sorted, and capped", () => {
  let d = [];
  d = addStudyDay(d, at("2026-11-20"));
  d = addStudyDay(d, at("2026-11-18"));
  d = addStudyDay(d, at("2026-11-20"));
  assert.deepEqual(d, ["2026-11-18", "2026-11-20"]);
  assert.deepEqual(addStudyDay(["junk", 5, "2026-13-40"], at("2026-11-20")), ["2026-11-20"]);
  const many = Array.from({ length: MAX_DAYS + 10 }, (_, i) => dayKey(at("2025-01-01") + i * 86400000));
  assert.equal(addStudyDay(many, at("2027-06-01")).length, MAX_DAYS);
});

test("a streak counts days in a row, and is not lost before today's study", () => {
  const days = ["2026-11-18", "2026-11-19", "2026-11-20", "2026-11-21"];
  assert.deepEqual(streak(days, at("2026-11-21")), { days: 4, today: true });
  assert.deepEqual(streak(days, at("2026-11-22")), { days: 4, today: false });
  assert.deepEqual(streak(days, at("2026-11-23")), { days: 0, today: false });
  assert.deepEqual(streak([], at("2026-11-23")), { days: 0, today: false });
});

test("a streak runs across a month end and a clock change", () => {
  const days = ["2026-10-24", "2026-10-25", "2026-10-26", "2026-10-31", "2026-11-01"];
  assert.equal(streak(days, at("2026-11-01")).days, 2);
  assert.equal(streak(days, at("2026-10-26")).days, 3);
});

test("last week counts the seven days ending today", () => {
  const days = ["2026-11-10", "2026-11-16", "2026-11-18", "2026-11-22"];
  assert.equal(lastWeek(days, at("2026-11-22")), 3);
});

test("days until the exam", () => {
  assert.equal(daysUntil("2026-12-22", at("2026-11-22")), 30);
  assert.equal(daysUntil("2026-11-22", at("2026-11-22")), 0);
  assert.equal(daysUntil("2026-11-20", at("2026-11-22")), -2);
  assert.equal(daysUntil("not a date", at("2026-11-22")), null);
});

test("the daily target leaves the last week for revision", () => {
  assert.deepEqual(dailyTarget(300, 37), { phase: "learn", daysLeft: 37, studyDays: 30, perDay: 10 });
  assert.equal(dailyTarget(301, 37).perDay, 11);
  assert.equal(dailyTarget(300, REVISION_DAYS).phase, "revise");
  assert.equal(dailyTarget(0, 30).phase, "allSeen");
  assert.equal(dailyTarget(10, 0).phase, "today");
  assert.equal(dailyTarget(10, -3).phase, "none");
  assert.equal(dailyTarget(10, null).phase, "none");
});

test("storage: works with no browser storage and with damaged data", () => {
  assert.deepEqual(loadDays(), []);
  assert.equal(loadExamDate(), null);
  const store = new Map();
  globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
  try {
    store.set("terroir-study-days-v1", "{not json");
    assert.deepEqual(loadDays(), []);
    markStudied(at("2026-11-22"));
    assert.deepEqual(loadDays(), ["2026-11-22"]);
    saveExamDate("2027-01-15");
    assert.equal(loadExamDate(), "2027-01-15");
    saveExamDate("");
    assert.equal(loadExamDate(), null);
  } finally {
    delete globalThis.localStorage;
  }
});
