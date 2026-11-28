import { Figure, gold, ink, WARM, COLD } from "../Figure.jsx";

// What each part of a dish does to the taste of the wine: up arrows make the
// wine seem more of that, down arrows less. From the Food cards below.
const COLS = ["Bitterness", "Acidity", "Alcohol burn", "Sweetness", "Fruit", "Body", "Tannin"];
export const GRID = [
  ["Sweetness", { Bitterness: 1, Acidity: 1, "Alcohol burn": 1, Sweetness: -1, Fruit: -1, Body: -1 }, "high"],
  ["Umami", { Bitterness: 1, Acidity: 1, "Alcohol burn": 1, Sweetness: -1, Fruit: -1, Body: -1 }, "high"],
  ["Bitterness", { Bitterness: 1 }, "high"],
  ["Chilli heat", { Bitterness: 1, Acidity: 1, "Alcohol burn": 1 }, "high"],
  ["Salt", { Bitterness: -1, Acidity: -1, Body: 1 }, "low"],
  ["Acidity", { Acidity: -1, Sweetness: 1, Fruit: 1, Body: 1 }, "low"],
  ["Fat and oil", { Tannin: -1 }, "—"]
];

export const FoodGrid = () => (
  <Figure
    title="What food does to wine"
    idea="Read across: each part of a dish pushes the taste of the wine up (▲, more) or down (▼, less). Red arrows make the wine seem harder; green ones softer."
    remember="High-risk foods (sweetness, umami, bitterness, chilli heat) make wine seem harder: more bitter, more acidic, more alcohol burn. Low-risk foods (salt, acidity) make it seem softer, fuller and fruitier.">
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", minWidth: "560px", borderCollapse: "separate", borderSpacing: "3px", fontSize: "12px", color: ink.text }}>
        <caption className="visually-hidden">How each part of a dish changes the taste of a wine</caption>
        <thead>
          <tr>
            <th scope="col" style={{ textAlign: "left", color: ink.label, fontWeight: 400 }}>In the food</th>
            {COLS.map((c) => <th key={c} scope="col" style={{ color: ink.label, fontWeight: 400, padding: "4px" }}>{c}</th>)}
            <th scope="col" style={{ color: ink.label, fontWeight: 400 }}>Risk</th>
          </tr>
        </thead>
        <tbody>
          {GRID.map(([food, fx, risk]) => (
            <tr key={food}>
              <th scope="row" style={{ textAlign: "left", color: ink.head, fontWeight: 600, padding: "4px 6px" }}>{food}</th>
              {COLS.map((c) => {
                const v = fx[c];
                // Harder: more bitterness, acidity or burn, less sweetness, fruit or body. Softer: the reverse.
                const harder = v && (["Bitterness", "Acidity", "Alcohol burn", "Tannin"].includes(c) ? v > 0 : v < 0);
                return (
                  <td key={c} aria-label={v ? `${v > 0 ? "more" : "less"} ${c.toLowerCase()}` : "no change"}
                    style={{ textAlign: "center", padding: "6px 2px", borderRadius: "4px", background: v ? (harder ? "#E07A5F33" : "#7BC47B33") : "#1a1714", color: v ? (harder ? "#E8A090" : "#9fd89f") : ink.faint, fontSize: "14px" }}>
                    {v ? (v > 0 ? "▲" : "▼") : "·"}
                  </td>
                );
              })}
              <td style={{ textAlign: "center", fontSize: "11px", color: risk === "high" ? "#E8A090" : risk === "low" ? "#9fd89f" : ink.soft }}>{risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p style={{ fontSize: "11px", color: ink.faint, margin: "6px 0 0" }}>Fat is neither high nor low risk: it softens tannin, and a high-acid wine cuts through it.</p>
  </Figure>
);
