document.addEventListener("DOMContentLoaded", function() {
    console.log("Aplicación 3D iniciada y lista.");

    // 1. Configuración del carrusel
    const carouselElement = document.getElementById('carouselAnaglifo');
    const carouselInstance = new bootstrap.Carousel(carouselElement, {
        interval: 3000, 
        pause: 'hover'  
    });

    // 2. Navegación con teclado (Flechas)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            carouselInstance.prev();
        } else if (event.key === 'ArrowRight') {
            carouselInstance.next();
        }
    });

    // 3. Lógica de Pantalla Completa
    const btnFullscreen = document.getElementById('btnFullscreen');
    const contenedorGaleria = document.getElementById('contenedorGaleria');

    btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            // Entrar en pantalla completa
            if (contenedorGaleria.requestFullscreen) {
                contenedorGaleria.requestFullscreen();
            } else if (contenedorGaleria.webkitRequestFullscreen) { /* Safari */
                contenedorGaleria.webkitRequestFullscreen();
            } else if (contenedorGaleria.msRequestFullscreen) { /* IE11 */
                contenedorGaleria.msRequestFullscreen();
            }
            btnFullscreen.innerHTML = '✖'; // Cambia el ícono a "cerrar"
            btnFullscreen.setAttribute('title', 'Salir de Pantalla Completa');
        } else {
            // Salir de pantalla completa
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
            btnFullscreen.innerHTML = '⛶'; // Cambia el ícono a "expandir"
            btnFullscreen.setAttribute('title', 'Alternar Pantalla Completa');
        }
    });

    // Detectar si el usuario sale usando la tecla ESC
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            btnFullscreen.innerHTML = '⛶';
            btnFullscreen.setAttribute('title', 'Alternar Pantalla Completa');
        }
    });
});