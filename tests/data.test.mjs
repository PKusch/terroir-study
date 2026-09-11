import { test } from "node:test";
import assert from "node:assert/strict";

import { REGIONS } from "../src/data/france.js";
import { ITALY_REGIONS } from "../src/data/italy.js";
import { QUIZ_QUESTIONS } from "../src/data/quiz.js";
import { FRANCE_REGION_PATHS } from "../src/data/france-map.js";
import { ITALY_REGION_PATHS } from "../src/data/italy-map.js";

// The map, the region facts and the quiz are three files that have to agree.
// These checks run before every build so a typo in a region key or an answer
// index cannot reach the published site.

const REQUIRED = ["name", "climate", "climateDetail", "keyGrapes", "subRegions", "soils", "viticultureNotes", "winemaking", "typicalStyle", "qualityLevels", "whyConnection", "color"];

const checkRegions = (regions) => {
  for (const [key, r] of Object.entries(regions)) {
    for (const f of REQUIRED) assert.ok(r[f] !== undefined && r[f] !== "", `${key}.${f} is missing`);
    assert.ok(Array.isArray(r.keyGrapes.red) && Array.isArray(r.keyGrapes.white), `${key}.keyGrapes needs red and white lists`);
    assert.ok(r.keyGrapes.red.length + r.keyGrapes.white.length > 0, `${key} names no grapes`);
    assert.ok(r.subRegions.length > 0 && r.qualityLevels.length > 0, `${key} needs sub-regions and quality levels`);
    assert.match(r.color, /^#[0-9A-Fa-f]{6}$/, `${key}.color is not a hex colour`);
  }
};

// A polygon is one or more closed sub-paths: "M x,y L x,y ... Z" (Southern Italy
// draws the mainland and Sicily as two sub-paths in one shape).
const POLYGON = /^M[\d.]+,[\d.]+( L[\d.]+,[\d.]+)+ Z( M[\d.]+,[\d.]+( L[\d.]+,[\d.]+)+ Z)*$/;

const checkPaths = (paths, regions) => {
  assert.deepEqual(Object.keys(paths).sort(), Object.keys(regions).sort());
  for (const [key, p] of Object.entries(paths)) {
    assert.match(p.d, POLYGON, `${key} polygon is malformed`);
    assert.equal(p.label.length, 2, `${key} label needs x and y`);
  }
};

test("every French region has every field the panels read", () => {
  checkRegions(REGIONS);
});

test("every Italian region has every field the panels read, and says it is Italian", () => {
  checkRegions(ITALY_REGIONS);
  for (const [key, r] of Object.entries(ITALY_REGIONS)) assert.equal(r.country, "Italy", `${key}.country`);
});

test("the France map draws exactly the regions the data describes", () => {
  checkPaths(FRANCE_REGION_PATHS, REGIONS);
});

test("the Italy map draws exactly the regions the data describes", () => {
  checkPaths(ITALY_REGION_PATHS, ITALY_REGIONS);
});

test("no region key is shared between France and Italy", () => {
  const shared = Object.keys(REGIONS).filter((k) => k in ITALY_REGIONS);
  assert.deepEqual(shared, [], "keys must be unique across countries: the panels read one merged table");
  const colours = [...Object.values(REGIONS), ...Object.values(ITALY_REGIONS)].map((r) => r.color.toUpperCase());
  assert.equal(new Set(colours).size, colours.length, "every region needs its own colour");
});

test("every quiz question is answerable and points at a real region", () => {
  assert.ok(QUIZ_QUESTIONS.length >= 14);
  const ids = QUIZ_QUESTIONS.map((q) => q.id);
  assert.equal(new Set(ids).size, ids.length, "question ids must be unique");
  for (const q of QUIZ_QUESTIONS) {
    assert.match(q.id, /^[a-z]{2}-\d{2,3}$/, `${q.id}: id shape`);
    assert.ok(["map", "connection", "scenario"].includes(q.type), `${q.id}: unknown type`);
    assert.ok(q.question.trim().length > 10 && q.explanation.trim().length > 10, `${q.id}: needs a question and an explanation`);
    if (q.type === "map") {
      assert.ok(REGIONS[q.answer], `${q.id}: map answer '${q.answer}' is not a region`);
    } else {
      assert.equal(q.options.length, 4, `${q.id}: four options`);
      assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4, `${q.id}: answer index`);
      assert.ok(REGIONS[q.region], `${q.id}: region '${q.region}' is not a region`);
      assert.equal(new Set(q.options).size, 4, `${q.id}: duplicate options`);
    }
  }
});

test("every country in the region table has a map, and every map a country", async () => {
  // maps.jsx is JSX, so read it as text rather than importing it here.
  const { readFileSync } = await import("node:fs");
  const src = readFileSync(new URL("../src/maps.jsx", import.meta.url), "utf8");
  const { COUNTRIES } = await import("../src/data/regions.js");
  const listed = [...src.matchAll(/(\w+): \w+Map/g)].map((m) => m[1]).sort();
  assert.deepEqual(listed, Object.keys(COUNTRIES).sort());
});
