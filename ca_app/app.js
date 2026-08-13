// Banking Command Center 2026 — Kindle Centered Reader Logic (v4.2)

document.addEventListener("DOMContentLoaded", () => {
  // Tracker State (persisted in browser)
  let userStudyHours = parseFloat(localStorage.getItem("ca_study_hours_today") || "6.5");
  let userTasks = JSON.parse(localStorage.getItem("ca_tracker_tasks") || "null");
  if (!userTasks) {
    userTasks = DASHBOARD_DATA.defaultTasks;
    localStorage.setItem("ca_tracker_tasks", JSON.stringify(userTasks));
  }

  // DOM Elements
  const appHeaderTitle = document.getElementById("appHeaderTitle");
  const appHeaderSubtitle = document.getElementById("appHeaderSubtitle");
  
  const sectionNavList = document.getElementById("sectionNavList");
  const quantNavGrid = document.getElementById("quantNavGrid");
  const notesFeed = document.getElementById("notesFeed");
  const activeCountEl = document.getElementById("activeCount");
  const activeFilterLabel = document.getElementById("activeFilterLabel");
  const bookmarkBadge = document.getElementById("bookmarkBadge");
  
  const toggleSubjectBtn = document.getElementById("toggleSubjectBtn");
  const toggleTrackerBtn = document.getElementById("toggleTrackerBtn");
  const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
  const toggleMonthBtn = document.getElementById("toggleMonthBtn");
  const toggleBookmarkFilterBtn = document.getElementById("toggleBookmarkFilterBtn");
  const toggleRecallBtn = document.getElementById("toggleRecallBtn");
  
  const subjectNavDrawer = document.getElementById("subjectNavDrawer");
  const trackerNavDrawer = document.getElementById("trackerNavDrawer");
  const sectionNavDrawer = document.getElementById("sectionNavDrawer");
  const quantNavDrawer = document.getElementById("quantNavDrawer");
  const monthNavDrawer = document.getElementById("monthNavDrawer");
  
  const trackerBadge = document.getElementById("trackerBadge");
  const trackerCountdownHeader = document.getElementById("trackerCountdownHeader");
  const trackerTargetTitle = document.getElementById("trackerTargetTitle");
  const trackerTargetSprint = document.getElementById("trackerTargetSprint");
  const trackerMockAuditList = document.getElementById("trackerMockAuditList");
  const trackerTimetableBody = document.getElementById("trackerTimetableBody");
  const trackerTaskList = document.getElementById("trackerTaskList");
  
  const studyHoursInput = document.getElementById("studyHoursInput");
  const targetHoursLabel = document.getElementById("targetHoursLabel");
  const studyProgressPct = document.getElementById("studyProgressPct");
  const studyProgressBar = document.getElementById("studyProgressBar");

  const drillContainer = document.getElementById("drillContainer");

  // Helper 1: Markdown Parser
  function parseMarkdown(text) {
    if (!text) return "";
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return html;
  }

  // Helper 2: Atomic Numeral Parser
  function parseTrapAndStaticGK(text) {
    if (!text) return "";
    let html = parseMarkdown(text);
    const atomicNumRegex = /(\₹[\d,]+(\.\d+)?\s*(trillion|crore|lakh|billion|cr)?|\$\d+(\.\d+)?\s*(trillion|billion|million|crore)?|\d+(\.\d+)?%|FY\s*\d{2,4}(-\d{2,4})?|\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}(,\s*\d{4})?|\b\d{4}-\d{2,4}\b)/gi;

    if (activeRecallMode) {
      html = html.replace(atomicNumRegex, '<span class="masked-figure" onclick="this.classList.toggle(\'revealed\')">$1</span>');
    } else {
      html = html.replace(atomicNumRegex, '<span class="num-highlight">$1</span>');
    }
    return html;
  }

  // Helper 3: Bullet Renderer
  function processBulletText(text) {
    if (!text) return "";
    let html = parseMarkdown(text);

    if (activeRecallMode) {
      const recallNumRegex = /(\₹[\d,]+(\.\d+)?\s*(trillion|crore|lakh|billion|cr)?|\$\d+(\.\d+)?\s*(trillion|billion|million|crore)?|\d+(\.\d+)?%|\b(?!19\d\d\b|20\d\d\b)\d{2,}\b)/gi;
      html = html.replace(recallNumRegex, '<span class="masked-figure" onclick="this.classList.toggle(\'revealed\')">$1</span>');
    }

    return html;
  }

  // Calculate Days Remaining
  function getDaysRemaining(targetDateStr) {
    const today = new Date();
    const targetDate = new Date(targetDateStr);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }

  // Initialize Tracker Panel Data
  function initTrackerPanel() {
    const daysLeft = getDaysRemaining(DASHBOARD_DATA.targetDate);
    trackerBadge.textContent = `${daysLeft}d`;
    trackerCountdownHeader.textContent = `⚡ ${DASHBOARD_DATA.primaryTarget}: ${daysLeft} Days Left`;
    trackerTargetTitle.textContent = DASHBOARD_DATA.primaryTarget;
    trackerTargetSprint.textContent = DASHBOARD_DATA.currentPhase;

    // Mock Audits List
    trackerMockAuditList.innerHTML = DASHBOARD_DATA.mockAudits.map(m => `
      <div style="margin-bottom: 8px;">
        <strong>${m.date}:</strong> ${m.mock} — 
        <span style="color: var(--accent-warm); font-weight: 700;">${m.score}</span> 
        (Cutoff: ${m.cutoff}) | ${m.accuracy} Accuracy 
        <div style="font-size: 0.8rem; color: var(--accent-gold); margin-top: 2px;">⚠️ ${m.trap}</div>
      </div>
    `).join("");

    // Timetable Body
    trackerTimetableBody.innerHTML = DASHBOARD_DATA.timetable.map(t => `
      <tr>
        <td style="font-family: var(--font-mono); font-weight: 600;">${t.time}</td>
        <td><span class="tag tag-tier-a">${t.zone}</span></td>
        <td>${t.task}</td>
        <td>${t.duration}</td>
      </tr>
    `).join("");

    // Study Hours Input & Progress
    studyHoursInput.value = userStudyHours;
    targetHoursLabel.textContent = DASHBOARD_DATA.dailyTargetHours.toFixed(1);
    updateStudyProgressUI();

    // Render Checklist
    renderChecklist();
  }

  function updateStudyProgressUI() {
    const pct = Math.min(100, Math.round((userStudyHours / DASHBOARD_DATA.dailyTargetHours) * 100));
    studyProgressPct.textContent = `${pct}%`;
    studyProgressBar.style.width = `${pct}%`;
  }

  window.saveStudyHours = function() {
    const val = parseFloat(studyHoursInput.value);
    if (!isNaN(val) && val >= 0) {
      userStudyHours = val;
      localStorage.setItem("ca_study_hours_today", val.toString());
      updateStudyProgressUI();
    }
  };

  function renderChecklist() {
    trackerTaskList.innerHTML = userTasks.map(t => `
      <div class="tracker-task-item ${t.done ? 'done' : ''}">
        <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTaskDone('${t.id}')">
        <span>${t.text}</span>
      </div>
    `).join("");
  }

  window.toggleTaskDone = function(id) {
    userTasks = userTasks.map(t => {
      if (t.id === id) {
        return { ...t, done: !t.done };
      }
      return t;
    });
    localStorage.setItem("ca_tracker_tasks", JSON.stringify(userTasks));
    renderChecklist();
  };

  window.addNewTask = function() {
    const input = document.getElementById("newTaskInput");
    if (input) {
      const text = input.value.trim();
      if (text) {
        const newTask = {
          id: "task-" + Date.now(),
          text: text,
          done: false
        };
        userTasks.push(newTask);
        localStorage.setItem("ca_tracker_tasks", JSON.stringify(userTasks));
        input.value = "";
        renderChecklist();
      }
    }
  };

  // Switch Tracker Tab inside Drawer
  window.switchTrackerTab = function(tabNum) {
    document.querySelectorAll(".tracker-tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tracker-tab-content").forEach(content => content.classList.remove("active"));

    document.getElementById(`tabBtn${tabNum}`).classList.add("active");
    document.getElementById(`trackerTab${tabNum}`).classList.add("active");
  };

  // Close All Drawers
  function closeAllDrawers() {
    subjectNavDrawer.classList.remove("open");
    trackerNavDrawer.classList.remove("open");
    sectionNavDrawer.classList.remove("open");
    quantNavDrawer.classList.remove("open");
    monthNavDrawer.classList.remove("open");
    if (document.getElementById("subjectChevron")) document.getElementById("subjectChevron").textContent = "▼";
    if (document.getElementById("trackerChevron")) document.getElementById("trackerChevron").textContent = "▼";
    if (document.getElementById("sidebarChevron")) document.getElementById("sidebarChevron").textContent = "▼";
    if (document.getElementById("monthChevron")) document.getElementById("monthChevron").textContent = "▼";
  }

  let activeSubject = "ca"; // "ca", "quant", or "static_ga"
  let activeSectionId = "all";
  let activeQuantChapterId = "all";
  let activeStaticChapterId = "all";
  let activeMonth = "all";
  let onlyBookmarks = false;
  let activeRecallMode = false;
  let activeFlashcardMode = false;
  let activeMasterWhosWhoMode = false;
  let bookmarkedIds = JSON.parse(localStorage.getItem("ca_bookmarks") || "[]");

  const toggleFlashcardBtn = document.getElementById("toggleFlashcardBtn");
  const toggleMasterWhosWhoBtn = document.getElementById("toggleMasterWhosWhoBtn");

  if (toggleFlashcardBtn) {
    toggleFlashcardBtn.addEventListener("click", () => {
      activeFlashcardMode = !activeFlashcardMode;
      toggleFlashcardBtn.classList.toggle("active", activeFlashcardMode);
      toggleFlashcardBtn.innerHTML = activeFlashcardMode ? "🃏 Flashcards: ON" : "🃏 Flashcards: OFF";
      if (notesFeed) notesFeed.classList.toggle("flashcard-mode", activeFlashcardMode);
      renderFeed();
    });
  }

  if (toggleMasterWhosWhoBtn) {
    toggleMasterWhosWhoBtn.addEventListener("click", () => {
      activeMasterWhosWhoMode = !activeMasterWhosWhoMode;
      toggleMasterWhosWhoBtn.classList.toggle("active", activeMasterWhosWhoMode);
      if (activeMasterWhosWhoMode) {
        selectSection("sec5");
      } else {
        selectSection("all");
      }
    });
  }

  // Switch Subject Mode
  window.switchSubject = function(subj) {
    activeSubject = subj;
    closeAllDrawers();

    if (subj === "ca") {
      appHeaderTitle.textContent = "Banking Command Center";
      appHeaderSubtitle.textContent = "Kindle E-Book Reader Edition | Framework v3.1";
      toggleSubjectBtn.innerHTML = `📚 Subject: Current Affairs <span id="subjectChevron">▼</span>`;
      toggleSubjectBtn.className = "toggle-chip active";
      toggleSidebarBtn.style.display = "flex";
      toggleSidebarBtn.innerHTML = `🔒 Locked Sections <span id="sidebarChevron">▼</span>`;
      toggleMonthBtn.style.display = "flex";
      toggleRecallBtn.style.display = "flex";
      updateMonthHeaderLabel();
    } else if (subj === "quant") {
      appHeaderTitle.textContent = "The Quant Superbook";
      appHeaderSubtitle.textContent = "Banking Mains Edition | Formulas & Worked Patterns";
      toggleSubjectBtn.innerHTML = `📐 Subject: Quant Superbook <span id="subjectChevron">▼</span>`;
      toggleSubjectBtn.className = "toggle-chip active-quant";
      toggleSidebarBtn.style.display = "flex";
      toggleSidebarBtn.innerHTML = `📐 Quant Topics <span id="sidebarChevron">▼</span>`;
      toggleMonthBtn.style.display = "none";
      toggleRecallBtn.style.display = "none";
    } else if (subj === "static_ga") {
      appHeaderTitle.textContent = "Static GA Master Book";
      appHeaderSubtitle.textContent = "SBI PO & IBPS PO Mains | Core Banking & Policy Master Compendium";
      toggleSubjectBtn.innerHTML = `📘 Subject: Static GA Master Book <span id="subjectChevron">▼</span>`;
      toggleSubjectBtn.className = "toggle-chip active-static";
      toggleSidebarBtn.style.display = "flex";
      toggleSidebarBtn.innerHTML = `📘 Static GA Chapters <span id="sidebarChevron">▼</span>`;
      toggleMonthBtn.style.display = "none";
      toggleRecallBtn.style.display = "flex";
    }

    renderSidebar();
    renderFeed();
    renderDrill();
  };

  // Render Sidebar / Topic Navigation Grid
  function renderSidebar() {
    if (activeSubject === "ca") {
      sectionNavList.innerHTML = "";

      const allLi = document.createElement("li");
      const allBtn = document.createElement("button");
      allBtn.className = `nav-item-btn ${activeSectionId === "all" ? "active" : ""}`;
      allBtn.innerHTML = `<span>📑 All CA Sections</span> <span class="badge-count">${CA_NOTES_DATA.length}</span>`;
      allBtn.addEventListener("click", () => selectSection("all"));
      allLi.appendChild(allBtn);
      sectionNavList.appendChild(allLi);

      CA_SECTIONS.forEach(sec => {
        const count = CA_NOTES_DATA.filter(n => n.secId === sec.id).length;
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.className = `nav-item-btn ${activeSectionId === sec.id ? "active" : ""}`;
        btn.innerHTML = `<span>${sec.title}</span> <span class="badge-count">${count}</span>`;
        btn.addEventListener("click", () => selectSection(sec.id));
        li.appendChild(btn);
        sectionNavList.appendChild(li);
      });
    } else if (activeSubject === "quant") {
      quantNavGrid.innerHTML = "";

      const quantAllLi = document.createElement("li");
      const quantAllBtn = document.createElement("button");
      quantAllBtn.className = `nav-item-btn ${activeQuantChapterId === "all" ? "active" : ""}`;
      quantAllBtn.innerHTML = `<span>📐 All Quant Topics</span> <span class="badge-count">${QUANT_CHAPTERS.length}</span>`;
      quantAllBtn.addEventListener("click", () => selectQuantChapter("all"));
      quantAllLi.appendChild(quantAllBtn);
      quantNavGrid.appendChild(quantAllLi);

      QUANT_CHAPTERS.forEach(ch => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.className = `nav-item-btn ${activeQuantChapterId === ch.id ? "active" : ""}`;
        btn.innerHTML = `<span>${ch.title}</span> <span class="badge-count">${ch.subsections.length}</span>`;
        btn.addEventListener("click", () => selectQuantChapter(ch.id));
        li.appendChild(btn);
        quantNavGrid.appendChild(li);
      });
    } else if (activeSubject === "static_ga") {
      quantNavGrid.innerHTML = "";

      const staticAllLi = document.createElement("li");
      const staticAllBtn = document.createElement("button");
      staticAllBtn.className = `nav-item-btn ${activeStaticChapterId === "all" ? "active" : ""}`;
      staticAllBtn.innerHTML = `<span>📘 All Static GA Chapters</span> <span class="badge-count">${STATIC_GA_CHAPTERS.length}</span>`;
      staticAllBtn.addEventListener("click", () => selectStaticChapter("all"));
      staticAllLi.appendChild(staticAllBtn);
      quantNavGrid.appendChild(staticAllLi);

      STATIC_GA_CHAPTERS.forEach(ch => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.className = `nav-item-btn ${activeStaticChapterId === ch.id ? "active" : ""}`;
        btn.innerHTML = `<span>${ch.icon} ${ch.title}</span> <span class="badge-count">${ch.subsections.length}</span>`;
        btn.addEventListener("click", () => selectStaticChapter(ch.id));
        li.appendChild(btn);
        quantNavGrid.appendChild(li);
      });
    }
  }

  function selectSection(secId) {
    activeSectionId = secId;
    renderSidebar();
    renderFeed();
    renderDrill();
    closeAllDrawers();
  }

  function selectQuantChapter(chId) {
    activeQuantChapterId = chId;
    renderSidebar();
    renderFeed();
    renderDrill();
    closeAllDrawers();
  }

  function selectStaticChapter(chId) {
    activeStaticChapterId = chId;
    renderSidebar();
    renderFeed();
    renderDrill();
    closeAllDrawers();
  }

  function updateMonthHeaderLabel() {
    let label = "📅 All Months";
    if (activeMonth === "2026-08") label = "📅 August 2026";
    else if (activeMonth === "2026-07") label = "📅 July 2026";
    else if (activeMonth === "2026-06") label = "📅 June 2026";
    toggleMonthBtn.innerHTML = `${label} <span id="monthChevron">▼</span>`;

    // Update active class on month drawer buttons
    const monthBtns = monthNavGrid.querySelectorAll(".nav-item-btn");
    monthBtns.forEach(btn => {
      if (btn.getAttribute("onclick") === `selectMonth('${activeMonth}')`) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  window.selectMonth = function(m) {
    activeMonth = m;
    updateMonthHeaderLabel();
    renderFeed();
    closeAllDrawers();
  };

  // Toggle Event Listeners
  if (toggleSubjectBtn) {
    toggleSubjectBtn.addEventListener("click", () => {
      const isOpen = subjectNavDrawer.classList.contains("open");
      closeAllDrawers();
      if (!isOpen) {
        subjectNavDrawer.classList.add("open");
        const chev = document.getElementById("subjectChevron");
        if (chev) chev.textContent = "▲";
      }
    });
  }

  if (toggleTrackerBtn) {
    toggleTrackerBtn.addEventListener("click", () => {
      const isOpen = trackerNavDrawer.classList.contains("open");
      closeAllDrawers();
      if (!isOpen) {
        trackerNavDrawer.classList.add("open");
        const chev = document.getElementById("trackerChevron");
        if (chev) chev.textContent = "▲";
      }
    });
  }

  if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener("click", () => {
      if (activeSubject === "ca") {
        const isOpen = sectionNavDrawer.classList.contains("open");
        closeAllDrawers();
        if (!isOpen) {
          sectionNavDrawer.classList.add("open");
          const chev = document.getElementById("sidebarChevron");
          if (chev) chev.textContent = "▲";
        }
      } else {
        const isQuantOpen = quantNavDrawer.classList.contains("open");
        closeAllDrawers();
        if (!isQuantOpen) {
          quantNavDrawer.classList.add("open");
          const chev = document.getElementById("sidebarChevron");
          if (chev) chev.textContent = "▲";
        }
      }
    });
  }

  if (toggleMonthBtn) {
    toggleMonthBtn.addEventListener("click", () => {
      const isOpen = monthNavDrawer.classList.contains("open");
      closeAllDrawers();
      if (!isOpen) {
        monthNavDrawer.classList.add("open");
        const chev = document.getElementById("monthChevron");
        if (chev) chev.textContent = "▲";
      }
    });
  }

  if (toggleBookmarkFilterBtn) {
    toggleBookmarkFilterBtn.addEventListener("click", () => {
      onlyBookmarks = !onlyBookmarks;
      toggleBookmarkFilterBtn.classList.toggle("active", onlyBookmarks);
      renderFeed();
    });
  }

  if (toggleRecallBtn) {
    toggleRecallBtn.addEventListener("click", () => {
      activeRecallMode = !activeRecallMode;
      toggleRecallBtn.classList.toggle("active", activeRecallMode);
      toggleRecallBtn.innerHTML = activeRecallMode ? "👁️ Active Recall: ON" : "👁️ Active Recall: OFF";
      renderFeed();
    });
  }

  function updateBookmarkBadge() {
    bookmarkBadge.textContent = bookmarkedIds.length;
  }

  // Render Main Feed
  function renderFeed() {
    notesFeed.innerHTML = "";
    updateBookmarkBadge();

    if (activeSubject === "ca") {
      renderCAFeed();
    } else if (activeSubject === "quant") {
      renderQuantFeed();
    } else if (activeSubject === "static_ga") {
      renderStaticGAFeed();
    }
  }

  function formatSubtleDate(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length < 3) return dateStr;
    const year = parts[0];
    const monthNum = parts[1];
    const day = parts[2];
    const monthsMap = {
      "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr",
      "05": "May", "06": "Jun", "07": "Jul", "08": "Aug",
      "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec"
    };
    const monthName = monthsMap[monthNum] || monthNum;
    return `${day} ${monthName} ${year}`;
  }

  function getMonthNameFull(monthKey) {
    const monthsMap = {
      "2026-08": "August 2026",
      "2026-07": "July 2026",
      "2026-06": "June 2026",
      "2026-05": "May 2026"
    };
    return monthsMap[monthKey] || monthKey;
  }

  // Render Current Affairs Feed
  function renderCAFeed() {
    let filtered = CA_NOTES_DATA.filter(note => {
      const matchesSec = activeSectionId === "all" || note.secId === activeSectionId;
      const matchesMonth = activeMonth === "all" || note.date.startsWith(activeMonth);
      const matchesBookmark = !onlyBookmarks || bookmarkedIds.includes(note.id);
      return matchesSec && matchesMonth && matchesBookmark;
    });

    activeCountEl.textContent = `${filtered.length} notes`;

    let labelParts = [];
    if (activeSectionId !== "all") {
      const secObj = CA_SECTIONS.find(s => s.id === activeSectionId);
      if (secObj) labelParts.push(secObj.title);
    } else {
      labelParts.push("All CA Sections");
    }

    if (activeMonth !== "all") {
      labelParts.push(`Month: ${activeMonth}`);
    }

    if (onlyBookmarks) {
      labelParts.push("Starred Bookmarks Only");
    }

    activeFilterLabel.textContent = `📑 ${labelParts.join(" • ")}`;

    // If Section 5 (Appointments) or Master Who's Who is selected, render ONE single living Master Table across all months!
    if (activeSectionId === "sec5" || activeMasterWhosWhoMode) {
      renderMasterWhosWhoTable();
      return;
    }

    if (filtered.length === 0) {
      notesFeed.innerHTML = `
        <div class="note-card" style="padding: 40px; text-align: center; color: var(--text-muted);">
          <h3>🔍 No notes match your selected filters</h3>
          <p style="margin-top: 8px; font-size: 0.9rem;">Try selecting a different section or clearing starred filters.</p>
        </div>
      `;
      return;
    }

    // Group notes by month key in order of occurrence (August -> July -> June)
    const monthGroups = {};
    const monthKeysInOrder = [];

    filtered.forEach(note => {
      const mKey = note.date ? note.date.substring(0, 7) : "Other";
      if (!monthGroups[mKey]) {
        monthGroups[mKey] = [];
        monthKeysInOrder.push(mKey);
      }
      monthGroups[mKey].push(note);
    });

    monthKeysInOrder.forEach(mKey => {
      // If showing "All Months", display a month group divider banner
      if (activeMonth === "all" && monthKeysInOrder.length > 1) {
        const groupBanner = document.createElement("div");
        groupBanner.className = "month-group-banner";
        groupBanner.innerHTML = `
          <span>📅 ${getMonthNameFull(mKey)}</span>
          <span class="badge-count" style="background: rgba(0,0,0,0.08); color: var(--text-main); font-weight: 600;">${monthGroups[mKey].length} Notes</span>
        `;
        notesFeed.appendChild(groupBanner);
      }

      // Separate notes into Appointment notes vs Regular notes
      const apptNotes = [];
      const regularNotes = [];

      monthGroups[mKey].forEach(note => {
        const titleLower = note.title ? note.title.toLowerCase() : "";
        const isAppt = note.secId === "sec5" || titleLower.includes("appoint") || titleLower.includes("sworn in") || titleLower.includes("takes charge") || titleLower.includes("dg of") || titleLower.includes("chairman of") || titleLower.includes("president of") || titleLower.includes("md & ceo");
        if (isAppt) {
          apptNotes.push(note);
        } else {
          regularNotes.push(note);
        }
      });

      // 1. Render clean referral notice if any appointments exist in this month group
      if (apptNotes.length > 0) {
        const apptNotice = document.createElement("div");
        apptNotice.className = "note-card";
        apptNotice.style.background = "#fdfaf3";
        apptNotice.style.borderLeft = "4px solid var(--accent-blue)";
        apptNotice.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
            <div style="font-size: 0.95rem; color: var(--text-main);">
              <strong>ℹ️ Note:</strong> All ${apptNotes.length} official appointments for this period are consolidated in the <strong>🤝 Appointments</strong> section.
            </div>
            <button class="toggle-chip active" onclick="selectSection('sec5')" style="white-space: nowrap; cursor: pointer; padding: 6px 14px; font-weight: 600;">
              Open Appointments Table ➔
            </button>
          </div>
        `;
        notesFeed.appendChild(apptNotice);
      }

      // 2. Render Regular Notes as individual cards
      regularNotes.forEach(note => {
        const isBookmarked = bookmarkedIds.includes(note.id);
        const secObj = CA_SECTIONS.find(s => s.id === note.secId);
        const isCompact = note.tier === "Tier B+" || (!note.hook && !note.trap && !note.interviewQ && note.bullets.length <= 1);
        
        const card = document.createElement("div");
        card.className = `note-card ${isCompact ? 'note-card-compact' : ''}`;

        let bulletsHtml = "";
        if (note.bullets && note.bullets.length > 0) {
          bulletsHtml = `
            <ul class="bullets-list">
              ${note.bullets.map(b => `<li>${processBulletText(b)}</li>`).join("")}
            </ul>
          `;
        }

        let hookHtml = note.hook ? `
          <div class="hook-box">
            🪝 <strong>Rationale:</strong> ${parseMarkdown(note.hook)}
          </div>
        ` : "";

        let staticHtml = note.staticGk ? `
          <div class="static-gk-box">
            🏛️ <strong>Static GK:</strong> ${parseTrapAndStaticGK(note.staticGk)}
          </div>
        ` : "";

        let trapHtml = note.trap ? `
          <div class="trap-box">
            ⚠️ <strong>Trap Contrast:</strong> ${parseTrapAndStaticGK(note.trap)}
          </div>
        ` : "";

        let interviewHtml = note.interviewQ ? `
          <div class="interview-box">
            💼 <strong>Interview Insight:</strong> ${parseMarkdown(note.interviewQ)}
          </div>
        ` : "";

        let mnemonicHtml = note.mnemonic ? `
          <div class="mnemonic-box">
            💡 <strong>Memory Mnemonic:</strong> ${parseMarkdown(note.mnemonic)}
          </div>
        ` : "";

        let clusterHtml = note.cluster ? `
          <div class="institutional-cluster-box" title="Linked Institutional Story Arc">
            🏛️ ${parseMarkdown(note.cluster)}
          </div>
        ` : "";

        let miniGridHtml = "";
        if (note.miniGrid && note.miniGrid.headers && note.miniGrid.rows) {
          const headers = note.miniGrid.headers.map(h => `<th>${h}</th>`).join("");
          const rows = note.miniGrid.rows.map(r => `<tr>${r.map(c => `<td>${parseTrapAndStaticGK(c)}</td>`).join("")}</tr>`).join("");
          miniGridHtml = `
            <table class="mini-grid-table">
              <thead><tr>${headers}</tr></thead>
              <tbody>${rows}</tbody>
            </table>
          `;
        }

        const cardDetailsId = `details_${note.id}`;

        if (activeFlashcardMode) {
          card.onclick = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
            const detailsEl = document.getElementById(cardDetailsId);
            if (detailsEl) detailsEl.classList.toggle('flashcard-body-hidden');
          };
        }

        card.innerHTML = `
          <div class="note-header">
            <h3 class="note-title">📰 ${parseMarkdown(note.title)}</h3>
            <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
              <span class="note-date-subtle" title="Publication Date">${formatSubtleDate(note.date)}</span>
              <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmark('${note.id}')" title="Bookmark Note">
                ${isBookmarked ? '★' : '☆'}
              </button>
            </div>
          </div>
          ${clusterHtml}
          ${activeFlashcardMode ? '<div class="flashcard-prompt">🃏 Tap Card to Reveal Details & Memory Hooks</div>' : ''}
          <div id="${cardDetailsId}" class="${activeFlashcardMode ? 'flashcard-body-hidden' : ''}">
            ${hookHtml}
            ${miniGridHtml}
            ${bulletsHtml}
            ${mnemonicHtml}
            ${staticHtml}
            ${trapHtml}
            ${interviewHtml}
          </div>
        `;

        notesFeed.appendChild(card);
      });
    });
  }

  // Render Centralized Master Living "Who's Who & Appointments Directory" Table
  function renderMasterWhosWhoTable() {
    notesFeed.innerHTML = "";

    // Gather all appointment notes across all months & static GA
    const allApptNotes = CA_NOTES_DATA.filter(n => {
      const titleLower = n.title ? n.title.toLowerCase() : "";
      return n.secId === "sec5" || titleLower.includes("appoint") || titleLower.includes("sworn in") || titleLower.includes("takes charge") || titleLower.includes("dg of") || titleLower.includes("chairman of") || titleLower.includes("president of") || titleLower.includes("md & ceo");
    });

    // Sort by date descending (latest first: August -> July -> June)
    allApptNotes.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

    activeCountEl.textContent = `${allApptNotes.length} appointments`;

    const seenRoles = new Set();
    const rowsHtml = allApptNotes.map(n => {
      let person = n.title;
      let role = "Official Appointment";
      let context = n.bullets && n.bullets[0] ? n.bullets[0] : "";
      
      if (n.miniGrid && n.miniGrid.rows && n.miniGrid.rows[0]) {
        person = n.miniGrid.rows[0][0] || n.title;
        role = n.miniGrid.rows[0][1] || "Official Appointment";
        context = n.miniGrid.rows[0][2] || context;
      }

      if (person === role || person.length > 35) {
        let parts;
        if (n.title.includes(" Appointed ")) {
          parts = n.title.split(" Appointed ");
          person = parts[0].replace(/^(RBI|SEBI|IRDAI|IFSCA|CCI|Government|Center)\s+/, '').trim();
          role = parts[1].trim();
        } else if (n.title.includes(" Granted ")) {
          parts = n.title.split(" Granted ");
          person = parts[0].trim();
          role = parts[1].trim();
        } else if (n.title.includes(" Takes Charge ")) {
          parts = n.title.split(" Takes Charge ");
          person = parts[0].trim();
          role = parts[1].trim();
        }
      }

      const roleKey = (role + person).toLowerCase().replace(/[^a-z0-9]/g, '');
      const isLatest = !seenRoles.has(roleKey);
      seenRoles.add(roleKey);

      const isBm = bookmarkedIds.includes(n.id);

      return `
        <tr>
          <td style="font-weight: 600; white-space: nowrap;">${formatSubtleDate(n.date)}</td>
          <td style="font-weight: 700; color: var(--accent-blue); width: 22%;">
            ${parseMarkdown(person)}
            ${isLatest ? '<span class="badge-count" style="background: var(--accent-green); color: #fff; font-size: 0.65rem; margin-left: 4px;">ACTIVE 2026</span>' : ''}
          </td>
          <td style="font-weight: 600; width: 30%;">${parseMarkdown(role)}</td>
          <td style="font-size: 0.88rem; color: var(--text-muted);">${parseTrapAndStaticGK(context)}</td>
          <td style="text-align: center; width: 8%;">
            <button class="btn-bookmark ${isBm ? 'bookmarked' : ''}" onclick="toggleBookmark('${n.id}')" title="Bookmark Appointment">
              ${isBm ? '★' : '☆'}
            </button>
          </td>
        </tr>
      `;
    }).join("");

    const masterCard = document.createElement("div");
    masterCard.className = "note-card";
    masterCard.innerHTML = `
      <div class="note-header" style="border-bottom: 2px solid var(--accent-blue); padding-bottom: 12px; margin-bottom: 16px;">
        <div>
          <h2 class="note-title" style="font-size: 1.3rem;">🤝 Appointments Master Directory (Living Consolidated Table)</h2>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">Single living master table combining all appointments across June, July, August 2026 & Static GA notes into one updated reference directory.</p>
        </div>
        <span class="badge-count" style="background: var(--accent-blue); color: #fff; font-size: 0.9rem; padding: 6px 14px;">${allApptNotes.length} Active Appointments</span>
      </div>
      <div style="overflow-x: auto;">
        <table class="mini-grid-table" style="width: 100%; margin: 0;">
          <thead>
            <tr>
              <th>Date</th>
              <th>Appointee / Official</th>
              <th>New Designation & Organization</th>
              <th>Key Context & Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;

    notesFeed.appendChild(masterCard);
  }

  // Render Quant Superbook Feed
  function renderQuantFeed() {
    let chapters = QUANT_CHAPTERS.filter(ch => {
      return activeQuantChapterId === "all" || ch.id === activeQuantChapterId;
    });

    let totalSubsections = chapters.reduce((acc, ch) => acc + ch.subsections.length, 0);
    activeCountEl.textContent = `${totalSubsections} topics`;

    let activeTitle = activeQuantChapterId === "all" ? "All 8 Quant Superbook Topics" : QUANT_CHAPTERS.find(c => c.id === activeQuantChapterId).title;
    activeFilterLabel.textContent = `📐 ${activeTitle}`;

    chapters.forEach(ch => {
      ch.subsections.forEach(sub => {
        const isBookmarked = bookmarkedIds.includes(sub.subId);
        if (onlyBookmarks && !isBookmarked) return;

        const card = document.createElement("div");
        card.className = "note-card";

        let bodyHtml = "";

        if (sub.type === "table") {
          let headersHtml = sub.headers.map(h => `<th>${h}</th>`).join("");
          let rowsHtml = sub.rows.map(r => `
            <tr>
              ${r.map(cell => `<td>${parseMarkdown(cell)}</td>`).join("")}
            </tr>
          `).join("");

          bodyHtml = `
            <div class="quant-table-wrapper">
              <table class="quant-table">
                <thead><tr>${headersHtml}</tr></thead>
                <tbody>${rowsHtml}</tbody>
              </table>
            </div>
          `;
        } else if (sub.type === "bullets") {
          bodyHtml = `
            <ul class="bullets-list">
              ${sub.items.map(item => `<li>${parseMarkdown(item)}</li>`).join("")}
            </ul>
          `;
        } else if (sub.type === "examples") {
          bodyHtml = sub.items.map((ex, idx) => `
            <div class="quant-example-card">
              <div class="quant-example-q">💡 ${parseMarkdown(ex.q)}</div>
              <div class="quant-example-sol">${parseMarkdown(ex.sol)}</div>
            </div>
          `).join("");
        }

        card.innerHTML = `
          <div class="note-header">
            <h3 class="note-title">${ch.icon} ${sub.title}</h3>
            <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmark('${sub.subId}')" title="Bookmark Topic">
              ${isBookmarked ? '★' : '☆'}
            </button>
          </div>
          ${bodyHtml}
        `;

        notesFeed.appendChild(card);
      });
    });
  }

  // Render Static GA Master Book Feed
  function renderStaticGAFeed() {
    let chapters = STATIC_GA_CHAPTERS.filter(ch => {
      return activeStaticChapterId === "all" || ch.id === activeStaticChapterId;
    });

    let totalSubsections = chapters.reduce((acc, ch) => acc + ch.subsections.length, 0);
    activeCountEl.textContent = `${totalSubsections} topics`;

    let activeTitle = activeStaticChapterId === "all" ? "All Static GA Master Book Chapters" : STATIC_GA_CHAPTERS.find(c => c.id === activeStaticChapterId).title;
    activeFilterLabel.textContent = `📘 ${activeTitle}`;

    chapters.forEach(ch => {
      ch.subsections.forEach(sub => {
        const isBookmarked = bookmarkedIds.includes(sub.subId);
        if (onlyBookmarks && !isBookmarked) return;

        const card = document.createElement("div");
        card.className = "note-card";

        let bodyHtml = "";

        if (sub.type === "table") {
          let headersHtml = sub.headers.map(h => `<th>${h}</th>`).join("");
          let rowsHtml = sub.rows.map(r => `
            <tr>
              ${r.map(cell => `<td>${parseTrapAndStaticGK(cell)}</td>`).join("")}
            </tr>
          `).join("");

          bodyHtml = `
            <div class="quant-table-wrapper">
              <table class="quant-table">
                <thead><tr>${headersHtml}</tr></thead>
                <tbody>${rowsHtml}</tbody>
              </table>
            </div>
          `;
        } else if (sub.type === "bullets") {
          bodyHtml = `
            <ul class="bullets-list">
              ${sub.items.map(item => `<li>${processBulletText(item)}</li>`).join("")}
            </ul>
          `;
        } else if (sub.type === "formula") {
          bodyHtml = `
            <div class="formula-box">
              ${sub.items.map(f => `<div>⚡ ${parseTrapAndStaticGK(f)}</div>`).join("")}
            </div>
          `;
        } else if (sub.type === "examCorner") {
          bodyHtml = `
            <div class="exam-corner-box">
              <h4 style="color: var(--accent-green); margin-bottom: 8px;">🎯 Exam Revision Corner</h4>
              <ul class="bullets-list">
                ${sub.items.map(item => `<li>${parseTrapAndStaticGK(item)}</li>`).join("")}
              </ul>
            </div>
          `;
        }

        card.innerHTML = `
          <div class="note-header">
            <h3 class="note-title">${ch.icon} ${sub.title}</h3>
            <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmark('${sub.subId}')" title="Bookmark Topic">
              ${isBookmarked ? '★' : '☆'}
            </button>
          </div>
          ${bodyHtml}
        `;

        notesFeed.appendChild(card);
      });
    });
  }

  // Render Section Drill at the bottom
  function renderDrill() {
    drillContainer.innerHTML = "";
    if (activeSubject !== "ca" || activeSectionId === "all") return;

    const drill = CA_SECTION_DRILLS[activeSectionId];
    if (!drill) return;

    const panel = document.createElement("div");
    panel.className = "drill-panel";
    const secObj = CA_SECTIONS.find(s => s.id === activeSectionId);

    let retrievalsHtml = drill.retrievals.map((q, idx) => `
      <div class="quiz-q-item">
        <strong>Q${idx+1}.</strong> ${parseMarkdown(q)}
      </div>
    `).join("");

    let coverTestsHtml = drill.coverTests.map(c => `
      <div class="quiz-q-item">
        ⚡ ${parseTrapAndStaticGK(c)}
      </div>
    `).join("");

    panel.innerHTML = `
      <div class="drill-header">
        🔒 SECTION DRILL & COVER TEST — ${secObj ? secObj.title : ''}
      </div>
      
      <h4 style="font-size: 0.95rem; color: var(--accent-warm); margin-bottom: 10px;">🔁 Active Retrieval Questions (Test Recall Before Revealing)</h4>
      <div class="quiz-q-list">
        ${retrievalsHtml}
      </div>

      <h4 style="font-size: 0.95rem; color: var(--accent-gold); margin-bottom: 10px; margin-top: 18px;">🔒 High-Yield Cover Tests</h4>
      <div class="quiz-q-list">
        ${coverTestsHtml}
      </div>

      <button class="answer-toggle-btn" onclick="toggleAnswerBox(this)">🙈 Reveal Section Drill Answers</button>
      <div class="answer-box">
        <strong>🔑 Verified Answers:</strong><br>
        ${parseTrapAndStaticGK(drill.answers)}
      </div>
    `;

    drillContainer.appendChild(panel);
  }

  // Window global functions
  window.toggleBookmark = function(noteId) {
    if (bookmarkedIds.includes(noteId)) {
      bookmarkedIds = bookmarkedIds.filter(id => id !== noteId);
    } else {
      bookmarkedIds.push(noteId);
    }
    localStorage.setItem("ca_bookmarks", JSON.stringify(bookmarkedIds));
    renderFeed();
  };

  window.toggleAnswerBox = function(btn) {
    const box = btn.nextElementSibling;
    box.classList.toggle("show");
    btn.textContent = box.classList.contains("show") ? "🙈 Hide Section Drill Answers" : "🙈 Reveal Section Drill Answers";
  };

  // Initial Execution
  initTrackerPanel();
  renderSidebar();
  renderFeed();
  renderDrill();
});
