// Prints how many quiz questions each region has, fewest first, so the thin
// regions are easy to find when it is time to write more.
//
//   node scripts/coverage.mjs          (a table)
//   node scripts/coverage.mjs --md     (the same as a Markdown table)
import { QUIZ_QUESTIONS } from "../src/data/quiz.js";

const counts = new Map();
for (const q of QUIZ_QUESTIONS) {
  if (!q.region) continue;
  counts.set(q.region, (counts.get(q.region) ?? 0) + 1);
}
const rows = [...counts].sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));

if (process.argv.includes("--md")) {
  console.log("| Region | Questions |\n|:--|--:|");
  for (const [region, n] of rows) console.log(`| ${region} | ${n} |`);
} else {
  for (const [region, n] of rows) console.log(`${String(n).padStart(4)}  ${region}`);
}
