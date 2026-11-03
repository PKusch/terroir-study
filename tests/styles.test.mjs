import test from "node:test";
import assert from "node:assert/strict";
import { STYLE_FAMILIES, FORTIFIED_STYLES, SPARKLING_METHODS } from "../src/data/styles.js";
import { REGIONS } from "../src/data/regions.js";

// The Styles tab sets methods side by side, so every card in a family should
// answer the same questions, and every "Study" link must reach a real region.
test("every style card links only to regions that exist", () => {
  for (const f of STYLE_FAMILIES) {
    for (const item of f.items) {
      for (const key of item.regions) assert.ok(REGIONS[key], `${item.id}: unknown region ${key}`);
    }
  }
});

test("style ids are unique and every card has at least three rows", () => {
  const ids = STYLE_FAMILIES.flatMap((f) => f.items.map((i) => i.id));
  assert.equal(new Set(ids).size, ids.length);
  for (const f of STYLE_FAMILIES) for (const item of f.items) assert.ok(Object.keys(item.rows).length >= 3, item.id);
});

test("both families are filled in", () => {
  assert.ok(FORTIFIED_STYLES.length >= 6);
  assert.ok(SPARKLING_METHODS.length >= 5, "the five ways of making a sparkling wine");
});
