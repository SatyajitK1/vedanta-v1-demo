# Visual Design Execution Plan — Vedanta Budget Planning & ACT

> **Purpose:** This document is a structured prompt for Claude. Read it top-to-bottom and execute each phase sequentially. All design output must be production-grade HTML/CSS/JS pages that look and feel like real, high-fidelity UI screens — not wireframes or mockups.

---

## Context & Source Documents

Before you begin, internalize the following project files. They are the single source of truth for product requirements, architecture, and brand identity:

| Document | Path | What to extract |
|---|---|---|
| Product Description | `product_decription.md` | Modules, user flows, AI agents, governance rules, SAP integration |
| Master Plan | `master_plan.md` | Screen hierarchy, persona flows, design principles, component list |
| KPMG Design Guidelines | `design.md` | Color system, typography, layout patterns, chart styling rules |

---

## Global Design Constraints

Apply these rules to **every** screen you build. Do not deviate.

### Brand Colors (from `design.md`)
- **Primary — KPMG Blue:** `#00338D` (dominant color for headers, sidebars, primary actions)
- **Medium Blue:** `#005EB8` (secondary headers, hover states, active indicators)
- **Light Blue:** `#0091DA` (links, info badges, chart accents)
- **Violet:** `#483698` | **Purple:** `#470A68` | **Light Purple:** `#6D2077` | **Green:** `#00A3A1` — use sparingly for accents, chart series, and highlights
- **Color composition rule:** Maximum 2 brand colors per section, maintain a 40/60 split. White text + white logo on colored backgrounds.

### Semantic Status Colors
- **Green** → Approved / Within Budget / Passed
- **Yellow/Amber** → At Risk / Pending / Warning
- **Red** → Over Budget / Policy Violation / Hard Stop / Rejected

### Typography
- **Headlines:** Use a clean sans-serif (Inter or similar). Bold weight, large size for hierarchy.
- **Body / Subheadings:** Inter or Arial, Regular/Medium weight.
- **Data & Numbers:** Use tabular/monospace numerals for financial figures. Ensure INR (₹) formatting with Indian comma notation (e.g., ₹12,50,000).

### Layout & Tone
- Clean, corporate, premium. Clarity over decoration.
- Dense but organized data grids. Predictable sidebar + content area layout.
- Neutral/white backgrounds to reduce cognitive load. Use color for meaning, not decoration.
- The system must feel **intelligent and trustworthy** — show context, AI reasoning, and risk before asking for decisions.

---

## Personas — Design Every Screen With These Users in Mind

| Persona | Role | Primary Need | Key Screens |
|---|---|---|---|
| **Requestor** | Employee / Manager | Raise spend requests quickly, see budget availability | Request Form, Budget Preview |
| **Approver** | Manager / CFO | Make informed decisions with full context | Approval Queue, Validation Panel, What-If |
| **Finance Controller** | Finance Team | Monitor budgets, enforce compliance, track burn | Dashboard, Reports, Audit Logs |
| **Leadership** | CEO / CFO | Strategic dashboards, financial health, forecasts | Analytics Dashboard, Eval 360 Reports |

---

## Phase 1: Build the Design System

**Objective:** Create a shared CSS design system file that all subsequent screens will import. This establishes visual consistency.

### What to produce:
1. **`design-system.css`** — A CSS file containing:
   - CSS custom properties (variables) for all brand colors, semantic colors, spacing scale (4px base), border radii, shadows, and font sizes.
   - Base typography styles (headings h1–h6, body, caption, data/number styles).
   - Utility classes for status badges (`badge-approved`, `badge-pending`, `badge-rejected`, `badge-at-risk`, `badge-violation`).
   - Card component styles (`.card`, `.card-header`, `.card-body`, `.card-kpi`).
   - Table styles (`.data-table`) — clean, striped rows, sortable headers.
   - Button styles (`.btn-primary`, `.btn-secondary`, `.btn-approve`, `.btn-reject`, `.btn-escalate`, `.btn-whatif`).
   - Sidebar navigation styles.
   - Chart container styles.
   - Form input styles (text, number, select, file upload, textarea).
   - Alert/notification banner styles.
   - Grid layout utilities for the main app shell (sidebar + header + content area).

2. **`design-system-preview.html`** — A single HTML page that renders every component from the design system as a living style guide. This lets us verify the system before building screens.

### Completion criteria:
- All colors match `design.md` exactly.
- Status colors are semantically correct.
- Components look premium, clean, and KPMG-branded.
- The preview page is self-contained and visually verifiable in a browser.

---

## Phase 2: Build the Application Shell

**Objective:** Create the shared page layout that wraps every screen — the sidebar navigation, top header bar, and content area.

### What to produce:
1. **`app-shell.html`** — The master layout containing:
   - **Sidebar (left):** Navigation links for Dashboard, Requests, ACT Validation, Approvals, Budgets (Plan Visage), Reports (Eval 360), Audit & Logs. Active state highlighting. KPMG logo at top.
   - **Top Header Bar:** Search bar, notification bell (with count badge), user avatar + role dropdown.
   - **Content Area:** Where each screen renders. Use a consistent padding and max-width.

### Completion criteria:
- Sidebar collapses on narrow viewports.
- Active navigation item is visually distinct.
- Layout is responsive and uses the design system CSS.

---

## Phase 3: Build the 5 High-Impact Screens

Build each screen as a standalone HTML file that imports the design system and app shell. Use **realistic data** — never placeholder text or lorem ipsum. Use Indian Rupee (₹) amounts with correct formatting.

---

### Screen 1: Dashboard (First Impression)

**File:** `dashboard.html`

**What to show:**
- **KPI Cards Row:** 4 cards showing Total Budget (₹500,00,00,000), Consumed (₹312,45,00,000), Remaining (₹187,55,00,000), Pending Requests (47).
- **Budget Consumption Donut Chart:** Visual split of consumed vs. remaining, color-coded.
- **Critical Alerts Panel:** List of 3–5 alerts (e.g., "Mining Ops Capex exceeded by ₹2.3 Cr", "SLA breach: 3 requests pending >48 hrs"). Use red/amber status indicators.
- **Quick Actions:** Buttons for "Raise New Request", "View Pending Approvals", "Run Forecast".
- **Recent Activity Feed:** Last 5 system actions (approvals, rejections, escalations) with timestamps.
- **Budget vs. Actuals Bar Chart:** Horizontal grouped bars for top 5 cost centers.

---

### Screen 2: Request Form (Requestor Flow)

**File:** `request-form.html`

**What to show:**
- **Form Fields:**
  - Request Type (dropdown: Machinery, Blasting, Energy, Contractors, Other)
  - Amount (₹ input with live formatting)
  - Cost Center (dropdown with search)
  - GL Account (auto-suggested based on cost center)
  - Business Justification (textarea)
  - Urgency Level (Normal / Urgent / Critical)
  - Evidence Upload (file drag-drop zone for quotes, invoices, approvals)
- **Right Sidebar — Live Budget Preview Panel:**
  - As the user selects a cost center, this panel dynamically shows: Current Budget, Consumed, Remaining, and a visual gauge.
  - If the requested amount exceeds the remaining budget, show a **red "Over Budget" warning** with the exact overspend amount.
  - Show applicable policy rules (e.g., "Amounts >₹50L require CFO approval").

---

### Screen 3: Validation Panel — ACT Engine View (HERO SCREEN / DIFFERENTIATOR)

**File:** `validation-panel.html`

**This is the most important screen. It demonstrates the "intelligence" of the system.**

**Layout:** Split-panel — Request details on the left, Validation results on the right.

**Left Panel — Request Summary:**
- Request ID, Requestor Name, Date, Amount, Cost Center, Business Justification, Attached Evidence thumbnails.

**Right Panel — ACT Validation Results:**
- **Overall Validation Score:** A prominent circular score gauge (e.g., 72/100) color-coded (green >80, amber 50–80, red <50).
- **Check Results List:** A vertical checklist showing each validation rule and its pass/fail status:
  - ✅ Budget Availability — "₹10,00,000 remaining in Mining Ops Capex"
  - ❌ Policy Violation — "Amount exceeds single-approval limit (₹50,00,000). Requires dual sign-off."
  - ⚠️ Vendor Risk — "Vendor XYZ flagged for delayed delivery (3 of last 5 POs)"
  - ✅ GL Account Valid
  - ✅ SoD (Separation of Duties) Passed
- **AI Recommended Action:** A highlighted callout box (e.g., "Recommend: Conditional Approval — route to CFO for dual sign-off due to policy violation").
- **What-If Scenario Button:** A prominent button that opens a simulation panel showing the projected budget impact if this request is approved (burn rate change, forecast shift).
- **Risk Level Indicator:** Low / Medium / High / Critical — with an icon and color.

---

### Screen 4: Approval Queue & Detail (Approver Flow)

**File:** `approval-queue.html`

**Part A — Approval Queue (List View):**
- A data table of pending approvals, sortable by:
  - Priority (High-risk items visually flagged with red dot)
  - Amount (descending)
  - SLA Countdown (time remaining, amber/red if near breach)
- Columns: Request ID, Requestor, Amount, Cost Center, Validation Score, Risk Level, SLA Timer, Status Badge.

**Part B — Approval Detail (Expanded View — triggered on row click):**
- Full request details + validation panel (reuse Screen 3's layout).
- **Contextual Decision Area:**
  - Budget Impact Map: A mini visualization showing how this approval affects the cost center's remaining budget.
  - Historical Context: "This cost center has had 3 over-budget requests in Q3."
  - Action Buttons: **Approve** (green), **Reject** (red), **Escalate** (amber), **Run What-If** (blue).
  - Comments/Notes textarea for the approver.

---

### Screen 5: Analytics Dashboard — Eval 360 (Leadership & Controller)

**File:** `analytics-dashboard.html`

**What to show:**
- **Financial Health Score:** A large KPI card with a composite health score.
- **Budget vs. Actuals Chart:** Grouped bar chart comparing planned vs. actual spend across top cost centers.
- **Burn Rate Trend:** Line chart showing monthly budget consumption rate with forecast projection (dashed line for future months).
- **Variance Analysis Table:** Table showing cost centers with highest positive/negative variances, color-coded.
- **Forecast Accuracy Gauge:** How close past forecasts were to actuals (percentage).
- **Approval Cycle Metrics:** Average time-to-approve, SLA compliance rate, escalation count.
- **Filters:** Date range picker, cost center multi-select, department filter.

---

## Phase 4: Interactive Prototyping

**Objective:** Add JavaScript interactivity to make the screens feel like a live product.

### Interactions to implement:

1. **Request Form → Budget Preview:**
   - When the user changes the Amount or Cost Center, the right sidebar Budget Preview panel updates dynamically (use mock data).
   - If over budget, animate the warning into view.

2. **Validation Panel → What-If Simulation:**
   - Clicking "Run What-If" opens a modal/slide-out panel.
   - The panel shows two scenarios side by side ("Approve" vs. "Reject") with projected burn rate, forecast, and budget remaining.
   - Use animated counters or bar transitions to make the simulation feel alive.

3. **Approval Queue → Detail View:**
   - Clicking a row in the approval queue expands/navigates to the full detail view.
   - Approve/Reject buttons show a confirmation dialog with the impact summary before executing.

4. **Dashboard → Drill-Down:**
   - Clicking a KPI card or chart element navigates to the relevant detailed screen (e.g., clicking "Pending Requests" card goes to Approval Queue).

5. **Sidebar Navigation:**
   - All sidebar links navigate between the 5 built screens.
   - Active state updates on navigation.

---

## Phase 5: Audit & Logs Screen (Bonus)

**File:** `audit-logs.html`

**What to show:**
- **Audit Timeline:** A vertical timeline showing every action taken on a request (creation → validation → approval → SAP execution), with timestamps, actor names, and status changes.
- **Evidence Viewer:** Clickable thumbnails that expand to show uploaded documents.
- **Change Log Table:** Filterable table showing all field-level changes (who changed what, when, old value → new value).
- **Immutable badge:** A visual indicator showing that audit records cannot be edited or deleted.

---

## Execution Order & Checklist

Execute in this exact order. Do not skip steps. After completing each phase, verify in the browser before proceeding.

- [ ] **Phase 1:** `design-system.css` + `design-system-preview.html`
- [ ] **Phase 2:** `app-shell.html` (shared layout)
- [ ] **Phase 3A:** `dashboard.html`
- [ ] **Phase 3B:** `request-form.html`
- [ ] **Phase 3C:** `validation-panel.html`
- [ ] **Phase 3D:** `approval-queue.html`
- [ ] **Phase 3E:** `analytics-dashboard.html`
- [ ] **Phase 4:** Add JavaScript interactivity across all screens
- [ ] **Phase 5:** `audit-logs.html`

---

## Quality Criteria — Apply to Every Screen

1. **Brand Compliance:** Colors, typography, and layout follow `design.md` (KPMG guidelines) exactly.
2. **Realistic Data:** All data uses Indian Rupee formatting, realistic amounts, realistic cost center names (Mining Ops, Smelter Unit, Power Plant), and realistic persona names.
3. **Semantic Status Colors:** Green/Amber/Red used consistently and correctly for approval states, budget health, and risk levels.
4. **Responsive Layout:** Screens work on 1440px+ desktops. Sidebar collapses gracefully.
5. **Accessibility:** Proper contrast ratios, focus states, ARIA labels on interactive elements.
6. **No Placeholders:** No lorem ipsum, no "Coming Soon", no empty states. Every element has real content.
7. **Premium Feel:** Subtle shadows, smooth transitions, clean whitespace. The design should feel like a ₹10 Cr enterprise product, not a student project.
