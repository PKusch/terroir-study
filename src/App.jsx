import { useState } from "react";
import { REGIONS, COUNTRIES } from "./data/regions.js";
import { MAPS } from "./maps.jsx";
import { DetailMap } from "./DetailMap.jsx";
import { PrintSheet } from "./PrintSheet.jsx";
import { PLACES } from "./data/places.js";
import { countryOf } from "./data/projections.js";
import { ExplorePanel } from "./ExplorePanel.jsx";
import { ConnectionChain } from "./ConnectionChain.jsx";
import { QuizMode } from "./QuizMode.jsx";
import { TastePanel } from "./TastePanel.jsx";
import { BackupPanel } from "./BackupPanel.jsx";

// ─── Main App ────────────────────────────────────────────────────────────────
export default function WsetStudyApp() {
  const [mode, setMode] = useState("explore");
  const [country, setCountry] = useState("France");
  const [activeRegion, setActiveRegion] = useState("bordeaux");
  const [quizMapClick, setQuizMapClick] = useState(null);
  const [quizCountry, setQuizCountry] = useState("France");
  const [zoomed, setZoomed] = useState(false);

  // In quiz mode the map follows the country of the question on screen.
  const mapCountry = mode === "quiz" ? quizCountry : country;
  const CountryMap = MAPS[mapCountry];

  const handleCountryClick = (c) => {
    if (c === country) return;
    setCountry(c);
    setActiveRegion(COUNTRIES[c][0]);
    setZoomed(false);
  };

  // From the quiz's weak-areas list straight to that region's Explore screen.
  const studyRegion = (key) => {
    const c = countryOf(key);
    if (!c) return;
    setCountry(c);
    setActiveRegion(key);
    setZoomed(false);
    setMode("explore");
    setQuizMapClick(null);
  };

  // Zooming in shows the region's own places; only where there are some to show.
  const canZoom = mode !== "quiz" && Object.keys(PLACES[activeRegion] ?? {}).length > 0;
  const showDetail = zoomed && canZoom;

  const quietButton = {
    background: "none", border: "1px solid #3a3530", color: "#B8B0A0",
    padding: "4px 12px", borderRadius: "4px", fontSize: "11px", cursor: "pointer",
    letterSpacing: "0.05em"
  };

  const modes = [
    { id: "explore", label: "Explore", icon: "🗺️" },
    { id: "connect", label: "Connect", icon: "🔗" },
    { id: "quiz", label: "Quiz", icon: "✦" },
    { id: "taste", label: "Taste", icon: "🍷" }
  ];

  const handleRegionClick = (key) => {
    if (mode === "quiz") {
      setQuizMapClick(key);
    } else {
      setActiveRegion(key);
    }
  };

  return (
    <>
    <PrintSheet regionKey={activeRegion} />
    <div className="screen" style={{
      minHeight: "100vh",
      background: "#141212",
      color: "#E8E4D9",
      fontFamily: "'Source Sans 3', -apple-system, sans-serif"
    }}>
      {/* ── Header ── */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        borderBottom: "1px solid #2a2520"
      }}>
        <div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "22px",
            fontWeight: "600",
            letterSpacing: "0.02em",
            color: "#E8E4D9"
          }}>
            Terroir <span style={{ color: "#C4A962" }}>Study</span>
          </h1>
          <div style={{ fontSize: "10px", color: "#8B7355", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "2px" }}>
            WSET Level 3 · {mapCountry}
          </div>
        </div>
        {mode !== "quiz" && (
          <div style={{ display: "flex", gap: "4px" }}>
            {Object.keys(COUNTRIES).map(c => (
              <button
                key={c}
                onClick={() => handleCountryClick(c)}
                aria-pressed={country === c}
                style={{
                  padding: "6px 12px",
                  background: country === c ? "#C4A962" : "transparent",
                  color: country === c ? "#1a1a1a" : "#8B7355",
                  border: country === c ? "none" : "1px solid #2a2520",
                  borderRadius: "6px",
                  fontSize: "10px",
                  fontWeight: country === c ? "600" : "400",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </header>

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
            aria-pressed={mode === m.id}
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
      <main style={{
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
            {showDetail ? (
              <DetailMap regionKey={activeRegion} />
            ) : (
              <CountryMap
                activeRegion={mode === "quiz" ? null : activeRegion}
                onRegionClick={handleRegionClick}
                quizMode={mode === "quiz"}
              />
            )}
          </div>
        </div>

        {/* Zoom and print: their own block, so they never sit on top of the heading */}
        {mode !== "quiz" && (
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", padding: "8px 0 0" }}>
            {canZoom && (
              <button onClick={() => setZoomed((z) => !z)} style={quietButton}>
                {showDetail ? `← Back to ${mapCountry}` : `Zoom into ${REGIONS[activeRegion]?.name} →`}
              </button>
            )}
            <button onClick={() => window.print()} style={quietButton} title="One revision sheet for this region">
              🖨 Print summary
            </button>
          </div>
        )}

        {/* Active region name */}
        {mode !== "quiz" && (
          <h2 style={{
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
          </h2>
        )}

        {/* Content Panel */}
        <div style={{ padding: "16px 20px 40px" }}>
          {mode === "explore" && <ExplorePanel region={activeRegion} />}
          {mode === "connect" && <ConnectionChain region={activeRegion} />}
          {mode === "taste" && <TastePanel region={activeRegion} />}
          {mode === "quiz" && (
            <QuizMode
              mapClick={quizMapClick}
              clearMapClick={() => setQuizMapClick(null)}
              onQuestionCountry={setQuizCountry}
              onStudyRegion={studyRegion}
            />
          )}
        </div>
      </main>
      <BackupPanel />
    </div>
  
    </>
  );
}
