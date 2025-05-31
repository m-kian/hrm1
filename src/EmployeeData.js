Employee Data Handling (src/employee.js)**
import { supabase } from '../supabase.js';

export async function fetchEmployees() {
    const { data, error } = await supabase.from('employees').select('*');

    if (error) {
        console.error('Error fetching employees:', error.message);
        return [];
    }

    return data;
}
