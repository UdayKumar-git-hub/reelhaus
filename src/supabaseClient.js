// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yrrxcjmnptbolmbmbqkw.supabase.co'; // Paste your URL here
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlycnhjam1ucHRib2xtYm1icWt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MzAxODMsImV4cCI6MjA3MDIwNjE4M30.YlMdd1S6s3--xv-qtuNe9aXBitJtxCo9AG3SkFPVrcU'; // Paste your anon key here

export const supabase = createClient(supabaseUrl, supabaseAnonKey);