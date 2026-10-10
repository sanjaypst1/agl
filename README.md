# Risk Solutions in Action

Professional case-study portfolio for **Sanjay Singh Rawat** — Senior Risk Solutions Lead | Risk Technology, Data and Transformation Delivery.

This is an independent portfolio. It is **not affiliated with or endorsed by** any current or former employer. Employer names describe verified professional experience only. Case studies are sanitised.

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- GSAP / ScrollTrigger
- React Three Fiber + Three.js
- Recharts-ready architecture, Lucide icons, Zod + React Hook Form
- Vitest + GitHub Actions

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run typecheck` | TypeScript |
| `npm run lint` | ESLint |
| `npm run test` | Vitest |
| `npm run build` | Production build |
| `npm run validate` | typecheck + lint + test + build |

## Routes

- `/` Overview — three questions, five reporting products, flagship UBS story
- `/case-studies` Five-product explorer + all reporting products
- `/case-studies/[slug]` Detailed reporting-product narratives
- `/delivery-method` 20-phase lifecycle + controlled self-service maturity
- `/risk-data-reporting` Risk knowledge, failure modes, investigation lab
- `/technology` Power BI / SQL / Databricks boundaries + transferability
- `/walkthrough` 10-minute executive walkthrough
- `/role-alignment` Capability mapping
- `/experience` `/evidence` `/about` `/project` `/contact` `/privacy` `/accessibility`

## Evidence sources

Structured content is grounded in Sanjay’s CV, the Senior Risk Solutions Lead position description, and the approved interview narrative documents (three central questions + full script). See `docs/EVIDENCE_REGISTER.md` and `docs/DISCOVERY.md`.

## Content editing

Structured content lives in `src/content/`. Update case studies, capabilities and interview questions there rather than hardcoding copy into components.

## Evidence and confidentiality

See `/evidence` and `docs/DISCOVERY.md`. Synthetic investigation data is labelled. Outcome metrics remain tied to their source case studies.

## Deployment

**Preferred: Vercel**

1. Push this repository to GitHub
2. Import the project in Vercel
3. Set environment variables from `.env.example`
4. Deploy

**GitHub Pages (optional)**

Uncomment static export settings in `next.config.ts`, then publish the `out` directory. Image optimisation must remain unoptimized for static export.

## Indexing control

Set `NEXT_PUBLIC_NOINDEX=true` until the owner is ready for public search indexing.

## Live URL

Deployment URL to be added after the first successful production deploy.
