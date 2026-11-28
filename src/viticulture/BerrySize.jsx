import { useState } from "react";
import { skinPerJuice } from "./logic.js";
import { Figure, gold, ink } from "../Figure.jsx";

// Small berries against big ones: the skin is where colour, tannin and much
// of the flavour sit, so the share of skin matters.
const REF = 16; // mm, a reference berry to compare against

export const BerrySize = () => {
  const [d, setD] = useState(12);
  const share = skinPerJuice(d, REF);
  return (
    <Figure
      title="Berry size and skin"
      idea={`Colour, tannin and much of the flavour sit in the skin; the juice is mostly water and sugar. A small berry has more skin for each drop of juice. Shrink the berry and compare it with a ${REF} mm one.`}
      remember="Smaller berries: more skin compared with juice, so less dilution and more concentrated colour, tannin and flavour. Holding back water between fruit set and véraison (regulated deficit irrigation) can give smaller berries."
      source={{ links: [{ title: "Cornell thesis (Thomas, 2013): berry size and skin-to-juice ratio", url: "https://ecommons.cornell.edu/server/api/core/bitstreams/8e945396-4592-4143-976b-be51b42dca90/content" }, { title: "AWRI: regulated deficit irrigation", url: "https://www.awri.com.au/wp-content/uploads/2_irrigation_introduction_to_rdi.pdf" }] }}>
      <label htmlFor="berry-d" style={{ fontSize: "12px", color: ink.soft, display: "block" }}>Berry width: <strong style={{ color: gold }}>{d} mm</strong></label>
      <input id="berry-d" type="range" min="8" max="20" step="1" value={d} onChange={(e) => setD(+e.target.value)} style={{ width: "100%", accentColor: gold }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px", alignItems: "center", marginTop: "8px" }}>
        <svg viewBox="0 0 300 150" role="img" aria-label={`A ${d} millimetre berry beside a ${REF} millimetre one; it has ${share.toFixed(2)} times the skin for each millilitre of juice.`}
          style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
          {[[80, d, gold], [220, REF, ink.soft]].map(([cx, size, c], i) => (
            <g key={i}>
              <circle cx={cx} cy="68" r={size * 3.2} fill="#3A1530" />
              <circle cx={cx} cy="68" r={size * 3.2 - 4} fill="#C9D69B" opacity="0.85" />
              <text x={cx} y="140" textAnchor="middle" fontSize="12" fill={c} fontFamily="'Source Sans 3', sans-serif">{size} mm{i === 1 ? " (compare)" : ""}</text>
            </g>
          ))}
        </svg>
        <div>
          <div style={{ fontSize: "13px", color: ink.soft }}>Skin for each ml of juice, against a {REF} mm berry</div>
          <div style={{ fontSize: "34px", fontWeight: 700, color: gold, lineHeight: 1.1 }}>×{share.toFixed(2)}</div>
          <div style={{ fontSize: "12px", color: ink.faint }}>A ball's surface compared with its volume grows as it shrinks: halve the width and each ml of juice has twice the skin.</div>
        </div>
      </div>
    </Figure>
  );
};
