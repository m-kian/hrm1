Initialize Supabase (src/supabase.js)**
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'your-anon-public-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


Authentication & Session Handling (src/auth.js)
import { supabase } from './Supabase.js';
