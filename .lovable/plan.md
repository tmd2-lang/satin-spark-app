

# Bespoke Websites Page — `/services/websites`

## Overview
An editorial-style deep-dive page with 11 sections following the "bold claim → proof" rhythm. Reuses existing design system (Syne + Outfit, dark/light alternation, gold accents, Navbar, CTAFooter).

## New Files

### `src/pages/BespokeWebsites.tsx`
Page shell — imports Navbar, all section components, and a shared footer (reuse CTAFooter or a slimmed version).

### Section Components (all in `src/components/bespoke/`)

1. **`BespokeHero.tsx`** — Light bg, centered layout. Two pill tags, massive all-caps Syne headline, body paragraph, thin divider, sub-label. Generous whitespace.

2. **`FeaturedShowcase.tsx`** — Full-bleed image (70vh), dark gradient overlay from bottom-left, overlaid text (uppercase label, bold headline, "View Project →" link). Edge-to-edge, no container constraints on the image.

3. **`OurApproach.tsx`** — Light bg, two-column (image left 45%, content right). Uppercase label, large headline, body copy, "Supporting Services" pill links.

4. **`PhilosophyCarousel.tsx`** — Light bg, Embla carousel with `dragFree: true`. Large cards (image top 65%, text below). 4 cards, ~2 visible at a time. Navigation dots + arrow buttons at bottom.

5. **`BoldStatement.tsx`** — Light bg, centered. Small label + massive all-caps headline. 80-100px vertical padding. Pure visual breather.

6. **`DeepDive.tsx`** — Light bg, two-column (image left, content right). Headline, body paragraph, then two sub-points in a 2-col grid within the right column.

7. **`Differentiator.tsx`** — Dark bg, flipped two-column (text left, large image right 55%). Gold label, white headline, muted body text, sub-point with bold title.

8. **`JournalFeed.tsx`** — Light bg, bold statement headline + Embla horizontal article cards (4 cards, 2 visible). Dots + arrows + "View More" link.

9. **`CaseStudiesCarousel.tsx`** — Dark bg, Embla carousel. Each slide: image left, details right (label, client name, description, 3 big metrics, CTA button). Dots + arrows.

10. **`RelatedServices.tsx`** — Light bg, two large image cards side by side linking to Brand Identity and SEO.

11. **`ContactCTA.tsx`** — Dark bg, two-column. Left: bold headline + contact info (phone, email, socials in gold). Right: contact form with dark-styled inputs (name, email, phone, website, service checkboxes, message textarea, submit button).

## Route Addition
Add `<Route path="/services/websites" element={<BespokeWebsites />} />` in `App.tsx`.

## Shared Components
- Reuse `Navbar`, `CTAFooter` (footer portion), `SectionLabel`, `useScrollAnimation`
- Embla Carousel (already installed) for PhilosophyCarousel, JournalFeed, CaseStudiesCarousel
- All scroll animations use existing `useScrollAnimation` hook

## Responsive
- Two-column layouts stack on mobile (`grid-cols-1 lg:grid-cols-2`)
- Carousels become touch-swipeable via Embla
- Full-bleed showcase scales down naturally
- Contact form fields stack on mobile
- Bold statement headlines use `clamp()` for sizing

