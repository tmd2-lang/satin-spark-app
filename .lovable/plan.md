

# Entrance Animations + Success Feedback — Contact Page & Mobile Sheet

## Contact Page (`src/pages/Contact.tsx`)

Replace the basic `useScrollAnimation` fade with rich `framer-motion` orchestrated animations:

**Left column — staggered cascade:**
- Section label slides in from left with blur dissolve (delay 0)
- Each headline line ("When You're", "Ready for", "What's Next") staggers in one-by-one from left with spring physics (delays 0.15, 0.3, 0.45)
- Contact info blocks (Call, Email, Follow) fade up with stagger (delays 0.7, 0.85, 1.0)

**Right column — form entrance:**
- Subheadline fades in (delay 0.3)
- Each form row cascades in from bottom with stagger (delays 0.4, 0.55, 0.7, 0.85, 1.0, 1.1)
- Submit button scales in with a slight overshoot spring (delay 1.2)

**Service pills** get a pop-in micro-animation on toggle — `scale: [1, 1.15, 1]` with gold glow pulse when selected.

**Success state:** On submit, the entire form fades out and is replaced by a success view:
- Large animated checkmark (SVG circle + check drawn with `motion.path` `pathLength` animation)
- "We'll be in touch" headline with fade-up
- "Expect to hear from us within 24 hours" subtext
- "Send another message" link to reset the form

## Mobile Bottom Sheet (`src/components/MobileContactSheet.tsx`)

**Form field stagger:** Each field slides up with 0.08s stagger delay after the sheet opens.

**Success state:** Same concept — after submit, form morphs into a checkmark + confirmation message with a satisfying spring animation. Auto-closes after 2.5 seconds.

**Submit button:** Add a brief loading shimmer (0.5s) before showing success to feel real.

## Technical Approach
- Use `framer-motion`'s `motion.div`, `variants`, `staggerChildren`, and `AnimatePresence` for all orchestration
- Animated checkmark uses `motion.circle` + `motion.path` with `pathLength` from 0 to 1
- Success state managed via `useState<"form" | "success">`
- Contact page uses `useInView` from framer-motion instead of the custom `useScrollAnimation` hook
- No new dependencies needed — everything uses existing `framer-motion`

## Files Changed
- **`src/pages/Contact.tsx`** — Full rewrite with motion components, staggered entrance, success state
- **`src/components/MobileContactSheet.tsx`** — Add field stagger, submit shimmer, success state with auto-close

