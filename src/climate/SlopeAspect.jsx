import { useState } from "react";
import { sunShare } from "./logic.js";
import { Figure, Choice, gold, ink, COLD } from "./Figure.jsx";

// A hill side-on: the sun on the left (towards the equator). Parallel rays
// show that the slope facing the sun catches more of them per metre of
// ground, and blue arrows show cold air sliding down into the valley.
const GROUND = [[0, 232], [40, 232], [320, 92], [560, 232], [640, 232]];
const SEGS = GROUND.slice(1).map((p, i) => [GROUND[i], p]);
const tiltOf = ([a, b]) => (Math.atan2(a[1] - b[1], b[0] - a[0]) * 180) / Math.PI; // + rises to the right

// Noon sun heights at 45° N (the latitude of Bordeaux), from simple geometry:
// 90° − latitude ± the sun's tilt for the season.
const SUNS = [["summer", "Midsummer noon (68°)", 68], ["equinox", "March or September (45°)", 45], ["harvest", "Late October (32°)", 32]];

function firstHit(p, d) {
  let best = null;
  for (const [a, b] of SEGS) {
    const ex = b[0] - a[0], ey = b[1] - a[1];
    const den = d[0] * ey - d[1] * ex;
    if (Math.abs(den) < 1e-9) continue;
    const t = ((a[0] - p[0]) * ey - (a[1] - p[1]) * ex) / den;
    const u = ((a[0] - p[0]) * d[1] - (a[1] - p[1]) * d[0]) / den;
    if (t > 0 && u >= 0 && u <= 1 && (!best || t < best.t)) best = { t, x: p[0] + t * d[0], y: p[1] + t * d[1] };
  }
  return best;
}

export const SlopeAspect = () => {
  const [sunId, setSunId] = useState("equinox");
  const sun = SUNS.find((s) => s[0] === sunId)[2];
  const r = (sun * Math.PI) / 180;
  const d = [Math.cos(r), Math.sin(r)];
  const n = [-d[1], d[0]];
  const rays = [];
  for (let i = -30; i < 30; i++) {
    const p = [320 - d[0] * 700 + n[0] * i * 16, 92 - d[1] * 700 + n[1] * i * 16];
    const h = firstHit(p, d);
    if (h && h.x > 0 && h.x < 640) rays.push([p, h]);
  }
  const up = tiltOf(SEGS[1]);
  const down = tiltOf(SEGS[2]);
  const pct = (x) => Math.round(x * 100);
  return (
    <Figure
      title="Slope and aspect"
      idea="Aspect is the way a slope faces. The rays below are the same sunlight, evenly spaced. On the slope facing the equator they land closer together, so each square metre gets more warmth than flat ground. Change the season: the lower the sun, the bigger the difference."
      remember="A slope facing the equator (south in the north, north in the south) is warmer, which matters most in cool regions such as the Mosel. Cold air is heavy and flows downhill, so frost hits the valley floor before the slope.">
      <Choice label="Sun height" value={sunId} options={SUNS.map(([id, t]) => [id, t])} onChange={setSunId} />
      <svg viewBox="0 0 640 262" role="img"
        aria-label={`A hill with the sun ${sun} degrees high on the left. The slope facing the sun gets ${pct(sunShare(sun, up))} percent of the light flat ground gets; the slope facing away gets ${pct(sunShare(sun, down))} percent. Cold air flows down into the valley.`}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        <circle cx={26 + 0} cy={26} r="12" fill="#F2C94C" />
        {rays.map(([p, h], i) => <line key={i} x1={p[0]} y1={p[1]} x2={h.x} y2={h.y} stroke="#F2C94C" strokeWidth="1" opacity="0.55" />)}
        <polygon points={[...GROUND, [640, 260], [0, 260]].map((q) => q.join(",")).join(" ")} fill="#3b3326" />
        <polyline points={GROUND.map((q) => q.join(",")).join(" ")} fill="none" stroke="#8B7355" strokeWidth="2" />
        <path d="M330 118 C 400 150, 470 190, 545 222" fill="none" stroke={COLD} strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#coldArrow)" />
        <path d="M300 112 C 230 150, 150 190, 60 224" fill="none" stroke={COLD} strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#coldArrow)" opacity="0.6" />
        <defs>
          <marker id="coldArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={COLD} />
          </marker>
        </defs>
        <ellipse cx="600" cy="236" rx="44" ry="9" fill={COLD} opacity="0.35" />
        <g fontFamily="'Source Sans 3', sans-serif" fontSize="13" fontWeight="600">
          <text x="150" y="250" fill={gold} textAnchor="middle">Facing the equator</text>
          <text x="460" y="250" fill={ink.soft} textAnchor="middle">Facing the pole</text>
          <text x="636" y="222" fill={COLD} textAnchor="end" fontSize="12">Cold air pools</text>
        </g>
      </svg>
      <div style={{ fontSize: "11px", color: ink.faint, margin: "8px 0 0" }}>Sunlight per square metre on the slopes drawn, which are steeper than most vineyards:</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginTop: "4px", textAlign: "center" }}>
        {[["Facing the equator", sunShare(sun, up), gold], ["Flat ground", 1, ink.text], ["Facing the pole", sunShare(sun, down), ink.soft]].map(([label, v, c]) => (
          <div key={label} style={{ background: "#151310", borderRadius: "6px", padding: "8px 4px" }}>
            <div style={{ fontSize: "22px", fontWeight: 700, color: c }}>{pct(v)}%</div>
            <div style={{ fontSize: "11px", color: ink.soft }}>{label}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: "11px", color: ink.faint, margin: "6px 0 0" }}>
        Percentages are the sunlight per square metre compared with flat ground, worked out from the angles drawn (a 27° slope and a 30° slope at 45° N). Real slopes are gentler, so the gap is smaller, but the direction is the same.
      </p>
    </Figure>
  );
};
