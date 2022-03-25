function CheckScroll() {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 1900) {
        $('.Algorithm').addClass('AlgorithmJ')
            //INPUT
        $('.Schema .Input div').addClass('DIV')

        $('.Schema .Input .C1').addClass('C1J')

        $('.Schema .Input .C2').addClass('C2J')

        $('.Schema .Input .C3').addClass('C3J')

        $('.Schema .Input .C4').addClass('C4J')

        $('.Schema .Input .Generate').addClass('GenerateJ')
    }
}

window.addEventListener('scroll', CheckScroll);



function Animate() {

}