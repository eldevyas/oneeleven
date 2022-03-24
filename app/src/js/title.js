function title() {

    var origTitle, animatedTitle, timer;

    function animateTitle(newTitle) {
        var currentState = false;
        origTitle = "OneEleven - Business Name Generator"; // save original title
        animatedTitle = "OneEleven - Business Name Generator";
        timer = setInterval(startAnimation, 100);

        function startAnimation() {
            // animate between the original and the new title
            document.title = currentState ? origTitle : animatedTitle;
            currentState = !currentState;
        }
    };

    function restoreTitle() {
        clearInterval(timer);
        document.title = origTitle; // restore original title
    };

    // Change page title on blur
    $(window).blur(function() {
        animateTitle();
    });

    // Change page title back on focus
    $(window).focus(function() {
        animateTitle();
    });

};

title();