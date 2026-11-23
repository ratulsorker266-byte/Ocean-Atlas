import { KnowledgeStore } from '../types/knowledge';

export const commerceStore: KnowledgeStore = {
  id: 'commerce',
  title: 'Commerce, Economics & Law Store',
  tagline: 'Economics, Accounting, Finance, Strategy, Marketing, Law, Entrepreneurship & Public Policy.',
  description:
    'Master how households, businesses, markets, and nations allocate scarce resources, read financial statements, enforce fair contracts, and build enduring value.',
  imagePath: '/src/assets/images/store_commerce_economics_1795350513350.jpg',
  imageAlt: 'Editorial diagram showing balanced scales, supply and demand equilibrium curves, and global trade flows',
  accentHex: '#047857',
  accentTextClass: 'text-emerald-700',
  accentBorderClass: 'border-emerald-200',
  accentBgSoftClass: 'bg-emerald-50',
  subjects: [
    {
      id: 'economics',
      storeId: 'commerce',
      name: 'Micro & Macroeconomics',
      scopeSummary: 'Supply and demand, elasticity, GDP, inflation, banking, and monetary policy.',
      recommendedLabId: 'equilibrium',
      topics: [
        {
          id: 'econ-equilibrium',
          title: 'Supply, Demand, Elasticity & Market Equilibrium',
          subtitle: 'How prices coordinate millions of buyers and sellers without a central planner.',
          readMinutes: 7,
          corePrinciple: 'Market-clearing price balances marginal willingness to pay with marginal production cost.',
          formulaOrFramework: 'Q_d(P*) = Q_s(P*)   |   E_d = (%ΔQ) / (%ΔP)',
          levels: {
            explorer:
              'On a hot day, thirsty buyers push lemonade prices slightly up; when ten new stands open, competition pulls prices down until buyers and sellers meet in balance!',
            student:
              'Equilibrium (P*, Q*) occurs where downward demand meets upward supply. Non-price shocks shift whole curves, while price caps below P* cause shortages.',
            mastery:
              'Walrasian competitive equilibrium maximizes total Marshallian surplus under complete markets and zero externalities.',
          },
          keyTakeaways: [
            'Price changes slide along a curve; external shocks shift the entire curve.',
            'Essentials with no substitutes have inelastic demand.',
            'Price ceilings below equilibrium trigger chronic shortages.',
          ],
          realWorldApplication: 'Central banks track supply shocks and demand elasticity to forecast inflation.',
          quiz: [
            {
              id: 'q-econ-1',
              prompt: 'If drought destroys half a wheat harvest, what happens to wheat supply and price?',
              options: [
                'Supply shifts right; price falls',
                'Supply shifts left; price rises',
                'Demand shifts right',
                'Nothing changes',
              ],
              correctIndex: 1,
              explanation: 'Lower crop output shifts supply left, raising equilibrium price.',
            },
          ],
        },
        {
          id: 'econ-gdp-policy',
          title: 'GDP, Unemployment & Fiscal vs. Monetary Policy',
          subtitle: 'How governments and central banks steer economies through booms and recessions.',
          readMinutes: 6,
          corePrinciple: 'Aggregate spending equals total income; interest rates and budgets stabilize cycles.',
          formulaOrFramework: 'GDP = C + I + G + (X − M)   |   Real Rate ≈ Nominal Rate − Inflation',
          levels: {
            explorer:
              'Think of a country’s economy like a giant neighborhood market. When families spend, factories hire workers, and schools get built, money flows smoothly. If everyone suddenly gets scared and stops spending at once, a central bank lowers borrowing rates so businesses can keep building and hiring!',
            student:
              'Gross Domestic Product (GDP) sums Consumption, Investment, Government spending, and Net Exports within a country’s borders in one year. During recessions, Fiscal Policy (taxes/spending by parliament) and Monetary Policy (interest rates/money supply by the central bank) stabilize employment without sparking runaway inflation.',
            mastery:
              'IS-LM and New Keynesian Phillips Curve models balance output-gap stabilization against inflation anchoring; supply-side productivity growth—not demand stimulus alone—drives long-run living standards.',
          },
          keyTakeaways: [
            'Real GDP adjusts for inflation so we measure true output growth, not just higher price tags.',
            'GDP measures market production, excluding unpaid home care and environmental damage.',
            'Long-run prosperity depends on education, infrastructure, and innovation.',
          ],
          realWorldApplication:
            'Understanding interest rate cycles helps families choose fixed vs variable loans wisely.',
          quiz: [
            {
              id: 'q-econ-2',
              prompt: 'Why do economists prefer Real GDP over Nominal GDP when comparing growth across years?',
              options: [
                'Real GDP ignores exports',
                'Real GDP strips out price inflation to measure actual goods and services produced',
                'Nominal GDP only counts cash',
                'Real GDP counts only agriculture',
              ],
              correctIndex: 1,
              explanation: 'Constant-price Real GDP separates genuine volume growth from rising prices.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-econ-inflation',
          subjectId: 'economics',
          category: 'Analytical',
          question: 'Why do central banks target ~2% steady inflation instead of 0% or falling prices?',
          shortAnswer: 'Mild ~2% inflation provides a buffer against deflationary spending freezes and lets real wages adjust smoothly.',
          detailedExplanation: {
            explorer:
              'If prices kept dropping every week, everyone would delay shopping, stalling jobs!',
            student:
              'Deflation raises real debt burdens and delays household spending; 2% gives central banks room to cut real rates in downturns.',
            mastery:
              'Positive inflation cushions against hitting the Zero Lower Bound during liquidity traps.',
          },
          stepByStep: [
            'Analyze spending delay incentives under falling prices.',
            'Verify Fisher relation r ≈ i − π.',
          ],
          commonMisconception: '0% inflation sounds ideal, yet leaves zero buffer before deflation.',
        },
      ],
    },
    {
      id: 'accounting',
      storeId: 'commerce',
      name: 'Accounting & Financial Reporting',
      scopeSummary: 'Double-entry bookkeeping, balance sheets, income statements, and cash flows.',
      topics: [
        {
          id: 'acc-statements',
          title: 'The Accounting Equation & Three Financial Statements',
          subtitle: 'Why profit on paper differs from cash in the bank.',
          readMinutes: 7,
          corePrinciple: 'Assets always equal Liabilities plus Owner’s Equity.',
          formulaOrFramework: 'Assets = Liabilities + Equity   |   Net Income = Revenue − Expenses',
          levels: {
            explorer:
              'Everything your bookshop owns is Assets; what you owe suppliers is Liabilities; what truly belongs to you is Equity!',
            student:
              'Balance Sheet is a point-in-time snapshot; Income Statement measures accrual profit; Cash Flow Statement tracks real cash movement.',
            mastery:
              'Reconciling GAAP/IFRS accrual earnings against operating free cash flow exposes working-capital stress early.',
          },
          keyTakeaways: [
            'Profitable businesses can still fail if they run out of cash.',
            'Depreciation lowers accounting profit without spending cash today.',
            'All three statements interlock mathematically.',
          ],
          realWorldApplication: 'Analysts verify Cash Flow from Operations before trusting headline earnings.',
          quiz: [
            {
              id: 'q-acc-1',
              prompt: 'A bakery buys a $3,000 oven with $1,000 cash and a $2,000 loan. Total Assets change by:',
              options: ['+$3,000', '+$2,000', '−$1,000', '$0'],
              correctIndex: 1,
              explanation: '+$3,000 equipment and −$1,000 cash = +$2,000 net assets.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-acc-cash',
          subjectId: 'accounting',
          category: 'Case Study',
          question: 'How can a company post $500,000 Net Profit yet end the year with less cash?',
          shortAnswer: 'Uncollected credit sales (receivables), buying inventory/equipment, or repaying loan principal.',
          detailedExplanation: {
            explorer:
              'Selling lemonade on "pay-me-next-month" promises shows profit in your notebook while your pocket stays empty!',
            student:
              'Rising Accounts Receivable, CapEx equipment purchases, and debt principal repayments drain cash without reducing net profit immediately.',
            mastery:
              'Working-capital growth ΔNWC and CapEx consume cash beyond accrual net income.',
          },
          stepByStep: [
            'Start with Net Income.',
            'Subtract rises in Receivables and Inventory.',
            'Subtract CapEx and loan principal repayments.',
          ],
          commonMisconception: 'Accrual profit equals cash only when zero credit, inventory, or CapEx exists.',
        },
      ],
    },
    {
      id: 'finance',
      storeId: 'commerce',
      name: 'Corporate Finance & Investing',
      scopeSummary: 'Time value of money, compounding, diversification, and valuation.',
      recommendedLabId: 'growth',
      topics: [
        {
          id: 'fin-tvm',
          title: 'Time Value of Money, Risk & Compounding',
          subtitle: 'Why a dollar today beats a dollar tomorrow—and how discounting values assets.',
          readMinutes: 6,
          corePrinciple: 'Future cash flows must be discounted by time and risk.',
          formulaOrFramework: 'FV = PV · (1 + r)ⁿ   |   NPV = Σ [CF_t / (1 + r)ᵗ] − Cost',
          levels: {
            explorer:
              'Today’s $100 can start growing immediately like a planted seed; compounding makes earnings earn more earnings!',
            student:
              'NPV discounts future cash flows by (1 + r)ᵗ; diversification shrinks company-specific risk without lowering expected return.',
            mastery:
              'CAPM prices systematic beta via WACC while real options value managerial flexibility.',
          },
          keyTakeaways: [
            'Starting early amplifies exponent n.',
            'Never compare dollars from different years without discounting.',
            'Higher promised yield always implies higher risk or lower liquidity.',
          ],
          realWorldApplication: 'Mortgages, solar projects, and pension funds rely on Present Value math.',
          quiz: [
            {
              id: 'q-fin-1',
              prompt: 'Using the Rule of 72, how long does money take to double at 10% annual compound return?',
              options: ['3.6 years', '7.2 years', '10 years', '14.4 years'],
              correctIndex: 1,
              explanation: '72 / 10 ≈ 7.2 years.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-fin-diversify',
          subjectId: 'finance',
          category: 'Quantitative',
          question: 'Why does diversifying across unrelated sectors lower portfolio volatility?',
          shortAnswer: 'Low-correlated assets offset each other’s drops, shrinking total variance.',
          detailedExplanation: {
            explorer:
              'Selling both umbrellas and sunglasses earns steady income in rain or shine!',
            student:
              'Imperfect correlation ρ < 1 cancels idiosyncratic ups and downs across industries.',
            mastery:
              'Idiosyncratic variance vanishes as N grows while systematic covariance remains.',
          },
          stepByStep: [
            'Check correlation across revenue drivers.',
            'Combine independent assets to reduce portfolio standard deviation.',
          ],
          commonMisconception: 'Owning 20 stocks in the exact same sector is not diversified.',
        },
      ],
    },
    {
      id: 'management',
      storeId: 'commerce',
      name: 'Management & Strategy',
      scopeSummary: 'Competitive moats, incentives, operations, bottlenecks, and leadership.',
      topics: [
        {
          id: 'mgmt-moat',
          title: 'Competitive Advantage & Incentive Design',
          subtitle: 'Why durable organizations protect value and align human incentives.',
          readMinutes: 6,
          corePrinciple: 'Durable moats combine differentiated value with aligned incentives.',
          formulaOrFramework: 'Value Created = Customer Willingness-to-Pay − Opportunity Cost',
          levels: {
            explorer:
              'A beloved bakery endures through special recipes, warm service, and smart bulk buying—things copycats can’t match overnight!',
            student:
              'Porter’s Five Forces shapes industry margins; Goodhart’s Law warns that narrow metrics invite gaming.',
            mastery:
              'VRIO resources and transaction-cost boundaries sustain advantage while multi-metric scorecards curb agency distortion.',
          },
          keyTakeaways: [
            'Integrated systems resist copying better than isolated features.',
            'People optimize whatever metric you reward.',
            'Fix the slowest bottleneck first to raise total throughput.',
          ],
          realWorldApplication: 'Hospitals and manufacturers use Theory of Constraints to clear bottlenecks.',
          quiz: [
            {
              id: 'q-mgmt-1',
              prompt: 'Under Goodhart’s Law, rewarding support staff purely for shortest call length tends to:',
              options: [
                'Maximize customer care',
                'Encourage hanging up early before solving real problems',
                'Eliminate training',
                'Lower internet bills',
              ],
              correctIndex: 1,
              explanation: 'Single-dimension targets distort real service quality.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-mgmt-sunk',
          subjectId: 'management',
          category: 'Case Study',
          question: 'Why should a team ignore $2 million already spent on a failing project when deciding what to do next?',
          shortAnswer: 'Past spending is a sunk cost—unrecoverable whether you continue or stop.',
          detailedExplanation: {
            explorer:
              'Staying through a terrible movie won’t refund your ticket—it only wastes the rest of your afternoon!',
            student:
              'Forward choices must weigh incremental future benefits against incremental future costs only.',
            mastery:
              'Pre-committed stage-gate reviews counteract loss-aversion escalation of commitment.',
          },
          stepByStep: [
            'Separate past unrecoverable cost from future value.',
            'Compare forward ROI of stopping vs continuing.',
          ],
          commonMisconception: 'Stopping early saves future money; it does not cause the past loss.',
        },
      ],
    },
    {
      id: 'marketing',
      storeId: 'commerce',
      name: 'Marketing & Global Trade',
      scopeSummary: 'Comparative advantage, customer positioning, unit economics, and logistics.',
      topics: [
        {
          id: 'mkt-trade',
          title: 'Comparative Advantage & Customer Positioning',
          subtitle: 'Why nations specialize in trade and how brands earn long-term trust.',
          readMinutes: 6,
          corePrinciple: 'Trade gains arise from lower opportunity cost, not absolute superiority.',
          formulaOrFramework: 'Opportunity Cost = Sacrificed / Gained   |   LTV > 3 × CAC',
          levels: {
            explorer:
              'Even if a master chef cooks AND washes dishes faster than a helper, specializing in cooking produces more great meals for everyone!',
            student:
              'Ricardo’s Comparative Advantage shows trade benefits both nations; healthy businesses keep Lifetime Value well above Acquisition Cost.',
            mastery:
              'Increasing returns and transparent unit economics separate sustainable brand equity from subsidized churn.',
          },
          keyTakeaways: [
            'Opportunity cost guides smart specialization.',
            'Retaining happy customers beats constant ad spending.',
            'Resilient supply chains diversify suppliers.',
          ],
          realWorldApplication: 'Teams focus on high-leverage strengths while partnering for complementary work.',
          quiz: [
            {
              id: 'q-mkt-1',
              prompt: 'Two countries gain from trade even if one produces everything more cheaply because of:',
              options: [
                'Free shipping',
                'Different relative opportunity costs (comparative advantage)',
                'Identical currencies',
                'Equal populations',
              ],
              correctIndex: 1,
              explanation: 'Relative opportunity cost differences enable mutually beneficial specialization.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-mkt-cac',
          subjectId: 'marketing',
          category: 'Quantitative',
          question: 'A site spends $30 to acquire a subscriber paying $12/month for 5 months at 80% gross margin. Is LTV > CAC?',
          shortAnswer: 'Yes—Gross LTV is $48 ($12 × 5 × 0.80) vs $30 CAC (1.6x return).',
          detailedExplanation: {
            explorer:
              'You spent $30 to earn $48 after costs—that leaves $18 net profit per student!',
            student:
              'Always multiply revenue by gross margin: $60 × 0.80 = $48 LTV, paying back $30 in 3.13 months.',
            mastery:
              'Raising retention from 5 to 8 months pushes LTV:CAC above 2.5x without raising ad spend.',
          },
          stepByStep: [
            'Total revenue = $12 × 5 = $60.',
            'Gross profit LTV = $60 × 0.80 = $48.',
            'Compare $48 LTV vs $30 CAC.',
          ],
          commonMisconception: 'Using raw revenue instead of gross margin overstates LTV.',
        },
      ],
    },
    {
      id: 'law',
      storeId: 'commerce',
      name: 'Law & Civic Institutions',
      scopeSummary: 'Contracts, property rights, intellectual property, rule of law, and dispute resolution.',
      topics: [
        {
          id: 'law-contracts',
          title: 'Elements of a Valid Contract & Rule of Law',
          subtitle: 'How clear agreements let strangers cooperate safely.',
          readMinutes: 6,
          corePrinciple: 'Binding agreements require offer, acceptance, consideration, capacity, and lawful purpose.',
          formulaOrFramework: 'Offer + Acceptance + Consideration + Capacity + Lawful Purpose',
          levels: {
            explorer:
              'Shaking hands to mow a lawn for $15 works because both sides promise fair value—courts protect honest agreements!',
            student:
              'Consideration separates enforceable contracts from one-way gifts; Rule of Law binds officials and citizens equally.',
            mastery:
              'Reliable property and contract enforcement lowers transaction costs and enables long-term capital formation.',
          },
          keyTakeaways: [
            'One-sided promises without consideration are generally unenforceable.',
            'Write scope, payment, and deadlines clearly before starting work.',
            'Rule of Law guarantees due process.',
          ],
          realWorldApplication: 'Freelancers prevent disputes with clear written milestone terms.',
          quiz: [
            {
              id: 'q-law-1',
              prompt: 'In contract law, "consideration" means:',
              options: [
                'Polite conversation',
                'Mutual exchange of something of legal value',
                'Fancy stationery',
                'Two witnesses',
              ],
              correctIndex: 1,
              explanation: 'Consideration is the bargained-for exchange of value from both parties.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-law-copyright',
          subjectId: 'law',
          category: 'Conceptual',
          question: 'How do Copyright, Trademark, and Patent differ?',
          shortAnswer: 'Copyright protects creative works; Trademark protects brand identifiers; Patent protects technical inventions.',
          detailedExplanation: {
            explorer:
              'Story/song = Copyright; shop logo = Trademark; new solar machine = Patent!',
            student:
              'Copyright arises upon creation; trademarks prevent brand confusion; patents grant ~20-year exclusivity after examination.',
            mastery:
              'IP law balances innovation incentives against public-domain diffusion and fair dealing.',
          },
          stepByStep: [
            'Classify whether the asset is expression, brand signifier, or functional invention.',
          ],
          commonMisconception: 'Raw ideas and math formulas cannot be copyrighted—only specific expression.',
        },
      ],
    },
    {
      id: 'entrepreneurship',
      storeId: 'commerce',
      name: 'Entrepreneurship & Venture Building',
      scopeSummary: 'Problem discovery, MVPs, unit economics, customer feedback, and ethical scaling.',
      topics: [
        {
          id: 'entrep-mvp',
          title: 'Problem Validation, MVPs & Unit Economics',
          subtitle: 'How builders test real customer needs before spending months building the wrong thing.',
          readMinutes: 6,
          corePrinciple: 'Validate painful real-world demand cheaply before scaling production.',
          formulaOrFramework: 'Problem Interview → Minimum Viable Test → Unit Contribution Margin > 0',
          levels: {
            explorer:
              'Before opening a huge juice factory, try selling 20 fresh cups at a weekend fair! You’ll learn right away which flavors neighbors actually love and whether cups cost less than the price you charge.',
            student:
              'Most startups fail not because code or factories broke, but because nobody needed the product enough to pay sustainably. A Minimum Viable Product (MVP) tests the core value promise quickly, ensuring Contribution Margin (Price − Variable Cost) is positive on every unit sold before scaling.',
            mastery:
              'Lean validation pairs customer discovery with cohort retention curves: flattening retention proves genuine Product-Market Fit, whereas leaky-bucket growth masked by ad spend destroys enterprise value.',
          },
          keyTakeaways: [
            'Fall in love with solving the user’s problem, not your first design.',
            'Negative unit economics cannot be fixed merely by selling higher volume.',
            'Listen carefully to what users actually do, not just polite compliments.',
          ],
          realWorldApplication:
            'Small local artisans and software founders alike pre-test prototypes with 10 real users before committing full savings.',
          quiz: [
            {
              id: 'q-ent-1',
              prompt: 'What is the primary goal of a Minimum Viable Product (MVP)?',
              options: [
                'To ship a broken product forever',
                'To test whether real users value the core solution with minimal wasted time and cost',
                'To avoid talking to customers',
                'To spend maximum budget on logos',
              ],
              correctIndex: 1,
              explanation: 'An MVP validates core user value quickly so builders learn before heavy investment.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-ent-margin',
          subjectId: 'commerce',
          category: 'Quantitative',
          question: 'If a craft store loses $2 on every order before counting rent, can selling 10,000 orders make it profitable?',
          shortAnswer: 'No—losing money on every variable unit multiplies total losses as volume grows.',
          detailedExplanation: {
            explorer:
              'If every lemonade cup costs $3 in lemons and sells for $2, selling a thousand cups just loses $1,000 faster!',
            student:
              'Fixed costs (rent) spread thinner with scale, but Variable Contribution Margin (Price − Variable Cost) must be positive first.',
            mastery:
              'Only positive unit contribution margins generate operating leverage past the breakeven volume Q_BE = Fixed Cost / (P − VC).',
          },
          stepByStep: [
            'Check Price minus Variable Cost per unit.',
            'Ensure contribution margin is strictly positive before scaling volume.',
          ],
          commonMisconception: 'Economies of scale cannot turn negative gross margins profitable unless input costs drop below price.',
        },
      ],
    },
    {
      id: 'public-policy',
      storeId: 'commerce',
      name: 'Public Policy & Global Development',
      scopeSummary: 'Public goods, externalities, education investment, taxation, and healthcare systems.',
      topics: [
        {
          id: 'pol-externalities',
          title: 'Public Goods, Externalities & Human Capital',
          subtitle: 'Why clean air, bridges, and schools require collective stewardship.',
          readMinutes: 6,
          corePrinciple: 'Markets under-provide non-excludable public goods and over-produce unpriced pollution.',
          formulaOrFramework: 'Social Cost = Private Cost + External Harm   |   Human Capital = Health + Education',
          levels: {
            explorer:
              'A streetlight helps every walker on the block even if they didn’t pay for the bulb—and a smoky factory hurts neighbors’ lungs even if the factory doesn’t pay their doctor bills! Communities work together on roads, parks, clean air, and schools because everyone thrives when all kids learn.',
            student:
              'Public goods (streetlights, flood levees, basic research) are non-rival and non-excludable, leading to free-rider underprovision without public funding. Negative externalities (pollution) require regulation or pricing so private costs match true social cost. Investments in child nutrition and schooling yield massive multi-decade economic returns.',
            mastery:
              'Pigouvian taxes/permits internalize marginal external damage (MSC = MPC + MEC), while randomized development economics evaluates high-leverage human-capital interventions like deworming, maternal nutrition, and targeted remedial tutoring.',
          },
          keyTakeaways: [
            'Basic scientific research and vaccination deliver benefits far beyond any private buyer.',
            'Education and preventive healthcare are the highest-return investments any nation makes.',
            'Measuring real outcomes matters more than announcing large budgets.',
          ],
          realWorldApplication:
            'Cities combine clean transit investment with emissions standards to cut respiratory illness and traffic hours simultaneously.',
          quiz: [
            {
              id: 'q-pol-1',
              prompt: 'Why is a neighborhood flood levee considered a classic "public good"?',
              options: [
                'Only ticket holders stay dry',
                'Once built, it protects everyone nearby regardless of individual payment (non-excludable & non-rival)',
                'It costs zero money to build',
                'It moves every week',
              ],
              correctIndex: 1,
              explanation: 'Flood protection covers all residents in the basin simultaneously without excluding non-payers.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-pol-externality',
          subjectId: 'public-policy',
          category: 'Analytical',
          question: 'Why does education create a "positive externality" for society as a whole, not just the student?',
          shortAnswer: 'Educated citizens raise workplace productivity, invent better tools, improve community health, and strengthen civic life.',
          detailedExplanation: {
            explorer:
              'When one student learns to read, build, or heal, their whole neighborhood gains safer bridges, healthier families, and smarter ideas!',
            student:
              'Social returns to schooling—lower preventable illness, higher innovation, and broader tax capacity—exceed private wage gains alone, justifying public education.',
            mastery:
              'Endogenous growth theory (Romer/Lucas) models human-capital spillovers as non-diminishing drivers of aggregate total factor productivity.',
          },
          stepByStep: [
            'Identify private benefit (higher personal skill and earnings).',
            'Identify spillover benefits to neighbors, coworkers, and future generations.',
          ],
          commonMisconception: 'Education is not merely a private consumer purchase; it builds shared civic capacity.',
        },
      ],
    },
  ],
};
