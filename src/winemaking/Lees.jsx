import { useState } from "react";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// Wine resting on its lees, settled or stirred.
export const Lees = () => {
  const [stir, setStir] = useState(false);
  return (
    <Figure
      title="Lees: resting on the yeast"
      idea="Lees are the dead yeast cells, and other bits, that sink to the bottom after fermentation. Leaving a wine on them, and stirring them back up, changes its texture and flavour."
      remember="Lees contact adds body, a creamier texture and bread or biscuit flavours; stirring (bâtonnage) brings the lees back into contact with the wine. Muscadet sur lie is bottled straight off its lees."
      source={{ links: [{ title: "WSET Level 2 session plans", url: "https://www.wsetglobal.com/media/13022/wset_l2wines_sessionplans_en_may2023_issue2.pdf" }, { title: "Wikipedia: lees", url: "https://en.wikipedia.org/wiki/Lees_(fermentation)" }] }}>
      <Choice label="Lees" value={stir ? "stir" : "rest"} onChange={(v) => setStir(v === "stir")} options={[["rest", "Left to rest"], ["stir", "Stirred (bâtonnage)"]]} />
      <svg viewBox="0 0 640 170" role="img" aria-label={stir ? "Lees stirred up through the wine." : "Lees settled at the bottom of the barrel."}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        <path d="M200 20 Q 180 85 200 150 L440 150 Q 460 85 440 20 Z" fill="#8a5a33" stroke="#3b3326" strokeWidth="3" />
        <path d="M208 30 Q 192 85 208 142 L432 142 Q 448 85 432 30 Z" fill="#E8D9A0" opacity="0.85" />
        {[52, 85, 118].map((y) => <line key={y} x1={y === 85 ? 186 : 194} x2={y === 85 ? 454 : 446} y1={y} y2={y} stroke="#3b3326" strokeWidth="4" opacity="0.6" />)}
        {!stir && <path d="M206 124 L434 124 Q 440 134 432 142 L208 142 Q 200 134 206 124 Z" fill="#9a7f55" />}
        {stir && Array.from({ length: 70 }, (_, i) => <circle key={i} cx={215 + ((i * 53) % 210)} cy={36 + ((i * 31) % 100)} r="2.5" fill="#9a7f55" />)}
        {stir && <g><line x1="320" y1="0" x2="320" y2="128" stroke="#c8b48a" strokeWidth="5" /><path d="M300 126 q 20 14 40 0" stroke="#c8b48a" strokeWidth="5" fill="none" /></g>}
        <text x="320" y="166" textAnchor="middle" fontSize="12" fill={ink.soft} fontFamily="'Source Sans 3', sans-serif">{stir ? "lees stirred through the wine" : "lees settled at the bottom"}</text>
      </svg>
    </Figure>
  );
};
