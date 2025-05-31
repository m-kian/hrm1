import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://iradphcrwwokdrnhxpnd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyYWRwaGNyd3dva2Rybmh4cG5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MTI5ODEsImV4cCI6MjA2MjI4ODk4MX0.X1okOgCMPHNh_vufxDnSlENTO99tMDjkSOXMeWawNrU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

import { supabase } from './Supabase.js';
