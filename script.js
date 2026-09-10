// ===============================
// DAVE BENJI CAMARA
// INTERACTIONS DU SITE
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------
  // MODE CLAIR / SOMBRE
  // -------------------------------

  const themeButton = document.getElementById("themeButton");

  themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeButton.textContent = "🌙";
    } else {
      themeButton.textContent = "☀️";
    }

  });


  // -------------------------------
  // ANIMATION AU DÉFILEMENT
  // -------------------------------

  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }

      });

    },
    {
      threshold: 0.15
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });


  // -------------------------------
  // EFFET SUR LES BOUTONS
  // -------------------------------

  const buttons = document.querySelectorAll(
    ".primary-button, .secondary-button, .glass-button"
  );

  buttons.forEach((button) => {

    button.addEventListener("click", () => {

      button.style.transform = "scale(0.95)";

      setTimeout(() => {
        button.style.transform = "";
      }, 150);

    });

  });


  // -------------------------------
  // ANIMATION DE LA GALERIE
  // -------------------------------

  const galleryItems =
    document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {
      item.style.transform =
        "scale(1.05) translateY(-5px)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "";
    });

  });


  // -------------------------------
  // EFFET PARALLAXE LÉGER
  // -------------------------------

  document.addEventListener("mousemove", (event) => {

    const x =
      (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
      (event.clientY / window.innerHeight - 0.5) * 10;

    document.querySelectorAll(".background-glow")
      .forEach((glow, index) => {

        const multiplier = index === 0 ? 1 : -1;

        glow.style.transform =
          `translate(${x * multiplier}px, ${y * multiplier}px)`;

      });

  });


  // -------------------------------
  // MESSAGE DANS LA CONSOLE
  // -------------------------------

  console.log(
    "✨ Bienvenue sur le site de Dave Benji Camara."
  );

});
