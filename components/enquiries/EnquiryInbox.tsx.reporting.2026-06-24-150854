"use client";

import { useState } from "react";
import LogoutButton from "@/components/enquiries/LogoutButton";
import EnquiryFilters from "@/components/enquiries/EnquiryFilters";

type EnquiryItem = {
  file: string;
  subject: string;
  businessName: string;
  email: string;
  service: string;
  packageDirection: string;
  budget: string;
  timeline: string;
  priority: string;
  inboxStatus: string;
  receivedAt: string;
  note: string;
};

const statusOptions = ["new", "contacted", "qualified", "closed"] as const;

export default function EnquiryInbox({ items }: { items: EnquiryItem[] }) {
  const [rows, setRows] = useState(items);
  const [busy, setBusy] = useState<string>("");

  async function updateStatus(file: string, status: string) {
    setBusy(`${file}:${status}`);
    try {
      const res = await fetch("/api/enquiries/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file, status }),
      });

      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Update failed.");

      setRows((prev) => prev.map((item) => (item.file === file ? { ...item, inboxStatus: status } : item)));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setBusy("");
    }
  }

  async function saveNote(file: string, note: string) {
    setBusy(`${file}:note`);
    try {
      const res = await fetch("/api/enquiries/note", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file, note }),
      });

      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Note save failed.");

      setRows((prev) => prev.map((item) => (item.file === file ? { ...item, note } : item)));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Note save failed.");
    } finally {
      setBusy("");
    }
  }

  return (
    <main style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <section style={{ padding: "5rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center", flexWrap: "wrap", marginBottom: "0.65rem" }}>
            <div style={{ color: "var(--color-accent)", fontWeight: 700 }}>
              Enquiry Ops
            </div>
            <LogoutButton />
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 1rem + 4vw, 4.5rem)",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Lead Desk
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Usability Layer.</span>
          </h1>

          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "1rem" }}>
            Search enquiries, update lead status, save short notes, and keep follow-up work organized.
          </p>

          <EnquiryFilters />
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 3rem" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", display: "grid", gap: "1rem" }}>
          {rows.length === 0 ? (
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "1.2rem",
                color: "var(--color-text-muted)",
              }}
            >
              No enquiries match the current filter.
            </div>
          ) : (
            rows.map((item) => (
              <article
                key={item.file}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1.1rem",
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "0.8rem" }}>
                  <span style={priorityTag(item.priority)}>{item.priority} priority</span>
                  <span style={statusTag(item.inboxStatus)}>{item.inboxStatus}</span>
                  <span style={neutralTag}>{item.service}</span>
                  <span style={neutralTag}>{item.packageDirection}</span>
                </div>

                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", lineHeight: 1.1, marginBottom: "0.65rem" }}>
                  {item.subject}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", marginBottom: "0.9rem" }}>
                  <div style={metaCard}><strong>Business:</strong><br />{item.businessName}</div>
                  <div style={metaCard}><strong>Email:</strong><br />{item.email}</div>
                  <div style={metaCard}><strong>Budget:</strong><br />{item.budget}</div>
                  <div style={metaCard}><strong>Timeline:</strong><br />{item.timeline}</div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", marginBottom: "0.85rem" }}>
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(item.file, status)}
                      disabled={busy === `${item.file}:${status}`}
                      style={{
                        padding: "0.72rem 0.95rem",
                        borderRadius: "999px",
                        border: item.inboxStatus === status ? "1px solid rgba(0,229,160,0.24)" : "1px solid var(--color-border)",
                        background: item.inboxStatus === status ? "var(--color-accent-dim)" : "rgba(255,255,255,0.03)",
                        color: item.inboxStatus === status ? "var(--color-accent)" : "var(--color-text)",
                        fontWeight: 700,
                      }}
                    >
                      {busy === `${item.file}:${status}` ? "Updating..." : status}
                    </button>
                  ))}
                </div>

                <div style={{ marginBottom: "0.85rem" }}>
                  <textarea
                    defaultValue={item.note}
                    placeholder="Add a short internal note..."
                    rows={4}
                    onBlur={(e) => {
                      if (e.target.value !== item.note) saveNote(item.file, e.target.value);
                    }}
                    style={{
                      width: "100%",
                      padding: "0.9rem 1rem",
                      borderRadius: "1rem",
                      border: "1px solid var(--color-border)",
                      background: "rgba(255,255,255,0.03)",
                      color: "var(--color-text)",
                      resize: "vertical",
                    }}
                  />
                </div>

                <div style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
                  Received: {item.receivedAt}
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

const neutralTag: React.CSSProperties = {
  display: "inline-flex",
  padding: "0.35rem 0.75rem",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "var(--color-text)",
  fontSize: "0.78rem",
  fontWeight: 700,
};

const metaCard: React.CSSProperties = {
  padding: "0.8rem 0.9rem",
  borderRadius: "0.95rem",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.06)",
  color: "var(--color-text)",
  lineHeight: 1.7,
};

function priorityTag(priority: string): React.CSSProperties {
  const high = priority === "high";
  const medium = priority === "medium";

  return {
    display: "inline-flex",
    padding: "0.35rem 0.75rem",
    borderRadius: "999px",
    background: high ? "rgba(255,107,107,0.14)" : medium ? "rgba(247,183,49,0.14)" : "var(--color-accent-dim)",
    border: high ? "1px solid rgba(255,107,107,0.28)" : medium ? "1px solid rgba(247,183,49,0.28)" : "1px solid rgba(0,229,160,0.22)",
    color: high ? "#ff8d8d" : medium ? "#f7c86b" : "var(--color-accent)",
    fontSize: "0.78rem",
    fontWeight: 700,
  };
}

function statusTag(status: string): React.CSSProperties {
  const map: Record<string, { bg: string; border: string; color: string }> = {
    new: { bg: "rgba(85,145,199,0.14)", border: "1px solid rgba(85,145,199,0.28)", color: "#8fb9df" },
    contacted: { bg: "rgba(247,183,49,0.14)", border: "1px solid rgba(247,183,49,0.28)", color: "#f7c86b" },
    qualified: { bg: "rgba(0,229,160,0.14)", border: "1px solid rgba(0,229,160,0.24)", color: "#7cf0c3" },
    closed: { bg: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)", color: "#d4d4d4" },
  };

  const style = map[status] || map.new;

  return {
    display: "inline-flex",
    padding: "0.35rem 0.75rem",
    borderRadius: "999px",
    background: style.bg,
    border: style.border,
    color: style.color,
    fontSize: "0.78rem",
    fontWeight: 700,
  };
}
