import { useState } from "react";
import { Figure, gold, ink } from "../Figure.jsx";

// When the spirit goes in, along the fermentation: the earlier, the sweeter.
export const WHEN = [
  { id: "rutherglen", name: "Rutherglen Muscat", at: [0.1, 0.2], say: "Early in fermentation, from grapes left to shrivel on the vine: very sweet." },
  { id: "vdn", name: "Vin Doux Naturel", at: [0.2, 0.6], say: "During fermentation, which stops it and keeps the grape sugar: sweet, at least 45 g/L." },
  { id: "port", name: "Port", at: [0.45, 0.55], say: "Once about half the sugar has turned to alcohol: sweet, 19–22%." },
  { id: "madeira", name: "Madeira", at: [0.25, 1], say: "Early for sweet styles, later (or after) for dry ones." },
  { id: "sherry", name: "Sherry", at: [1, 1], say: "After fermentation, to a dry wine; sweet Sherries are sweetened afterwards or made from dried grapes." }
];
const W = 640, L = 150, R = 30;
const x = (f) => L + f * (W - L - R);

export const SpiritTiming = () => {
  const [on, setOn] = useState("port");
  const w = WHEN.find((v) => v.id === on);
  return (
    <Figure
      title="When the spirit goes in"
      idea="Fortifying stops the yeast. Add the spirit early in fermentation and much of the grape's sugar is left: a sweet wine. Add it after fermentation and the wine is dry. Click a wine."
      remember="Port and Vin Doux Naturel: during fermentation, so sweet. Sherry: after, so dry unless sweetened. Madeira: early for sweet, late for dry.">
      <svg viewBox={`0 0 ${W} ${WHEN.length * 34 + 60}`} role="group" aria-label="When each fortified wine is fortified, from the start to the end of fermentation"
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        <defs>
          <linearGradient id="stSweet" x1="0" x2="1"><stop offset="0" stopColor={gold} /><stop offset="1" stopColor="#7E2F4E" /></linearGradient>
        </defs>
        <rect x={L} y="14" width={W - L - R} height="12" rx="6" fill="url(#stSweet)" />
        <g fontFamily="'Source Sans 3', sans-serif" fontSize="11" fill={ink.soft}>
          <text x={L} y="42">start: all sugar</text>
          <text x={W - R} y="42" textAnchor="end">end: dry, all sugar fermented</text>
        </g>
        {WHEN.map((v, i) => {
          const y = 62 + i * 34;
          const sel = on === v.id;
          return (
            <g key={v.id} role="button" tabIndex={0} aria-pressed={sel} aria-label={`${v.name}: ${v.say}`} style={{ cursor: "pointer" }}
              onClick={() => setOn(v.id)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOn(v.id); } }}>
              <rect x="0" y={y - 14} width={W} height="30" fill={sel ? "#C4A96215" : "transparent"} />
              <text x="12" y={y + 5} fontSize="13" fill={sel ? gold : ink.head} fontFamily="'Source Sans 3', sans-serif">{v.name}</text>
              <line x1={L} x2={W - R} y1={y} y2={y} stroke="#2a2520" strokeWidth="2" />
              {v.at[0] === v.at[1]
                ? <circle cx={x(v.at[0])} cy={y} r="8" fill={sel ? gold : "#8B7355"} />
                : <rect x={x(v.at[0])} y={y - 7} width={x(v.at[1]) - x(v.at[0])} height="14" rx="7" fill={sel ? gold : "#8B7355"} />}
            </g>
          );
        })}
      </svg>
      <p aria-live="polite" style={{ fontSize: "13.5px", color: ink.text, margin: "8px 0 0" }}><strong style={{ color: gold }}>{w.name}:</strong> {w.say}</p>
      <p style={{ fontSize: "11px", color: ink.faint, margin: "4px 0 0" }}>Positions show the order, not exact measurements.</p>
    </Figure>
  );
};
