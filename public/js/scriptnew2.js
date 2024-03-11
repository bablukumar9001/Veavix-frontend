const locale = document.documentElement.lang === "en" ? "en-EN" : "de-DE";

const updateInterval = 40;

const totalUpdates = 50;

function count(element) {
    const targetNumber = parseInt(element.getAttribute("data-number"), 10);
    let currentNumber = 0;
    const increment = targetNumber / totalUpdates;


    const intervalId = setInterval(() => {
        currentNumber += increment;

        if (currentNumber >= targetNumber) {
            clearInterval(intervalId);
            currentNumber = targetNumber;
        }

        element.innerHTML = Math.round(currentNumber).toLocaleString(locale);
    }, updateInterval);
}


const keyFacts = document.querySelectorAll(".js-counter");


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            if (!entry.target.counted) {

                count(entry.target);

                entry.target.counted = true;

                observer.unobserve(entry.target);
            }
        }
    });
});


keyFacts.forEach((keyFact) => {
    observer.observe(keyFact);
});


// goal statement 
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#sec1"
})
    .setClassToggle(".image-1", "is-visible")
    .addIndicators()
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#sec2"
})
    .setClassToggle(".image-2", "is-visible")
    .addIndicators()
    .addTo(controller);