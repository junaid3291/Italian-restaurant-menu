# Italian-restaurant-menu
A stylish and responsive Italian Restaurant Menu Website built using HTML, CSS, and JavaScript. Features an elegant design, delicious food menu, and an easy-to-use interface to explore authentic Italian dishes.


# Osteria Aurelia — Fine Italian Gastronomy

A minimalist, responsive, multi-page static website designed for **Osteria Aurelia**, an authentic Italian fine-dining restaurant. Built with semantic HTML5, modern CSS3, and vanilla JavaScript—zero external frameworks or build tools required.

---

## ✨ Features

- **Editorial Fine-Dining Aesthetic:** Warm alabaster (`#faf8f5`) and charcoal (`#1c1b1a`) color palette paired with high-contrast serif typography (*Cormorant Garamond*) and clean sans-serif body text (*Plus Jakarta Sans*).
- **Multi-Page Architecture:**
  - `index.html` — Split editorial hero, curated signature dishes, and sommelier quote strip.
  - `menu.html` — Interactive course category filtering (*Primi & Mains, Forno a Legna, Dolci*) and a complete à la carte price ledger.
  - `cellar.html` — Estate reserve vintages and an interactive **Sommelier Wine Pairing Matcher**.
  - `about.html` — Culinary philosophy and leadership profiles.
  - `contact.html` — Minimalist underline reservation form and concierge details.
- **Persistent Selection Bag:** Uses `sessionStorage` to track selected courses and running totals across pages, complete with interactive order and checkout alerts.
- **Zero-Config Deployment:** Ready to deploy directly to GitHub Pages, Netlify, or Vercel.

---

## 📁 Project Structure

```text
osteria-aurelia/
├── index.html       # Main landing page
├── menu.html        # Full menu with category filters & price ledger
├── cellar.html      # Wine cellar & interactive sommelier pairing tool
├── about.html       # Culinary philosophy & chef profiles
├── contact.html     # Table reservation form & location info
├── style.css        # Shared minimalist design system
├── script.js        # Cart persistence, wine pairing logic & alert handlers
└── README.md        # Project documentation
