import { test } from "node:test";
import assert from "node:assert/strict";

import { quizShortcut } from "../src/shortcuts.js";

const ev = (key, extra = {}) => ({ key, ...extra });
const asking = { optionCount: 4, showAnswer: false, isMapQ: false };
const answered = { optionCount: 4, showAnswer: true, isMapQ: false };

test("1 to 4 pick the matching option, and a number with no option does nothing", () => {
  assert.deepEqual(quizShortcut(ev("1"), asking), { type: "option", index: 0 });
  assert.deepEqual(quizShortcut(ev("4"), asking), { type: "option", index: 3 });
  assert.equal(quizShortcut(ev("5"), asking), null);
  assert.equal(quizShortcut(ev("0"), asking), null);
  assert.equal(quizShortcut(ev("1"), { ...asking, optionCount: 0 }), null);
});

test("a map question has no numbered options, so numbers do nothing", () => {
  assert.equal(quizShortcut(ev("1"), { ...asking, isMapQ: true }), null);
});

test("once answered, N and Enter go to the next question and numbers no longer answer", () => {
  assert.deepEqual(quizShortcut(ev("n"), answered), { type: "next" });
  assert.deepEqual(quizShortcut(ev("N"), answered), { type: "next" });
  assert.deepEqual(quizShortcut(ev("Enter"), answered), { type: "next" });
  assert.equal(quizShortcut(ev("2"), answered), null);
});

test("before answering, Enter and N do nothing", () => {
  assert.equal(quizShortcut(ev("Enter"), asking), null);
  assert.equal(quizShortcut(ev("n"), asking), null);
});

test("Enter on a focused button is left to the button, so nothing happens twice", () => {
  assert.equal(quizShortcut(ev("Enter", { targetTag: "BUTTON" }), answered), null);
  assert.equal(quizShortcut(ev("Enter", { targetTag: "A" }), answered), null);
  assert.equal(quizShortcut(ev("Enter", { targetRole: "button" }), answered), null);
  // but a number key on a focused button still answers, since a button does nothing with digits
  assert.deepEqual(quizShortcut(ev("2", { targetTag: "BUTTON" }), asking), { type: "option", index: 1 });
});

test("typing in a box never answers, and browser shortcuts are left alone", () => {
  for (const tag of ["INPUT", "TEXTAREA", "SELECT"]) {
    assert.equal(quizShortcut(ev("1", { targetTag: tag }), asking), null);
    assert.equal(quizShortcut(ev("n", { targetTag: tag }), answered), null);
  }
  assert.equal(quizShortcut(ev("1", { ctrlKey: true }), asking), null);
  assert.equal(quizShortcut(ev("1", { metaKey: true }), asking), null);
  assert.equal(quizShortcut(ev("n", { altKey: true }), answered), null);
});
