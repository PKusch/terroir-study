import test from "node:test";
import assert from "node:assert/strict";
import { withShuffledOptions } from "../src/random.js";

test("withShuffledOptions keeps every option and moves the answer with the right one", () => {
  const q = { id: "x", options: ["right", "b", "c", "d"], answer: 0 };
  let n = 0;
  const rng = () => [0.1, 0.9, 0.4][n++ % 3];
  const s = withShuffledOptions(q, rng);
  assert.deepEqual([...s.options].sort(), [...q.options].sort());
  assert.equal(s.options[s.answer], "right");
  assert.deepEqual(q.options, ["right", "b", "c", "d"], "the original is not changed");
});

test("over many draws the right answer lands in every position", () => {
  const q = { options: ["right", "b", "c", "d"], answer: 0 };
  const seen = new Set();
  for (let i = 0; i < 200; i++) seen.add(withShuffledOptions(q).answer);
  assert.deepEqual([...seen].sort(), [0, 1, 2, 3]);
});

test("map questions come back unchanged", () => {
  const q = { id: "m", type: "map", answer: "rioja" };
  assert.equal(withShuffledOptions(q), q);
});
