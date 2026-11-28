import { useState } from "react";
import { Figure, Choice, gold, ink, COLD, WARM } from "../Figure.jsx";

// Two kinds of frosty night, and which defence works for each.
export const Frost = () => {
  const [kind, setKind] = useState("still");
  const still = kind === "still";
  return (
    <Figure
      title="Spring frost: which defence works?"
      idea="A frost after budburst can kill the young shoots and this year's crop. On a clear, still night the ground loses heat, cold air settles at the bottom and warmer air sits above it. When a mass of cold air blows in, there is no warmer layer at all. Switch between the two nights."
      remember="Wind machines work only when there is a layer of warmer air above the vines to mix down. Sprinklers are the only proven defence against an incoming mass of cold air. Also: choose sites on slopes, use heaters, or prune late to delay budburst."
      source={{ title: "AWRI frost fact sheet", url: "https://www.awri.com.au/files/attachment/frost-fact-sheet" }}>
      <Choice label="Night" value={kind} onChange={setKind} options={[["still", "Clear, still night"], ["wind", "Cold air blowing in"]]} />
      <svg viewBox="0 0 640 230" role="img"
        aria-label={still ? "A clear, still night: cold air near the ground, warmer air above. A wind machine mixes the warmer air down onto the vines." : "A mass of cold air blowing in with no warmer layer above. Wind machines cannot help; sprinklers coat the buds with ice."}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        <defs>
          <linearGradient id="frAir" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor={COLD} stopOpacity="0.55" />
            <stop offset={still ? "0.45" : "1"} stopColor={COLD} stopOpacity="0.3" />
            <stop offset="1" stopColor={still ? WARM : COLD} stopOpacity={still ? 0.35 : 0.3} />
          </linearGradient>
          <marker id="frArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill={gold} /></marker>
        </defs>
        <rect x="0" y="0" width="640" height="200" fill="url(#frAir)" />
        <rect x="0" y="200" width="640" height="30" fill="#3b3326" />
        {[80, 140, 200, 440, 500, 560].map((x) => (
          <g key={x}><rect x={x - 3} y="160" width="6" height="40" fill="#6b4a2e" /><circle cx={x} cy="156" r="6" fill="#7BC47B" /></g>
        ))}
        {still ? (
          <g>
            <rect x="315" y="60" width="10" height="140" fill="#888" />
            <path d="M285 60 L355 60" stroke="#ccc" strokeWidth="6" strokeLinecap="round" />
            <path d="M320 30 C 260 40, 250 120, 220 160" stroke={gold} strokeWidth="3" fill="none" markerEnd="url(#frArrow)" />
            <path d="M320 30 C 380 40, 390 120, 420 160" stroke={gold} strokeWidth="3" fill="none" markerEnd="url(#frArrow)" />
            <g fontFamily="'Source Sans 3', sans-serif" fontSize="12">
              <text x="630" y="24" textAnchor="end" fill={WARM}>warmer air above</text>
              <text x="630" y="190" textAnchor="end" fill={COLD}>coldest air at the ground</text>
              <text x="320" y="216" textAnchor="middle" fill={ink.head}>wind machine mixes warmer air down</text>
            </g>
          </g>
        ) : (
          <g>
            {[40, 90, 140].map((y) => <path key={y} d={`M10 ${y} L 120 ${y}`} stroke={COLD} strokeWidth="3" markerEnd="url(#frArrow)" />)}
            {[80, 140, 200, 440, 500, 560].map((x) => <g key={x}><circle cx={x} cy="156" r="9" fill="none" stroke="#dfeaf2" strokeWidth="2.5" />{[-8, 0, 8].map((d) => <line key={d} x1={x + d} y1="120" x2={x + d} y2="144" stroke="#9fc8e8" strokeDasharray="2 4" />)}</g>)}
            <g fontFamily="'Source Sans 3', sans-serif" fontSize="12">
              <text x="130" y="94" fill={COLD}>cold air mass blows in; no warm layer</text>
              <text x="320" y="216" textAnchor="middle" fill={ink.head}>sprinklers coat the buds in ice</text>
            </g>
          </g>
        )}
      </svg>
      <p style={{ fontSize: "13px", color: ink.text, lineHeight: 1.55, margin: "8px 0 0" }}>
        {still ? "With warmer air a few metres up, wind machines (and heaters) can lift the temperature around the buds." : "A wind machine would only stir cold air into cold air. Sprinklers keep the buds coated in water as it freezes; while water is turning to ice it releases heat, which holds the bud at about 0 °C."}
      </p>
    </Figure>
  );
};
