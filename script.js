document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('welcome-text');
    const text = "¡Bienvenido, página en Construcción )X!";

    text.split('').forEach((char, index) => {
        setTimeout(() => {
            textElement.innerHTML += char;
        }, 150 * index);
    });
});
