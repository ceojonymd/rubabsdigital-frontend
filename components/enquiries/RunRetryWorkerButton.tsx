"use client";

import { useState } from "react";

export default function RunRetryWorkerButton() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function runWorker() {
    setBusy(true);
    setMessage("");

    try {
      const res = await fetch("/api/enquiries/run-retry-worker", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) {
        setMessage(data?.error || "Worker failed.");
      } else {
        setMessage(`Processed ${data.processed} pending retry item(s).`);
      }
    } catch {
      setMessage("Worker failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ display: "grid", gap: "0.55rem" }}>
      <button
        onClick={runWorker}
        disabled={busy}
        style={{
          padding: "0.78rem 1rem",
          borderRadius: "999px",
          border: "1px solid rgba(0,229,160,0.24)",
          background: "var(--color-accent-dim)",
          color: "var(--color-accent)",
          fontWeight: 700,
        }}
      >
        {busy ? "Running Worker..." : "Run Retry Worker"}
      </button>
      {message ? <div style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>{message}</div> : null}
    </div>
  );
}
