
// JavaScript to populate dynamic data
document.addEventListener("DOMContentLoaded", function() {
    // Get the current date and time
    const now = new Date();

    // Get the day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[now.getUTCDay()];

    // Update the elements with the dynamic data
    document.querySelector('[data-testid="currentDay"]').textContent = ` ${currentDay}`;

    // Initial call to update the UTC time
    updateUTCTime();

    // Update the UTC time every second (real-time)
    setInterval(updateUTCTime, 1000);
});


// Function to update the UTC time in milliseconds
function updateUTCTime() {
    const now = new Date();
    const currentUTCTimeInMillis = now.toUTCString().split(' ')[4];
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `${currentUTCTimeInMillis}`;
}