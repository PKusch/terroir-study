import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { TAB_IDS, tabFromHash } from "../src/tabs.js";

test("a link's #tab opens that tab, and anything else opens Explore", () => {
  assert.equal(tabFromHash("#written"), "written");
  assert.equal(tabFromHash("#Styles"), "styles");
  assert.equal(tabFromHash(""), "explore");
  assert.equal(tabFromHash("#nothing"), "explore");
  assert.equal(tabFromHash(undefined), "explore");
});

test("every tab the app shows can be linked to", () => {
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const shown = [...app.slice(app.indexOf("const modes = [")).matchAll(/\{ id: "([a-z]+)", label:/g)].map((m) => m[1]);
  assert.deepEqual(shown, TAB_IDS);
});
