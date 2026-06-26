/* ===========================================================
   ForEd Academy — Bootstrap
   =========================================================== */

// Scroll-reveal observer (exposed so dynamically added cards can register)
let revealObserver;
function setupReveals() {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
}
window.observeReveals = function () {
  document.querySelectorAll(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
};

/* ---- Theme (light / dark) ---- */
const THEME_KEY = "fored-theme";
function getTheme() { return localStorage.getItem(THEME_KEY) || "dark"; }
function setTheme(theme) {
  if (theme !== "light" && theme !== "dark") theme = "dark";
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.setAttribute("data-theme", theme);
}
function wireTheme() {
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.addEventListener("click", () => setTheme(getTheme() === "dark" ? "light" : "dark"));
}

function wireNav() {
  // language buttons
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  // mobile menu
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTheme(getTheme()); // apply saved theme
  renderLayout();      // header + footer
  wireNav();
  wireTheme();
  setLang(getLang());  // apply language (also fires langchange for page renderers)
  setupReveals();

  // Scholarships page first render
  if (typeof renderScholarships === "function") { renderFilters(); renderScholarships(); }

  window.observeReveals();

  if (typeof initGlobe === "function") initGlobe();
});
