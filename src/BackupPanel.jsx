import { useState } from "react";
import { loadProgress } from "./progress.js";
import { loadTasteResults } from "./taste.js";
import { makeBackup, backupFileName, loadLastBackup, saveLastBackup, lastBackupLabel } from "./backup.js";

const quietButton = {
  background: "none", border: "1px solid #3a3530", color: "#B8B0A0",
  padding: "6px 14px", borderRadius: "4px", fontSize: "11px", cursor: "pointer",
  letterSpacing: "0.05em"
};

// Where your progress is kept, and a way to keep a copy of it.
export const BackupPanel = () => {
  const [last, setLast] = useState(() => loadLastBackup());

  const save = () => {
    const now = Date.now();
    const file = makeBackup({ quiz: loadProgress(), taste: loadTasteResults(), now });
    const url = URL.createObjectURL(new Blob([JSON.stringify(file, null, 2)], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = backupFileName(now);
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    saveLastBackup(now);
    setLast(now);
  };

  return (
    <footer style={{ maxWidth: "900px", margin: "0 auto", padding: "16px 20px 32px", borderTop: "1px solid #2a2520" }}>
      <div style={{ fontSize: "10px", color: "#8B7355", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>
        Your progress
      </div>
      <div style={{ fontSize: "12px", color: "#B8B0A0", lineHeight: "1.6", marginBottom: "10px" }}>
        It is kept in this browser only. Clearing the browser's site data, or opening the tool on another
        device, starts you from nothing. Save a copy to a file to keep it safe.
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
        <button onClick={save} style={quietButton}>Save progress file</button>
        <span style={{ fontSize: "11px", color: "#7a7268" }}>{lastBackupLabel(last)}</span>
      </div>
    </footer>
  );
};
