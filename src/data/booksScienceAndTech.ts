import { LibraryBook } from '../types/knowledge';

export const BOOKS_SCIENCE_AND_TECH: LibraryBook[] = [
  {
    id: 'book-principia-motion',
    title: 'Principia & The Laws of Motion',
    titleBn: 'প্রিন্সিপিয়া ও গতির মহাবিশ্বীয় সূত্র',
    authorOrOrigin: 'Isaac Newton · Classical Mechanics',
    era: '1687 · Foundational Treatise',
    category: 'science-math',
    storeId: 'science',
    subjectId: 'physics',
    ageBand: 'All Ages',
    coverColorHex: '#1e3a5f',
    readingMinutes: 28,
    synopsis:
      'How a single set of three motion laws and universal gravitation unified falling apples, ocean tides, and planetary orbits into one coherent cosmos.',
    synopsisBn:
      'কীভাবে তিনটি গতিসূত্র ও মহাকর্ষ সূত্র পৃথিবীর আপেল পড়া, সমুদ্রের জোয়ার-ভাটা ও গ্রহগুলোর কক্ষপথকে একটি একক গাণিতিক নিয়মে বেঁধেছিল।',
    coreThesis:
      'Every change in motion is caused by a measurable net force, and the same gravitational rule operates on Earth and in deep space.',
    coreThesisBn:
      'গতির যেকোনো পরিবর্তনের পেছনে নির্দিষ্ট বল কাজ করে এবং পৃথিবী ও মহাকাশে একই মহাকর্ষ সূত্র কার্যকর।',
    keyTakeaways: [
      'Inertia resists changes in velocity, not motion itself.',
      'Net force equals mass times acceleration (F = ma) or rate of momentum change.',
      'Action and reaction act on two distinct interacting bodies.',
    ],
    keyTakeawaysBn: [
      'জড়তা বেগের পরিবর্তনে বাধা দেয়, সমবেগে চলায় নয়।',
      'বলের মান ভর ও ত্বরণের গুণফলের সমান (F = ma)।',
      'ক্রিয়া ও প্রতিক্রিয়া দুটি আলাদা বস্তুর ওপর কাজ করে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Inertia and the Quiet Sky',
        titleBn: 'জড়তা ও নিস্তব্ধ আকাশ',
        keyPrinciple: 'Objects persist in uniform motion unless acted on by a net external force.',
        levels: {
          explorer:
            'If you slide a hockey puck across super-smooth ice, it keeps gliding for a long time because nothing pushes back. Space has almost no friction, so planets keep gliding forever!',
          student:
            'Galileo’s inclined-plane thought experiments overturned Aristotle’s view that motion needs a continuous push. Friction was simply the hidden force stopping everyday objects.',
          mastery:
            'Inertial reference frames define the Euclidean affine structure of Newtonian spacetime where free particles trace straight geodesics with zero proper acceleration.',
        },
        summaryBn:
          'বাইরের ঘর্ষণ বা বাধা না থাকলে কোনো বস্তু আজীবন সরলরেখায় একই বেগে চলতে থাকে। পৃথিবীতে ঘর্ষণ থাকায় চলমান বস্তু থেমে যায়।',
        reflectionQuestion: 'Why do passengers lurch forward when a bus brakes suddenly?',
        reflectionAnswer:
          'Their bodies tend to preserve their forward velocity due to inertia while the bus decelerates beneath them.',
      },
      {
        chapterNumber: 2,
        title: 'Force, Mass, and Acceleration',
        titleBn: 'বল, ভর ও ত্বরণ',
        keyPrinciple: 'Acceleration scales directly with net force and inversely with mass.',
        levels: {
          explorer:
            'Pushing an empty backpack is easy, while pushing one packed with heavy encyclopedias takes much more effort for the same speed boost.',
          student:
            'Newton formulated the second law via linear momentum p = mv: ΣF = dp/dt, which simplifies to F = ma when mass stays constant.',
          mastery:
            'In variable-mass systems like rockets, expanding ΣF = d(mv)/dt requires accounting carefully for exhaust momentum flux across control volumes.',
        },
        summaryBn:
          'একই বল প্রয়োগ করলে হালকা বস্তুর ত্বরণ বেশি হয় এবং ভারী বস্তুর ত্বরণ কম হয়। ভরবেগের পরিবর্তনের হারই প্রযুক্ত বল।',
        reflectionQuestion: 'Can an object have zero velocity yet nonzero acceleration?',
        reflectionAnswer:
          'Yes—at the highest peak of a ball thrown straight upward, instantaneous velocity is zero while downward gravity accelerates it at 9.8 m/s².',
      },
      {
        chapterNumber: 3,
        title: 'Mutual Action and Conservation',
        titleBn: 'পারস্পরিক ক্রিয়া ও ভরবেগের সংরক্ষণ',
        keyPrinciple: 'Every interaction exerts equal and opposite impulses on two bodies.',
        levels: {
          explorer:
            'When you jump forward off a small rowboat, the boat glides backward behind you because you pushed it as it pushed you.',
          student:
            'Because F₁₂ = −F₂₁ over the same contact duration Δt, internal forces sum to zero impulse, conserving total momentum in any isolated collision.',
          mastery:
            'By Noether’s theorem, conservation of linear momentum arises directly from spatial translation invariance of the system Lagrangian.',
        },
        summaryBn:
          'একটি নৌকা থেকে লাফ দিলে নৌকাটি পেছনে সরে যায়; কারণ ক্রিয়া ও প্রতিক্রিয়া সবসময় দুটি আলাদা বস্তুর ওপর সমান ও বিপরীতভাবে কাজ করে।',
        reflectionQuestion: 'Why does a rocket accelerate in vacuum where there is no air to push against?',
        reflectionAnswer:
          'The rocket pushes hot exhaust gas backward, and the exhaust gas pushes the rocket forward with equal momentum impulse.',
      },
      {
        chapterNumber: 4,
        title: 'Universal Gravitation & Orbits',
        titleBn: 'মহাকর্ষ ও কক্ষপথের ছন্দ',
        keyPrinciple: 'Orbiting is continuous free-fall sideways fast enough to miss the Earth.',
        levels: {
          explorer:
            'Imagine firing a cannonball sideways from a tall mountain faster and faster until Earth curves away beneath it as fast as it falls—that is an orbit!',
          student:
            'Newton showed F = GMm/r² naturally explains Kepler’s elliptical orbits, orbital periods (T² ∝ r³), and why the Moon stays bound to Earth.',
          mastery:
            'The inverse-square central potential V(r) = −GMm/r admits a conserved Laplace–Runge–Lenz vector, guaranteeing closed conic orbits in 3D space.',
        },
        summaryBn:
          'গ্রহ বা কৃত্রিম উপগ্রহ আসলে ক্রমাগত পৃথিবীর দিকে পড়ছে, কিন্তু পাশের দিকে এত দ্রুত চলছে যে ভূপৃষ্ঠ তার নিচ দিয়ে বাঁক নিয়ে সরে যায়।',
        reflectionQuestion: 'What happens to gravitational pull if the distance between two planets doubles?',
        reflectionAnswer:
          'Because gravity follows an inverse-square law (1/r²), doubling distance reduces gravitational force to one-fourth.',
      },
    ],
  },
  {
    id: 'book-relativity-spacetime',
    title: 'Relativity, Spacetime & Gravity',
    titleBn: 'আপেক্ষিকতা, স্থান-কাল ও মহাবিশ্ব',
    authorOrOrigin: 'Albert Einstein · Modern Physics Compendium',
    era: '1905–1915 · Relativity',
    category: 'science-math',
    storeId: 'science',
    subjectId: 'astronomy',
    ageBand: 'Ages 13–18',
    coverColorHex: '#312e81',
    readingMinutes: 26,
    synopsis:
      'Why time slows near fast spaceships and massive stars, why mass curves spacetime, and how E = mc² powers every star.',
    synopsisBn:
      'দ্রুতগতির মহাকাশযানে ও বিশাল নক্ষত্রের পাশে সময় কীভাবে ধীর হয় এবং E = mc² কীভাবে নক্ষত্রের শক্তি জোগায় তার পূর্ণাঙ্গ পাঠ।',
    coreThesis:
      'Space and time form a single four-dimensional fabric whose geometry bends in response to mass and energy.',
    coreThesisBn:
      'স্থান ও কাল একটি অবিচ্ছিন্ন চতুর্মাত্রিক চাদর, যা ভর ও শক্তির প্রভাবে বেঁকে যায়।',
    keyTakeaways: [
      'Light travels at the same speed c in vacuum for all observers.',
      'Mass is concentrated energy according to E = mc².',
      'Gravity is geometry: free-falling objects follow straightest paths in curved spacetime.',
    ],
    keyTakeawaysBn: [
      'শূন্যস্থানে আলোর বেগ c সকল পর্যবেক্ষকের কাছেই সমান।',
      'ভর ও শক্তি পরস্পরে রূপান্তরযোগ্য (E = mc²)।',
      'মহাকর্ষ কোনো অদৃশ্য টান নয়, বরং স্থান-কালের বক্রতা।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Cosmic Speed Limit',
        titleBn: 'আলোর ধ্রুব গতিসীমা',
        keyPrinciple: 'No signal or mass can outrun light in vacuum.',
        levels: {
          explorer:
            'Unlike a ball thrown from a moving train, a flashlight beam always races away at the exact same astonishing speed—300,000 kilometers per second!',
          student:
            'Because Maxwell’s equations fix light speed c regardless of observer motion, simultaneity becomes relative rather than absolute.',
          mastery:
            'Lorentz transformations preserve the Minkowski interval ds² = −c²dt² + dx² + dy² + dz² across inertial observers.',
        },
        summaryBn:
          'আলোর বেগ কখনোই পর্যবেক্ষকের গতির ওপর নির্ভর করে না; তাই চলমান মহাকাশযান ও স্থির পৃথিবীর ঘড়ি একই তালে চলে না।',
        reflectionQuestion: 'Why does GPS require relativistic clock corrections every day?',
        reflectionAnswer:
          'Satellites move fast (slowing clocks via special relativity) and sit in weaker gravity (speeding clocks via general relativity); uncorrected errors would drift miles daily.',
      },
      {
        chapterNumber: 2,
        title: 'Time Dilation & Length Contraction',
        titleBn: 'সময়ের প্রসারণ ও দৈর্ঘ্য সংকোচন',
        keyPrinciple: 'Moving clocks tick slower relative to stationary observers.',
        levels: {
          explorer:
            'If one twin flies near light speed to a distant star and comes back, the traveling twin returns younger than the twin who stayed on Earth.',
          student:
            'Using a vertical light-clock diagram and Pythagoras’s theorem yields γ = 1 / √(1 − v²/c²), quantifying both time dilation and length contraction.',
          mastery:
            'Proper time τ integrated along a curved worldline is always strictly less than the inertial straight-line worldline connecting the same spacetime events.',
        },
        summaryBn:
          'যত দ্রুতগতিতে কোনো বস্তু চলে, বাইরের পর্যবেক্ষকের সাপেক্ষে তার ঘড়ি তত ধীরে চলে এবং গতির দিকে তার দৈর্ঘ্য সংকুচিত মনে হয়।',
        reflectionQuestion: 'Does an astronaut on a fast ship feel their own heartbeat slowing down?',
        reflectionAnswer:
          'No; inside their own reference frame all physical and biological clocks feel completely normal.',
      },
      {
        chapterNumber: 3,
        title: 'Mass-Energy Equivalence (E = mc²)',
        titleBn: 'ভর ও শক্তির সমতা',
        keyPrinciple: 'A tiny amount of mass holds colossal locked energy.',
        levels: {
          explorer:
            'Deep inside the Sun, hydrogen atoms squeeze together into helium and turn a tiny speck of mass into all the sunshine warming Earth.',
          student:
            'Since c² is 9 × 10¹⁶ m²/s², converting even one gram of matter yields roughly 90 trillion joules of radiant energy.',
          mastery:
            'Rest energy E₀ = mc² is the temporal norm of the four-momentum vector Pᵘ = (E/c, p), invariant under Lorentz boosts.',
        },
        summaryBn:
          'সূর্যের কেন্দ্রে হাইড্রোজেন থেকে হিলিয়াম তৈরির সময় সামান্য ভর হারিয়ে বিশাল আলো ও তাপ শক্তিতে পরিণত হয়।',
        reflectionQuestion: 'Does a charged battery weigh infinitesimally more than a depleted one?',
        reflectionAnswer:
          'Yes—storing chemical energy increases total rest mass by ΔE/c², though far too tiny for ordinary kitchen scales.',
      },
      {
        chapterNumber: 4,
        title: 'Curved Spacetime & Black Holes',
        titleBn: 'স্থান-কালের বক্রতা ও কৃষ্ণগহ্বর',
        keyPrinciple: 'Matter tells spacetime how to curve; spacetime tells matter how to move.',
        levels: {
          explorer:
            'Imagine stretching a trampoline and placing a heavy bowling ball in the center; marbles rolled nearby curve around the dip like planets around the Sun.',
          student:
            'During the 1919 solar eclipse, starlight bending around the Sun proved gravity bends light itself, culminating in predictions of black holes and gravitational waves.',
          mastery:
            'Einstein’s field equations G_μν = (8πG/c⁴) T_μν equate spacetime Ricci curvature tensor combinations directly to the stress-energy tensor.',
        },
        summaryBn:
          'বৃহৎ নক্ষত্র বা ব্ল্যাক হোলের চারপাশে স্থান-কাল এতই বেঁকে যায় যে আলোর রশ্মিও বাঁকা পথে চলে এবং ঘটনা-দিগন্ত পেরোলে আলোও বের হতে পারে না।',
        reflectionQuestion: 'How did LIGO detect colliding black holes billions of light-years away?',
        reflectionAnswer:
          'By measuring sub-proton laser interferometer shifts caused by passing ripples of spacetime curvature—gravitational waves.',
      },
    ],
  },
  {
    id: 'book-euclid-geometry',
    title: "Euclid's Elements & Pure Geometry",
    titleBn: 'ইউক্লিডের জ্যামিতি ও যুক্তিসিদ্ধ গণিত',
    authorOrOrigin: 'Euclid of Alexandria · Mathematical Logic',
    era: '300 BCE · Classical Mathematics',
    category: 'science-math',
    storeId: 'science',
    subjectId: 'mathematics',
    ageBand: 'All Ages',
    coverColorHex: '#0f4c5c',
    readingMinutes: 24,
    synopsis:
      'How five simple axioms grew into hundreds of timeless proofs about triangles, circles, prime numbers, and why deductive reasoning never goes stale.',
    synopsisBn:
      'মাত্র পাঁচটি স্বতঃসিদ্ধ থেকে কীভাবে শত শত জ্যামিতিক উপপাদ্য, ত্রিভুজ-বৃত্তের ধর্ম ও মৌলিক সংখ্যার অমর প্রমাণ গড়ে উঠেছে।',
    coreThesis:
      'Rigorous logical deduction lets us prove mathematical truths with absolute certainty from minimal starting assumptions.',
    coreThesisBn:
      'অল্প কয়েকটি স্পষ্ট স্বতঃসিদ্ধ থেকে নিখুঁত যুক্তির ধাপে ধাপে গাণিতিক সত্য চিরস্থায়ীভাবে প্রমাণ করা যায়।',
    keyTakeaways: [
      'Axioms are starting agreements; theorems are logical consequences.',
      'The Pythagorean theorem connects geometry to algebra and distance.',
      'Euclid proved infinitely many prime numbers exist using proof by contradiction.',
    ],
    keyTakeawaysBn: [
      'স্বতঃসিদ্ধ হলো শুরুর মূল ভিত্তি আর উপপাদ্য হলো যুক্তিসিদ্ধ ফলাফল।',
      'পিথাগোরাসের উপপাদ্য জ্যামিতি ও বীজগণিতের সেতুবন্ধন তৈরি করে।',
      'অসীম সংখ্যক মৌলিক সংখ্যা থাকার প্রমাণ যুক্তির অনন্য দৃষ্টান্ত।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'From Point & Line to Certainty',
        titleBn: 'বিন্দু ও রেখা থেকে নিশ্চিত প্রমাণ',
        keyPrinciple: 'Every valid proof traces back to explicitly stated definitions and axioms.',
        levels: {
          explorer:
            'Instead of measuring ten triangles with a ruler and guessing, geometry shows why a rule MUST work for every triangle ever drawn.',
          student:
            'Euclid built Book I from 23 definitions, 5 common notions, and 5 postulates, proving triangle congruence (SAS, ASA, SSS) strictly by construction.',
          mastery:
            'Hilbert later formalized incidence, order, congruence, and continuity axioms to eliminate implicit diagrammatic assumptions in Euclidean space.',
        },
        summaryBn:
          'স্কেল দিয়ে মেপে অনুমান নয়, বরং যুক্তির পরম্পরায় জ্যামিতি প্রমাণ করে কেন কোনো নিয়ম পৃথিবীর সব ত্রিভুজের জন্যই সত্য।',
        reflectionQuestion: 'Why does changing Euclid’s fifth parallel postulate create new geometries?',
        reflectionAnswer:
          'On curved spheres or saddles, parallel lines converge or diverge—producing spherical and hyperbolic geometry essential to navigation and relativity.',
      },
      {
        chapterNumber: 2,
        title: 'Pythagoras and Geometric Area',
        titleBn: 'পিথাগোরাসের উপপাদ্য ও ক্ষেত্রফল',
        keyPrinciple: 'In any right triangle, the square on the hypotenuse equals the sum of the other two squares.',
        levels: {
          explorer:
            'If you build square tiles on all three sides of a corner-shaped right triangle, the two smaller tile squares fit perfectly into the big slanted square!',
          student:
            'Rearranging four identical right triangles inside a (a + b)² square reveals c² = a² + b² cleanly without needing trigonometric tables.',
          mastery:
            'The Euclidean norm ||x|| = √(Σxᵢ²) generalizes orthogonality into arbitrary inner-product Hilbert spaces.',
        },
        summaryBn:
          'সমকোণী ত্রিভুজের অতিভুজের ওপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফল অপর দুই বাহুর ওপর অঙ্কিত বর্গক্ষেত্রদ্বয়ের ক্ষেত্রফলের সমষ্টির সমান।',
        reflectionQuestion: 'How do carpenters quickly check if a wall corner is a perfect 90° angle?',
        reflectionAnswer:
          'By measuring the classic 3-4-5 right triangle: 3² + 4² = 9 + 16 = 25 = 5².',
      },
      {
        chapterNumber: 3,
        title: 'Circles, Pi & Golden Ratios',
        titleBn: 'বৃত্ত, পাই ও অনুপাতের সৌন্দর্য',
        keyPrinciple: 'Constant curvature gives every circle universal ratio symmetry.',
        levels: {
          explorer:
            'Measure around any lid, bicycle wheel, or pizza and divide by its width—you always get slightly more than 3 (around 3.14159)!',
          student:
            'Thales’ theorem guarantees every triangle inscribed over a circle’s diameter forms an exact 90° angle at the rim.',
          mastery:
            'Archimedes bounded π by inscribing and circumscribing 96-gons, inventing exhaustion methods that foreshadowed integral calculus.',
        },
        summaryBn:
          'যেকোনো আকারের বৃত্তের পরিধি ও ব্যাসের অনুপাত সর্বদা ধ্রুবক π (প্রায় ৩.১৪১৬), যা প্রাকৃতিক প্রতিসাম্যের নিদর্শন।',
        reflectionQuestion: 'Why are manhole covers usually circular?',
        reflectionAnswer:
          'A circle has constant width in every direction, so the cover can never fall sideways down through its own opening.',
      },
      {
        chapterNumber: 4,
        title: 'Infinitude of Prime Numbers',
        titleBn: 'মৌলিক সংখ্যার অসীম প্রবাহ',
        keyPrinciple: 'Primes are the indivisible atoms of all whole numbers.',
        levels: {
          explorer:
            'Numbers like 2, 3, 5, 7, and 11 cannot be split into equal smaller groups; every other number is built by multiplying primes together.',
          student:
            'If someone claimed a largest prime P existed, multiplying all primes up to P and adding 1 creates a new number not divisible by any prime on the list!',
          mastery:
            'Prime distribution follows the Prime Number Theorem π(x) ~ x / ln(x), connecting discrete integers to complex zeros of the Riemann zeta function.',
        },
        summaryBn:
          'কোনো “সবচেয়ে বড় মৌলিক সংখ্যা” থাকা অসম্ভব—কারণ সবগুলো মৌলিক সংখ্যার গুণফলের সাথে ১ যোগ করলে নতুন মৌলিক উৎপাদক পাওয়া যায়।',
        reflectionQuestion: 'Why is 1 NOT counted as a prime number?',
        reflectionAnswer:
          'Excluding 1 ensures every integer has one unique prime factorization (the Fundamental Theorem of Arithmetic).',
      },
    ],
  },
  {
    id: 'book-calculus-change',
    title: 'Calculus: The Language of Change',
    titleBn: 'ক্যালকুলাস: পরিবর্তনের গণিত',
    authorOrOrigin: 'Newton, Leibniz & Modern Analysis',
    era: '17th Century–Modern',
    category: 'science-math',
    storeId: 'science',
    subjectId: 'mathematics',
    ageBand: 'Ages 13–18',
    coverColorHex: '#155e75',
    readingMinutes: 25,
    synopsis:
      'Unlock derivatives, integrals, limits, and how slicing curves into infinitely small steps predicts motion, epidemics, and orbital paths.',
    synopsisBn:
      'অন্তরকলন, সমাকলন ও সীমার সহজ ও গভীর ব্যাখ্যা—কীভাবে ক্ষুদ্রাতিক্ষুদ্র পরিবর্তনের হিসাব দিয়ে গতি, বৃদ্ধি ও ক্ষেত্রফল নির্ণয় করা হয়।',
    coreThesis:
      'Instantaneous rates of change (derivatives) and accumulated totals (integrals) are exact mathematical inverses.',
    coreThesisBn:
      'তাৎক্ষণিক পরিবর্তনের হার (ডেরিভেটিভ) এবং মোট সঞ্চয় (ইন্টিগ্রাল) পরস্পরের বিপরীত প্রক্রিয়া।',
    keyTakeaways: [
      'Limits let us reason cleanly about approaching zero without dividing by zero.',
      'The derivative measures instantaneous slope and velocity.',
      'The integral sums infinitely thin slices to find area, volume, and total work.',
    ],
    keyTakeawaysBn: [
      'সীমা (Limit) শূন্যের কাছাকাছি মান নিয়ে নিরাপদে হিসাব করতে শেখায়।',
      'অন্তরক (Derivative) কোনো নির্দিষ্ট মুহূর্তের ঢাল ও বেগ পরিমাপ করে।',
      'সমাকলন (Integral) অসংখ্য সূক্ষ্ম খণ্ড যোগ করে মোট ক্ষেত্রফল বা দূরত্ব বের করে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Limits and Taming Infinity',
        titleBn: 'সীমা ও অসীমকে বশ করা',
        keyPrinciple: 'Approach arbitrarily close to a point to reveal its true local trend.',
        levels: {
          explorer:
            'If you walk halfway to a wall, then half again, then half again, your steps shrink toward zero while your total path adds closer and closer to the whole wall!',
          student:
            'Instead of dividing 0/0, limits examine the ratio Δy/Δx as Δx shrinks toward 0 without ever violating arithmetic rules.',
          mastery:
            'Cauchy and Weierstrass’s ε–δ definition eliminates vague infinitesimals: ∀ε>0 ∃δ>0 such that 0<|x−a|<δ implies |f(x)−L|<ε.',
        },
        summaryBn:
          'যেকোনো বিন্দুর ঠিক কাছাকাছি গেলে বক্ররেখাটি কেমন আচরণ করে তা সীমা (Limit) দিয়ে নিখুঁতভাবে বের করা যায়।',
        reflectionQuestion: 'Why does zooming closely into any smooth curve make it look like a straight line?',
        reflectionAnswer:
          'Differentiability means local linearity—over tiny intervals Δx, higher-order curvature terms vanish faster than linear slope.',
      },
      {
        chapterNumber: 2,
        title: 'Derivatives: Speed at an Instant',
        titleBn: 'অন্তরকলন: এক মুহূর্তের গতি',
        keyPrinciple: 'dy/dx captures sensitivity—how fast output responds to a nudge in input.',
        levels: {
          explorer:
            'A car speedometer tells how fast you are going RIGHT NOW—not your average trip speed. That “right-now” needle is a derivative!',
          student:
            'Using power, product, and chain rules lets us locate maximum profits, minimum drag, and exact velocities of accelerating objects.',
          mastery:
            'Partial gradients ∇f point along steepest ascent on multivariable manifolds and power gradient-descent optimization across deep neural networks.',
        },
        summaryBn:
          'গাড়ির স্পিডোমিটার ঠিক ওই মুহূর্তের বেগ দেখায়, পুরো ভ্রমণের গড় নয়—এই তাৎক্ষণিক হারই অন্তরক বা Derivative।',
        reflectionQuestion: 'At the peak of a hill or profit curve, what is the value of the derivative?',
        reflectionAnswer:
          'Zero—because the tangent line at a smooth local maximum or minimum is momentarily flat.',
      },
      {
        chapterNumber: 3,
        title: 'Integrals: Rebuilding the Whole',
        titleBn: 'সমাকলন: টুকরো থেকে সমগ্র গঠন',
        keyPrinciple: 'Add infinitely many thin rectangles to measure curved areas and total change.',
        levels: {
          explorer:
            'Imagine slicing a curved leaf into dozens of tiny paper strips; adding up the area of every thin strip tells you the leaf’s exact area.',
          student:
            'Integrating velocity v(t) over time gives total distance traveled, even when speed rises and falls smoothly.',
          mastery:
            'Riemann and Lebesgue integration extend summation to irregular measurable sets, underpinning Fourier transforms and probability densities.',
        },
        summaryBn:
          'অনিয়মিত বা বাঁকা ক্ষেত্রকে অসংখ্য সরু ফিতায় ভাগ করে যোগ করলে নিখুঁত মোট ক্ষেত্রফল পাওয়া যায়।',
        reflectionQuestion: 'If water pours into a tank at changing rates r(t), what does ∫r(t)dt represent?',
        reflectionAnswer:
          'The total volume of water accumulated inside the tank over that time interval.',
      },
      {
        chapterNumber: 4,
        title: 'Fundamental Theorem & Differential Equations',
        titleBn: 'মৌলিক উপপাদ্য ও ব্যবকলনীয় সমীকরণ',
        keyPrinciple: 'Nature writes its laws as differential equations linking values to their change rates.',
        levels: {
          explorer:
            'Finding how tall a tree grew and measuring how fast it grows each week are two halves of the same puzzle.',
          student:
            'The Fundamental Theorem proves ∫ₐᵇ f\'(x)dx = f(b) − f(a). Exponential models dy/dt = ky explain compounding interest and radioactive decay.',
          mastery:
            'Partial differential equations (heat, wave, Navier–Stokes, Schrödinger) govern continuum physics and quantum probability evolution.',
        },
        summaryBn:
          'জনসংখ্যা বৃদ্ধি, ওষুধের মাত্রা হ্রাস কিংবা তাপ পরিবহন—প্রকৃতির প্রায় সব পরিবর্তনই ব্যবকলনীয় সমীকরণ দিয়ে প্রকাশ করা হয়।',
        reflectionQuestion: 'Why does dy/dt = ky always produce exponential growth or decay?',
        reflectionAnswer:
          'Only e^(kt) has a rate of change strictly proportional to its own current magnitude.',
      },
    ],
  },
  {
    id: 'book-periodic-chemistry',
    title: 'The Periodic Table & Chemical Bonds',
    titleBn: 'পর্যায় সারণি ও রাসায়নিক বন্ধনের রহস্য',
    authorOrOrigin: 'Dmitri Mendeleev · Chemistry Compendium',
    era: '1869–Modern · Chemistry',
    category: 'science-math',
    storeId: 'science',
    subjectId: 'chemistry',
    ageBand: 'All Ages',
    coverColorHex: '#065f46',
    readingMinutes: 22,
    synopsis:
      'Why 118 elements repeat chemical personalities like musical octaves, and how electron sharing weaves matter, water, metals, and medicines.',
    synopsisBn:
      'কীভাবে ১১৮টি মৌল পর্যায়ক্রমে একই ধর্ম দেখায় এবং ইলেকট্রন আদান-প্রদান ও শেয়ারের মাধ্যমে পানি, ধাতু ও ওষুধ তৈরি হয়।',
    coreThesis:
      'Atomic number and outer electron shells dictate chemical behavior, bonding geometry, and energy release.',
    coreThesisBn:
      'পারমাণবিক সংখ্যা ও সর্ববহিঃস্থ ইলেকট্রন বিন্যাসই মৌলের রাসায়নিক চরিত্র ও বন্ধন নির্ধারণ করে।',
    keyTakeaways: [
      'Atoms seek stable filled outer electron shells.',
      'Ionic bonds transfer electrons; covalent bonds share them.',
      'Hydrogen bonding makes water liquid, supportive of life, and less dense as ice.',
    ],
    keyTakeawaysBn: [
      'পরমাণুগুলো স্থিতিশীল অষ্টক বা পূর্ণ কক্ষপথ গড়তে চায়।',
      'আয়নিক বন্ধনে ইলেকট্রন আদান-প্রদান হয়, সমযোজী বন্ধনে ভাগাভাগি হয়।',
      'হাইড্রোজেন বন্ধনের কারণেই পানি প্রাণধারণের উপযোগী তরল হিসেবে থাকে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Mendeleev’s Predictive Grid',
        titleBn: 'মেন্ডেলিভের ভবিষ্যদ্বাণীমূলক সারণি',
        keyPrinciple: 'Periodic trends reflect repeating quantum electron shell configurations.',
        levels: {
          explorer:
            'Think of the Periodic Table as a giant Lego chart sorted by how many protons live in the center of each atom—neighbors in the same column act like cousins!',
          student:
            'Elements in Group 1 (alkali metals) react vigorously to shed one outer electron; Group 18 (noble gases) stay calm because their shells are already full.',
          mastery:
            'Pauli exclusion and Hund’s rules govern s, p, d, f subshell filling, explaining ionization energy jumps, atomic radii trends, and transition metal catalysis.',
        },
        summaryBn:
          'পর্যায় সারণির একই কলামের মৌলগুলোর বহিঃস্থ ইলেকট্রন সংখ্যা সমান হওয়ায় তারা প্রায় একই রকম রাসায়নিক আচরণ দেখায়।',
        reflectionQuestion: 'How did Mendeleev leave empty gaps and correctly guess undiscovered elements?',
        reflectionAnswer:
          'He noticed periodic weight and property patterns in neighbors and predicted the exact density and reactivity of gallium and germanium before discovery.',
      },
      {
        chapterNumber: 2,
        title: 'Ionic, Covalent & Metallic Bonds',
        titleBn: 'আয়নিক, সমযোজী ও ধাতব বন্ধন',
        keyPrinciple: 'Electronegativity differences govern whether electrons are shared or transferred.',
        levels: {
          explorer:
            'Table salt forms when sodium gives an electron to chlorine like a gift; water forms when oxygen and hydrogen hold hands and share electrons.',
          student:
            'Metals pool valence electrons into a mobile “sea,” explaining why copper conducts electricity and bends without shattering like salt crystals.',
          mastery:
            'Molecular orbital theory combines atomic wavefunctions into bonding (σ, π) and antibonding (σ*, π*) states determining bond order and magnetism.',
        },
        summaryBn:
          'তড়িৎ-ঋণাত্মকতার পার্থক্য বেশি হলে আয়নিক বন্ধন আর কাছাকাছি হলে ইলেকট্রন শেয়ারের মাধ্যমে সমযোজী বন্ধন গঠিত হয়।',
        reflectionQuestion: 'Why does solid salt shatter when struck while solid copper bends smoothly?',
        reflectionAnswer:
          'Shifting an ionic lattice aligns like-charged ions that repel violently, whereas metallic electron seas cushion shifted cation layers.',
      },
      {
        chapterNumber: 3,
        title: 'Water, Acids & pH Balance',
        titleBn: 'পানি, অম্ল-ক্ষার ও pH ভারসাম্য',
        keyPrinciple: 'Acids donate protons (H⁺) and bases accept them on a logarithmic 0–14 scale.',
        levels: {
          explorer:
            'Lemon juice tastes sour because it is mildly acidic, baking soda is basic, and pure water sits right in the peaceful middle at pH 7.',
          student:
            'Because pH = −log₁₀[H⁺], each single-unit drop in pH means ten times higher hydrogen ion concentration. Blood relies on bicarbonate buffers around pH 7.4.',
          mastery:
            'Henderson–Hasselbalch equilibria pH = pKₐ + log([A⁻]/[HA]) govern physiological buffering, ocean acidification, and enzymatic folding.',
        },
        summaryBn:
          'pH স্কেলে ৭ নিরপেক্ষ, ৭-এর নিচে অম্লীয় এবং ৭-এর ওপরে ক্ষারীয়। প্রতিটি ধাপ হাইড্রোজেন আয়নের ঘনত্বে ১০ গুণ পরিবর্তন নির্দেশ করে।',
        reflectionQuestion: 'Why does ice float on winter lakes instead of sinking and freezing ponds solid?',
        reflectionAnswer:
          'Hydrogen bonds lock water molecules into an open hexagonal crystal lattice that is less dense than liquid water.',
      },
      {
        chapterNumber: 4,
        title: 'Carbon: The Backbone of Life',
        titleBn: 'কার্বন: প্রাণের গাঠনিক কঙ্কাল',
        keyPrinciple: 'Carbon’s four covalent bonds form chains, rings, polymers, and biomolecules.',
        levels: {
          explorer:
            'Carbon is nature’s four-handed builder atom—it links into diamonds, pencil lead, plastics, sugar, and every cell inside your body.',
          student:
            'Carbon forms stable single, double, and triple bonds with itself and nitrogen, oxygen, and hydrogen, creating functional groups that drive metabolism.',
          mastery:
            'Chirality, sp³/sp²/sp hybridization, and resonance stabilization dictate enzyme stereoselectivity and modern medicinal synthesis.',
        },
        summaryBn:
          'কার্বনের চার যোজ্যতা থাকার কারণে এটি দীর্ঘ শৃঙ্খল ও বলয় তৈরি করে শর্করা, প্রোটিন, ডিএনএ ও জৈব অণুর ভিত্তি গড়ে।',
        reflectionQuestion: 'Why are diamond and graphite completely different even though both are pure carbon?',
        reflectionAnswer:
          'Diamond links carbon in a rigid 3D tetrahedral network, while graphite forms slippery 2D hexagonal sheets.',
      },
    ],
  },
  {
    id: 'book-double-helix',
    title: 'The Double Helix: Genetics & Evolution',
    titleBn: 'ডিএনএ দ্বিসূত্রক: জিনতত্ত্ব ও বিবর্তন',
    authorOrOrigin: 'Mendel, Darwin, Franklin, Watson & Crick',
    era: '1859–Modern · Life Sciences',
    category: 'science-math',
    storeId: 'science',
    subjectId: 'biology',
    ageBand: 'All Ages',
    coverColorHex: '#047857',
    readingMinutes: 24,
    synopsis:
      'From pea plants and Galapagos finches to the four-letter DNA alphabet that encodes every living creature on Earth.',
    synopsisBn:
      'মটরশুঁটির পরীক্ষা থেকে চার অক্ষরের ডিএনএ সংকেত—কীভাবে বংশগতি প্রজন্ম থেকে প্রজন্মে প্রবাহিত হয় এবং জীবজগৎ বিবর্তিত হয়।',
    coreThesis:
      'All Earth life shares a common molecular code stored in DNA, refined across billions of years through variation and natural selection.',
    coreThesisBn:
      'পৃথিবীর সকল জীব একই চার-অক্ষরের ডিএনএ সংকেত বহন করে, যা প্রকরণ ও প্রাকৃতিক নির্বাচনের মাধ্যমে বিকশিত হয়েছে।',
    keyTakeaways: [
      'DNA bases pair strictly: A with T, and C with G.',
      'Cells transcribe DNA into RNA and translate RNA into proteins.',
      'Natural selection filters heritable variation against real environments.',
    ],
    keyTakeawaysBn: [
      'ডিএনএ-তে অ্যাডেনিন (A) সবসময় থাইমিন (T) এবং সাইটোসিন (C) গুয়ানিনের (G) সাথে যুক্ত হয়।',
      'ডিএনএ থেকে আরএনএ এবং তা থেকে দেহের কার্যকরী প্রোটিন তৈরি হয়।',
      'পরিবেশের সাথে মানানসই বংশগত বৈশিষ্ট্য প্রজন্ম পরম্পরায় টিকে থাকে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Inside the Living Cell',
        titleBn: 'জীবন্ত কোষের অভ্যন্তর',
        keyPrinciple: 'Cells are self-maintaining factories bounded by selective membranes.',
        levels: {
          explorer:
            'Every living plant and animal is built from tiny bubbles called cells—each with a command center (nucleus), power plants (mitochondria), and protein workshops.',
          student:
            'Prokaryotes keep DNA free in cytoplasm, whereas eukaryotes organize organelles inside lipid bilayers. ATP serves as universal cellular energy currency.',
          mastery:
            'Endosymbiotic theory explains mitochondria and chloroplasts as ancient engulfed bacteria carrying circular DNA and double membranes.',
        },
        summaryBn:
          'প্রতিটি জীবকোষ এক একটি স্বয়ংসম্পূর্ণ কারখানা; মাইটোকন্ড্রিয়া শক্তি (ATP) তৈরি করে আর নিউক্লিয়াস বংশগত নির্দেশনা ধারণ করে।',
        reflectionQuestion: 'Why do muscle cells contain far more mitochondria than skin cells?',
        reflectionAnswer:
          'Muscle contraction demands intense continuous ATP energy supply.',
      },
      {
        chapterNumber: 2,
        title: 'The Four-Letter DNA Blueprint',
        titleBn: 'চার অক্ষরের ডিএনএ নকশা',
        keyPrinciple: 'Complementary base pairing allows exact copying of genetic information.',
        levels: {
          explorer:
            'Imagine a twisted rope ladder whose rungs snap together only in matching pairs: A only clicks with T, and C only clicks with G!',
          student:
            'Rosalind Franklin’s X-ray diffraction Photo 51 revealed DNA’s helical geometry, helping explain semiconservative replication before cell division.',
          mastery:
            'Helicase, primase, and DNA polymerase III synthesize leading continuously and lagging Okazaki fragments in strict 5′→3′ directionality.',
        },
        summaryBn:
          'ডিএনএ-র প্যাঁচানো সিঁড়ির প্রতিটি ধাপ A-T ও C-G জোড়ায় বাঁধা; ফলে বিভাজনের সময় নিখুঁত অনুলিপি তৈরি হতে পারে।',
        reflectionQuestion: 'If a DNA strand reads A-T-G-C-C-A, what does its partner strand read?',
        reflectionAnswer: 'T-A-C-G-G-T.',
      },
      {
        chapterNumber: 3,
        title: 'From Genes to Proteins',
        titleBn: 'জিন থেকে প্রোটিন তৈরি',
        keyPrinciple: 'DNA → RNA → Protein defines the central dogma of molecular biology.',
        levels: {
          explorer:
            'Your DNA stays safe inside the nucleus library while cells send out paper copies (mRNA) to ribosome kitchens that bake amino acids into proteins.',
          student:
            'Triplet codons on mRNA specify 20 amino acids; folded 3D protein shapes determine whether a protein acts as hemoglobin, an enzyme, or an antibody.',
          mastery:
            'Epigenetic histone acetylation, alternative RNA splicing, and microRNAs let identical genomes produce hundreds of specialized human cell types.',
        },
        summaryBn:
          'কোষ নিউক্লিয়াসের ডিএনএ থেকে mRNA কপি তৈরি করে রাইবোজোমে পাঠায়, যেখানে অ্যামিনো অ্যাসিড জুড়ে প্রয়োজনীয় প্রোটিন তৈরি হয়।',
        reflectionQuestion: 'How do brain neurons and liver cells behave so differently if they share the exact same DNA?',
        reflectionAnswer:
          'Different regulatory switches activate distinct subsets of genes in each tissue.',
      },
      {
        chapterNumber: 4,
        title: 'Variation, Adaptation & CRISPR',
        titleBn: 'বৈচিত্র্য, অভিযোজন ও আধুনিক জিন-প্রযুক্তি',
        keyPrinciple: 'Populations evolve over generations when differential traits affect survival.',
        levels: {
          explorer:
            'Moths that blend into dark tree bark avoid hungry birds better than bright moths, so more dark baby moths survive over time.',
          student:
            'Mutations introduce raw diversity, sexual recombination shuffles alleles, and natural selection adapts species. CRISPR-Cas9 lets scientists edit faulty genes accurately.',
          mastery:
            'Hardy–Weinberg equilibrium baselines expose selection, genetic drift, and gene flow via allele frequency shifts across generations.',
        },
        summaryBn:
          'প্রজন্মের পর প্রজন্ম পরিবেশের উপযোগী বৈশিষ্ট্য টিকে থাকে; আর আধুনিক CRISPR প্রযুক্তি জেনেটিক রোগ নিরাময়ের নতুন দিগন্ত খুলেছে।',
        reflectionQuestion: 'Why must antibiotic courses be completed even after symptoms fade?',
        reflectionAnswer:
          'Stopping early leaves behind the toughest partially resistant bacteria, breeding drug-resistant strains.',
      },
    ],
  },
  {
    id: 'book-algorithms-structures',
    title: 'Algorithms & Data Structures Illuminated',
    titleBn: 'অ্যালগরিদম ও ডেটা স্ট্রাকচারের সহজপাঠ',
    authorOrOrigin: 'Cormen, Bhargava · Computer Science',
    era: 'Contemporary CS',
    category: 'cs-ai',
    storeId: 'applied',
    subjectId: 'computer-science',
    ageBand: 'All Ages',
    coverColorHex: '#1e293b',
    readingMinutes: 26,
    synopsis:
      'Master binary search, sorting, hash tables, graphs, recursion, and why choosing the right data structure turns hours into milliseconds.',
    synopsisBn:
      'বাইনারি সার্চ, সর্টিং, হ্যাশ টেবিল ও গ্রাফ—সঠিক অ্যালগরিদম কীভাবে ঘণ্টার হিসাবকে মিলিসেকেন্ডে নামিয়ে আনে।',
    coreThesis:
      'Smart problem representation cuts computational work exponentially compared to brute-force checking.',
    coreThesisBn:
      'সমস্যাকে সঠিক ডেটা স্ট্রাকচারে সাজালে কম্পিউটারের কাজের সময় বহুগুণ কমে আসে।',
    keyTakeaways: [
      'Big-O notation measures how runtime scales as data grows massive.',
      'Divide-and-conquer cuts problems in half recursively (O(n log n)).',
      'Graphs model maps, social networks, and internet routing cleanly.',
    ],
    keyTakeawaysBn: [
      'Big-O নোটেশন দেখায় ডেটা বাড়লে প্রোগ্রামের সময় কত দ্রুত বাড়ে।',
      'প্রতি ধাপে সমস্যাকে অর্ধেক করলে অনুসন্ধান অবিশ্বাস্য দ্রুত হয়।',
      'গ্রাফ অ্যালগরিদম ম্যাপ, নেটওয়ার্ক ও রুট খুঁজে বের করতে ব্যবহৃত হয়।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Binary Search & Growth Rates (Big-O)',
        titleBn: 'বাইনারি সার্চ ও গতি-বিশ্লেষণ',
        keyPrinciple: 'Halving sorted search space shrinks billion-item lookups to ~30 steps.',
        levels: {
          explorer:
            'If you guess a secret number between 1 and 100 by always picking the middle number, you can ALWAYS find it in at most 7 guesses!',
          student:
            'Linear search takes O(n) steps while binary search takes O(log₂ n). Across 4 billion names, that is the difference between 4 billion checks and just 32 checks.',
          mastery:
            'Amortized analysis and Master Theorem recurrences T(n) = aT(n/b) + f(n) rigorously classify recursive asymptotic bounds.',
        },
        summaryBn:
          'সাজানো তালিকায় মাঝখান থেকে খুঁজতে থাকলে (বাইনারি সার্চ) কোটি কোটি তথ্যের মধ্য থেকেও মাত্র কয়েক ধাপে উত্তর পাওয়া যায়।',
        reflectionQuestion: 'What single precondition is mandatory before binary search works?',
        reflectionAnswer: 'The collection must already be sorted in order.',
      },
      {
        chapterNumber: 2,
        title: 'Arrays, Linked Lists & Hash Tables',
        titleBn: 'অ্যারে, লিংকড লিস্ট ও হ্যাশ টেবিল',
        keyPrinciple: 'Every data structure trades memory layout against lookup or insertion speed.',
        levels: {
          explorer:
            'An array is like numbered movie theater seats side by side; a hash table is like a magic coat-check ticket that jumps straight to your jacket.',
          student:
            'Arrays allow O(1) index access; linked lists allow O(1) mid-chain insertion given a pointer; hash maps achieve O(1) average key lookup via hash functions.',
          mastery:
            'Cache locality favors contiguous arrays over pointer-chasing structures on modern CPU memory hierarchies despite equal asymptotic bounds.',
        },
        summaryBn:
          'অ্যারে পাশাপাশি ঘর ব্যবহার করে আর হ্যাশ টেবিল কী-ভিত্তিক সরাসরি ঠিকানা বের করে মুহূর্তেই ডেটা খুঁজে দেয়।',
        reflectionQuestion: 'How do hash tables handle two keys mapping to the same slot?',
        reflectionAnswer:
          'Through collision resolution strategies like separate chaining (bucket lists) or open addressing.',
      },
      {
        chapterNumber: 3,
        title: 'Recursion, Merge Sort & Trees',
        titleBn: 'রিকার্সন, মার্জ সর্ট ও ট্রি স্ট্রাকচার',
        keyPrinciple: 'Solve a big problem by solving smaller self-similar versions and merging results.',
        levels: {
          explorer:
            'Sorting 1,000 shuffled cards by splitting them in half again and again until you hold 1-card piles, then zipping sorted piles back together!',
          student:
            'Every recursive function needs a base case to stop and a recursive step shrinking toward it. Balanced binary search trees maintain O(log n) search and insert.',
          mastery:
            'B-trees optimize disk block reads inside relational databases, minimizing I/O depth across terabytes of indexed rows.',
        },
        summaryBn:
          'বড় সমস্যাকে ছোট ছোট একই রকম অংশে ভেঙে সমাধান করে আবার জুড়ে দেওয়ার নামই ডিভাইড অ্যান্ড কনকোয়ার।',
        reflectionQuestion: 'What happens if a recursive function forgets its base case?',
        reflectionAnswer:
          'It calls itself endlessly until the call stack overflows and crashes the program.',
      },
      {
        chapterNumber: 4,
        title: 'Graphs, Dijkstra & Dynamic Programming',
        titleBn: 'গ্রাফ, ডাইকস্ট্রা ও ডায়নামিক প্রোগ্রামিং',
        keyPrinciple: 'Cache overlapping subproblems and traverse networks systematically.',
        levels: {
          explorer:
            'Finding the shortest bus route on a city map or avoiding repeating homework calculations you already solved five minutes ago!',
          student:
            'BFS finds shortest unweighted hops; Dijkstra finds minimum weighted travel time; dynamic programming stores subproblem results to avoid redundant recursion.',
          mastery:
            'A* heuristics, Bellman–Ford negative-cycle detection, and NP-completeness boundaries define modern routing, scheduling, and compiler optimization.',
        },
        summaryBn:
          'ম্যাপে সবচেয়ে ছোট রাস্তা বের করতে BFS ও ডাইকস্ট্রা অ্যালগরিদম এবং পুনরাবৃত্ত হিসাব বাঁচাতে ডায়নামিক প্রোগ্রামিং ব্যবহৃত হয়।',
        reflectionQuestion: 'Why does memoization turn exponential Fibonacci recursion into linear time?',
        reflectionAnswer:
          'Because each F(k) is computed only once and cached instead of recomputed thousands of times.',
      },
    ],
  },
  {
    id: 'book-computer-architecture',
    title: 'How Computers Think: Bits to OS',
    titleBn: 'কম্পিউটার কীভাবে কাজ করে: বিট থেকে অপারেটিং সিস্টেম',
    authorOrOrigin: 'Nisan & Schocken / Systems Engineering',
    era: 'Modern Computing',
    category: 'cs-ai',
    storeId: 'applied',
    subjectId: 'computer-science',
    ageBand: 'Ages 13–18',
    coverColorHex: '#334155',
    readingMinutes: 23,
    synopsis:
      'Trace how simple on/off electrical switches build logic gates, CPUs, memory hierarchies, operating systems, and the global internet.',
    synopsisBn:
      'কীভাবে সাধারণ অন/অফ সুইচ থেকে লজিক গেট, প্রসেসর, মেমোরি, অপারেটিং সিস্টেম ও ইন্টারনেট গড়ে উঠেছে তার পূর্ণাঙ্গ যাত্রা।',
    coreThesis:
      'Layered abstraction hides hardware complexity so silicon switches can run high-level apps safely.',
    coreThesisBn:
      'স্তরের পর স্তর অ্যাবস্ট্রাকশনের কারণেই সাধারণ সিলিকন চিপ মানুষের ভাষায় লেখা অ্যাপ চালাতে পারে।',
    keyTakeaways: [
      'NAND gates alone can construct every digital circuit.',
      'The fetch-decode-execute cycle drives every CPU instruction.',
      'Operating systems isolate processes, schedule CPU time, and virtualize memory.',
    ],
    keyTakeawaysBn: [
      'কেবলমাত্র মৌলিক লজিক গেট দিয়েই পুরো কম্পিউটারের সার্কিট তৈরি সম্ভব।',
      'সিপিইউ প্রতি সেকেন্ডে বিলিয়ন বার নির্দেশনা আনা-বোঝা-সম্পাদনের চক্র চালায়।',
      'অপারেটিং সিস্টেম মেমোরি ও প্রোগ্রামগুলোকে নিরাপদভাবে নিয়ন্ত্রণ করে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Binary Numbers & Logic Gates',
        titleBn: 'বাইনারি সংখ্যা ও লজিক গেট',
        keyPrinciple: 'Boolean logic (AND, OR, NOT) turns voltage into arithmetic.',
        levels: {
          explorer:
            'Computers only have two fingers: 0 (light off) and 1 (light on). Combining millions of tiny switches lets them draw pictures, play music, and add giant numbers!',
          student:
            'Half-adders and full-adders wire XOR and AND gates together to add binary numbers, while flip-flop circuits remember a single bit of state over clock cycles.',
          mastery:
            'Universal NAND/NOR completeness and CMOS transistor switching power budgets dictate modern processor clock frequencies.',
        },
        summaryBn:
          '০ আর ১—এই দুটি সংকেত ও AND, OR, NOT লজিক গেটের সমন্বয়েই কম্পিউটার সব গাণিতিক হিসাব ও ছবি তৈরি করে।',
        reflectionQuestion: 'How many distinct values can 8 bits (1 byte) represent?',
        reflectionAnswer: '2⁸ = 256 values (from 0 to 255).',
      },
      {
        chapterNumber: 2,
        title: 'Inside the CPU & Memory Hierarchy',
        titleBn: 'সিপিইউ এবং মেমোরি স্তরবিন্যাস',
        keyPrinciple: 'Fast small caches sit beside the CPU to feed hungry instruction pipelines.',
        levels: {
          explorer:
            'Registers are like sticky notes in your hand, RAM is your study desk, and the hard drive is the big bookshelf across the room.',
          student:
            'The Control Unit fetches instructions from RAM using the Program Counter, decodes opcodes, runs the ALU, and writes outputs back.',
          mastery:
            'Superscalar out-of-order execution, branch prediction, and L1/L2/L3 cache coherence bridge the processor–memory speed gap.',
        },
        summaryBn:
          'ক্যাশ মেমোরি হাতের কাছের ছোট টেবিলের মতো, RAM মাঝারি ডেস্ক, আর হার্ডড্রাইভ হলো ঘরের বড় বইয়ের আলমারি।',
        reflectionQuestion: 'Why don’t computers simply build 1 terabyte of L1 cache?',
        reflectionAnswer:
          'Ultra-fast SRAM transistors consume vastly more silicon area and power per bit than DRAM or flash storage.',
      },
      {
        chapterNumber: 3,
        title: 'Operating Systems & Concurrency',
        titleBn: 'অপারেটিং সিস্টেম ও মাল্টিটাস্কিং',
        keyPrinciple: 'The kernel virtualizes CPU time and protects every app inside its own memory space.',
        levels: {
          explorer:
            'An operating system is like a school principal making sure dozens of classes share rooms fairly without crashing into each other.',
          student:
            'Context switching slices milliseconds between processes, while virtual memory maps private app addresses cleanly onto physical RAM.',
          mastery:
            'Mutexes, semaphores, and lock-free atomic compare-and-swap primitives prevent race conditions and deadlocks in multi-core systems.',
        },
        summaryBn:
          'অপারেটিং সিস্টেম প্রতিটি অ্যাপকে আলাদা নিরাপদ জায়গা দেয় এবং সিপিইউ-র সময় ভাগ করে একসাথে অনেক কাজ চালায়।',
        reflectionQuestion: 'What is a deadlock between two concurrent programs?',
        reflectionAnswer:
          'When Program A waits for a lock held by Program B while Program B simultaneously waits for a lock held by Program A.',
      },
      {
        chapterNumber: 4,
        title: 'Packets, DNS & How the Internet Moves Data',
        titleBn: 'প্যাকেট, DNS ও ইন্টারনেটের গঠন',
        keyPrinciple: 'Messages break into labeled packets routed resiliently across global networks.',
        levels: {
          explorer:
            'Sending a video online works like mailing a giant puzzle in 1,000 small numbered envelopes and snapping them back together when they arrive!',
          student:
            'DNS translates domain names to IP addresses, TCP checks for lost packets and reorders them, and TLS encrypts your privacy in transit.',
          mastery:
            'BGP autonomous-system routing, HTTP/3 QUIC multiplexing, and congestion control keep global packet delivery resilient under failures.',
        },
        summaryBn:
          'ইন্টারনেটে বড় তথ্য ছোট ছোট প্যাকেটে ভাগ হয়ে বিভিন্ন রাউটার ঘুরে নিরাপদে আপনার ডিভাইসে পৌঁছে আবার জোড়া লাগে।',
        reflectionQuestion: 'What job does DNS perform every time you type a website name?',
        reflectionAnswer:
          'It acts like the internet’s phonebook, translating human domain names into numeric IP addresses.',
      },
    ],
  },
  {
    id: 'book-machine-intelligence',
    title: 'Foundations of Machine Intelligence & AI',
    titleBn: 'কৃত্রিম বুদ্ধিমত্তা ও মেশিন লার্নিংয়ের ভিত্তি',
    authorOrOrigin: 'Russell, Norvig & Deep Learning Archive',
    era: '1950–Modern · Artificial Intelligence',
    category: 'cs-ai',
    storeId: 'applied',
    subjectId: 'computer-science',
    ageBand: 'Ages 13–18',
    coverColorHex: '#3730a3',
    readingMinutes: 25,
    synopsis:
      'From Turing’s question and linear regression to gradient descent, neural networks, transformers, and responsible AI alignment.',
    synopsisBn:
      'টুরিং পরীক্ষা থেকে রিগ্রেশন, নিউরাল নেটওয়ার্ক, ট্রান্সফরমার ও নিরাপদ এআই-এর গাণিতিক কার্যপদ্ধতি।',
    coreThesis:
      'Modern AI learns statistical patterns by minimizing error across massive parameterized mathematical functions.',
    coreThesisBn:
      'আধুনিক এআই বিশাল ডেটা থেকে গাণিতিক ভুল কমিয়ে এনে প্যাটার্ন ও সম্পর্ক শিখে নেয়।',
    keyTakeaways: [
      'Supervised learning maps labeled examples; reinforcement learning optimizes reward.',
      'Gradient descent iteratively tunes weights downhill along loss curves.',
      'Data quality, generalization, and fairness matter as much as model size.',
    ],
    keyTakeawaysBn: [
      'সুপারভাইজড লার্নিং উদাহরণ থেকে শেখে আর রিইনফোর্সমেন্ট লার্নিং পুরস্কার-ভিত্তিক পরীক্ষা থেকে শেখে।',
      'গ্রেডিয়েন্ট ডিসেন্ট ধাপে ধাপে মডেলের ভুল সর্বনিম্ন পর্যায়ে নিয়ে আসে।',
      'ডেটার মান ও পক্ষপাতহীনতা সঠিক এআই গড়ার প্রধান শর্ত।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Rules vs. Learning from Examples',
        titleBn: 'নিয়ম-নির্ভর প্রোগ্রাম বনাম উদাহরণ থেকে শেখা',
        keyPrinciple: 'Machine learning infers patterns directly from data instead of hand-coded if-else trees.',
        levels: {
          explorer:
            'Instead of telling a computer “cats have pointy ears,” you show it 1,000 cat photos and 1,000 dog photos until it spots the difference itself.',
          student:
            'Classical programs combine Rules + Data → Answers. Machine learning flips that: Data + Answers → Learned Rules (model weights).',
          mastery:
            'Bias–variance tradeoffs dictate model capacity: underfitting misses signal, while overfitting memorizes training noise.',
        },
        summaryBn:
          'হাতে লিখে নিয়ম শেখানোর বদলে হাজার হাজার উদাহরণ দেখিয়ে কম্পিউটারকে নিজে থেকে প্যাটার্ন চেনার সক্ষমতা দেওয়াই মেশিন লার্নিং।',
        reflectionQuestion: 'Why must models always be evaluated on a held-out test set never seen during training?',
        reflectionAnswer:
          'To measure genuine generalization rather than rote memorization of training examples.',
      },
      {
        chapterNumber: 2,
        title: 'Loss Functions & Gradient Descent',
        titleBn: 'লস ফাংশন ও গ্রেডিয়েন্ট ডিসেন্ট',
        keyPrinciple: 'Compute prediction error and step weights opposite the steepest slope.',
        levels: {
          explorer:
            'Imagine hiking blindfolded down a misty mountain by feeling which way the ground slopes down under your boots and taking careful steps.',
          student:
            'Loss functions score how wrong predictions are; calculus computes partial derivatives telling every parameter whether to nudge up or down.',
          mastery:
            'Stochastic gradient descent with momentum and Adam adaptive moment scaling efficiently navigates non-convex high-dimensional loss landscapes.',
        },
        summaryBn:
          'ভুল পরিমাপ করে (Loss) ক্যালকুলাসের ঢাল ধরে ধাপে ধাপে নিচে নামার মাধ্যমে মডেল নিজেকে নিখুঁত করে।',
        reflectionQuestion: 'What happens if the learning rate step size is set way too high?',
        reflectionAnswer:
          'Updates overshoot the valley floor and oscillate wildly instead of converging.',
      },
      {
        chapterNumber: 3,
        title: 'Neural Networks & Attention',
        titleBn: 'নিউরাল নেটওয়ার্ক ও অ্যাটেনশন মেকানিজম',
        keyPrinciple: 'Stacked nonlinear layers compose simple features into rich representations.',
        levels: {
          explorer:
            'Early layers notice edges, middle layers notice eyes and wheels, and top layers recognize whole faces or bicycles!',
          student:
            'Backpropagation applies the chain rule backward through layers. Self-attention lets sequence models weigh how every word relates to every other word in context.',
          mastery:
            'Scaled dot-product attention Softmax(QKᵀ/√d)V enables parallelizable long-range contextual representations across tokens.',
        },
        summaryBn:
          'বহুস্তরীয় নিউরাল নেটওয়ার্ক প্রথমে ছোট রেখা বা শব্দাংশ এবং ওপরের স্তরে পূর্ণাঙ্গ ছবি বা অর্থ বুঝতে পারে।',
        reflectionQuestion: 'Why do neural networks need nonlinear activation functions like ReLU?',
        reflectionAnswer:
          'Without nonlinearity, stacking linear matrix multiplications collapses mathematically into a single linear layer.',
      },
      {
        chapterNumber: 4,
        title: 'Ethics, Verification & Human Judgment',
        titleBn: 'নৈতিকতা, যাচাই ও মানবিক বিচারবুদ্ধি',
        keyPrinciple: 'Statistical confidence is not human truth; critical verification remains essential.',
        levels: {
          explorer:
            'Always double-check important science or school facts from trusted books because computers sometimes guess smoothly even when unsure.',
          student:
            'Biased historical datasets amplify unfairness unless audited; transparency and human accountability protect healthcare, courts, and education.',
          mastery:
            'Calibration, provenance tracking, adversarial robustness, and interpretable uncertainty bounds are core requirements for safety-critical deployment.',
        },
        summaryBn:
          'কম্পিউটারের পূর্বাভাস ভুল বা পক্ষপাতদুষ্ট হতে পারে; তাই গুরুত্বপূর্ণ সিদ্ধান্তে মানবিক যাচাই ও নৈতিক দায়বদ্ধতা অপরিহার্য।',
        reflectionQuestion: 'What causes an AI system to sound confident while stating an inaccurate claim?',
        reflectionAnswer:
          'Probabilistic next-token generation optimizes fluent likelihood rather than verified ground-truth reasoning unless grounded in checked sources.',
      },
    ],
  },
  {
    id: 'book-cryptography-trust',
    title: 'Cryptography & Digital Trust',
    titleBn: 'ক্রিপ্টোগ্রাফি ও ডিজিটাল নিরাপত্তা',
    authorOrOrigin: 'Diffie, Hellman, Rivest · Security Compendium',
    era: 'Ancient Ciphers–Post-Quantum',
    category: 'cs-ai',
    storeId: 'applied',
    subjectId: 'computer-science',
    ageBand: 'Ages 13–18',
    coverColorHex: '#1f2937',
    readingMinutes: 20,
    synopsis:
      'From Caesar shifts and Enigma to public-key math, digital signatures, hashing, and how HTTPS shields online privacy.',
    synopsisBn:
      'সিজার সাইফার থেকে পাবলিক-কি গণিত, হ্যাশিং ও ডিজিটাল স্বাক্ষর—কীভাবে ইন্টারনেটে আপনার তথ্য সুরক্ষিত থাকে।',
    coreThesis:
      'Asymmetric number theory lets strangers communicate secretly over public wires without sharing a password beforehand.',
    coreThesisBn:
      'একমুখী গাণিতিক সমস্যার সাহায্যে অপরিচিত দুটি পক্ষও নিরাপদ গোপন চাবি বিনিময় করতে পারে।',
    keyTakeaways: [
      'Security must rest on secret keys, never secret algorithms (Kerckhoffs’s principle).',
      'Cryptographic hashes verify file integrity with irreversible fingerprints.',
      'Public keys lock messages; private keys unlock and sign them.',
    ],
    keyTakeawaysBn: [
      'নিরাপত্তা নির্ভর করে গোপন চাবির (Key) ওপর, অ্যালগরিদম গোপন রাখার ওপর নয়।',
      'হ্যাশ ফাংশন তথ্যের একমুখী ডিজিটাল আঙুলের ছাপ তৈরি করে।',
      'পাবলিক কি তথ্য তালাবদ্ধ করে আর প্রাইভেট কি তা খুলে দেয় ও স্বাক্ষর যাচাই করে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'From Caesar Ciphers to One-Way Math',
        titleBn: 'প্রাচীন সংকেত থেকে একমুখী গণিত',
        keyPrinciple: 'Simple substitutions break via letter frequency; modern ciphers diffuse patterns.',
        levels: {
          explorer:
            'Shifting A→D and B→E is fun for secret club notes, but detectives break it fast by counting which letters appear most often like E or অ/আ.',
          student:
            'Symmetric ciphers like AES scramble blocks in multiple rounds using confusion and diffusion so changing 1 bit flips roughly half of all ciphertext bits.',
          mastery:
            'AES-256 SubBytes, ShiftRows, MixColumns over GF(2⁸) resists linear and differential cryptanalysis.',
        },
        summaryBn:
          'অক্ষর পাল্টে দেওয়া সহজ সংকেত অক্ষরের ব্যবহারের হার গুনেই ভাঙা যায়, তাই আধুনিক এনক্রিপশন বহুমাত্রিক জটিল ধাপ ব্যবহার করে।',
        reflectionQuestion: 'Why is frequency analysis powerless against modern AES encryption?',
        reflectionAnswer:
          'Modern block ciphers flatten letter statistics completely through multi-round diffusion across entire bit blocks.',
      },
      {
        chapterNumber: 2,
        title: 'Public-Key Exchange: Mixing Paint Colors',
        titleBn: 'পাবলিক-কি আদান-প্রদান',
        keyPrinciple: 'Easy to multiply huge primes forward, practically impossible to factor backward.',
        levels: {
          explorer:
            'Imagine mixing yellow paint with a secret color—anyone watching sees the mixed cup, yet cannot un-mix the paint to discover your secret color!',
          student:
            'Diffie–Hellman and RSA rely on modular exponentiation where computing gᵃ mod p is instantaneous, but recovering the secret exponent a takes millennia.',
          mastery:
            'Elliptic curve cryptography (ECDH, Ed25519) achieves equivalent discrete-logarithm hardness using far shorter keys.',
        },
        summaryBn:
          'দুটি বড় মৌলিক সংখ্যা গুণ করা মুহূর্তের কাজ, কিন্তু গুণফল দেখে মূল সংখ্যা দুটি আলাদা করা বর্তমান কম্পিউটারে প্রায় অসম্ভব।',
        reflectionQuestion: 'Why do websites use public keys to share a temporary AES session key instead of encrypting everything with RSA?',
        reflectionAnswer:
          'Symmetric AES is thousands of times faster for streaming megabytes of web data.',
      },
      {
        chapterNumber: 3,
        title: 'Hashes & Digital Signatures',
        titleBn: 'হ্যাশ ও ডিজিটাল স্বাক্ষর',
        keyPrinciple: 'Hashes prove nothing changed; digital signatures prove who authored it.',
        levels: {
          explorer:
            'A hash is like a thumbprint for a giant book—change even one comma inside the book, and the entire thumbprint changes completely!',
          student:
            'Websites never store plain passwords—only salted cryptographic hashes (like Argon2 or SHA-256), while digital certificates prevent fake banking pages.',
          mastery:
            'Preimage, second-preimage, and collision resistance formalize secure digest functions underlying code signing and Merkle trees.',
        },
        summaryBn:
          'হ্যাশ তথ্যের শুদ্ধতা যাচাই করে, আর ডিজিটাল স্বাক্ষর প্রমাণ করে তথ্যটি আসল উৎস থেকেই এসেছে।',
        reflectionQuestion: 'Why do login systems add a unique random “salt” before hashing each password?',
        reflectionAnswer:
          'To ensure two identical passwords produce totally different hashes and defeat precomputed rainbow tables.',
      },
      {
        chapterNumber: 4,
        title: 'Zero-Trust Mindset & Safe Habits',
        titleBn: 'সাইবার নিরাপত্তা ও সচেতনতা',
        keyPrinciple: 'Most breaches target human trust rather than mathematical ciphers.',
        levels: {
          explorer:
            'Never share your secret password or one-time SMS code with strangers online, even if a message pretends to be urgent.',
          student:
            'Multi-factor authentication, password managers, and checking exact HTTPS domain spellings stop over 90% of real-world phishing attacks.',
          mastery:
            'Zero-trust architecture authenticates and authorizes every service call continuously rather than trusting an internal network perimeter.',
        },
        summaryBn:
          'শক্তিশালী পাসওয়ার্ড, টু-ফ্যাক্টর অথেনটিকেশন ও ফিশিং লিংক চেনার অভ্যাস সবচেয়ে বড় ডিজিটাল সুরক্ষা দেয়।',
        reflectionQuestion: 'Why is reusing one strong password across multiple websites dangerous?',
        reflectionAnswer:
          'If one minor site suffers a breach, attackers automate credential stuffing to unlock your email and bank accounts.',
      },
    ],
  },
  {
    id: 'book-software-craft',
    title: 'Clean Code & Software Architecture',
    titleBn: 'ক্লিন কোড ও সফটওয়্যার আর্কিটেকচার',
    authorOrOrigin: 'Martin, Brooks · Engineering Craft',
    era: 'Modern Engineering',
    category: 'cs-ai',
    storeId: 'applied',
    subjectId: 'engineering',
    ageBand: 'Ages 13–18',
    coverColorHex: '#0f172a',
    readingMinutes: 22,
    synopsis:
      'How clarity, modularity, automated testing, and thoughtful interfaces keep real software reliable as teams and features grow.',
    synopsisBn:
      'পরিচ্ছন্ন নামকরণ, মডিউলার ডিজাইন, অটোমেটেড টেস্টিং ও সহজ কাঠামো কীভাবে সফটওয়্যারকে দীর্ঘজীবী ও ত্রুটিমুক্ত রাখে।',
    coreThesis:
      'Code is read far more often than it is written; simplicity and clear boundaries prevent fragile bugs.',
    coreThesisBn:
      'কোড লেখার চেয়ে পড়া হয় অনেক বেশি; তাই স্পষ্টতা ও সহজ সীমানা নির্ধারণই শক্তিশালী সফটওয়্যারের মূল চাবিকাঠি।',
    keyTakeaways: [
      'Name variables and functions after what they represent clearly.',
      'Separate pure business logic from databases and UI views.',
      'Tests act as executable documentation that catches regressions early.',
    ],
    keyTakeawaysBn: [
      'ভেরিয়েবল ও ফাংশনের নাম অর্থবহ রাখলে কোড পড়া সহজ হয়।',
      'মূল যুক্তি, ডেটাবেস ও ইউজার ইন্টারফেস আলাদা রাখুন।',
      'অটোমেটেড টেস্ট নতুন পরিবর্তনে পুরোনো অংশ ভেঙে যাওয়া আটকায়।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Naming & Readable Functions',
        titleBn: 'অর্থবহ নাম ও সহজ ফাংশন',
        keyPrinciple: 'Good code explains its intent without requiring deciphering.',
        levels: {
          explorer:
            'Writing clear code is like labeling jars in a kitchen: “Sugar” and “Salt” keep mistakes away far better than “Jar A” and “Jar B”!',
          student:
            'Keep functions focused on one cohesive responsibility, return early on edge errors, and avoid deeply nested pyramid logic.',
          mastery:
            'Type systems encode domain invariants at compile time, turning invalid state transitions into unrepresentable types.',
        },
        summaryBn:
          'ছোট ও একক-দায়িত্বশীল ফাংশন এবং স্পষ্ট নামকরণ কোডে বাগ তৈরি হওয়ার সম্ভাবনা অর্ধেক কমিয়ে দেয়।',
        reflectionQuestion: 'Why are clever one-liner tricks often worse than five clear lines of code?',
        reflectionAnswer:
          'Future teammates (or yourself six months later) spend extra time decoding clever tricks and introduce bugs during edits.',
      },
      {
        chapterNumber: 2,
        title: 'Modular Boundaries & State',
        titleBn: 'মডিউল ও স্টেট ব্যবস্থাপনা',
        keyPrinciple: 'Minimize shared mutable state and isolate external dependencies.',
        levels: {
          explorer:
            'Build apps like snapping together Lego rooms—changing the kitchen lamp should never break the living-room TV!',
          student:
            'Isolate pure calculations from network calls and storage side effects so logic stays predictable and effortless to test.',
          mastery:
            'Hexagonal architecture points all dependencies inward toward core domain rules rather than framework infrastructure.',
        },
        summaryBn:
          'প্রতিটি অংশ স্বাধীন রাখলে একটি ফিচার বদলাতে গিয়ে পুরো অ্যাপ ভেঙে পড়ার ভয় থাকে না।',
        reflectionQuestion: 'What problem does “tight coupling” create in large projects?',
        reflectionAnswer:
          'Changing one small detail cascades unintended breakages across unrelated files.',
      },
      {
        chapterNumber: 3,
        title: 'Testing, Debugging & Version Control',
        titleBn: 'টেস্টিং, ডিবাগিং ও গিট',
        keyPrinciple: 'Reproduce bugs deterministically, write a test, then fix the root cause.',
        levels: {
          explorer:
            'Testing code works like test-flying a paper airplane indoors before taking it outside—small fixes make it soar smoothly!',
          student:
            'Git commits record logical snapshots so mistakes roll back cleanly; unit and integration tests guard critical calculations.',
          mastery:
            'Property-based testing and CI pipelines enforce static analysis, contract schemas, and regression coverage automatically.',
        },
        summaryBn:
          'ত্রুটি সারাতে অনুমান না করে প্রথমে বাগটি পুনরুৎপাদন করুন, কারণ বুঝুন এবং গিট ইতিহাসে পরিষ্কারভাবে সংরক্ষণ করুন।',
        reflectionQuestion: 'Why is reproducing a bug reliably half the solution?',
        reflectionAnswer:
          'Deterministic reproduction isolates exact inputs and lets you verify with certainty that your fix works.',
      },
      {
        chapterNumber: 4,
        title: 'Performance, Caching & Scalability',
        titleBn: 'গতি, ক্যাশিং ও স্কেলেবিলিটি',
        keyPrinciple: 'Measure bottlenecks with real profiling before optimizing prematurely.',
        levels: {
          explorer:
            'Keep frequently used books right on your desk instead of walking to the basement storage room every five minutes!',
          student:
            'Database indexes, pagination, and removing unnecessary loops turn sluggish pages into snappy experiences.',
          mastery:
            'Identify Amdahl’s Law serial bottlenecks, p99 tail latencies, and backpressure queues across distributed backends.',
        },
        summaryBn:
          'অযথা জটিল অপ্টিমাইজেশনের আগে প্রোফাইল করে দেখুন ঠিক কোথায় সময় বেশি লাগছে, তারপর সমাধান করুন।',
        reflectionQuestion: 'What did Donald Knuth mean by “premature optimization is the root of all evil”?',
        reflectionAnswer:
          'Overcomplicating rare code paths early wastes effort and introduces bugs without improving real user latency.',
      },
    ],
  },
  {
    id: 'book-probability-stats',
    title: 'The Art of Probability & Statistics',
    titleBn: 'সম্ভাবনা ও পরিসংখ্যানের যুক্তি',
    authorOrOrigin: 'Bayes, Fisher, Kahneman · Quantitative Reasoning',
    era: '18th Century–Modern',
    category: 'cs-ai',
    storeId: 'applied',
    subjectId: 'statistics',
    ageBand: 'All Ages',
    coverColorHex: '#0c4a6e',
    readingMinutes: 23,
    synopsis:
      'Think clearly under uncertainty: Bayes’ theorem, correlation vs. causation, averages that mislead, and smart data literacy.',
    synopsisBn:
      'অনিশ্চয়তার মধ্যে সঠিক সিদ্ধান্ত নেওয়ার গণিত: বেইজ উপপাদ্য, গড় ও মধ্যকের পার্থক্য এবং পরিসংখ্যানের বিভ্রান্তি থেকে বাঁচার উপায়।',
    coreThesis:
      'Updating prior beliefs proportionally with real evidence prevents costly cognitive illusions.',
    coreThesisBn:
      'নতুন প্রমাণের ভিত্তিতে পূর্বধারণা হালনাগাদ করাই পরিসংখ্যান ও যৌক্তিক সিদ্ধান্তের মূল ভিত্তি।',
    keyTakeaways: [
      'Median protects against extreme outliers better than mean.',
      'Correlation shows pattern together; controlled experiments test causation.',
      'Base rates matter critically when interpreting rare medical or security tests.',
    ],
    keyTakeawaysBn: [
      'চরম মান (Outlier) থাকলে গড়ের চেয়ে মধ্যক (Median) বেশি নির্ভরযোগ্য।',
      'দুটি বিষয় একসাথে ঘটা মানেই একটির কারণে অন্যটি ঘটেছে তা নয়।',
      'বিরল ঘটনার পরীক্ষা মূল্যায়নে বেস-রেট (Base rate) বিবেচনা করা জরুরি।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Mean, Median & Misleading Averages',
        titleBn: 'গড়, মধ্যক ও বিভ্রান্তিকর সংখ্যা',
        keyPrinciple: 'Averages without spread (variance) hide half the story.',
        levels: {
          explorer:
            'If nine kids have 2 candies and one kid brings 100 candies, the “average” says 11.8 candies even though almost everyone holds just 2!',
          student:
            'Use median and interquartile range for skewed data like incomes or house prices, reserving mean and standard deviation for symmetric distributions.',
          mastery:
            'Heavy-tailed power laws invalidate Gaussian confidence assumptions; robust estimators resist extreme tail shocks.',
        },
        summaryBn:
          'একটি দলের আয় বা নম্বর অসম হলে কেবল গড় না দেখে মধ্যক (Median) ও বিস্তার দেখে আসল চিত্র বুঝতে হয়।',
        reflectionQuestion: 'Why do housing reports quote median home price instead of mean price?',
        reflectionAnswer:
          'A handful of ultra-expensive mansions pull the mean sharply upward away from what typical families actually pay.',
      },
      {
        chapterNumber: 2,
        title: 'Bayes’ Theorem & Updating Evidence',
        titleBn: 'বেইজ উপপাদ্য ও প্রমাণ মূল্যায়ন',
        keyPrinciple: 'Posterior belief balances prior odds against diagnostic likelihood.',
        levels: {
          explorer:
            'If you hear hooves in Dhaka, think horses—not zebras—unless you are standing right inside a zoo!',
          student:
            'P(A|B) = P(B|A)P(A) / P(B). Even a 99%-accurate test for a rare condition produces many false alarms if the base rate is tiny.',
          mastery:
            'Bayesian inference continuously updates parameter posteriors, outperforming naive threshold cutoffs in noisy sensor fusion.',
        },
        summaryBn:
          'কোনো পরীক্ষায় পজিটিভ ফল এলেই নিশ্চিত হওয়ার আগে ওই ঘটনাটি সাধারণত কত ঘনঘন ঘটে (বেস-রেট) তা হিসাব করতে হয়।',
        reflectionQuestion: 'How does neglecting the base rate lead people to misread medical test alerts?',
        reflectionAnswer:
          'When a condition affects 1 in 1,000 people, even a 1% false-positive rate generates ~10 false alarms for every 1 true case.',
      },
      {
        chapterNumber: 3,
        title: 'Normal Curves & Law of Large Numbers',
        titleBn: 'পরিমিত বণ্টন ও বৃহৎ সংখ্যার সূত্র',
        keyPrinciple: 'Random fluctuations average out predictably as sample size grows.',
        levels: {
          explorer:
            'Flipping a coin 4 times might easily give 3 heads, but flipping it 1,000 times lands remarkably close to 500 heads and 500 tails!',
          student:
            'The Central Limit Theorem explains why sample means cluster into a bell curve even when underlying individual traits are skewed.',
          mastery:
            'Standard error shrinks proportionally to 1/√n—quadrupling sample size is required simply to halve uncertainty.',
        },
        summaryBn:
          'অল্প নমুনায় কাকতালীয় ফলাফল আসতে পারে, কিন্তু নমুনার সংখ্যা যত বাড়ে গড় মান তত প্রকৃত সত্যের কাছাকাছি স্থির হয়।',
        reflectionQuestion: 'Why does a tiny 10-person survey swing wildly compared to a 1,000-person survey?',
        reflectionAnswer:
          'Small samples suffer much larger random sampling error (~1/√n).',
      },
      {
        chapterNumber: 4,
        title: 'Correlation, Causation & A/B Tests',
        titleBn: 'সহসম্পর্ক, কার্যকারণ ও পরীক্ষা-নিরীক্ষা',
        keyPrinciple: 'Random assignment isolates true cause from hidden confounding variables.',
        levels: {
          explorer:
            'Ice cream sales and sunburns rise together every July—ice cream doesn’t cause sunburn; hot sunny summer causes BOTH!',
          student:
            'Randomized controlled trials split comparable participants into treatment vs. control groups so any outcome difference traces back to the intervention.',
          mastery:
            'Directed acyclic graphs (DAGs) and instrumental variables detect collider bias and confounders in observational datasets.',
        },
        summaryBn:
          'গরমে আইসক্রিম বিক্রি আর রোদে পোড়া একসাথে বাড়ে; তাই একসাথে বাড়লেই একটিকে অন্যটির কারণ ভাবা ভুল।',
        reflectionQuestion: 'How does randomization eliminate hidden variables in clinical trials?',
        reflectionAnswer:
          'Random assignment balances known and unknown traits evenly across treatment and control groups on average.',
      },
    ],
  },
];
