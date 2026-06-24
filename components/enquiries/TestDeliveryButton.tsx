"use client";

import { useState } from "react";

export default function TestDeliveryButton({
  file,
  compact = false,
}: {
  file: string;
  compact?: boolean;
}) {
  const [busy, setBusy] = useState("");
  const [message, setMessage] = useState("");

  async function run(mode: "dry-run" | "live") {
    setBusy(mode);
    setMessage("");

    try {
      const res = await fetch("/api/enquiries/test-delivery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file, mode }),
      });

      const data = await res.json();
      setMessage(`${data?.status || "unknown"}: ${data?.message || "Done"}`);
    } catch {
      setMessage("failed: Unable to run delivery test.");
    } finally {
      setBusy("");
    }
  }

  return (
    <div style={{ display: "grid", gap: "0.65rem" }}>
      <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
        <button onClick={() => run("dry-run")} disabled={busy !== ""} style={btnStyle(compact)}>
          {busy === "dry-run" ? "Testing..." : "Dry Run"}
        </button>
        <button onClick={() => run("live")} disabled={busy !== ""} style={primaryBtnStyle(compact)}>
          {busy === "live" ? "Sending..." : "Live Test"}
        </button>
      </div>
      {message ? <div style={{ color: "var(--color-text-muted)", fontSize: compact ? "0.85rem" : "0.95rem" }}>{message}</div> : null}
    </div>
  );
}

function btnStyle(compact: boolean): React.CSSProperties {
  return {
    padding: compact ? "0.65rem 0.9rem" : "0.78rem 1rem",
    borderRadius: "999px",
    border: "1px solid var(--color-border)",
    background: "rgba(255,255,255,0.03)",
    color: "var(--color-text)",
    fontWeight: 700,
  };
}

function primaryBtnStyle(compact: boolean): React.CSSProperties {
  return {
    padding: compact ? "0.65rem 0.9rem" : "0.78rem 1rem",
    borderRadius: "999px",
    border: "1px solid rgba(0,229,160,0.24)",
    background: "var(--color-accent-dim)",
    color: "var(--color-accent)",
    fontWeight: 700,
  };
}
