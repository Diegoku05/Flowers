onload = () =>{
        document.body.classList.remove("container");
};
onload = () => {
    // Eliminar la clase "container" del body
    document.body.classList.remove("container");

    // Configurar el audio
    const audio = document.getElementById("audio");

    // Reproducir el audio con sonido después de la interacción del usuario
    document.addEventListener("click", () => {
        audio.muted = false; // Habilitar el sonido
        audio.play(); // Reproducir el audio
    });
};
