import { test } from "node:test";
import assert from "node:assert/strict";

import { regionProps } from "../src/a11y.js";

const press = (props, key) => {
  let prevented = false;
  props.onKeyDown({ key, preventDefault: () => { prevented = true; } });
  return prevented;
};

test("a region is a named, focusable button that says whether it is selected", () => {
  const p = regionProps({ name: "Burgundy", active: true, onSelect: () => {} });
  assert.equal(p.role, "button");
  assert.equal(p.tabIndex, 0);
  assert.equal(p["aria-label"], "Burgundy");
  assert.equal(p["aria-pressed"], true);
  assert.equal(regionProps({ name: "Burgundy", active: undefined, onSelect: () => {} })["aria-pressed"], false);
});

test("Enter and Space choose the region, and the page does not scroll on Space", () => {
  let chosen = 0;
  const p = regionProps({ name: "Rioja", active: false, onSelect: () => { chosen++; } });
  assert.equal(press(p, "Enter"), true);
  assert.equal(press(p, " "), true);
  assert.equal(chosen, 2);
});

test("other keys do nothing, so Tab still moves on", () => {
  let chosen = 0;
  const p = regionProps({ name: "Rioja", active: false, onSelect: () => { chosen++; } });
  for (const k of ["Tab", "a", "Escape", "ArrowDown"]) assert.equal(press(p, k), false);
  assert.equal(chosen, 0);
});

test("in a quiz the region is not named, focusable or clickable by keyboard", () => {
  const p = regionProps({ name: "Barolo", active: false, onSelect: () => {}, quizMode: true });
  assert.deepEqual(p, {});
});

test("activateOnKey is what lets a plain box with a click handler be used from the keyboard", async () => {
  const { activateOnKey } = await import("../src/a11y.js");
  let n = 0;
  const h = activateOnKey(() => { n++; });
  h({ key: "Enter", preventDefault() {} });
  h({ key: " ", preventDefault() {} });
  h({ key: "x", preventDefault() {} });
  assert.equal(n, 2);
});

test("the map is a named group, and unnamed in a quiz", async () => {
  const { mapProps } = await import("../src/a11y.js");
  assert.deepEqual(mapProps({ country: "Italy" }), { role: "group", "aria-label": "Italy wine regions" });
  assert.deepEqual(mapProps({ country: "Italy", quizMode: true }), {});
});
