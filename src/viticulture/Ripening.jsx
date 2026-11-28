import { useState } from "react";
import { Figure, gold, ink } from "../Figure.jsx";

// From véraison to harvest: what rises and what falls. Shapes, not
// measurements.
const W = 640, H = 240, L = 30, R = 20, T = 20, B = 40;
const x = (f) => L + f * (W - L - R);
const y = (v) => T + (1 - v) * (H - T - B);
// Each line: value 0..1 at the start (véraison) and how it moves to harvest.
export const LINES = [
  { id: "sugar", label: "Sugar", colour: gold, f: (t) => 0.12 + 0.8 * (1 - Math.pow(1 - t, 1.6)) },
  { id: "acid", label: "Acidity (malic falls most)", colour: "#A9B86A", f: (t) => 0.9 - 0.62 * (1 - Math.pow(1 - t, 1.8)) },
  { id: "green", label: "Green-pepper notes", colour: "#6fae5a", f: (t) => 0.7 * Math.pow(1 - t, 2) + 0.04 },
  { id: "tannin", label: "Amount of skin tannin (black grapes)", colour: "#B07AA1", f: () => 0.62 }
];

export const Ripening = () => {
  const [t, setT] = useState(0.5);
  return (
    <Figure
      title="What ripening changes"
      idea="From véraison, when the grapes soften and change colour, to harvest, the berry fills with sugar while its acidity falls. Drag the slider through the weeks to see where each one stands."
      remember="Sugar up, acidity down (mostly malic acid), green-pepper notes fade, and most flavours develop. In black grapes the amount of skin tannin barely changes after véraison; what changes is how ripe it tastes. Hot nights burn off more malic acid, so cool nights help keep acidity."
      source={{ note: "The lines show direction, not measurements.", title: "AWRI: phenology, berry development and ripening", url: "https://www.awri.com.au/wp-content/uploads/5_phenology_berry_development_ripening_3.pdf" }}>
      <label htmlFor="rip-t" style={{ fontSize: "12px", color: ink.soft, display: "block" }}>
        Weeks after véraison: <strong style={{ color: gold }}>{t < 0.05 ? "véraison" : t > 0.95 ? "harvest" : `about ${Math.round(t * 100)}% of the way`}</strong>
      </label>
      <input id="rip-t" type="range" min="0" max="1" step="0.05" value={t} onChange={(e) => setT(+e.target.value)} style={{ width: "100%", accentColor: gold }} />
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="From véraison to harvest, sugar rises, acidity falls, green-pepper notes fade, and the amount of skin tannin stays about level."
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        {LINES.map((l) => (
          <g key={l.id}>
            <polyline points={Array.from({ length: 41 }, (_, i) => `${x(i / 40)},${y(l.f(i / 40))}`).join(" ")} fill="none" stroke={l.colour} strokeWidth="3" strokeDasharray={l.id === "tannin" ? "6 5" : "none"} />
            <circle cx={x(t)} cy={y(l.f(t))} r="6" fill={l.colour} stroke="#101418" strokeWidth="2" />
          </g>
        ))}
        <line x1={x(t)} x2={x(t)} y1={T} y2={H - B} stroke={ink.faint} strokeDasharray="3 4" />
        <g fontFamily="'Source Sans 3', sans-serif" fontSize="12" fill={ink.soft}>
          <text x={L} y={H - 16}>Véraison</text>
          <text x={W - R} y={H - 16} textAnchor="end">Harvest</text>
        </g>
      </svg>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "8px", fontSize: "12px", color: ink.soft }}>
        {LINES.map((l) => <span key={l.id}><span style={{ display: "inline-block", width: 14, height: 4, background: l.colour, verticalAlign: "middle", marginRight: 5 }} />{l.label}</span>)}
      </div>
    </Figure>
  );
};
