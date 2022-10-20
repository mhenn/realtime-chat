import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

console.log(supabaseUrl)
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing API keys for Supabase')
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
