export async function fetchLeaveRequests() {
    const { data, error } = await supabase.from('leaveRequests').select('*');

    if (error) {
        console.error('Error fetching leave requests:', error.message);
        return [];
    }

    return data;
}
