"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function WeeklyExecutiveButton() {
  const search = useSearchParams();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function runSummary() {
    setBusy(true);
    setMessage("");

    try {
      const from = search.get("from") || "";
      const to = search.get("to") || "";

      const res = await fetch("/api/enquiries/weekly-executive-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, to, mode: "dry-run", recipients: [] }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data?.delivery?.message || data?.error || "Summary failed.");
      } else {
        setMessage(data?.delivery?.message || "Summary prepared.");
      }
    } catch {
      setMessage("Summary failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ display: "grid", gap: "0.5rem" }}>
      <button
        onClick={runSummary}
        disabled={busy}
        style={{
          padding: "0.78rem 1rem",
          borderRadius: "999px",
          border: "1px solid rgba(85,145,199,0.28)",
          background: "rgba(85,145,199,0.14)",
          color: "#8fb9df",
          fontWeight: 700,
        }}
      >
        {busy ? "Preparing..." : "Weekly Exec Summary"}
      </button>
      {message ? <div style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>{message}</div> : null}
    </div>
  );
}
