# Aluminum Plant Screens — Implementation Plan

## Overview

The current `screens/` folder contains 10 HTML screens, all themed for the **Zinc Plant** (Hindustan Zinc). This plan details how to replicate every screen for the **Aluminum Plant** division of Vedanta, producing a parallel set of 10 screens in `screens/aluminum/`.

---

## What Changes: Zinc → Aluminum

All screens share a common structural shell (sidebar + header + content). The differences are **purely data/content** — the design system, CSS variables, layout patterns, and JS behavior remain identical. The following substitutions apply globally:

| Zinc (Current) | Aluminum (Target) |
|---|---|
| **Plant name** | Zinc Plant → Aluminium Plant |
| **Cost centers** | Mining Ops, Smelter Unit, Power Plant, Ore Processing | Pot Room Operations, Carbon Plant, Calcination Unit, Alumina Refinery, Casthouse, Rolling Mill |
| **Key raw materials** | Zinc ore, sulphuric acid, lead | Bauxite, caustic soda, cryolite, aluminium fluoride |
| **Energy driver** | HSD (diesel) per MT of zinc | Power (kWh) per MT of aluminium |
| **Production metric** | MT of Zinc produced | MT of Aluminium produced |
| **Budget line items** | Blasting, mining, concentration | Smelting, potroom ops, anode baking, casting |
| **Sample amounts** | Calibrated to Zinc spend scale | Recalibrated to Aluminium spend scale (slightly higher CapEx-heavy) |
| **Requestor names** | Keep realistic Indian names, different set | Use a fresh realistic set (e.g., Kavya Nair, Arvind Pillai, etc.) |
| **GL codes / cost center codes** | e.g., CC-ZN-001 | e.g., CC-AL-001 |
| **Page titles / sidebar labels** | "Zinc Plant" | "Aluminium Plant" |
| **Sidebar active module** | Same structure | Same structure |

---

## Target Folder Structure

```
screens/
  aluminum/
    dashboard.html
    budgeting_application.html
    request-form.html
    validation-panel.html
    approval-queue.html
    analytics-dashboard.html
    audit-logs.html
    app-shell.html
    design-system-preview.html
    login.html
```

All files import the shared design system via a **corrected relative path**:
- From `screens/aluminum/`, the path to `assets/css/design-system.css` is `../../assets/css/design-system.css`

---

## Screen-by-Screen Plan

### 1. `login.html`
**Source:** `screens/login.html`

**Changes:**
- Update subtitle/tagline: "Zinc Plant · Budget Planning & ACT" → "Aluminium Plant · Budget Planning & ACT"
- Update any plant-specific logo text or plant reference in subheading
- Credentials hint (if any) can remain generic

**Data fixtures:** None — login is plant-agnostic.

---

### 2. `app-shell.html`
**Source:** `screens/app-shell.html`

**Changes:**
- Sidebar plant label: "Zinc Plant" → "Aluminium Plant"
- User profile name in header: use an Aluminium Plant persona (e.g., "Ramesh Iyer, Finance Controller — Aluminium")
- All nav links remain identical in structure
- Any breadcrumb showing "Zinc" → "Aluminium"

**Data fixtures:** Minimal; this is a layout reference file.

---

### 3. `design-system-preview.html`
**Source:** `screens/design-system-preview.html`

**Changes:**
- Page heading: "Vedanta Design System — Aluminium Plant"
- Any sample text mentioning "Zinc" → "Aluminium"
- Sample cost center chips: use Aluminium cost centers (Pot Room, Carbon Plant, etc.)
- Sample financial amounts can stay the same order of magnitude

**Data fixtures:** Design tokens are shared — no CSS changes needed.

---

### 4. `dashboard.html` *(Finance Controller / Leadership home)*
**Source:** `screens/dashboard.html`

**Changes:**
- Page title / header: "Aluminium Plant — Budget Control Dashboard"
- All KPI cards: recalibrate amounts
  - Total Budget: ₹4,850 Cr (vs Zinc's ~₹3,200 Cr — Aluminium is more CapEx-heavy)
  - Consumed: ~₹2,100 Cr
  - Remaining: ~₹2,750 Cr
  - Approvals Pending: 7
- Purchase Requisition table: refresh with Aluminium cost centers and requestors
  - Cost centers: Pot Room Operations, Carbon Plant, Alumina Refinery, Casthouse
  - Requestors: Kavya Nair, Arvind Pillai, Meena Krishnamurthy, Suresh Babu
  - Descriptions: "Anode paste procurement", "Bauxite handling conveyor repair", "Cryolite top-up — Cell 14–18", "Power transformer maintenance"
  - Supporting docs: PO copies, safety clearances, vendor quotes
- Budget allocation chart: replace Zinc categories (Mining, Smelter, Power) with Aluminium categories (Potroom, Carbon Plant, Refinery, Casthouse, Rolling Mill)
- Spend trend chart: same shape, different data labels
- Alerts/notifications: reference Aluminium-specific items ("Potroom overrun ₹12 Cr", "Bauxite inventory variance alert")

**Data fixtures:**
```
Cost Centers: CC-AL-001 (Pot Room), CC-AL-002 (Carbon Plant), CC-AL-003 (Alumina Refinery), CC-AL-004 (Casthouse)
Budget Year: FY 2025–26
```

---

### 5. `budgeting_application.html`
**Source:** `screens/budgeting_application.html`

**Changes:**
- Plan Visage header: "Aluminium Plant — Budget Planning"
- Budget line items in the planning table:
  - Remove: Mining Ops, Ore Concentration, Blasting, Acid Plant
  - Add: Pot Room Operations, Anode Baking, Alumina Procurement, Casthouse & Casting, Rolling Mill, Power (smelting)
- Cost drivers:
  - Power: kWh per MT aluminium (replace diesel/MT zinc)
  - Alumina: MT per MT aluminium (Bayer process feed ratio ~2:1)
  - Labour: headcount × shift cost
- Version labels: "FY26-AL-Base", "FY26-AL-Revised"
- GL codes: update to AL-series (e.g., GL-AL-5200, GL-AL-5300)
- What-if panel: change scenario variables to Aluminium-relevant (power tariff change, alumina spot price, production volume)

**Data fixtures:**
```
Total Budgeted: ₹4,850 Cr
Potroom Operations: ₹2,100 Cr (largest — power-intensive)
Carbon Plant: ₹480 Cr
Alumina Refinery: ₹850 Cr
Casthouse: ₹320 Cr
Rolling Mill: ₹750 Cr
Overheads & Others: ₹350 Cr
```

---

### 6. `request-form.html`
**Source:** `screens/request-form.html`

**Changes:**
- Form heading: "Raise Spend Request — Aluminium Plant"
- Cost center dropdown: Aluminium cost centers (CC-AL-001 through CC-AL-006)
- Budget line dropdown: Aluminium GL codes
- Auto-populated "Budget Available" field: recalibrated amounts
- Sample pre-filled data (for prototype realism):
  - Request: "Procurement of prebaked anodes — Q2 supply"
  - Amount: ₹3,75,00,000
  - Cost Center: Pot Room Operations (CC-AL-001)
  - GL: GL-AL-5210 (Anode & Carbon consumables)
  - Vendor: Hindalco Carbon Suppliers Pvt. Ltd.
- Safety/legal approval checkbox labels can stay the same
- Budget preview panel: show Aluminium GL remaining budget

**Data fixtures:**
```
Budget available for GL-AL-5210: ₹4,80,00,000
Request amount: ₹3,75,00,000
Remaining after request: ₹1,05,00,000
% consumed: 78%
```

---

### 7. `validation-panel.html` *(Hero / Differentiator Screen)*
**Source:** `screens/validation-panel.html`

**Changes:**
- Header: "ACT Validation — Aluminium Plant"
- Request reference: "REQ-AL-2025-0142"
- Validation checks recalibrated for Aluminium context:
  - Budget check: GL-AL-5210 has ₹4.8 Cr available; request ₹3.75 Cr → PASS
  - Policy check: Anode procurement >₹1 Cr requires CFO endorsement → WARN
  - SoD check: Requestor ≠ Approver → PASS
  - Vendor blacklist check: vendor not flagged → PASS
  - Prior year variance: similar spend in FY25 ₹3.2 Cr → within 20% → PASS
- ACT Validation Score: 87/100 (amber — due to CFO endorsement flag)
- AI Recommendation: "Request is within budget. Recommend CFO sign-off on vendor terms given >15% price increase vs FY25. Suggest What-If simulation for alternative anode supplier."
- What-If modal: "If power tariff rises 8%, potroom opex increases ₹68 Cr — request still budgetarily safe."

**Data fixtures:**
```
Request: REQ-AL-2025-0142
Requestor: Kavya Nair
Amount: ₹3,75,00,000
GL: GL-AL-5210
Validation score: 87/100
```

---

### 8. `approval-queue.html`
**Source:** `screens/approval-queue.html`

**Changes:**
- Header: "Approval Queue — Aluminium Plant"
- Approver persona: "Arvind Pillai, VP Finance — Aluminium"
- Queue items: Aluminium-specific requests
  - REQ-AL-2025-0142 — Anode procurement — ₹3.75 Cr — Kavya Nair — Pending
  - REQ-AL-2025-0138 — Bauxite handling capex — ₹1.2 Cr — Suresh Babu — Pending
  - REQ-AL-2025-0135 — Power transformer — ₹85L — Meena Krishnamurthy — Approved
  - REQ-AL-2025-0131 — Cryolite top-up — ₹28L — Arvind Das — Rejected
- Detail drawer: show REQ-AL-2025-0142 by default, with Aluminium validation data
- Approve/Reject/Escalate buttons: no change in behavior

**Data fixtures:**
```
4 items in queue (2 pending, 1 approved, 1 rejected)
Total pending value: ₹4.95 Cr
```

---

### 9. `analytics-dashboard.html` *(Eval 360)*
**Source:** `screens/analytics-dashboard.html`

**Changes:**
- Title: "Eval 360 — Aluminium Plant Analytics"
- KPI tiles: Aluminium-scale figures
  - Annual Budget: ₹4,850 Cr
  - YTD Actuals: ₹2,104 Cr
  - Forecast: ₹4,720 Cr
  - Variance: -₹130 Cr (2.7% under)
- Budget vs Actuals chart: Aluminium cost center breakdown
- Burn rate chart: potroom dominates (~43% of total spend)
- Vendor spend panel: top vendors in Aluminium (bauxite suppliers, anode suppliers, power utilities)
- Anomaly alerts: "Carbon Plant overspent by ₹18 Cr vs plan — Q3 anode price spike"
- Forecast accuracy gauge: 94.2%

**Data fixtures:**
```
Top cost centers by spend:
  Pot Room: ₹920 Cr YTD
  Alumina Refinery: ₹380 Cr
  Carbon Plant: ₹215 Cr
  Casthouse: ₹140 Cr
  Rolling Mill: ₹449 Cr
```

---

### 10. `audit-logs.html`
**Source:** `screens/audit-logs.html`

**Changes:**
- Header: "Audit Trail — Aluminium Plant"
- All log entries: Aluminium request IDs and actors
- Timeline entries:
  - "REQ-AL-2025-0142 submitted by Kavya Nair"
  - "ACT validation completed — score 87/100"
  - "Routed to Arvind Pillai for approval"
  - "CFO endorsement flag raised by Policy Agent"
  - "Evidence uploaded: Vendor quote, safety clearance"
- Evidence viewer: sample docs are anode procurement quote, safety inspection cert
- Immutable log footer: same wording, Aluminium plant reference

**Data fixtures:**
```
Log period: FY 2025–26 Q1–Q3
Total logged events: 1,847
Requests tracked: 312
```

---

## Implementation Sequence

Execute in this order to maximise shared context and efficiency:

1. **`login.html`** — simplest, no data
2. **`app-shell.html`** — establishes plant identity for all others
3. **`design-system-preview.html`** — update sample chips/labels
4. **`dashboard.html`** — most visible; complex data table
5. **`budgeting_application.html`** — complex GL/line-item data
6. **`request-form.html`** — form data + budget preview
7. **`validation-panel.html`** — hero screen, most nuanced AI content
8. **`approval-queue.html`** — queue data + drawer
9. **`analytics-dashboard.html`** — chart labels + KPIs
10. **`audit-logs.html`** — timeline entries

---

## Global Find-Replace Reference

When creating each file, apply these replacements systematically:

| Find | Replace |
|---|---|
| `Zinc Plant` | `Aluminium Plant` |
| `Hindustan Zinc` | `Vedanta Aluminium` |
| `CC-ZN-` | `CC-AL-` |
| `GL-ZN-` / `GL-ZPL-` | `GL-AL-` |
| `REQ-ZN-` / `REQ-ZPL-` | `REQ-AL-` |
| `Mining Ops` | `Pot Room Operations` |
| `Smelter Unit` | `Carbon Plant` |
| `Ore Processing` | `Alumina Refinery` |
| `Power Plant` | `Casthouse` |
| `MT of Zinc` | `MT of Aluminium` |
| `zinc` (lowercase, non-chemical) | `aluminium` |
| Path `../assets/` | `../../assets/` |

---

## Quality Checklist (per screen)

Before marking a screen complete, verify:

- [ ] No residual "Zinc" or "ZN" references in visible text
- [ ] All cost center codes use the `CC-AL-` prefix
- [ ] All amounts use ₹ with Indian comma notation
- [ ] All numeric/financial figures use `font-family: var(--font-mono)`
- [ ] Relative path to `design-system.css` is `../../assets/css/design-system.css`
- [ ] Sidebar shows "Aluminium Plant" label
- [ ] Page `<title>` tag updated to Aluminium
- [ ] Status colors follow semantic rules (green=approved, amber=pending, red=rejected/over-budget)
- [ ] No lorem ipsum or placeholder text
- [ ] JS interactions (modals, sidebar nav) still work correctly

---

## Out of Scope

- No changes to `assets/css/design-system.css` (shared, plant-agnostic)
- No changes to existing `screens/` Zinc files
- No backend or build system changes
- No Figma export workflow changes (can be run against aluminum folder independently)
