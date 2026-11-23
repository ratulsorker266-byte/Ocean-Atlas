import { LibraryBook } from '../types/knowledge';

export const BOOKS_COMMERCE_AND_MIND: LibraryBook[] = [
  {
    id: 'book-wealth-nations',
    title: 'The Wealth of Nations & Market Equilibrium',
    titleBn: 'জাতিসমূহের সম্পদ ও বাজার অর্থনীতির সূত্র',
    authorOrOrigin: 'Adam Smith · Classical & Modern Economics',
    era: '1776–Modern · Economics',
    category: 'commerce-economics',
    storeId: 'commerce',
    subjectId: 'economics',
    ageBand: 'All Ages',
    coverColorHex: '#9a3412',
    readingMinutes: 23,
    synopsis:
      'Why division of labor multiplies output, how prices transmit scarcity signals, and where markets still require public governance.',
    synopsisBn:
      'শ্রমবিভাগ কীভাবে উৎপাদন বাড়ায়, চাহিদা ও জোগান কীভাবে দাম নির্ধারণ করে এবং কখন সরকারি নীতি অপরিহার্য হয়ে ওঠে।',
    coreThesis:
      'Voluntary exchange and specialization multiply prosperity when backed by honest contracts, competition, and public infrastructure.',
    coreThesisBn:
      'ন্যায়সংগত প্রতিযোগিতা, স্বচ্ছ চুক্তি ও জনকল্যাণমূলক অবকাঠামো থাকলে বিশেষায়িত শ্রম ও বাণিজ্য সমৃদ্ধি বাড়ায়।',
    keyTakeaways: [
      'Division of labor lets teams produce dramatically more than lone generalists.',
      'Prices summarize scarcity and steer resources without central orders.',
      'Public education, clean courts, and externalities require wise governance.',
    ],
    keyTakeawaysBn: [
      'শ্রমবিভাগ ও দক্ষতা বৃদ্ধি মানুষের উৎপাদন ক্ষমতা বহুগুণ বাড়িয়ে দেয়।',
      'বাজারের দাম সমাজে কোন পণ্যের চাহিদা বা ঘাটতি আছে তার সংকেত দেয়।',
      'শিক্ষা, রাস্তা ও পরিবেশ রক্ষায় বাজারের পাশাপাশি রাষ্ট্রীয় উদ্যোগ জরুরি।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Pin Factory & Division of Labor',
        titleBn: 'শ্রমবিভাগ ও বিশেষায়নের শক্তি',
        keyPrinciple: 'Splitting complex tasks into focused steps multiplies skill and speed.',
        levels: {
          explorer:
            'If 10 kids bake cakes alone, they finish 10 cakes. If each kid handles one step—mixing, baking, frosting—they finish 50!',
          student:
            'Adam Smith saw 18 workers splitting pin-making steps turn out 48,000 pins a day instead of a few dozen.',
          mastery:
            'Comparative advantage (David Ricardo) extends specialization across regions even when one party excels at everything.',
        },
        summaryBn:
          'কাজকে ছোট ছোট ভাগে ভাগ করে বিশেষ দক্ষতা কাজে লাগালে সমষ্টিগত উৎপাদন কল্পনাতীতভাবে বেড়ে যায়।',
        reflectionQuestion: 'What stops division of labor from growing infinitely in a tiny village?',
        reflectionAnswer:
          'The extent of the market—specialized tools only pay off when enough buyers exist.',
      },
      {
        chapterNumber: 2,
        title: 'Supply, Demand & Price Signals',
        titleBn: 'চাহিদা, জোগান ও দামের সংকেত',
        keyPrinciple: 'Prices adjust until buyers and sellers balance at equilibrium.',
        levels: {
          explorer:
            'When mangoes flood summer markets, prices drop so families buy plenty; when harvests fail, higher prices encourage careful use.',
          student:
            'Excess demand bids prices up, signaling producers to expand supply; excess supply pushes prices down to clear inventory.',
          mastery:
            'Price elasticity measures buyer responsiveness—essential medicines are inelastic, whereas dining out is elastic.',
        },
        summaryBn:
          'দাম কেবল টাকার অঙ্ক নয়—এটি ক্রেতা ও বিক্রেতার মধ্যে পণ্যের পর্যাপ্ততা বা ঘাটতির দ্রুততম বার্তাবাহক।',
        reflectionQuestion: 'Why do artificial price ceilings often trigger shortages?',
        reflectionAnswer:
          'More buyers want the artificially cheap good while fewer producers can afford to supply it.',
      },
      {
        chapterNumber: 3,
        title: 'Opportunity Cost & Marginal Thinking',
        titleBn: 'সুযোগ ব্যয় ও প্রান্তিক সিদ্ধান্ত',
        keyPrinciple: 'The true cost of any choice is the best alternative given up.',
        levels: {
          explorer:
            'Spending two hours scrolling doesn’t cost zero—its real cost is the football match or storybook you missed!',
          student:
            'Rational choices weigh marginal extra benefit against marginal cost while ignoring unrecoverable sunk costs.',
          mastery:
            'Equimarginal allocation maximizes welfare when marginal utility per dollar equalizes across options.',
        },
        summaryBn:
          'কোনো কিছু বেছে নেওয়ার আসল খরচ হলো সেই সময় বা টাকায় পাওয়া যেত এমন সেরা বিকল্পটি ত্যাগ করা (Opportunity Cost)।',
        reflectionQuestion: 'Why should past unrecoverable “sunk costs” not force bad future choices?',
        reflectionAnswer:
          'Already-spent money or time cannot return regardless of what you pick next.',
      },
      {
        chapterNumber: 4,
        title: 'Public Goods, Pollution & Smart Rules',
        titleBn: 'জনকল্যাণমূলক পণ্য ও পরিবেশ ব্যয়',
        keyPrinciple: 'Markets shine on private goods yet fail on pollution without rules.',
        levels: {
          explorer:
            'Towns chip in taxes together so every street has streetlights and clean parks.',
          student:
            'Adam Smith urged public funding for schools and infrastructure, and modern policy prices negative externalities like pollution.',
          mastery:
            'Pigouvian taxes or tradable permits align private marginal costs with true social costs.',
        },
        summaryBn:
          'একচেটিয়া বাজার নিয়ন্ত্রণ, পরিবেশ দূষণ রোধ এবং সবার জন্য শিক্ষা ও রাস্তার ব্যবস্থায় সুশাসন অপরিহার্য।',
        reflectionQuestion: 'What is a “negative externality”?',
        reflectionAnswer:
          'A cost imposed on bystanders outside a transaction, such as river pollution from a factory.',
      },
    ],
  },
  {
    id: 'book-macroeconomics-money',
    title: 'Macroeconomics, Central Banks & Inflation',
    titleBn: 'সামষ্টিক অর্থনীতি, কেন্দ্রীয় ব্যাংক ও মুদ্রাস্ফীতি',
    authorOrOrigin: 'Keynes, Friedman · Monetary & Fiscal Compendium',
    era: '20th–21st Century',
    category: 'commerce-economics',
    storeId: 'commerce',
    subjectId: 'economics',
    ageBand: 'Ages 13–18',
    coverColorHex: '#7c2d12',
    readingMinutes: 22,
    synopsis:
      'Decode GDP, inflation, interest rates, fiscal budgets, exchange rates, and why stable money protects savings.',
    synopsisBn:
      'জিডিপি, মুদ্রাস্ফীতি, সুদের হার, জাতীয় বাজেট ও বৈদেশিক মুদ্রার বিনিময় হার কীভাবে সাধারণ মানুষের ক্রয়ক্ষমতা প্রভাবিত করে।',
    coreThesis:
      'Monetary stability and counter-cyclical policy prevent both runaway inflation and deep depressions.',
    coreThesisBn:
      'সুষম মুদ্রানীতি ও দায়িত্বশীল রাজস্বনীতি মুদ্রাস্ফীতি নিয়ন্ত্রণের পাশাপাশি কর্মসংস্থান সচল রাখে।',
    keyTakeaways: [
      'GDP measures total value added inside a nation—not unpaid care.',
      'Too much money chasing unchanged goods drives inflation.',
      'Real interest rate ≈ Nominal rate − Inflation rate.',
    ],
    keyTakeawaysBn: [
      'জিডিপি অর্থনৈতিক উৎপাদনের মাপকাঠি, তবে পরিবেশ বা গৃহস্থালি শ্রম এতে সরাসরি ধরা পড়ে না।',
      'পণ্যের জোগানের তুলনায় টাকার প্রবাহ বেড়ে গেলে মুদ্রাস্ফীতি দেখা দেয়।',
      'প্রকৃত সুদের হার জানতে নামমাত্র সুদ থেকে মুদ্রাস্ফীতি বিয়োগ করতে হয়।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'GDP, Income Flows & Productivity',
        titleBn: 'জিডিপি ও জাতীয় আয় প্রবাহ',
        keyPrinciple: 'One person’s spending becomes another person’s income.',
        levels: {
          explorer:
            'When you buy bread, the baker buys flour, the farmer buys seeds, and money keeps everyone busy.',
          student:
            'GDP = C + I + G + (X − M). Long-run living standards grow through productivity: education and technology.',
          mastery:
            'Real GDP per capita adjusts for inflation and population, avoiding nominal illusions.',
        },
        summaryBn:
          'একজনের ব্যয় অন্যজনের আয়; শিক্ষা, অবকাঠামো ও প্রযুক্তির উন্নতিই দীর্ঘমেয়াদে দেশের উৎপাদনশীলতা বাড়ায়।',
        reflectionQuestion: 'Why does buying a used bicycle not count toward this year’s GDP?',
        reflectionAnswer:
          'Its value was counted when newly made; resale merely transfers ownership.',
      },
      {
        chapterNumber: 2,
        title: 'Money, Banking & Inflation',
        titleBn: 'মুদ্রা, ব্যাংকিং ও মুদ্রাস্ফীতি',
        keyPrinciple: 'Purchasing power—not paper face value—measures real wealth.',
        levels: {
          explorer:
            'If everyone printed 10x more play money without extra toys, every toy’s price tag would jump 10x higher!',
          student:
            'Demand-pull inflation reflects excess spending; cost-push inflation reflects energy or supply shocks.',
          mastery:
            'Central bank credibility anchors expectations so wage–price spirals do not self-fulfill.',
        },
        summaryBn:
          'টাকার অঙ্ক বেশি হওয়া নয়, বরং সেই টাকায় কতটুকু পণ্য কেনা যায় সেটাই প্রকৃত সঞ্চয়ের মাপ।',
        reflectionQuestion: 'If savings earn 6% while inflation runs 8%, do you gain or lose purchasing power?',
        reflectionAnswer: 'You lose roughly 2% in real purchasing power per year.',
      },
      {
        chapterNumber: 3,
        title: 'Interest Rates & Central Banks',
        titleBn: 'সুদের হার ও কেন্দ্রীয় ব্যাংক',
        keyPrinciple: 'Interest rates steer borrowing, saving, and economic cooling or stimulus.',
        levels: {
          explorer:
            'The central bank works like a careful thermostat for money—cooling runaway prices or warming slow job markets.',
          student:
            'Raising rates cools inflation; lowering rates during downturns encourages investment and hiring.',
          mastery:
            'Taylor-rule reaction functions balance output stability against inflation deviations.',
        },
        summaryBn:
          'কেন্দ্রীয় ব্যাংক সুদের হার বাড়িয়ে বা কমিয়ে অর্থনীতির অতিরিক্ত তাপমাত্রা কিংবা মন্দা নিয়ন্ত্রণ করে।',
        reflectionQuestion: 'Why do central banks operate independently from election politics?',
        reflectionAnswer:
          'To avoid short-term money-printing temptations that trigger painful future inflation.',
      },
      {
        chapterNumber: 4,
        title: 'Trade, Exchange Rates & Remittances',
        titleBn: 'বৈদেশিক বাণিজ্য ও মুদ্রা বিনিময়',
        keyPrinciple: 'Currencies reflect export strength, remittances, and inflation.',
        levels: {
          explorer:
            'Exchange rates translate prices between countries just like inches into centimeters.',
          student:
            'A weaker currency boosts export earnings locally yet makes imported fuel and food costlier.',
          mastery:
            'Purchasing power parity and balance-of-payments accounts govern foreign reserve stability.',
        },
        summaryBn:
          'রপ্তানি, প্রবাসী আয় ও মুদ্রাস্ফীতির ভারসাম্য বৈদেশিক মুদ্রার বিনিময় হার ও রিজার্ভ শক্তিশালী রাখে।',
        reflectionQuestion: 'Why do countries keep foreign currency reserves?',
        reflectionAnswer:
          'To pay smoothly for critical food or energy imports during global price shocks.',
      },
    ],
  },
  {
    id: 'book-accounting-statements',
    title: 'Accounting & Financial Statements',
    titleBn: 'হিসাববিজ্ঞান ও আর্থিক বিবরণীর সহজ পাঠ',
    authorOrOrigin: 'Luca Pacioli · Double-Entry Accounting',
    era: '1494–Modern · Accounting',
    category: 'commerce-economics',
    storeId: 'commerce',
    subjectId: 'accounting',
    ageBand: 'Ages 13–18',
    coverColorHex: '#3f3f46',
    readingMinutes: 20,
    synopsis:
      'Master double-entry bookkeeping, Balance Sheets, Income Statements, and Cash Flow.',
    synopsisBn:
      'দু-তরফা দাখিলা পদ্ধতি, উদ্বৃত্তপত্র (Balance Sheet), আয়-ব্যয় বিবরণী এবং মুনাফা বনাম নগদ প্রবাহের স্পষ্ট বিশ্লেষণ।',
    coreThesis:
      'Every transaction touches two sides so Assets always equal Liabilities plus Owner’s Equity.',
    coreThesisBn:
      'প্রতিটি লেনদেনের দুটি দিক থাকে, ফলে প্রতিষ্ঠানের মোট সম্পদ সর্বদা দায় ও মালিকানা স্বত্বের সমান থাকে।',
    keyTakeaways: [
      'Assets = Liabilities + Equity must always stay in balance.',
      'Paper accrual profit differs from cash arriving in the bank.',
      'Transparent books build lender and investor trust.',
    ],
    keyTakeawaysBn: [
      'হিসাব সমীকরণ: সম্পদ = দায় + মালিকানা স্বত্ব সর্বদা সমান থাকে।',
      'বিক্রি হলেই খাতায় লাভ লেখা হলেও হাতে নগদ টাকা আসা ভিন্ন বিষয়।',
      'স্বচ্ছ হিসাবরক্ষণ ব্যবসায় বিশ্বাসযোগ্যতা ও ঋণপ্রাপ্তি সহজ করে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Double-Entry & Fundamental Equation',
        titleBn: 'দু-তরফা দাখিলা ও মৌলিক হিসাব সমীকরণ',
        keyPrinciple: 'Track where value came from and where it sits simultaneously.',
        levels: {
          explorer:
            'If you borrow 500 taka to buy a delivery bike, you own a 500-taka Asset AND owe a 500-taka Liability—both sides stay equal!',
          student:
            'Luca Pacioli formalized double-entry ledgers in 1494 so errors surface instantly when debits miss credits.',
          mastery:
            'IFRS and GAAP accrual standards match revenues with expenses in the period earned.',
        },
        summaryBn:
          'একটি সম্পদ বাড়লে অন্য সম্পদ কমে অথবা দায় বা মূলধন বাড়ে—এই ভারসাম্য হিসাবের ভুল সঙ্গে সঙ্গে ধরে ফেলে।',
        reflectionQuestion: 'What happens to Assets = Liabilities + Equity when you buy inventory with cash?',
        reflectionAnswer: 'Inventory rises and Cash falls by equal amounts—total Assets stay unchanged.',
      },
      {
        chapterNumber: 2,
        title: 'Reading the Balance Sheet',
        titleBn: 'উদ্বৃত্তপত্র (Balance Sheet) পাঠ',
        keyPrinciple: 'A snapshot of what a business owns and owes on one date.',
        levels: {
          explorer:
            'A Balance Sheet is like a photo of your piggy bank, toys, and IOUs taken on December 31.',
          student:
            'Current assets convert within 12 months; fixed assets depreciate across years of service.',
          mastery:
            'Working capital and current ratios test short-term liquidity survival.',
        },
        summaryBn:
          'নির্দিষ্ট একটি দিনে প্রতিষ্ঠানের স্থায়ী-চলতি সম্পদ, ঋণ এবং মালিকের নিজস্ব মূলধনের পূর্ণ ছবি পাওয়া যায় উদ্বৃত্তপত্রে।',
        reflectionQuestion: 'Why depreciate factory equipment over ten years instead of expensing it on day one?',
        reflectionAnswer: 'To match expense fairly across all years the equipment helps produce goods.',
      },
      {
        chapterNumber: 3,
        title: 'Income Statement vs. Cash Flow',
        titleBn: 'লাভ-ক্ষতি বিবরণী বনাম নগদ প্রবাহ',
        keyPrinciple: 'Profitable firms can still go bankrupt if they run out of cash.',
        levels: {
          explorer:
            'Selling 100 books on “I’ll pay next month” looks profitable on paper yet leaves zero cash today for rent!',
          student:
            'Income Statement shows Revenue − Expenses; Cash Flow tracks Operating, Investing, and Financing cash.',
          mastery:
            'Free cash flow (Operating Cash − CapEx) measures true distributable cash.',
        },
        summaryBn:
          'বাকিতে বিক্রি করলে খাতায় লাভ দেখালেও হাতে নগদ না থাকলে কর্মচারীর বেতন বা কাঁচামাল কেনা অসম্ভব হয়ে পড়ে।',
        reflectionQuestion: 'How can a booming company suffer a cash crunch?',
        reflectionAnswer: 'Inventory buildup and unpaid customer invoices tie up cash ahead of receipts.',
      },
      {
        chapterNumber: 4,
        title: 'Auditing & Financial Transparency',
        titleBn: 'নিরীক্ষা ও আর্থিক স্বচ্ছতা',
        keyPrinciple: 'Independent verification protects savers, workers, and markets.',
        levels: {
          explorer:
            'Like neutral sports umpires, auditors check numbers fairly so everyone trusts the scoreboard.',
          student:
            'Spikes in unpaid receivables alongside flat cash warn of overly aggressive accounting.',
          mastery:
            'Cash-conversion ratios and footnote debt disclosures expose hidden leverage.',
        },
        summaryBn:
          'নিরপেক্ষ নিরীক্ষা নিশ্চিত করে কোনো প্রতিষ্ঠান ভুয়া হিসাব দেখিয়ে বিনিয়োগকারীদের বিভ্রান্ত করছে না।',
        reflectionQuestion: 'Why inspect Cash Flow alongside Net Income?',
        reflectionAnswer: 'Real bank cash is far harder to manipulate than credit revenue assumptions.',
      },
    ],
  },
  {
    id: 'book-intelligent-investor',
    title: 'The Intelligent Investor & Compounding',
    titleBn: 'বুদ্ধিমান বিনিয়োগ ও চক্রবৃদ্ধি প্রবৃদ্ধির সূত্র',
    authorOrOrigin: 'Benjamin Graham · Finance & Valuation',
    era: '1949–Modern · Investment Science',
    category: 'commerce-economics',
    storeId: 'commerce',
    subjectId: 'finance',
    ageBand: 'Ages 13–18',
    coverColorHex: '#064e3b',
    readingMinutes: 21,
    synopsis:
      'Separate ownership from speculation: margin of safety, intrinsic business value, diversification, and compounding.',
    synopsisBn:
      'জল্পনা নয় বরং দীর্ঘমেয়াদী মূল্য, মার্জিন অব সেফটি, ঝুঁকি বণ্টন এবং চক্রবৃদ্ধি সুদের বিস্ময়কর শক্তির পাঠ।',
    coreThesis:
      'Investing means buying real productive enterprises with a margin of safety rather than betting on daily moods.',
    coreThesisBn:
      'বিনিয়োগ মানে প্রতিদিনের দামের ওঠানামায় বাজি ধরা নয়, বরং নিরাপদ ব্যবধানে দীর্ঘমেয়াদী সম্পদ ধরে রাখা।',
    keyTakeaways: [
      'Compound interest turns modest steady saving into substantial security.',
      'Always keep a Margin of Safety against surprises.',
      'Broad diversification beats emotional timing.',
    ],
    keyTakeawaysBn: [
      'সময় যত বেশি হয়, চক্রবৃদ্ধি প্রবৃদ্ধি তত দ্রুত সম্পদ বাড়ায়।',
      'অপ্রত্যাশিত ঝুঁকি এড়াতে প্রতিটি সিদ্ধান্তে মার্জিন অব সেফটি রাখা জরুরি।',
      'আবেগের বশে কেনা-বেচা না করে সুশৃঙ্খল বিনিয়োগই সফল।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Power of Compounding',
        titleBn: 'চক্রবৃদ্ধি প্রবৃদ্ধির নীরব শক্তি',
        keyPrinciple: 'Time and consistency outweigh short-term bursts.',
        levels: {
          explorer:
            'Saving steadily lets earned growth earn MORE growth every year—like a snowball rolling down a long hill!',
          student:
            'Under the Rule of 72, 72 divided by annual return percent gives approximate years to double.',
          mastery:
            'Present discounted value sums future cash flows by 1/(1 + r)ᵗ.',
        },
        summaryBn:
          'চক্রবৃদ্ধিতে লাভের ওপর আবার লাভ যোগ হয়; নিয়ম ৭২ অনুযায়ী বার্ষিক ৯% হারে প্রায় ৮ বছরে মূলধন দ্বিগুণ হয়।',
        reflectionQuestion: 'Why does starting 5 years earlier matter more than doubling deposits later?',
        reflectionAnswer: 'Extra compounding periods multiply the entire accumulated base.',
      },
      {
        chapterNumber: 2,
        title: 'Mr. Market: Investor vs. Speculator',
        titleBn: 'বিনিয়োগকারী বনাম ফাটকাবাজ',
        keyPrinciple: 'Price quotes exist to serve you—not command your emotions.',
        levels: {
          explorer:
            'Only sell or buy when a partner’s offer makes sensible value, never because everyone yelled today.',
          student:
            'Graham taught treating daily market swings as moody quotes creating disciplined opportunities.',
          mastery:
            'Behavioral biases—herding and loss aversion—hurt emotional market timers.',
        },
        summaryBn:
          'বাজারের দামের তাৎক্ষণিক ওঠানামায় আতঙ্কিত না হয়ে ব্যবসার আসল গুণগত মান দেখে স্থির সিদ্ধান্ত নেওয়াই বুদ্ধিমানের কাজ।',
        reflectionQuestion: 'What separates investing from gambling?',
        reflectionAnswer: 'Thorough fundamental analysis, safety of principal, and adequate return.',
      },
      {
        chapterNumber: 3,
        title: 'Margin of Safety & Diversification',
        titleBn: 'মার্জিন অব সেফটি ও ঝুঁকি নিয়ন্ত্রণ',
        keyPrinciple: 'Leave room for human error and unexpected storms.',
        levels: {
          explorer:
            'Bridges are built to carry 30 trucks even if 3 cross at once—that extra cushion is Margin of Safety!',
          student:
            'Keep emergency cash safe and diversify across sectors so no single shock wipes savings out.',
          mastery:
            'Distinguish temporary price volatility from permanent capital loss from over-leverage.',
        },
        summaryBn:
          'হিসাবের সামান্য ভুল বা অপ্রত্যাশিত ঝড় সামলাতে প্রতিটি বিনিয়োগ ও ব্যবসায়ে পর্যাপ্ত সুরক্ষা-ব্যবধান রাখতে হয়।',
        reflectionQuestion: 'Why does heavy debt amplify downside risk?',
        reflectionAnswer: 'Fixed loan payments continue even when income dips temporarily.',
      },
      {
        chapterNumber: 4,
        title: 'Ethics & Productive Capital',
        titleBn: 'নৈতিক বিনিয়োগ ও প্রকৃত সম্পদ সৃষ্টি',
        keyPrinciple: 'Sustainable finance funds innovation, clean infrastructure, and jobs.',
        levels: {
          explorer:
            'Wise saving supports solar grids, schools, farms, and useful inventions.',
          student:
            'Avoid “guaranteed 30% monthly return” traps—legitimate returns always mirror real value created.',
          mastery:
            'Governance transparency and aligned incentives sustain long-horizon returns.',
        },
        summaryBn:
          'অস্বাভাবিক দ্রুত ও নিশ্চিত লাভের প্রলোভন প্রায়ই প্রতারণা হয়; প্রকৃত সম্পদ তৈরি হয় উৎপাদনশীল উদ্যোগে।',
        reflectionQuestion: 'What flags a financial scam immediately?',
        reflectionAnswer: 'Guaranteed huge returns paired with “zero risk” and secrecy.',
      },
    ],
  },
  {
    id: 'book-game-theory',
    title: 'Game Theory & Strategic Decisions',
    titleBn: 'গেম থিওরি ও কৌশলগত সিদ্ধান্তের বিজ্ঞান',
    authorOrOrigin: 'Von Neumann, Nash, Dixit · Strategy',
    era: '1944–Modern · Decision Science',
    category: 'commerce-economics',
    storeId: 'commerce',
    subjectId: 'management',
    ageBand: 'Ages 13–18',
    coverColorHex: '#312e81',
    readingMinutes: 20,
    synopsis:
      'Prisoner’s Dilemma, Nash equilibrium, backward induction, credible signaling, and fair division rules.',
    synopsisBn:
      'অন্যের পদক্ষেপ মাথায় রেখে সঠিক কৌশল সাজানোর বিজ্ঞান: প্রিজনার্স ডিলেমা, ন্যাশ ইকুইলিব্রিয়াম ও পারস্পরিক সহযোগিতার খেলা।',
    coreThesis:
      'When outcomes depend on others’ choices, reasoning backward from the other side’s perspective reveals win-win equilibria.',
    coreThesisBn:
      'অন্য পক্ষের সম্ভাব্য পদক্ষেপ আগে ভেবে নিলে অযথা ক্ষতি এড়িয়ে উভয়ের জন্য লাভজনক পথ পাওয়া যায়।',
    keyTakeaways: [
      'Repeated games turn short-term distrust into lasting trust.',
      'Look forward, reason backward.',
      'Credible actions matter far more than empty boasts.',
    ],
    keyTakeawaysBn: [
      'বারবার কাজের সুযোগ থাকলে বিশ্বাস ও সহযোগিতাই সেরা কৌশল।',
      'শেষ ফলাফল কী হবে তা ভেবে শুরুর পদক্ষেপ ঠিক করুন।',
      'ফাঁকা কথার চেয়ে বিশ্বাসযোগ্য পদক্ষেপ অনেক বেশি কার্যকর।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Prisoner’s Dilemma & Trust',
        titleBn: 'প্রিজনার্স ডিলেমা ও বিশ্বাসের সংকট',
        keyPrinciple: 'Distrust traps players in mutually worse outcomes.',
        levels: {
          explorer:
            'If two shops slash prices below cost, both lose—unless trust keeps healthy norms.',
          student:
            'Repeated interaction rewards tit-for-tat fairness over one-time betrayal.',
          mastery:
            'Nash equilibrium occurs when no player gains by unilaterally changing strategy.',
        },
        summaryBn:
          'পারস্পরিক বিশ্বাস না থাকলে দুই পক্ষই নিজেদের বাঁচাতে গিয়ে এমন সিদ্ধান্ত নেয় যাতে উভয়েরই ক্ষতি হয়।',
        reflectionQuestion: 'How do repeated daily dealings solve the Prisoner’s Dilemma?',
        reflectionAnswer: 'Reputation rewards long-term cooperation over short-term defection.',
      },
      {
        chapterNumber: 2,
        title: 'Look Forward, Reason Backward',
        titleBn: 'সামনে তাকান, পেছন থেকে বিশ্লেষণ করুন',
        keyPrinciple: 'Map future responses before making the opening move.',
        levels: {
          explorer:
            'Chess players look three moves ahead asking “What will my opponent answer?” before touching a piece!',
          student:
            'Sequential decision trees reveal first-mover vs. patient follower advantages.',
          mastery:
            'Subgame perfect equilibrium filters out non-credible threats.',
        },
        summaryBn:
          'দাবার মতোই যেকোনো বড় পদক্ষেপে প্রতিপক্ষ কীভাবে প্রতিক্রিয়া দেখাবে তা আগে ভেবে নিলে ভুল কমে।',
        reflectionQuestion: 'When does moving second win?',
        reflectionAnswer: 'When learning cheaply from the pioneer’s early design mistakes.',
      },
      {
        chapterNumber: 3,
        title: 'Signaling & Credible Commitments',
        titleBn: 'বিশ্বাসযোগ্য সংকেত ও প্রতিশ্রুতি',
        keyPrinciple: 'Verifiable costly commitments beat cheap talk.',
        levels: {
          explorer:
            'A 5-year repair warranty proves a maker actually trusts their welds!',
          student:
            'Certifications and warranties reduce information asymmetry in markets.',
          mastery:
            'Signaling separates types only when false signaling costs low-quality actors disproportionately.',
        },
        summaryBn:
          'মুখের কথার চেয়ে দীর্ঘমেয়াদী ওয়ারেন্টি বা বাস্তব প্রমাণই ক্রেতার মনে প্রকৃত বিশ্বাস তৈরি করে।',
        reflectionQuestion: 'Why is “talk is cheap” true in game theory?',
        reflectionAnswer: 'Zero-cost claims convey zero informative distinction between honest and bluffing players.',
      },
      {
        chapterNumber: 4,
        title: 'Auctions & Fair Division',
        titleBn: 'নিলাম ও ন্যায্য বণ্টন',
        keyPrinciple: 'Smart institutional rules align incentives with truth-telling.',
        levels: {
          explorer:
            '“I cut the cake, you choose first” makes the cutter slice dead even automatically!',
          student:
            'Second-price Vickrey auctions reward bidding true value honestly.',
          mastery:
            'Mechanism design powers organ exchanges and public spectrum auctions fairly.',
        },
        summaryBn:
          'একজন ভাগ করবে আর অন্যজন প্রথম পছন্দ নেবে—সঠিক নিয়ম তৈরি করলে মানুষ স্বভাবতই ন্যায্য আচরণ করে।',
        reflectionQuestion: 'Why does “I cut, you pick” avoid cake disputes?',
        reflectionAnswer: 'Slicing unevenly guarantees the cutter receives the smaller half.',
      },
    ],
  },
  {
    id: 'book-ethical-startup',
    title: 'Ethical Entrepreneurship & Business Building',
    titleBn: 'নৈতিক উদ্যোক্তা উন্নয়ন ও প্রতিষ্ঠান গড়া',
    authorOrOrigin: 'Ries, Osterwalder · Venture Practice',
    era: 'Contemporary Management',
    category: 'commerce-economics',
    storeId: 'commerce',
    subjectId: 'entrepreneurship',
    ageBand: 'Ages 13–18',
    coverColorHex: '#854d0e',
    readingMinutes: 21,
    synopsis:
      'Turn genuine community problems into sustainable ventures: customer listening, small MVP tests, and unit economics.',
    synopsisBn:
      'বাস্তব সমস্যার সমাধান, গ্রাহকের কথা শোনা, স্বল্প খরচে পরীক্ষা, ইউনিট ইকোনমিকস ও নৈতিক নেতৃত্বের মাধ্যমে টেকসই উদ্যোগ গড়া।',
    coreThesis:
      'Successful ventures start by deeply understanding a painful user problem—not an untested gadget.',
    coreThesisBn:
      'সফল উদ্যোক্তা হওয়ার শুরুটা হয় মানুষের প্রকৃত সমস্যা গভীরভাবে বুঝে সমাধান গড়ার মাধ্যমে।',
    keyTakeaways: [
      'Listen to real users before building in secret.',
      'Track Unit Economics: Lifetime Value must exceed Acquisition Cost.',
      'Integrity and team care sustain organizations for decades.',
    ],
    keyTakeawaysBn: [
      'বড় বিনিয়োগের আগে বাস্তব ব্যবহারকারীর সাথে কথা বলে ছোট পরীক্ষা চালান।',
      'প্রতি গ্রাহক থেকে আয় খরচের চেয়ে বেশি না হলে ব্যবসা টেকসই হয় না।',
      'সততা ও কর্মীদের সম্মান প্রতিষ্ঠানের দীর্ঘস্থায়ী ভিত্তি গড়ে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Finding Problems Worth Solving',
        titleBn: 'সমাধানযোগ্য প্রকৃত সমস্যা খুঁজে পাওয়া',
        keyPrinciple: 'Customers hire products to solve painful real jobs.',
        levels: {
          explorer:
            'Notice what annoys neighbors daily—keeping lunches fresh or swapping textbooks—and test a helpful fix!',
          student:
            'Observe actual frustrations instead of asking polite friends “Do you like my idea?”',
          mastery:
            'Jobs-to-be-Done interviews uncover hidden constraints beyond demographic labels.',
        },
        summaryBn:
          'মানুষ পণ্য কেনে না—নিজেদের কোনো কাজ সহজ বা সুন্দরভাবে সারার সমাধান খোঁজে।',
        reflectionQuestion: 'Why is “Would you buy this?” unreliable feedback?',
        reflectionAnswer: 'Polite friends say yes without risking real time or money.',
      },
      {
        chapterNumber: 2,
        title: 'Minimum Viable Tests & Pivots',
        titleBn: 'ছোট পরীক্ষা ও দ্রুত শেখা',
        keyPrinciple: 'Validate risky assumptions quickly before heavy spending.',
        levels: {
          explorer:
            'Bake 10 test cookies with three recipes before baking 200 for the school fair!',
          student:
            'MVPs test core value fast; pivot strategy cleanly when evidence contradicts early guesses.',
          mastery:
            'Validated learning shrinks sunk costs and speeds product–market fit.',
        },
        summaryBn:
          'সব পুঁজি একসাথে না খাটিয়ে স্বল্প পরিসরে পরীক্ষা (MVP) করে মানুষের বাস্তব প্রতিক্রিয়া থেকে শিক্ষা নিন।',
        reflectionQuestion: 'What is a structured pivot?',
        reflectionAnswer: 'Keeping verified user insights while shifting approach based on data.',
      },
      {
        chapterNumber: 3,
        title: 'Unit Economics & Honest Pricing',
        titleBn: 'ইউনিট ইকোনমিকস ও টেকসই আয়',
        keyPrinciple: 'Selling more below cost scales losses faster.',
        levels: {
          explorer:
            'Selling 25-taka juice for 20 taka loses money faster the more customers line up!',
          student:
            'Track contribution margin, fixed overhead break-even, and LTV > CAC.',
          mastery:
            'Payback period and gross margin protect cash runway.',
        },
        summaryBn:
          'প্রতিটি ইউনিট বিক্রি করে যদি লাভ না থাকে তবে বিক্রির পরিমাণ বাড়ালে লোকসান আরও দ্রুত বাড়বে।',
        reflectionQuestion: 'What does break-even measure?',
        reflectionAnswer: 'Sales volume needed to cover all fixed rent and salary costs.',
      },
      {
        chapterNumber: 4,
        title: 'Leadership, Team & Social Impact',
        titleBn: 'দলীয় নেতৃত্ব ও সামাজিক দায়বদ্ধতা',
        keyPrinciple: 'Trust compounds faster than shortcuts.',
        levels: {
          explorer:
            'Treat teammates fairly and keep promises—neighbors gladly support honest shops.',
          student:
            'Social enterprises prove community uplift and financial sustainability reinforce each other.',
          mastery:
            'Psychological safety and fair governance power resilient long-lived institutions.',
        },
        summaryBn:
          'গ্রাহক, কর্মী ও পরিবেশের প্রতি দায়িত্বশীলতা এবং প্রতিশ্রুতি রক্ষা একটি উদ্যোগকে শ্রদ্ধেয় প্রতিষ্ঠানে পরিণত করে।',
        reflectionQuestion: 'Why do high-trust brands weather downturns better?',
        reflectionAnswer: 'Loyal repeat customers reduce acquisition costs during tight budgets.',
      },
    ],
  },
  {
    id: 'book-plato-republic',
    title: "Socrates, Plato & The Art of Questioning",
    titleBn: 'সক্রেটিস, প্লেটো ও প্রশ্ন করার দর্শন',
    authorOrOrigin: 'Plato · Ancient Greek Philosophy',
    era: 'c. 375 BCE · Philosophy',
    category: 'philosophy-psychology',
    storeId: 'arts',
    subjectId: 'philosophy',
    ageBand: 'Ages 13–18',
    coverColorHex: '#4c1d95',
    readingMinutes: 22,
    synopsis:
      'Socratic questioning, the Allegory of the Cave, justice in the soul, and lifelong intellectual courage.',
    synopsisBn:
      'সক্রেটিসের প্রশ্নোত্তর পদ্ধতি, গুহার রূপক, ন্যায়বিচার ও আত্মজ্ঞান—কেন বিচারহীন জীবনের চেয়ে প্রশ্ন করা ও জানা জরুরি।',
    coreThesis:
      'Questioning untested assumptions—starting with our own—clears confusion toward wisdom and justice.',
    coreThesisBn:
      'অপ্রমাণিত ধারণাগুলোকে যুক্তির প্রশ্নবাণে যাচাই করাই প্রজ্ঞা ও ন্যায়ের প্রথম ধাপ।',
    keyTakeaways: [
      'Recognizing what we do NOT know opens real learning.',
      'Escape cave shadows toward verified inquiry.',
      'Inner harmony balances reason, courage, and desire.',
    ],
    keyTakeawaysBn: [
      '“আমি জানি না”—এই স্বীকারোক্তিই প্রকৃত জ্ঞানার্জনের প্রথম ধাপ।',
      'অন্ধ অনুকরণের ছায়া ছেড়ে যুক্তির আলোয় বের হয়ে আসতে হয়।',
      'বিবেক, সাহস ও ইচ্ছার সুষম ভারসাম্যেই ন্যায় নিহিত।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Socratic Wisdom: Knowing What We Don’t Know',
        titleBn: 'সক্রেটিসের প্রজ্ঞা ও প্রশ্নোত্তর',
        keyPrinciple: 'Humility clears false certainty so discovery begins.',
        levels: {
          explorer:
            'Socrates walked markets asking friendly questions so neighbors tested whether quick opinions held true!',
          student:
            'Socratic dialogue (elenchus) uncovers contradictions peacefully so clearer definitions emerge.',
          mastery:
            'Aporetic inquiry separates sophistry from collaborative truth-seeking.',
        },
        summaryBn:
          'সবজান্তা ভাব না করে সৎ প্রশ্ন করার মাধ্যমেই চিন্তার অস্পষ্টতা দূর হয়ে প্রকৃত সত্য বেরিয়ে আসে।',
        reflectionQuestion: 'Why did Socrates call himself wise despite claiming not to know?',
        reflectionAnswer: 'He recognized his ignorance instead of mistaking unexamined habits for knowledge.',
      },
      {
        chapterNumber: 2,
        title: 'The Allegory of the Cave',
        titleBn: 'প্লেটোর গুহার রূপক',
        keyPrinciple: 'Education turns the mind around from shadows toward light.',
        levels: {
          explorer:
            'Imagine living in a cave watching puppet shadows until someone climbs outside to see real sunlight and trees!',
          student:
            'True education transforms how we perceive evidence rather than cramming memorized slogans.',
          mastery:
            'The Divided Line pairs imagination, belief, mathematics, and philosophical understanding.',
        },
        summaryBn:
          'দেয়ালের ছায়াকেই সব সত্য ভেবে বসে না থেকে, শিক্ষা মনকে সূর্যালোকে বেরিয়ে আসার সাহস জোগায়।',
        reflectionQuestion: 'Why do prisoners resist someone returning from sunlight?',
        reflectionAnswer: 'Familiar shadows feel safe while new truth demands effort.',
      },
      {
        chapterNumber: 3,
        title: 'Justice & Harmony of the Mind',
        titleBn: 'অন্তরের ন্যায়বিচার ও ভারসাম্য',
        keyPrinciple: 'Inner balance aligns reason, courage, and appetites.',
        levels: {
          explorer:
            'Wise thinking holds the chariot reins while courage and energy pull smoothly together!',
          student:
            'Reason balances spirited pride and immediate appetite; tyranny arises when impulse rules.',
          mastery:
            'The Ring of Gyges probes whether integrity heals human life even when unseen.',
        },
        summaryBn:
          'যখন যুক্তি ও বিবেক সঠিক পথে আবেগ ও ইচ্ছাকে চালনা করে, তখন মানুষের ভেতরে ও সমাজে ন্যায় প্রতিষ্ঠিত হয়।',
        reflectionQuestion: 'What challenge does the Ring of Gyges raise?',
        reflectionAnswer: 'Whether honesty matters internally or only out of fear of punishment.',
      },
      {
        chapterNumber: 4,
        title: 'Lifelong Learning & Public Duty',
        titleBn: 'আজীবন শিক্ষা ও সমাজের প্রতি দায়',
        keyPrinciple: 'Wisdom carries a duty to serve the wider community.',
        levels: {
          explorer:
            'Once you solve a tough puzzle, turning around to help friends climb up too is the best part!',
          student:
            'Scholars return to serve schools, clinics, and laws rather than hiding knowledge away.',
          mastery:
            'Civic guardianship marries rigor with public-spirited stewardship.',
        },
        summaryBn:
          'নিজে আলোকিত হওয়ার পর সমাজের বাকি মানুষদের সাহায্য করতে ফিরে আসাই শিক্ষার সার্থকতা।',
        reflectionQuestion: 'Why must enlightened learners return to the civic cave?',
        reflectionAnswer: 'A healthy community depends on educated citizens contributing back fairly.',
      },
    ],
  },
  {
    id: 'book-eastern-wisdom',
    title: 'Eastern Wisdom: Upanishads, Buddhism & Tao',
    titleBn: 'প্রাচ্য দর্শন: উপনিষদ, বৌদ্ধ ও তাওবাদ',
    authorOrOrigin: 'South & East Asian Philosophical Heritage',
    era: '800 BCE–300 BCE',
    category: 'philosophy-psychology',
    storeId: 'arts',
    subjectId: 'philosophy',
    ageBand: 'All Ages',
    coverColorHex: '#5b21b6',
    readingMinutes: 22,
    synopsis:
      'Mindfulness, compassion, the Middle Way, interconnectedness, and effortless harmony with nature.',
    synopsisBn:
      'প্রাচ্যের প্রাচীন প্রজ্ঞা: আত্মোপলব্ধি, বৌদ্ধ মধ্যপন্থা ও করুণা এবং প্রকৃতির ছন্দের সাথে সহজ সহাবস্থান।',
    coreThesis:
      'Suffering eases when reactive craving gives way to mindful awareness, compassion, and balance.',
    coreThesisBn:
      'অতিরিক্ত আসক্তি ও অহংকার ত্যাগ করে সচেতন মন, করুণা ও ভারসাম্যপূর্ণ জীবন যাপনেই শান্তি আসে।',
    keyTakeaways: [
      'Upanishads look beneath shifting surfaces toward shared unity.',
      'The Middle Way avoids both excess and harsh austerity.',
      'Mindful breathing and compassion soften reactive anger.',
    ],
    keyTakeawaysBn: [
      'বাহ্যিক বিভেদের নিচে সব প্রাণের গভীর ঐক্য খুঁজে দেখাই প্রজ্ঞা।',
      'অতিভোগ ও অতি-কঠোরতার মাঝে ভারসাম্যপূর্ণ মধ্যপন্থাই শ্রেষ্ঠ।',
      'মনোযোগী শ্বাস ও করুণা মানুষের রাগ ও অস্থিরতা প্রশমিত করে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Upanishads: Inner Unity',
        titleBn: 'উপনিষদ: প্রশ্ন ও অন্তর্নিহিত ঐক্য',
        keyPrinciple: 'All living beings share deep kinship beneath outward difference.',
        levels: {
          explorer:
            'Salt vanishes in water yet flavors every drop—kindness quietly connects every creature.',
          student:
            'Framed as fearless teacher–student dialogues exploring truth, awareness, and unity.',
          mastery:
            'Advaita insights inspired Tagore and modern contemplative dialogue.',
        },
        summaryBn:
          'গুরু-শিষ্যের প্রশ্নোত্তর সংলাপের মাধ্যমে উপনিষদ সব প্রাণের অন্তর্নিহিত ঐক্যের সন্ধান দেয়।',
        reflectionQuestion: 'Why are Upanishads framed as open dialogues?',
        reflectionAnswer: 'Wisdom grows through live questioning rather than rote authority.',
      },
      {
        chapterNumber: 2,
        title: 'The Middle Way & Impermanence',
        titleBn: 'বৌদ্ধ মধ্যপন্থা ও দুঃখ মুক্তির পথ',
        keyPrinciple: 'Balance tunes life cleanly like a lute string.',
        levels: {
          explorer:
            'Pull a guitar string too tight and it snaps; leave it loose and it won’t sing—balance makes music!',
          student:
            'Right speech, mindful effort, and non-harm translate insight into everyday conduct.',
          mastery:
            'Dependent origination views existence as interconnected process rather than isolated ego.',
        },
        summaryBn:
          'বীণার তার খুব শক্ত হলে ছিঁড়ে যায় আর ঢিলা হলে সুর বাজে না—এই ভারসাম্যপূর্ণ মধ্যপন্থাই শান্তির পথ।',
        reflectionQuestion: 'How does accepting impermanence ease daily anxiety?',
        reflectionAnswer: 'It softens rigid clinging during change while deepening gratitude.',
      },
      {
        chapterNumber: 3,
        title: 'Tao Te Ching: Water & Flow',
        titleBn: 'তাওবাদ: পানির মতো নমনীয় শক্তি',
        keyPrinciple: 'Gentle persistence outlasts brittle force.',
        levels: {
          explorer:
            'River water never fights rocks angrily, yet over years it carves canyons and feeds forests!',
          student:
            'Wu-wei aligns skilled action smoothly with timing rather than forcing against nature.',
          mastery:
            'Ecological systems thinking mirrors Taoist respect for self-regulating balance.',
        },
        summaryBn:
          'পানির মতো বিনয়ী ও নমনীয় হলে কোনো বাধাই চলার পথ আটকাতে পারে না।',
        reflectionQuestion: 'Why does Taoism praise empty space inside a cup?',
        reflectionAnswer: 'Utility comes equally from open receptive space and solid walls.',
      },
      {
        chapterNumber: 4,
        title: 'Compassion in Bengal Baul Heritage',
        titleBn: 'বাউল ঐতিহ্য ও মানবতাবাদী করুণা',
        keyPrinciple: 'Shared humanity transcends outward divisions.',
        levels: {
          explorer:
            'Three slow breaths settle upset feelings like muddy water clearing in a calm glass.',
          student:
            'Lalon Fakir and Bengal’s Baul minstrels sang universal humanism across every creed.',
          mastery:
            'Mindful pause decouples emotional impulse from deliberate ethical choice.',
        },
        summaryBn:
          'বাংলার বাউল সাধনায় এই অন্তরের প্রজ্ঞা ও ভালোবাসা “সবার উপরে মানুষ সত্য” রূপে বিকশিত হয়েছে।',
        reflectionQuestion: 'What clears muddy water fastest?',
        reflectionAnswer: 'Stopping stirring and letting stillness settle silt naturally.',
      },
    ],
  },
  {
    id: 'book-aristotle-ethics',
    title: 'Nicomachean Ethics: Character & Virtue',
    titleBn: 'অ্যারিস্টটলের নীতিশাস্ত্র: চরিত্র ও অভ্যাস',
    authorOrOrigin: 'Aristotle · Virtue Ethics',
    era: 'c. 340 BCE · Moral Philosophy',
    category: 'philosophy-psychology',
    storeId: 'arts',
    subjectId: 'philosophy',
    ageBand: 'Ages 13–18',
    coverColorHex: '#6d28d9',
    readingMinutes: 20,
    synopsis:
      'Excellence as daily habit, the Golden Mean, practical wisdom, and character friendships.',
    synopsisBn:
      'গুণাবলি কোনো ভাগ্য নয় বরং প্রতিদিনের চর্চিত অভ্যাস; সাহসের ভারসাম্য ও প্রকৃত বন্ধুত্ব কীভাবে পরিপূর্ণ সুখ আনে।',
    coreThesis:
      'Human flourishing comes from practicing balanced virtues habitually within genuine friendships.',
    coreThesisBn:
      'সুবর্ণ মধ্যপন্থায় সদ্গুণের নিয়মিত চর্চা এবং সৎ বন্ধুত্বই মানুষকে প্রকৃত সুখী ও সার্থক করে।',
    keyTakeaways: [
      'Virtues strengthen through everyday practice.',
      'The Golden Mean avoids deficiency and excess.',
      'True friendship wills good for a friend’s own sake.',
    ],
    keyTakeawaysBn: [
      'সততা ও সাহস প্রতিদিনের চর্চায় আয়ত্ত করতে হয়।',
      'সুবর্ণ মধ্যম পন্থা ভীরুতা ও হঠকারিতা উভয় থেকেই দূরে থাকে।',
      'প্রকৃত বন্ধুত্ব স্বার্থের ওপর নয়, বন্ধুর মঙ্গলকামনার ওপর গড়ে ওঠে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Eudaimonia: Lasting Flourishing',
        titleBn: 'প্রকৃত কল্যাণ ও সুখের অর্থ',
        keyPrinciple: 'Flourishing is living skillfully across a lifetime.',
        levels: {
          explorer:
            'Candy feels fun for two minutes; mastering music, sport, or helping someone lasts all year!',
          student:
            'Aristotle contrasts fleeting sensory pleasure with lifelong intellectual and moral growth.',
          mastery:
            'Virtue ethics centers character formation (“Who am I becoming?”).',
        },
        summaryBn:
          'ক্ষুদ্র সাময়িক আনন্দের চেয়ে নিজের মেধা, ন্যায়বোধ ও মানবিক গুণাবলি বিকশিত করাই জীবনের গভীরতম সার্থকতা।',
        reflectionQuestion: 'Why isn’t money the final human goal?',
        reflectionAnswer: 'Money is merely a means toward deeper goods like health, craft, and friendship.',
      },
      {
        chapterNumber: 2,
        title: 'The Golden Mean & Habit',
        titleBn: 'সুবর্ণ মধ্যপন্থা ও অভ্যাসের গঠন',
        keyPrinciple: 'Excellence is formed by repeated deliberate deeds.',
        levels: {
          explorer:
            'Courage sits right between running scared and showing off foolishly!',
          student:
            'Practical wisdom (phronesis) judges what right balance fits each real situation.',
          mastery:
            'Habituation aligns emotional inclination with reasoned moral perception.',
        },
        summaryBn:
          'ভীরুতা ও হঠকারিতার মাঝামাঝি যেমন সাহস, তেমনি প্রতিদিনের অভ্যাসে জীবনের ভারসাম্য গড়ে ওঠে।',
        reflectionQuestion: 'How does building honesty resemble learning violin?',
        reflectionAnswer: 'Consistent daily practice builds natural skill and steadiness.',
      },
      {
        chapterNumber: 3,
        title: 'Three Kinds of Friendship',
        titleBn: 'বন্ধুত্বের তিন স্তর',
        keyPrinciple: 'Character friendships endure long after favors fade.',
        levels: {
          explorer:
            'Best friends stick beside you honestly and help you become kinder and braver.',
          student:
            'Friendships of utility and pleasure shift quickly; virtue friendships anchor trust across decades.',
          mastery:
            'Civic philia strengthens law through mutual community care.',
        },
        summaryBn:
          'প্রয়োজনের বন্ধুত্ব সময় ফুরালে শেষ হয়, কিন্তু সৎ চরিত্র ও শ্রদ্ধার বন্ধুত্ব সারা জীবন অটুট থাকে।',
        reflectionQuestion: 'Why are virtue friendships rarer than convenience friendships?',
        reflectionAnswer: 'They require steady patience, honesty, and mutual care beyond personal gain.',
      },
      {
        chapterNumber: 4,
        title: 'Civic Life & Fairness',
        titleBn: 'নাগরিক জীবন ও ন্যায়বিচার',
        keyPrinciple: 'Good communities cultivate good citizens from youth.',
        levels: {
          explorer:
            'Clean libraries, fair classrooms, and helpful neighbors lift everyone together.',
          student:
            'Ethics and politics connect: fair laws encourage healthy character.',
          mastery:
            'Distributive justice proportions public honors and opportunities fairly.',
        },
        summaryBn:
          'সুস্থ সমাজ ও ন্যায়ভিত্তিক শিক্ষাপ্রতিষ্ঠান মানুষের ভেতরের সৎ গুণাবলি বিকাশের সেরা ক্ষেত্র তৈরি করে।',
        reflectionQuestion: 'Why did Aristotle connect Ethics with Politics?',
        reflectionAnswer: 'Laws and public schools actively shape citizens’ daily habits.',
      },
    ],
  },
  {
    id: 'book-cognitive-mind',
    title: 'Thinking, Memory & Cognitive Science',
    titleBn: 'মনোবিজ্ঞান: চিন্তা, স্মৃতি ও মস্তিষ্কের বিজ্ঞান',
    authorOrOrigin: 'Kahneman, Miller · Cognitive Psychology',
    era: 'Contemporary Neuroscience',
    category: 'philosophy-psychology',
    storeId: 'arts',
    subjectId: 'psychology',
    ageBand: 'All Ages',
    coverColorHex: '#0f766e',
    readingMinutes: 22,
    synopsis:
      'Fast intuition vs. slow analysis, working memory chunking, sleep consolidation, and outsmarting bias.',
    synopsisBn:
      'দ্রুত স্বজ্ঞাত চিন্তা ও ধীর বিশ্লেষণাত্মক চিন্তা কীভাবে কাজ করে, ঘুম কীভাবে স্মৃতি পাকা করে এবং মানসিক ভ্রান্তি থেকে বাঁচার উপায়।',
    coreThesis:
      'Understanding attention limits, chunking, and sleep loops makes learning faster and decisions wiser.',
    coreThesisBn:
      'মস্তিষ্কের কাজের সীমাবদ্ধতা, ঘুম ও মনোযোগের বিজ্ঞান জানলে পড়াশোনা ও সিদ্ধান্ত নেওয়া অনেক সহজ হয়।',
    keyTakeaways: [
      'Chunking packs dozens of bits into ~4–7 memorable mental slots.',
      'Pair fast intuition with calm analytical checks.',
      'Deep sleep locks daytime lessons into long-term memory.',
    ],
    keyTakeawaysBn: [
      'তথ্য সাজিয়ে গুচ্ছে (Chunking) পড়লে স্মৃতিশক্তি বহুগুণ বাড়ে।',
      'তাৎক্ষণিক ধারণার পর ধীর যুক্তিবাদী যাচাই ভুল কমায়।',
      'রাতের পর্যাপ্ত ঘুম দিনের পড়াশোনাকে দীর্ঘমেয়াদী স্মৃতিতে স্থায়ী করে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Two Modes: Fast & Slow',
        titleBn: 'মনের দুটি গতি: দ্রুত ও ধীর চিন্তা',
        keyPrinciple: 'Intuition handles habits; deliberate thought catches hidden traps.',
        levels: {
          explorer:
            '“2 + 2 = 4” pops instantly (Fast Brain), while “24 × 17” asks your Slow Brain for scratch paper!',
          student:
            'System 1 acts rapidly yet falls for anchors and optical illusions unless System 2 verifies.',
          mastery:
            'Dual-process framing explains heuristics and probability neglect.',
        },
        summaryBn:
          'সহজ প্রশ্নে মস্তিষ্ক মুহূর্তে উত্তর দেয়, কিন্তু জটিল সমস্যায় ধীরগতির সচেতন বিশ্লেষণ ভুল আটকায়।',
        reflectionQuestion: 'Why does multitasking hurt textbook reading comprehension?',
        reflectionAnswer: 'Attention switching burns working memory slots every few seconds.',
      },
      {
        chapterNumber: 2,
        title: 'Working Memory & Chunking',
        titleBn: 'মনোযোগ ও চাংকিং কৌশল',
        keyPrinciple: 'Meaningful grouping multiplies mental storage capacity.',
        levels: {
          explorer:
            'Random letters look hard until grouped into familiar words or patterns!',
          student:
            'Understand main principles first so details hang cleanly together like ornaments on a tree.',
          mastery:
            'Prefrontal executive networks integrate schemas into cortical memory.',
        },
        summaryBn:
          'তথ্যগুলোকে অর্থবহ ছোট ছোট গুচ্ছে সাজিয়ে পড়লে মনোযোগ ও স্মৃতিশক্তি অনেক বাড়ে।',
        reflectionQuestion: 'Why do experts recall board patterns instantly?',
        reflectionAnswer: 'They encode positions as familiar tactical chunks.',
      },
      {
        chapterNumber: 3,
        title: 'Sleep & Memory Consolidation',
        titleBn: 'ঘুম ও স্মৃতির স্থায়ীকরণ',
        keyPrinciple: 'Sleep replays and locks in daytime study.',
        levels: {
          explorer:
            'While you sleep peacefully, your brain files daytime lessons onto permanent bookshelves!',
          student:
            'All-nighters starve slow-wave memory consolidation before exams.',
          mastery:
            'Thalamocortical sleep spindles stabilize hippocampal synaptic traces.',
        },
        summaryBn:
          'রাত জেগে পড়ার চেয়ে দিনে পড়ে রাতে পর্যাপ্ত ঘুমালে মস্তিষ্ক দিনের শেখা বিষয়গুলো স্থায়ী করে।',
        reflectionQuestion: 'Why do tough puzzles feel clearer next morning?',
        reflectionAnswer: 'REM sleep recombines stored patterns free from tunnel vision.',
      },
      {
        chapterNumber: 4,
        title: 'Growth Mindset & Bias Checks',
        titleBn: 'ভ্রান্তি জয় ও শেখার মানসিকতা',
        keyPrinciple: 'Treat errors as feedback signals, not fixed verdicts.',
        levels: {
          explorer:
            'Saying “I haven’t solved this YET” opens your brain to grow stronger!',
          student:
            'Hunt actively for counter-evidence to avoid confirmation bias.',
          mastery:
            'Pre-mortems curb institutional overconfidence.',
        },
        summaryBn:
          '“আমি এখনো এটি শিখছি” এই মনোভাব এবং ভুল থেকে শেখার অভ্যাসই বুদ্ধিবৃত্তিক উন্নতির পথ।',
        reflectionQuestion: 'How do you beat confirmation bias when studying a debate?',
        reflectionAnswer: 'Read the strongest evidence for the opposite view first.',
      },
    ],
  },
  {
    id: 'book-formal-logic',
    title: 'Formal Logic & Critical Thinking',
    titleBn: 'যুক্তিবিজ্ঞান ও সমালোচনামূলক চিন্তা',
    authorOrOrigin: 'Aristotle, Boole · Logic & Rhetoric',
    era: 'Classical–Symbolic Logic',
    category: 'philosophy-psychology',
    storeId: 'applied',
    subjectId: 'logic',
    ageBand: 'Ages 13–18',
    coverColorHex: '#1e293b',
    readingMinutes: 19,
    synopsis:
      'Syllogisms, truth tables, spotting everyday fallacies, and arguing with charitable rigor.',
    synopsisBn:
      'সঠিক যুক্তি ও প্রতারণামূলক কথার পার্থক্য: ন্যায়-অনুমান, সত্য সারণি এবং সাধারণ যুক্তিদোষ (Fallacies)।',
    coreThesis:
      'Sound truth requires BOTH logically valid structure and factually true premises.',
    coreThesisBn:
      'সিদ্ধান্ত সত্য হতে হলে যুক্তির কাঠামো সঠিক হওয়ার পাশাপাশি শুরুর তথ্যগুলোও সত্য হতে হবে।',
    keyTakeaways: [
      'Valid form preserves truth only from true premises.',
      'Address arguments directly rather than attacking people.',
      '“If P then Q” equals its contrapositive “If not Q then not P”.',
    ],
    keyTakeawaysBn: [
      'কাঠামো ঠিক থাকলেও শুরুর তথ্য মিথ্যা হলে সিদ্ধান্ত সঠিক হয় না।',
      'ব্যক্তি-আক্রমণ নয়, প্রমাণ দিয়ে যুক্তির উত্তর দিন।',
      '“যদি P তবে Q” সত্য হলে “যদি না-Q তবে না-P” সত্য হয়।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Premises, Validity & Soundness',
        titleBn: 'আশ্রয়বাক্য, বৈধতা ও যথার্থতা',
        keyPrinciple: 'Soundness = Valid Form + Verified Premises.',
        levels: {
          explorer:
            '“All birds have feathers; robins are birds; so robins have feathers!” Notice how clues lock into certainty.',
          student:
            'Check hidden unstated assumptions before accepting any smooth conclusion.',
          mastery:
            'Modus ponens and modus tollens anchor formal deductive proof.',
        },
        summaryBn:
          'তর্কে জিততে নয়, সত্য জানতে হলে কথার গঠন ও শুরুর তথ্য দুটোই পরীক্ষা করতে হয়।',
        reflectionQuestion: 'What happens if an argument has valid form but a false starting premise?',
        reflectionAnswer: 'It is valid in structure yet unsound—the conclusion cannot be trusted.',
      },
      {
        chapterNumber: 2,
        title: 'Spotting Common Fallacies',
        titleBn: 'দৈনন্দিন যুক্তিদোষ চেনার উপায়',
        keyPrinciple: 'Spot Strawman, Ad Hominem, and False Dilemma tricks quickly.',
        levels: {
          explorer:
            'Changing the topic to insult someone’s muddy shoes dodges the actual question!',
          student:
            'False Dilemmas force two extremes while ignoring practical middle alternatives.',
          mastery:
            'Post hoc ergo propter hoc confuses time order with causation.',
        },
        summaryBn:
          'ব্যক্তি-আক্রমণ, বিপক্ষের কথা বিকৃত করা বা দুটি মাত্র বিকল্পে আটকে ফেলা সাধারণ যুক্তিদোষ।',
        reflectionQuestion: 'What is a Strawman argument?',
        reflectionAnswer: 'Misrepresenting someone’s real point as an absurd exaggeration to knock it down easily.',
      },
      {
        chapterNumber: 3,
        title: 'Boolean Conditionals',
        titleBn: 'বুলিয়ান যুক্তি ও শর্তাবলি',
        keyPrinciple: 'AND, OR, NOT, and IF–THEN structure math and code.',
        levels: {
          explorer:
            '“If it rains, the street gets wet.” A wet street could also come from washing a car!',
          student:
            'Master converse vs. contrapositive so implications never trick you.',
          mastery:
            'De Morgan’s laws ¬(A ∧ B) ≡ ¬A ∨ ¬B simplify digital circuits and queries.',
        },
        summaryBn:
          '“বৃষ্টি হলে রাস্তা ভিজবে” মানে এই নয় যে রাস্তা ভিজলেই বৃষ্টি হয়েছে!',
        reflectionQuestion: 'What statement always matches “If P then Q”?',
        reflectionAnswer: '“If NOT Q, then NOT P.”',
      },
      {
        chapterNumber: 4,
        title: 'Steelmanning & Fair Debate',
        titleBn: 'শক্তিশালী তর্ক ও বিনয়ী বিচারবুদ্ধি',
        keyPrinciple: 'Answer the strongest version of opposing views.',
        levels: {
          explorer:
            'Summarize a classmate’s point kindly before answering so everyone solves problems faster!',
          student:
            'Steelmanning turns arguments into collaborative truth-seeking.',
          mastery:
            'Epistemic humility keeps confidence scaled to verified evidence.',
        },
        summaryBn:
          'অন্যের যুক্তির সবচেয়ে শক্তিশালী দিকটি বুঝে আলোচনা করলে সবারই জ্ঞান বাড়ে।',
        reflectionQuestion: 'How does steelmanning sharpen your own views?',
        reflectionAnswer: 'Testing against the strongest counter-case fixes weak spots early.',
      },
    ],
  },
  {
    id: 'book-world-religions',
    title: 'Comparative World Religions & Shared Ethics',
    titleBn: 'বিশ্বের প্রধান ধর্মসমূহ ও সর্বজনীন নৈতিকতা',
    authorOrOrigin: 'Interfaith Cultural & Ethical Atlas',
    era: 'World Heritage · Cultural Literacy',
    category: 'philosophy-psychology',
    storeId: 'arts',
    subjectId: 'civics',
    ageBand: 'All Ages',
    coverColorHex: '#047857',
    readingMinutes: 22,
    synopsis:
      'Explore Islam, Hinduism, Buddhism, Christianity, Judaism, and shared ethical pillars of compassion, charity, and justice.',
    synopsisBn:
      'ইসলাম, সনাতন ধর্ম, বৌদ্ধ, খ্রিষ্টান ও অন্যান্য ঐতিহ্যের সম্মানজনক পাঠ—সর্বজনীন মানবতা, দানশীলতা, দয়া ও ন্যায়ের অভিন্ন বার্তা।',
    coreThesis:
      'Across distinct scriptures and prayers, world faiths converge on honesty, hospitality, charity, and treating neighbors with care.',
    coreThesisBn:
      'ভিন্ন ইতিহাস ও উপাসনা পদ্ধতির মাঝেও বিশ্বের প্রধান ধর্মগুলোতে সততা, দানশীলতা ও পরোপকারের অটুট ঐক্য রয়েছে।',
    keyTakeaways: [
      'The Golden Rule appears across every major tradition.',
      'Charity, hospitality, and care for orphans unite communities.',
      'Understanding neighbors’ traditions deepens civic peace.',
    ],
    keyTakeawaysBn: [
      'নিজের জন্য যা পছন্দ করেন অন্যের জন্যও তা চাওয়া—এই স্বর্ণসূত্র সব ধর্মেই রয়েছে।',
      'অতিথি আপ্যায়ন, দান ও অসহায়দের পাশে দাঁড়ানো সর্বজনীন ধর্মীয় শিক্ষা।',
      'অন্যের বিশ্বাস সম্পর্কে সঠিক জ্ঞান সমাজে শ্রদ্ধা ও শান্তি আনে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Golden Rule Across Civilizations',
        titleBn: 'সর্বজনীন নৈতিকতার স্বর্ণসূত্র',
        keyPrinciple: 'Empathy bridges every human tradition.',
        levels: {
          explorer:
            'Every major faith reminds us to treat others kindly the way we wish to be treated!',
          student:
            'Islamic Hadith, Hindu epics, Buddhist teachings, and Biblical Gospels all anchor morality in mutual care.',
          mastery:
            'Comparative ethics separates shared moral principles from local ritual calendars.',
        },
        summaryBn:
          'ইসলাম, সনাতন, বৌদ্ধ, খ্রিষ্টান ও প্রাচ্য দর্শন—সর্বত্রই অন্যের প্রতি সহমর্মিতা ও ন্যায়কে মূল শিক্ষা হিসেবে দেখা হয়েছে।',
        reflectionQuestion: 'Why does learning about neighbors’ traditions strengthen society?',
        reflectionAnswer: 'Accurate knowledge replaces prejudice with civic friendship and trust.',
      },
      {
        chapterNumber: 2,
        title: 'Charity, Zakat, Dana & Stewardship',
        titleBn: 'দানশীলতা, যাকাত ও সম্পদের দায়িত্ব',
        keyPrinciple: 'Prosperity carries a duty to uplift vulnerable neighbors.',
        levels: {
          explorer:
            'Sharing festival meals, clothes, and schoolbooks keeps neighborhoods warm and hopeful.',
          student:
            'Islamic Zakat & Waqf, Sikh Langar kitchens, and Hindu Dana funded public wells, schools, and clinics.',
          mastery:
            'Charitable endowments historically seeded hospitals and free libraries across empires.',
        },
        summaryBn:
          'যাকাত, ওয়াকফ, দান ও লঙ্গরের মতো ঐতিহ্য শতাব্দীর পর শতাব্দী শিক্ষাপ্রতিষ্ঠান ও অসহায়দের সহায়তা দিয়ে আসছে।',
        reflectionQuestion: 'What purpose do Zakat and Langar share?',
        reflectionAnswer: 'Supporting human dignity systematically without humiliating recipients.',
      },
      {
        chapterNumber: 3,
        title: 'Knowledge, Patience & Gratitude',
        titleBn: 'জ্ঞানান্বেষণ, ধৈর্য ও কৃতজ্ঞতা',
        keyPrinciple: 'Seeking knowledge and practicing gratitude steady the heart.',
        levels: {
          explorer:
            'Saying thank you before meals and caring for nature build peaceful habits.',
          student:
            'Classical traditions prized literacy, medicine, and astronomy as sacred service.',
          mastery:
            'Contemplative gratitude strengthens resilience during grief and adversity.',
        },
        summaryBn:
          'জ্ঞান অর্জনকে পবিত্র দায়িত্ব মনে করার ঐতিহ্য থেকেই প্রাচীন ও মধ্যযুগে বিশ্ববিদ্যালয় ও চিকিৎসালয় গড়ে উঠেছিল।',
        reflectionQuestion: 'How does gratitude support emotional health?',
        reflectionAnswer: 'It redirects focus from envy toward appreciation and generous action.',
      },
      {
        chapterNumber: 4,
        title: 'Living Together in Harmony',
        titleBn: 'শান্তিপূর্ণ সহাবস্থান ও মানবতা',
        keyPrinciple: 'Hold firm personal values alongside deep respect for others.',
        levels: {
          explorer:
            'Like roses, marigolds, and jasmine blooming together, neighborhoods shine with kindness across every background.',
          student:
            'Pluralism protects freedom of conscience and safety during every community festival.',
          mastery:
            'Equal constitutional citizenship shields sincere faith from coercion.',
        },
        summaryBn:
          'নানা ফুলের বাগানের মতোই ভিন্ন ধর্ম ও মতের মানুষের পারস্পরিক শ্রদ্ধা ও নিরাপত্তায় একটি সমাজ সুন্দর হয়ে ওঠে।',
        reflectionQuestion: 'How does respect go beyond mere tolerance?',
        reflectionAnswer: 'Respect actively safeguards every neighbor’s safety and dignity.',
      },
    ],
  },
];
