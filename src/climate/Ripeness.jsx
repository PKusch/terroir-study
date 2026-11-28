import { useState } from "react";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// What a warmer or cooler climate does to the grape, and so to the wine.
// Levels run 1 (low) to 4 (high); they show direction, not measurements.
const BANDS = [
  { id: "cool", label: "Cool", fruit: "Fresh, tart, less ripe fruit. Under-ripe grapes can taste green: green pepper in Cabernet Sauvignon or Sauvignon Blanc.", grape: "#A9B86A", redGrape: "#8E3B5A" },
  { id: "moderate", label: "Moderate", fruit: "Ripe fruit with freshness still there.", grape: "#C7C46A", redGrape: "#6E2A4C" },
  { id: "warm", label: "Warm", fruit: "Very ripe fruit; acidity starts to fade.", grape: "#D9B45A", redGrape: "#4F1E3D" },
  { id: "hot", label: "Hot", fruit: "Very ripe or even cooked fruit, with little freshness.", grape: "#D99A45", redGrape: "#3A1530" }
];
const BARS = [
  ["Sugar, so alcohol", [1, 2, 3, 4]],
  ["Acidity", [4, 3, 2, 1]],
  ["Body", [1, 2, 3, 4]],
  ["Riper, softer tannin (black grapes)", [1, 2, 3, 4]]
];

const Bunch = ({ colour, x }) => (
  <g transform={`translate(${x},10)`}>
    <path d="M30 0 L30 12" stroke="#8B7355" strokeWidth="3" />
    {[[18, 18], [30, 18], [42, 18], [12, 30], [24, 30], [36, 30], [48, 30], [18, 42], [30, 42], [42, 42], [24, 54], [36, 54], [30, 66]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="7" fill={colour} stroke="#1a1a1a" strokeWidth="1" />
    ))}
  </g>
);

export const Ripeness = () => {
  const [id, setId] = useState("cool");
  const i = BANDS.findIndex((b) => b.id === id);
  const b = BANDS[i];
  return (
    <Figure
      title="What warmth does to the grape"
      idea="Pick a climate. More warmth and sun mean more sugar and less acid in the grape, and riper flavours. This is the chain behind almost every 'why' question about a region."
      remember="Cool: more acid, less alcohol, lighter body, fresh fruit. Hot: less acid, more alcohol, fuller body, very ripe or cooked fruit. In black grapes, unripe seeds give harsh, bitter tannins; riper grapes give softer ones."
      source={{ links: [
        { title: "WSET: how does geography affect a wine's style?", url: "https://wsetglobal.com/knowledge-centre/blog/2021/august/24/how-does-geography-affect-a-wine-s-style" },
        { title: "Wikipedia: ripeness in viticulture (tannin, green pepper)", url: "https://en.wikipedia.org/wiki/Ripeness_in_viticulture" }] }}>
      <Choice label="Climate" value={id} options={BANDS.map((x) => [x.id, x.label])} onChange={setId} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "14px", alignItems: "center" }}>
        <svg viewBox="0 0 160 90" role="img" aria-label={`A white and a black grape bunch as they ripen in a ${b.label.toLowerCase()} climate`} style={{ width: "100%", maxWidth: "180px", height: "auto", justifySelf: "center" }}>
          <Bunch colour={b.grape} x={6} />
          <Bunch colour={b.redGrape} x={86} />
        </svg>
        <div>
          {BARS.map(([label, levels]) => (
            <div key={label} style={{ display: "grid", gridTemplateColumns: "minmax(0, 11em) minmax(70px, 1fr)", gap: "8px", alignItems: "center", marginBottom: "5px" }}>
              <span style={{ fontSize: "12px", color: ink.soft }}>{label}</span>
              <div aria-label={`${label}: ${["low", "medium-", "medium+", "high"][levels[i] - 1]}`} role="img" style={{ display: "flex", gap: "3px" }}>
                {[1, 2, 3, 4].map((n) => (
                  <span key={n} style={{ flex: 1, height: "10px", borderRadius: "2px", background: n <= levels[i] ? gold : "#2a2520", transition: "background 0.2s" }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "#151310", borderRadius: "6px", padding: "8px 10px", color: ink.text, marginTop: "10px", fontSize: "13px" }}>
        <span style={{ color: ink.label, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>Flavour</span>{b.fruit}
      </div>
      <p style={{ fontSize: "11px", color: ink.faint, margin: "6px 0 0" }}>The bars show the direction of change, not measurements. Grape variety, winemaking and the year all move the result.</p>
    </Figure>
  );
};
