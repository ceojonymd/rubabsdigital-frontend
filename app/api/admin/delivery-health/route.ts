import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminCookieName, verifyAdminValue } from "@/lib/admin-auth";

export async function GET() {
  const token = cookies().get(getAdminCookieName())?.value;
  if (!verifyAdminValue(token)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const health = {
    n8nWebhookUrlConfigured: Boolean(process.env.N8N_CONTACT_WEBHOOK_URL),
    n8nWebhookTokenConfigured: Boolean(process.env.N8N_CONTACT_WEBHOOK_TOKEN),
    adminPasswordConfigured:
      Boolean(process.env.RD_ADMIN_PASSWORD) && process.env.RD_ADMIN_PASSWORD !== "change-this-now",
    adminSecretConfigured:
      Boolean(process.env.RD_ADMIN_SECRET) && process.env.RD_ADMIN_SECRET !== "replace-with-long-random-secret",
    smtpHostConfigured: Boolean(process.env.SMTP_HOST),
    smtpUserConfigured: Boolean(process.env.SMTP_USER),
    telegramChatConfigured: Boolean(process.env.TELEGRAM_CHAT_ID),
    telegramBotConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN),
  };

  return NextResponse.json({ ok: true, health });
}
