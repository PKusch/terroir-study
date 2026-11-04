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
