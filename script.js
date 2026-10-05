/* =========================================================
HOMENAJE AL PROFESOR JEFFERSON MORENO GALLARDO
SCRIPT.JS
========================================================= */

/* =========================================================

1. BARRA DE PROGRESO
   ========================================================= */

const scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {
if (!scrollProgress) return;

```
const scrollTop = window.scrollY;
const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

const progress =
    documentHeight > 0
        ? (scrollTop / documentHeight) * 100
        : 0;

scrollProgress.style.width = `${progress}%`;
```

}

window.addEventListener("scroll", updateScrollProgress);

updateScrollProgress();

/* =========================================================
2. ANIMACIONES AL APARECER EN PANTALLA
========================================================= */

const sectionsToAnimate = document.querySelectorAll(
".section, .quote-band, .reflection-card, .letter-paper, .finale-content"
);

sectionsToAnimate.forEach((element) => {
element.classList.add("fade-up");
});

const observer = new IntersectionObserver(
(entries, observerInstance) => {
entries.forEach((entry) => {

```
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            observerInstance.unobserve(entry.target);
        }

    });
},
{
    threshold: 0.12
}
```

);

sectionsToAnimate.forEach((element) => {
observer.observe(element);
});

/* =========================================================
3. APARICIÓN DE ELEMENTOS DEL HERO
========================================================= */

window.addEventListener("load", () => {

```
const heroContent = document.querySelector(".hero-content");
const heroPhoto = document.querySelector(".hero-photo-wrap");

if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(25px)";

    setTimeout(() => {
        heroContent.style.transition =
            "opacity 1s ease, transform 1s ease";

        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 250);
}


if (heroPhoto) {
    heroPhoto.style.opacity = "0";
    heroPhoto.style.transform =
        "translateY(25px) scale(0.96)";

    setTimeout(() => {
        heroPhoto.style.transition =
            "opacity 1.2s ease, transform 1.2s ease";

        heroPhoto.style.opacity = "1";
        heroPhoto.style.transform =
            "translateY(0) scale(1)";
    }, 500);
}
```

});

/* =========================================================
4. BOTÓN "CELEBRAR ESTE MOMENTO"
========================================================= */

const celebrateButton =
document.getElementById("celebrateBtn");

const confettiContainer =
document.getElementById("confettiContainer");

if (celebrateButton && confettiContainer) {

```
celebrateButton.addEventListener("click", () => {

    createConfetti();

    celebrateButton.textContent =
        "¡Feliz cumpleaños, profesor!";

    setTimeout(() => {

        celebrateButton.textContent =
            "Celebrar este momento";

    }, 4000);

});
```

}

/* =========================================================
5. GENERADOR DE CONFETI
========================================================= */

function createConfetti() {

```
if (!confettiContainer) return;


const pieces = 140;

const confettiColors = [
    "#9f1d2d",
    "#ffffff",
    "#c9a24d",
    "#e4c878",
    "#701421"
];


for (let i = 0; i < pieces; i++) {

    const piece = document.createElement("div");

    piece.classList.add("confetti");


    /* Posición horizontal */

    piece.style.left =
        `${Math.random() * 100}%`;


    /* Color */

    piece.style.background =
        confettiColors[
            Math.floor(
                Math.random() *
                confettiColors.length
            )
        ];


    /* Tamaño */

    const width =
        Math.random() * 7 + 5;

    const height =
        Math.random() * 12 + 7;

    piece.style.width =
        `${width}px`;

    piece.style.height =
        `${height}px`;


    /* Rotación inicial */

    piece.style.transform =
        `rotate(${Math.random() * 360}deg)`;


    /* Duración */

    const duration =
        Math.random() * 3 + 3;

    piece.style.animationDuration =
        `${duration}s`;


    /* Retraso */

    const delay =
        Math.random() * 0.8;

    piece.style.animationDelay =
        `${delay}s`;


    /* Diferentes formas */

    const shape =
        Math.random();

    if (shape < 0.25) {

        piece.style.borderRadius = "50%";

    } else if (shape < 0.5) {

        piece.style.borderRadius = "2px";

    } else {

        piece.style.borderRadius = "0";

    }


    confettiContainer.appendChild(piece);


    /* Eliminar después de terminar */

    setTimeout(
        () => {
            piece.remove();
        },
        (duration + delay) * 1000 + 500
    );

}
```

}

/* =========================================================
6. PARALLAX SUAVE DE LA FOTO PRINCIPAL
========================================================= */

const heroPhoto =
document.querySelector(".hero-photo-wrap");

window.addEventListener("scroll", () => {

```
if (!heroPhoto) return;

/* No aplicar demasiado movimiento */

if (window.innerWidth <= 700) return;


const scrollPosition =
    window.scrollY;

if (scrollPosition < window.innerHeight) {

    const movement =
        scrollPosition * 0.08;

    heroPhoto.style.transform =
        `translateY(${movement}px)`;

}
```

});

/* =========================================================
7. EFECTO SUAVE EN LA NAVEGACIÓN
========================================================= */

const navigationLinks =
document.querySelectorAll(
'.topbar nav a[href^="#"]'
);

navigationLinks.forEach((link) => {

```
link.addEventListener("click", (event) => {

    const targetId =
        link.getAttribute("href");

    const target =
        document.querySelector(targetId);


    if (!target) return;


    event.preventDefault();


    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});
```

});

/* =========================================================
8. EFECTO DE HOVER EN PALABRAS DEL HERO
========================================================= */

const heroWords =
document.querySelectorAll(".hero-bottom span");

heroWords.forEach((word) => {

```
word.addEventListener("mouseenter", () => {

    word.style.color =
        "#e4c878";

    word.style.transform =
        "translateY(-3px)";

    word.style.transition =
        "all 0.3s ease";

});


word.addEventListener("mouseleave", () => {

    word.style.color =
        "";

    word.style.transform =
        "translateY(0)";

});
```

});

/* =========================================================
9. EVITAR QUE EL CONFETI SE ACUMULE
========================================================= */

window.addEventListener("beforeunload", () => {

```
if (confettiContainer) {
    confettiContainer.innerHTML = "";
}
```

});

/* =========================================================
10. MENSAJE DE CONSOLA
========================================================= */

console.log(
"%c🇵🇪 Homenaje al profesor Jefferson Moreno Gallardo 🇵🇪",
"color: #9f1d2d; font-size: 18px; font-weight: bold;"
);

console.log(
"%c¡Que viva el Perú!",
"color: #c9a24d; font-size: 16px; font-weight: bold;"
);

/* =========================================================
FIN DEL SCRIPT.JS
========================================================= */
