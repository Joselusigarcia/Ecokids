document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video-item');

    videos.forEach(video => {
        video.addEventListener('play', function () {
            // Se amplía el video cuando empieza a reproducirse
            this.style.transform = 'scale(1.5)';
            this.style.zIndex = '10'; // Lleva el video al frente
        });

        video.addEventListener('pause', resetSize);
        video.addEventListener('ended', resetSize);

        function resetSize() {
            // Se vuelve al tamaño original cuando se pausa o finaliza
            video.style.transform = 'scale(1)';
            video.style.zIndex = '1'; // Devuelve el video al nivel original
        }
    });
});
