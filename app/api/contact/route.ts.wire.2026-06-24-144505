import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: string) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isEmptySelect(value: string) {
  const v = String(value || "").trim().toLowerCase();
  return !v || v === "select a service" || v === "select a budget range";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const business = String(body?.business || "").trim();
    const service = String(body?.service || "").trim();
    const budget = String(body?.budget || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (isEmptySelect(service)) {
      return NextResponse.json(
        { error: "Please select the service you need." },
        { status: 400 }
      );
    }

    if (isEmptySelect(budget)) {
      return NextResponse.json(
        { error: "Please select your budget range." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;
    const contactAckFromEmail =
      process.env.CONTACT_ACK_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !contactToEmail || !contactFromEmail || !contactAckFromEmail) {
      return NextResponse.json(
        { error: "Email service is not configured correctly." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeBusiness = escapeHtml(business || "Not provided");
    const safeService = escapeHtml(service);
    const safeBudget = escapeHtml(budget);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const submittedAt = new Date().toLocaleString("en-BD", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Dhaka",
    });

    const ownerEmail = await resend.emails.send({
      from: `Rubab's Digital <${contactFromEmail}>`,
      to: [contactToEmail],
      reply_to: email,
      subject: `New Consultation Request — ${service} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.7;color:#111827">
          <h2 style="margin:0 0 16px">New Consultation Request</h2>
          <p style="margin:0 0 18px;color:#4b5563">
            A new lead has been submitted through the Rubab's Digital contact form.
          </p>

          <table style="border-collapse:collapse;width:100%;max-width:720px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
            <tr>
              <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;font-weight:700;width:180px">Name</td>
              <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;font-weight:700">Email</td>
              <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;font-weight:700">Business</td>
              <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb">${safeBusiness}</td>
            </tr>
            <tr>
              <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;font-weight:700">Service</td>
              <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb">${safeService}</td>
            </tr>
            <tr>
              <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;font-weight:700">Budget</td>
              <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb">${safeBudget}</td>
            </tr>
            <tr>
              <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;font-weight:700">Submitted At</td>
              <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb">${escapeHtml(submittedAt)} (Bangladesh Time)</td>
            </tr>
            <tr>
              <td style="padding:12px 14px;font-weight:700;vertical-align:top">Project Details</td>
              <td style="padding:12px 14px">${safeMessage}</td>
            </tr>
          </table>

          <p style="margin:18px 0 0;color:#4b5563">
            Reply directly to this email to continue the conversation with the lead.
          </p>
        </div>
      `,
    });

    if (ownerEmail.error) {
      console.error("RESEND_ADMIN_ERROR:", ownerEmail.error);
      return NextResponse.json(
        { error: ownerEmail.error.message || "Failed to send admin notification." },
        { status: 500 }
      );
    }

    const ackEmail = await resend.emails.send({
      from: `Rubab's Digital <${contactAckFromEmail}>`,
      to: [email],
      subject: `We received your consultation request for ${service}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.7;color:#111827">
          <h2 style="margin:0 0 16px">Thank you, ${safeName}</h2>
          <p style="margin:0 0 14px;color:#374151">
            We received your consultation request and noted that you are interested in <strong>${safeService}</strong>.
          </p>
          <p style="margin:0 0 14px;color:#374151">
            Your selected budget range was <strong>${safeBudget}</strong>${business ? `, and the business name submitted was <strong>${safeBusiness}</strong>` : ""}.
          </p>
          <p style="margin:0 0 14px;color:#374151">
            Our team will review your message and respond with the clearest next step based on your needs.
          </p>
          <div style="margin:18px 0;padding:14px 16px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px">
            <div style="font-weight:700;margin-bottom:8px">Your message</div>
            <div style="color:#4b5563">${safeMessage}</div>
          </div>
          <p style="margin:0;color:#4b5563">
            Rubab's Digital<br />
            Jessore, Bangladesh<br />
            mail@rubabsdigital.com
          </p>
        </div>
      `,
    });

    if (ackEmail.error) {
      console.error("RESEND_ACK_ERROR:", ackEmail.error);
      return NextResponse.json(
        {
          error:
            ackEmail.error.message || "Your request was saved, but the acknowledgment email failed.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        "Message received. We’ll review your request and reply with the clearest next step.",
      adminEmailId: ownerEmail.data?.id,
      ackEmailId: ackEmail.data?.id,
    });
  } catch (error) {
    console.error("CONTACT_ROUTE_ERROR:", error);
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
