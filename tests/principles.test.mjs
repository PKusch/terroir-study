import test from "node:test";
import assert from "node:assert/strict";
import { PRINCIPLES } from "../src/data/principles.js";
import { SYLLABUS } from "../src/data/syllabus.js";
import { TAB_IDS } from "../src/tabs.js";

test("each principle has sections with points, and every source is a web address", () => {
  const ids = PRINCIPLES.map((p) => p.id);
  assert.deepEqual(ids, ["tasting", "climate", "viticulture", "winemaking", "law", "price", "health"]);
  for (const p of PRINCIPLES) {
    assert.ok(p.intro.length > 40, p.id);
    assert.ok(p.sections.length >= 3, `${p.id}: too few sections`);
    for (const s of p.sections) assert.ok(s.points.length >= 1 && s.points.every((x) => x.trim().length > 10), `${p.id}: ${s.title}`);
    assert.ok(p.sources.length >= 1, `${p.id}: no source`);
    for (const src of p.sources) assert.match(src.url, /^https:\/\//, `${p.id}: ${src.title}`);
  }
});

test("every Practise and syllabus link opens a tab that exists", () => {
  for (const p of PRINCIPLES) for (const [label, tab] of p.practise ?? []) assert.ok(TAB_IDS.includes(tab), `${p.id}: ${label} → ${tab}`);
  for (const s of SYLLABUS) for (const [label, tab] of s.links) assert.ok(TAB_IDS.includes(tab), `${s.id}: ${label} → ${tab}`);
});

test("the syllabus follows WSET's two units and six learning outcomes", () => {
  assert.equal(SYLLABUS.length, 6);
  assert.equal(SYLLABUS.filter((s) => s.unit.startsWith("Unit 1")).length, 5);
  for (const s of SYLLABUS) if (s.status === "partial") assert.ok(s.gap, `${s.id}: a partial part must say what is missing`);
});
