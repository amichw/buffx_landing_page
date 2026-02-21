import { createSign } from "crypto";

type WaitlistSheetRow = {
  submittedAt: string;
  fullName: string;
  phone: string;
  email: string;
  hasDivorceDoc: boolean;
};

function toBase64Url(value: string): string {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function getGoogleServiceAccountPrivateKey(): string {
  const rawPrivateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  if (!rawPrivateKey) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY");
  }

  return rawPrivateKey.replace(/\\n/g, "\n");
}

function createGoogleJwt(): string {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  if (!clientEmail) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL");
  }

  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;

  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat,
    exp,
  };

  const encodedHeader = toBase64Url(JSON.stringify(header));
  const encodedPayload = toBase64Url(JSON.stringify(payload));
  const toSign = `${encodedHeader}.${encodedPayload}`;

  const signer = createSign("RSA-SHA256");
  signer.update(toSign);
  signer.end();

  const signature = signer.sign(getGoogleServiceAccountPrivateKey(), "base64url");
  return `${toSign}.${signature}`;
}

async function getGoogleAccessToken(): Promise<string> {
  const assertion = createGoogleJwt();
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  });

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Google token request failed: ${errorBody}`);
  }

  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error("Google token response missing access_token");
  }

  return data.access_token;
}

export async function appendWaitlistSubmissionToSheet(row: WaitlistSheetRow): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_TAB_NAME;

  if (!spreadsheetId || !sheetName) {
    throw new Error("Missing GOOGLE_SHEETS_SPREADSHEET_ID or GOOGLE_SHEETS_TAB_NAME");
  }

  const accessToken = await getGoogleAccessToken();
  const escapedSheetName = sheetName.replace(/'/g, "''");
  const range = encodeURIComponent(`'${escapedSheetName}'!A:E`);
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[row.submittedAt, row.fullName, row.phone, row.email, row.hasDivorceDoc ? "Yes" : "No"]],
      }),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Google Sheets append failed: ${errorBody}`);
  }
}
