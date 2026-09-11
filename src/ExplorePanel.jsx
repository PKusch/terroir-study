import { useState } from "react";
import { REGIONS } from "./data/regions.js";
import { grapeFor, regionsGrowing } from "./data/grapes.js";

export const ExplorePanel = ({ region }) => {
  const r = REGIONS[region];
  if (!r) return null;

  const [activeTab, setActiveTab] = useState("overview");
  // Which grape pill is open, remembered with the region so a new region starts closed.
  const [openGrape, setOpenGrape] = useState(null);
  const selectedGrape = openGrape && openGrape.region === region ? openGrape.name : null;
  const toggleGrape = (name) => setOpenGrape(selectedGrape === name ? null : { region, name });

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "grapes", label: "Grapes" },
    { id: "quality", label: "Quality" }
  ];

  return (
    <div>
      <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: "8px",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              background: activeTab === tab.id ? "#C4A962" : "transparent",
              color: activeTab === tab.id ? "#1a1a1a" : "#B8B0A0",
              border: activeTab === tab.id ? "none" : "1px solid #3a3530",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: activeTab === tab.id ? "600" : "400",
              transition: "all 0.2s"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <InfoCard label="Climate" value={r.climateDetail} />
          <InfoCard label="Soils" value={r.soils} />
          <InfoCard label="Viticulture" value={r.viticultureNotes} />
          <InfoCard label="Winemaking" value={r.winemaking} />
          <InfoCard label="Typical Style" value={r.typicalStyle} />
        </div>
      )}

      {activeTab === "grapes" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {r.keyGrapes.red.length > 0 && (
            <GrapeList label="Red Grapes" grapes={r.keyGrapes.red} colour="red" selected={selectedGrape} onPick={toggleGrape} />
          )}
          {r.keyGrapes.white.length > 0 && (
            <GrapeList label="White Grapes" grapes={r.keyGrapes.white} colour="white" selected={selectedGrape} onPick={toggleGrape} />
          )}
          {selectedGrape && <GrapeProfile nameAsWritten={selectedGrape} region={region} />}
          <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "16px" }}>
            <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "8px" }}>
              Sub-regions
            </div>
            <div style={{ fontSize: "13px", color: "#B8B0A0", lineHeight: "1.7" }}>
              {r.subRegions.join(" · ")}
            </div>
          </div>
        </div>
      )}

      {activeTab === "quality" && (
        <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "12px" }}>
            Quality Hierarchy
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {r.qualityLevels.map((level, i) => (
              <div key={level} style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 12px",
                background: i === r.qualityLevels.length - 1 ? "#C4A96215" : "transparent",
                borderRadius: "6px",
                borderLeft: `3px solid ${i === r.qualityLevels.length - 1 ? "#C4A962" : "#3a3530"}`
              }}>
                <span style={{ fontSize: "11px", color: "#666", width: "20px" }}>{i + 1}</span>
                <span style={{
                  fontSize: "13px",
                  color: i === r.qualityLevels.length - 1 ? "#E8D5B7" : "#B8B0A0",
                  fontWeight: i === r.qualityLevels.length - 1 ? "600" : "400"
                }}>
                  {level}
                </span>
                {i === r.qualityLevels.length - 1 && (
                  <span style={{ fontSize: "10px", color: "#C4A962", marginLeft: "auto" }}>TOP</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Colours for the grape pills: wine-red for reds, gold for whites.
const PILL = {
  red:   { label: "#722F37", bg: "#722F3722", border: "#722F3744", text: "#D4A0A0", activeBg: "#722F37", activeText: "#F5E6E6" },
  white: { label: "#C4A962", bg: "#C4A96222", border: "#C4A96244", text: "#E8D5B7", activeBg: "#C4A962", activeText: "#1a1a1a" }
};

const GrapeList = ({ label, grapes, colour, selected, onPick }) => {
  const c = PILL[colour];
  return (
    <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "16px" }}>
      <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: c.label, marginBottom: "10px", fontWeight: "600" }}>
        {label}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {grapes.map(g => {
          const active = g === selected;
          return (
            <button
              key={g}
              type="button"
              onClick={() => onPick(g)}
              aria-pressed={active}
              title={active ? "Hide profile" : "Show profile"}
              style={{
                background: active ? c.activeBg : c.bg,
                border: `1px solid ${active ? c.activeBg : c.border}`,
                color: active ? c.activeText : c.text,
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: active ? "600" : "400",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              {g}
            </button>
          );
        })}
      </div>
      <div style={{ fontSize: "10px", color: "#666", marginTop: "8px" }}>Click a grape to see its profile.</div>
    </div>
  );
};

// One small pill: a gold label over a one-word level (low / medium / high).
const LevelPill = ({ label, level }) => (
  <div style={{ background: "#2A2724", border: "1px solid #3a3530", borderRadius: "8px", padding: "6px 12px", minWidth: "64px", textAlign: "center" }}>
    <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "2px" }}>{label}</div>
    <div style={{ fontSize: "12px", color: "#E8D5B7", fontWeight: "600", textTransform: "capitalize" }}>{level}</div>
  </div>
);

const GrapeProfile = ({ nameAsWritten, region }) => {
  const g = grapeFor(nameAsWritten);
  if (!g) {
    return (
      <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "16px", fontSize: "13px", color: "#B8B0A0" }}>
        No profile yet for {nameAsWritten}.
      </div>
    );
  }
  // The label on the pill may be a local name ("Rolle (Vermentino)", "Moscato Bianco").
  const localName = nameAsWritten.replace(/\s*\(.*\)\s*$/, "").trim();
  const showLocal = localName.toLowerCase() !== g.name.toLowerCase();
  const grown = regionsGrowing(g.slug, REGIONS);
  const elsewhere = [...new Set([...grown.red, ...grown.white])]
    .filter(k => k !== region && REGIONS[k])
    .map(k => REGIONS[k].name);
  const c = PILL[g.colour];

  return (
    <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "16px", borderTop: `3px solid ${c.label}` }}>
      <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "6px" }}>
        Grape profile
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
        <span style={{ fontSize: "17px", color: "#E8D5B7", fontWeight: "600" }}>{g.name}</span>
        {showLocal && <span style={{ fontSize: "12px", color: "#B8B0A0" }}>known here as {localName}</span>}
      </div>
      <div style={{ fontSize: "12px", color: c.text, marginBottom: "12px", textTransform: "capitalize" }}>{g.colour} grape</div>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
        <LevelPill label="Body" level={g.body} />
        <LevelPill label="Acidity" level={g.acidity} />
        {g.colour === "red" && <LevelPill label="Tannin" level={g.tannin} />}
      </div>

      <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "6px" }}>
        Smells and tastes of
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
        {g.aromas.map(a => (
          <span key={a} style={{ background: "#2A2724", border: "1px solid #3a3530", color: "#D5D0C4", padding: "3px 10px", borderRadius: "20px", fontSize: "12px" }}>
            {a}
          </span>
        ))}
      </div>

      <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "6px" }}>
        Site, oak and age
      </div>
      <div style={{ fontSize: "13px", color: "#D5D0C4", lineHeight: "1.6", marginBottom: "14px" }}>{g.notes}</div>

      <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "6px" }}>
        Also grown in
      </div>
      <div style={{ fontSize: "13px", color: "#B8B0A0", lineHeight: "1.7" }}>
        {elsewhere.length > 0 ? elsewhere.join(" · ") : "No other region on the map lists this grape."}
      </div>
    </div>
  );
};

const InfoCard = ({ label, value }) => (
  <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "14px 16px" }}>
    <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "6px" }}>
      {label}
    </div>
    <div style={{ fontSize: "13px", color: "#D5D0C4", lineHeight: "1.6" }}>{value}</div>
  </div>
);
