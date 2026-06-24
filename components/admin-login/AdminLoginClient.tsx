"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLoginClient() {
  const router = useRouter();
  const search = useSearchParams();
  const nextPath = search.get("next") || "/enquiries";

  const [password, setPassword] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setMessage("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, next: nextPath }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Login failed.");
      }

      router.push(nextPath);
      router.refresh();
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setState("idle");
    }
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "520px",
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-xl)",
        padding: "1.4rem",
      }}
    >
      <div style={{ color: "var(--color-accent)", fontWeight: 700, marginBottom: "0.65rem" }}>
        Secure Access
      </div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 1rem + 2vw, 3.2rem)", lineHeight: 1.05, marginBottom: "0.9rem" }}>
        Admin Enquiry Login
      </h1>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
        Enter the admin password to review enquiry records and manage lead status.
      </p>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: "0.85rem" }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin password"
          style={{
            width: "100%",
            padding: "0.95rem 1rem",
            borderRadius: "0.95rem",
            border: "1px solid var(--color-border)",
            background: "rgba(255,255,255,0.03)",
            color: "var(--color-text)",
          }}
        />

        {message ? (
          <div
            style={{
              padding: "0.85rem 1rem",
              borderRadius: "0.95rem",
              border: "1px solid rgba(255,107,107,0.28)",
              background: "rgba(255,107,107,0.08)",
              color: "var(--color-text)",
            }}
          >
            {message}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={state === "loading"}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.95rem 1.2rem",
            borderRadius: "var(--radius-lg)",
            background: "var(--color-accent)",
            color: "#09140f",
            fontWeight: 700,
            border: "none",
          }}
        >
          {state === "loading" ? "Signing in..." : "Open Enquiry Desk →"}
        </button>
      </form>
    </div>
  );
}
