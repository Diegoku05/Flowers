// Esperar a que la página se cargue completamente
window.onload = () => {
    // Eliminar la clase "container" del body
    document.body.classList.remove("container");

    // Configurar el audio
    const audio = document.getElementById("audio");

    // Reproducir el audio con sonido después de la interacción del usuario
    document.addEventListener("click", () => {
        if (audio.paused) { // Si el audio está pausado
            audio.muted = false; // Habilitar el sonido
            audio.play(); // Reproducir el audio
        }
    });

    // Cargar contenido dinámico al hacer clic en el botón
    document.getElementById("cargarContenido").addEventListener("click", () => {
        fetch("FLORES.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenidoDinamico").innerHTML = data;
            })
            .catch(error => console.error("Error al cargar el contenido:", error));
    });
};
