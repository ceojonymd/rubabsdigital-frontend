"use client";

import { useEffect, useState } from "react";

type Rule = { key: string; severity: string; action: string };

export default function DigestSettingsPanel() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [opsRecipients, setOpsRecipients] = useState("");
  const [executiveRecipients, setExecutiveRecipients] = useState("");
  const [opsDigestEnabled, setOpsDigestEnabled] = useState(true);
  const [executiveDigestEnabled, setExecutiveDigestEnabled] = useState(true);
  const [rules, setRules] = useState<Rule[]>([
    { key: "dead-letter", severity: "critical", action: "immediate-escalation" },
    { key: "failed", severity: "high", action: "daily-digest" },
    { key: "pending-retry", severity: "medium", action: "watchlist" },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/admin/digest-settings");
        const data = await res.json();
        if (data?.ok) {
          setOpsRecipients((data.settings.opsRecipients || []).join(", "));
          setExecutiveRecipients((data.settings.executiveRecipients || []).join(", "));
          setOpsDigestEnabled(Boolean(data.settings.opsDigestEnabled));
          setExecutiveDigestEnabled(Boolean(data.settings.executiveDigestEnabled));
          if (Array.isArray(data.settings.severityRules) && data.settings.severityRules.length) {
            setRules(data.settings.severityRules);
          }
        }
      } catch {}
    })();
  }, []);

  async function save() {
    setBusy(true);
    setMessage("");

    try {
      const res = await fetch("/api/admin/digest-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          opsRecipients: opsRecipients.split(",").map((s) => s.trim()).filter(Boolean),
          executiveRecipients: executiveRecipients.split(",").map((s) => s.trim()).filter(Boolean),
          opsDigestEnabled,
          executiveDigestEnabled,
          severityRules: rules,
        }),
      });
      const data = await res.json();
      setMessage(data?.ok ? "Settings saved." : data?.error || "Save failed.");
    } catch {
      setMessage("Save failed.");
    } finally {
      setBusy(false);
    }
  }

  function updateRule(index: number, key: keyof Rule, value: string) {
    setRules((prev) => prev.map((rule, i) => (i === index ? { ...rule, [key]: value } : rule)));
  }

  return (
    <div
      style={{
        marginTop: "1rem",
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: "0.8rem" }}>Digest Settings</div>

      <div style={{ display: "grid", gap: "0.8rem" }}>
        <textarea
          value={opsRecipients}
          onChange={(e) => setOpsRecipients(e.target.value)}
          placeholder="ops1@example.com, ops2@example.com"
          style={areaStyle}
        />
        <textarea
          value={executiveRecipients}
          onChange={(e) => setExecutiveRecipients(e.target.value)}
          placeholder="founder@example.com, exec@example.com"
          style={areaStyle}
        />

        <label style={labelStyle}>
          <input type="checkbox" checked={opsDigestEnabled} onChange={(e) => setOpsDigestEnabled(e.target.checked)} />
          <span>Enable daily ops digest</span>
        </label>

        <label style={labelStyle}>
          <input type="checkbox" checked={executiveDigestEnabled} onChange={(e) => setExecutiveDigestEnabled(e.target.checked)} />
          <span>Enable weekly executive digest</span>
        </label>

        <div style={{ display: "grid", gap: "0.6rem" }}>
          {rules.map((rule, index) => (
            <div key={index} style={{ display: "grid", gap: "0.6rem", gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              <input value={rule.key} onChange={(e) => updateRule(index, "key", e.target.value)} style={inputStyle} />
              <input value={rule.severity} onChange={(e) => updateRule(index, "severity", e.target.value)} style={inputStyle} />
              <input value={rule.action} onChange={(e) => updateRule(index, "action", e.target.value)} style={inputStyle} />
            </div>
          ))}
        </div>

        <button onClick={save} disabled={busy} style={buttonStyle}>
          {busy ? "Saving..." : "Save Digest Settings"}
        </button>

        {message ? <div style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>{message}</div> : null}
      </div>
    </div>
  );
}

const areaStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "92px",
  padding: "0.95rem 1rem",
  borderRadius: "0.95rem",
  border: "1px solid var(--color-border)",
  background: "rgba(255,255,255,0.03)",
  color: "var(--color-text)",
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

const buttonStyle: React.CSSProperties = {
  padding: "0.82rem 1rem",
  borderRadius: "999px",
  border: "1px solid rgba(0,229,160,0.24)",
  background: "var(--color-accent-dim)",
  color: "var(--color-accent)",
  fontWeight: 700,
};
