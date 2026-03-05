

# Animation Upgrade — Homepage & Site-Wide Sections

## The Problem
Right now, every section outside the Hero and Contact page uses the exact same animation: a simple CSS `opacity-0 translate-y-8 → opacity-100 translate-y-0` triggered by `useScrollAnimation`. It's functional but flat — everything fades up identically, no staggering, no variety, no personality. For a site selling premium digital experiences, the animations should *demonstrate* that capability.

## The Approach
Replace the generic CSS transitions with `framer-motion` orchestrated animations across all homepage sections. Each section gets a distinct animation treatment that suits its content type, while maintaining a cohesive feel.

## Section-by-Section Plan

### Industries (carousel cards)
- Header text: staggered fade-up (label → headline → subtext)
- Carousel cards: stagger in from the right with a slight rotation (`rotateY: 8deg → 0`), each card delayed 0.1s — gives a "dealing cards" feel
- On hover: subtle lift + shadow expansion (already has scale, add shadow)

### Services (tabbed content)
- Header: staggered cascade like Industries
- Tab bar buttons: stagger in from bottom
- When switching tabs: use `AnimatePresence` with `mode="wait"` so the image and content cross-fade with a subtle directional slide (left tab → slide left, right tab → slide right)
- Service pills: pop in with scale spring

### Portfolio (project grid)
- Header: staggered cascade
- Project cards: stagger in with a masonry-like feel — each card fades up with increasing delays (0.1, 0.2, 0.3)
- Filter pills: when switching filters, cards exit with scale-down + fade, new cards enter with scale-up + fade using `AnimatePresence` + `layout` for smooth reflow

### Stats (number counters)
- Each stat staggers in from bottom (0.15s delay between each)
- The stat values get a counting-up animation — numbers animate from 0 to their final value over 1.5s using `useMotionValue` + `useTransform` + `animate` from framer-motion
- The gold dividers between stats draw in with a width animation

### Testimonials (carousel cards)
- Header: staggered cascade
- Cards: stagger in from below with slight rotation (`rotate: 2deg → 0`) and increasing delays — gives a "fanned out" entrance

### Journal (article cards)
- Header: staggered cascade
- Cards: one slides in from left, the other from right, meeting in the middle
- Category labels: fade in with a gold underline that draws from left to right

### CTAFooter (CTA block + footer)
- The radial gold gradient pulses subtly on loop (scale 1 → 1.1 → 1, opacity cycle)
- Headline words stagger in one by one
- CTA button: scales in with overshoot spring, then has a subtle idle "breathe" animation (scale 1 → 1.02 → 1 on loop)
- Footer link columns: stagger in from bottom

## Technical Approach
- All sections switch from `useScrollAnimation` + CSS transitions to `framer-motion`'s `useInView` + `motion.div` with `variants`
- Stats counter uses `useMotionValue`, `useTransform`, and `animate` from framer-motion — no new dependencies
- Tab switching in Services uses `AnimatePresence mode="wait"` with directional variants
- Portfolio filter uses `AnimatePresence` + `layout` prop for smooth card reflow
- The `useScrollAnimation` hook can remain for any subpages still using it

## Files Changed
- `src/components/Industries.tsx`
- `src/components/Services.tsx`
- `src/components/Portfolio.tsx`
- `src/components/Stats.tsx`
- `src/components/Testimonials.tsx`
- `src/components/Journal.tsx`
- `src/components/CTAFooter.tsx`

No new dependencies — everything uses the existing `framer-motion` package.

