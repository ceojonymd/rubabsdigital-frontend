"use client";

import { useEffect, useState } from "react";

type Pref = {
  email: string;
  opsDaily: boolean;
  executiveWeekly: boolean;
  criticalAlerts: boolean;
  unsubscribedAll: boolean;
};

export default function DigestPreferencesPanel() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState<Pref[]>([
    { email: "", opsDaily: true, executiveWeekly: true, criticalAlerts: true, unsubscribedAll: false },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/admin/digest-preferences");
        const data = await res.json();
        if (data?.ok && Array.isArray(data.items) && data.items.length) {
          setRows(data.items);
        }
      } catch {}
    })();
  }, []);

  function update(index: number, key: keyof Pref, value: string | boolean) {
    setRows((prev) => prev.map((row, i) => (i === index ? { ...row, [key]: value } : row)));
  }

  function addRow() {
    setRows((prev) => [...prev, { email: "", opsDaily: true, executiveWeekly: true, criticalAlerts: true, unsubscribedAll: false }]);
  }

  async function save() {
    setBusy(true);
    setMessage("");

    try {
      const res = await fetch("/api/admin/digest-preferences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: rows }),
      });
      const data = await res.json();
      setMessage(data?.ok ? "Preferences saved." : data?.error || "Save failed.");
    } catch {
      setMessage("Save failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={panelStyle}>
      <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Recipient Preferences</div>

      <div style={{ display: "grid", gap: "0.75rem" }}>
        {rows.map((row, index) => (
          <div key={index} style={{ border: "1px solid var(--color-border)", borderRadius: "1rem", padding: "0.85rem", display: "grid", gap: "0.75rem" }}>
            <input
              value={row.email}
              onChange={(e) => update(index, "email", e.target.value)}
              placeholder="recipient@example.com"
              style={inputStyle}
            />
            <label style={labelStyle}><input type="checkbox" checked={row.opsDaily} onChange={(e) => update(index, "opsDaily", e.target.checked)} /> <span>Daily ops digest</span></label>
            <label style={labelStyle}><input type="checkbox" checked={row.executiveWeekly} onChange={(e) => update(index, "executiveWeekly", e.target.checked)} /> <span>Weekly executive digest</span></label>
            <label style={labelStyle}><input type="checkbox" checked={row.criticalAlerts} onChange={(e) => update(index, "criticalAlerts", e.target.checked)} /> <span>Critical alerts</span></label>
            <label style={labelStyle}><input type="checkbox" checked={row.unsubscribedAll} onChange={(e) => update(index, "unsubscribedAll", e.target.checked)} /> <span>Unsubscribe from all</span></label>
          </div>
        ))}

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button onClick={addRow} style={secondaryButton}>Add Recipient</button>
          <button onClick={save} disabled={busy} style={primaryButton}>{busy ? "Saving..." : "Save Preferences"}</button>
        </div>

        {message ? <div style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>{message}</div> : null}
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

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 0.95rem",
  borderRadius: "0.85rem",
  border: "1px solid var(--color-border)",
  background: "rgba(255,255,255,0.03)",
  color: "var(--color-text)",
};

const labelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.65rem",
  color: "var(--color-text)",
};

const primaryButton: React.CSSProperties = {
  padding: "0.82rem 1rem",
  borderRadius: "999px",
  border: "1px solid rgba(0,229,160,0.24)",
  background: "var(--color-accent-dim)",
  color: "var(--color-accent)",
  fontWeight: 700,
};

const secondaryButton: React.CSSProperties = {
  padding: "0.82rem 1rem",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
  color: "var(--color-text)",
  fontWeight: 700,
};
