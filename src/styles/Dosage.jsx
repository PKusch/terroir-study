import { SPARKLING_SWEETNESS } from "../data/styles.js";
import { Figure, gold, ink } from "../Figure.jsx";

// The EU sweetness terms for sparkling wine on one scale (g/L of sugar).
const RANGES = { "Brut Nature": [0, 3], "Extra Brut": [0, 6], "Brut": [0, 12], "Extra Dry": [12, 17], "Sec": [17, 32], "Demi-Sec": [32, 50], "Doux": [50, 60] };
const W = 640, L = 100, R = 20, MAX = 60;
const x = (g) => L + (g / MAX) * (W - L - R);

export const Dosage = () => (
  <Figure
    title="Sweetness on a sparkling label"
    idea="After disgorging, a little sweetened wine (the dosage) sets the sweetness. The label word says how much sugar is left. Watch out: the names do not run the way you would guess."
    remember="Brut is dry (under 12 g/L). Extra Dry is sweeter than Brut (12–17), and Sec, which means dry, is sweeter still (17–32). Doux is the sweetest (over 50)."
    source={{ title: "EU Regulation 2019/33, Annex III (sparkling sweetness terms)", url: "https://www.legislation.gov.uk/eur/2019/33/annex/III" }}>
    <svg viewBox={`0 0 ${W} ${SPARKLING_SWEETNESS.length * 26 + 40}`} role="img"
      aria-label={SPARKLING_SWEETNESS.map(([t, g]) => `${t}: ${g} grams per litre`).join("; ")}
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      {[0, 10, 20, 30, 40, 50, 60].map((g) => (
        <g key={g}>
          <line x1={x(g)} x2={x(g)} y1="8" y2={SPARKLING_SWEETNESS.length * 26 + 12} stroke="#2a2a2e" />
          <text x={x(g)} y={SPARKLING_SWEETNESS.length * 26 + 30} fontSize="11" fill={ink.faint} textAnchor="middle">{g === 60 ? "60+" : g} g/L</text>
        </g>
      ))}
      {SPARKLING_SWEETNESS.map(([t, g], i) => {
        const [a, b] = RANGES[t] ?? [0, 0];
        const y = 12 + i * 26;
        const shade = 0.25 + (i / SPARKLING_SWEETNESS.length) * 0.75;
        return (
          <g key={t} fontFamily="'Source Sans 3', sans-serif">
            <text x={L - 8} y={y + 13} fontSize="12.5" fill={t === "Extra Dry" || t === "Sec" ? gold : ink.head} textAnchor="end">{t}</text>
            <rect x={x(a)} y={y} width={Math.max(4, x(b) - x(a))} height="18" rx="4" fill={`rgba(196,169,98,${shade})`} />
            <text x={b >= 50 ? x(a) - 6 : x(b) + 6} y={y + 13} fontSize="11" fill={ink.soft} textAnchor={b >= 50 ? "end" : "start"}>{g.split(",")[0]}</text>
          </g>
        );
      })}
    </svg>
  </Figure>
);
