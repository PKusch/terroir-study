import { useState } from "react";
import { LEVELS } from "./data.js";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// The EU's three levels as a pyramid, with each country's own words on them.
const SHAPES = [
  { y: 10, h: 70, top: 110, bottom: 180 },
  { y: 84, h: 66, top: 180, bottom: 240 },
  { y: 154, h: 66, top: 240, bottom: 300 }
];
const FILL = ["#C4A962", "#8B7355", "#4a4038"];

export const Pyramid = () => {
  const [c, setC] = useState("France");
  const country = LEVELS.countries.find((x) => x.name === c);
  return (
    <Figure
      title="The EU quality pyramid"
      idea="Every EU wine sits on one of three levels. Each country has its own words for them, but the rules underneath are the EU's. Pick a country to see its words."
      remember="PDO: all grapes from a small named area, tight rules. PGI: at least 85% from a wider area, looser rules. Wine without a geographical indication: no named area below the country. Higher up usually means smaller areas and stricter rules, not always better wine."
      source={LEVELS.source}>
      <Choice label="Country" value={c} onChange={setC} options={LEVELS.countries.map((x) => [x.name, x.name])} />
      <svg viewBox="0 0 760 230" role="img"
        aria-label={`${c}: PDO is ${country.pdo.join(", ")}; PGI is ${country.pgi.join(", ")}; without a geographical indication: ${country.none.join(", ")}.`}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        {SHAPES.map((s, i) => (
          <g key={i} fontFamily="'Source Sans 3', sans-serif">
            <polygon points={`${430 - s.top},${s.y} ${430 + s.top},${s.y} ${430 + s.bottom},${s.y + s.h} ${430 - s.bottom},${s.y + s.h}`} fill={FILL[i]} opacity="0.9" />
            <text x="430" y={s.y + s.h / 2 - 4} textAnchor="middle" fontSize="15" fontWeight="700" fill={i === 0 ? "#1a1a1a" : ink.head}>
              {[country.pdo, country.pgi, country.none][i].join(" · ")}
            </text>
            <text x="430" y={s.y + s.h / 2 + 14} textAnchor="middle" fontSize="11.5" fill={i === 0 ? "#2a2418" : ink.soft}>
              {["PDO: protected designation of origin", "PGI: protected geographical indication", "Wine without a geographical indication"][i]}
            </text>
          </g>
        ))}
        <g fontFamily="'Source Sans 3', sans-serif" fontSize="11" fill={ink.faint}>
          <text x="10" y="30">smaller areas,</text><text x="10" y="44">stricter rules</text>
          <text x="10" y="200">wider areas,</text><text x="10" y="214">fewer rules</text>
          <line x1="40" y1="56" x2="40" y2="180" stroke={ink.faint} markerStart="url(#pyrUp)" />
        </g>
        <defs><marker id="pyrUp" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill={ink.faint} /></marker></defs>
      </svg>
      {country.note && <p style={{ fontSize: "12.5px", color: ink.text, margin: "8px 0 0", lineHeight: 1.55 }}>{country.note}</p>}
    </Figure>
  );
};
