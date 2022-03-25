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

window.addEventListener('scroll', CheckAttitude);


$('document').ready(function() {
    $("#BtnTop").on('click', function(event) {

        if (this.hash !== "") {
            $('html, body').animate({
                scrollTop: 0
            }, 800, function() {
                window.scrollTo(0, 0)
            })
        }
    });
})