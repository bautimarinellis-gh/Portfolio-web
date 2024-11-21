// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Esperar que la animación termine y luego aplicar la clase 'finished'
document.getElementById("typewriter").addEventListener("animationend", function () {
    this.classList.add("finished");
});

// Función de desplazamiento suave al hacer clic en la flecha
document.querySelector('.scroll-down').addEventListener('click', function (e) {
    e.preventDefault();  // Evita el comportamiento predeterminado

    // Desplazarse a la sección "About Me" de forma suave
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});