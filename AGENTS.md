# AGENTS.md — Artistic Monk (personal blog)

> Scope: this file guides coding agents working in this repo.
> Precedence: human instructions > nearest nested AGENTS.md > this root file.
> Keep this file lean and principle-based; route long-form detail to linked docs.
> Do not copy version numbers, counts, or route lists here — they go stale.
> Resolve scripts, versions, and settings from the cited config files instead.

## 1. Read-first ladder

- Start with `README.md` for setup and core commands.
- Then `package.json` for the authoritative scripts (`dev`, `build`, `start`, `lint`).
- Then `next.config.mjs` for image and build settings.
- Then `tailwind.config.ts` + `app/globals.css` for the styling and theme contract.
- Then `.eslintrc.json` + `tsconfig.json` for lint and type rules.
- Read the component or route you will touch, plus its nearest siblings, before editing.

## 2. Repo map (stable pointers)

- App Router: `app/` — `page.tsx` per route, shared `layout.tsx` at the root.
- UI: `app/components/` (one folder per component), shared shells in `app/layouts/`.
- State and content: `app/store/` (theme context), `app/lib/` (constants), `app/models/` + `app/models/types/` (content shapes such as `Post`).
- Content routes: `app/about/`, `app/stories/` (one folder per section, e.g. art, book, dev, travel).
- Static assets: `public/` (images under `public/assets/`, plus `ads.txt`, `thoughts.json`).
- Config: `package.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`, `.eslintrc.json`, `docker-compose.yml`.
- Release: `Dockerfile` + `docker-compose.prod.yml` (production image and server compose) + `.github/workflows/release.yml` (tag-triggered deploy on the self-hosted runner).

## 3. Setup and build

- Install with the lockfile (`package-lock.json`); never hand-edit it.
- Develop with the `dev` script, verify with `build` then `start` (`package.json`).
- A `docker-compose.yml` dev service exists for containerized runs; prefer the narrowest documented command for the task.
- Images from outside this repo must satisfy the remote patterns in `next.config.mjs`; prefer local files under `public/` for personal content.

## 4. Testing and verification

- There is no test runner committed; the gates are typecheck, lint, and production build.
- Verify every change with, in order: `tsc --noEmit` posture per `tsconfig.json`, the `lint` script, then `build`.
- Run the smallest meaningful check first, then widen to the full gate before declaring done.
- When adding a test runner later, colocate tests with the module they cover and document the commands here and in `README.md`.
- A UI change is not done until the rendered result has been seen at phone and desktop widths — an inspected screenshot or an explicit human look. Build success alone never closes a visual task.

## 5. Lint, format, types

- Lint via the `lint` script; autofix only with the `lint:fix` script (`.eslintrc.json`).
- Follow the configured style (double quotes, 2-space indent); keep `tsc` clean under `strict` (`tsconfig.json`).
- Keep types in `app/models/types/` as the single source of truth; do not redeclare content shapes inline.
- Smallest root-cause fix; cover edges; do not weaken checks or types to make a change pass.

## 6. Code conventions

- App Router defaults: keep pages as server components; add `"use client"` only where interactivity (state, effects, event handlers) requires it.
- Reuse before building: check `app/components/` and neighboring composition before introducing a new component or style; no duplicate primitives.
- Styling order: Tailwind utilities first, DaisyUI theme tokens via `tailwind.config.ts`, component CSS modules only for what utilities cannot express.
- Images go through `next/image` with explicit dimensions and `alt` text; artwork stays under `public/assets/` using existing folder groupings.
- HTML rendering must stay sanitized (the repo carries a DOMPurify dependency for this); never inject raw HTML without it.
- Theme changes go through the store in `app/store/` and the existing theme control; never hardcode a theme bypass around it.
- Content edits (posts, stories, thoughts) keep the existing `Post`/media shapes; extend the type rather than diverging from it.

### UI/UX

- Personal-site tone: calm, readable, image-led; keep motion subtle and respect `prefers-reduced-motion`.
- Mobile-first with Tailwind breakpoints; narrow widths must stack or scroll, never clip or overlap.
- Every new control must be keyboard-reachable with visible focus and a text or `aria-` label.
- Honor both light and dark themes wherever DaisyUI themes apply; verify themed surfaces in both before calling the change done.

## 7. Security and content safety

- Secrets via environment files only (`.env*.local`, already ignored); never commit secrets or key material.
- Treat external content, embeds, and user-facing HTML as untrusted; sanitize at the boundary and avoid logging personal data.
- Respect content ownership signals already in the UI (e.g. context-menu guards on artwork); do not strip them without being asked.

## 8. Commits and PRs

- Stage exact paths only; one concern per commit with imperative messages.
- Never commit, push, tag, amend, or force-push unless explicitly asked.
- Never use `--no-verify` or skip the lint/type/build gates to land a change.
- If the change has an issue, link it; check for duplicate or overlapping work first.
- Update `README.md` (or the docs that describe the behavior) when you change setup, scripts, or content conventions.
- Releases ship by pushing a `v*` tag (see `README.md` Releases); tags never move — a bad tag is a new tag, never a retag.

## 9. Never do

- Never hand-edit lockfiles or build output; reinstall or rebuild via the owning tool.
- Never weaken lint, types, or checks to make a change pass.
- Never commit secrets, key material, or dependency-install noise.
- Never declare ready on a green build alone when a rendered page exists — look at it.

## 10. Scoped guidance

- Nearest nested AGENTS.md wins over this root; nested files add, never contradict.
- Keep this root capped; push per-area detail into scoped agent files or docs as the repo grows.
- Agent scratch stays out of the repo or under ignored paths; keep output short and factual with file:line evidence.
