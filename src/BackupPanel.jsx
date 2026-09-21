import { useRef, useState } from "react";
import { loadProgress, saveProgress } from "./progress.js";
import { loadTasteResults, saveTasteResults } from "./taste.js";
import { QUIZ_QUESTIONS } from "./data/quiz.js";
import {
  makeBackup, readBackup, mergeProgress, mergeTaste, describeBackup,
  backupFileName, loadLastBackup, saveLastBackup, lastBackupLabel, MAX_BACKUP_BYTES
} from "./backup.js";

const KNOWN_IDS = new Set(QUIZ_QUESTIONS.map((q) => q.id));

const quietButton = {
  background: "none", border: "1px solid #3a3530", color: "#B8B0A0",
  padding: "6px 14px", borderRadius: "4px", fontSize: "11px", cursor: "pointer",
  letterSpacing: "0.05em"
};

// Where your progress is kept, and a way to keep a copy of it.
export const BackupPanel = ({ onRestored }) => {
  const [last, setLast] = useState(() => loadLastBackup());
  const fileInput = useRef(null);
  const [pending, setPending] = useState(null);   // a checked file waiting for a yes
  const [message, setMessage] = useState(null);   // { kind: "ok" | "error", text }

  const choose = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";                            // so the same file can be chosen again
    if (!file) return;
    setPending(null);
    setMessage(null);
    if (file.size > MAX_BACKUP_BYTES) {
      setMessage({ kind: "error", text: "That file is too big to be a progress backup." });
      return;
    }
    let text;
    try {
      text = await file.text();
    } catch {
      setMessage({ kind: "error", text: "That file could not be read." });
      return;
    }
    const result = readBackup(text, KNOWN_IDS);
    if (result.ok) setPending(result);
    else setMessage({ kind: "error", text: result.reason });
  };

  const confirmRestore = () => {
    const savedQuiz = saveProgress(mergeProgress(loadProgress(), pending.quiz));
    const savedTaste = saveTasteResults(mergeTaste(loadTasteResults(), pending.taste));
    if (!savedQuiz || !savedTaste) {
      setMessage({ kind: "error", text: "The browser would not let this page store the progress, so nothing was restored." });
    } else {
      setMessage({ kind: "ok", text: "Restored. Your progress from the file is now in this browser." });
      if (onRestored) onRestored();
    }
    setPending(null);
  };

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
        <button onClick={() => fileInput.current?.click()} style={quietButton}>Restore from file</button>
        <input ref={fileInput} type="file" accept=".json,application/json" onChange={choose}
          style={{ display: "none" }} aria-label="Choose a progress file to restore" />
        <span style={{ fontSize: "11px", color: "#7a7268" }}>{lastBackupLabel(last)}</span>
      </div>

      {pending && (
        <div role="group" aria-label="Confirm restore" style={{ marginTop: "12px", padding: "12px 14px", background: "#1E1E1E", border: "1px solid #3a3530", borderRadius: "8px" }}>
          <div style={{ fontSize: "12px", color: "#D5D0C4", lineHeight: "1.6", marginBottom: "10px" }}>
            {describeBackup(pending)} Add it to what is here? Where a question is in both, the more recent answer is kept.
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={confirmRestore} style={{ ...quietButton, color: "#7BC47B", borderColor: "#4a7a4a" }}>Restore</button>
            <button onClick={() => setPending(null)} style={quietButton}>Cancel</button>
          </div>
        </div>
      )}
      {message && (
        <div role={message.kind === "error" ? "alert" : "status"}
          style={{ marginTop: "12px", fontSize: "12px", color: message.kind === "error" ? "#C47B7B" : "#7BC47B" }}>
          {message.text}
        </div>
      )}
    </footer>
  );
};
