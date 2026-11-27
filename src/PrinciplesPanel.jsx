import { useState } from "react";
import { PRINCIPLES } from "./data/principles.js";
import { UnitsCalculator } from "./UnitsCalculator.jsx";

// ─── Principles ──────────────────────────────────────────────────────────────
// The general topics behind every region: tasting, climate, viticulture,
// winemaking, wine law and price, each with its sources. Service and food
// already have their own cards in the Styles tab, so they are linked from here.

const serif = "'Cormorant Garamond', Georgia, serif";
const gold = "#C4A962";
const card = { background: "#1f1c18", border: "1px solid #2a2520", borderRadius: "8px", padding: "14px 16px" };
const pill = (on) => ({
  padding: "6px 14px", borderRadius: "6px", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
  background: on ? gold : "transparent", color: on ? "#1a1a1a" : "#8B7355",
  border: on ? "none" : "1px solid #2a2520", fontWeight: on ? 600 : 400
});
const link = { background: "none", border: "1px solid #3a3530", color: gold, padding: "3px 10px", borderRadius: "4px", fontSize: "12px", cursor: "pointer" };

export const PrinciplesPanel = ({ onMode }) => {
  const [id, setId] = useState(PRINCIPLES[0].id);
  const topic = PRINCIPLES.find((p) => p.id === id) ?? PRINCIPLES[0];
  return (
    <div>
      <div role="group" aria-label="Topic" style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
        {PRINCIPLES.map((p) => (
          <button key={p.id} aria-pressed={p.id === topic.id} onClick={() => setId(p.id)} style={pill(p.id === topic.id)}>{p.label}</button>
        ))}
        <button onClick={() => onMode("styles")} style={pill(false)} title="Serving, storing and faults are in the Styles tab">Service →</button>
        <button onClick={() => onMode("styles")} style={pill(false)} title="Food and wine pairing is in the Styles tab">Food →</button>
      </div>
      <p style={{ color: "#B8B0A0", fontSize: "14px", lineHeight: 1.6, margin: "0 0 14px" }}>{topic.intro}</p>
      {topic.tool === "units" && <UnitsCalculator />}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
        {topic.sections.map((s) => (
          <section key={s.title} style={card}>
            <h3 style={{ fontFamily: serif, fontSize: "20px", color: "#E8E4D9", margin: "0 0 8px", fontWeight: 600 }}>{s.title}</h3>
            <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", lineHeight: 1.6, color: "#D5D0C4" }}>
              {s.points.map((pt) => <li key={pt} style={{ marginBottom: "4px" }}>{pt}</li>)}
            </ul>
          </section>
        ))}
      </div>

      {topic.practise?.length > 0 && (
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center", margin: "14px 0 0" }}>
          <span style={{ fontSize: "11px", color: "#8B7355", letterSpacing: "0.1em", textTransform: "uppercase" }}>Practise</span>
          {topic.practise.map(([label, tab]) => <button key={label} onClick={() => onMode(tab)} style={link}>{label} →</button>)}
        </div>
      )}

      <div style={{ ...card, marginTop: "14px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B7355", marginBottom: "6px" }}>Sources</div>
        <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12px", lineHeight: 1.7 }}>
          {topic.sources.map((src) => (
            <li key={src.url}><a href={src.url} target="_blank" rel="noreferrer" style={{ color: gold }}>{src.title}</a></li>
          ))}
        </ul>
        <p style={{ fontSize: "11px", color: "#7a7268", margin: "8px 0 0", lineHeight: 1.5 }}>
          A study aid, not WSET's course book. Where sources disagreed, the point was left out or the disagreement is said.
        </p>
      </div>
    </div>
  );
};
