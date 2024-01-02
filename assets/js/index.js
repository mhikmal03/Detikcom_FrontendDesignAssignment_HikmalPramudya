// navbar-js

document.addEventListener('DOMContentLoaded', function () {
    const buttonIcon = document.getElementById('navbar-button-icon');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navbarItems = document.querySelector('.navbar-items');

    buttonIcon.addEventListener('click', function () {
        navbarItems.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
});


// support-slider-js

document.addEventListener("DOMContentLoaded", function () {
    const slideTrack = document.getElementById("slideTrack");
    const slides = slideTrack.querySelectorAll(".slide");

    // Clone slides
    for (let i = 0; i < slides.length; i++) {
        const clone = slides[i].cloneNode(true);
        slideTrack.appendChild(clone);
    }
});


// sudirman-gallery-custom-js

document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselDemo'));

    myCarousel._element.addEventListener('slid.bs.carousel', function (event) {
        var currentIndex = event.to;
        console.log("Current active index:", currentIndex);
    });
    var defaultButton = document.querySelector('.option button[data-bs-slide-to="0"]');
        defaultButton.classList.add('active');
});


function logCarouselItem(index) {
    console.log("Clicked button with index:", index);

    // Reset the styles for all buttons
    var buttons = document.querySelectorAll('.option button');
    buttons.forEach(function (button) {
        button.classList.remove('active');
        button.querySelector('img').style.filter = 'grayscale(100%)';
    });

    var clickedButton = buttons[index];
    clickedButton.classList.add('active');
    clickedButton.querySelector('img').style.filter = 'grayscale(0%)';
}






