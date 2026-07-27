# Ruby Cookies — Website

A modern, responsive single-page website for **Ruby Cookies**, a homemade cookie brand based in Kulim, Kedah, Malaysia. Built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step required.

## Folder structure

```
RubyCookies/
├── index.html            Main page (all sections)
├── css/
│   └── style.css         All styling, design tokens, animations, dark mode
├── js/
│   ├── translations.js   All text content + product/testimonial data (i18n)
│   └── script.js         All interactivity (cart, language, theme, etc.)
├── assets/
│   ├── images/
│   │   └── og-cover.svg  Social-share preview image
│   └── icons/
│       └── favicon.svg   Browser tab icon
├── robots.txt
├── sitemap.xml
└── README.md
```

## Running it locally

No build tools, no `npm install` — just open the site.

**Simplest:** double-click `index.html` to open it in your browser.

**Recommended (avoids some browser file-access quirks):** serve it with a tiny local server so everything loads exactly like it will online:

```bash
# Option A — Python (already on most Macs/Linux, and on Windows via python.org)
cd RubyCookies
python3 -m http.server 8000
# then open http://localhost:8000 in your browser

# Option B — Node.js
npx serve RubyCookies
```

## Customizing content

Everything below can be changed **without touching any JavaScript logic** — only the data files.

### 1. Add, edit, or remove a cookie product

Products live in **`js/translations.js`**, in two places:

**A. The `PRODUCTS` array** — price, category (used for filtering), and visual style:

```js
const PRODUCTS = [
  { id: 1, price: 18.90, category: "classic", crumbs: 4, hue: "caramel" },
  // id:       a unique number — must match the translation keys below
  // price:    in RM, shown on the card and in the cart
  // category: "classic" | "chocolate" | "special" — controls the filter chips
  // crumbs:   how many "choc chip" dots are drawn on the cookie (1–6)
  // hue:      "caramel" | "cocoa" | "cinnamon" | "gold" — the cookie's colour
];
```

**B. The name and description**, added per language inside each language block (`en`, `ms`, `zh`, `ta`) using the product's `id`:

```js
"product.1.name": "Classic Chocolate Chip",
"product.1.desc": "The original — buttery dough loaded with chocolate chips.",
```

To add a 9th cookie: add an object with `id: 9` to `PRODUCTS`, then add `"product.9.name"` and `"product.9.desc"` to **all four** language blocks (English is used automatically as a fallback if you miss one).

To remove a cookie: delete its object from `PRODUCTS` (its translation keys can stay — unused keys are harmless).

### 2. Change prices

Edit the `price` value for that product's `id` in the `PRODUCTS` array — that's the only place price is stored.

### 3. Replace the placeholder cookie graphics with real photos

Right now every cookie is drawn with CSS/SVG (a gradient circle + dot "chips") so the site works instantly with zero image files. To use real photography instead:

1. Add your photos to `assets/images/`, e.g. `chocolate-chip.jpg`.
2. In `js/script.js`, find the `product-card__cookie` and `cart-item__cookie` `<div>` — replace the `style="background:..."` with an `<img src="assets/images/chocolate-chip.jpg" alt="...">` tag, or add an `image` field to each product in `PRODUCTS` and swap in an `<img>` when rendering.
3. Do the same for the hero illustration in `index.html` (`.cookie-stack`) if you'd like real photos there too.

### 4. Update text content (headlines, About Us, FAQ, etc.)

Every visible word on the page is a translation key. In `index.html` you'll see tags like:

```html
<h2 class="section-title" data-i18n="about.title">Baked from a family kitchen in Kulim</h2>
```

To change the wording, edit the value for `"about.title"` inside **each** language block in `js/translations.js` — don't edit the text in `index.html` directly, since it gets overwritten by the selected language on page load.

### 5. Add a new language

1. Copy an existing language block in `js/translations.js` (e.g. copy the whole `ms: { ... }` object).
2. Rename it to your language code, e.g. `id: { ... }` for Indonesian.
3. Translate every value (keep the keys on the left exactly the same).
4. Add a menu option in `index.html` inside `<ul class="lang-select__menu">`:
   ```html
   <li role="option" data-lang="id">Bahasa Indonesia</li>
   ```
That's it — the language switcher, `localStorage` persistence, and fallback-to-English logic all work automatically for any language you add.

### 6. Update contact details, business hours, and WhatsApp number

- Phone / WhatsApp number: search for `60123456789` in `index.html` and `js/script.js` (footer link, floating button, and checkout message) and replace with your real number in international format (no `+`, no spaces).
- Business hours, email, and address text: edit the `contact.hours`, `contact.emailLabel`, and `contact.mapLabel` values in `js/translations.js`.
- Social links: edit the `href="#"` placeholders in the `.social-icons` section of `index.html`.

### 7. Colours, fonts, and spacing

All design tokens are CSS variables at the top of `css/style.css`:

```css
:root {
  --espresso: #2E1B12;   /* darkest brown — text, dark-mode background */
  --cocoa:    #6B4226;   /* chocolate brown */
  --caramel:  #B8763A;   /* warm mid-tone accent */
  --gold:     #C9A227;   /* accent for CTAs/prices in dark mode */
  --dough:    #F7ECD9;   /* main cream background */
  --cinnamon: #A6512C;   /* buttons, links, highlights */
  ...
}
```

Change a value once here and it updates everywhere on the site, including dark mode.

## Features included

- Fully responsive (mobile, tablet, desktop)
- Sticky navbar with scroll-based active-section highlighting
- 4-language switcher (English, Bahasa Malaysia, 中文, தமிழ்) with `localStorage` persistence and automatic English fallback for missing text
- Dark mode / light mode toggle, remembered across visits
- Product search + category filters + favourites (heart icon)
- Shopping cart sidebar: add, remove, change quantity, running subtotal/total, "Checkout via WhatsApp" (opens a pre-filled WhatsApp message with the order)
- Testimonials carousel with autoplay, arrows, and dots
- Accordion FAQ
- Contact form and newsletter form (front-end only — see below)
- Scroll-reveal animations, animated stat counters, hover/zoom effects, button ripple effect, floating WhatsApp button, back-to-top button, loading screen
- Basic SEO: meta title/description, Open Graph + Twitter Card tags, `schema.org` Bakery structured data, `robots.txt`, `sitemap.xml`, semantic HTML, ARIA labels
- Respects `prefers-reduced-motion` for visitors sensitive to animation

## Important: the contact form doesn't send real emails yet

The contact and newsletter forms currently just show a confirmation toast — there's no backend attached. To actually receive submissions, connect the form to one of these (all have free tiers and need only a few lines in `js/script.js`, no server required):

- [Formspree](https://formspree.io)
- [Web3Forms](https://web3forms.com)
- [Getform](https://getform.io)

Look for the `initForms()` function in `js/script.js` — that's where the `fetch()` call to your chosen provider would go.

## Deployment

This site is static — it can be hosted anywhere that serves plain files, no build step needed.

**GitHub Pages**
1. Push this folder to a GitHub repository.
2. Repository Settings → Pages → set the source branch to `main` (or `master`) and folder to `/root`.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

**Netlify**
1. Drag and drop the `RubyCookies` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
2. Done — Netlify gives you a live URL instantly.

**Vercel**
1. `npx vercel` from inside the `RubyCookies` folder, or import the repo at [vercel.com/new](https://vercel.com/new).
2. No framework preset needed — choose "Other".

Before going live, update the placeholder domain `rubycookies.my` in `index.html`, `robots.txt`, and `sitemap.xml` to your real domain.
