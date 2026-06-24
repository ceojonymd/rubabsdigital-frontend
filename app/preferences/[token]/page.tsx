"use client";

import { useEffect, useState } from "react";

export default function PublicPreferencePage({ params }: { params: { token: string } }) {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    email: "",
    opsDaily: true,
    executiveWeekly: true,
    criticalAlerts: true,
    unsubscribedAll: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/public/preferences/${params.token}`);
        const data = await res.json();
        if (data?.ok) {
          setForm(data.item);
        } else {
          setMessage(data?.error || "Invalid link.");
        }
      } catch {
        setMessage("Unable to load preferences.");
      } finally {
        setLoading(false);
      }
    })();
  }, [params.token]);

  async function save() {
    setMessage("");
    try {
      const res = await fetch(`/api/public/preferences/${params.token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setMessage(data?.ok ? "Preferences updated." : data?.error || "Save failed.");
    } catch {
      setMessage("Save failed.");
    }
  }

  if (loading) {
    return <main style={{ padding: "4rem 1.5rem", color: "white" }}>Loading...</main>;
  }

  return (
    <main style={{ minHeight: "100vh", padding: "4rem 1.5rem", background: "#0b1020", color: "white" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1rem", padding: "1.25rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Manage Email Preferences</h1>
        <p style={{ color: "rgba(255,255,255,0.72)", marginBottom: "1rem" }}>{form.email}</p>

        <div style={{ display: "grid", gap: "0.8rem" }}>
          <label><input type="checkbox" checked={form.opsDaily} onChange={(e) => setForm({ ...form, opsDaily: e.target.checked })} /> Daily ops digest</label>
          <label><input type="checkbox" checked={form.executiveWeekly} onChange={(e) => setForm({ ...form, executiveWeekly: e.target.checked })} /> Weekly executive digest</label>
          <label><input type="checkbox" checked={form.criticalAlerts} onChange={(e) => setForm({ ...form, criticalAlerts: e.target.checked })} /> Critical alerts</label>
          <label><input type="checkbox" checked={form.unsubscribedAll} onChange={(e) => setForm({ ...form, unsubscribedAll: e.target.checked })} /> Unsubscribe from all</label>

          <button
            onClick={save}
            style={{
              padding: "0.85rem 1rem",
              borderRadius: "999px",
              background: "#4f98a3",
              color: "white",
              fontWeight: 700,
              border: "none",
            }}
          >
            Save Preferences
          </button>

          {message ? <div style={{ color: "rgba(255,255,255,0.72)" }}>{message}</div> : null}
        </div>
      </div>
    </main>
  );
}
