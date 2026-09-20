import { useState } from "react";
import { activateOnKey } from "./a11y.js";
import { REGIONS } from "./data/regions.js";

export const ConnectionChain = ({ region }) => {
  const r = REGIONS[region];
  if (!r) return null;

  const chain = [
    { label: "Climate", value: r.climate, detail: r.climateDetail, icon: "☀️" },
    { label: "Soil", value: r.soils.split(".")[0], detail: r.soils, icon: "🪨" },
    { label: "Grapes", value: [...(r.keyGrapes.red || []), ...(r.keyGrapes.white || [])].slice(0, 3).join(", "), detail: r.viticultureNotes, icon: "🍇" },
    { label: "Winemaking", value: r.winemaking.split(".")[0], detail: r.winemaking, icon: "🏺" },
    { label: "Style", value: r.typicalStyle.split(".")[0], detail: r.typicalStyle, icon: "🍷" }
  ];

  const [expandedStep, setExpandedStep] = useState(null);

  return (
    <div style={{ padding: "0" }}>
      <div style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a1f1f 100%)",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "16px",
        border: "1px solid #3a2f2f"
      }}>
        <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#C4A962", marginBottom: "8px" }}>
          Why it works
        </div>
        <div style={{ fontSize: "14px", lineHeight: "1.6", color: "#E8E4D9" }}>
          {r.whyConnection}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {chain.map((step, i) => (
          <div key={i}>
            <div
              role="button"
              tabIndex={0}
              aria-expanded={expandedStep === i}
              onClick={() => setExpandedStep(expandedStep === i ? null : i)}
              onKeyDown={activateOnKey(() => setExpandedStep(expandedStep === i ? null : i))}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                background: expandedStep === i ? "#2a2420" : "#1E1E1E",
                borderRadius: i === 0 ? "10px 10px 2px 2px" : i === chain.length - 1 ? "2px 2px 10px 10px" : "2px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                border: expandedStep === i ? "1px solid #C4A962" : "1px solid transparent"
              }}
            >
              <span style={{ fontSize: "18px", width: "28px", textAlign: "center" }}>{step.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4A962", marginBottom: "2px" }}>
                  {step.label}
                </div>
                <div style={{ fontSize: "13px", color: "#E8E4D9" }}>{step.value}</div>
              </div>
              {i < chain.length - 1 && (
                <span style={{ color: "#C4A962", fontSize: "14px" }}>→</span>
              )}
            </div>
            {expandedStep === i && (
              <div style={{
                padding: "12px 16px 12px 56px",
                background: "#252020",
                fontSize: "12px",
                lineHeight: "1.6",
                color: "#B8B0A0",
                borderLeft: "2px solid #C4A962",
                marginLeft: "30px"
              }}>
                {step.detail}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
