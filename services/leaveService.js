import { supabase } from '../src/supabase.js';

export async function requestLeave(employeeId, leaveType, startDate, endDate) {
    const { data, error } = await supabase.from('leaveRequests').insert([
        { employeeId, leaveType, startDate, endDate, status: 'pending' }
    ]);

    if (error) {
        console.error('Error requesting leave:', error.message);
        return null;
    }

    return data;
}

export async function fetchLeaveRequests() {
    const { data, error } = await supabase.from('leaveRequests').select('*');

    if (error) {
        console.error('Error fetching leave requests:', error.message);
        return [];
    }

    return data;
}
