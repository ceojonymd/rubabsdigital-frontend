"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ArchiveSnapshotButton() {
  const search = useSearchParams();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function archiveNow() {
    setBusy(true);
    setMessage("");

    try {
      const from = search.get("from") || "";
      const to = search.get("to") || "";

      const res = await fetch("/api/enquiries/archive-snapshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, to }),
      });

      const data = await res.json();
      if (!res.ok || !data?.ok) {
        setMessage(data?.error || "Archive failed.");
      } else {
        setMessage("Snapshot archived.");
      }
    } catch {
      setMessage("Archive failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ display: "grid", gap: "0.5rem" }}>
      <button
        onClick={archiveNow}
        disabled={busy}
        style={{
          padding: "0.78rem 1rem",
          borderRadius: "999px",
          border: "1px solid rgba(247,183,49,0.28)",
          background: "rgba(247,183,49,0.12)",
          color: "#f7c86b",
          fontWeight: 700,
        }}
      >
        {busy ? "Archiving..." : "Archive Snapshot"}
      </button>
      {message ? <div style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>{message}</div> : null}
    </div>
  );
}
