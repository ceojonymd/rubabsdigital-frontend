"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function AnalyticsFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();

  const from = search.get("from") || "";
  const to = search.get("to") || "";

  function update(key: string, value: string) {
    const params = new URLSearchParams(search.toString());
    if (!value) params.delete(key);
    else params.set(key, value);
    router.replace(`${pathname}?${params.toString()}`);
  }

  function clearAll() {
    router.replace(pathname);
  }

  return (
    <div style={{ display: "grid", gap: "0.75rem", marginBottom: "1rem" }}>
      <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <input
          type="date"
          value={from}
          onChange={(e) => update("from", e.target.value)}
          style={inputStyle}
        />
        <input
          type="date"
          value={to}
          onChange={(e) => update("to", e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
        <button onClick={clearAll} style={buttonStyle}>
          Clear Date Filter
        </button>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.95rem 1rem",
  borderRadius: "0.95rem",
  border: "1px solid var(--color-border)",
  background: "rgba(255,255,255,0.03)",
  color: "var(--color-text)",
};

const buttonStyle: React.CSSProperties = {
  padding: "0.78rem 1rem",
  borderRadius: "999px",
  border: "1px solid var(--color-border)",
  background: "rgba(255,255,255,0.03)",
  color: "var(--color-text)",
  fontWeight: 700,
};
