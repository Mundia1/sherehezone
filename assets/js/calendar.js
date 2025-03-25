const API_KEY = "s5u1hiujfWbRFWsOpHsyQBxAFZXsgbO0";
const COUNTRY = "KE";
const YEAR = new Date().getFullYear();

async function fetchHolidays() {
    try {
        const response = await fetch(`https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=${COUNTRY}&year=${YEAR}`);
        const data = await response.json();
        displayHolidays(data.response.holidays);
    } catch (error) {
        console.error("Error fetching holidays:", error);
    }
}

function displayHolidays(holidays) {
    const holidayList = document.getElementById("holiday-list");
    holidayList.innerHTML = "";

    holidays.slice(0, 5).forEach(holiday => {
        const li = document.createElement("li");
        li.textContent = `${holiday.date.iso} - ${holiday.name}`;
        holidayList.appendChild(li);
    });
}
