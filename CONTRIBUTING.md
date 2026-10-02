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

## Running it

```bash
npm install
npm test     # 81 tests over the pure logic, no browser needed
npm run dev  # the app, for a visual change
```

A map or quiz-flow change should be tried in the browser; a data or logic fix is
covered by `npm test`.

## In plain words

Write anything a person reads so it says what a thing does and why, not how. One
idea per sentence. Put the plain meaning next to any number.
