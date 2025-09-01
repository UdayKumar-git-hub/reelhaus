// src/supabaseEventClient.js
import { createClient } from '@supabase/supabase-js';

// Keys from your NEW "ReelHaus Events" project
const supabaseUrl = 'https://iklwclewqvzblrgnbhfp.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrbHdjbGV3cXZ6YmxyZ25iaGZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MTc5ODMsImV4cCI6MjA3MjI5Mzk4M30.5u-FF8boLQTaCpPF3eMl2voL3TQhuAf94LFPqp8tr1M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);