import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { QUIZ_QUESTIONS } from "../src/data/quiz.js";
import { REGIONS } from "../src/data/regions.js";
import { PLACES } from "../src/data/places.js";
import { GRAPES } from "../src/data/grapes.js";

// The README quotes the size of the data in three places. These tests fail the
// moment a region, place, question or grape is added without the README
// following, so the numbers a visitor reads are always the real ones.
const README = readFileSync(new URL("../README.md", import.meta.url), "utf8");
const places = Object.values(PLACES).reduce((n, p) => n + Object.keys(p).length, 0);
const regions = Object.keys(REGIONS).length;
const questions = QUIZ_QUESTIONS.length;
const multipleChoice = QUIZ_QUESTIONS.filter((q) => q.options).length;
const grapes = Object.keys(GRAPES).length;

test("the README's headline numbers match the data", () => {
  const row = README.split("\n").find((l) => l.includes("quiz questions") && l.includes("grapes"));
  assert.ok(row, "the headline row is missing");
  const num = (label) => Number(new RegExp(`\\*\\*(\\d+)\\*\\*\\s+${label}`).exec(row)?.[1]);
  assert.equal(num("regions"), regions, "regions");
  assert.equal(num("places"), places, "places");
  assert.equal(num("quiz questions"), questions, "quiz questions");
  assert.equal(num("grapes"), grapes, "grapes");
});

test("the README roadmap quotes the real question count", () => {
  const m = /\((\d+): .*?; (\d+) of them multiple choice\)/.exec(README);
  assert.ok(m, "the question-bank line is missing");
  assert.equal(Number(m[1]), questions, "total questions");
  assert.equal(Number(m[2]), multipleChoice, "multiple-choice questions");
});

test("the README roadmap quotes the real place and region count", () => {
  const m = /(\d+) places marked across (\d+) regions/.exec(README);
  assert.ok(m, "the places line is missing");
  assert.equal(Number(m[1]), places, "places");
  assert.equal(Number(m[2]), regions, "regions");
});
