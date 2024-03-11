

// index page 

/* Horizontal smooth scroll to target link using scrollmagic */
/*This works in full page view, but is buggy in the editor view*/

/* This solution requires each panel to be the same height */

$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#slideContainer", 0.5, {
            // z: -150
        }) // move back in 3D space
        .to("#slideContainer", 1, {
            x: "-20%"
        }) // move in to first panel
        .to("#slideContainer", 0.5, {
            z: 0
        }) // move back to origin in 3D space

        .to("#slideContainer", 0.5, {
            // z: -150
        }) // move back in 3D space
        .to("#slideContainer", 1, {
            x: "-40%"
        }) // move in to first panel
        .to("#slideContainer", 0.5, {
            z: 0
        }) // move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0.5, {
            // z: -150,
            delay: 1
        })
        .to("#slideContainer", 1, {
            x: "-60%"
        })
        .to("#slideContainer", 0.5, {
            z: 0
        })
        // animate to forth panel
        .to("#slideContainer", 0.5, {
            // z: -150,
            delay: 1
        })
        .to("#slideContainer", 1, {
            x: "-80%"
        })
        .to("#slideContainer", 0.5, {
            z: 0
        });

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "600%"
    })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
});




//find scroll position of each decade so we can smooth scroll to it
var panels = $("#slideContainer").find(".panel");
var panelWidth = panels.width();
var totalHeight = panelWidth * panels.length;

for (var i = 0; i < panels.length; i++) {
    var index = i;
    var panel = panels[i];
    var numToSubtract = panels.length - index;
    var remainingScroll = numToSubtract * panelWidth;
    var panelScrollPos = totalHeight - remainingScroll;
    $(panel).attr("data-scroll", panelScrollPos);
}

/******* Smooth scroll ************/
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                var targetScrollPos = target.attr("data-scroll");
                // var curScroll = $(document).scrollTop();
                $('html, body').animate({
                    scrollTop: targetScrollPos
                }, 1000, function () {
                    // Callback after animation

                    //print current scroll position (for testing)
                    var curScroll = $(document).scrollTop();
                    var newDiv = "<div style='background-color:white; width: 50vw; height:50vh; position:absolute; top: 25vw; left:25vw;'>" + curScroll + "</div>"
                    $(".links-wrapper").append(newDiv);
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


var controller = new ScrollMagic.Controller();


$('.project').each(function () {


    var tween = TweenMax.from($(this), 0.3, {
        autoAlpha: 0,
        scale: 0.5,
        y: '+=30',
        rotation: 5,
        transformOrigin: "left 50%",
        ease: Linear.easeNone
    });

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: this
    })
        .setTween(tween) // trigger a TweenMax.to tween
        .addTo(controller);

});