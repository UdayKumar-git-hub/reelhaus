// src/supabaseEventClient.js
import { createClient } from '@supabase/supabase-js';

// Keys from your NEW "ReelHaus Events" project
const supabaseUrl = 'YOUR_NEW_SUPABASE_PROJECT_URL'; 
const supabaseAnonKey = 'YOUR_NEW_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);