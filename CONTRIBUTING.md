# Contributing

The most useful thing you can send is something the app gets wrong: a wine fact
that is off, a quiz question whose answer is not right, or a region whose map or
grapes are misplaced. There is a "wrong fact" issue form for exactly this — give
the region or question and what it should say, with a source if you have one.

## Where things live

- `src/data/` holds the facts: regions and their climate, soils and grapes;
  the grape profiles; the place coordinates; and the quiz questions. This is
  what to fix for a wrong fact.
- `src/*.js` is the pure logic — quiz progress and spaced repetition, the taste
  marker, backups, the map maths — with no React or browser, so it is tested
  directly.
- `src/*.jsx` is the screens. Every form field on them needs a name a screen
  reader can read out (a `<label htmlFor>`, an `aria-label`, or a label wrapped
  round a tick box); a test checks this.
- Exam practice that is not a region fact lives in its own file:
  `src/data/styles.js` for the Service and Food cards, `src/notedrill.js` for
  the tasting-note mistakes WSET lists, `src/lookalike.js` for which aroma
  words count as one smell in the look-alike grape drill, and `src/fullwritten.js` for the
  service and food parts of the full written question. A new point in any of
  them needs a source, like a region fact.

## Adding a question

Every fact in the app was checked against a source (see "How far to trust the
facts" in the README), so a new question should be built from a fact you can
point to, not from memory.

- Add it to the end of `src/data/quiz.js`. The `id` is the country's two letters
  and the next number, such as `hu-18`, and it never changes: progress is kept
  against it.
- A multiple-choice question has four options, an `answer` index, a `region` key
  and an `explanation` that says why. The quiz and the mock exam shuffle the
  options, so their stored order does not matter to the player.
- A grape profile's aromas should be the grape's own. Butter, toast, vanilla,
  cedar, brioche and the like come from the cellar; list one only if the notes
  say where it comes from (a test checks this).
- A question about serving, storing, faults or food pairing belongs to no
  region: give it `topic: "service"`, no `region` or `country`, and an id that
  starts with `sv-`.
- A general climate or viticulture question works the same way, with
  `topic: "vineyard"` and an id that starts with `vy-`.
- After a batch of new questions, have them checked again by someone who did
  not write them, against the same notes and sources: the writer tends to read
  back what they meant, not what they wrote.
- Prefer a question that asks why, or what a grower or winemaker should do, over
  one that only asks for a number: the exam rewards explaining causes.
- Make the wrong options as long and as plausible as the right one. `npm test`
  fails if any question has the right answer as the single longest option, and
  `npm run quizcheck` lists the ones that do.
- Every region needs at least thirteen questions (a test checks), and every fact
  should come from a rule book or an official page; say in the README's "How far
  to trust the facts" when one rests on a secondary source.
- Use the newest rule book you can find, and note its date. Rules change often:
  in 2026 alone, Castelli di Jesi raised its vine density and Asti added a rosé.
- A new multiple-choice question joins the mock exams automatically. Papers 1 and
  2 are frozen and do not change; the new question lands on one of the later
  papers, which appear as the bank grows.

## Telling people what changed

A change someone studying would notice (a new drill, a fixed fact, a new
screen) gets one line in `CHANGELOG.md`, under the day it went live.

## Running it

```bash
npm install
npm test           # the tests over the data and the logic, no browser needed
npm run dev        # the app, for a visual change
npm run readme     # update the counts the README quotes after adding content
npm run coverage   # questions per region, fewest first, per topic, and why vs recall
npm run quizcheck  # quiz questions where the right answer is the longest option
```

A map or quiz-flow change should be tried in the browser; a data or logic fix is
covered by `npm test`.

## In plain words

Write anything a person reads so it says what a thing does and why, not how. One
idea per sentence. Put the plain meaning next to any number.
