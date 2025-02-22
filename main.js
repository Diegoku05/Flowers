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
                // Insertar el contenido en el contenedor
                document.getElementById("contenidoDinamico").innerHTML = data;

                // Forzar la interpretación de los scripts en el contenido dinámico
                const scripts = document.getElementById("contenidoDinamico").getElementsByTagName("script");
                for (let i = 0; i < scripts.length; i++) {
                    eval(scripts[i].innerText);
                }
            })
            .catch(error => console.error("Error al cargar el contenido:", error));
    });
};
