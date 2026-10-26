import { REGIONS, COUNTRIES } from "./data/regions.js";

// A row of small buttons, one per region of the country on screen. The map shapes
// get small where a country has many regions, so this is the sure way to reach
// any of them, with a mouse, a finger or the keyboard.
export const RegionChips = ({ country, activeRegion, onSelect }) => (
  <nav aria-label={`Regions of ${country}`} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "6px", padding: "10px 16px 0" }}>
    {COUNTRIES[country].map((key) => {
      const r = REGIONS[key];
      const on = key === activeRegion;
      return (
        <button
          key={key}
          onClick={() => onSelect(key)}
          aria-pressed={on}
          style={{
            background: on ? r.color + "33" : "none",
            border: `1px solid ${on ? r.color : "#3a3530"}`,
            color: on ? "#E8E4D9" : "#B8B0A0",
            padding: "3px 10px", borderRadius: "999px", fontSize: "11px", cursor: "pointer"
          }}
        >
          {r.name}
        </button>
      );
    })}
  </nav>
);
