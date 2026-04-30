document.addEventListener("DOMContentLoaded", function() {
    console.log("Aplicación 3D iniciada y lista.");

    // Obtenemos la instancia del carrusel de Bootstrap
    const carouselElement = document.getElementById('carouselAnaglifo');
    const carouselInstance = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Cambia la imagen cada 3 segundos automáticamente
        pause: 'hover'  // Pausa el carrusel si el usuario pone el mouse encima
    });

    // Interactividad: Atajos de teclado (flechas izquierda y derecha)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            // Mueve a la imagen anterior
            carouselInstance.prev();
        } else if (event.key === 'ArrowRight') {
            // Mueve a la imagen siguiente
            carouselInstance.next();
        }
    });
});