import { useState } from "react";
import { Figure, Choice, gold, ink, COLD } from "../Figure.jsx";

// Each sparkling method as a row of steps, with the vessel each step happens
// in: the bottle (gold) or a sealed tank (blue). The traditional and transfer
// methods share the bottle fermentation; they part at the clearing.
const B = "bottle", T = "tank", N = "none";
export const METHODS = {
  traditional: { label: "Traditional", steps: [["Base wine", T], ["Add sugar and yeast (liqueur de tirage)", B], ["Second fermentation in the bottle", B], ["Months on the lees", B], ["Riddling: yeast slides into the neck", B], ["Disgorging: the yeast plug is removed", B], ["Dosage, cork and cage", B]], end: "Sold in the bottle it fermented in." },
  transfer: { label: "Transfer", steps: [["Base wine", T], ["Add sugar and yeast", B], ["Second fermentation in the bottle", B], ["Time on the lees", B], ["Emptied into a pressurised tank", T], ["Filtered and dosed", T], ["Into new bottles", B]], end: "No riddling or disgorging; may say 'bottle-fermented' but not 'traditional method'." },
  tank: { label: "Tank", steps: [["Base wine", T], ["Sugar and yeast, sealed tank", T], ["Second fermentation in the tank", T], ["Little or no time on the lees", T], ["Filtered under pressure", T], ["Bottled", B]], end: "Fresh, fruity and to drink young, as in Prosecco." },
  asti: { label: "Asti", steps: [["Grape juice", T], ["One fermentation in a sealed tank, keeping the CO₂", T], ["Stopped by chilling", T], ["Yeast filtered out", T], ["Bottled", B]], end: "Only one fermentation: sweet, grapey and low in alcohol." },
  ancestral: { label: "Ancestral", steps: [["Grape juice", T], ["Fermentation starts", T], ["Bottled before it ends", B], ["Fermentation finishes in the bottle", B], ["Often not cleared", B]], end: "Light, fruity, often sweet; may be cloudy, as in pét-nat." },
  carbonation: { label: "Carbonation", steps: [["Still wine", T], ["Carbon dioxide pumped in", T], ["Bottled", B]], end: "Large bubbles that fade fast; EU labels say 'aerated'." }
};

const Icon = ({ v }) => v === B
  ? <svg width="14" height="22" viewBox="0 0 14 22" aria-hidden="true"><path d="M5 0h4v6q0 2 3 4v11q0 1-1 1H3q-1 0-1-1V10q3-2 3-4z" fill={gold} /></svg>
  : <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden="true"><rect x="1" y="2" width="16" height="17" rx="3" fill={COLD} /><rect x="6" y="0" width="6" height="3" fill={COLD} /></svg>;

export const Methods = () => {
  const [id, setId] = useState("traditional");
  const m = METHODS[id];
  return (
    <Figure
      title="Six ways to make bubbles"
      idea="Every sparkling wine traps carbon dioxide. What differs is where the second fermentation happens, in the bottle or in a tank, and how the yeast is cleared. Gold steps happen in the bottle, blue ones in a tank. Compare traditional with transfer: they part at the clearing."
      remember="Traditional: second fermentation and clearing in the same bottle (riddling, disgorging). Transfer: bottle fermentation, then emptied into a tank to clear. Tank: all in a sealed tank. Asti: one fermentation, stopped early. Ancestral: bottled before the first fermentation ends. Carbonation: CO₂ pumped in.">
      <Choice label="Method" value={id} onChange={setId} options={Object.entries(METHODS).map(([k, v]) => [k, v.label])} />
      <ol aria-label={`${m.label} method`} style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center" }}>
        {m.steps.map(([s, v], i) => (
          <li key={s} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "6px 10px", borderRadius: "6px", fontSize: "13px", color: ink.text,
              background: v === B ? "#C4A96222" : "#6FA8DC22", border: `1px solid ${v === B ? gold : COLD}` }}>
              <Icon v={v} /><span className="visually-hidden">{v === B ? "in the bottle: " : "in a tank: "}</span>{s}
            </span>
            {i < m.steps.length - 1 && <span aria-hidden="true" style={{ color: ink.faint }}>→</span>}
          </li>
        ))}
      </ol>
      <p style={{ fontSize: "13px", color: ink.text, margin: "10px 0 0" }}>{m.end}</p>
      <div style={{ overflowX: "auto", marginTop: "12px" }}>
        <table style={{ width: "100%", minWidth: "520px", borderCollapse: "collapse", fontSize: "12px", color: ink.text }}>
          <caption className="visually-hidden">The six methods compared</caption>
          <thead><tr>{["", "Second fermentation", "Lees contact", "Riddling and disgorging", "Bubbles from"].map((h) => <th key={h} scope="col" style={{ textAlign: "left", padding: "5px 6px", color: ink.label, fontWeight: 400 }}>{h}</th>)}</tr></thead>
          <tbody>
            {[["Traditional", "In bottle", "Months to years", "Yes", "Fermentation"], ["Transfer", "In bottle", "Yes, before the transfer", "No", "Fermentation"], ["Tank", "In tank", "Little or none", "No", "Fermentation"], ["Asti", "None (one only)", "None", "No", "Fermentation"], ["Ancestral", "None (first one finishes in bottle)", "Often left in", "Often none", "Fermentation"], ["Carbonation", "None", "None", "No", "Added gas"]].map((r) => (
              <tr key={r[0]} style={{ borderTop: "1px solid #2a2520", background: r[0].toLowerCase() === id ? "#C4A96215" : "transparent" }}>
                {r.map((c, i) => i === 0 ? <th key={i} scope="row" style={{ textAlign: "left", padding: "5px 6px", color: gold }}>{c}</th> : <td key={i} style={{ padding: "5px 6px" }}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Figure>
  );
};
