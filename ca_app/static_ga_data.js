// Static GA Master Book — 44 Chapters Dataset (SBI PO & IBPS PO Mains)

const STATIC_GA_CHAPTERS = [
  {
    id: "ch1",
    num: 1,
    title: "Chapter 1: Appointments (Regulatory, Financial & Cabinet)",
    icon: "👔",
    subsections: [
      {
        subId: "ch1-sub1",
        title: "Part 1: Regulatory & Apex Bodies (RBI, SEBI, IRDAI, PFRDA, IFSCA)",
        type: "table",
        headers: ["Person", "Position", "Entity", "Effective Date", "Predecessor / Status", "Key Background Details"],
        rows: [
          ["Sanjay Malhotra", "26th Governor", "Reserve Bank of India (RBI)", "Dec 11, 2024", "Shaktikanta Das", "1990-batch IAS (Rajasthan); served as Revenue Secretary in Ministry of Finance."],
          ["Tuhin Kanta Pandey", "Chairperson", "SEBI", "March 1, 2025", "Madhabi Puri Buch", "1987-batch IAS (Odisha); served as Finance Secretary and DIPAM Secretary."],
          ["Ajay Seth", "Chairperson", "IRDAI", "Sept 1, 2025", "Debasish Panda", "1987-batch IAS (Karnataka); served as Finance Secretary and Economic Affairs (DEA) Secretary."],
          ["Sivasubramanian Ramann", "Chairperson", "PFRDA", "June 20, 2025", "Deepak Mohanty", "Appointed for 5-year term (or till age 65); former SIDBI Chairman."],
          ["K. Rajaraman", "Chairperson", "IFSCA", "Aug 1, 2023", "Initial Term", "1989-batch IAS (Tamil Nadu); tenure extended in July 2026 for 27 months (till Oct 2028)."]
        ]
      },
      {
        subId: "ch1-sub2",
        title: "Deep Dive: RBI Deputy Governors (2025–2026 Transitions)",
        type: "bullets",
        items: [
          "**Statutory Limit:** The RBI has a statutory limit of **four Deputy Governors**.",
          "**Shri Rohit Jain (Assumed May 4, 2026):** 3-year term; succeeded T. Rabi Sankar; formerly ED at RBI. Portfolios: FinTech, Financial Markets Regulation, Foreign Exchange, IT.",
          "**Shri Shirish Chandra Murmu (Assumed Oct 9, 2025):** 3-year term; succeeded M. Rajeshwar Rao; formerly ED at RBI. Portfolios: Regulation, Payment & Settlement, Currency Management, Enforcement.",
          "**Dr. Poonam Gupta (Assumed May 2, 2025):** 3-year term; former DG of NCAER; worked at IMF, World Bank. Portfolios: Monetary Policy, Financial Stability, Economic Research.",
          "**Shri Swaminathan J (Assumed June 26, 2023):** Reappointed on **June 26, 2026** for a further 2-year term. Portfolios: Supervision, Inspection."
        ]
      },
      {
        subId: "ch1-sub3",
        title: "Part 2: Public Sector Banks (PSB) & Financial Intermediaries",
        type: "table",
        headers: ["Person", "Position", "Entity", "Effective Date / Term", "Predecessor / Status"],
        rows: [
          ["Challa Sreenivasulu Setty", "27th Chairman", "State Bank of India (SBI)", "Aug 28, 2024", "Succeeded Dinesh Kumar Khara (3-year term)."],
          ["Brajesh Kumar Singh", "MD & CEO", "Canara Bank", "May 30, 2026", "Succeeded K. Satyanarayana Raju."],
          ["Ashok Chandra", "MD & CEO", "Punjab National Bank (PNB)", "Jan 16, 2025", "Assumed charge."],
          ["Binod Kumar", "MD & CEO", "Indian Bank", "Jan 16, 2025", "Assumed charge."],
          ["Asheesh Pandey", "MD & CEO", "Union Bank of India", "Oct 2025", "Appointed for 3-year term."],
          ["Kalyan Kumar", "MD & CEO", "Central Bank of India", "Mid-2025", "Appointed for 3-year term."],
          ["Rajneesh Karnatak", "MD & CEO", "Bank of India", "April 2026", "Term extended for 3 years by central government."],
          ["Shaji K. V.", "Chairman", "NABARD", "Dec 7, 2022", "Succeeded G. R. Chintala."],
          ["Harsha Bangari", "Managing Director", "EXIM Bank", "Sept 2021", "Appointed for 3-year term."],
          ["Rajkiran Rai G.", "Managing Director", "NaBFID", "Aug 8, 2022", "Appointed for term ending May 18, 2027."],
          ["Manoj Mittal", "Chairman & MD", "SIDBI", "July 2024", "Succeeded Sivasubramanian Ramann."],
          ["Sanjay Shukla", "Managing Director", "NHB", "July 30, 2024", "Succeeded Sarada Kumar Hota."]
        ]
      },
      {
        subId: "ch1-sub4",
        title: "Exam Revision Corner (Appointments)",
        type: "examCorner",
        items: [
          "≠ **Discriminator:** Pay close attention to RBI Deputy Governor predecessor matches: Rohit Jain succeeded *T. Rabi Sankar* (NOT M. Rajeshwar Rao); Shirish Chandra Murmu succeeded *M. Rajeshwar Rao*.",
          "⚠️ **Trap Alert:** Do not confuse the designation of **Finance Secretary** (conventionally senior-most secretary in Ministry of Finance) with secretary of a specific department. As of August 2026, the post of Finance Secretary officially remains vacant.",
          "⚠️ **Successor Trap:** Note that *Sivasubramanian Ramann* succeeded Deepak Mohanty as PFRDA Chairperson in June 2025. Do not confuse him with his former role as SIDBI Chairman (succeeded by Manoj Mittal).",
          "🔗 **Mnemonic for RBI Deputy Governors (2025–26):** **Poonam, Rohit, Shirish, Swaminathan** -> **PRSS** (*Press the RBI button*)."
        ]
      }
    ]
  },
  {
    id: "ch2",
    num: 2,
    title: "Chapter 2: Government Schemes & Nodal Initiatives",
    icon: "🏛️",
    subsections: [
      {
        subId: "ch2-sub1",
        title: "Core Central Welfare Schemes (PMJDY, PMJJBY, PMSBY, PMMY, PM SVANidhi)",
        type: "bullets",
        items: [
          "**PMJDY (Jan Dhan Yojana):** Launched Aug 28, 2014 under Ministry of Finance (DFS). Latest stats: **58.63 crore accounts**, **₹3.08 lakh crore deposits**, 77.80% rural penetration, 55.74% women share. Overdraft limit: **₹10,000** (age 18–65). Free RuPay accident cover: **₹2 lakh**.",
          "**PMJJBY (Life Insurance):** Launched May 9, 2015. Age 18–50 yrs. Cover: **₹2 lakh** for death due to any cause. Premium: **₹436/year**.",
          "**PMSBY (Accident Insurance):** Launched May 9, 2015. Age 18–70 yrs. Cover: **₹2 lakh** for accidental death/full disability; **₹1 lakh** for partial disability. Premium: **₹20/year**.",
          "**PMMY (Mudra Yojana):** Shishu (up to ₹50k), Kishore (₹50k–₹5L), Tarun (₹5L–₹10L). **Budget 2024-25 Enhancement:** Introduced **Tarun Plus** raising loan limit from **₹10 lakh to ₹20 lakh** for prompt repayers.",
          "**PM SVANidhi (Street Vendors):** Nodal Ministry: **MoHUA** (NOT MoF/MSME). Extended to **Dec 31, 2027** under PM SVANidhi 2.0. 1st Tranche ₹10k, 2nd Tranche ₹20k, 3rd Tranche ₹50k. Interest subsidy: 7% p.a. Digital cashback: ₹1,200/year.",
          "**PM Vishwakarma:** Nodal: MSME + MSDE + DFS. Outlay **₹13,000 crore** (FY24–FY28) for 18 traditional trades. Collateral-free enterprise loan up to **₹3 lakh** (Tranche 1: ₹1L, Tranche 2: ₹2L) at 5% interest. Stipend ₹500/day; Toolkit ₹15,000 e-voucher.",
          "**PM-KISAN:** Launch Feb 24, 2019. Benefit **₹6,000/year** in 3 equal installments of ₹2,000. 23rd installment released June 20, 2026."
        ]
      },
      {
        subId: "ch2-sub2",
        title: "Indian Pension Architecture & Regulatory Shifts (NPS, APY, UPS, NPS Vatsalya)",
        type: "table",
        headers: ["Feature", "Old Pension Scheme (OPS)", "National Pension System (NPS)", "Unified Pension Scheme (UPS)"],
        rows: [
          ["Type", "Defined Benefit (Guaranteed)", "Defined Contribution (Market-Linked)", "Assured Benefit (Contributory-Linked)"],
          ["Employee Contribution", "0%", "10% of Basic + DA", "10% of Basic + DA"],
          ["Employer/Govt Contribution", "Funded by Govt budget", "14% of Basic + DA", "18.5% of Basic + DA"],
          ["Inflation Protection", "Yes (DA linked)", "No (Market dependent)", "Yes (DR linked to AICPI-IW)"],
          ["Minimum Pension", "No explicit floor", "No floor", "₹10,000/month (Min 10 yrs service)"],
          ["Lump-Sum at Exit", "Gratuity only", "Up to 80% (2025 Amendment)", "Gratuity + 1/10th basic+DA per 6-m service"]
        ]
      },
      {
        subId: "ch2-sub3",
        title: "Exam Revision Corner (Schemes & Pensions)",
        type: "examCorner",
        items: [
          "≠ **Discriminator:** Under PMMY, maximum loan ceiling is now **₹20 lakh** (Tarun Plus), NOT historical ₹10 lakh.",
          "⚠️ **The MoHUA Trap:** PM SVANidhi belongs to Ministry of Housing and Urban Affairs, NOT Ministry of Finance or MSME.",
          "⚠️ **PFRDA 2025 Exit Amendments:** Mandatory annuity purchase slashed from 40% to **20%**, allowing subscribers to withdraw up to **80% as tax-free lump sum** if corpus exceeds ₹12 lakh.",
          "⚠️ **NPS Vatsalya:** Minimum yearly contribution is **₹1,000/year** for minors (<18 yrs). Converts to standard NPS Tier I at age 18.",
          "⚠️ **UPS Contribution Split:** Under Unified Pension Scheme (effective April 1, 2025), Govt contribution rises to **18.5%**, while employee contribution remains **10%**."
        ]
      }
    ]
  },
  {
    id: "ch3",
    num: 3,
    title: "Chapter 3: Banking & Financial Sector Reforms",
    icon: "🏦",
    subsections: [
      {
        subId: "ch3-sub1",
        title: "Monetary Policy Stance & Rate Trajectory (2025–2026)",
        type: "table",
        headers: ["Policy Review Date", "Repo Rate", "Monetary Stance", "FY27 GDP Forecast", "FY27 CPI Forecast"],
        rows: [
          ["Dec 2024 (Baseline)", "6.50%", "Withdrawal of Accommodation", "—", "—"],
          ["Feb 2025 (-25 bps)", "6.25%", "Neutral", "—", "—"],
          ["Apr 2025 (-25 bps)", "6.00%", "Neutral", "—", "—"],
          ["Jun 2025 (-50 bps)", "5.50%", "Neutral", "—", "—"],
          ["Dec 2025 (-25 bps)", "5.25%", "Neutral", "—", "—"],
          ["Apr 2026 (Hold)", "5.25%", "Neutral", "6.9%", "4.6%"],
          ["Jun 2026 (Hold)", "5.25%", "Neutral", "6.6%", "5.1%"],
          ["Aug 2026 (Current)", "5.25%", "Neutral", "6.6%", "5.1%"]
        ]
      },
      {
        subId: "ch3-sub2",
        title: "SEBI Capital Markets Overhaul (T+0, MF Lite, F&O Restructuring, CAS)",
        type: "bullets",
        items: [
          "**T+0 Settlement:** Operational strictly for Equity Cash Segment covering top 500 capital-ranked stocks in 2026.",
          "**MF Lite Framework:** Effective March 16, 2025; codified under **SEBI (Mutual Funds) Regulations, 2026** (effective April 1, 2026) for passive schemes (Index Funds, ETFs).",
          "**F&O Restructuring:** Index derivative contract size raised to **₹15–20 lakh**; weekly expiries limited to **one benchmark index per exchange** (NSE: NIFTY 50; BSE: SENSEX). Extreme Loss Margin (ELM) +2% on expiry day.",
          "**Closing Auction Session (CAS - Aug 3, 2026):** Replaced 30-min VWAP calculation with a single price auction mechanism (3:20 PM - 3:30 PM order collection) for F&O-eligible cash stocks. F&O trading hours extended to 3:40 PM."
        ]
      },
      {
        subId: "ch3-sub3",
        title: "D-SIBs & Priority Sector Lending (PSL) Targets",
        type: "table",
        headers: ["Bank Category", "Overall PSL Target", "Key Sub-Targets"],
        rows: [
          ["Domestic Commercial Banks", "40% of ANBC / CEOBSE", "Agri: 18% (Small/Marginal Farmers: 10%), Micro Enterprises: 7.5%, Weaker Sections: 12%"],
          ["Regional Rural Banks (RRBs)", "75% of ANBC", "Weaker Sections: 15%"],
          ["Small Finance Banks (SFBs)", "75% of ANBC", "Micro Enterprises: 7.5%, Small/Marginal Farmers: 10%, Weaker Sections: 15%"],
          ["Urban Co-operative Banks (UCBs)", "75% of ANBC (Effective March 31, 2026)", "Weaker Sections: 12% (Effective March 31, 2026)"]
        ]
      },
      {
        subId: "ch3-sub4",
        title: "Exam Revision Corner (Banking & SEBI Reforms)",
        type: "examCorner",
        items: [
          "≠ **Discriminator:** The 2025 RBI easing cycle totaled **125 bps** across 4 cuts (25 + 25 + 50 + 25). The stance remained **Neutral** throughout.",
          "⚠️ **D-SIB CET1 Buckets:** SBI is in Bucket 4 (0.80% CET1 buffer), HDFC Bank in Bucket 2 (0.40%), ICICI Bank in Bucket 1 (0.20%). Bucket 5 (1.00%) is empty.",
          "⚠️ **UCB PSL Deadline:** The final 75% PSL compliance deadline for Urban Co-operative Banks was **March 31, 2026**.",
          "⚠️ **Key Fact Statement (KFS):** Mandates disclosure of **Annual Percentage Rate (APR)**—the all-inclusive annual cost of credit—before loan agreement execution."
        ]
      }
    ]
  },
  {
    id: "ch4",
    num: 4,
    title: "Chapter 4: Reports, Indices & Economic Indicators",
    icon: "📈",
    subsections: [
      {
        subId: "ch4-sub1",
        title: "Macroeconomic Modernization: Base Year Revisions (2026)",
        type: "table",
        headers: ["Indicator", "Old Base Year", "New Base Year (Feb 2026)", "Nodal Agency", "Key Data Inputs"],
        rows: [
          ["Gross Domestic Product (GDP)", "2011–12", "2022–23", "MoSPI (NSO)", "GST databases, MCA-21, PLFS data; implements double deflation."],
          ["Index of Industrial Production (IIP)", "2011–12", "2022–23", "MoSPI (NSO)", "Updated production data, renewable energy, electronics/telecom."],
          ["Consumer Price Index (CPI)", "2012", "2024", "MoSPI (NSO)", "HCES 2022-23 findings; basket expanded to 358 items."],
          ["Wholesale Price Index (WPI)", "2011–12", "2022–23", "DPIIT (Ministry of Commerce)", "Iron Ore added as 9th core industry (32.88% IIP weight)."]
        ]
      },
      {
        subId: "ch4-sub2",
        title: "Master Global Indices Matrix (India's Standing)",
        type: "table",
        headers: ["Index / Report", "Publishing Agency", "India Rank", "Top-Ranked Country", "Key Highlights"],
        rows: [
          ["Global Innovation Index (GII) 2024", "WIPO", "39th / 133", "Switzerland", "#1 among Lower Middle-Income economies and Southern Asia."],
          ["Logistics Performance Index (LPI)", "World Bank", "38th / 139", "Singapore", "Customs efficiency & infrastructure quality."],
          ["Human Development Index (HDI) 2023-24", "UNDP", "134th / 193", "Switzerland", "India score: 0.644 (Medium Human Development)."],
          ["Global Gender Gap Index 2024", "WEF", "129th / 146", "Iceland", "India parity score: 64.1%."],
          ["World Happiness Report 2025", "UN SDSN", "118th / 143", "Finland", "Up from 126th in 2024."]
        ]
      },
      {
        subId: "ch4-sub3",
        title: "Exam Revision Corner (Reports & Indices)",
        type: "examCorner",
        items: [
          "≠ **Base Year Split:** CPI base year is **2024**, while GDP, IIP, and WPI base years are **2022–23**.",
          "⚠️ **Nodal Agency Distinction:** WPI is compiled by **Office of Economic Adviser, DPIIT** (Ministry of Commerce), while GDP, IIP, and CPI are handled by **MoSPI (NSO)**.",
          "🔗 **Publisher Mnemonics:** WIPO -> GII (*With Great Innovation*); UNDP -> HDI (*Uniting Human Development*); WEF -> Gender Gap; World Bank -> LPI."
        ]
      }
    ]
  },
  {
    id: "ch6",
    num: 6,
    title: "Chapter 6: Union Budget 2026–27 & Economic Survey 2025–26",
    icon: "📜",
    subsections: [
      {
        subId: "ch6-sub1",
        title: "Economic Survey 2025–26 & Union Budget 2026–27 Highlights",
        type: "bullets",
        items: [
          "**Economic Survey GDP Growth:** Real GDP growth estimate for FY26 at **7.4%**; projected FY27 growth range at **6.8% to 7.2%**.",
          "**Banking Sector Health:** Gross Non-Performing Assets (GNPA) ratio dropped to multi-decade low of **2.2%** (Sept 2025).",
          "**Budget Macro Metrics:** Nominal GDP growth projected at **10%**; Fiscal Deficit target for FY27 set at **4.3% of GDP** (FY26 RE: 4.4%).",
          "**Capex Outlay:** Tabled at **₹12.2 lakh crore** (Budget allocation ₹11.80 lakh crore, ~3.4% of GDP). Total Budget expenditure: **₹53.5 lakh crore**.",
          "**Direct Tax Slabs (New Regime):** Nil up to ₹4L, 5% (₹4L–₹8L), 10% (₹8L–₹12L), 15% (₹12L–₹16L), 20% (₹16L–₹20L), 25% (₹20L–₹24L), 30% (>₹24L).",
          "**Tax Rebate & Deduction:** Sec 87A rebate ₹60,000 (tax-free limit **₹12 lakh**). Salaried standard deduction **₹75,000** (effective tax-free limit **₹12.75 lakh**)."
        ]
      },
      {
        subId: "ch6-sub2",
        title: "Exam Revision Corner (Budget & Survey)",
        type: "examCorner",
        items: [
          "≠ **GDP Projections Split:** Real GDP growth projection for FY27 is **6.8% to 7.2%** (Economic Survey), whereas Nominal GDP growth used in budget math is **10%**.",
          "⚠️ **The Fiscal Deficit Targets:** FY27 Target = **4.3%**; FY26 Revised Estimate = **4.4%**.",
          "⚠️ **Tax-Free Thresholds:** Salaried individuals pay zero tax up to **₹12.75 lakh** (₹12L rebate + ₹75k standard deduction). Non-salaried pay zero tax up to **₹12 lakh**."
        ]
      }
    ]
  },
  {
    id: "ch7",
    num: 7,
    title: "Chapter 7: Multilateral Development Banks (MDBs) & GDP Forecasts",
    icon: "🌐",
    subsections: [
      {
        subId: "ch7-sub1",
        title: "Master Directory of Multilateral Development Banks (MDBs)",
        type: "table",
        headers: ["Institution", "Headquarters", "Current Head", "Key Indian Appointees", "Member Count"],
        rows: [
          ["World Bank Group", "Washington D.C., USA", "Ajay Banga (14th President)", "Indermit Gill (Chief Economist & Senior VP)", "189 (IBRD)"],
          ["International Monetary Fund (IMF)", "Washington D.C., USA", "Kristalina Georgieva (MD)", "Gita Gopinath (First Deputy MD)", "190"],
          ["Asian Development Bank (ADB)", "Mandaluyong (Manila), Philippines", "Masato Kanda (President, Feb 2026)", "Bhargav Dasgupta (Vice President)", "68"],
          ["Asian Infrastructure Investment Bank (AIIB)", "Beijing, China", "Jin Liqun (President)", "Urjit Patel (Vice President)", "109"],
          ["New Development Bank (NDB / BRICS Bank)", "Shanghai, China", "Dilma Rousseff (President)", "—", "9"]
        ]
      },
      {
        subId: "ch7-sub2",
        title: "India's Real GDP Growth Forecast Matrix (2025–2027)",
        type: "table",
        headers: ["Agency / Institution", "FY26 Forecast", "FY27 Forecast", "Primary Driver / Stance"],
        rows: [
          ["Reserve Bank of India (RBI)", "7.2%", "6.6% – 6.9%", "Cautious hold; monsoon & crude oil impact."],
          ["Economic Survey 2025-26", "7.4%", "6.8% – 7.2%", "PFCE at 61.5% of GDP."],
          ["Asian Development Bank (ADB)", "6.9%", "7.3%", "Rebound in FY27 via domestic demand."],
          ["World Bank", "7.0%", "6.6%", "Domestic consumption resilience."],
          ["International Monetary Fund (IMF)", "7.0%", "6.4%", "Anchored inflation; public capex push."],
          ["S&P Global Ratings (CRISIL)", "6.5%", "6.9%", "Strong domestic demand."],
          ["Fitch Ratings", "7.2%", "6.5%", "Robust manufacturing & credit growth."]
        ]
      },
      {
        subId: "ch7-sub3",
        title: "Exam Revision Corner (MDBs & Forecasts)",
        type: "examCorner",
        items: [
          "≠ **Leadership Roles:** Ajay Banga = World Bank President; Gita Gopinath = IMF FDMD; Indermit Gill = World Bank Chief Economist; Urjit Patel = AIIB Vice President.",
          "⚠️ **MDB Headquarters Split:** ADB is in **Manila, Philippines**; AIIB is in **Beijing, China**; NDB is in **Shanghai, China**; World Bank & IMF are in **Washington D.C., USA**."
        ]
      }
    ]
  },
  {
    id: "ch11",
    num: 11,
    title: "Chapter 11: Static Banking Core Concepts & Regulatory Frameworks",
    icon: "🏛️",
    subsections: [
      {
        subId: "ch11-sub1",
        title: "NRI Account Architecture & Overseas Accounts Matrix",
        type: "table",
        headers: ["Account Type", "Currency Denomination", "Repatriability Status", "Taxability in India", "Eligible Depositors / Source"],
        rows: [
          ["NRE (Non-Resident External)", "INR (Indian Rupee)", "Fully & Freely Repatriable", "Tax-Exempt (Interest exempt)", "NRIs/PIOs using foreign earnings from abroad."],
          ["NRO (Non-Resident Ordinary)", "INR (Indian Rupee)", "Restricted / Partial (Up to $1M/yr under LRS)", "Taxable (Subject to TDS & DTAA)", "Used to manage income earned within India (rent, pension)."],
          ["FCNR(B) (Foreign Currency Non-Resident)", "Foreign Currency (USD, GBP, EUR, JPY, CAD, AUD)", "Fully & Freely Repatriable", "Tax-Exempt", "Kept strictly as Term/Fixed Deposits (1 to 5 years)."],
          ["SNRR (Special Non-Resident Rupee)", "INR (Indian Rupee)", "Repatriable", "Subject to tax rules", "Business operations in India by foreign entities (non-interest bearing)."]
        ]
      },
      {
        subId: "ch11-sub2",
        title: "Overseas Account Terminology & Money Supply Aggregates",
        type: "bullets",
        items: [
          "**Nostro Account ('Our account with you'):** An Indian bank's account held in a foreign bank abroad in foreign currency (e.g. SBI holding USD account with Citibank NY).",
          "**Vostro Account ('Your account with us'):** A foreign bank's account held in an Indian bank in India in INR (e.g. Sberbank Russia holding Rupee account with UCO Bank Kolkata).",
          "**Loro Account ('Their account'):** A third bank referencing another bank's Nostro/Vostro account."
        ]
      },
      {
        subId: "ch11-sub3",
        title: "RBI Money Supply Equations",
        type: "formula",
        items: [
          "M0 (Reserve Money) = Currency in Circulation + Bankers' Deposits with RBI + Other Deposits with RBI",
          "M1 (Narrow Money) = Currency with Public + Demand Deposits with Banking System + Other Deposits with RBI",
          "M2 = M1 + Savings Deposits with Post Office Savings Banks",
          "M3 (Broad Money - Policy Benchmark) = M1 + Time Deposits (Fixed Deposits) with Banking System",
          "M4 = M3 + Total Deposits with Post Office Savings Organisation (excl. NSC)"
        ]
      },
      {
        subId: "ch11-sub4",
        title: "Negotiable Instruments (NI) Act, 1881 Core Provisions",
        type: "table",
        headers: ["Instrument", "Section", "Key Parties", "Core Characteristic"],
        rows: [
          ["Promissory Note", "Section 4", "2 Parties: Maker & Payee", "Unconditional promise in writing signed by maker."],
          ["Bill of Exchange", "Section 5", "3 Parties: Drawer, Drawee, Payee", "Unconditional order in writing directing drawee to pay."],
          ["Cheque", "Section 6", "3 Parties: Drawer, Drawee (Banker), Payee", "Bill of Exchange drawn on a specified banker, payable on demand. Validity: 3 months."]
        ]
      },
      {
        subId: "ch11-sub5",
        title: "Exam Revision Corner (Static Banking)",
        type: "examCorner",
        items: [
          "≠ **NRE vs NRO Taxability:** NRE interest is tax-exempt and fully repatriable. NRO interest is taxable in India with restricted repatriability ($1M/yr).",
          "⚠️ **Cheque Dishonour (Section 138):** Dishonour due to insufficiency of funds is a cognizable criminal offense punishable with up to **2 years imprisonment** or fine up to **twice the cheque amount** (30-day statutory notice).",
          "🔗 **NI Act Sections:** Section 4 (Promissory Note), Section 5 (Bill of Exchange), Section 6 (Cheque), Section 138 (Dishonour penalty)."
        ]
      }
    ]
  },
  {
    id: "ch14",
    num: 14,
    title: "Chapter 14: RBI Core Monetary & Liquidity Tools",
    icon: "🏛️",
    subsections: [
      {
        subId: "ch14-sub1",
        title: "Master Rate Directory — Current RBI Interest Rate Corridor",
        type: "table",
        headers: ["Rate", "Current Value", "Definition & Role", "Direction of Flow"],
        rows: [
          ["Bank Rate", "5.75%", "Long-term lending rate without collateral; linked to MSF rate.", "RBI -> Banks"],
          ["Marginal Standing Facility (MSF)", "5.75%", "Emergency overnight borrowing rate (up to 2% SLR dip penalty). LAF Corridor Ceiling.", "RBI -> Banks"],
          ["Policy Repo Rate", "5.25%", "Overnight lending rate against G-Secs collateral. Central policy anchor.", "RBI -> Banks"],
          ["Standing Deposit Facility (SDF)", "5.00%", "Uncollateralised excess liquidity absorption rate. LAF Corridor Floor.", "Banks -> RBI"],
          ["Cash Reserve Ratio (CRR)", "4.00%", "Proportion of NDTL kept as cash with RBI (earns ZERO interest).", "Statutory Buffer"],
          ["Statutory Liquidity Ratio (SLR)", "18.00%", "Proportion of NDTL maintained in liquid assets (G-Secs, Gold, Cash).", "Statutory Pre-emption"]
        ]
      },
      {
        subId: "ch14-sub2",
        title: "LAF Corridor Visualised",
        type: "formula",
        items: [
          "CEILING -> MSF / Bank Rate = 5.75% (Emergency borrowing)",
          "ANCHOR -> Policy Repo Rate = 5.25% (Normal overnight borrowing)",
          "FLOOR -> SDF Rate = 5.00% (Parking surplus funds)",
          "LAF Corridor Width = ±50 bps around Policy Repo Rate"
        ]
      },
      {
        subId: "ch14-sub3",
        title: "Exam Revision Corner (RBI Monetary Tools)",
        type: "examCorner",
        items: [
          "≠ **Rate Hierarchy:** Floor = **SDF (5.00%)** < Anchor = **Repo (5.25%)** < Ceiling = **MSF / Bank Rate (5.75%)**.",
          "⚠️ **SDF vs Reverse Repo:** SDF is the operative floor since April 2022 without collateral. Reverse Repo (3.35%) is dormant.",
          "⚠️ **CRR Interest:** CRR cash deposits with RBI earn **ZERO interest**. SLR assets (G-Secs) earn market-linked coupon interest."
        ]
      }
    ]
  },
  {
    id: "ch15",
    num: 15,
    title: "Chapter 15: IRDAI Reforms, Insurance Sector & Bima Trinity",
    icon: "🛡️",
    subsections: [
      {
        subId: "ch15-sub1",
        title: "The Bima Trinity — IRDAI's Three-Pillar Inclusion Strategy",
        type: "bullets",
        items: [
          "**1. Bima Sugam (Digital Marketplace):** Unified online platform for buying, servicing, and claims settlement across all insurers (analogous to ONDC for insurance). Features e-Insurance Account (eIA) and instant Aadhaar/DigiLocker KYC.",
          "**2. Bima Vistaar (Composite Product):** Bundled, affordable composite policy for rural households combining **Life + Personal Accident + Health + Property/Asset cover** in one single policy.",
          "**3. Bima Vahak (Distribution Entity):** Women-led Self Help Group (SHG) or Gram Sabha corporate distribution entities licensed by IRDAI to sell Bima Vistaar at the village level.",
          "**4. Bima Sakhi (LIC's Women Agent Initiative):** LIC initiative launched Dec 9, 2024 to recruit women agents (age 18–70) with 3-year stipends (Yr 1: ₹7,000/mo, Yr 2: ₹6,000/mo, Yr 3: ₹5,000/mo) to sell LIC policies."
        ]
      },
      {
        subId: "ch15-sub2",
        title: "Insurance Laws (Amendment) Act, 2024 & IRDAI Profile",
        type: "table",
        headers: ["Parameter", "Pre-Amendment", "Post-Amendment (2024)"],
        rows: [
          ["FDI in Insurance", "74% (Automatic Route)", "100% (Full FDI permitted under governance rules)"],
          ["Composite Licenses", "Separate licenses for Life, General, Health", "Single entity can apply for a Composite License (Life + General + Health)"],
          ["Capital Norms", "₹100 crore fixed minimum paid-up capital", "Differentiated capital norms for different risk categories"],
          ["Surrender Value", "Longer lock-ins before guaranteed value", "Guaranteed surrender value from end of 1st policy year"]
        ]
      },
      {
        subId: "ch15-sub3",
        title: "Exam Revision Corner (Insurance & Bima Trinity)",
        type: "examCorner",
        items: [
          "≠ **Bima Trinity Distinction:** Bima Sugam = **Platform (Tech)**; Bima Vistaar = **Product (What is sold)**; Bima Vahak = **Channel (Distribution)**.",
          "⚠️ **Bima Sakhi vs Bima Vahak:** Bima Sakhi = LIC-specific women agents selling LIC policies. Bima Vahak = IRDAI-licensed multi-insurer SHG channels selling Bima Vistaar.",
          "⚠️ **FDI Limit:** 100% FDI permitted under automatic route in insurance.",
          "⚠️ **IRDAI HQ:** Located in **Hyderabad, Telangana** (shifted from New Delhi in 2001)."
        ]
      }
    ]
  },
  {
    id: "ch44",
    num: 44,
    title: "Chapter 44: Landmark Rural Reforms — VB-G RAM G Act 2025 & DAY-NRLM",
    icon: "🌾",
    subsections: [
      {
        subId: "ch44-sub1",
        title: "VB-G RAM G Act 2025 (MGNREGA Replacement) Framework",
        type: "table",
        headers: ["Parameter", "MGNREGA 2005 (Repealed)", "VB-G RAM G Act 2025 (Effective July 1, 2026)"],
        rows: [
          ["Statutory Guarantee", "100 days per household per FY", "125 days per household per FY (enhanced by 25 days)"],
          ["Funding Model", "Demand-based (100% wages, 75% material)", "Normative Budget Model (60:40 Centre:State; States bear excess)"],
          ["Agricultural Pause", "No explicit statutory pause window", "State Pause Window up to 60 days during peak sowing/harvesting"],
          ["Administrative Cap", "6% of total outlay", "9% of total outlay (enhanced for tech & capacity building)"],
          ["Attendance System", "Manual / NMMS app", "NMMS-enabled + Face Authentication-based systems"]
        ]
      },
      {
        subId: "ch44-sub2",
        title: "DAY-NRLM SHG Credit Framework & Subvention (FY 2025–26)",
        type: "bullets",
        items: [
          "**Nodal Bank:** **Indian Bank** appointed as Nodal Bank by Ministry of Rural Development for FY 2025–26.",
          "**Interest Subvention:** Up to ₹3 lakh = 7% interest rate charged to SHGs (**4.5% Govt subvention**). Above ₹3L to ₹5L = **5.0% Govt subvention**.",
          "**Collateral Relaxation (CGFMU):** No collateral up to **₹20 lakh** (CGFMU covers ₹10L–₹20L slab). Max 10% margin on portion > ₹10L.",
          "**Revolving Fund (RF):** ₹20,000 to ₹30,000 per SHG. NO capital subsidy is sanctioned under DAY-NRLM."
        ]
      },
      {
        subId: "ch44-sub3",
        title: "Exam Revision Corner (Rural Reforms & DAY-NRLM)",
        type: "examCorner",
        items: [
          "⚠️ **MGNREGA Repeal Date:** VB-G RAM G Act 2025 came into force on **July 1, 2026**, repealing MGNREGA 2005.",
          "⚠️ **Statutory Days Guarantee:** Enhanced to **125 days** per household per FY.",
          "⚠️ **Unemployment Allowance (Sec 11):** If work not provided within 15 days: First 30 days = **min 25% (1/4th) of wage**; Remaining = **min 50% (1/2)**.",
          "⚠️ **Collateral-Free Limit:** No collateral up to **₹20 lakh** for women SHGs under DAY-NRLM.",
          "🔗 **Mnemonic (VB-G RAM G 125-15-5-60):** 125 days work + 15 days assignment + 5 km radius + 60 days ag-pause."
        ]
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.STATIC_GA_CHAPTERS = STATIC_GA_CHAPTERS;
}
