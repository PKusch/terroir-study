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

// ── Kinds of paper ──────────────────────────────────────────────────────────
import { PAPERS, isFixedPaper, seededRng, fixedPaperIds, historyIds, paperPoolSize, buildPaper } from "../src/mockexam.js";

test("the same seed gives the same numbers, a different seed different ones", () => {
  const a = seededRng(7), b = seededRng(7), c = seededRng(8);
  const run = (r) => Array.from({ length: 5 }, () => r());
  assert.deepEqual(run(a), run(b));
  assert.notDeepEqual(run(seededRng(7)), run(c));
  assert.ok(run(seededRng(1)).every((n) => n >= 0 && n < 1));
});

test("numbered papers are fixed, never share a question, and together use the whole bank", () => {
  const papers = [0, 1, 2, 3].map((n) => fixedPaperIds(QUIZ_QUESTIONS, n));
  assert.equal(papers[0].length, 50);
  assert.equal(papers[1].length, 50);
  assert.deepEqual(fixedPaperIds(QUIZ_QUESTIONS, 0), papers[0], "the same every time");
  const all = papers.flat();
  assert.equal(new Set(all).size, all.length, "no question on two papers");
  assert.equal(all.length, multipleChoice(QUIZ_QUESTIONS).length, "and none left out (the bank must fit four papers)");
});

test("a numbered paper is identical every time, down to the order of the options", () => {
  const a = buildPaper(QUIZ_QUESTIONS, "paper1");
  const b = buildPaper(QUIZ_QUESTIONS, "paper1");
  assert.deepEqual(a, b);
  assert.equal(a.entries.length, 50);
  assert.notDeepEqual(a.entries.map((e) => e.id), buildPaper(QUIZ_QUESTIONS, "paper2").entries.map((e) => e.id));
  assert.ok(isFixedPaper("paper3") && !isFixedPaper("random") && !isFixedPaper("missed"));
});

const rec = (attempts, correct) => ({ attempts, correct, box: 1, lastAnswered: 1 });

test("missed means answered and under 70% right; unseen means no answer on record", () => {
  const progress = { a: rec(4, 1), b: rec(4, 4), c: rec(10, 7), d: rec(0, 0) };
  assert.deepEqual(historyIds(Q, progress, "missed"), ["a"], "70% right is not missed");
  assert.deepEqual(historyIds(Q, progress, "unseen"), ["d"]);
});

test("unseen lists every multiple-choice question when nothing is on record", () => {
  assert.deepEqual(historyIds(Q, {}, "unseen"), ["a", "b", "c", "d"]);
  assert.deepEqual(historyIds(Q, {}, "missed"), []);
  assert.deepEqual(historyIds(Q, undefined, "unseen"), ["a", "b", "c", "d"]);
});

test("a missed-before paper draws only the missed questions, and respects the country filter", () => {
  const progress = { a: rec(3, 0), c: rec(3, 1), b: rec(3, 3) };
  assert.deepEqual(buildPaper(Q, "missed", { progress, rng: counter() }).entries.map((e) => e.id).sort(), ["a", "c"]);
  assert.deepEqual(buildPaper(Q, "missed", { progress, country: "Spain", rng: counter() }).entries.map((e) => e.id), ["c"]);
  assert.deepEqual(buildPaper(Q, "missed", { progress: {} }).entries, []);
});

test("paperPoolSize reports what each kind of paper can offer", () => {
  assert.equal(paperPoolSize(Q, "random"), 4);
  assert.equal(paperPoolSize(Q, "random", { country: "Spain" }), 2);
  assert.equal(paperPoolSize(Q, "unseen", { progress: { a: rec(2, 2) } }), 3);
  assert.equal(paperPoolSize(Q, "missed", { progress: {} }), 0);
  assert.equal(paperPoolSize(QUIZ_QUESTIONS, "paper1"), 50);
  assert.equal(paperPoolSize(QUIZ_QUESTIONS, "paper1", { country: "Greece" }), 50, "a numbered paper ignores the country filter");
});

test("every kind of paper is listed with a label and a note", () => {
  assert.deepEqual(PAPERS.map((p) => p.id), ["random", "paper1", "paper2", "paper3", "paper4", "missed", "unseen"]);
  for (const p of PAPERS) assert.ok(p.label && p.note);
});

// ── Frozen papers ───────────────────────────────────────────────────────────
test("Papers 1 and 2 do not change when questions are added to the bank", () => {
  const before1 = fixedPaperIds(QUIZ_QUESTIONS, 0);
  const before2 = fixedPaperIds(QUIZ_QUESTIONS, 1);
  const added = [
    { id: "zz-01", type: "scenario", country: "Greece", region: "santorini", options: ["a", "b", "c", "d"], answer: 0, explanation: "x" },
    { id: "zz-02", type: "scenario", country: "Greece", region: "santorini", options: ["a", "b", "c", "d"], answer: 1, explanation: "x" }
  ];
  const bigger = [...QUIZ_QUESTIONS, ...added];
  assert.deepEqual(fixedPaperIds(bigger, 0), before1);
  assert.deepEqual(fixedPaperIds(bigger, 1), before2);
  const later = [...fixedPaperIds(bigger, 2), ...fixedPaperIds(bigger, 3)];
  assert.ok(later.includes("zz-01") && later.includes("zz-02"), "new questions land after the frozen papers");
});

test("a question taken out of the bank just drops out of its paper", () => {
  const gone = fixedPaperIds(QUIZ_QUESTIONS, 0)[0];
  const smaller = QUIZ_QUESTIONS.filter((q) => q.id !== gone);
  assert.equal(fixedPaperIds(smaller, 0).length, 49);
  assert.ok(!fixedPaperIds(smaller, 0).includes(gone));
});

test("Papers 3 and 4 hold the rest, and share nothing with Papers 1 and 2 or each other", () => {
  const frozen = new Set([...fixedPaperIds(QUIZ_QUESTIONS, 0), ...fixedPaperIds(QUIZ_QUESTIONS, 1)]);
  const three = fixedPaperIds(QUIZ_QUESTIONS, 2), four = fixedPaperIds(QUIZ_QUESTIONS, 3);
  assert.ok([...three, ...four].every((id) => !frozen.has(id)));
  assert.ok(three.every((id) => !four.includes(id)));
  assert.equal(three.length + four.length + frozen.size, multipleChoice(QUIZ_QUESTIONS).length);
});

test("Paper 4 is empty until Paper 3 is full, then takes the next fifty", () => {
  const frozen = new Set([...fixedPaperIds(QUIZ_QUESTIONS, 0), ...fixedPaperIds(QUIZ_QUESTIONS, 1)]);
  const base = multipleChoice(QUIZ_QUESTIONS).filter((q) => frozen.has(q.id));
  const extra = (n) => Array.from({ length: n }, (_, i) => ({ id: `xx-${String(i).padStart(2, "0")}`, type: "scenario", country: "Greece", region: "santorini", options: ["a", "b", "c", "d"], answer: 0, explanation: "x" }));
  assert.deepEqual(fixedPaperIds([...base, ...extra(30)], 3), [], "Paper 3 is not full yet");
  const bank = [...base, ...extra(60)];
  const three = fixedPaperIds(bank, 2), four = fixedPaperIds(bank, 3);
  assert.equal(three.length, 50);
  assert.equal(four.length, 10);
  assert.ok(four.every((id) => !three.includes(id)));
});
