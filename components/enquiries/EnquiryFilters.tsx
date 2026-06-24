"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function EnquiryFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();

  const currentQ = search.get("q") || "";
  const currentStatus = search.get("status") || "all";

  const statuses = useMemo(() => ["all", "new", "contacted", "qualified", "closed"], []);

  function update(key: string, value: string) {
    const params = new URLSearchParams(search.toString());
    if (!value || value === "all") params.delete(key);
    else params.set(key, value);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div style={{ display: "grid", gap: "0.9rem", marginBottom: "1.2rem" }}>
      <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <input
          defaultValue={currentQ}
          onChange={(e) => update("q", e.target.value)}
          placeholder="Search by business, email, service..."
          style={{
            width: "100%",
            padding: "0.95rem 1rem",
            borderRadius: "0.95rem",
            border: "1px solid var(--color-border)",
            background: "rgba(255,255,255,0.03)",
            color: "var(--color-text)",
          }}
        />

        <select
          value={currentStatus}
          onChange={(e) => update("status", e.target.value)}
          style={{
            width: "100%",
            padding: "0.95rem 1rem",
            borderRadius: "0.95rem",
            border: "1px solid var(--color-border)",
            background: "rgba(255,255,255,0.03)",
            color: "var(--color-text)",
          }}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status === "all" ? "All statuses" : status}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
