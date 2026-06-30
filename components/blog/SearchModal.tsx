"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { searchArticles, Article } from "@/lib/blog-api";

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const search = useCallback(async (q: string) => {
    if (q.length < 2) { setResults([]); return; }
    setLoading(true);
    try {
      const data = await searchArticles(q, 8);
      setResults(data.results);
    } catch { setResults([]); }
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => search(query), 300);
    return () => clearTimeout(timer);
  }, [query, search]);

  useEffect(() => {
    if (!open) { setQuery(""); setResults([]); }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        paddingTop: "15vh",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "min(560px, 90vw)",
          background: "var(--color-surface)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border)",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ padding: "1rem", borderBottom: "1px solid var(--color-border)" }}>
          <input
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              width: "100%", padding: "0.75rem",
              background: "var(--color-bg-2)", border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-sm)", color: "var(--color-text)",
              fontSize: "1rem", outline: "none",
            }}
          />
        </div>
        <div style={{ maxHeight: "50vh", overflowY: "auto" }}>
          {loading && <p style={{ padding: "1rem", color: "var(--color-muted)", textAlign: "center" }}>Searching...</p>}
          {!loading && query.length >= 2 && results.length === 0 && (
            <p style={{ padding: "1rem", color: "var(--color-muted)", textAlign: "center" }}>No results found</p>
          )}
          {results.map((r) => (
            <button
              key={r.id}
              onClick={() => { router.push(`/blog/${r.slug}`); onClose(); }}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "0.85rem 1rem", background: "transparent",
                border: "none", borderBottom: "1px solid var(--color-border)",
                color: "var(--color-text)", cursor: "pointer",
                fontSize: "0.9rem", fontWeight: 500,
              }}
            >
              <span style={{ color: "var(--color-text)" }}>{r.title}</span>
              <br />
              <small style={{ color: "var(--color-muted)" }}>
                {r.category?.replace(/_/g, " ")} · {r.reading_time} min
              </small>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
