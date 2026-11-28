import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { PRINCIPLES } from "../src/data/principles.js";
import { SECTION_VISUALS } from "../src/data/sectionVisuals.js";

// Diagram titles, read from the source so the test needs no React.
const titles = new Set(["The vine's year"]);
for (const dir of ["climate", "viticulture", "winemaking", "law"]) {
  for (const f of readdirSync(new URL(`../src/${dir}/`, import.meta.url))) {
    if (!f.endsWith(".jsx")) continue;
    for (const m of readFileSync(new URL(`../src/${dir}/${f}`, import.meta.url), "utf8").matchAll(/title="([^"]+)"/g)) titles.add(m[1]);
  }
}

test("every summary card on a visual page has an icon, and every link points to a real diagram", () => {
  for (const [topic, map] of Object.entries(SECTION_VISUALS)) {
    const p = PRINCIPLES.find((x) => x.id === topic);
    assert.ok(p, topic);
    assert.deepEqual(Object.keys(map).sort(), p.sections.map((s) => s.title).sort(), `${topic}: one entry per section`);
    for (const [title, v] of Object.entries(map)) {
      assert.ok(v.icon, `${topic}: ${title} has no icon`);
      for (const t of v.see) assert.ok(titles.has(t), `${topic}: '${t}' is not a diagram title`);
    }
  }
});
