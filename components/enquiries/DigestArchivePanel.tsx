"use client";

import { useEffect, useState } from "react";

type ArchiveItem = {
  file: string;
  parsed: any;
};

export default function DigestArchivePanel() {
  const [items, setItems] = useState<ArchiveItem[]>([]);
  const [audit, setAudit] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  async function load() {
    try {
      const res = await fetch("/api/admin/digest-archive");
      const data = await res.json();
      if (data?.ok) {
        setItems(Array.isArray(data.items) ? data.items : []);
        setAudit(Array.isArray(data.audit) ? data.audit : []);
      }
    } catch {}
  }

  useEffect(() => {
    load();
  }, []);

  async function resend(file: string) {
    setMessage("");

    try {
      const res = await fetch("/api/enquiries/resend-digest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file }),
      });
      const data = await res.json();
      setMessage(data?.ok ? "Digest resent." : data?.error || "Resend failed.");
      await load();
    } catch {
      setMessage("Resend failed.");
    }
  }

  return (
    <div style={panelStyle}>
      <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Digest Archive</div>

      <div style={{ display: "grid", gap: "0.8rem" }}>
        {items.length === 0 ? (
          <div style={{ color: "var(--color-text-muted)" }}>No archived digests yet.</div>
        ) : (
          items.slice(0, 10).map((item, index) => (
            <div key={index} style={cardStyle}>
              <div>
                <div style={{ fontWeight: 700 }}>{item.file}</div>
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>
                  {String(item.parsed?.digestType || "unknown")} · {String(item.parsed?.delivery?.status || "unknown")}
                </div>
              </div>
              <button onClick={() => resend(item.file)} style={buttonStyle}>Resend</button>
            </div>
          ))
        )}

        {message ? <div style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>{message}</div> : null}
      </div>

      <div style={{ fontWeight: 700, marginTop: "1rem", marginBottom: "0.8rem" }}>Audit Trail</div>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        {audit.length === 0 ? (
          <div style={{ color: "var(--color-text-muted)" }}>No audit entries yet.</div>
        ) : (
          audit.slice(0, 12).map((item, index) => (
            <div key={index} style={auditStyle}>
              <div style={{ fontWeight: 700 }}>{String(item.type || "audit")}</div>
              <div style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>{String(item.file || item.actor || "")}</div>
              <div style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>{String(item.at || "")}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const panelStyle: React.CSSProperties = {
  marginTop: "1rem",
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "1rem",
  padding: "1rem",
};

const cardStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  alignItems: "center",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "1rem",
  padding: "0.9rem",
  background: "rgba(255,255,255,0.03)",
};

const auditStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "1rem",
  padding: "0.85rem",
  background: "rgba(255,255,255,0.03)",
};

const buttonStyle: React.CSSProperties = {
  padding: "0.76rem 0.95rem",
  borderRadius: "999px",
  border: "1px solid rgba(85,145,199,0.28)",
  background: "rgba(85,145,199,0.12)",
  color: "#9cc2e3",
  fontWeight: 700,
};
