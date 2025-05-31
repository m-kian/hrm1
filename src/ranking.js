import { fetchTopEmployees } from '../services/rankingService.js';

document.addEventListener('DOMContentLoaded', async () => {
    const rankingList = document.getElementById('rankingList');
    if (rankingList) {
        const topEmployees = await fetchTopEmployees();
        rankingList.innerHTML = topEmployees.map(emp => `<p>${emp.name}: ${emp.score} points</p>`).join('');
    }
});
