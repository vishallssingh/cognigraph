// Current Affairs Command Center 2026 — Master Dataset (148 Items, 1st to 7th August 2026)

const CA_SECTIONS = [
  { id: "sec1", title: "1. 💰 ESI, FINANCE & BUSINESS NEWS", emoji: "💰" },
  { id: "sec2", title: "2. 🏛️ REGULATORY BODIES NEWS", emoji: "🏛️" },
  { id: "sec3", title: "3. 🏦 BANKING & INSURANCE NEWS", emoji: "🏦" },
  { id: "sec4", title: "4. 🌐 NATIONAL, STATE & INTERNATIONAL NEWS", emoji: "🌐" },
  { id: "sec5", title: "5. 🤝 MoUs, CONFERENCES & APPOINTMENTS", emoji: "🤝" },
  { id: "sec6", title: "6. 🔬 SCIENCE, TECHNOLOGY, DEFENCE & SPORTS", emoji: "🔬" },
  { id: "sec7", title: "7. 🏆 AWARDS, BOOKS, INDICES & RANKINGS", emoji: "🏆" },
  { id: "sec8", title: "8. 📅 IMPORTANT DAYS & PERSONS IN NEWS", emoji: "📅" },
  { id: "sec9", title: "9. 📋 PIB, CIRCULARS & NOTIFICATIONS", emoji: "📋" },
  { id: "sec10", title: "10. 📌 MISCELLANEOUS — GOVT SCHEMES & STATIC", emoji: "📌" },
  { id: "sec11", title: "11. 🧠 REVISION", emoji: "🧠" }
];

const CA_NOTES_DATA = [
  {
    "title": "Gross GST Collections Surge 15.4% to ₹2.11 Trillion in July 2026",
    "id": "note-sec1-1",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "GST introduced July 1, 2017 via 101st Constitutional Amendment Act, 2016 (Article 279A).",
    "tier": "Tier A",
    "hook": "GST collections serve as India's primary high-frequency indicator of indirect tax efficiency and macroeconomic health.",
    "date": "2026-08-01",
    "bullets": [
      "Growth was driven primarily by higher mop-up from **domestic transactions** as well as **import of goods**.",
      "Represents one of the highest monthly gross GST collection figures recorded."
    ],
    "trap": "Do not confuse Gross GST collection (before refunds) with Net GST collection (tax retained post-refunds)."
  },
  {
    "title": "NCGTC Tweaks MFI Credit Guarantee Norms (CGSMFI 2.0) to Boost Scheme Utilisation",
    "id": "note-sec1-2",
    "secId": "sec1",
    "interviewQ": "\"Why did NCGTC increase mandatory bank lending allocation for small/mid MFIs to 15%?\"\n💡 **Model Answer: Reserving 15% prevents large MFIs from monopolizing bank credit, ensuring funds reach lower-tier micro-lenders.**",
    "staticGk": "NCGTC established in 2014 by Ministry of Finance | HQ: Mumbai.",
    "tier": "Tier A",
    "hook": "Restructured rules ensure credit guarantee cover reaches lower-tier microfinance institutions.",
    "date": "2026-08-05",
    "bullets": [
      "The **National Credit Guarantee Trustee Company Ltd. (NCGTC)** modified allocation rules under **CGSMFI 2.0**.",
      "**Mandatory Bank Allocation:** Commercial banks must lend at least **15%** of their total ₹20,000 crore corpus to **small- and mid-size MFIs** (up from 5% and 10%).",
      "**Sanction Cap:** Maximum bank loan capped at **20% of AUM** of NBFC-MFIs and MFIs.",
      "**Lender Size Caps:** Max loan capped at **₹100 crore** (small MFIs), **₹200 crore** (medium MFIs), and **₹1,000 crore** (large MFIs).",
      "**MFI Classification by AUM:** Small MFI (<₹500 crore AUM), Medium MFI (₹500–₹2,000 crore AUM), Large MFI (>₹2,000 crore AUM).",
      "**Scheme Corpus:** Guarantees loans up to **₹20,000 crore** (wholly owned by Govt of India)."
    ],
    "trap": "Small MFI limit (<₹500 cr AUM) vs Medium MFI limit (₹500–₹2,000 cr AUM) vs 15% bank lending pool quota."
  },
  {
    "title": "Government Approves ₹4,687 Crore Interest Subsidies for Ethanol Projects via NABARD",
    "id": "note-sec1-3",
    "secId": "sec1",
    "interviewQ": "\"What role does NABARD play as the nodal agency for ethanol interest subventions?\"\n💡 **Model Answer: NABARD administers and verifies subvention claims from lending banks to ensure capital credit flows into bio-fuel infrastructure.**",
    "staticGk": "NABARD established July 12, 1982 (B. Sivaraman Committee) | HQ: Mumbai.",
    "tier": "Tier A",
    "hook": "Expanding ethanol production capacity accelerates India's E20 target (20% ethanol blending by 2025-26).",
    "date": "2026-08-01",
    "bullets": [
      "Union Government approved **₹4,687 crore** in interest subsidies for eligible ethanol projects.",
      "**Nodal Agency:** **NABARD** serves as the nodal disbursing agency (**₹2,075 crore** released since FY23).",
      "**Subvention Terms:** Interest subvention of **6% per annum or 50% of interest charged** (whichever lower) for **5 years**.",
      "Policy Alignment: Boosts grain-based and sugar-based distilleries under Ethanol Blended Petrol (EBP) program."
    ],
    "trap": "Ethanol interest subvention (6% p.a. or 50% of interest for 5 yrs) vs priority sector short-term crop loan subvention (capped at 3%)."
  },
  {
    "title": "Taxation and Other Laws (Amendment) Bill, 2026 Introduced (2041 Sunset & UPI MDR)",
    "id": "note-sec1-4",
    "secId": "sec1",
    "interviewQ": "\"Why is the government proposing enabling provisions for MDR on digital payments like UPI?\"\n💡 **Model Answer: Zero-MDR strains acquiring bank infrastructure; introducing capped MDR creates a sustainable revenue model for payment security.**",
    "staticGk": "Payment and Settlement Systems Act, 2007 empowers RBI to regulate payment systems.",
    "tier": "Tier A",
    "hook": "Extending tax exemptions for capital equipment foreign suppliers provides long-term stability to domestic electronics manufacturers.",
    "date": "2026-08-05",
    "bullets": [
      "Government introduced **Taxation and Other Laws (Amendment) Bill, 2026** amending Payment & Settlement Systems Act 2007, Income-tax Act 2025, and Finance Act 2026.",
      "**Electronics Exemption Extension:** Extends tax exemption for foreign companies supplying capital goods/tooling to Indian contract manufacturers for electronic goods until **March 31, 2041** (extended from earlier sunset of 2030-31).",
      "**UPI MDR Proposal:** Amends Payment & Settlement Systems Act 2007 to permit Merchant Discount Rate (MDR) on non-negative list electronic payment modes including UPI.",
      "Current Baseline: Credit card MDR ~1.5%, debit card up to 0.9%, UPI currently 0% for merchants."
    ],
    "trap": "Extended sunset year for electronics capital goods tax exemption (**March 31, 2041**) vs earlier sunset year (**March 31, 2031**)."
  },
  {
    "title": "IMF Estimates Indian Economy Will Cross $5 Trillion Mark in FY29",
    "id": "note-sec1-5",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "IMF established 1944 at Bretton Woods | HQ: Washington D.C. | MD: Kristalina Georgieva.",
    "tier": "Tier A",
    "hook": "Multilateral economic projections validate India's structural growth trajectory toward becoming the world's 3rd largest economy.",
    "date": "2026-08-01",
    "bullets": [
      "FM Sitharaman stated India is on track to cross **USD 5-trillion milestone in FY29 (2028-29)**.",
      "Data Source: IMF World Economic Outlook database (April 2026 edition).",
      "Projected Nominal GDP: India's GDP projected to reach **USD 5.1 trillion by FY 2028-29**."
    ],
    "trap": "Target fiscal year: **FY29 / 2028-29** (exact projected GDP of $5.1 trillion)."
  },
  {
    "title": "IMF Flags Financial Stability Risks from BigTech Expansion in Payments",
    "id": "note-sec1-6",
    "secId": "sec1",
    "interviewQ": "\"Why are central banks and the IMF concerned about BigTech entry into payments?\"\n💡 **Model Answer: Platform data monopolies allow rapid systemic scale, creating payment concentration risks outside traditional banking laws.**",
    "staticGk": "IMF HQ: Washington D.C.",
    "tier": "Tier A",
    "hook": "Platform-based tech conglomerates expanding into payments create systemic financial stability and concentration risks.",
    "date": "2026-08-05",
    "bullets": [
      "IMF report warned growing role of **BigTech firms** in financial services poses systemic financial stability risks if unchecked.",
      "Definition: BigTech defined as large technology companies using platform-based business models and data-driven network effects to scale credit and payments.",
      "Policy Mandate: Recommends activity-based central bank regulation to prevent shadow banking risks."
    ],
    "trap": "BigTech financial risk (platform network scale risk) vs FinTech risk (niche digital startup operational risk)."
  },
  {
    "title": "Government to Offload up to 6.5% Stake in LIC via Offer for Sale (OFS)",
    "id": "note-sec1-7",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "LIC founded 1st September 1956 under LIC Act, 1956 | HQ: Mumbai.",
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Disinvestment of **2.5% base equity** with an additional **4% greenshoe option** (total up to 6.5%).",
      "Floor price fixed at **₹382 per share**.",
      "Centre currently holds 96.5% stake in LIC."
    ],
    "trap": null
  },
  {
    "title": "Moody's Assigns First-Time Investment-Grade 'Baa2' Rating to RBL Bank",
    "id": "note-sec1-8",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "RBL Bank (HQ: Mumbai | Tagline: \"Apno Ka Bank\").",
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Moody's Ratings assigned a first-time rating of **Baa2 / P-2** with 'Stable' outlook to RBL Bank.",
      "Incorporates 2-notch uplift for affiliate support from Emirates NBD Bank."
    ],
    "trap": null
  },
  {
    "title": "HSBC India Composite PMI (July 2026): Manufacturing at 53.5 & Services at 53.3",
    "id": "note-sec1-9",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "Purchasing Managers' Index (PMI) is compiled by S&P Global; PMI score > 50 indicates expansion, while < 50 indicates contraction.",
    "tier": "Tier B+",
    "hook": "High-frequency survey indicator reflecting health of India's manufacturing and services output.",
    "date": "2026-08-01",
    "bullets": [
      "HSBC India Manufacturing PMI registered **53.5 in July 2026** (above 50 signals manufacturing expansion).",
      "HSBC India Services PMI Business Activity Index stood at **53.3 in July 2026** (down from 57.4 in June)."
    ],
    "trap": "Manufacturing PMI (53.5) vs Services PMI (53.3, down from 57.4 in June)."
  },
  {
    "title": "OPEC+ Agrees to Increase Crude Oil Production by 188,000 Barrels per Day",
    "id": "note-sec1-11",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "OPEC+ agreed to increase crude oil production by **188,000 barrels per day (bpd)** starting September 2026 (HQ: Vienna, Austria)."
    ],
    "trap": null
  },
  {
    "title": "India Expands Crude Oil Sourcing Base to 41 Countries",
    "id": "note-sec1-12",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "Union Minister of Petroleum and Natural Gas: Hardeep Singh Puri | India is world's 3rd largest crude oil consumer.",
    "tier": "Tier B+",
    "hook": "Diversifying crude oil import channels reduces supply vulnerability amid West Asia geopolitical tensions.",
    "date": "2026-08-05",
    "bullets": [
      "India expanded its crude oil sourcing base to **41 countries** (up from 27 countries earlier) to enhance energy import security."
    ],
    "trap": null
  },
  {
    "title": "RBI Streamlines Supervisory Framework by Consolidating 64 Master Directions",
    "id": "note-sec2-13",
    "secId": "sec2",
    "interviewQ": "\"Why is RBI consolidating circulars into Master Directions?\"\n💡 **Model Answer: Creates a single source of truth, eliminates obsolete mandates, and lowers compliance risk for regulated entities.**",
    "staticGk": "RBI established April 1, 1935 under RBI Act, 1934 | HQ: Mumbai.",
    "tier": "Tier A",
    "hook": "Consolidates fragmented circulars into unified directions to reduce compliance friction for banks.",
    "date": "2026-08-01",
    "bullets": [
      "RBI issued **64 consolidated Master Directions** administered by its **Department of Supervision (DoS)**.",
      "Consolidates **628 existing circulars** across **11 categories of Regulated Entities (REs)**."
    ],
    "trap": "Master Directions (ongoing rulebook) vs Master Circulars (annual snapshot compilations)."
  },
  {
    "title": "RBI Mandates Machine Authentication & Impounding of Fake Currency in Border Branches",
    "id": "note-sec2-14",
    "secId": "sec2",
    "interviewQ": "\"Can a bank branch return a suspected counterfeit note to a customer?\"\n💡 **Model Answer: No, regulations strictly mandate immediate impounding to prevent fake notes from re-entering cash circulation.**",
    "staticGk": "Note printing presses at Mysuru, Salboni, Dewas, Nashik | Mints at Mumbai, Hyderabad, Kolkata, Noida.",
    "tier": "Tier A",
    "hook": "Counters cross-border Fake Indian Currency Notes (FICN) smuggling and preserves cash integrity.",
    "date": "2026-08-05",
    "bullets": [
      "Note authentication and sorting machines mandatory in all bank branches in **districts sharing international borders**.",
      "**100% of received banknotes** must be machine-examined for authenticity.",
      "**Impounding Mandate:** Counterfeit notes **must be impounded immediately** — returning or destroying fake notes at the bank is strictly illegal."
    ],
    "trap": "Returning or destroying a fake note is illegal — banks must impound it and issue an acknowledgement receipt."
  },
  {
    "title": "SEBI Clarifies Rules for Private Share Transfers in Unlisted Companies",
    "id": "note-sec2-15",
    "secId": "sec2",
    "interviewQ": "\"Why did SEBI set a 200-buyer cap per FY for secondary unlisted share deals?\"\n💡 **Model Answer: Prevents unlisted companies from conducting backdoor public issues without fulfilling prospectus disclosure rules.**",
    "staticGk": "SEBI established 1988, statutory powers in 1992 via SEBI Act, 1992 | HQ: Mumbai.",
    "tier": "Tier A",
    "hook": "Prevents illegal public offerings disguised as private secondary share sales.",
    "date": "2026-08-01",
    "bullets": [
      "Secondary transfer of unlisted company shares by an existing shareholder to **≤200 buyers in a FY** is **NOT** treated as a public issue.",
      "Contractual rights like **Right of First Refusal (ROFR)** can be honored.",
      "Exceeding **200 buyers per FY** automatically converts the transaction into a **Deemed Public Issue**."
    ],
    "trap": "200 buyers limit per FY for secondary unlisted share deals vs 200 private placement limit under Sec 42 Companies Act 2013."
  },
  {
    "title": "IRDAI Tightens Intermediary Oversight and Relaxes Insurer Investment Norms",
    "id": "note-sec1-16",
    "secId": "sec1",
    "interviewQ": "\"How do IRDAI's revised investment norms impact infrastructure financing?\"\n💡 **Model Answer: Permitting up to 20% assets in AA+ Infra SPVs channels long-term insurance capital into national infrastructure.**",
    "staticGk": "IRDAI established under IRDA Act, 1999 (Malhotra Committee) | HQ: Hyderabad.",
    "tier": "Tier A",
    "hook": "Frees up insurer capital for infrastructure while enforcing training standards on agents.",
    "date": "2026-08-05",
    "bullets": [
      "**Intermediary Registration Validity:** Certificate valid perpetually subject to **annual non-refundable fee** (higher of **₹10,000 or 0.04% commission**).",
      "**IMF Training Mandate:** Principal officers & salespersons must complete **≥25 hours of training once every 3 years**.",
      "**SPV Investment Cap:** Insurers allowed to invest up to **20%** in operational Infra SPVs rated **AA or above**.",
      "**AIF/VCF Investment Caps:** Combined exposure capped at **3% for life insurers** and **5% for general insurers**.",
      "**Promoter & Repo Caps:** Promoter group exposure capped at **5% of investment assets**; Repo/G-Sec lending capped at lower of **25% of available securities or ₹10,000 crore**."
    ],
    "trap": "AIF/VCF cap for Life Insurers (3%) vs General Insurers (5%)."
  },
  {
    "title": "SC Directs RBI on Mule Accounts SOP & IRDAI on ANPR Motor Insurance Verification",
    "id": "note-sec2-17",
    "secId": "sec2",
    "interviewQ": "\"How do SOPs and tools like MuleHunter.AI assist banks in countering cyber fraud?\"\n💡 **Model Answer: Automated pattern matching flags suspicious account clusters instantly, freezing fraudulent transactions before funds leave.**",
    "staticGk": "I4C under MHA (New Delhi) | IRDAI under IRDA Act 1999 (HQ Hyderabad) | Motor Vehicles Act 1988 mandates third-party motor insurance.",
    "tier": "Tier A",
    "hook": "Judicial directives accelerate inter-regulatory SOPs to freeze cyber-fraud accounts and enforce motor insurance.",
    "date": "2026-08-01",
    "bullets": [
      "Supreme Court directed **RBI** to circulate SOP for dealing with **mule accounts** linked to cyber fraud.",
      "RBI combating tools: Uses **MuleHunter.AI** in collaboration with **I4C** (Indian Cyber Crime Coordination Centre under MHA).",
      "SC directed Central Govt & **IRDAI** to pilot **Automatic Number Plate Recognition (ANPR)**-based insurance verification at fuel stations to deny fuel sales to uninsured vehicles."
    ],
    "trap": "MuleHunter.AI (RBI AI tool) vs I4C (MHA national cyber crime coordination portal)."
  },
  {
    "title": "Cybersecurity Benchmarks: DPDPA 2023, RBI IT Governance & SEBI CSCRF",
    "id": "note-sec2-18",
    "secId": "sec2",
    "interviewQ": "\"Why do financial entities face overlapping cybersecurity regulations like DPDPA, RBI IT, and SEBI CSCRF?\"\n💡 **Model Answer: DPDPA protects individual data privacy, while RBI/SEBI norms protect institutional market liquidity and transaction security.**",
    "staticGk": "DPDPA 2023 enacted under MeitY.",
    "tier": "Tier A",
    "hook": "Multi-regulatory frameworks enforce operational resilience and heavy statutory penalties across India's digital ecosystem.",
    "date": "2026-08-05",
    "bullets": [
      "**RBI Penalties:** RBI imposed **₹54.78 crore in penalties across 353 cases** in FY25 for IT/cybersecurity lapses.",
      "**DPDPA 2023 Penalties:** Statutory penalties up to **₹250 crore** for security failures and **₹200 crore** for breach notification failures.",
      "**RBI IT Governance & 2FA:** IT Governance Directions (effective April 2024); Authentication Directions 2025 mandate **2FA with at least one dynamic factor** for domestic digital transactions.",
      "**SEBI CSCRF 2024:** Applies to **22 types of regulated entities** across a **5-tier model** (exchanges, depositories, brokers, AMCs)."
    ],
    "trap": "DPDPA penalty for security failure (up to ₹250 crore) vs breach notification failure (up to ₹200 crore)."
  },
  {
    "title": "RBI Monetary Policy Statement 2026-27 (62nd MPC Meeting Highlights)",
    "id": "note-sec1-19",
    "secId": "sec1",
    "interviewQ": "\"What factors guided the MPC's decision to hold repo rate at 5.25%?\"\n💡 **Model Answer: Core inflation moderation and robust FDI buffers allowed the MPC to maintain a neutral stance while supporting 6.7% GDP growth.**",
    "staticGk": "MPC constituted under Sec 45ZB of RBI Act, 1934 | 6 members | Inflation target: 4% (+/- 2%).",
    "tier": "Tier A",
    "hook": "The MPC balances inflation control with economic growth momentum, setting benchmark interest rates for FY27.",
    "date": "2026-08-01",
    "bullets": [
      "MPC held 62nd meeting from August 3 to 5, 2026.",
      "Chairmanship: **Sanjay Malhotra** (RBI Governor).",
      "**Repo Rate:** Kept unchanged at **5.25%**.",
      "**Real GDP Growth Projection (FY 2026-27):** Projected at **6.7%** (Q1 7.0%, Q2 6.4%, Q3 6.5%, Q4 6.8%).",
      "**CPI Inflation Projection (FY 2026-27):** Lowered to **5.0%** (earlier 5.1%) (Q2 4.7%, Q3 5.9%, Q4 5.5%). Core inflation projected at **4.3%**.",
      "Macro Buffers: Gross FDI inflows at **US$ 30.7 billion** in Q1 FY27; Forex reserves import cover **over 10 months**."
    ],
    "trap": "Real GDP Growth projection (6.7%) vs CPI Inflation projection (5.0%) for FY27."
  },
  {
    "title": "SEBI Closing Auction Session (CAS) Takes Effect August 3, 2026",
    "id": "note-sec2-20",
    "secId": "sec2",
    "interviewQ": "\"Why did SEBI introduce a Closing Auction Session (CAS) for F&O stocks?\"\n💡 **Model Answer: It eliminates end-of-day price manipulation by discovering closing prices through a transparent volume-weighted auction.**",
    "staticGk": "SEBI HQ: Mumbai | Established 1988, Statutory 1992.",
    "tier": "Tier A",
    "hook": "Introducing a Closing Auction Session for derivatives-eligible stocks prevents closing price manipulation.",
    "date": "2026-08-05",
    "bullets": [
      "Introduces **Closing Auction Session (CAS)** for F&O-eligible (Category I) cash equity stocks.",
      "**F&O Stock Timings:** Regular trading ends **3:15 PM**; Transition **3:15–3:20 PM**; CAS Order Entry I **3:20–3:25 PM**; CAS Order Entry II **3:25–3:30 PM** (market orders **cannot** be modified/cancelled); Order matching **3:30–3:35 PM**.",
      "**Pre-Open Timings:** Order entry **9:00–9:07 AM**; Matching **9:07–9:15 AM**; Market opens **9:15 AM**."
    ],
    "trap": "CAS Order Entry I (3:20–3:25 PM, modification allowed) vs CAS Order Entry II (3:25–3:30 PM, modification prohibited)."
  },
  {
    "title": "RBI Proposes Harmonised Regulatory Framework on Interest Rates on Advances",
    "id": "note-sec2-21",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "RBI published draft guidelines proposing to harmonise and standardise the regulatory framework on **interest rates on advances** across all Regulated Entities (banks, NBFCs, UCBs, AIFIs) to ensure transparent rate resets."
    ],
    "trap": null
  },
  {
    "title": "SEBI Mulls Depository Receipts (DRs) Against REIT and InvIT Units",
    "id": "note-sec2-22",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Markets regulator SEBI proposed allowing REITs and InvITs to issue Depository Receipts (DRs) in foreign jurisdictions to attract foreign capital."
    ],
    "trap": null
  },
  {
    "title": "SEBI Imposes ₹1.48 Crore Penalty & 1-Year Market Bar on ZEEL Promoters",
    "id": "note-sec2-23",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "SEBI imposed total ₹1.48 cr penalty on ZEEL, Punit Goenka, and Subhash Chandra; 1-year market bar on promoters."
    ],
    "trap": null
  },
  {
    "title": "K Rajaraman Granted Extension as Chairman of IFSCA",
    "id": "note-sec1-24",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "K Rajaraman granted extension as Chairman of IFSCA beyond July 31, 2026 till age 65 (HQ: GIFT City)."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "K Rajaraman",
          "Extension as Chairman of IFSCA",
          "K Rajaraman granted extension as Chairman of IFSCA beyond July 31, 2026 till age 65 (HQ: GIFT City)."
        ]
      ]
    }
  },
  {
    "title": "RBI Appoints Monisha Chakraborty as Executive Director Overseeing Forex & Financial Markets",
    "id": "note-sec2-25",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Monisha Chakraborty appointed ED at RBI overseeing Foreign Exchange Dept & Financial Markets Regulation Dept."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Monisha Chakraborty",
          "Executive Director Overseeing Forex & Financial Markets",
          "Monisha Chakraborty appointed ED at RBI overseeing Foreign Exchange Dept & Financial Markets Regulation Dept."
        ]
      ]
    }
  },
  {
    "title": "SEBI Appoints Prasanta Mahapatra as Executive Director",
    "id": "note-sec2-26",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Prasanta Mahapatra appointed Executive Director at markets regulator SEBI."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Prasanta Mahapatra",
          "Executive Director",
          "Prasanta Mahapatra appointed Executive Director at markets regulator SEBI."
        ]
      ]
    }
  },
  {
    "title": "TRAI Launches Revamped Version of MyCall App",
    "id": "note-sec1-27",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "TRAI launched revamped MyCall app for 1-5 star call quality ratings and call drop reporting."
    ],
    "trap": null
  },
  {
    "title": "India-Maldives Real-Time Payment Corridor Goes Live via Favara and UPI Integration",
    "id": "note-sec3-28",
    "secId": "sec3",
    "interviewQ": "\"What strategic advantages does NIPL achieve by linking UPI with systems like Favara?\"\n💡 **Model Answer: Slashes cross-border remittance costs while promoting INR settlements across South Asia.**",
    "staticGk": "NIPL established April 2020 as international subsidiary of NPCI | Maldives Currency: Maldivian Rufiyaa | Capital: Malé.",
    "tier": "Tier A",
    "hook": "Expands India's digital public infrastructure internationally, reducing cross-border remittance costs.",
    "date": "2026-08-05",
    "bullets": [
      "Maldives integrated instant payment system **'Favara'** with India's **Unified Payments Interface (UPI)**.",
      "Transfer Flow: Transferred in **Maldivian Rufiyaa (MVR)** and credited directly in **Indian Rupees (INR)** to UPI bank accounts.",
      "Implementation: Partnership between **Maldives Monetary Authority (MMA)**, **RBI**, and **NIPL**."
    ],
    "trap": "Maldives' instant payment system Favara vs Singapore's PayNow vs UAE's AANI/Jaywan vs Sri Lanka's LankaPay."
  },
  {
    "title": "Public Sector Banks Report Zero Locker Theft Cases in FY26; RBI Security Norms Highlighted",
    "id": "note-sec1-29",
    "secId": "sec1",
    "interviewQ": "\"What is the compensation cap under RBI guidelines when locker loss occurs due to bank negligence?\"\n💡 **Model Answer: Banks are strictly liable for negligence-related losses, capped at 100 times annual locker rent.**",
    "staticGk": "Safe deposit locker rules revised under Sec 35A of Banking Regulation Act, 1949.",
    "tier": "Tier A",
    "hook": "Mandatory security upgrades eliminated physical locker breaches across state-owned lenders.",
    "date": "2026-08-01",
    "bullets": [
      "PSBs reported **zero (0) locker theft cases in FY26 (2025-26)** (down from 40 cases between FY22-FY25).",
      "Active Lockers: **11,111,077** (1.11 crore) operational lockers across PSBs as on March 31, 2026.",
      "**RBI Security Guidelines:** CCTV cameras mandatory at strong room entry/exit; footage preserved for **at least 180 days**.",
      "**Bank Liability Cap:** Compensation for loss due to bank negligence capped at **100 times prevailing annual locker rent**."
    ],
    "trap": "Bank liability for negligence (capped at 100x annual rent) vs natural calamities/Acts of God (banks NOT liable)."
  },
  {
    "title": "Government Introduces Bankers' Books Evidence Act, 2026 to Replace 1891 British-Era Law",
    "id": "note-sec1-30",
    "secId": "sec1",
    "interviewQ": "\"How does the Bankers' Books Evidence Act 2026 impact banking litigation?\"\n💡 **Model Answer: Legalizes certified digital printouts and encrypted cloud logs as admissible court evidence without physical ledger production.**",
    "staticGk": "Aligned with Bharatiya Sakshya Adhiniyam, 2023.",
    "tier": "Tier A",
    "hook": "Modernizes evidence law by granting digital banking logs primary court admissibility.",
    "date": "2026-08-05",
    "bullets": [
      "Introduced **Bankers' Books Evidence Act, 2026** Bill in Parliament.",
      "Repeals and replaces the 135-year-old British-era **Bankers' Books Evidence Act, 1891**.",
      "Core Reform: Makes **digital and virtual records** admissible primary evidence in court without physical ledger production.",
      "Covers Core Banking Solutions (CBS) logs, electronic statements, and database microfilms."
    ],
    "trap": "Bankers' Books Evidence Act, 2026 vs Bankers' Books Evidence Act, 1891."
  },
  {
    "title": "UPI Clocks Record 23.66 Billion Transactions Worth ₹29.88 Trillion in July 2026",
    "id": "note-sec1-31",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "NPCI incorporated in 2008 under Sec 25 of Companies Act 1956 (now Sec 8) | HQ: Mumbai.",
    "tier": "Tier A",
    "hook": "UPI sets new monthly transaction volume and value benchmarks as India's primary retail payment spine.",
    "date": "2026-08-01",
    "bullets": [
      "**July 2026 Volume:** Record **23.66 billion transactions** (up 4.1% MoM).",
      "**July 2026 Value:** Record **₹29.88 trillion** (up 3.3% MoM).",
      "System Operator: **National Payments Corporation of India (NPCI)**."
    ],
    "trap": "July 2026 Volume (23.66 billion) vs July 2026 Value (₹29.88 trillion)."
  },
  {
    "title": "Private Banks Lead FCNR(B) Deposit Drive; ICICI, HSBC & SBI Top Performers",
    "id": "note-sec1-32",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "FCNR(B) accounts maintained in designated foreign currencies by NRIs; interest tax-free in India and fully repatriable.",
    "tier": "Tier A",
    "hook": "Forex swap windows incentivize private and foreign banks to mobilize non-resident foreign currency deposits.",
    "date": "2026-08-05",
    "bullets": [
      "Private banks led FCNR(B) mobilization under RBI's limited-period USD-INR forex swap window.",
      "Foreign banks led by **HSBC and Standard Chartered** mobilized nearly the same volume as all 12 PSBs combined.",
      "**>$1B Private Banks:** 4 lenders (**ICICI, Kotak, Axis, HDFC**).",
      "**>$1B PSBs:** Only 2 lenders (**SBI and Bank of Baroda**)."
    ],
    "trap": "PSBs crossing $1B mark (only 2: SBI & BoB) vs Private banks (4: ICICI, Kotak, Axis, HDFC)."
  },
  {
    "title": "Shivalik Small Finance Bank Acquires ManiBhavnam Home Finance for ₹109 Crore",
    "id": "note-sec1-33",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Shivalik Small Finance Bank completed acquisition and merger of Delhi-based ManiBhavnam Home Finance India Pvt Ltd for **₹109 crore** (Shivalik SFB HQ: Noida)."
    ],
    "trap": null
  },
  {
    "title": "PNB MetLife Launches 360 Health Saving Plan (ULIP)",
    "id": "note-sec1-34",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "PNB MetLife India Insurance Company Ltd launched the **PNB MetLife 360 Health Saving Plan**, a health-focused Unit-Linked Insurance Plan (ULIP)."
    ],
    "trap": null
  },
  {
    "title": "NCDEX Launches 'NCDEX Nidhi' Mutual Fund Transaction Platform",
    "id": "note-sec1-35",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "National Commodity and Derivatives Exchange Ltd (NCDEX) launched **'NCDEX Nidhi'**, an API-first mutual fund transaction platform for rural FPO integration."
    ],
    "trap": null
  },
  {
    "title": "Karnataka Bank Launches 'KBL Finsurance' Platform",
    "id": "note-sec1-36",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Karnataka Bank launched digital portal **'KBL Finsurance'** (powered by SprintMoney) to streamline insurance lead tracking across branches."
    ],
    "trap": null
  },
  {
    "title": "HDFC Bank Launches 'Max for Seniors' and 'Max for Her' Savings Account Variants",
    "id": "note-sec1-37",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "HDFC Bank launched **'Max for Seniors'** and **'Max for Her'** savings account variants with auto-sweep and accidental death cover on debit card up to **₹3.19 crore**."
    ],
    "trap": null
  },
  {
    "title": "SBI General Insurance Launches Motor Campaign 'Chuniye Bharosa, Apno Sa'",
    "id": "note-sec1-38",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "SBI General Insurance launched motor insurance film campaign *\"Chuniye Bharosa, Apno Sa\"* featuring actor **Pankaj Tripathi**."
    ],
    "trap": null
  },
  {
    "title": "WSFx GlobalPay Secures RBI AD Category II License under FEMA 2026",
    "id": "note-sec1-39",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "WSFx Global Pay Limited received RBI Authorised Dealer Cat-II license under FEMA for trade remittances up to **₹25 lakh**."
    ],
    "trap": null
  },
  {
    "title": "ICICI Lombard Celebrates 25th Anniversary on August 3, 2026",
    "id": "note-sec1-40",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "ICICI Lombard General Insurance Company Limited celebrated its **25th foundation anniversary** on August 3, 2026."
    ],
    "trap": null
  },
  {
    "title": "Glaw Lake in Arunachal Pradesh Designated India's 101st Ramsar Site",
    "id": "note-sec4-41",
    "secId": "sec4",
    "interviewQ": null,
    "staticGk": "Ramsar Convention signed Feb 2, 1971 (Ramsar, Iran) | India total: **101** | Top state: **Tamil Nadu (18 sites)**.",
    "tier": "Tier A",
    "hook": "Expands international wetland protection in Eastern Himalayan biodiversity corridors.",
    "date": "2026-08-01",
    "bullets": [
      "**Glaw Lake** in Arunachal Pradesh officially designated as **India's 101st Ramsar Site**.",
      "Location: Located inside **Kamlang Tiger Reserve and Wildlife Sanctuary** in Lohit district, Arunachal Pradesh.",
      "State Milestone: Marks **Arunachal Pradesh's first-ever Ramsar Site**."
    ],
    "trap": "Glaw Lake (India's 101st Ramsar Site & Arunachal's 1st)."
  },
  {
    "title": "Lok Sabha Passes Bill to Increase Supreme Court Judge Strength from 33 to 37",
    "id": "note-sec4-42",
    "secId": "sec4",
    "interviewQ": null,
    "staticGk": "Article 124(1) empowers Parliament to alter Supreme Court judge strength by law.",
    "tier": "Tier A",
    "hook": "Expands Apex Court judicial capacity to tackle case pendency and constitute Constitutional Benches.",
    "date": "2026-08-05",
    "bullets": [
      "Passed **Supreme Court (Number of Judges) Amendment Bill, 2026** amending the 1956 Act.",
      "Sanctioned Strength Expansion: Increases SC Judges from **33 to 37** (excluding CJI).",
      "Total Strength with CJI: **38 Judges** (37 Judges + 1 CJI)."
    ],
    "trap": "Judge strength excluding CJI (**37 judges**) vs total strength including CJI (**38 judges**)."
  },
  {
    "title": "PM Modi Launches South India's First Semiconductor Chip Plant in Visakhapatnam",
    "id": "note-sec1-43",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "India Semiconductor Mission (ISM) launched 2021 under MeitY (outlay ₹76,000 crore).",
    "tier": "Tier A",
    "hook": "Establishes domestic semiconductor packaging hubs under India Semiconductor Mission.",
    "date": "2026-08-01",
    "bullets": [
      "PM laid foundation stone for **ASIP Technologies's ₹2,500 crore** OSAT facility.",
      "Location: **Visakhapatnam, Andhra Pradesh**.",
      "Regional Milestone: **Andhra Pradesh's and South India's 1st semiconductor plant** under ISM 1.0.",
      "Tech Partner: **APACT Co.** (South Korea)."
    ],
    "trap": "South India's 1st OSAT plant (ASIP Visakhapatnam, AP) vs India's 1st Commercial Fab (Tata Dholera, Gujarat)."
  },
  {
    "title": "NOTTO Launches e-Pratyaropan Portal & Mobile App for Organ Donation",
    "id": "note-sec1-44",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "NOTTO HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Streamlines national organ donation tracking and real-time donor-recipient matching.",
    "date": "2026-08-05",
    "bullets": [
      "NOTTO launched **e-Pratyaropan Portal** and mobile app for unified digital organ donation tracking.",
      "Nodal Ministry: Ministry of Health and Family Welfare (MoHFW).",
      "Implementing Agency: NOTTO (under Directorate General of Health Services / DGHS)."
    ],
    "trap": null
  },
  {
    "title": "PM Inaugurates ₹5,000 Crore Alluri Sitarama Raju International Airport at Bhogapuram, AP",
    "id": "note-sec1-45",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "PM inaugurated **₹5,000 crore** Alluri Sitarama Raju International Airport at Bhogapuram in Vizianagaram district, Andhra Pradesh."
    ],
    "trap": null
  },
  {
    "title": "Largest Dhimsa Dance Enters Guinness World Records in Andhra Pradesh",
    "id": "note-sec1-46",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Over 13,000 tribal women performed Dhimsa dance at Bhogapuram AP, entering Guinness World Records (origin Koraput Odisha / Araku Valley AP)."
    ],
    "trap": null
  },
  {
    "title": "US and India Collaborate on $528K AI Project for Precision Agriculture",
    "id": "note-sec1-47",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "US NSF awarded **$528,137** research grant for joint project with MeitY for AI-powered soybean breeding (2026-2029)."
    ],
    "trap": null
  },
  {
    "title": "Ladakh Notifies 23 Heritage Sites as Protected Monuments",
    "id": "note-sec4-48",
    "secId": "sec4",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Union Territory Administration of Ladakh notified **23 heritage sites** as Protected Monuments under J&K Ancient Monuments Preservation Act Samvat 1977."
    ],
    "trap": null
  },
  {
    "title": "PM Modi Launches 100-Week 'Nasha Mukt Yuva for Viksit Bharat Sankalp Abhiyan'",
    "id": "note-sec1-49",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "PM Modi launched 100-week-long campaign spearheaded by MY Bharat under Ministry of Youth Affairs & Sports."
    ],
    "trap": null
  },
  {
    "title": "Pacific Nation Nauru Officially Changes Name to Republic of Naoero",
    "id": "note-sec1-50",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Nauru officially changed its name to **Republic of Naoero** (3rd-smallest country by population after Vatican City & Tuvalu; Currency: Australian Dollar)."
    ],
    "trap": null
  },
  {
    "title": "Istanbul, Türkiye to Host 49th Session of UNESCO World Heritage Committee in 2027",
    "id": "note-sec1-51",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "49th session of UNESCO WHC will be held from June 27 to July 7, 2027 in **Istanbul, Türkiye**."
    ],
    "trap": null
  },
  {
    "title": "Nathan Thomas Becomes World's Youngest Male Professor at Age 18",
    "id": "note-sec1-52",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Nathan Thomas (18 yrs 346 days) became world's youngest male professor in Florida, US, breaking a 300-year-old Guinness record."
    ],
    "trap": null
  },
  {
    "title": "MoRTH Proposes Two-Wheeled Road Ambulances under Central Motor Vehicles Rules",
    "id": "note-sec1-53",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "MoRTH published draft amendments to Central Motor Vehicles Rules 1989 introducing two-wheeled road ambulances."
    ],
    "trap": null
  },
  {
    "title": "Mandatory Vehicle-to-Vehicle (V2V) Communication Fitment Mandated from Oct 1, 2028",
    "id": "note-sec1-54",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "MoRTH proposed mandatory fitment of V2V communication systems for all L, M, N category vehicles manufactured on or after **October 1, 2028** (DoT allocated 5.875–5.925 GHz band)."
    ],
    "trap": null
  },
  {
    "title": "India Crosses 5 Lakh Aadhaar-Verified Organ Donation Pledges; Ranks 3rd Globally",
    "id": "note-sec1-55",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "India crossed 5 lakh Aadhaar-verified organ donation pledges; ranks **3rd globally** in organ transplants conducted annually (after US & China)."
    ],
    "trap": null
  },
  {
    "title": "India's GI Ecosystem Surpasses 800 Registered Products; UP Leads Nationally",
    "id": "note-sec1-56",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Ministry of Textiles announced India has over 800 registered GI products (**UP leads with 81 tags**, followed by TN with 76 and Maharashtra with 55)."
    ],
    "trap": null
  },
  {
    "title": "Static GK One-Liners (Umling La Pass & Srisailam Project)",
    "id": "note-sec1-57",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "**Umling La Pass:** Known as the highest motorable mountain pass in the world (Ladakh, India).",
      "**Srisailam Dam Project:** Built across Krishna River on the border of Andhra Pradesh and Telangana."
    ],
    "trap": null
  },
  {
    "title": "Varsha Ashok Aglawe Appointed 54th DG of Geological Survey of India — First Woman Head in 176 Years",
    "id": "note-sec1-58",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "Geological Survey of India established in **1851** by Thomas Oldham | HQ: **Kolkata, West Bengal**.",
    "tier": "Tier A",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "**Varsha Ashok Aglawe** appointed 54th Director General of GSI.",
      "Milestone: **First-ever woman** to head GSI in its **176-year history**.",
      "Parent Ministry: Ministry of Mines."
    ],
    "trap": "GSI (HQ Kolkata, Est 1851) vs Survey of India (HQ Dehradun).",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Varsha Ashok Aglawe",
          "54th DG of Geological Survey of India — First Woman Head in 176 Years",
          "Varsha Ashok Aglawe appointed 54th Director General of GSI."
        ]
      ]
    }
  },
  {
    "title": "A S Rajeev Appointed Acting Central Vigilance Commissioner (CVC)",
    "id": "note-sec5-59",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": "CVC established 1964 (Santhanam Committee) | Statutory via CVC Act, 2003 | HQ: New Delhi.",
    "tier": "Tier A",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "**A S Rajeev** appointed Acting Central Vigilance Commissioner.",
      "Appointment Committee: PM (Chair) + Union Home Minister + Leader of Opposition in Lok Sabha.",
      "Tenure Rules: Fixed **4 years or until age 65**."
    ],
    "trap": "Central Vigilance Commissioner (CVC) vs Chief Information Commissioner (CIC).",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "A S Rajeev",
          "Acting Central Vigilance Commissioner (CVC)",
          "A S Rajeev appointed Acting Central Vigilance Commissioner."
        ]
      ]
    }
  },
  {
    "title": "Ministry of Ayush Signs MoU with IndiaAI Mission",
    "id": "note-sec1-60",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Ministry of Ayush signed MoU with IndiaAI Mission to promote AI adoption across traditional medicine research and diagnosis."
    ],
    "trap": null
  },
  {
    "title": "Air Marshal Sandeep Thareja Appointed DG Armed Forces Medical Services",
    "id": "note-sec1-61",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Air Marshal Sandeep Thareja appointed Director General Armed Forces Medical Services (DGAFMS)."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Air Marshal Sandeep Thareja",
          "DG Armed Forces Medical Services",
          "Air Marshal Sandeep Thareja appointed Director General Armed Forces Medical Services (DGAFMS)."
        ]
      ]
    }
  },
  {
    "title": "Air Marshal Tejpal Singh Appointed Deputy Chief of Air Staff",
    "id": "note-sec1-62",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Air Marshal Tejpal Singh appointed Deputy Chief of the Air Staff (DCAS)."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Air Marshal Tejpal Singh",
          "Deputy Chief of Air Staff",
          "Air Marshal Tejpal Singh appointed Deputy Chief of the Air Staff (DCAS)."
        ]
      ]
    }
  },
  {
    "title": "Vice Admiral AN Pramod Appointed Deputy Chief of Naval Staff",
    "id": "note-sec1-63",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Vice Admiral AN Pramod appointed Deputy Chief of Naval Staff (DCNS)."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Vice Admiral AN Pramod",
          "Deputy Chief of Naval Staff",
          "Vice Admiral AN Pramod appointed Deputy Chief of Naval Staff (DCNS)."
        ]
      ]
    }
  },
  {
    "title": "Vishwesh Negi Appointed Ambassador of India to Iran",
    "id": "note-sec1-64",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Vishwesh Negi appointed Ambassador of India to the Islamic Republic of Iran."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Vishwesh Negi",
          "Ambassador of India to Iran",
          "Vishwesh Negi appointed Ambassador of India to the Islamic Republic of Iran."
        ]
      ]
    }
  },
  {
    "title": "Willie Walsh Appointed Chief Executive Officer of IndiGo",
    "id": "note-sec1-65",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Willie Walsh (former IATA chief) appointed Chief Executive Officer of IndiGo."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Willie Walsh",
          "Chief Executive Officer of IndiGo",
          "Willie Walsh (former IATA chief) appointed Chief Executive Officer of IndiGo."
        ]
      ]
    }
  },
  {
    "title": "New Delhi Hosts GI & Beyond 2.0 Summit Organized by Ministry of Textiles",
    "id": "note-sec1-66",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Ministry of Textiles organized GI & Beyond 2.0 Summit in New Delhi to showcase GI handloom exports."
    ],
    "trap": null
  },
  {
    "title": "Andhra Pradesh Partners with IIT Tirupati and UNSW Sydney for Solar CoE",
    "id": "note-sec1-67",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "AP Government partnered with IIT Tirupati and UNSW Sydney to establish a Centre of Excellence for Solar Manufacturing at IIT Tirupati."
    ],
    "trap": null
  },
  {
    "title": "Bharat Electronics Limited Partners with Esri India for GeoAI",
    "id": "note-sec1-68",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "BEL signed MoU with Esri India to collaborate on defence GIS mapping, location intelligence, and GeoAI."
    ],
    "trap": null
  },
  {
    "title": "C-DAC & GSI MoU for AI and HPC Geoscience Exploration",
    "id": "note-sec5-69",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "C-DAC (MeitY) signed MoU with GSI (Ministry of Mines) to collaborate in geosciences and mineral exploration using AI and High-Performance Computing (HPC)."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "C-DAC & GSI MoU for AI and HPC Geoscience Exploration",
          "Official Appointment",
          "C-DAC (MeitY) signed MoU with GSI (Ministry of Mines) to collaborate in geosciences and mineral exploration using AI and High-Performance Computing (HPC)."
        ]
      ]
    }
  },
  {
    "title": "GVMC Visakhapatnam & Moscow Govt Smart Mobility Partnership",
    "id": "note-sec1-70",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Greater Visakhapatnam Municipal Corporation (GVMC, AP) signed MoU with **Government of Moscow, Russia** for smart mobility and urban transport technology transfer."
    ],
    "trap": null
  },
  {
    "title": "ICAR Develops India's First Complete Pigeonpea Genome ('Asha' Variety)",
    "id": "note-sec6-71",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": "ICAR established July 16, 1929 | HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Telomere-to-telomere reference genomes enable molecular breeding of climate-resilient pulse crops.",
    "date": "2026-08-01",
    "bullets": [
      "ICAR developed India's first fully annotated telomere-to-telomere (**T2T**) reference genome for **pigeonpea (matar/arhar)**.",
      "Variety Name: Pigeonpea variety **'Asha'** approved as global reference genome.",
      "Milestone: First crop in India to have a fully annotated T2T reference genome (pigeonpea is India's 2nd most important pulse crop)."
    ],
    "trap": "Pigeonpea T2T reference genome ('Asha' variety) vs unannotated draft genomes."
  },
  {
    "title": "India Secures Historic Judo Gold Medals at 23rd Commonwealth Games 2026",
    "id": "note-sec6-72",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": "International Judo Federation HQ: Budapest, Hungary.",
    "tier": "Tier A",
    "hook": "Historic individual multi-sport wins mark structural shifts in India's international sports footprint.",
    "date": "2026-08-05",
    "bullets": [
      "**Asmita Dey** won Gold in **Women's 48 kg Judo** (India's 1st CWG judo gold medallist).",
      "**Harsh Singh** won Gold in **Men's 60 kg Judo**.",
      "**Yamini Maurya** won Silver in **Women's 57 kg Judo**.",
      "Athletics: **Neeraj Chopra** (Silver Javelin), **Yash Vir Singh** (Bronze Javelin), **Tejaswin Shankar** (Bronze Decathlon)."
    ],
    "trap": "Asmita Dey (48kg Gold) vs Yamini Maurya (57kg Silver) vs Harsh Singh (60kg Gold).",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "India Secures Historic Judo Gold Medals at 23rd Commonwealth Games 2026",
          "Asmita Dey won Gold in Women's 48 kg Judo (India's 1st CWG judo gold medallist).",
          "International Judo Federation HQ: Budapest, Hungary."
        ]
      ]
    }
  },
  {
    "title": "India Achieves Clean Sweep at 22nd Commonwealth Table Tennis Championships",
    "id": "note-sec6-73",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": "TTFI HQ: New Delhi.",
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Men's Singles Champion: **Ankur Bhattacharjee** (Gold).",
      "Women's Singles Champion: **Yashaswini Ghorpade** (Gold).",
      "Women's Doubles Champions: **Sreeja Akula and Syndrela Das** (Gold).",
      "Mixed Doubles Champions: **Manav Thakkar and Taneesha Kotecha** (Gold)."
    ],
    "trap": null
  },
  {
    "title": "15-Year-Old Tanvi Sharma Wins Maiden BWF World Tour Title",
    "id": "note-sec1-74",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "BWF HQ: Kuala Lumpur, Malaysia.",
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "15-year-old **Tanvi Sharma** won maiden BWF World Tour title defeating Vietnam's Nguyen Thuy Linh.",
      "Milestone: **First Indian woman to win the title since Saina Nehwal in 2008**."
    ],
    "trap": null
  },
  {
    "title": "COAS Launches Indigenous Xtreme Weather Grade (XWG) Diesel for -42°C Operation",
    "id": "note-sec1-75",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Chief of the Army Staff General Dhiraj Seth launched indigenously developed XWG Diesel remaining fluid down to **-42°C** for high-altitude operations."
    ],
    "trap": null
  },
  {
    "title": "ICAR-NIHSAD Bhopal Develops Indigenous African Swine Fever (ASF) Vaccine",
    "id": "note-sec1-76",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "ICAR-NIHSAD in Bhopal, MP developed India's 1st homegrown African Swine Fever vaccine (launched by Agri Minister Shivraj Singh Chouhan)."
    ],
    "trap": null
  },
  {
    "title": "25 Years of Himalayan Chandra Telescope (HCT) in Hanle, Ladakh",
    "id": "note-sec4-77",
    "secId": "sec4",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "2-metre HCT at Hanle, Ladakh completed 25 years of scientific operations (operated by IIA Bengaluru under DST)."
    ],
    "trap": null
  },
  {
    "title": "IAF Conducts Counter-UAS Exercise 'ROTOR CLAP-III' in Pokhran, Rajasthan",
    "id": "note-sec1-78",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "IAF conducted 3rd edition of Counter-UAS Exercise ROTOR CLAP-III at Pokhran Field Firing Range, Rajasthan."
    ],
    "trap": null
  },
  {
    "title": "2027 ICC Men's Cricket World Cup to be Co-Hosted Across 12 Venues in South Africa, Zimbabwe & Namibia",
    "id": "note-sec1-79",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "12 venues across **South Africa, Zimbabwe, and Namibia** will co-host the 2027 ICC Men's ODI Cricket World Cup."
    ],
    "trap": null
  },
  {
    "title": "Bonn Open 2026 Tennis Doubles Championship",
    "id": "note-sec1-80",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Ramkumar Ramanathan & Vijay Sundar Prashanth won Men's Doubles title at Bonn Open 2026."
    ],
    "trap": null
  },
  {
    "title": "Washington Open 2026 Tennis Championship",
    "id": "note-sec1-81",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Alexandra Eala (Philippines) became 1st Filipino player to win a WTA Tour-level singles title; Taylor Fritz (USA) won Men's Singles."
    ],
    "trap": null
  },
  {
    "title": "BWF Para World Circuit 2026 in Brazil",
    "id": "note-sec1-82",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Biri Takar (Arunachal Pradesh) won Gold in Men's Doubles and Bronze in Men's Singles."
    ],
    "trap": null
  },
  {
    "title": "Tour de France Femmes Cycling Milestone",
    "id": "note-sec1-83",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Harshita Jakhar (19) became 1st Indian woman cyclist to feature in Tour de France Femmes (Switzerland)."
    ],
    "trap": null
  },
  {
    "title": "AI Super Apps Concept Explained",
    "id": "note-sec1-84",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "Popular global AI Super Apps include WeChat (China), KakaoTalk (South Korea), and Grab (Southeast Asia).",
    "tier": "Tier B+",
    "hook": "Platform-based tech conglomerates expanding into unified super apps transform digital service delivery.",
    "date": "2026-08-05",
    "bullets": [
      "AI Super Apps combine multiple digital services (payments, shopping, messaging, healthcare, and mobility) within a single AI-driven conversational interface.",
      "Operate using platform-based network effects and integrated digital identity frameworks."
    ],
    "trap": null
  },
  {
    "title": "World Bank World Development Report 2026: The Promise of Artificial Intelligence",
    "id": "note-sec1-85",
    "secId": "sec1",
    "interviewQ": "\"Why is AI automation job risk lower in developing countries like India?\"\n💡 **Model Answer: Developing economies have fewer formal cognitive desk jobs prone to Generative AI replacement, making AI primarily a productivity booster.**",
    "staticGk": "World Bank Group (HQ: Washington D.C. | President: Ajay Banga | Founded 1944).",
    "tier": "Tier A",
    "hook": "Assesses Generative AI's differential impact on developing vs developed labor markets.",
    "date": "2026-08-01",
    "bullets": [
      "Report Title: **\"World Development Report 2026: The Promise of Artificial Intelligence\"**, published by **World Bank**.",
      "Automation Risk Differential: **4.5% of jobs in low- and middle-income countries** at risk of automation vs **14.2% in high-income countries**.",
      "Productivity Boost: AI enhances productivity in **16.2% of jobs in developing countries** (vs 18.7% in high-income countries).",
      "Telangana Case Study: AI weather forecasting produced savings **up to $560 per small farmer** in Telangana."
    ],
    "trap": "Job automation risk in developing countries (4.5%) vs high-income countries (14.2%)."
  },
  {
    "title": "Annapurni Subramaniam Conferred COSPAR Vikram Sarabhai Medal 2026",
    "id": "note-sec7-86",
    "secId": "sec7",
    "interviewQ": null,
    "staticGk": "Award instituted 1990 | Awarded biennially | ISRO HQ: Bengaluru.",
    "tier": "Tier A",
    "hook": "Conferred for outstanding contributions to astronomical research and space science leadership.",
    "date": "2026-08-05",
    "bullets": [
      "Indian astrophysicist **Annapurni Subramaniam** conferred **COSPAR Vikram Sarabhai Medal 2026**.",
      "Historic Milestone: **First Indian woman scientist** to receive this award (4th Indian overall).",
      "Past Laureates: U.",
      "R.",
      "Rao (1996), Gurbax Singh Lakhina (2014), Anil Bharadwaj (2024).",
      "Ceremony: Conferred during 46th COSPAR Scientific Assembly in **Florence, Italy** by COSPAR & ISRO.",
      "Current Post: Director of **Indian Institute of Astrophysics (IIA)**, Bengaluru."
    ],
    "trap": "1st Indian woman scientist to win COSPAR Sarabhai Medal (and 4th Indian overall).",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Annapurni Subramaniam Conferred COSPAR Vikram Sarabhai Medal 2026",
          "Indian astrophysicist Annapurni Subramaniam conferred COSPAR Vikram Sarabhai Medal 2026.",
          "Award instituted 1990 | Awarded biennially | ISRO HQ: Bengaluru."
        ]
      ]
    }
  },
  {
    "title": "World Bank Report Highlights $194 Billion Extreme Heat Risk to India's Economy",
    "id": "note-sec1-87",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Report Title: *\"A Livable Future: Tackling Extreme Heat for Jobs and Growth in South Asia's Cities\"* ($194B/247B hrs lost in India, 66% agriculture, $1.6T cooling market by 2040)."
    ],
    "trap": null
  },
  {
    "title": "IEA Projects Critical Mineral Demand Surge Through 2040 Requiring $750B Investment",
    "id": "note-sec1-88",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "International Energy Agency report projecting **$750 billion** investment required by 2040 under STEPS for copper and lithium (IEA HQ: Paris)."
    ],
    "trap": null
  },
  {
    "title": "Kroll India's Celebrity Brand Valuation 2025",
    "id": "note-sec1-89",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "**Shah Rukh Khan** claimed #1 position as India's most powerful celebrity in 2025 ($177.9 million brand value), Ranveer Singh #2, Virat Kohli #3."
    ],
    "trap": null
  },
  {
    "title": "Tamil Nadu Wins 'Best State' Award for Organ Donations in NOTTO Report 2025-26",
    "id": "note-sec1-90",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Tamil Nadu won 'Best State' award (266 deceased donors); Delhi ranked #1 in total transplants (4,564)."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Tamil Nadu Wins 'Best State' Award for Organ Donations in NOTTO Report 2025-26",
          "Tamil Nadu won 'Best State' award (266 deceased donors); Delhi ranked #1 in total transplants (4,564).",
          "Annual Recognition"
        ]
      ]
    }
  },
  {
    "title": "Book: 'Bringing the Cheetah Back to India' by Prashant Agrawal (IFS)",
    "id": "note-sec1-91",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Book Title: *\"Bringing the Cheetah Back to India: How Diplomacy Made Conservation's Big Mission Possible\"* authored by Prashant Agrawal."
    ],
    "trap": null
  },
  {
    "title": "Onam Harvest Festival Celebrated in Kerala",
    "id": "note-sec1-92",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Primary annual harvest festival of Kerala celebrating mythical King Mahabali."
    ],
    "trap": null
  },
  {
    "title": "Aadi Perukku Monsoon Festival Celebrated in Tamil Nadu",
    "id": "note-sec1-93",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "Tamil Nadu Capital: Chennai | Chief Minister: M. K. Stalin | Governor: R. N. Ravi.",
    "tier": "Tier B+",
    "hook": "Traditional water conservation and river worship festival in Tamil Nadu.",
    "date": "2026-08-01",
    "bullets": [
      "Aadi Perukku (also known as Aadi18) is a traditional water and monsoon festival celebrated on the 18th day of the Tamil month of Aadi.",
      "Expresses gratitude to Mother Nature and the Cauvery River for sustaining agriculture and life."
    ],
    "trap": null
  },
  {
    "title": "12th National Handloom Day Observed on 7th August",
    "id": "note-sec8-94",
    "secId": "sec8",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Observed August 7 to commemorate Swadeshi Movement launched August 7, 1905 in Calcutta."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Date & Event",
        "Official Theme / Mandate",
        "Nodal Body / Significance"
      ],
      "rows": [
        [
          "12th National Handloom Day Observed on 7th August",
          "Observed August 7 to commemorate Swadeshi Movement launched August 7, 1905 in Calcutta.",
          "Global Observance"
        ]
      ]
    }
  },
  {
    "title": "World Breastfeeding Week Observed from 1st to 7th August 2026",
    "id": "note-sec8-95",
    "secId": "sec8",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Theme 2026: *\"Breastfeeding for a sustainable start in life: strengthen what works\"*."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Date & Event",
        "Official Theme / Mandate",
        "Nodal Body / Significance"
      ],
      "rows": [
        [
          "World Breastfeeding Week Observed from 1st to 7th August 2026",
          "Theme 2026: *\"Breastfeeding for a sustainable start in life: strengthen what works\"*.",
          "Global Observance"
        ]
      ]
    }
  },
  {
    "title": "Indian Organ Donation Day Observed on 3rd August",
    "id": "note-sec1-96",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "Promotes voluntary organ donor registration via NOTTO."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Date & Event",
        "Official Theme / Mandate",
        "Nodal Body / Significance"
      ],
      "rows": [
        [
          "Indian Organ Donation Day Observed on 3rd August",
          "Promotes voluntary organ donor registration via NOTTO.",
          "Global Observance"
        ]
      ]
    }
  },
  {
    "title": "International Clouded Leopard Day Observed on 4th August",
    "id": "note-sec1-97",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-01",
    "bullets": [
      "Raises global awareness for clouded leopard conservation (Meghalaya state animal)."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Date & Event",
        "Official Theme / Mandate",
        "Nodal Body / Significance"
      ],
      "rows": [
        [
          "International Clouded Leopard Day Observed on 4th August",
          "Raises global awareness for clouded leopard conservation (Meghalaya state animal).",
          "Global Observance"
        ]
      ]
    }
  },
  {
    "title": "World Wide Web Day & World Lung Cancer Day Observed on 1st August",
    "id": "note-sec1-98",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier B+",
    "hook": null,
    "date": "2026-08-05",
    "bullets": [
      "WWW Day marks Tim Berners-Lee's creation at CERN in 1989."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Date & Event",
        "Official Theme / Mandate",
        "Nodal Body / Significance"
      ],
      "rows": [
        [
          "World Wide Web Day & World Lung Cancer Day Observed on 1st August",
          "WWW Day marks Tim Berners-Lee's creation at CERN in 1989.",
          "Global Observance"
        ]
      ]
    }
  },
  {
    "title": "World Ranger Day Observed on 31st July",
    "id": "note-sec1-99",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "International Ranger Federation (IRF) established in 1992 in Arusha, Tanzania.",
    "tier": "Tier B+",
    "hook": "Honours frontline wildlife defenders safeguarding biodiversity across global protected areas.",
    "date": "2026-08-01",
    "bullets": [
      "World Ranger Day is observed annually on July 31 to commemorate forest rangers killed or injured in the line of duty.",
      "Organised globally by the International Ranger Federation (IRF) in collaboration with The Thin Green Line Foundation.",
      "National Handloom Day is observed annually on August 7 to commemorate the launch of the Swadeshi Movement in 1905."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Date & Event",
        "Official Theme / Mandate",
        "Nodal Body / Significance"
      ],
      "rows": [
        [
          "World Ranger Day Observed on 31st July",
          "World Ranger Day is observed annually on July 31 to commemorate forest rangers killed or injured in the line of duty.",
          "International Ranger Federation (IRF) established in 1992 in Arusha, Tanzania."
        ]
      ]
    }
  },
  {
    "title": "Taxation Bill 2026 Grants 15-Year Tax Exemption for Foreign Rough Diamond Trading via SNZs",
    "id": "note-sec1-100",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": "Income Tax Act 1961 replaced by Income-tax Act 2025.",
    "tier": "Tier A",
    "hook": "Unlocks global rough diamond trading hubs in Special Notified Zones (SNZs) by providing long-term tax certainty.",
    "date": "2026-08-07",
    "bullets": [
      "Inserts Entry 13F in Schedule IV of Income-tax Act 2025.",
      "Tax Exemption Window: October 1, 2026 to March 31, 2041 (15-year tax holiday)."
    ],
    "trap": "Rough diamond SNZ tax exemption (15 years: 2026–2041) vs Contract electronics capital goods tax exemption (sunset March 31, 2041)."
  },
  {
    "title": "Govt Mandates Exporter Registration (EOR) for FDI-Backed E-Commerce Inventory Exports",
    "id": "note-sec1-101",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Prevents speculative domestic stockpiling by foreign-funded e-commerce platforms while ensuring complete export traceability.",
    "date": "2026-08-06",
    "bullets": [
      "Mandatory Registration: Foreign-funded e-commerce inventory exporters must register as Exporter-on-Record (EOR) with DGFT (holding IEC & GSTIN).",
      "Stockpiling Norms: Stockpiling permitted only against confirmed export orders (speculative stockpiling strictly prohibited).",
      "Supplier Protection: Payments to Indian sellers cannot be contingent upon receipt of payment from overseas buyers."
    ],
    "trap": null
  },
  {
    "title": "India's SEZ Exports Rise 11.8% to ₹16.36 Lakh Crore (.28 Billion) in FY26",
    "id": "note-sec1-102",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Special Economic Zones remain India's primary engine for merchandise and services export growth.",
    "date": "2026-08-07",
    "bullets": [
      "Top Exporting State: Gujarat recorded highest SEZ exports worth ₹4,05,595 crore.",
      "Followed By: Karnataka (₹2,69,004 crore), Maharashtra (₹2,43,422 crore), and Tamil Nadu (₹2,12,288 crore)."
    ],
    "trap": null
  },
  {
    "title": "Senior Citizens & Women File ₹7,769.63 Crore Financial Cyber Fraud Complaints in 2025",
    "id": "note-sec1-103",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Escalating financial cyber fraud targets vulnerable demographic segments, driving central reporting infrastructure expansion.",
    "date": "2026-08-06",
    "bullets": [
      "Affected Groups: 1,03,488 senior citizens and 4,63,114 women lodged financial cyber fraud complaints.",
      "Administrative Nodal Office: Indian Cybercrime Coordination Centre (I4C) under Ministry of Home Affairs (MHA), New Delhi.",
      "Reporting System: Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS) launched in 2021."
    ],
    "trap": null
  },
  {
    "title": "PPF Scheme 2019 Restricts Fresh Accounts for NRIs; Existing Accounts Valid for 15-Year Tenure",
    "id": "note-sec1-104",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Clarifies non-resident investment boundaries under Public Provident Fund rules.",
    "date": "2026-08-07",
    "bullets": [
      "Account Opening Eligibility: Only resident individuals allowed to open fresh PPF accounts (NRIs, PIOs, OCIs prohibited).",
      "Existing NRI Accounts: Accounts opened prior to becoming NRI can continue until completing original 15-year tenure (no extension allowed post-maturity).",
      "Deposit Caps: Minimum ₹500, Maximum ₹1.5 lakh per financial year via NRO account."
    ],
    "trap": null
  },
  {
    "title": "Cabinet Approves ₹23,731 Crore GOBARdhan Bioenergy Scheme (FY27 to FY36)",
    "id": "note-sec1-105",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Accelerates organic waste conversion into compressed biogas (CBG) under National Circular Bioenergy Scheme.",
    "date": "2026-08-06",
    "bullets": [
      "Scheme Name: Galvanizing Organic Bio-Agro Resources Dhan (GOBARdhan).",
      "Total Financial Outlay: ₹23,731 crore for 10-year implementation (FY 2026-27 to FY 2035-36)."
    ],
    "trap": null
  },
  {
    "title": "RBI Flags El Niño Weather Risks to Agriculture and Food Inflation",
    "id": "note-sec1-106",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Monsoon disruptions from ocean surface warming directly impact vegetable and pulse yields, straining headline CPI inflation.",
    "date": "2026-08-07",
    "bullets": [
      "Macro Impact: Below-normal rainfall reduces crop production, driving consumer food price inflation."
    ],
    "trap": null
  },
  {
    "title": "EPFO Highlights 3-Year Inactivity Window for Inoperative Provident Fund Accounts",
    "id": "note-sec1-107",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Ensures timely subscriber fund withdrawals post-retirement or overseas migration.",
    "date": "2026-08-06",
    "bullets": [
      "Inoperative Timeline: EPF accounts become inoperative 3 years after retirement, permanent migration, or member death.",
      "Interest Accrual: Retiring before age 55 allows interest accrual until age 58.",
      "Unique Identifiers: EPF Member ID is 22-digit alphanumeric; UAN is permanent 12-digit universal ID."
    ],
    "trap": null
  },
  {
    "title": "Rajya Sabha Clears ₹54,067 Crore Appropriation Bill 2026 under Article 114",
    "id": "note-sec1-108",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Provides constitutional authorization for parliamentary approval of excess expenditure beyond original budget grants.",
    "date": "2026-08-07",
    "bullets": [
      "Constitutional Mandate: Article 114 mandates parliamentary approval before withdrawing funds from Consolidated Fund of India (CFI)."
    ],
    "trap": null
  },
  {
    "title": "EXIM Bank Named Nodal Implementing Agency for Export Credit Interest Subvention Scheme",
    "id": "note-sec1-109",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Transfers export credit subvention administration from RBI to EXIM Bank under Export Promotion Mission.",
    "date": "2026-08-06",
    "bullets": [
      "Implementation Date: Effective 1 April 2026.",
      "Operational Role: Manages pre- and post-shipment export credit interest subvention claims."
    ],
    "trap": null
  },
  {
    "title": "RBI Proposes On-Tap UCB Licenses for Credit Co-ops with ₹10,000 Crore Deposit Base",
    "id": "note-sec1-110",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Establishes a permanent regulatory pathway for large credit cooperative societies to convert into Urban Cooperative Banks (UCBs).",
    "date": "2026-08-07",
    "bullets": [
      "Operational Track Record: Minimum 10 years operations required.",
      "Capital Thresholds: Deposit base ≥ ₹10,000 crore, Net worth ≥ ₹300 crore (as of March 31).",
      "Initial Eligibility: Restricted to societies registered under Multi-State Cooperative Societies Act 2002.",
      "Prudential Conditions: CRAR ≥ 12%, Net NPA ≤ 3%, individual shareholding cap of 5%."
    ],
    "trap": null
  },
  {
    "title": "Regulators Consider Bringing Insurance Surety Bonds Under RBI's CRILC Database",
    "id": "note-sec2-111",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": "First digital insurance surety bond launched by National E-Governance Services Ltd & New India Assurance.",
    "tier": "Tier A",
    "hook": "Enhances systemic credit risk monitoring across non-bank surety guarantees.",
    "date": "2026-08-06",
    "bullets": [
      "CRILC Scope: Database maintained by RBI monitoring aggregate borrower credit exposures of ₹5 crore and above."
    ],
    "trap": null
  },
  {
    "title": "India Tops World in IPO Count, Ranks 3rd in Funds Raised (SEBI Annual Report FY26)",
    "id": "note-sec2-112",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "High domestic equity issuance volume reinforces India's position in global capital markets.",
    "date": "2026-08-07",
    "bullets": [
      "Public Shareholding Timeline: Largest listed companies given up to 10 years to reach mandatory 25% minimum public shareholding.",
      "Pre-IPO ESOPs: Founders permitted to retain pre-IPO Employee Stock Option Plans."
    ],
    "trap": null
  },
  {
    "title": "SEBI Flags ₹87,124 Crore as Difficult-to-Recover Dues in FY26 (Up 12%)",
    "id": "note-sec2-113",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Highlights regulatory enforcement recovery challenges despite record annual fee collections.",
    "date": "2026-08-06",
    "bullets": [
      "SEBI Fee Revenue: Total fee income rose 10% to ₹2,563 crore (stock exchange regulatory fees generated ₹1,349 crore).",
      "Investor Protection Fund (IPF): Fund balance rose to ₹965 crore; investor education spend stood at ₹2.25 crore."
    ],
    "trap": null
  },
  {
    "title": "RBI Classifies Tata Sons as Upper-Layer NBFC (NBFC-UL) under Scale-Based Regulation",
    "id": "note-sec2-114",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Enforces enhanced capital and mandatory listing requirements on systemic holding companies.",
    "date": "2026-08-07",
    "bullets": [
      "Scale-Based Classification: 17 NBFCs identified in Upper Layer (NBFC-UL).",
      "Upper Layer Criteria: Asset size ≥ ₹1 lakh crore (₹1 trillion); mandatory public listing within 3 years.",
      "Standalone Assets: Tata Sons standalone assets exceed ₹2 lakh crore (₹2 trillion).",
      "Asset Layer Caps: Base Layer (<₹1,000 cr), Middle Layer (≥₹1,000 cr), Upper Layer (≥₹1 lakh cr)."
    ],
    "trap": null
  },
  {
    "title": "SEBI Proposes REITs & InvITs Investment in Under-Construction Third-Party Assets",
    "id": "note-sec2-115",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Unlocks institutional capital for greenfield infrastructure and commercial real estate development.",
    "date": "2026-08-06",
    "bullets": [
      "Exposure Norms: Allows minority non-controlling stakes within existing exposure limits.",
      "Cooling-off Period: Proposed reduction from 12 weeks to 8 weeks for illiquid privately placed InvITs."
    ],
    "trap": null
  },
  {
    "title": "RBI Issues Technology-Based Loan Recovery Norms & Phone Lock Restrictions (Effective Jan 1, 2027)",
    "id": "note-sec2-116",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Curbs predatory recovery agent practices and regulates digital mobile loan lock mechanisms.",
    "date": "2026-08-07",
    "bullets": [
      "Implementation Date: Effective January 1, 2027 (extended from October 1, 2026).",
      "Contact Hours: Recovery agents allowed to contact borrowers only between 8:00 AM and 7:00 PM.",
      "Phone Lock Restrictions: No restriction activation until 30 days past due; complete loan restrictions permitted only after 60 days past due.",
      "Mandated Exemptions: Banks CANNOT disable incoming calls, SMS, or emergency SOS functions.",
      "Compensation Penalty: Restoration required within 1 hour post-payment; bank delay penalty of ₹250/hour capped at loan amount."
    ],
    "trap": null
  },
  {
    "title": "SEBI Revamps Securities Lending Scheme, Launches Setu Portal & Bond Tokenisation Pilot",
    "id": "note-sec2-117",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Modernizes securities borrowing infrastructure, digital compliance filing, and blockchain corporate bond issuance.",
    "date": "2026-08-06",
    "bullets": [
      "Setu Portal: Centralized online compliance and registration portal for SEBI-regulated intermediaries.",
      "Tokenisation Pilot: Corporate bond tokenisation using Distributed Ledger Technology (DLT)."
    ],
    "trap": null
  },
  {
    "title": "Home Minister Receives ₹22.90 Crore Dividend from REPCO Bank for FY26",
    "id": "note-sec3-118",
    "secId": "sec3",
    "interviewQ": null,
    "staticGk": "REPCO Bank established Nov 19, 1969 under Madras Cooperative Societies Act 1961 (Chairman: E. Santhanam; MHA control; operates in TN, AP, KL, KA).",
    "tier": "Tier A",
    "hook": "State-backed cooperative bank returns 30% dividend on government equity.",
    "date": "2026-08-07",
    "bullets": [
      "Shareholding: Govt of India holds 76.32% share capital (₹76.32 crore)."
    ],
    "trap": null
  },
  {
    "title": "Indel Remit Receives RBI Approval for Foreign Trade Remittances up to ₹25 Lakh",
    "id": "note-sec2-119",
    "secId": "sec2",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Expands non-bank foreign exchange remittance channels for small traders.",
    "date": "2026-08-06",
    "bullets": [
      "Transaction Cap: Up to ₹25 lakh per trade remittance transaction."
    ],
    "trap": null
  },
  {
    "title": "Standard Chartered Obtains IFSCA Nod for GIFT City Wealth Management Services",
    "id": "note-sec3-120",
    "secId": "sec3",
    "interviewQ": null,
    "staticGk": "Standard Chartered was the first foreign bank to commence operations in GIFT City (2020).",
    "tier": "Tier A",
    "hook": "Expands offshore wealth distribution capabilities from India's International Financial Services Centre.",
    "date": "2026-08-07",
    "bullets": [
      "Standard Chartered received IFSCA approval to offer wealth management services out of its GIFT City IBU branch.",
      "First foreign bank to establish an onshore wealth management unit in GIFT City."
    ],
    "trap": null
  },
  {
    "title": "Reliance Brands Partners with Kim Kardashian's SKIMS for Indian Retail Expansion",
    "id": "note-sec1-121",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Expands luxury shapewear retail footprint in India via RBL.",
    "date": "2026-08-06",
    "bullets": [
      "Reliance Brands Limited partnered with US shapewear brand SKIMS (co-founded by Kim Kardashian) for exclusive Indian retail distribution.",
      "First SKIMS flagship store planned for Mumbai in late 2026."
    ],
    "trap": null
  },
  {
    "title": "Niyo Forex Secures Expanded Perpetual AD-II Foreign Exchange Licenses from RBI",
    "id": "note-sec1-122",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Expands forex card and remittance distribution permissions under FEMA 2026.",
    "date": "2026-08-07",
    "bullets": [
      "Niyo Forex received perpetual Authorised Dealer Category-II (AD-II) foreign exchange licence from RBI.",
      "Enables Niyo to offer cross-border travel card issuance and foreign currency exchange services directly."
    ],
    "trap": null
  },
  {
    "title": "Pawan Hans Partners with Norway's Noemi Aerospace for Electric Seaplanes",
    "id": "note-sec5-123",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": "Noemi Aerospace (Elfly AS) HQ: Bergen, Norway | Pawan Hans HQ: Noida, UP (Ministry of Civil Aviation).",
    "tier": "Tier A",
    "hook": "Promotes green aviation and regional seaplane connectivity under UDAN framework.",
    "date": "2026-08-06",
    "bullets": [
      "State-owned helicopter operator Pawan Hans signed MoU with Norway's Noemi Aerospace to deploy electric seaplanes.",
      "Aims to enhance regional coastal connectivity under UDAN scheme."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Pawan Hans Partners with Norway's Noemi Aerospace for Electric Seaplanes",
          "Official Appointment",
          "State-owned helicopter operator Pawan Hans signed MoU with Norway's Noemi Aerospace to deploy electric seaplanes."
        ]
      ]
    }
  },
  {
    "title": "IIFL Capital Adopts Flytxt AI Platform to Accelerate AUM Growth",
    "id": "note-sec5-124",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Leverages AI for investor engagement and asset management.",
    "date": "2026-08-07",
    "bullets": [
      "IIFL Capital deployed Flytxt AI customer data platform across its wealth management operations.",
      "Designed to hyper-personalise investment recommendations and scale AUM."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "IIFL Capital Adopts Flytxt AI Platform to Accelerate AUM Growth",
          "Official Appointment",
          "IIFL Capital deployed Flytxt AI customer data platform across its wealth management operations."
        ]
      ]
    }
  },
  {
    "title": "Ministry of Culture & Tourism Partners with Netflix for 'As Seen on Netflix' Section",
    "id": "note-sec5-125",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Showcases Indian cultural heritage destinations on Incredible India Portal.",
    "date": "2026-08-06",
    "bullets": [
      "Netflix Co-CEO: Ted Sarandos.",
      "Union Minister: Gajendra Singh Shekhawat."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Ministry of Culture & Tourism Partners with Netflix for 'As Seen on Netflix' Section",
          "Official Appointment",
          "Netflix Co-CEO: Ted Sarandos | Union Minister: Gajendra Singh Shekhawat."
        ]
      ]
    }
  },
  {
    "title": "Bajaj General Insurance Partners with Swiss Re for Commercial Structured Coverage",
    "id": "note-sec5-126",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Leverages Swiss Re's global underwriting platform for Indian commercial risk solutions.",
    "date": "2026-08-07",
    "bullets": [
      "Bajaj Allianz General Insurance partnered with global reinsurer Swiss Re for commercial structured risk coverage.",
      "Focuses on property, casualty, and renewable energy risk underwriting."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Bajaj General Insurance Partners with Swiss Re for Commercial Structured Coverage",
          "Official Appointment",
          "Bajaj Allianz General Insurance partnered with global reinsurer Swiss Re for commercial structured risk coverage."
        ]
      ]
    }
  },
  {
    "title": "Dr. T.V. Somanathan Gets 1-Year Extension as Cabinet Secretary; Govind Mohan as Home Secretary",
    "id": "note-sec5-127",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Key administrative extensions in top civil service posts.",
    "date": "2026-08-06",
    "bullets": [
      "CEO Air India: Tewolde Gebremariam."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Dr. T.V. Somanathan Gets 1-Year Extension as Cabinet Secretary; Govind Mohan as Home Secretary",
          "Official Appointment",
          "CEO Air India: Tewolde Gebremariam."
        ]
      ]
    }
  },
  {
    "title": "Rahul Jain Appointed Senior Adviser to Executive Director (India) at IMF",
    "id": "note-sec1-128",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Key multilateral appointments.",
    "date": "2026-08-07",
    "bullets": [
      "Baldeo Purushartha appointed Senior Adviser to ED at ADB; Satyajit Mohanty appointed Representative of India at ICAO Council."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Rahul Jain",
          "Senior Adviser to Executive Director (India) at IMF",
          "Baldeo Purushartha appointed Senior Adviser to ED at ADB; Satyajit Mohanty appointed Representative of India at ICAO Council."
        ]
      ]
    }
  },
  {
    "title": "India Hosts 2nd National Port Security Conference 2026 in New Delhi",
    "id": "note-sec5-129",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Accelerates maritime security digitisation and port workflow standardization.",
    "date": "2026-08-06",
    "bullets": [
      "Key Platforms: e-Samudra portal, Maritime Single Window, and One Nation One Port Process."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "India Hosts 2nd National Port Security Conference 2026 in New Delhi",
          "Official Appointment",
          "Key Platforms: e-Samudra portal, Maritime Single Window, and One Nation One Port Process."
        ]
      ]
    }
  },
  {
    "title": "UNCCD COP17 to be Hosted by Mongolia in August 2026",
    "id": "note-sec5-130",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Global environmental conference on desertification and land restoration.",
    "date": "2026-08-07",
    "bullets": [
      "Location & Dates: Ulaanbaatar, Mongolia (August 17 to 28, 2026).",
      "Theme: “Restoring Land.",
      "Restoring Hope”."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "UNCCD COP17 to be Hosted by Mongolia in August 2026",
          "Official Appointment",
          "Location & Dates: Ulaanbaatar, Mongolia (August 17 to 28, 2026)."
        ]
      ]
    }
  },
  {
    "title": "Seoul Hosts Global AI and Digital Summit 2026",
    "id": "note-sec5-131",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "World Bank showcase of sub-national digital sandbox initiatives.",
    "date": "2026-08-06",
    "bullets": [
      "Haryana AI Sandbox showcased at Korea Digital Summit (October 19–22, 2026)."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Seoul Hosts Global AI and Digital Summit 2026",
          "Official Appointment",
          "Haryana AI Sandbox showcased at Korea Digital Summit (October 19–22, 2026)."
        ]
      ]
    }
  },
  {
    "title": "9th India Medical Device Conference 2026 Held in New Delhi",
    "id": "note-sec5-132",
    "secId": "sec5",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Promotes India as a global manufacturing hub for quality medical devices.",
    "date": "2026-08-07",
    "bullets": [
      "Organized By: Dept of Pharmaceuticals & FICCI (Aug 7–8, 2026).",
      "Theme: “Towards Viksit Bharat: Advancing India as a Global Hub for Quality Medical Devices”."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "9th India Medical Device Conference 2026 Held in New Delhi",
          "Official Appointment",
          "Organized By: Dept of Pharmaceuticals & FICCI (Aug 7–8, 2026)."
        ]
      ]
    }
  },
  {
    "title": "IIT Hyderabad & Crimson Energy Launch 'ANUGYAN' Nuclear Technology Program",
    "id": "note-sec6-133",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "India's 1st industry-academia nuclear orientation program.",
    "date": "2026-08-06",
    "bullets": [
      "Capacity Goal: Expand nuclear power capacity from 8.8 GW to 100 GW by 2047."
    ],
    "trap": null
  },
  {
    "title": "Supreme Court Mandates 10km Mining Buffer Zone Around All Notified Wetland Reserves",
    "id": "note-sec4-134",
    "secId": "sec4",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Extends environmental protection order nationwide beyond Asan Wetland Reserve (Uttarakhand).",
    "date": "2026-08-07",
    "bullets": [
      "Supreme Court of India mandated a compulsory 10 km eco-sensitive mining buffer zone around all notified Ramsar and wetland reserves.",
      "Prohibits commercial mining, industrial discharge, and heavy quarrying within the buffer."
    ],
    "trap": null
  },
  {
    "title": "Chandipura Virus Disease (CHPV) Outbreak Triggers Acute Encephalitis Syndrome Alerts",
    "id": "note-sec6-135",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Rare vector-borne viral illness causing AES.",
    "date": "2026-08-06",
    "bullets": [
      "Union Health Ministry issued nationwide alert for Chandipura Virus Disease (CHPV) following acute encephalitis syndrome cases in Gujarat and Rajasthan.",
      "Transmitted by sandflies; causes high fever and brain inflammation."
    ],
    "trap": null
  },
  {
    "title": "Ladakh to Launch India's First High-Altitude Wildlife Safari in Hemis & Changthang",
    "id": "note-sec4-136",
    "secId": "sec4",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "First high-altitude safari routes across Hemis National Park, Changthang and Karakoram sanctuaries.",
    "date": "2026-08-07",
    "bullets": [
      "Ladakh administration announced India's 1st high-altitude wildlife safari across Hemis National Park and Changthang Wildlife Sanctuary.",
      "Focuses on eco-guided snow leopard and blue sheep sightings."
    ],
    "trap": null
  },
  {
    "title": "India Successfully Test-Fires Agni-4 Ballistic Missile (4,000 km Strike Range)",
    "id": "note-sec6-137",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Validates solid-fuel medium-range surface-to-surface missile capability from Chandipur, Odisha.",
    "date": "2026-08-06",
    "bullets": [
      "DRDO successfully flight-tested Agni-4 intermediate-range ballistic missile with a strike range of 4,000 km from APJ Abdul Kalam Island.",
      "Equipped with advanced ring laser gyro INS and micro-navigation systems."
    ],
    "trap": null
  },
  {
    "title": "R Praggnanandhaa Wins St. Louis Rapid & Blitz 2026 Chess Tournament",
    "id": "note-sec6-138",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Indian Grandmaster defeats Javokhir Sindarov (Uzbekistan).",
    "date": "2026-08-07",
    "bullets": [
      "Indian Grandmaster R Praggnanandhaa won the St.",
      "Louis Rapid & Blitz 2026 chess tournament in Missouri, US.",
      "Defeated Alireza Firouzja and Fabiano Caruana in tie-breaks."
    ],
    "trap": null
  },
  {
    "title": "Arunachal Pradesh to Host Asian Rafting Championships 2026 on Simang River",
    "id": "note-sec6-139",
    "secId": "sec6",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Hosted at Boleng from Oct 5–9, 2026. Official Mascot: Nyami.",
    "date": "2026-08-06",
    "bullets": [
      "Arunachal Pradesh selected to host Asian Rafting Championships 2026 on the Simang River in Siang district.",
      "Organised by International Rafting Federation (IRF) and Indian Rafting Foundation."
    ],
    "trap": null
  },
  {
    "title": "Nitin Gadkari Confers Sarvottam Jeevan Raksha Padak to 12 Silkyara Tunnel Rat Miners",
    "id": "note-sec7-140",
    "secId": "sec7",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Ashoka Chakra series gallantry offshoot (instituted 1961).",
    "date": "2026-08-07",
    "bullets": [
      "Award Money: Sarvottam (₹2,00,000), Uttam (₹1,50,000), Jeevan Raksha (₹100,000)."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Nitin Gadkari Confers Sarvottam Jeevan Raksha Padak to 12 Silkyara Tunnel Rat Miners",
          "Award Money: Sarvottam (₹2,00,000), Uttam (₹1,50,000), Jeevan Raksha (₹100,000).",
          "Annual Recognition"
        ]
      ]
    }
  },
  {
    "title": "P. Pechiyammal and Govindhammal Honored with Dr. M.S. Swaminathan Award 2026",
    "id": "note-sec7-141",
    "secId": "sec7",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Honored in Chennai by MSSRF, CavinKare & Rotary Club of Madras East for environmental protection.",
    "date": "2026-08-06",
    "bullets": [
      "Organic farmers P.",
      "Pechiyammal (Tamil Nadu) and Govindhammal received Dr.",
      "M.S.",
      "Swaminathan Award 2026 for sustainable agriculture.",
      "Conferred by MSSRF for promoting native seed conservation."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "P. Pechiyammal and Govindhammal Honored with Dr. M.S. Swaminathan Award 2026",
          "Organic farmers P. Pechiyammal (Tamil Nadu) and Govindhammal received Dr. M.S. Swaminathan Award 2026 for sustainable agriculture.",
          "Annual Recognition"
        ]
      ]
    }
  },
  {
    "title": "Knight Frank Atlas 2026: Mumbai Ranks 15th, Hyderabad 27th Globally in Data Centre Capacity",
    "id": "note-sec7-142",
    "secId": "sec7",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Evaluates global data center operational and development pipelines.",
    "date": "2026-08-07",
    "bullets": [
      "Mumbai: 15th operational (11th development pipeline).",
      "Hyderabad: 27th operational (151 MW live, 2.2 GW pipeline)."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Knight Frank Atlas 2026: Mumbai Ranks 15th, Hyderabad 27th Globally in Data Centre Capacity",
          "Mumbai: 15th operational (11th development pipeline).",
          "Annual Recognition"
        ]
      ]
    }
  },
  {
    "title": "Google Named India's Most Attractive Employer Brand in REBR 2026 Report",
    "id": "note-sec7-143",
    "secId": "sec7",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Randstad Employer Brand Research 2026 ranking (followed by Tata Group and Amazon).",
    "date": "2026-08-06",
    "bullets": [
      "Google ranked India's Most Attractive Employer Brand 2026 in Randstad Employer Brand Research (REBR) report.",
      "Followed by Tata Consultancy Services (TCS) at #2 and Microsoft India at #3."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Google Named India's Most Attractive Employer Brand in REBR 2026 Report",
          "Google ranked India's Most Attractive Employer Brand 2026 in Randstad Employer Brand Research (REBR) report.",
          "Annual Recognition"
        ]
      ]
    }
  },
  {
    "title": "12th National Handloom Day Observed on 7th August 2026",
    "id": "note-sec8-144",
    "secId": "sec8",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Commemorates 1905 Swadeshi Movement (started 2015).",
    "date": "2026-08-07",
    "bullets": [
      "Awards: 22 total (3 Sant Kabir + 9 National Handloom Awards for 2025)."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Date & Event",
        "Official Theme / Mandate",
        "Nodal Body / Significance"
      ],
      "rows": [
        [
          "12th National Handloom Day Observed on 7th August 2026",
          "Awards: 22 total (3 Sant Kabir + 9 National Handloom Awards for 2025).",
          "Global Observance"
        ]
      ]
    }
  },
  {
    "title": "Hiroshima Day Observed Globally on 6th August",
    "id": "note-sec8-145",
    "secId": "sec8",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Commemorates 1945 atomic bombing.",
    "date": "2026-08-06",
    "bullets": [
      "Hiroshima Day observed globally on August 6 to commemorate the 1945 atomic bombing of Hiroshima by US aircraft 'Enola Gay'.",
      "Theme focus: Nuclear Disarmament and World Peace."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Date & Event",
        "Official Theme / Mandate",
        "Nodal Body / Significance"
      ],
      "rows": [
        [
          "Hiroshima Day Observed Globally on 6th August",
          "Hiroshima Day observed globally on August 6 to commemorate the 1945 atomic bombing of Hiroshima by US aircraft 'Enola Gay'.",
          "Global Observance"
        ]
      ]
    }
  },
  {
    "title": "Article 370 Abrogation 7th Anniversary Observed on 5th August 2026",
    "id": "note-sec8-146",
    "secId": "sec8",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Celebrated via dPal rNgam Duston festival at Leh Palace for Ladakh UT declaration anniversary.",
    "date": "2026-08-07",
    "bullets": [
      "7th anniversary of Article 370 abrogation observed on August 5, 2026, marking constitutional integration of Jammu & Kashmir and Ladakh.",
      "Article 370 was abrogated by Parliament on August 5, 2019."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Date & Event",
        "Official Theme / Mandate",
        "Nodal Body / Significance"
      ],
      "rows": [
        [
          "Article 370 Abrogation 7th Anniversary Observed on 5th August 2026",
          "7th anniversary of Article 370 abrogation observed on August 5, 2026, marking constitutional integration of Jammu & Kashmir and Ladakh.",
          "Global Observance"
        ]
      ]
    }
  },
  {
    "title": "Squadron Leader Bhawana Kanth Becomes First Woman IAF 'Top Gun' Combat Leader",
    "id": "note-sec8-147",
    "secId": "sec8",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "1st woman to graduate from IAF Fighter Combat Leader course after 20-week training.",
    "date": "2026-08-06",
    "bullets": [
      "Squadron Leader Bhawana Kanth became the first woman fighter pilot in IAF history to qualify as a 'Top Gun' Combat Leader.",
      "Completed Tactics and Air Combat Development Establishment (TACDE) course."
    ],
    "trap": null,
    "miniGrid": {
      "headers": [
        "Date & Event",
        "Official Theme / Mandate",
        "Nodal Body / Significance"
      ],
      "rows": [
        [
          "Squadron Leader Bhawana Kanth Becomes First Woman IAF 'Top Gun' Combat Leader",
          "Squadron Leader Bhawana Kanth became the first woman fighter pilot in IAF history to qualify as a 'Top Gun' Combat Leader.",
          "Global Observance"
        ]
      ]
    }
  },
  {
    "title": "Static GK Highlights: Manas National Park, SpaceX Falcon 9 Lunar Impact, Himalayan Serow",
    "id": "note-sec1-148",
    "secId": "sec1",
    "interviewQ": null,
    "staticGk": null,
    "tier": "Tier A",
    "hook": "Key static environment & space facts.",
    "date": "2026-08-07",
    "bullets": [
      "Manas NP: Tiger & Elephant reserve in Assam.",
      "Himalayan Serow: Dalhousie, HP (IUCN: Near Threatened, CITES Appendix I).",
      "Mullaperiyar Dam: Masonry gravity dam in Thekkady, Idukki, Kerala."
    ],
    "trap": null
  },
  {
    "title": "Maharashtra Approves ₹45-Crore Eco-Nature Park with India's 1st AI Bird Monitoring Centre at Thane Creek",
    "interviewQ": "\"How does AI-driven acoustic monitoring improve wetland conservation along the Central Asian Flyway?\"\n💡 **Model Answer: Automated real-time image and sound recognition tracks migratory species populations without human environmental disturbance.**",
    "hook": "Integrates AI acoustic sensors and automated camera tracking into coastal Ramsar wetland conservation.",
    "tier": "Tier A",
    "trap": "India's 1st dedicated flamingo sanctuary (Thane Creek, 2015) vs India's 101st Ramsar site (Glaw Lake, Arunachal Pradesh).",
    "staticGk": "Thane Creek declared wildlife sanctuary in 2015 (India's 1st dedicated flamingo sanctuary) | Designated Ramsar site.",
    "id": "note-sec4-149",
    "bullets": [
      "Project Location: Thane Creek Flamingo Sanctuary shoreline (Bhandup Bird Park project, 20.09 hectares total, 0.35 hectares physical footprint).",
      "Technology Footprint: Uses AI-based cameras and acoustic sensors across a 1.5-km stretch to track bird activity along the Central Asian Flyway.",
      "Funding Allocation: ₹45 crore sanctioned from District Planning Committee special fund."
    ],
    "secId": "sec4",
    "date": "2026-08-01"
  },
  {
    "title": "President Droupadi Murmu Launches e-Audio Guide, e-Upahaar 3rd Edition, and RAAHI Electric Bus Service",
    "interviewQ": null,
    "hook": "Introduces citizen-centric, sustainability-focused, and heritage initiatives marking 4 years of Presidency.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Droupadi Murmu sworn in as 15th President on July 25, 2022 (India's 1st tribal Head of State) | Historic Mughal Gardens renamed Amrit Udyan.",
    "id": "note-sec4-150",
    "bullets": [
      "Heritage & Inclusion: Launched app-based e-Audio Guide (16 Indian languages + sign language) and 3rd edition of e-Upahaar (300 curated gifts for public auction).",
      "Childcare Facility: Inaugurated 'Bachpan Bal Parisar' comprising 'Kilkari' play zone and 'Samarth Anganwadi-cum-Palna'.",
      "Green Mobility: Flagged off 'RAAHI' (Rashtrapati Bhavan Access and Heritage Interconnector)—a fare-free, 27-seater electric bus operated by women drivers.",
      "Net Zero Infrastructure: Foundation stone laid for new service block under Net Zero Energy Strategy."
    ],
    "secId": "sec4",
    "date": "2026-08-02"
  },
  {
    "title": "MHA Reports Over 12,000 e-Zero FIRs Registered Against Cyber Financial Frauds (Delhi Tops List)",
    "interviewQ": null,
    "hook": "Expedites emergency reporting of financial cybercrime across 18 participating States and Union Territories.",
    "tier": "Tier A",
    "trap": "3-day window to convert e-Zero FIR into regular FIR vs 30-day past due window for loan phone lock restrictions.",
    "staticGk": "National Cyber Crime Reporting Portal (NCRP) administered under I4C (MHA) | CEO: Rajesh Kumar.",
    "id": "note-sec1-151",
    "bullets": [
      "Operational Network: e-Zero FIR system (launched May 2025) implemented across 18 States/UTs, allowing direct online reporting via helpline 1930.",
      "State Rankings: Delhi topped nationwide with 6,115 e-Zero FIRs, followed by Chandigarh (4,174) and Uttarakhand (552).",
      "Procedural Window: Complainants must visit local territorial police station within 3 days to convert Zero FIR into regular FIR.",
      "Constitutional Domain: 'Police' and 'Public Order' are State subjects under the Seventh Schedule of the Constitution."
    ],
    "secId": "sec1",
    "date": "2026-08-03"
  },
  {
    "title": "Department of Expenditure Enforces 'One Officer, One Official Car' Policy for Central Bureaucracy",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "Department of Expenditure works under Ministry of Finance.",
    "id": "note-sec1-152",
    "bullets": [
      "Restricts entitled officers to 1 official government car even if assigned additional charge of other ministries, PSUs, or autonomous bodies.",
      "Personal Travel Allowance: Entitled officers may use official cars for personal travel up to 500 km per month by paying ₹3,000 per month and forfeiting transport allowance."
    ],
    "secId": "sec1",
    "date": "2026-08-04"
  },
  {
    "title": "Defence Minister Inaugurates Country's 1st Department of Military Medicine at Command Hospital, Lucknow",
    "interviewQ": null,
    "hook": "Establishes dedicated academic and operational military healthcare research under Army Medical Services.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "AFMS Headquarters: New Delhi | DGAFMS: Air Marshal Sandeep Thareja.",
    "id": "note-sec6-153",
    "bullets": [
      "Administrative Nodal Body: Established under Directorate General of Medical Services (Army).",
      "Strategic Alignment: Complements proposed Global Military Medicine Centre under Raksha Strategy Vision 2026-30.",
      "Specialized Disciplines: Focuses on CBRNe medical response, damage control trauma, combat psychiatry, and high-altitude field care."
    ],
    "secId": "sec6",
    "date": "2026-08-05"
  },
  {
    "title": "Ministry of Panchayati Raj Launches 'DAANVEER' Citizen Participation Portal for Gram Panchayats",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "Union Minister for Panchayati Raj: Rajiv Ranjan Singh (Lalan Singh).",
    "id": "note-sec10-154",
    "bullets": [
      "Enables individuals and Indian diaspora to voluntarily donate computers to nearly 2.5 lakh Gram Panchayats via 'Meri Panchayat' app and DigiHaat.",
      "Technical Partners: Developed in collaboration with National Informatics Centre (NIC) and DigiHaat."
    ],
    "secId": "sec10",
    "date": "2026-08-06"
  },
  {
    "title": "MHA Orders Takedown of Open-Source Bluetooth Mesh App 'Bitchat' on GitHub",
    "interviewQ": "\"Why did law enforcement agencies order the removal of peer-to-peer mesh apps like Bitchat?\"\n💡 **Model Answer: Decentralized BLE apps operate without phone numbers, IP logs, or central servers, preventing lawful interception during cyber threats.**",
    "hook": "Addresses lawful interception concerns over decentralized Bluetooth Low Energy (BLE) peer-to-peer messaging.",
    "tier": "Tier A",
    "trap": "3-hour GitHub takedown deadline vs 3-day e-Zero FIR conversion window.",
    "staticGk": "IT Act enacted in 2000 | Safe harbour protection provided under Section 79 of IT Act 2000.",
    "id": "note-sec2-155",
    "bullets": [
      "Legal Citation: Order issued by I4C under Section 79(3)(b) of Information Technology Act 2000 and Rule 3(1)(d) of IT Rules 2021.",
      "Operational Mechanism: Bitchat (created by Jack Dorsey) uses BLE mesh networks for encrypted communication within 30–100 metres without internet or mobile networks.",
      "Takedown Deadline: GitHub directed to disable access to 3 repositories within 3 hours to avoid loss of intermediary safe-harbour protection."
    ],
    "secId": "sec2",
    "date": "2026-08-07"
  },
  {
    "title": "Air India Expands International Aviation Hub Model across 44 Target Airports",
    "interviewQ": null,
    "hook": "Routes Tier-II and Tier-III regional passengers through major hub airports for seamless international connections.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Air India CEO: Tewolde Gebremariam | Ministry of Civil Aviation.",
    "id": "note-sec1-156",
    "bullets": [
      "Hub & Spoke Footprint: Delhi serves as 1st primary hub airport; Varanasi, Amritsar, and Ahmedabad operating as spoke airports.",
      "Easy Connect Flights: Enables international check-in, luggage drop, and immigration formalities at origin regional airports before connecting via Delhi.",
      "National Target: Ministry of Civil Aviation aims to develop 100 airports and 200 heliports over next 10 years."
    ],
    "secId": "sec1",
    "date": "2026-08-01"
  },
  {
    "title": "MoHUA Approves ₹2,719.80 Crore Urban Challenge Fund (UCF) Projects for Ahmedabad",
    "interviewQ": null,
    "hook": "Finances major urban infrastructure, Intelligent Water Management, and ITMS transit under Centrally Sponsored UCF.",
    "tier": "Tier A",
    "trap": "UCF Central Assistance (₹1 lakh crore / 25% project cost) vs total urban investment target (₹4 lakh crore).",
    "staticGk": "MoHUA Minister: Manohar Lal Khattar | ADB approved  billion loan for Urban Transformation and Investment Program.",
    "id": "note-sec10-157",
    "bullets": [
      "Approved Projects: ₹852.93 cr (West Ahmedabad sewerage), ₹551.35 cr (East Ahmedabad sewerage), ₹479.25 cr (125 TPD Integrated Sludge Facility), ₹331.03 cr (ITMS & AFCS Transit).",
      "UCF Corpus & Structure: UCF approved with ₹1 lakh crore Central Assistance to leverage ₹4 lakh crore urban investments (FY26 to FY31).",
      "Central support capped at 25%, minimum 50% market raised, 25% state/ULB.",
      "Credit Guarantee Sub-Scheme: Central repayment guarantee up to ₹7 crore (or 70% of loan) for Tier-II/III cities."
    ],
    "secId": "sec10",
    "date": "2026-08-02"
  },
  {
    "title": "Supreme Court Issues Interim Order Barring Audio-Video Court Recording Monetisation on Digital Platforms",
    "interviewQ": null,
    "hook": "Protects judicial dignity against selective, decontextualized social media video clipping.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Supreme Court sanctioned judge strength: 38 (including CJI) | Article 124(1).",
    "id": "note-sec2-158",
    "bullets": [
      "Bench Composition: 3-judge bench headed by CJI Surya Kant, Justice Joymalya Bagchi, and Justice V.",
      "Mohana.",
      "Order Mandate: Bars posting, reposting, extracting, or monetising courtroom audio-video recordings without written permission of Supreme Court Secretary General or High Court Registrar Generals.",
      "News Reporting Clarification: Clarified that order does NOT restrict genuine news reporting or authorized livestreaming."
    ],
    "secId": "sec2",
    "date": "2026-08-03"
  },
  {
    "title": "Kerala Deploys 'ANNAM.AI' Smart Weather Stations for Climate-Smart Agriculture",
    "interviewQ": null,
    "hook": "Rolls out 3-km resolution agricultural weather monitoring developed by IIT Ropar.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "IIT Ropar located in Punjab | Kerala CM: V. D. Satheesan.",
    "id": "note-sec6-159",
    "bullets": [
      "Centre of Excellence: Developed at IIT Ropar with support from Ministry of Education under 100-day action plan.",
      "Deployment Footprint: 100 AI-powered weather stations deployed at 3-km resolution tracking solar radiation, soil moisture, and rainfall.",
      "National Pilot: Punjab was the 1st implementation state (100 stations deployed by March 30, 2026)."
    ],
    "secId": "sec6",
    "date": "2026-08-04"
  },
  {
    "title": "Ladakh Grants Statutory Protection to 23 Ancient Heritage Sites under J&K Preservation Act",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "Ladakh carved out as UT on October 31, 2019 | Lieutenant Governor: Vinai Kumar Saxena.",
    "id": "note-sec4-160",
    "bullets": [
      "Notifies 23 ancient forts, monasteries, and petroglyph clusters as 'Protected Monuments' across Leh and Kargil.",
      "Prominent Monuments: Maitreya Buddha Rock Carving at Shey, Tingmosgang Fort, Ancient Caves at Saspol, and Chamba Karpo at Diggar."
    ],
    "secId": "sec4",
    "date": "2026-08-05"
  },
  {
    "title": "Rajasthan Becomes 1st State to Operationalise Auctioned Rare Earth Elements (REE) Exploration License",
    "interviewQ": null,
    "hook": "Grants 207.63 sq. km. critical mineral exploration block in Navatala-Devigarh to CMPDI.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "CMPDI is a Central PSU subsidiary of Coal India Ltd | Rajasthan CM: Bhajan Lal Sharma.",
    "id": "note-sec1-161",
    "bullets": [
      "Licence Area: Spans 207.63 sq. km. across Pachpadra tehsil (Balotra) and Shergarh tehsil (Jodhpur).",
      "Awardee Entity: Central Mine Planning and Design Institute Limited (CMPDI).",
      "Critical Minerals Identified: Lanthanum, Cerium, Praseodymium, and Neodymium for EV and semiconductor supply chains."
    ],
    "secId": "sec1",
    "date": "2026-08-06"
  },
  {
    "title": "Brookfield Launches  Million 'Lumara' Renewable Energy Platform in India",
    "interviewQ": null,
    "hook": "Accelerates solar, wind, and Battery Energy Storage Systems (BESS) buildout backed by ALTÉRRA fund.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Brookfield Asset Management HQ: Toronto/New York | CEO: Bruce Flatt.",
    "id": "note-sec1-162",
    "bullets": [
      "Platform Capital: Initial deployment of ~ million backed by Brookfield Catalytic Transition Fund (CTF).",
      "Anchor Investor: Funded by UAE-backed climate vehicle ALTÉRRA (target corpus up to  billion).",
      "National Target Alignment: Supports India's goal of reaching 500 GW installed renewable capacity by 2030."
    ],
    "secId": "sec1",
    "date": "2026-08-07"
  },
  {
    "title": "India Performs Record 20,138 Organ Transplants in 2025; Ranked 3rd Globally (NOTTO Report)",
    "interviewQ": null,
    "hook": "Launches nationwide 'Jug Jug Jiyo Abhiyaan' and e-Pratyaropan portal on 16th Indian Organ Donation Day.",
    "tier": "Tier A",
    "trap": "India's global transplant rank (3rd) vs deceased organ donor top state (Tamil Nadu, 266 donors).",
    "staticGk": "NOTTO works under Ministry of Health & Family Welfare | Indian Organ Donation Day observed August 3.",
    "id": "note-sec3-163",
    "bullets": [
      "Global Ranking: India ranks 3rd globally in total organ transplants (behind US and China).",
      "National Awards: Tamil Nadu named Best State for highest deceased organ donors (266 donors); Assam Best NE State; Delhi Best UT.",
      "Digital Infrastructure: Launched 'e-Pratyaropan' portal and NOTTO app connecting 1,200 registered transplant hospitals.",
      "Aadhaar Pledges: Over 5 lakh Aadhaar-verified organ donation pledges recorded since 2023."
    ],
    "secId": "sec3",
    "date": "2026-08-01"
  },
  {
    "title": "Indian Railways Transports Live Donor Heart by Vande Bharat Express for 1st Time",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "Indian Railways CEO: Satish Kumar | RPF works under Ministry of Railways.",
    "id": "note-sec3-164",
    "bullets": [
      "Ferried live heart 250 km from Surat to Ahmedabad aboard Vande Bharat Express (Train No. 20901) to U.N.",
      "Mehta Institute.",
      "Green Corridor: Platform 1 at Ahmedabad Station connected via RPF-Police green corridor."
    ],
    "secId": "sec3",
    "date": "2026-08-02"
  },
  {
    "title": "PM Modi Dedicates ₹17,900 Crore Infrastructure Projects in Andhra Pradesh & Opens Alluri Sitarama Raju Airport",
    "interviewQ": null,
    "hook": "Inaugurates Greenfield PPP airport at Bhogapuram and lays foundation for AP's 1st semiconductor facility.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Andhra Pradesh CM: N. Chandrababu Naidu | Karnataka CM: Siddaramaiah / D. K. Shivakumar.",
    "id": "note-sec4-165",
    "bullets": [
      "Bhogapuram International Airport: Developed under PPP mode at ₹5,640 crore (capacity 6 million passengers annually).",
      "Semiconductor Infrastructure: Foundation stone laid for Andhra Semiconductor and Innovation Park (ASIP) at Visakhapatnam (₹460 crore).",
      "Heritage Landmark: Inaugurated 'Viveka Smaraka' at Sri Ramakrishna Ashrama in Mysuru, Karnataka."
    ],
    "secId": "sec4",
    "date": "2026-08-03"
  },
  {
    "title": "4th Edition of Tri-Services Future Warfare Course Commences in New Delhi",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "1st pilot edition held in September 2024 | CENJOWS HQ: New Delhi.",
    "id": "note-sec6-166",
    "bullets": [
      "Organized under aegis of HQ Integrated Defence Staff (IDS) and coordinated by CENJOWS at Manekshaw Centre.",
      "Focus: Multi-domain operations, grey-zone warfare, AI, quantum tech, and autonomous combat systems."
    ],
    "secId": "sec6",
    "date": "2026-08-05"
  },
  {
    "title": "SBI Card and Google Pay Launch Co-Branded 'Google Pay Flex SBI Card' on RuPay & Visa",
    "interviewQ": null,
    "hook": "Integrates UPI payment linking and tap-to-pay tokenization on Google Pay app.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "SBI Cards MD & CEO: Salila Pande | Google CEO: Sundar Pichai.",
    "id": "note-sec3-167",
    "bullets": [
      "Co-Branded Lineage: Google Pay's 2nd co-branded credit card in India (after Axis Bank in Dec 2025).",
      "Payment Interoperability: RuPay variant can be linked directly to UPI for merchant QR payments."
    ],
    "secId": "sec3",
    "date": "2026-08-06"
  },
  {
    "title": "NCDEX Launches 'NCDEX Nidhi' Mutual Fund Transaction Platform to Boost Rural Penetration",
    "interviewQ": null,
    "hook": "Leverages 800+ Farmer Producer Organisations (FPOs) to expand mutual fund distribution beyond top 100 cities.",
    "tier": "Tier A",
    "trap": "FPO corporate ARN fee (reduced to ₹10,000) vs standard corporate ARN fee (₹40,000).",
    "staticGk": "NCDEX HQ: Mumbai | MD & CEO: Arun Raste | AMFI Chairman: Navneet Munot.",
    "id": "note-sec3-168",
    "bullets": [
      "AMC Onboarding: 6 AMCs onboarded (Nippon India, HDFC, Axis, LIC, Tata, and Invesco MF).",
      "ARN Fee Reduction: AMFI reduced corporate ARN registration fee for certified FPO distributors to ₹10,000 (from ₹40,000)."
    ],
    "secId": "sec3",
    "date": "2026-08-07"
  },
  {
    "title": "Nepal Central Bank Allows Indian & Nepalese Currency Notes of ₹200 and ₹500 Denominations",
    "interviewQ": null,
    "hook": "Relaxes 2019 demonetisation restrictions up to a combined carrying limit of ₹25,000 per person.",
    "tier": "Tier A",
    "trap": "Carrying limit for ₹200/₹500 notes (₹25,000 per person) vs un-declared foreign currency limit (,000).",
    "staticGk": "Nepal Rastra Bank (NRB) Governor: Maha Prasad Adhikari | Currency: Nepalese Rupee.",
    "id": "note-sec3-169",
    "bullets": [
      "Carrying Limit: Combined limit of ₹25,000 per person for post-demonetisation ₹200 and ₹500 notes (issued on/after Nov 9, 2016).",
      "Prohibited Notes: Older pre-demonetisation ₹500 and ₹1,000 notes remain strictly banned.",
      "Customs Exemption: Foreign currency up to ,000 allowed without customs declaration."
    ],
    "secId": "sec3",
    "date": "2026-08-01"
  },
  {
    "title": "RBI Defers Revised Basel III Pillar 3 Disclosure Norms Implementation to April 1, 2027",
    "interviewQ": "\"Why did RBI defer Basel III Pillar 3 disclosure norms to April 2027?\"\n💡 **Model Answer: Grants banks IT upgrade preparation time to align Pillar 3 market disclosures with Expected Credit Loss (ECL) credit-risk capital norms.**",
    "hook": "Pushes back commencement to align Pillar 3 market discipline disclosures with Expected Credit Loss (ECL) provisioning.",
    "tier": "Tier A",
    "trap": "Pillar 3 deferred implementation date (April 1, 2027) vs 1st revised quarterly report (June 30, 2027).",
    "staticGk": "Basel III standards developed by Basel Committee on Banking Supervision (BCBS), Basel, Switzerland.",
    "id": "note-sec2-170",
    "bullets": [
      "Revised Timeline: Deferred from September 30, 2026 to April 1, 2027 (1st revised quarterly disclosure for quarter ending June 30, 2027).",
      "Regulatory Directions: RBI issued 10 amendment directions covering commercial banks, SFBs, and payments banks.",
      "Pillar 3 Scope: Mandates consolidated public disclosures on capital adequacy, risk-weighted assets (RWAs), and risk governance."
    ],
    "secId": "sec2",
    "date": "2026-08-02"
  },
  {
    "title": "DFS Launches 'Bharat Maritime Insurance Pool (BMIP)' Offering .5 Billion War-Risk P&I Insurance",
    "interviewQ": null,
    "hook": "India's 1st sovereign-backed Protection & Indemnity insurance pool reduces war-risk premium rates by 35-40%.",
    "tier": "Tier A",
    "trap": "BMIP indemnity limit (.5 billion) vs premium rate reduction (35–40%).",
    "staticGk": "DFS Secretary: Sanjay Lohiya | SCI HQ: Mumbai.",
    "id": "note-sec3-171",
    "bullets": [
      "Underwriting Capacity: Indemnity limit up to .5 billion provided under sovereign backing.",
      "1st Policy Recipient: DFS handed over 1st P&I policy under BMIP to Shipping Corporation of India (SCI).",
      "Product Designer: Designed by The New India Assurance Company Ltd."
    ],
    "secId": "sec3",
    "date": "2026-08-03"
  },
  {
    "title": "SEBI Releases 'GARUDA' Green-Channel Framework for Accelerated AIF Scheme Launches",
    "interviewQ": null,
    "hook": "Permits regular Alternative Investment Funds (AIFs) to launch schemes within 10 working days of PPM filing.",
    "tier": "Tier A",
    "trap": "Regular AIF GARUDA launch window (10 working days after PPM) vs digital accessibility audit extension (October 31, 2026).",
    "staticGk": "SEBI Chairman: Tuhin Kanta Pandey | AIFs governed under SEBI (AIF) Regulations 2012.",
    "id": "note-sec2-172",
    "bullets": [
      "GARUDA Mechanism: Green-Channel AIF Rollout Upon Document Acknowledgement allows operation 10 working days after Private Placement Memorandum (PPM) filing on SEBI SI Portal.",
      "Exemption for AI & Large Value Funds: Accredited Investor (AI-only) funds, Large Value Funds (LVFs), and Angel Funds exempted from merchant banker PPM filing.",
      "Digital Accessibility Audit Extension: Extended deadline for regulated entities to complete digital accessibility audits under Persons with Disabilities Act to October 31, 2026."
    ],
    "secId": "sec2",
    "date": "2026-08-04"
  },
  {
    "title": "Monisha Chakraborty Appointed Executive Director of Reserve Bank of India",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "RBI Governor: Sanjay Malhotra (26th) | 4 Deputy Governors.",
    "id": "note-sec2-173",
    "bullets": [
      "Appointed ED overseeing Foreign Exchange Department and Financial Markets Regulation Department.",
      "Career background: Over 3 decades at RBI; previously Chief General Manager-in-Charge of Department of Supervision."
    ],
    "secId": "sec2",
    "date": "2026-08-05",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Monisha Chakraborty",
          "Executive Director of Reserve Bank of India",
          "Appointed ED overseeing Foreign Exchange Department and Financial Markets Regulation Department."
        ]
      ]
    }
  },
  {
    "title": "IRDAI Approves ProTec General Insurance License & Operationalises Policyholders' Education Fund (PEPF)",
    "interviewQ": null,
    "hook": "Grants 4th general insurance license of 2026 and replaces periodic intermediary renewals with perpetual registration.",
    "tier": "Tier A",
    "trap": "100% FDI in insurance vs earlier 74% foreign shareholding cap.",
    "staticGk": "IRDAI Chairman: Ajay Seth | HQ: Hyderabad, Telangana | Established 1999.",
    "id": "note-sec3-174",
    "bullets": [
      "License Awardee: ProTec General Insurance Ltd (JV between M.",
      "Pallonji Group & True North's Divya Sehgal).",
      "Regulatory Reforms: Operationalised PEPF under Sec 16A of IRDA Act 1999; mandated salesperson tagging on policies; replaced periodic intermediary renewals with annual fee perpetual registration.",
      "FDI Threshold: 2 insurers (1 life, 1 general) increased foreign shareholding beyond 74% following 100% FDI clearance."
    ],
    "secId": "sec3",
    "date": "2026-08-06"
  },
  {
    "title": "SEBI Clarifies 200-Buyer Limit for Off-Market Unlisted Secondary Share Transfers",
    "interviewQ": "\"Why did SEBI set a 200-buyer cap per FY for secondary unlisted share deals?\"\n💡 **Model Answer: Prevents unlisted companies from conducting backdoor public issues without fulfilling prospectus disclosure rules.**",
    "hook": "Private negotiated secondary share sales to up to 200 buyers per FY will not trigger public issue prospectus rules.",
    "tier": "Tier A",
    "trap": "200-buyer limit per FY (excluding QIBs) vs public offer prospectus triggers.",
    "staticGk": "Companies Act 2013 governs securities allotment limits | SEBI HQ: Mumbai.",
    "id": "note-sec2-175",
    "bullets": [
      "Regulatory Informal Guidance: Clarified to IDBI Bank that secondary transfers by existing shareholders to ≤200 buyers in a FY do not constitute a public offer.",
      "QIB Exclusion: Placements made to Qualified Institutional Buyers (QIBs) excluded from the 200-person calculation limit.",
      "Promoter Rights: Contractual Right of First Refusal (ROFR) promoter rights preserved."
    ],
    "secId": "sec2",
    "date": "2026-08-07"
  },
  {
    "title": "Indian Navy Launches 'Machilipatnam' ASW Shallow Water Craft & Delivers DSV 'Nipun'",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "Chief of Naval Staff: Admiral Krishna Swaminathan | Cochin Shipyard HQ: Kochi, Kerala.",
    "id": "note-sec6-176",
    "bullets": [
      "Machilipatnam (BY 529): Launched 7th of 8 Anti-Submarine Warfare Shallow Water Crafts built by Cochin Shipyard Ltd (over 80% indigenous content).",
      "DSV Nipun: Hindustan Shipyard Ltd delivered 2nd Diving Support Vessel capable of Deep Sea Saturation Diving up to 300m depth."
    ],
    "secId": "sec6",
    "date": "2026-08-01"
  },
  {
    "title": "Solar Defence Demonstrates Indigenous Counter-Swarm Drone System 'Bhargavastra'",
    "interviewQ": null,
    "hook": "Vehicle-mounted multi-layered system neutralises autonomous drone swarms within 16 seconds.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "SDAL HQ: Nagpur, Maharashtra | Parent Company: Solar Industries India Ltd.",
    "id": "note-sec6-177",
    "bullets": [
      "System Architecture: Integrates unguided micro-rockets (20m lethal radius) and precision micro-missiles (interception range 2.5 km).",
      "Target Detection: Detects large UAVs up to 10 km and small drones up to 6 km under MoD Make-II initiative."
    ],
    "secId": "sec6",
    "date": "2026-08-02"
  },
  {
    "title": "Indian Army Launches 'XWG Diesel' Operational at Extreme Temperatures Down to -42°C",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "COAS: General Dhiraj Seth | Indian Army HQ: New Delhi.",
    "id": "note-sec6-178",
    "bullets": [
      "Xtreme Weather Grade (XWG) Diesel jointly developed by Indian Army and OMCs for high-altitude deployment in Siachen and Ladakh.",
      "Specification Compliance: Fully compliant with BS-VI standards and IS 1460:2025 specs without engine modification."
    ],
    "secId": "sec6",
    "date": "2026-08-03"
  },
  {
    "title": "Indian Navy Launches Final Diving Support Craft 'DSC A24' at Titagarh",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "Titagarh Rail Systems HQ: Kolkata, West Bengal.",
    "id": "note-sec6-179",
    "bullets": [
      "5th and final vessel of DSC Project launched at Hooghly River by Titagarh Naval Systems (70% indigenous content).",
      "First private shipyard in West Bengal to deliver naval diving vessels."
    ],
    "secId": "sec6",
    "date": "2026-08-04"
  },
  {
    "title": "Anahat Singh Becomes 1st Indian Girl to Win World Junior Squash Championship Title",
    "interviewQ": null,
    "hook": "Defeated Egypt's Ruqayya Salem in Canada to end Egypt's 16-year hold on the junior title.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Anahat Singh ranked World No. 20 on senior PSA Tour | Squash to debut at LA 2028 Olympics.",
    "id": "note-sec6-180",
    "bullets": [
      "Tournament Location: Niagara-on-the-Lake, Canada.",
      "Historic Context: 1st Indian finalist in over 20 years since Joshna Chinappa (2005) and 1st ever gold medallist.",
      "Boys Event: Aryaveer Dewan reached last 16."
    ],
    "secId": "sec6",
    "date": "2026-08-05"
  },
  {
    "title": "India Wins Historic Para Athletics Medals at Commonwealth Games 2026 Glasgow",
    "interviewQ": null,
    "hook": "Dilip Mahadu Gavit wins gold and Basil Morssinganakath wins silver in Men's 100m T47.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Commonwealth Games 2026 host: Glasgow, Scotland | Overall medal table topper: Australia.",
    "id": "note-sec6-181",
    "bullets": [
      "Gold Medallist: Dilip Mahadu Gavit clocked Games record 10.71 seconds (1st Indian male para athletics CWG gold).",
      "Additional Medals: Murali Sreeshankar (Silver, Men's Long Jump), Mirabai Chanu (Gold, Women's 48kg Weightlifting), Sharmila Dhankar (Gold, Women's Shot Put F57).",
      "Overall Standings: India ranked 8th overall with 15 medals (3 gold, 9 silver, 3 bronze)."
    ],
    "secId": "sec6",
    "date": "2026-08-06",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "India Wins Historic Para Athletics Medals at Commonwealth Games 2026 Glasgow",
          "Gold Medallist: Dilip Mahadu Gavit clocked Games record 10.71 seconds (1st Indian male para athletics CWG gold).",
          "Commonwealth Games 2026 host: Glasgow, Scotland | Overall medal table topper: Australia."
        ]
      ]
    }
  },
  {
    "title": "ISSF World Cup 2026 Hangzhou: India Ranks 3rd Overall with 4 Medals",
    "interviewQ": null,
    "hook": "Esha Singh wins Gold in Women's 25m Pistol; Sainyam Vij wins Silver in 10m Pistol.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "ISSF HQ: Munich, Germany | President: Luciano Rossi.",
    "id": "note-sec6-182",
    "bullets": [
      "Medal Breakdown: India won 1 Gold (Esha Singh), 1 Silver (Sainyam Vij), 2 Bronze (Manu Bhaker, Sonam Maskar & Himanshu Dhillon).",
      "World Record: China's Zhang Changhong set new world record of 363.0 points in 50m Rifle 3 Positions (surpassing Aishwary Pratap Singh Tomar's 362.0).",
      "Overall Winner: China topped standings in Hangzhou."
    ],
    "secId": "sec6",
    "date": "2026-08-07",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "ISSF World Cup 2026 Hangzhou: India Ranks 3rd Overall with 4 Medals",
          "Medal Breakdown: India won 1 Gold (Esha Singh), 1 Silver (Sainyam Vij), 2 Bronze (Manu Bhaker, Sonam Maskar & Himanshu Dhillon).",
          "ISSF HQ: Munich, Germany | President: Luciano Rossi."
        ]
      ]
    }
  },
  {
    "title": "Ajinkya Rahane Announces Retirement from All Formats of International Cricket",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "BCCI President: Roger Binny | HQ: Mumbai.",
    "id": "note-sec6-183",
    "bullets": [
      "Played 85 Tests (5,077 runs), 90 ODIs, and 20 T20Is across 195 international matches for India (2011–2026).",
      "Top scorer for India in 2023 World Test Championship final."
    ],
    "secId": "sec6",
    "date": "2026-08-01"
  },
  {
    "title": "2026 Fields Medals Conferred on 4 Mathematicians at International Congress in Philadelphia",
    "interviewQ": null,
    "hook": "Hong Wang becomes 3rd woman scientist in 90-year history to win the 'Nobel Prize of Mathematics'.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Fields Medal instituted by J.C. Fields at Univ of Toronto | International Mathematical Union (IMU) HQ: Berlin.",
    "id": "note-sec7-184",
    "bullets": [
      "Recipients: Yu Deng (Univ of Chicago), John Pardon (Stony Brook), Jacob Tsimerman (Univ of Toronto), Hong Wang (NYU/IHES).",
      "Award Structure: Conferred every 4 years to mathematicians under 40 (prize: 15,000 CAD / ,600 and gold medal of Archimedes).",
      "Historic Distinction: Hong Wang (China) is 3rd female recipient after Maryam Mirzakhani (2014) and Maryna Viazovska (2022)."
    ],
    "secId": "sec7",
    "date": "2026-08-02",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "2026 Fields Medals Conferred on 4 Mathematicians at International Congress in Philadelphia",
          "Recipients: Yu Deng (Univ of Chicago), John Pardon (Stony Brook), Jacob Tsimerman (Univ of Toronto), Hong Wang (NYU/IHES).",
          "Fields Medal instituted by J.C. Fields at Univ of Toronto | International Mathematical Union (IMU) HQ: Berlin."
        ]
      ]
    }
  },
  {
    "title": "Cabinet Approves Revamped Khelo India Scheme & Enhanced ANSFs Assistance with ₹36,441 Cr Outlay",
    "interviewQ": null,
    "hook": "8-fold budget increase creates athlete development pathway from grassroots to TOPS.",
    "tier": "Tier A",
    "trap": "Khelo India outlay (₹29,054 crore) vs National Sports Federations ANSF outlay (₹7,387 crore).",
    "staticGk": "Sports Minister: Mansukh Mandaviya | Targets 2030 CWG hosting and 2036 Olympic Games bid.",
    "id": "note-sec10-185",
    "bullets": [
      "Outlay Allocation: Total ₹36,441 crore (FY27 to FY31) comprising ₹29,054 crore for Khelo India and ₹7,387 crore for ANSFs.",
      "New Athlete Category: Introduced 'Emerging Khelo India Athletes (E-KIAs)' alongside school programs KIFS and KIUV.",
      "Coaching Standardisation: Setting up National Coach Accreditation Board (NCAB) to professionalise coaching."
    ],
    "secId": "sec10",
    "date": "2026-08-03"
  },
  {
    "title": "NVIDIA & 35 Tech Giants Launch 'Open Secure AI Alliance' for AI Cybersecurity",
    "interviewQ": null,
    "hook": "Develops open-source security tools to detect and respond to AI-powered cyber threats.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "NVIDIA HQ: Santa Clara, California | CEO: Jensen Huang.",
    "id": "note-sec6-186",
    "bullets": [
      "Founding Alliance Members: Microsoft, IBM, Cisco, Adobe, Cloudflare, CrowdStrike, HPE, Hugging Face, Red Hat, SpaceX, Linux Foundation.",
      "Notable Absentees: OpenAI, Anthropic, Google, and Meta are absent from alliance roster.",
      "Foundational Framework: Builds on Linux Foundation's Akrites initiative and OpenSSF."
    ],
    "secId": "sec6",
    "date": "2026-08-04"
  },
  {
    "title": "IN-SPACe Issues India's 1st Mandatory Framework for Planned Space Object Re-entry",
    "interviewQ": null,
    "hook": "Caps expected casualty risk below 1 in 10,000 for planned atmospheric re-entry of satellites.",
    "tier": "Tier A",
    "trap": "45-day NOTAM advance notice window vs 1 in 10,000 casualty risk cap.",
    "staticGk": "IN-SPACe HQ: Ahmedabad, Gujarat | Chairman: Dr. Pawan Goenka | Department of Space.",
    "id": "note-sec6-187",
    "bullets": [
      "Single-Window Regulatory Mandate: All Indian entities and foreign entities (via Indian JVs) must obtain prior IN-SPACe authorization.",
      "Safety Risk Cap: Expected casualty risk capped at below 1 in 10,000 (aligning with NASA and ESA standards).",
      "Advance Notice: Applicants must file Notice to Airmen (NOTAM) and maritime danger notifications at least 45 days in advance.",
      "Natural Decay Exemption: Satellites burning up naturally in atmosphere through orbital decay exempted."
    ],
    "secId": "sec6",
    "date": "2026-08-05"
  },
  {
    "title": "NIC & eCourts CoEE Roll Out AI Legal Assistant 'LegRAA' and 'Digital Courts 2.1'",
    "interviewQ": null,
    "hook": "Retrieval-Augmented Generation (RAG) AI assistant trained on 36,000 Supreme Court judgments assists judges.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "MoS Law & Justice: Arjun Ram Meghwal | Developed under eCourts Mission Mode Project Phase-III.",
    "id": "note-sec2-188",
    "bullets": [
      "LegRAA Tool: Legal Research Analysis Assistant uses RAG architecture to analyze pleadings and generate case briefs.",
      "Digital Courts 2.1: Includes voice-to-text dictation (ASR-SHRUTI) and translation (PANINI) under eCourts Phase-III.",
      "Financial Allocation: Ministry of Law earmarked ₹53.57 crore for judicial AI tools."
    ],
    "secId": "sec2",
    "date": "2026-08-06"
  },
  {
    "title": "Satya Pal Kumar Appointed Director of Financial Intelligence Unit-India (FIU-IND)",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "FIU-IND works under Department of Revenue, Ministry of Finance | HQ: New Delhi.",
    "id": "note-sec5-189",
    "bullets": [
      "Appointed Joint Secretary-level Director of FIU-IND for 5-year tenure (succeeding Pankaj Kumar Mishra).",
      "Agency Mandate: Central national agency receiving and analyzing suspicious financial transaction reports."
    ],
    "secId": "sec5",
    "date": "2026-08-07",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Satya Pal Kumar",
          "Director of Financial Intelligence Unit-India (FIU-IND)",
          "Appointed Joint Secretary-level Director of FIU-IND for 5-year tenure (succeeding Pankaj Kumar Mishra)."
        ]
      ]
    }
  },
  {
    "title": "Shailesh Jejurikar Appointed Chairman of Procter & Gamble Company",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "P&G Global HQ: Cincinnati, Ohio, USA.",
    "id": "note-sec5-190",
    "bullets": [
      "Indian-American business leader appointed P&G Board Chairman (succeeding Jon R.",
      "Moeller) while continuing as CEO."
    ],
    "secId": "sec5",
    "date": "2026-08-01",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Shailesh Jejurikar",
          "Chairman of Procter & Gamble Company",
          "Indian-American business leader appointed P&G Board Chairman (succeeding Jon R. Moeller) while continuing as CEO."
        ]
      ]
    }
  },
  {
    "title": "Chhattisgarh Launches 'DWEEPTI Yojana' for Women-Led Rooftop Solar Enterprises",
    "interviewQ": null,
    "hook": "1st Indian state to adopt a women-led distributed renewable energy policy training 'Solar Didis'.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Chhattisgarh CM: Vishnu Deo Sai | Pilot conducted in Kabirdham district.",
    "id": "note-sec10-191",
    "bullets": [
      "Policy Scope: Places women SHGs at center of rooftop solar expansion to establish 5,000 women-led energy enterprises over 5 years.",
      "Target Reach: 50,000 green jobs and clean energy access for 5 lakh families across Chhattisgarh.",
      "Technical Partners: Jointly developed by Panchayat Dept and Transform Rural India under Green Economy Transition Mission."
    ],
    "secId": "sec10",
    "date": "2026-08-02"
  },
  {
    "title": "PMKSY Completes 10 Years of Sustainable Irrigation; Cabinet Approves M-CADWM Sub-Scheme",
    "interviewQ": null,
    "hook": "Allocates ₹6,587 crore in Budget 2026-27 for micro-irrigation under Per Drop More Crop.",
    "tier": "Tier A",
    "trap": "PMKSY total continuation outlay (₹93,068.56 crore) vs M-CADWM initial sub-scheme outlay (₹1,600 crore).",
    "staticGk": "Ministry of Jal Shakti | PMKSY-AIBP completed 71 of 123 major irrigation projects.",
    "id": "note-sec10-192",
    "bullets": [
      "PMKSY Overview: Launched July 1, 2015; continued for 2021-26 with ₹93,068.56 crore outlay (benefited 27M+ farmers).",
      "Per Drop More Crop (PDMC): 110.92 lakh hectares brought under micro-irrigation.",
      "M-CADWM Sub-Scheme: Cabinet approved Modernization of Command Area Development & Water Management with ₹1,600 crore initial outlay for pipeline networks."
    ],
    "secId": "sec10",
    "date": "2026-08-03"
  },
  {
    "title": "Cabinet Approves ₹84,084 Crore 'Samudra Manthan' Offshore Energy Exploration Scheme",
    "interviewQ": "\"Why did India launch the risk-sharing Samudra Manthan scheme for deepwater energy exploration?\"\n💡 **Model Answer: Deepwater wells cost -150M each; state risk-sharing attracts private capital to reduce India's  crude import dependency.**",
    "hook": "Unlocks India's offshore crude oil and gas potential across Krishna-Godavari, Cauvery, and Mahanadi basins.",
    "tier": "Tier A",
    "trap": "Samudra Manthan Phase-I total outlay (₹84,084 crore) vs deepwater drilling component (₹55,200 crore).",
    "staticGk": "India is 3rd-largest global crude oil consumer ( billion annual import bill) | Hydrocarbon resource target: 2.2B TOE.",
    "id": "note-sec1-193",
    "bullets": [
      "Phase-I Outlay: ₹84,084 crore implementation through FY31 under Ministry of Petroleum & Natural Gas.",
      "Scheme Components: (i) ₹28,534 cr (2D/3D seismic data & NDR AI re-processing); (ii) ₹55,200 cr (drilling 60 deepwater wells); (iii) ₹350 cr (monitoring).",
      "Production Target: Increases domestic oil & gas production from 62 MMTOE to 80 MMTOE annually."
    ],
    "secId": "sec1",
    "date": "2026-08-04"
  },
  {
    "title": "Cabinet Approves ₹5,070 Crore 'Pradhan Mantri Surya Sarovar Yojana (PM-SSY)' for Floating Solar",
    "interviewQ": null,
    "hook": "Integrates 5,000 MW floating solar capacity with 10,000 MWh Energy Storage Systems across inland water bodies.",
    "tier": "Tier A",
    "trap": "PM-SSY financial outlay (₹5,070 crore) vs Central Financial Assistance (₹1 crore per MW).",
    "staticGk": "MNRE Minister: Pralhad Joshi | Current installed floating solar capacity in India is ~700 MW.",
    "id": "note-sec10-194",
    "bullets": [
      "Storage & Generation Cap: 5,000 MW floating solar capacity with 2-hour minimum battery storage (10,000 MWh storage capacity).",
      "Financial Incentive: Central Financial Assistance of ₹1 crore per MW post-commissioning plus ₹50 lakh per project for feasibility studies.",
      "National Potential: National Institute of Solar Energy (NISE) estimates floating solar potential at 102.18 GWp across reservoirs."
    ],
    "secId": "sec10",
    "date": "2026-08-05"
  },
  {
    "title": "Cabinet Extends PM-KISAN Scheme for 5 Years (FY27 to FY31) with ₹3,15,614 Crore Outlay",
    "interviewQ": null,
    "hook": "Reaffirms DBT income support of ₹6,000 annually to eligible landholding farmer families.",
    "tier": "Tier A",
    "trap": "PM-KISAN 5-year extension outlay (₹3.15 lakh crore) vs total disbursed since inception (₹4.5 lakh crore).",
    "staticGk": "PM-KISAN provides ₹6,000 p.a. in 3 equal instalments of ₹2,000 | Ministry of Agriculture.",
    "id": "note-sec10-195",
    "bullets": [
      "5-Year Extension: Total financial outlay of ₹3,15,614 crore (over ₹3.15 lakh crore) through FY31.",
      "Disbursement Track Record: Over ₹4.5 lakh crore disbursed since Feb 2019 inception; 1 out of 4 beneficiaries is a woman farmer."
    ],
    "secId": "sec10",
    "date": "2026-08-06"
  },
  {
    "title": "BIMCO-ICS Seafarer Report 2026: India Emerges as World's 2nd-Largest Supplier of Seafarers",
    "interviewQ": null,
    "hook": "Contributes 3,11,936 maritime professionals to global shipping, capturing 12.16% global workforce share.",
    "tier": "Tier A",
    "trap": "India's global seafaring rank (2nd globally) vs global officer workforce share (13.41%).",
    "staticGk": "Report published by BIMCO & International Chamber of Shipping (ICS) | Ports Minister: Sarbananda Sonowal.",
    "id": "note-sec7-196",
    "bullets": [
      "Global Ranking: India rose to 2nd globally (behind Philippines, ahead of China and Russia).",
      "Officer Share: 140,718 Indian maritime officers account for 13.41% of world's officer workforce.",
      "Workforce Growth: Share grew from 5.2% in 2015 to 12.16% in 2026 under 'Mission 20%' target."
    ],
    "secId": "sec7",
    "date": "2026-08-07",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "BIMCO-ICS Seafarer Report 2026: India Emerges as World's 2nd-Largest Supplier of Seafarers",
          "Global Ranking: India rose to 2nd globally (behind Philippines, ahead of China and Russia).",
          "Report published by BIMCO & International Chamber of Shipping (ICS) | Ports Minister: Sarbananda Sonowal."
        ]
      ]
    }
  },
  {
    "title": "Roshni Nadar Tops 2026 Candere Hurun India Women Leaders List (Wealth Multipliers)",
    "interviewQ": null,
    "hook": "Recognises 117 outstanding women leaders; Priya Nair leads Professional CEOs category.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Published by Candere by Kalyan Jewellers & Hurun India | Spans 12 categories.",
    "id": "note-sec7-197",
    "bullets": [
      "Top Leaders: Roshni Nadar Malhotra (HCLTech, net worth ₹2,84,120 cr); Priya Nair (HUL CEO, company value ₹5,06,600 cr).",
      "Demographics: Oldest honouree Rajni Bector (86 yrs); youngest Sheetal Devi (19 yrs); 84% self-made leaders."
    ],
    "secId": "sec7",
    "date": "2026-08-01",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Roshni Nadar Tops 2026 Candere Hurun India Women Leaders List (Wealth Multipliers)",
          "Top Leaders: Roshni Nadar Malhotra (HCLTech, net worth ₹2,84,120 cr); Priya Nair (HUL CEO, company value ₹5,06,600 cr).",
          "Published by Candere by Kalyan Jewellers & Hurun India | Spans 12 categories."
        ]
      ]
    }
  },
  {
    "title": "ADB Approves  Million Loan for PM Surya Ghar: Muft Bijli Yojana (PMSGMBY)",
    "interviewQ": null,
    "hook": "Accelerates Subprogram 2 for rooftop solar installations across 10 million low & middle-income households.",
    "tier": "Tier A",
    "trap": "ADB PMSGMBY loan ( million) vs World Bank PMSGMBY loan ( million).",
    "staticGk": "PMSGMBY launched Feb 13, 2024 by PM Modi | ADB HQ: Manila, Philippines.",
    "id": "note-sec1-198",
    "bullets": [
      "Multilateral Funding: ADB  loan adds to  package previously approved by World Bank.",
      "Subsidy Structure: PMSGMBY (₹75,021 cr outlay) provides ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW solar systems."
    ],
    "secId": "sec1",
    "date": "2026-08-02"
  },
  {
    "title": "REC & PFC Sign ₹26,850 Crore Loan Agreement for 2,400 MW Meja Thermal Power Project",
    "interviewQ": null,
    "hook": "Finances 3 Ultra-Super Critical units of 800 MW each at Meja, Uttar Pradesh.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "REC Chairman & MD: Jitendra Srivastava | PFC CMD: Parminder Chopra.",
    "id": "note-sec1-199",
    "bullets": [
      "Financing Structure: REC and PFC equal 50:50 debt funding of ₹26,850 crore for MUNPL (50:50 JV between NTPC and UPRVUNL).",
      "Project Completion Cost: Estimated at ₹38,357.81 crore equipped with Air Cooled Condenser (ACC) system."
    ],
    "secId": "sec1",
    "date": "2026-08-03"
  },
  {
    "title": "Parliament Passes Prevention of Insults to National Honour (Amendment) Bill 2026",
    "interviewQ": null,
    "hook": "Extends statutory protection under 1971 Act to National Song 'Vande Mataram'.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "Vande Mataram composed by Bankim Chandra Chattopadhyay in 1875 (first published 1882 in Anandamath) | MoS Home: Nityanand Rai.",
    "id": "note-sec4-200",
    "bullets": [
      "Criminal Offence: Intentional insult, prevention, or disruption of Vande Mataram rendition carries up to 3 years imprisonment or fine.",
      "Repeat Conviction: Mandatory minimum 1-year jail term.",
      "Singing Clarification: Bill criminalises deliberate insult/obstruction, NOT the choice not to sing."
    ],
    "secId": "sec4",
    "date": "2026-08-04",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Parliament Passes Prevention of Insults to National Honour (Amendment) Bill 2026",
          "Criminal Offence: Intentional insult, prevention, or disruption of Vande Mataram rendition carries up to 3 years imprisonment or fine.",
          "Vande Mataram composed by Bankim Chandra Chattopadhyay in 1875 (first published 1882 in Anandamath) | MoS Home: Nityanand Rai."
        ]
      ]
    }
  },
  {
    "title": "Assam Passes Land & Revenue Regulation Bill 2026 Creating 5km Heritage Protected Belts",
    "interviewQ": null,
    "hook": "Restricts land transactions within 5 km radius of 250+ year old religious institutions to original inhabitants.",
    "tier": "Tier A",
    "trap": "Protected heritage radius (5 km) vs documented residence threshold (75 years / 3 generations).",
    "staticGk": "Assam CM: Himanta Biswa Sarma | Amends Assam Land and Revenue Regulation 1886.",
    "id": "note-sec4-201",
    "bullets": [
      "Eligibility Criteria: Land sales/purchases within 5-km radius restricted exclusively to SCs, STs, and 'original inhabitants' (75 years documented residence).",
      "Original Inhabitant Definition: Continuous family residence in protected belt for 3 generations as of January 1, 2006 (25 yrs per generation)."
    ],
    "secId": "sec4",
    "date": "2026-08-05"
  },
  {
    "title": "President Assents to Public Examinations (Prevention of Unfair Means) Amendment Bill 2026",
    "interviewQ": null,
    "hook": "Mandates fast-track courts and 3-month trial conclusion for exam paper leak cases.",
    "tier": "Tier A",
    "trap": "Individual paper leak penalty (5–10 yrs, ₹50L fine) vs organised crime penalty (min 7 yrs, ₹10 crore fine).",
    "staticGk": "Builds on Public Examinations Act 2024 covering NTA, UPSC, SSC, and RRB exams | MoS Personnel: Jitendra Singh.",
    "id": "note-sec4-202",
    "bullets": [
      "Trial Timelines: Paper leak investigations must complete within 2 months; fast-track trials must conclude within 3 months of chargesheet.",
      "Penalties: Paper leak individuals face 5 to 10 years imprisonment & ₹50 lakh fine; organised syndicates face 7 to 10 years jail & ₹10 crore fine."
    ],
    "secId": "sec4",
    "date": "2026-08-06"
  },
  {
    "title": "C-DOT and FSID Sign Agreement to Establish 5th Centre of Excellence at IISc Bengaluru",
    "interviewQ": null,
    "hook": null,
    "tier": "Tier B+",
    "trap": null,
    "staticGk": "C-DOT CEO: Dr. Rajkumar Upadhyay | FSID Director: Prof. B. Gurumoorthy.",
    "id": "note-sec5-203",
    "bullets": [
      "5th C-DOT CoE in India focused on 5G Advanced, 6G, quantum communications, and AI-native networks.",
      "Earlier C-DOT CoEs established at IIT Kanpur, IIT Gandhinagar, IIT Roorkee, and IIT Hyderabad."
    ],
    "secId": "sec5",
    "date": "2026-08-07",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "C-DOT and FSID Sign Agreement to Establish 5th Centre of Excellence at IISc Bengaluru",
          "Official Appointment",
          "5th C-DOT CoE in India focused on 5G Advanced, 6G, quantum communications, and AI-native networks."
        ]
      ]
    }
  },
  {
    "title": "DoT and Madhya Pradesh Sign MoU for India's 1st Telecom Manufacturing Zone in Gwalior",
    "interviewQ": null,
    "hook": "350-acre plug-and-play cluster supported by ₹493 crore Central infrastructure funding.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "MP CM: Mohan Yadav | MP Govt provided 170 acres land free of cost.",
    "id": "note-sec5-204",
    "bullets": [
      "SPV Ownership: 51% MP Govt, 49% Department of Telecommunications (MPIDC master developer).",
      "Central Funding: ₹493 crore 100% central funding for Phase-I testing labs (5G core, satellite comms, optical fibre)."
    ],
    "secId": "sec5",
    "date": "2026-08-01",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "DoT and Madhya Pradesh Sign MoU for India's 1st Telecom Manufacturing Zone in Gwalior",
          "Official Appointment",
          "SPV Ownership: 51% MP Govt, 49% Department of Telecommunications (MPIDC master developer)."
        ]
      ]
    }
  },
  {
    "title": "Cotton Corporation of India Launches 'Kapas Darshan' Bulletin & ₹5,659 Cr Kapas Kanti Mission",
    "interviewQ": null,
    "hook": "Transfers ₹41,530 crore directly to cotton farmers under record MSP procurement operations.",
    "tier": "Tier A",
    "trap": null,
    "staticGk": "CCI CMD: Lalit Kumar Gupta | Ministry of Textiles | MSP increased by ~7% for 2026-27.",
    "id": "note-sec5-205",
    "bullets": [
      "MSP Procurement: CCI procured 522 lakh quintals of seed cotton (kapas) via 24 lakh transactions, transferring ₹41,530 crore directly to bank accounts.",
      "Kapas Kanti Mission: Cotton Productivity Mission approved with ₹5,659 crore outlay over 5 years."
    ],
    "secId": "sec5",
    "date": "2026-08-02",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Cotton Corporation of India Launches 'Kapas Darshan' Bulletin & ₹5,659 Cr Kapas Kanti Mission",
          "Official Appointment",
          "MSP Procurement: CCI procured 522 lakh quintals of seed cotton (kapas) via 24 lakh transactions, transferring ₹41,530 crore directly to bank accounts."
        ]
      ]
    }
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-01",
    "bullets": [
      "Funding Agency: Asian Development Bank (ADB) approved .89 million loan (in yen equivalent).",
      "Implementation Scope: Upgrades infrastructure and learning facilities for 500 integrated public schools in rural and semi-urban districts."
    ],
    "title": "ADB Approves .89 Million Loan for Karnataka Public School Infrastructure",
    "staticGk": "ADB HQ: Manila, Philippines | President: Masato Kanda | Karnataka CM: Siddaramaiah / D.K. Shivakumar.",
    "tier": "Tier A",
    "hook": "Strengthens public education system by establishing 500 integrated public schools across Karnataka.",
    "trap": null,
    "id": "note-sec1-206"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-02",
    "bullets": [
      "Consortium Partners: Lightstorm, Microsoft, Singtel, and Tata Communications.",
      "Landing Points in India: Machilipatnam (Andhra Pradesh) and South Chennai (Tamil Nadu).",
      "System Suppliers: NEC Corporation appointed system supplier; ASEAN Cableship Pte Ltd (ACPL) marine partner."
    ],
    "title": "Microsoft, Lightstorm, Singtel, & Tata Comms Partner to Build 'I-2SEA' Undersea Cable",
    "staticGk": "Singtel HQ: Singapore | Tata Communications HQ: Mumbai | NEC Corporation HQ: Tokyo, Japan.",
    "tier": "Tier A",
    "hook": "Links India with Malaysia and Singapore to expand regional AI and cloud data centre connectivity.",
    "trap": "Landing points (Machilipatnam & Chennai) vs international hubs (Kuala Lumpur & Singapore).",
    "id": "note-sec5-207",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Microsoft, Lightstorm, Singtel, & Tata Comms Partner to Build 'I-2SEA' Undersea Cable",
          "Official Appointment",
          "Consortium Partners: Lightstorm, Microsoft, Singtel, and Tata Communications."
        ]
      ]
    }
  },
  {
    "secId": "sec1",
    "interviewQ": "\"Why did the government introduce the 'principal employer' concept in EPF Scheme 2026?\"\n💡 **Model Answer: It prevents principal contractors from evading social security contributions for outsourced contract workers by shifting legal compliance onto lead employers.**",
    "date": "2026-07-03",
    "bullets": [
      "Contract Worker Norms: Introduces 'principal employer' concept requiring mandatory EPF contribution for contract workers.",
      "Contribution Timelines: Employer must deposit employee and employer contributions within 15 days of month-end.",
      "Streamlined Withdrawals: Withdrawal categories consolidated from 13 to 3 (Essential Needs, Housing, Special Circumstances).",
      "Mandatory Balance & Unemployment: 25% minimum balance required; 75% withdrawal permitted after 12 months membership; 100% full withdrawal permitted after 1 year of unemployment.",
      "Contribution Rates: 12% standard contribution (10% for notified units); wage ceiling fixed at ₹15,000."
    ],
    "title": "Central Government Notifies Employees' Provident Fund Scheme 2026 (Replaces 1952 Rules)",
    "staticGk": "EPFO works under Ministry of Labour & Employment | Minister: Mansukh Mandaviya.",
    "tier": "Tier A",
    "hook": "Introduces 'principal employer' liability for contract workers and streamlines withdrawal rules into 3 categories.",
    "trap": "3 withdrawal categories (down from 13) vs 25% mandatory minimum balance requirement.",
    "id": "note-sec1-208"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-04",
    "bullets": [
      "Settlement Window: EPFO mandated to settle PF withdrawal claims within 3 working days.",
      "Penal Interest Penalty: Imposes 12% penal interest per annum on officials for claim delays exceeding 20 days.",
      "Pension & Insurance Claims: Pension and EDLI insurance claims must be processed within 20 days.",
      "Full Corpus Withdrawal Age: Lowers the age for full PF corpus withdrawal to 55 years (international workers 58 years)."
    ],
    "title": "New EPFO Rules Mandate 3-Day Settlement Window with 12% Penal Interest on Delays",
    "staticGk": "EPFO established in 1952 under EPF & MP Act 1952 | HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Imposes strict 3-day turnaround time for provident fund withdrawal claims to eliminate administrative delays.",
    "trap": "3-day PF settlement window vs 20-day penal interest threshold.",
    "id": "note-sec1-209"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-05",
    "bullets": [
      "Public Provident Fund (PPF): 7.10% annual interest (Min ₹500, Max ₹1.5 Lakh p.a.; loans 3rd–6th FY; withdrawal from 7th FY).",
      "Sukanya Samriddhi Yojana (SSY): 8.20% annual interest (Min ₹250, Max ₹1.5 Lakh p.a.; open till age 10; matures after 21 years)."
    ],
    "title": "Small Savings Scheme Interest Rates Unchanged for July–September 2026 Quarter",
    "staticGk": "Small Savings Rates reviewed quarterly by Ministry of Finance.",
    "tier": "Tier A",
    "hook": "Finance Ministry retains PPF interest rate at 7.10% and Sukanya Samriddhi Yojana at 8.20%.",
    "trap": "PPF interest rate (7.10%) vs SSY interest rate (8.20%).",
    "id": "note-sec1-210"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-06",
    "bullets": [
      "Ring-Main Solution: Chennai becomes 1st Indian city to implement a ring-main water supply architecture.",
      "Project Goal: Modernises municipal water supply, sewage treatment, and flood resilience in Chennai."
    ],
    "title": "ADB Approves  Million Loan for Chennai Water Supply & Sanitation Infrastructure",
    "staticGk": "Tamil Nadu CM: M. K. Stalin | Capital: Chennai.",
    "tier": "Tier A",
    "hook": "Finances India's 1st urban ring-main solution for resilient water distribution in Chennai.",
    "trap": null,
    "id": "note-sec1-211"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-07",
    "bullets": [
      "Unemployment Rate: Average unemployment across 46 million-plus cities stood at 6.8% (Prayagraj & Patna >20%; Ahmedabad & Kolkata <2.5%).",
      "Regular vs Casual Jobs: Regular wage/salary jobs accounted for 58.5% in million-plus cities (vs 47.6% urban India); casual labor stood at 6.3% (vs 12% urban India).",
      "Female Participation: Female regular employment reached 65.1% in million-plus cities, surpassing male counterparts (56.4%).",
      "Earnings Comparison: Self-employed earned ₹30,858/month (vs ₹23,013 urban India); regular employees ₹28,808 (vs ₹26,258); casual labour ₹624/day (vs ₹550)."
    ],
    "title": "NSO Report: Regular Salary Employment Higher in Million-Plus Cities (58.5% vs 47.6% Urban India)",
    "staticGk": "National Statistics Office (NSO) works under MoSPI | Minister: Rao Inderjit Singh.",
    "tier": "Tier A",
    "hook": "Highlights urban employment structure across 46 million-plus population cities under PLFS 2025 survey.",
    "trap": "Female regular job rate in million-plus cities (65.1%) vs male rate (56.4%).",
    "id": "note-sec1-212"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-08",
    "bullets": [
      "Divestment Structure: Base 2.52% stake plus 2.52% green-shoe option at ₹1,400 per share floor price.",
      "Government Stake: Union Government holds 67.91% equity stake in Cochin Shipyard Ltd (CSL).",
      "Disinvestment Target: FY27 budget target set at ₹80,000 crore for PSU disinvestment and asset monetisation."
    ],
    "title": "Govt Disinvests 2.52% Base Stake in Cochin Shipyard via OFS at ₹1,400 Floor Price",
    "staticGk": "Cochin Shipyard Ltd HQ: Kochi, Kerala | Greenshoe Option: Post-listing stabilisation mechanism (up to 15% extra shares).",
    "tier": "Tier A",
    "hook": "Unlocks PSU equity via Offer for Sale (OFS) with an additional 2.52% green-shoe oversubscription option.",
    "trap": "Base OFS stake (2.52%) vs green-shoe option (2.52%) vs maximum greenshoe limit (15%).",
    "id": "note-sec1-213"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-09",
    "bullets": [
      "India Category: India remains a Lower-Middle-Income Economy (,176 – ,635 GNI per capita).",
      "Category Upgrades: Sri Lanka, Vietnam, Philippines, Jordan, Micronesia moved to Upper-Middle-Income (,636–,375); Togo moved to Lower-Middle-Income.",
      "Income Thresholds: Low-income (≤,175), Lower-middle (,176–,635), Upper-middle (,636–,375), High-income (>,375)."
    ],
    "title": "World Bank Income Classification 2026: India Retains Lower-Middle-Income Status",
    "staticGk": "World Bank HQ: Washington D.C., US | President: Ajay Banga.",
    "tier": "Tier A",
    "hook": "Classifies 218 global economies using Atlas method GNI per capita thresholds.",
    "trap": "India classification (Lower-Middle Income) vs Sri Lanka/Vietnam (Upper-Middle Income).",
    "id": "note-sec1-214"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-10",
    "bullets": [
      "Loan Quantum: JPY 80 billion green loan facility signed with JBIC.",
      "Project Purpose: Integrates renewable power from Khavda (Gujarat) to Nagpur (Maharashtra) via HVDC grid."
    ],
    "title": "POWERGRID Secures JPY 80 Billion Green Loan from Japan Bank for International Cooperation (JBIC)",
    "staticGk": "POWERGRID Maharatna CPSE HQ: Gurugram, Haryana | JBIC HQ: Tokyo, Japan.",
    "tier": "Tier A",
    "hook": "Finances Khavda-Nagpur high-voltage direct current (HVDC) transmission infrastructure in India.",
    "trap": null,
    "id": "note-sec1-215"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-11",
    "bullets": [
      "India Growth Forecasts: 6.4% in FY27 and 6.7% in FY28 under World Economic Outlook update.",
      "Global Growth Outlook: World growth projected to moderate to 3.0% in 2026 before recovering to 3.4% in 2027."
    ],
    "title": "IMF World Economic Outlook: India Projected to Grow at 6.4% in FY27 and 6.7% in FY28",
    "staticGk": "IMF Chief Economist: Silvana Tenreyro | Managing Director: Kristalina Georgieva | HQ: Washington D.C.",
    "tier": "Tier A",
    "hook": "Reaffirms India's position as the world's fastest-growing major economy.",
    "trap": "India FY27 GDP forecast (6.4%) vs FY28 GDP forecast (6.7%).",
    "id": "note-sec1-216"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-12",
    "bullets": [
      "GDP Revision: India FY27 GDP growth revised to 6.6% (from earlier 6.9%) due to Middle East energy risks.",
      "Inflation Forecast: Inflation forecast raised to 5.2% (from 4.5% projected in April)."
    ],
    "title": "ADB Trims India's FY27 Growth Forecast to 6.6% Amid Energy Price Concerns",
    "staticGk": "ADB Asian Development Outlook published biannually | ADB HQ: Manila.",
    "tier": "Tier A",
    "hook": "Asian Development Outlook (ADO) raises India inflation forecast sharply to 5.2%.",
    "trap": "ADB FY27 GDP forecast (6.6%) vs IMF FY27 GDP forecast (6.4%).",
    "id": "note-sec1-217"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-13",
    "bullets": [
      "Database Migration: Unified CITES 2.01 platform consolidates 340 million accounts across 120 databases.",
      "Auto-Settlement Threshold: Auto-settlement limit for KYC-compliant advance claims raised from ₹1 lakh to ₹5 lakh.",
      "PF Interest Crediting: Enables crediting of 2025-26 PF interest by July 15 ahead of traditional schedule."
    ],
    "title": "EPFO Rolls Out Centralised CITES 2.01 Platform for 340 Million Member Accounts",
    "staticGk": "Central Board of Trustees (CBT) approved CITES platform | EPFO HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Migrates 120 decentralised databases into a single national system for automated claim processing.",
    "trap": "Auto-settlement limit (₹5 lakh, up from ₹1 lakh) vs 3-day settlement mandate.",
    "id": "note-sec1-218"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-14",
    "bullets": [
      "Duty Exemptions: Customs duty exempted on automotive/medical display assembly parts, mobile wireless charging modules, and lithium-ion cell machinery till March 31, 2029.",
      "Previous Duty Rates: Duties previously ranged from 7.5% to 15%."
    ],
    "title": "Customs Duty Exempted on Lithium-Ion Battery Machinery & Charger Parts till March 2029",
    "staticGk": "CBIC works under Department of Revenue, Ministry of Finance.",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec1-219"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-15",
    "bullets": [
      "Funding Components:  IBRD loan,  Clean Technology Fund concessional loan,  Livable Planet Fund grant.",
      "Scheme Outlay: PM Surya Ghar Yojana approved in Feb 2024 with ₹75,021 crore outlay for 10 million households.",
      "National RE Target: India committed to 60% non-fossil electricity capacity by 2035 and net-zero emissions by 2070."
    ],
    "title": "World Bank Mobilises .2 Billion Package for PM Surya Ghar: Muft Bijli Yojana",
    "staticGk": "IBRD is the primary lending arm of the World Bank Group | HQ: Washington D.C.",
    "tier": "Tier A",
    "hook": "Includes  million IBRD loan and  million Clean Technology Fund loan for rooftop solar.",
    "trap": "IBRD loan ( million) vs ADB loan ( million).",
    "id": "note-sec1-220"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-16",
    "bullets": [
      "Financial Grant: ₹4 crore financial assistance released in 3 installments (30:50:20 ratio).",
      "ULB Incentive: Urban local bodies notifying street vending plans receive ₹25 lakh bonus incentive.",
      "Partner Agencies: Coordinated by MoHUA, Ministry of Tourism, and FSSAI."
    ],
    "title": "Lakhanpur (J&K) Selected as First Town for PM SVANidhi Street Food Hub",
    "staticGk": "PM SVANidhi launched June 1, 2020 by MoHUA | FSSAI HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Establishes modern street food hub under Ministry of Housing and Urban Affairs initiative.",
    "trap": "PM SVANidhi street food hub grant (₹4 crore) vs ULB incentive (₹25 lakh).",
    "id": "note-sec1-221"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-17",
    "bullets": [
      "Global Rankings: India became the world's 2nd-largest contributor to global savings in PPP terms (10.3% share).",
      "Top Country: China ranks 1st globally with a 31.9% share of global savings.",
      "Historical Growth: India's share rose from 3.3% in 1992 to 10.3% in 2025."
    ],
    "title": "India Overtakes US in PPP-Based Global Savings (Trails Only China)",
    "staticGk": "EAC-PM Chairman: Bibek Debroy | Headquarters: New Delhi.",
    "tier": "Tier A",
    "hook": "EAC-PM working paper reveals India's global savings share rose to 10.3% in 2025.",
    "trap": "India global savings share (10.3%, 2nd) vs China share (31.9%, 1st).",
    "id": "note-sec1-222"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-18",
    "bullets": [
      "Global Outlook: Growth slows to 2.5% in 2026 before picking up to 2.8% in 2027.",
      "K-Shaped Recovery: Tech-integrated sectors accelerate while traditional labor-intensive sectors decline."
    ],
    "title": "Moody's Analytics: Global Growth to Slow to 2.5% in 2026 Amid K-Shaped AI Divide",
    "staticGk": "Moody's Corporation HQ: New York, US.",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec1-223"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-19",
    "bullets": [
      "CII Index Value: Notified at 384 for FY 2026-27 (up from 376 in FY 2025-26).",
      "Application Date: Applies from April 1, 2026 for indexation benefit calculations."
    ],
    "title": "CBDT Notifies Cost Inflation Index (CII) at 384 for FY 2026-27",
    "staticGk": "CBDT Chairman: Ravi Agrawal | Works under Department of Revenue.",
    "tier": "Tier A",
    "hook": "Increases Cost Inflation Index by 2.3% for long-term capital gains tax calculations.",
    "trap": "CII FY27 value (384) vs CII FY26 value (376).",
    "id": "note-sec1-224"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-20",
    "bullets": [
      "State Rankings: Gujarat ranks 1st (749,839 installations); Uttar Pradesh 2nd; Maharashtra 3rd.",
      "PM Surya Ghar Impact: Accelerated rooftop installations across UP households."
    ],
    "title": "Uttar Pradesh Overtakes Maharashtra as India's No. 2 in Rooftop Solar Installations",
    "staticGk": "Gujarat CM: Bhupendra Patel | UP CM: Yogi Adityanath.",
    "tier": "Tier A",
    "hook": "UP secures 2nd spot nationally under PM Surya Ghar Muft Bijli Yojana behind Gujarat.",
    "trap": "1st rank rooftop solar (Gujarat) vs 2nd rank (Uttar Pradesh).",
    "id": "note-sec1-225"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-21",
    "bullets": [
      "Investment Pipeline: 20 infrastructure projects with  billion (₹20,000 crore) investment potential.",
      "Partner Entity: International Finance Corporation (IFC), private-sector arm of World Bank Group."
    ],
    "title": "Odisha Signs ₹20,000 Crore TASA Agreement with World Bank's IFC",
    "staticGk": "Odisha CM: Mohan Charan Majhi | IFC HQ: Washington D.C.",
    "tier": "Tier A",
    "hook": "Develops pipeline of 20 infrastructure projects under Transaction Advisory Services Agreement.",
    "trap": null,
    "id": "note-sec1-226"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-22",
    "bullets": [
      "Issuer Protection: CRAs must share key rating information with issuers before publishing ratings.",
      "Registered CRAs: CareEdge Global IFSC Ltd and S&P Global Ratings Singapore registered in GIFT City."
    ],
    "title": "IFSCA Revises GIFT City Credit Rating Agency (CRA) Rules",
    "staticGk": "IFSCA Chairman: K. Rajaraman | HQ: GIFT City, Gandhinagar, Gujarat.",
    "tier": "Tier A",
    "hook": "Mandates pre-rating sharing with issuers to correct factual errors before credit rating publication.",
    "trap": null,
    "id": "note-sec2-227"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-23",
    "bullets": [
      "Launch Date: Launched July 15, 2015 under Ministry of Skill Development and Entrepreneurship."
    ],
    "title": "Skill India Mission Completes 11 Years of Operation (Launched July 15, 2015)",
    "staticGk": "MSDE Minister: Jayant Chaudhary (MoS I/C).",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec2-228"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-24",
    "bullets": [
      "Coverage Milestone: 94 crore citizens covered under formal social security schemes.",
      "Labor Reform Context: 4 Labour Codes consolidated and replaced 29 central labor laws."
    ],
    "title": "ILO Report: India's Social Security Coverage Expands to 64% (Encompassing 94 Crore People)",
    "staticGk": "ILO Director-General: Gilbert F. Houngbo | HQ: Geneva, Switzerland.",
    "tier": "Tier A",
    "hook": "Expands social protection coverage from 19% in 2014 to 64% in 2026.",
    "trap": "Social security coverage 2014 (19%) vs 2026 (64%).",
    "id": "note-sec2-229"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-25",
    "bullets": [
      "CSR Initiative: Launched by Microsoft India and Foundation for Innovation and Technology Transfer (FITT), IIT Delhi.",
      "Focus: Grassroots AI talent development and startup incubation in Tier 2 and Tier 3 cities."
    ],
    "title": "Microsoft India & FITT IIT Delhi Launch UNNATI AI 2.0 for Tier 2/3 Cities",
    "staticGk": "IIT Delhi Director: Rangan Banerjee | Microsoft CEO: Satya Nadella.",
    "tier": "Tier A",
    "hook": "Democratizes AI access and nurtures deep-tech startups across non-metro hubs.",
    "trap": null,
    "id": "note-sec2-230"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-26",
    "bullets": [
      "Customs Duty Rationalisation: BCD structure simplified by eliminating 100%, 125%, and 150% peak rates, reducing applied rates to 8 bands.",
      "Export Target: Scale share from 1.8% to 10% by 2047."
    ],
    "title": "WTO Trade Policy Review: India Targets 10% Share of Global Merchandise Exports by 2047",
    "staticGk": "WTO Director-General: Ngozi Okonjo-Iweala | HQ: Geneva, Switzerland.",
    "tier": "Tier A",
    "hook": "Outlines strategy to expand global merchandise export share from 1.8% in 2024 to 10% by centenary.",
    "trap": "India merchandise export share 2024 (1.8%) vs 2047 target (10%).",
    "id": "note-sec2-231"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-27",
    "bullets": [
      "Eligibility Thresholds: Minimum 5 years fund management experience, Net worth ≥ ₹50 crore for past 5 years, Paid-up capital ≥ ₹25 crore.",
      "Regulatory Oversight: Applicant must be regulated by RBI, SEBI, or IRDAI."
    ],
    "title": "PFRDA Opens On-Tap Registration for Pension Fund Managers under NPS",
    "staticGk": "PFRDA Chairman: Deepak Mohanty | Established 2003 | HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Allows eligible asset managers to apply continuously for managing National Pension System funds.",
    "trap": "PFM net worth requirement (₹50 crore) vs paid-up capital requirement (₹25 crore).",
    "id": "note-sec2-232"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-28",
    "bullets": [
      "GPF Rate: 7.10% annual interest for July–September 2026 quarter (EPF subscribers earn 8.25%)."
    ],
    "title": "GPF Interest Rate Maintained at 7.1% for Q2 FY27; EPF Interest at 8.25%",
    "staticGk": "GPF applies strictly to eligible government employees.",
    "tier": "Tier B+",
    "hook": null,
    "trap": "GPF interest rate (7.10%) vs EPF interest rate (8.25%).",
    "id": "note-sec2-233"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-29",
    "bullets": [
      "Foreign Cap: Foreign ownership capped at 49.5% on a fully diluted basis.",
      "IOCC Advantage: Permits direct inventory ownership and sale on quick-commerce platform."
    ],
    "title": "Swiggy Board Caps Aggregate Foreign Ownership at 49.5% for IOCC Status",
    "staticGk": "DPIIT FDI policy governs IOCC compliance thresholds.",
    "tier": "Tier A",
    "hook": "Qualifies quick-commerce Instamart as an Indian-Owned and Controlled Company (IOCC).",
    "trap": "Swiggy foreign ownership cap (49.5%) vs standard retail FDI caps.",
    "id": "note-sec2-234"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-30",
    "bullets": [
      "Tax Exemption: Gifts from specified relatives 100% tax-free; non-relative gifts taxable if aggregate exceeds ₹50,000 in a FY.",
      "Immovable Property: NRIs/OCIs can receive residential/commercial property as gift; agricultural land, plantations, and farmhouses strictly restricted."
    ],
    "title": "Income Tax & FEMA Guidelines for NRI Gifts: Relative Gifts Tax-Free; Non-Relative Exemption ₹50,000",
    "staticGk": "Income Tax Act 2025 replaced Income Tax Act 1961.",
    "tier": "Tier A",
    "hook": "Clarifies tax-free gift rules under Income Tax Act 2025 and FEMA remittance limits.",
    "trap": "Tax-free non-relative gift threshold (₹50,000 p.a.) vs LRS gift limit (,000).",
    "id": "note-sec2-235"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-31",
    "bullets": [
      "State Rankings: Gujarat ranks 1st in total plantation area; Andhra Pradesh 2nd.",
      "MISHTI Scheme: Launched June 5, 2023 for 540 sq. km. mangrove restoration across 9 states and 4 UTs.",
      "National Cover: West Bengal holds 42.45% of national mangrove cover (Sundarbans)."
    ],
    "title": "Andhra Pradesh Ranks 2nd Nationally in MISHTI Mangrove Restoration",
    "staticGk": "Sundarbans is the world's largest contiguous mangrove forest (UNESCO World Heritage Site).",
    "tier": "Tier A",
    "hook": "Secures 2nd rank in mangrove plantation area under Shoreline Habitats initiative behind Gujarat.",
    "trap": "1st rank mangrove plantation (Gujarat) vs largest national mangrove cover share (West Bengal, 42.45%).",
    "id": "note-sec2-236"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-01",
    "bullets": [
      "Thermal Additions: 86,440 MW additional capacity needed by FY36 (63,545 MW under implementation).",
      "Nuclear Capacity Target: Government targets 100 GW nuclear power capacity by 2047."
    ],
    "title": "CEA National Generation Adequacy Plan: India Needs 86.4 GW Additional Thermal Power by FY36",
    "staticGk": "Central Electricity Authority (CEA) works under Ministry of Power | HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Estimates total coal and lignite thermal capacity requirement of 315,000 MW to meet 2035-36 demand.",
    "trap": "Additional thermal power needed (86.4 GW) vs 2047 nuclear target (100 GW).",
    "id": "note-sec2-237"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-02",
    "bullets": [
      "Individual Penalties: Paper leak jail term increased to 5-10 years (up from 3-5 yrs); max fine raised to ₹50 lakh.",
      "Organised Crime Penalties: Minimum jail term 7-10 years; minimum fine ₹1 crore to ₹10 crore.",
      "Service Provider Debarment: Debarment period for cheating service providers raised to 8 years (fine ₹1 cr to ₹5 cr)."
    ],
    "title": "Government Introduces Public Examinations (Prevention of Unfair Means) Amendment Bill 2026",
    "staticGk": "Public Examinations Act 2024 introduced India's 1st central anti-paper leak law.",
    "tier": "Tier A",
    "hook": "Raises paper leak prison sentences up to 10 years and minimum fines up to ₹10 crore for organised syndicates.",
    "trap": "Individual paper leak fine (up to ₹50 lakh) vs organised syndicate fine (min ₹1 crore to ₹10 crore).",
    "id": "note-sec2-238"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-03",
    "bullets": [
      "CARF Alignment: Aligns Indian crypto exchange reporting with OECD global framework.",
      "Reporting Scope: RCASPs must collect tax residency and TIN details for annual submission."
    ],
    "title": "CBDT Issues Crypto-Asset Reporting Framework (CARF) Compliance Rules",
    "staticGk": "OECD HQ: Paris, France.",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec2-239"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-04",
    "bullets": [
      "Super-Rich Taxpayers: 576 individuals reported income > ₹100 crore in AY 2025-26 (up 39% from 415).",
      "Gini Inequality Reduction: Household survey Gini coefficient fell to 0.237 for rural areas and 0.284 for urban areas."
    ],
    "title": "Income Tax Data: 576 Individuals Report Gross Income Above ₹100 Crore in AY 2025-26",
    "staticGk": "Gini Coefficient measures income/consumption inequality (0 = perfect equality, 1 = absolute inequality).",
    "tier": "Tier A",
    "hook": "High-income taxpayers rise 39% YoY as rural-urban Gini inequality index narrows.",
    "trap": "Rural Gini coefficient (0.237) vs Urban Gini coefficient (0.284).",
    "id": "note-sec2-240"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-05",
    "bullets": [
      "Savings Account Cash: Cash deposits ≥ ₹10 lakh in a FY.",
      "Current Account Cash: Cash deposits/withdrawals ≥ ₹50 lakh in a FY.",
      "Credit Cards: Cash payments ≥ ₹1 lakh or total payments ≥ ₹10 lakh in a FY.",
      "Investments & Property: FDs/Mutual Funds/Bonds ≥ ₹10 lakh; Immovable property purchase/sale > ₹30 lakh."
    ],
    "title": "CBDT Reporting Thresholds for High-Value SFT Financial Transactions",
    "staticGk": "Statement of Financial Transactions (SFT) filed under Section 285BA of Income Tax Act.",
    "tier": "Tier A",
    "hook": "Mandates bank and financial institution reporting for high-value cash deposits and credit card payments.",
    "trap": "Savings account cash SFT limit (₹10 lakh) vs Current account limit (₹50 lakh).",
    "id": "note-sec2-241"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-06",
    "bullets": [
      "Policy Relaxation: FDI restriction lifted for inventory-based e-commerce when selling domestically produced goods exclusively for export.",
      "Marketplace vs B2C: FDI remains barred in standard domestic B2C inventory e-commerce."
    ],
    "title": "India Permits FDI in Inventory-Based E-Commerce Model Exclusively for Exports",
    "staticGk": "DGFT works under Ministry of Commerce and Industry | Minister: Piyush Goyal.",
    "tier": "Tier A",
    "hook": "Allows 100% FDI in inventory-based e-commerce for exported domestic products via DGFT proposal.",
    "trap": "FDI in export inventory model (permitted) vs domestic B2C inventory model (prohibited).",
    "id": "note-sec1-242"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-07",
    "bullets": [
      "TReDS Mandate: Mandatory TReDS routing for CPSU MSME invoices.",
      "Facilitation Councils: States mandated to establish 3-5 member MSE Facilitation Councils with legal experts.",
      "Appeals Deposit: Buyers challenging MSE awards must deposit at least 50% of awarded amount if pending > 6 months."
    ],
    "title": "MSME Development Amendment Bill 2026 Mandates TReDS Invoice Routing for CPSUs",
    "staticGk": "TReDS (Trade Receivables Discounting System) regulated by RBI.",
    "tier": "Tier A",
    "hook": "Requires all Central PSUs to route MSME supplier invoices through TReDS platforms.",
    "trap": "TReDS appeal deposit requirement (min 50% of awarded amount) vs council members (3-5).",
    "id": "note-sec1-243"
  },
  {
    "secId": "sec1",
    "interviewQ": null,
    "date": "2026-07-08",
    "bullets": [
      "Export Breakdown: Merchandise exports .8 billion; Services exports .3 billion (Total .1B).",
      "Top FTA Destination: ASEAN countries emerged as highest merchandise export destination (.42B), followed by UAE (.36B)."
    ],
    "title": "India's Total Exports Reach Record .1 Billion in FY 2025-26",
    "staticGk": "ASEAN (10 member nations) HQ: Jakarta, Indonesia.",
    "tier": "Tier A",
    "hook": "Merchandise exports touch .8B and services exports reach .3B.",
    "trap": "Merchandise exports (.8B) vs Services exports (.3B).",
    "id": "note-sec1-244"
  },
  {
    "secId": "sec2",
    "interviewQ": "\"How does the RBI Integrated Ombudsman Scheme 2026 protect retail banking customers?\"\n💡 **Model Answer: It provides a single-window grievance mechanism with a 30-day RE resolution mandate and caps compensation at ₹30 lakh for financial loss plus ₹3 lakh for harassment.**",
    "date": "2026-07-09",
    "bullets": [
      "Complaint Escalation: 30-day RE response window; 90-day RBI Ombudsman escalation window.",
      "Compensation Caps: Up to ₹30 lakh for consequential financial losses; up to ₹3 lakh for harassment and time loss."
    ],
    "title": "RBI Revamped Integrated Ombudsman Scheme 2026 Takes Effect (Replaces 2021 Rules)",
    "staticGk": "RBI Integrated Ombudsman Scheme covers Banks, NBFCs, and System Participants.",
    "tier": "Tier A",
    "hook": "Increases compensation cap for consequential losses to ₹30 lakh plus ₹3 lakh for time loss.",
    "trap": "Consequential loss compensation cap (₹30 lakh) vs harassment/time loss cap (₹3 lakh).",
    "id": "note-sec2-245"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-10",
    "bullets": [
      "CUSPA Mechanism: Unpaid securities credited directly to client demat and auto-pledged to broker's CUSPA account.",
      "Broker Right: Broker permitted to liquidate unpaid securities if payment obligation is not fulfilled."
    ],
    "title": "SEBI Revises Rules for Unpaid Client Securities (CUSPA Account Auto-Pledge)",
    "staticGk": "SEBI HQ: Mumbai | Regulates stockbrokers under SEBI (Stock Brokers) Regulations.",
    "tier": "Tier A",
    "hook": "Mandates direct demat payout followed by auto-pledge in Client Unpaid Securities Pledgee Account.",
    "trap": null,
    "id": "note-sec2-246"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-11",
    "bullets": [
      "FRSB Coupon Rate: 8.05% per annum for July 1 to Dec 31, 2026 (payable Jan 1, 2027).",
      "Benchmark Formula: FRSB rate = NSC rate (7.70%) + 0.35% spread."
    ],
    "title": "RBI Retains Floating Rate Savings Bonds (FRSB 2020) Interest Rate at 8.05%",
    "staticGk": "FRSB bonds issued by RBI on behalf of Union Government (7-year tenure, taxable).",
    "tier": "Tier A",
    "hook": "Maintains 0.35% premium over National Savings Certificate (NSC) 7.7% benchmark.",
    "trap": "FRSB interest rate (8.05%) vs NSC benchmark rate (7.70%).",
    "id": "note-sec2-247"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-12",
    "bullets": [
      "Rupee Fee Structure: Category-I FPI registration fee fixed at ₹2.3 lakh (replaced ,500); ,000 fee replaced by ₹90,000.",
      "Custodian Monthly Fee: Custodian fee revised to ₹85,000/month (replaced ₹10 lakh annual fee).",
      "Intraday MF Borrowing: Mutual funds permitted intraday borrowing up to 20% of net assets for settlement liquidity."
    ],
    "title": "SEBI Amends FPI Regulations: Rupee-Denominated Fee Structure & Pre-IPO ESOPs",
    "staticGk": "Designated Depository Participants (DDPs) process FPI registrations in India.",
    "tier": "Tier A",
    "hook": "Replaces USD registration fees with INR structure (Category-I FPI fee ₹2.3 lakh).",
    "trap": "Category-I FPI registration fee (₹2.3 lakh) vs custodian monthly fee (₹85,000).",
    "id": "note-sec2-248"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-13",
    "bullets": [
      "Committee Name: ASCEND (Accelerated Scaling of Global Capital Ecosystem and NPS Development).",
      "Chairmanship: Chaired by Dinesh Khara, Chairman of NPS Trust."
    ],
    "title": "PFRDA Constitutes 'ASCEND' Committee to Attract Global Pension Capital",
    "staticGk": "National Pension System (NPS) regulated by PFRDA since 2003.",
    "tier": "Tier A",
    "hook": "Chaired by Dinesh Khara (NPS Trust Chairman) to scale global pension fund inflows under NPS.",
    "trap": null,
    "id": "note-sec2-249"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-14",
    "bullets": [
      "New GI Products: Nalanda Bawanbuti Saree (Bihar), Gaya Pattharkatti Stone Craft (Bihar), Kuchai Silk (Jharkhand), Ba Shilp & Bihu Pepa (Assam), Khajuraho Metal Craft (MP).",
      "NABARD Total: NABARD has supported 176 total products in obtaining GI tags."
    ],
    "title": "NABARD Facilitates GI Registration for 28 New Products (Total 176 Supported)",
    "staticGk": "NABARD established July 12, 1982 | Chairman: Shaji K. V.",
    "tier": "Tier A",
    "hook": "Expands GI tagging for indigenous craft and agri-products across Bihar, Assam, and MP.",
    "trap": "GI products in this round (28) vs total NABARD-supported GI products (176).",
    "id": "note-sec2-250"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-15",
    "bullets": [
      "Platform Connectivity: Terminal directly connected to Negotiated Dealing System-Order Matching (NDS-OM).",
      "Settlement Guarantee: T+1 trades guaranteed by Clearing Corporation of India Limited (CCIL)."
    ],
    "title": "Bloomberg Launches Electronic Trading Platform for Indian Government Bonds (IGBs)",
    "staticGk": "NDS-OM launched in 2005 by RBI | CCIL settles G-Sec and forex transactions.",
    "tier": "Tier A",
    "hook": "Connects FPIs directly to RBI's NDS-OM matching system for T+1 gilt settlement.",
    "trap": "NDS-OM settlement cycle (T+1) vs stock market equities (T+1).",
    "id": "note-sec2-251"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-16",
    "bullets": [
      "Cooling-Off Period: 2-year cooling-off period before former employees can represent clients before SEBI.",
      "Equity Bar: Staff barred from direct investment in equities, derivatives, and convertible instruments.",
      "Gift Threshold: Disclosure threshold for gifts raised from ₹10,000 to ₹50,000."
    ],
    "title": "SEBI Tightens Staff Conduct Rules: 2-Year Cooling-Off Period & Equity Investment Bar",
    "staticGk": "Amends SEBI (Employees' Service) Regulations 2026.",
    "tier": "Tier A",
    "hook": "Bars SEBI staff from direct equity trading and caps investment product exposure at 25%.",
    "trap": "Cooling-off period (2 years) vs gift disclosure threshold (₹50,000).",
    "id": "note-sec2-252"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-17",
    "bullets": [
      "Collaborative Initiative: Joint initiative of NABARD and National Skill Development Corporation (MSDE).",
      "Executing Agency: Executed by Institute for Industrial Development."
    ],
    "title": "NABARD Launches 'Gramodyam' Rural Youth Entrepreneurship Scheme with NSDC",
    "staticGk": "NSDC HQ: New Delhi | Works under Ministry of Skill Development.",
    "tier": "Tier A",
    "hook": "Unveils rural business development initiative on NABARD's 45th Foundation Day.",
    "trap": null,
    "id": "note-sec2-253"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-18",
    "bullets": [
      "Index Value: FI-Index rose 4.48% to 70.0 in March 2026 (up from 67.0 in March 2025).",
      "Parameter Weights: Access (35%), Usage (45%), Quality (20%) — published annually without a base year."
    ],
    "title": "RBI Financial Inclusion Index (FI-Index) Rises to 70.0 in March 2026",
    "staticGk": "FI-Index introduced in August 2021 by RBI.",
    "tier": "Tier A",
    "hook": "Measures 97 financial inclusion indicators across Access (35%), Usage (45%), and Quality (20%).",
    "trap": "Usage weightage (45%) vs Access weightage (35%) vs Quality weightage (20%).",
    "id": "note-sec2-254"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-19",
    "bullets": [
      "Implementation Date: Effective October 1, 2026 (unrealised income reversal required by Sept 30, 2027).",
      "Disposal Cap: Banks must dispose of SNFAs within maximum 7 years via SARFAESI Act 2002 public auction.",
      "Sale Restriction: Prohibits selling SNFA back to defaulting borrower or related parties."
    ],
    "title": "RBI Restricts Banks from Recognising Unrealised Interest as Income on Acquired SNFAs",
    "staticGk": "SNFA (Specified Non-Financial Asset) defined under Banking Regulation Act 1949.",
    "tier": "Tier A",
    "hook": "Mandates 7-year maximum disposal window for Specified Non-Financial Assets acquired under debt resolution.",
    "trap": "SNFA maximum disposal timeline (7 years) vs income reversal deadline (Sept 30, 2027).",
    "id": "note-sec2-255"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-20",
    "bullets": [
      "2-Phase Rollout: Unit-based SWPs/STPs by Jan 31, 2027; Amount-based by April 30, 2027.",
      "Nodal Facilitator: Depositories designated as nodal facilitators (operational framework by Oct 31, 2026)."
    ],
    "title": "SEBI Clears Standing Instructions for SWP and STP in Demat-Held Mutual Funds",
    "staticGk": "Depositories in India: NSDL and CDSL.",
    "tier": "Tier A",
    "hook": "Allows demat unit holders to execute automatic Systematic Withdrawal and Transfer Plans.",
    "trap": "Unit-based SWP deadline (Jan 31, 2027) vs Amount-based SWP deadline (April 30, 2027).",
    "id": "note-sec2-256"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-21",
    "bullets": [
      "PRIDE-Disha: Performance comparison tool utilizing 5,000 days NAV data and XIRR methodology.",
      "Pension Sahayak: AI-powered 22-language grievance portal (30-day intermediary resolution timeline)."
    ],
    "title": "PFRDA Launches 'PRIDE-Disha' Performance Tool & 'Pension Sahayak' AI Portal",
    "staticGk": "XIRR (Extended Internal Rate of Return) accounts for irregular cash inflows/outflows.",
    "tier": "Tier A",
    "hook": "Uses XIRR methodology to compare pension fund manager returns based on actual cash flows.",
    "trap": "Intermediary resolution timeline (30 days) vs NPS Trust escalation timeline (21 days).",
    "id": "note-sec2-257"
  },
  {
    "secId": "sec2",
    "interviewQ": null,
    "date": "2026-07-22",
    "bullets": [
      "One-Time Approval: One-time RBI clearance covers future acquisitions up to 10% voting rights/share capital.",
      "Qualifying Entities: SEBI-registered MFs, IRDAI-registered Insurers, PFRDA-registered Pension Funds."
    ],
    "title": "RBI One-Time Approval Proposal for MFs & Insurers to Acquire up to 10% Bank Shareholding",
    "staticGk": "Standard RBI major shareholding threshold in banks is 5%.",
    "tier": "Tier A",
    "hook": "Replaces repeated prior approval requirement for qualifying institutional investors acquiring >5% bank stakes.",
    "trap": "Standard approval threshold (5%) vs one-time clearance cap (10%).",
    "id": "note-sec2-258"
  },
  {
    "secId": "sec3",
    "interviewQ": null,
    "date": "2026-07-28",
    "bullets": [
      "Digital Journeys: 'Financial Fitness' score, 'Sustainability Journey', and 24x7 agentic AI assistant 'YONO Ji'.",
      "Platform Reach: Deployed across YONO Business web and mobile applications."
    ],
    "title": "SBI Unveils Suite of AI Journeys: Financial Fitness, Sustainability, & 'YONO Ji'",
    "staticGk": "SBI Chairman: CS Setty | HQ: Mumbai, Maharashtra.",
    "tier": "Tier A",
    "hook": "Integrates agentic AI virtual assistant 'YONO Ji' across YONO Business web and mobile platforms.",
    "trap": null,
    "id": "note-sec3-259"
  },
  {
    "secId": "sec3",
    "interviewQ": null,
    "date": "2026-07-29",
    "bullets": [
      "Deposit Threshold: Total deposits crossed ₹2,000 crore mark with 0% net NPAs.",
      "UCF Classification: Tier-I (<₹100 cr), Tier-II (₹100 cr – ₹1,000 cr), Tier-III (₹1,000 cr – ₹10,000 cr)."
    ],
    "title": "Kakinada Cooperative Town Bank Attains Tier-III UCB Status (Deposits Surpass ₹2,000 Crore)",
    "staticGk": "Kakinada Cooperative Town Bank located in Andhra Pradesh.",
    "tier": "Tier A",
    "hook": "Secures Tier-III UCB status under RBI norms with zero net Non-Performing Assets (NPAs).",
    "trap": "Tier-II deposit limit (up to ₹1,000 crore) vs Tier-III deposit threshold (₹1,000 cr – ₹10,000 cr).",
    "id": "note-sec3-260"
  },
  {
    "secId": "sec3",
    "interviewQ": null,
    "date": "2026-07-30",
    "bullets": [
      "Biometric Authentication: Replaces SMS-based OTPs with fingerprint, facial recognition, or device PIN.",
      "Launch Partner: Went live in partnership with IDFC FIRST Bank."
    ],
    "title": "Visa Launches Biometric 'Visa Payment Passkey' in India via IDFC FIRST Bank",
    "staticGk": "IDFC FIRST Bank MD & CEO: V. Vaidyanathan | HQ: Mumbai.",
    "tier": "Tier A",
    "hook": "Replaces SMS OTPs with device fingerprint, facial recognition, and PIN biometric authentication.",
    "trap": null,
    "id": "note-sec3-261"
  },
  {
    "secId": "sec3",
    "interviewQ": null,
    "date": "2026-07-31",
    "bullets": [
      "Penalty Breakdown: Private banks collected ₹4,948.71 crore (HDFC Bank top ₹1,798.14 cr; Axis Bank ₹1,081.33 cr); PSBs collected ₹2,137.92 crore (SBI top ₹477.27 cr).",
      "PSB Exemption: 10 out of 12 PSBs have completely discontinued MAB penal charges.",
      "BSBDA Accounts: Basic Savings Bank Deposit Accounts (PMJDY) exempt from minimum balance requirements."
    ],
    "title": "Banks Collected ₹7,086 Crore in Minimum Average Balance Penalties in FY26",
    "staticGk": "BSBDA (Basic Savings Bank Deposit Account) rules mandate zero minimum balance.",
    "tier": "Tier A",
    "hook": "Private sector banks accounted for 70% of total minimum balance penalties collected.",
    "trap": "Private bank penalty share (70% / ₹4,948.71 cr) vs PSB share (₹2,137.92 cr).",
    "id": "note-sec3-262"
  },
  {
    "secId": "sec3",
    "interviewQ": null,
    "date": "2026-07-01",
    "bullets": [
      "Issuance Details: ₹4,691 crore raised via Basel III Additional Tier 1 (AT1) perpetual bonds at 7.75% coupon.",
      "Loss Absorbency: AT1 bonds feature loss absorbency (can be written off or converted to equity during stress)."
    ],
    "title": "SBI Issues ₹4,691 Crore Basel III-Compliant AT-1 Perpetual Bonds",
    "staticGk": "Basel III norms mandate minimum total capital ratio of 9% plus capital conservation buffer.",
    "tier": "Tier A",
    "hook": "Raises core Tier-I regulatory capital with a coupon rate of 7.75% and 5-year call option.",
    "trap": "AT1 bond call option window (after 5 years) vs perpetual maturity.",
    "id": "note-sec3-263"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-05",
    "bullets": [
      "Regulatory Objective: Monitors dark patterns and forced add-on sales on digital insurance apps.",
      "Implementation Alignment: Follows RBI's anti-misselling framework effective January 1, 2027."
    ],
    "title": "IRDAI Partners with IPAI to Eliminate Dark Patterns in Insurance Sector",
    "staticGk": "Dark Patterns: Deceptive UI/UX designs that trick users into unwanted purchases.",
    "tier": "Tier A",
    "hook": "Partners with Institute of Public Auditors of India to curb misselling on digital insurance portals.",
    "trap": null,
    "id": "note-sec5-264",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "IRDAI Partners with IPAI to Eliminate Dark Patterns in Insurance Sector",
          "Official Appointment",
          "Regulatory Objective: Monitors dark patterns and forced add-on sales on digital insurance apps."
        ]
      ]
    }
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-06",
    "bullets": [
      "Equity Structure: Prudential plc holds 70% stake, HCL Group holds 30% stake.",
      "Separate Acquisition: Prudential plc acquired 75% stake in Bharti Life Insurance."
    ],
    "title": "IRDAI Grants Health Insurance License to Prudential HCL Joint Venture",
    "staticGk": "100% FDI permitted in Indian insurance sector under automatic route.",
    "tier": "Tier A",
    "hook": "Grants standalone health insurance registration to Prudential HCL Health Insurance (70:30 JV).",
    "trap": "Prudential stake in Prudential HCL Health (70%) vs stake in Bharti Life (75%).",
    "id": "note-sec5-265",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "IRDAI Grants Health Insurance License to Prudential HCL Joint Venture",
          "Official Appointment",
          "Equity Structure: Prudential plc holds 70% stake, HCL Group holds 30% stake."
        ]
      ]
    }
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-07",
    "bullets": [
      "Implementation Window: Mandatory for insurers adopting Ind AS in FY 2026-27 (FY 2027-28 for forbearance entities).",
      "Scope: Independent validation assesses actuarial models, IT systems, and financial data management."
    ],
    "title": "IRDAI Mandates Independent Validation of Insurers' Ind AS Implementation Preparedness",
    "staticGk": "Ind AS 117 corresponds to IFRS 17 Insurance Contracts global accounting standard.",
    "tier": "Tier A",
    "hook": "Requires board-approved strategy validation for transitioning to Ind AS 101 and Ind AS 117 standards.",
    "trap": "Ind AS adoption timeline (FY27) vs regulatory forbearance timeline (FY28).",
    "id": "note-sec5-266",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "IRDAI Mandates Independent Validation of Insurers' Ind AS Implementation Preparedness",
          "Official Appointment",
          "Implementation Window: Mandatory for insurers adopting Ind AS in FY 2026-27 (FY 2027-28 for forbearance entities)."
        ]
      ]
    }
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-08",
    "bullets": [
      "Acquisition Value: ₹4,500 crore total transaction value.",
      "Shareholding Division: Patanjali Ayurved acquires 73.56% stake; DS Group acquires 24.50% stake."
    ],
    "title": "IRDAI Approves Patanjali Ayurved & DS Group's ₹4,500 Crore Acquisition of Magma General Insurance",
    "staticGk": "Magma General Insurance HQ: Mumbai, Maharashtra.",
    "tier": "Tier A",
    "hook": "Patanjali Ayurved acquires 73.56% majority stake from Adar Poonawalla's Sanoti Properties.",
    "trap": "Patanjali stake (73.56%) vs DS Group stake (24.50%).",
    "id": "note-sec5-267",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "IRDAI Approves Patanjali Ayurved & DS Group's ₹4,500 Crore Acquisition of Magma General Insurance",
          "Official Appointment",
          "Acquisition Value: ₹4,500 crore total transaction value."
        ]
      ]
    }
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-09",
    "bullets": [
      "Capacity Leader: Gujarat ranks 1st in installed wind capacity (16,086 MW) and annual wind generation (33,706 MUs).",
      "National Share: Gujarat accounts for nearly one-third of India's total wind power output."
    ],
    "title": "Gujarat Tops India's Wind Energy Charts with 16,086 MW Installed Capacity",
    "staticGk": "Union Ministry of New and Renewable Energy (MNRE) Minister: Pralhad Joshi.",
    "tier": "Tier A",
    "hook": "Generates 33,706 million units (MUs) of wind power in FY26, contributing 1/3rd of India's total output.",
    "trap": "Gujarat wind capacity (16,086 MW) vs annual generation share (nearly 1/3rd).",
    "id": "note-sec4-268"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-10",
    "bullets": [
      "Exploratory Well: MN-DW18-1-H-D located 23 nautical miles from ONGC's Konark discovery in Mahanadi offshore basin.",
      "Strategic Signicance: Part of India's  billion crude import reduction strategy."
    ],
    "title": "ONGC Begins Drilling India's First Deepwater Exploration Well (MN-DW18-1-H-D) off Odisha",
    "staticGk": "ONGC Chairman & CEO: Arun Kumar Singh | HQ: New Delhi.",
    "tier": "Tier A",
    "hook": "Exploratory deepwater drilling initiated 23 nautical miles off Odisha coast in Mahanadi basin.",
    "trap": null,
    "id": "note-sec4-269"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-11",
    "bullets": [
      "Protected Area: 56,825 sq. km. across Gujarat, Maharashtra, Goa, Karnataka, Kerala, and Tamil Nadu (1,500 km length).",
      "Committee Reference: Western Ghats Ecology Expert Panel (WGEEP 2011) headed by Madhav Gadgil."
    ],
    "title": "Centre Notifies 7th Draft for Ecologically Sensitive Areas (ESA) in Western Ghats",
    "staticGk": "Western Ghats (Sahyadri Hills) designated UNESCO World Heritage Site in 2012.",
    "tier": "Tier A",
    "hook": "Proposes protection for 56,825 sq. km. across 6 states based on Madhav Gadgil WGEEP report.",
    "trap": "Number of Western Ghats ESA states (6 states) vs total protected area (56,825 sq km).",
    "id": "note-sec4-270"
  },
  {
    "secId": "sec4",
    "interviewQ": "\"What is the historical significance of Sarnath's UNESCO World Heritage inscription?\"\n💡 **Model Answer: Sarnath is where Gautama Buddha delivered his first sermon (Dhammacakkappavattana Sutta); the site houses the Ashokan Lion Capital, which forms India's official National Emblem.**",
    "date": "2026-07-12",
    "bullets": [
      "World Heritage Site: Sarnath inscribed as India's 45th UNESCO World Heritage Site (Criteria iii & vi).",
      "Monuments Included: Chaukhandi Stupa, Dhamekh Stupa, Dharmarajika Stupa, Mulagandhakuti Vihara, and Ashokan Pillar (Lion Capital).",
      "Global Ranking: India ranks 6th globally and 2nd in Asia-Pacific for total UNESCO World Heritage Sites."
    ],
    "title": "UNESCO Inscribes Sarnath (Uttar Pradesh) as India's 45th World Heritage Site",
    "staticGk": "Buddhism 4 Holiest Sites: Lumbini (Nepal), Bodh Gaya (India), Sarnath (India), Kushinagar (India).",
    "tier": "Tier A",
    "hook": "Inscribed at 48th World Heritage Committee session in Busan; includes Dhamekh & Chaukhandi Stupas.",
    "trap": "India UNESCO World Heritage count (45 sites) vs India global ranking (6th globally, 2nd in Asia-Pacific).",
    "id": "note-sec4-271"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-13",
    "bullets": [
      "GI Awardees: Spiti Seabuckthorn (Chharma), Chamba Salooni Safed Makka & Metal Art, Sirmauri Loiya gown, Kinnauri Topi, Apple & Jewellery, Mandi Sepuvadi."
    ],
    "title": "Eight Traditional Himachal Pradesh Products Secure Geographical Indication (GI) Tags",
    "staticGk": "GI Registry headquartered in Chennai, Tamil Nadu under DPIIT.",
    "tier": "Tier A",
    "hook": "Grants GI tags to Seabuckthorn, White Maize, Metal Art, Woollen Gowns, and Kinnauri Apples.",
    "trap": null,
    "id": "note-sec4-272"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-14",
    "bullets": [
      "New GI Products: Chandannagar's Jalbhara Sandesh, Janai's Manohara sweet, and Balagarh traditional wooden boats.",
      "State Ranking: West Bengal ranks 3rd in India (59 GI tags), behind Uttar Pradesh (83) and Tamil Nadu (76)."
    ],
    "title": "West Bengal Secures 3 New GI Tags: Jalbhara Sandesh, Manohara, & Balagarh Wooden Boats",
    "staticGk": "Uttar Pradesh ranks 1st in India for total GI tags (83).",
    "tier": "Tier A",
    "hook": "Increases West Bengal's total GI registrations to 59, making it India's 3rd-highest GI-tagged state.",
    "trap": "West Bengal GI rank (3rd, 59 tags) vs Uttar Pradesh (1st, 83 tags) vs Tamil Nadu (2nd, 76 tags).",
    "id": "note-sec4-273"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-15",
    "bullets": [
      "Location: Puga Valley, Union Territory of Ladakh.",
      "Execution Agency: Executed by ONGC Energy Centre for 1 MW pilot geothermal power project."
    ],
    "title": "India Commissions First Geothermal Wells in Puga Valley, Ladakh",
    "staticGk": "Geothermal Energy taps heat from the Earth's sub-surface crust.",
    "tier": "Tier A",
    "hook": "Drills India's deepest geothermal wells for 1 MW pilot geothermal power plant.",
    "trap": null,
    "id": "note-sec4-274"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-16",
    "bullets": [
      "State Cases Ranking: Uttar Pradesh recorded highest complaints (1.85 lakh), followed by Maharashtra (1.58 lakh) and Karnataka (1.21 lakh).",
      "Financial Loss Ranking: Maharashtra recorded highest financial loss (₹1,637.66 crore), followed by Karnataka (₹1,097.37 crore)."
    ],
    "title": "MHA Cyber Fraud Report: Uttar Pradesh Records Highest Complaints in India (1.85 Lakh Cases)",
    "staticGk": "National Cyber Crime Reporting Portal (NCRP) helpline: 1930.",
    "tier": "Tier A",
    "hook": "Records 12.71 lakh total cyber fraud complaints across India between January and June 2026.",
    "trap": "Highest complaint volume state (Uttar Pradesh) vs highest financial loss state (Maharashtra).",
    "id": "note-sec4-275"
  },
  {
    "secId": "sec4",
    "interviewQ": null,
    "date": "2026-07-17",
    "bullets": [
      "Undernourishment Reduction: Share dropped from 21.1% to 9.8% (142.5 million people).",
      "Healthy Diet Cost: Cost of healthy diet in India stands at .11 PPP per person per day (2nd lowest in South Asia after Pakistan .94).",
      "Child Stunting: Stunting in under-5 children fell to 32.9% in 2024 (down from 41.7% in 2012)."
    ],
    "title": "UN SOFI 2026 Report: India Undernourished Population Share Drops to 9.8%",
    "staticGk": "SOFI Report published jointly by FAO, IFAD, UNICEF, WFP, and WHO.",
    "tier": "Tier A",
    "hook": "Undernourished population in India declines from 21.1% (2004-06) to 9.8% (2023-25).",
    "trap": "India undernourished share (9.8%) vs healthy diet cost (.11 PPP/day).",
    "id": "note-sec4-276"
  },
  {
    "secId": "sec7",
    "interviewQ": null,
    "date": "2026-07-18",
    "bullets": [
      "Award Name: Bintang Republik Indonesia Adipurna (established 1959).",
      "Conferring Authority: Indonesian President Prabowo Subianto."
    ],
    "title": "PM Narendra Modi Conferred Indonesia's Highest State Honour 'Bintang Republik Indonesia Adipurna'",
    "staticGk": "Indonesia Capital: Jakarta / Nusantara | Currency: Indonesian Rupiah.",
    "tier": "Tier A",
    "hook": "Conferred by President Prabowo Subianto during official visit to Jakarta.",
    "trap": null,
    "id": "note-sec7-277",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "PM Narendra Modi Conferred Indonesia's Highest State Honour 'Bintang Republik Indonesia Adipurna'",
          "Award Name: Bintang Republik Indonesia Adipurna (established 1959).",
          "Indonesia Capital: Jakarta / Nusantara | Currency: Indonesian Rupiah."
        ]
      ]
    }
  },
  {
    "secId": "sec7",
    "interviewQ": null,
    "date": "2026-07-19",
    "bullets": [
      "60th Jnanpith Awardee: Renowned Tamil poet and lyricist R. Vairamuthu.",
      "Tamil Predecessors: Akilan (1975) and Jayakanthan (2002).",
      "Previous Winners: 59th Vinod Kumar Shukla (Hindi); 58th Gulzar (Urdu) & Rambhadracharya (Sanskrit)."
    ],
    "title": "Tamil Poet R. Vairamuthu Conferred 60th Jnanpith Award (2025)",
    "staticGk": "Jnanpith Award instituted in 1961 by Bharatiya Jnanpith (1st winner G. Sankara Kurup 1965).",
    "tier": "Tier A",
    "hook": "Becomes 3rd Tamil author to receive India's highest literary honour.",
    "trap": "60th Jnanpith winner (R. Vairamuthu) vs 59th (Vinod Kumar Shukla).",
    "id": "note-sec7-278",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Tamil Poet R. Vairamuthu Conferred 60th Jnanpith Award (2025)",
          "60th Jnanpith Awardee: Renowned Tamil poet and lyricist R. Vairamuthu.",
          "Jnanpith Award instituted in 1961 by Bharatiya Jnanpith (1st winner G. Sankara Kurup 1965)."
        ]
      ]
    }
  },
  {
    "secId": "sec7",
    "interviewQ": null,
    "date": "2026-07-20",
    "bullets": [
      "Best Film: Article 370 (Hindi).",
      "Best Actor: Mammootty (Bramayugam) and Kartik Aaryan (Chandu Champion).",
      "Best Actress: Yami Gautam (Article 370).",
      "Best Director: Rajkumar Periasamy (Amaran)."
    ],
    "title": "72nd National Film Awards (2024): 'Article 370' Wins Best Film Award",
    "staticGk": "National Film Awards organized annually by Ministry of Information & Broadcasting (instituted 1954).",
    "tier": "Tier A",
    "hook": "Mammootty and Kartik Aaryan share Best Actor Award; Yami Gautam wins Best Actress.",
    "trap": null,
    "id": "note-sec7-279",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "72nd National Film Awards (2024): 'Article 370' Wins Best Film Award",
          "Best Film: Article 370 (Hindi).",
          "National Film Awards organized annually by Ministry of Information & Broadcasting (instituted 1954)."
        ]
      ]
    }
  },
  {
    "secId": "sec7",
    "interviewQ": null,
    "date": "2026-07-21",
    "bullets": [
      "Awardee: National Security Advisor Ajit Doval (longest-serving NSA of India).",
      "Award Presentation: Conferred annually on August 1 (death anniversary of Bal Gangadhar Tilak, instituted 1983)."
    ],
    "title": "NSA Ajit Doval Selected for Prestigious Lokmanya Tilak Award 2026",
    "staticGk": "1st Lokmanya Tilak Award recipient: Socialist leader S. M. Joshi (1983).",
    "tier": "Tier A",
    "hook": "Honoured for outstanding national security service on Bal Gangadhar Tilak's death anniversary.",
    "trap": null,
    "id": "note-sec7-280",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "NSA Ajit Doval Selected for Prestigious Lokmanya Tilak Award 2026",
          "Awardee: National Security Advisor Ajit Doval (longest-serving NSA of India).",
          "1st Lokmanya Tilak Award recipient: Socialist leader S. M. Joshi (1983)."
        ]
      ]
    }
  },
  {
    "secId": "sec7",
    "interviewQ": null,
    "date": "2026-07-22",
    "bullets": [
      "Recipients: Yu Deng (Univ of Chicago), John Pardon (Stony Brook), Jacob Tsimerman (Univ of Toronto), Hong Wang (NYU/IHES).",
      "Award Structure: Conferred every 4 years to mathematicians under 40 (prize: 15,000 CAD / ,600 and gold medal of Archimedes).",
      "Historic Distinction: Hong Wang (China) is 3rd female recipient after Maryam Mirzakhani (2014) and Maryna Viazovska (2022)."
    ],
    "title": "Fields Medal 2026 Conferred on 4 Mathematicians: Hong Wang, Yu Deng, John Pardon, Jacob Tsimerman",
    "staticGk": "Fields Medal instituted by J.C. Fields at Univ of Toronto | International Mathematical Union (IMU) HQ: Berlin.",
    "tier": "Tier A",
    "hook": "Hong Wang becomes 3rd woman scientist in 90-year history to win the 'Nobel Prize of Mathematics'.",
    "trap": null,
    "id": "note-sec7-281",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Fields Medal 2026 Conferred on 4 Mathematicians: Hong Wang, Yu Deng, John Pardon, Jacob Tsimerman",
          "Recipients: Yu Deng (Univ of Chicago), John Pardon (Stony Brook), Jacob Tsimerman (Univ of Toronto), Hong Wang (NYU/IHES).",
          "Fields Medal instituted by J.C. Fields at Univ of Toronto | International Mathematical Union (IMU) HQ: Berlin."
        ]
      ]
    }
  },
  {
    "secId": "sec6",
    "interviewQ": null,
    "date": "2026-07-23",
    "bullets": [
      "Champions: Australia (Captain: Sophie Molineux) defeated England by 7 wickets in final.",
      "Player of Tournament: Beth Mooney (Australia).",
      "Total Titles: Australia has won 7 of 9 editions (England 1, West Indies 1)."
    ],
    "title": "2026 ICC Women's T20 World Cup: Australia Defeats England by 7 Wickets for 7th Title",
    "staticGk": "ICC HQ: Dubai, UAE | Chairman: Jay Shah.",
    "tier": "Tier A",
    "hook": "Australia claims 7th Women's T20 World Cup title in England; Beth Mooney Player of Tournament.",
    "trap": "Australia Women's T20 World Cup titles count (7 titles).",
    "id": "note-sec6-282"
  },
  {
    "secId": "sec6",
    "interviewQ": null,
    "date": "2026-07-24",
    "bullets": [
      "Men's Singles Winner: Jannik Sinner (Italy) defeated Alexander Zverev (Germany).",
      "Women's Singles Winner: Linda Nosková (Czech Republic) defeated Karolína Muchová.",
      "Sinner Milestone: 2nd consecutive Wimbledon title and 100th Grand Slam match victory."
    ],
    "title": "139th Wimbledon 2026: Jannik Sinner Wins Men's Singles; Linda Nosková Wins Women's Singles",
    "staticGk": "Wimbledon played on grass courts at All England Club, London (established 1877).",
    "tier": "Tier A",
    "hook": "Jannik Sinner defeats Alexander Zverev to claim 2nd consecutive Wimbledon and 5th Grand Slam title.",
    "trap": "Men's Singles Winner (Jannik Sinner) vs Women's Singles Winner (Linda Nosková).",
    "id": "note-sec6-283"
  },
  {
    "secId": "sec6",
    "interviewQ": null,
    "date": "2026-07-25",
    "bullets": [
      "Women's Singles Winner: PV Sindhu defeated Akane Yamaguchi (Japan) in final.",
      "Men's Singles Winner: Christo Popov (France) defeated Koki Watanabe (Japan)."
    ],
    "title": "BWF Japan Open 2026: PV Sindhu Wins Women's Singles Title",
    "staticGk": "BWF (Badminton World Federation) HQ: Kuala Lumpur, Malaysia.",
    "tier": "Tier A",
    "hook": "PV Sindhu becomes 1st Indian badminton player to win Japan Open title.",
    "trap": null,
    "id": "note-sec6-284"
  },
  {
    "secId": "sec6",
    "interviewQ": null,
    "date": "2026-07-26",
    "bullets": [
      "Champions: Spain (Captain: Rodri) defeated Argentina 2-1 at MetLife Stadium, New York.",
      "Golden Ball (Best Player): Rodri (Spain). Golden Boot (Top Scorer): Kylian Mbappé (France, 22 all-time World Cup goals).",
      "Golden Glove (Best Goalkeeper): Unai Simón (Spain).",
      "Young Player: Pau Cubarsí (Spain).",
      "2030 World Cup Hosts: Main hosts Morocco, Portugal, Spain (Centenary matches in Argentina, Paraguay, Uruguay)."
    ],
    "title": "2026 FIFA World Cup: Spain Defeats Defending Champions Argentina 2-1 in New York Final",
    "staticGk": "FIFA HQ: Zurich, Switzerland | President: Gianni Infantino.",
    "tier": "Tier A",
    "hook": "Spain becomes 1st nation to hold men's and women's FIFA World Cup crowns simultaneously.",
    "trap": "Golden Ball winner (Rodri) vs Golden Boot winner (Kylian Mbappé).",
    "id": "note-sec6-285"
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-27",
    "bullets": [
      "Achievement: 18-year-old Aswath S becomes India's 98th Grandmaster."
    ],
    "title": "Aswath S (Tamil Nadu) Becomes India's 98th Chess Grandmaster",
    "staticGk": "India's 1st Grandmaster: Viswanathan Anand (1988).",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec5-286",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Aswath S (Tamil Nadu) Becomes India's 98th Chess Grandmaster",
          "Official Appointment",
          "Achievement: 18-year-old Aswath S becomes India's 98th Grandmaster."
        ]
      ]
    }
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-28",
    "bullets": [
      "Appointment: Lokhande Prashant Sitaram appointed CBSE Chairperson."
    ],
    "title": "Lokhande Prashant Sitaram Appointed CBSE Chairperson",
    "staticGk": "CBSE HQ: New Delhi | Works under Ministry of Education.",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec5-287",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Lokhande Prashant Sitaram",
          "CBSE Chairperson",
          "Appointment: Lokhande Prashant Sitaram appointed CBSE Chairperson."
        ]
      ]
    }
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-29",
    "bullets": [
      "Appointment: Bijay Kumar Mohanty appointed CMD of IREDA."
    ],
    "title": "Bijay Kumar Mohanty Appointed CMD of IREDA",
    "staticGk": "IREDA is a Mini Ratna Category-I CPSE under Ministry of New and Renewable Energy.",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec5-288",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Bijay Kumar Mohanty",
          "CMD of IREDA",
          "Appointment: Bijay Kumar Mohanty appointed CMD of IREDA."
        ]
      ]
    }
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-30",
    "bullets": [
      "Appointment: Silvana Tenreyro appointed IMF Chief Economist."
    ],
    "title": "Silvana Tenreyro Appointed Chief Economist of International Monetary Fund (IMF)",
    "staticGk": "IMF HQ: Washington D.C. | MD: Kristalina Georgieva.",
    "tier": "Tier B+",
    "hook": null,
    "trap": null,
    "id": "note-sec5-289",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Silvana Tenreyro",
          "Chief Economist of International Monetary Fund (IMF)",
          "Appointment: Silvana Tenreyro appointed IMF Chief Economist."
        ]
      ]
    }
  },
  {
    "secId": "sec5",
    "interviewQ": null,
    "date": "2026-07-31",
    "bullets": [
      "Induction: Dilip Asbe inducted into SWIFT Global Supervisory Board.",
      "SWIFT Governance: Overseen by G-10 central banks and European Central Bank (National Bank of Belgium lead overseer)."
    ],
    "title": "Dilip Asbe (NPCI CEO) Inducted into SWIFT Global Supervisory Board",
    "staticGk": "SWIFT (Society for Worldwide Interbank Financial Telecommunication) HQ: La Hulpe, Belgium.",
    "tier": "Tier B+",
    "hook": null,
    "trap": "SWIFT lead overseer central bank (National Bank of Belgium) vs India membership status (Non-member of G-10).",
    "id": "note-sec5-290",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Dilip Asbe (NPCI CEO) Inducted into SWIFT Global Supervisory Board",
          "Official Appointment",
          "Induction: Dilip Asbe inducted into SWIFT Global Supervisory Board."
        ]
      ]
    }
  },
  {
    "bullets": [
      "Establishment & Legal Basis: Established April 27, 2020 under the IFSCA Act 2019.",
      "Headquarters & Leadership: Headquartered at GIFT City, Gandhinagar, Gujarat.",
      "Chairperson: K.",
      "Rajaraman.",
      "Regulatory Jurisdiction: Combines regulatory oversight of banking, capital markets, insurance, and pensions in IFSC zones."
    ],
    "interviewQ": null,
    "secId": "sec2",
    "hook": "Unified regulator combining RBI, SEBI, IRDAI, and PFRDA powers for IFSC regions.",
    "date": "2026-07-01",
    "trap": null,
    "tier": "Tier A",
    "id": "note-sec2-291",
    "title": "Static GK: International Financial Services Centres Authority (IFSCA) Mandate & Governance",
    "staticGk": "IFSCA Act 2019 created India's 1st unified international financial regulator."
  },
  {
    "bullets": [
      "Establishment: Founded July 9, 1988 under National Housing Bank Act 1987.",
      "HQ: New Delhi.",
      "Capital Structure: Authorized capital stands at ₹1,450 crore (100% fully subscribed by Union Government).",
      "Leadership: MD: Sanjay Shukla.",
      "Chairman: Prabhanjan Mohapatra."
    ],
    "interviewQ": null,
    "secId": "sec2",
    "hook": "100% Government of India owned principal housing finance institution.",
    "date": "2026-07-02",
    "trap": "NHB ownership (100% Government of India, transferred from RBI in 2019).",
    "tier": "Tier A",
    "id": "note-sec2-292",
    "title": "Static GK: National Housing Bank (NHB) Capital Structure & Governance",
    "staticGk": "NHB shareholding was transferred 100% from RBI to Government of India in 2019."
  },
  {
    "bullets": [
      "BRBNMPL Presses (RBI Subsidiary): Mysore (Karnataka) and Salboni (West Bengal) established under BRBNMPL (Founded Feb 3, 1995).",
      "SPMCIL Presses (Government of India): Nashik (Maharashtra) and Dewas (Madhya Pradesh) under Security Printing and Minting Corporation of India."
    ],
    "interviewQ": null,
    "secId": "sec3",
    "hook": "India operates 4 currency printing presses divided equally between RBI and SPMCIL.",
    "date": "2026-07-03",
    "trap": "BRBNMPL presses (Mysore & Salboni) vs SPMCIL presses (Nashik & Dewas).",
    "tier": "Tier A",
    "id": "note-sec3-293",
    "title": "Static GK: Bank Note Printing Presses & Currency Infrastructure in India",
    "staticGk": "BRBNMPL HQ: Bengaluru, Karnataka | SPMCIL HQ: New Delhi."
  },
  {
    "bullets": [
      "Geography & Course: Also known as Reva; originates from Amarkantak (MP) and empties into Gulf of Khambhat (Arabian Sea); spans MP, Gujarat, Maharashtra, and Chhattisgarh.",
      "Major Hydropower Projects: Sardar Sarovar Dam (Gujarat), Indira Sagar Dam (MP), Maheshwar Dam, and Omkareshwar Dam."
    ],
    "interviewQ": null,
    "secId": "sec4",
    "hook": "Longest west-flowing river in India, originating in Maikala range near Amarkantak.",
    "date": "2026-07-04",
    "trap": "Narmada discharge (Gulf of Khambhat, Arabian Sea) vs east-flowing rivers (Bay of Bengal).",
    "tier": "Tier A",
    "id": "note-sec4-294",
    "title": "Static GK: Narmada River Hydroelectric Projects & Geography",
    "staticGk": "Sardar Sarovar Dam is built on the Narmada River in Navagam, Gujarat."
  },
  {
    "bullets": [
      "Bordering Nations (6 Countries): Bulgaria, Romania, Ukraine, Russia, Georgia, and Türkiye.",
      "Connecting Waterways: Linked to Sea of Marmara via Bosphorus Strait; to Aegean Sea via Dardanelles Strait; to Sea of Azov via Kerch Strait."
    ],
    "interviewQ": null,
    "secId": "sec4",
    "hook": "Marginal sea connecting Europe and Asia via Bosphorus, Dardanelles, and Kerch Straits.",
    "date": "2026-07-05",
    "trap": "Connecting strait to Sea of Azov (Kerch Strait) vs Sea of Marmara (Bosphorus Strait).",
    "tier": "Tier A",
    "id": "note-sec4-295",
    "title": "Static GK: Black Sea Geographical Straits & Bordering Nations",
    "staticGk": "Mnemonic for Black Sea bordering countries: BURGER (Bulgaria, Ukraine, Russia, Georgia, Romania) + Türkiye."
  },
  {
    "bullets": [
      "Geographical Significance: Located in Moirang, Manipur; famous for phumdis (floating circular heterogeneous biomass masses).",
      "Conservation Status: Keibul Lamjao National Park is the world's only floating national park (home to Sangai brow-antlered deer); designated Ramsar Site (1990) and Montreux Record (1993)."
    ],
    "interviewQ": null,
    "secId": "sec4",
    "hook": "Largest freshwater lake in Northeast India famous for floating phumdis.",
    "date": "2026-07-06",
    "trap": "Ramsar designation (1990) vs Montreux Record listing (1993).",
    "tier": "Tier A",
    "id": "note-sec4-296",
    "title": "Static GK: Loktak Lake & Keibul Lamjao National Park (Manipur)",
    "staticGk": "Sangai Deer (Rucervus eldii eldii) is the state animal of Manipur."
  },
  {
    "bullets": [
      "Award Structure: ₹11 Lakh cash prize, bronze statue of Goddess Vagdevi, and citation.",
      "Eligibility & Presenter: Instituted in 1961 by Bharatiya Jnanpith; awarded for outstanding literature in any language listed under 8th Schedule of Indian Constitution."
    ],
    "interviewQ": null,
    "secId": "sec7",
    "hook": "India's highest literary honour presented annually for Eighth Schedule language contributions.",
    "date": "2026-07-07",
    "trap": "Jnanpith cash prize (₹11 Lakh) vs Saraswati Samman (₹15 Lakh).",
    "tier": "Tier A",
    "id": "note-sec7-297",
    "title": "Static GK: Jnanpith Award History, Eligibility & Cash Prize Structure",
    "staticGk": "First Jnanpith Award winner: G. Sankara Kurup (Malayalam, 1965).",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Static GK: Jnanpith Award History, Eligibility & Cash Prize Structure",
          "Award Structure: ₹11 Lakh cash prize, bronze statue of Goddess Vagdevi, and citation.",
          "First Jnanpith Award winner: G. Sankara Kurup (Malayalam, 1965)."
        ]
      ]
    }
  },
  {
    "bullets": [
      "Founding Members (Original 5): Indonesia, Malaysia, Philippines, Singapore, and Thailand.",
      "Expanded Members (6 Later Nations): Brunei (1984), Vietnam (1995), Laos & Myanmar (1997), Cambodia (1999), and Timor-Leste (2025)."
    ],
    "interviewQ": null,
    "secId": "sec5",
    "hook": "Established via Bangkok Declaration on August 8, 1967 (India non-member).",
    "date": "2026-07-08",
    "trap": "India membership status (Non-member) vs Timor-Leste accession (11th member, 2025).",
    "tier": "Tier A",
    "id": "note-sec5-298",
    "title": "Static GK: ASEAN Membership Evolution & Original 5 Founding Members",
    "staticGk": "ASEAN Secretariat HQ: Jakarta, Indonesia | India is a Sectoral Dialogue Partner.",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Static GK: ASEAN Membership Evolution & Original 5 Founding Members",
          "Official Appointment",
          "Founding Members (Original 5): Indonesia, Malaysia, Philippines, Singapore, and Thailand."
        ]
      ]
    }
  },
  {
    "bullets": [
      "Alliance Expansion: Sweden joined as the 32nd member state on March 7, 2024 (Finland joined 31st in 2023).",
      "Governance & HQ: Headquartered in Brussels, Belgium.",
      "Secretary General: Mark Rutte."
    ],
    "interviewQ": null,
    "secId": "sec5",
    "hook": "North Atlantic Treaty Organization formed April 4, 1949 with 32 member states.",
    "date": "2026-07-09",
    "trap": "32nd NATO member state (Sweden) vs 31st member state (Finland).",
    "tier": "Tier A",
    "id": "note-sec5-299",
    "title": "Static GK: NATO 32-Nation Alliance & Sweden Accession",
    "staticGk": "Article 5 of North Atlantic Treaty governs collective defence commitment.",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Static GK: NATO 32-Nation Alliance & Sweden Accession",
          "Official Appointment",
          "Alliance Expansion: Sweden joined as the 32nd member state on March 7, 2024 (Finland joined 31st in 2023)."
        ]
      ]
    }
  },
  {
    "bullets": [
      "Historical Significance: TAPS Units 1 & 2 (commissioned 1969) are the world's oldest operating commercial nuclear reactors."
    ],
    "interviewQ": null,
    "secId": "sec4",
    "hook": "Commissioned in 1969 in Palghar district, Maharashtra.",
    "date": "2026-07-10",
    "trap": null,
    "tier": "Tier B+",
    "id": "note-sec4-300",
    "title": "Static GK: Tarapur Atomic Power Station (TAPS 1&2) World Oldest Commercial Reactor",
    "staticGk": "NPCIL (Nuclear Power Corporation of India Ltd) operates Tarapur."
  },
  {
    "bullets": [
      "Musi River: Major tributary of Krishna River flowing through Hyderabad, Telangana.",
      "Salal Hydroelectric Project: Run-of-the-river power project on Chenab River in Reasi district, J&K."
    ],
    "interviewQ": null,
    "secId": "sec4",
    "hook": "Musi is a major tributary of Krishna River; Salal Dam is on Chenab River in J&K.",
    "date": "2026-07-11",
    "trap": null,
    "tier": "Tier B+",
    "id": "note-sec4-301",
    "title": "Static GK: Musi River (Muchukunda) & Salal Hydroelectric Dam Geography",
    "staticGk": "Hyderabad city is situated on the banks of the Musi River."
  },
  {
    "bullets": [
      "Nehru Trophy Regatta: Held annually on 2nd Saturday of August on Punnamada Lake, Alappuzha, Kerala.",
      "Indian Navy Domain: Safeguards 11,098 km coastline and 2.4 million sq. km.",
      "Exclusive Economic Zone (EEZ)."
    ],
    "interviewQ": null,
    "secId": "sec4",
    "hook": "Snake boat regatta held on Punnamada Lake, Alappuzha; Navy guards 11,098 km coastline.",
    "date": "2026-07-12",
    "trap": null,
    "tier": "Tier B+",
    "id": "note-sec4-302",
    "title": "Static GK: Nehru Trophy Boat Race & Indian Navy Maritime Security Scope",
    "staticGk": "Exclusive Economic Zone (EEZ) extends 200 nautical miles from baseline."
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Statutory Mandate: Viksit Bharat Guarantee for Rozgar and Aajeevika Mission (Gramin) replaces MGNREGA nationwide.",
      "Employment Guarantee: Increases statutory wage employment from 100 days to 125 days per year (total budget ₹1,51,282 crore).",
      "Minimum Wage Rate: Wage rates increased by ~10% on average, ensuring no state has a wage rate below ₹300/day.",
      "Initial Outlay: First 'Mother Sanction' installment of ₹25,863 crore released to states to ensure 15-day wage payments."
    ],
    "staticGk": "Union Rural Development Minister: Shivraj Singh Chouhan | MGNREGA enacted 2005.",
    "trap": "New statutory employment guarantee (125 days, up from 100 days) vs minimum daily wage rate (₹300/day).",
    "interviewQ": "\"Why did the government replace MGNREGA with the VB-G-RAM-G Act in 2026?\"\n💡 **Model Answer: To raise guaranteed annual rural employment from 100 to 125 days, establish a uniform ₹300/day wage floor, and enforce 15-day automated wage disbursement.**",
    "secId": "sec1",
    "id": "note-sec1-303",
    "date": "2026-07-01",
    "hook": "Replaces MGNREGA from July 1, 2026 with a minimum statutory wage rate of ₹300 per day.",
    "title": "VB-G-RAM-G Act Replaces MGNREGA: Wage Employment Guarantee Increased to 125 Days"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Phased Registration Restrictions: From Jan 1, 2027, only electric 3-wheelers and N1 goods carriers allowed; from April 1, 2028, new petrol/CNG 2-wheeler registrations discontinued.",
      "Purchase Subsidies: Up to ₹30,000 for electric 2-wheelers; ₹50,000 for 3-wheelers; ₹1 lakh for N1 trucks (100% road tax/reg fee exemption).",
      "Infrastructure & Bus Fleet: Outlay of ₹7,000 crore to install 32,000 active EV charging points and electrify 30% of school bus fleets by March 2030."
    ],
    "staticGk": "Delhi CM: Rekha Gupta | Delhi Transport Commissioner: Niharika Rai.",
    "trap": "Electric 3-wheeler registration mandate (Jan 1, 2027) vs petrol 2-wheeler ban (April 1, 2028).",
    "interviewQ": null,
    "secId": "sec4",
    "id": "note-sec4-304",
    "date": "2026-07-02",
    "hook": "Phases out fossil-fuel two-wheeler registrations while committing ₹7,000 crore for EV incentives.",
    "title": "Delhi EV Policy 2026 (EV Policy 2.0): Bans Petrol & CNG Two-Wheeler Registrations from April 2028"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Project Details: Operationalises 1994 Upper Yamuna River Basin (UYRB) agreement at a cost of ₹34,102 crore.",
      "Conveyance System: 580 million cubic metres (MCM) water piped from Western Yamuna Canal via 3 underground pipelines.",
      "Beneficiary Regions: Supplies drinking water to Sikar, Churu, and Jhunjhunu (Rajasthan) and Bhiwani & Fatehabad (Haryana)."
    ],
    "staticGk": "Special Purpose Vehicle: Rajasthan-Haryana Yamuna Water SPV (RHYW-SPV) formed for execution.",
    "trap": "Pipeline conveyance capacity (580 MCM) vs total project outlay (₹34,102 crore).",
    "interviewQ": null,
    "secId": "sec4",
    "id": "note-sec4-305",
    "date": "2026-07-03",
    "hook": "Resolves 30-year-old inter-state water dispute by conveying 580 MCM water to Shekhawati.",
    "title": "Haryana & Rajasthan Sign ₹34,102 Crore Yamuna Water Project Agreement"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Equity Structure: 50:50 Joint Venture between Adani Enterprises Ltd and IHC Group's IRH (Abu Dhabi).",
      "Infrastructure Scope: 4 MMTPA alumina refinery in Rayagada, 2 MMTPA aluminium smelter in Sundargarh, and 4,000 MW captive power plant (400 MW renewable).",
      "Odisha Bauxite Share: Odisha holds nearly 50% of India's bauxite reserves and accounts for 54% of national aluminium output."
    ],
    "staticGk": "Adani Enterprises Chairman: Gautam Adani | Odisha CM: Mohan Charan Majhi.",
    "trap": "Alumina refinery capacity (4 MMTPA in Rayagada) vs Aluminium smelter capacity (2 MMTPA in Sundargarh).",
    "interviewQ": null,
    "secId": "sec1",
    "id": "note-sec1-306",
    "date": "2026-07-04",
    "hook": "India's largest FDI in metallurgy sector featuring a 4 MMTPA alumina refinery and 2 MMTPA smelter.",
    "title": "Adani Enterprises & IRH (Abu Dhabi) Sign .5 Billion MoU for Odisha Aluminium Project"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Kanpur-Kabrai Corridor: 117.7 km 4/6-lane access-controlled highway on NH-34 (₹7,145.14 cr on BOT Toll mode).",
      "Delhi Road Tunnel: 8.1 km 6-lane tunnel connecting Dwarka Expressway (NH-248BB) to Nelson Mandela Marg (NH-148AE) in Vasant Kunj (₹6,969.67 cr on HAM mode)."
    ],
    "staticGk": "CCEA chaired by Prime Minister | NHAI Chairman: Santosh Kumar Yadav.",
    "trap": "Kanpur-Kabrai highway length (117.7 km, BOT Toll) vs Vasant Kunj tunnel (8.1 km, HAM mode).",
    "interviewQ": null,
    "secId": "sec4",
    "id": "note-sec4-307",
    "date": "2026-07-05",
    "hook": "Clears Kanpur-Kabrai Greenfield Highway and 8.1 km Dwarka Expressway road tunnel.",
    "title": "CCEA Approves 2 National Highway Projects in UP & Delhi (₹14,114.81 Crore Outlay)"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "FCRA 2.0 Portal: Fully digitises Foreign Contribution (Regulation) Act 2010 filings for ~14,500 active NGOs via NGO Darpan integration.",
      "e-OCI Card: Creates fully digital OCI ecosystem for >50 lakh cardholders (no new booklet needed upon passport renewal after age 20).",
      "Hosting Platform: Hosted on National Government Cloud 'MeghRaj' with Aadhaar e-Sign and OCR analysis."
    ],
    "staticGk": "Union Home Minister: Amit Shah | FCRA regulated by Ministry of Home Affairs.",
    "trap": "FCRA portal version (2.0) vs OCI booklet renewal exemption age (20 years).",
    "interviewQ": null,
    "secId": "sec2",
    "id": "note-sec2-308",
    "date": "2026-07-06",
    "hook": "Digitises FCRA compliance for 14,500 NGOs and eliminates OCI booklet renewal upon passport update.",
    "title": "MHA Launches FCRA 2.0 Portal and Electronic OCI (e-OCI) Card on MeghRaj Cloud"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Eligibility & Age: Open to Indian graduates and final-year students up to 30 years of age.",
      "Training Structure: 12-month program comprising 150 hours online learning on SWAYAM Plus followed by 6 months on-the-job training.",
      "Partner Bodies: Supported by IIT Madras (IIT Pravartak), ICAI, ICSI, and ICMAI."
    ],
    "staticGk": "Union Corporate Affairs Minister: Nirmala Sitharaman.",
    "trap": "Online learning duration (150 hours on SWAYAM Plus) vs on-job training (6 months).",
    "interviewQ": null,
    "secId": "sec1",
    "id": "note-sec1-309",
    "date": "2026-07-07",
    "hook": "Creates certified pool of para-professionals to assist MSMEs with accounting, tax, and secretarial compliance.",
    "title": "MCA Launches Corporate Mitra Scheme for MSME Compliance Para-Professionals"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Airport City Investment: AACL investing > ₹20,000 crore across 6 airports (Mumbai, Navi Mumbai, Ahmedabad, Lucknow, Jaipur, Guwahati) covering 22 million sq. ft.",
      "Hotel Tie-Up: Signed IHG Hotels & Resorts for 5 luxury hotels (debut of Kimpton brand in India).",
      "Organic Fertilizer & CBG: Adani TotalEnergies Biomass Ltd (ATBL) launched 'Harit Amrit' fertilizer; Barsana (UP) project developed as India's largest agri-waste compressed biogas facility under SATAT (5% blending target)."
    ],
    "staticGk": "Adani Airport Holdings manages 8 airports in India | LEED Gold pre-certified.",
    "trap": "Barsana CBG facility location (Uttar Pradesh) vs SATAT CBG blending target (5%).",
    "interviewQ": null,
    "secId": "sec4",
    "id": "note-sec4-310",
    "date": "2026-07-08",
    "hook": "Develops 655 acres across 6 airports while launching India's largest agri-waste CBG facility in Barsana.",
    "title": "Adani Airport City (AACL) ₹20,000 Crore Airport City Plan and Harit Amrit Fertilizer Launch"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Campaign Duration: Digi Rover-GNSS Special Land Measurement Campaign runs July 1 to August 15, 2026.",
      "Technology: Uses GNSS satellite instruments for centimetre-level accurate land demarcation under DILRMP."
    ],
    "staticGk": "DILRMP: Digital India Land Records Modernisation Programme.",
    "trap": null,
    "interviewQ": null,
    "secId": "sec4",
    "id": "note-sec4-311",
    "date": "2026-07-09",
    "hook": "Deploys Global Navigation Satellite System (GNSS) rovers across all UP tehsils to resolve land disputes.",
    "title": "Uttar Pradesh Launches Digi Rover (GNSS) Centimetre-Accurate Land Measurement Campaign"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Price Revision: Procurement price raised from ₹1,875 to ₹2,125 per quintal (w.e.f.",
      "July 4).",
      "Procurement Agencies: Procured through NAFED and National Cooperative Consumers' Federation (NCCF).",
      "Production Estimate: 2025-26 onion production estimated at 307.37 lakh metric tonnes (LMT)."
    ],
    "staticGk": "NAFED HQ: New Delhi | Works under Ministry of Agriculture.",
    "trap": "Revised procurement price (₹2,125/quintal) vs earlier price (₹1,875/quintal).",
    "interviewQ": null,
    "secId": "sec1",
    "id": "note-sec1-312",
    "date": "2026-07-10",
    "hook": "Revises onion procurement price upwards for the 5th time this season via NAFED and NCCF.",
    "title": "Government Raises Onion Price Stabilisation Buffer Procurement Price by 13% to ₹2,125/Quintal"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Greece Partner: Eurobank (Greece) partnered with NPCI International Payments Limited (NIPL).",
      "10 Global Countries: Greece joins Singapore, UAE, Bhutan, Nepal, Sri Lanka, France, Mauritius, Qatar, and Cambodia.",
      "Domestic Volume: UPI processes 22–23 billion transactions per month domestically."
    ],
    "staticGk": "NPCI International Payments Ltd (NIPL) CEO: Ritesh Shukla.",
    "trap": "Greece position as UPI international destination (10th country globally).",
    "interviewQ": null,
    "secId": "sec3",
    "id": "note-sec3-313",
    "date": "2026-07-11",
    "hook": "Expands UPI cross-border merchant payments into Greece as 10th international destination.",
    "title": "NIPL Partners with Eurobank to Make UPI Live in Greece (10th Country Globally)"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Group Leadership: Chaired by Ananta Barua (former SEBI WTM); Co-Chairperson Rajnish Kumar (former SBI Chairman).",
      "Terms of Reference: Comprehensive review of SEBI (Debenture Trustees) Regulations 1993 and net-worth requirements."
    ],
    "staticGk": "Debenture Trustees are SEBI-registered entities protecting bondholders' interests.",
    "trap": "Working Group Chairman (Ananta Barua) vs Co-Chairman (Rajnish Kumar).",
    "interviewQ": null,
    "secId": "sec2",
    "id": "note-sec2-314",
    "date": "2026-07-12",
    "hook": "Reviews 1993 Debenture Trustees regulations with former SBI Chairman Rajnish Kumar as Co-Chair.",
    "title": "SEBI Constitutes Expert Working Group Chaired by Ananta Barua on Debenture Trusteeship"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Warships Commissioned: INS Dunagiri (7th & final Project 17A stealth frigate), INS Sanshodhak (4th Survey Vessel Large), and INS Agray (ASW Shallow Water Craft).",
      "Builder & Content: Built by Garden Reach Shipbuilders & Engineers (GRSE) Kolkata with >75% indigenous content.",
      "Navratna Status: Marks GRSE's 1st warship commissioning after receiving Navratna status."
    ],
    "staticGk": "GRSE Chairman & MD: Cdre PR Hari (Retd) | HQ: Kolkata, WB.",
    "trap": "INS Dunagiri (Project 17A 7th frigate) vs INS Sanshodhak (Survey Vessel 4th vessel).",
    "interviewQ": null,
    "secId": "sec4",
    "id": "note-sec4-315",
    "date": "2026-07-13",
    "hook": "Commissions 7th Project 17A frigate, 4th Survey Vessel Large, and ASW Shallow Water Craft.",
    "title": "PM Modi Commissions 3 Warships in Kolkata: INS Dunagiri, INS Sanshodhak, & INS Agray"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Indian Awardees: Parveen Shaikh (BNHS, Indian Skimmer) and Barkha Subba (FSEP, Himalayan Salamander).",
      "Award Details: Conferred by UK's Princess Anne at Royal Geographical Society, London (£50,000 funding)."
    ],
    "staticGk": "Whitley Fund for Nature (UK) institutes the annual Whitley Awards.",
    "trap": "Parveen Shaikh species focus (Indian Skimmer) vs Barkha Subba species focus (Himalayan Salamander).",
    "interviewQ": null,
    "secId": "sec7",
    "id": "note-sec7-316",
    "date": "2026-07-14",
    "hook": "Recognized for conserving the Indian Skimmer (Chambal River) and Himalayan Salamander (Darjeeling).",
    "title": "Parveen Shaikh & Barkha Subba Conferred 2026 Whitley Award ('Green Oscar') in London",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Parveen Shaikh & Barkha Subba Conferred 2026 Whitley Award ('Green Oscar') in London",
          "Indian Awardees: Parveen Shaikh (BNHS, Indian Skimmer) and Barkha Subba (FSEP, Himalayan Salamander).",
          "Whitley Fund for Nature (UK) institutes the annual Whitley Awards."
        ]
      ]
    }
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Awardees: Sunil Bharti Mittal (Bharti Enterprises), V Prem Watsa (Fairfax Financial), and Christopher T Calio (RTX Corp).",
      "Event Context: Conferred during IX USISPF Leadership Summit marking America@250 anniversary."
    ],
    "staticGk": "USISPF President & CEO: Mukesh Aghi | HQ: Washington D.C.",
    "trap": null,
    "interviewQ": null,
    "secId": "sec7",
    "id": "note-sec7-317",
    "date": "2026-07-15",
    "hook": "Conferred at IX USISPF Leadership Summit alongside V Prem Watsa and Christopher Calio.",
    "title": "Sunil Bharti Mittal Presented USISPF 2026 Leadership Award in Washington D.C.",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Sunil Bharti Mittal Presented USISPF 2026 Leadership Award in Washington D.C.",
          "Awardees: Sunil Bharti Mittal (Bharti Enterprises), V Prem Watsa (Fairfax Financial), and Christopher T Calio (RTX Corp).",
          "USISPF President & CEO: Mukesh Aghi | HQ: Washington D.C."
        ]
      ]
    }
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Academic Partnership: IIT Delhi and Sorbonne University (Paris) launched joint master's and PhD programs.",
      "Integrated Campus: Centred around Franco-Indian Integrated Health Campus for healthcare AI and robotics."
    ],
    "staticGk": "Sorbonne University HQ: Paris, France | IIT Delhi Director: Rangan Banerjee.",
    "trap": null,
    "interviewQ": null,
    "secId": "sec5",
    "id": "note-sec5-318",
    "date": "2026-07-16",
    "hook": "Establishes 'Franco-Indian Integrated Health Campus' for joint medical and AI research.",
    "title": "IIT Delhi and Sorbonne University (France) Launch Joint Master's & PhD in Biological Science",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "IIT Delhi and Sorbonne University (France) Launch Joint Master's & PhD in Biological Science",
          "Official Appointment",
          "Academic Partnership: IIT Delhi and Sorbonne University (Paris) launched joint master's and PhD programs."
        ]
      ]
    }
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Mission Scope: World's 1st all-girls international satellite mission to the Moon.",
      "Lead Agency: Conceptualised and led by Space Kidz India; Gautam Buddha University (GBU) academic partner."
    ],
    "staticGk": "Space Kidz India Founder & CEO: Dr. Srimathy Kesan | HQ: Chennai.",
    "trap": "Mission ShakthiSAT reach (12,000 girls from 108 countries).",
    "interviewQ": null,
    "secId": "sec5",
    "id": "note-sec5-319",
    "date": "2026-07-17",
    "hook": "Engages 12,000 young girls from 108 countries to build a lunar satellite.",
    "title": "GBU, Space Kidz India, and IN-SPACe Launch Mission ShakthiSAT (World's 1st All-Girls Lunar Satellite)",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "GBU, Space Kidz India, and IN-SPACe Launch Mission ShakthiSAT (World's 1st All-Girls Lunar Satellite)",
          "Official Appointment",
          "Mission Scope: World's 1st all-girls international satellite mission to the Moon."
        ]
      ]
    }
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Platform Portal: trlcompass.in launched by Principal Scientific Adviser Prof.",
      "Ajay Kumar Sood.",
      "National Framework: Standardises 9-level TRL scale to support ANRF and Research, Development & Innovation (RDI) Fund."
    ],
    "staticGk": "Data Security Council of India (DSCI) is a non-profit body set up by NASSCOM.",
    "trap": "TRL scale levels (9 levels) vs platform developer (DSCI + Office of PSA).",
    "interviewQ": null,
    "secId": "sec5",
    "id": "note-sec5-320",
    "date": "2026-07-18",
    "hook": "India's 1st unified 9-level framework for assessing Technology Readiness Levels in deep-tech.",
    "title": "Office of PSA and DSCI Launch TRL Compass Platform (trlcompass.in)",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "Office of PSA and DSCI Launch TRL Compass Platform (trlcompass.in)",
          "Official Appointment",
          "Platform Portal: trlcompass.in launched by Principal Scientific Adviser Prof. Ajay Kumar Sood."
        ]
      ]
    }
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Flight Validation: 1st operational validation of Satellite-Based Landing System (SLS) on a commercial jet in India.",
      "GAGAN SBAS: GAGAN developed by ISRO & AAI; 4th SBAS system in the world (after US WAAS, Europe EGNOS, Japan MSAS)."
    ],
    "staticGk": "DGCA Director General: Vir Vikram Yadav | HQ: New Delhi.",
    "trap": "4th SBAS system globally (GAGAN) vs 1st commercial jet trial in India.",
    "interviewQ": null,
    "secId": "sec5",
    "id": "note-sec5-321",
    "date": "2026-07-19",
    "hook": "IndiGo Airbus A320 completes GAGAN-aided LPV landing at Maharana Pratap Airport, Udaipur.",
    "title": "DGCA Supervises India's 1st Satellite-Based Landing System Trial on Mainline Commercial Aircraft",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "DGCA Supervises India's 1st Satellite-Based Landing System Trial on Mainline Commercial Aircraft",
          "Official Appointment",
          "Flight Validation: 1st operational validation of Satellite-Based Landing System (SLS) on a commercial jet in India."
        ]
      ]
    }
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Narcotics Roadmap: Released 3-year Vision Document on Narcotics Control (2026-2029).",
      "Seizure Statistics: Drug seizures rose to 11.8 million kg (2014-2026) valued at ₹1,84,000 crore."
    ],
    "staticGk": "Narcotics Control Bureau (NCB) Director General: Anurag Garg.",
    "trap": null,
    "interviewQ": null,
    "secId": "sec4",
    "id": "note-sec4-322",
    "date": "2026-07-20",
    "hook": "Destroys ₹6,000 crore worth of seized narcotics during Online Drug Disposal Fortnight.",
    "title": "10th NCORD Meeting Chaired by Amit Shah: Releases Vision Document on Narcotics Control 2026-2029"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Constitutional Body: Central Council of Health and Family Welfare (CCHFW) constituted under Article 263.",
      "Policy Documents: Operational Guidelines on National Ambulance Services (NAS 2026), SUMAN Roadmap 2030, and SSBSK child health program.",
      "Digital DPI: Aarogya Setu 2.0, eSushrut@clinic (C-DAC), Ayushman Sarathi chatbot, UHI, and Drug Registry."
    ],
    "staticGk": "1.85 lakh Ayushman Arogya Mandirs operational across India.",
    "trap": "CCHFW constitutional basis (Article 263) vs SUMAN target year (2030).",
    "interviewQ": null,
    "secId": "sec4",
    "id": "note-sec4-323",
    "date": "2026-07-21",
    "hook": "Apex health council constituted under Article 263 launches digital health DPI initiatives.",
    "title": "16th CCHFW Conference Chaired by J.P. Nadda: Launches SUMAN Roadmap 2030 and Aarogya Setu 2.0"
  },
  {
    "tier": "Tier A",
    "bullets": [
      "Global Rankings: Finland #1 for 2nd year, followed by Sweden & Denmark; South Sudan bottom.",
      "India Performance: India ranks 94th with score of 68.3/100 (up from 99th in 2025 and 112th in 2015).",
      "Key Challenges: Zero Hunger (SDG 2) most pressing concern; per capita CO2 emissions 2.21 tonnes."
    ],
    "staticGk": "NITI Aayog tracks domestic SDG progress via SDG India Index.",
    "trap": "India SDG rank 2026 (94th) vs 2025 (99th) vs overall score (68.3).",
    "interviewQ": null,
    "secId": "sec4",
    "id": "note-sec4-324",
    "date": "2026-07-22",
    "hook": "India climbs 18 places since 2015 with 33.3% of SDG targets on track for 2030.",
    "title": "SDSN Sustainable Development Report 2026: Finland Ranks #1; India Ranks 94th (Score 68.3)"
  },
  {
    "interviewQ": null,
    "title": "Digital India Programme Completes 11 Years: UPI Handles 81% of India Digital Payments",
    "tier": "Tier A",
    "staticGk": "Digital India launched July 1, 2015 by PM Modi across 9 core pillars.",
    "id": "note-sec2-325",
    "bullets": [
      "Digital Milestones: Internet connections rose to 1.02 billion (from 250M in 2015); UPI processed 24,162 crore transactions in FY26 (49% of global real-time digital payments).",
      "Electronics & Chips: Electronics manufacturing reached ₹13 lakh crore (3rd-largest export category); India Semiconductor Mission approved 12 projects with ₹1.64 lakh crore investment pipeline.",
      "Global DPI Model: DigiLocker, UMANG, eSanjeevani, and DIKSHA (2 crore users) exported via 'India Stack Global'."
    ],
    "hook": "Quadruples internet connections to 1.02 billion as electronics manufacturing reaches ₹13 lakh crore.",
    "secId": "sec2",
    "trap": "UPI share of domestic digital payments (81%) vs share of global real-time digital transactions (49%).",
    "date": "2026-07-08"
  },
  {
    "interviewQ": null,
    "title": "ZSI 111th Foundation Day: Discovers 709 New Faunal Records (India Total 1,05,953 Species)",
    "tier": "Tier A",
    "staticGk": "Zoological Survey of India (ZSI) established July 1, 1916 | Director: Dr. Dhriti Banerjee | HQ: Kolkata.",
    "id": "note-sec4-326",
    "bullets": [
      "Faunal Biodiversity: 709 new faunal records added in 2025 (483 new to science, 226 new to India), raising India's total faunal wealth to 1,05,953 species.",
      "State Leader: Kerala led regional species discoveries (98 new species), followed by West Bengal, Karnataka, and Arunachal Pradesh.",
      "Digital Platforms: Launched 'Fauna of India Checklist 3.0' and 'PaleoIndia Portal' (specimen fossil mapping across 28 states and 8 UTs)."
    ],
    "hook": "Releases 'Animal Discoveries 2025' and 'Fauna of India Checklist 3.0' at Kolkata summit.",
    "secId": "sec4",
    "trap": "New faunal records added (709) vs total species documented in India (1,05,953).",
    "date": "2026-07-09"
  },
  {
    "interviewQ": null,
    "title": "Ministry of Cooperation 5th Foundation Day: Plans Cooperative Life Insurance & 'Sahakar Taxi'",
    "tier": "Tier A",
    "staticGk": "Ministry of Cooperation formed July 6, 2021 | Minister: Amit Shah.",
    "id": "note-sec4-327",
    "bullets": [
      "Cooperative Life Insurance: Plans dedicated cooperative life insurer building on IFFCO-Tokio general insurance model.",
      "Sahakar Taxi Aggregator: Establishes utility aggregator cooperative on lines of 'Bharat Taxi' (0.63M drivers, 3.58M registered users).",
      "Infrastructure & Seeds: Transferred 135 godowns (75,000 tonnes capacity) and signed BBSSL-ICAR MoU for certified seed tissue culture."
    ],
    "hook": "Announces utility aggregator cooperative for ride-hailing and converts 50,000 PACS into e-PACS.",
    "secId": "sec4",
    "trap": null,
    "date": "2026-07-10"
  },
  {
    "interviewQ": null,
    "title": "APSRTC to Electrify 10,660 Bus Fleet by 2029 under SEMP 4.0 & Introduces 'Dry Lease' Model",
    "tier": "Tier A",
    "staticGk": "Andhra Pradesh CM: N. Chandrababu Naidu | Capital: Amaravati.",
    "id": "note-sec1-328",
    "bullets": [
      "Electrification Mandate: APSRTC electrifying entire 10,660 bus fleet by 2029 under AP Sustainable Electric Mobility Policy 4.0.",
      "PM eBus Sewa Sanction: Centre sanctioned 1,050 electric buses (₹145.3 crore grant, CESL GCC model across 11 cities).",
      "Dry Lease Innovation: APSRTC introducing India's 1st 'Dry Lease' model for 1,450 electric buses to utilize surplus drivers."
    ],
    "hook": "First Indian state transport corporation to introduce a 'Dry Lease' model for 1,450 electric buses.",
    "secId": "sec1",
    "trap": "PM eBus Sewa central sanction (1,050 buses) vs APSRTC dry lease procurement (1,450 buses).",
    "date": "2026-07-11"
  },
  {
    "interviewQ": null,
    "title": "SEBI Replaces ₹10 Lakh Annual Custodian Fee with ₹85,000 Monthly Fee Mechanism",
    "tier": "Tier A",
    "staticGk": "SEBI received ₹175.80 crore in custodian fees in FY26.",
    "id": "note-sec2-329",
    "bullets": [
      "Revised Fee Formula: Custodians will pay ₹85,000/month or 0.0000416% AUC (whichever higher) effective October 1, 2026.",
      "Previous Fee Structure: Replaces annual fee of ₹10 lakh or 0.0005% AUC.",
      "Payment Schedule: Monthly fee must be remitted within 15 days of month-end."
    ],
    "hook": "Amends Custodian Regulations to charge ₹85,000/month or 0.0000416% Assets Under Custody.",
    "secId": "sec2",
    "trap": "Monthly custodian fee (₹85,000 / 0.0000416% AUC) vs previous annual fee (₹10 lakh / 0.0005% AUC).",
    "date": "2026-07-12"
  },
  {
    "interviewQ": null,
    "title": "CCI Imposes ₹126.87 Crore Penalty on HP India Sales for GeM Bid-Rigging",
    "tier": "Tier A",
    "staticGk": "Competition Commission of India (CCI) Chairperson: Ravneet Kaur | Est 2003.",
    "id": "note-sec2-330",
    "bullets": [
      "Cartelisation Fine: CCI imposed ₹126.87 crore penalty on HP India Sales Pvt Ltd under Section 27 of Competition Act 2002.",
      "Reseller Penalties: Combined penalty of ₹1.22 crore on 5 colluding resellers (Delphi Infosolutions, Digitech, Orbit Techsol, Hind Technocare, Krishna Computer).",
      "Printer Supplies Fine: Separate ₹11.98 crore penalty imposed on HP India for GeM printer cartridge cartelisation."
    ],
    "hook": "Fines HP India and 5 resellers for cartelisation in GeM PC and printer cartridge procurement.",
    "secId": "sec2",
    "trap": "PC cartelisation penalty (₹126.87 crore) vs printer cartridge penalty (₹11.98 crore).",
    "date": "2026-07-13"
  },
  {
    "interviewQ": null,
    "title": "India & Japan Sign 1st Bilateral Defence Agreement for 'UNICORN' Integrated Radio Mast",
    "tier": "Tier A",
    "staticGk": "BEL Chairman & MD: Manoj Jain | HQ: Bengaluru, Karnataka.",
    "id": "note-sec4-331",
    "bullets": [
      "Inaugural Defence Deal: 1st bilateral agreement for joint defence equipment development signed at 16th India-Japan Annual Summit.",
      "UNICORN Technology: Bharat Electronics Limited (BEL) to manufacture UNICORN (Unified Complex Radio Antenna) integrated mast for Mogami-class frigates.",
      "Radar Stealth: Encloses communication antennas into a single mast, significantly reducing warship radar signatures."
    ],
    "hook": "BEL to manufacture Japan's UNICORN stealth shipborne mast in India for naval frigates.",
    "secId": "sec4",
    "trap": null,
    "date": "2026-07-14"
  },
  {
    "interviewQ": null,
    "title": "DAC Accords Acceptance of Necessity (AoN) for ₹52,000 Crore Capital Defence Acquisitions",
    "tier": "Tier A",
    "staticGk": "Defence Acquisition Council (DAC) chaired by Defence Minister Rajnath Singh | Est 2001.",
    "id": "note-sec4-332",
    "bullets": [
      "Army Cleared Systems (6): 'Akash Tarang' anti-UAV EW system, MPATGM, MRSAM, V-SHORADS, Active Protection System, jet Kamikaze drones.",
      "Navy Approved Proposals (3): Multi Influence Ground Mine (MIGM), Naval Shipborne UAS (NSUAS), Land-Based Testing Facility (LBTF).",
      "Air Force Approval: Fixed-Wing High Altitude Pseudo Satellite (FW-HAPS) operating at 18-20 km stratosphere altitude."
    ],
    "hook": "Clears Akash Tarang anti-UAV system, MPATGM, MRSAM, V-SHORADS, and FW-HAPS pseudo-satellite.",
    "secId": "sec4",
    "trap": "Total AoN value (₹52,000 crore) vs total FY26 approved proposals (₹6.73 lakh crore).",
    "date": "2026-07-15"
  },
  {
    "interviewQ": null,
    "title": "NITI Aayog Releases 'Strategic Roadmap for Making Ayurveda Global' by 2047",
    "tier": "Tier A",
    "staticGk": "NITI Aayog Vice Chairman: Suman Bery / Dr. Ashok Kumar Lahiri | CEO: B.V.R. Subrahmanyam.",
    "id": "note-sec2-333",
    "bullets": [
      "3-Pillar Framework: Availability, Acceptability, and Propagation (prepared with PwC).",
      "Export Growth: Ayurvedic exports rose from .09 billion (2014) to .16 billion (2023) across 150 countries.",
      "Key Recommendations: WHO-aligned Global Ayurveda Register, World Federation for Ayurveda & Yoga, and export Ayurvedic Pharmacopoeia."
    ],
    "hook": "3-pillar framework targeting formal Ayurveda recognition across 20 national healthcare systems.",
    "secId": "sec2",
    "trap": "Ayurvedic exports 2023 (.16 billion) vs 2047 target (20 national healthcare systems).",
    "date": "2026-07-16"
  },
  {
    "interviewQ": null,
    "title": "MoE PGI-S 2.0 & PGI-D Report: Chandigarh Tops School Education for 5th Consecutive Year",
    "tier": "Tier A",
    "staticGk": "PGI-S evaluates school education across 1,000 points and 70 indicators.",
    "id": "note-sec4-334",
    "bullets": [
      "State Leader: Chandigarh topped PGI-S 2.0 for 5th straight year (only entity in 'Uttam-3' grade).",
      "Sharpest Improvement: Meghalaya climbed 2 grades to 'Akanshi-1' (score rose from 448 to 525.7).",
      "District Level: 19 districts reached 'Uttam-2' grade (led by 7 from Punjab)."
    ],
    "hook": "Chandigarh sole UT/State in 'Uttam-3' category; Meghalaya records sharpest improvement.",
    "secId": "sec4",
    "trap": "State PGI-S scale (1,000 points) vs District PGI-D scale (600 points).",
    "date": "2026-07-17"
  },
  {
    "interviewQ": null,
    "title": "MoE UDISE+ 2025-26 Report: Pupil-Teacher Ratio Improves to 10-21 Across Key Stages",
    "tier": "Tier A",
    "staticGk": "UDISE+ (Unified District Information System for Education Plus) covers 14.8 lakh schools and 26 crore students.",
    "id": "note-sec4-335",
    "bullets": [
      "Pupil-Teacher Ratio (PTR): 10 at foundational level, 12 at preparatory, 17 at middle, 21 at secondary (all better than NEP 30:1 target).",
      "Enrolment & Dropouts: Secondary GER rose to 71.7% (from 68.5%); secondary dropout rate fell to 7% (from 8.2%); female teaching staff 54.9%.",
      "Single-Teacher Reduction: Single-teacher schools fell to 1,00,843; zero-enrolment schools dropped 29% to 5,663."
    ],
    "hook": "Teacher count rises to 1.02 crore as secondary Gross Enrolment Ratio touches 71.7%.",
    "secId": "sec4",
    "trap": "NEP recommended PTR (30:1) vs secondary level actual PTR (21:1).",
    "date": "2026-07-18"
  },
  {
    "interviewQ": null,
    "title": "WIPO World Intangible Investment Report: India Records World's Highest Growth (7.9% YoY)",
    "tier": "Tier A",
    "staticGk": "Published jointly by WIPO and Luiss Business School | Sweden most intangible-intensive economy.",
    "id": "note-sec2-336",
    "bullets": [
      "Growth Leader: India recorded highest intangible investment growth (7.9% YoY to .2B) among top 15 economies.",
      "Asset Breakdown: Software & databases (45%), organisational capital (21.8%), R&D (12.7%), brands (9.3%), design (11%).",
      "Global Intangibles: Total global intangible investment exceeded  trillion for 1st time in 2025."
    ],
    "hook": "India's intangible investment touches .2 billion as software & databases account for 45%.",
    "secId": "sec2",
    "trap": "Software & database share of Indian intangibles (45%) vs R&D share (12.7%).",
    "date": "2026-07-19"
  },
  {
    "interviewQ": null,
    "title": "WDMMA 2026 Global Air Power Rankings: IAF Ranked 3rd Powerful Nation & 6th Service Branch",
    "tier": "Tier A",
    "staticGk": "WDMMA evaluates 129 air services across 103 countries using TruVal Rating (TVR).",
    "id": "note-sec4-337",
    "bullets": [
      "Country Ranking: India ranked 3rd military aviation nation globally (behind US 1st and Russia 2nd).",
      "Branch Ranking: IAF ranked 6th overall (TruVal 69.4), outranking China PLAAF (63.8, 7th) for 5th straight year.",
      "Fleet Strength: IAF operates 1,716 aircraft (542 fighters, 498 helicopters, 282 transport, 374 trainers) across 29 fighter squadrons."
    ],
    "hook": "IAF TruVal rating of 69.4 outranks China's PLAAF for 5th consecutive year.",
    "secId": "sec4",
    "trap": "IAF country rank (3rd globally) vs individual service branch rank (6th, TruVal 69.4).",
    "date": "2026-07-20"
  },
  {
    "interviewQ": null,
    "title": "Drugs Rules 1945 Amended: High-Alcohol Formulations (>12% v/v) Moved to Schedule H1",
    "tier": "Tier A",
    "staticGk": "Drugs and Cosmetics Act 1940 regulates drug manufacturing and licensing in India.",
    "id": "note-sec2-338",
    "bullets": [
      "Licensing Mandate: Formulations containing >12% v/v ethyl alcohol in quantities >30 mL removed from Schedule K exemption.",
      "Schedule H1 Shift: Moved to Schedule H1 under Drugs Rules 1945 requiring mandatory prescription and record-keeping."
    ],
    "hook": "Restricts over-the-counter sale of high-alcohol tinctures to prescription-only Registered Medical Practitioners.",
    "secId": "sec2",
    "trap": "Schedule K exemption removal threshold (>12% v/v ethyl alcohol & >30 mL quantity).",
    "date": "2026-07-21"
  },
  {
    "interviewQ": null,
    "title": "QCI & NSIC Sign 5-Year MoU to Connect ZED-Certified MSMEs to Global Mart",
    "tier": "Tier A",
    "staticGk": "Quality Council of India (QCI) Chairman: Jaxay Shah | NSIC CMD: Dr. Subhransu Sekhar Acharya.",
    "id": "note-sec1-339",
    "bullets": [
      "Strategic Integration: Combines QCI accreditation with NSIC network to link ZED-certified MSMEs to MSME Global Mart.",
      "Economic Impact: India's 6.5 crore MSMEs employ ~28 crore people and contribute ~30% of GDP."
    ],
    "hook": "Integrates MSME ZED Certification Scheme with MSME Global Mart for 6.5 crore MSMEs.",
    "secId": "sec1",
    "trap": "MSME GDP contribution (~30%) vs employment (~28 crore people).",
    "date": "2026-07-22"
  },
  {
    "interviewQ": null,
    "title": "DoP & TRAI Sign MoU for Village-Level Telecom Survey Across 5.68 Lakh Villages",
    "tier": "Tier A",
    "staticGk": "TRAI Chairman: Anil Kumar Lahoti | Established under TRAI Act 1997.",
    "id": "note-sec1-340",
    "bullets": [
      "Audit Scale: Field survey assessing mobile network performance of Airtel, Jio, Vi, and BSNL across 5.68 lakh villages.",
      "Execution Mechanism: Department of Posts conducts field operations; TRAI provides survey app and technical monitoring."
    ],
    "hook": "Department of Posts uses nationwide postal network to conduct India's largest rural telecom audit.",
    "secId": "sec1",
    "trap": "Survey village coverage (5.68 lakh villages) vs executing agency (Department of Posts).",
    "date": "2026-07-23"
  },
  {
    "interviewQ": null,
    "title": "West Bengal Launches 'PMCSPY' ₹313.30 Crore Special Package for Tea Garden Workers",
    "tier": "Tier A",
    "staticGk": "Nodal Agency: North Bengal Development Department (NBDD).",
    "id": "note-sec1-341",
    "bullets": [
      "Package Outlay: ₹313.30 crore special assistance package under Pradhan Mantri Cha Shramik Protsahan Yojana.",
      "Three Pillars: Cha Shramik Shiksha Yojana (₹177 cr), Swasthya Suraksha (₹72 cr), and Aashray Yojana (₹63 cr for 321 resting sheds)."
    ],
    "hook": "Allocates ₹177 crore for Cha Shramik Shiksha and constructs 321 modern resting sheds.",
    "secId": "sec1",
    "trap": "Education allocation (₹177 cr) vs healthcare (₹72 cr) vs resting sheds (₹63 cr).",
    "date": "2026-07-24"
  },
  {
    "interviewQ": null,
    "title": "Government Approves Pan-India Rollout of ₹60,000 Crore 'PM-SETU' ITI Skilling Scheme",
    "tier": "Tier A",
    "staticGk": "National Steering Committee chaired by MSDE Secretary Debashree Mukherjee.",
    "id": "note-sec1-342",
    "bullets": [
      "National Rollout: ₹60,000 crore PM-SETU (Pradhan Mantri Skilling & Employability Transformation through Upgraded ITIs) rolled out across 200 clusters.",
      "Strategic Investment Plans: Cleared 5 SIPs worth ₹1,237.58 crore to upgrade ITI clusters in Odisha, Gujarat, and Telangana."
    ],
    "hook": "Upgrades 200 ITI clusters with ₹1,237.58 crore initial Strategic Investment Plans.",
    "secId": "sec1",
    "trap": "Total scheme outlay (₹60,000 crore) vs initial 5-cluster SIP outlay (₹1,237.58 crore).",
    "date": "2026-07-25"
  },
  {
    "interviewQ": null,
    "title": "ECLGS 5.0 Guarantees Reach ₹1.55 Lakh Crore Across 4,11,497 Issued Guarantees",
    "tier": "Tier A",
    "staticGk": "ECLGS (Emergency Credit Line Guarantee Scheme) managed by NCGTC under DFS.",
    "id": "note-sec1-343",
    "bullets": [
      "Guarantee Progress: 4,11,497 guarantees issued totaling ₹1,55,229 crore (around ₹1.55 lakh crore).",
      "MSME Share: MSMEs account for 98% of total guarantee count and 82% of total guaranteed amount.",
      "Borrowing Limits: Additional credit up to 20% working capital (cap ₹100 cr for MSMEs; cap ₹1,500 cr for airlines)."
    ],
    "hook": "MSMEs account for 98% of total guarantees under Cabinet-approved ₹18,100 crore outlay.",
    "secId": "sec1",
    "trap": "MSME guarantee count share (98%) vs MSME guaranteed amount share (82%).",
    "date": "2026-07-26"
  },
  {
    "interviewQ": null,
    "title": "UP Launches 'Mukhyamantri Shikshak Cashless Chikitsa Yojana' (₹5 Lakh Medical Cover)",
    "tier": "Tier A",
    "staticGk": "Uttar Pradesh is the first state to provide comprehensive cashless medical and social security to its entire teaching workforce.",
    "id": "note-sec4-344",
    "bullets": [
      "Cashless Benefit: Up to ₹5 lakh per year medical cover at empanelled hospitals for 15 lakh basic/secondary teachers and staff.",
      "SBI Social Security MoU: SBI partnership provides group term insurance and accident cover to 10 lakh teachers.",
      "DBT Student Transfer: Transferred ₹1,320 crore via DBT to 1.10 crore students (₹1,200/student for uniforms/stationery)."
    ],
    "hook": "Provides cashless medical treatment up to ₹5 lakh/year for 15 lakh teachers and staff.",
    "secId": "sec4",
    "trap": "Cashless medical cover cap (₹5 lakh/yr) vs student DBT transfer (₹1,200/student).",
    "date": "2026-07-27"
  },
  {
    "interviewQ": null,
    "title": "Adani Defence Lays Foundation for ₹2,500 Crore Missile Complex in Shivpuri (MP)",
    "tier": "Tier A",
    "staticGk": "Adani Defence & Aerospace CEO: Ashish Rajvanshi | HQ: Ahmedabad.",
    "id": "note-sec4-345",
    "bullets": [
      "Private Ecosystem: ₹2,500 crore missile complex built across 3 years in Shivpuri, Madhya Pradesh.",
      "Backward Integration: Combines missile assembly with composite propellant and TNT explosive manufacturing under one roof."
    ],
    "hook": "Establishes South Asia's largest private-sector backward-integrated missile manufacturing facility.",
    "secId": "sec4",
    "trap": null,
    "date": "2026-07-28"
  },
  {
    "interviewQ": null,
    "title": "Fortune India Most Powerful Women 2026: Nita Ambani Ranks #1 Nationally",
    "tier": "Tier A",
    "staticGk": "Fortune India MPW list evaluates 100 women leaders across business, finance, and policy.",
    "id": "note-sec7-346",
    "bullets": [
      "Rank #1: Nita M.",
      "Ambani (Founder & Chairperson of Reliance Foundation) ranked #1 in Fortune India MPW 2026 list.",
      "Key Recognition: Marks her 2nd major recognition of 2026 following AAPI Humanitarian Award & Key to City of Tampa."
    ],
    "hook": "Recognizes top 100 female leaders shaping India's economic and business landscape.",
    "secId": "sec7",
    "trap": null,
    "date": "2026-07-29",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Fortune India Most Powerful Women 2026: Nita Ambani Ranks #1 Nationally",
          "Rank #1: Nita M. Ambani (Founder & Chairperson of Reliance Foundation) ranked #1 in Fortune India MPW 2026 list.",
          "Fortune India MPW list evaluates 100 women leaders across business, finance, and policy."
        ]
      ]
    }
  },
  {
    "title": "Cabinet Approves 'Semicon 2.0' Scheme with ₹1,27,500 Crore Outlay",
    "staticGk": "India Semiconductor Mission (ISM) established under Ministry of Electronics & IT.",
    "secId": "sec1",
    "interviewQ": "\"What are the key enhancements introduced in Semicon 2.0 compared to Semicon 1.0?\"\n💡 **Model Answer: Semicon 2.0 expands total outlay to ₹1.27 lakh crore, introduces differentiated 25%-40% capex subsidies across 6 pillars, and focuses heavily on indigenous IP chip design and equipment manufacturing.**",
    "id": "note-sec1-347",
    "date": "2026-07-16",
    "trap": "Silicon fab fiscal subsidy (40%) vs compound semiconductor subsidy (35%) vs packaging subsidy (25%).",
    "bullets": [
      "Financial Outlay: ₹1,27,500 crore total budget outlay structured across 6 strategic pillars.",
      "Differentiated Subsidies: 40% support on eligible capex for silicon fabrication plants; 35% for compound semiconductors/display fabs; 35% for advanced packaging; 25% for conventional packaging (ATMP/OSAT).",
      "Private Investment Impact: Expected to catalyze an additional ₹4 lakh crore in private semiconductor investment.",
      "First Fab Timeline: India's 1st commercial semiconductor fabrication plant scheduled for commissioning in 2028."
    ],
    "hook": "Provides 40% fiscal subsidy for silicon fabs and 35% for compound semiconductors.",
    "tier": "Tier A"
  },
  {
    "title": "Union Cabinet Approves 'Mobile Phone Manufacturing Scheme (MPMS)' with ₹62,500 Crore Outlay",
    "staticGk": "MPMS succeeds PLI Scheme for Large Scale Electronics Manufacturing (PLI-LSEM) which concluded March 2026.",
    "secId": "sec1",
    "interviewQ": null,
    "id": "note-sec1-348",
    "date": "2026-07-17",
    "trap": "Base sales incentive (2.25%–5%) vs component sourcing incentive (1.5%) vs R&D design incentive (3%).",
    "bullets": [
      "Scheme Outlay & Tenure: ₹62,500 crore budget outlay running for 5 years from FY 2026-27 to FY 2030-31.",
      "Incentive Tiers: Differentiated sales incentives of 2.25% to 5%; additional 1.5% incentive for domestic component sourcing; 3% incentive for product design R&D.",
      "Electronics Export Milestone: Smartphones emerged as India's single largest exported product category in 2025 (99.2% of domestic phones built in India)."
    ],
    "hook": "5-year scheme (FY27 to FY31) targeting ₹39 lakh crore mobile production and 60,000 direct jobs.",
    "tier": "Tier A"
  },
  {
    "title": "Gujarat Launches India's 1st State-Level 'Viksit Gujarat Data Centre Policy 2026-29'",
    "staticGk": "Gujarat CM: Bhupendra Patel | Target .5 trillion state economy by 2047.",
    "secId": "sec4",
    "interviewQ": null,
    "id": "note-sec4-349",
    "date": "2026-07-18",
    "trap": "India global data generation share (~20%) vs global data centre capacity share (~3%).",
    "bullets": [
      "Policy Targets: Aims to attract ₹6 lakh crore investment and develop 7.5 GW (up to 8 GW) data centre capacity.",
      "Fiscal Incentives: Capital/interest subsidies, power tariff support, SGST reimbursement, and 20-year tax holiday alignment.",
      "Data Infrastructure Gap: India generates ~20% of global data but holds only ~3% of global data centre capacity (US & China hold 70%)."
    ],
    "hook": "Targets ₹6 lakh crore investment and 7.5 GW data centre capacity in Gandhinagar.",
    "tier": "Tier A"
  },
  {
    "title": "Madhya Pradesh Cabinet Approves Draft 'Madhya Pradesh Uniform Civil Code (UCC) 2026'",
    "staticGk": "UCC Committee headed by retired SC Judge Ranjana Prakash Desai | Article 44 DPSP.",
    "secId": "sec4",
    "interviewQ": "\"How does the MP Uniform Civil Code 2026 handle live-in relationships and tribal exemptions?\"\n💡 **Model Answer: It mandates live-in registration within 1 month with legal rights for children, while completely exempting Scheduled Tribes under Part XXI of the Constitution.**",
    "id": "note-sec4-350",
    "date": "2026-07-19",
    "trap": "UCC applicability (Exempts Scheduled Tribes) vs live-in registration default penalty (up to 3 months imprisonment).",
    "bullets": [
      "4th UCC State: Madhya Pradesh becomes 4th state after Uttarakhand, Gujarat, and Assam to approve a draft Uniform Civil Code.",
      "Draft Provisions: Bans Triple Talaq, halala, and polygamy; mandates live-in relationship registration within 1 month (3 months jail for default); grants equal inheritance to children born of live-in/surrogacy.",
      "Exemption: Strictly exempts Scheduled Tribes (Bhil, Gond, Korku, Baiga, Sahariya, Bharia) and Part XXI protected groups."
    ],
    "hook": "4th Indian state to adopt a UCC framework, setting marriage age at 21 (men) and 18 (women).",
    "tier": "Tier A"
  },
  {
    "title": "Andhra Pradesh Launches 'Pillale Sampada' (Children are Wealth) Population Initiative",
    "staticGk": "Andhra Pradesh CM: N. Chandrababu Naidu | Per capita target ₹55 lakh by 2047.",
    "secId": "sec4",
    "interviewQ": null,
    "id": "note-sec4-351",
    "date": "2026-07-20",
    "trap": "Incentive for 3rd child (₹30,000) vs 4th child (₹40,000).",
    "bullets": [
      "Demographic Incentive: Financial assistance of ₹30,000 for 3rd child birth and ₹40,000 for 4th child birth.",
      "Policy Vision: Tackles declining fertility and rapid population ageing in southern states under 'Swarna Andhra 2047'."
    ],
    "hook": "Offers ₹30,000 for 3rd child and ₹40,000 for 4th child to tackle declining fertility.",
    "tier": "Tier A"
  },
  {
    "title": "NITI Aayog Releases First-Ever 'Investment Friendliness Index (IFI) 2026': Gujarat Ranks #1",
    "staticGk": "IFI index announced in Union Budget 2025-26 | NITI Aayog CEO: B.V.R. Subrahmanyam.",
    "secId": "sec2",
    "interviewQ": null,
    "id": "note-sec2-352",
    "date": "2026-07-21",
    "trap": "Large States 1st rank (Gujarat 56.6) vs Hilly States 1st rank (Uttarakhand) vs UTs 1st rank (Goa).",
    "bullets": [
      "Large States Ranking: Gujarat #1 (56.6/100), Maharashtra #2 (53.7), Tamil Nadu #3 (53.3).",
      "Category Winners: Uttarakhand #1 among Hilly/NE States; Goa #1 among UTs and City States.",
      "Evaluation Pillars: Assesses 28 states & 8 UTs across 84 indicators spanning 8 pillars (infrastructure, regulatory ease, fiscal health)."
    ],
    "hook": "Gujarat tops Large States with 56.6 score; Uttarakhand tops Hilly/NE states.",
    "tier": "Tier A"
  },
  {
    "title": "NITI Aayog Releases Bioeconomy Roadmap 2035: Targets  Billion Bioeconomy by 2035",
    "staticGk": "Union Science Minister: Dr. Jitendra Singh | India currently 4.8% GDP bioeconomy.",
    "secId": "sec2",
    "interviewQ": null,
    "id": "note-sec2-353",
    "date": "2026-07-22",
    "trap": "Bioeconomy 2035 target ( billion) vs 2047 target (.6 trillion).",
    "bullets": [
      "Bioeconomy Targets: Projects growth from .3B (2025) to  by 2035 and .6 trillion by 2047 (8-10% of  GDP).",
      "6 National BioMissions: GeneIndia, AgriBio 2.0, BioX Foundry, One Health Grid, Marine Biotechnology, BioPharmaNext.",
      "Fund Allocation: Proposes ₹50,000-crore BioEconomy Growth Fund (2026-2035) to bridge lab-to-market commercialisation."
    ],
    "hook": "Recommends ₹50,000-crore BioEconomy Growth Fund across 6 National BioMissions.",
    "tier": "Tier A"
  },
  {
    "title": "Chhattisgarh Passes 'Chhattisgarh Ease of Doing Business Act 2026'",
    "staticGk": "Chhattisgarh CM: Vishnu Deo Sai | Capital: Raipur.",
    "secId": "sec4",
    "interviewQ": null,
    "id": "note-sec4-354",
    "date": "2026-07-23",
    "trap": null,
    "bullets": [
      "Risk-Based Approvals: Replaces uniform approvals with risk-based self-certification for low-risk businesses and deemed approvals for larger units.",
      "Initial Scope: Encompasses 43 services across 8 state government departments."
    ],
    "hook": "First Indian state to introduce a comprehensive risk-based and trust-based business permission system.",
    "tier": "Tier A"
  },
  {
    "title": "Goa Amends Public Gambling Act 1976: Fixes Minimum Casino Entry Age at 21",
    "staticGk": "Goa CM: Pramod Sawant | Capital: Panaji.",
    "secId": "sec4",
    "interviewQ": null,
    "id": "note-sec4-355",
    "date": "2026-07-24",
    "trap": "Casino minimum age (21 years) vs late license fee penal interest (18% p.a.).",
    "bullets": [
      "Age Restriction: Mandates minimum entry age of 21 years for designated casino licensed zones.",
      "Late Fee Penalty: Imposes 18% annual penal interest on operators for delayed annual recurring license fees."
    ],
    "hook": "Restricts casino gambling access across 6 offshore vessels and onshore venues to age 21+.",
    "tier": "Tier A"
  },
  {
    "title": "EPFO Launches 'VISHWAS 2026' One-Time Penalty & Damages Dispute Resolution Scheme",
    "staticGk": "EPFO CEO: Ramesh Krishnamurthi | Established 1952.",
    "secId": "sec2",
    "interviewQ": null,
    "id": "note-sec2-356",
    "date": "2026-07-25",
    "trap": "VISHWAS 2026 scheme duration (6 months) vs default cutoff date (June 14, 2024).",
    "bullets": [
      "Dispute Settlement: One-time resolution scheme for penalty disputes under Sec 14B EPF Act 1952 and Sec 128 Code on Social Security 2020.",
      "Reduced Damages Scale: Defaults before June 14, 2024 get reduced damages of 0.25%/month (up to 2 months), 0.50%/month (2-4 months), and 1%/month (>4 months)."
    ],
    "hook": "Operational for 6 months to settle Sec 14B EPF penalty disputes with reduced damages.",
    "tier": "Tier A"
  },
  {
    "title": "MoHUA Approves Operational Guidelines for ₹9,585 Crore 'PARIVARTAN Scheme'",
    "staticGk": "Implementing Ministry: Ministry of Road Transport & Highways | Target Region: NCR.",
    "secId": "sec4",
    "interviewQ": null,
    "id": "note-sec4-357",
    "date": "2026-07-26",
    "trap": "Total scheme outlay (₹9,585 crore) vs central budgetary support (₹5,041 crore).",
    "bullets": [
      "Outlay & Central Support: ₹9,585 crore total outlay including ₹5,041 crore central budgetary support.",
      "Incentive Package: Motor vehicle tax waivers, 5% interest subvention on vehicle loans, min 8% OEM discount, and Certificate of Deposit (CoD) trading."
    ],
    "hook": "Accelerates replacement of polluting NCR trucks and buses with BS-VI or electric vehicles.",
    "tier": "Tier A"
  },
  {
    "title": "MoSPI Releases 'PAIMANA' Infrastructure Monitoring Dashboard (165 Indicators)",
    "staticGk": "PAIMANA replaces 20-year-old OCMS-2006 system.",
    "secId": "sec2",
    "interviewQ": null,
    "id": "note-sec2-358",
    "date": "2026-07-27",
    "trap": "2036 energy storage target (888 GWh) vs FY28 baseline (87 GWh).",
    "bullets": [
      "Dashboard Scope: PAIMANA (Project Assessment, Infrastructure Monitoring & Analytics for Nation-building) tracks 165 indicators across 6 sub-sectors.",
      "Energy Storage Forecast: India's energy storage requirement projected to rise 10x to 888 GWh by FY36 (from 87 GWh in FY28).",
      "Teledensity: National teledensity improved to 93.26% in FY26 as mobile towers reached 8.55 lakh."
    ],
    "hook": "Replaces OCMS-2006 to track power, civil aviation, telecom, rail, roads, and ports.",
    "tier": "Tier A"
  },
  {
    "title": "DoT & TSDSI Sign MoU under ₹203 Crore 'TDIP Scheme' for Bharat 6G Standardisation",
    "staticGk": "Telecom Minister: Jyotiraditya M. Scindia | Bharat 6G Mission target 2030.",
    "secId": "sec5",
    "interviewQ": null,
    "id": "note-sec5-359",
    "date": "2026-07-28",
    "trap": "Startup support limit (98% for turnover ≤ ₹10 cr) vs mid-sized MSME support limit (80%).",
    "bullets": [
      "TDIP Scheme Outlay: ₹203 crore outlay (2026-2031) under Technology Development and Investment Promotion Scheme.",
      "Financial Support: Up to 98% funding for startups (turnover ≤ ₹10 cr) and 80% (turnover ₹10 cr – ₹500 cr) to participate in 3GPP, ITU, and oneM2M standards meetings."
    ],
    "hook": "Provides up to 98% financial support to Indian startups/MSMEs for global SDO participation.",
    "tier": "Tier A",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "DoT & TSDSI Sign MoU under ₹203 Crore 'TDIP Scheme' for Bharat 6G Standardisation",
          "Official Appointment",
          "TDIP Scheme Outlay: ₹203 crore outlay (2026-2031) under Technology Development and Investment Promotion Scheme."
        ]
      ]
    }
  },
  {
    "title": "DPIIT Approves 51:49 Joint Venture Between Dixon Technologies & Vivo Mobile India",
    "staticGk": "DPIIT Secretary: Amardeep Singh Bhatia | Ministry of Commerce & Industry.",
    "secId": "sec5",
    "interviewQ": null,
    "id": "note-sec5-360",
    "date": "2026-07-29",
    "trap": "Dixon controlling stake (51%) vs Vivo stake (49%).",
    "bullets": [
      "Equity Ratio: Dixon Technologies holds 51% controlling stake; Vivo Mobile India holds 49%.",
      "Manufacturing Scale: Dixon operates 17 manufacturing facilities in India."
    ],
    "hook": "Dixon holds 51% controlling stake in ₹5 crore JV for domestic smartphone manufacturing.",
    "tier": "Tier A",
    "miniGrid": {
      "headers": [
        "Appointee / Official",
        "New Position & Organization",
        "Key Context & Details"
      ],
      "rows": [
        [
          "DPIIT Approves 51:49 Joint Venture Between Dixon Technologies & Vivo Mobile India",
          "Official Appointment",
          "Equity Ratio: Dixon Technologies holds 51% controlling stake; Vivo Mobile India holds 49%."
        ]
      ]
    }
  },
  {
    "title": "MCD & NDDB Sign MoU for 3 Compressed Bio-Gas (CBG) Plants in Delhi",
    "staticGk": "Yamuna Rejuvenation Target: Zero untreated wastewater entering Yamuna by Dec 2028.",
    "secId": "sec4",
    "interviewQ": null,
    "id": "note-sec4-361",
    "date": "2026-07-30",
    "trap": "Cow dung procurement rate (₹1/kg) vs Yamuna zero-wastewater target (Dec 2028).",
    "bullets": [
      "CBG Plant Locations: Nangli, Ghoga-Goyla, and Ghazipur waste management facilities in Delhi.",
      "Livestock Owner Payout: Livestock owners receive ₹1 per kg of cow dung supplied."
    ],
    "hook": "Converts dairy cow dung into CBG at Nangli, Ghoga-Goyla, and Ghazipur to clean Yamuna.",
    "tier": "Tier A"
  },
  {
    "title": "Arunachal Pradesh & Norway's Tidal Sail AS Sign MoU for 500 kW River Kinetic Plant",
    "staticGk": "Arunachal Pradesh CM: Pema Khandu | Capital: Itanagar.",
    "secId": "sec4",
    "interviewQ": null,
    "id": "note-sec4-362",
    "date": "2026-07-31",
    "trap": null,
    "bullets": [
      "Project Capacity: 500 kW River Kinetic Energy Demonstration Project.",
      "Technology Advantage: Generates electricity directly from river currents without requiring dams or civil barriers."
    ],
    "hook": "Establishes India's 1st river kinetic energy demonstration project generating power from river currents.",
    "tier": "Tier A"
  },
  {
    "trap": "Wild-capture marine fishing subsidies (covered) vs aquaculture and inland fisheries (excluded).",
    "staticGk": "WTO Ministerial Conference (12th MC) adopted agreement in Geneva in June 2022.",
    "hook": "Commerce Secretary deposits Instrument of Acceptance to curb harmful wild-capture subsidies.",
    "tier": "Tier A",
    "secId": "sec1",
    "interviewQ": null,
    "id": "note-sec1-363",
    "title": "India Accepts WTO Fisheries Subsidies Agreement (123rd Member)",
    "bullets": [
      "Acceptance Milestone: India becomes 123rd WTO member to accept Agreement on Fisheries Subsidies.",
      "Coverage Scope: Curbs subsidies for IUU (illegal, unreported, unregulated) fishing; strictly excludes aquaculture and inland fisheries.",
      "Effective Date: Entered into force Sept 15, 2025 after 2/3rd WTO member acceptance."
    ],
    "date": "2026-07-24"
  },
  {
    "trap": "Lakadong cultivation target (7,000 hectares) vs target Lakadong economy by FY29 (₹100 crore).",
    "staticGk": "Lakadong Turmeric carries GI tag and contains 7%-12% natural curcumin.",
    "hook": "Scales world's highest naturally occurring curcumin turmeric to a ₹100 crore economy by FY29.",
    "tier": "Tier A",
    "secId": "sec4",
    "interviewQ": null,
    "id": "note-sec4-364",
    "title": "MDoNER & Meghalaya Launch 'Mission Golden Spice' for Lakadong Turmeric (₹175.45 Crore)",
    "bullets": [
      "Outlay & Roadmap: ₹175.45 crore 5-year convergence project (2025-2030) under 'Unlock Economic Potential of Northeast'.",
      "Cultivation Target: Triples cultivation area to 7,000 hectares, benefiting 17,500 farmers (99% women) in Jaintia Hills."
    ],
    "date": "2026-07-25"
  },
  {
    "trap": "BSMR-200 site (Tarapur, Maharashtra) vs HTGCR site (Visakhapatnam, AP).",
    "staticGk": "SHANTI Act 2025 opened India's nuclear sector to private participation.",
    "hook": "BARC develops BSMR-200, SMR-55, and HTGCR models with ₹20,000 crore total SMR outlay.",
    "tier": "Tier A",
    "secId": "sec1",
    "interviewQ": null,
    "id": "note-sec1-365",
    "title": "DAE Target: 5 Indigenous Small Modular Reactors (SMRs) Operational by 2033 under SHANTI Act",
    "bullets": [
      "3 SMR Models: BSMR-200 (220 MWe, Tarapur), SMR-55 (55 MWe, Tarapur), and HTGCR (5 MWth gas-cooled, Visakhapatnam).",
      "Capacity Target: Nuclear capacity expanding from 8.78 GW to 22 GW (2031-32) and 100 GW by 2047 under SHANTI Act 2025."
    ],
    "date": "2026-07-26"
  },
  {
    "trap": "0% tariff phase (2 years) vs 100% phase (1 year) vs 200% phase (permanent after 2029).",
    "staticGk": "India supplies 65% of US birth control pill prescriptions (Glenmark & Lupin).",
    "hook": "Imposes zero-percent tariff for 2 years (from Aug 2026), 100% in Aug 2028, and 200% in Aug 2029.",
    "tier": "Tier A",
    "secId": "sec1",
    "interviewQ": null,
    "id": "note-sec1-366",
    "title": "US President Donald Trump Announces Phased 200% Tariff Policy on Generic Drug Imports",
    "bullets": [
      "Phased Tariff Schedule: 0% tariff (Aug 2026 – July 2028), 100% (Aug 2028 – July 2029), 200% (from Aug 2029).",
      "India Impact: Impacts >40% of India's .5 billion generic pharma exports to the US."
    ],
    "date": "2026-07-27"
  },
  {
    "trap": "Discounted issue price (~₹10,296 crore) vs maturity face value (₹20,000 crore).",
    "staticGk": "NaBFID (National Bank for Financing Infrastructure and Development) est 2021 | HQ: Mumbai.",
    "hook": "Approves issuance of 20 lakh zero-coupon infrastructure bonds at discounted price of ₹10,296.12 crore.",
    "tier": "Tier A",
    "secId": "sec3",
    "interviewQ": null,
    "id": "note-sec3-367",
    "title": "CBDT Notifies 10-Year Zero Coupon Bonds for NaBFID (₹20,000 Crore Maturity Value)",
    "bullets": [
      "Bond Structure: 20 lakh 10-year zero-coupon deep discount bonds approved under Sec 2(112) Income Tax Act 2025.",
      "Financial Details: Discounted issue price ~₹10,296.12 crore for ₹20,000 crore maturity value (issuance on/before March 31, 2028)."
    ],
    "date": "2026-07-28"
  },
  {
    "trap": "Nifty 500 Ahimsa constituent count (326 stocks) vs base value (1,000).",
    "staticGk": "BSE introduced 'Saatvik 100 Index' in June 2026.",
    "hook": "India's 1st animal-cruelty-free thematic stock market index based on AIM framework.",
    "tier": "Tier A",
    "secId": "sec3",
    "interviewQ": null,
    "id": "note-sec3-368",
    "title": "NSE Indices Launches 'Nifty 500 Ahimsa Index' (326 Animal-Cruelty-Free Stocks)",
    "bullets": [
      "Index Composition: 326 stocks selected from Nifty 500 universe using Ahimsa Investment Movement (AIM) Green-band screening.",
      "Base Date & CAGR: Base date April 1, 2016 (base value 1,000); delivered 15.11% CAGR since inception."
    ],
    "date": "2026-07-29"
  },
  {
    "trap": "BHAVYA Rasayan outlay (₹3,030 crore for 3 chemical parks) vs BHAVYA industrial parks outlay (₹33,660 crore).",
    "staticGk": "Distinct from BHAVYA scheme (₹33,660 cr for 100 industrial parks approved March 2026).",
    "hook": "Provides ₹1,000 crore grant per park to build common infrastructure across 3 chemical hubs.",
    "tier": "Tier A",
    "secId": "sec1",
    "interviewQ": null,
    "id": "note-sec1-369",
    "title": "Cabinet Approves 'BHAVYA Rasayan' Scheme (₹3,030 Crore for 3 Chemical Parks)",
    "bullets": [
      "Scheme Outlay: ₹3,030 crore financial outlay over 5 years (FY27 to FY31) from Union Budget FY27.",
      "Park Requirements: Grant up to ₹1,000 cr per park (min ₹500 cr state contribution); min area 2,000 acres (8 sq km).",
      "Chemical Sector Rank: India ranks 6th globally and 3rd in Asia in chemical production (contributes 7% to GDP)."
    ],
    "date": "2026-07-30"
  },
  {
    "trap": "New base year (2022-23) vs combined core industries weightage in IIP (32.88%).",
    "staticGk": "Office of Economic Adviser (DPIIT) compiles monthly Index of Core Industries.",
    "hook": "Increases core industries count from 8 to 9; combined IIP weightage set at 32.88%.",
    "tier": "Tier A",
    "secId": "sec1",
    "interviewQ": "\"Why did DPIIT add Iron Ore as the 9th core industry and update the base year to 2022-23?\"\n💡 **Model Answer: To align core industry tracking with updated 2022-23 macroeconomic bases (GDP, WPI, IIP) and reflect iron ore's critical role in India's expanding steel manufacturing.**",
    "id": "note-sec1-370",
    "title": "DPIIT Revises Index of Core Industries (ICI) Base Year to 2022-23 & Adds 'Iron Ore' as 9th Core Industry",
    "bullets": [
      "Base Year Revision: Base year updated to 2022-23 (replacing 2011-12 base) to align with GDP, WPI, and IIP.",
      "9th Core Industry: 'Iron Ore' added as 9th core industry (Coal, Crude Oil, Natural Gas, Refinery Products, Fertilisers, Steel, Cement, Electricity, Iron Ore).",
      "IIP Weightage: Combined weight of 9 core industries in IIP stands at 32.88% (down from 40.27%)."
    ],
    "date": "2026-07-31"
  },
  {
    "trap": "India-Sri Lanka PPT effective date (April 1, 2027) vs original treaty date (2013).",
    "staticGk": "OECD BEPS: Base Erosion and Profit Shifting framework.",
    "hook": "OECD BEPS anti-abuse provision empowered to deny tax treaty benefits for tax avoidance.",
    "tier": "Tier A",
    "secId": "sec1",
    "interviewQ": null,
    "id": "note-sec1-371",
    "title": "India & Sri Lanka Amend DTAA Protocol to Incorporate 'Principal Purpose Test (PPT)'",
    "bullets": [
      "DTAA Protocol Amendment: Incorporates Principal Purpose Test (PPT) into 2013 India-Sri Lanka tax treaty.",
      "Anti-Abuse Rule: Allows tax authorities to deny treaty benefits if primary purpose of a deal is gaining tax advantage.",
      "Effective Date: Applies to income derived in India on or after April 1, 2027."
    ],
    "date": "2026-07-01"
  },
  {
    "trap": null,
    "staticGk": "HCLTech CEO: C Vijayakumar | Odisha CM: Mohan Charan Majhi.",
    "hook": "1st AI-optimised data centre at upcoming Odisha Sovereign AI Park in Bhubaneswar.",
    "tier": "Tier A",
    "secId": "sec4",
    "interviewQ": null,
    "id": "note-sec4-372",
    "title": "HCLTech, Sarvam AI, & Odisha Sign ₹14,257 Crore MoU for AI-Optimised Data Centre",
    "bullets": [
      "Project Outlay: ₹14,257 crore (.7 billion) capital outlay supported by Odisha Government.",
      "Technology Integration: Combines HCLTech full-stack AI with Sarvam AI foundation models; houses 5,000 jobs by 2028."
    ],
    "date": "2026-07-02"
  },
  {
    "trap": null,
    "staticGk": "EIL CMD: Atul Gupta | Critical Minerals include Lithium, Cobalt, Nickel, Neodymium.",
    "hook": "CSIR-IMMT designated Centre of Excellence for critical minerals processing (lithium, cobalt, REEs).",
    "tier": "Tier A",
    "secId": "sec1",
    "interviewQ": null,
    "id": "note-sec1-373",
    "title": "Engineers India Ltd & CSIR-IMMT Partner under National Critical Mineral Mission (NCMM)",
    "bullets": [
      "NCMM CoE: CSIR-IMMT Bhubaneswar designated Centre of Excellence for critical minerals.",
      "4 Research Areas: Mineral processing joint R&D, technology scale-up, pilot plants, and technical training."
    ],
    "date": "2026-07-03"
  },
  {
    "trap": "Electricity consumption cap (2,400 units/yr) vs maximum children limit (3 children).",
    "staticGk": "Delhi CM: Rekha Gupta | 1st installment released on Raksha Bandhan.",
    "hook": "Replaces Mahila Samriddhi Yojana with 1st instalment of ₹2,500 on August 28.",
    "tier": "Tier A",
    "secId": "sec4",
    "interviewQ": null,
    "id": "note-sec4-374",
    "title": "Delhi Govt Rolls Out 'Delhi Lakshmi Yojana' (₹2,500/Month for Women)",
    "bullets": [
      "Financial Benefit: ₹2,500/month for eligible women (aged 21-60, resident for 10+ years).",
      "Eligibility Caps: Family electricity usage ≤ 2,400 units/year, annual income ≤ ₹2.5 lakh, max 3 living children."
    ],
    "date": "2026-07-04"
  },
  {
    "trap": "DISHA 2.0 outlay (₹255 crore) vs DISHA 1.0 outlay (₹250 crore).",
    "staticGk": "DISHA 1.0 ran 2021-2026 with ₹250 crore outlay | Department of Justice.",
    "hook": "Integrates Tele-Law (14454), Nyaya Bandhu, and VIDHI-Sanjeevani with AI 'Nyaya Setu' chatbot.",
    "tier": "Tier A",
    "secId": "sec2",
    "interviewQ": null,
    "id": "note-sec2-375",
    "title": "Ministry of Justice Restructures 'DISHA 2.0' Scheme (₹255 Crore Outlay for 2026-2031)",
    "bullets": [
      "Financial Outlay: ₹255 crore Central Sector Scheme outlay for 2026-27 to 2030-31.",
      "4 Integrated Pillars: Tele-Law (toll-free 14454), Nyaya Bandhu Pro Bono, Legal Literacy, and VIDHI-Sanjeevani.",
      "AI Integration: VIDHI-Sanjeevani integrates with 22-language AI voice chatbot 'Nyaya Setu'."
    ],
    "date": "2026-07-05"
  },
  {
    "trap": "PM-Vidyalaxmi subvention loan cap (₹10 lakh) vs CGFSEL credit guarantee cap (₹7.5 lakh).",
    "staticGk": "PM-Vidyalaxmi scheme approved by Cabinet in November 2024.",
    "hook": "Provides 3% interest subvention for education loans up to ₹10 lakh (family income ≤ ₹8 lakh).",
    "tier": "Tier A",
    "secId": "sec1",
    "interviewQ": null,
    "id": "note-sec1-376",
    "title": "PM-Vidyalaxmi Scheme Sanctions 1,12,817 Education Loans Worth ₹15,634 Crore",
    "bullets": [
      "Sanctioned Loans: 1,12,817 collateral-free and guarantor-free loans worth ₹15,634 crore as of July 2026.",
      "Interest Subvention: 3% interest subvention on loans up to ₹10 lakh for family income ≤ ₹8 lakh p.a.",
      "PM-USP CGFSEL Guarantee: Department of Higher Education scheme issued 14.65 lakh guarantees worth ₹59,843.74 crore (75% default cover up to ₹7.5 lakh)."
    ],
    "date": "2026-07-06"
  },
  {
    "trap": "1st rank in acreage (38% world share) vs 2nd rank in cotton production/consumption.",
    "staticGk": "Cotton Corporation of India (CCI) procured 105.09 lakh bales valued at ₹41,530 crore in 2025-26.",
    "hook": "Accounts for 38% of world cotton acreage; 2026-27 MSP raised to ₹8,267 (medium) and ₹8,667 (long).",
    "tier": "Tier A",
    "secId": "sec1",
    "interviewQ": null,
    "id": "note-sec1-377",
    "title": "Ministry of Textiles Factsheet: India Ranks 1st Globally in Cotton Cultivation Area (114.84 Lakh Hectares)",
    "bullets": [
      "Global Ranks: India ranks 1st globally in cotton acreage (114.84 lakh hectares, 38% world share) and 2nd in production/consumption.",
      "Species Cultivation: India is the only country cultivating all 4 recognised cotton species.",
      "MSP & Mission Outlay: 2026-27 MSP ₹8,267/quintal (medium-staple) and ₹8,667 (long-staple); 5-year 'Mission for Cotton Productivity' outlay ₹5,659.22 crore."
    ],
    "date": "2026-07-07"
  },
  {
    "trap": "Mirabai Chanu CWG gold streak (3rd consecutive: 2018, 2022, 2026).",
    "staticGk": "Glasgow 2026 CWG: India tally 12 medals (2 gold, 7 silver, 3 bronze).",
    "hook": "Mirabai Chanu lifts 190 kg for 3rd consecutive CWG gold; Sharmila Dhankar wins 1st para athletics gold.",
    "tier": "Tier A",
    "secId": "sec6",
    "interviewQ": null,
    "id": "note-sec6-378",
    "title": "Commonwealth Games 2026 (Glasgow): Mirabai Chanu & Sharmila Dhankar Win Gold Medals",
    "bullets": [
      "Mirabai Chanu Gold: Lifted 190 kg (85kg snatch + 105kg clean & jerk) for 3rd straight CWG gold in women's 48kg.",
      "Sharmila Dhankar Gold: Gold in women's shot put F57 para athletics (ending India's 20-year CWG para athletics wait).",
      "Silver Medals: Gulveer Singh (men's 10,000m 27:49.78), Harjinder Kaur (women's 69kg weightlifting 227kg), Sarvesh Kushare (high jump)."
    ],
    "date": "2026-07-08",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Commonwealth Games 2026 (Glasgow): Mirabai Chanu & Sharmila Dhankar Win Gold Medals",
          "Mirabai Chanu Gold: Lifted 190 kg (85kg snatch + 105kg clean & jerk) for 3rd straight CWG gold in women's 48kg.",
          "Glasgow 2026 CWG: India tally 12 medals (2 gold, 7 silver, 3 bronze)."
        ]
      ]
    }
  },
  {
    "tier": "Tier A",
    "title": "Mission Senehjori Launched to Transform Assam Muga Silk Sector by 2028",
    "interviewQ": null,
    "secId": "sec1",
    "trap": null,
    "date": "2026-06-01",
    "hook": "MDoNER Minister Jyotiraditya Scindia launches initiative to position Assam Muga silk in global luxury markets.",
    "bullets": [
      "Mission Mandate: Launched by Ministry of Development of North Eastern Region (MDoNER) for Assam's unique Muga silk.",
      "Global Target: Aims to transform Assam Muga silk into a globally competitive luxury textile ecosystem by 2028."
    ],
    "id": "note-sec1-379",
    "staticGk": "Muga Silk carries GI tag and is produced exclusively in Assam."
  },
  {
    "tier": "Tier A",
    "title": "India Slips to 7th Spot in Global Market Cap Rankings (.9 Trillion)",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "India rank in global market cap (7th) vs top country (US at .1T).",
    "date": "2026-06-02",
    "hook": "South Korea and Taiwan overtake India in stock market valuation as US leads with .1 trillion.",
    "bullets": [
      "Global Rankings: US #1 (.1T), China #2 (.3T), Japan #3 (.9T), Hong Kong #4 (.6T), South Korea #6 (+), India #7 (.9T).",
      "Rank Shift: India slipped three places after being overtaken by Hong Kong, Taiwan, and South Korea."
    ],
    "id": "note-sec2-380",
    "staticGk": "India's market capitalization stands at .9 trillion."
  },
  {
    "tier": "Tier A",
    "title": "Kotak Mahindra Bank Reports Highest Leverage Ratio (16.56%) Among Asia-Pacific Lenders",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "Kotak Bank leverage ratio (16.56%) vs HDFC Bank (11.14%).",
    "date": "2026-06-03",
    "hook": "S&P Global data places Kotak Bank #1 among banks with assets over  billion.",
    "bullets": [
      "Leverage Leader: Kotak Mahindra Bank reported 16.56% leverage ratio as of March 31, 2026.",
      "Peer Comparison: HDFC Bank (11.14%), ICICI Bank (10.84%), Axis Bank (9.28%).",
      "Australian banks lowest.",
      "Financial Definition: Lower leverage ratio indicates a financially accountable business with constant revenue stream."
    ],
    "id": "note-sec2-381",
    "staticGk": "Kotak Mahindra Bank MD & CEO: Ashok Vaswani | HQ: Mumbai."
  },
  {
    "tier": "Tier A",
    "title": "India Becomes World's 2nd-Largest Solar Market Crossing 155 GW Capacity",
    "interviewQ": null,
    "secId": "sec1",
    "trap": null,
    "date": "2026-06-04",
    "hook": "Overtakes US in annual solar additions as total solar capacity grows 5,370% since 2014.",
    "bullets": [
      "Global Rank: India emerged as world's 2nd-largest solar market in 2025 annual additions (announced by Bhupender Yadav).",
      "Capacity Surge: Solar capacity reached 155 GW (up from 2.8 GW in 2014)."
    ],
    "id": "note-sec1-382",
    "staticGk": "National Solar Mission launched in 2010 under MNRE."
  },
  {
    "tier": "Tier A",
    "title": "FEMA Rules Amended: Overseas Individual Portfolio Investment Limit Raised to 10%",
    "interviewQ": "\"What is the significance of the 2026 FEMA Non-Debt Instruments amendment for foreign retail investors?\"\n💡 **Model Answer: It doubles individual portfolio investment caps in listed Indian companies from 5% to below 10% and extends NRI/OCI investment privileges to all non-resident individuals.**",
    "secId": "sec2",
    "trap": "Individual PROI cap (below 10%) vs aggregate limit for all non-residents (24%).",
    "date": "2026-06-05",
    "hook": "Amends Non-Debt Instruments Rules 2019, doubling individual non-resident holding limits in listed equities.",
    "bullets": [
      "Individual Holding Cap: Maximum holding for individual overseas investor (PROI) in a listed company raised from 5% to below 10%.",
      "Aggregate Limit: Combined holding of all overseas investors increased from 10% to 24%.",
      "Coverage Expansion: Extends portfolio investment route to all individual Persons Resident Outside India (PROIs) at par with NRIs and OCIs."
    ],
    "id": "note-sec2-383",
    "staticGk": "FEMA (Non-Debt Instruments) Rules 2019 governed by Department of Economic Affairs, Ministry of Finance."
  },
  {
    "tier": "Tier A",
    "title": "PFRDA Launches 'StAR NPS' Digital Onboarding Framework Developed by BSE Technologies",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "StAR NPS age eligibility (18 to 85 years) vs registration fee (₹200).",
    "date": "2026-06-06",
    "hook": "Streamlines digital account opening with ₹200 registration fee for individuals aged 18 to 85.",
    "bullets": [
      "Digital Platform: StAR NPS operationalised for Points of Presence (PoPs) to digitise NPS enrolment.",
      "Fee & Eligibility: Registration fee fixed at ₹200 + tax for resident Indians aged 18 to 85 years.",
      "Sandbox Net Worth: Non-registered sandbox applicants require ₹10 lakh minimum net worth."
    ],
    "id": "note-sec2-384",
    "staticGk": "PFRDA Chairperson: Sivasubramanian Ramann | HQ: New Delhi."
  },
  {
    "tier": "Tier A",
    "title": "India-UK CETA and Social Security Agreement (DCC) Enter Force on July 15, 2026",
    "interviewQ": null,
    "secId": "sec1",
    "trap": "DCC social security exemption duration (5 years, up from 3 years).",
    "date": "2026-06-07",
    "hook": "Unlocks immediate duty-free access on 99% of tariff lines and extends social security exemption to 5 years.",
    "bullets": [
      "Trade Accord: India-UK Comprehensive Economic and Trade Agreement (CETA) in force July 15, 2026.",
      "Social Security (DCC): Double Contribution Convention (DCC) extends social security exemption from 3 to 5 years.",
      "Tariff Relief: Provides immediate duty-free market access on 99% of Indian export tariff lines."
    ],
    "id": "note-sec1-385",
    "staticGk": "UK Prime Minister: Keir Starmer | Capital: London."
  },
  {
    "tier": "Tier A",
    "title": "EPF Deposit Interest Rate Retained at 8.25% for FY26 (3rd Consecutive Year)",
    "interviewQ": null,
    "secId": "sec2",
    "trap": null,
    "date": "2026-06-08",
    "hook": "Central Board of Trustees ratifies 8.25% interest rate on provident fund deposits.",
    "bullets": [
      "Ratified Rate: Government ratified 8.25% interest rate on EPF deposits for 2025-26 (3rd consecutive year).",
      "Statutory Body: CBT EPF established under Section 5A of EPF & MP Act 1952 (5-year tenure)."
    ],
    "id": "note-sec2-386",
    "staticGk": "EPFO works under Ministry of Labour and Employment | CEO: Ramesh Krishnamurthi."
  },
  {
    "tier": "Tier A",
    "title": "FCRA Rules Tightened: NGOs Must Spend Min ₹10 Lakh Foreign Funds Over 2 Years for Renewal",
    "interviewQ": null,
    "secId": "sec1",
    "trap": "Renewal spend requirement (₹10 lakh over 2 yrs) vs prior permission release threshold (75% utilisation).",
    "date": "2026-06-09",
    "hook": "Restricts foreign fund usage to predefined categories and bars foreign nationals as key functionaries.",
    "bullets": [
      "Functionary Exclusion: NGOs with foreign nationals (except PIOs) ineligible for FCRA registration without central approval.",
      "Renewal Expenditure: NGOs must spend at least ₹10 lakh foreign funds over past 2 financial years to renew registration.",
      "Utilisation Threshold: Next foreign fund instalment released only after 75% of previous instalment is utilised."
    ],
    "id": "note-sec1-387",
    "staticGk": "FCRA 2010 regulated by Ministry of Home Affairs."
  },
  {
    "tier": "Tier A",
    "title": "MCA Launches 'Corporate Mitra' Scheme for MSME Compliance Training",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "Age limit (30 yrs) vs online course duration (150 hrs) vs fee (₹3,000 + GST).",
    "date": "2026-06-10",
    "hook": "Offers 150 hours SWAYAM Plus online learning + 6 months on-job training for graduates up to 30 years old.",
    "bullets": [
      "Eligibility & Course: Open to graduates up to 30 yrs old; 150 hrs SWAYAM Plus + 6 months on-job training.",
      "Fee & Concession: Fee ₹3,000 + GST (50% concession for women and NE/Himalayan/Island candidates).",
      "Institutional Partners: Rollout via IIT Madras, IIT Pravartak, ICAI, ICSI, and ICoAI."
    ],
    "id": "note-sec2-388",
    "staticGk": "Union Corporate Affairs Minister: Nirmala Sitharaman."
  },
  {
    "tier": "Tier A",
    "title": "RBI 61st MPC Meeting: Policy Repo Rate Unchanged at 5.25% with Neutral Stance",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "Repo rate (5.25%) vs SDF floor (5.00%) vs MSF ceiling (5.50%).",
    "date": "2026-06-11",
    "hook": "Projects FY27 Real GDP growth at 6.6% and CPI inflation at 5.1%.",
    "bullets": [
      "Rate Decision: Repo rate kept unchanged at 5.25% (SDF 5.00%, MSF/Bank Rate 5.50%) under Neutral stance.",
      "Macro Projections: FY27 Real GDP growth projected at 6.6% (Q1 6.6%, Q2 6.3%, Q3 6.5%, Q4 6.8%); CPI inflation 5.1%."
    ],
    "id": "note-sec2-389",
    "staticGk": "RBI Governor: Sanjay Malhotra (26th Governor) | MPC constituted under Sec 45ZB RBI Act 1934."
  },
  {
    "tier": "Tier A",
    "title": "RBI Eases FPI G-Sec Investment Norms & Merges General/Long-Term Limits",
    "interviewQ": null,
    "secId": "sec2",
    "trap": null,
    "date": "2026-06-12",
    "hook": "Removes short-term, security-wise, and concentration limits for FPIs under General Route.",
    "bullets": [
      "Limit Removal: Withdrew short-term, security-wise, and concentration limits for FPI G-Sec investments.",
      "Limit Merging: Merged general and long-term sub-limits into a single limit for Central & State Government Securities (SGSs).",
      "FAR Designation: Designated 15-yr, 30-yr, and 40-yr G-Secs under Fully Accessible Route (FAR)."
    ],
    "id": "note-sec2-390",
    "staticGk": "Fully Accessible Route (FAR) allows un-capped FPI investment in specified G-Secs."
  },
  {
    "tier": "Tier A",
    "title": "RBI Recognises 'Sahamati' as Self-Regulatory Organisation for Account Aggregator Ecosystem",
    "interviewQ": null,
    "secId": "sec2",
    "trap": null,
    "date": "2026-06-13",
    "hook": "Sahamati becomes official SRO for NBFC-Account Aggregator network powering consent-based data sharing.",
    "bullets": [
      "SRO Recognition: RBI recognised Sahamati (not-for-profit entity) as SRO for Account Aggregator ecosystem.",
      "AA Framework: Consent-based financial data sharing launched Sept 2, 2021; enabled ₹3.5 lakh crore lending in FY26."
    ],
    "id": "note-sec2-391",
    "staticGk": "Account Aggregators operate under RBI NBFC-AA regulations."
  },
  {
    "tier": "Tier A",
    "title": "India Q4 FY26 Current Account Surplus Touches .1 Billion (0.7% of GDP)",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "Q4 surplus (.1B / 0.7% GDP) vs full-year CAD (.2B / 0.6% GDP).",
    "date": "2026-06-14",
    "hook": "Full-year FY26 Current Account Deficit narrows to .2 billion (0.6% of GDP).",
    "bullets": [
      "Q4 Surplus: Current account recorded .1 billion surplus (0.7% GDP) in Jan-March Q4 FY26.",
      "Full-Year CAD: FY26 CAD stood at .2 billion (0.6% GDP), down from .9B.",
      "Net Inflows & Forex: Net FDI inflows .9 billion in FY26; forex reserves rose .2 billion in Q4."
    ],
    "id": "note-sec2-392",
    "staticGk": "Balance of Payments (BoP) compiled quarterly by RBI."
  },
  {
    "tier": "Tier A",
    "title": "RBI Exempts Fresh 3-5 Year FCNR(B) Deposits from CRR and SLR Maintenance",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "FCNR(B) reserve exemption deposit tenor (3 to 5 years) vs swap facility rate (1.5% p.a.).",
    "date": "2026-06-15",
    "hook": "Temporarily removes reserve requirements on fresh FCNR(B) deposits to boost dollar inflows till Sept 30, 2026.",
    "bullets": [
      "Reserve Exemption: Fresh FCNR(B) deposits (tenor 3 to 5 years) mobilized between June 8 and Sept 30, 2026 exempted from CRR and SLR.",
      "USD-INR Forex Swap: Introduced US Dollar-Rupee Forex Swap facility for PSU ECBs and bank OFCBs (min 3-yr tenor, up to 5 yrs) at 1.5% p.a."
    ],
    "id": "note-sec2-393",
    "staticGk": "CRR under Sec 42(1) RBI Act; SLR under Sec 24 Banking Regulation Act."
  },
  {
    "tier": "Tier A",
    "title": "RBI Permits Commercial Banks to Lend to Registered REITs & InvITs (49% Exposure Cap)",
    "interviewQ": "\"Analyze RBI's framework allowing bank lending to REITs and InvITs.\"\n💡 **Model Answer: It permits bank financing up to 49% of asset value while enforcing an 80% positive cash-flow rule, prohibiting bullet repayments, and capping exposure at 10% of capital base.**",
    "secId": "sec2",
    "trap": "REIT exposure asset value cap (49%) vs capital base sub-limit (10%) vs positive cash flow requirement (80%).",
    "date": "2026-06-16",
    "hook": "Commercial Banks Third Amendment Directions 2026 allows bank lending to SEBI-registered REITs.",
    "bullets": [
      "Exposure Ceiling: Overall bank exposure to a REIT/InvIT capped at 49% of asset value; sub-limit capped at 10% of bank's capital base.",
      "Cash Flow Mandate: Min 80% underlying assets must generate positive operational cash flows for $\\\\ge 1$ year.",
      "Risk Weighting: Standard risk weight 100% (125% for capital market exposure; 150% for Indian bank overseas branches)."
    ],
    "id": "note-sec2-394",
    "staticGk": "REITs regulated under SEBI (Real Estate Investment Trusts) Regulations 2014."
  },
  {
    "tier": "Tier A",
    "title": "SEBI Introduces Dynamic Price Bands for Equity & Commodity ETFs (Effective Sept 1, 2026)",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "Equity ETF initial band (±10%) vs Gold/Silver ETF initial band (±6%).",
    "date": "2026-06-17",
    "hook": "Equity/Debt ETFs get initial ±10% dynamic price band; Gold/Silver ETFs get ±6% initial band.",
    "bullets": [
      "Equity/Debt ETFs: Initial dynamic band ±10%, expandable up to ±20% after 15-minute cooling off.",
      "Bullion ETFs: Gold & Silver ETFs get initial ±6% band, expandable in 3% stages without upper/lower limits.",
      "Pre-Open Auction: Pre-open call auction mechanism introduced for Gold & Silver ETFs."
    ],
    "id": "note-sec2-395",
    "staticGk": "Base price calculated using 30-minute VWAP of previous trading day."
  },
  {
    "tier": "Tier A",
    "title": "RBI Issues Digital Fraud Compensation Framework: 85% Compensation Up to ₹25,000",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "Max compensation cap (₹25,000 or 85% of net loss up to ₹50,000) vs reporting window (5 days).",
    "date": "2026-06-18",
    "hook": "Limits customer liability in small-value digital frauds reported within 5 days to 1930 portal.",
    "bullets": [
      "Compensation Scale: Victims of small-value digital frauds (up to ₹50,000 loss) receive 85% net loss or ₹25,000 (whichever lower).",
      "Reporting SLA: Fraud must be reported to bank & Cyber Crime Helpline 1930 within 5 calendar days.",
      "Investigation Timeline: 45 days for domestic fraud complaints; 60 days for cross-border cases; 5-day shadow reversal for credit card fraud."
    ],
    "id": "note-sec2-396",
    "staticGk": "Framework effective January 1, 2027 under Section 70B Information Technology Act."
  },
  {
    "tier": "Tier A",
    "title": "RBI Fixes ₹1 Lakh Crore Asset Threshold for NBFC Upper Layer Classification",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "NBFC-UL asset threshold (₹1 lakh crore) vs Tata Sons asset size (~₹1.75 lakh crore).",
    "date": "2026-06-19",
    "hook": "Classifies NBFCs with ≥ ₹1 lakh crore assets into Upper Layer (UL) subjecting them to mandatory listing.",
    "bullets": [
      "Asset Size Benchmark: NBFCs with asset size ₹1 lakh crore and above classified into NBFC-UL.",
      "State Risk Weight: 20% risk weight applies to offset exposures backed by State Government guarantees.",
      "Tata Sons Impact: Tata Sons (standalone asset size ~₹1.75 lakh crore) covered under mandatory listing requirement."
    ],
    "id": "note-sec2-397",
    "staticGk": "NBFC Scale-Based Regulation (SBR) framework introduced by RBI in 2021."
  },
  {
    "tier": "Tier A",
    "title": "SEBI Board 214th Meeting: Reintroduces Open-Market Buybacks & Intraday MF Borrowing",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "Buyback execution timeline (66 working days) vs min 1st half fund deployment (40%).",
    "date": "2026-06-20",
    "hook": "Open-market buybacks re-allowed from Aug 1, 2026; MFs allowed intraday borrowing up to 20% net assets.",
    "bullets": [
      "Open-Market Buybacks: Reintroduced from Aug 1, 2026; completed within 66 working days with min 40% funds deployed in 1st half.",
      "MF Intraday Borrowing: MFs permitted intraday borrowing to manage temporary liquidity mismatches (in addition to 20% net asset borrowing limit).",
      "QTP Claims: Introduced Quick Transmission Processing (QTP) for small-value deceased investor claims."
    ],
    "id": "note-sec2-398",
    "staticGk": "SEBI Board meeting held in Mumbai | SEBI Chairman: Tuhin Kanta Pandey."
  },
  {
    "tier": "Tier A",
    "title": "SEBI Tightens Margin Trading Facility (MTF) Rules: Net Worth Limit Raised to ₹5 Crore",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "Broker net worth cap (₹5 crore) vs MTF exposure limit (5.5x net worth).",
    "date": "2026-06-21",
    "hook": "Raises broker net worth requirement from ₹3 crore to ₹5 crore and allows LLPs to offer MTFs.",
    "bullets": [
      "Net Worth Cap: Broker net worth requirement raised from ₹3 crore to ₹5 crore; LLPs permitted.",
      "Locked Net Worth: Locked-away amount = lower of 2x min net worth or 50% total net worth.",
      "Exposure Ceiling: Remaining net worth usable for MTF within overall exposure limit of 5.5x net worth (single client cap 10%)."
    ],
    "id": "note-sec2-399",
    "staticGk": "MTF allows investors to buy stocks by paying a margin while broker funds the rest."
  },
  {
    "tier": "Tier A",
    "title": "RBI Revamps Lead Bank Scheme: Mandates 1 Exclusive LDM Per District",
    "interviewQ": null,
    "secId": "sec1",
    "trap": null,
    "date": "2026-06-22",
    "hook": "Formalises Block Level Bankers' Committee (BLBC) as credit planning foundation.",
    "bullets": [
      "Exclusive LDM: Mandates every lead bank to appoint an exclusive Lead District Manager (LDM) per district.",
      "BLBC Role: Formalises Block Level Bankers' Committee (BLBC) as foundation of district credit planning.",
      "Meeting Timelines: Prescribes uniform meeting schedules for BLBC, DCC, DLRC, and SLBC."
    ],
    "id": "note-sec1-400",
    "staticGk": "Lead Bank Scheme introduced in 1969 based on Gadgil & Nariman Committee recommendations."
  },
  {
    "tier": "Tier A",
    "title": "Int'l MSME Day 2026: Collateral-Free MSE Loan Limit Doubled from ₹10 Lakh to ₹20 Lakh",
    "interviewQ": null,
    "secId": "sec1",
    "trap": "Standard MSE collateral-free limit (₹20 lakh) vs good track record limit (₹25 lakh).",
    "date": "2026-06-23",
    "hook": "RBI Governor notes MSMEs contribute 31% of India's GDP and half of merchandise exports.",
    "bullets": [
      "Collateral Cap Doubled: Mandatory collateral-free loan limit for MSEs doubled from ₹10 lakh to ₹20 lakh (extendable to ₹25 lakh).",
      "Account Aggregator Impact: AA framework facilitated ₹3.5 lakh crore lending in FY26.",
      "Pre-Payment Charge Ban: Commercial banks barred from levying pre-payment penalties on floating-rate MSE loans."
    ],
    "id": "note-sec1-401",
    "staticGk": "International MSME Day celebrated June 27 | MSME sector sustains 32 crore livelihoods."
  },
  {
    "tier": "Tier A",
    "title": "RBI Mandates 100% Collateral-Backed Bank Guarantees for Prop Trading (50% Cash)",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "Total collateral requirement (100%) vs mandatory cash portion (at least 50%).",
    "date": "2026-06-24",
    "hook": "Requires capital market trading bank guarantees to be fully collateralised to curb derivatives leverage.",
    "bullets": [
      "Collateral Rule: Bank guarantees issued to capital market trading firms must be 100% backed by collateral, with at least 50% in cash (effective July 1, 2026).",
      "Market Impact: Reduces leverage for proprietary trading firms accounting for over half of NSE options turnover."
    ],
    "id": "note-sec2-402",
    "staticGk": "RBI Governor: Sanjay Malhotra | NSE MD & CEO: Ashishkumar Chauhan."
  },
  {
    "tier": "Tier A",
    "title": "RBI Draft Directions on Call, Notice & Term Money Markets: SPD Limit Raised to 400%",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "SPD term money limit (400% NOF) vs NBFC term money limit (200% NOF) vs SPD call/notice limit (225%).",
    "date": "2026-06-25",
    "hook": "Allows AIFIs and NBFCs into term money market; caps NBFC term money borrowing at 200% NOF.",
    "bullets": [
      "Entity Expansion: AIFIs and NBFCs (excl Base Layer) permitted to borrow and lend in term money market; corporate entities as lenders.",
      "Borrowing Caps: Standalone Primary Dealers (SPDs) term money limit raised to 400% of Net Owned Funds (NOF); NBFC limit set at 200% NOF.",
      "Platform Mandate: All participants must join NDS-CALL platform within 6 months; OTC deals reported within 15 mins."
    ],
    "id": "note-sec2-403",
    "staticGk": "Call Money (1 day), Notice Money (2-14 days), Term Money (15 days - 1 year)."
  },
  {
    "tier": "Tier A",
    "title": "UPI Launches in Cambodia via KHQR Linkage (10th Global Destination)",
    "interviewQ": null,
    "secId": "sec2",
    "trap": "Cambodia global position (10th country for UPI acceptance).",
    "date": "2026-06-26",
    "hook": "NIPL partners with ACLEDA Bank for cross-border QR payments.",
    "bullets": [
      "Cambodia Linkage: UPI accepted in Cambodia via national QR code KHQR (in partnership with ACLEDA Bank).",
      "10 Countries Tally: Cambodia becomes 10th international destination joining Bhutan, France, Mauritius, Nepal, Singapore, Sri Lanka, UAE, Qatar, and Greece."
    ],
    "id": "note-sec2-404",
    "staticGk": "NPCI International Payments Ltd (NIPL) CEO: Ritesh Shukla."
  },
  {
    "tier": "Tier A",
    "title": "GRSE Kolkata Upgraded to 29th Navratna Central Public Sector Enterprise",
    "interviewQ": null,
    "secId": "sec4",
    "trap": "GRSE Navratna rank (29th) vs Maharatna count in India (14).",
    "date": "2026-06-27",
    "hook": "Department of Public Enterprises upgrades Garden Reach Shipbuilders & Engineers to Navratna status.",
    "bullets": [
      "Navratna Status: GRSE upgraded from Miniratna Category-I to 29th Navratna CPSE.",
      "Financial Autonomy: Grants autonomy to invest up to ₹1,000 crore or 15% of net worth without Cabinet approval."
    ],
    "id": "note-sec4-405",
    "staticGk": "GRSE Chairman & MD: Cdre PR Hari (Retd) | HQ: Kolkata, WB. India has 14 Maharatna CPSEs."
  },
  {
    "tier": "Tier A",
    "title": "PM Modi Conferred Slovakia's Highest Civilian Award 'Order of the White Double Cross'",
    "interviewQ": null,
    "secId": "sec7",
    "trap": null,
    "date": "2026-06-28",
    "hook": "Marks PM Modi's 33rd international honour during State Visit.",
    "bullets": [
      "Award Conferred: 'Order of the White Double Cross (1st Class)', Slovakia's highest civilian honour.",
      "Milestone: 33rd international award conferred on PM Modi (first by independent Slovakia)."
    ],
    "id": "note-sec7-406",
    "staticGk": "Slovakia Capital: Bratislava | Currency: Euro | PM: Robert Fico.",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "PM Modi Conferred Slovakia's Highest Civilian Award 'Order of the White Double Cross'",
          "Award Conferred: 'Order of the White Double Cross (1st Class)', Slovakia's highest civilian honour.",
          "Slovakia Capital: Bratislava | Currency: Euro | PM: Robert Fico."
        ]
      ]
    }
  },
  {
    "tier": "Tier A",
    "title": "R Praggnanandhaa Wins 2026 Norway Chess Title Defeating Magnus Carlsen Twice",
    "interviewQ": null,
    "secId": "sec6",
    "trap": null,
    "date": "2026-06-29",
    "hook": "Becomes 1st Indian champion of Norway Chess since tournament inception in 2013.",
    "bullets": [
      "Title Victory: Indian GM R Praggnanandhaa won 2026 Norway Chess title by defeating Vincent Keymer in the final.",
      "Carlsen Defeats: Defeated 7-time champion and World No. 1 Magnus Carlsen twice in classical chess."
    ],
    "id": "note-sec6-407",
    "staticGk": "Norway Chess established in 2013 in Stavanger, Norway."
  },
  {
    "tier": "Tier A",
    "title": "India's 1st Private Gold Mine Begins Commercial Operations at Jonnagiri (Kurnool, AP)",
    "interviewQ": null,
    "secId": "sec4",
    "trap": null,
    "date": "2026-06-30",
    "hook": "Chief Minister N. Chandrababu Naidu inaugurates Geomysore Services primary gold mining project.",
    "bullets": [
      "Private Gold Mine: India's 1st operational private primary gold mine launched at Swarnagiri (Jonnagiri), Kurnool district, AP.",
      "Operator: Developed and operated by Geomysore Services India Pvt Ltd (GMSI)."
    ],
    "id": "note-sec4-408",
    "staticGk": "Andhra Pradesh CM: N. Chandrababu Naidu | Capital: Amaravati."
  },
  {
    "bullets": [
      "LPPI Benchmark: Evaluates port performance across dry bulk, liquid bulk, and container cargo under 'Sagar Aankalan'.",
      "DGS Digital Modules: Includes 24x7 e-Navik grievance, e-Samudra ship registration, medical practitioner, and ship recycling credit note modules.",
      "Recycling Credit: 40% scrap value credit note provided under ₹70,000 crore maritime development package."
    ],
    "staticGk": "JNPA (Jawaharlal Nehru Port Authority) located in Navi Mumbai | 37th Foundation Day.",
    "secId": "sec1",
    "hook": "Sarbananda Sonowal launches LPPI under 'Sagar Aankalan' framework along with e-Navik and e-Samudra portals.",
    "date": "2026-06-01",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-409",
    "title": "Logistics Port Performance Index (LPPI) FY25 & 4 Digital Modules Launched by DGS",
    "trap": null
  },
  {
    "bullets": [
      "Anchor Partner: ArcelorMittal Nippon Steel India approved for Visakhapatnam ITI cluster under PM-SETU.",
      "PM-SETU Mandate: Upgrades 1,000 government ITIs across India using a hub-and-spoke model.",
      "Steering Committee: National Steering Committee chaired by Skill Secretary Debashree Mukherjee."
    ],
    "staticGk": "AM/NS India Headquarters: Hazira, Gujarat | CEO: Dilip Oommen.",
    "secId": "sec1",
    "hook": "Andhra Pradesh becomes 1st state to operationalise industry-led management of ITIs.",
    "date": "2026-06-02",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-410",
    "title": "AM/NS India Approved as 1st Anchor Partner Under ₹60,000-Cr PM-SETU Scheme",
    "trap": null
  },
  {
    "bullets": [
      "Challenge Mandate: Encourages open-source, voice-first AI solutions operating in low-connectivity environments.",
      "Reference Device: Builds on 'Sunno Sutra', an open-source handheld AI device unveiled at IndiaAI Impact Summit 2026.",
      "Developer Support: 20 shortlisted teams receive developer kits and mentorship."
    ],
    "staticGk": "Digital India BHASHINI Division (DIBD) CEO: Amitabh Nag | HQ: New Delhi.",
    "secId": "sec1",
    "hook": "DIBD MeitY partners with Current AI and Kalpa Impact to offer up to ₹80 lakh in prizes.",
    "date": "2026-06-03",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-411",
    "title": "VYOMA Innovation Challenge Launched for Offline & Multilingual Voice AI Solutions",
    "trap": null
  },
  {
    "bullets": [
      "Budgetary Support: Disbursed as interest-free advances to Oil Marketing Companies (OMCs) for up to 36 months.",
      "Volatility Context: ATF prices surged from ₹60.50/L in March 2026 to ₹142/L in May 2026 due to West Asia crisis.",
      "Cost Impact: ATF accounts for 40% to 60% of airline operating expenses."
    ],
    "staticGk": "Union Civil Aviation Minister: Kinjarapu Rammohan Naidu | MoPNG Minister: Hardeep Singh Puri.",
    "secId": "sec1",
    "hook": "Buffers Scheduled Indian Airlines against 2.5x surge in Aviation Turbine Fuel prices.",
    "date": "2026-06-04",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-412",
    "title": "Cabinet Approves ₹10,000 Crore One-Time ATF Price Stabilisation Corpus for Airlines",
    "trap": "ATF cost share in airline operations (40% to 60%) vs support corpus (₹10,000 crore)."
  },
  {
    "bullets": [
      "Flex-Fuel Debut: Maruti Suzuki Wagon R flex-fuel runs on any blend of ethanol and petrol from E20 to E100.",
      "Target Dispenser Rollout: Government aims to deploy 5,000 E85 fuel dispensers by end of 2027.",
      "Blending Milestone: India reached 20% ethanol blending (E20) threshold in mid-2025, 5 years ahead of target."
    ],
    "staticGk": "Maruti Suzuki MD & CEO: Hisashi Takeuchi | Chairman: R. C. Bhargava.",
    "secId": "sec1",
    "hook": "Hero MotoCorp also launches flex-fuel Splendor Plus and HF Deluxe motorcycles.",
    "date": "2026-06-05",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-413",
    "title": "Maruti Suzuki Launches India's 1st Flex-Fuel Car 'Wagon R' (E20 to E100)",
    "trap": null
  },
  {
    "bullets": [
      "Odisha Coastal Corridor: 160.18-km Rameshwar to Paradip highway under HAM model (₹8,300.79 crore).",
      "Telangana & Bihar Stretches: Armoor-Jagtial-Mancherial (NH-63/563) in Telangana (₹7,597 crore) and Khagaria-Purnea (NH-31/231) in Bihar (₹3,936 crore).",
      "MP Upgrades: Key stretches of NH-347B upgraded under HAM model (₹4,415 crore)."
    ],
    "staticGk": "PM GatiShakti National Master Plan launched in October 2021.",
    "secId": "sec1",
    "hook": "Includes ₹8,300 crore coastal highway between Rameshwar and Paradip in Odisha.",
    "date": "2026-06-06",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-414",
    "title": "CCEA Approves 4 Major Highway Corridors Worth ₹24,200 Crore Under PM GatiShakti",
    "trap": null
  },
  {
    "bullets": [
      "Vibrant Village Model: Chumur village (24 households) developed under 4 pillars: Infrastructure, Livelihoods, All-Weather, and Defence Integration.",
      "Climate Housing: Construction of 24 passive solar, thermally insulated houses with homestay facilities.",
      "Border Altitude: Situated at 16,700 feet along the India-China border."
    ],
    "staticGk": "Vibrant Villages Programme (VVP) launched in 2023 for northern border development.",
    "secId": "sec1",
    "hook": "LG Vinai Kumar Saxena inaugurates 1st of 10 model border villages at 16,700 feet altitude.",
    "date": "2026-06-07",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-415",
    "title": "India's 1st Model Border Village Foundation Laid at Chumur (Ladakh) Under VVP",
    "trap": null
  },
  {
    "bullets": [
      "New Base Year: WPI base year updated to 2022-23=100 by Office of Economic Adviser (OEA), DPIIT.",
      "3 New PPI Series: Output PPI (OPPI), Trial Input PPI (IPPI), and Service PPI (covering 7 Phase-1 services).",
      "SNA Alignment: Aligns Indian price statistics with International Monetary Fund (IMF) and System of National Accounts (SNA) standards."
    ],
    "staticGk": "Office of Economic Adviser functions under DPIIT, Ministry of Commerce & Industry.",
    "secId": "sec2",
    "hook": "Replaces 2011-12 base year to address WPI's 55% GDP service exclusion and double-counting bias.",
    "date": "2026-06-08",
    "interviewQ": "\"Why is India transitioning from Wholesale Price Index (WPI) to Producer Price Index (PPI)?\"\n💡 **Model Answer: WPI excludes services (which account for ~55% of India's GDP) and suffers from double-counting. PPI aligns with international SNA standards by measuring net output prices at the producer level.**",
    "tier": "Tier A",
    "id": "note-sec2-416",
    "title": "WPI Base Year Revised to 2022-23=100 & 3 Producer Price Indices (PPIs) Introduced",
    "trap": "New WPI base year (2022-23=100) vs previous base year (2011-12=100)."
  },
  {
    "bullets": [
      "Silver Restriction: Requires DGFT Import Authorisation for silver powder (71061000), silver grains (71069110), 99.9% silver (71069120), and other silver (71069190).",
      "Nominated Agencies: RBI and DGFT notified agencies, as well as IFSCA-notified jewellers on IIBX, must secure DGFT licences.",
      "Forex Conservation: Designed to curb excessive silver imports and reduce trade deficit pressure."
    ],
    "staticGk": "DGFT (Directorate General of Foreign Trade) Director General: Lav Aggarwal.",
    "secId": "sec2",
    "hook": "Restricts silver powder, grains, and 99.9% silver imports to valid DGFT authorization.",
    "date": "2026-06-09",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec2-417",
    "title": "DGFT Mandates Import Licensing for 4 Specific Silver Categories",
    "trap": null
  },
  {
    "bullets": [
      "VINIMAY Platform: Integrated digital platform launched by Amit Shah under MHA's 'Smart Borders' strategy.",
      "Efficiency Gain: Cuts truck waiting times by 40-60% and gate processing by 22-35%.",
      "Trade Growth: Land port trade surged 16-fold from ₹5,000 crore in 2014 to ₹83,000 crore in 2026."
    ],
    "staticGk": "Land Ports Authority of India (LPAI) Chairman: Jayant Singh | Est 2012.",
    "secId": "sec1",
    "hook": "Digitises 90% paperwork using Single Electronic Window and ANPR gate systems.",
    "date": "2026-06-10",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-418",
    "title": "MHA Launches 'VINIMAY' Land Port Management System for 15 Operational Land Ports",
    "trap": "Operational land ports in India (15) vs total proposed border land ports (74)."
  },
  {
    "bullets": [
      "Quota Reduction: Subsidised 14.2-kg LPG cylinders per beneficiary under PM Ujjwala Yojana cut from 9 to 4 per year.",
      "Subsidy Level: Targeted subsidy of ₹300 per refill (introduced Oct 2023) continues to be credited via DBT.",
      "PMUY Launch: Launched in May 2016 to provide deposit-free LPG connections to adult women from BPL families."
    ],
    "staticGk": "PMUY implemented by Ministry of Petroleum and Natural Gas.",
    "secId": "sec1",
    "hook": "Retains targeted subsidy of ₹300 per 14.2-kg LPG cylinder for poor households.",
    "date": "2026-06-11",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-419",
    "title": "PMUY Annual Subsidised LPG Cylinder Quota Reduced from 9 to 4",
    "trap": "Current subsidised cylinder quota (4 per year) vs original 2016 entitlement (12 per year)."
  },
  {
    "bullets": [
      "Standard Pack Sizes: Prescribes 9 sizes: 200ml/g, 500ml/g, 1L/kg, 2L/kg, 3L/kg, 4L/kg, 5L/kg, 15L/kg, and 20L/kg.",
      "Exemption Window: Packs below 200ml/g and minor/niche edible oils are fully exempt.",
      "Transition SLA: 3-month transition period granted to manufacturers, packers, and importers."
    ],
    "staticGk": "Legal Metrology Act enacted in 2009 under Ministry of Consumer Affairs, Food and Public Distribution.",
    "secId": "sec1",
    "hook": "Mandates standard packaging sizes under Legal Metrology to prevent non-standard price confusion.",
    "date": "2026-06-12",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-420",
    "title": "Consumer Affairs Prescribes 9 Standard Pack Sizes for Edible Oils",
    "trap": null
  },
  {
    "bullets": [
      "VB-GRAMG Framework: Total allocation exceeds ₹1.25 lakh crore, covering 2.80 lakh Gram Panchayats.",
      "MGNREGA Integration: Includes ₹30,000 crore central allocation under MGNREGA 2005.",
      "Top State Allocations: Uttar Pradesh (₹9,721 cr), West Bengal (₹8,508 cr), Andhra Pradesh (₹7,707 cr), Tamil Nadu (₹7,585 cr)."
    ],
    "staticGk": "Minister of Rural Development: Shivraj Singh Chouhan.",
    "secId": "sec1",
    "hook": "Viksit Bharat-Guarantee for Rozgar and Ajeevika Mission effective July 1, 2026.",
    "date": "2026-06-13",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-421",
    "title": "Government Announces ₹1.25 Lakh Crore 'VB-GRAMG' Rural Development Framework",
    "trap": "VB-GRAMG total outlay (₹1.25 lakh crore) vs MGNREGA component (₹30,000 crore)."
  },
  {
    "bullets": [
      "AI Chatbot: Developed by ICAR-Indian Institute of Oilseeds Research (ICAR-IIOR), Hyderabad.",
      "Farmer Guidance: Responds instantly in any Indian language on crop management, seed selection, and pest control.",
      "Import Dependency: India imports 55-60% of its edible oil requirement (~16 million tonnes at ₹1.32 lakh crore)."
    ],
    "staticGk": "ICAR Director General: Mangi Lal Jat | Est 1929 in New Delhi.",
    "secId": "sec1",
    "hook": "Provides multilingual research-backed advisory to oilseed farmers directly on mobile phones.",
    "date": "2026-06-14",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-422",
    "title": "ICAR Launches AI-Based 'Oilseeds Kisaan Mitra' WhatsApp Chatbot (+91 4024598180)",
    "trap": null
  },
  {
    "bullets": [
      "Privatisation Cap: Limits airport bundles per bidder to 2-3 bundles (5-6 airports) in 3rd round of privatisation.",
      "11 Airport Bundles: Amritsar-Kangra; Varanasi-Kushinagar-Gaya; Bhubaneswar-Hubli; Raipur-Aurangabad; Trichy-Tirupati.",
      "Adani Market Share: Adani Group currently handles ~78 million passengers annually (~25% of India's air traffic)."
    ],
    "staticGk": "Public Private Partnership Appraisal Committee (PPPAC) functions under Department of Economic Affairs.",
    "secId": "sec1",
    "hook": "Groups 11 airports into 5 bundles for 3rd PPPAC privatization round to prevent market oligopoly.",
    "date": "2026-06-15",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-423",
    "title": "MoCA Proposes Capping Airport Privatisation Bundles at 2-3 Bundles Per Bidder",
    "trap": "Adani passenger market share (~25%) vs proposed bundle cap per bidder (2-3 bundles)."
  },
  {
    "bullets": [
      "Zojila Breakthrough: Completion of full tunnel excavation between Baltal and Minamarg in Kargil district.",
      "Project Cost: Developed by NHIDCL at ₹6,800 crore using New Austrian Tunnelling Method (NATM) and SCADA.",
      "Strategic Value: Provides all-weather connectivity on the Srinagar-Kargil-Leh axis (completion Feb 2028)."
    ],
    "staticGk": "NHIDCL (National Highways and Infrastructure Development Corporation Ltd) MD: Krishan Kumar.",
    "secId": "sec1",
    "hook": "India's longest road tunnel on NH-1 connects Srinagar, Kargil, and Leh at 11,500 ft altitude.",
    "date": "2026-06-16",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-424",
    "title": "Nitin Gadkari Witness Breakthrough of 14-km Zojila Tunnel Main Bore",
    "trap": "Zojila tunnel length (14 km) vs total highway project cost (₹6,800 crore)."
  },
  {
    "bullets": [
      "New Standard: Published by BIS Biodiversity Sectional Committee (EED 06) under Environment Department.",
      "NFSNM Support: National Food Security and Nutrition Mission provides ₹50 lakh one-time assistance for community seed banks.",
      "Statutory Protection: Aligns with PPV&FRA 2001 and Biological Diversity Act 2002."
    ],
    "staticGk": "Bureau of Indian Standards (BIS) Director General: Sanjay Garg | Est 2016.",
    "secId": "sec1",
    "hook": "Establishes India's 1st management framework for community-led seed banks.",
    "date": "2026-06-17",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-425",
    "title": "BIS Publishes IS 20201:2026 Standard for Community Seed Bank Management",
    "trap": null
  },
  {
    "bullets": [
      "Namo Cities: 4 greenfield integrated urban hubs planned along RRTS corridors with ₹5,000 crore central assistance.",
      "PARIVARTAN Scheme: Cabinet-approved ₹9,585 crore scheme to replace 2.07 lakh old BS-III/IV buses and trucks in Delhi-NCR.",
      "30-Minute Transit: Integrated RRTS network aiming to reduce inter-city travel time across 55,083 sq km NCR to 30 minutes."
    ],
    "staticGk": "NCR Planning Board chaired by Union Housing & Urban Affairs Minister Manohar Lal.",
    "secId": "sec1",
    "hook": "Proposes ₹5,000 crore central support for Namo Cities and ₹9,585 crore vehicle replacement scheme.",
    "date": "2026-06-18",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-426",
    "title": "NCRPB Draft Regional Plan 2041 Approves 4 Greenfield 'Namo Cities' & 'PARIVARTAN' Scheme",
    "trap": "Namo Cities central outlay (₹5,000 cr) vs PARIVARTAN vehicle replacement outlay (₹9,585 cr)."
  },
  {
    "bullets": [
      "GHCI Portal: Facilitates transparent certification under Green Hydrogen Certification Scheme of India.",
      "Electrolyser Incentives: Financial incentives awarded to 15 companies for 3,000 MW/yr manufacturing under SIGHT.",
      "Refinery Contracts: 30,000 MTPA green hydrogen supply contracts awarded to IOCL, BPCL, HPCL, and NRL."
    ],
    "staticGk": "National Green Hydrogen Mission outlay ₹19,744 crore targeting 5 MMT annual capacity by 2030.",
    "secId": "sec1",
    "hook": "Pralhad Joshi sanctions ₹22 crore 1st batch support to 9 green hydrogen startups.",
    "date": "2026-06-19",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-427",
    "title": "MNRE Launches 'Green Hydrogen Certification Portal of India (GHCI)' &  Startup Support",
    "trap": null
  },
  {
    "bullets": [
      "7x7x7 Expansion: Expands 6x6x6 to 7x7x7 by adding LBW babies (0-6 months), 'Eating Right' intervention, and M&E framework.",
      "T4 Approach: Transitions from Test, Treat, Talk to Test, Treat, Talk & Track.",
      "IV Iron Therapy: Includes Intravenous Iron Therapy (Ferric Carboxymaltose) for severe anemia in pregnant women."
    ],
    "staticGk": "NFHS-5 data shows 67.1% of children (6-59 months) and 57% of women in India are anemic.",
    "secId": "sec1",
    "hook": "Adds Low Birth Weight babies and Eating Right to transition from T3 to T4 approach.",
    "date": "2026-06-20",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec1-428",
    "title": "MHFW Releases 'Anemia Mukt Bharat Abhiyaan' Guidelines Expanding to 7x7x7 Framework",
    "trap": "New beneficiary group (LBW babies 0-6 months) vs T4 approach (adds 'Track')."
  },
  {
    "bullets": [
      "Biometric Payment: Enables PIN-free UPI transactions up to ₹5,000 using device fingerprint or face ID.",
      "UIDAI Face Auth: Allows customers to set/reset UPI PIN using UIDAI facial recognition without debit card.",
      "IoT Delegated Payments: Enables connected devices and vehicles to execute UPI payments within pre-defined limits."
    ],
    "staticGk": "Bank of Baroda MD & CEO: Debadatta Chand | HQ: Vadodara.",
    "secId": "sec2",
    "hook": "Introduces OS-native biometric auth up to ₹5,000 and UIDAI face authentication for PIN reset.",
    "date": "2026-06-21",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec2-429",
    "title": "Bank of Baroda Launches 3 Features on 'bob इ Pay' Universal UPI App",
    "trap": "PIN-free biometric payment limit (₹5,000) vs UIDAI face authentication."
  },
  {
    "bullets": [
      "Unclaimed Assets Portal: Developed in collaboration with Public Sector Bank Alliance (PSBA) covering 12 PSBs.",
      "Financial Scope: Provides single search for unclaimed bank deposits, insurance claims, shares, dividends, and mutual funds.",
      "Campaign Link: Builds on nationwide 'Aapki Punji, Aapka Adhikar' (Your Money, Your Right) campaign."
    ],
    "staticGk": "Public Sector Bank Alliance (PSBA) MD & CEO: Eric de Souza.",
    "secId": "sec2",
    "hook": "Unified platform www.unclaimedassetsportal.in connects unclaimed deposits, insurance claims, and shares.",
    "date": "2026-06-22",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec2-430",
    "title": "DFS Launches 'Common Landing Portal for Unclaimed Financial Assets' (PSBA)",
    "trap": null
  },
  {
    "bullets": [
      "ZCZP Inclusion: Subscription to Zero Coupon Zero Principal (ZCZP) instruments on Social Stock Exchanges added to Schedule VII.",
      "CSR Cap: Companies permitted to allocate up to 10% of annual mandatory CSR outlay to ZCZP instruments.",
      "Zero Returns: ZCZP instruments offer no financial returns or principal repayment; used exclusively for social impact projects."
    ],
    "staticGk": "Social Stock Exchange (SSE) framework regulated by SEBI.",
    "secId": "sec2",
    "hook": "Allows corporates to allocate up to 10% annual CSR expenditure to Social Stock Exchange instruments.",
    "date": "2026-06-23",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec2-431",
    "title": "MCA Amends Schedule VII Companies Act: ZCZP Instruments Eligible Under CSR (Up to 10%)",
    "trap": "ZCZP CSR cap (10% of annual CSR expenditure) vs return structure (Zero Coupon Zero Principal)."
  },
  {
    "bullets": [
      "Target-Date NFOs: Launches 'Zerodha Life Cycle Fund 2036' and 'Zerodha Life Cycle Fund 2041' (minimum subscription ₹100).",
      "Asset Glidepath: Systematically shifts asset allocation from high-equity growth to conservative G-Secs as target year approaches.",
      "Exit Load Tier: 3% exit load within 1 yr, 2% within 2 yrs, 1% within 3 yrs, nil beyond 3 yrs."
    ],
    "staticGk": "Zerodha Fund House CEO: Vishal Jain | Fund Manager: Kedarnath Mirajkar.",
    "secId": "sec2",
    "hook": "Introduces target-date open-ended funds following a risk-reducing asset allocation glidepath.",
    "date": "2026-06-24",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec2-432",
    "title": "Zerodha Fund House Launches India's 1st 'Lifecycle Mutual Funds' (NFOs 2036 & 2041)",
    "trap": "Minimum subscription amount (₹100) vs exit load window (3 years)."
  },
  {
    "bullets": [
      "Record IPO Size: Estimated to raise ₹33,000 crore to ₹38,000 crore (+), surpassing Hyundai Motor India's ₹27,870 crore record.",
      "Valuation & Shares: Valued at ₹12-15 lakh crore; issue comprises 27 crore fresh equity shares (no OFS component).",
      "RIL Holding: Reliance Industries retains 66.43% majority stake in Jio Platforms."
    ],
    "staticGk": "Jio Platforms Group CEO: Mathew Oommen | Parent: Reliance Industries Ltd.",
    "secId": "sec2",
    "hook": "Reliance Industries subsidiary files for 27 crore shares (~3% post-issue capital) at ₹12-15 lakh crore valuation.",
    "date": "2026-06-25",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec2-433",
    "title": "Jio Platforms Files Draft Papers for India's Biggest-Ever  Billion+ (₹33,000-38,000 Cr) IPO",
    "trap": "Jio IPO estimated size (₹33,000-38,000 cr) vs Hyundai previous record (₹27,870 cr)."
  },
  {
    "bullets": [
      "Harmonised Code: Single Common Advertisement Code applies to stockbrokers, MFs, PMs, RAs, and IAs.",
      "Post-Reporting SLA: Mandates reporting of advertisements within 24 hours of publication instead of prior clearance.",
      "Celebrity Endorsements: Permits brand-level celebrity endorsements while prohibiting specific product/service endorsements."
    ],
    "staticGk": "PaRRVA (Past Risk and Return Verification Agency) ratings permitted under proposed CAC.",
    "secId": "sec2",
    "hook": "Replaces separate exchange ad rules with single code and 24-hour post-publication reporting.",
    "date": "2026-06-26",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec2-434",
    "title": "SEBI Proposes Common Advertisement Code (CAC) Under Intermediaries Regulations 2008",
    "trap": "Ad reporting SLA (24 hours after publication) vs celebrity endorsement scope (brand-level only)."
  },
  {
    "bullets": [
      "MEPRO X6 Sight: Fixed 6x magnification daytime sight with 1,000m effective range for NEGEV NG-7 7.62x51mm LMGs.",
      "Prime Contractor: Bharat Electronics Limited (BEL) secured tender via Transfer of Technology (ToT) from Israel's Meprolight & RRP Defense.",
      "Global First: Marks 1st instance globally of a military deploying telescopic optics on LMGs across regular infantry."
    ],
    "staticGk": "NEGEV NG-7 LMG manufactured in India under licence from Israel Weapon Industries (IWI).",
    "secId": "sec4",
    "hook": "First army in the world to place telescopic optics on light machine guns at scale.",
    "date": "2026-06-27",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec4-435",
    "title": "Indian Army Procures 10,000+ Meprolight 'MEPRO X6' Telescopic Sights for NEGEV LMGs",
    "trap": null
  },
  {
    "bullets": [
      "M777 Howitzer Package:  million sustainment support for 145 M777A2 Ultra-Light Howitzers (contractor: BAE Systems).",
      "Apache Helicopter Package: .2 million support for 22 AH-64E Apache Guardian helicopters (contractors: Boeing & Lockheed Martin).",
      "FMS Channel: Administered under US Foreign Military Sales (FMS) programme."
    ],
    "staticGk": "Indian Army operates 145 M777A2 howitzers and 22 AH-64E Apache helicopters.",
    "secId": "sec4",
    "hook": "Approves foreign military sales package for 145 M777A2 howitzers and 22 AH-64E Apache helicopters.",
    "date": "2026-06-28",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec4-436",
    "title": "US DSCA Notifies .2 Million Sustainment Package for India's M777 Howitzers & Apaches",
    "trap": "M777 howitzer package () vs Apache package (.2M)."
  },
  {
    "bullets": [
      "5 Individual Awards: Vaibhav Sooryavanshi (RR) won Orange Cap, MVP, Emerging Player, Super Striker, and Super Sixes.",
      "Record Sixes: Struck 72 sixes in a single season, breaking Chris Gayle's 2011 record of 59 sixes.",
      "RCB Title Retention: RCB (captain Rajat Patidar) defeated Gujarat Titans to retain title (3rd team after CSK and MI)."
    ],
    "staticGk": "Vaibhav Sooryavanshi (Bihar) selected for Indian Men's T20 team at age 15 years 71 days.",
    "secId": "sec6",
    "hook": "Becomes youngest Orange Cap winner in IPL history with 776 runs and 72 sixes.",
    "date": "2026-06-29",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec6-437",
    "title": "15-Year-Old Vaibhav Sooryavanshi Sweeps 5 IPL 2026 Awards as RCB Retains Title",
    "trap": "Vaibhav sixes record (72 sixes) vs Gayle previous record (59 sixes).",
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "15-Year-Old Vaibhav Sooryavanshi Sweeps 5 IPL 2026 Awards as RCB Retains Title",
          "5 Individual Awards: Vaibhav Sooryavanshi (RR) won Orange Cap, MVP, Emerging Player, Super Striker, and Super Sixes.",
          "Vaibhav Sooryavanshi (Bihar) selected for Indian Men's T20 team at age 15 years 71 days."
        ]
      ]
    }
  },
  {
    "bullets": [
      "World No. 1 Boxers: Jaismine Lamboria (57kg) and Minakshi Hooda (48kg) achieved World No. 1 rankings.",
      "Top-10 Representation: Indian boxers feature in top 10 across 9 of 10 women's weight categories and 8 of 10 men's divisions.",
      "Global Position: India ranks 3rd overall in top-10 athletes globally behind Kazakhstan and Uzbekistan."
    ],
    "staticGk": "International Boxing Association (IBA) HQ: Lausanne, Switzerland.",
    "secId": "sec6",
    "hook": "India ranks 3rd overall globally and 2nd in women's boxing worldwide.",
    "date": "2026-06-30",
    "interviewQ": null,
    "tier": "Tier A",
    "id": "note-sec6-438",
    "title": "World Boxing Rankings: Jaismine Lamboria & Minakshi Hooda Ranked World No. 1",
    "trap": "Jaismine Lamboria category (57kg) vs Minakshi Hooda category (48kg)."
  },
  {
    "id": "note-sec2-438",
    "secId": "sec2",
    "tier": "Tier A",
    "date": "2026-08-05",
    "title": "CGSMFI 2.0 Mandates Banks to Lend at Least 15% Corpus to Small & Mid MFIs",
    "hook": "Ensures equitable liquidity distribution for lower-tier microfinance institutions.",
    "bullets": [
      "Credit Guarantee Scheme for Microfinance Institutions 2.0 (CGSMFI 2.0) requires member lending institutions to allocate at least **15% of guarantee corpus** to small and mid-sized NBFC-MFIs.",
      "Aims to prevent capital concentration among top-tier MFIs and support last-mile credit flow."
    ],
    "staticGk": "National Credit Guarantee Trustee Company (NCGTC) operates under Department of Financial Services, Ministry of Finance.",
    "trap": "Mandatory allocation to small/mid MFIs (at least 15% of corpus).",
    "interviewQ": null
  },
  {
    "id": "note-sec1-439",
    "secId": "sec1",
    "tier": "Tier A",
    "date": "2026-08-05",
    "title": "Taxation Bill 2026 Extends Electronics Capital Goods Tax Exemption Sunset to March 31, 2041",
    "hook": "Provides 15-year long-term tax predictability for semiconductor and electronics manufacturing hardware.",
    "bullets": [
      "Taxation Bill 2026 extends the sunset clause for customs duty exemption on imported capital goods used in electronics manufacturing to **March 31, 2041**.",
      "Supports India's target to build a $500 billion electronics manufacturing ecosystem."
    ],
    "staticGk": "Central Board of Indirect Taxes and Customs (CBIC) Chairman: Sanjay Kumar Agarwal.",
    "trap": "Sunset date extension (March 31, 2041).",
    "interviewQ": null
  },
  {
    "id": "note-sec6-440",
    "secId": "sec6",
    "tier": "Tier A",
    "date": "2026-08-05",
    "title": "ICAR Develops India's 1st Telomere-to-Telomere (T2T) Reference Genome for Pigeonpea",
    "hook": "Decodes complete genetic sequence of Asha (ICPL 87119) pulse variety to enhance drought and disease resistance.",
    "bullets": [
      "ICAR-National Research Centre on Plant Biotechnology (NRCPB) developed India's 1st gap-free Telomere-to-Telomere (T2T) reference genome for Pigeonpea (Arhar/Tur).",
      "Sequenced using the popular pulse variety Asha (ICPL 87119), decoding all 11 chromosomes."
    ],
    "staticGk": "ICAR (Indian Council of Agricultural Research) Director General: Mangi Lal Jat | HQ: New Delhi.",
    "trap": "Pigeonpea variety used (Asha / ICPL 87119).",
    "interviewQ": null
  },
  {
    "id": "note-sec6-441",
    "secId": "sec6",
    "tier": "Tier A",
    "date": "2026-08-05",
    "title": "Asmita Dey Wins India's 1st Commonwealth Judo Gold Medal in Women's 48kg",
    "hook": "Historic martial arts victory at Commonwealth Judo Championships.",
    "bullets": [
      "Indian judoka Asmita Dey won India's 1st Gold medal in Women's 48kg category at the Commonwealth Judo Championships.",
      "Defeated top-seeded opponent in the final with an Ippon score."
    ],
    "staticGk": "Judo Federation of India (JFI) President: Partap Singh Bajwa | HQ: New Delhi.",
    "trap": "Weight category (Women's 48kg).",
    "interviewQ": null,
    "miniGrid": {
      "headers": [
        "Award Title",
        "Recipient / Winner",
        "Conferred By / Key Detail"
      ],
      "rows": [
        [
          "Asmita Dey Wins India's 1st Commonwealth Judo Gold Medal in Women's 48kg",
          "Indian judoka Asmita Dey won India's 1st Gold medal in Women's 48kg category at the Commonwealth Judo Championships.",
          "Judo Federation of India (JFI) President: Partap Singh Bajwa | HQ: New Delhi."
        ]
      ]
    }
  }
,
  {
  "id": "ca_2026_08_08_pm_edrive_extension",
  "secId": "sec4",
  "title": "Govt Halves e2W Subsidy to ₹2,500/kWh & Extends PM E-DRIVE Scheme Till March 2028",
  "date": "2026-08-08",
  "hook": "PM E-DRIVE scheme extended by 1 year to March 31, 2028, with e2W incentive halved from ₹5,000 to ₹2,500 per kWh.",
  "bullets": [
    "**Scheme Extension:** PM Electric Drive Revolution in Innovative Vehicle Enhancement (PM E-DRIVE) extended by 1 year to **March 31, 2028**.",
    "**Incentive Cut:** Incentive for electric two-wheelers (e2Ws) reduced from **₹5,000 to ₹2,500 per kWh**.",
    "**Cap & Ceiling:** Maximum incentive capped at **₹5,000 per vehicle** (down from ₹10,000 in FY25) for e2Ws with ex-factory price up to **₹1.5 lakh**.",
    "**Outlay & Ceiling Limit:** Total scheme outlay remains **₹11,900 crore**; incentive capped at 15% of ex-factory price."
  ],
  "staticGk": "Nodal Ministry: Ministry of Heavy Industries (MHI). Outlay: ₹11,900 crore.",
  "trap": "≠ **Cap Trap:** Do not confuse the new maximum incentive cap of ₹5,000/vehicle with the earlier FY25 cap of ₹10,000/vehicle."
},
  {
  "id": "ca_2026_08_08_govt_debt_to_gdp_fy26",
  "secId": "sec3",
  "title": "Govt Debt-to-GDP Ratio Stands at 58.2% in FY26; Fiscal Deficit Drops to 4.4%",
  "date": "2026-08-08",
  "hook": "India's debt-to-GDP ratio for FY26 stood at 58.2%, 210 bps higher than the 56.1% target, while fiscal deficit declined to 4.4%.",
  "bullets": [
    "**Debt-to-GDP Ratio:** Government debt-to-GDP ratio for FY26 stood at **58.2%**.",
    "**Target Deviation:** Ratio was **210 basis points (bps)** higher than the government target of **56.1%**.",
    "**Fiscal Deficit Trajectory:** Fiscal deficit dropped significantly from **9.2% in FY21 to 4.4% in FY26**."
  ],
  "staticGk": "Fiscal Deficit Definition: Gap between total expenditure and total receipts excluding borrowings.",
  "trap": "⚠️ **Target Trap:** Note that FY26 debt-to-GDP (58.2%) missed the government aim of 56.1% by 210 bps (2.1%)."
},
  {
  "id": "ca_2026_08_08_sebi_annual_report_retail",
  "secId": "sec2",
  "title": "SEBI Annual Report 2025-26: MF AUM Reaches ₹73.7 Lakh Crore; Unique Investors Surge to 6.1 Crore",
  "date": "2026-08-08",
  "hook": "SEBI Annual Report 2025-26 highlights Mutual Fund AUM expansion to ₹73.7 lakh crore and unique investor growth to 6.1 crore.",
  "bullets": [
    "**Mutual Fund AUM Growth:** Indian Mutual Fund AUM grew from **₹31.43 lakh crore (March 2021)** to **₹73.7 lakh crore (March 2026)**.",
    "**Unique Investors:** Unique MF investors surged to **6.1 crore**, up **13.2% YoY**.",
    "**Macro Growth Estimates:** Real GDP growth estimated at **7.7% in FY26** (up from 7.1% in FY25); IMF projects **6.5% growth for FY27**."
  ],
  "staticGk": "SEBI Established: April 12, 1988 (Statutory status 1992). Chairperson: Tuhin Kanta Pandey.",
  "trap": "≠ **AUM Growth:** Pay attention: MF AUM more than doubled over 5 years from ₹31.43L cr (2021) to ₹73.7L cr (2026)."
},
  {
  "id": "ca_2026_08_09_rbi_cva_capital_framework",
  "secId": "sec1",
  "title": "RBI Proposes Credit Valuation Adjustment (CVA) Risk-Capital Framework Effective April 1, 2027",
  "date": "2026-08-09",
  "hook": "RBI proposed new CVA Framework for derivative-related counterparty risk, effective April 1, 2027, replacing 2011 guidelines.",
  "bullets": [
    "**Scope & Applicability:** Applies to all commercial banks except SFBs, Payments Banks, and Local Area Banks.",
    "**Basic Approach (BA-CVA):** Offers Full BA-CVA (recognizes eligible hedges) and Reduced BA-CVA (no hedge recognition).",
    "**Simplified Threshold:** Banks with non-centrally cleared derivatives up to **₹10 trillion** can use simplified approach (CVA capital req = 100% counterparty credit risk capital req).",
    "**Counterparty Risk Weights:** Sovereigns: 0.5% (Investment Grade) and 2% (others); Financial Sector: 5% (IG) and 12% (others)."
  ],
  "staticGk": "CVA: Credit Valuation Adjustment measures counterparty credit risk in derivative transactions.",
  "trap": "⚠️ **Exemption Trap:** SFBs, Payments Banks, and LABs are EXCLUDED from the new CVA capital framework."
},
  {
  "id": "ca_2026_08_09_rbi_g_sib_leverage_buffer",
  "secId": "sec1",
  "title": "RBI Draft Aligns Leverage Ratio Regime with Basel 2017 Standards; Prescribes G-SIB Leverage Buffer",
  "date": "2026-08-09",
  "hook": "RBI draft directions align leverage ratio norms with Basel 2017, introducing leverage buffer for G-SIB branches in India from April 1, 2027.",
  "bullets": [
    "**Minimum Leverage Ratio:** Retained at **4% for D-SIBs** and **3.5% for all other banks**.",
    "**G-SIB Branches:** Foreign branches of G-SIBs must maintain **3.5% minimum leverage ratio + applicable G-SIB leverage buffer**.",
    "**Derivative Calculation:** Uses replacement cost + potential future exposure, multiplier generally **1.4x**."
  ],
  "staticGk": "D-SIBs in India: State Bank of India (SBI), HDFC Bank, ICICI Bank.",
  "trap": "≠ **Ratio Floor:** D-SIBs floor is 4.0%; Non-D-SIB commercial banks floor is 3.5%."
},
  {
  "id": "ca_2026_08_09_sebi_unclaimed_mf_dividends",
  "secId": "sec2",
  "title": "SEBI Report: Unclaimed Mutual Fund Amounts Reach ₹3,811 Crore as of March 2026",
  "date": "2026-08-09",
  "hook": "Unclaimed mutual fund dividends rose 15.7% to ₹2,689 crore, bringing total unclaimed MF pool to ₹3,811 crore.",
  "bullets": [
    "**Unclaimed Breakdown:** Unclaimed dividends rose 15.7% to **₹2,689 crore**; unclaimed redemption fell 0.5% to **₹1,122 crore**.",
    "**Total Unclaimed Pool:** Stood at **₹3,811 crore** as of March 31, 2026.",
    "**Remedial Measures:** Centralised nominee reporting with KRA, DigiLocker access, and 'Niveshak Shivir' drive by SEBI + IEPFA."
  ],
  "staticGk": "IEPFA: Investor Education and Protection Fund Authority under Ministry of Corporate Affairs.",
  "trap": "⚠️ **Direction Trap:** Unclaimed dividends INCREASED by 15.7%, whereas unclaimed redemption DECREASED by 0.5%."
},
  {
  "id": "ca_2026_08_09_rbi_psl_fcnr_nre_swap",
  "secId": "sec1",
  "title": "RBI Directions: USD-INR Swap Facility Introduced for Fresh FCNR(B) Funds; Excluded from ANBC",
  "date": "2026-08-09",
  "hook": "RBI introduced USD-INR swap facility for 3-5 year FCNR(B) deposits and excluded fresh FCNR(B)/NRE deposits from ANBC calculation.",
  "bullets": [
    "**Swap Facility Tenor:** US Dollar-Rupee swap facility for fresh FCNR(B) dollar deposits with tenor of **3 to 5 years**.",
    "**CRR/SLR Exemption:** Temporary CRR/SLR relief on fresh FCNR(B) (8 June - 30 Sept 2026) and NRE term deposits (19 June - 30 Sept 2026, 3+ yrs).",
    "**ANBC Exclusion:** Advances against eligible fresh FCNR(B)/NRE deposits excluded from Adjusted Net Bank Credit (ANBC) for PSL calculation."
  ],
  "staticGk": "ANBC: Adjusted Net Bank Credit forms the baseline for computing Priority Sector Lending (PSL) targets.",
  "trap": "≠ **ANBC Cap:** Excluded amount cannot exceed eligible fresh FCNR(B)/NRE deposits."
},
  {
  "id": "ca_2026_08_10_sebi_isin_limit_debt",
  "secId": "sec2",
  "title": "SEBI Proposes Raising Annual ISIN Limit for Private Debt Securities from 14 to 17",
  "date": "2026-08-10",
  "hook": "SEBI proposed expanding annual ISIN limit maturing in a FY from 14 to 17 to ease NBFC refinancing pressure.",
  "bullets": [
    "**ISIN Limit Breakdown:** Plain-vanilla debt ISINs increased from **9 to 12**; Structured/FRBs/ZCBs/Tier-II ISIN limit remains **5**.",
    "**Large Issuer Flexibility:** Once 12 ISINs reach **₹15,000 crore**, 1 additional ISIN permitted per further **₹3,000 crore** outstanding.",
    "**Mandatory Listing Relief:** Removed requirement to mandatorily list all outstanding unlisted NCDs issued on/after Jan 1, 2024.",
    "**Exclusion:** Sovereign/Government-serviced EBR bonds excluded from ISIN limits."
  ],
  "staticGk": "ISIN: International Securities Identification Number (12-character alphanumeric code).",
  "trap": "⚠️ **Limit Allocation:** Plain vanilla ISIN limit expanded (9->12), but structured debt ISIN limit remained UNCHANGED at 5."
},
  {
  "id": "ca_2026_08_10_nse_authorised_person_rules",
  "secId": "sec2",
  "title": "NSE Introduces Tighter Net Worth & Deposit Norms for Authorised Persons (APs)",
  "date": "2026-08-10",
  "hook": "NSE revised rules for Authorised Persons, prescribing minimum net worth of ₹5L for individuals and ₹25L for partnerships/LLPs.",
  "bullets": [
    "**Net Worth Norms:** Minimum net worth set at **₹5 lakh for individuals** and **₹25 lakh for partnerships/LLPs/companies**.",
    "**Broker Deposit:** APs must maintain minimum deposit of **₹1 lakh** with stock broker.",
    "**Mandatory Disclosures:** APs must disclose bank/demat accounts, websites, NISM certifications, and social media handles."
  ],
  "staticGk": "NSE Founded: Nov 27, 1992. HQ: Mumbai. MD & CEO: Ashishkumar Chauhan.",
  "trap": "≠ **Net Worth Discriminator:** Individual APs (₹5L) vs Corporate/LLP APs (₹25L)."
},
  {
  "id": "ca_2026_08_10_paul_merchants_fema_ad2",
  "secId": "sec2",
  "title": "Paul Merchants Secures Perpetual RBI AD Category-II License Under FEMA Norms 2026",
  "date": "2026-08-10",
  "hook": "RBI granted Paul Merchants a perpetual Authorised Dealer Category-II (AD-II) license under FEMA Regulations 2026.",
  "bullets": [
    "**License Status:** Perpetual AD Category-II (AD-II) status granted under FEMA Regulations 2026.",
    "**Permitted Scope:** Non-trade current account transactions (excluding gifts/donations) and foreign trade transactions up to **₹25 lakh per transaction**."
  ],
  "staticGk": "FEMA: Foreign Exchange Management Act 1999 (Adjudicated by RBI / Enforcement Directorate).",
  "trap": "⚠️ **Transaction Cap:** Foreign trade remittance capped at ₹25 lakh per transaction under AD-II."
},
  {
  "id": "ca_2026_08_10_indusind_stock_broking_subsidiary",
  "secId": "sec2",
  "title": "RBI Approves IndusInd Bank to Set Up Wholly Owned Stock Broking Subsidiary",
  "date": "2026-08-10",
  "hook": "IndusInd Bank received RBI approval to establish a wholly owned stock broking subsidiary and infuse equity capital.",
  "bullets": [
    "**Regulatory Clearance:** RBI approved establishment of wholly owned stock broking subsidiary with equity infusion.",
    "**Corporate Governance:** IndusInd Bank MD & CEO: Rajiv Anand; HQ: Mumbai."
  ],
  "staticGk": "IndusInd Bank Founder: S.P. Hinduja (1994). HQ: Mumbai.",
  "trap": "≠ **Subsidiary Ownership:** 100% wholly owned subsidiary."
},
  {
  "id": "ca_2026_08_10_kotak_hybrid_home_loan",
  "secId": "sec2",
  "title": "Kotak Mahindra Bank Launches Hybrid Home Loan with 65-Month Fixed Rate Lock",
  "date": "2026-08-10",
  "hook": "Kotak Bank launched hybrid home loan combining fixed and floating rates with fixed interest lock up to 65 months.",
  "bullets": [
    "**Fixed Rate Lock:** Borrowers can lock interest rates for up to **65 months** before transitioning to floating rate.",
    "**Product Structure:** Combines fixed and floating rates for salaried and self-employed borrowers across India."
  ],
  "staticGk": "Kotak Mahindra Bank MD & CEO: Ashok Vaswani; Chairman: Chandra Sekar Rajan; Founder: Uday Kotak.",
  "trap": "≠ **Lock Period:** 65 months (approx 5.4 years) rate lock."
},
  {
  "id": "ca_2026_08_10_gift_city_nri_mf_fund",
  "secId": "sec2",
  "title": "Wealth Company Launches Category III AIF in GIFT City for NRI Mutual Fund Investments",
  "date": "2026-08-10",
  "hook": "Wealth Company launched Category III AIF ('Wealth Company IFSC FoF') in GIFT City IFSC for NRIs to invest in Indian MFs and ETFs.",
  "bullets": [
    "**Fund Vehicle:** 'The Wealth Company IFSC FoF' registered as open-ended **Category III Alternative Investment Fund (AIF)**.",
    "**Regulator & Manager:** Managed by Wealth Company Asset Management IFSC branch registered with **IFSCA**."
  ],
  "staticGk": "IFSCA Headquarters: GIFT City, Gandhinagar, Gujarat. Chairman: K. Rajaraman.",
  "trap": "⚠️ **AIF Category:** Registered specifically as Category III AIF (Fund of Funds)."
},
  {
  "id": "ca_2026_08_10_ifc_225cr_ndr_smart_spaces",
  "secId": "sec6",
  "title": "World Bank's IFC to Invest ₹225 Crore ($23 Million) in NDR Smart Spaces Warehousing",
  "date": "2026-08-10",
  "hook": "International Finance Corporation (IFC) to invest ₹225 crore ($23M) equity in NDR Smart Spaces for Grade A warehousing across MH, TN, UP.",
  "bullets": [
    "**Equity Investment:** IFC investing **₹225 crore (~$23 million)** in NDR Smart Spaces Pvt Ltd.",
    "**Infrastructure Focus:** Developing Grade A warehousing and logistics infrastructure in **Maharashtra, Tamil Nadu, and Uttar Pradesh**."
  ],
  "staticGk": "IFC Established: July 20, 1956. Members: 186 countries. HQ: Washington D.C. Parent: World Bank Group.",
  "trap": "≠ **Member Count:** IFC has 186 member countries (World Bank IBRD has 189)."
},
  {
  "id": "ca_2026_08_10_mithila_makhana_export_australia",
  "secId": "sec6",
  "title": "GI-Tagged Mithila Makhana Exports from Bihar to Australia Supported by APEDA",
  "date": "2026-08-10",
  "hook": "First consignment of GI-tagged Mithila Makhana exported from Darbhanga, Bihar to Australia with APEDA support.",
  "bullets": [
    "**Export Route:** Exported from **Darbhanga, Bihar** to **Australia**.",
    "**Nodal Support:** Facilitated by APEDA (Agricultural and Processed Food Products Export Development Authority)."
  ],
  "staticGk": "APEDA: Statutory body under APEDA Act 1985 (Ministry of Commerce). Chairman: Abhishek Dev. HQ: New Delhi.",
  "trap": "≠ **Nodal Ministry:** APEDA comes under Ministry of Commerce and Industry (NOT Agriculture)."
},
  {
  "id": "ca_2026_08_11_boss_scam_warning_i4c",
  "secId": "sec4",
  "title": "I4C Issues Warning Against 'Boss Scam' WhatsApp CEO Impersonation Trojan Fraud",
  "date": "2026-08-11",
  "hook": "Indian Cyber Crime Coordination Centre (I4C) issued advisory against 'Boss Scam' WhatsApp Web takeover Trojan malware.",
  "bullets": [
    "**Fraud Mechanism:** WhatsApp CEO impersonation fraud installing Trojan malware on Windows devices via malicious files.",
    "**Nodal Platform:** National Cyber Crime Reporting Portal (NCRP) operating under MHA/I4C (National Helpline **1930**)."
  ],
  "staticGk": "I4C: Nodal cybercrime agency under Ministry of Home Affairs (MHA). HQ: New Delhi.",
  "trap": "⚠️ **Helpline Number:** Cybercrime national helpline is 1930."
},
  {
  "id": "ca_2026_08_11_govt_notifies_11_evisa_ports",
  "secId": "sec4",
  "title": "Government Notifies 11 Additional Ports for e-Visa Entry, Taking Total to 88 Ports",
  "date": "2026-08-11",
  "hook": "Center notified 11 new international ports (9 land ports + 2 airports), expanding e-visa entry ports to 88 across India.",
  "bullets": [
    "**New Additions:** 11 ports = 9 land ports + 2 airports (**Bhopal and Tirupati**).",
    "**Total e-Visa Ports:** Reached **88 ports** (37 Airports + 38 Seaports + 13 Land Ports)."
  ],
  "staticGk": "Nodal Ministry: Ministry of Home Affairs (Bureau of Immigration).",
  "trap": "≠ **Airport Additions:** The 2 new airports notified are Bhopal and Tirupati."
},
  {
  "id": "ca_2026_08_11_mmdr_amendment_bill_2026",
  "secId": "sec4",
  "title": "Govt Introduces MMDR Amendment Bill 2026 in Lok Sabha; Removes 50% Captive Sales Ceiling",
  "date": "2026-08-11",
  "hook": "Mines and Minerals Amendment Bill 2026 introduced in Lok Sabha, removing 50% sales cap on captive mines and expanding NMET.",
  "bullets": [
    "**Captive Mine Ceiling Removed:** Bill removes 50% ceiling on annual mineral sales by captive mines after meeting end-use requirements.",
    "**Trust Expansion:** Renames NMET to **National Mineral Exploration and Development Trust** to fund mine development.",
    "**Lease Extension:** Composite licence extended up to 30%; mining lease up to 10%; one-time extension for deep-seated minerals (>200m depth)."
  ],
  "staticGk": "Amends: Mines and Minerals (Development and Regulation) Act, 1957.",
  "trap": "⚠️ **Depth Threshold:** Deep-seated minerals defined as minerals found >200 meters below land surface."
},
  {
  "id": "ca_2026_08_11_nabl_mobile_food_testing_scheme",
  "secId": "sec4",
  "title": "India Launches 1st Accreditation Scheme for Mobile Food Testing Laboratories by NABL",
  "date": "2026-08-11",
  "hook": "NABL under Quality Council of India (QCI) launched India's first accreditation scheme for mobile food testing labs.",
  "bullets": [
    "**Program Framework:** Integrated Assessment Programme launched by NABL (Quality Council of India constituent).",
    "**NABL Governance:** HQ: New Delhi; Chairperson: Dr. Sandip Shah."
  ],
  "staticGk": "QCI: Autonomous body attached to Department for Promotion of Industry and Internal Trade (DPIIT).",
  "trap": "≠ **NABL Nodal:** NABL is a constituent board of QCI (DPIIT)."
},
  {
  "id": "ca_2026_08_11_pm_vbry_women_enrolment",
  "secId": "sec4",
  "title": "PM-VBRY Enrolment Update: Women Account for 28.56% of 9.99 Million First-Time Employees",
  "date": "2026-08-11",
  "hook": "PM Viksit Bharat Rozgar Yojana enrolled 9.99M first-time employees (2.85M women = 28.56%). Maharashtra led registrations.",
  "bullets": [
    "**Enrolment Stats:** Of 9.99M first-time workers, **2.85 million were women (28.56%)** vs 7.14M men.",
    "**Top 3 States:** (1) Maharashtra, (2) Karnataka, (3) Tamil Nadu.",
    "**Scheme Outlay:** Implemented Aug 1, 2025 to July 31, 2027 with **₹99,446 crore** outlay."
  ],
  "staticGk": "PM-VBRY: Nodal Ministry of Labour and Employment.",
  "trap": "≠ **Outlay & Period:** 2-year implementation period with ₹99,446 crore outlay."
},
  {
  "id": "ca_2026_08_11_fao_food_price_index_july",
  "secId": "sec6",
  "title": "FAO Food Price Index Hits 3-Year High of 131.1 Points in July 2026",
  "date": "2026-08-11",
  "hook": "UN FAO Food Price Index reached 3-year high at 131.1 points in July 2026.",
  "bullets": [
    "**Index Benchmark:** FAO Food Price Index reached **131.1 points** in July 2026.",
    "**UN FAO Profile:** HQ: Rome, Italy; Established: Oct 16, 1945; Director-General: Qu Dongyu."
  ],
  "staticGk": "World Food Day: Celebrated annually on October 16 (FAO founding day).",
  "trap": "≠ **FAO HQ:** Rome, Italy (NOT Geneva or Vienna)."
},
  {
  "id": "ca_2026_08_11_colombia_74_earthquake",
  "secId": "sec6",
  "title": "Magnitude 7.4 Earthquake Strikes Western Colombia in Chocó Region",
  "date": "2026-08-11",
  "hook": "Magnitude 7.4 earthquake struck western Colombia near San José del Palmar in the Pacific Ring of Fire.",
  "bullets": [
    "**Seismic Event:** Magnitude 7.4 earthquake struck **San José del Palmar, Chocó region, Colombia** on Aug 11, 2026.",
    "**Tectonic Context:** Colombia is situated along the seismically active Pacific Ring of Fire."
  ],
  "staticGk": "Capital of Colombia: Bogotá. Currency: Colombian Peso.",
  "trap": "≠ **Tectonic Zone:** Pacific Ring of Fire."
},
  {
  "id": "ca_2026_08_10_digilocker_aaeri_verify_mou",
  "secId": "sec4",
  "title": "NeGD DigiLocker Signs MoU with AAERI to Launch 'AAERI Verify' Credentials Platform",
  "date": "2026-08-10",
  "hook": "MeitY's NeGD (DigiLocker) partnered with AAERI to launch 'AAERI Verify' for authenticating Australian education credentials.",
  "bullets": [
    "**MoU Partners:** National e-Governance Division (NeGD, MeitY) + Association of Australian Education Representatives in India (AAERI).",
    "**Objective:** Launch 'AAERI Verify' knowledge-sharing platform for credential verification."
  ],
  "staticGk": "DigiLocker: Key initiative under Digital India Programme (MeitY).",
  "trap": "≠ **Partner Country:** Australia (AAERI)."
},
  {
  "id": "ca_2026_08_10_mospi_isi_gdp_nowcasting",
  "secId": "sec3",
  "title": "MoSPI Partners with IDEAS & ISI Kolkata to Develop Desktop GDP Nowcasting Software",
  "date": "2026-08-10",
  "hook": "MoSPI partnered with IDEAS Foundation and ISI Kolkata to develop desktop GDP Nowcasting software tool.",
  "bullets": [
    "**Collaboration:** MoSPI + IDEAS Foundation + Indian Statistical Institute (ISI Kolkata).",
    "**Deliverables:** Desktop-based GDP Nowcasting tool and harmonized health/nutrition NSS indicator framework."
  ],
  "staticGk": "ISI Kolkata Founder: Prasanta Chandra Mahalanobis (National Statistics Day June 29).",
  "trap": "≠ **Institute Name:** IDEAS (Institute of Data Engineering, Analytics and Science Foundation)."
},
  {
  "id": "ca_2026_08_10_everest_rocket_engine_astrobase",
  "secId": "sec10",
  "title": "Astrobase Space Technologies Unveils EVEREST, India's 1st Private 800 kN FFSC Rocket Engine",
  "date": "2026-08-10",
  "hook": "Astrobase Space Technologies unveiled EVEREST, India's 1st privately developed 800 kN Full-Flow Staged Combustion rocket engine in Bengaluru.",
  "bullets": [
    "**Engine Specifications:** EVEREST 800 kN Full-Flow Staged Combustion (FFSC) rocket engine.",
    "**Location & Support:** Bengaluru, Karnataka; supported under IN-SPACe Technology Adoption Fund."
  ],
  "staticGk": "IN-SPACe HQ: Ahmedabad, Gujarat. Chairman: Pawan Kumar Goenka.",
  "trap": "≠ **Engine Type:** Full-Flow Staged Combustion (FFSC) 800 kN engine."
},
  {
  "id": "ca_2026_08_11_indo_us_eod_exercise_2026",
  "secId": "sec6",
  "title": "Indian Navy & US Navy Conduct 8th Explosive Ordnance Disposal (EDO) Exercise 2026",
  "date": "2026-08-11",
  "hook": "8th edition of joint Explosive Ordnance Disposal (EDO) exercise conducted between Indian Navy and US Navy.",
  "bullets": [
    "**Exercise Details:** 8th Explosive Ordnance Disposal (EDO) & Salvage Exercise between Indian Navy and US Navy.",
    "**Historical Track:** Joint salvage exercises conducted between India and US since 2005."
  ],
  "staticGk": "Other India-US Navy Exercises: Malabar, Tiger Triumph, PASSEX.",
  "trap": "≠ **Edition:** 8th edition of EDO exercise."
},
  {
  "id": "ca_2026_08_11_dirac_medal_2026_deepak_dhar",
  "secId": "sec8",
  "title": "Prof. Deepak Dhar Awarded Prestigious 2026 ICTP Dirac Medal for Statistical Mechanics",
  "date": "2026-08-11",
  "hook": "Professor Deepak Dhar (UP) awarded the 2026 ICTP Dirac Medal for contributions to statistical mechanics.",
  "bullets": [
    "**Awardee:** Prof. Deepak Dhar (from Uttar Pradesh) shares 2026 Dirac Medal with Bernard Derrida, Marc Mézard, and Haim Sompolinsky.",
    "**About Dirac Medal:** Awarded annually on Paul Dirac's birthday (August 8) by ICTP Italy (Prize $5,000)."
  ],
  "staticGk": "ICTP: Abdus Salam International Centre for Theoretical Physics, Trieste, Italy (Instituted 1985).",
  "trap": "≠ **Prize Money:** US $5,000."
},
  {
  "id": "ca_2026_08_11_rahul_navin_director_ed",
  "secId": "sec5",
  "title": "Rahul Navin Appointed Director of Enforcement Directorate (ED)",
  "date": "2026-08-11",
  "hook": "Rahul Navin officially appointed Director of Enforcement Directorate (ED).",
  "bullets": [
    "**Official Designation:** Director of the Enforcement Directorate (ED).",
    "**Nodal Agency:** ED operates under Department of Revenue, Ministry of Finance."
  ],
  "staticGk": "ED Enforcement: PMLA 2002 and FEMA 1999. HQ: New Delhi.",
  "trap": "≠ **Agency Ministry:** ED is under Ministry of Finance (NOT MHA).",
  "miniGrid": {
    "headers": [
      "Appointee / Official",
      "New Position & Organization",
      "Key Context & Details"
    ],
    "rows": [
      [
        "Rahul Navin",
        "Director of Enforcement Directorate (ED)",
        "Appointed Director of ED under Ministry of Finance."
      ]
    ]
  }
},
  {
  "id": "ca_2026_08_11_bimal_patel_itlos_judge",
  "secId": "sec5",
  "title": "Bimal N Patel Appointed Judge of International Tribunal for Law of Sea (ITLOS)",
  "date": "2026-08-11",
  "hook": "Dr. Bimal N Patel appointed Judge of ITLOS at Hamburg, Germany.",
  "bullets": [
    "**Appointed Position:** Judge of the International Tribunal for the Law of the Sea (ITLOS).",
    "**Headquarters:** ITLOS HQ located in **Hamburg, Germany**."
  ],
  "staticGk": "ITLOS Established: UNCLOS 1982 convention. HQ: Hamburg, Germany.",
  "trap": "≠ **HQ Location:** Hamburg, Germany (NOT The Hague or Geneva).",
  "miniGrid": {
    "headers": [
      "Appointee / Official",
      "New Position & Organization",
      "Key Context & Details"
    ],
    "rows": [
      [
        "Bimal N Patel",
        "Judge of ITLOS",
        "Appointed Judge of ITLOS (HQ: Hamburg, Germany)."
      ]
    ]
  }
},
  {
  "id": "ca_2026_08_11_ashwani_bhatia_niva_bupa",
  "secId": "sec5",
  "title": "Ashwani Bhatia Appointed Chairman of Niva Bupa Health Insurance",
  "date": "2026-08-11",
  "hook": "Former SEBI Whole-time Member Ashwani Bhatia appointed Chairman of Niva Bupa Health Insurance.",
  "bullets": [
    "**Appointed Position:** Chairman of Niva Bupa Health Insurance.",
    "**Background:** Former Whole-time Member at SEBI and MD at State Bank of India."
  ],
  "staticGk": "Niva Bupa: Standalone Health Insurer regulated by IRDAI.",
  "trap": "≠ **Entity Type:** Standalone Health Insurance Company.",
  "miniGrid": {
    "headers": [
      "Appointee / Official",
      "New Position & Organization",
      "Key Context & Details"
    ],
    "rows": [
      [
        "Ashwani Bhatia",
        "Chairman of Niva Bupa",
        "Appointed Chairman of Niva Bupa Health Insurance."
      ]
    ]
  }
},
  {
  "id": "ca_2026_08_11_asian_junior_weightlifting_2026",
  "secId": "sec10",
  "title": "India Wins Gold & Silver Medals at Asian Junior Weightlifting Championships in Tashkent",
  "date": "2026-08-11",
  "hook": "Tomchou Meetei won Gold (266kg) and Gurunaidu Sanapathi won Silver (265kg) in Men's 60kg at Asian Junior Weightlifting.",
  "bullets": [
    "**Men's 60kg Category:** Tomchou Meetei won **Gold** (266 kg); Gurunaidu Sanapathi won **Silver** (265 kg).",
    "**Men's 65kg Category:** Maharajan Arumugapandian won **Silver**.",
    "**Women's 45kg Category:** Titli Maji won **Silver**."
  ],
  "staticGk": "Venue: Tashkent, Uzbekistan.",
  "trap": "≠ **Gold Winner:** Tomchou Meetei won Gold in Men's 60kg."
},
  {
  "id": "ca_2026_08_11_ashmita_chaliha_korea_masters",
  "secId": "sec10",
  "title": "Ashmita Chaliha Wins Korea Masters 2026 Women's Singles Title",
  "date": "2026-08-11",
  "hook": "Ashmita Chaliha won her 1st BWF World Tour title at Korea Masters 2026, defeating China's Han Qian Xi.",
  "bullets": [
    "**Champion:** Ashmita Chaliha (India) won **Women's Singles** (1st BWF title), defeating Han Qian Xi (China)."
  ],
  "staticGk": "Sport: Badminton (BWF World Tour Super 300).",
  "trap": "≠ **First Title:** Ashmita Chaliha's maiden BWF World Tour title."
},
  {
  "id": "ca_2026_08_11_tarun_chugh_highest_paid_ceo",
  "secId": "sec5",
  "title": "Bajaj Life's Tarun Chugh Emerges as Highest-Paid Life Insurance CEO in FY26 (₹33.66 Cr)",
  "date": "2026-08-11",
  "hook": "Tarun Chugh (MD & CEO Bajaj Allianz Life) was highest-paid life insurance executive in FY26 with ₹33.66 crore remuneration.",
  "bullets": [
    "**Remuneration:** Tarun Chugh received **₹33.66 crore** in FY2025–26.",
    "**Designation:** MD & CEO of Bajaj Allianz Life Insurance."
  ],
  "staticGk": "IRDAI Salary Guidelines apply to private life insurance CEOs.",
  "trap": "≠ **Remuneration:** ₹33.66 crore."
}
];
