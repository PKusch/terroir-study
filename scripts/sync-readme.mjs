// Brings the counts the README quotes in line with the data, so adding a
// region, place, grape, question or test never leaves the README behind.
//
//   npm run readme
//   node scripts/sync-readme.mjs --check   # CI: fail if a count is stale, write nothing
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { QUIZ_QUESTIONS as Q } from "../src/data/quiz.js";
import { REGIONS } from "../src/data/regions.js";
import { PLACES } from "../src/data/places.js";
import { GRAPES } from "../src/data/grapes.js";

const path = new URL("../README.md", import.meta.url);
let s = readFileSync(path, "utf8");
const by = {};
for (const q of Q) { const c = q.country ?? "France"; by[c] = (by[c] || 0) + 1; }
const mc = Q.filter((q) => q.options).length;
const regions = Object.keys(REGIONS).length;
const places = Object.values(PLACES).reduce((n, p) => n + Object.keys(p).length, 0);
const grapes = Object.keys(GRAPES).length;
// Count test() calls in tests/*.test.mjs: the same number node --test reports.
const testsDir = new URL("../tests/", import.meta.url);
const tests = readdirSync(testsDir).filter((f) => f.endsWith(".test.mjs"))
  .reduce((n, f) => n + (readFileSync(new URL(f, testsDir), "utf8").match(/^test\(/gm) ?? []).length, 0);

s = s.replace(/🗺️ \*\*\d+\*\* regions/, `🗺️ **${regions}** regions`)
  .replace(/📍 \*\*\d+\*\* places on the map/, `📍 **${places}** places on the map`)
  .replace(/❓ \*\*\d+\*\* quiz questions/, `❓ **${Q.length}** quiz questions`)
  .replace(/🍇 \*\*\d+\*\* grapes/, `🍇 **${grapes}** grapes`)
  .replace(/✅ \*\*\d+\*\* tests/, `✅ **${tests}** tests`)
  .replace(/^\d+ tests cover the pure logic/m, `${tests} tests cover the pure logic`)
  .replace(/tasting descriptors \(\d+ grapes\)/, `tasting descriptors (${grapes} grapes)`)
  .replace(/\d+ places marked across \d+ regions/, `${places} places marked across ${regions} regions`);
const order = ["France", "Italy", "Spain", "Germany", "Austria", "Portugal", "Hungary", "Greece", "New World"];
s = s.replace(/Expand quiz bank to 50\+ questions \(\d+: [^)]*\)/,
  `Expand quiz bank to 50+ questions (${Q.length}: ${order.map((c) => `${by[c]} ${c}`).join(", ")}; ${mc} of them multiple choice)`);
if (process.argv.includes("--check")) {
  // CI: fail, without writing, when a count the README quotes has fallen behind.
  if (s !== readFileSync(path, "utf8")) {
    console.error("README.md quotes out-of-date counts; run `npm run readme` and commit the result");
    process.exit(1);
  }
  console.log("README counts are current");
  process.exit(0);
}
writeFileSync(path, s);
console.log(`${regions} regions, ${places} places, ${Q.length} questions (${mc} multiple choice), ${grapes} grapes, ${tests} tests`);
