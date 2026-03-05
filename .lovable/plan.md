

# Mobile Bottom Sheet for "Book a Consultation" CTAs

## What
On mobile only, all "Book a Consultation" buttons across the site open a slide-up bottom sheet modal with a simplified contact form instead of navigating to `/contact`. Desktop behavior stays unchanged.

## New File: `src/components/MobileContactSheet.tsx`
A reusable bottom sheet component using `framer-motion`:
- Dark overlay (`bg-black/60`) with tap-to-dismiss
- Sheet slides up from bottom with `framer-motion` (`y: "100%" → y: 0`)
- Rounded top corners, dark bg (`#111114`), drag-to-dismiss handle bar
- Simplified form: Name, Email, Phone, Business Name fields (same dark input styling as `/contact` page)
- "Send Message" submit button (white bg, hover gold)
- Uses `AnimatePresence` for enter/exit

## New File: `src/components/BookConsultationButton.tsx`
A wrapper component that:
- Accepts `children`, `className`, and renders either a `<Link to="/contact">` (desktop) or a `<button>` that opens the sheet (mobile)
- Uses the existing `useIsMobile()` hook from `src/hooks/use-mobile.tsx`
- Manages open/closed state for the sheet
- Renders `MobileContactSheet` via portal when open

## Changes to Existing Files

### `src/components/Navbar.tsx`
Replace both desktop and mobile "Book a Consultation" `<Link>` elements with `<BookConsultationButton>`. The component handles the desktop/mobile logic internally.

### `src/components/CTAFooter.tsx` (line 46-51)
Replace the `<Link to="/contact">` with `<BookConsultationButton>`.

### `src/components/about/AboutCTA.tsx` (line 21-26)
Replace the `<a href="#">` with `<BookConsultationButton>`.

## Technical Notes
- `useIsMobile()` uses `768px` breakpoint — matches the site's existing `md:` responsive breakpoint
- Form is client-side only (matches current `/contact` behavior)
- Bottom sheet gets `z-[60]` to sit above navbar (`z-50`)
- Drag-to-dismiss: `framer-motion` `drag="y"` with `dragConstraints` and `onDragEnd` threshold

