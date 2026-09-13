import { test } from "node:test";
import assert from "node:assert/strict";

import { REGIONS } from "../src/data/regions.js";
import { summaryFor } from "../src/summary.js";

test("every region prints as nine filled sections with its grapes and quality ladder", () => {
  for (const key of Object.keys(REGIONS)) {
    const s = summaryFor(key, REGIONS);
    assert.equal(s.title, REGIONS[key].name);
    assert.equal(s.sections.length, 9, key);
    for (const [label, text] of s.sections) assert.ok(label && text && text.trim().length > 0, `${key}: ${label} is empty`);
    const grapes = s.sections.find(([l]) => l === "Grapes")[1];
    for (const g of [...REGIONS[key].keyGrapes.red, ...REGIONS[key].keyGrapes.white]) assert.ok(grapes.includes(g), `${key}: ${g} missing`);
    assert.ok(s.sections.find(([l]) => l === "Quality levels")[1].includes(REGIONS[key].qualityLevels.at(-1)), key);
  }
  assert.equal(summaryFor("atlantis", REGIONS), null);
});
