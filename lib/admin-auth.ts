import crypto from "crypto";

const COOKIE_NAME = "rd_admin_session";

function getSecret() {
  return process.env.RD_ADMIN_SECRET || "change-this-secret";
}

function getPassword() {
  return process.env.RD_ADMIN_PASSWORD || "change-this-password";
}

export function getAdminCookieName() {
  return COOKIE_NAME;
}

export function verifyPassword(password: string) {
  return password === getPassword();
}

export function signAdminValue(value: string) {
  const sig = crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
  return `${value}.${sig}`;
}

export function verifyAdminValue(signed: string | undefined) {
  if (!signed) return false;
  const parts = signed.split(".");
  if (parts.length < 2) return false;
  const value = parts.slice(0, -1).join(".");
  const sig = parts[parts.length - 1];
  const expected = crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}
