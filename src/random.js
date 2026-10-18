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
