import { useState } from "react";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// Malic acid has two acid groups, lactic acid one: the conversion swaps a
// sharper acid for a softer one and gives off carbon dioxide.
const Molecule = ({ x, name, taste, spikes, colour }) => (
  <g transform={`translate(${x},0)`} fontFamily="'Source Sans 3', sans-serif">
    <circle cx="60" cy="70" r="34" fill={colour} opacity="0.9" />
    {Array.from({ length: spikes }, (_, i) => {
      const a = (-90 + (i - (spikes - 1) / 2) * 60) * (Math.PI / 180);
      return <path key={i} d={`M${60 + 30 * Math.cos(a)} ${70 + 30 * Math.sin(a)} L${60 + 54 * Math.cos(a)} ${70 + 54 * Math.sin(a)}`} stroke={gold} strokeWidth="5" strokeLinecap="round" />;
    })}
    <text x="60" y="75" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a1a1a">{name}</text>
    <text x="60" y="124" textAnchor="middle" fontSize="12" fill={ink.soft}>{taste}</text>
  </g>
);

export const Malolactic = () => {
  const [on, setOn] = useState("after");
  const after = on === "after";
  return (
    <Figure
      title="Malolactic conversion"
      idea="After the alcoholic fermentation, lactic acid bacteria can turn the grape's sharp malic acid (the acid of green apples) into softer lactic acid (the acid of milk), giving off carbon dioxide. Each gold spike is an acid group: malic has two, lactic one, so the wine's acidity falls."
      remember="It lowers acidity, softens the wine, and can add a buttery note. Almost all red wines go through it. For whites it is a choice: yes for a rounder Chardonnay, often no to keep the crispness of Riesling."
      source={{ links: [{ title: "WSET Level 2 session plans", url: "https://www.wsetglobal.com/media/13022/wset_l2wines_sessionplans_en_may2023_issue2.pdf" }, { title: "Wikipedia: malolactic fermentation", url: "https://en.wikipedia.org/wiki/Malolactic_fermentation" }] }}>
      <Choice label="Before or after" value={on} onChange={setOn} options={[["before", "Before"], ["after", "After"]]} />
      <svg viewBox="0 0 640 150" role="img" aria-label={after ? "After: lactic acid, one acid group, softer; carbon dioxide released." : "Before: malic acid, two acid groups, sharp."}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        <Molecule x={40} name="Malic" taste="sharp, green apple" spikes={2} colour="#A9B86A" />
        <g opacity={after ? 1 : 0.15} style={{ transition: "opacity 0.3s" }}>
          <path d="M190 70 L 290 70" stroke={ink.soft} strokeWidth="2" markerEnd="url(#mlfArrow)" />
          <text x="240" y="60" textAnchor="middle" fontSize="11" fill={ink.soft}>bacteria</text>
          <Molecule x={300} name="Lactic" taste="softer, milky" spikes={1} colour="#E8E4D9" />
          <text x="460" y="74" fontSize="22" fill={ink.soft}>+</text>
          {[[510, 50, 9], [540, 76, 12], [575, 48, 7], [585, 92, 9]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke="#cfd8dc" strokeWidth="1.5" />)}
          <text x="550" y="124" textAnchor="middle" fontSize="12" fill={ink.soft}>CO₂</text>
        </g>
        <defs>
          <marker id="mlfArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill={ink.soft} /></marker>
        </defs>
      </svg>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "8px", marginTop: "8px", fontSize: "13px" }}>
        {[["Acidity", after ? "lower" : "higher"], ["Feel", after ? "softer, rounder" : "sharper, crisper"], ["Flavour", after ? "can add butter (diacetyl)" : "fresh fruit"]].map(([k, v]) => (
          <div key={k} style={{ background: "#151310", borderRadius: "6px", padding: "8px 10px", color: ink.text }}>
            <span style={{ color: ink.label, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>{k}</span>{v}
          </div>
        ))}
      </div>
    </Figure>
  );
};
