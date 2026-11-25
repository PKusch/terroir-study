import test from "node:test";
import assert from "node:assert/strict";
import { BANDS, UNSEEN, bandFor, buildHeat, regionTotals } from "../src/heat.js";
import { QUIZ_QUESTIONS } from "../src/data/quiz.js";
import { REGIONS } from "../src/data/regions.js";

const rec = (attempts, correct) => ({ attempts, correct, box: 1, lastAnswered: 1 });

test("bands: under 50% weak, 50 to 74% middling, 75% or more strong", () => {
  assert.equal(bandFor({ attempts: 4, correct: 1 }).id, "weak");
  assert.equal(bandFor({ attempts: 4, correct: 2 }).id, "middling");
  assert.equal(bandFor({ attempts: 100, correct: 74 }).id, "middling");
  assert.equal(bandFor({ attempts: 4, correct: 3 }).id, "strong");
  assert.equal(bandFor({ attempts: 2, correct: 2 }).id, "strong");
});

test("a region with fewer than two answers is not judged", () => {
  assert.equal(bandFor(undefined), UNSEEN);
  assert.equal(bandFor({ attempts: 1, correct: 0 }), UNSEEN);
});

test("every colour is a six-digit hex, so the maps can add see-through", () => {
  for (const b of [...BANDS, UNSEEN]) assert.match(b.colour, /^#[0-9A-Fa-f]{6}$/);
});

test("totals add up a region's questions, map questions by their answer", () => {
  const bordeaux = QUIZ_QUESTIONS.filter((q) => q.region === "bordeaux").slice(0, 2);
  const mapQ = QUIZ_QUESTIONS.find((q) => q.type === "map" && q.answer === "bordeaux");
  const service = QUIZ_QUESTIONS.find((q) => q.topic === "service");
  const progress = { [bordeaux[0].id]: rec(2, 1), [bordeaux[1].id]: rec(1, 1), [service.id]: rec(3, 0) };
  if (mapQ) progress[mapQ.id] = rec(1, 0);
  const t = regionTotals(QUIZ_QUESTIONS, progress);
  assert.deepEqual(t.bordeaux, { attempts: mapQ ? 4 : 3, correct: 2 });
  assert.equal(Object.keys(t).length, 1, "a service question has no region and is left out");
});

test("buildHeat colours every region and counts them", () => {
  const keys = Object.keys(REGIONS);
  const q = QUIZ_QUESTIONS.find((x) => x.region === "tokaj");
  const h = buildHeat(QUIZ_QUESTIONS, { [q.id]: rec(5, 1) }, keys);
  assert.equal(Object.keys(h.colours).length, keys.length);
  assert.equal(h.colours.tokaj, BANDS[0].colour);
  assert.equal(h.counts.weak, 1);
  assert.equal(h.counts.unseen, keys.length - 1);
  const empty = buildHeat(QUIZ_QUESTIONS, {}, keys);
  assert.equal(empty.counts.unseen, keys.length);
});
