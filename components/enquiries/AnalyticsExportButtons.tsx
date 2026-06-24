"use client";

import { useSearchParams } from "next/navigation";

export default function AnalyticsExportButtons() {
  const search = useSearchParams();
  const params = new URLSearchParams(search.toString());

  const jsonHref = `/api/enquiries/analytics-export?${params.toString()}`;
  params.set("format", "csv");
  const csvHref = `/api/enquiries/analytics-export?${params.toString()}`;

  return (
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
      <a href={jsonHref} style={linkStyle}>Export Snapshot JSON</a>
      <a href={csvHref} style={linkStyle}>Export Snapshot CSV</a>
    </div>
  );
}

const linkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.78rem 1rem",
  borderRadius: "999px",
  border: "1px solid var(--color-border)",
  background: "rgba(255,255,255,0.03)",
  color: "var(--color-text)",
  fontWeight: 700,
  textDecoration: "none",
};
