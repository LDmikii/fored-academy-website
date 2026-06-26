# ForEd Academy — Website

A bilingual (English / Azerbaijani) marketing site for ForEd Academy, featuring an
interactive 3D globe and a scholarships guide. Built as **plain HTML/CSS/vanilla JS**
— no build step, no installation required.

## Run / preview it

Just **double-click `index.html`** to open it in your browser.

For the full experience (the globe loads fine either way), you can serve it locally:

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1 -Port 4321
# then open http://localhost:4321
```

## Project structure

```
index.html            Home page (hero + globe + features)
scholarships.html     Scholarships list + contact section
assets/
  css/styles.css      All styles + theme variables (top of file)
  js/config.js        >>> YOUR CONTACT DETAILS — edit these <<<
  js/i18n.js           EN/AZ text for the UI
  js/scholarships.js   Scholarship data (add/edit cards here)
  js/layout.js         Shared header + footer
  js/globe.js          3D globe setup
  js/main.js           Bootstrap
serve.ps1             Tiny local preview server (optional)
```

## How to update common things

- **Contact info** (email, phone, Instagram, etc.): edit `assets/js/config.js`.
- **Text / translations**: edit `assets/js/i18n.js` (each key has an `en` and `az` value).
- **Scholarships**: edit the `SCHOLARSHIPS` array in `assets/js/scholarships.js`.
- **Colours / fonts**: edit the `:root` variables at the top of `assets/css/styles.css`.

## Notes

- The globe and country flags load from CDNs, so an internet connection is needed
  for them to appear. All other content works offline.
- To later wrap this in Vite, install Node.js — no code rewrite is needed.
