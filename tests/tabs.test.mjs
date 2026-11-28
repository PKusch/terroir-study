import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { TAB_IDS, tabFromHash } from "../src/tabs.js";

test("a link's #tab opens that tab, and anything else opens the home page", () => {
  assert.equal(tabFromHash("#written"), "written");
  assert.equal(tabFromHash("#Styles"), "styles");
  assert.equal(tabFromHash("#explore"), "explore");
  assert.equal(tabFromHash(""), "home");
  assert.equal(tabFromHash("#nothing"), "home");
  assert.equal(tabFromHash(undefined), "home");
});

test("every tab the app shows can be linked to", () => {
  const app = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
  const shown = [...app.slice(app.indexOf("const modes = [")).matchAll(/\{ id: "([a-z]+)", label:/g)].map((m) => m[1]);
  assert.deepEqual(shown, TAB_IDS);
});

test("the browser title names the tab, and the home page keeps the plain title", async () => {
  const { tabTitle } = await import("../src/tabs.js");
  assert.equal(tabTitle("home"), "Terroir Study | WSET Level 3");
  assert.equal(tabTitle("explore"), "Explore · Terroir Study | WSET Level 3");
  assert.equal(tabTitle("written"), "Written answers · Terroir Study | WSET Level 3");
  for (const id of TAB_IDS) assert.match(tabTitle(id), /Terroir Study/);
  assert.equal(tabTitle("nothing"), "Terroir Study | WSET Level 3");
});

test("a link can name part of a tab after a slash", async () => {
  const { tabFromHash, subFromHash } = await import("../src/tabs.js");
  assert.equal(tabFromHash("#principles/law"), "principles");
  assert.equal(subFromHash("#principles/law"), "law");
  assert.equal(subFromHash("#principles"), "");
  assert.equal(tabFromHash("#nowhere/law"), "home");
});
