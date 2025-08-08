# Portfolio (React + Vite + TypeScript + Tailwind + shadcn/ui)

A modern, responsive personal portfolio template built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui. It includes light/dark theme support, animated sections, toast notifications, and hash-based navigation.

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3 (with typography, aspect-ratio, animate plugins)
- shadcn/ui (Radix UI + utility components)
- React Router (SPA routing)
- TanStack Query
- Framer Motion (animations)

## Features

- Responsive layout with light/dark theme toggle
- Hash-based section navigation (Home, About, Portfolio, Contact)
- Animated hero, portfolio grid with modal, and contact form validation
- Toast notifications
- SPA routing with a 404 page
- Path aliases (@ -> src)

## Getting Started

Prerequisites:
- Node.js >= 18
- pnpm (recommended) or npm/yarn

Install dependencies:

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

Lint source files:

```bash
pnpm lint
```

## Project Structure

```
Portfolio/
├── index.html
├── package.json
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── pages/
    │   ├── Index.tsx       # Landing page that composes all sections
    │   └── NotFound.tsx    # 404 route
    ├── components/
    │   ├── navbar.tsx
    │   ├── footer.tsx
    │   ├── theme-provider.tsx
    │   ├── theme-toggle.tsx
    │   ├── sections/
    │   │   ├── hero.tsx
    │   │   ├── portfolio.tsx
    │   │   └── contact.tsx
    │   └── ui/             # shadcn/ui components
    ├── hooks/
    └── lib/
```

Path alias: `@/*` -> `./src/*` (configured in `tsconfig.json` and `vite.config.ts`).

## Application Overview

- Entry: `src/main.tsx` mounts `<App />`.
- App shell: `src/App.tsx` wires up ThemeProvider, TooltipProvider, Toast, TanStack Query, and React Router.
- Routes: `/` -> `pages/Index.tsx`, `*` -> `pages/NotFound.tsx`.
- Sections: implemented in `src/components/sections/` and composed by `pages/Index.tsx`.
- Navigation: `components/navbar.tsx` handles hash-based scrolling for section IDs `#home`, `#about`, `#portfolio`, `#contact`.

## Customization Guide

Content & sections:
- Hero: `src/components/sections/hero.tsx`
  - Update name, tagline, description, and profile image. Place your image at `public/my_pic.png` or adjust the image path.
- Portfolio: `src/components/sections/portfolio.tsx`
  - Edit the `projects` data (title, description, tech, links, images) to showcase your work.
- Contact: `src/components/sections/contact.tsx`
  - Update `contactInfo` (email, phone, social links). The form currently simulates submission and shows a toast.
- Footer: `src/components/footer.tsx`
  - Update social links and display name/year.

Styling & theme:
- Tailwind configuration: `tailwind.config.ts`
- Global styles: `src/index.css`
- Theme: `components/theme-provider.tsx` and `components/theme-toggle.tsx`

UI components:
- Prebuilt shadcn/ui components are available under `src/components/ui/`.

Routing & navigation:
- SPA routing via `react-router-dom`.
- Hash links are handled in `pages/Index.tsx` and `components/navbar.tsx` for smooth scrolling with offset.

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build production assets
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Lint `src` with ESLint

## Deployment

This is a static SPA build output (`dist/`) that can be deployed on any static host:
- Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.

Typical workflow:
- Run `pnpm build`
- Upload the `dist/` folder to your host (or link your repo and configure the host to run the build command).

## Notes

- Ensure Node >= 18 to satisfy Vite 5 requirements.
- Path alias `@` is configured in both Vite and TypeScript.
- Place any static assets (images, icons) in `public/` for direct access via `/asset-name.ext`.

## Acknowledgements

- shadcn/ui
- Radix UI
- Tailwind CSS
- Vite
- React

## License

No license specified.
