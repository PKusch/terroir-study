import { useState } from "react";
import { STAGES, MONTHS, monthsOf } from "../data/calendar.js";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// A month-by-month chart: the vine's stages on top, then rows of hazards or
// grower's tasks. Months are for the northern hemisphere; the southern view
// shifts everything by six months.
const shift = (m, south) => (south ? ((m + 5) % 12) + 1 : m);

export const YearChart = ({ title, idea, remember, source, rows, rowColour, note }) => {
  const [half, setHalf] = useState("north");
  const south = half === "south";
  return (
    <Figure title={title} idea={idea} remember={remember} source={source}>
      <Choice label="Hemisphere" value={half} onChange={setHalf} options={[["north", "Northern hemisphere"], ["south", "Southern hemisphere"]]} />
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "separate", borderSpacing: "2px", width: "100%", minWidth: "560px", fontSize: "11px", color: ink.soft }}>
          <caption className="visually-hidden">{title}, {south ? "southern" : "northern"} hemisphere</caption>
          <thead>
            <tr>
              <th scope="col" style={{ width: "170px" }}></th>
              {MONTHS.map((m) => <th key={m} scope="col" style={{ fontWeight: 400, color: ink.label }}>{m}</th>)}
            </tr>
          </thead>
          <tbody>
            {STAGES.map((s) => {
              const on = new Set(monthsOf(s[half]));
              return (
                <tr key={s.id}>
                  <th scope="row" style={{ textAlign: "left", fontWeight: 400, color: ink.faint, paddingRight: "6px" }}>{s.label}</th>
                  {MONTHS.map((m, i) => <td key={m} style={{ height: "8px", borderRadius: "2px", background: on.has(i + 1) ? s.colour : "#221f1b", opacity: 0.55 }} />)}
                </tr>
              );
            })}
            <tr><td colSpan="13" style={{ height: "6px" }} /></tr>
            {rows.map((r) => {
              const on = new Set(monthsOf(r.months).map((m) => shift(m, south)));
              return (
                <tr key={r.label}>
                  <th scope="row" style={{ textAlign: "left", fontWeight: 600, color: ink.text, paddingRight: "6px" }}>{r.label}</th>
                  {MONTHS.map((m, i) => (
                    <td key={m} aria-label={on.has(i + 1) ? `${r.label} in ${m}` : undefined} title={on.has(i + 1) ? r.what : undefined}
                      style={{ height: "18px", borderRadius: "3px", background: on.has(i + 1) ? (r.colour ?? rowColour ?? gold) : "#2a2520" }} />
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ul style={{ margin: "10px 0 0", paddingLeft: "18px", fontSize: "12.5px", color: ink.text, lineHeight: 1.6 }}>
        {rows.map((r) => <li key={r.label}><strong style={{ color: ink.head }}>{r.label}:</strong> {r.what}</li>)}
      </ul>
      {note && <p style={{ fontSize: "11px", color: ink.faint, margin: "6px 0 0" }}>{note}</p>}
    </Figure>
  );
};
