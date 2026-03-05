

# Swann Company — Premium Homepage

## Overview
A cinematic, agency-quality homepage for Swann Company, a digital studio serving aesthetics businesses. The design follows a dark/light alternating rhythm with a "new money luxe" aesthetic — sharp, tech-forward, and intentional. Reference feel: studio3marketing.com, linear.app, stripe.com.

## Design System
- **Dark backgrounds**: #09090B / elevated #111114
- **Light sections**: #FAFAF8
- **Accent gold**: #C9A96E (used sparingly — thin lines, pills, hover states)
- **Typography**: Syne (headlines, bold 700) + Outfit (body, 300-500) — no serifs
- **Section label motif**: 32px gold line + uppercase gold label on every section

## Page Structure (8 Sections)

### 1. Navigation (Fixed)
- Transparent over hero → blurred dark backdrop on scroll
- Logo: "SWANN" (Syne bold) + "company" (Outfit light uppercase)
- Links: Industries · Services · Portfolio · About · Journal
- CTA button: "Book a Consultation" — white bg → gold on hover
- Mobile: hamburger menu

### 2. Hero (Dark — Full Viewport)
- Faint grid lines background with radial fade + subtle gold glow
- Gold pill badge: "Digital Atelier for Aesthetics"
- Headline: "Designed to Captivate. Engineered to Convert." — "Captivate" in gold gradient text
- Subheadline describing AI-powered websites for aesthetics businesses
- Two CTAs: "See Our Work" (solid white) + "How It Works" (ghost border)
- Bottom tagline: "The technology is invisible — the taste is not."

### 3. Industries Carousel (Light)
- Headline: "Built for the aesthetics industry."
- Netflix-style horizontal scroll carousel, edge-to-edge bleed
- 6 cards (350-400px wide): Med Spas, Plastic Surgery, Aestheticians, Luxury Spas, Dermatology, Multi-Location
- Each card: large image + dark gradient overlay + name + arrow
- Draggable on desktop, swipeable on mobile

### 4. Services — Tabbed Section (Dark)
- Two-column layout inspired by studio3marketing.com
- Left: large image that transitions on tab switch
- Right: pillar headline, description, service pills
- Bottom tab bar: Design · Growth · Presence · Intelligence (gold underline on active)
- Content changes with fade transition on tab click
- Mobile: stacked/accordion layout

### 5. Portfolio (Light)
- 3 large landscape project cards in a row
- Each: image + project name + "→ Case Study" link + industry tag
- Filter pills below: All · Med Spas · Plastic Surgery · Aestheticians · Spas · Dermatology
- Placeholder projects: Luminare Medical Spa, Dr. Chen Aesthetics, FORMA Skin Studio

### 6. Stats (Dark)
- Single row, 4 stats with vertical dividers
- 100% HIPAA Compliant · 3.2x Avg. Traffic Increase · <48h Response Time · 97% Client Retention
- Clean and minimal — numbers only, no cards

### 7. Testimonials (Light)
- Horizontal scrolling testimonial cards
- Each: quote, gold divider line, client name, practice info
- 2-3 visible at a time, scroll for more

### 8. Journal (Dark)
- 2 article cards side by side
- Image + category tag + article title
- Placeholder articles about med spa websites and HIPAA compliance

### 9. CTA + Footer (Dark)
- Large centered headline: "When you're ready for what's next."
- Subheadline + large "Book a Consultation →" button with gold hover glow
- Subtle radial gold gradient atmosphere
- Footer: logo + tagline, 3 link columns (Company, Industries, Services), copyright bar with social icons

## Animations
- Scroll-triggered fade-in + slide-up with staggered delays per section
- Nav blur transition on scroll
- Smooth tab content transitions in services section
- Momentum-based carousel scrolling
- Subtle hover effects (scale, color shifts) — polished, never bouncy

## Responsive
- Desktop-first, fully responsive
- Hero headline uses clamp() sizing
- Grids collapse to stacked on mobile
- Carousels become touch-swipeable
- Services tabs become stacked/accordion on mobile

