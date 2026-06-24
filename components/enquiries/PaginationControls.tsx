"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaginationControls({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const search = useSearchParams();

  function href(nextPage: number) {
    const params = new URLSearchParams(search.toString());
    params.set("page", String(nextPage));
    return `/enquiries?${params.toString()}`;
  }

  return (
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", marginTop: "1rem" }}>
      <div style={{ color: "var(--color-text-muted)" }}>
        Page {page} of {totalPages}
      </div>

      <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
        <Link
          href={href(Math.max(1, page - 1))}
          style={linkButton(page <= 1)}
          aria-disabled={page <= 1}
        >
          Previous
        </Link>
        <Link
          href={href(Math.min(totalPages, page + 1))}
          style={linkButton(page >= totalPages)}
          aria-disabled={page >= totalPages}
        >
          Next
        </Link>
      </div>
    </div>
  );
}

function linkButton(disabled: boolean): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.78rem 1rem",
    borderRadius: "999px",
    border: "1px solid var(--color-border)",
    background: disabled ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.03)",
    color: disabled ? "var(--color-text-muted)" : "var(--color-text)",
    textDecoration: "none",
    pointerEvents: disabled ? "none" : "auto",
    fontWeight: 700,
  };
}
