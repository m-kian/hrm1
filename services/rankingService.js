import { supabase } from '../src/supabase.js';

export async function generateMonthlyRanking() {
    const { data, error } = await supabase.rpc('generate_rankings'); // Assuming a stored procedure

    if (error) {
        console.error('Ranking generation failed:', error.message);
        return null;
    }

    return data;
}

import { supabase } from '../src/supabase.js';

export async function fetchTopEmployees() {
    const { data, error } = await supabase.from('rankings').select('*').order('score', { ascending: false });

    if (error) {
        console.error('Error fetching rankings:', error.message);
        return [];
    }

    return data;
}
