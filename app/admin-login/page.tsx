import { Suspense } from "react";
import AdminLoginClient from "@/components/admin-login/AdminLoginClient";

export const metadata = {
  title: "Admin Login | Rubab's Digital",
  description: "Secure login for the Rubab's Digital enquiry desk.",
};

export default function AdminLoginPage() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem" }}>
      <Suspense
        fallback={
          <div
            style={{
              width: "100%",
              maxWidth: "520px",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "1.4rem",
              color: "var(--color-text-muted)",
            }}
          >
            Loading secure login...
          </div>
        }
      >
        <AdminLoginClient />
      </Suspense>
    </main>
  );
}
