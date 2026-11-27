import test from "node:test";
import assert from "node:assert/strict";
import { round1, units, usDrinks } from "../src/units.js";

test("the NHS example: a 750 ml bottle at 13.5% is about 10 units", () => {
  assert.equal(round1(units(13.5, 750)), 10.1);
  assert.equal(Math.round(units(13.5, 750)), 10);
});

test("units follow ABV × ml ÷ 1,000", () => {
  assert.equal(units(12, 175), 2.1);
  assert.equal(units(40, 25), 1);
  assert.equal(units(0, 750), 0);
});

test("a US standard drink is 14 g: 5 oz of 12% wine is about one", () => {
  assert.equal(round1(usDrinks(12, 148)), 1);
});

test("nonsense in, nothing out", () => {
  assert.equal(units("x", 750), null);
  assert.equal(units(-1, 750), null);
  assert.equal(units(120, 750), null);
  assert.equal(usDrinks(12, -5), null);
});
