document.addEventListener("DOMContentLoaded", function() {
    const audioButton = document.getElementById("audioButton");
    const natureAudio = document.getElementById("natureAudio");
    
    let isPlaying = false;

    audioButton.addEventListener("click", function() {
        if (isPlaying) {
            natureAudio.pause();
            isPlaying = false;
            audioButton.textContent = "Activar música";
        } else {
            natureAudio.play();
            isPlaying = true;
            audioButton.textContent = "Desactivar música";
        }
    });
});
