# Logo QA Evidence — RED Rental Reports (2026-07-16)

Task: t_87d5025e — Add official BIG STORY logo to both RED rental report pages.

## Logo source (official identity, not redesigned)
- Badge geometry: `filmwithbigstory/react-site/src/app/icon.svg` (dark `#08080A` rounded rect,
  serif "B" `#FAFAF7`, gold `#C9A227` dot), doubled to 64px viewBox.
- Wordmark: `filmwithbigstory/react-site/src/components/Nav.tsx` (`BIG·STORY`, gold middot,
  Georgia serif). Gold token `#c9a227` confirmed in main site `globals.css`.
- Reproduced as vector `public/bigstory-logo.svg` (transparent bg) for print sharpness.

## Files in this folder
- `print_delivery-handover.pdf` / `print_post-rental-return.pdf` — real Print/Save-as-PDF
  output generated via headless Chromium (Playwright) with `printBackground:true` and
  `@media print` + `print-color-adjust: exact`.
- `pdf1_*.png` — page 1 of each PDF rasterized at 150 dpi (pdftoppm).
- `screen_*.png` — full-page screen screenshots.
- `screenshot_*_header.png` — header-region screenshots.

## Verification results (both routes identical)
Live URL: https://red.filmwithbigstory.com/rental-agreements/{delivery-handover,post-rental-return}

| Check | Result |
|---|---|
| HTTP status (both routes) | 200 |
| `/bigstory-logo.svg` HTTP status | 200 (1095 bytes) |
| Logo in DOM (`document.images.length`) | 1 (was 0) |
| `img.naturalWidth/Height` | 264×64 (loaded OK, not broken) |
| Console JS errors | 0 |
| Print media: `display` / `visibility` | block / visible (not hidden/clipped) |
| Print media: `print-color-adjust` | exact |
| **PDF raster analysis (page-1 header band)** | |
| — dark badge pixels (#08080A region) | 5856 px (10.47%), bbox 278×71 |
| — gold accent pixels (#C9A227) | 84 px, tight cluster |
| — verdict `logoInPrintPDF` | **true** |

The dark badge occupies a clean 278×71px bounding box and gold `#C9A227` pixels
form a tight cluster in the wordmark area — the official mark is rasterized in
the PDF header on both pages.

## Production deployment
- Project: `big-story/red-rental` (id `prj_mpa3anNvIiXuuNJ6rdFIRdbyUix0`)
- New prod deploy: `red-rental-4q0ld2m70` (id `dpl_uc68ooy3fzUwkUj4dpm8SC4jezdW`)
- Aliased to: `red.filmwithbigstory.com` (confirmed via alias inspect)

## Rollback
Roll back to prior known-good RED prod deploy (pre-logo, 4 days old):
`red-rental-7xwcvr32j-big-story.vercel.app` (no alias; reassign
`red.filmwithbigstory.com` to it via `vercel alias set <url> red.filmwithbigstory.com`).
Note: the 12-min-prior deploy `red-rental-no75a2vvy` also carried the logo but
shipped an erroneous `llms.txt` (fabricated equipment list); the new deploy
`red-rental-4q0ld2m70` supersedes both and reverts that stray change.
