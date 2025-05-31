import { requestLeave, fetchLeaveRequests } from '../services/leaveService.js';

// Submit Leave Request
document.getElementById('leaveForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const employeeId = document.getElementById('employeeId').value;
    const leaveType = document.getElementById('leaveType').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    await requestLeave(employeeId, leaveType, startDate, endDate);
});

// Display Leave Requests
document.addEventListener('DOMContentLoaded', async () => {
    const leaveList = document.getElementById('leaveList');
    if (leaveList) {
        const leaveRequests = await fetchLeaveRequests();
        leaveList.innerHTML = leaveRequests.map(req => `<p>${req.employeeId}: ${req.leaveType} (${req.startDate} - ${req.endDate})</p>`).join('');
    }
});

