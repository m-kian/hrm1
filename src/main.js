import { fetchEmployees } from './src/employee.js';

document.addEventListener('DOMContentLoaded', async () => {
    const employees = await fetchEmployees();
    document.getElementById('employeeList').innerHTML = employees.map(emp => `<p>${emp.name} - ${emp.jobTitle}</p>`).join('');
});
