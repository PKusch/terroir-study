import { useState } from "react";
import { NESTS } from "./data.js";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// Places inside places: each country's system, as boxes inside boxes.
const SHADES = ["#2a2520", "#3a3226", "#5a4a30", "#8B7355", "#C4A962"];

export const Nested = () => {
  const [id, setId] = useState(NESTS.examples[0].id);
  const ex = NESTS.examples.find((x) => x.id === id);
  const n = ex.levels.length;
  return (
    <Figure
      title="Places inside places"
      idea="Many systems name areas inside areas. The smaller the area on the label, the more precise the promise about where the grapes grew. Pick a system."
      remember={NESTS.remember}
      source={NESTS.source}>
      <Choice label="System" value={id} onChange={setId} options={NESTS.examples.map((x) => [x.id, x.label])} />
      <svg viewBox="0 0 640 260" role="img" aria-label={`${ex.label}: ${ex.levels.map((l) => `${l.name} (${l.kind})`).join(", inside it ")}.`}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        {ex.levels.map((l, i) => {
          const inset = i * 26;
          const last = i === n - 1;
          return (
            <g key={l.name} fontFamily="'Source Sans 3', sans-serif">
              <rect x={10 + inset * 2.2} y={10 + inset} width={620 - inset * 4.4} height={240 - inset * 2} rx="12" fill={SHADES[Math.min(i + (5 - n), 4)]} stroke={last ? gold : "#101418"} strokeWidth={last ? 2 : 1} />
              <text x={22 + inset * 2.2} y={28 + inset} fontSize="13" fontWeight="700" fill={i >= n - 1 ? "#1a1a1a" : ink.head}>{l.name}</text>
              <text x={618 - inset * 2.2} y={28 + inset} textAnchor="end" fontSize="11" fill={i >= n - 1 ? "#2a2418" : ink.soft}>{l.kind}</text>
            </g>
          );
        })}
      </svg>
      {ex.note && <p style={{ fontSize: "13px", color: ink.text, margin: "8px 0 0", lineHeight: 1.55 }}>{ex.note}</p>}
    </Figure>
  );
};
