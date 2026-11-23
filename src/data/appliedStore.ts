import { KnowledgeStore } from '../types/knowledge';

export const appliedStore: KnowledgeStore = {
  id: 'applied',
  title: 'Engineering, Computing & Applied Life Store',
  tagline: 'Computing, Logic, Personal Finance, Ecology, Statistics, Study Science, Engineering & Digital Media.',
  description:
    'Turn theory into everyday capability across software engineering, critical thinking, data literacy, mechanical engineering, digital safety, and life mastery.',
  imagePath: '/src/assets/images/store_applied_skills_1795350513444.jpg',
  imageAlt: 'Technical schematic connecting logic gate pathways, leaf vascular geometry, and modular spatial blocks',
  accentHex: '#4338CA',
  accentTextClass: 'text-indigo-700',
  accentBorderClass: 'border-indigo-200',
  accentBgSoftClass: 'bg-indigo-50',
  subjects: [
    {
      id: 'computer-science',
      storeId: 'applied',
      name: 'Computer Science & Algorithms',
      scopeSummary: 'Binary logic, algorithms, Big-O scaling, data structures, networks, and security.',
      topics: [
        {
          id: 'cs-complexity',
          title: 'Algorithms, Binary Search & Big-O Complexity',
          subtitle: 'Why finding one word in a million-page dictionary takes only 20 steps.',
          readMinutes: 7,
          corePrinciple: 'Algorithmic structure determines how work scales as input grows huge.',
          formulaOrFramework: 'Linear: O(n)   |   Binary Search: O(log₂ n)   |   2²⁰ = 1,048,576',
          levels: {
            explorer:
              'Instead of checking a dictionary page by page, jump straight to the middle and throw away the half you don’t need! Cutting a million pages in half takes just 20 jumps.',
            student:
              'Big-O tracks worst-case scaling; sorting enables O(log₂ n) binary search instead of O(n) linear scans.',
            mastery:
              'Asymptotic analysis, Master Theorem recurrences, and cache-aware B-trees govern real database throughput.',
          },
          keyTakeaways: [
            'Sorting once unlocks fast logarithmic lookup repeatedly.',
            'Halving repeatedly shrinks 1,000,000 items to 1 in 20 steps.',
            'Choosing clean data structures makes slow programs instantaneous.',
          ],
          realWorldApplication: 'Library indices and banking databases search billions of rows in milliseconds.',
          quiz: [
            {
              id: 'q-cs-1',
              prompt: 'At most how many comparisons does Binary Search need on 1,024 sorted items?',
              options: ['512', '100', '11', '2'],
              correctIndex: 2,
              explanation: '2¹⁰ = 1,024, so halving takes at most 10–11 steps.',
            },
          ],
        },
        {
          id: 'cs-internet',
          title: 'How the Internet Works: DNS, Packets & Servers',
          subtitle: 'What happens in 50 milliseconds when you tap a link on any website.',
          readMinutes: 6,
          corePrinciple: 'Data breaks into addressed packets routed independently across layered protocols.',
          formulaOrFramework: 'Domain Name → DNS Lookup (IP) → TCP/TLS Handshake → HTTP Packets',
          levels: {
            explorer:
              'Typing a web address is like looking up a friend’s street address in a phonebook (DNS). Your browser sends small numbered postcards (packets) through cables and Wi-Fi to the library computer (server), which mails back the page pieces so your screen draws them neatly!',
            student:
              'DNS translates human domain names into numeric IP addresses. TCP splits data into numbered packets and re-requests any dropped packet in order, TLS encrypts the channel, and HTTP requests HTML, CSS, images, and JSON payloads.',
            mastery:
              'Packet-switched internetworking decouples physical transport from application semantics across OSI/TCP-IP layers, using BGP autonomous-system routing, Anycast CDNs, and HTTP/3 over QUIC to eliminate head-of-line blocking.',
          },
          keyTakeaways: [
            'DNS acts as the internet’s phonebook translating names to IP numbers.',
            'Splitting files into small packets lets networks route around broken cables.',
            'Caching static files near users cuts load latency dramatically.',
          ],
          realWorldApplication:
            'Understanding DNS, HTTP status codes, and caching helps web builders diagnose bugs calmly.',
          quiz: [
            {
              id: 'q-cs-2',
              prompt: 'Which internet system translates human-readable names like "example.org" into numeric IP addresses?',
              options: ['CSS', 'DNS', 'USB', 'HTML'],
              correctIndex: 1,
              explanation: 'The Domain Name System (DNS) resolves domain names into IP addresses.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-cs-https',
          subjectId: 'computer-science',
          category: 'Conceptual',
          question: 'When a site uses HTTPS instead of HTTP, what is encrypted—and what remains visible?',
          shortAnswer: 'HTTPS encrypts URLs, pages, cookies, and passwords via TLS; domain name and IP remain visible.',
          detailedExplanation: {
            explorer:
              'HTTP is a postcard anyone can read; HTTPS locks your message in a safe box while keeping the building address on the outside.',
            student:
              'TLS verifies the server certificate and encrypts headers, query strings, and payloads against Wi-Fi eavesdroppers.',
            mastery:
              'TLS 1.3 provides 1-RTT ECDHE forward secrecy and AEAD authenticated encryption.',
          },
          stepByStep: [
            'Verify X.509 certificate.',
            'Establish session keys via ECDHE.',
            'Encrypt all HTTP traffic.',
          ],
          commonMisconception: 'HTTPS secures transit, not the trustworthiness of the site owner.',
        },
      ],
    },
    {
      id: 'logic',
      storeId: 'applied',
      name: 'Logic & Critical Reasoning',
      scopeSummary: 'Correlation vs causation, deductive validity, cognitive fallacies, and Bayes.',
      topics: [
        {
          id: 'logic-causation',
          title: 'Correlation vs. Causation & Confounding Variables',
          subtitle: 'Spotting misleading charts and hidden third causes.',
          readMinutes: 5,
          corePrinciple: 'Correlated trends do not prove causation without controlling confounders.',
          formulaOrFramework: 'A ~ B  ⇒  A→B,  B→A,  or Confounder C → (A, B)',
          levels: {
            explorer:
              'Ice cream sales and pool visits both rise in summer because sunny heat drives both—not because cones push people into pools!',
            student:
              'Randomized Controlled Trials break confounding by randomly assigning treatment vs control groups.',
            mastery:
              'Causal DAGs distinguish observational conditioning P(Y|X) from interventional P(Y|do(X)).',
          },
          keyTakeaways: [
            'Look for hidden third variables driving two trends together.',
            'Compare baseline rates before trusting dramatic headlines.',
            'Controlled trials test causes; correlations suggest hypotheses.',
          ],
          realWorldApplication: 'Double-blind medical trials prevent placebo expectations from skewing results.',
          quiz: [
            {
              id: 'q-logic-1',
              prompt: 'Cities with more firefighters suffer more total fire damage because:',
              options: [
                'Firefighters start fires',
                'City size is a confounder driving both more buildings at risk and larger fire departments',
                'Trucks attract lightning',
                'Water spreads fires',
              ],
              correctIndex: 1,
              explanation: 'Population size drives both variables simultaneously.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-logic-survivor',
          subjectId: 'logic',
          category: 'Analytical',
          question: 'What is Survivorship Bias?',
          shortAnswer: 'Drawing conclusions only from visible survivors while ignoring invisible failures.',
          detailedExplanation: {
            explorer:
              'Studying only planes that made it home hid where fatal engine hits destroyed missing planes!',
            student:
              'Abraham Wald realized missing bullet marks on engines marked fatal impact zones.',
            mastery:
              'Sample truncation distorts inference unless missing cohorts enter the denominator.',
          },
          stepByStep: [
            'Ask who disappeared from the sample.',
            'Inspect silent failure zones alongside visible successes.',
          ],
          commonMisconception: 'Copying famous winners often mimics lucky variance.',
        },
      ],
    },
    {
      id: 'life-finance',
      storeId: 'applied',
      name: 'Everyday Financial & Life Literacy',
      scopeSummary: 'Budgeting, emergency cushions, debt math, compounding, and lifelong financial calm.',
      topics: [
        {
          id: 'life-budget',
          title: 'Cash Cushion, High-Interest Debt & Habit Architecture',
          subtitle: 'Practical money rules anyone from age 10 to 70 can apply today.',
          readMinutes: 6,
          corePrinciple: 'Compounding favors early savers and punishes high-interest debt.',
          formulaOrFramework: 'Needs (50%)  |  Savings & Goals (20%)  |  Flexible (30%)  |  3–6 Mo Cushion',
          levels: {
            explorer:
              'Split pocket money into Spend, Save, and Share jars—waiting turns small coins into big freedom!',
            student:
              'Keep 3–6 months emergency savings to avoid 24% APR debt traps; clear highest-interest debt first.',
            mastery:
              'Automated savings defaults and low-overhead living build resilience across economic cycles.',
          },
          keyTakeaways: [
            'Clearing 24% debt equals a guaranteed 24% return.',
            'Emergency savings buy calm choices.',
            'Automate saving before discretionary spending.',
          ],
          realWorldApplication: 'Tracking recurring bills prevents silent budget leaks.',
          quiz: [
            {
              id: 'q-life-1',
              prompt: 'Why clear a 22% APR debt before chasing an uncertain 10% return?',
              options: [
                'Clearing 22% debt guarantees a 22% net saving',
                'Investments are illegal',
                'Debt vanishes yearly',
                'Banks prefer debt',
              ],
              correctIndex: 0,
              explanation: 'Eliminating guaranteed high interest beats uncertain lower yields.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-life-minimum',
          subjectId: 'life-finance',
          category: 'Quantitative',
          question: 'Why do minimum credit card payments keep borrowers in debt for years?',
          shortAnswer: 'Most of each small minimum covers monthly interest while barely shrinking principal.',
          detailedExplanation: {
            explorer:
              'Climbing up 10 inches while sliding back 9 inches takes forever!',
            student:
              'Paying above the minimum attacks principal directly and cuts years of compounding interest.',
            mastery:
              'Amortization schedules load interest heaviest early when principal balance is high.',
          },
          stepByStep: [
            'Compute monthly interest (APR/12 × Balance).',
            'Pay extra principal directly every month.',
          ],
          commonMisconception: 'Minimum payments are structured for lender yield, not fast payoff.',
        },
      ],
    },
    {
      id: 'ecology',
      storeId: 'applied',
      name: 'Ecology & Sustainable Agriculture',
      scopeSummary: 'Soil food webs, nitrogen fixation, composting, water conservation, and crops.',
      topics: [
        {
          id: 'eco-soil',
          title: 'Soil Microbiomes, Nitrogen Cycle & Regenerative Farming',
          subtitle: 'How living soil feeds crops, holds rainwater, and protects rivers.',
          readMinutes: 6,
          corePrinciple: 'Healthy soil is a living microbial web, not inert dust.',
          formulaOrFramework: 'Air N₂  →  Legume Rhizobium  →  Nitrates  →  Plant Protein',
          levels: {
            explorer:
              'One spoon of garden soil holds billions of tiny helpers! Beans host root bacteria that pull nitrogen straight from air.',
            student:
              'Crop rotation with legumes, cover crops, and compost rebuild soil organic matter and reduce runoff.',
            mastery:
              'Mycorrhizal networks expand phosphorus uptake while stabilizing aggregates against erosion.',
          },
          keyTakeaways: [
            'Cover crops protect topsoil from sun and monsoon washout.',
            'Rotating legumes replenishes nitrogen naturally.',
            'Excess fertilizer runoff triggers river algal blooms.',
          ],
          realWorldApplication: 'Drip irrigation and composting raise crop yields sustainably.',
          quiz: [
            {
              id: 'q-eco-1',
              prompt: 'Why do farmers rotate beans or lentils between grain harvests?',
              options: [
                'Legumes host bacteria that fix atmospheric nitrogen into soil',
                'Beans freeze soil',
                'Grains hate water',
                'Legumes remove oxygen',
              ],
              correctIndex: 0,
              explanation: 'Symbiotic Rhizobium bacteria enrich soil nitrogen naturally.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-eco-runoff',
          subjectId: 'ecology',
          category: 'Analytical',
          question: 'How does excess farm fertilizer end up suffocating river fish?',
          shortAnswer: 'Algae bloom rapidly, die, and bacterial decay consumes dissolved oxygen (eutrophication).',
          detailedExplanation: {
            explorer:
              'Thick algae block sunlight and die; bacteria eat them and use up fish oxygen!',
            student:
              'Aerobic bacterial decomposition of algal blooms strips dissolved O₂ from water.',
            mastery:
              'Spiking Biological Oxygen Demand creates hypoxic zones below 2 mg/L O₂.',
          },
          stepByStep: [
            'Nutrient runoff sparks algal bloom.',
            'Bacterial decay depletes dissolved oxygen.',
          ],
          commonMisconception: 'Oxygen crashes during decay, not initial algae growth.',
        },
      ],
    },
    {
      id: 'statistics',
      storeId: 'applied',
      name: 'Statistics & Data Literacy',
      scopeSummary: 'Mean vs median, probability, Bayes’ theorem, margins of error, and charts.',
      recommendedLabId: 'growth',
      topics: [
        {
          id: 'stat-averages',
          title: 'Mean vs. Median, Spread & Base-Rate Probability',
          subtitle: 'Why one billionaire skews averages—and why rare diseases need confirmatory tests.',
          readMinutes: 6,
          corePrinciple: 'Summary averages mislead unless paired with distribution spread and base rates.',
          formulaOrFramework: 'Mean = (Σ x_i)/n   |   Median = 50th Percentile   |   P(A|B) = P(B|A)P(A)/P(B)',
          levels: {
            explorer:
              'Nine kids with $5 plus one uncle with $1,000,000 gives an "average" over $100k—picking the middle kid (Median = $5) tells the honest story!',
            student:
              'Use Median/IQR for skewed data; use natural frequencies in Bayes’ rule to avoid false-positive traps.',
            mastery:
              'Robust estimators resist heavy tails while Bayesian odds updating guards against prosecutor fallacies.',
          },
          keyTakeaways: [
            'Check Mean vs Median on income or home charts.',
            'Watch for truncated Y-axes inflating small gaps.',
            'Include base rates when reading test accuracy.',
          ],
          realWorldApplication: 'Doctors confirm rare positive screens with independent second assays.',
          quiz: [
            {
              id: 'q-stat-1',
              prompt: 'Which measure best reflects typical household income when wealth is heavily skewed?',
              options: ['Mean', 'Median', 'Maximum', 'Range'],
              correctIndex: 1,
              explanation: 'Median sits at the 50th percentile unaffected by extreme outliers.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-stat-bayes',
          subjectId: 'statistics',
          category: 'Quantitative',
          question: 'Why does a 99% accurate test for a 1-in-1,000 condition yield ~91% false alarms on a first positive?',
          shortAnswer: 'Out of 1,000 people, 1 true positive and ~10 false positives occur (1 / 11 ≈ 9% true).',
          detailedExplanation: {
            explorer:
              'Among 1,000 people, 1 is sick and 999 are healthy; 1% mistakes on 999 healthy people make 10 false alarms vs 1 real match!',
            student:
              'Natural frequencies reveal P(Sick | Positive) = 1 / (1 + 10) ≈ 9.1%.',
            mastery:
              'Prior odds 1:999 × likelihood ratio 99 = posterior odds 99:999 (~9.02%).',
          },
          stepByStep: [
            'Convert rates to 1,000 people.',
            'Divide True Positives (1) by Total Positives (11).',
          ],
          commonMisconception: 'Confusing P(Pos|Sick) with P(Sick|Pos) is the Base-Rate Fallacy.',
        },
      ],
    },
    {
      id: 'study-science',
      storeId: 'applied',
      name: 'Learning Science & Study Systems',
      scopeSummary: 'Active recall, spaced repetition, Feynman summaries, deep focus, and exam mastery.',
      topics: [
        {
          id: 'study-feynman',
          title: 'Active Recall, Spaced Repetition & The Feynman Method',
          subtitle: 'Master massive subjects permanently in half the total study hours.',
          readMinutes: 6,
          corePrinciple: 'Plain-language self-testing reveals hidden gaps immediately.',
          formulaOrFramework: 'Study Block (25m) → Teach Without Notes → Fix Gaps → Space Review (1d, 3d, 7d, 21d)',
          levels: {
            explorer:
              'Read one page, close the book, and explain it to a little sibling! Wherever you get stuck, check that exact spot.',
            student:
              'Pause every 20–30 minutes to write and answer 3 recall questions; space reviews across days 1, 3, 7, and 21.',
            mastery:
              'Interleaved retrieval and elaborative interrogation build transferable schemas rather than brittle memorization.',
          },
          keyTakeaways: [
            'Never watch 4 hours straight passively; pause every 30 minutes for recall.',
            'Struggling to remember strengthens neural pathways.',
            'Mixing problem types builds exam confidence.',
          ],
          realWorldApplication: 'Top scholars use spaced recall cards to retain thousands of concepts calmly.',
          quiz: [
            {
              id: 'q-study-1',
              prompt: 'What is the Feynman Technique’s main goal?',
              options: [
                'Copying textbook sentences faster',
                'Exposing hidden gaps by explaining ideas simply without jargon',
                'Skipping practice problems',
                'Reading without breaks',
              ],
              correctIndex: 1,
              explanation: 'Simple plain explanations uncover exact points where understanding is shaky.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-study-longvideo',
          subjectId: 'study-science',
          category: 'Case Study',
          question: 'How do you master a 4-hour lecture without forgetting 80% tomorrow?',
          shortAnswer: 'Break into 30–40 minute blocks, write 3 self-test questions per block, and review missed ones next day.',
          detailedExplanation: {
            explorer:
              'Watch one small chapter, pause, write 3 main ideas in your own words, stretch, then continue!',
            student:
              'Active retrieval checkpoints prevent attention drift and convert passive watching into lasting memory.',
            mastery:
              'Segmented retrieval preserves working memory and creates spaced-repetition cues.',
          },
          stepByStep: [
            'Split long lectures into 30–40 min chunks.',
            'Write 2–3 recall questions per pause.',
            'Re-test missed answers on Day 1 and Day 4.',
          ],
          commonMisconception: 'Re-watching a 4-hour video twice wastes time compared to active recall pauses.',
        },
      ],
    },
    {
      id: 'engineering',
      storeId: 'applied',
      name: 'Civil & Mechanical Engineering',
      scopeSummary: 'Bridges, triangles & trusses, materials stress, gears, engines, and clean power.',
      topics: [
        {
          id: 'eng-structures',
          title: 'Why Bridges Use Triangles: Tension, Compression & Simple Machines',
          subtitle: 'How arches, trusses, levers, and gears multiply human strength safely.',
          readMinutes: 6,
          corePrinciple: 'Triangulated trusses transfer loads axially through tension and compression without folding.',
          formulaOrFramework: 'Stress σ = F / A   |   Mechanical Advantage = Output Force / Input Force',
          levels: {
            explorer:
              'Push on the corner of a square made from straws—it squishes flat into a diamond! Now push on a triangle made of straws—it stays rock solid without bending! That’s why cranes, bicycle frames, and giant steel bridges are packed with triangles.',
            student:
              'Engineering designs balance tension (pulling apart, like suspension cables) against compression (pushing together, like stone arches). Simple machines—levers, pulleys, inclined planes, and gears—trade larger distance for multiplied force while keeping total work (Force × Distance) conserved.',
            mastery:
              'Structural finite-element analysis evaluates Young’s modulus (E = σ/ε), shear bending moments, and safety factors against fatigue cycling, while thermodynamic Brayton/Rankine cycles and wind/solar inverters convert energy efficiently within Carnot bounds.',
          },
          keyTakeaways: [
            'Triangles cannot change shape without changing side lengths—making them naturally rigid.',
            'Steel excels in both tension and compression; concrete excels in compression and relies on steel rebar for tension.',
            'Factor of Safety builds extra strength above expected maximum loads.',
          ],
          realWorldApplication:
            'Every suspension bridge, apartment column, and bicycle gearset applies tension/compression balance and mechanical advantage.',
          quiz: [
            {
              id: 'q-eng-1',
              prompt: 'Why is steel rebar placed inside concrete beams and bridges?',
              options: [
                'To make concrete heavier',
                'Concrete resists squishing (compression) well, while steel resists pulling/stretching (tension)',
                'To change concrete color',
                'To dissolve rainwater',
              ],
              correctIndex: 1,
              explanation: 'Reinforced concrete pairs concrete’s compressive strength with steel’s tensile strength.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-eng-arch',
          subjectId: 'engineering',
          category: 'Conceptual',
          question: 'Why have stone arch bridges stood for over 2,000 years without modern steel?',
          shortAnswer: 'A curved arch channels heavy downward weight outward and downward along pure compression into solid stone abutments.',
          detailedExplanation: {
            explorer:
              'Squeeze a curved stone arch from the top—it just presses the stones tighter together like a locked keystone puzzle!',
            student:
              'Stone resists crushing compression tremendously well, whereas flat stone beams crack under bottom tension. Arches eliminate tensile bending.',
            mastery:
              'Parabolic/catenary thrust lines remain entirely inside the masonry middle-third core, keeping every joint strictly in compression.',
          },
          stepByStep: [
            'Compare tensile weakness vs compressive strength in stone.',
            'Trace downward load along curved arch ribs into ground abutments.',
          ],
          commonMisconception: 'The keystone doesn’t magically float—every voussoir stone locks under mutual compression.',
        },
      ],
    },
    {
      id: 'digital-media',
      storeId: 'applied',
      name: 'Digital Literacy, Media & AI Safety',
      scopeSummary: 'Fact-checking sources, deepfake awareness, password hygiene, and responsible AI use.',
      topics: [
        {
          id: 'dig-verify',
          title: 'Lateral Reading, Digital Privacy & Evaluating AI Claims',
          subtitle: 'How to verify any online headline, image, or chatbot answer in 60 seconds.',
          readMinutes: 5,
          corePrinciple: 'Verify claims laterally across independent primary sources rather than trusting page design.',
          formulaOrFramework: 'Who Published? → What Evidence? → What Do Independent Sources Say?',
          levels: {
            explorer:
              'Even a super fancy website or confident video can tell a tall tale! Before believing or sharing surprising news, open a new tab and check if two trusted encyclopedias or science museums say the same thing—and never share passwords or home addresses online.',
            student:
              'Fact-checkers practice "lateral reading": instead of judging a single site by its polished layout, open new tabs to inspect who funds it and whether primary peer-reviewed data backs the claim. Use unique passphrases with a password manager and 2-factor authentication, and treat generative AI outputs as drafts requiring source verification.',
            mastery:
              'Information literacy counters algorithmic outrage amplification, synthetic media manipulation, and probabilistic LLM hallucinations by enforcing provenance verification, primary citation checking, and zero-trust credential hygiene.',
          },
          keyTakeaways: [
            'Polished design does not equal factual accuracy.',
            'Lateral reading across independent primary sources catches misinformation fast.',
            'Never reuse the same password across email, banking, and study accounts.',
          ],
          realWorldApplication:
            'Checking primary sources protects students from citing fabricated statistics in essays and prevents phishing scams.',
          quiz: [
            {
              id: 'q-dig-1',
              prompt: 'What is the fastest way professional fact-checkers verify an unfamiliar website’s claim?',
              options: [
                'Count how colorful the website logo is',
                'Open new tabs ("lateral reading") to check who runs it and whether independent primary sources confirm it',
                'Scroll to the bottom copyright year',
                'Check how many emojis appear',
              ],
              correctIndex: 1,
              explanation: 'Lateral reading verifies credibility outside the page itself using independent sources.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-dig-ai',
          subjectId: 'digital-media',
          category: 'Analytical',
          question: 'Why can an AI text generator sound 100% confident even when it invents a fake book title or wrong date?',
          shortAnswer: 'Language models predict plausible word patterns statistically rather than checking a live verified truth ledger.',
          detailedExplanation: {
            explorer:
              'An AI predicts the next word like a super-fast autocomplete game—so it can make up a realistic-sounding book title by accident if you don’t double-check!',
            student:
              'Transformer language models optimize next-token probability over training distributions. Without external retrieval and human verification, plausible-sounding fabrications ("hallucinations") read just as smoothly as true facts.',
            mastery:
              'Autoregressive decoding lacks intrinsic epistemic calibration unless grounded via verified retrieval-augmented citations and deterministic checks.',
          },
          stepByStep: [
            'Treat generated citations, numbers, and legal/medical claims as unverified drafts.',
            'Verify dates, quotes, and formulas against primary textbooks or datasets.',
          ],
          commonMisconception: 'Fluent grammar never guarantees factual truth.',
        },
      ],
    },
  ],
};
