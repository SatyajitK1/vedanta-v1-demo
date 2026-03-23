# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Is

A **frontend-only design prototype** for the Vedanta Budget Planning & Assurance Control Tower (ACT) — an enterprise financial governance system. The output is high-fidelity HTML/CSS/JS screens for presentation/Figma import. There is no backend, no build system, and no package.json.

## Screens & Files

All screens live in `screens/`. The shared stylesheet is `assets/css/design-system.css`. Every screen imports the design system via a relative path.

| File | Purpose |
|---|---|
| `screens/design-system-preview.html` | Living style guide — verify components before editing screens |
| `screens/app-shell.html` | Shared layout reference (sidebar + header + content area) |
| `screens/dashboard.html` | Finance Controller / Leadership home |
| `screens/request-form.html` | Requestor flow — raise a spend request |
| `screens/validation-panel.html` | ACT engine output — hero/differentiator screen |
| `screens/approval-queue.html` | Approver flow — queue + detail view |
| `screens/analytics-dashboard.html` | Eval 360 — leadership analytics |
| `screens/audit-logs.html` | Immutable audit timeline + evidence viewer |

## Viewing Screens

Open any `.html` file directly in a browser — no server needed. For live editing, use VS Code Live Server or similar.

## Figma Export Workflow

`export-to-figma.js` uses Playwright + `@builder.io/html-to-figma` to convert each screen into a Figma-importable JSON, saved to `figma-exports/`. The Figma plugin at `figma-plugin/` (manifest + `code.js`) imports those JSONs into Figma.

To run the export (requires Node + Playwright installed):
```bash
node export-to-figma.js
```

## Design System Rules (apply to every screen)

**Brand Colors** (from `assets/css/design-system.css` CSS variables):
- Primary: `--color-kpmg-blue: #00338D` — headers, sidebar, primary actions
- Secondary: `--color-medium-blue: #005EB8` — hover states, active indicators
- Accent: `--color-light-blue: #0091DA` — links, info badges, chart accents
- Violet/Purple/Teal used sparingly for chart series and highlights

**Semantic Status Colors** — never deviate:
- Green (`--color-success`) → Approved / Within Budget / Passed
- Amber (`--color-warning`) → Pending / At Risk / Warning
- Red (`--color-danger`) → Over Budget / Policy Violation / Rejected

**Financial Data Formatting:**
- Always use Indian Rupee symbol: ₹
- Indian comma notation: ₹12,50,000 (not ₹1,250,000)
- Use `--font-mono` (`JetBrains Mono`) for numeric/financial figures

**Layout:**
- Sidebar (240px) + top header + content area — replicate the app-shell structure
- 4px spacing base scale (`--space-1` through `--space-16`)
- White/gray-50 content backgrounds; color used for meaning, not decoration

## Key Design Constraints

- **No lorem ipsum, no placeholders** — all data must be realistic (Indian Rupee amounts, real cost center names: Mining Ops, Smelter Unit, Power Plant)
- **Target viewport:** 1440px+ desktop; sidebar collapses on narrow viewports
- The validation panel (`validation-panel.html`) is the "hero" differentiator screen — it must prominently show the ACT validation score, check results, AI recommendation, and What-If button
- All interactive JS (budget preview updates, What-If modal, approve/reject confirmation dialogs, sidebar navigation) is vanilla JS inline in each HTML file

## Source of Truth Documents

| Doc | Location | Use for |
|---|---|---|
| Product architecture | `docs/product_decription.md` | Modules, user flows, AI agents, governance model |
| Screen hierarchy & personas | `docs/master_plan.md` | Which screens serve which persona, design principles |
| KPMG brand guidelines | `docs/design.md` | Color system, typography rules, layout patterns |
| Full execution spec | `docs/visual_design_plan.md` | Exact per-screen requirements and quality criteria |
