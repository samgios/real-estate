# Italy Deal #1 — Decision tools

Single app with sidebar: **Overview**, **Region scorecard**, **Budget calculator**, and **Compliance checklist**. Built with Vite, React, Tailwind, and shadcn/ui.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Convex (backend)

The app can use a [Convex](https://convex.dev) backend for real-time data. To hook up a new Convex project:

1. **One-time setup** (from the `app/` directory):
   ```bash
   npx convex dev
   ```
   Log in with GitHub when prompted; this creates a Convex project, adds `convex/_generated/`, and writes `VITE_CONVEX_URL` to `.env.local`.

2. **Restart the dev server** so it picks up `.env.local`. The app will then run with Convex connected.

3. **Vercel:** In the project’s Environment Variables, add `VITE_CONVEX_URL` with the Convex deployment URL (from the Convex dashboard or `npx convex dev` output).

Without `VITE_CONVEX_URL`, the app still runs using local/static data only.

## Build

```bash
npm run build
```

Output in `dist/`.

## Structure

- **Sidebar:** Navigation between Overview, Region scorecard, Budget calculator, Compliance checklist.
- **Overview:** Short intro and cards linking to each tool.
- **Region scorecard:** Sortable, filterable table; expand rows for details; export CSV.
- **Budget calculator:** Purchase + reno + transaction % + FX → total EUR/CAD; optional ADR/occupancy for gross yield.
- **Compliance checklist:** Italy (pre-launch) and Canada (ongoing); state saved in `localStorage`.

Data and copy match the standalone HTML tools in `docs/tools/` and research in `docs/`.
