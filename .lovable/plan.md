

# Carousel Upgrade + Mobile Polish

## 1. Embla Carousel Integration
Replace the CSS `overflow-x-auto` scroll on **Industries** and **Testimonials** with Embla Carousel (already installed as `embla-carousel-react`). This gives us:
- Smooth momentum-based dragging on desktop
- Native touch swiping on mobile
- Proper slide alignment and snapping
- `dragFree: true` for the Netflix-style feel

Both components will use `useEmblaCarousel` directly (no need for the shadcn Carousel wrapper — too opinionated for this edge-to-edge layout).

## 2. Mobile Responsiveness Pass
Targeted fixes across all sections:

**Navbar** — Mobile menu gets a smooth slide-down animation instead of hard toggle. Lock body scroll when open.

**Hero** — Reduce bottom padding on mobile. Stack CTAs vertically on very small screens (`flex-col` below 400px).

**Industries carousel** — Cards shrink to `280px` wide on mobile. Proper touch area and gap adjustments.

**Services** — On mobile, image goes above content (already `grid-cols-1` on small). Tab labels get smaller text. Consider horizontal scroll for tab bar if it wraps awkwardly.

**Portfolio** — Cards stack to single column on mobile (already handled). Filter pills become horizontally scrollable if they overflow.

**Stats** — Already `grid-cols-2` on mobile, which works. Add horizontal dividers between rows on mobile.

**Testimonials carousel** — Cards shrink to `300px` on mobile with Embla integration.

**Journal** — Already stacks on mobile. Reduce image aspect ratio slightly on small screens.

**CTA + Footer** — Footer link columns stack properly. Bottom bar centers on mobile. Social icons get proper spacing.

## 3. Implementation Files
- `src/components/Industries.tsx` — Embla carousel + mobile card sizing
- `src/components/Testimonials.tsx` — Embla carousel + mobile card sizing
- `src/components/Navbar.tsx` — Animated mobile menu + body scroll lock
- `src/components/Hero.tsx` — Mobile CTA layout tweaks
- `src/components/Portfolio.tsx` — Scrollable filter pills on mobile
- `src/components/Stats.tsx` — Mobile divider adjustments
- `src/components/CTAFooter.tsx` — Footer mobile layout fixes

