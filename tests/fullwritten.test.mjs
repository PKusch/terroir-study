import test from "node:test";
import assert from "node:assert/strict";
import { SERVICE_PARTS, TOTAL, allocate, buildFull, fullChoices, fullRegions, randomFull, scoreFull, serviceOptions } from "../src/fullwritten.js";
import { REGIONS } from "../src/data/regions.js";

test("almost every region can be asked as a full 25-mark question", () => {
  const ok = fullRegions();
  assert.ok(ok.length >= Object.keys(REGIONS).length - 3, `only ${ok.length} regions`);
  for (const key of ["bordeaux", "burgundy", "champagne", "douro", "sherry", "rioja", "mosel"]) assert.ok(ok.includes(key), key);
});

test("every full question adds up to 25 marks, with no part under 2", () => {
  for (const key of fullRegions()) {
    for (const ids of fullChoices(key)) {
      const q = buildFull(key, ids);
      const sum = q.parts.reduce((a, p) => a + p.marks, 0);
      assert.equal(sum, TOTAL, `${key} ${ids}: ${sum}`);
      for (const p of q.parts) {
        assert.ok(p.marks >= 2, `${key}: part ${p.letter} has ${p.marks}`);
        assert.ok(p.points.length >= p.marks, `${key}: part ${p.letter} has fewer points than marks`);
      }
    }
  }
});

test("sparkling and fortified regions get their own service part", () => {
  assert.deepEqual(serviceOptions("champagne"), ["sparkling"]);
  assert.deepEqual(serviceOptions("douro"), ["decanting"]);
  assert.deepEqual(serviceOptions("sherry"), ["fino"]);
  const port = randomFull(["douro"], () => 0.3);
  assert.ok(port.parts.some((p) => p.kind === "decanting"));
});

test("every service part has a question and at least four points", () => {
  for (const [id, s] of Object.entries(SERVICE_PARTS)) {
    assert.ok(s.ask(REGIONS.bordeaux).length > 20, id);
    assert.ok(s.points.length >= 4, id);
    assert.ok(["Describe", "Explain", "Identify"].includes(s.command), id);
  }
});

test("allocate trims the largest part and refuses thin notes", () => {
  assert.deepEqual(allocate([12, 12, 8, 6], 20).reduce((a, p) => a + p.marks, 0), 20);
  assert.equal(allocate([1, 1, 1, 1], 20), null);
});

test("random questions never repeat the same region twice running", () => {
  const keys = fullRegions().slice(0, 3);
  let last = null;
  for (let i = 0; i < 30; i++) {
    const q = randomFull(keys, Math.random, last);
    assert.notEqual(q.regionKey, last);
    last = q.regionKey;
  }
});

test("score gives one mark per ticked point, capped at each part's marks", () => {
  const q = buildFull("douro", ["decanting"]);
  const ticked = q.parts.map((p, i) => new Set(i === 0 ? p.points.map((_, j) => j) : [0]));
  const s = scoreFull(q, ticked);
  assert.equal(s.parts[0].got, q.parts[0].marks);
  assert.equal(s.parts[1].got, 1);
  assert.equal(s.total, 25);
  assert.equal(s.got, q.parts[0].marks + q.parts.length - 1);
});
