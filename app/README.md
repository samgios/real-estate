# Italy Deal #1 — Decision tools

Single app with sidebar: **Overview**, **Region scorecard**, **Budget calculator**, and **Compliance checklist**. Built with Vite, React, Tailwind, and shadcn/ui.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

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
