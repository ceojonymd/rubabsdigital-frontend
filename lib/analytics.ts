export function trackEvent(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const data = { event, ...payload };

  try {
    (window as typeof window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer =
      (window as typeof window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer || [];
    (window as typeof window & { dataLayer: Array<Record<string, unknown>> }).dataLayer.push(data);
  } catch {}

  try {
    const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", event, payload);
    }
  } catch {}
}
