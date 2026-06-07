import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Dedicated Supabase client pointing to the existing backend where the
 * `stripe` and `react-paypal` edge functions are deployed (with the
 * STRIPE_SECRET_KEY / PAYPAL_CLIENT_SECRET configured server-side).
 *
 * This is intentionally separate from the project's primary Supabase
 * client (Lovable Cloud) so authentication/data flows stay isolated
 * from the payment showcase backend.
 */
const url = import.meta.env.VITE_PAYMENTS_SUPABASE_URL as string;
const anonKey = import.meta.env.VITE_PAYMENTS_SUPABASE_ANON_KEY as string;

export const paymentsSupabase: SupabaseClient = createClient(url, anonKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});
