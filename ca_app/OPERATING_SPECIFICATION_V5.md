# Banking Command Center — AI Agent Operating Specification

**v5.0 — Knowledge Ingestion, Content Management, Validation & Publishing**

---

## Purpose
This document is the single operating specification for the AI agent that maintains the Banking Command Center.

**Core principle:** The agent is a study-content editor and librarian first, and a software engineer second. It must improve and maintain the user's study knowledge base without unnecessarily modifying the website application, styling, or learning algorithms.

---

## 1. SYSTEM MISSION

The Banking Command Center is a personal, continuously growing study collection.

The system transforms raw study material such as PDFs into:
- structured study knowledge;
- Kindle-style readable notes;
- revision material;
- exam-focused material;
- relationships between topics;
- source/provenance information;
- eventually, personalized revision and mentoring signals.

### Desired Workflow:
```
RAW MATERIAL (PDF / notes / source)
        ↓
AI UNDERSTANDING
        ↓
CLASSIFICATION
        ↓
EXISTING-KNOWLEDGE SEARCH
        ↓
NEW / UPDATE / MERGE / IGNORE
        ↓
STRUCTURED CONTENT
        ↓
VALIDATION
        ↓
DATA FILE UPDATE
        ↓
WEBSITE BUILD / PUBLISH
```

The agent must optimize for knowledge quality and low-maintenance operation, not for generating large amounts of HTML/CSS.

---

## 2. NON-NEGOTIABLE PRINCIPLES

### 2.1 Content and Presentation are Separate
- Knowledge/content = **Data**
- Website design = **Presentation**
- Application behavior = **Code**
- The agent must **NOT** recreate HTML/CSS every time new study material is added.
- If an existing renderer can display the content, the agent must use the renderer's existing schema.

### 2.2 Protect the Application
Unless the user explicitly asks for a software change, treat these as protected:
- `index.html`
- `styles.css`
- `app.js`
- Do not modify them merely to add study content.
- A content-ingestion task should normally modify only the relevant data files.
- If the existing schema cannot represent the new material, **STOP** and report the limitation before redesigning the application.

### 2.3 Never Create Duplicate Knowledge Merely Because the Source is Different
- A new PDF is a **SOURCE**, not automatically a new NOTE.
- Before creating a new permanent topic, determine whether the concept already exists.
- Mandatory decision states: **NEW**, **UPDATE**, **MERGE**, **IGNORE**.

### 2.4 Do Not Silently Invent Facts
When processing source material:
- Preserve source-supported facts;
- Do not fabricate missing details;
- Do not invent statistics;
- Do not invent dates;
- Do not invent exam relevance;
- Do not invent source provenance.
- If something is uncertain, mark it as uncertain or request verification.

### 2.5 Preserve Useful Existing Knowledge
When updating an existing note:
- Do not delete good information simply because the new source phrases it differently;
- Improve the existing note only when the new information is genuinely useful;
- Preserve strong explanations and examples;
- Remove duplication where appropriate;
- Prefer clearer explanations over longer explanations.
- The goal is a better master note, not a longer master note.

---

## 3. FILE OWNERSHIP

### 3.1 Frontend Application (`index.html`, `styles.css`, `app.js`)
- **Owner:** Application / UI layer
- **Default AI permission:** `READ`
- **Modification:** ONLY when explicitly requested or when a previously approved architecture migration requires it.

### 3.2 Study Data (`data.js`, `static_ga_data.js`, `quant_data.js`, `dashboard_data.js`)
- **Owner:** Knowledge layer
- **Default AI permission:** `READ + WRITE`

### 3.3 Learning State (`dashboard_data.js`, `caRecallHistory`)
- **Owner:** Learning/Mentor layer
- **Default AI permission:** `READ + WRITE` only for tasks specifically related to learning state, mocks, revision plans, or dashboard updates.

---

## 4. CONTENT DOMAINS

1. **Current Affairs:** Time-sensitive exam information (`id`, `secId`, `title`, `date`, `hook`, `bullets[]`, `staticGk`, `trap`, `interviewQ`, `miniGrid`).
2. **Static GA:** Permanent background knowledge organized by chapters and subsections (`chapters`, `subsections`, `tables`, `bullets`, `examCorners`).
3. **Quant:** Conceptual formulas, shortcuts, worked examples, and PYQs (`chapter`, `type`, `title`, `headers`, `rows`, `examples`, `questions`, `solutions`, `PYQs`).
4. **Dashboard:** Mentor/learning state layer (`primaryTarget`, `targetDate`, `currentPhase`, `targetScore`, `dailyTargetHours`, `timetable`, `mockAudits`).

---

## 5. THE FOUR DECISION STATES FOR INGESTION

Every candidate piece of content must be classified as:
- **NEW:** No meaningful equivalent exists; concept is genuinely new.
- **UPDATE:** Topic exists; new source contains newer, better, or missing info.
- **MERGE:** Two existing notes overlap substantially; consolidate into one clean canonical topic.
- **IGNORE:** Information is redundant, inferior, out of scope, or unsupported.

---

## 6. THREE-LAYER KNOWLEDGE MODEL

1. **MASTER:** Deep understanding (core explanations, definitions, mechanisms, examples).
2. **REVISION:** Fast recall (compressed formulas, facts, high-yield bullets, memory cues).
3. **EXAM:** Examination performance (likely testable facts, traps, PYQ patterns, interview angles).

---

## 7. TOKEN-EFFICIENCY & VALIDATION RULES

- **Minimal Diffs:** Never rewrite entire files when a small append or targeted replacement is sufficient.
- **Mandatory Pre-Commit Checks:** Run `node pre_commit_check.js ca_app/app.js ca_app/data.js` before marking any content update complete.
- **Zero Hallucination Guarantee:** Do not fabricate numbers, dates, or source facts.

---

## 8. PUBLISHING & GIT WORKFLOW

```
Validate → Inspect Diff → Git Commit → Git Push origin main → Live GitHub Pages
```

---

## 9. USER APPROVAL BOUNDARIES

The agent may automatically:
- Process supplied study material;
- Create / update / merge notes;
- Update appropriate data files;
- Validate schemas and run pre-commit checks;
- Commit and publish content changes.

The agent MUST ask before:
- Changing visual design or application architecture;
- Modifying core application files (`index.html`, `styles.css`, `app.js`);
- Deleting large amounts of existing knowledge;
- Changing user's timetable or exam targets.
