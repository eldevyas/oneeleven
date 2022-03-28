function CheckAttitude() {
    if (window.pageYOffset > window.innerHeight) {
        $('#BtnTop').css('transform', 'translateX(0%)')
        if (window.pageYOffset >= document.getElementsByClassName('Footer')[0].offsetTop) {
            $('#BtnTop').css('background-color', '#fff')
        }
    } else {
        $('#BtnTop').css('transform', 'translateX(200%)')
    }
}

function GoToTop() {
    $("#BtnTop").click(function(event) {
        $('html, body').animate({
            scrollTop: 0
        }, 800, function() {
            window.scrollTo(0, 0)
        })
    });
};



$('document').ready(function() {
    window.addEventListener('scroll', function() {
        CheckAttitude();
    });
    GoToTop();
})