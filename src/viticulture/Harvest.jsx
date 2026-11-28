import { Figure, gold, ink } from "../Figure.jsx";

// Hand against machine, point by point.
const ROWS = [
  ["Whole bunches", "Yes", "No: the grapes are broken"],
  ["Choose the fruit (leave rotten or unripe)", "Yes", "No"],
  ["Speed", "Slow", "Fast, and can work at night"],
  ["Cost", "High", "Much lower"],
  ["Steep slopes", "Yes", "Often not possible"],
  ["Needed for", "Whole-bunch fermentation, Champagne (hand picking only)", "Large, flat vineyards"]
];

export const Harvest = () => (
  <Figure
    title="Harvest: by hand or by machine"
    idea="Both are used for fine wine; the choice depends on the style, the site and the cost."
    remember="Only hand picking keeps whole bunches and lets pickers choose the fruit. Machines are faster, can work in the cool of the night and cost much less, but break the grapes. Champagne allows only hand picking.">
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", color: ink.text, minWidth: "420px" }}>
        <thead>
          <tr>
            <th scope="col" style={{ textAlign: "left", padding: "6px 8px", color: ink.label, fontWeight: 400 }}></th>
            <th scope="col" style={{ textAlign: "left", padding: "6px 8px", color: gold }}>✋ By hand</th>
            <th scope="col" style={{ textAlign: "left", padding: "6px 8px", color: ink.head }}>🚜 By machine</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(([k, a, b]) => (
            <tr key={k} style={{ borderTop: "1px solid #2a2520" }}>
              <th scope="row" style={{ textAlign: "left", padding: "6px 8px", color: ink.soft, fontWeight: 400 }}>{k}</th>
              <td style={{ padding: "6px 8px" }}>{a}</td>
              <td style={{ padding: "6px 8px" }}>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Figure>
);
