# Paradise Pest Control Services — Website

> Professional pest control website for Paradise Pest Control Services,  
> Hanamkonda, Warangal & Hyderabad, Telangana.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `src/config/business.ts` | **Central business config** — phone, WhatsApp, service areas |
| `src/config/services.ts` | Service cards, descriptions, signs |
| `src/config/faq.ts`      | FAQ question and answer content |
| `public/images/`         | Place all client photographs here |
| `public/robots.txt`      | Search engine crawler rules |
| `public/sitemap.xml`     | XML sitemap (update domain before going live) |
| `index.html`             | SEO metadata and JSON-LD structured data |

---

## 🖼️ Logo & Images — What to provide

The following assets are **not yet loaded** and need to be placed in the correct folders:

### Logo
- **File name expected:** `public/images/paradise-pest-control-logo.png`
- Once you add the file, open `src/components/Header.tsx` and replace the `logo-placeholder` div with the `<img>` tag that is commented out in the same file.
- Do the same in `src/components/Footer.tsx`.

### Hero Background Photo
- **File name expected:** `public/images/hero-bg.jpg`
- A large, high-quality pest control photograph (ideally 1600×900px or larger).

### Service Photos
Place actual service photographs at these paths:

| Service | Expected file |
|---------|--------------|
| Termite Control | `public/images/termite-control.jpg` |
| Termite — Cupboards | `public/images/termite-cupboards.jpg` |
| Ground Treatment | `public/images/ground-treatment.jpg` |
| Termite — Walls | `public/images/termite-walls.jpg` |
| Bed Bug Control | `public/images/bed-bug-control.jpg` |

### Gallery Photos
Place gallery photographs in `public/images/gallery/` with these names:

```
termite-1.jpg
termite-2.jpg
termite-3.jpg
termite-walls-1.jpg
ground-1.jpg
bedbug-1.jpg
```

To add more gallery photos, edit the `GALLERY_ITEMS` array in `src/components/Gallery.tsx`.

---

## 🔧 Updating Business Details

All business information (phone, WhatsApp, service areas) is in one file:

```
src/config/business.ts
```

Change it there and it updates across the whole site automatically.

---

## 🚀 Build for Production

```bash
npm run build
```

Output will be in `dist/`. Upload this folder to your web hosting.

---

## 🌐 Going Live Checklist

- [ ] Replace placeholder domain (`paradisepestcontrol.in`) in:
  - `index.html` (canonical URL and JSON-LD)
  - `public/sitemap.xml`
  - `public/robots.txt`
- [ ] Add the official logo to `public/images/paradise-pest-control-logo.png`
- [ ] Add all client photographs to `public/images/`
- [ ] Verify or create Google Business Profile (see below)
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Search Console verification meta tag to `index.html`
- [ ] Add Open Graph image (`public/images/og-image.jpg`) for social sharing

---

## 📍 Google Business Profile Setup

1. Go to https://business.google.com and sign in with a Google account.
2. Search for "Paradise Pest Control Services" — claim the existing listing or create a new one.
3. Set the primary category to **Pest Control Service**.
4. Add phone number: +91 99898 44465.
5. Add your service areas: Hanamkonda, Warangal, Hyderabad.
6. Add your actual business photographs.
7. Once you have a verified listing, replace the `googleMapsUrl` in `src/config/business.ts` with the direct Google Maps link to your listing.
8. Ask satisfied customers for genuine Google reviews.

---

## 🔍 Google Search Console

1. Go to https://search.google.com/search-console
2. Add your domain as a property.
3. Verify ownership via the HTML meta tag method and paste the token into `index.html`.
4. Submit `https://yourdomain.com/sitemap.xml` once the site is live.
5. Use the URL Inspection tool to request indexing of your homepage.

---

## Privacy & Form Submissions

The enquiry form on the Contact page opens WhatsApp with the customer's details prefilled.  
No data is stored by the website. If you later add a contact form backend (e.g., EmailJS, Formspree, or a server), update the `handleSubmit` function in `src/components/Contact.tsx`.
