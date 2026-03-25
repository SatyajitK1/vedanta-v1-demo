# MASTER PROMPT — ALUMINIUM (VEDANTA ENTITY)
### Animated D3.js Multi-Agent PR Review Graph (Frontend Demo)

---

## Role & Perspective

You are a **principal frontend engineer and visualization architect** with deep expertise in:

- D3.js (graph layouts, transitions, execution animation)
- Enterprise UX design
- Interactive dashboards
- Storytelling through animated system flows

You are tasked with building a **high-fidelity frontend demo** that visually simulates an **AI-driven multi-agent PR review system** for Vedanta — Aluminium business.

This is **not a production backend system**.  
This is a **client-side, hard-coded, visually rich demonstration** designed for leadership, auditors, and decision authorities.

---

## Trigger Condition

**When I click the button "Review PR (AI Agent Flow)"**:

Perform the following:

- Expand the workspace below the submitted records to reveal a split-pane dashboard. Allocate the left section for the animated execution graph and the right section for a contextual metadata display that syncs with the active PR record.
- Render an **animated agent execution graph**
- Begin simulated execution of the PR review pipeline

The demo must run for **exactly two Aluminium PRs**, whose data is embedded below.

---

## Primary Objective

Create a **visually animated, highly intuitive D3.js agent graph** that:

- Executes a **multi-agent DAG** from PR submission to final verdict
- Runs **agent-by-agent** with visible reasoning
- Highlights the **currently executing agent**
- Shows **live metadata, evidence review, and agentic insights**
- Ends with a **DOA-style approval dashboard**

The viewer should feel like they are **watching an intelligent enterprise system reason and decide**.

---

## Overall Layout

### Split-Screen Layout

#### Left Panel (~65%) — Agent Execution Graph

- Vertical Directed Acyclic Graph (top → bottom)
- Animated nodes and edges
- Clear branching and merging logic
- Visually grouped validation agents

#### Right Panel (~35%) — Live Agent Metadata & Reasoning

- Updates automatically as agents execute
- Shows extracted data, evidence checks, insights, and outcomes
- Smooth transitions between agent contexts

---

## Agent Graph Structure

### Execution Order

1. PR Intake Agent  
2. Categorizer Agent  
3. OPEX / CAPEX Fork  
4. Consolidation Agent  
5. Vendor Governance Agent  
6. Pre-Bid & Stakeholder Agent  
7. Validation Cluster  
   - Evidence Validation Agent  
   - Policy & Investment (NFA/CAPEX) Agent  
   - Budget Validation Agent  
8. Commodity & Index Analysis Agent  
9. Deviation Detection Agent  
10. Verdict Generation Agent  
11. DOA / Approver Dashboard  

---

## Node Design Specifications

Each agent node must be:

- Rounded rectangle  
- Subtle shadow and soft gradient fill  
- Agent-specific icon on the left  
- Status indicator icon in the top-right  

---

### Node States

| State | Visual Representation |
|------|------------------------|
| Idle | Muted colors, grey border |
| Running | Pulsing glow + slight scale-up |
| Completed | Green checkmark |
| Warning | Amber triangle |
| Critical | Red alert icon |

---

## Animation & Execution Logic

- Execute **one agent at a time**
- Use a simple state machine or timed execution

When control passes between agents:

- Animate edges using flowing dashed strokes or particles

Active node behavior:

- Slight scale-up (~1.05x)  
- Pulsing border or glow  
- Completed nodes settle into calm green  

---

### Branching Behavior

- Categorizer splits path into **OPEX** and **CAPEX**
- Both branches are visually distinct
- Paths converge cleanly at **Consolidation Agent**

---

## Validation Cluster (Nested Execution)

- Render validation agents inside a **visible container**
- Border illuminates when cluster is active
- Sub-agents execute sequentially
- Each sub-agent independently displays Pass / Deviation / Fail

---

## Live Metadata Panel (Right Side)

### Behavior

- Smooth slide or fade transition on agent change
- Header always shows:
  - Agent Name
  - Status Badge (Running / Completed / Warning)

---

### Content Must Display

- Line-item details  
- Business explanation (why this spend exists)  
- Evidence reviewed  
- Agentic insight per evidence  
- Status per check  
- Deviations (if any) with justification  

---

## Agentic Insight Philosophy (CRITICAL)

All agents must behave according to the **same philosophy shown below**:

- Agents **do not merely validate presence of documents**
- Agents **interpret, contextualize, and reason**

Each evidence check must include:

- What was reviewed  
- Why it is acceptable (or not)  
- Clear Pass / Deviation / Fail status  

Deviations are **not failures by default** Business context and risk trade-offs are always explained  

---

### Tone & Style

- Professional  
- Audit-ready  
- Human-readable  
- Enterprise governance language  

---

## Evidence & Insight Behavior — OPEX Example Philosophy

For **OPEX – Aluminium Operations** line items:

- Explain operational criticality (e.g., fuel for plant logistics)
- Justify annual/routine recurring nature  
- Validate consumption against operational plan and indexed pricing trends (Fuel/Crude Oil)

Agents should output insights similar to:

> "Fuel consumption aligns with operational plan and indexed pricing trends. Supply is critical for uninterrupted plant logistics."

---

## Evidence & Insight Behavior — CAPEX Example Philosophy

For **CAPEX – Aluminium Projects**:

- Link spend to project milestones and approved CER/WBS
- Validate against sanctioned limits
- Accept justified technical premiums (e.g., high-temperature fluid compatible with specific ore geology)

Agents should output insights similar to:

> "Premium acceptable due to high-temperature performance requirements reducing drilling risk. Sanctioned under WBS – Aluminium CAPEX Project."

---

## Hard-Coded Demo Data

All PRs and line items are **hard-coded**. The demo uses the following data:

[
  {
    "PR NO.": "PR-AL-0452",
    "PR LINE ITEM": "10",
    "STATUS": "Approved",
    "REQUESTOR": "AS\nAmit Sharma\nDrilling Ops",
    "PLANT CODE": "AL-DR-01",
    "MATERIAL / SERVICE DESCRIPTION": "Drilling Fluid – Aluminium Project",
    "TECHNICAL SPECIFICATION / SOW": "High-temperature drilling fluid compatible with aluminium ore geology",
    "SPEND TYPE": "CAPEX – Drilling / Process Consumables",
    "BUDGETED / UNBUDGETED": "Budgeted",
    "QTY": "Lot",
    "EST. VALUE (₹ CR)": "6.5",
    "ACCOUNT ASSIGNMENT": "WBS – Aluminium CAPEX Project",
    "ASSET CODE / CER NO.": "CER-AL-2025-045",
    "SAFETY SCORE / KPIS": "HSE compliance, zero-spill KPI",
    "PREFERRED SUPPLIERS": "Approved Drilling Chemical Vendors",
    "JUSTIFICATION / REMARKS": "Required for drilling operations under approved aluminium CAPEX"
  },
  {
    "PR NO.": "PR-AL-0655",
    "PR LINE ITEM": "10",
    "STATUS": "In Review",
    "REQUESTOR": "VP\nVikram Patel\nLogistics",
    "PLANT CODE": "AL-RJ-01",
    "MATERIAL / SERVICE DESCRIPTION": "Fuels – RJ Aluminium Operations",
    "TECHNICAL SPECIFICATION / SOW": "HSD / furnace fuel supply for plant and logistics",
    "SPEND TYPE": "OPEX – Fuels",
    "BUDGETED / UNBUDGETED": "Budgeted",
    "QTY": "Lot",
    "EST. VALUE (₹ CR)": "4.2",
    "ACCOUNT ASSIGNMENT": "Cost Center – Aluminium O&M",
    "ASSET CODE / CER NO.": "NA",
    "SAFETY SCORE / KPIS": "Safety compliance, uninterrupted supply KPI",
    "PREFERRED SUPPLIERS": "Approved Fuel Vendors",
    "JUSTIFICATION / REMARKS": "Routine fuel requirement for RJ aluminium operations"
  }
]

---

## Commodity & Index Analysis (Simulated)

Visually simulate indices relevant to Aluminium business:

- LME Aluminium
- Fuel / Crude Oil Index
- Chemical / Mineral input cost trends

Agents must:

- Compare trends vs quoted prices  
- Classify impact as: Within tolerance / Acceptable deviation / Critical deviation  

---

## Deviation Detection Logic

The Deviation Detection Agent evaluates:

- Non-L1 vendor selection  
- Price variance beyond index movement  
- Scope or SLA enhancement  

---

## Verdict Generation

The Verdict Agent must assign:

- **PASS** - **PASS-WITH-DEVIATION** - **FAIL** Generate a **DOA-ready narrative explanation** justifying any business or risk trade-offs.

---


## DOA / Approver Dashboard

At completion, transition to a summary table:

- **PR Number** | **Line Item** | **Verdict** | **Risk Level** | **Index Check** | **Deviation Flag**

---

## Final Goal

Deliver an **enterprise-grade animated AI-agent execution graph** that explains Aluminium PR decisions transparently for Vedanta leadership and auditors.