// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Fermer le menu après avoir cliqué sur un lien

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// MODE SOMBRE / CLAIR

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }

});


// Garder le thème choisi

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "🌙";
}


// ANIMATION AU DÉFILEMENT

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});


// BOUTON RETOUR EN HAUT

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ANNÉE AUTOMATIQUE

document.getElementById("year").textContent = new Date().getFullYear();


// FORMULAIRE DE CONTACT

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent(
        "Message depuis le site de Dave Benji"
    );

    const body = encodeURIComponent(
        "Nom : " + name +
        "\nEmail : " + email +
        "\n\nMessage :\n" + message
    );

    window.location.href =
        "mailto:daoudalebenjamin@gmail.com?subject=" +
        subject +
        "&body=" +
        body;

});
