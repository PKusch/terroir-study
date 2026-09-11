import { useState } from "react";
import { REGIONS } from "./data/france.js";
import { FranceMap } from "./FranceMap.jsx";
import { ExplorePanel } from "./ExplorePanel.jsx";
import { ConnectionChain } from "./ConnectionChain.jsx";
import { QuizMode } from "./QuizMode.jsx";

// ─── Main App ────────────────────────────────────────────────────────────────
export default function WsetStudyApp() {
  const [mode, setMode] = useState("explore");
  const [activeRegion, setActiveRegion] = useState("bordeaux");
  const [quizMapClick, setQuizMapClick] = useState(null);

  const modes = [
    { id: "explore", label: "Explore", icon: "🗺️" },
    { id: "connect", label: "Connect", icon: "🔗" },
    { id: "quiz", label: "Quiz", icon: "✦" }
  ];

  const handleRegionClick = (key) => {
    if (mode === "quiz") {
      setQuizMapClick(key);
    } else {
      setActiveRegion(key);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#141212",
      color: "#E8E4D9",
      fontFamily: "'Source Sans 3', -apple-system, sans-serif"
    }}>
      {/* ── Header ── */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        borderBottom: "1px solid #2a2520"
      }}>
        <div>
          <div style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "22px",
            fontWeight: "600",
            letterSpacing: "0.02em",
            color: "#E8E4D9"
          }}>
            Terroir <span style={{ color: "#C4A962" }}>Study</span>
          </div>
          <div style={{ fontSize: "10px", color: "#8B7355", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "2px" }}>
            WSET Level 3 · France
          </div>
        </div>
      </div>

      {/* ── Mode Tabs ── */}
      <div style={{
        display: "flex",
        gap: "4px",
        padding: "12px 20px",
        borderBottom: "1px solid #2a2520"
      }}>
        {modes.map(m => (
          <button
            key={m.id}
            onClick={() => {
              setMode(m.id);
              setQuizMapClick(null);
            }}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "10px",
              background: mode === m.id ? "#C4A962" : "transparent",
              color: mode === m.id ? "#1a1a1a" : "#8B7355",
              border: mode === m.id ? "none" : "1px solid #2a2520",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: mode === m.id ? "600" : "400",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            <span>{m.icon}</span> {m.label}
          </button>
        ))}
      </div>

      {/* ── Main Content ── */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        {/* Map */}
        <div style={{
          padding: "16px 20px 0",
          display: "flex",
          justifyContent: "center"
        }}>
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <FranceMap
              activeRegion={mode === "quiz" ? null : activeRegion}
              onRegionClick={handleRegionClick}
              quizMode={mode === "quiz"}
            />
          </div>
        </div>

        {/* Active region name */}
        {mode !== "quiz" && (
          <div style={{
            textAlign: "center",
            padding: "8px 0 4px",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "24px",
            fontWeight: "600",
            color: REGIONS[activeRegion]?.color || "#E8E4D9"
          }}>
            {REGIONS[activeRegion]?.name}
            <span style={{
              display: "block",
              fontSize: "11px",
              color: "#8B7355",
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: "400",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginTop: "4px"
            }}>
              {REGIONS[activeRegion]?.climate}
            </span>
          </div>
        )}

        {/* Content Panel */}
        <div style={{ padding: "16px 20px 40px" }}>
          {mode === "explore" && <ExplorePanel region={activeRegion} />}
          {mode === "connect" && <ConnectionChain region={activeRegion} />}
          {mode === "quiz" && (
            <QuizMode
              mapClick={quizMapClick}
              clearMapClick={() => setQuizMapClick(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
