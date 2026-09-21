// Keyboard and screen-reader access for things that are drawn as a plain shape
// or box with a click handler, which a keyboard cannot reach.

// Enter or Space does what a click does. Space would otherwise scroll the page.
export const activateOnKey = (onSelect) => (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onSelect();
  }
};

// A clickable map region.
//
// A region is drawn as an SVG path with a click handler, which a keyboard cannot
// reach and a screen reader cannot name. This gives it a tab stop, a spoken name,
// its selected state, and Enter or Space to choose it.
//
// In a quiz the map is the question, so the region's name must not be spoken:
// the props are empty there and the shape is left out of the tab order.
export function regionProps({ name, active, onSelect, quizMode }) {
  if (quizMode) return {};
  return {
    role: "button",
    tabIndex: 0,
    "aria-label": name,
    "aria-pressed": Boolean(active),
    onKeyDown: activateOnKey(onSelect),
  };
}

// The map as a whole: a named group holding the region buttons, so a screen reader
// says "France wine regions" before listing them. Left unnamed in a quiz.
export function mapProps({ country, quizMode }) {
  if (quizMode) return {};
  return { role: "group", "aria-label": `${country} wine regions` };
}
