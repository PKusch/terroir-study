// Prints how many quiz questions each region has, fewest first, so the thin
// regions are easy to find when it is time to write more. Map questions count
// for the region they point at, as they do in the data test, and a region
// with no questions at all is listed with 0.
//
//   node scripts/coverage.mjs          (a table)
//   node scripts/coverage.mjs --md     (the same as a Markdown table)
import { QUIZ_QUESTIONS } from "../src/data/quiz.js";
import { REGIONS } from "../src/data/regions.js";

const counts = new Map(Object.keys(REGIONS).map((k) => [k, 0]));
const topics = new Map();
for (const q of QUIZ_QUESTIONS) {
  const key = q.region ?? q.answer;
  if (counts.has(key)) counts.set(key, counts.get(key) + 1);
  if (q.topic) topics.set(q.topic, (topics.get(q.topic) ?? 0) + 1);
}
const rows = [...counts].sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));

if (process.argv.includes("--md")) {
  console.log("| Region | Questions |\n|:--|--:|");
  for (const [region, n] of rows) console.log(`| ${region} | ${n} |`);
} else {
  for (const [region, n] of rows) console.log(`${String(n).padStart(4)}  ${region}`);
  console.log("\nTopics: " + [...topics].map(([t, n]) => `${t} ${n}`).join(", "));
}
