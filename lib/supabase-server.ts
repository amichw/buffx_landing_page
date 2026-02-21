import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabaseServerClient: SupabaseClient | null = null;

export function getSupabaseServerClient(): SupabaseClient {
  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServerKey = process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServerKey) {
    throw new Error("Missing SUPABASE_URL and one of SUPABASE_SECRET_KEY/SUPABASE_SERVICE_ROLE_KEY");
  }

  if (!supabaseServerClient) {
    supabaseServerClient = createClient(supabaseUrl, supabaseServerKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }

  return supabaseServerClient;
}
