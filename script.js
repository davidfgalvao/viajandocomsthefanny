const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

function setNavOpen(open) {
  if (!navToggle || !siteNav) {
    return;
  }
  siteNav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  navToggle.setAttribute(
    "aria-label",
    open ? "Fechar menu de navegação" : "Abrir menu de navegação"
  );
  document.body.classList.toggle("nav-open", open);
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const willOpen = !siteNav.classList.contains("is-open");
    setNavOpen(willOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setNavOpen(false);
    }
  });
}

const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length > 0 && "IntersectionObserver" in window) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
} else if (revealEls.length > 0) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
