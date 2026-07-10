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

/* ---- Theme (light / dark) ----
   No saved choice -> follow the device's preferred color scheme.
   A manual toggle saves the choice and wins from then on. */
const THEME_KEY = "fored-theme";
function systemTheme() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
function getTheme() { return localStorage.getItem(THEME_KEY) || systemTheme(); }
function applyTheme(theme) { document.documentElement.setAttribute("data-theme", theme); }
function setTheme(theme) {
  if (theme !== "light" && theme !== "dark") theme = "dark";
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}
function wireTheme() {
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.addEventListener("click", () => setTheme(getTheme() === "dark" ? "light" : "dark"));
  // Live-follow device theme changes while the user hasn't chosen manually
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
      if (!localStorage.getItem(THEME_KEY)) applyTheme(systemTheme());
    });
  }
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
  applyTheme(getTheme()); // saved theme, or device preference (don't persist until user toggles)
  renderLayout();      // header + footer
  wireNav();
  wireTheme();
  applyLang(getLang()); // saved language, or device language (don't persist until user switches)
  setupReveals();

  // Scholarships page first render
  if (typeof renderScholarships === "function") { renderFilters(); renderScholarships(); }

  window.observeReveals();

  if (typeof initGlobe === "function") initGlobe();
});
