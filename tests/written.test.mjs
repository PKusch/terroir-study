import test from "node:test";
import assert from "node:assert/strict";
import { KINDS, COMMAND_WORDS, splitPoints, pointsFor, buildWritten, randomWritten, selfScore } from "../src/written.js";
import { REGIONS } from "../src/data/regions.js";

test("every kind of written question uses one of WSET's command words", () => {
  for (const k of KINDS) {
    assert.ok(COMMAND_WORDS[k.command], k.id);
    assert.ok(k.ask({ name: "X" }).startsWith(k.command), `${k.id} should start with its command word`);
  }
});

test("splitPoints gives one point per sentence and drops scraps", () => {
  assert.deepEqual(splitPoints("Chalk drains well. It also stores water for dry spells. Ok."), ["Chalk drains well", "It also stores water for dry spells"]);
  assert.deepEqual(splitPoints(["Grand Cru (one vineyard)", "AOC", " "]), ["Grand Cru (one vineyard)", "AOC"]);
  assert.deepEqual(splitPoints(undefined), []);
});

test("every region can be asked about its terroir (three points or more) and its styles (two or more)", () => {
  for (const key of Object.keys(REGIONS)) {
    assert.ok(pointsFor(key, "terroir").length >= 3, `${key} terroir: only ${pointsFor(key, "terroir").length} points`);
    assert.ok(pointsFor(key, "style").length >= 2, `${key} style: only ${pointsFor(key, "style").length} points`);
  }
});

test("a written question names its region and lists no point twice", () => {
  const q = buildWritten("champagne", "terroir");
  assert.match(q.question, /Champagne/);
  assert.equal(new Set(q.points).size, q.points.length);
  assert.equal(buildWritten("nowhere", "terroir"), null);
});

test("randomWritten picks from the given regions only", () => {
  let i = 0;
  const rng = () => ((i += 0.37) % 1);
  for (let n = 0; n < 20; n++) assert.ok(["douro", "sherry"].includes(randomWritten(["douro", "sherry"], rng).regionKey));
  assert.equal(randomWritten([], rng), null);
});

test("selfScore counts the ticked points", () => {
  assert.deepEqual(selfScore(["a", "b", "c", "d"], new Set([0, 2])), { got: 2, n: 4, percent: 50 });
  assert.deepEqual(selfScore([], new Set()), { got: 0, n: 0, percent: 0 });
});

test("Another question never gives the same question twice running", () => {
  let prev = randomWritten(["douro"]);
  for (let i = 0; i < 50; i++) {
    const next = randomWritten(["douro"], Math.random, prev);
    assert.ok(!(next.regionKey === prev.regionKey && next.kind === prev.kind), "repeated");
    prev = next;
  }
});

test("wordCount counts words, including accented ones, and ignores punctuation", async () => {
  const { wordCount } = await import("../src/written.js");
  assert.equal(wordCount(""), 0);
  assert.equal(wordCount("Chalk soils hold water."), 4);
  assert.equal(wordCount("Côte-Rôtie's Syrah — 12% abv"), 4);
});

test("every region can also be asked about its growing and winemaking, with three points or more", () => {
  const thin = Object.keys(REGIONS).filter((k) => pointsFor(k, "making").length < 3);
  assert.deepEqual(thin, []);
});

test("every region can be asked about its quality levels, with three points or more", () => {
  const thin = Object.keys(REGIONS).filter((k) => pointsFor(k, "quality").length < 3);
  assert.deepEqual(thin, []);
});
