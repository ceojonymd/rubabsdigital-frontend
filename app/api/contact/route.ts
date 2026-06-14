import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: string) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail =
      process.env.CONTACT_TO_EMAIL || "rdceojony@gmail.com";
    const contactFromEmail =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const contactAckFromEmail =
      process.env.CONTACT_ACK_FROM_EMAIL || contactFromEmail;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const submittedAt = new Date().toLocaleString("en-BD", {
      timeZone: "Asia/Dhaka",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const safeSubmittedAt = escapeHtml(submittedAt);

    const adminEmail = await resend.emails.send({
      from: `Rubab's Digital <${contactFromEmail}>`,
      to: contactToEmail,
      reply_to: email,
      subject: `Website Lead • ${service} • ${name}`,
      html: `
        <div style="margin:0;padding:24px;background:#f6f7fb;font-family:Arial,sans-serif;color:#172033;">
          <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden;">
            <div style="padding:24px 20px;background:linear-gradient(135deg,#0f766e,#0b3b66);color:#fff;">
              <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.9;">Rubab's Digital</p>
              <h1 style="margin:0;font-size:28px;line-height:1.2;">New Consultation Request</h1>
            </div>
            <div style="padding:24px 20px;">
              <p style="margin:0 0 10px 0;font-size:15px;line-height:1.7;"><strong>Name:</strong> ${safeName}</p>
              <p style="margin:0 0 10px 0;font-size:15px;line-height:1.7;"><strong>Email:</strong> ${safeEmail}</p>
              <p style="margin:0 0 10px 0;font-size:15px;line-height:1.7;"><strong>Phone:</strong> ${safePhone}</p>
              <p style="margin:0 0 10px 0;font-size:15px;line-height:1.7;"><strong>Service:</strong> ${safeService}</p>
              <p style="margin:0 0 18px 0;font-size:15px;line-height:1.7;"><strong>Submitted:</strong> ${safeSubmittedAt}</p>
              <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:16px;padding:16px;">
                <p style="margin:0 0 10px 0;font-size:15px;line-height:1.7;"><strong>Message:</strong></p>
                <p style="margin:0;font-size:15px;line-height:1.8;">${safeMessage}</p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (adminEmail.error) {
      console.error("RESEND_ADMIN_ERROR:", adminEmail.error);
      return NextResponse.json(
        {
          error: `Admin email failed: ${adminEmail.error.message || "Unknown Resend error"}`,
          details: adminEmail.error,
        },
        { status: 500 }
      );
    }

    const ackEmail = await resend.emails.send({
      from: `Rubab's Digital <${contactAckFromEmail}>`,
      to: email,
      reply_to: contactToEmail,
      subject: "We received your consultation request",
      html: `
        <div style="margin:0;padding:24px;background:#f6f7fb;font-family:Arial,sans-serif;color:#172033;">
          <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden;">
            <div style="padding:28px 20px 14px 20px;background:linear-gradient(135deg,#0f766e,#0b3b66);color:#ffffff;">
              <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.9;">Rubab's Digital</p>
              <h1 style="margin:0;font-size:28px;line-height:1.2;">Message Received</h1>
            </div>
            <div style="padding:24px 20px;">
              <p style="margin:0 0 14px 0;font-size:16px;line-height:1.7;">Hi ${safeName},</p>
              <p style="margin:0 0 14px 0;font-size:16px;line-height:1.7;">
                Thanks for reaching out to Rubab's Digital. We received your consultation request successfully.
              </p>
              <p style="margin:0 0 18px 0;font-size:16px;line-height:1.7;">
                We’ll review your request and contact you within <strong>2–6 hours</strong> with a clear plan.
              </p>
              <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:16px;padding:16px;margin:0 0 18px 0;">
                <p style="margin:0 0 8px 0;font-size:14px;color:#475467;"><strong>Your submission summary</strong></p>
                <p style="margin:0 0 6px 0;font-size:14px;line-height:1.6;"><strong>Service:</strong> ${safeService}</p>
                <p style="margin:0 0 6px 0;font-size:14px;line-height:1.6;"><strong>Email:</strong> ${safeEmail}</p>
                <p style="margin:0 0 6px 0;font-size:14px;line-height:1.6;"><strong>Phone:</strong> ${safePhone}</p>
                <p style="margin:0;font-size:14px;line-height:1.6;"><strong>Submitted:</strong> ${safeSubmittedAt}</p>
              </div>
              <p style="margin:0 0 14px 0;font-size:15px;line-height:1.7;color:#344054;">
                If you want to add more details, just reply to this email.
              </p>
              <p style="margin:0;font-size:15px;line-height:1.7;">
                Regards,<br />
                Rubab's Digital
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (ackEmail.error) {
      console.error("RESEND_ACK_ERROR:", ackEmail.error);
      return NextResponse.json(
        {
          error: `Acknowledgment email failed: ${ackEmail.error.message || "Unknown Resend error"}`,
          details: ackEmail.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        "Message received. We'll review your request and contact you within 2–6 hours.",
      adminEmailId: adminEmail.data?.id || null,
      ackEmailId: ackEmail.data?.id || null,
    });
  } catch (error) {
    console.error("CONTACT_ROUTE_FATAL_ERROR:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
