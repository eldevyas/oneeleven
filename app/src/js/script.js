function CheckScroll() {
    if (window.pageYOffset >= 1500) {
        $('.Algorithm').addClass('AlgorithmJ')

        //INPUT

        $('.Schema .Input div').addClass('DIV')

        $('.Schema .Input .C1').addClass('C1J')

        $('.Schema .Input .C2').addClass('C2J')

        $('.Schema .Input .C3').addClass('C3J')

        $('.Schema .Input .C4').addClass('C4J')

        $('.Schema .Input .Generate').addClass('GenerateJ')

        // Process

        $('.Schema .Process .Algo .C1').addClass('C1J')

        $('.Schema .Process .Algo .C2').addClass('C2J')

        $('.Schema .Process .Algo .C3').addClass('C3J')

        $('.Schema .Process .Algo .C4').addClass('C4J')



        // Output

        $('.Schema .Output .C1').addClass('C1J')

        $('.Schema .Output .C2').addClass('C2J')

        $('.Schema .Output .C3').addClass('C3J')

        $('.Schema .Output .C4').addClass('C4J')

        $('.Schema .Output .Result').addClass('ResultJ')
    } else if (window.pageYOffset == 0) {

        $('.Algorithm').removeClass('AlgorithmJ')

        // INPUT

        $('.Schema .Input div').removeClass('DIV')

        $('.Schema .Input .C1').removeClass('C1J')

        $('.Schema .Input .C2').removeClass('C2J')

        $('.Schema .Input .C3').removeClass('C3J')

        $('.Schema .Input .C4').removeClass('C4J')

        $('.Schema .Input .Generate').removeClass('GenerateJ')

        $('.Schema .Output div').removeClass('DIV')

        // Process

        $('.Schema .Process .Algo .C1').removeClass('C1J')

        $('.Schema .Process .Algo .C2').removeClass('C2J')

        $('.Schema .Process .Algo .C3').removeClass('C3J')

        $('.Schema .Process .Algo .C4').removeClass('C4J')

        // Output

        $('.Schema .Output .C1').removeClass('C1J')

        $('.Schema .Output .C2').removeClass('C2J')

        $('.Schema .Output .C3').removeClass('C3J')

        $('.Schema .Output .C4').removeClass('C4J')

        $('.Schema .Output .Result').removeClass('ResultJ')
    }
}

window.addEventListener('scroll', CheckScroll);



function Animate() {

}