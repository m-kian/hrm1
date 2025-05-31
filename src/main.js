import { fetchEmployees } from './src/employee.js';

document.addEventListener('DOMContentLoaded', async () => {
    const employees = await fetchEmployees();
    const tableBody = document.getElementById('employeeTable');

    if (employees.length > 0) {
        tableBody.innerHTML = employees.map(emp => `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.jobTitle}</td>
            </tr>
        `).join('');
    } else {
        tableBody.innerHTML = '<tr><td colspan="3">No employees found.</td></tr>';
    }
});
