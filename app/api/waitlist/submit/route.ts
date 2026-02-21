import { NextResponse } from "next/server";
import { appendWaitlistSubmissionToSheet } from "../../../../lib/google-sheets";
import { getSupabaseServerClient } from "../../../../lib/supabase-server";
import { sendWaitlistConfirmationEmail, sendWaitlistNotificationEmail } from "../../../../lib/waitlist-email";

type WaitlistPayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  hasDivorceDoc?: boolean;
  companyWebsite?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizePayload(body: WaitlistPayload) {
  return {
    fullName: body.fullName?.trim() ?? "",
    phone: body.phone?.trim() ?? "",
    email: body.email?.trim().toLowerCase() ?? "",
    hasDivorceDoc: Boolean(body.hasDivorceDoc),
    companyWebsite: body.companyWebsite?.trim() ?? "",
  };
}

export async function POST(request: Request) {
  const body = (await request.json()) as WaitlistPayload;
  const payload = normalizePayload(body);

  if (payload.companyWebsite) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!payload.fullName || !payload.phone || !payload.email || !isValidEmail(payload.email)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  let submittedAt = new Date().toISOString();

  try {
    const tableName =
      process.env.SUPABASE_WAITLIST_TABLE ?? process.env.NEXT_PUBLIC_SUPABASE_WAITLIST_TABLE ?? "waitlist_submissions";
    const supabase = getSupabaseServerClient();

    const { error } = await supabase.from(tableName).insert({
      full_name: payload.fullName,
      phone: payload.phone,
      email: payload.email,
      has_divorce_doc: payload.hasDivorceDoc,
      submitted_at: submittedAt,
    });

    if (error) {
      console.error("Supabase insert failed:", error);
      return NextResponse.json({ error: "Failed to save submission" }, { status: 502 });
    }
  } catch (error) {
    console.error("Waitlist submission failed before side effects:", error);
    return NextResponse.json({ error: "Service is not configured" }, { status: 503 });
  }

  const sideEffects = [
    {
      name: "google_sheets",
      run: () =>
        appendWaitlistSubmissionToSheet({
          submittedAt,
          fullName: payload.fullName,
          phone: payload.phone,
          email: payload.email,
          hasDivorceDoc: payload.hasDivorceDoc,
        }),
    },
    {
      name: "confirmation_email",
      run: () =>
        sendWaitlistConfirmationEmail({
          fullName: payload.fullName,
          email: payload.email,
        }),
    },
    {
      name: "notification_email",
      run: () =>
        sendWaitlistNotificationEmail({
          fullName: payload.fullName,
          email: payload.email,
          phone: payload.phone,
          hasDivorceDoc: payload.hasDivorceDoc,
          submittedAt,
        }),
    },
  ] as const;

  const sideEffectResults = await Promise.allSettled(sideEffects.map((effect) => effect.run()));
  const failedEffects: { name: string; reason: string }[] = [];

  sideEffectResults.forEach((result, index) => {
    if (result.status === "rejected") {
      const failure = { name: sideEffects[index].name, reason: String(result.reason) };
      failedEffects.push(failure);
      console.error(`Waitlist side effect failed [${failure.name}]`, failure.reason);
    }
  });

  if (process.env.NODE_ENV !== "production") {
    return NextResponse.json({ ok: true, sideEffectsFailed: failedEffects }, { status: 200 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
