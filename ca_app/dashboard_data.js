// Banking Command Center 2026 — Master Live Mentor Dashboard & Tracker Dataset (v4.3)

const DASHBOARD_DATA = {
  primaryTarget: "IBPS PO Prelims 2026",
  targetDate: "2026-08-22", // August 22, 2026
  currentPhase: "Phase 1: IBPS PO Prelims 14-Day Sprint (Aug 8 – Aug 21, 2026)",
  targetScore: "65+ Marks (92%+ Percentile)",
  dailyTargetHours: 7.0,

  timetable: [
    { time: "07:00 - 08:30", zone: "Focus Block 1", task: "Quant Speed Math & DI Protocol (Quad, Series, 2 DI Sets)", duration: "90 Mins" },
    { time: "08:30 - 08:45", zone: "Buffer / Break", task: "Active Recovery (Zero Screen)", duration: "15 Mins" },
    { time: "08:45 - 10:15", zone: "Focus Block 2", task: "Reasoning Speed Sweep & Puzzles (Syllogism, Floor/Box)", duration: "90 Mins" },
    { time: "10:15 - 10:30", zone: "Buffer / Break", task: "Rest / Hydration", duration: "15 Mins" },
    { time: "14:00 - 15:30", zone: "Focus Block 3", task: "Daily GA Stream & July Overlap (SBI/IBPS Mains Shield)", duration: "90 Mins" },
    { time: "16:30 - 18:00", zone: "Focus Block 4", task: "IBPS PO Full Prelims Mock + 30m Ruthless Audit", duration: "90 Mins" },
    { time: "21:30 - 22:15", zone: "Low-Energy Block", task: "IIBF Banking Diploma Reading / Revision Log", duration: "45 Mins" }
  ],

  mockAudits: [
    { date: "08 Aug", mock: "Smartkeeda IBPS PO Mock 1", score: "53.09", cutoff: "54.50", gap: "-1.41", accuracy: "85.71%", percentile: "81.83%", trap: "Quant Speed Collapse (9.04). Eng 4m22s Idle." },
    { date: "09 Aug", mock: "Smartkeeda IBPS PO Mock 2", score: "Scheduled", cutoff: "56.00", gap: "TBD", accuracy: "TBD", percentile: "TBD", trap: "Target: 62+ Marks" }
  ],

  spacedRevisions: [
    { tier: "Rev 1", interval: "24 Hours", focus: "Mock Errors & Daily GA", action: "Re-solve wrong questions from yesterday's mock without timer." },
    { tier: "Rev 2", interval: "Day 3", focus: "Quant DI & Puzzle Traps", action: "Re-attempt skipped hard DI sets & puzzles." },
    { tier: "Rev 3", interval: "Day 7", focus: "Weekly GA & Formula Log", action: "Complete 100-Question Weekly GA Quiz + Speed Math Formulas." },
    { tier: "Rev 7", interval: "Day 15", focus: "Pre-Exam Trap Sheet", action: "Review master list of silly mistake traps before exam day." }
  ],

  defaultTasks: [
    { id: "task-1", text: "Rev 1 (24h): Re-solve wrong questions from Mock 1 without timer", done: true },
    { id: "task-2", text: "Current Affairs: Complete August 1-7 Core Items (205 notes)", done: true },
    { id: "task-3", text: "Current Affairs: Process July 2026 Monthly Core (Part 1 - 85 notes)", done: true },
    { id: "task-4", text: "Quant Superbook: Review Mensuration & Arithmetic Shortcuts", done: true },
    { id: "task-5", text: "Attempt Smartkeeda IBPS PO Mock 2 & 30m Audit", done: false },
    { id: "task-6", text: "Rev 2 (Day 3): Re-attempt skipped hard DI set from Mock 1", done: false }
  ]
};
