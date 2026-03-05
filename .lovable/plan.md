

# Fix: Mobile Tab/Filter Cutoff in Services & Portfolio

## Problem
Both sections have horizontally scrollable elements on mobile, but they get visually clipped — likely by the parent's `overflow-x-hidden` on the page wrapper or insufficient bottom padding, making the last items hard to reach/tap.

## Services Tab Bar (line 109)
The tab bar uses `overflow-x-auto` with hidden scrollbar but sits inside a parent with no bottom padding buffer. On mobile the bottom edge of the tabs (and the gold underline indicator) gets clipped.

**Fix:** Add `pb-2` to the tab bar container so the active indicator and tap targets aren't cut off. Also add `-mx-6 px-6` to give the scroll area full-bleed on mobile (same pattern Portfolio already uses).

## Portfolio Filter Pills (line 90)
The filter pills row already has `overflow-x-auto` and `-mx-6 px-6` for mobile scroll, plus `pb-2`. But with 6 pills ("All", "Med Spas", "Plastic Surgery", "Aestheticians", "Spas", "Dermatology"), the rightmost pills may be clipped by the page-level `overflow-x-hidden` on the `<div>` wrapper in `Index.tsx`.

**Fix:** Increase bottom padding on the pills row to `pb-4` to ensure tap targets aren't clipped, and add `pr-6` after the last pill as scroll padding so the final item is fully visible when scrolled to the end. Also add `scroll-padding` via style for smooth snapping.

## Page-Level Overflow (Index.tsx)
The root wrapper has `overflow-x-hidden` which can clip elements that extend to edges. This is fine for preventing horizontal scroll but can interact badly with scrollable sub-containers.

**No change needed here** — the fixes above keep content within bounds while ensuring full visibility.

## Changes

**`src/components/Services.tsx`** — Tab bar container:
- Add `pb-2 -mx-6 px-6 md:mx-0 md:px-0` to match Portfolio's mobile scroll pattern
- Ensures tabs are fully tappable and the gold indicator isn't clipped

**`src/components/Portfolio.tsx`** — Filter pills:
- Change `pb-2` to `pb-4` for more breathing room
- Add `after:content-[''] after:flex-none after:w-6` or simply ensure right padding is sufficient for the last pill to scroll fully into view

