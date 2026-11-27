import test from "node:test";
import assert from "node:assert/strict";
import { STAGES, monthsOf } from "../src/data/calendar.js";

test("months wrap past December", () => {
  assert.deepEqual(monthsOf([11, 3]), [11, 12, 1, 2, 3]);
  assert.deepEqual(monthsOf([5, 7]), [5, 6, 7]);
});

test("every stage has months in both hemispheres, and the south runs about six months behind", () => {
  for (const s of STAGES) {
    for (const half of ["north", "south"]) for (const m of s[half]) assert.ok(Number.isInteger(m) && m >= 1 && m <= 12, `${s.id} ${half}`);
    const shift = (s.south[0] - s.north[0] + 12) % 12;
    assert.ok(shift >= 5 && shift <= 7, `${s.id}: ${shift} months apart`);
  }
});
