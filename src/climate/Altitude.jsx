import { useState } from "react";
import { tempAt, LAPSE_PER_100M } from "./logic.js";
import { Figure, gold, ink, COLD, WARM } from "../Figure.jsx";

// A mountainside with a vineyard you can move up and down. The air at the
// vineyard cools by about 0.6 °C for every 100 m.
const SEA = 32; // an example hot summer afternoon at sea level
const TOP = 2000;
const yOf = (m) => 230 - (m / TOP) * 190;
const xOf = (m) => 60 + (m / TOP) * 420; // along the slope

export const Altitude = () => {
  const [m, setM] = useState(1000);
  const t = tempAt(SEA, m);
  const hot = Math.min(1, Math.max(0, (t - 18) / (SEA - 18)));
  const colour = `rgb(${Math.round(111 + hot * (224 - 111))},${Math.round(168 + hot * (122 - 168))},${Math.round(220 + hot * (95 - 220))})`;
  return (
    <Figure
      title="Altitude"
      idea={`Air cools by about ${LAPSE_PER_100M} °C for every 100 m you climb. Move the vineyard up the mountain: on a day that is ${SEA} °C on the plain, see how much cooler the vines are.`}
      remember="Height lets growers in hot, sunny places keep their wines fresh. Mendoza's vineyards mostly sit between about 600 and 1,100 m, and some foothill sites reach about 1,500 m; the cooler air slows ripening and keeps freshness."
      source={{ links: [
        { title: "WSET: how does geography affect a wine's style? (0.6 °C per 100 m)", url: "https://wsetglobal.com/knowledge-centre/blog/2021/august/24/how-does-geography-affect-a-wine-s-style" },
        { title: "Wikipedia: Mendoza wine (vineyard heights)", url: "https://en.wikipedia.org/wiki/Mendoza_wine" }] }}>
      <label htmlFor="alt-m" style={{ fontSize: "12px", color: ink.soft, display: "block", marginBottom: "4px" }}>
        Vineyard height: <strong style={{ color: gold }}>{m.toLocaleString("en-GB")} m</strong>
      </label>
      <input id="alt-m" type="range" min="0" max={TOP} step="100" value={m} onChange={(e) => setM(+e.target.value)}
        style={{ width: "100%", accentColor: gold }} />
      <svg viewBox="0 0 640 250" role="img"
        aria-label={`A vineyard at ${m} metres is about ${t} degrees, against ${SEA} degrees at sea level.`}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px", marginTop: "6px" }}>
        <defs>
          <linearGradient id="altAir" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor={WARM} stopOpacity="0.35" />
            <stop offset="1" stopColor={COLD} stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <rect x="0" y="40" width="640" height="190" fill="url(#altAir)" />
        <polygon points={`0,230 60,230 ${xOf(TOP)},${yOf(TOP)} 560,120 640,150 640,250 0,250`} fill="#3b3326" />
        {[0, 500, 1000, 1500, 2000].map((h) => (
          <g key={h} fontFamily="'Source Sans 3', sans-serif" fontSize="11">
            <line x1="0" x2="640" y1={yOf(h)} y2={yOf(h)} stroke={ink.faint} strokeDasharray="2 5" opacity="0.6" />
            <text x="6" y={yOf(h) - 3} fill={ink.soft}>{h.toLocaleString("en-GB")} m · {tempAt(SEA, h)} °C</text>
          </g>
        ))}
        <line x1={xOf(600)} y1={yOf(600)} x2={xOf(1520)} y2={yOf(1520)} stroke="#9B7EDE" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
        <text x={xOf(1520) + 10} y={yOf(1520) + 14} fill="#9B7EDE" fontSize="11" fontFamily="'Source Sans 3', sans-serif">Mendoza's vineyards</text>
        <g transform={`translate(${xOf(m)},${yOf(m)})`}>
          <line x1="5" y1="0" x2="5" y2="-22" stroke="#8B7355" strokeWidth="2" />
          {[[-2, -14], [6, -14], [14, -14], [2, -7], [10, -7], [6, 0]].map(([cx, cy], i) => <circle key={i} cx={cx - 1} cy={cy - 2} r="4.5" fill="#7E3F6B" stroke="#1a1a1a" />)}
          <rect x="-26" y="-56" width="62" height="24" rx="4" fill={colour} />
          <text x="5" y="-39" textAnchor="middle" fontFamily="'Source Sans 3', sans-serif" fontWeight="700" fontSize="14" fill="#1a1a1a">{t} °C</text>
        </g>
      </svg>
      <p style={{ fontSize: "11px", color: ink.faint, margin: "6px 0 0" }}>
        {SEA} °C at sea level is an example, not a measurement. The 0.6 °C per 100 m rule is an average; on a given day the real rate depends on the weather.
      </p>
    </Figure>
  );
};
