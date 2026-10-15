// Lists multiple-choice quiz questions where the correct option is also the
// longest one. Students can guess those by length alone, so this is the to-do
// list for making the wrong options as full as the right one.
//
//   npm run quizcheck
import { QUIZ_QUESTIONS } from "../src/data/quiz.js";

const choice = QUIZ_QUESTIONS.filter((q) => q.type !== "map");
const giveaways = choice.filter((q) => {
  const longest = Math.max(...q.options.map((o) => o.length));
  const right = q.options[q.answer].length;
  return right === longest && q.options.filter((o) => o.length === longest).length === 1;
});

console.log(`${giveaways.length} of ${choice.length} multiple-choice questions have the right answer as the single longest option.`);
for (const q of giveaways) {
  const lens = q.options.map((o) => o.length).join("/");
  console.log(`  ${q.id}  right is #${q.answer + 1}  lengths ${lens}`);
}
