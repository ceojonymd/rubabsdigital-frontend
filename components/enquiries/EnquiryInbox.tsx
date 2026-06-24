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
};

export default function EnquiryInbox({ items }: { items: EnquiryItem[] }) {
  return (
    <main style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <section style={{ padding: "5rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
          <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.65rem" }}>
            Enquiry Ops
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 1rem + 4vw, 4.5rem)",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Admin Inbox for
            <br />
            <span style={{ color: "var(--color-accent)", fontStyle: "italic" }}>Recent Enquiries.</span>
          </h1>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "760px" }}>
            This page gives a lightweight review layer for locally stored enquiry fallback records.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 1.5rem 3rem" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", display: "grid", gap: "1rem" }}>
          {items.length === 0 ? (
            <div
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "1.2rem",
                color: "var(--color-text-muted)",
              }}
            >
              No local fallback enquiries found yet.
            </div>
          ) : (
            items.map((item) => (
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
                  <span style={tag(item.priority)}>{item.priority} priority</span>
                  <span style={neutralTag}>{item.inboxStatus}</span>
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

function tag(priority: string): React.CSSProperties {
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
