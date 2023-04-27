document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript va aquí
    // Seleccionamos los elementos del DOM que necesitamos
    const botonSumar = document.getElementById("sumar");
    const botonRestar = document.getElementById("restar");
    const botonReset = document.getElementById("reset");
    const contador = document.querySelector(".numero");

    // Definimos la función para sumar al contador
    function sumar() {
        let valorActual = parseInt(contador.textContent);
        contador.textContent = valorActual + 1;
        botonRestar.style.opacity = "1"; // Hacer visible el botón de restar cuando se aumenta el valor del contador
    }

    // Definimos la función para restar al contador
    function restar() {
        let valorActual = parseInt(contador.textContent);
        if (valorActual > 0) { // Añadir condición para que el contador nunca sea negativo
            contador.textContent = valorActual - 1;
            if (valorActual === 1) { // Si el contador llega a 1, hacer el botón de restar menos transparente
                botonRestar.style.opacity = "0.5";
            }
        }
    }

    // Definimos la función para resetear el contador
    function resetear() {
        contador.textContent = "0";
        botonRestar.style.opacity = "0.5"; // Hacer menos transparente el botón de restar al resetear el contador
    }

    // Añadimos los event listeners para cada botón
    botonSumar.addEventListener("click", sumar);
    botonRestar.addEventListener("click", restar);
    botonReset.addEventListener("click", resetear);

    // Establecer la función para actualizar el contador
    function actualizarContador() {
        // Obtener la hora actual
        const ahora = new Date();
        const hora = ahora.getHours();
        const minutos = ahora.getMinutes();

        // Si la hora es igual a las 00:00, establecer el contador a 0
        if (hora === 0 && minutos === 0) {
            contador.textContent = "0";
            botonRestar.style.opacity = "0.5"; // Hacer menos transparente el botón de restar al establecer el contador a 0
        }
    }

    // Actualizar el contador cada minuto
    setInterval(actualizarContador, 60 * 1000);

});
