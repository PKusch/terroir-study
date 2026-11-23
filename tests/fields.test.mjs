import test from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";

// Every form field on every screen has a name a screen reader can read out:
// a <label htmlFor> that points at its id, an aria-label, or (for a tick box)
// a <label> wrapped round it. This reads the screen files as text, so a new
// field without a name fails here before it reaches anyone.
const dir = new URL("../src/", import.meta.url);
const screens = readdirSync(dir).filter((f) => f.endsWith(".jsx"));

// The text of one tag, from "<input" to its closing ">", skipping any ">" that
// sits inside { } in the JSX.
function tagAt(src, start) {
  let depth = 0;
  for (let i = start; i < src.length; i++) {
    const c = src[i];
    if (c === "{") depth++;
    else if (c === "}") depth--;
    else if (c === ">" && depth === 0) return src.slice(start, i + 1);
  }
  return src.slice(start);
}

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}=("([^"]*)"|\\{((?:[^{}]|\\{[^{}]*\\})*)\\})`))?.[1] ?? null;

test("every input, text box and drop-down on every screen has a name", () => {
  const unnamed = [];
  for (const file of screens) {
    const src = readFileSync(new URL(file, dir), "utf8");
    for (const m of src.matchAll(/<(input|textarea|select)\b/g)) {
      const tag = tagAt(src, m.index);
      if (attr(tag, "aria-label")) continue;
      const type = attr(tag, "type")?.replace(/"/g, "");
      if (type === "checkbox" || type === "radio") {
        const before = src.slice(0, m.index);
        if (before.lastIndexOf("<label") > before.lastIndexOf("</label>")) continue;
      }
      const id = attr(tag, "id");
      if (id && src.includes(`htmlFor=${id}`)) continue;
      unnamed.push(`${file}: ${tag.slice(0, 60).replace(/\s+/g, " ")}`);
    }
  }
  assert.deepEqual(unnamed, []);
});

test("the check really looks at the new screens' fields", () => {
  const all = screens.map((f) => readFileSync(new URL(f, dir), "utf8")).join("\n");
  for (const id of ["recall-name", "exam-date", "written-answer"]) assert.ok(all.includes(`id="${id}"`), id);
});
