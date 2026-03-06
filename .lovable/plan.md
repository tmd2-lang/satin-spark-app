

## Plan: Fix Navbar Hover Bug, Cursor Accessibility, Delete Dead Code, Remove Unused UI Components

### 1. Fix Navbar hover class interpolation bug
**Problem:** `hover:${textBase}` in template literals produces strings like `hover:text-white` at runtime, but Tailwind JIT never sees them statically — so the classes don't get generated.

**Fix:** Replace dynamic hover interpolation with conditional static classes. In `Navbar.tsx`, change all instances of `` `${textDim} hover:${textBase}` `` to use full ternary expressions:
- When `!scrolled && isLightHero`: use `text-[#111114]/60 hover:text-[#111114]`
- Otherwise: use `text-white/60 hover:text-white`

Affects ~3 spots: Services dropdown button, regular links, and hash-link buttons.

### 2. Gate CustomCursor behind prefers-reduced-motion
**Fix in `CustomCursor.tsx`:**
- Add a `useEffect` that listens to `matchMedia('(prefers-reduced-motion: reduce)')` and sets a `prefersReducedMotion` state
- Return `null` when `prefersReducedMotion` is true (same as mobile)
- Change the global style from `* { cursor: none !important; }` to exclude form inputs: `*, *:not(input):not(textarea):not(select) { cursor: none !important; }` — or better, scope it to just restore cursor on inputs: add `input, textarea, select { cursor: auto !important; }`

### 3. Delete App.css
- Delete `src/App.css` (confirmed it's not imported anywhere — pure dead code)

### 4. Remove unused UI components
Based on the import analysis, only these UI components are actually used by the app:
- **Used:** `toaster`, `sonner`, `tooltip`, `toast`, `button` (via carousel internals), `use-toast.ts`

**Files safe to delete** (not imported outside `src/components/ui/`):
`accordion`, `alert-dialog`, `alert`, `aspect-ratio`, `avatar`, `badge`, `breadcrumb`, `calendar`, `chart`, `checkbox`, `collapsible`, `command`, `context-menu`, `dialog`, `drawer`, `dropdown-menu`, `form`, `hover-card`, `input-otp`, `input`, `label`, `menubar`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `select`, `separator`, `sheet`, `sidebar`, `skeleton`, `slider`, `switch`, `table`, `tabs`, `textarea`, `toggle`, `toggle-group`

That's ~40 files. I'll keep: `button.tsx`, `toast.tsx`, `toaster.tsx`, `sonner.tsx`, `tooltip.tsx`, `carousel.tsx`, and the `use-toast.ts` hook.

> Note: `carousel.tsx` imports `button`, `sidebar.tsx` imports several others but sidebar itself is unused. `card.tsx` — let me verify if it's used in the app components before deleting.

Actually, I should do a broader search for any UI component usage in the non-ui source files before bulk deleting. I'll verify `card`, `tabs`, `sheet`, `separator`, `skeleton`, `scroll-area`, `badge`, `accordion`, `dialog`, `drawer`, `form`, `input`, `label`, `select`, `textarea`, `checkbox`, `dropdown-menu`, `popover`, `progress`, `switch`, `table` usage in all component files during implementation.

### Summary
4 changes, no functional impact on the site. Navbar hovers will actually work now, cursor becomes accessible, and ~40 dead files get cleaned up.

