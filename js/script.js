document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById('hero-section');
    const images = document.querySelectorAll('.carousel .image');
    let current = 0;

    function showNextImage() {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }

    // Inicia el carrusel con la primera imagen visible
    images[current].classList.add('active');

    // Cambia de imagen cada 3 segundos después de mostrar la imagen por defecto durante 3 segundos
    setTimeout(function() {
        heroSection.style.backgroundImage = 'none';
        setInterval(showNextImage, 9000);
    }, 1000);
});

