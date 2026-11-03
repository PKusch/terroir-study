import { useState } from "react";
import { STYLE_FAMILIES } from "./data/styles.js";
import { REGIONS } from "./data/regions.js";

const serif = "'Cormorant Garamond', Georgia, serif";
const gold = "#C4A962";

// The Styles tab: one family of wine (sparkling or fortified) laid out as cards
// with the same rows in the same order, so the methods can be compared.
export const StylesPanel = ({ onStudyRegion }) => {
  const families = STYLE_FAMILIES.filter((f) => f.items.length > 0);
  const [familyId, setFamilyId] = useState(families[0]?.id);
  const family = families.find((f) => f.id === familyId) ?? families[0];
  if (!family) return null;

  return (
    <div>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
        {families.map((f) => (
          <button key={f.id} aria-pressed={f.id === family.id} onClick={() => setFamilyId(f.id)} style={{
            padding: "6px 14px", borderRadius: "6px", fontSize: "11px", letterSpacing: "0.1em",
            textTransform: "uppercase", cursor: "pointer",
            background: f.id === family.id ? gold : "transparent",
            color: f.id === family.id ? "#1a1a1a" : "#8B7355",
            border: f.id === family.id ? "none" : "1px solid #2a2520",
            fontWeight: f.id === family.id ? "600" : "400"
          }}>{f.label}</button>
        ))}
      </div>
      <p style={{ color: "#B8B0A0", fontSize: "14px", lineHeight: 1.6, margin: "0 0 16px" }}>{family.intro}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
        {family.items.map((item) => (
          <section key={item.id} style={{ background: "#1f1c18", border: "1px solid #2a2520", borderRadius: "8px", padding: "14px 16px" }}>
            <h3 style={{ fontFamily: serif, fontSize: "20px", color: "#E8E4D9", margin: "0 0 10px", fontWeight: 600 }}>{item.name}</h3>
            <dl style={{ margin: 0 }}>
              {Object.entries(item.rows).map(([k, v]) => (
                <div key={k} style={{ marginBottom: "8px" }}>
                  <dt style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B7355" }}>{k}</dt>
                  <dd style={{ margin: "2px 0 0", fontSize: "13px", lineHeight: 1.5, color: "#D5D0C4" }}>{v}</dd>
                </div>
              ))}
            </dl>
            {item.regions?.length > 0 && (
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "6px" }}>
                {item.regions.map((key) => (
                  <button key={key} onClick={() => onStudyRegion(key)} style={{
                    background: "none", border: "1px solid #3a3530", color: gold, padding: "3px 10px",
                    borderRadius: "4px", fontSize: "11px", cursor: "pointer"
                  }}>Study {REGIONS[key]?.name} →</button>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
      {family.table && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ fontFamily: serif, fontSize: "18px", color: "#E8E4D9", margin: "0 0 8px", fontWeight: 600 }}>{family.table.title}</h3>
          <table style={{ borderCollapse: "collapse", fontSize: "13px", color: "#D5D0C4" }}>
            <tbody>
              {family.table.rows.map(([term, grams]) => (
                <tr key={term} style={{ borderBottom: "1px solid #2a2520" }}>
                  <th scope="row" style={{ textAlign: "left", padding: "6px 16px 6px 0", color: gold, fontWeight: 500 }}>{term}</th>
                  <td style={{ padding: "6px 0" }}>{grams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
