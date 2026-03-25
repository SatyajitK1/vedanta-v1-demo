# MASTER PROMPT

## Animated D3.js Multi-Agent PR Review Graph (Frontend Demo)

---

## Role & Perspective

You are a **principal frontend engineer and visualization architect** with deep expertise in:

- D3.js (graph layouts, transitions, execution animation)
- Enterprise UX design
- Interactive dashboards
- Storytelling through animated system flows

You are tasked with building a **high-fidelity frontend demo** that visually simulates an **AI-driven multi-agent PR review system** in the validation-panel.html page.

This is **not a production backend system**.  
This is a **client-side, hard-coded, visually rich demonstration** designed for leadership, auditors, and decision authorities.

---

## Trigger Condition

**When I click the button "Run agentic review"**:

> **"Review PR (AI Agent Flow)"**

Perform the following:

- Expand the workspace below the submitted records to reveal a split-pane dashboard. Allocate the left section for the animated execution graph and the right section for a contextual metadata display that syncs with the active PR record.
- Render an **animated agent execution graph**
- Begin simulated execution of the PR review pipeline

The demo must run for **exactly two PRs**, whose data will be **manually embedded**.

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
2. Triage Agent  
3. OPEX / CAPEX Fork  
4. Consolidation Agent  
5. Vendor Governance Agent  
6. Pre-Bid & Stakeholder Agent  
7. Validation Cluster  
   - Evidence Validation Agent  
   - Policy & NFA Agent  
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

Deviations are **not failures by default**  
Business context and risk trade-offs are always explained  

---

### Tone & Style

- Professional  
- Audit-ready  
- Human-readable  
- Enterprise governance language  

---

## Evidence & Insight Behavior — OPEX Example Philosophy

For **OPEX – O&M Services** line items:

- Explain operational criticality  
- Justify annual recurring nature  
- Validate SLA relevance, availability targets, and service coverage  
- Interpret CPI/WPI increases against scope expansion  

Deviations (e.g., cost escalation) must be:

- Quantified  
- Contextualized  
- Classified as acceptable or non-blocking when justified  

Agents should output insights similar to:

> "Service scope fully covers operations, preventive maintenance, emergency response, and compliance. Pricing aligns with scope breadth and historical contracts."

---

## Evidence & Insight Behavior — CAPEX Example Philosophy

For **CAPEX – Mechanical / Oil Projects**:

- Link spend to project milestones  
- Validate against CER, WBS, and sanctioned limits  
- Interpret LME / steel indices impact  
- Compare OEM quotations for reasonableness  

Accept deviations when:

- Delivery certainty  
- Project schedule risk  
- Technical superiority  

Justify the premium  

Agents should output insights similar to:

> "Price increase aligns with LME zinc trend. Selection justified due to delivery risk mitigation."

---

## Hard-Coded Demo Data

All PRs and line items are **hard-coded**. I want this for these 2 PRs, here is the json for the same:

[
  {
    "PR NO.": "PR-2025-4201",
    "PR LINE ITEM": "10",
    "STATUS": "In Review",
    "REQUESTOR": "Rajan Mehta",
    "PLANT CODE": "RJ-PL-01",
    "MATERIAL / SERVICE DESCRIPTION": "O&M Services – RJ Pipeline (Annual)",
    "TECHNICAL SPECIFICATION / SOW": "Operation & maintenance of RJ pipeline, SLA attached",
    "SPEND TYPE": "OPEX – Services",
    "BUDGETED / UNBUDGETED": "Budgeted",
    "QTY": 1,
    "EST. VALUE (₹ CR)": 3.80,
    "ACCOUNT ASSIGNMENT": "Cost Center – Pipeline O&M",
    "ASSET CODE / CER NO.": "NA",
    "SAFETY SCORE / KPIS": "Pipeline availability ≥ 98%",
    "PREFERRED SUPPLIERS": "EPC-O&M Vendor",
    "JUSTIFICATION / REMARKS": "Annual O&M requirement for continuous pipeline operations"
  },
  {
    "PR NO.": "PR-2025-4202",
    "PR LINE ITEM": "10",
    "STATUS": "In Review",
    "REQUESTOR": "Suresh Iyer",
    "PLANT CODE": "OIL-PL-01",
    "MATERIAL / SERVICE DESCRIPTION": "Mechanical CAPEX – Oil Pipeline Pumping Facilities",
    "TECHNICAL SPECIFICATION / SOW": "API-compliant pumps, piping & instrumentation scope attached",
    "SPEND TYPE": "CAPEX – Mechanical (Oil)",
    "BUDGETED / UNBUDGETED": "Budgeted",
    "QTY": 1,
    "EST. VALUE (₹ CR)": 22.00,
    "ACCOUNT ASSIGNMENT": "WBS – Oil Pipeline Project",
    "ASSET CODE / CER NO.": "CER-OIL-2025-011",
    "SAFETY SCORE / KPIS": "Safety score ≥ 90%",
    "PREFERRED SUPPLIERS": "OEM-A, OEM-B",
    "JUSTIFICATION / REMARKS": "Approved mechanical CAPEX for oil pipeline project"
  }
]

---

## Commodity & Index Analysis (Simulated)

Visually simulate:

- CPI / WPI for services  
- Steel price index  
- LME Zinc (for galvanized / mechanical components)

Agents must:

- Compare trends vs quoted prices  
- Explain deltas  
- Classify impact as:
  - Within tolerance  
  - Acceptable deviation  
  - Critical deviation  

No real calculations necessary — reasoning is the focus.

---

## Deviation Detection Logic

The Deviation Detection Agent evaluates:

- Non-L1 vendor selection  
- Price variance beyond index movement  
- Scope or SLA enhancement  

Deviation classifications:

- Acceptable  
- Critical  

Deviation reasoning must be explicit and traceable.

---

## Verdict Generation

The Verdict Agent must:

- Aggregate **all upstream agent outputs**
- Assign verdict:
  - PASS  
  - PASS-WITH-DEVIATION  
  - FAIL  

- Generate a **DOA-ready narrative explanation**
- Clearly state whether deviations are:
  - Non-blocking  
  - Justified by business or risk considerations  

---

## DOA / Approver Dashboard

At completion:

- Transition to a **DOA summary table**
- Rows animate into view  

---

### Table Columns

- PR Number  
- Line Item  
- Verdict  
- Risk Level  
- Index Check  
- Deviation Flag  

---

### Verdict Icons

- ✅ PASS  
- ⚠️ PASS-WITH-DEVIATION  
- ❌ FAIL  

---

### Demo-Only Actions

- Approve  
- Seek Clarification  
- Reject  

(Buttons are visual only.)

---

## Visual & UX Quality Bar

- Enterprise color palette (blue, slate, green)  
- Rounded corners throughout  
- Clean typography  
- Calm, confident animation  
- No flashy effects — clarity over novelty  

---

## Demo Constraints

- Entirely frontend  
- Entirely hard-coded  
- Exactly two PRs  
- Execution speed configurable  
- Designed for **live executive demos**  

---

## Final Goal

Deliver an **enterprise-grade animated AI-agent execution graph** that:

- Explains PR review logic transparently  
- Demonstrates agentic reasoning and governance  
- Is intuitive for DOA, auditors, and leadership  
- Feels production-ready while remaining demo-safe  

Build this as if it will be presented to executives and auditors.