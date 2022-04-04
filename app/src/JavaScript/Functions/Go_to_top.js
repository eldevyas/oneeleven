function CheckAttitude() {
    if (window.pageYOffset > window.innerHeight) {
        $('#BtnTop').css('transform', 'translateX(0%)')
        if (window.pageYOffset > (document.getElementsByClassName('Footer')[0].offsetTop - window.innerHeight)) {
            $('#BtnTop').css('background-color', '#fff')
            $('#Arrow').css('color', '#FFC600')
        }
        else {
            $('#BtnTop').css('background-color', '#FFC600')
            $('#Arrow').css('color', '#fff')
        }
    } else {
        $('#BtnTop').css('transform', 'translateX(200%)')
    }
}

$('document').ready(function() {
    window.addEventListener('scroll', function() {
        CheckAttitude();
    });
})