

# Fix: Make the Hero Wave Background Visible

## Problem
The wave canvas is rendering but the intensity is too low to see. The current formula produces pixel values in the range of roughly 0-3 out of 255 — essentially black. Combined with the dark radial gradient overlay on top, the wave is invisible.

## Solution
Increase the intensity multiplier in the render loop from `0.18` to something like `0.5`, and boost the color channel values so the gold shimmer is actually visible. Also ensure the dark vignette overlay isn't fully covering the center where the wave should be seen.

### File: `src/components/ui/dynamic-wave-canvas-background.tsx`
- Change `intensity = 0.18 * (0.3 + 0.4 * wave)` to `intensity = 0.5 * (0.3 + 0.5 * wave)` — this raises the brightness from near-zero to a subtle but visible shimmer
- Boost color channel multipliers slightly: red `baseVal * 1.0 + goldAccent * 0.8`, green `baseVal * 0.6 + goldAccent * 0.45`, blue `baseVal * 0.15`

### File: `src/components/Hero.tsx`
- Soften the vignette overlay: change the gradient from `transparent_0%,_#09090B_70%` to `transparent_0%,_#09090B_85%` so the wave is visible across more of the viewport before being faded out

