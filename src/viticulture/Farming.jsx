import { Figure, gold, ink } from "../Figure.jsx";

// Four approaches, from fewest rules to most, with who sets the rules.
const WAYS = [
  { name: "Conventional", rules: "General law on what may be sprayed", who: "Government" },
  { name: "Sustainable", rules: "No single fixed meaning; schemes vary", who: "Many schemes" },
  { name: "Organic", rules: "Almost no synthetic sprays or fertilisers; a short approved list, such as copper and sulfur, is allowed", who: "Government rules" },
  { name: "Biodynamic", rules: "Organic plus extra practices and preparations", who: "Private bodies, e.g. Demeter" }
];

export const Farming = () => (
  <Figure
    title="Ways of farming"
    idea="Four approaches, roughly from the fewest restrictions to the most. Who writes the rules matters as much as what they say."
    remember="Organic rules are set by governments; biodynamic certification by private bodies such as Demeter; 'sustainable' has no single fixed meaning."
    source={{ title: "Wine Folly: beyond organic", url: "https://winefolly.com/tutorial/beyond-organic-certified-sustainable-wine/" }}>
    <div style={{ position: "relative", padding: "0 0 6px" }}>
      <div aria-hidden="true" style={{ height: "6px", borderRadius: "3px", background: `linear-gradient(90deg, #3a3530, ${gold})`, margin: "0 0 10px" }} />
      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "8px" }}>
        {WAYS.map((w, i) => (
          <li key={w.name} style={{ background: "#151310", border: "1px solid #2a2520", borderTop: `3px solid ${i === 3 ? gold : "#5a5048"}`, borderRadius: "6px", padding: "8px 10px", fontSize: "12.5px", color: ink.text, lineHeight: 1.5 }}>
            <div style={{ fontSize: "14px", fontWeight: 700, color: ink.head }}>{w.name}</div>
            <div>{w.rules}</div>
            <div style={{ color: ink.label, marginTop: "4px" }}>Rules: {w.who}</div>
          </li>
        ))}
      </ol>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: ink.faint, marginTop: "6px" }}>
        <span>fewer restrictions</span><span>more restrictions</span>
      </div>
    </div>
  </Figure>
);
