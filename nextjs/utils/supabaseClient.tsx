import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) throw 'error'
if (!supabaseAnonKey) throw 'error'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
