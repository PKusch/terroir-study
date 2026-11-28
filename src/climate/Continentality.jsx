import { useState } from "react";
import { PLACES, seasonal } from "./data.js";
import { continentality } from "./logic.js";
import { Figure, gold, ink } from "./Figure.jsx";

// Monthly average temperatures for four places, with the gap between the
// warmest and coldest month drawn as a bracket.
const W = 640, H = 250, L = 40, R = 150, T = 14, B = 30;
const T0 = 0, T1 = 28;
const x = (i) => L + (i * (W - L - R)) / 11;
const y = (t) => T + ((T1 - t) * (H - T - B)) / (T1 - T0);
const NORTH = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export const Continentality = () => {
  const [pick, setPick] = useState("dijon");
  const p = PLACES.find((q) => q.id === pick);
  const m = seasonal(p);
  const hi = Math.max(...m), lo = Math.min(...m);
  return (
    <Figure
      title="Maritime or continental?"
      idea="Each line is a year of monthly average temperatures. Near the sea, the water warms and cools slowly, so winters are mild and summers not too hot. Far inland, summers are hot and winters cold. Pick a place to see the gap between its warmest and coldest month: that gap is its continentality."
      remember="A big gap means a continental climate: short summers, cold winters, and in spring a risk of frost. A small gap means maritime: mild all year, and often rain. The Mediterranean label is about warm, dry summers, not the gap: Montpellier's gap is bigger than Bordeaux's. Mendoza, far from the sea, is continental too."
      source={{ note: "Monthly averages, 1991–2020, from each place's Wikipedia climate table." }}>
      <div role="group" aria-label="Place" style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
        {PLACES.map((q) => (
          <button key={q.id} aria-pressed={pick === q.id} onClick={() => setPick(q.id)} style={{
            background: pick === q.id ? q.colour : "none", color: pick === q.id ? "#1a1a1a" : ink.soft,
            border: `1px solid ${q.colour}`, borderRadius: "4px", padding: "3px 10px", fontSize: "11px", cursor: "pointer"
          }}>{q.name}: {continentality(q.months)} °C</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img"
        aria-label={`${p.name}, ${p.type.toLowerCase()}: warmest month ${hi} °C, coldest ${lo} °C, a gap of ${continentality(p.months)} °C.`}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        {[0, 5, 10, 15, 20, 25].map((t) => (
          <g key={t}>
            <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="#2a2a2e" />
            <text x={L - 6} y={y(t) + 4} fontSize="11" fill={ink.faint} textAnchor="end">{t}°</text>
          </g>
        ))}
        {NORTH.map((n, i) => <text key={i} x={x(i)} y={H - 12} fontSize="11" fill={ink.faint} textAnchor="middle">{n}</text>)}
        {PLACES.filter((q) => q.id !== pick).map((q) => (
          <polyline key={q.id} points={seasonal(q).map((t, i) => `${x(i)},${y(t)}`).join(" ")} fill="none" stroke={q.colour} strokeWidth="1.5" opacity="0.3" />
        ))}
        <polyline points={m.map((t, i) => `${x(i)},${y(t)}`).join(" ")} fill="none" stroke={p.colour} strokeWidth="3" />
        {m.map((t, i) => <circle key={i} cx={x(i)} cy={y(t)} r="3" fill={p.colour} />)}
        <g stroke={gold} strokeWidth="2">
          <line x1={W - R + 24} x2={W - R + 24} y1={y(hi)} y2={y(lo)} />
          <line x1={W - R + 18} x2={W - R + 30} y1={y(hi)} y2={y(hi)} />
          <line x1={W - R + 18} x2={W - R + 30} y1={y(lo)} y2={y(lo)} />
          <line x1={W - R} x2={W - R + 18} y1={y(hi)} y2={y(hi)} strokeDasharray="2 3" opacity="0.6" />
          <line x1={W - R} x2={W - R + 18} y1={y(lo)} y2={y(lo)} strokeDasharray="2 3" opacity="0.6" />
        </g>
        <text x={W - R + 36} y={(y(hi) + y(lo)) / 2 - 6} fill={gold} fontSize="20" fontWeight="700">{continentality(p.months)} °C</text>
        <text x={W - R + 36} y={(y(hi) + y(lo)) / 2 + 12} fill={ink.soft} fontSize="12">{p.type}</text>
      </svg>
      <p style={{ fontSize: "11px", color: ink.faint, margin: "6px 0 0" }}>
        Mendoza is in the southern hemisphere, so its line runs July to June: that way its winter and summer line up with the others'.
      </p>
    </Figure>
  );
};
