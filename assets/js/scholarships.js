/* ===========================================================
   ForEd Academy — Scholarship data + rendering
   Each entry has localized level/coverage/description (en/az).
   `cc` = ISO country code (flag image from flagcdn.com).
   =========================================================== */
const SCHOLARSHIPS = [
  {
    cc: "gb", region: "europe",
    country: { en: "United Kingdom", az: "Birləşmiş Krallıq" },
    program: "Chevening Scholarship",
    level: { en: "Master's", az: "Magistratura" },
    fund: { en: "Fully funded", az: "Tam maliyyə" },
    desc: {
      en: "The UK government's flagship award covering tuition, living costs, flights and visa for one-year master's degrees.",
      az: "Böyük Britaniya hökumətinin bir illik magistratura üçün təhsil haqqı, yaşayış, uçuş və vizanı əhatə edən aparıcı təqaüdü."
    },
    link: "https://www.chevening.org/"
  },
  {
    cc: "us", region: "america",
    country: { en: "United States", az: "ABŞ" },
    program: "Fulbright Program",
    level: { en: "Master's / PhD", az: "Magistratura / Doktorantura" },
    fund: { en: "Fully funded", az: "Tam maliyyə" },
    desc: {
      en: "Prestigious U.S. government exchange covering tuition, stipend, health insurance and travel for graduate study.",
      az: "ABŞ hökumətinin nüfuzlu mübadilə proqramı — təhsil haqqı, təqaüd, sığorta və səyahəti əhatə edir."
    },
    link: "https://foreign.fulbrightonline.org/"
  },
  {
    cc: "de", region: "europe",
    country: { en: "Germany", az: "Almaniya" },
    program: "DAAD Scholarships",
    level: { en: "Master's / PhD", az: "Magistratura / Doktorantura" },
    fund: { en: "Fully funded", az: "Tam maliyyə" },
    desc: {
      en: "Germany's academic exchange service funds monthly stipends, travel and insurance across hundreds of programs.",
      az: "Almaniyanın akademik mübadilə xidməti yüzlərlə proqram üzrə aylıq təqaüd, səyahət və sığortanı maliyyələşdirir."
    },
    link: "https://www.daad.de/en/"
  },
  {
    cc: "eu", region: "europe",
    country: { en: "European Union", az: "Avropa İttifaqı" },
    program: "Erasmus Mundus",
    level: { en: "Master's", az: "Magistratura" },
    fund: { en: "Fully funded", az: "Tam maliyyə" },
    desc: {
      en: "Joint master's degrees studied in two or more European countries, with a generous monthly allowance.",
      az: "İki və ya daha çox Avropa ölkəsində oxunan birgə magistratura proqramları, comərd aylıq müavinətlə."
    },
    link: "https://www.eacea.ec.europa.eu/scholarships/emjmd-catalogue_en"
  },
  {
    cc: "tr", region: "asia",
    country: { en: "Türkiye", az: "Türkiyə" },
    program: "Türkiye Bursları",
    level: { en: "Bachelor's / Master's / PhD", az: "Bakalavr / Magistratura / Doktorantura" },
    fund: { en: "Fully funded", az: "Tam maliyyə" },
    desc: {
      en: "Turkey's government scholarship covering tuition, monthly stipend, accommodation, flights and Turkish course.",
      az: "Türkiyə hökumətinin təhsil haqqı, aylıq təqaüd, yaşayış, uçuş və türk dili kursunu əhatə edən təqaüdü."
    },
    link: "https://turkiyeburslari.gov.tr/"
  },
  {
    cc: "hu", region: "europe",
    country: { en: "Hungary", az: "Macarıstan" },
    program: "Stipendium Hungaricum",
    level: { en: "Bachelor's / Master's / PhD", az: "Bakalavr / Magistratura / Doktorantura" },
    fund: { en: "Fully funded", az: "Tam maliyyə" },
    desc: {
      en: "Bilateral program for Azerbaijani students covering tuition, stipend, accommodation and medical insurance.",
      az: "Azərbaycanlı tələbələr üçün təhsil haqqı, təqaüd, yaşayış və tibbi sığortanı əhatə edən ikitərəfli proqram."
    },
    link: "https://stipendiumhungaricum.hu/"
  },
  {
    cc: "ca", region: "america",
    country: { en: "Canada", az: "Kanada" },
    program: "Vanier CGS",
    level: { en: "PhD", az: "Doktorantura" },
    fund: { en: "Fully funded", az: "Tam maliyyə" },
    desc: {
      en: "Canada's premier doctoral award of $50,000/year for three years for world-class research students.",
      az: "Kanadanın dünya səviyyəli tədqiqatçılar üçün üç il ərzində ildə $50,000 ödəyən aparıcı doktorantura təqaüdü."
    },
    link: "https://vanier.gc.ca/"
  },
  {
    cc: "au", region: "oceania",
    country: { en: "Australia", az: "Avstraliya" },
    program: "Australia Awards",
    level: { en: "Master's / PhD", az: "Magistratura / Doktorantura" },
    fund: { en: "Fully funded", az: "Tam maliyyə" },
    desc: {
      en: "Long-term development scholarships covering full tuition, living expenses, airfare and health cover.",
      az: "Tam təhsil haqqı, yaşayış xərcləri, uçuş və sağlamlıq təminatını əhatə edən uzunmüddətli təqaüdlər."
    },
    link: "https://www.dfat.gov.au/people-to-people/australia-awards"
  },
  {
    cc: "se", region: "europe",
    country: { en: "Sweden", az: "İsveç" },
    program: "Swedish Institute (SISGP)",
    level: { en: "Master's", az: "Magistratura" },
    fund: { en: "Fully funded", az: "Tam maliyyə" },
    desc: {
      en: "Covers tuition, a monthly living grant, travel and insurance for master's studies in Sweden.",
      az: "İsveçdə magistratura üçün təhsil haqqı, aylıq yaşayış qrantı, səyahət və sığortanı əhatə edir."
    },
    link: "https://si.se/en/apply/scholarships/"
  },
  {
    cc: "cn", region: "asia",
    country: { en: "China", az: "Çin" },
    program: "Chinese Government Scholarship",
    level: { en: "Bachelor's / Master's / PhD", az: "Bakalavr / Magistratura / Doktorantura" },
    fund: { en: "Fully funded", az: "Tam maliyyə" },
    desc: {
      en: "CSC scholarship covering tuition, accommodation, monthly stipend and comprehensive medical insurance.",
      az: "Təhsil haqqı, yaşayış, aylıq təqaüd və geniş tibbi sığortanı əhatə edən CSC təqaüdü."
    },
    link: "https://www.campuschina.org/"
  },
  {
    cc: "it", region: "europe",
    country: { en: "Italy", az: "İtaliya" },
    program: "Italian Government (MAECI)",
    level: { en: "Master's / PhD", az: "Magistratura / Doktorantura" },
    fund: { en: "Partial / Funded", az: "Qismən / Maliyyəli" },
    desc: {
      en: "Grants offering monthly allowance and tuition waivers for study and research at Italian institutions.",
      az: "İtalyan müəssisələrində təhsil və tədqiqat üçün aylıq müavinət və təhsil haqqı güzəşti təklif edən qrantlar."
    },
    link: "https://studyinitaly.esteri.it/"
  },
  {
    cc: "kr", region: "asia",
    country: { en: "South Korea", az: "Cənubi Koreya" },
    program: "Global Korea Scholarship",
    level: { en: "Bachelor's / Master's / PhD", az: "Bakalavr / Magistratura / Doktorantura" },
    fund: { en: "Fully funded", az: "Tam maliyyə" },
    desc: {
      en: "GKS covers tuition, airfare, monthly allowance, a Korean language year and settlement support.",
      az: "GKS təhsil haqqı, uçuş, aylıq müavinət, bir illik koreya dili kursu və yerləşmə dəstəyini əhatə edir."
    },
    link: "https://www.studyinkorea.go.kr/"
  }
];

const REGIONS = [
  { id: "all", en: "All", az: "Hamısı" },
  { id: "europe", en: "Europe", az: "Avropa" },
  { id: "america", en: "Americas", az: "Amerika" },
  { id: "asia", en: "Asia", az: "Asiya" },
  { id: "oceania", en: "Oceania", az: "Okeaniya" }
];

let activeRegion = "all";

function renderFilters() {
  const wrap = document.getElementById("filters");
  if (!wrap) return;
  const lang = getLang();
  wrap.innerHTML = REGIONS.map(r =>
    `<button class="chip ${r.id === activeRegion ? "active" : ""}" data-region="${r.id}">${r[lang]}</button>`
  ).join("");
  wrap.querySelectorAll(".chip").forEach(c => {
    c.addEventListener("click", () => {
      activeRegion = c.dataset.region;
      renderFilters();
      renderScholarships();
    });
  });
}

function renderScholarships() {
  const grid = document.getElementById("scholarship-grid");
  if (!grid) return;
  const lang = getLang();
  const list = SCHOLARSHIPS.filter(s => activeRegion === "all" || s.region === activeRegion);

  grid.innerHTML = list.map(s => {
    // flagcdn supports the "eu" code directly for the European Union flag
    const flag = `https://flagcdn.com/${s.cc}.svg`;
    return `
    <article class="sch-card reveal">
      <div class="sch-top">
        <img class="sch-flag" src="${flag}" alt="${s.country[lang]} flag" loading="lazy">
        <div>
          <div class="country">${s.country[lang]}</div>
          <h3>${s.program}</h3>
        </div>
      </div>
      <div class="sch-tags">
        <span class="tag level">${s.level[lang]}</span>
        <span class="tag fund">${s.fund[lang]}</span>
      </div>
      <p class="desc">${s.desc[lang]}</p>
      <a class="more" href="${s.link}" target="_blank" rel="noopener">
        <span>${t("sch.more", lang)}</span> &rarr;
      </a>
    </article>`;
  }).join("");

  // re-trigger reveal observer for new nodes
  if (window.observeReveals) window.observeReveals();
}

document.addEventListener("langchange", () => { renderFilters(); renderScholarships(); });
