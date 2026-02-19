import { NextResponse } from "next/server";

type ConfirmationPayload = {
  fullName?: string;
  email?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      { error: "Email provider is not configured" },
      { status: 503 }
    );
  }

  const body = (await request.json()) as ConfirmationPayload;
  const fullName = body.fullName?.trim() ?? "";
  const email = body.email?.trim() ?? "";

  if (!fullName || !email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #0F172A;">
      <h2 style="margin-bottom: 12px;">תודה שנרשמת ל-Buffx</h2>
      <p>היי ${fullName},</p>
      <p>קיבלנו את הפרטים שלך בהצלחה לרשימת ההמתנה.</p>
      <p>נעדכן אותך ברגע שהמערכת תהיה זמינה.</p>
      <p style="margin-top: 20px;">צוות Buffx</p>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [email],
      subject: "נרשמת בהצלחה לרשימת ההמתנה של Buffx",
      html,
    }),
  });

  if (!resendResponse.ok) {
    const resendError = await resendResponse.text();
    return NextResponse.json(
      { error: "Failed to send confirmation email", details: resendError },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
