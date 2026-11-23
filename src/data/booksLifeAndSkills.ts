import { LibraryBook } from '../types/knowledge';

export const BOOKS_LIFE_AND_SKILLS: LibraryBook[] = [
  {
    id: 'book-human-anatomy',
    title: "Human Anatomy & Physiology Atlas",
    titleBn: 'মানবদেহ, অঙ্গতন্ত্র ও শারীরবিদ্যার সচিত্র পাঠ',
    authorOrOrigin: 'Gray · Clinical & Pre-Med Reference',
    era: 'Modern Medical Science',
    category: 'medicine-nature',
    storeId: 'science',
    subjectId: 'medicine',
    ageBand: 'All Ages',
    coverColorHex: '#991b1b',
    readingMinutes: 24,
    synopsis:
      'Tour the heart and circulation, brain neurons, lungs, digestion, kidneys, and how homeostasis keeps body temperature and sugar steady.',
    synopsisBn:
      'হৃৎপিণ্ড ও রক্তসঞ্চালন, মস্তিষ্ক ও স্নায়ুতন্ত্র, ফুসফুস, পরিপাক ও বৃক্ক কীভাবে শরীরের ভেতরের ভারসাম্য রক্ষা করে।',
    coreThesis:
      'Biological structure always mirrors physiological function across every organ system working in feedback harmony.',
    coreThesisBn:
      'মানবদেহের প্রতিটি অঙ্গের গঠন তার কাজের সাথে নিখুঁতভাবে মানানসই এবং ফিডব্যাক নিয়ন্ত্রণে সমন্বিতভাবে চলে।',
    keyTakeaways: [
      'Arteries carry blood away from the heart; veins return blood through one-way valves.',
      'Neurons signal rapidly via electrical spikes and chemical synapses.',
      'Negative feedback loops stabilize temperature, pH, and blood glucose.',
    ],
    keyTakeawaysBn: [
      'ধমনি হৃৎপিণ্ড থেকে রক্ত বয়ে নেয় এবং শিরা রক্ত ফিরিয়ে আনে।',
      'নিউরন বৈদ্যুতিক সংকেত ও সিন্যাপসের মাধ্যমে দ্রুত বার্তা আদান-প্রদান করে।',
      'নেগেটিভ ফিডব্যাক শরীরের তাপমাত্রা ও রক্তের গ্লুকোজ নিয়ন্ত্রণে রাখে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Heart, Circulation & Oxygen Delivery',
        titleBn: 'হৃৎপিণ্ড ও রক্তসঞ্চালন তন্ত্র',
        keyPrinciple: 'A double pump sends blood to the lungs first, then around the body.',
        levels: {
          explorer:
            'Your heart is a tough fist-sized pump squeezing ~100,000 times daily to carry oxygen from lungs down to your toes!',
          student:
            'Right ventricle pumps deoxygenated blood to alveolar capillaries; left ventricle drives oxygenated blood through the muscular aorta.',
          mastery:
            'Frank–Starling mechanics adjust stroke volume dynamically to venous preload without neural delay.',
        },
        summaryBn:
          'হৃৎপিণ্ডের ডান অংশ ফুসফুসে রক্ত পাঠায় অক্সিজেন আনতে এবং বাম অংশ শক্তিশালী পাম্পের মাধ্যমে সারা দেহে ছড়িয়ে দেয়।',
        reflectionQuestion: 'Why do veins carry one-way valves while high-pressure arteries do not?',
        reflectionAnswer: 'Venous blood returns under low pressure against gravity, needing valves to prevent backward pooling.',
      },
      {
        chapterNumber: 2,
        title: 'Brain, Neurons & Reflexes',
        titleBn: 'মস্তিষ্ক, স্নায়ু ও প্রতিবর্তী ক্রিয়া',
        keyPrinciple: 'Myelinated axons speed electrical impulses while spinal reflexes guard safety fast.',
        levels: {
          explorer:
            'Touch a hot kettle and your spinal cord jerks your hand back instantly before your brain even finishes feeling the sting!',
          student:
            'Action potentials jump rapidly along insulated myelin sheaths, releasing neurotransmitters across synaptic clefts.',
          mastery:
            'Long-term potentiation strengthens frequently fired synapses, laying the physical bedrock of learning.',
        },
        summaryBn:
          'গরম কিছুতে হাত লাগলে মস্তিষ্কে সংকেত পৌঁছানোর আগেই সুষুম্নাকাণ্ডের প্রতিবর্তী ক্রিয়ায় হাত সরে আসে।',
        reflectionQuestion: 'Why does spinal reflex protection beat conscious reaction speed?',
        reflectionAnswer: 'Routing directly through spinal interneurons shaves vital milliseconds off injury response.',
      },
      {
        chapterNumber: 3,
        title: 'Lungs, Kidneys & Homeostasis',
        titleBn: 'ফুসফুস, বৃক্ক ও অভ্যন্তরীণ ভারসাম্য',
        keyPrinciple: 'Gas exchange and nephron filtration preserve blood pH and fluid salt balance.',
        levels: {
          explorer:
            'Inside your lungs sit millions of tiny grape-like air sacs giving huge surface space to swap fresh oxygen for exhaled carbon dioxide!',
          student:
            'Nephrons inside kidneys filter plasma continuously, reclaiming water and glucose while excreting urea waste.',
          mastery:
            'Renal–respiratory compensation maintains arterial pH tightly between 7.35 and 7.45.',
        },
        summaryBn:
          'ফুসফুসের অ্যালভিওলাই অক্সিজেন-কার্বন ডাইঅক্সাইড বিনিময় করে এবং বৃক্কের নেফ্রন রক্ত ছেঁকে বিষাক্ত ইউরিয়া বের করে দেয়।',
        reflectionQuestion: 'Why are lung alveoli shaped like millions of tiny bubbles instead of two empty balloons?',
        reflectionAnswer: 'Tiny sacs pack roughly a tennis court’s worth of gas-exchange surface area inside the chest.',
      },
      {
        chapterNumber: 4,
        title: 'Digestion, Liver & Energy Storage',
        titleBn: 'পরিপাক ও বিপাক প্রক্রিয়া',
        keyPrinciple: 'Enzymes dismantle starch, proteins, and fats into absorbable fuel.',
        levels: {
          explorer:
            'Chewing mixes rice with saliva enzymes first, stomach acid melts germs, and bumpy villi absorb nutrients cleanly!',
          student:
            'Insulin opens cellular doors for glucose uptake after meals; glucagon signals liver glycogen release during fasting.',
          mastery:
            'Hepatic first-pass metabolism processes absorbed nutrients and detoxifies xenobiotics before systemic circulation.',
        },
        summaryBn:
          'মুখ, পাকস্থলী ও ক্ষুদ্রান্ত্রের এনজাইম খাবার ভেঙে রক্তে শোষণে সাহায্য করে এবং ইনসুলিন-গ্লুকাগন রক্তের চিনি নিয়ন্ত্রণ করে।',
        reflectionQuestion: 'How do intestinal villi boost nutrient absorption?',
        reflectionAnswer: 'Finger-like folds multiply inner surface area massively.',
      },
    ],
  },
  {
    id: 'book-immunity-microbes',
    title: 'Microbiology, Vaccines & Immune Defense',
    titleBn: 'জীবাণুবিজ্ঞান, টিকা ও দেহের রোগ প্রতিরোধ ব্যবস্থা',
    authorOrOrigin: 'Pasteur, Jenner · Immunology Guide',
    era: '1796–Modern · Microbiology',
    category: 'medicine-nature',
    storeId: 'science',
    subjectId: 'medicine',
    ageBand: 'All Ages',
    coverColorHex: '#b91c1c',
    readingMinutes: 20,
    synopsis:
      'Compare bacteria and viruses, explore white blood cells and antibodies, and see how vaccines train immune memory safely.',
    synopsisBn:
      'ব্যাকটেরিয়া ও ভাইরাসের পার্থক্য, শ্বেত রক্তকণিকা ও অ্যান্টিবডির যুদ্ধ এবং টিকা কীভাবে রোগ প্রতিরোধের স্মৃতি তৈরি করে।',
    coreThesis:
      'Antibiotics cure bacterial infections without harming viruses, while vaccines safely pre-train memory cells against future threats.',
    coreThesisBn:
      'অ্যান্টিবায়োটিক শুধু ব্যাকটেরিয়ার বিরুদ্ধে কাজ করে, ভাইরাসে নয়; আর টিকা শরীরকে বিপদ আসার আগেই প্রতিরক্ষার প্রশিক্ষণ দেয়।',
    keyTakeaways: [
      'Bacteria are living single cells; viruses require host cells to replicate.',
      'Never take antibiotics for viral colds without a doctor’s prescription.',
      'Memory B and T cells respond orders of magnitude faster on second exposure.',
    ],
    keyTakeawaysBn: [
      'ব্যাকটেরিয়া স্বতন্ত্র জীবকোষ, কিন্তু ভাইরাস বংশবিস্তারের জন্য পোষক কোষ ব্যবহার করে।',
      'সাধারণ সর্দি-কাশির মতো ভাইরাসজনিত রোগে অকারণে অ্যান্টিবায়োটিক খাবেন না।',
      'মেমোরি কোষ একবার চিনে নিলে দ্বিতীয়বার জীবাণু ঢোকার সাথে সাথেই ধ্বংস করে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Bacteria, Viruses & Friendly Gut Flora',
        titleBn: 'ব্যাকটেরিয়া, ভাইরাস ও উপকারী অণুজীব',
        keyPrinciple: 'Most microbes support digestion and soil—only a small fraction cause illness.',
        levels: {
          explorer:
            'Helpful yogurt and tummy bacteria protect you every day, whereas cold viruses sneak inside cells to copy themselves!',
          student:
            'Because viruses lack bacterial cell walls and independent ribosomes, antibiotics cannot stop viral infections.',
          mastery:
            'Horizontal plasmid transfer spreads antibiotic-resistance genes rapidly under agricultural or clinical misuse.',
        },
        summaryBn:
          'সব জীবাণু ক্ষতিকর নয়—দই ও অন্ত্রে থাকা উপকারী ব্যাকটেরিয়া হজম ও রোগ প্রতিরোধে সাহায্য করে।',
        reflectionQuestion: 'Why do antibiotics fail against influenza or common colds?',
        reflectionAnswer: 'Colds and flu are viruses lacking bacterial structures targeted by antibiotics.',
      },
      {
        chapterNumber: 2,
        title: 'Innate & Adaptive Immune Teams',
        titleBn: 'সহজাত ও অর্জিত রোগ প্রতিরোধ ব্যবস্থা',
        keyPrinciple: 'Skin and fever form fast barriers while antibodies lock specific invaders.',
        levels: {
          explorer:
            'Your immune system works like a castle guard: skin is the wall, macrophages swallow intruders, and antibodies stick targets onto germs!',
          student:
            'Adaptive B cells craft specific Y-shaped antibodies while cytotoxic T cells clear virus-infected host cells.',
          mastery:
            'V(D)J somatic recombination generates millions of unique antigen receptors from compact gene segments.',
        },
        summaryBn:
          'ত্বক প্রথম প্রাচীরের কাজ করে, ম্যাক্রোফেজ জীবাণু গিলে ফেলে এবং বি-কোষ নির্দিষ্ট শত্রুর বিরুদ্ধে অ্যান্টিবডি তৈরি করে।',
        reflectionQuestion: 'Why is mild fever helpful rather than purely bad during infection?',
        reflectionAnswer: 'Moderately elevated temperature slows microbial growth while speeding immune-cell signaling.',
      },
      {
        chapterNumber: 3,
        title: 'How Vaccines Train Memory Safely',
        titleBn: 'টিকা কীভাবে নিরাপদে প্রতিরোধ ক্ষমতা গড়ে',
        keyPrinciple: 'Show harmless microbial blueprints first so memory guards stand ready.',
        levels: {
          explorer:
            'Vaccines work like showing guards a harmless photograph of a burglar so real germs get caught at the door before making you sick!',
          student:
            'Whether weakened, killed, protein-subunit, or mRNA blueprints, vaccines spark memory B/T cells without active disease harm.',
          mastery:
            'Herd immunity thresholds 1 − 1/R₀ block epidemic chains, protecting infants and immunocompromised neighbors.',
        },
        summaryBn:
          'টিকা শরীরকে নিষ্ক্রিয় বা ক্ষতিকরহীন অংশ দেখিয়ে আগাম অ্যান্টিবডি ও মেমোরি কোষ তৈরি করে রাখে, ফলে পোলিও ও গুটিবসন্তের মতো রোগ নির্মূল হয়েছে।',
        reflectionQuestion: 'Why did smallpox vanish worldwide by 1980?',
        reflectionAnswer: 'Coordinated global vaccination and ring quarantine broke every transmission chain.',
      },
      {
        chapterNumber: 4,
        title: 'Clean Water, ORS & Public Health',
        titleBn: 'বিশুদ্ধ পানি, খাবার স্যালাইন ও জনস্বাস্থ্য',
        keyPrinciple: 'Simple science saves millions more lives than rare high-tech rescues.',
        levels: {
          explorer:
            'Oral Rehydration Solution (ORS)—clean water mixed neatly with sugar and salt—saves millions of children from stomach dehydration!',
          student:
            'Developed in Dhaka, ORS exploits intestinal sodium–glucose co-transport to hydrate patients rapidly without IV drips.',
          mastery:
            'Preventive vaccination, hand hygiene, and sanitation infrastructure multiply national life expectancy and school attendance.',
        },
        summaryBn:
          'ঢাকায় বিকশিত ওআরএস (খাবার স্যালাইন) ও বিশুদ্ধ পানি-স্যানিটেশন কোটি কোটি শিশুর প্রাণ বাঁচিয়েছে।',
        reflectionQuestion: 'Why does ORS need BOTH salt and a pinch of sugar instead of plain water?',
        reflectionAnswer: 'Glucose unlocks cellular sodium–glucose co-transporters that pull water rapidly across gut walls.',
      },
    ],
  },
  {
    id: 'book-preventive-health',
    title: 'Nutrition, Sleep & Preventive Health',
    titleBn: 'পুষ্টিবিজ্ঞান, ঘুম ও প্রতিরোধমূলক স্বাস্থ্য',
    authorOrOrigin: 'Public Health & Clinical Lifestyle Guide',
    era: 'Modern Preventive Medicine',
    category: 'medicine-nature',
    storeId: 'science',
    subjectId: 'medicine',
    ageBand: 'All Ages',
    coverColorHex: '#be123c',
    readingMinutes: 19,
    synopsis:
      'Evidence-based nutrition, balanced plates, vitamins/minerals, exercise, stress recovery, and lifelong preventive habits.',
    synopsisBn:
      'সুষম খাদ্য, ভিটামিন-খনিজের ভূমিকা, ব্যায়াম, মানসিক চাপ নিয়ন্ত্রণ এবং দীর্ঘমেয়াদী রোগ প্রতিরোধের বিজ্ঞানসম্মত গাইড।',
    coreThesis:
      'Whole foods, physical movement, deep sleep, and early checkups prevent far more suffering than late emergency treatment.',
    coreThesisBn:
      'সুষম খাবার, নিয়মিত শরীরচর্চা, পর্যাপ্ত ঘুম ও প্রাথমিক স্বাস্থ্য পরীক্ষা জটিল রোগ প্রতিরোধের সবচেয়ে কার্যকর উপায়।',
    keyTakeaways: [
      'Pair whole grains with colorful vegetables, pulses/fish/protein, and healthy oils.',
      'Daily walking and strength movement protect heart, bones, and mood.',
      'Hydration, vaccines, and routine blood-pressure screening add healthy decades.',
    ],
    keyTakeawaysBn: [
      'ভাত বা রুটির সাথে পর্যাপ্ত শাকসবজি, ডাল-মাছ-প্রোটিন ও ফল রাখুন।',
      'নিয়মিত হাঁটা ও শরীরচর্চা হৃদযন্ত্র, হাড় ও মন ভালো রাখে।',
      'পর্যাপ্ত পানি ও নিয়মিত রক্তচাপ পরীক্ষা নীরব ঝুঁকি আগে থেকেই ধরে দেয়।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Macronutrients & Balanced Meals',
        titleBn: 'শর্করা, আমিষ, স্নেহ ও সুষম থালা',
        keyPrinciple: 'Whole fiber-rich carbs plus protein stabilize steady energy without crashes.',
        levels: {
          explorer:
            'Fill half your plate with colorful veggies and fruits, a quarter with dal/fish/eggs, and a quarter with rice or whole wheat!',
          student:
            'Fiber feeds beneficial gut microbes and slows sugar spikes compared to sugary sodas and ultra-processed snacks.',
          mastery:
            'Essential amino acids, omega-3 fatty acids, and glycemic load balance regulate metabolic insulin sensitivity.',
        },
        summaryBn:
          'রঙিন শাকসবজি, ডাল-মাছ-ডিম এবং পরিমিত শস্য একত্রে খেলে শরীরে শক্তির ভারসাম্য বজায় থাকে।',
        reflectionQuestion: 'Why does eating a whole guava stabilize blood sugar far better than packaged fruit soda?',
        reflectionAnswer: 'Whole fiber slows sugar absorption steadily instead of spiking insulin fast.',
      },
      {
        chapterNumber: 2,
        title: 'Vitamins, Iron & Sunshine',
        titleBn: 'ভিটামিন, আয়রন ও সূর্যালোক',
        keyPrinciple: 'Tiny micronutrients power vision, hemoglobin, and bones.',
        levels: {
          explorer:
            'Carrots and green spinach guard crisp eyesight (Vitamin A), lemons guard gums (Vitamin C), and morning sun helps Vitamin D build strong bones!',
          student:
            'Iron deficiency causes fatigue anemia worldwide; pairing leafy greens or lentils with Vitamin C citrus boosts iron uptake.',
          mastery:
            'Folates prevent neural-tube defects, while iodine fortification shields thyroid hormone synthesis.',
        },
        summaryBn:
          'ভিটামিন এ চোখ, ভিটামিন সি ও আয়রন রক্তস্বল্পতা দূর এবং সকালের রোদ ভিটামিন ডি দিয়ে হাড় মজবুত করে।',
        reflectionQuestion: 'Why squeeze lemon over spinach or dal during meals?',
        reflectionAnswer: 'Vitamin C sharply increases intestinal absorption of plant non-heme iron.',
      },
      {
        chapterNumber: 3,
        title: 'Movement, Posture & Heart Strength',
        titleBn: 'শারীরিক পরিশ্রম, ভঙ্গি ও হৃদস্বাস্থ্য',
        keyPrinciple: 'Human bodies are built to walk, stretch, lift, and play outdoors.',
        levels: {
          explorer:
            'Running outdoors in sunlight refreshes your mood, builds sturdy legs, and helps you fall asleep faster at night!',
          student:
            'Aerobic movement lowers resting blood pressure and sharpens BDNF brain plasticity for clearer studying.',
          mastery:
            'Mitochondrial biogenesis and endothelial nitric oxide production strengthen vascular health at every age.',
        },
        summaryBn:
          'প্রতিদিন অন্তত ৩০ মিনিট হাঁটা বা খেলাধুলা হৃদপিণ্ড শক্তিশালী করে এবং পড়াশোনার মনোযোগ বাড়ায়।',
        reflectionQuestion: 'Why should students take a 5-minute walk break every hour of screen study?',
        reflectionAnswer: 'It resets eye focus, relieves spinal strain, and restores blood flow.',
      },
      {
        chapterNumber: 4,
        title: 'Early Screening & Mental Wellbeing',
        titleBn: 'প্রাথমিক স্বাস্থ্য পরীক্ষা ও মানসিক সুস্থতা',
        keyPrinciple: 'Asking for help early protects physical and emotional health alike.',
        levels: {
          explorer:
            'Sharing worries with parents, teachers, or friends makes heavy days feel twice as light!',
          student:
            'Regular eye exams, dental care, and quiet screen-free wind-down before sleep prevent chronic strain.',
          mastery:
            'Preventive hypertension and diabetes screening avert catastrophic strokes and kidney disease silently.',
        },
        summaryBn:
          'উদ্বেগ চেপে না রেখে বিশ্বস্ত মানুষদের সাথে শেয়ার করা ও নিয়মিত প্রাথমিক স্বাস্থ্য পরীক্ষা দীর্ঘমেয়াদী সুস্থতা নিশ্চিত করে।',
        reflectionQuestion: 'Why is high blood pressure often called a “silent risk”?',
        reflectionAnswer: 'It damages arteries quietly for years with zero symptoms unless measured with a cuff.',
      },
    ],
  },
  {
    id: 'book-ecology-web',
    title: 'Silent Spring: Ecology & Web of Life',
    titleBn: 'বাস্তুসংস্থান, জীববৈচিত্র্য ও পরিবেশ রক্ষা',
    authorOrOrigin: 'Rachel Carson · Environmental Science',
    era: '1962–Modern · Ecology',
    category: 'medicine-nature',
    storeId: 'applied',
    subjectId: 'ecology',
    ageBand: 'All Ages',
    coverColorHex: '#15803d',
    readingMinutes: 21,
    synopsis:
      'Explore food webs, soil microbes, water cycles, biodiversity resilience, and turning climate anxiety into practical stewardship.',
    synopsisBn:
      'খাদ্যশৃঙ্খল, মাটির অণুজীব, জলচক্র, জীববৈচিত্র্য ও জলবায়ু পরিবর্তনের যুগে টেকসই পরিবেশ সংরক্ষণের পাঠ।',
    coreThesis:
      'Every species forms one knot in a delicate shared web—harming soil or rivers inevitably echoes back into human health.',
    coreThesisBn:
      'প্রকৃতির প্রতিটি উদ্ভিদ, কীটপতঙ্গ ও নদী একটি অদৃশ্য জালে বাঁধা; প্রকৃতির ক্ষতি শেষ পর্যন্ত মানবসমাজেই ফিরে আসে।',
    keyTakeaways: [
      'Energy flows one-way (~10% per trophic step) while matter cycles endlessly.',
      'Pollinators like bees safeguard fruits, vegetables, and wild flowers.',
      'Biodiversity buffers crops and coastlines against extreme storms.',
    ],
    keyTakeawaysBn: [
      'বাস্তুতন্ত্রে শক্তির ১০% এক ধাপ থেকে পরের ধাপে যায়, আর কার্বন-পানি চক্রাকারে ঘোরে।',
      'মৌমাছি ও পরাগায়নকারী কীট ছাড়া শস্য ও ফল উৎপাদন ভেঙে পড়বে।',
      'জীববৈচিত্র্য ফসল ও উপকূলকে রোগবালাই ও ঝড় থেকে রক্ষা করে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Food Webs & Trophic Energy',
        titleBn: 'খাদ্যজাল ও শক্তির প্রবাহ',
        keyPrinciple: 'Sunlit plants capture energy; decomposers recycle nutrients back cleanly.',
        levels: {
          explorer:
            'Sunshine feeds green leaves, caterpillars eat leaves, birds eat caterpillars, and soil worms turn fallen leaves back into rich dirt for new trees!',
          student:
            'Only ~10% of stored energy passes upward per trophic level—explaining why ecosystems need huge fields of plants to feed a few apex tigers.',
          mastery:
            'Bioaccumulation concentrates fat-soluble toxins upward across apex predators, exposing food-chain contamination.',
        },
        summaryBn:
          'সূর্যালোক থেকে উদ্ভিদ, এরপর তৃণভোজী ও মাংসাশী প্রাণী এবং শেষে বিয়োজকরা প্রকৃতির চক্র সম্পূর্ণ করে।',
        reflectionQuestion: 'Why are decomposers (fungi and earthworms) vital to every forest?',
        reflectionAnswer: 'Without them dead trunks would pile up forever and soil would starve of recycled nitrogen.',
      },
      {
        chapterNumber: 2,
        title: 'Pollinators & Invisible Insect Allies',
        titleBn: 'মৌমাছি ও পরাগায়নের গুরুত্ব',
        keyPrinciple: 'Indiscriminate pesticides wipe out helpful bees alongside pests.',
        levels: {
          explorer:
            'Watch bees dusted yellow hopping between mustard flowers—without bees visiting blossoms, pumpkins, mangoes, and apples wouldn’t grow!',
          student:
            'Rachel Carson’s Silent Spring showed how spraying chemical poisons recklessly silenced songbirds and spurred Integrated Pest Management.',
          mastery:
            'Ecosystem services from native pollinators underpin global micronutrient security.',
        },
        summaryBn:
          'অতিরিক্ত রাসায়নিক কীটনাশক ক্ষতিকর পোকার সাথে উপকারী মৌমাছি ও পাখি ধ্বংস করে ফসলের পরাগায়ন নষ্ট করে দেয়।',
        reflectionQuestion: 'What happens to orchard harvests if honeybee colonies vanish?',
        reflectionAnswer: 'Fruit and seed set plummets sharply across flowering crops.',
      },
      {
        chapterNumber: 3,
        title: 'Wetlands, Carbon & Climate Balance',
        titleBn: 'জলাভূমি, কার্বন চক্র ও জলবায়ু',
        keyPrinciple: 'Forests, peatlands, and oceans buffer floods and absorb excess carbon.',
        levels: {
          explorer:
            'Wetlands and haors act like giant natural sponges drinking heavy monsoon floodwater slowly and giving clean homes to fish and birds!',
          student:
            'Burning fossil coal and clearing forests adds trapped carbon dioxide faster than oceans and trees can reabsorb it.',
          mastery:
            'Renewable solar, battery storage, and wetland restoration cut emissions while protecting delta biodiversity.',
        },
        summaryBn:
          'হাওর, নদী ও সুন্দরবন অতিরিক্ত বন্যার পানি ধরে রেখে ও কার্বন শোষণ করে প্রকৃতিকে ভারসাম্যে রাখে।',
        reflectionQuestion: 'Why does filling in city ponds and wetlands worsen monsoon street flooding?',
        reflectionAnswer: 'Water loses its natural absorption sponges and pours straight onto paved streets.',
      },
      {
        chapterNumber: 4,
        title: 'Circular Waste & Youth Action',
        titleBn: 'বর্জ্য পুনর্ব্যবহার ও সবুজ অভ্যাস',
        keyPrinciple: 'Nature creates zero waste; one creature’s leftover feeds another.',
        levels: {
          explorer:
            'Compost kitchen peels into flower soil, carry reusable bags, and plant shade trees with friends!',
          student:
            'Circular design prioritizes repair, reuse, and clean energy transitions over disposable single-use plastics.',
          mastery:
            'Life-cycle assessment measures full ecological footprints from raw mining through safe end-of-life recovery.',
        },
        summaryBn:
          'একবার ব্যবহার্য প্লাস্টিক কমিয়ে জৈব সার তৈরি, পুনর্ব্যবহার ও বৃক্ষরোপণের মাধ্যমে তরুণরাও পরিবেশ রক্ষায় বড় ভূমিকা রাখতে পারে।',
        reflectionQuestion: 'Why does “Reduce & Reuse” rank higher than “Recycle”?',
        reflectionAnswer: 'Preventing waste avoids melting and transport energy altogether.',
      },
    ],
  },
  {
    id: 'book-botany-agronomy',
    title: 'Botany & Sustainable Agriculture',
    titleBn: 'উদ্ভিদবিজ্ঞান ও আধুনিক টেকসই কৃষি',
    authorOrOrigin: 'Norman Borlaug · Plant & Soil Science',
    era: 'Classical Botany–Modern Agronomy',
    category: 'medicine-nature',
    storeId: 'applied',
    subjectId: 'ecology',
    ageBand: 'All Ages',
    coverColorHex: '#3f6212',
    readingMinutes: 19,
    synopsis:
      'Photosynthesis, xylem/phloem plumbing, nitrogen-fixing legumes, flood-tolerant rice breeding, and feeding growing populations sustainably.',
    synopsisBn:
      'সালোকসংশ্লেষণ, জাইলেম-ফ্লোয়েম পরিবহন, ডাল জাতীয় উদ্ভিদে নাইট্রোজেন সংবদ্ধন ও লবণাক্ততা-সহিষ্ণু আধুনিক কৃষি।',
    coreThesis:
      'Healthy living soil combined with smart crop genetics grows abundant nutritious harvests without exhausting the land.',
    coreThesisBn:
      'জীবন্ত উর্বর মাটি ও উন্নত জাতের সমন্বয়ে পরিবেশের ক্ষতি না করেই সবার জন্য নিরাপদ খাদ্য উৎপাদন সম্ভব।',
    keyTakeaways: [
      'Leaves turn sunlight, CO₂, and water into sugar and breathable oxygen.',
      'Crop rotation with lentils/beans replenishes soil nitrogen naturally.',
      'Drip irrigation and salt-tolerant rice save water and protect coastal farmers.',
    ],
    keyTakeawaysBn: [
      'সবুজ পাতা সূর্যালোকে পানি ও কার্বন ডাইঅক্সাইড দিয়ে শর্করা ও অক্সিজেন তৈরি করে।',
      'শিম ও ডাল জাতীয় শস্য শিকড়ের ব্যাকটেরিয়ার সাহায্যে মাটিতে নাইট্রোজেন ফেরায়।',
      'আধুনিক ও লবণাক্ততা-সহিষ্ণু ধান উপকূলীয় কৃষকদের ফসল রক্ষা করছে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Photosynthesis & Leaf Engineering',
        titleBn: 'সালোকসংশ্লেষণ: পাতার সৌর-কারখানা',
        keyPrinciple: 'Chloroplasts harvest photons to split water and fix carbon.',
        levels: {
          explorer:
            'Plants are magical solar chefs—taking sunshine, air, and soil water to bake sweet fruit and release the fresh oxygen we breathe!',
          student:
            '6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Guard cells open leaf stomata coolly to balance CO₂ intake against water evaporation.',
          mastery:
            'C4 crops like maize concentrate CO₂ around RuBisCO to minimize photorespiration under hot tropical sun.',
        },
        summaryBn:
          'ক্লোরোপ্লাস্ট সূর্যরশ্মি ধরে পানি ভেঙে কার্বন ডাইঅক্সাইডের সাথে মিশিয়ে খাদ্য ও অক্সিজেন উৎপাদন করে।',
        reflectionQuestion: 'Why do plant leaves look green to human eyes?',
        reflectionAnswer: 'Chlorophyll absorbs red and blue light strongly while reflecting green wavelengths.',
      },
      {
        chapterNumber: 2,
        title: 'Living Soil & Nitrogen Fixation',
        titleBn: 'জীবন্ত মাটি ও প্রাকৃতিক সার',
        keyPrinciple: 'Soil bacteria convert atmospheric nitrogen gas into usable plant nutrients.',
        levels: {
          explorer:
            'Tiny friendly bacteria living inside lentil and pea roots pull nitrogen straight out of air to feed hungry crops naturally!',
          student:
            'Rotating rice with mungbean or clover breaks pest cycles and cuts synthetic fertilizer runoff into rivers.',
          mastery:
            'Mycorrhizal fungal networks trade soil phosphorus for plant sugars across woodland ecosystems.',
        },
        summaryBn:
          'ডাল ও শিম জাতীয় ফসল শিকড়ে থাকা রাইজোবিয়াম ব্যাকটেরিয়ার মাধ্যমে মাটিকে প্রাকৃতিকভাবে উর্বর করে।',
        reflectionQuestion: 'Why shouldn’t the exact same monocrop be planted year after year on tired soil?',
        reflectionAnswer: 'Monocultures drain specific minerals and let crop-specific pests multiply.',
      },
      {
        chapterNumber: 3,
        title: 'Seeds, Breeding & Climate Resilience',
        titleBn: 'বীজ, জিন-সংরক্ষণ ও সহিষ্ণু ফসল',
        keyPrinciple: 'Diverse seed varieties adapt agriculture to floods, drought, and salinity.',
        levels: {
          explorer:
            'Scientists bred clever rice plants that can hold their breath underwater during brief monsoon floods and sprout tall afterward!',
          student:
            'Submergence-tolerant (Sub1) and salt-tolerant rice safeguard farmers across Bangladesh and coastal Asia.',
          mastery:
            'Preserving heirloom landraces ensures critical genetic traits remain available for future breeding.',
        },
        summaryBn:
          'বন্যা ও লবণাক্ততা-সহিষ্ণু আধুনিক ধানের জাত জলবায়ু পরিবর্তনের ঝুঁকিতে থাকা উপকূলীয় কৃষকদের আশার আলো।',
        reflectionQuestion: 'Why preserve wild and traditional village seed varieties?',
        reflectionAnswer: 'Heirloom seeds carry irreplaceable genes for drought, salt, and disease resistance.',
      },
      {
        chapterNumber: 4,
        title: 'Precision Watering & Post-Harvest Care',
        titleBn: 'সেচ সাশ্রয় ও ফসল সংরক্ষণ',
        keyPrinciple: 'Cutting food spoilage saves water, land, and farmer income equally.',
        levels: {
          explorer:
            'Drip watering gives roots steady sips instead of wasting puddles into hot afternoon air!',
          student:
            'Clean cold storage and solar crop dryers slash the ~30% post-harvest grain and vegetable loss in warm climates.',
          mastery:
            'Precision soil-moisture sensors cut groundwater pumping while raising yields per drop.',
        },
        summaryBn:
          'সঠিক সেচ ও হিমাগার-সংরক্ষণ ব্যবস্থা উৎপাদনের পাশাপাশি কৃষকের ফসল নষ্ট হওয়া ৩০% পর্যন্ত কমাতে পারে।',
        reflectionQuestion: 'Why does reducing food waste combat climate change twice over?',
        reflectionAnswer: 'It avoids wasted irrigation/fertilizer AND stops rotting landfill methane.',
      },
    ],
  },
  {
    id: 'book-marine-oceans',
    title: 'Marine Biology & Deep Ocean Mysteries',
    titleBn: 'সমুদ্রবিজ্ঞান ও গভীর সাগরের বিস্ময়',
    authorOrOrigin: 'Sylvia Earle · Oceanography Compendium',
    era: 'Modern Marine Science',
    category: 'medicine-nature',
    storeId: 'science',
    subjectId: 'marine-env',
    ageBand: 'All Ages',
    coverColorHex: '#0c4a6e',
    readingMinutes: 20,
    synopsis:
      'Dive from sunlit coral reefs and kelp forests down into midnight bioluminescence, deep hydrothermal vents, and ocean currents.',
    synopsisBn:
      'প্রবাল প্রাচীর, কেল্প বন ও ফাইটোপ্ল্যাংকটন থেকে গভীর সমুদ্রের বায়োলুমিনেসেন্স, উষ্ণ প্রস্রবণ ও সমুদ্রস্রোতের বিস্ময়।',
    coreThesis:
      'Oceans produce over half of Earth’s breathable oxygen and regulate planetary climate through vast heat-carrying currents.',
    coreThesisBn:
      'মহাসাগর পৃথিবীর অর্ধেকের বেশি অক্সিজেন জোগায় এবং বিশাল স্রোতের মাধ্যমে বৈশ্বিক তাপমাত্রা নিয়ন্ত্রণ করে।',
    keyTakeaways: [
      'Microscopic phytoplankton make more oxygen than all rainforests combined.',
      'Coral reefs shelter ~25% of ocean marine species on under 1% of the seabed.',
      'Deep hydrothermal vents support life using chemical minerals without sunlight.',
    ],
    keyTakeawaysBn: [
      'সমুদ্রের ক্ষুদ্র ফাইটোপ্ল্যাংকটন স্থলভাগের সব অরণ্যের চেয়েও বেশি অক্সিজেন তৈরি করে।',
      'প্রবাল প্রাচীর সাগরের ১% জায়গায় প্রায় ২৫% সামুদ্রিক প্রাণীকে আশ্রয় দেয়।',
      'সূর্যালোকহীন গভীর তলদেশেও রাসায়নিক শক্তিতে (Chemosynthesis) প্রাণ টিকে আছে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Ocean Oxygen & Phytoplankton',
        titleBn: 'সমুদ্রের অক্সিজেন ও ফাইটোপ্ল্যাংকটন',
        keyPrinciple: 'Every second breath you take originates from microscopic sunlit ocean drifters.',
        levels: {
          explorer:
            'Invisible green sea specks called phytoplankton float near ocean waves making oxygen for whales, dolphins, AND you!',
          student:
            'Phytoplankton form the base of nearly every marine food web and draw millions of tons of CO₂ into the ocean sink.',
          mastery:
            'Upwelling currents lift cold deep nutrients back to sunlit surface waters, fueling rich coastal fisheries.',
        },
        summaryBn:
          'প্রতি দুটি শ্বাসের একটির অক্সিজেন আসে সাগরের ক্ষুদ্র ফাইটোপ্ল্যাংকটন থেকে; এরাই সামুদ্রিক খাদ্যশৃঙ্খলের মূল ভিত্তি।',
        reflectionQuestion: 'Why do coastlines with cold upwelling currents often teem with fish?',
        reflectionAnswer: 'Deep cold currents lift recycled nitrate and phosphate fertilizers back to sunlit algae.',
      },
      {
        chapterNumber: 2,
        title: 'Coral Reefs & Saint Martin’s Treasures',
        titleBn: 'প্রবাল প্রাচীর ও সামুদ্রিক বাস্তুতন্ত্র',
        keyPrinciple: 'Symbiosis between coral animals and microscopic algae builds underwater cities.',
        levels: {
          explorer:
            'Corals look like colorful underwater stone castles—inside each coral polyp live friendly green algae sharing sun-made snacks!',
          student:
            'Warming ocean spikes bleach corals by expelling their algae partners; excess CO₂ acidifies seawater, weakening shells.',
          mastery:
            'Marine protected zones and reducing plastic/sewage runoff let resilient coral reefs recover naturally.',
        },
        summaryBn:
          'প্রবাল প্রাণী ও ক্ষুদ্র শৈবালের পারস্পরিক বন্ধুত্বে গড়ে ওঠে সমুদ্রের সবচেয়ে বৈচিত্র্যময় প্রবাল-নগরী।',
        reflectionQuestion: 'What happens during “coral bleaching”?',
        reflectionAnswer: 'Heat stress forces corals to expel colorful symbiotic algae, turning skeletons pale and starved.',
      },
      {
        chapterNumber: 3,
        title: 'Midnight Zone & Living Light',
        titleBn: 'গভীর সাগর ও জীবন্ত আলো (বায়োলুমিনেসেন্স)',
        keyPrinciple: 'In pitch-black depths, creatures paint signals with chemical bioluminescence.',
        levels: {
          explorer:
            'Way down deep where sunshine never reaches, jellyfish, squids, and anglerfish glow electric blue like underwater fireflies!',
          student:
            'Luciferin reactions emit cold light without heat waste—used to lure prey, startle predators, or communicate.',
          mastery:
            'Extreme hydrostatic pressures favor specialized piezophilic enzymes and fluid unsaturated cell membranes.',
        },
        summaryBn:
          'সূর্যের আলো না পৌঁছানো গভীর সমুদ্রে জেলিফিশ ও গভীর সাগরের মাছ রাসায়নিক বিক্রিয়ায় নিজেরা আলো জ্বালিয়ে যোগাযোগ করে।',
        reflectionQuestion: 'Why don’t deep-sea animals glow mostly red?',
        reflectionAnswer: 'Red wavelengths fade quickest underwater, so blue light travels farthest through dark seawater.',
      },
      {
        chapterNumber: 4,
        title: 'Bay of Bengal & Protecting Blue Waters',
        titleBn: 'বঙ্গোপসাগর ও সুনীল অর্থনীতি',
        keyPrinciple: 'Sustainable fishing and clean rivers preserve ocean abundance for generations.',
        levels: {
          explorer:
            'Keeping plastic bottles out of rivers keeps sea turtles and Hilsa fish safe down in the Bay of Bengal!',
          student:
            'Seasonal breeding bans (like Hilsa sanctuaries) restore fish populations so fisher families earn steadily every year.',
          mastery:
            'Blue economy stewardship pairs sustainable mariculture, coastal wind energy, and marine spatial planning.',
        },
        summaryBn:
          'প্রজনন মৌসুমে ইলিশ সংরক্ষণ ও নদী-সাগর প্লাস্টিকমুক্ত রাখা বাংলাদেশের সুনীল অর্থনীতির মূল চালিকাশক্তি।',
        reflectionQuestion: 'How do short fishing bans during spawning season actually raise long-term fisher income?',
        reflectionAnswer: 'Protecting egg-bearing adults multiplies juvenile fish surviving into larger future catches.',
      },
    ],
  },
  {
    id: 'book-rhetoric-writing',
    title: 'The Art of Rhetoric, Debate & Clear Writing',
    titleBn: 'বাকপটুতা, বিতর্ক ও সুন্দর লেখার কৌশল',
    authorOrOrigin: 'Aristotle, Orwell, Strunk · Writing Craft',
    era: 'Classical–Modern Composition',
    category: 'skills-languages',
    storeId: 'arts',
    subjectId: 'literature',
    ageBand: 'All Ages',
    coverColorHex: '#4338ca',
    readingMinutes: 19,
    synopsis:
      'Ethos, Pathos, Logos, clear active sentences, essay structure, and fearless public speaking with warmth and precision.',
    synopsisBn:
      'ইথস-প্যাথস-লোগোস, স্পষ্ট ও প্রাঞ্জল বাক্য গঠন, প্রবন্ধ লেখার নিয়ম এবং আত্মবিশ্বাসের সাথে বক্তৃতা ও বিতর্ক করার কৌশল।',
    coreThesis:
      'Clear writing mirrors clear thinking: state the point plainly, support with concrete evidence, and respect your reader’s time.',
    coreThesisBn:
      'স্পষ্ট লেখাই স্বচ্ছ চিন্তার প্রতিফলন—কঠিন শব্দে প্যাঁচ না লাগিয়ে সহজ কথায় প্রমাণসহ বক্তব্য তুলে ধরাই সেরা শৈলী।',
    keyTakeaways: [
      'Balance Credibility (Ethos), Empathy (Pathos), and Evidence (Logos).',
      'Cut filler words; prefer lively verbs and concrete examples.',
      'Open strong, build logically, and end with a memorable insight.',
    ],
    keyTakeawaysBn: [
      'বিশ্বাসযোগ্যতা, সহমর্মিতা ও যুক্তি-প্রমাণের সমন্বয় বক্তব্যকে আকর্ষণীয় করে।',
      'অপ্রয়োজনীয় বাহুল্য শব্দ বাদ দিয়ে সহজ ও প্রাণবন্ত ক্রিয়া ব্যবহার করুন।',
      'শুরুতে পাঠকের মনোযোগ ধরে ধাপে ধাপে মূল সিদ্ধান্তে পৌঁছান।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Ethos, Pathos & Logos',
        titleBn: 'ইথস, প্যাথস ও লোগোস: বক্তব্যের তিন স্তম্ভ',
        keyPrinciple: 'Persuasion earns trust, engages human stakes, and proves with reason.',
        levels: {
          explorer:
            'To convince your parents to adopt a puppy, show you’re responsible (Ethos), explain how lonely a shelter pup feels (Pathos), and show your chore schedule (Logos)!',
          student:
            'Speeches fail when relying on emotion alone without facts, or cold data disconnected from why real people care.',
          mastery:
            'Audience analysis calibrates tone, counter-argument concessions, and verifiable proof cleanly.',
        },
        summaryBn:
          'বক্তার বিশ্বস্ততা, শ্রোতার আবেগের প্রতি সম্মান এবং অকাট্য যুক্তি—এই তিনের মেলবন্ধনে একটি বক্তব্য হৃদয়ে দাগ কাটে।',
        reflectionQuestion: 'Why does acknowledging the strongest counter-argument raise a speaker’s Ethos?',
        reflectionAnswer: 'Honest fairness proves you examined all sides rather than hiding inconvenient facts.',
      },
      {
        chapterNumber: 2,
        title: 'Orwell’s Rules for Crisp Prose',
        titleBn: 'অরওয়েলের স্পষ্ট গদ্য রচনার নিয়ম',
        keyPrinciple: 'Never use a long word where a short clear word says it better.',
        levels: {
          explorer:
            'Instead of “The meteorological precipitation descended rapidly,” simply write “Heavy rain poured down”!',
          student:
            'Prefer active voice (“The student solved the theorem”) over passive fog, and trim redundant fillers.',
          mastery:
            'Concrete imagery anchors abstract claims in verifiable sensory reality rather than bureaucratic jargon.',
        },
        summaryBn:
          'ভারী কৃত্রিম শব্দের আড়ালে অর্থ না লুকিয়ে সরাসরি সহজ, সক্রিয় ও জীবন্ত ভাষায় লিখলে লেখা শক্তিশালী হয়।',
        reflectionQuestion: 'How do you fix vague passive sentences instantly?',
        reflectionAnswer: 'Ask “WHO did WHAT?” and make the actor the crisp grammatical subject.',
      },
      {
        chapterNumber: 3,
        title: 'Essay Architecture & Signposting',
        titleBn: 'প্রবন্ধ ও অনুচ্ছেদের সুশৃঙ্খল গঠন',
        keyPrinciple: 'One clear claim per paragraph connected by crisp transitions.',
        levels: {
          explorer:
            'Build paragraphs like train cars: the first sentence hooks onto the last idea, middle sentences carry evidence, and the end points cleanly onward.',
          student:
            'Start every essay with a concrete question or tension, organize 3–4 thematic pillars, and synthesize rather than repeating.',
          mastery:
            'Topic sentences let hurried editors trace your entire argument skeleton cleanly down the page.',
        },
        summaryBn:
          'প্রতিটি অনুচ্ছেদে একটি করে মূল ধারণা এবং স্পষ্ট সংযোগ-বাক্য রাখলে দীর্ঘ প্রবন্ধও পড়তে অনায়াস লাগে।',
        reflectionQuestion: 'What job should the opening paragraph of any essay perform?',
        reflectionAnswer: 'Introduce why the question matters and state your central guiding thesis clearly.',
      },
      {
        chapterNumber: 4,
        title: 'Calm Public Speaking & Debate',
        titleBn: 'নির্ভীক বক্তৃতা ও বিতর্ক কৌশল',
        keyPrinciple: 'Slow steady breathing and genuine eye contact beat memorized speed.',
        levels: {
          explorer:
            'Pause for one calm breath before starting, look warmly at friendly faces around the room, and speak clearly so the back row hears!',
          student:
            'Structure spoken points in memorable trios, silence rushed filler “umms” with confident pauses, and rebut ideas respectfully.',
          mastery:
            'Strategic pacing and concise signposting retain listener attention far better than rushing dense slides.',
        },
        summaryBn:
          'তাড়াহুড়ো না করে ধীরে শ্বাস নিয়ে, শ্রোতার দিকে তাকিয়ে বিরতি দিয়ে কথা বললে ভয় কেটে আত্মবিশ্বাস ফিরে আসে।',
        reflectionQuestion: 'Why is a 1-second silence better than saying “umm”?',
        reflectionAnswer: 'Clean pauses project calm authority and give listeners time to absorb your point.',
      },
    ],
  },
  {
    id: 'book-polyglot-linguistics',
    title: "The Polyglot's Blueprint: Linguistics & Grammar",
    titleBn: 'বহুভাষা শিক্ষা ও ভাষাবিজ্ঞানের মূল সূত্র',
    authorOrOrigin: 'Chomsky, Krashen · Applied Linguistics',
    era: 'Modern Language Science',
    category: 'skills-languages',
    storeId: 'arts',
    subjectId: 'linguistics',
    ageBand: 'All Ages',
    coverColorHex: '#0e7490',
    readingMinutes: 20,
    synopsis:
      'Unlock phonetics, language families (Indo-European Bengali–English roots), comprehensible input, and fluent speaking without anxiety.',
    synopsisBn:
      'ধ্বনিবিজ্ঞান, বাংলা-ইংরেজি ও বিশ্বভাষার পরিবার, শুনে ও পড়ে ভাষা আয়ত্তের বিজ্ঞান এবং জড়তা কাটিয়ে সাবলীল বলার উপায়।',
    coreThesis:
      'Languages blossom through rich meaningful stories and daily use—not memorizing isolated dictionary tables in silence.',
    coreThesisBn:
      'নীরবে শব্দার্থ মুখস্থ করার চেয়ে অর্থপূর্ণ গল্প শোনা, পড়া ও দৈনন্দিন ব্যবহারেই নতুন ভাষা দ্রুত ও স্থায়ীভাবে আয়ত্ত হয়।',
    keyTakeaways: [
      'Comprehensible input slightly above your level rewires comprehension fast.',
      'Bengali, Hindi, English, Spanish, and Persian share ancient Indo-European cognates.',
      'Making friendly mistakes out loud doubles speaking fluency.',
    ],
    keyTakeawaysBn: [
      'নিজের স্তরের চেয়ে একটু উঁচু সহজ গল্প বা ভিডিও দেখলে ভাষা দ্রুত শেখা যায়।',
      'বাংলা, সংস্কৃত, ফারসি ও ইংরেজির হাজার হাজার শব্দের আদি উৎস এক।',
      'ভুল করার ভয় কাটিয়ে প্রতিদিন সামান্য বলার চেষ্টাই জড়তা দূর করে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Sounds, Scripts & Mouth Mechanics',
        titleBn: 'ধ্বনিবিজ্ঞান ও উচ্চারণের কৌশল',
        keyPrinciple: 'Train ear discrimination alongside gentle tongue/lip placement.',
        levels: {
          explorer:
            'Notice how “P” pops out air on your hand while “B” buzzes gently in your throat—your mouth is a wonderful musical instrument!',
          student:
            'The International Phonetic Alphabet (IPA) maps every human vowel and consonant reliably across languages.',
          mastery:
            'Minimal-pair listening drills rewire adult auditory cortex phoneme boundaries.',
        },
        summaryBn:
          'কণ্ঠ ও জিহ্বার অবস্থান বুঝে উচ্চারণ অনুশীলন এবং IPA চিহ্ন চিনলে যেকোনো বিদেশি ভাষার উচ্চারণ সুন্দর হয়।',
        reflectionQuestion: 'Why does the Bengali script feel logical compared to English spelling?',
        reflectionAnswer: 'Abhika/abugida consonants organize cleanly by exact mouth place (ক-বর্গ, চ-বর্গ, ত-বর্গ, প-বর্গ)!',
      },
      {
        chapterNumber: 2,
        title: 'Language Families & Surprising Cousins',
        titleBn: 'বিশ্বভাষার পরিবার ও শব্দের আত্মীয়তা',
        keyPrinciple: 'Languages evolve like branching trees sharing ancient vocabulary roots.',
        levels: {
          explorer:
            '“Mata” in Bangla and “Mother” in English, “Bhrata” and “Brother,” “Naam” and “Name” are long-lost cousin words!',
          student:
            'Tracing Indo-European, Sino-Tibetan, and Afro-Asiatic roots turns intimidating vocabulary into memorable stories.',
          mastery:
            'Grimm’s Law and systematic sound shifts let linguists reconstruct unrecorded ancestral tongues accurately.',
        },
        summaryBn:
          'মাতা-Mother, ভ্রাতা-Brother, নাম-Name, নৌ-Navy—ইন্দো-ইউরোপীয় পরিবারের কারণে বাংলা ও ইংরেজির মধ্যে শত শত মজার মিল রয়েছে।',
        reflectionQuestion: 'Which ancient family connects Bengali, Persian, Latin, and English?',
        reflectionAnswer: 'The Indo-European language family.',
      },
      {
        chapterNumber: 3,
        title: 'Comprehensible Input & Reading',
        titleBn: 'অর্থপূর্ণ শ্রবণ ও পঠন পদ্ধতি',
        keyPrinciple: 'Read and listen to enjoyable stories you mostly understand.',
        levels: {
          explorer:
            'Reading dual-language comics or picture books lets your brain guess new words naturally from context just like you learned your first tongue!',
          student:
            'Stephen Krashen showed 90%-understood reading plus bilingual audio grows vocabulary painlessly compared to isolated grammar drills.',
          mastery:
            'Spaced-repetition flashcards paired with extensive immersion lock both high-frequency words and subtle collocations.',
        },
        summaryBn:
          'যার ৮০-৯০% বোঝা যায় এমন সহজ গল্প ও অডিও নিয়মিত শুনলে ব্যাকরণ মুখস্থ না করেই স্বাভাবিক দখল তৈরি হয়।',
        reflectionQuestion: 'Why should language learners learn whole phrases instead of single detached words?',
        reflectionAnswer: 'Phrases teach natural grammar, tone, and prepositions automatically together.',
      },
      {
        chapterNumber: 4,
        title: 'Fearless Speaking & Cultural Empathy',
        titleBn: 'ভয়হীন চর্চা ও সাংস্কৃতিক সেতু',
        keyPrinciple: 'Accent carries heritage; clarity and warmth matter far more than perfection.',
        levels: {
          explorer:
            'Speak ten friendly sentences a day—every funny mix-up just proves your brain is building brand-new bridges!',
          student:
            'Record short voice journals, narrate daily routines aloud, and pair with kind conversation partners.',
          mastery:
            'Bilingual cognition strengthens executive attention switching and protects lifelong brain reserve.',
        },
        summaryBn:
          'জড়তা ঝেড়ে প্রতিদিন অল্প করে বলার অভ্যাস আর দ্বিভাষিক চর্চা মস্তিষ্কের সৃজনশীলতা ও স্মৃতিশক্তি বাড়ায়।',
        reflectionQuestion: 'What cognitive benefit does bilingualism build beyond communication?',
        reflectionAnswer: 'Stronger attention switching, cultural empathy, and cognitive reserve.',
      },
    ],
  },
  {
    id: 'book-study-mastery',
    title: 'Make It Stick: Memory & Study Science',
    titleBn: 'কার্যকর পড়াশোনা ও দীর্ঘমেয়াদী স্মৃতির বিজ্ঞান',
    authorOrOrigin: 'Brown, Roediger, Oakley · Learning Science',
    era: 'Contemporary Cognitive Pedagogy',
    category: 'skills-languages',
    storeId: 'applied',
    subjectId: 'study-science',
    ageBand: 'All Ages',
    coverColorHex: '#0f4c81',
    readingMinutes: 18,
    synopsis:
      'Replace passive highlighting and re-reading with active recall, spaced repetition, interleaving, and the Feynman technique.',
    synopsisBn:
      'বারবার পড়া ও হাইলাইট করার বদলে অ্যাক্টিভ রিকল, স্পেসড রিপিটেশন, ইন্টারলিভিং ও ফাইনম্যান কৌশলে দ্বিগুণ দ্রুত শেখার বিজ্ঞান।',
    coreThesis:
      'Effortful retrieval from memory—never passive re-reading—forges permanent mastery and stops exam illusions.',
    coreThesisBn:
      'বই খোলা রেখে বারবার পড়ার চেয়ে চোখ বন্ধ করে নিজের ভাষায় মনে করার চেষ্টা করলেই মস্তিষ্কে স্মৃতি সবচেয়ে মজবুত হয়।',
    keyTakeaways: [
      'Close the book and test yourself (Active Recall).',
      'Space reviews across Days 1, 3, 7, and 21 instead of cramming.',
      'Explain concepts simply enough for a 10-year-old (Feynman method).',
    ],
    keyTakeawaysBn: [
      'পড়া শেষে বই বন্ধ করে মূল বিষয়গুলো মনে করার চেষ্টা করুন (Active Recall)।',
      'এক রাতে না পড়ে ১ম, ৩য়, ৭ম ও ২১তম দিনে বিরতি দিয়ে রিভিশন দিন।',
      'সহজ ভাষায় ছোট কাউকে বুঝিয়ে বলার চেষ্টা নিজের অস্পষ্টতা ধরে দেয়।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Illusions of Competence vs. Active Recall',
        titleBn: 'বোঝার ভ্রান্তি বনাম অ্যাক্টিভ রিকল',
        keyPrinciple: 'Smoothly recognizing a highlighted page fools students into thinking they know it.',
        levels: {
          explorer:
            'After reading one page, shut the book and jot three things you remember from memory—it feels slightly harder, and that effort makes your brain grow!',
          student:
            'Testing yourself doubles retention compared to re-reading four times, exposing gaps right while you still have time to fix them.',
          mastery:
            'Retrieval practice triggers myelination along neural circuits supporting flexible problem transfer.',
        },
        summaryBn:
          'হাইলাইট করা পাতা দেখে পরিচিত মনে হওয়া মানেই মুখস্থ হওয়া নয়; নিজে প্রশ্ন করে উত্তর লেখা বা বলাই আসল অনুশীলন।',
        reflectionQuestion: 'Why does passive re-reading create false confidence?',
        reflectionAnswer: 'Familiar visual recognition feels effortless yet disappears when facing a blank exam sheet.',
      },
      {
        chapterNumber: 2,
        title: 'Spaced Repetition & Interleaving',
        titleBn: 'সময়-বিরতিতে রিভিশন ও মিশ্র অনুশীলন',
        keyPrinciple: 'Review right before forgetting sets in, and mix problem types together.',
        levels: {
          explorer:
            'Watering a garden five minutes daily grows lush flowers; dumping twenty buckets in one night washes the soil right away!',
          student:
            'Mix algebra, geometry, and word problems in one practice session (interleaving) so you learn WHICH tool fits WHICH problem.',
          mastery:
            'Ebbinghaus forgetting-curve intervals minimize total lifetime study hours per mastered fact.',
        },
        summaryBn:
          'একটানা একই ধরনের অঙ্ক না করে বিভিন্ন অধ্যায়ের অঙ্ক মিশিয়ে ও কয়েক দিন পরপর রিভিশন দিলে পরীক্ষা হলের দক্ষতা বাড়ে।',
        reflectionQuestion: 'Why does mixing Chapter 1–5 questions beat doing 30 identical Chapter 5 problems in a row?',
        reflectionAnswer: 'Real exams require diagnosing which method applies, not repeating one mechanical template.',
      },
      {
        chapterNumber: 3,
        title: 'The Feynman Teaching Technique',
        titleBn: 'ফাইনম্যান পদ্ধতি: সহজ করে শেখানো',
        keyPrinciple: 'If you cannot explain it simply, you do not understand it deeply yet.',
        levels: {
          explorer:
            'Pretend you are teaching today’s science lesson to a curious little cousin without using fancy textbook jargon!',
          student:
            'Write out the idea in plain words, spot the exact step where your explanation gets blurry, return to the book cleanly, and refine.',
          mastery:
            'Generative explanation builds causal mental models resilient under novel unfamiliar questions.',
        },
        summaryBn:
          'যেকোনো জটিল বিষয়কে সহজ ভাষায় অন্যকে বুঝিয়ে দিতে গেলেই বোঝা যায় ঠিক কোন জায়গায় নিজের বোঝায় ঘাটতি আছে।',
        reflectionQuestion: 'Why do tutors learn subjects better than passive listeners?',
        reflectionAnswer: 'Organizing explanations for someone else forces complete logical clarity.',
      },
      {
        chapterNumber: 4,
        title: 'Pomodoro Focus & Exam Calm',
        titleBn: 'পমোডোরো মনোযোগ ও পরীক্ষার প্রশান্তি',
        keyPrinciple: 'Protect 25–45 minute distraction-free sprints followed by screen-free rest.',
        levels: {
          explorer:
            'Study brightly for 25 minutes with a timer, then stretch, sip water, and play for 5 minutes!',
          student:
            'Put phones in another room, breathe calmly before starting tests, and outline answers briefly before writing fast.',
          mastery:
            'Focused mode locks mechanics while relaxed diffuse breaks spark creative problem synthesis.',
        },
        summaryBn:
          'ফোন দূরে রেখে ২৫-৪০ মিনিটের নিরবচ্ছিন্ন পড়া ও ৫ মিনিটের হালকা বিরতি মনোযোগ ধরে রাখার সেরা পদ্ধতি।',
        reflectionQuestion: 'Why take breaks away from social feeds instead of scrolling shorts?',
        reflectionAnswer: 'Social feeds flood working memory, whereas walking or resting lets the diffuse brain consolidate lessons.',
      },
    ],
  },
  {
    id: 'book-personal-finance',
    title: 'Personal Finance, Budgeting & Smart Habits',
    titleBn: 'ব্যক্তিগত অর্থব্যবস্থাপনা, বাজেট ও সঞ্চয়',
    authorOrOrigin: 'Household Financial Literacy Guide',
    era: 'Everyday Life Skills',
    category: 'skills-languages',
    storeId: 'applied',
    subjectId: 'life-finance',
    ageBand: 'All Ages',
    coverColorHex: '#047857',
    readingMinutes: 17,
    synopsis:
      'Budget cleanly with Needs/Wants/Savings, avoid high-interest debt traps, spot digital scams, and build an emergency cushion.',
    synopsisBn:
      'প্রয়োজন বনাম শখের বাজেট, জরুরি সঞ্চয় তহবিল, চড়া সুদের ঋণের ফাঁদ এড়ানো এবং অনলাইন আর্থিক প্রতারণা থেকে বাঁচার উপায়।',
    coreThesis:
      'Financial peace comes from living intentionally below your means, automating steady savings, and dodging toxic debt.',
    coreThesisBn:
      'আয়ের চেয়ে পরিমিত ব্যয়, নিয়মিত জরুরি সঞ্চয় এবং অপ্রয়োজনীয় চড়া সুদের ঋণ এড়িয়ে চলাই আর্থিক প্রশান্তির মূল মন্ত্র।',
    keyTakeaways: [
      'Separate Needs, Wants, and Future Savings cleanly (e.g. 50/30/20 guide).',
      'Save First before spending leftovers at month-end.',
      'Protect OTPs, PINs, and reject urgent unknown prize/loan links.',
    ],
    keyTakeawaysBn: [
      'মৌলিক প্রয়োজন, শখ এবং সঞ্চয়ের মধ্যে ভারসাম্যপূর্ণ বাজেট মেনে চলুন।',
      'খরচের পর যা বাঁচে তা নয়, আয়ের শুরুতেই সঞ্চয় আলাদা করুন।',
      'ওটিপি (OTP), পিন এবং লোভনীয় ভুয়া লিংক থেকে সবসময় সতর্ক থাকুন।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Needs, Wants & Pay-Yourself-First',
        titleBn: 'প্রয়োজন, শখ ও প্রথমে সঞ্চয়',
        keyPrinciple: 'Automated steady saving removes willpower fatigue.',
        levels: {
          explorer:
            'Keep three little jars—Save, Spend, and Share! Putting coins in Save & Share first teaches smart money habits early.',
          student:
            'The 50/30/20 framework allocates roughly 50% to essentials, 30% to discretionary life, and 20% to emergency savings and learning.',
          mastery:
            'Building a 3-to-6-month liquid emergency fund absorbs illness or job pauses cleanly without panic borrowing.',
        },
        summaryBn:
          'বয়স যা-ই হোক, সঞ্চয় ও দান করার পর অবশিষ্ট অংশ দিয়ে শখ মেটানোর অভ্যাস ভবিষ্যতে নিরাপত্তা দেয়।',
        reflectionQuestion: 'Why keep an emergency fund separate from daily spending wallets?',
        reflectionAnswer: 'To stop unexpected hospital or roof repairs from forcing predatory high-interest debt.',
      },
      {
        chapterNumber: 2,
        title: 'How Interest Helps Savers—or Traps Borrowers',
        titleBn: 'সুদের দুই দিক: সঞ্চয় বনাম ঋণের ফাঁদ',
        keyPrinciple: 'Compounding builds savers up while high APR credit cards multiply debt fast.',
        levels: {
          explorer:
            'Borrowing 1,000 taka with extra penalty fees can quickly snow-ball into owing double if not paid back promptly!',
          student:
            'Compare loans strictly by total Annual Percentage Rate (APR), hidden fees, and productive purpose—only borrow for genuine growth like education or tools.',
          mastery:
            'Amortization schedules show why early extra principal payments slash lifetime interest sharply.',
        },
        summaryBn:
          'চক্রবৃদ্ধি সঞ্চয়কারীদের বন্ধু হলেও চড়া সুদের ক্রেডিট কার্ড বা অপ্রয়োজনীয় ঋণ দ্রুত বোঝা বাড়িয়ে দেয়।',
        reflectionQuestion: 'When can modest borrowing make responsible financial sense?',
        reflectionAnswer: 'When funding productive assets or verified skills whose return clearly exceeds loan cost.',
      },
      {
        chapterNumber: 3,
        title: 'Taxes, Receipts & Civic Value',
        titleBn: 'কর, রসিদ ও নাগরিক অর্থনীতি',
        keyPrinciple: 'Honest taxes fund public hospitals, highways, clean water, and schools.',
        levels: {
          explorer:
            'Schools, fire trucks, public libraries, and smooth bridges are built together using shared community taxes.',
          student:
            'Learn progressive vs. flat VAT taxes, keep clean receipts, and understand gross pay vs. net take-home income.',
          mastery:
            'Fiscal transparency empowers citizens to track budgets and demand efficient public services.',
        },
        summaryBn:
          'মোট বেতন ও কর কাটার পর হাতে পাওয়া আয়ের হিসাব বোঝা এবং নাগরিক সেবায় করের ভূমিকা জানা দায়িত্বশীলতার অংশ।',
        reflectionQuestion: 'What is the difference between gross income and net take-home pay?',
        reflectionAnswer: 'Net pay is what remains after payroll taxes and benefit deductions.',
      },
      {
        chapterNumber: 4,
        title: 'Spotting Digital Payment Scams',
        titleBn: 'মোবাইল ব্যাংকিং ও ডিজিটাল প্রতারণা রোধ',
        keyPrinciple: 'No real bank or official ever asks for your PIN or OTP over a phone call.',
        levels: {
          explorer:
            'Your mobile wallet PIN and secret text code are like house keys—never read them to anyone calling claiming you won a prize!',
          student:
            'Pause before clicking rushed “Account Suspended!” links, verify official support channels independently, and pause 24 hours on big purchases.',
          mastery:
            'Zero-trust verification prevents social engineering across bKash/mobile wallets and card networks.',
        },
        summaryBn:
          'লটারি জেতা বা অ্যাকাউন্ট বন্ধ হয়ে যাওয়ার ভয় দেখিয়ে কেউ PIN বা OTP চাইলে সাথে সাথে কল কেটে দিন—কোনো ব্যাংক এগুলো চায় না।',
        reflectionQuestion: 'What should you do if a caller claims they mistakenly sent money and asks for your verification code?',
        reflectionAnswer: 'Hang up immediately, check official wallet balance independently, and never share OTPs.',
      },
    ],
  },
  {
    id: 'book-engineering-bridges',
    title: 'Structures, Bridges & Applied Engineering',
    titleBn: 'প্রকৌশল বিদ্যা: সেতু, ভবন ও যন্ত্রের বিজ্ঞান',
    authorOrOrigin: 'Structural & Mechanical Engineering',
    era: 'Archimedes–Modern Infrastructure',
    category: 'skills-languages',
    storeId: 'applied',
    subjectId: 'engineering',
    ageBand: 'All Ages',
    coverColorHex: '#475569',
    readingMinutes: 21,
    synopsis:
      'Why triangles never wobble, how Padma-scale bridges carry trains across mighty rivers, solar grids, and earthquake resilience.',
    synopsisBn:
      'ত্রিভুজ কেন নড়ে না, বিশাল নদীতে ঝুলন্ত ও ট্রাস সেতু কীভাবে ভার বহন করে, ভূমিকম্প-সহনশীল ভবন ও নবায়নযোগ্য শক্তি প্রকৌশল।',
    coreThesis:
      'Great engineering channels tension, compression, and energy cleanly along natural geometric paths with generous safety factors.',
    coreThesisBn:
      'সঠিক জ্যামিতিক নকশার মাধ্যমে টান ও চাপকে নিরাপদে মাটিতে নামিয়ে আনা এবং পর্যাপ্ত সেফটি ফ্যাক্টর রাখাই প্রকৌশলের মূল ভিত্তি।',
    keyTakeaways: [
      'Triangles resist collapse rigidly; squares wobble unless braced diagonally.',
      'Arches and trusses channel tension & compression cleanly.',
      'Engineering requires environmental safety and maintenance planning.',
    ],
    keyTakeawaysBn: [
      'চতুর্ভুজ চাপে বেঁকে গেলেও ত্রিভুজাকৃতি কাঠামো অত্যন্ত দৃঢ় থাকে।',
      'খিলান ও ট্রাস সেতু ভারী গাড়ি-ট্রেনের ওজন নিরাপদে স্তম্ভে ভাগ করে দেয়।',
      'প্রকৌশল নকশায় পরিবেশের নিরাপত্তা ও নিয়মিত রক্ষণাবেক্ষণ অত্যন্ত জরুরি।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Why Bridges Love Triangles',
        titleBn: 'সেতু ও টাওয়ারে ত্রিভুজের শক্তি',
        keyPrinciple: 'A triangle is the only polygon that cannot deform without bending its sides.',
        levels: {
          explorer:
            'Tape four craft sticks into a square—one sideways push flattens it! Now snap one stick diagonally into two triangles and stand a heavy book right on top!',
          student:
            'Steel truss bridges split heavy train loads into alternating compression (push) and tension (pull) forces routed straight to concrete piers.',
          mastery:
            'Method of joints and finite-element stress meshes verify peak buckling limits long before steel arrives.',
        },
        summaryBn:
          'বর্গাকার ফ্রেম পাশের চাপে হেলে পড়ে, কিন্তু কোণাকুণি কর্ণ বসিয়ে ত্রিভুজ বানালে তা প্রচণ্ড ওজন সইতে পারে।',
        reflectionQuestion: 'Why do electric transmission towers and bridge trusses look full of triangles?',
        reflectionAnswer: 'Triangulation provides maximum stiffness with minimal steel weight.',
      },
      {
        chapterNumber: 2,
        title: 'Suspension Cables, Arches & River Piers',
        titleBn: 'ঝুলন্ত সেতু, খিলান ও গভীর পিলার',
        keyPrinciple: 'Match bridge type cleanly to river width, currents, and bedrock.',
        levels: {
          explorer:
            'Roman stone arches squeeze weight sideways into stout banks, while Golden Gate steel cables hang decks high above cargo ships!',
          student:
            'Deep riverbridges like Bengal’s Padma Bridge drive steel piles deep beneath shifting river silt to anchor reliably against monsoon currents.',
          mastery:
            'Aerodynamic deck shaping and tuned mass dampers prevent wind-induced resonance flutter.',
        },
        summaryBn:
          'পদ্মার মতো খরস্রোতা ও পলিমাটির নদীতে গভীর পাইলিং ও শক্তিশালী ট্রাস নকশার মাধ্যমে রেল ও সড়ক সেতু নিরাপদ রাখা হয়।',
        reflectionQuestion: 'Why do engineers drill deep foundation piles under river bridges?',
        reflectionAnswer: 'To reach dense stable strata below seasonal scouring currents.',
      },
      {
        chapterNumber: 3,
        title: 'Quake-Resilient Design & Materials',
        titleBn: 'ভূমিকম্প-সহনশীল ভবন ও উপকরণ',
        keyPrinciple: 'Ductility bends safely during shaking rather than snapping brittle.',
        levels: {
          explorer:
            'Bamboo sways smoothly in strong storms without snapping; quake-safe buildings weave steel bars inside concrete so walls flex safely!',
          student:
            'Reinforced concrete pairs concrete’s compressive strength with steel rebar’s tensile stretch, plus cross-bracing and base isolators.',
          mastery:
            'Yielding ductile steel frames dissipate seismic kinetic energy cleanly without sudden brittle collapse.',
        },
        summaryBn:
          'বাঁশ যেমন ঝড়ে না ভেঙে দোলে, তেমনি কংক্রিটের ভেতর সঠিক রড ও নমনীয় ফ্রেম থাকলে ভবন ভূমিকম্পের ঝাঁকুনি সামলাতে পারে।',
        reflectionQuestion: 'Why combine concrete with steel rebar inside beams?',
        reflectionAnswer: 'Concrete resists crushing wonderfully yet cracks when stretched; steel carries tensile bending cleanly.',
      },
      {
        chapterNumber: 4,
        title: 'Solar Grids, Motors & Clean Energy',
        titleBn: 'সৌরবিদ্যুৎ ও পরিবেশবান্ধব শক্তি প্রকৌশল',
        keyPrinciple: 'Capture abundant sunlight, wind, and pumped storage reliably.',
        levels: {
          explorer:
            'Solar roof panels silently catch sunbeams to run fans, water pumps, and classroom lights without dirty smoke!',
          student:
            'Photovoltaic cells liberate electrons via the photoelectric effect while grid batteries balance cloudy nights cleanly.',
          mastery:
            'Smart bidirectional inverters and HVDC transmission integrate distributed renewables smoothly.',
        },
        summaryBn:
          'সৌর প্যানেল, বায়ুকল ও আধুনিক ব্যাটারি স্টোরেজ গ্রামীণ ও শহুরে জীবনে দূষণহীন নির্ভরযোগ্য বিদ্যুৎ পৌঁছে দিচ্ছে।',
        reflectionQuestion: 'What challenge must solar-heavy electricity grids solve every evening?',
        reflectionAnswer: 'Storing daytime peak sunshine in batteries or pumped hydro for evening demand.',
      },
    ],
  },
  {
    id: 'book-arts-music-harmony',
    title: 'Visual Arts, Color Theory & Music Harmony',
    titleBn: 'চারুকলা, রঙের তত্ত্ব ও সংগীতের সুর-তাল',
    authorOrOrigin: 'Fine Arts, Zainul Abedin & Music Theory',
    era: 'Classical–Modern Arts',
    category: 'skills-languages',
    storeId: 'arts',
    subjectId: 'fine-arts',
    ageBand: 'All Ages',
    coverColorHex: '#701a75',
    readingMinutes: 19,
    synopsis:
      'Discover perspective drawing, warm vs. cool color harmony, Zainul Abedin’s expressive ink lines, and why musical octaves sound natural.',
    synopsisBn:
      'রঙের সমন্বয়, আলোর ছায়া ও পার্সপেক্টিভ অঙ্কন, শিল্পাচার্য জয়নুল আবেদিনের তুলির শক্তি এবং সংগীতের স্বরগ্রাম ও ছন্দের গাণিতিক সৌন্দর্য।',
    coreThesis:
      'Visual proportion and musical harmony both rest on crisp contrast, rhythmic balance, and honest human emotion.',
    coreThesisBn:
      'চিত্রকলার আলো-ছায়া ও সংগীতের সুর-তাল উভয়ই পরিমিত বৈপরীত্য, ছন্দ এবং গভীর মানবিক অনুভূতির ওপর দাঁড়িয়ে আছে।',
    keyTakeaways: [
      'Value contrast (light vs. dark) draws eyes long before bright colors.',
      'Doubling sound frequency produces an exact musical octave.',
      'Observing real life carefully trains the artist’s eye and hand together.',
    ],
    keyTakeawaysBn: [
      'রঙের চেয়ে আলো ও ছায়ার (Value) বৈপরীত্য ছবিকে বেশি জীবন্ত করে।',
      'শব্দের কম্পাঙ্ক দ্বিগুণ করলে পরবর্তী অষ্টক বা একই সুরের উঁচু স্কেল পাওয়া যায়।',
      'চারপাশের জীবন ও প্রকৃতি গভীরভাবে পর্যবেক্ষণ করাই শ্রেষ্ঠ শিল্পচর্চা।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Line, Perspective & Honest Observation',
        titleBn: 'রেখা, পরিপ্রেক্ষিত ও জীবনঘনিষ্ঠ শিল্প',
        keyPrinciple: 'Draw what you truly see—not flat mental symbols.',
        levels: {
          explorer:
            'Look at railroad tracks disappearing into a tiny dot on the horizon—vanishing points make flat paper feel deep like a real window!',
          student:
            'Zainul Abedin showed how swift confident black brush strokes capture human struggle, boats, and monsoon skies with unforgettable power.',
          mastery:
            'Linear perspective, foreshortening, and negative space unify Renaissance geometry with modern expressive brushwork.',
        },
        summaryBn:
          'জয়নুল আবেদিনের দ্রুত ও বলিষ্ঠ কালির রেখায় ফুটে ওঠা সাধারণ মানুষের সংগ্রাম বিশ্বশিল্পে এক অনন্য মাইলফলক।',
        reflectionQuestion: 'Why do sketching artists practice quick 60-second gesture drawings?',
        reflectionAnswer: 'Short timers force eyes to capture natural motion and balance instead of stiff details.',
      },
      {
        chapterNumber: 2,
        title: 'Color Theory, Value & Contrast',
        titleBn: 'রঙের তত্ত্ব, উজ্জ্বলতা ও ভারসাম্য',
        keyPrinciple: '60% calm neutral, 30% supporting tones, 10% focal accent sings cleanly.',
        levels: {
          explorer:
            'Warm oranges and reds feel cozy like campfires while cool blues and teals feel peaceful like ocean waves!',
          student:
            'Complimentary pairs (blue/orange, emerald/crimson) pop vibrantly when one stays muted and only small highlights stay vivid.',
          mastery:
            'Additive RGB light mixes toward white screen pixels while subtractive CMY pigments mix toward dark.',
        },
        summaryBn:
          'সব জায়গায় উজ্জ্বল রঙ ব্যবহার না করে শান্ত পটভূমির মাঝে পরিমিত রঙ ব্যবহার করলে ছবি ও ডিজাইন অনেক আকর্ষণীয় হয়।',
        reflectionQuestion: 'Why look at a painting in black-and-white grayscale while testing composition?',
        reflectionAnswer: 'Removing hue reveals immediately whether light-to-dark value contrast guides the viewer’s eye clearly.',
      },
      {
        chapterNumber: 3,
        title: 'Pythagoras, Harmonics & Ragas',
        titleBn: 'সংগীতের গণিত, অষ্টক ও রাগ-সুর',
        keyPrinciple: 'Simple whole-number string ratios sound naturally consonant to human ears.',
        levels: {
          explorer:
            'Pluck half a guitar string and hear the exact same note one octave higher—music is math you can dance to!',
          student:
            '2:1 gives an octave, 3:2 gives a fifth (Sa–Pa), and South Asian ragas plus Western harmony build expressive emotion from seven-note scales.',
          mastery:
            'Fourier series explains instrument timbre as weighted overtone harmonics above each fundamental frequency.',
        },
        summaryBn:
          'তারের অর্ধেক করলে কম্পাঙ্ক দ্বিগুণ হয়ে সা থেকে পরবর্তী অষ্টকের সা বাজে; রাগসংগীত ও পাশ্চাত্য সুরের পেছনে এই গাণিতিক অনুপাত কাজ করে।',
        reflectionQuestion: 'Why do a flute and a sitar sound totally different playing the exact same middle note?',
        reflectionAnswer: 'Each instrument’s resonant body emphasizes different upper overtone harmonics.',
      },
      {
        chapterNumber: 4,
        title: 'Rhythm, Practice & Creative Joy',
        titleBn: 'তাল, ছন্দ ও সৃজনশীল আনন্দ',
        keyPrinciple: 'Small daily sketching or singing nurtures empathy and calm focus.',
        levels: {
          explorer:
            'Keep a small blank notebook for doodling leaves, clouds, or humming tunes—creativity grows every time you use it!',
          student:
            'Cross-training arts alongside math and science sharpens visual spatial reasoning and eases academic stress.',
          mastery:
            'Creative synthesis integrates analytical structure with intuitive aesthetic judgment.',
        },
        summaryBn:
          'বিজ্ঞান বা ব্যবসার পাশাপাশি ছবি আঁকা, গান শোনা বা হাতের কাজ চর্চা করলে মন সতেজ থাকে ও সৃজনশীলতা বাড়ে।',
        reflectionQuestion: 'How do fine arts strengthen STEM learning?',
        reflectionAnswer: 'Visual pattern recognition, proportion, and patient iteration transfer directly into science and engineering design.',
      },
    ],
  },
];
