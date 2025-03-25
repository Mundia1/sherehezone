document.addEventListener("DOMContentLoaded", async () => {
    try {
        console.log("Loading APIs...");
        
        await fetchHolidays();       // Calendarific API
        await fetchTravelDeals();    // Amadeus API
        await fetchEvents();         // Eventbrite API
        await fetchShoppingDeals();  // ScrapingBee API
        await fetchWeather();        // Weather API
        
        console.log("All APIs loaded successfully!");
    } catch (error) {
        console.error("Error initializing app:", error);
    }
});
