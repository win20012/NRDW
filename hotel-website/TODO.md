# NR&DW Website — Project TODO

> Assessed on 13 June 2026 from the current single-page build.
> Items are grouped by priority and ordered by dependency.

---

## 🔴 P0 — Critical (Must-have before launch)

### Content & Copy
- [/] **Replace all placeholder contact details** — address (`4/2 ถ.สิงหราช ซ.3 ต.ศรีภูมิ อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200`) and email (`stay@decemberwindchiangmai.com`) updated. (Phone and WhatsApp remain placeholder)
- [ ] **Replace placeholder room names & prices** — confirm the actual room categories, names, and starting rates (currently "Deluxe Lanna Suite 2,500 THB", "Superior Teak Room 1,800 THB", "Cozy Courtyard Room 1,500 THB")
- [ ] **Replace placeholder social links** — Instagram and Facebook `href="#"` need real URLs
- [ ] **Add Thai language version** — AGENTS.md requires all guest-facing content in both English and Thai. Currently English-only. Implement a language switcher (EN / TH)
- [ ] **Add Restaurant / Dining section** — the restaurant is a core part of the brand and is currently missing entirely from the website. It should have its own section with menu highlights, hours, and imagery
- [ ] **Update FAQ about breakfast** — current answer says "breakfast isn't served on-site" which contradicts the property having a public restaurant on Floor 1. Rewrite to mention the in-house restaurant

### Booking Integration
- [ ] **Integrate a real booking engine** — "View Availability" and all "Book Room" links currently point to `#booking` (a CTA section with no actual functionality). Connect to a booking engine (e.g., Booking.com widget, Agoda direct link, or a custom solution) to enable direct reservations
- [ ] **Add OTA links** — link to Booking.com and Agoda property pages so guests can choose their preferred platform

### Images & Media
- [ ] **Replace AI-generated placeholder images with real photography** — all 4 images (`hotel_hero_lanna.png`, `room_suite_lanna.png`, `room_superior_teak.png`, `room_cozy_courtyard.png`) are AI-generated and do not represent the actual property
- [ ] **Add restaurant/dining imagery** — needed for the new Restaurant section
- [ ] **Add a property logo / favicon** — no favicon is currently set; the browser tab shows a generic icon

### Legal & Compliance
- [ ] **Create a Privacy Policy page** — footer links to `#` for Privacy Policy; a real page is needed (especially for PDPA compliance in Thailand)
- [ ] **Add cookie consent banner** — required if using analytics or third-party cookies

---

## 🟡 P1 — Important (Should-have for a quality launch)

### Design & UX
- [ ] **Add a Gallery / Photo section** — guests want to see more than 3 room photos. Add a lightbox gallery showcasing rooms, restaurant, common areas, building exterior, and neighbourhood
- [ ] **Add a "The Building" or "Design" section** — the property's architecture (clock medallions, spiral staircase, arched windows) is a signature feature worth showcasing
- [ ] **Improve About section image** — currently reuses the hero image (`hotel_hero_lanna.png`). Should use a distinct interior or detail shot
- [ ] **Show all 7 rooms** — only 3 room cards are displayed. Either show all 7 individually or clarify room types/categories more accurately
- [ ] **Add floor plan or property layout info** — helps guests understand the 4-floor layout (restaurant, gallery, bedrooms)

### Navigation & Pages
- [ ] **Add a dedicated nav link for the Restaurant** — since F&B is central to the brand
- [ ] **Add a Gallery nav link** — once the gallery section is built
- [ ] **Consider multi-page structure** — separate pages for Rooms (with individual room detail views), Restaurant, and Gallery could provide a richer experience

### SEO & Performance
- [ ] **Add Open Graph & Twitter meta tags** — for proper social media sharing (title, description, image)
- [ ] **Add structured data (JSON-LD)** — Hotel schema, Restaurant schema, and LocalBusiness schema for Google rich results
- [ ] **Add a sitemap.xml** — for search engine crawling
- [ ] **Add robots.txt** — to guide search crawlers
- [ ] **Optimise images** — convert PNGs to WebP format, add responsive `srcset` attributes, and implement lazy loading
- [ ] **Move Tailwind CSS from CDN to a build step** — the CDN version shows a production warning; use a proper build pipeline (PostCSS/Vite) for production

### Accessibility
- [ ] **Add `alt` text that is descriptive** — current alt text is generic (e.g., "Hotel Interior Detail"). Write meaningful descriptions
- [ ] **Ensure colour contrast meets WCAG AA** — verify teak-on-sand and gold-on-white combinations
- [ ] **Add skip-to-content link** — for keyboard navigation
- [ ] **Add ARIA labels to interactive elements** — FAQ accordion buttons, mobile menu

---

## 🟢 P2 — Nice-to-have (Polish & enhancement)

### Features
- [ ] **Add a "What's Nearby" or neighbourhood guide** — highlight temples, markets, cafés, and attractions within walking distance
- [ ] **Add guest reviews / testimonials section** — social proof from past guests or links to TripAdvisor/Google reviews
- [ ] **Add a contact form** — as an alternative to WhatsApp/email for guest enquiries
- [ ] **Add a "Book the Entire Property" CTA** — the site mentions this is possible for family gatherings; make it prominent
- [ ] **Add weather / best time to visit info** — helpful for international travellers
- [ ] **Implement a loading/splash screen** — with the NR&DW logo for a polished first impression

### Design Polish
- [ ] **Design and add a proper logo** — currently using plain text "NR&DW" in the nav; a designed logo/wordmark would elevate the brand
- [ ] **Add subtle parallax scrolling** — on hero and section dividers for depth
- [ ] **Add a "Back to Top" button** — for long-scroll usability
- [ ] **Animate the stat counters** — "7 Bespoke Bedrooms" and "5 min Walk to Temples" could count up on scroll
- [ ] **Improve the CTA section** — add a background image or pattern instead of the plain teak colour

### Technical
- [ ] **Set up a proper build system** — use Vite or similar for bundling, minification, and asset optimization
- [ ] **Add Google Analytics / tracking** — to measure traffic and conversions
- [ ] **Set up email domain** — ensure `hello@nrdw-hotel.com` actually works
- [ ] **Add a 404 page** — custom error page matching the site design
- [ ] **Test cross-browser compatibility** — verify on Safari, Firefox, Edge, and mobile browsers
- [ ] **Set up hosting & deploy** — choose a hosting provider (Vercel, Netlify, or traditional hosting) and deploy the site with a custom domain

---

## 📋 Progress Tracker

| Category | Total | Done |
|----------|-------|------|
| 🔴 P0 — Critical | 12 | 0 |
| 🟡 P1 — Important | 14 | 0 |
| 🟢 P2 — Nice-to-have | 15 | 0 |
| **Total** | **41** | **0** |

---

## Current State Summary

**What's working well:**
- ✅ Clean, responsive single-page layout
- ✅ Modern Lanna colour palette (teak, gold, sand)
- ✅ Google Fonts loaded (Outfit + Playfair Display)
- ✅ Mobile hamburger menu functional
- ✅ FAQ accordion working
- ✅ Scroll-reveal animations working
- ✅ Google Maps embed with correct location
- ✅ Good SEO basics (title tag, meta description)

**What's missing or broken:**
- ❌ No real images (all AI-generated)
- ❌ No restaurant section (a core brand pillar)
- ❌ No Thai language support
- ❌ No working booking integration
- ❌ All contact info is placeholder
- ❌ No favicon or logo
- ❌ No privacy policy
- ❌ Tailwind via CDN (not production-ready)
