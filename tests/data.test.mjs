import { test } from "node:test";
import assert from "node:assert/strict";

import { REGIONS } from "../src/data/france.js";
import { QUIZ_QUESTIONS } from "../src/data/quiz.js";
import { FRANCE_REGION_PATHS } from "../src/data/france-map.js";

// The map, the region facts and the quiz are three files that have to agree.
// These checks run before every build so a typo in a region key or an answer
// index cannot reach the published site.

const REQUIRED = ["name", "climate", "climateDetail", "keyGrapes", "subRegions", "soils", "viticultureNotes", "winemaking", "typicalStyle", "qualityLevels", "whyConnection", "color"];

test("every region has every field the panels read", () => {
  for (const [key, r] of Object.entries(REGIONS)) {
    for (const f of REQUIRED) assert.ok(r[f] !== undefined && r[f] !== "", `${key}.${f} is missing`);
    assert.ok(Array.isArray(r.keyGrapes.red) && Array.isArray(r.keyGrapes.white), `${key}.keyGrapes needs red and white lists`);
    assert.ok(r.keyGrapes.red.length + r.keyGrapes.white.length > 0, `${key} names no grapes`);
    assert.ok(r.subRegions.length > 0 && r.qualityLevels.length > 0, `${key} needs sub-regions and quality levels`);
    assert.match(r.color, /^#[0-9A-Fa-f]{6}$/, `${key}.color is not a hex colour`);
  }
});

test("the map draws exactly the regions the data describes", () => {
  assert.deepEqual(Object.keys(FRANCE_REGION_PATHS).sort(), Object.keys(REGIONS).sort());
  for (const [key, p] of Object.entries(FRANCE_REGION_PATHS)) {
    assert.match(p.d, /^M[\d.]+,[\d.]+( L[\d.]+,[\d.]+)+ Z$/, `${key} polygon is malformed`);
    assert.equal(p.label.length, 2, `${key} label needs x and y`);
  }
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
