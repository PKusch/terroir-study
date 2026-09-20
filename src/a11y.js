// Keyboard and screen-reader access for a clickable map region.
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
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelect();
      }
    },
  };
}
