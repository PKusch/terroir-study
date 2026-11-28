import { useState } from "react";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// A vine in winter, after pruning, three ways. Buds are the gold dots: each
// will give a shoot, and the shoots carry this year's bunches.
const WOOD = "#6b4a2e", CANE = "#a07850";
const bud = (x, y, k) => <circle key={k} cx={x} cy={y} r="3.5" fill={gold} />;
const SYSTEMS = {
  cordon: {
    label: "Cordon, spur-pruned",
    say: "A permanent arm (cordon) runs along the wire. Pruning leaves short spurs of two to four buds along it each winter.",
    draw: () => (
      <g>
        <rect x="313" y="120" width="14" height="110" fill={WOOD} />
        <rect x="150" y="112" width="340" height="12" rx="6" fill={WOOD} />
        {[175, 230, 285, 355, 410, 465].map((x) => (
          <g key={x}><rect x={x - 3} y="96" width="6" height="18" fill={CANE} />{bud(x, 104, 1)}{bud(x, 96, 2)}</g>
        ))}
      </g>
    )
  },
  cane: {
    label: "Head, cane-pruned",
    say: "Only the trunk and its head are permanent. Each winter one or two long canes from last year are kept, bent along the wire, and the rest cut away; new canes replace them next year.",
    draw: () => (
      <g>
        <rect x="313" y="110" width="14" height="120" fill={WOOD} />
        <path d="M320 112 Q 250 100 150 116" stroke={CANE} strokeWidth="6" fill="none" />
        <path d="M320 112 Q 390 100 490 116" stroke={CANE} strokeWidth="6" fill="none" />
        {[170, 200, 230, 260, 290, 350, 380, 410, 440, 470].map((x, i) => bud(x, 108 + Math.abs(x - 320) / 40 - 2, i))}
        <rect x="300" y="100" width="6" height="12" fill={CANE} />{bud(303, 100, "r")}
        <text x="290" y="92" fontSize="11" fill={ink.soft} textAnchor="end" fontFamily="'Source Sans 3', sans-serif">renewal spur</text>
      </g>
    )
  },
  bush: {
    label: "Head, spur-pruned bush vine",
    say: "No wires: a short trunk with a head of spurs, each with a few buds. The vine stands on its own, like a small bush.",
    draw: () => (
      <g>
        <rect x="313" y="160" width="14" height="70" fill={WOOD} />
        {[[-50, -50], [-25, -62], [0, -68], [25, -62], [50, -50]].map(([dx, dy], i) => (
          <g key={i}>
            <path d={`M320 162 L${320 + dx} ${162 + dy}`} stroke={WOOD} strokeWidth="8" strokeLinecap="round" />
            {bud(320 + dx, 162 + dy - 6, "a")}{bud(320 + dx * 1.05, 162 + dy - 14, "b")}
          </g>
        ))}
      </g>
    )
  }
};

export const Pruning = () => {
  const [id, setId] = useState("cordon");
  const s = SYSTEMS[id];
  return (
    <Figure
      title="Training and pruning"
      idea="Training is the shape of the permanent wood: a head (just a trunk) or a cordon (a trunk with a permanent arm), on wires or free-standing. Pruning, each winter, decides how many buds stay. Each gold bud gives a shoot, and the shoots carry the bunches."
      remember="Spur pruning: short spurs of two to four buds on permanent wood. Cane (replacement cane) pruning: longer canes, renewed every year. By choosing the buds, pruning sets the size of the crop."
      source={{ title: "Penn State Extension: cane and spur pruning", url: "https://extension.psu.edu/grapevine-cane-and-spur-pruning-fundamentals" }}>
      <Choice label="System" value={id} onChange={setId} options={Object.entries(SYSTEMS).map(([k, v]) => [k, v.label])} />
      <svg viewBox="110 50 450 200" role="img" aria-label={`${s.label}: ${s.say}`}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        {id !== "bush" && <line x1="125" x2="515" y1="118" y2="118" stroke="#666" strokeWidth="1.5" />}
        <rect x="110" y="230" width="450" height="20" fill="#3b3326" />
        {s.draw()}
        <g fontFamily="'Source Sans 3', sans-serif" fontSize="11" fill={ink.soft}>
          {id !== "bush" && <text x="520" y="122">wire</text>}
          <text x="120" y="246">winter, after pruning</text>
        </g>
      </svg>
      <p style={{ fontSize: "13px", color: ink.text, lineHeight: 1.55, margin: "8px 0 0" }}>{s.say}</p>
    </Figure>
  );
};
