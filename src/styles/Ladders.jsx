import { useState } from "react";
import { Figure, Choice, gold, ink, WARM } from "../Figure.jsx";

// Madeira's heating, and Marsala's ageing ladder.
const MARSALA = [["Fine", 1], ["Superiore", 2], ["Superiore Riserva", 4], ["Vergine", 5], ["Vergine Stravecchio", 10]];

export const Ladders = () => {
  const [id, setId] = useState("madeira");
  return (
    <Figure
      title="Heat and time: Madeira and Marsala"
      idea="Two fortified wines whose style comes from how they are aged. Madeira is heated on purpose; Marsala's label tells you how long it spent in wood."
      remember="Madeira: estufagem heats tanks to up to 50 °C for at least three months; canteiro ages casks in warm lofts for two years or more, more slowly and gently. Marsala: Fine 1 year in wood, up to Vergine Stravecchio 10."
      source={{ note: "Madeira figures from its rules (Portarias 38 and 39 of 2015, in English translation); Marsala from its DOC rules.", title: "Wikipedia: Madeira wine", url: "https://en.wikipedia.org/wiki/Madeira_wine" }}>
      <Choice label="Wine" value={id} onChange={setId} options={[["madeira", "Madeira: two ways to heat"], ["marsala", "Marsala: years in wood"]]} />
      {id === "madeira" ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px" }}>
          {[["Estufagem", "Tanks heated to up to 50 °C", "three months or more", 50, 0.25], ["Canteiro", "Casks in warm lofts, heated by the sun", "two years or more", 35, 1]].map(([name, how, time, temp, len]) => (
            <div key={name} style={{ background: "#151310", border: "1px solid #2a2520", borderRadius: "8px", padding: "10px 12px" }}>
              <div style={{ fontSize: "16px", fontWeight: 700, color: gold }}>{name}</div>
              <div style={{ fontSize: "13px", color: ink.text, margin: "2px 0 8px" }}>{how}, {time}.</div>
              <div style={{ fontSize: "11px", color: ink.soft }}>Heat</div>
              <div style={{ height: "10px", background: "#2a2520", borderRadius: "5px", marginBottom: "6px" }}><div style={{ width: `${(temp / 50) * 100}%`, height: "100%", background: WARM, borderRadius: "5px" }} /></div>
              <div style={{ fontSize: "11px", color: ink.soft }}>Time</div>
              <div style={{ height: "10px", background: "#2a2520", borderRadius: "5px" }}><div style={{ width: `${len * 100}%`, height: "100%", background: gold, borderRadius: "5px" }} /></div>
            </div>
          ))}
          <p style={{ fontSize: "11px", color: ink.faint, margin: 0, gridColumn: "1 / -1" }}>Canteiro's heat comes from the weather, so its bar shows "gentler", not a set figure.</p>
        </div>
      ) : (
        <svg viewBox="0 0 640 200" role="img" aria-label={MARSALA.map(([n, y]) => `${n}: ${y} years in wood`).join("; ")}
          style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
          {MARSALA.map(([n, y], i) => (
            <g key={n} fontFamily="'Source Sans 3', sans-serif">
              <text x="160" y={30 + i * 34} textAnchor="end" fontSize="13" fill={ink.head}>{n}</text>
              <rect x="170" y={16 + i * 34} width={(y / 10) * 420} height="20" rx="4" fill="#8a5a33" />
              <text x={176 + (y / 10) * 420} y={30 + i * 34} fontSize="12" fill={gold}>{y} year{y > 1 ? "s" : ""}</text>
            </g>
          ))}
        </svg>
      )}
    </Figure>
  );
};
