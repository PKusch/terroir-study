import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { FOOD_EFFECTS } from "../src/data/styles.js";

// The diagram files are JSX, so read their data as text rather than import.
const src = (f) => readFileSync(new URL(`../src/styles/${f}`, import.meta.url), "utf8");

test("traditional and transfer share the bottle fermentation; only traditional riddles and disgorges", () => {
  const m = src("Methods.jsx");
  const block = (id) => m.slice(m.indexOf(`${id}: {`), m.indexOf("end:", m.indexOf(`${id}: {`)));
  assert.match(block("traditional"), /Second fermentation in the bottle/);
  assert.match(block("transfer"), /Second fermentation in the bottle/);
  assert.match(block("traditional"), /Riddling/);
  assert.doesNotMatch(block("transfer"), /Riddling|Disgorging/);
});

test("the food grid has a row for every food card", () => {
  const g = src("FoodGrid.jsx");
  for (const f of FOOD_EFFECTS) {
    const name = f.name.replace(" in the food", "").replace("Acidity in the food", "Acidity");
    assert.ok(g.includes(`["${name}"`), `no grid row for ${f.name}`);
  }
});

test("the sweetness scale puts Extra Dry above Brut", () => {
  const d = src("Dosage.jsx");
  assert.match(d, /"Brut": \[0, 12\]/);
  assert.match(d, /"Extra Dry": \[12, 17\]/);
});
