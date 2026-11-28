import test from "node:test";
import assert from "node:assert/strict";
import { fermentAt, spiritFor, afterFortify, woodPerLitre, SUGAR_PER_ABV } from "../src/winemaking/logic.js";

test("sugar ferments to alcohol at about 17 g/L for each 1%", () => {
  assert.ok(Math.abs(SUGAR_PER_ABV - 17) < 0.5);
  const done = fermentAt(220, 1);
  assert.equal(done.sugar, 0);
  assert.equal(Math.round(done.alcohol * 10) / 10, 13.1);
  const half = fermentAt(220, 0.5);
  assert.equal(half.sugar, 110);
});

test("fortifying: more spirit for a stronger target, nothing for an impossible one", () => {
  const a = spiritFor(6, 77, 19);
  const b = spiritFor(6, 77, 21);
  assert.ok(a > 0 && b > a);
  assert.equal(spiritFor(6, 77, 80), null);
  const r = afterFortify(6, 100, 77, a);
  assert.equal(Math.round(r.alcohol), 19);
  assert.ok(r.sugar < 100);
});

test("bigger barrels put less wood against each litre", () => {
  assert.equal(woodPerLitre(225), 1);
  assert.ok(woodPerLitre(500) < 1 && woodPerLitre(5000) < woodPerLitre(500));
  assert.equal(Math.round(woodPerLitre(225 * 8) * 100), 50);
});

test("white is pressed before fermenting, red after", async () => {
  const { ROUTES } = await import("../src/winemaking/routes.js");
  const at = (route, word) => ROUTES[route].steps.findIndex(([name]) => name.toLowerCase().includes(word));
  assert.ok(at("white", "press") < at("white", "ferment"));
  assert.ok(at("red", "press") > at("red", "ferment"));
  assert.ok(at("rose", "drain") < at("rose", "finish"));
});
