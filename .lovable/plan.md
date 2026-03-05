

# Services Section — Cinematic Image Reveal Animation

## The Concept
When a tab is selected, the image starts spanning the full width of the content area (both columns), then after a brief pause it slides left to its 50% column position, revealing the text content underneath. This creates a dramatic "curtain pull" effect.

## How It Works

**Layout change:** Instead of two separate `AnimatePresence` blocks for image and content, combine them into a single container. The image is absolutely positioned over the full width initially, then animates its width from `100%` to `50%` (or its `right` edge slides left), revealing the text column beneath it.

**Animation sequence on tab change:**
1. Old content fades out (0.25s)
2. New image enters at full width covering both columns (opacity 0 → 1, 0.3s)
3. After a 0.4s hold, image slides left — animating from `width: 100%` to `width: 50%` (0.6s, smooth ease)
4. As the image slides, the text content fades up into the revealed space (staggered: headline → description → pills)

**On initial load (first view):** Same sequence plays once the section scrolls into view.

**On mobile (single column):** Skip the full-width reveal — just use the existing fade transition since there's no two-column layout to play with.

## Technical Implementation

**`src/components/Services.tsx`:**
- Replace the two-column grid + separate `AnimatePresence` blocks with a single relative container
- Image wrapper uses `motion.div` animating `width` from `"100%"` to `"50%"` with a delay
- Text content sits in the right half, fades in after the image slides with `staggerChildren`
- Use a `key` on the wrapper tied to `active.id` so `AnimatePresence` re-triggers on tab change
- On mobile (`lg:` breakpoint), fall back to sequential layout without the full-width reveal — use a CSS media query or conditional animation variants

**Variant structure:**
```
imageReveal: {
  initial: { width: "100%" }
  animate: { width: "50%", transition: { delay: 0.4, duration: 0.6, ease } }
  exit: { opacity: 0, transition: { duration: 0.25 } }
}

textReveal: {
  initial: { opacity: 0 }  
  animate: { opacity: 1, transition: { delay: 0.8, staggerChildren: 0.1 } }
  exit: { opacity: 0 }
}
```

## Files Changed
- `src/components/Services.tsx` — Restructure layout and replace animation logic

