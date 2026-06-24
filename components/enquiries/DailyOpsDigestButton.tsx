"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function DailyOpsDigestButton() {
  const search = useSearchParams();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function runDigest() {
    setBusy(true);
    setMessage("");

    try {
      const from = search.get("from") || "";
      const to = search.get("to") || "";

      const res = await fetch("/api/enquiries/daily-ops-digest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, to, mode: "dry-run" }),
      });

      const data = await res.json();
      setMessage(data?.delivery?.message || data?.error || "Digest failed.");
    } catch {
      setMessage("Digest failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ display: "grid", gap: "0.5rem" }}>
      <button
        onClick={runDigest}
        disabled={busy}
        style={{
          padding: "0.78rem 1rem",
          borderRadius: "999px",
          border: "1px solid rgba(255,107,107,0.28)",
          background: "rgba(255,107,107,0.12)",
          color: "#ffaaaa",
          fontWeight: 700,
        }}
      >
        {busy ? "Preparing..." : "Daily Ops Digest"}
      </button>
      {message ? <div style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>{message}</div> : null}
    </div>
  );
}
