"use client";

import { useState } from "react";

export default function ReplayDlqButton({ file }: { file: string }) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function replay() {
    setBusy(true);
    setMessage("");

    try {
      const res = await fetch("/api/enquiries/replay-dlq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) {
        setMessage(data?.error || "Replay failed.");
      } else {
        setMessage("Moved to pending-retry.");
      }
    } catch {
      setMessage("Replay failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ display: "grid", gap: "0.55rem" }}>
      <button
        onClick={replay}
        disabled={busy}
        style={{
          padding: "0.72rem 0.95rem",
          borderRadius: "999px",
          border: "1px solid rgba(85,145,199,0.28)",
          background: "rgba(85,145,199,0.14)",
          color: "#8fb9df",
          fontWeight: 700,
        }}
      >
        {busy ? "Replaying..." : "Replay from DLQ"}
      </button>
      {message ? <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>{message}</div> : null}
    </div>
  );
}
