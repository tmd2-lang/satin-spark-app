

## Portfolio Section Update

**Goal**: Reduce portfolio from 3 cards to 2, remove Dr. Chen Aesthetics, and prepare both remaining slots for new content.

### Changes to `src/components/Portfolio.tsx`:

1. Remove the "Dr. Chen Aesthetics" project from the `projects` array
2. Keep two placeholder entries (Luminare and FORMA) — names/images will be swapped later when you provide the real content
3. Update grid from `grid-cols-3` to `grid-cols-2` on desktop so the two cards fill the space properly
4. Remove filter pills entirely (with only 2 projects, filtering adds no value)
5. Remove the unused `filters` array and `activeFilter` state

### Layout
- Two equal-width cards side by side on desktop, stacked on mobile
- Larger card size since we're going from 3 to 2 columns — more visual impact

