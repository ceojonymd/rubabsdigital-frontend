import crypto from "crypto";

const COOKIE_NAME = "rd-admin-session";

export function getAdminCookieName() {
  return COOKIE_NAME;
}

export function signAdminValue(value: string) {
  return value;
}

export function verifyAdminValue(value?: string) {
  if (!value) return false;
  const expected = process.env.RD_ADMIN_SECRET || "";
  if (!expected) return false;

  const a = Buffer.from(value);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;

  return crypto.timingSafeEqual(a, b);
}

export function verifyPassword(password?: string) {
  if (!password) return false;
  const expected = process.env.RD_ADMIN_PASSWORD || "";
  if (!expected) return false;

  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;

  return crypto.timingSafeEqual(a, b);
}

export function getAdminRole() {
  return process.env.RD_ADMIN_ROLE === "operator" ? "operator" : "admin";
}

export function canManageRoleSensitive(role: string) {
  return role === "admin";
}
