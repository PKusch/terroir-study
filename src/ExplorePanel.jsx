import { useState } from "react";
import { REGIONS } from "./data/france.js";

export const ExplorePanel = ({ region }) => {
  const r = REGIONS[region];
  if (!r) return null;

  const [activeTab, setActiveTab] = useState("overview");

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
            <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "16px" }}>
              <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#722F37", marginBottom: "10px", fontWeight: "600" }}>
                Red Grapes
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {r.keyGrapes.red.map(g => (
                  <span key={g} style={{
                    background: "#722F3722",
                    border: "1px solid #722F3744",
                    color: "#D4A0A0",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px"
                  }}>
                    {g}
                  </span>
                ))}
              </div>
            </div>
          )}
          {r.keyGrapes.white.length > 0 && (
            <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "16px" }}>
              <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "10px", fontWeight: "600" }}>
                White Grapes
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {r.keyGrapes.white.map(g => (
                  <span key={g} style={{
                    background: "#C4A96222",
                    border: "1px solid #C4A96244",
                    color: "#E8D5B7",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px"
                  }}>
                    {g}
                  </span>
                ))}
              </div>
            </div>
          )}
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

const InfoCard = ({ label, value }) => (
  <div style={{ background: "#1E1E1E", borderRadius: "10px", padding: "14px 16px" }}>
    <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "6px" }}>
      {label}
    </div>
    <div style={{ fontSize: "13px", color: "#D5D0C4", lineHeight: "1.6" }}>{value}</div>
  </div>
);
