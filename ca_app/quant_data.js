const QUANT_CHAPTERS = [
  {
    "icon": "📐",
    "id": "qsec1",
    "title": "1. 📐 Mensuration",
    "subsections": [
      {
        "type": "table",
        "rows": [
          [
            "Square (side a)",
            "a²",
            "Perimeter = 4a | Diagonal = a√2",
            "Area = ½ × (Diagonal)²"
          ],
          [
            "Rectangle (l, b)",
            "l × b",
            "Perimeter = 2(l+b) | Diagonal = √(l²+b²)",
            "Max area for fixed perimeter is a Square"
          ],
          [
            "Equilateral Triangle (a)",
            "(√3 / 4) a²",
            "Perimeter = 3a | Height h = (√3 / 2) a",
            "Inradius r = a/(2√3) | Circumradius R = a/√3"
          ],
          [
            "Circle (radius r)",
            "π r²",
            "Circumference = 2π r",
            "Area of semi-circle = ½ π r²"
          ]
        ],
        "title": "1.1 2D Shape Formulas & Applications",
        "subId": "qsec1-1",
        "headers": [
          "Shape",
          "Area Formula",
          "Perimeter / Diagonal Formula",
          "Key Exam Relationship"
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Cube (side a)",
            "a³",
            "LSA = 4a²",
            "TSA = 6a² | Diagonal = a√3"
          ],
          [
            "Cylinder (radius r, height h)",
            "π r² h",
            "CSA = 2π r h",
            "TSA = 2π r (h + r)"
          ],
          [
            "Right Cone (r, h, slant l)",
            "⅓ π r² h",
            "CSA = π r l  (where l = √(r²+h²))",
            "TSA = π r (l + r)"
          ],
          [
            "Sphere (radius r)",
            "(4/3) π r³",
            "Surface Area = 4π r²",
            "TSA = 4π r²"
          ]
        ],
        "title": "1.2 3D Solid Formulas & Worked Methods",
        "subId": "qsec1-2",
        "headers": [
          "Solid Shape",
          "Volume Formula",
          "Curved Surface Area (CSA)",
          "Total Surface Area (TSA) & Diagonal"
        ]
      },
      {
        "type": "bullets",
        "items": [
          "**Frustum of cone** (R, r, h, slant l): Volume = (πh/3)(R²+r²+Rr); l = √(h²+(R−r)²); CSA = π(R+r)l; TSA = π(R+r)l + πR² + πr²",
          "**Cone on cylinder** (ice-cream/tent): Volume = πr²h_cyl + ⅓πr²h_cone",
          "**Hemisphere on cylinder**: Volume = πr²h + (2/3)πr³; CSA = 2πrh + 2πr²",
          "**Sphere inscribed in cube** (side a): sphere radius = a/2; sphere vol / cube vol = π/6",
          "**Cylinder with hole bored through**: Remaining volume = πh(R²−r²); adds inner CSA = 2πrh"
        ],
        "title": "1.3 Frustum & Combined Solids",
        "subId": "qsec1-3"
      },
      {
        "type": "bullets",
        "items": [
          "**Scaling rule**: sides ×k → area ×k², volume ×k³",
          "**Pythagorean triples**: 3-4-5, 6-8-10, 9-12-15, 5-12-13, 8-15-17, 7-24-25, 20-21-29",
          "**Melting/recasting**: volume conserved; n small spheres from big sphere: n = (R/r)³",
          "**Same-perimeter comparison**: circle area > square area > equilateral triangle area",
          "**Path/border problems**: outer path area = (l+2w)(b+2w) − lb; inner path = lb − (l−2w)(b−2w)",
          "**Cylinder/cone/sphere quick facts**: cone vol = ⅓ cylinder (same r,h); sphere vol = ⅔ circumscribing cylinder; hemisphere = ½ sphere",
          "**% change compounding**: side +x% → area +(2x+x²/100)%; volume +(3x+3x²/100+x³/10000)%",
          "**Among same-volume solids**: sphere has least surface area; among same-surface solids, sphere has greatest volume",
          "**Rate problems**: flow rate × time = volume; keep units consistent",
          "**Cube roots to memorize**: 8 (2³), 27 (3³), 64 (4³), 125 (5³), 216 (6³), 343 (7³), 512 (8³), 729 (9³), 1000 (10³)"
        ],
        "title": "1.4 Shortcuts & Mains-Level Tricks",
        "subId": "qsec1-4"
      },
      {
        "type": "examples",
        "items": [
          {
            "q": "Cone on cylinder — total volume. r=7, cylinder h=10, cone h=6.",
            "sol": "Cylinder vol = πr²h = (22/7)(49)(10) = 1540. Cone vol = ⅓πr²h = 308. Total = 1848.\n*Pattern: split solid → apply each formula → add volumes.*"
          },
          {
            "q": "Sphere melted into cones. Sphere r=6 melted into cones of r=3, h=4.",
            "sol": "Sphere vol = (4/3)π(216) = 288π. One cone vol = ⅓π(9)(4) = 12π. Number of cones = 288π/12π = 24.\n*Pattern: recast problems → total volume conserved → divide.*"
          },
          {
            "q": "Painting cost — hemisphere on cylinder (open top). r=3.5, cylinder h=8, rate ₹5/cm².",
            "sol": "CSA cylinder = 2πrh = 176. CSA hemisphere = 2πr² = 77. Total = 253, cost = ₹1265.\n*Pattern: identify only the surfaces actually exposed before adding.*"
          },
          {
            "q": "Frustum bucket — capacity + metal sheet. R=20, r=12, h=15.",
            "sol": "Capacity = (πh/3)(R²+r²+Rr). Slant l = √(h²+(R−r)²) = √(225+64) = 17. Metal sheet = π(R+r)l + πr².\n*Pattern: bucket/tub questions want slant height for CSA — always compute (R−r) first.*"
          }
        ],
        "title": "1.5 Worked Examples",
        "subId": "qsec1-5"
      }
    ]
  },
  {
    "icon": "🧮",
    "id": "qsec2",
    "title": "2. 🧮 Arithmetic",
    "subsections": [
      {
        "type": "bullets",
        "items": [
          "**Simple Interest**: SI = (P×R×T)/100; Amount = P+SI; P = (SI×100)/(R×T)",
          "**Compound Interest**: A = P(1+R/100)ⁿ; CI = A−P; half-yearly → rate/2, time×2; quarterly → rate/4, time×4",
          "**Profit & Loss**: Profit% = (SP−CP)/CP×100; Loss% = (CP−SP)/CP×100; SP = CP(1±P/100); MP(1−discount%) = SP",
          "**Time & Work**: Work = Rate×Time; 1 day's work = 1/n; combined rate = 1/A+1/B; efficiency ratio is inverse of time ratio",
          "**Time, Speed & Distance**: Distance = Speed×Time; km/h→m/s ×5/18; m/s→km/h ×18/5; avg speed (equal distance) = 2xy/(x+y)",
          "**Averages**: Average = sum/count; new term added → new avg shifts by (new term−old avg)/new count; avg of consecutive n numbers = middle term",
          "**Mixture & Alligation**: Cheaper:Dearer = (Dearer−Mean):(Mean−Cheaper); replacement: final = P(1−x/n)ⁿ",
          "**Partnership**: profit share ∝ capital×time invested; A:B ratio = (Ca×Ta):(Cb×Tb)"
        ],
        "title": "2.1 Core Formulas",
        "subId": "qsec2-1"
      },
      {
        "type": "bullets",
        "items": [
          "**CI−SI difference (2 yrs)**: P(R/100)²; (3 yrs): P(R/100)²[(R/100)+3]",
          "**Successive % change**: net% = a+b+(ab/100), negative for decrease",
          "**Inverse % trick**: if A is x% more than B, B is [x/(100+x)]×100% less than A",
          "**Time-work LCM method**: assume total work = LCM of given days; efficiency = total work/days taken",
          "**Alligation cross-diagram**: cheaper & dearer at ends, mean in middle, ratio = cross-difference",
          "**Faulty weight/dishonest dealer**: Profit% = (true wt − false wt)/false wt × 100",
          "**Fraction-to-% table**: 1/3=33.3%, 1/4=25%, 1/5=20%, 1/6=16.67%, 1/7=14.28%, 1/8=12.5%, 1/9=11.11%, 1/11=9.09%, 1/12=8.33%"
        ],
        "title": "2.2 Shortcuts & Tricks",
        "subId": "qsec2-2"
      },
      {
        "type": "examples",
        "items": [
          {
            "q": "CI−SI difference to find principal. diff(2yr)=64, R=8%.",
            "sol": "64 = P(0.08)² → P = 64 / 0.0064 = ₹10,000.\n*Pattern: use the direct difference formula, never compute full SI and CI separately.*"
          },
          {
            "q": "Partnership with time gap. A invests ₹5000 for 12 months, B invests ₹6000 for 8 months.",
            "sol": "A's unit = 60,000; B's unit = 48,000; Profit ratio = 5:4.\n*Pattern: multiply capital × actual months invested, not total duration.*"
          },
          {
            "q": "Work with efficiency change midway. A: 20 days, B: 30 days; B leaves after 6 days.",
            "sol": "Total work = LCM(20,30) = 60 units. A's rate = 3/day, B's rate = 2/day. 6 days together = 30 units done, 30 remain. A alone takes 30/3 = 10 more days.\n*Pattern: LCM method turns fraction-heavy problems into clean integers.*"
          },
          {
            "q": "Mixture with repeated replacement. 80L milk, 8L replaced with water twice.",
            "sol": "Milk left = 80(1−8/80)² = 80(0.81) = 64.8L.\n*Pattern: repeated-replacement uses (1−x/n)ⁿ directly.*"
          }
        ],
        "title": "2.3 Worked Examples",
        "subId": "qsec2-3"
      }
    ]
  },
  {
    "icon": "📊",
    "id": "qsec3",
    "title": "3. 📊 Data Interpretation",
    "subsections": [
      {
        "type": "bullets",
        "items": [
          "**Tabular DI**: read all headers first; missing values from given totals/ratios; cross-check row=column=grand total",
          "**Pie chart**: degree = (value/total)×360°; % = degree/3.6; 1% = 3.6°",
          "**Bar/line graph**: growth% = (new−old)/old×100; CAGR ≈ [(final/initial)^(1/n)−1]×100; watch dual-axis units",
          "**Caselet DI**: extract facts into a small table; track relations as equations; solve in the order revealed",
          "**Missing DI (interlinked sets)**: fill known values first, use total/ratio constraints for the rest"
        ],
        "title": "3.1 Core Concepts & Formats",
        "subId": "qsec3-1"
      },
      {
        "type": "bullets",
        "items": [
          "**Approximate before exact**: round to nearest 10/100 to estimate range first; calculate exactly only if options are close",
          "**Option elimination**: use unit digit/rough magnitude to eliminate 2-3 options instantly",
          "**Visual estimation**: for highest/lowest questions, read directly off the chart",
          "**Total-first trick**: compute grand total once, reuse across the whole question set",
          "**Fraction shortcut reuse**: apply the 1/n → % table from Arithmetic to pie/ratio questions"
        ],
        "title": "3.2 Shortcuts & Estimation Tricks",
        "subId": "qsec3-2"
      },
      {
        "type": "examples",
        "items": [
          {
            "q": "Pie chart % to actual value. Total students=7200, sector=90°.",
            "sol": "% = 90 / 3.6 = 25%. Value = 25% of 7200 = 1800.\n*Pattern: convert degree→% once, then treat as a normal % of total question.*"
          },
          {
            "q": "Two pie charts compared (ratio of actuals). Sales 2019=5000, 2020=6000; X=20% in 2019, 25% in 2020.",
            "sol": "X(2019) = 1000, X(2020) = 1500. Growth% = (1500-1000)/1000 × 100 = 50%.\n*Pattern: never compare two pie %'s directly — convert to actual values first since totals differ.*"
          },
          {
            "q": "CAGR from bar graph. 2018=200, 2021=343 (3-year gap).",
            "sol": "Ratio = 343/200 = 1.715. Cube root ≈ 1.197 → CAGR ≈ 19.7%.\n*Pattern: recognize perfect-cube ratios (343=7³) to shortcut the root.*"
          }
        ],
        "title": "3.3 Worked Examples",
        "subId": "qsec3-3"
      }
    ]
  },
  {
    "icon": "🔢",
    "id": "qsec4",
    "title": "4. 🔢 Algebra & Quadratic Equations",
    "subsections": [
      {
        "type": "bullets",
        "items": [
          "**Basic identities**: (a+b)²=a²+2ab+b²; (a−b)²=a²−2ab+b²; a²−b²=(a+b)(a−b); (a+b)²−(a−b)²=4ab",
          "**Cube identities**: a³+b³=(a+b)(a²−ab+b²); a³−b³=(a−b)(a²+ab+b²); (a+b)³=a³+3a²b+3ab²+b³",
          "**Quadratic formula**: for ax²+bx+c=0, x = [−b±√(b²−4ac)]/2a; D = b²−4ac",
          "**Sum & product of roots**: sum=−b/a, product=c/a; equation from roots: x²−(sum)x+(product)=0",
          "**Nature of roots**: D>0 real unequal; D=0 real equal; D<0 no real roots; D perfect square → rational roots"
        ],
        "title": "4.1 Core Formulas & Identities",
        "subId": "qsec4-1"
      },
      {
        "type": "bullets",
        "items": [
          "**Quadratic comparison (two equations)**: find roots of both, compare all pairs; mixed relations → 'cannot be determined'",
          "**Fast factoring by inspection**: for x²+bx+c, find two numbers multiplying to c, adding to b",
          "**a+1/a expressions**: a²+1/a²=k²−2; a³+1/a³=k³−3k",
          "**a−1/a expressions**: a²+1/a²=k²+2; (a+1/a)²=(a−1/a)²+4"
        ],
        "title": "4.2 Shortcuts & Tricks",
        "subId": "qsec4-2"
      },
      {
        "type": "examples",
        "items": [
          {
            "q": "Quadratic comparison (x vs y). I. x²−7x+12=0  II. y²−9y+20=0.",
            "sol": "x = 3, 4. y = 4, 5. Checking pairs: 3<4, 3<5, 4=4, 4<5 → answer: x ≤ y.\n*Pattern: check ALL root pairs, not just one.*"
          },
          {
            "q": "a+1/a identity chain. a+1/a=5, find a³+1/a³.",
            "sol": "k³−3k = 125 − 15 = 110.\n*Pattern: never solve for a itself when only a combined expression is asked.*"
          }
        ],
        "title": "4.3 Worked Examples",
        "subId": "qsec4-3"
      }
    ]
  },
  {
    "icon": "📈",
    "id": "qsec5",
    "title": "5. 📈 Number Series & Approximation",
    "subsections": [
      {
        "type": "bullets",
        "items": [
          "**Simple difference series**: constant diff (+5); increasing diff (+3,+5,+7); multiplicative (×3)",
          "**Square/cube based**: n² (1,4,9,16,25); n²±k; n³±k",
          "**Alternating/mixed series**: two interleaved patterns — split into sub-series before finding the rule",
          "**Fibonacci-type**: each term = sum of previous two, or ± a constant",
          "**Wrong number series**: find pattern from majority of terms, spot the deviation; check both difference and ratio"
        ],
        "title": "5.1 Core Pattern Types",
        "subId": "qsec5-1"
      },
      {
        "type": "bullets",
        "items": [
          "**Check order**: differences → ratio → square/cube ± constant; if 1st diffs aren't constant, check 2nd-level diff",
          "**Gap size reading**: small growing gaps → square/cube; doubling gaps → ×2 or Fibonacci; constant gaps → AP",
          "**Approximation rounding**: round to a value that simplifies arithmetic; round all terms in same direction to avoid compounding error"
        ],
        "title": "5.2 Shortcuts & Tricks",
        "subId": "qsec5-2"
      },
      {
        "type": "examples",
        "items": [
          {
            "q": "Second-level difference series. 3, 4, 8, 17, 33, ?",
            "sol": "Diffs = 1, 4, 9, 16 (squares). Next diff = 25. Next term = 33 + 25 = 58.\n*Pattern: when first differences aren't constant, check if they form a known sequence.*"
          },
          {
            "q": "Wrong number in series. 5, 10, 20, 41, 80, 161.",
            "sol": "Expected ×2 pattern: 5, 10, 20, 40, 80, 160. 41 is the wrong term (should be 40).\n*Pattern: locate base pattern from majority, then find single deviation.*"
          }
        ],
        "title": "5.3 Worked Examples",
        "subId": "qsec5-3"
      }
    ]
  },
  {
    "icon": "❓",
    "id": "qsec6",
    "title": "6. ❓ Data Sufficiency",
    "subsections": [
      {
        "type": "bullets",
        "items": [
          "**Standard answer choices**: I alone sufficient (II not); II alone sufficient (I not); either alone sufficient; both together needed; neither alone nor together sufficient",
          "**Evaluation order**: test statement I alone first, then II alone independently — only combine if both fail alone",
          "**Meaning of 'Sufficient'**: gives exactly ONE definite answer; multiple possible values = not sufficient, even for yes/no questions"
        ],
        "title": "6.1 Core Evaluation Rules",
        "subId": "qsec6-1"
      },
      {
        "type": "bullets",
        "items": [
          "**Don't fully solve, just check**: stop the moment sufficiency is confirmed — you don't need the actual numerical answer",
          "**Quadratic-in-disguise trap**: x²=25 is NOT sufficient for 'find x' unless sign is constrained — always check for ±",
          "**Ratio-only statements**: rarely sufficient alone for absolute quantity; often enough for comparison"
        ],
        "title": "6.2 Shortcuts & Tricks",
        "subId": "qsec6-2"
      },
      {
        "type": "examples",
        "items": [
          {
            "q": "Quantity-based: find the number. Is x known? I. x²=49. II. x is a positive integer.",
            "sol": "I alone → x=±7 (insufficient). II alone → any positive integer (insufficient). Combined → x=7 only. Both together needed.\n*Pattern: squares carry a hidden ± unless a sign constraint is also given.*"
          },
          {
            "q": "Comparison-based: is x>y? I. x=y+5. II. y>0.",
            "sol": "I alone → x=y+5 means x>y always, regardless of y (sufficient). II alone → tells nothing about relation. Answer: I alone sufficient.\n*Pattern: a direct algebraic relation between two variables is often enough alone.*"
          }
        ],
        "title": "6.3 Worked Examples",
        "subId": "qsec6-3"
      }
    ]
  },
  {
    "icon": "🎲",
    "id": "qsec7",
    "title": "7. 🎲 Permutation, Combination & Probability",
    "subsections": [
      {
        "type": "bullets",
        "items": [
          "**Permutation (order matters)**: ⁿPr = n!/(n−r)!; arrangements of n distinct items = n!; with repetition allowed: nʳ",
          "**Combination (order doesn't matter)**: ⁿCr = n!/[r!(n−r)!]; ⁿCr = ⁿC(n−r); ⁿC0 = ⁿCn = 1",
          "**Repeated items / circular**: arrangement with repeats = n!/(p!×q!×...); circular arrangement of n items = (n−1)!; circular where clockwise=anticlockwise = (n−1)!/2",
          "**Basic probability**: P(event) = favorable/total; 0≤P(event)≤1; P(not A) = 1−P(A)",
          "**Combined events**: P(A or B) = P(A)+P(B)−P(A and B); mutually exclusive: P(A or B)=P(A)+P(B); independent: P(A and B)=P(A)×P(B)"
        ],
        "title": "7.1 Core Formulas",
        "subId": "qsec7-1"
      },
      {
        "type": "bullets",
        "items": [
          "**P vs C decision rule**: does order matter? Seating/ranking/passwords → Permutation; selecting a team/committee → Combination",
          "**'Together'/'never together' trick**: bundle together-items as one unit, arrange, then arrange within bundle; never together = total − together",
          "**Complement trick for probability**: 'at least one' → 1 − P(none), much faster than summing 'exactly k' cases"
        ],
        "title": "7.2 Shortcuts & Tricks",
        "subId": "qsec7-2"
      },
      {
        "type": "examples",
        "items": [
          {
            "q": "Word arrangement with repeated letters. Arrangements of letters in 'BANANA'.",
            "sol": "6 letters, A repeats 3×, N repeats 2×. Total = 6!/(3!×2!) = 720/12 = 60.\n*Pattern: always divide by factorial of each repeated letter's count.*"
          },
          {
            "q": "Independent events — at least one success. A hits target with prob 0.6, B with prob 0.5.",
            "sol": "P(both miss) = 0.4×0.5 = 0.2. P(at least one hits) = 1−0.2 = 0.8.\n*Pattern: 'at least one' in probability always converts fastest via 1−P(none).*"
          }
        ],
        "title": "7.3 Worked Examples",
        "subId": "qsec7-3"
      }
    ]
  },
  {
    "icon": "📝",
    "id": "qsec8",
    "title": "8. 📝 PYQ Practice — SBI/IBPS/RRB/RBI Style",
    "subsections": [
      {
        "type": "examples",
        "items": [
          {
            "q": "Q1 (SBI PO Mains 2025). A cuboid has TSA = 94 cm² and volume = 60 cm³. Length, breadth, height are positive consecutive integers with l < b < h. Compare: Quantity I = LSA of the cuboid vs Quantity II = TSA of a cube with side = b.",
            "sol": "Try consecutive integers whose product is 60: l=3, b=4, h=5 → volume = 60 ✓. Check TSA: 2(lb+bh+hl) = 2(12+20+15) = 94 ✓.\n- LSA = 2h(l+b) = 2×5×7 = 70 cm²\n- Cube TSA = 6×b² = 6×16 = 96 cm²\n- Quantity I < Quantity II"
          },
          {
            "q": "Q2 (SBI PO Mains 2022). A cylindrical vessel has milk:water = 4:5. After selling x ml and replacing with pure milk, ratio becomes 57:60. Quantity sold = 108 ml less than initial quantity. If radius = 0.7 cm and 37 cm³ of the vessel is empty, find the height.",
            "sol": "Initial mixture = 117 ml. Total vessel volume = 117+37 = 154 cm³.\nπr²h = 154 → (22/7)(0.7)²h = 154 → h = 100 cm."
          }
        ],
        "title": "8.1 Mensuration PYQs",
        "subId": "qsec8-1"
      },
      {
        "type": "examples",
        "items": [
          {
            "q": "Q1 (SBI PO Mains 2025). A completes work in 20 days. B takes 2x% more days than A, C takes x% more days than B. Time taken by C alone = sum of times taken by A and B alone. Find time for all three together to complete 11× the work.",
            "sol": "Time(B)=20(1+2x%), Time(C)=20(1+2x%)(1+x%). Given Time(C)=Time(A)+Time(B):\n(1+2x%)(1+x%) = 2(1+x%) → 1+2x% = 2 → x=50.\nB=40 days, C=60 days. LCM(20,40,60)=120 units work. Efficiencies: A=6, B=3, C=2 → combined=11/day.\nTime for 11× the work = 11×120/11 = 120 days."
          }
        ],
        "title": "8.2 Arithmetic PYQs",
        "subId": "qsec8-2"
      },
      {
        "type": "examples",
        "items": [
          {
            "q": "Q1 (SBI PO Mains 2022). Equation 1: a²−7a+d=0, roots x and y. Equation 2: b²−4b+(d−9)=0, roots x and (y−x). Find d.",
            "sol": "From eq.1: x+y=7, xy=d. From eq.2: sum of roots = x+(y−x) = y = 4 → x=3. d = xy = 3×4 = 12."
          },
          {
            "q": "Q2 (SBI PO Mains 2022). Wrong-number series: 5, 6, 8, 14, 38, 168, 878, 5918.",
            "sol": "Differences: 1,2,6,24,120,720,5040 = 1!,2!,3!,4!,5!,6!,7!.\n5+1!=6✓, 6+2!=8✓, 8+3!=14✓, 14+4!=38✓, 38+5!=158 (not 168 — wrong term).\nSo 168 should be 158."
          }
        ],
        "title": "8.3 Data Interpretation & Algebra PYQs",
        "subId": "qsec8-3"
      }
    ]
  }
];
