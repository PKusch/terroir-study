import test from "node:test";
import assert from "node:assert/strict";
import { varietyLabels } from "../src/law/logic.js";
import { RULES, LEVELS, NESTS, TIMELINE } from "../src/law/data.js";

test("one grape at 85% may be named alone in the EU, not at 80%", () => {
  assert.ok(varietyLabels({ Merlot: 85, Cabernet: 15 }, "eu").some((l) => l.text === "Merlot"));
  assert.ok(!varietyLabels({ Merlot: 80, Cabernet: 20 }, "eu").some((l) => l.text === "Merlot"));
});

test("the USA needs only 75% for one grape", () => {
  assert.ok(varietyLabels({ Merlot: 76, Cabernet: 24 }, "us").some((l) => l.text === "Merlot"));
});

test("Australia: named grapes reach 85% in order, with no larger grape skipped", () => {
  const l = varietyLabels({ Semillon: 70, Chardonnay: 20, "Sauvignon Blanc": 10 }, "au");
  assert.ok(l.some((x) => x.text === "Semillon Chardonnay"));
  assert.ok(l.some((x) => x.text === "Semillon Chardonnay Sauvignon Blanc"));
  assert.ok(!l.some((x) => x.text === "Semillon Sauvignon Blanc"));
});

test("EU blends list every grape, most first", () => {
  assert.ok(varietyLabels({ Merlot: 30, Cabernet: 60, Franc: 10 }, "eu").some((l) => l.text === "Cabernet–Merlot–Franc"));
});

test("law data is complete", () => {
  for (const m of RULES.markets) for (const r of m.rules) assert.ok(r.pct > 0 && r.pct <= 100 && r.say, `${m.id}: ${r.claim}`);
  for (const c of LEVELS.countries) assert.ok(c.pdo.length && c.pgi.length && c.none.length, c.name);
  for (const e of NESTS.examples) assert.ok(e.levels.length >= 3, e.id);
  const years = TIMELINE.events.map((e) => e.year);
  assert.deepEqual(years, [...years].sort((a, b) => a - b));
});
