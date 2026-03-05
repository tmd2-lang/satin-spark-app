

# Contact Page — `/contact`

## Overview
Create a dedicated full-page contact page with a premium dark aesthetic. Two-column layout: bold statement left, comprehensive form right. Reuse the existing `ContactCTA` pattern but expand it into a standalone page with additional form fields (industry dropdown, more service options, consent text).

## New Files

### `src/pages/Contact.tsx`
- Full dark bg (`#09090B`), min-h-screen, includes `Navbar` + `CTAFooter` (footer only, no CTA block)
- Two-column grid (`lg:grid-cols-[2fr_3fr]`), stacks on mobile
- **Left column**: `SectionLabel` ("Contact"), large Syne headline "WHEN YOU'RE READY FOR WHAT'S NEXT", contact info (phone, email, follow us with social links)
- **Right column**: Subheadline, then the form:
  - Row 1: First Name, Last Name, Business Name (3-col grid)
  - Row 2: Email, Phone, Website URL (3-col grid)
  - Row 3: Industry dropdown (native select styled dark) — Med Spa, Plastic Surgery, Aesthetician, Luxury Spa, Dermatology, Multi-Location, Other
  - Row 4: Services toggle pills (same pattern as `ContactCTA`) — Bespoke Websites, Brand Identity, SEO, Digital Advertising, Social Media, Email Marketing, Compliance, Other
  - Row 5: Message textarea
  - Row 6: Consent text
  - Submit: "Send Message" — full-width, white bg, hover gold
- Input styling: `bg-white/[0.06] border border-white/10` with `focus:border-swann-gold/50`
- Labels above each field: `font-body text-[12px] uppercase tracking-[0.1em] text-white/40`

## Changes to Existing Files

### `src/App.tsx`
- Import `Contact` page, add route `<Route path="/contact" element={<Contact />} />`

### `src/components/Navbar.tsx`
- Update "Book a Consultation" CTA links (desktop + mobile) to point to `/contact` instead of `/#contact`

### `src/components/CTAFooter.tsx`
- Update "Book a Consultation" button href to `/contact`
- Update footer "Contact" link to point to `/contact`

### `src/components/Navbar.tsx` (lightHeroPages)
- No change needed — contact page is dark bg, so navbar stays white text

## Technical Notes
- Form is client-side only (no backend) — `onSubmit` prevents default, could add toast confirmation
- The page uses the site's existing footer via `CTAFooter` but the contact page itself IS the CTA, so we'll render just the footer portion or the full `CTAFooter` at the bottom
- Mobile: left column stacks above form, form fields go single-column on small screens

