import { useState } from "react";
import { STAGES, MONTHS, monthsOf, CALENDAR_NOTES, CALENDAR_SOURCE } from "./data/calendar.js";

const gold = "#C4A962";

// The vine's year as a month-by-month chart, for either hemisphere.
export const GrowthCalendar = () => {
  const [half, setHalf] = useState("north");
  return (
    <div style={{ background: "#1f1c18", border: `1px solid ${gold}55`, borderRadius: "8px", padding: "14px 16px", marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "10px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B7355" }}>The vine's year</div>
        <div role="group" aria-label="Hemisphere" style={{ display: "flex", gap: "6px" }}>
          {[["north", "Northern hemisphere"], ["south", "Southern hemisphere"]].map(([id, label]) => (
            <button key={id} aria-pressed={half === id} onClick={() => setHalf(id)} style={{
              background: half === id ? gold : "none", color: half === id ? "#1a1a1a" : "#B8B0A0",
              border: "1px solid #3a3530", borderRadius: "4px", padding: "3px 10px", fontSize: "11px", cursor: "pointer"
            }}>{label}</button>
          ))}
        </div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "separate", borderSpacing: "2px", width: "100%", minWidth: "520px", fontSize: "11px", color: "#B8B0A0" }}>
          <caption className="visually-hidden">When each stage of the vine's year happens in the {half === "north" ? "northern" : "southern"} hemisphere</caption>
          <thead>
            <tr>
              <th scope="col" style={{ textAlign: "left", fontWeight: 400, width: "130px" }}></th>
              {MONTHS.map((m) => <th key={m} scope="col" style={{ fontWeight: 400, color: "#8B7355" }}>{m}</th>)}
            </tr>
          </thead>
          <tbody>
            {STAGES.map((s) => {
              const on = new Set(monthsOf(s[half]));
              return (
                <tr key={s.id}>
                  <th scope="row" style={{ textAlign: "left", fontWeight: 400, color: "#D5D0C4", paddingRight: "6px" }}>{s.label}</th>
                  {MONTHS.map((m, i) => (
                    <td key={m} aria-label={on.has(i + 1) ? `${s.label} in ${m}` : undefined}
                      style={{ height: "16px", borderRadius: "3px", background: on.has(i + 1) ? s.colour : "#2a2520" }} />
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ul style={{ margin: "10px 0 0", paddingLeft: "18px", fontSize: "12px", color: "#B8B0A0", lineHeight: 1.6 }}>
        <li>Approximate months; real dates vary by region, grape and year.</li>
        {CALENDAR_NOTES.map((n) => <li key={n}>{n}</li>)}
      </ul>
      <div style={{ fontSize: "11px", color: "#7a7268", marginTop: "6px" }}>
        Months from <a href={CALENDAR_SOURCE.url} target="_blank" rel="noreferrer" style={{ color: gold }}>{CALENDAR_SOURCE.title}</a>.
      </div>
    </div>
  );
};
