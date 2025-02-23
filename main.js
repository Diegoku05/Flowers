onload = () => {
    // Eliminar la clase "container" del body
    document.body.classList.remove("container");

    // Configurar el audio
    const audio = document.getElementById("audio");

    // Reproducir el audio con sonido después de la interacción del usuario
    document.addEventListener("click", () => {
        if (audio.paused) { // Verificar si el audio está pausado
            audio.muted = false; // Habilitar el sonido
            audio.play(); // Reproducir el audio
        }
    });

    // Opcional: Reproducir automáticamente el audio (silenciado)
    audio.play(); // Esto funciona porque el audio está configurado como "muted"

    // Guardar el estado del audio en localStorage antes de redirigir
    const audioLink = document.getElementById("audio-link");
    if (audioLink) {
        audioLink.addEventListener("click", (event) => {
            event.preventDefault(); // Prevenir la navegación inmediata
            localStorage.setItem("audioPlaying", "true");
            localStorage.setItem("audioTime", audio.currentTime);
            window.location.href = audioLink.href; // Redirigir a FLORES.html
        });
    }
};
