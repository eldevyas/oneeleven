function CheckAttitude() {
    if (window.pageYOffset > window.innerHeight) {
        $('#BtnTop').css('transform', 'translateX(0%)')

        $("#BtnTop").on('click', function(event) {

            if (this.hash !== "") {
                $('html, body').animate({
                    scrollTop: 0
                }, 800, function() {
                    window.scrollTo(0, 0)
                })
            }
        });
    } else {
        $('#BtnTop').css('transform', 'translateX(200%)')
    }
}

window.addEventListener('scroll', CheckAttitude);