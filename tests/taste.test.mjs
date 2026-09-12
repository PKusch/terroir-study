import { test } from "node:test";
import assert from "node:assert/strict";

import { buildExercise, markExercise, explain, structureFields, AROMA_CHOICES } from "../src/taste.js";
import { REGIONS } from "../src/data/regions.js";
import { GRAPES, grapeFor } from "../src/data/grapes.js";

// A repeatable rng: cycles through a fixed list of numbers in [0, 1).
const fixedRng = (seq = [0.1, 0.7, 0.3, 0.9, 0.5, 0.2, 0.8, 0.4, 0.6, 0.05, 0.95, 0.15, 0.85, 0.25, 0.75]) => {
  let i = 0;
  return () => seq[i++ % seq.length];
};

// A small fake data set so the rules can be checked without the real files.
const FAKE_GRAPES = {
  redA: { name: "Red A", aliases: ["Rouge A"], colour: "red", body: "high", acidity: "medium", tannin: "high", aromas: ["r1", "r2", "r3", "r4", "r5"], notes: "Red A note one. Red A note two." },
  redB: { name: "Red B", aliases: [], colour: "red", body: "low", acidity: "high", tannin: "low", aromas: ["r3", "r6", "r7", "r8", "r9"], notes: "Red B note." },
  redC: { name: "Red C", aliases: [], colour: "red", body: "medium", acidity: "medium", tannin: "medium", aromas: ["r10", "r11", "r12", "r13", "r14", "r15"], notes: "Red C note." },
  whiteA: { name: "White A", aliases: [], colour: "white", body: "low", acidity: "high", aromas: ["w1", "w2", "w3", "w4", "w5"], notes: "White A note." },
  whiteB: { name: "White B", aliases: [], colour: "white", body: "medium", acidity: "low", aromas: ["w6", "w7", "w8", "w9", "w10"], notes: "White B note." }
};

const FAKE_REGIONS = {
  north: { name: "North", typicalStyle: "Light and fresh.", keyGrapes: { red: ["Rouge A", "Unknown Red"], white: ["White A"] } },
  south: { name: "South", typicalStyle: "Big and ripe.", keyGrapes: { red: ["Red B", "Red C"], white: [] } },
  empty: { name: "Nowhere", typicalStyle: "Nothing known.", keyGrapes: { red: ["Mystery Grape"], white: ["Another Mystery"] } }
};

test("buildExercise only picks grapes that have a profile", () => {
  for (let n = 0; n < 200; n += 1) {
    const ex = buildExercise(FAKE_REGIONS, FAKE_GRAPES, Math.random);
    assert.ok(ex, "an exercise is built");
    assert.notEqual(ex.regionKey, "empty", "a region with no profiled grape is never picked");
    assert.notEqual(ex.grapeName, "Unknown Red", "a grape with no profile is never picked");
    assert.ok(ex.profile && ex.profile.aromas, "the profile is attached");
    assert.ok(FAKE_REGIONS[ex.regionKey].keyGrapes[ex.colour].includes(ex.grapeName), "grapeName is as written in the region file");
  }
});

test("buildExercise on the real data always finds a profile that matches the region's spelling", () => {
  for (let n = 0; n < 300; n += 1) {
    const ex = buildExercise(REGIONS, GRAPES, Math.random);
    assert.ok(ex);
    const viaHelper = grapeFor(ex.grapeName);
    assert.ok(viaHelper, `${ex.grapeName} resolves via grapeFor`);
    assert.equal(ex.profile.slug, viaHelper.slug, "the same profile grapeFor would return");
    assert.ok(REGIONS[ex.regionKey].keyGrapes[ex.colour].includes(ex.grapeName));
  }
});

test("aromaChoices has 8 unique words containing every profile aroma", () => {
  for (let n = 0; n < 300; n += 1) {
    const ex = buildExercise(REGIONS, GRAPES, Math.random);
    assert.equal(ex.aromaChoices.length, AROMA_CHOICES);
    assert.equal(new Set(ex.aromaChoices).size, AROMA_CHOICES, "no duplicates");
    for (const a of ex.profile.aromas) assert.ok(ex.aromaChoices.includes(a), `${a} is offered`);
  }
});

test("distractors never include a correct aroma and come from the same colour", () => {
  for (let n = 0; n < 300; n += 1) {
    const ex = buildExercise(REGIONS, GRAPES, Math.random);
    const correct = new Set(ex.profile.aromas);
    const distractors = ex.aromaChoices.filter((a) => !correct.has(a));
    assert.equal(distractors.length, AROMA_CHOICES - ex.profile.aromas.length);
    for (const d of distractors) {
      assert.ok(!correct.has(d));
      const owners = Object.values(GRAPES).filter((g) => g.aromas.includes(d));
      assert.ok(owners.length > 0, `${d} belongs to some profile`);
      assert.ok(owners.some((g) => g.colour === ex.colour), `${d} belongs to a ${ex.colour} profile`);
    }
  }
});

test("with a fixed rng the exercise is deterministic", () => {
  const a = buildExercise(REGIONS, GRAPES, fixedRng());
  const b = buildExercise(REGIONS, GRAPES, fixedRng());
  assert.deepEqual(a, b);
  const c = buildExercise(REGIONS, GRAPES, fixedRng([0.9, 0.9, 0.1, 0.1, 0.5, 0.5, 0.3, 0.3]));
  assert.notDeepEqual(a.aromaChoices, c.aromaChoices, "a different rng gives a different layout");
});

test("the preferred region is honoured when it has a grape with a profile", () => {
  for (const key of Object.keys(REGIONS)) {
    const ex = buildExercise(REGIONS, GRAPES, Math.random, key);
    assert.equal(ex.regionKey, key);
    assert.equal(ex.regionName, REGIONS[key].name);
  }
  const ex = buildExercise(FAKE_REGIONS, FAKE_GRAPES, Math.random, "south");
  assert.equal(ex.regionKey, "south");
  assert.ok(["Red B", "Red C"].includes(ex.grapeName));
});

test("a preferred region with no profiled grape, or an unknown key, falls back to a random region", () => {
  for (let n = 0; n < 50; n += 1) {
    const ex = buildExercise(FAKE_REGIONS, FAKE_GRAPES, Math.random, "empty");
    assert.ok(["north", "south"].includes(ex.regionKey));
    const ex2 = buildExercise(FAKE_REGIONS, FAKE_GRAPES, Math.random, "no-such-region");
    assert.ok(["north", "south"].includes(ex2.regionKey));
  }
  assert.equal(buildExercise({ empty: FAKE_REGIONS.empty }, FAKE_GRAPES, Math.random), null);
});

test("an exercise for a white grape has no tannin field; a red one does", () => {
  const white = buildExercise(FAKE_REGIONS, FAKE_GRAPES, fixedRng([0.99]), "north");
  assert.equal(white.grapeName, "White A");
  assert.equal(white.colour, "white");
  assert.deepEqual(structureFields(white), ["body", "acidity"]);
  assert.equal("tannin" in white.answers, false);

  const red = buildExercise(FAKE_REGIONS, FAKE_GRAPES, fixedRng([0.0]), "north");
  assert.equal(red.grapeName, "Rouge A");
  assert.equal(red.colour, "red");
  assert.deepEqual(structureFields(red), ["body", "acidity", "tannin"]);
  assert.deepEqual(red.answers, { body: "high", acidity: "medium", tannin: "high" });

  // Every white in the real data, whichever region: no tannin.
  for (let n = 0; n < 200; n += 1) {
    const ex = buildExercise(REGIONS, GRAPES, Math.random);
    if (ex.colour === "white") assert.equal("tannin" in ex.answers, false);
    else assert.ok(["low", "medium", "high"].includes(ex.answers.tannin));
  }
});

test("markExercise marks each structure field right or wrong", () => {
  const red = buildExercise(FAKE_REGIONS, FAKE_GRAPES, fixedRng([0.0]), "north");
  const m = markExercise(red, { body: "high", acidity: "low", tannin: "high", aromas: [] });
  assert.equal(m.fields.body.right, true);
  assert.equal(m.fields.acidity.right, false);
  assert.equal(m.fields.acidity.given, "low");
  assert.equal(m.fields.acidity.expected, "medium");
  assert.equal(m.fields.tannin.right, true);
  assert.equal(m.outOf, 4, "three structure fields plus one for aromas");
  assert.equal(m.score, 2);
  assert.equal(m.allRight, false);

  const white = buildExercise(FAKE_REGIONS, FAKE_GRAPES, fixedRng([0.99]), "north");
  const mw = markExercise(white, { body: "low", acidity: "high", aromas: [] });
  assert.equal("tannin" in mw.fields, false);
  assert.equal(mw.outOf, 3);
  assert.equal(mw.score, 2);

  const blank = markExercise(white, {});
  assert.equal(blank.score, 0);
  assert.equal(blank.fields.body.given, null);
});

test("markExercise counts correct and wrong aroma picks", () => {
  const red = buildExercise(FAKE_REGIONS, FAKE_GRAPES, fixedRng([0.0]), "north"); // Red A: r1..r5
  const m = markExercise(red, { aromas: ["r1", "r2", "zz", "yy"] });
  assert.equal(m.aromas.correctPicked, 2);
  assert.equal(m.aromas.wrongPicked, 2);
  assert.equal(m.aromas.missed, 3);
  const dup = markExercise(red, { aromas: ["r1", "r1", "R2 "] });
  assert.equal(dup.aromas.correctPicked, 2, "duplicates and spacing/case are ignored");
  assert.equal(dup.aromas.wrongPicked, 0);
});

test("aromas earn one point when at least half are picked and at most one wrong pick", () => {
  const red = buildExercise(FAKE_REGIONS, FAKE_GRAPES, fixedRng([0.0]), "north"); // 5 aromas: half = 2.5, so 3 needed
  const full = { body: "high", acidity: "medium", tannin: "high" };
  assert.equal(markExercise(red, { ...full, aromas: ["r1", "r2", "r3"] }).aromas.right, true);
  assert.equal(markExercise(red, { ...full, aromas: ["r1", "r2", "r3"] }).score, 4);
  assert.equal(markExercise(red, { ...full, aromas: ["r1", "r2", "r3"] }).allRight, true);
  assert.equal(markExercise(red, { ...full, aromas: ["r1", "r2"] }).aromas.right, false, "two of five is under half");
  assert.equal(markExercise(red, { ...full, aromas: ["r1", "r2"] }).score, 3);
  assert.equal(markExercise(red, { ...full, aromas: ["r1", "r2", "r3", "zz"] }).aromas.right, true, "one wrong pick is allowed");
  assert.equal(markExercise(red, { ...full, aromas: ["r1", "r2", "r3", "zz", "yy"] }).aromas.right, false, "two wrong picks is not");
  assert.equal(markExercise(red, { ...full, aromas: ["r1", "r2", "r3", "r4", "r5"] }).aromas.right, true);

  // Six aromas: exactly three counts as half.
  const six = buildExercise(FAKE_REGIONS, FAKE_GRAPES, fixedRng([0.99]), "south"); // Red C
  assert.equal(six.grapeName, "Red C");
  assert.equal(markExercise(six, { aromas: ["r10", "r11", "r12"] }).aromas.right, true);
  assert.equal(markExercise(six, { aromas: ["r10", "r11"] }).aromas.right, false);
});

test("explain gives two plain sentences using the notes and the region's typical style", () => {
  const red = buildExercise(FAKE_REGIONS, FAKE_GRAPES, fixedRng([0.0]), "north");
  const text = explain(red);
  assert.equal(text, "Rouge A (high body, medium acidity, high tannin): Red A note one. In North the typical style is: Light and fresh.");

  const white = buildExercise(FAKE_REGIONS, FAKE_GRAPES, fixedRng([0.99]), "north");
  const wt = explain(white);
  assert.ok(wt.startsWith("White A (low body, high acidity): White A note."));
  assert.ok(!wt.includes("tannin"));
  assert.ok(wt.endsWith("Light and fresh."));

  // Real data: never empty, mentions the grape and the region.
  for (let n = 0; n < 100; n += 1) {
    const ex = buildExercise(REGIONS, GRAPES, Math.random);
    const t = explain(ex);
    assert.ok(t.includes(ex.grapeName));
    assert.ok(t.includes(ex.regionName));
    assert.ok(t.includes(REGIONS[ex.regionKey].typicalStyle));
  }
  assert.equal(explain(null), "");
});
