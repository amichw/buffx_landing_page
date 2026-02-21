type WaitlistEmailPayload = {
  fullName: string;
  email: string;
  phone: string;
  hasDivorceDoc: boolean;
  submittedAt: string;
};

async function sendResendEmail({
  to,
  subject,
  html,
}: {
  to: string[];
  subject: string;
  html: string;
}): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    throw new Error("Missing RESEND_API_KEY or RESEND_FROM_EMAIL");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend request failed: ${errorText}`);
  }
}

export async function sendWaitlistConfirmationEmail({
  fullName,
  email,
}: Pick<WaitlistEmailPayload, "fullName" | "email">): Promise<void> {
  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #0F172A;">
      <h2 style="margin-bottom: 12px;">תודה שנרשמת ל-Buffx</h2>
      <p>היי ${fullName},</p>
      <p>קיבלנו את הפרטים שלך בהצלחה לרשימת ההמתנה.</p>
      <p>נעדכן אותך ברגע שהמערכת תהיה זמינה.</p>
      <p style="margin-top: 20px;">צוות Buffx</p>
    </div>
  `;

  await sendResendEmail({
    to: [email],
    subject: "נרשמת בהצלחה לרשימת ההמתנה של Buffx",
    html,
  });
}

export async function sendWaitlistNotificationEmail(payload: WaitlistEmailPayload): Promise<void> {
  const notificationTarget = process.env.WAITLIST_NOTIFICATION_TO?.trim();
  if (!notificationTarget) {
    return;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0F172A;">
      <h2 style="margin-bottom: 12px;">New waitlist submission</h2>
      <p><strong>Name:</strong> ${payload.fullName}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Has divorce document:</strong> ${payload.hasDivorceDoc ? "Yes" : "No"}</p>
      <p><strong>Submitted at:</strong> ${payload.submittedAt}</p>
    </div>
  `;

  await sendResendEmail({
    to: [notificationTarget],
    subject: "Buffx waitlist: new submission",
    html,
  });
}

