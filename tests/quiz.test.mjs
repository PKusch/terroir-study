import test from "node:test";
import assert from "node:assert/strict";
import { QUIZ_QUESTIONS } from "../src/data/quiz.js";

const choice = QUIZ_QUESTIONS.filter((q) => q.options);

// A test-taker who always picks the longest option should not be rewarded.
// This was a manual check (npm run quizcheck); now the build fails on it.
test("no question gives itself away with the right answer as the single longest option", () => {
  const giveaways = choice.filter((q) => {
    const longest = Math.max(...q.options.map((o) => o.length));
    return q.options[q.answer].length === longest && q.options.filter((o) => o.length === longest).length === 1;
  });
  assert.deepEqual(giveaways.map((q) => q.id), []);
});

// Ids carry the country (fr-, it-, nw- ...), and the quiz picks the map from
// the country, so the two must agree.
const PREFIX = { fr: "France", it: "Italy", es: "Spain", de: "Germany", at: "Austria", pt: "Portugal", hu: "Hungary", gr: "Greece", nw: "New World" };

test("every question id starts with its country's prefix", () => {
  const wrong = QUIZ_QUESTIONS.filter((q) => PREFIX[q.id.split("-")[0]] !== (q.country ?? "France"));
  assert.deepEqual(wrong.map((q) => q.id), []);
});

test("no question is asked twice in the same words", () => {
  const seen = new Map();
  const twice = [];
  for (const q of QUIZ_QUESTIONS) {
    if (seen.has(q.question)) twice.push(`${seen.get(q.question)} and ${q.id}`);
    else seen.set(q.question, q.id);
  }
  assert.deepEqual(twice, []);
});

test("every multiple-choice question has four different options", () => {
  const bad = choice.filter((q) => q.options.length !== 4 || new Set(q.options).size !== 4);
  assert.deepEqual(bad.map((q) => q.id), []);
});
