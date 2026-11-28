import { useState } from "react";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// A solera, and the Sherry styles that come out of it.
const STYLES = {
  fino: { name: "Fino and Manzanilla", path: "Under flor only", abv: "about 15%", say: "Fortified to about 15%, so a film of yeast (flor) grows and shields the wine from air: pale, dry, tangy. Manzanilla is the same, aged in Sanlúcar." },
  amontillado: { name: "Amontillado", path: "Flor, then air", abv: "usually 17–20%", say: "Starts as a Fino; refortified to about 17%, the flor dies and the wine ages in air: amber, nutty, dry." },
  palo: { name: "Palo Cortado", path: "Briefly flor, then air", abv: "", say: "Set aside for Fino, refortified early and then aged in air." },
  oloroso: { name: "Oloroso", path: "Air only", abv: "about 18–20%", say: "Fortified to about 17%, too strong for flor, so it ages in air from the start: dark, rich, dry." },
  sweet: { name: "Sweet Sherries", path: "Sweetened or dried grapes", abv: "", say: "Pedro Ximénez is made from sun-dried grapes, never under 250 g/L of sugar; Moscatel over 220 g/L. Cream, Medium and Pale Cream are blends." }
};

export const Solera = () => {
  const [s, setS] = useState("fino");
  const st = STYLES[s];
  const barrel = (x, y, k) => (
    <g key={k}>
      <rect x={x} y={y} width="70" height="40" rx="14" fill="#6b4a2e" stroke="#3b3326" strokeWidth="2" />
      {s !== "oloroso" && s !== "sweet" && <rect x={x + 6} y={y + 8} width="58" height="5" rx="2" fill="#E8E4D9" opacity={s === "amontillado" || s === "palo" ? 0.35 : 0.85} />}
    </g>
  );
  return (
    <Figure
      title="Sherry: the solera and its styles"
      idea="Sherry ages in a solera: rows of casks. Wine for bottling is drawn from the bottom row (the saca); that row is topped up from the row above (the rocío), and so on up. Young wine blends into old, so every bottle tastes the same, year after year. Pick a style to see how it ages."
      remember="Biological ageing under flor (Fino, Manzanilla) needs strength of about 15%; at about 17% flor dies, so Oloroso ages in air. Amontillado: flor, then air. Every Sherry is aged at least two years."
      source={{ links: [
        { title: "Sherry Wines: ageing (solera)", url: "https://www.sherry.wine/documents/123/04b_sherry_ageing_0.pdf" },
        { title: "Sherry Wines: biological ageing", url: "https://www.sherry.wine/documents/161/bft_biological_ageing.pdf" },
        { title: "Sherry Wines: types of Sherry", url: "https://www.sherry.wine/sherry-cask/types-of-sherry-wine" }] }}>
      <Choice label="Style" value={s} onChange={setS} options={Object.entries(STYLES).map(([k, v]) => [k, v.name])} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px", alignItems: "center" }}>
        <svg viewBox="0 0 330 200" role="img" aria-label="Three rows of casks: the youngest at the top, the solera at the bottom. Wine is drawn from the bottom and each row is refilled from the one above."
          style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
          <defs><marker id="solArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill={gold} /></marker></defs>
          {[0, 1, 2].map((row) => [0, 1, 2].map((c) => barrel(20 + c * 76, 14 + row * 56, `${row}-${c}`)))}
          <g fontFamily="'Source Sans 3', sans-serif" fontSize="11" fill={ink.soft}>
            <text x="252" y="38">2nd criadera</text><text x="252" y="50" fill={ink.faint}>youngest</text>
            <text x="252" y="94">1st criadera</text>
            <text x="252" y="150" fill={gold}>solera</text><text x="252" y="162" fill={ink.faint}>oldest</text>
          </g>
          <path d="M240 54 C 255 60, 255 66, 240 72" stroke={gold} strokeWidth="2" fill="none" markerEnd="url(#solArrow)" />
          <path d="M240 110 C 255 116, 255 122, 240 128" stroke={gold} strokeWidth="2" fill="none" markerEnd="url(#solArrow)" />
          <path d="M100 168 L 100 192" stroke={gold} strokeWidth="2.5" markerEnd="url(#solArrow)" />
          <text x="108" y="190" fontSize="11" fill={gold} fontFamily="'Source Sans 3', sans-serif">saca: drawn for bottling</text>
          <text x="262" y="72" fontSize="10" fill={gold} fontFamily="'Source Sans 3', sans-serif">rocío</text>
        </svg>
        <div aria-live="polite">
          <div style={{ fontSize: "18px", fontWeight: 700, color: gold }}>{st.name}</div>
          <div style={{ fontSize: "12px", color: ink.label, margin: "2px 0 6px" }}>{st.path}{st.abv ? ` · ${st.abv}` : ""}</div>
          <p style={{ fontSize: "14px", color: ink.text, lineHeight: 1.6, margin: 0 }}>{st.say}</p>
          <p style={{ fontSize: "11px", color: ink.faint, margin: "6px 0 0" }}>The white stripe in each cask is flor: thick for Fino, gone for Oloroso.</p>
        </div>
      </div>
    </Figure>
  );
};
