import { useState } from "react";
import { fermentAt, spiritFor, afterFortify, SUGAR_PER_ABV } from "./logic.js";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// A tank you can stop at any point: let it finish, stop it early, or
// fortify it. Bars show the sugar left and the alcohol made.
const SPIRIT = 77; // grape spirit used for Port, % abv (Fine & Rare, citing the Port rules)
const PORT = 19; // Port is usually 19–22% (Wikipedia)
const SUGAR_MAX = 300, ALC_MAX = 22;

// EU label words for still wine by sugar left (g/L), simplified: the dry and
// medium-dry limits can stretch a little when acidity is high.
export const sweetness = (g) => (g <= 4 ? "dry" : g <= 12 ? "medium dry" : g < 45 ? "medium" : "sweet");

const Bar = ({ label, value, max, unit, colour }) => (
  <div style={{ marginBottom: "8px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: ink.soft, marginBottom: "3px" }}>
      <span>{label}</span><strong style={{ color: colour }}>{value.toFixed(unit === "%" ? 1 : 0)} {unit}</strong>
    </div>
    <div style={{ height: "12px", background: "#2a2520", borderRadius: "6px", overflow: "hidden" }}>
      <div style={{ width: `${Math.min(100, (value / max) * 100)}%`, height: "100%", background: colour, transition: "width 0.2s" }} />
    </div>
  </div>
);

export const Fermentation = () => {
  const [start, setStart] = useState(220);
  const [pct, setPct] = useState(100);
  const [how, setHow] = useState("stop");
  const now = fermentAt(start, pct / 100);
  const add = how === "fortify" ? spiritFor(now.alcohol, SPIRIT, PORT) : null;
  const end = add !== null ? afterFortify(now.alcohol, now.sugar, SPIRIT, add) : now;
  const bubbles = Math.round((pct / 100) * 9);
  return (
    <Figure
      title="Fermentation: sugar into alcohol"
      idea={`Yeast eats the grape's sugar and makes alcohol, carbon dioxide and heat. About ${Math.round(SUGAR_PER_ABV)} g of sugar per litre makes 1% alcohol. Set how ripe the grapes were, then choose when the fermentation ends.`}
      remember="Let it finish: a dry wine, with all the sugar turned into alcohol. Stop it early: sweetness and lower alcohol. Fortify part-way, as for Port: the spirit kills the yeast, leaving sweetness and high alcohol."
      source={{ links: [{ title: "AWRI: sugar and alcohol conversion (16.83 g/L)", url: "https://www.awri.com.au/wp-content/uploads/2018/04/s1809.pdf" }, { title: "Wikipedia: Port wine (19–22%)", url: "https://en.wikipedia.org/wiki/Port_wine" }, { title: "Fine & Rare: Port's 77% grape spirit", url: "https://www.frw.co.uk/editorial/spirited-debate-tale-of-ports-20-percent" }, { title: "EU sweetness terms (Regulation 2019/33, Annex III)", url: "https://eur-lex.europa.eu/eli/reg_del/2019/33/oj" }] }}>
      <label htmlFor="fm-sugar" style={{ fontSize: "12px", color: ink.soft, display: "block" }}>
        Sugar in the juice: <strong style={{ color: gold }}>{start} g/L</strong> (would ferment to about {(start / SUGAR_PER_ABV).toFixed(1)}%)
      </label>
      <input id="fm-sugar" type="range" min="160" max="280" step="10" value={start} onChange={(e) => setStart(+e.target.value)} style={{ width: "100%", accentColor: gold }} />
      <label htmlFor="fm-pct" style={{ fontSize: "12px", color: ink.soft, display: "block", marginTop: "6px" }}>
        How far the fermentation has gone: <strong style={{ color: gold }}>{pct}%</strong>
      </label>
      <input id="fm-pct" type="range" min="0" max="100" step="5" value={pct} onChange={(e) => setPct(+e.target.value)} style={{ width: "100%", accentColor: gold }} />
      <div style={{ marginTop: "8px" }}>
        <Choice label="End of fermentation" value={how} onChange={setHow}
          options={[["stop", pct === 100 ? "Let it finish" : "Stop it here (filter out the yeast)"], ["fortify", `Fortify here to ${PORT}%`]]} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(90px, 120px) 1fr", gap: "16px", alignItems: "center" }}>
        <svg viewBox="0 0 100 140" role="img" aria-label={`A tank: ${end.sugar.toFixed(0)} grams of sugar per litre left, ${end.alcohol.toFixed(1)} percent alcohol.`} style={{ width: "100%", height: "auto" }}>
          <rect x="15" y="10" width="70" height="120" rx="8" fill="#151310" stroke="#8B7355" strokeWidth="2" />
          <rect x="19" y={130 - 4 - (end.sugar / SUGAR_MAX) * 112} width="62" height={(end.sugar / SUGAR_MAX) * 112} fill={gold} opacity="0.75" />
          {Array.from({ length: how === "fortify" ? 0 : bubbles }, (_, i) => (
            <circle key={i} cx={[30, 62, 44, 72, 34, 56, 70, 40, 60][i]} cy={[110, 96, 80, 64, 52, 40, 112, 28, 22][i]} r={2 + (i % 3)} fill="none" stroke="#cfd8dc" opacity="0.7" />
          ))}
          <text x="50" y="8" fontSize="8" textAnchor="middle" fill={ink.faint}>{how === "fortify" ? "spirit added" : bubbles ? "CO₂ escaping" : ""}</text>
        </svg>
        <div>
          <Bar label="Sugar left" value={end.sugar} max={SUGAR_MAX} unit="g/L" colour={gold} />
          <Bar label="Alcohol" value={end.alcohol} max={ALC_MAX} unit="%" colour="#B07AA1" />
          <div style={{ fontSize: "13px", color: ink.text, marginTop: "4px" }}>
            Result: <strong style={{ color: gold }}>{sweetness(end.sugar)}</strong>, {end.alcohol.toFixed(1)}% alcohol
            {add !== null && <span style={{ color: ink.soft }}> · about {Math.round(add * 1000)} ml of {SPIRIT}% spirit per litre</span>}
          </div>
        </div>
      </div>
      <p style={{ fontSize: "11px", color: ink.faint, margin: "8px 0 0" }}>
        Sums use the EU's conversion, {SUGAR_PER_ABV} g/L of sugar for 1% alcohol; AWRI finds real yeasts need about 16.5 to 17.2 g/L. Most grapes are picked at about 22 to 24 °Brix, roughly 220 to 250 g/L of sugar. Sweetness words are the EU's label terms for still wine, simplified; fortified wines like Port have their own rules.
      </p>
    </Figure>
  );
};
