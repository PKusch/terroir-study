import test from "node:test";
import assert from "node:assert/strict";
import { buildFullPaper, judgePaper, pickWritten, PAPER_SECONDS, SPARKLING_FORTIFIED, WRITTEN_TOTAL } from "../src/fullpaper.js";
import { QUIZ_QUESTIONS } from "../src/data/quiz.js";
import { countryOf } from "../src/data/projections.js";

test("a full paper has 50 multiple-choice questions, four written ones and two hours", () => {
  const p = buildFullPaper(QUIZ_QUESTIONS);
  assert.equal(p.mcq.entries.length, 50);
  assert.equal(p.written.length, 4);
  assert.equal(p.seconds, PAPER_SECONDS);
  assert.equal(PAPER_SECONDS, 7200);
});

test("written questions: four regions, each 25 marks, the last sparkling or fortified", () => {
  for (let k = 0; k < 50; k++) {
    const w = pickWritten(Math.random);
    assert.equal(new Set(w.map((q) => q.regionKey)).size, 4);
    for (const q of w) assert.equal(q.parts.reduce((a, p) => a + p.marks, 0), 25);
    assert.ok(SPARKLING_FORTIFIED.includes(w[3].regionKey), w[3].regionKey);
    for (const q of w.slice(0, 3)) assert.ok(!SPARKLING_FORTIFIED.includes(q.regionKey));
    assert.equal(new Set(w.slice(0, 3).map((q) => countryOf(q.regionKey))).size, 3, "three countries");
  }
});

test("each part is passed on its own at 55%", () => {
  assert.equal(WRITTEN_TOTAL, 100);
  const a = judgePaper({ mcqCorrect: 28, writtenGot: 55 });
  assert.ok(a.mcq.pass && a.written.pass && a.passed);
  assert.equal(a.mcq.need, 28);
  assert.equal(a.written.need, 55);
  const b = judgePaper({ mcqCorrect: 50, writtenGot: 54 });
  assert.ok(b.mcq.pass && !b.written.pass && !b.passed, "a perfect multiple-choice score cannot carry the written part");
  const c = judgePaper({ mcqCorrect: 27, writtenGot: 100 });
  assert.ok(!c.passed);
});
