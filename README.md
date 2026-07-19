# Portfolio

Personal portfolio website built with Angular 22, featuring server-side rendering (SSR) with prerendered routes. It showcases projects, work experience, open-source repos, and daily coding exercises.

## Tech stack

- **Framework**: Angular 22 (standalone components, lazy-loaded routes, signals)
- **SSR**: `@angular/ssr` with an Express server; all routes are prerendered
- **Styling**: SCSS, Bootstrap 4, AOS (animate-on-scroll)
- **Tooling**: Angular CLI, Karma/Jasmine (unit tests), TypeScript 6

## Prerequisites

- Node.js **24.x** (see `engines` in `package.json`)
- npm

## Getting started

```bash
npm install
npm start
```

The dev server runs at [http://localhost:4200](http://localhost:4200) and reloads automatically when source files change.

## Available scripts

| Script | Description |
| --- | --- |
| `npm start` | Run the dev server (`ng serve`) |
| `npm run build` | Build the app into `dist/portfolio/` |
| `npm test` | Run unit tests via Karma (coverage enabled) |
| `npm run serve:ssr:portfolio` | Serve the built SSR app with Node/Express |

For a production build, run:

```bash
ng build --configuration production
```

This swaps `src/environments/environment.ts` for `environment.prod.ts` and enables optimization, output hashing, and license extraction.

## Server-side rendering

The build produces both browser and server bundles (`outputMode: "server"` in `angular.json`). After building, start the SSR server with:

```bash
npm run serve:ssr:portfolio
```

The Express server (`src/server.ts`) listens on port **4000** by default (configurable via the `PORT` environment variable), serves static assets from the browser bundle, and renders everything else through `AngularNodeAppEngine`. All five routes are prerendered at build time (`src/app/app.routes.server.ts`).

## Project structure

```
src/
├── app/
│   ├── components/       # One folder per component (home, about, portfolio, repos, dailies, navbar, ...)
│   ├── services/         # ProjectService — exposes site content to components
│   ├── models/           # TypeScript interfaces (Repo, DailyProject, ...)
│   ├── @pipe/            # SafePipe for sanitized URLs
│   ├── app.routes.ts     # Client routes (lazy-loaded)
│   └── app.routes.server.ts  # Server routes (prerender config)
├── db/                   # Static site content (projects, jobs, contact icons, dailies)
├── assets/               # Images, fonts, resume
└── server.ts             # Express SSR server
```

## Editing content

There is no backend — all site content lives in static TypeScript files under `src/db/`:

- `db.ts` — portfolio projects (`db`), work experience (`jobs`), and contact icons (`contactIcons`)
- `dailies.ts` — daily coding exercise entries

To add or update a project, edit the relevant array and drop any new image into `src/assets/images/`.

When adding a new page, register the route in **both** `src/app/app.routes.ts` and `src/app/app.routes.server.ts`.

## Code scaffolding

Generate new components with the Angular CLI:

```bash
ng generate component components/component-name
```

New components are standalone and use SCSS by default (configured in `angular.json`).

## Deployment

The repo includes a `src/_redirects` file (bundled into the build) for SPA redirects on Netlify-style hosts.
