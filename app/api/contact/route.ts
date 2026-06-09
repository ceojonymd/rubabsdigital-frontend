import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { google } from "googleapis"

async function appendToSheet(data: Record<string, string>) {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
  const spreadsheetId = process.env.GOOGLE_SHEET_ID

  if (!clientEmail || !privateKey || !spreadsheetId) return

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })

  const sheets = google.sheets({ version: "v4", auth })

  const row = [
    new Date().toLocaleString("en-BD", { timeZone: "Asia/Dhaka" }),
    data.name,
    data.email,
    data.phone || "—",
    data.service,
    data.message,
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:F",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL || "rdceojony@gmail.com"
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"

    if (!resendApiKey) {
      return NextResponse.json({ error: "RESEND_API_KEY is missing" }, { status: 500 })
    }

    const resend = new Resend(resendApiKey)
    const submittedAt = new Date().toLocaleString("en-BD", { timeZone: "Asia/Dhaka" })

    const resendResult = await resend.emails.send({
      from: `Rubab's Digital <${fromEmail}>`,
      to: [toEmail],
      reply_to: email,
      subject: `[WEBSITE LEAD] ${service} — ${name}`,
      text: `
New Consultation Request

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service}
Message: ${message}

Submitted at: ${submittedAt} (Bangladesh Time)
      `.trim(),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#111113;color:#f0eff4;padding:2rem;border-radius:12px;">
          <h2 style="color:#7c6fff;margin-bottom:1.5rem;">New Consultation Request</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:0.75rem 0;border-bottom:1px solid #2a2a35;color:#8e8da0;width:140px;">Name</td><td style="padding:0.75rem 0;border-bottom:1px solid #2a2a35;"><strong>${name}</strong></td></tr>
            <tr><td style="padding:0.75rem 0;border-bottom:1px solid #2a2a35;color:#8e8da0;">Email</td><td style="padding:0.75rem 0;border-bottom:1px solid #2a2a35;"><a href="mailto:${email}" style="color:#7c6fff;">${email}</a></td></tr>
            <tr><td style="padding:0.75rem 0;border-bottom:1px solid #2a2a35;color:#8e8da0;">Phone</td><td style="padding:0.75rem 0;border-bottom:1px solid #2a2a35;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding:0.75rem 0;border-bottom:1px solid #2a2a35;color:#8e8da0;">Service</td><td style="padding:0.75rem 0;border-bottom:1px solid #2a2a35;"><span style="background:#1e1c35;color:#7c6fff;padding:0.2rem 0.75rem;border-radius:999px;font-size:0.85rem;">${service}</span></td></tr>
            <tr><td style="padding:0.75rem 0;color:#8e8da0;vertical-align:top;">Message</td><td style="padding:0.75rem 0;"><p style="margin:0;line-height:1.7;">${message}</p></td></tr>
          </table>
          <div style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid #2a2a35;color:#7d7b8f;font-size:0.8rem;">
            Submitted at ${submittedAt} (Bangladesh Time)
          </div>
        </div>
      `,
    })

    if (resendResult.error) {
      console.error("Resend error:", resendResult.error)
      return NextResponse.json(
        { error: resendResult.error.message, resend: resendResult },
        { status: 500 }
      )
    }

    try {
      await appendToSheet({ name, email, phone: phone || "", service, message })
    } catch (sheetError) {
      console.error("Google Sheets append failed:", sheetError)
    }

    return NextResponse.json({ success: true, resend: resendResult })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
