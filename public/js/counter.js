
// Set the locale for number formatting based on the document language
const locale = document.documentElement.lang === "en" ? "en-EN" : "de-DE";
// Set the interval in milliseconds to update the number
const updateInterval = 40;
// Set the total number of updates for the animation
const totalUpdates = 50;

function count(element) {
    const targetNumber = parseInt(element.getAttribute("data-number"), 10);
    let currentNumber = 0;
    const increment = targetNumber / totalUpdates;

    // Update the numbers in the elements
    const intervalId = setInterval(() => {
        currentNumber += increment;

        if (currentNumber >= targetNumber) {
            clearInterval(intervalId);
            currentNumber = targetNumber;
        }

        element.innerHTML = Math.round(currentNumber).toLocaleString(locale);
    }, updateInterval);
}

// Select all elements with the class "js-counter"
const keyFacts = document.querySelectorAll(".js-counter");

// Create a new Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Check if the element has already been counted
            if (!entry.target.counted) {
                // Animate the number
                count(entry.target);
                // Set the counted flag to true to prevent multiple counts
                entry.target.counted = true;
                // Stop observing the element
                observer.unobserve(entry.target);
            }
        }
    });
});

// Observe each element with the "js-counter" class
keyFacts.forEach((keyFact) => {
    observer.observe(keyFact);
});
