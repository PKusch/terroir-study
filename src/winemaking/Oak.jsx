import { useState } from "react";
import { woodPerLitre } from "./logic.js";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// Barrel size against how much wood each litre of wine touches, plus what
// new or used oak and the toast level change.
export const BARRELS = [
  { id: "barrique", label: "Barrique", litres: 225 },
  { id: "hogshead", label: "Hogshead", litres: 300 },
  { id: "cask", label: "Large cask", litres: 1800 }
];

const Barrel = ({ litres, x, active }) => {
  const s = Math.cbrt(litres / 225); // same shape, drawn to scale
  const w = 46 * s, h = 60 * s;
  return (
    <g transform={`translate(${x - w / 2},${190 - h})`} opacity={active ? 1 : 0.35}>
      <path d={`M${w * 0.08} 0 Q 0 ${h / 2} ${w * 0.08} ${h} L${w * 0.92} ${h} Q ${w} ${h / 2} ${w * 0.92} 0 Z`} fill="#8a5a33" stroke={active ? gold : "#3b3326"} strokeWidth="2" />
      {[0.18, 0.5, 0.82].map((f) => <line key={f} x1={f === 0.5 ? 0 : w * 0.03} x2={f === 0.5 ? w : w * 0.97} y1={h * f} y2={h * f} stroke="#3b3326" strokeWidth={Math.max(1.5, 3 * s / 2)} />)}
    </g>
  );
};

export const Oak = () => {
  const [id, setId] = useState("barrique");
  const b = BARRELS.find((x) => x.id === id);
  const share = woodPerLitre(b.litres);
  return (
    <Figure
      title="Oak: size, age and toast"
      idea="A barrel gives the wine oak flavour and lets in a little oxygen, which softens tannin. How much depends on how much wood each litre touches: in a bigger barrel, most of the wine is far from the wood. Pick a size."
      remember="Small, new barrels give the most oak flavour. Larger and older barrels give less, so the fruit shows more. Steel and concrete add nothing; oak chips and staves give oak flavour cheaply."
      source={{ links: [{ title: "Wikipedia: oak (wine)", url: "https://en.wikipedia.org/wiki/Oak_(wine)" }, { title: "Wikipedia: wine barrel (sizes)", url: "https://en.wikipedia.org/wiki/Wine_barrel" }, { title: "WSET Level 2 session plans (oak flavours)", url: "https://www.wsetglobal.com/media/13022/wset_l2wines_sessionplans_en_may2023_issue2.pdf" }] }}>
      <Choice label="Barrel size" value={id} onChange={setId} options={BARRELS.map((x) => [x.id, `${x.label} (${x.litres.toLocaleString("en-GB")} L)`])} />
      <svg viewBox="0 0 640 210" role="img"
        aria-label={`A ${b.label.toLowerCase()} of ${b.litres} litres: each litre touches about ${Math.round(share * 100)} percent as much wood as in a 225 litre barrique.`}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        <Barrel litres={225} x={90} active={id === "barrique"} />
        <Barrel litres={300} x={200} active={id === "hogshead"} />
        <Barrel litres={1800} x={360} active={id === "cask"} />
        <line x1="0" x2="640" y1="191" y2="191" stroke="#3b3326" />
        <g fontFamily="'Source Sans 3', sans-serif">
          <text x="530" y="70" textAnchor="middle" fontSize="12" fill={ink.soft}>Wood per litre</text>
          <text x="530" y="104" textAnchor="middle" fontSize="30" fontWeight="700" fill={gold}>{Math.round(share * 100)}%</text>
          <text x="530" y="124" textAnchor="middle" fontSize="12" fill={ink.soft}>of a barrique's</text>
        </g>
      </svg>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px", marginTop: "8px", fontSize: "13px" }}>
        {[
          ["New or used", "New oak gives the most flavour. Each use gives less; after 3 to 5 vintages a barrel may add little or none."],
          ["Toast", "Barrels are toasted over a fire inside. Lighter toast gives more oak flavour and tannin; heavy toast tones down coconut and adds smoky, spicy, mocha and toffee notes."],
          ["Where the oak is from", "American oak is sweeter, with more vanilla and coconut; French oak gives silkier tannins, spice and toasted almond."]
        ].map(([k, v]) => (
          <div key={k} style={{ background: "#151310", borderRadius: "6px", padding: "8px 10px", color: ink.text }}>
            <span style={{ color: ink.label, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>{k}</span>{v}
          </div>
        ))}
      </div>
      <p style={{ fontSize: "11px", color: ink.faint, margin: "6px 0 0" }}>Wood per litre is worked out for barrels of the same shape, drawn to scale; the 1,800 L cask is eight times a barrique, chosen to show the sum (it halves the wood per litre). Real casks differ in shape, so treat it as a guide.</p>
    </Figure>
  );
};
