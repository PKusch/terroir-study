// ─── Quiz keyboard shortcuts ─────────────────────────────────────────────────
// Answering with 1 to 4 and moving on with Enter or N, so a run of questions
// needs no mouse. Pure, so node can test which key does what.
//
// Two ways this could go wrong, both handled here:
//  - typing in a box must never answer a question
//  - Enter on a focused button already presses that button, so acting on it as
//    well would answer or advance twice

const TYPING = new Set(["INPUT", "TEXTAREA", "SELECT"]);

// Returns { type: "option", index } | { type: "next" } | null.
export function quizShortcut(event, { optionCount = 0, showAnswer = false, isMapQ = false } = {}) {
  if (event.ctrlKey || event.metaKey || event.altKey) return null;
  if (TYPING.has(event.targetTag)) return null;
  const key = event.key;

  if (showAnswer) {
    if (key === "n" || key === "N") return { type: "next" };
    if (key === "Enter") {
      const onControl = event.targetTag === "BUTTON" || event.targetTag === "A" || event.targetRole === "button";
      return onControl ? null : { type: "next" };
    }
    return null;
  }

  if (isMapQ) return null;
  if (/^[1-9]$/.test(key)) {
    const index = Number(key) - 1;
    if (index < optionCount) return { type: "option", index };
  }
  return null;
}
