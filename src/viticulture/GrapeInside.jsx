import { useState } from "react";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// A black grape cut in half: skin, pulp, seeds and stem, each with what it
// gives the wine.
const PARTS = [
  { id: "skin", label: "Skin", gives: "Colour, tannin and flavour.", colour: "#3A1530" },
  { id: "pulp", label: "Pulp", gives: "Mostly water and sugar, with acids (mainly tartaric and malic) and some flavour.", colour: "#C9D69B" },
  { id: "seeds", label: "Seeds", gives: "High in bitter tannin, so they are not crushed.", colour: "#8a6440" },
  { id: "stem", label: "Stem", gives: "Also high in tannin; usually removed for red wine (destemming).", colour: "#6fae5a" }
];

export const GrapeInside = () => {
  const [on, setOn] = useState("pulp");
  const [kind, setKind] = useState("most");
  const pulp = kind === "most" ? "#D8DFA8" : "#8E2F55";
  const hl = (id) => (on === id ? { stroke: gold, strokeWidth: 4 } : {});
  const hit = (id) => ({ role: "button", tabIndex: 0, "aria-label": PARTS.find((p) => p.id === id).label, style: { cursor: "pointer" }, onClick: () => setOn(id), onKeyDown: (e) => { if (e.key === "Enter") setOn(id); } });
  return (
    <Figure
      title="Inside the grape"
      idea="Cut a black grape in half and you find that the colour is only in the skin. The pulp of almost every grape, black or white, is pale. Click a part to see what it gives the wine."
      remember="Pulp: water, sugar and acid. Skin: colour, tannin and flavour. Seeds and stems: bitter tannin. Because the pulp is pale, black grapes can make white wine. Teinturier grapes, such as Alicante Bouschet, are the exception: red flesh.">
      <Choice label="Grape" value={kind} onChange={setKind} options={[["most", "Almost every grape"], ["teinturier", "Teinturier (red flesh)"]]} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px", alignItems: "center" }}>
        <svg viewBox="0 0 300 260" role="group" aria-label="A grape cut in half" style={{ width: "100%", maxWidth: "340px", height: "auto", display: "block", margin: "0 auto", background: "#101418", borderRadius: "8px" }}>
          <g {...hit("stem")}><path d="M150 20 L150 52" stroke="#6fae5a" strokeWidth="8" strokeLinecap="round" {...(on === "stem" ? { stroke: gold } : {})} /></g>
          <g {...hit("skin")}><ellipse cx="150" cy="150" rx="100" ry="98" fill="#3A1530" {...hl("skin")} /></g>
          <g {...hit("pulp")}><ellipse cx="150" cy="150" rx="88" ry="86" fill={pulp} {...hl("pulp")} style={{ transition: "fill 0.3s" }} /></g>
          <g {...hit("seeds")}>
            {[[125, 140, -20], [175, 140, 20], [150, 180, 0]].map(([x, y, r], i) => (
              <ellipse key={i} cx={x} cy={y} rx="10" ry="16" transform={`rotate(${r} ${x} ${y})`} fill="#8a6440" {...hl("seeds")} />
            ))}
          </g>
        </svg>
        <div>
          {PARTS.map((p) => (
            <button key={p.id} onClick={() => setOn(p.id)} aria-pressed={on === p.id} style={{
              display: "block", width: "100%", textAlign: "left", marginBottom: "6px", padding: "8px 10px", borderRadius: "6px", cursor: "pointer",
              background: on === p.id ? "#2a2418" : "#151310", border: `1px solid ${on === p.id ? gold : "#2a2520"}`, color: ink.text, fontSize: "13px"
            }}>
              <strong style={{ color: on === p.id ? gold : ink.head }}>{p.label}:</strong> {p.id === "pulp" && kind === "teinturier" ? "Red, unlike almost every other grape. Otherwise water, sugar and acids." : p.gives}
            </button>
          ))}
        </div>
      </div>
    </Figure>
  );
};
