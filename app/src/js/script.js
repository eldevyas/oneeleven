$('document').ready(function() {
    let Visible = false;

    function Toggle() {
        console.log('Called!')
        if (Visible == true) {
            $('.Menu a').css('animation', 'Unvisible 0.5s ease forwards');
            $('#Switch').css('transform', 'rotate(0deg)');
            Visible = false;
        } else if (Visible == false) {
            $('.Menu a').css('animation', 'Visible 0.5s ease forwards');
            $('#Switch').css('transform', 'rotate(-180deg)');
            Visible = true;
        }
    }

    document.getElementById('Switch').addEventListener('click', Toggle);

});