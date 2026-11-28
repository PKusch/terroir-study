import { useState } from "react";
import { Figure, Choice, gold, ink, COLD } from "../Figure.jsx";

// The same vine with a crowded canopy and an open one.
export const Canopy = () => {
  const [open, setOpen] = useState(true);
  const leaves = [];
  const n = open ? 16 : 44;
  for (let i = 0; i < n; i++) leaves.push([200 + ((i * 67) % 240), 40 + ((i * 41) % (open ? 60 : 95))]);
  return (
    <Figure
      title="Canopy management"
      idea="The canopy is the vine's leaves and shoots. Growers trim shoots and pull leaves to open it up. Switch between a crowded canopy and an open one."
      remember="An open canopy lets air move through, which dries the leaves and bunches and limits disease, and lets sunlight reach the leaves and grapes. Too open in a hot place risks sunburn, which canopy management also controls.">
      <Choice label="Canopy" value={open ? "open" : "dense"} onChange={(v) => setOpen(v === "open")} options={[["dense", "Crowded"], ["open", "Open"]]} />
      <svg viewBox="100 0 440 230" role="img" aria-label={open ? "An open canopy: sunlight reaches the bunches and air flows through." : "A crowded canopy: the bunches are shaded and damp air is trapped."}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        <defs><marker id="cnArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill={COLD} /></marker></defs>
        <circle cx="130" cy="30" r="14" fill="#F2C94C" />
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={150 + i * 10} y1={40 + i * 6} x2={open ? 300 + i * 40 : 220 + i * 20} y2={open ? 160 : 70 + i * 6} stroke="#F2C94C" strokeWidth="1.5" opacity="0.7" />
        ))}
        <rect x="314" y="150" width="12" height="70" fill="#6b4a2e" />
        <rect x="200" y="146" width="240" height="8" rx="4" fill="#6b4a2e" />
        {leaves.map(([x, y], i) => <path key={i} d={`M${x} ${y + 40} l 12 -10 l 12 10 l -5 12 l -14 0 z`} fill="#4f8a3c" stroke="#1a1a1a" strokeWidth="0.5" />)}
        {[230, 290, 350, 410].map((x) => (
          <g key={x}>{[[0, 0], [-5, 7], [5, 7], [0, 14]].map(([dx, dy], i) => <circle key={i} cx={x + dx} cy={160 + dy} r="4.5" fill="#5a2448" />)}</g>
        ))}
        {open
          ? <path d="M150 170 C 250 150, 380 175, 520 160" stroke={COLD} strokeWidth="2.5" fill="none" strokeDasharray="6 4" markerEnd="url(#cnArrow)" />
          : <g>{[[220, 120], [300, 110], [380, 125], [420, 100]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="10" fill={COLD} opacity="0.25" />)}</g>}
        <g fontFamily="'Source Sans 3', sans-serif" fontSize="12">
          <text x="520" y="190" textAnchor="end" fill={open ? COLD : ink.soft}>{open ? "air moves through: leaves dry" : "damp air trapped: disease risk"}</text>
          <text x="520" y="210" textAnchor="end" fill={open ? gold : ink.soft}>{open ? "sunlight reaches the grapes" : "bunches in shade"}</text>
        </g>
      </svg>
    </Figure>
  );
};
