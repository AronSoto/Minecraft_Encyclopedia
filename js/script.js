document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById('hero-section');
    const images = document.querySelectorAll('.carousel .image');
    let current = 0;

    function showNextImage() {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }

    images[current].classList.add('active');

    setTimeout(function() {
        heroSection.style.backgroundImage = 'none';
        setInterval(showNextImage, 9000);
    }, 1000);
});

