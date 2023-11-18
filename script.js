document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('welcome-text');
    const text = "Bienvenid@ web en construcción X(";
    text.split('').forEach((char, index) => {
        setTimeout(() => {
            textElement.innerHTML += char;
        }, 100 * index);
    });
});
