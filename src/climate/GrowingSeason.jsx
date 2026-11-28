import { GST_BANDS, GST_GRAPES, GST_SOURCE, GST_GRAPE_SOURCE } from "./data.js";
import { Figure, ink, COLD, WARM } from "../Figure.jsx";

// A thermometer laid on its side: Gregory Jones's climate bands by average
// growing-season temperature, with the ranges where three grapes do best.
const W = 640, L = 20, R = 20;
const T0 = 11, T1 = 25;
const x = (t) => L + ((t - T0) * (W - L - R)) / (T1 - T0);
const mix = (f) => {
  const a = [0x6f, 0xa8, 0xdc], b = [0xe0, 0x7a, 0x5f];
  return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * f)).join(",")})`;
};

export const GrowingSeason = () => (
  <Figure
    title="How warm is warm? Climate bands"
    idea="Climatologists sort wine regions by the average temperature of the growing season: April to October in the north, October to April in the south. Each grape has a band where it makes its best wine."
    remember="Pinot Noir needs a cool to intermediate climate; Cabernet Sauvignon an intermediate to hot one. Plant a grape somewhere too cool and it won't ripen; too hot and it ripens too fast and loses freshness."
    source={GST_SOURCE}>
    <svg viewBox={`0 0 ${W} 200`} role="img"
      aria-label={`Climate bands from too cool, below 13 °C, to too hot, above 24 °C. ${GST_GRAPES.map((g) => `${g.name} does best at ${g.from} to ${g.to} °C`).join("; ")}.`}
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      {GST_BANDS.map((b, i) => {
        const edge = i === 0 || i === GST_BANDS.length - 1;
        return (
          <g key={b.label} fontFamily="'Source Sans 3', sans-serif">
            <rect x={x(b.from) + 1} y="20" width={x(b.to) - x(b.from) - 2} height="40" rx="4"
              fill={mix(((b.from + b.to) / 2 - T0) / (T1 - T0))} opacity={edge ? 0.25 : 0.85} />
            <text x={(x(b.from) + x(b.to)) / 2} y="44" fontSize="12" fontWeight="600" fill={edge ? ink.soft : "#1a1a1a"} textAnchor="middle">{b.label}</text>
          </g>
        );
      })}
      {[11, 13, 15, 17, 19, 21, 24].map((t) => (
        <text key={t} x={x(t)} y="76" fontSize="11" fill={ink.faint} textAnchor="middle">{t} °C</text>
      ))}
      {GST_GRAPES.map((g, i) => {
        const cy = 108 + i * 30;
        return (
          <g key={g.name} fontFamily="'Source Sans 3', sans-serif">
            <line x1={x(g.from)} x2={x(g.to)} y1={cy} y2={cy} stroke="#B07AA1" strokeWidth="12" strokeLinecap="round" />
            <text x={x(g.to) + 12} y={cy + 4} fontSize="13" fill={ink.head}>{g.name}</text>
          </g>
        );
      })}
      <text x={L} y="196" fontSize="11" fill={COLD}>← cooler</text>
      <text x={W - R} y="196" fontSize="11" fill={WARM} textAnchor="end">warmer →</text>
    </svg>
    <p style={{ fontSize: "11px", color: ink.faint, margin: "6px 0 0" }}>
      Grape ranges are approximate, from <a href={GST_GRAPE_SOURCE.url} target="_blank" rel="noreferrer" style={{ color: "#C4A962" }}>Gregory Jones</a>: Chardonnay spans cool sites to warm ones.
    </p>
  </Figure>
);
