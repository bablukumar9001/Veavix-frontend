// init controller
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {}
});

// build scenes
new ScrollMagic.Scene({
    triggerElement: "#item-2"
})
    .setClassToggle("#item-2", "in") // add class toggle
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#item-3"
})
    .setClassToggle("#item-3", "in") // add class toggle
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#item-4"
})
    .setClassToggle("#item-4", "in") // add class toggle
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#item-5"
})
    .setClassToggle("#item-5", "in") // add class toggle
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#item-6"
})
    .setClassToggle("#item-6", "in") // add class toggle
    .addTo(controller);