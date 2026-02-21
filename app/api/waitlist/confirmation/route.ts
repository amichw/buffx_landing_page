import { NextResponse } from "next/server";
import { sendWaitlistConfirmationEmail } from "../../../../lib/waitlist-email";

type ConfirmationPayload = {
  fullName?: string;
  email?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as ConfirmationPayload;
  const fullName = body.fullName?.trim() ?? "";
  const email = body.email?.trim() ?? "";

  if (!fullName || !email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  try {
    await sendWaitlistConfirmationEmail({ fullName, email });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send confirmation email", details: String(error) },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
