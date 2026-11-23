# Decoheron site (Astro)

Requires Node 22.12 or newer.

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # static output in dist/
    npm run preview

## Where things live

    src/data/site.ts          menu, industries list, lorem text (edit here first)
    src/styles/global.css     the only stylesheet: colour tokens at the top, then sections
    src/layouts/Base.astro    <html>, fonts, theme pre-paint script, header and footer
    src/layouts/Page.astro    inner page: header band, body (slot), call to action
    src/components/           Header, Footer, PageHeader, PageBody, Card, Cta, Ornament
    src/pages/                one file per URL (industries/[slug].astro makes all industry pages)
    public/img/               logo-light.png (blue, light mode), logo-dark.png (yellow, dark mode)

## Common jobs

- Add an industry: add a line to `industries` in `src/data/site.ts`. Page, menu, footer link and home chip follow.
- Add a top level page: create `src/pages/name.astro` (copy `about.astro`) and add it to `nav` in `site.ts`.
- Replace placeholder content: pass your own markup into the `Page` slot (see `case-studies.astro`), or edit `PageBody.astro` for the default body.
- Change the palette: the `--` variables at the top of `global.css` (light), and the two dark blocks right below.

## What changed from the single HTML file

- Hash routing became real pages with clean URLs (trailing slashes), so each page can have its own title and be linked or indexed.
- The light, dark and auto choice is now remembered per browser (localStorage), since each page load is separate.
- Class names were made consistent (for example `.ph` is `.page-hero`, `.orn` is `.ornament`, `.stepb` is `.step-edge`, `.has` and `.sub` are `.has-sub` and `.submenu`) and inline styles became classes.
- The unused `.arch` rules were dropped, matching your hero without the symbol.
- Fonts still load from Google Fonts. To self-host, use `@fontsource/josefin-sans` and `@fontsource/lora`.
- The contact form is a placeholder and does not send anything yet (see the TODO in `contact.astro`).
