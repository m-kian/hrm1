import { supabase } from '../src/supabase.js';

export async function fetchTopEmployees() {
    const { data, error } = await supabase.from('rankings').select('*').order('score', { ascending: false });

    if (error) {
        console.error('Error fetching rankings:', error.message);
        return [];
    }

    return data;
}
