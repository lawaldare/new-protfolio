# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server at http://localhost:4200 (`ng serve`)
- `npm run build` — build to `dist/portfolio/`; use `ng build --configuration production` for the prod build (file-replaces `environment.ts` with `environment.prod.ts`)
- `npm test` — Karma/Jasmine with coverage enabled (note: there are currently no `.spec.ts` files in the repo)
- `npm run serve:ssr:portfolio` — run the built SSR server (`node dist/portfolio/server/server.mjs`, port 4000 or `$PORT`)

Requires Node 24.x (see `engines` in package.json). There is no lint script; `tslint.json` is a legacy leftover.

## Architecture

Personal portfolio site: Angular 22, standalone components (no NgModules), SCSS, with SSR via `@angular/ssr` + Express.

- **Routing**: `src/app/app.routes.ts` lazy-loads every page component via `loadComponent`. Pages: home, about, projects (portfolio), repos, dailies. `src/app/app.routes.server.ts` mirrors these routes with `RenderMode.Prerender` — a new route must be added to both files.
- **SSR**: `src/server.ts` is an Express server wrapping `AngularNodeAppEngine`; entry points are `src/main.ts` (browser) and `src/main.server.ts` (server), wired in `angular.json` (`outputMode: "server"`). Hydration is configured (`provideClientHydration(withNoIncrementalHydration())` in `src/app/app.config.ts`) but the root component sets `ngSkipHydration: "true"`.
- **Data**: all content is static TypeScript data in `src/db/` (`db.ts` exports `db` projects, `jobs`, `contactIcons`; `dailies.ts` holds daily projects), exposed to components through `ProjectService` (`src/app/services/project.service.ts`). There is no backend API — to add/edit portfolio content, edit these files. Entries are often commented out rather than deleted.
- **Components** live in `src/app/components/`, one folder each; models in `src/app/models/`; a `SafePipe` in `src/app/@pipe/`.
- **Browser-only code**: components check `isPlatformBrowser(PLATFORM_ID)` before touching browser APIs (e.g. AOS is dynamically imported and initialized in `AppComponent.ngOnInit` only in the browser). Follow this pattern for anything that can't run during SSR/prerender.
- **Global scripts/styles**: jQuery, Bootstrap 4, Popper, and AOS are loaded globally via the `scripts`/`styles` arrays in `angular.json`, not imported in TypeScript.
- **Deployment artifacts**: `src/_redirects` (Netlify SPA redirect) is included in build assets.
