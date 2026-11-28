import test from "node:test";
import assert from "node:assert/strict";
import { vinesPerHectare, skinPerJuice } from "../src/viticulture/logic.js";

test("vines per hectare: 1 m by 1 m is 10,000", () => {
  assert.equal(vinesPerHectare(1, 1), 10000);
  assert.equal(vinesPerHectare(2.5, 1.5), 2667);
  assert.equal(vinesPerHectare(0, 1), null);
});

test("smaller berries have more skin for each millilitre of juice", () => {
  assert.equal(skinPerJuice(16, 16), 1);
  assert.equal(skinPerJuice(8, 16), 2);
  assert.ok(skinPerJuice(20, 16) < 1);
});
