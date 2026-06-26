/* ===========================================================
   ForEd Academy — Shared header & footer
   Injected into <header id="site-header"> and <footer id="site-footer">
   =========================================================== */

/* Inline SVG icons (small helpers) */
const ICONS = {
  mail: '<svg class="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  phone: '<svg class="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6A2 2 0 0 1 22 16.9z"/></svg>',
  pin: '<svg class="ci" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M.1 24l1.7-6.2A11.9 11.9 0 1 1 12 24a11.9 11.9 0 0 1-5.7-1.5L.1 24zM6.6 20l.4.2a9.9 9.9 0 1 0-3.4-3.4l.2.4-1 3.7 3.8-.9zM18 14.6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.4.1-.5l.4-.5.2-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4c.6.3 1.1.4 1.5.5a3.5 3.5 0 0 0 1.6.1c.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.4-.2z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.3-.1-.5-.6-.2L6.2 13.5l-4.8-1.5c-1-.3-1-1 .2-1.5l18.7-7.2c.9-.3 1.6.2 1.6 1z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.5 1.5M18.3 18.3l1.5 1.5M2.5 12h2M19.5 12h2M4.2 19.8l1.5-1.5M18.3 5.7l1.5-1.5"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
};

/* Brand lockup = symbol + theme-aware wordmark.
   The symbol tries your PNG (assets/img/logo-mark.png) first and falls back to
   the bundled SVG. Drop your transparent symbol in as assets/img/logo-mark.png
   and it appears in the header + footer automatically. */
const BRAND = `
  <a href="index.html" class="brand">
    <img class="logo-mark" src="assets/img/logo-mark.png" alt="ForEd Academy"
         onerror="this.onerror=null;this.src='assets/img/logo-mark.svg';">
    <span class="wordmark">For<b>Ed</b> <span class="sub">Academy</span></span>
  </a>`;

function buildHeader(active) {
  const link = (href, key, isActive) =>
    `<li><a href="${href}" class="${isActive ? "active" : ""}" data-i18n="${key}"></a></li>`;
  return `
  <div class="container nav">
    ${BRAND}
    <ul class="nav-links" id="nav-links">
      ${link("index.html", "nav.home", active === "home")}
      ${link("scholarships.html", "nav.scholarships", active === "scholarships")}
      ${link("index.html#features", "nav.about", false)}
      ${link("scholarships.html#contact", "nav.contact", false)}
    </ul>
    <div class="nav-right">
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
        <span class="icon-moon">${ICONS.moon}</span><span class="icon-sun">${ICONS.sun}</span>
      </button>
      <div class="lang-switch" id="lang-switch">
        <button data-lang="en">EN</button>
        <button data-lang="az">AZ</button>
      </div>
      <a href="scholarships.html#contact" class="btn btn-primary" data-i18n="nav.cta"></a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Menu">&#9776;</button>
    </div>
  </div>`;
}

function buildFooter() {
  const social = (url, svg, label) =>
    url ? `<a href="${url}" target="_blank" rel="noopener" aria-label="${label}">${svg}</a>` : "";

  const contactList = [
    `<li><a class="contact-item" href="mailto:${SITE.email}">${ICONS.mail}<span>${SITE.email}</span></a></li>`,
    `<li><a class="contact-item" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a></li>`,
    SITE.address ? `<li>${SITE.mapUrl
        ? `<a class="contact-item" href="${SITE.mapUrl}" target="_blank" rel="noopener">${ICONS.pin}<span>${SITE.address}</span></a>`
        : `<span class="contact-item">${ICONS.pin}<span>${SITE.address}</span></span>`}</li>` : "",
    SITE.instagram ? `<li><a class="contact-item" href="${SITE.instagram}" target="_blank" rel="noopener">${ICONS.instagram}<span>${SITE.instagramHandle || SITE.instagram}</span></a></li>` : ""
  ].join("");

  return `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        ${BRAND}
        <p data-i18n="footer.about"></p>
        <div class="socials">
          ${social(SITE.instagram, ICONS.instagram, "Instagram")}
          ${social(SITE.whatsapp, ICONS.whatsapp, "WhatsApp")}
          ${social(SITE.facebook, ICONS.facebook, "Facebook")}
          ${social(SITE.telegram, ICONS.telegram, "Telegram")}
        </div>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.links"></h4>
        <ul>
          <li><a href="index.html" data-i18n="nav.home"></a></li>
          <li><a href="scholarships.html" data-i18n="nav.scholarships"></a></li>
          <li><a href="index.html#features" data-i18n="nav.about"></a></li>
          <li><a href="scholarships.html#contact" data-i18n="nav.contact"></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.contact"></h4>
        <ul>${contactList}</ul>
      </div>
    </div>
    <div class="footer-bottom">&copy; <span id="year"></span> <span data-i18n="footer.rights"></span></div>
  </div>`;
}

function renderLayout() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) {
    header.className = "site-header";
    header.innerHTML = buildHeader(header.dataset.active || "");
  }
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = buildFooter();
  }
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
}
