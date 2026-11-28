import { useState } from "react";
import { Figure, gold, ink } from "../Figure.jsx";

// Pick the weather; see which diseases (or noble rot) it brings.
const WEATHER = [
  { id: "wet", icon: "🌧", label: "Long spells of rain and cloud", get: [["Downy mildew", "bad"], ["Botrytis bunch rot (grey rot)", "bad"]], note: "Fungicides alone are not enough; an open canopy helps the vines dry." },
  { id: "dry", icon: "☀️", label: "Dry and sunny", get: [["Powdery mildew", "bad"]], note: "Powdery mildew can be a problem even in dry regions." },
  { id: "misty", icon: "🌫", label: "Misty mornings, warm sunny afternoons (late season)", get: [["Noble rot", "good"]], note: "The same fungus as grey rot, Botrytis cinerea, shrivels ripe grapes and concentrates their sugar: the start of Sauternes and Tokaji." },
  { id: "staywet", icon: "☔", label: "Misty, then it stays wet", get: [["Grey rot instead of noble rot", "bad"]], note: "Without the dry afternoons, the fungus spoils the bunches." }
];

export const Weather = () => {
  const [id, setId] = useState("wet");
  const w = WEATHER.find((x) => x.id === id);
  return (
    <Figure
      title="Weather and disease"
      idea="Most vine diseases are fungi, and the weather decides which ones thrive. Pick the weather."
      remember="Rain and cloud: downy mildew and botrytis bunch rot. Dry: powdery mildew can still strike. Misty mornings then dry, sunny afternoons: noble rot. Phylloxera is a different case, an insect that feeds on the roots' sap and damages them; the answer is grafting onto American rootstock."
      source={{ title: "Penn State Extension: managing fungal diseases of grapevines", url: "https://extension.psu.edu/fundamental-considerations-for-managing-fungal-diseases-of-grapevines" }}>
      <div role="group" aria-label="Weather" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "6px", marginBottom: "10px" }}>
        {WEATHER.map((x) => (
          <button key={x.id} aria-pressed={id === x.id} onClick={() => setId(x.id)} style={{
            background: id === x.id ? "#2a2418" : "#151310", border: `1px solid ${id === x.id ? gold : "#2a2520"}`, borderRadius: "8px",
            padding: "10px 8px", color: ink.text, fontSize: "12px", cursor: "pointer", textAlign: "center"
          }}>
            <div aria-hidden="true" style={{ fontSize: "26px", lineHeight: 1.2 }}>{x.icon}</div>{x.label}
          </button>
        ))}
      </div>
      <div aria-live="polite" style={{ background: "#151310", borderRadius: "8px", padding: "12px 14px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "6px" }}>
          {w.get.map(([name, kind]) => (
            <span key={name} style={{ padding: "4px 10px", borderRadius: "12px", fontSize: "13px", fontWeight: 600,
              background: kind === "good" ? "#C4A96233" : "#E07A5F33", color: kind === "good" ? gold : "#E8A090", border: `1px solid ${kind === "good" ? gold : "#E07A5F"}` }}>
              {kind === "good" ? "Wanted: " : "Risk: "}{name}
            </span>
          ))}
        </div>
        <div style={{ fontSize: "13px", color: ink.text, lineHeight: 1.55 }}>{w.note}</div>
      </div>
    </Figure>
  );
};
