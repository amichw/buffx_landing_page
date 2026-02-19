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

## Supabase Form Integration

The waitlist form writes to Supabase directly from the browser.

1. Copy `.env.example` to `.env.local`.
2. Set:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SUPABASE_WAITLIST_TABLE` (optional, defaults to `waitlist_submissions`)
3. Create the table in Supabase with columns:
   - `full_name` (text)
   - `phone` (text)
   - `email` (text)
   - `has_divorce_doc` (boolean)
   - `submitted_at` (timestamptz)
