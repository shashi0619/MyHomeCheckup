<!-- Copilot / AI agent instructions for contributors -->
# HydCivil — Copilot instructions

Summary
- Stack: Next.js 15 (App Router), React 19, TypeScript (strict), Tailwind CSS v4, pnpm. Dev server uses Turbopack (see `package.json` -> `dev`).
- Repo layout: `app/` (routes + root layout), `components/` (feature-grouped components), `public/images` (static assets).

Key points an AI should know before editing
- App router: route files live under `app/<route>/page.tsx` and `app/layout.tsx` is the global layout. Most pages use server components by default — add `"use client"` at the top for client components.
- Path alias: imports use `@/...` (configured in `tsconfig.json` -> `paths`). Example: `import Home from "@/components/Home/Home"`.
- Global providers: `components/HOC/Provider.tsx` wraps the app (it uses `next-themes` ThemeProvider). When changing theme behavior, update this file and `components/Helper/ThemeToogler.tsx`.
- Styling: global Tailwind setup lives in `app/globals.css`. Follow utility-first Tailwind classes; watch for global font usage in `app/layout.tsx` (next/font/google).

Conventions & patterns (concrete)
- Feature folders: components are grouped by feature (e.g., `components/Home/`, `components/Blog/`). Add new UI pieces to the appropriate feature folder using PascalCase filenames.
- Client vs Server: Default is server. If a component uses browser APIs, lifecycle hooks, or state, add `"use client"` at the top and keep it small.
- Static assets: put images in `public/images/` and reference them with `/images/<name>` or via Next.js Image when needed.
- Theme & UI state: theme logic lives with `next-themes` provider in `Provider.tsx` and toggler in `components/Helper/ThemeToogler.tsx` (note the spelling). Prefer reusing the existing toggler.

Build / dev / lint workflows
- Install (pnpm is recommended since lockfile is `pnpm-lock.yaml`):
```
pnpm install
```
- Run dev server (uses Turbopack):
```
pnpm dev
```
- Build / start / lint:
```
pnpm build
pnpm start
pnpm lint
```
- Type checks: TS is strict and `noEmit`. To run a standalone type check:
```
pnpm exec tsc --noEmit
```

Dependencies & integration points to be aware of
- next-themes: theme provider + toggler (see `Provider.tsx`).
- aos: animation on scroll library — search components for `AOS` initialization if anim changes are needed.
- react-multi-carousel: used for carousels in project cards/reviews.

Where to look first when changing behavior
- Global layout and providers: `app/layout.tsx` and `components/HOC/Provider.tsx`.
- Main homepage: `app/page.tsx` and `components/Home/Home.tsx`.
- Components grouped by feature under `components/` — check sibling files in the same folder for usage patterns.
- Path alias and TS rules: `tsconfig.json`.

Notes about edits and PRs
- Keep components small and follow the feature-folder pattern.
- Prefer editing existing components over creating duplicates — search for similarly named components first (e.g., `Hero`, `Footer`).
- Ensure no TypeScript errors and run `pnpm lint` before creating a PR.

If a `.github/copilot-instructions.md` already exists, merge: preserve any project-specific commands or pre-existing notes; prefer this file's explicit references to `app/`, `components/`, and `tsconfig.json`.

Contact / feedback
- If anything here is unclear, please ask and point to the file you want the agent to read next (give exact path). 

-- End of instructions
