/* =========================================================
   RUBY COOKIES — MAIN SCRIPT
   Sections: i18n, theme, navbar, reveal/counters, products,
   cart, testimonials, accordion, forms, misc UI (toast, ripple,
   back-to-top, loader)
   ========================================================= */

(() => {
  "use strict";

  /* ---------------------------------------------------------
     STATE
     --------------------------------------------------------- */
  const state = {
    lang: localStorage.getItem("rc_lang") || "en",
    theme: localStorage.getItem("rc_theme") || "light",
    favorites: JSON.parse(localStorage.getItem("rc_favorites") || "[]"),
    cart: JSON.parse(localStorage.getItem("rc_cart") || "[]"), // [{id, qty}]
    activeFilter: "all",
    searchTerm: "",
    testimonialIndex: 0
  };

  const persist = {
    favorites: () => localStorage.setItem("rc_favorites", JSON.stringify(state.favorites)),
    cart: () => localStorage.setItem("rc_cart", JSON.stringify(state.cart)),
    lang: () => localStorage.setItem("rc_lang", state.lang),
    theme: () => localStorage.setItem("rc_theme", state.theme)
  };

  /* ---------------------------------------------------------
     I18N
     --------------------------------------------------------- */
  function t(key) {
    const dict = TRANSLATIONS[state.lang] || TRANSLATIONS.en;
    return dict[key] ?? TRANSLATIONS.en[key] ?? key;
  }

  function applyTranslations() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.getElementById("langCurrent").textContent = state.lang.toUpperCase();
    document.querySelectorAll(".lang-select__menu li").forEach(li => {
      li.classList.toggle("active", li.dataset.lang === state.lang);
    });
    renderProducts();
    renderTestimonials();
    renderCart();
  }

  function setLang(lang) {
    state.lang = lang;
    persist.lang();
    applyTranslations();
  }

  function initLangSelect() {
    const btn = document.getElementById("langBtn");
    const menu = document.getElementById("langMenu");
    btn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
    document.addEventListener("click", e => {
      if (!e.target.closest("#langSelect")) {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
    menu.querySelectorAll("li").forEach(li => {
      li.addEventListener("click", () => {
        setLang(li.dataset.lang);
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------------------
     THEME (dark / light)
     --------------------------------------------------------- */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
  }
  function initTheme() {
    applyTheme();
    document.getElementById("themeToggle").addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      persist.theme();
      applyTheme();
    });
  }

  /* ---------------------------------------------------------
     LOADER
     --------------------------------------------------------- */
  function initLoader() {
    window.addEventListener("load", () => {
      setTimeout(() => document.getElementById("loader").classList.add("hidden"), 500);
    });
    // Safety net in case load event already fired
    setTimeout(() => document.getElementById("loader").classList.add("hidden"), 2500);
  }

  /* ---------------------------------------------------------
     NAVBAR: scroll shadow, active link, mobile menu
     --------------------------------------------------------- */
  function initNavbar() {
    const navbar = document.getElementById("navbar");
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");

    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });

    hamburger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      hamburger.classList.toggle("open", open);
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.classList.remove("open");
      });
    });

    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-link");
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove("active"));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => spy.observe(s));
  }

  /* ---------------------------------------------------------
     REVEAL ON SCROLL + ANIMATED COUNTERS
     --------------------------------------------------------- */
  function initReveal() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  }

  function initCounters() {
    const counters = document.querySelectorAll(".stat__num");
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => io.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------------------------------------------------------
     COOKIE ART (per-card CSS cookie graphic, no images needed)
     --------------------------------------------------------- */
  function cookieCrumbsHTML(count) {
    const positions = [
      [30, 25], [65, 20], [78, 55], [50, 70], [22, 60], [45, 40]
    ];
    let html = "";
    for (let i = 0; i < count; i++) {
      const [x, y] = positions[i % positions.length];
      html += `<span style="top:${y}%;left:${x}%;"></span>`;
    }
    return html;
  }

  function cookieGradient(hue) {
    const map = {
      caramel: "radial-gradient(circle at 32% 28%, var(--caramel), var(--cocoa) 75%)",
      cocoa: "radial-gradient(circle at 32% 28%, var(--cocoa), var(--espresso) 78%)",
      cinnamon: "radial-gradient(circle at 32% 28%, var(--cinnamon), var(--cocoa) 75%)",
      gold: "radial-gradient(circle at 32% 28%, var(--gold), var(--caramel) 75%)"
    };
    return map[hue] || map.caramel;
  }

  /* ---------------------------------------------------------
     PRODUCTS
     --------------------------------------------------------- */
  function renderProducts() {
    const grid = document.getElementById("productsGrid");
    const term = state.searchTerm.trim().toLowerCase();

    const filtered = PRODUCTS.filter(p => {
      const name = t(`product.${p.id}.name`).toLowerCase();
      const matchesFilter = state.activeFilter === "all" || p.category === state.activeFilter;
      const matchesSearch = !term || name.includes(term);
      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<p class="no-results">${t("misc.noResults")}</p>`;
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const isFav = state.favorites.includes(p.id);
      return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-card__media">
          <button class="fav-btn ${isFav ? "active" : ""}" data-fav="${p.id}" aria-label="Toggle favourite">
            ${isFav ? "♥" : "♡"}
          </button>
          <div class="product-card__cookie" style="background:${cookieGradient(p.hue)}">
            ${cookieCrumbsHTML(p.crumbs)}
          </div>
        </div>
        <div class="product-card__body">
          <h3 class="product-card__name">${t(`product.${p.id}.name`)}</h3>
          <p class="product-card__desc">${t(`product.${p.id}.desc`)}</p>
          <div class="product-card__footer">
            <span class="product-card__price">RM${p.price.toFixed(2)}</span>
            <button class="add-btn ripple" data-add="${p.id}" aria-label="Add to cart">+</button>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  function initProductControls() {
    document.getElementById("productSearch").addEventListener("input", e => {
      state.searchTerm = e.target.value;
      renderProducts();
    });

    document.getElementById("filterChips").addEventListener("click", e => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.activeFilter = chip.dataset.filter;
      renderProducts();
    });

    document.getElementById("productsGrid").addEventListener("click", e => {
      const favBtn = e.target.closest("[data-fav]");
      const addBtn = e.target.closest("[data-add]");
      if (favBtn) {
        const id = parseInt(favBtn.dataset.fav, 10);
        toggleFavorite(id);
      }
      if (addBtn) {
        const id = parseInt(addBtn.dataset.add, 10);
        addToCart(id);
        spawnRipple(addBtn, e);
      }
    });
  }

  function toggleFavorite(id) {
    const idx = state.favorites.indexOf(id);
    if (idx > -1) state.favorites.splice(idx, 1);
    else state.favorites.push(id);
    persist.favorites();
    renderProducts();
  }

  /* ---------------------------------------------------------
     CART
     --------------------------------------------------------- */
  function addToCart(id) {
    const item = state.cart.find(c => c.id === id);
    if (item) item.qty += 1;
    else state.cart.push({ id, qty: 1 });
    persist.cart();
    renderCart();
    updateCartCount();
    showToast(t("misc.addedToCart"));
    openCart();
  }

  function changeQty(id, delta) {
    const item = state.cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      state.cart = state.cart.filter(c => c.id !== id);
      showToast(t("misc.removedFromCart"));
    }
    persist.cart();
    renderCart();
    updateCartCount();
  }

  function removeFromCart(id) {
    state.cart = state.cart.filter(c => c.id !== id);
    persist.cart();
    renderCart();
    updateCartCount();
    showToast(t("misc.removedFromCart"));
  }

  function updateCartCount() {
    const count = state.cart.reduce((sum, c) => sum + c.qty, 0);
    document.getElementById("cartCount").textContent = count;
  }

  function cartTotals() {
    let subtotal = 0;
    state.cart.forEach(c => {
      const product = PRODUCTS.find(p => p.id === c.id);
      if (product) subtotal += product.price * c.qty;
    });
    return { subtotal, total: subtotal };
  }

  function renderCart() {
    const container = document.getElementById("cartItems");
    if (state.cart.length === 0) {
      container.innerHTML = `<p class="cart-empty">${t("cart.empty")}</p>`;
    } else {
      container.innerHTML = state.cart.map(c => {
        const p = PRODUCTS.find(prod => prod.id === c.id);
        if (!p) return "";
        return `
        <div class="cart-item" data-id="${c.id}">
          <div class="cart-item__cookie" style="background:${cookieGradient(p.hue)}">${cookieCrumbsHTML(3)}</div>
          <div class="cart-item__info">
            <div class="cart-item__name">${t(`product.${p.id}.name`)}</div>
            <div class="cart-item__price">RM${p.price.toFixed(2)}</div>
            <div class="cart-item__qty">
              <button class="qty-btn" data-qty-minus="${c.id}">−</button>
              <span>${c.qty}</span>
              <button class="qty-btn" data-qty-plus="${c.id}">+</button>
              <span class="cart-item__remove" data-remove="${c.id}" role="button">✕</span>
            </div>
          </div>
        </div>`;
      }).join("");
    }
    const { subtotal, total } = cartTotals();
    document.getElementById("cartSubtotal").textContent = `RM${subtotal.toFixed(2)}`;
    document.getElementById("cartTotal").textContent = `RM${total.toFixed(2)}`;
  }

  function openCart() {
    document.getElementById("cartSidebar").classList.add("open");
    document.getElementById("cartOverlay").classList.add("open");
  }
  function closeCart() {
    document.getElementById("cartSidebar").classList.remove("open");
    document.getElementById("cartOverlay").classList.remove("open");
  }

  function initCart() {
    document.getElementById("cartBtn").addEventListener("click", openCart);
    document.getElementById("closeCart").addEventListener("click", closeCart);
    document.getElementById("cartOverlay").addEventListener("click", closeCart);

    document.getElementById("cartItems").addEventListener("click", e => {
      const minus = e.target.closest("[data-qty-minus]");
      const plus = e.target.closest("[data-qty-plus]");
      const remove = e.target.closest("[data-remove]");
      if (minus) changeQty(parseInt(minus.dataset.qtyMinus, 10), -1);
      if (plus) changeQty(parseInt(plus.dataset.qtyPlus, 10), 1);
      if (remove) removeFromCart(parseInt(remove.dataset.remove, 10));
    });

    document.getElementById("checkoutBtn").addEventListener("click", () => {
      if (state.cart.length === 0) {
        showToast(t("misc.checkoutEmpty"));
        return;
      }
      const lines = state.cart.map(c => {
        const p = PRODUCTS.find(prod => prod.id === c.id);
        return `${c.qty}x ${t(`product.${p.id}.name`)} (RM${(p.price * c.qty).toFixed(2)})`;
      });
      const { total } = cartTotals();
      const message = `Hi Ruby Cookies! I'd like to order:%0A${lines.join("%0A")}%0A%0ATotal: RM${total.toFixed(2)}`;
      window.open(`https://wa.me/60123456789?text=${message}`, "_blank");
    });

    updateCartCount();
  }

  /* ---------------------------------------------------------
     TESTIMONIALS CAROUSEL
     --------------------------------------------------------- */
  function renderTestimonials() {
    const track = document.getElementById("testimonialTrack");
    const dots = document.getElementById("testimonialDots");

    track.innerHTML = TESTIMONIAL_IDS.map((id, i) => `
      <div class="testimonial-slide ${i === state.testimonialIndex ? "active" : ""}" data-index="${i}">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">"${t(`testimonial.${id}.quote`)}"</p>
        <div class="testimonial-person">
          <div class="testimonial-avatar">${t(`testimonial.${id}.name`).charAt(0)}</div>
          <div>
            <div class="testimonial-name">${t(`testimonial.${id}.name`)}</div>
            <div class="testimonial-role">${t(`testimonial.${id}.role`)}</div>
          </div>
        </div>
      </div>
    `).join("");

    dots.innerHTML = TESTIMONIAL_IDS.map((_, i) =>
      `<button class="${i === state.testimonialIndex ? "active" : ""}" data-dot="${i}" aria-label="Go to testimonial ${i + 1}"></button>`
    ).join("");
  }

  function setTestimonial(index) {
    const len = TESTIMONIAL_IDS.length;
    state.testimonialIndex = (index + len) % len;
    renderTestimonials();
  }

  function initTestimonials() {
    document.getElementById("testiPrev").addEventListener("click", () => setTestimonial(state.testimonialIndex - 1));
    document.getElementById("testiNext").addEventListener("click", () => setTestimonial(state.testimonialIndex + 1));
    document.getElementById("testimonialDots").addEventListener("click", e => {
      const dot = e.target.closest("[data-dot]");
      if (dot) setTestimonial(parseInt(dot.dataset.dot, 10));
    });

    // gentle autoplay, pauses politely — respects reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReduced) {
      setInterval(() => setTestimonial(state.testimonialIndex + 1), 7000);
    }
  }

  /* ---------------------------------------------------------
     ACCORDION (FAQ)
     --------------------------------------------------------- */
  function initAccordion() {
    document.querySelectorAll(".accordion-item").forEach(item => {
      item.querySelector(".accordion-header").addEventListener("click", () => {
        const wasOpen = item.classList.contains("open");
        document.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("open"));
        if (!wasOpen) item.classList.add("open");
      });
    });
  }

  /* ---------------------------------------------------------
     FORMS (contact + newsletter) — front-end only, no backend
     --------------------------------------------------------- */
  function initForms() {
    document.getElementById("contactForm").addEventListener("submit", e => {
      e.preventDefault();
      showToast(t("misc.messageSent"));
      e.target.reset();
    });
    document.getElementById("newsletterForm").addEventListener("submit", e => {
      e.preventDefault();
      showToast(t("misc.subscribed"));
      e.target.reset();
    });
  }

  /* ---------------------------------------------------------
     TOASTS
     --------------------------------------------------------- */
  function showToast(message) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast toast--success";
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("toast-out");
      setTimeout(() => toast.remove(), 300);
    }, 2600);
  }

  /* ---------------------------------------------------------
     RIPPLE EFFECT
     --------------------------------------------------------- */
  function spawnRipple(target, event) {
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    ripple.className = "ripple-effect";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${(event.clientX || rect.left + rect.width / 2) - rect.left - size / 2}px`;
    ripple.style.top = `${(event.clientY || rect.top + rect.height / 2) - rect.top - size / 2}px`;
    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  }

  function initRipples() {
    document.querySelectorAll(".ripple").forEach(btn => {
      btn.addEventListener("click", e => spawnRipple(btn, e));
    });
  }

  /* ---------------------------------------------------------
     BACK TO TOP
     --------------------------------------------------------- */
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 600);
    }, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------------------------------------------------
     INIT
     --------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();

    initLoader();
    initTheme();
    initLangSelect();
    initNavbar();
    initReveal();
    initCounters();
    initProductControls();
    initCart();
    initTestimonials();
    initAccordion();
    initForms();
    initRipples();
    initBackToTop();

    applyTranslations(); // renders products/testimonials/cart in the right language
  });
})();
