

# Elevating the Entire Swann Site — Recommendations

After reviewing every component across the homepage, service pages, about page, navbar, and footer, here's what would take this from "well-built" to "premium studio-quality."

---

## 1. Navigation Overhaul

**Problem:** The navbar links are all `href="#section"` hash links — they only work on the homepage. Clicking "About" or "Services" from `/services/seo` does nothing useful.

**Fix:**
- Convert Navbar to use `react-router-dom` `Link` components
- "About" links to `/about`, "Services" opens a dropdown with Bespoke Websites, SEO & AEO, Brand Identity
- Logo links to `/` 
- On homepage, "Industries", "Portfolio", "Journal" scroll to their sections; on other pages they navigate to `/#industries`, etc.
- Add a services mega-menu or simple dropdown on hover — this is expected for a studio site

---

## 2. Page Transitions & Scroll-to-Top

**Problem:** Navigating between pages doesn't scroll to top. No transition between routes.

**Fix:**
- Add a `ScrollToTop` component that calls `window.scrollTo(0,0)` on route change
- Optional: add a subtle fade transition between pages using `framer-motion` `AnimatePresence` on routes

---

## 3. Footer Links Are Dead

**Problem:** Every footer link is `href="#"`. The footer lists services, about, portfolio, journal — none of them actually navigate anywhere.

**Fix:** Wire all footer links to real routes (`/about`, `/services/websites`, `/services/seo`, `/services/brand-identity`, etc.)

---

## 4. Cursor & Micro-Interactions

**Problem:** Hover states are minimal — just color changes. For a design studio site, this feels flat.

**Fix:**
- Add a custom cursor effect (a small dot that scales up on hoverable elements) — common on premium agency sites
- Add magnetic button effect on CTAs (button subtly follows cursor on hover)
- Add image reveal animations on the two-column layouts (clip-path or scale-in from edge)

---

## 5. Loading / Hero Animation

**Problem:** The homepage hero just fades in with `useScrollAnimation`. For the first thing visitors see, this is underwhelming.

**Fix:**
- Split the hero headline into individual lines/words with staggered entrance using `framer-motion` `stagger`
- Animate the badge, headline, body, and CTAs sequentially (not all at once)
- Add a subtle parallax effect on the grid background as you scroll

---

## 6. Smooth Scroll Locomotion

**Problem:** All scroll-triggered animations use a simple "fade up 8px" — every section has the same animation, which becomes predictable.

**Fix:**
- Vary animations: some sections fade up, some slide in from left/right, bold statements scale up from 0.95
- Add subtle parallax on images in two-column layouts (image moves slightly slower than text)
- Consider a staggered delay for elements within sections (label animates, then headline 100ms later, then body 200ms later)

---

## 7. Mobile Menu Upgrade

**Problem:** Mobile menu is a basic list of links with no visual hierarchy.

**Fix:**
- Full-screen overlay menu with large Syne headlines for each link
- Staggered entrance animation for each link
- Include "Services" as an expandable section showing sub-pages
- Add contact info and social links at the bottom

---

## 8. Portfolio Section Enhancement (Homepage)

**Problem:** Only 3 static project cards. No interactivity beyond filter pills that filter down to fewer items.

**Fix:**
- Add hover effects: project name slides up, a brief description or metrics appear on hover
- Link each project card to a case study page or anchor
- Add a subtle image parallax within cards on hover

---

## 9. Dark/Light Navbar Adaptation

**Problem:** Navbar is always dark-themed (white text on transparent → dark blur). On light-bg pages like the service heroes (#FAFAF8), the transparent navbar has white text on a near-white background — nearly invisible until you scroll.

**Fix:**
- Detect whether the current page starts with a light or dark hero
- On light-hero pages, use dark text initially, then switch to white text once scrolled past the hero
- Or: always show the blurred dark navbar on scroll, but use dark text when at top of light pages

---

## 10. Typography Refinement

**Problem:** Some headline sizes jump abruptly between mobile and desktop. The `clamp()` values could be more refined.

**Fix:**
- Audit all headline sizes across breakpoints for smooth scaling
- Add letter-spacing refinement on the large bold statements (slightly tighter at large sizes)
- Consider adding a thin horizontal rule or gold accent line before section labels consistently

---

## 11. Image Strategy

**Problem:** All images are Unsplash placeholders. Many are generic stock photos that don't match the "editorial, not stock" directive.

**Fix:** This is a content task, but curating better placeholder images would immediately elevate perceived quality:
- Hero: abstract beauty textures, not stock office photos
- Industries: actual medspa/clinic interiors, not generic medical
- Portfolio: device mockups showing website designs
- Service pages: editorial beauty photography

---

## Priority Order for Implementation

1. **Navigation + routing fix** (functional — currently broken across pages)
2. **Scroll-to-top on route change** (basic UX)
3. **Footer link wiring** (functional)
4. **Navbar light/dark adaptation** (visual bug on light pages)
5. **Hero staggered animation** (first impression)
6. **Mobile menu upgrade** (polish)
7. **Varied scroll animations + parallax** (depth)
8. **Cursor/micro-interactions** (premium feel)
9. **Image curation** (content quality)

---

## Technical Approach

- Navigation: Refactor `Navbar.tsx` to use `react-router-dom` `Link`/`useLocation`, add a services dropdown with `framer-motion`
- ScrollToTop: New `src/components/ScrollToTop.tsx` component added inside `BrowserRouter` in `App.tsx`
- Footer: Update `CTAFooter.tsx` link hrefs to actual routes
- Hero animation: Replace `useScrollAnimation` in `Hero.tsx` with `framer-motion` `motion.div` + `staggerChildren`
- Navbar adaptation: Add a `variant` prop or use `useLocation` to detect light-hero pages
- Cursor: New `src/components/CustomCursor.tsx` using `framer-motion` tracking mouse position
- Parallax: Use `framer-motion` `useScroll` + `useTransform` on image containers

All changes use existing dependencies (framer-motion, react-router-dom, embla). No new packages needed.

