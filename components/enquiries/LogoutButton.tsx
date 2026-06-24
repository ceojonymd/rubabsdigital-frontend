"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function logout() {
    setBusy(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin-login");
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      onClick={logout}
      disabled={busy}
      style={{
        padding: "0.78rem 1rem",
        borderRadius: "999px",
        border: "1px solid var(--color-border)",
        background: "rgba(255,255,255,0.03)",
        color: "var(--color-text)",
        fontWeight: 700,
      }}
    >
      {busy ? "Signing out..." : "Logout"}
    </button>
  );
}
