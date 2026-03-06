

# Hero Wave Background Integration

## Summary
Create a warm gold animated wave canvas background for the hero section, replacing the grid pattern. The wave should feel like "liquid gold under dark water" — very subtle and atmospheric.

## Files to Create
- `src/components/ui/dynamic-wave-canvas-background.tsx` — The wave canvas component, adapted from the provided code with:
  - TypeScript types on `canvasRef` and all variables
  - Gold/amber color math replacing blue/purple (high red, medium-low green, very low blue)
  - Slowed animation speed (`time * 0.3` instead of `0.5`)
  - Low overall intensity (~0.15-0.25 range) for subtle shimmer
  - `pointer-events-none` on the canvas element

## Files to Modify
- `src/components/Hero.tsx`:
  - Import and render `HeroWave` as the first child inside the section (behind everything)
  - Remove the grid pattern `motion.div` (the parallax grid line)
  - Keep the existing radial gradient vignette overlay on top of the canvas (tweak if needed for readability)
  - Keep all existing content, animations, and functionality unchanged

## Color Approach
In the render loop, replace the color channels:
- **Red**: `baseVal * 0.8 + goldAccent * 0.6` — dominant warm channel
- **Green**: `baseVal * 0.5 + goldAccent * 0.35` — lower than red for gold tone
- **Blue**: `baseVal * 0.1` — minimal, no cool tones
- Overall intensity multiplied by ~0.18 to keep it very subtle

