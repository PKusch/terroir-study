import { test } from "node:test";
import assert from "node:assert/strict";

import {
  PASS_MARK, FULL_LENGTH, SECONDS_PER_QUESTION,
  multipleChoice, examPoolSize, buildExam, shownOptions, scoreExam, marksToPass, formatClock
} from "../src/mockexam.js";
import { QUIZ_QUESTIONS } from "../src/data/quiz.js";

// A small fixed set, so the expectations are easy to read. France has no country
// field; every other question names its own.
const Q = [
  { id: "m1", type: "map", answer: "loire", explanation: "map" },
  { id: "a", type: "connection", region: "loire", options: ["A0", "A1", "A2", "A3"], answer: 1, explanation: "why a" },
  { id: "b", type: "scenario", region: "alsace", options: ["B0", "B1", "B2", "B3"], answer: 0, explanation: "why b" },
  { id: "c", type: "connection", country: "Spain", region: "rioja", options: ["C0", "C1", "C2", "C3"], answer: 3, explanation: "why c" },
  { id: "d", type: "scenario", country: "Spain", region: "rioja", options: ["D0", "D1", "D2", "D3"], answer: 2, explanation: "why d" }
];

// A deterministic rng that counts up and wraps, so shuffles are reproducible.
const counter = () => { let i = 0; return () => ((i++ * 0.37) % 1); };

test("only multiple-choice questions can be in an exam", () => {
  assert.deepEqual(multipleChoice(Q).map((q) => q.id), ["a", "b", "c", "d"]);
  const exam = buildExam(Q, { length: 10, rng: counter() });
  assert.ok(exam.entries.every((e) => e.id !== "m1"));
});

test("an exam has the length asked for, no repeats, and a clock to match", () => {
  const exam = buildExam(Q, { length: 3, rng: counter() });
  assert.equal(exam.entries.length, 3);
  assert.equal(new Set(exam.entries.map((e) => e.id)).size, 3);
  assert.equal(exam.seconds, 3 * SECONDS_PER_QUESTION);
});

test("asking for more than exist gives every multiple-choice question once", () => {
  const exam = buildExam(Q, { length: 50, rng: counter() });
  assert.deepEqual(exam.entries.map((e) => e.id).sort(), ["a", "b", "c", "d"]);
});

test("a country filter draws only from that country, France included", () => {
  assert.equal(examPoolSize(Q, "All"), 4);
  assert.equal(examPoolSize(Q, "Spain"), 2);
  assert.equal(examPoolSize(Q, "France"), 2);
  assert.equal(examPoolSize(Q, "Greece"), 0);
  const spain = buildExam(Q, { length: 10, country: "Spain", rng: counter() });
  assert.deepEqual(spain.entries.map((e) => e.id).sort(), ["c", "d"]);
  assert.deepEqual(buildExam(Q, { country: "Greece" }).entries, []);
});

test("every question's options are all shown, once each, in some order", () => {
  const exam = buildExam(Q, { length: 4, rng: counter() });
  for (const e of exam.entries) {
    assert.deepEqual([...e.order].sort(), [0, 1, 2, 3]);
    const q = Q.find((x) => x.id === e.id);
    assert.deepEqual([...shownOptions(e, q)].sort(), [...q.options].sort());
  }
});

test("the same rng gives the same exam, a different one a different exam", () => {
  const one = buildExam(QUIZ_QUESTIONS, { length: 20, rng: counter() });
  const two = buildExam(QUIZ_QUESTIONS, { length: 20, rng: counter() });
  assert.deepEqual(one, two);
  const other = buildExam(QUIZ_QUESTIONS, { length: 20, rng: () => 0.01 });
  assert.notDeepEqual(one.entries.map((e) => e.id), other.entries.map((e) => e.id));
});

test("a full exam from the real bank is 50 distinct multiple-choice questions", () => {
  const exam = buildExam(QUIZ_QUESTIONS);
  assert.equal(exam.entries.length, FULL_LENGTH);
  assert.equal(new Set(exam.entries.map((e) => e.id)).size, FULL_LENGTH);
  assert.equal(exam.seconds, 60 * 60);
  assert.ok(examPoolSize(QUIZ_QUESTIONS) > FULL_LENGTH, "the bank must hold more than one exam's worth");
});

test("marking follows the answer a student picked, wherever it was shown", () => {
  // Fixed order: shown positions are reversed, so "pick position 0" is original index 3.
  const exam = { entries: [{ id: "a", order: [3, 2, 1, 0] }, { id: "c", order: [3, 2, 1, 0] }], seconds: 144 };
  // a's answer is original 1 (shown at position 2); c's is original 3 (shown at position 0).
  const r = scoreExam(exam, [2, 0], Q);
  assert.equal(r.correct, 2);
  assert.equal(r.percent, 100);
  assert.deepEqual(r.missed, []);
  const wrong = scoreExam(exam, [0, 1], Q);
  assert.equal(wrong.correct, 0);
});

test("unanswered and out-of-range answers count as wrong, and are reported", () => {
  const exam = { entries: [{ id: "a", order: [0, 1, 2, 3] }, { id: "b", order: [0, 1, 2, 3] }, { id: "c", order: [0, 1, 2, 3] }], seconds: 216 };
  const r = scoreExam(exam, [1, null, 9], Q);
  assert.equal(r.total, 3);
  assert.equal(r.correct, 1);
  assert.equal(r.answered, 1);
  assert.equal(r.unanswered, 2);
  assert.deepEqual(r.missed.map((m) => m.id), ["b", "c"]);
  assert.equal(r.missed[0].yourAnswer, null);
  assert.equal(r.missed[0].correctAnswer, "B0");
  assert.equal(scoreExam(exam, [], Q).correct, 0);
});

test("a missed question reports what was picked, the right answer and why", () => {
  const exam = { entries: [{ id: "a", order: [0, 1, 2, 3] }], seconds: 72 };
  const [m] = scoreExam(exam, [3], Q).missed;
  assert.equal(m.yourAnswer, "A3");
  assert.equal(m.correctAnswer, "A1");
  assert.equal(m.explanation, "why a");
  assert.equal(m.country, "France");
});

test("results are split by country", () => {
  const exam = { entries: ["a", "b", "c", "d"].map((id) => ({ id, order: [0, 1, 2, 3] })), seconds: 288 };
  const r = scoreExam(exam, [1, 0, 3, 0], Q); // a, b, c right; d wrong
  assert.deepEqual(r.byCountry, [
    { country: "France", correct: 2, total: 2 },
    { country: "Spain", correct: 1, total: 2 }
  ]);
});

test("the pass mark is 55%: 27 of 50 fails, 28 passes", () => {
  assert.equal(PASS_MARK, 0.55);
  assert.equal(marksToPass(50), 28);
  assert.equal(marksToPass(20), 11);
  const entries = Array.from({ length: 50 }, (_, i) => ({ id: "a", order: [0, 1, 2, 3], i }));
  const pick = (n) => entries.map((_, i) => (i < n ? 1 : 0)); // a's answer is original 1
  assert.equal(scoreExam({ entries, seconds: 0 }, pick(27), Q).passed, false);
  assert.equal(scoreExam({ entries, seconds: 0 }, pick(28), Q).passed, true);
  assert.equal(scoreExam({ entries, seconds: 0 }, pick(28), Q).percent, 56);
});

test("an empty exam scores nothing and never passes", () => {
  const r = scoreExam({ entries: [], seconds: 0 }, [], Q);
  assert.equal(r.total, 0);
  assert.equal(r.percent, 0);
  assert.equal(r.passed, false);
});

test("the clock reads minutes and seconds, rounds up, and stops at zero", () => {
  assert.equal(formatClock(3600), "60:00");
  assert.equal(formatClock(59.2), "1:00");
  assert.equal(formatClock(61), "1:01");
  assert.equal(formatClock(9), "0:09");
  assert.equal(formatClock(0), "0:00");
  assert.equal(formatClock(-5), "0:00");
});
