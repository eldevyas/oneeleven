function Animate() {
    const scrollOffset = 100;

    const scrollElement = document.querySelector(".Algorithm");


    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            ((window.innerHeight || document.documentElement.clientHeight) - offset)
        );
    };


    const displayScrollElement = () => {
        scrollElement.style.display = 'block';
    }

    const hideScrollElement = () => {
        scrollElement.style.display = 'none';
    }

    const handleScrollAnimation = () => {
        if (elementInView(scrollElement, scrollOffset)) {
            displayScrollElement();
        } else {
            hideScrollElement();
        }
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    })
}

document.onload = () => { Animate() }