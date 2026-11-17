# Artistic Monk

Personal blog and portfolio website. Art gallery, book notes, dev blog,
travel stories, and short-form thoughts — built with Next.js (App Router),
Tailwind CSS, and DaisyUI.

## Sections

- Home — hero, about, and artwork portfolio grid.
- About (`/about`) — author intro.
- Stories (`/stories`) — `art`, `book`, `dev`, `travel` subsections, including
  a dev blog.
- Thoughts — short-form posts rendered as cards (content sanitized before render).

## Tech stack

See `package.json` for the exact dependency set. The building blocks are:

- Next.js with the App Router (`app/` directory, `page.tsx` per route)
- React with TypeScript (`strict`, see `tsconfig.json`)
- Tailwind CSS + DaisyUI for styling and themes (see `tailwind.config.ts`)
- MUI icons/material for UI primitives where needed
- Vercel Analytics for traffic insights

## Prerequisites

- Node.js (see `docker-compose.yml` for the reference image) and npm.

## Setup

```bash
# install dependencies
npm install

# start development server (http://localhost:3000)
npm run dev

# production build + serve locally
npm run build
npm run start
```

With Docker:

```bash
docker compose up
```

## Scripts

Resolves from `package.json` — the authoritative list. Currently:

| Script      | Purpose                                  |
| ----------- | ---------------------------------------- |
| `npm run dev`   | Start the development server         |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Lint (`next lint`, see `.eslintrc.json`) |

## Project structure

```text
app/               App Router pages, components, and content
  components/      Reusable UI (one folder per component)
  layouts/         Shared page shells
  lib/             Constants and helpers
  models/types/    Content shapes (e.g. Post)
  store/           Theme context
  about/           About page
  stories/         art, book, dev, travel sections
public/
  assets/          Images and artwork
  ads.txt          Ad-network verification
  thoughts.json    Local thoughts fallback/data
```

Styling entry points: `app/globals.css`, `tailwind.config.ts`.
Build/image settings: `next.config.mjs`.

## Content notes

- Artwork lives under `public/assets/` grouped by existing folders; reference it
  via `next/image` with explicit dimensions and `alt` text.
- External images must match the remote patterns in `next.config.mjs`;
  prefer local assets for personal content.
- Any raw HTML rendered into pages must go through the sanitizer — never inject
  unsanitized HTML.
- Theme behavior flows through `app/store/` and the existing theme control.

## Releases

The site runs in Docker on a self-hosted server, reached via a Cloudflare
tunnel that points at the app port. To release: push a version tag
(`v*`, e.g. `v0.2.0`) — [.github/workflows/release.yml](./.github/workflows/release.yml)
rebuilds and restarts the app on the server through a self-hosted runner
(label `artisticmonk-release`), then health-checks the homepage. A manual
redeploy of any ref is available under Actions → release → Run workflow.
Production images build from [Dockerfile](./Dockerfile) via
[docker-compose.prod.yml](./docker-compose.prod.yml); local dev stays on
`docker-compose.yml`.

## Working on this repo

Coding agents: read [AGENTS.md](./AGENTS.md) first. For everyone: run lint and a
production build before opening a PR, and check changed pages at phone and
desktop widths in both light and dark themes.
