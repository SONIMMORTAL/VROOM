# Interstate Connections

A responsive CDL training and admissions site built with Next.js 16 and React 19. The production build exports static files for GoDaddy or another static host.

## Develop and preview

```sh
npm ci
npm run dev
```

To build and preview the deployable site:

```sh
npm run build
npm start
```

Open http://localhost:3000. Upload the **contents** of `out/` to the hosting document root. Keep `_next/`, `privacy/`, and all image files together. No Node.js server or image optimization service is needed on the host. The build downloads the Google font once; visitors receive the bundled font from the site.

## Quality checks

```sh
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

The browser suite previews `out/` on port 4173. It checks navigation, contact links, program selection, schedules, form validation and mocked provider responses, mobile widths, keyboard navigation, privacy, and automated WCAG accessibility rules. It never sends a real inquiry. If using an existing Chromium installation, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable.

## Public domain and social sharing

The public domain is **https://www.interstateconnections.co**. Canonical links, Open Graph and Twitter images, structured data, robots.txt, and the sitemap use this address. `NEXT_PUBLIC_SITE_URL` may override it for a different deployment. The social image is at `public/social-preview.png`.

## Dependency security

Next.js and its ESLint configuration are pinned to 16.4.2. An unused shadcn CLI was removed and compatible transitive fixes applied. The local preview server uses patched compression. Five remaining audit entries are the same upstream `braces` advisory propagated through the development-only Next.js ESLint plugin; the registry offers no compatible fix. Do not apply the suggested forced downgrade to Next.js 14. Production dependencies are audited separately.

## Content and admissions

- Shared business contact details: `src/lib/site.ts`.
- Public phone: **(845) 383-1299**; telephone links use `tel:+18453831299`.
- Tuition and schedules retain the prior site's published values. Admissions should confirm current prices, inclusions, funding eligibility, and availability before launch.
- Inquiries use the existing FormSubmit endpoint and admissions inbox. The interface validates required details, records explicit contact permission, checks the provider's success response, times out stalled requests, and preserves entries on failure.
- FormSubmit inbox activation and real delivery must be verified by the account owner. Automated tests intercept requests; they do not establish deliverability.
- The inquiry privacy notice explains the fields collected, the processing provider, and how to contact admissions. Confirm the notice matches actual business practices.

## Visual assets

New generated hero and Class B illustrations are optimized and stored in `public/`. Existing source assets remain intact. See `docs/asset-notes.md` for generation prompts and provenance. The hero and program illustrations are aspirational imagery, not photographs of the school's actual fleet.
