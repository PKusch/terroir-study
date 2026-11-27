import { useState } from "react";
import { SERVES, UK_WEEKLY_GUIDELINE, round1, units, usDrinks } from "./units.js";

const gold = "#C4A962";
const box = { background: "#141210", color: "#E8E4D9", border: "1px solid #3a3530", borderRadius: "6px", padding: "6px 8px", fontSize: "14px", width: "90px", fontFamily: "inherit" };

// Units in a glass or bottle, from its strength and size (the NHS formula).
export const UnitsCalculator = () => {
  const [abv, setAbv] = useState("13.5");
  const [ml, setMl] = useState("175");
  const u = units(abv, ml);
  const us = usDrinks(abv, ml);
  return (
    <div style={{ background: "#1f1c18", border: `1px solid ${gold}55`, borderRadius: "8px", padding: "14px 16px", marginBottom: "14px" }}>
      <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B7355", marginBottom: "8px" }}>Units calculator</div>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ fontSize: "13px", color: "#D5D0C4", display: "flex", gap: "6px", alignItems: "center" }}>
          <label htmlFor="units-abv">Strength (% ABV)</label>
          <input id="units-abv" type="number" inputMode="decimal" min="0" max="100" step="0.5" value={abv} onChange={(e) => setAbv(e.target.value)} style={box} />
        </span>
        <span style={{ fontSize: "13px", color: "#D5D0C4", display: "flex", gap: "6px", alignItems: "center" }}>
          <label htmlFor="units-ml">Volume (ml)</label>
          <input id="units-ml" type="number" inputMode="numeric" min="0" step="25" value={ml} onChange={(e) => setMl(e.target.value)} style={box} />
        </span>
      </div>
      <div role="group" aria-label="Common measures" style={{ display: "flex", gap: "6px", flexWrap: "wrap", margin: "8px 0" }}>
        {SERVES.map((s) => (
          <button key={s.label} onClick={() => setMl(String(s.ml))} aria-pressed={String(s.ml) === ml} style={{
            background: String(s.ml) === ml ? gold : "none", color: String(s.ml) === ml ? "#1a1a1a" : "#B8B0A0",
            border: "1px solid #3a3530", borderRadius: "4px", padding: "3px 10px", fontSize: "12px", cursor: "pointer"
          }}>{s.label} ({s.ml} ml)</button>
        ))}
      </div>
      <div role="status" style={{ fontSize: "14px", color: "#E8E4D9", lineHeight: 1.6 }}>
        {u === null ? "Enter a strength between 0 and 100% and a volume." : (
          <>
            <strong style={{ color: gold }}>{round1(u)} UK units</strong>, or about {round1(us)} US standard drinks.
            {" "}The UK guideline is no more than {UK_WEEKLY_GUIDELINE} units a week, spread over three or more days.
          </>
        )}
      </div>
    </div>
  );
};
