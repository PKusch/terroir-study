import { useState } from "react";
import { Figure, gold, ink, COLD } from "../Figure.jsx";

// The traditional method one step at a time, with the bottle drawn at each.
export const STEPS = [
  { name: "Base wine", angle: 0, say: "A dry, high-acid, low-alcohol still wine, usually a blend of grapes, vineyards and years.", show: "tank" },
  { name: "Liqueur de tirage", angle: 0, say: "Wine with a little sugar (about 24 g/L) and yeast goes into each bottle, sealed with a crown cap.", show: "cap" },
  { name: "Second fermentation", angle: 90, say: "Lying flat, the yeast eats the sugar: alcohol rises about 1.2–1.3% and the trapped CO₂ builds about 6 bar of pressure. It tails off within two months.", show: "bubbles" },
  { name: "Ageing on the lees", angle: 90, say: "The dead yeast (lees) breaks down, autolysis, giving bread, toast and brioche notes. The longer, the stronger: Champagne's rules ask for at least 12 months on the lees (15 from bottling before sale).", show: "lees" },
  { name: "Riddling", angle: 160, say: "The bottle is turned and tilted until it stands neck down, so the lees slide into the neck. By hand in a pupitre (120 bottles, six weeks or more) or by gyropalette (504 bottles, one to two weeks).", show: "neck" },
  { name: "Disgorging", angle: 180, say: "The neck is frozen in brine at about −25 °C. When the cap comes off, the pressure shoots out a plug of ice holding the lees.", show: "ice" },
  { name: "Dosage, cork and cage", angle: 0, say: "A little sweetened wine (liqueur d'expédition) sets the sweetness; then a thick cork and a wire cage (muselet).", show: "cork" }
];

const BOTTLE = "M-9 -70 h18 v26 q0 10 12 18 q10 7 10 18 v84 q0 6 -6 6 h-50 q-6 0 -6 -6 v-84 q0 -11 10 -18 q12 -8 12 -18 z";

export const TraditionalSteps = () => {
  const [i, setI] = useState(0);
  const s = STEPS[i];
  return (
    <Figure
      title="The traditional method, step by step"
      idea="Champagne, Cava, Crémant and Franciacorta are all made this way. Step through it: the whole second fermentation, ageing and clearing happen in the bottle you buy."
      remember="Tirage, second fermentation in bottle, lees ageing (autolysis: bread, toast), riddling, disgorging, dosage. The transfer method shares the first steps but empties the bottles into a tank instead of riddling and disgorging."
      source={{ links: [
        { title: "WSET Level 2 session plans", url: "https://www.wsetglobal.com/media/13022/wset_l2wines_sessionplans_en_may2023_issue2.pdf" },
        { title: "UMC: tirage (24 g/L of sugar)", url: "https://maisons-champagne.com/en/appellation/stages-in-winemaking/from-grape-must-to-still-wines/article/tirage-or-bottling-the-blended-wine" },
        { title: "Union des Maisons de Champagne: second fermentation", url: "https://maisons-champagne.com/en/appellation/stages-in-winemaking/from-still-wine-to-sparkling-wine/article/second-fermentation-capturing-the-sparkle" },
        { title: "UMC: riddling", url: "https://maisons-champagne.com/en/appellation/stages-in-winemaking/from-still-wine-to-sparkling-wine/article/pointage-remuage-riddling-and-depointage" },
        { title: "UMC: disgorgement", url: "https://maisons-champagne.com/en/appellation/stages-in-winemaking/preparation-for-shipment-many-years-later/article/disgorgement" }] }}>
      <ol aria-label="Steps" style={{ listStyle: "none", padding: 0, margin: "0 0 10px", display: "flex", gap: "4px", flexWrap: "wrap" }}>
        {STEPS.map((x, k) => (
          <li key={x.name}>
            <button onClick={() => setI(k)} aria-current={k === i ? "step" : undefined} style={{
              background: k === i ? gold : k < i ? "#C4A96233" : "none", color: k === i ? "#1a1a1a" : ink.soft, border: "1px solid #3a3530",
              borderRadius: "12px", padding: "3px 9px", fontSize: "11px", cursor: "pointer"
            }}>{k + 1}. {x.name}</button>
          </li>
        ))}
      </ol>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px", alignItems: "center" }}>
        <svg viewBox="-120 -120 240 240" role="img" aria-label={`Step ${i + 1}: ${s.name}. ${s.say}`} style={{ width: "100%", maxWidth: "260px", height: "auto", display: "block", margin: "0 auto", background: "#101418", borderRadius: "8px" }}>
          {s.show === "tank" ? (
            <g><rect x="-50" y="-70" width="100" height="140" rx="12" fill="#151310" stroke={COLD} strokeWidth="3" /><rect x="-46" y="-30" width="92" height="96" fill="#E8D9A0" opacity="0.6" /></g>
          ) : (
            <g transform={`rotate(${s.angle})`} style={{ transition: "transform 0.6s" }}>
              <path d={BOTTLE} fill="#2f4a2f" stroke="#8B7355" strokeWidth="2" />
              <path d="M-32 -10 h64 v62 q0 6 -6 6 h-52 q-6 0 -6 -6 z" fill="#E8D9A0" opacity="0.55" />
              {s.show === "cap" && <rect x="-11" y="-76" width="22" height="8" rx="2" fill="#bbb" />}
              {(s.show === "bubbles" || s.show === "lees") && <rect x="-11" y="-76" width="22" height="8" rx="2" fill="#bbb" />}
              {s.show === "bubbles" && [[-20, 10], [5, 30], [18, 0], [-8, 40], [12, 50]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="3" fill="none" stroke="#fff" />)}
              {s.show === "lees" && <rect x="22" y="-8" width="9" height="60" rx="3" fill="#B8A07A" />}
              {(s.show === "neck" || s.show === "ice") && <rect x="-8" y="-68" width="16" height="14" fill="#B8A07A" />}
              {s.show === "ice" && <rect x="-10" y="-70" width="20" height="22" fill="#cfe3f2" opacity="0.6" />}
              {s.show === "cork" && <g><rect x="-10" y="-84" width="20" height="18" rx="4" fill="#c8a070" /><path d="M-12 -70 L-16 -56 M12 -70 L16 -56" stroke="#ccc" strokeWidth="2" /></g>}
            </g>
          )}
          {s.show === "ice" && <text x="0" y="112" textAnchor="middle" fontSize="12" fill={COLD} fontFamily="'Source Sans 3', sans-serif">ice plug holds the lees</text>}
        </svg>
        <div>
          <div style={{ fontSize: "12px", color: ink.label }}>Step {i + 1} of {STEPS.length}</div>
          <div style={{ fontSize: "20px", color: gold, fontWeight: 700, margin: "2px 0 6px" }}>{s.name}</div>
          <p aria-live="polite" style={{ fontSize: "14px", color: ink.text, lineHeight: 1.6, margin: 0 }}>{s.say}</p>
          <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
            <button onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0} style={{ background: "none", border: "1px solid #3a3530", color: ink.soft, borderRadius: "6px", padding: "6px 14px", cursor: i === 0 ? "default" : "pointer", opacity: i === 0 ? 0.4 : 1 }}>← Back</button>
            <button onClick={() => setI(Math.min(STEPS.length - 1, i + 1))} disabled={i === STEPS.length - 1} style={{ background: gold, border: "none", color: "#1a1a1a", fontWeight: 600, borderRadius: "6px", padding: "6px 14px", cursor: "pointer", opacity: i === STEPS.length - 1 ? 0.4 : 1 }}>Next →</button>
          </div>
        </div>
      </div>
    </Figure>
  );
};
