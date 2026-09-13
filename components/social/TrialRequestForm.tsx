"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import {
  BUSINESS_TYPES,
  OFFER_NAME,
  whatsappTrialHref,
  type BusinessType,
} from "@/lib/daily-presence";

type Props = {
  defaultType?: BusinessType | string;
  nicheLabel?: string;
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 0.95rem",
  borderRadius: "0.95rem",
  border: "1px solid var(--color-border)",
  background: "rgba(255,255,255,0.04)",
  color: "var(--color-text)",
  fontSize: "0.95rem",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontWeight: 700,
  fontSize: "0.82rem",
  marginBottom: "0.4rem",
  color: "var(--color-text)",
};

export default function TrialRequestForm({ defaultType = "Other", nicheLabel }: Props) {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState(defaultType);
  const [services, setServices] = useState("");
  const [url, setUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "opening" | "sent">("idle");

  const href = useMemo(
    () =>
      whatsappTrialHref({
        businessName,
        businessType,
        services,
        url,
        niche: nicheLabel,
      }),
    [businessName, businessType, services, url, nicheLabel]
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("opening");
    trackEvent("rd_daily_presence_trial_whatsapp", {
      form_name: "daily_presence_trial",
      business_type: businessType,
      niche: nicheLabel || "general",
      has_email: Boolean(email.trim()),
      has_phone: Boolean(phone.trim()),
    });
    window.open(href, "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: "0.9rem",
      }}
    >
      <div>
        <label htmlFor="dp-business-name" style={labelStyle}>
          Business name
        </label>
        <input
          id="dp-business-name"
          name="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
          autoComplete="organization"
          style={fieldStyle}
        />
      </div>

      <div>
        <label htmlFor="dp-business-type" style={labelStyle}>
          Business type
        </label>
        <select
          id="dp-business-type"
          name="businessType"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          style={fieldStyle}
        >
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="dp-services" style={labelStyle}>
          Services offered
        </label>
        <input
          id="dp-services"
          name="services"
          value={services}
          onChange={(e) => setServices(e.target.value)}
          placeholder="Land sales, listings, products, cuts…"
          style={fieldStyle}
        />
      </div>

      <div>
        <label htmlFor="dp-url" style={labelStyle}>
          Website or social URL
        </label>
        <input
          id="dp-url"
          name="url"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://"
          style={fieldStyle}
        />
      </div>

      <div>
        <label htmlFor="dp-phone" style={labelStyle}>
          Phone / WhatsApp
        </label>
        <input
          id="dp-phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
          style={fieldStyle}
        />
      </div>

      <div>
        <label htmlFor="dp-email" style={labelStyle}>
          Email (optional if phone given)
        </label>
        <input
          id="dp-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          style={fieldStyle}
        />
      </div>

      <button
        type="submit"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.95rem 1.15rem",
          borderRadius: "var(--radius-lg)",
          background: "var(--color-accent)",
          color: "#09140f",
          fontWeight: 700,
          border: "none",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Start my 3-day free trial on WhatsApp
      </button>

      <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>
        Opens WhatsApp with a short {OFFER_NAME} trial message. No payment during the 3-day trial.
        Drafts only go live after you approve.
      </p>

      {status === "sent" ? (
        <p style={{ color: "var(--color-accent)", fontWeight: 700, margin: 0 }}>
          WhatsApp should be open. If it did not, use the Chat on WhatsApp button above.
        </p>
      ) : null}
    </form>
  );
}
