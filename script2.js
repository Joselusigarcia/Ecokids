document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.querySelector(".game-container");
    const foundCountDisplay = document.getElementById("foundCount");
    const totalTreasuresDisplay = document.getElementById("totalTreasures");
    const winMessage = document.getElementById("winMessage");

    const totalTreasures = 10; // Número de cofres de tesoro escondidos
    let foundCount = 0;

    // Lista de imágenes de ambientes naturales para el fondo
    const backgrounds = [
        "url('https://img.freepik.com/foto-gratis/tiro-vertical-foret-soignes-belgica-bruselas-sol-brillando-traves-ramas_181624-5081.jpg')",
        "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBjL1yvFKXfe3gf8BNau0jvOpS9-gJzktvfQMBmhkTlUvXpEZwLXoAa8RLvTgtEyPa0cTrLzEP0AgHKBzN4ISWtgDTqDtUglFOYA5K5Z5zQQaHjj3q4O4VpjitW0OsxnUUzx1f3-fyV4k/w945-h600-p-k-no-nu/Playa+y+Sol_800.jpg')",
        "url('https://static.nationalgeographic.es/files/styles/image_3200/public/2462.600x450.jpg?w=1600')",
        "url('https://medioambiente.nexos.com.mx/wp-content/uploads/2021/01/foto-1.jpg')",
        "url('https://www.residuosprofesional.com/wp-content/uploads/2022/07/lago-pixabay.jpg')"
    ];

    // Asigna una imagen de fondo aleatoria
    gameContainer.style.backgroundImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    // Función para generar posiciones aleatorias dentro del contenedor
    function generateRandomPosition() {
        const x = Math.floor(Math.random() * (gameContainer.offsetWidth - 20));
        const y = Math.floor(Math.random() * (gameContainer.offsetHeight - 20));
        return { x, y };
    }

    // Colocar los cofres en posiciones aleatorias
    for (let i = 0; i < totalTreasures; i++) {
        const position = generateRandomPosition();
        const treasure = document.createElement("div");
        treasure.classList.add("treasure");
        treasure.style.left = `${position.x}px`;
        treasure.style.top = `${position.y}px`;
        treasure.innerHTML = "🏆";

        // Evento de clic para encontrar el tesoro
        treasure.addEventListener("click", () => {
            treasure.style.visibility = "hidden"; // Ocultar el tesoro cuando se encuentra
            foundCount++;
            foundCountDisplay.textContent = foundCount;
            if (foundCount === totalTreasures) {
                showWinMessage();
            }
        });

        gameContainer.appendChild(treasure);
    }

    // Actualizar el contador de tesoros totales
    totalTreasuresDisplay.textContent = totalTreasures;

    // Muestra el mensaje de victoria en la pantalla principal
    function showWinMessage() {
        winMessage.classList.remove("hidden");
    }

    // Reinicia el juego
    window.restartGame = function() {
        location.reload(); // Recarga la página para reiniciar
    };

    // Regresa a la página principal
    window.goToHomePage = function() {
        window.location.href = "http://127.0.0.1:5501/Juegos.html"; // Cambia esto a la URL de tu página principal
    };
});
