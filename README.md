# Buffx Landing Page

Next.js 14 (App Router, TypeScript) implementation of the Buffx landing page.

## Requirements

- Node.js 18+
- npm

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Waitlist Submission Flow

The form posts to `POST /api/waitlist/submit` and the server does:

1. Insert the record into Supabase (source of truth).
2. Trigger Google Sheets append in the background.
3. Trigger confirmation + team notification emails in the background.

Google Sheets and email failures do not block user success once Supabase insert succeeds.

## Supabase Setup

1. Copy `.env.example` to `.env.local`.
2. Set:
   - `SUPABASE_URL` (or reuse `NEXT_PUBLIC_SUPABASE_URL`)
   - `SUPABASE_SECRET_KEY` (preferred)
   - `SUPABASE_SERVICE_ROLE_KEY` (fallback for compatibility)
   - `SUPABASE_WAITLIST_TABLE` (optional, defaults to `waitlist_submissions`)
3. Create the table in Supabase with columns:
   - `full_name` (text)
   - `phone` (text)
   - `email` (text)
   - `has_divorce_doc` (boolean)
   - `submitted_at` (timestamptz)

## Resend Setup

Set:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` (must be a verified sender in Resend)
- `WAITLIST_NOTIFICATION_TO` (recipient for internal alerts)

## Google Sheets Setup

1. Create a Google Cloud project at https://console.cloud.google.com.
2. Enable `Google Sheets API` for that project.
3. Create a Service Account:
   - `IAM & Admin` -> `Service Accounts` -> `Create service account`.
   - Create and download a JSON key.
4. Create a Google Sheet with a tab name (for example `waitlist`) and columns:
   - `submitted_at`, `full_name`, `phone`, `email`, `has_divorce_doc`
5. Share the Google Sheet with the service account email as `Editor`.
6. Add env vars:
   - `GOOGLE_SHEETS_SPREADSHEET_ID` (from sheet URL)
   - `GOOGLE_SHEETS_TAB_NAME` (tab name, e.g. `waitlist`)
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` (use `\n` escapes in `.env.local`)
