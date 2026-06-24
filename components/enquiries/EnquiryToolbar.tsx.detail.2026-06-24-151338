"use client";

import { useEffect, useState } from "react";

type HealthState = {
  n8nWebhookUrlConfigured: boolean;
  n8nWebhookTokenConfigured: boolean;
  adminPasswordConfigured: boolean;
  adminSecretConfigured: boolean;
  smtpHostConfigured: boolean;
  smtpUserConfigured: boolean;
  telegramChatConfigured: boolean;
  telegramBotConfigured: boolean;
};

export default function EnquiryToolbar() {
  const [health, setHealth] = useState<HealthState | null>(null);

  useEffect(() => {
    fetch("/api/admin/delivery-health")
      .then((res) => res.json())
      .then((data) => {
        if (data?.ok) setHealth(data.health);
      })
      .catch(() => {});
  }, []);

  function pill(active: boolean, label: string) {
    return (
      <span
        style={{
          display: "inline-flex",
          padding: "0.45rem 0.8rem",
          borderRadius: "999px",
          border: active ? "1px solid rgba(0,229,160,0.24)" : "1px solid rgba(255,255,255,0.10)",
          background: active ? "rgba(0,229,160,0.10)" : "rgba(255,255,255,0.05)",
          color: active ? "var(--color-accent)" : "var(--color-text-muted)",
          fontSize: "0.78rem",
          fontWeight: 700,
        }}
      >
        {label}
      </span>
    );
  }

  return (
    <div style={{ display: "grid", gap: "0.9rem", marginBottom: "1rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
        <a
          href="/api/enquiries/export"
          style={{
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
          }}
        >
          Export CSV
        </a>

        <a
          href="/ops/rubabs-digital-live-activation.md"
          target="_blank"
          rel="noopener noreferrer"
          style={{
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
          }}
        >
          Live Activation Notes
        </a>
      </div>

      {health ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
          {pill(health.n8nWebhookUrlConfigured, "n8n URL")}
          {pill(health.n8nWebhookTokenConfigured, "n8n Token")}
          {pill(health.smtpHostConfigured && health.smtpUserConfigured, "SMTP")}
          {pill(health.telegramBotConfigured && health.telegramChatConfigured, "Telegram")}
          {pill(health.adminPasswordConfigured && health.adminSecretConfigured, "Admin Security")}
        </div>
      ) : null}
    </div>
  );
}
