"use client";

import { useState } from "react";

export default function RetryDeliveryButton({ file }: { file: string }) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function retry() {
    setBusy(true);
    setMessage("");

    try {
      const res = await fetch("/api/enquiries/retry-delivery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file }),
      });

      const data = await res.json();
      setMessage(`${data?.status || "unknown"}: ${data?.message || "Done"}`);
    } catch {
      setMessage("failed: Unable to retry delivery.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ display: "grid", gap: "0.55rem" }}>
      <button
        onClick={retry}
        disabled={busy}
        style={{
          padding: "0.72rem 0.95rem",
          borderRadius: "999px",
          border: "1px solid rgba(247,183,49,0.28)",
          background: "rgba(247,183,49,0.14)",
          color: "#f7c86b",
          fontWeight: 700,
        }}
      >
        {busy ? "Retrying..." : "Retry Delivery"}
      </button>
      {message ? <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>{message}</div> : null}
    </div>
  );
}
