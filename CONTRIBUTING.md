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
- `src/*.jsx` is the screens.

## Adding a question

Every fact in the app was checked against a source (see "How far to trust the
facts" in the README), so a new question should be built from a fact you can
point to, not from memory.

- Add it to the end of `src/data/quiz.js`. The `id` is the country's two letters
  and the next number, such as `hu-18`, and it never changes: progress is kept
  against it.
- A multiple-choice question has four options, an `answer` index, a `region` key
  and an `explanation` that says why. Put the right answer in different places
  from question to question.
- Make the wrong options as long and as plausible as the right one. `npm test`
  fails if more than one question in ten has the right answer as the longest
  option, and `npm run quizcheck` lists the ones that do.
- A new multiple-choice question joins the mock exams automatically. Papers 1 and
  2 are frozen and do not change; the new question lands on Paper 3 or 4.

## Running it

```bash
npm install
npm test     # 81 tests over the pure logic, no browser needed
npm run dev  # the app, for a visual change
npm run quizcheck  # quiz questions where the right answer is the longest option
```

A map or quiz-flow change should be tried in the browser; a data or logic fix is
covered by `npm test`.

## In plain words

Write anything a person reads so it says what a thing does and why, not how. One
idea per sentence. Put the plain meaning next to any number.
