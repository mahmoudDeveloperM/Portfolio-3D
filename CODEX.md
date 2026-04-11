# CODEX Project Notes

> Note: This file documents the earlier 2D version updates.  
> 3D version upgrades are documented in `CODEX-3D.md`.

## What was improved

This portfolio was enhanced in these areas:

1. SEO optimization
2. UI/visual redesign
3. Smooth scrolling and better scrollbar styling
4. Content updates (new project entries)
5. Technical cleanup and accessibility improvements

## Files updated

- `index.html`

## Files added

- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`

## SEO updates applied

- Improved `meta` tags:
  - stronger `description`
  - richer `robots` directives
  - Open Graph image alt text
  - Twitter image alt text
  - `theme-color`
- Added/updated canonical and sitemap link references
- Added JSON-LD structured data:
  - `Person`
  - `WebSite`
  - `ItemList` for featured projects
- Added crawler support files:
  - `robots.txt`
  - `sitemap.xml`
  - `site.webmanifest`

## Design and UX updates

- Reworked color system to a warmer, more intentional palette
- Updated typography (non-default expressive font pairing)
- Improved hero and section styles
- Sticky header/nav behavior
- Better card styling for skills/projects
- Added skip link for accessibility
- Active nav highlighting based on scroll position

## Scrolling and performance improvements

- Smoother anchor scrolling
- Scroll logic optimized with `requestAnimationFrame` throttling
- Reduced motion support via `prefers-reduced-motion`
- Custom themed scrollbar styling for modern browsers

## Content updates

- Added `YouLearnt` project:
  - URL: `https://youlearnt.com/en`
- Added YouLearnt to JSON-LD `ItemList` as a featured project

## Notes

- Google verification file remains in place:
  - `google3907fba4b86f5119.html`
- `cv.pdf` is included and referenced by the portfolio.

## Publish checklist

1. Confirm GitHub auth is correct
2. Run:
   - `git add -A`
   - `git commit -m "Update portfolio SEO and design"`
   - `git push origin main`
3. Verify live pages:
   - `/`
   - `/sitemap.xml`
   - `/robots.txt`
   - `/site.webmanifest`
