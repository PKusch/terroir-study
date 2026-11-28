import { useState } from "react";
import { vinesPerHectare } from "./logic.js";
import { Figure, gold, ink } from "../Figure.jsx";

// Plant spacing: set the gap between rows and between vines, see how many
// vines fit on a hectare, drawn on a 10 m × 10 m patch.
export const PRESETS = [
  { id: "dense", label: "1 m × 1 m (traditional European)", row: 1, gap: 1 },
  { id: "mid", label: "2 m × 1.2 m", row: 2, gap: 1.2 },
  { id: "wide", label: "3.7 m × 2.5 m (an Australian example)", row: 3.7, gap: 2.5 }
];
const PATCH = 10; // metres shown

export const Density = () => {
  const [row, setRow] = useState(1);
  const [gap, setGap] = useState(1);
  const n = vinesPerHectare(row, gap);
  const k = 30; // pixels per metre
  const vines = [];
  for (let y = row / 2; y < PATCH; y += row) for (let x = gap / 2; x < PATCH; x += gap) vines.push([x, y]);
  return (
    <Figure
      title="Planting density"
      idea="How close the vines stand sets how many fit on a hectare (100 m by 100 m). Move the sliders, or pick an example. The square shows 10 m by 10 m, a hundredth of a hectare."
      remember="Many regions plant 3,000 to 10,000 vines a hectare. Traditionally, Bordeaux vines were planted 1 m apart in rows 1 m apart, about 10,000; today Saint-Estèphe requires at least 7,000. Many Old World vineyards were planted before machines; Australia was quick to mechanise, so its rows are wide enough for tractors."
      source={{ links: [{ title: "Wikipedia: Old World wine (spacing)", url: "https://en.wikipedia.org/wiki/Old_World_wine" }, { title: "Wikipedia: glossary of viticulture terms", url: "https://en.wikipedia.org/wiki/Glossary_of_viticulture_terms" }, { title: "Wikipedia: Saint-Estèphe AOC", url: "https://en.wikipedia.org/wiki/Saint-Est%C3%A8phe_AOC" }] }}>
      <div role="group" aria-label="Examples" style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
        {PRESETS.map((p) => (
          <button key={p.id} aria-pressed={row === p.row && gap === p.gap} onClick={() => { setRow(p.row); setGap(p.gap); }} style={{
            background: row === p.row && gap === p.gap ? gold : "none", color: row === p.row && gap === p.gap ? "#1a1a1a" : ink.soft,
            border: "1px solid #3a3530", borderRadius: "4px", padding: "3px 10px", fontSize: "11px", cursor: "pointer"
          }}>{p.label}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", alignItems: "center" }}>
        <svg viewBox={`-4 -4 ${PATCH * k + 8} ${PATCH * k + 8}`} role="img" aria-label={`${vines.length} vines on 10 by 10 metres; ${n} a hectare.`}
          style={{ width: "100%", maxWidth: "320px", height: "auto", display: "block", margin: "0 auto", background: "#3b3326", borderRadius: "8px" }}>
          {Array.from({ length: Math.ceil(PATCH / row) }, (_, i) => (
            <line key={i} x1="0" x2={PATCH * k} y1={(row / 2 + i * row) * k} y2={(row / 2 + i * row) * k} stroke="#5a4a36" strokeWidth="2" />
          ))}
          {vines.map(([x, y], i) => <circle key={i} cx={x * k} cy={y * k} r="5" fill="#6fae5a" stroke="#1a1a1a" />)}
          <rect x="0" y="0" width={PATCH * k} height={PATCH * k} fill="none" stroke={gold} strokeDasharray="6 4" />
        </svg>
        <div>
          <label htmlFor="den-row" style={{ fontSize: "12px", color: ink.soft, display: "block" }}>Gap between rows: <strong style={{ color: gold }}>{row.toFixed(1)} m</strong></label>
          <input id="den-row" type="range" min="1" max="4" step="0.1" value={row} onChange={(e) => setRow(+e.target.value)} style={{ width: "100%", accentColor: gold }} />
          <label htmlFor="den-gap" style={{ fontSize: "12px", color: ink.soft, display: "block", marginTop: "6px" }}>Gap between vines in a row: <strong style={{ color: gold }}>{gap.toFixed(1)} m</strong></label>
          <input id="den-gap" type="range" min="0.8" max="2.5" step="0.1" value={gap} onChange={(e) => setGap(+e.target.value)} style={{ width: "100%", accentColor: gold }} />
          <div style={{ marginTop: "12px", fontSize: "13px", color: ink.soft }}>Vines a hectare</div>
          <div style={{ fontSize: "34px", fontWeight: 700, color: gold, lineHeight: 1.1 }}>{n.toLocaleString("en-GB")}</div>
          <div style={{ fontSize: "12px", color: ink.faint }}>10,000 m² ÷ ({row.toFixed(1)} m × {gap.toFixed(1)} m)</div>
        </div>
      </div>
    </Figure>
  );
};
