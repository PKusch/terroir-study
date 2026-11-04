// A copy of the list in random order (Fisher-Yates). Never changes the original.
// `rng` returns a number from 0 up to but not including 1, so a test can pass a
// fixed one.
export function shuffled(list, rng = Math.random) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// A multiple-choice question with its options in random order and `answer`
// moved to follow the right option. Map questions come back unchanged. The
// stored order puts the right answer first more often than last, so showing it
// as written would reward always picking the first option.
export function withShuffledOptions(q, rng = Math.random) {
  if (!q?.options) return q;
  const order = shuffled(q.options.map((_, i) => i), rng);
  return { ...q, options: order.map((i) => q.options[i]), answer: order.indexOf(q.answer) };
}
