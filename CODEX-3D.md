# CODEX 3D Project Notes

## What was improved

This 3D portfolio version was upgraded in these areas:

1. SEO and structured metadata
2. Visual redesign (new typography, color direction, layout)
3. Smoother scrolling and custom scrollbar theme
4. 3D background and interaction polish
5. Updated content and clearer project storytelling
6. Accessibility and motion-preference support

## Files updated

- `index.html`

## Files added

- `assets/favicon.svg`
- `assets/social-card.svg`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `CODEX-3D.md`

## SEO updates applied

- New title/description/keywords/canonical URL
- Improved `robots` directives in meta tags
- Added Open Graph fields:
  - `og:site_name`
  - `og:image`
  - `og:image:alt`
- Added Twitter image alt text and preview metadata
- Added sitemap link and manifest link in `<head>`
- Added JSON-LD schema:
  - `Person`
  - `WebSite`
  - `ItemList` for featured projects
- Added crawler support files:
  - `robots.txt`
  - `sitemap.xml`
  - `site.webmanifest`

## Design and UX updates

- New expressive font pairing:
  - `Space Grotesk` (headings)
  - `Manrope` (body)
- New bright gradient visual direction (not dark neon)
- Rebuilt section layout:
  - Hero
  - Capabilities
  - Projects
  - About with animated stats
  - Contact CTA block
- Sticky header with active section highlighting
- Added skip link for keyboard/screen-reader users
- Added reveal animations on section entry

## Scrolling and performance improvements

- Added custom smooth anchor scrolling (eased)
- Added `requestAnimationFrame` scroll throttling for:
  - top progress bar
  - sticky header state changes
- Added custom themed scrollbar styling
- Added `prefers-reduced-motion` behavior:
  - reduced/disabled transitions
  - lighter 3D motion

## 3D updates

- Reworked Three.js background scene with:
  - particle field
  - wireframe torus knot
  - wireframe icosahedron
- Added pointer-based camera parallax
- Added resize-safe rendering and DPR cap for performance

## Content updates

- Refreshed messaging to fit the 3D version (not copied from 2D notes)
- Highlighted new featured project:
  - `YouLearnt` (`https://youlearnt.com/en`)
- Included featured projects:
  - YouLearnt
  - Yaasta Car Services
  - Ideal Stores
  - Portfolio 3D Experience section

## Publish checklist

1. Confirm GitHub auth is correct
2. Run:
   - `git add -A`
   - `git commit -m "Upgrade 3D portfolio SEO, design, and 3D UX"`
   - `git push origin main`
3. Verify live pages:
   - `/Portfolio-3D/`
   - `/Portfolio-3D/sitemap.xml`
   - `/Portfolio-3D/robots.txt`
   - `/Portfolio-3D/site.webmanifest`
4. Validate social preview image:
   - `/Portfolio-3D/assets/social-card.svg`
