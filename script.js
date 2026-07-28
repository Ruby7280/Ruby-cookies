/* =========================================================
   Ruby Cookies — main application logic
   Depends on (loaded before this file in index.html):
     lang/en.js, lang/ms.js, lang/zh.js, lang/ta.js
        -> provide translations_en, translations_ms, translations_zh, translations_ta
     assets/cookie-illustrations.js -> provides cookieArt
     assets/feature-icons.js        -> provides featureIcons
========================================================= */

/* Combine the four language files (each loaded as a separate <script>) into one lookup object */
const translations = {
  en: translations_en,
  ms: translations_ms,
  zh: translations_zh,
  ta: translations_ta
};

let currentLang = 'en';

/* =========================================================
   PRODUCT DATA — edit the price here.
   Each product's illustration lives in cookieArt[id] above.
========================================================= */

const products = [
  {id:'p1', price:'RM 18.00'},
  {id:'p2', price:'RM 22.00'},
  {id:'p3', price:'RM 20.00'},
  {id:'p4', price:'RM 25.00'},
  {id:'p5', price:'RM 24.00'},
  {id:'p6', price:'RM 23.00'}
];

const features = [
  {key:'f1'}, {key:'f2'}, {key:'f3'}, {key:'f4'}, {key:'f5'}, {key:'f6'}
];

const testimonialKeys = ['t1','t2','t3'];

function renderProducts(){
  const t = translations[currentLang];
  const grid = document.getElementById('productGrid');
  grid.innerHTML = products.map(p => `
    <div class="product-card reveal">
      <div class="product-img"><div class="disc">${cookieArt[p.id]}</div></div>
      <div class="product-body">
        <h3>${t[p.id+'_name']}</h3>
        <p>${t[p.id+'_desc']}</p>
        <div class="product-footer">
          <span class="price">${p.price}</span>
          <button class="add-btn" data-id="${p.id}">${t.add_to_cart}</button>
        </div>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.add-btn').forEach(btn=>{
    btn.addEventListener('click', () => {
      const t2 = translations[currentLang];
      btn.textContent = t2.added;
      btn.classList.add('added');
      setTimeout(()=>{ btn.textContent = t2.add_to_cart; btn.classList.remove('added'); }, 1600);
    });
  });
  observeReveals();
}

function renderFeatures(){
  const t = translations[currentLang];
  const grid = document.getElementById('featureGrid');
  grid.innerHTML = features.map(f => `
    <div class="feature-card reveal">
      <div class="feature-icon">${featureIcons[f.key]}</div>
      <h3>${t[f.key+'_t']}</h3>
      <p>${t[f.key+'_d']}</p>
    </div>
  `).join('');
  observeReveals();
}

function renderTestimonials(){
  const t = translations[currentLang];
  const grid = document.getElementById('testiGrid');
  grid.innerHTML = testimonialKeys.map(k => `
    <div class="testi-card reveal">
      <div class="stars">★★★★★</div>
      <p class="quote">"${t[k+'_q']}"</p>
      <div class="testi-person">
        <div class="avatar">${t[k+'_n'].charAt(0)}</div>
        <div class="name">${t[k+'_n']}</div>
      </div>
    </div>
  `).join('');
  observeReveals();
}

function applyTranslations(){
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(t[key] !== undefined) el.innerHTML = t[key];
  });
  renderProducts();
  renderFeatures();
  renderTestimonials();
  document.documentElement.lang = currentLang;
}

function setLang(lang){
  currentLang = lang;
  document.getElementById('langLabel').textContent = lang.toUpperCase();
  document.querySelectorAll('.lang-menu button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyTranslations();
  document.getElementById('langMenu').classList.remove('open');
}

/* ---------- Language menu toggle ---------- */
const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
langBtn.addEventListener('click', (e)=>{
  e.stopPropagation();
  langMenu.classList.toggle('open');
});
document.addEventListener('click', ()=> langMenu.classList.remove('open'));
document.querySelectorAll('.lang-menu button').forEach(btn=>{
  btn.addEventListener('click', ()=> setLang(btn.dataset.lang));
});

/* ---------- Mobile nav ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=>{
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ---------- Sticky header shadow ---------- */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', ()=>{
  header.classList.toggle('scrolled', window.scrollY > 10);
});

/* ---------- Active nav link on scroll ---------- */
const sections = ['home','about','products','why','testimonials','contact'];
const navAnchors = document.querySelectorAll('.nav-links a');
function updateActiveNav(){
  let current = 'home';
  sections.forEach(id=>{
    const el = document.getElementById(id);
    if(el && window.scrollY >= el.offsetTop - 140) current = id;
  });
  navAnchors.forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === '#'+current);
  });
}
window.addEventListener('scroll', updateActiveNav);

/* ---------- Scroll reveal ---------- */
function observeReveals(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal:not(.in)').forEach(el=> io.observe(el));
}

/* ---------- Contact form (front-end only demo) ---------- */
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = translations[currentLang].form_success;
  note.style.color = '#9c2a3e';
  note.style.fontWeight = '600';
  this.reset();
});

/* ---------- Init ---------- */
applyTranslations();
observeReveals();
