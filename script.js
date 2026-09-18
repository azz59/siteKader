// Menu mobile (burger)
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    burger.classList.toggle("is-active", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  // Ferme le menu après un clic sur un lien (mobile)
  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// Ombre du header au scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 4px 18px rgba(22, 36, 31, 0.12)";
  } else {
    header.style.boxShadow = "0 2px 12px rgba(22, 36, 31, 0.06)";
  }
});

// Formulaire d'essai gratuit (démo front-end, sans envoi serveur)
const trialForm = document.getElementById("trialForm");
const formSuccess = document.getElementById("formSuccess");

if (trialForm) {
  trialForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!trialForm.checkValidity()) {
      trialForm.reportValidity();
      return;
    }

    formSuccess.classList.add("is-visible");
    trialForm.reset();
  });
}

// Année courante dans le footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Témoignages du hero
const reviews = document.querySelectorAll(".hero__review");
let activeReview = 0;

if (reviews.length > 1) {
  window.setInterval(() => {
    reviews[activeReview].classList.remove("is-active");
    activeReview = (activeReview + 1) % reviews.length;
    reviews[activeReview].classList.add("is-active");
  }, 4200);
}