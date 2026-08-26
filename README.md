# Job Matthew M. Bernardo — Portfolio

An evidence-led portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run build
npm start
```

## Structure

- `app/page.tsx` — editorial homepage and section architecture
- `app/projects/[slug]/page.tsx` — statically generated case-study route
- `components/` — navigation, project index, signal mode, contact form, and visual system
- `data/projects.ts` — replaceable placeholder project content and decision narratives
- `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx` — discoverability and fallback routes

## Content notes

Portfolio content is based on `JobMatthewBernardo-Resume.pdf`. Review dates and descriptions in `data/projects.ts` whenever the résumé changes. Replace the placeholder domain and LinkedIn URL before deployment. The contact form demonstrates validation, loading, error, and success states; connect its submit handler to a production form endpoint.

## Design behavior

- Responsive layouts cover small mobile through large desktop.
- Signal Mode condenses the portfolio to its strongest evidence.
- Project filters, mobile navigation, forms, focus states, reduced-motion behavior, skip link, and previous/next routes are functional.
- Visuals are rendered entirely with HTML and CSS; no generated images are required.
