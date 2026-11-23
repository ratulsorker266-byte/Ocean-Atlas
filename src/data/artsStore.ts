import { KnowledgeStore } from '../types/knowledge';

export const artsStore: KnowledgeStore = {
  id: 'arts',
  title: 'Arts, Humanities & Literature Store',
  tagline: 'History, Philosophy, Literature, Psychology, Linguistics, Fine Arts, Geography & Civics.',
  description:
    'Explore how civilizations rise, how human memory and reason work, how languages and stories evolve, and how geography and civic institutions shape everyday life.',
  imagePath: '/src/assets/images/store_arts_humanities_1795350513086.jpg',
  imageAlt: 'Scholarly textbook illustration of illuminated manuscript, architectural compass, and harmonic geometry',
  accentHex: '#B45309',
  accentTextClass: 'text-amber-700',
  accentBorderClass: 'border-amber-200',
  accentBgSoftClass: 'bg-amber-50',
  subjects: [
    {
      id: 'history',
      storeId: 'arts',
      name: 'World History & Civilizations',
      scopeSummary: 'Ancient river cradles, trade roads, printing revolution, industrial transformation, and modern history.',
      topics: [
        {
          id: 'hist-printing-trade',
          title: 'Trade Networks & The Printing Revolution',
          subtitle: 'How connected roads, maritime routes, and movable type scaled human knowledge.',
          readMinutes: 6,
          corePrinciple: 'Ideas scale across civilizations whenever transport and copying costs collapse.',
          formulaOrFramework: 'Silk Roads & Maritime Trade  →  Paper & Movable Type  →  Global Literacy',
          levels: {
            explorer:
              'Long ago, books had to be copied slowly by hand with ink! When printing presses arrived, one workshop made hundreds of books in a week—spreading science, maps, and stories to everyday families.',
            student:
              'Silk Roads and monsoon sea lanes carried papermaking, Hindu-Arabic numerals, and compasses across continents. Movable metal type cut copying costs dramatically, powering Renaissance scholarship and scientific verification.',
            mastery:
              'Polycentric print diffusion (East Asian ceramic/bronze type to European workshops) combined with print capitalism to standardize vernacular literacy and public spheres.',
          },
          keyTakeaways: [
            'Civilizations compounded inventions across interconnected Afro-Eurasian routes.',
            'Cheap book production accelerated peer-reviewed science.',
            'Primary artifacts reveal daily life beyond royal chronicles.',
          ],
          realWorldApplication: 'Comparing print with the modern web illuminates how publishing shifts reshape trust.',
          quiz: [
            {
              id: 'q-hist-1',
              prompt: 'Why did spreading Hindu-Arabic numerals accelerate commerce and science?',
              options: [
                'They looked artistic on coins',
                'Place-value notation with zero made arithmetic and bookkeeping vastly faster',
                'They banned written words',
                'They worked only on calendars',
              ],
              correctIndex: 1,
              explanation: 'Positional base-10 notation with zero simplified calculation and accounting.',
            },
          ],
        },
        {
          id: 'hist-industrial',
          title: 'The Industrial Revolutions & Modern Society',
          subtitle: 'From steam engines and railways to electricity, public schooling, and cities.',
          readMinutes: 6,
          corePrinciple: 'Replacing muscle power with fossil and electrical energy multiplied human productivity.',
          formulaOrFramework: 'Coal & Steam (1760s) → Steel & Electricity (1870s) → Computing & Networks (1970s+)',
          levels: {
            explorer:
              'For thousands of years, almost everything was pulled by horses, wind, or human hands. Then inventors built steam engines that pumped water, ran trains faster than galloping horses, and spun cotton cloth in factories—changing where families lived, worked, and went to school!',
            student:
              'The First Industrial Revolution mechanized textiles and transport with coal and steam; the Second introduced electricity, chemical fertilizers, and assembly lines. Urbanization surged alongside labor unions, public sanitation, and universal basic education.',
            mastery:
              'Economic historians examine why industrialization ignited first in regions with high wages, accessible coal, patent protection, and Atlantic commerce, alongside the asymmetric global ecological and colonial consequences of mechanized extraction.',
          },
          keyTakeaways: [
            'Energy density per worker drove dramatic rises in material output and life expectancy.',
            'Sanitation and vaccines mattered as much as factories in cutting urban mortality.',
            'Technological revolutions always reshape education and worker skills.',
          ],
          realWorldApplication:
            'Understanding past industrial transitions helps societies design fair clean-energy and digital skill transitions today.',
          quiz: [
            {
              id: 'q-hist-2',
              prompt: 'Which combination best characterizes the Second Industrial Revolution (late 1800s)?',
              options: [
                'Stone tools and bronze plows',
                'Electricity, steel, internal combustion, and telecommunications',
                'Papyrus scrolls and sailing galleys',
                'Pure handloom weaving',
              ],
              correctIndex: 1,
              explanation: 'Late-19th-century breakthroughs centered on electrical grids, Bessemer steel, chemistry, and telegraphs/telephones.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-hist-primary',
          subjectId: 'history',
          category: 'Analytical',
          question: 'How do historians distinguish primary from secondary sources—and why can a primary source still be biased?',
          shortAnswer: 'Primary sources originate in the era studied; secondary sources analyze them later. Eyewitnesses still carry personal or political bias.',
          detailedExplanation: {
            explorer:
              'A diary from 200 years ago is a primary clue; a textbook written today is secondary. Even diaries can brag or leave out embarrassing parts!',
            student:
              'Primary documents reflect their creator’s audience and incentives, so historians cross-check multiple accounts and material artifacts.',
            mastery:
              'Source criticism triangulates provenance, rhetorical intent, and archival silences rather than treating eyewitness records as neutral truth.',
          },
          stepByStep: [
            'Verify creation date relative to the event.',
            'Identify author incentives and intended audience.',
            'Corroborate across independent records.',
          ],
          commonMisconception: 'Primary does not mean unbiased; it means contemporary firsthand evidence.',
        },
      ],
    },
    {
      id: 'philosophy',
      storeId: 'arts',
      name: 'Philosophy & Ethics',
      scopeSummary: 'Moral frameworks, epistemology, logic of inquiry, and Eastern/Western traditions.',
      topics: [
        {
          id: 'phil-ethics',
          title: 'Three Pillars of Ethical Reasoning',
          subtitle: 'Comparing Virtue Ethics, Deontology (Duty), and Consequentialism.',
          readMinutes: 7,
          corePrinciple: 'Moral dilemmas look different when weighing character, universal duty, or outcomes.',
          formulaOrFramework: 'Virtue (Character)  |  Duty (Universal Rule)  |  Outcome (Minimize Harm)',
          levels: {
            explorer:
              'If you find a lost wallet, returning it makes you honest (Virtue), follows "don’t steal" (Duty), and makes the owner relieved (Outcome).',
            student:
              'Virtue ethics builds habits of practical wisdom; Kantian duty forbids treating people merely as tools; utilitarianism weighs net well-being.',
            mastery:
              'Modern bioethics and governance synthesize rule-constrained consequentialism with Rawlsian fairness under a veil of ignorance.',
          },
          keyTakeaways: [
            'Good ethics names trade-offs honestly.',
            'Duty protects minority rights against convenience.',
            'Consequentialism demands tracing second-order effects.',
          ],
          realWorldApplication: 'Hospital ethics boards weigh all three pillars in clinical care.',
          quiz: [
            {
              id: 'q-phil-1',
              prompt: 'Which ethical view focuses on cultivating honest and courageous habits of character?',
              options: ['Utilitarianism', 'Virtue Ethics', 'Relativism', 'Egoism'],
              correctIndex: 1,
              explanation: 'Virtue Ethics centers on moral character and practical wisdom.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-phil-steelman',
          subjectId: 'philosophy',
          category: 'Conceptual',
          question: 'What separates a "strawman" from a "steelman" argument?',
          shortAnswer: 'A strawman weakens an opposing view; a steelman strengthens it fairly before answering.',
          detailedExplanation: {
            explorer:
              'Knocking down a silly cartoon of someone’s idea is a strawman; answering their very best point fairly is a steelman.',
            student:
              'Steelmanning applies the Principle of Charity so your counterargument defeats the strongest coherent version of a claim.',
            mastery:
              'Steelmanning checks confirmation bias and raises epistemic rigor across academic and legal debate.',
          },
          stepByStep: [
            'Summarize the opposing claim in terms its advocate endorses.',
            'Address its strongest premise directly.',
          ],
          commonMisconception: 'Steelmanning does not mean agreeing—it means debating honestly.',
        },
      ],
    },
    {
      id: 'literature',
      storeId: 'arts',
      name: 'World Literature & Rhetoric',
      scopeSummary: 'Narrative structure, rhetoric, poetic meter, metaphor, and literary interpretation.',
      topics: [
        {
          id: 'lit-rhetoric',
          title: 'Ethos, Pathos, Logos & Narrative Craft',
          subtitle: 'How writers build trust, stir empathy, structure proof, and reveal theme.',
          readMinutes: 6,
          corePrinciple: 'Persuasive craft balances credibility, emotion, and coherent evidence.',
          formulaOrFramework: 'Ethos (Trust) + Pathos (Empathy) + Logos (Evidence)',
          levels: {
            explorer:
              'Great speeches stand on three legs: you trust the speaker (Ethos), feel the story (Pathos), and agree the reasons make sense (Logos).',
            student:
              'Concrete sensory detail carries Pathos while verified proof and answered counterarguments build Logos.',
            mastery:
              'Close reading separates narration from focalization and analyzes metaphor as cognitive framing.',
          },
          keyTakeaways: [
            'Specific concrete details move readers more than vague adjectives.',
            'Show-don’t-tell reveals character through choice under pressure.',
            'Addressing counterarguments strengthens persuasion.',
          ],
          realWorldApplication: 'Essays, journalism, and presentations depend on balanced Ethos, Pathos, and Logos.',
          quiz: [
            {
              id: 'q-lit-1',
              prompt: 'Citing verified data and logical cause-and-effect appeals primarily to:',
              options: ['Pathos', 'Logos', 'Irony', 'Alliteration'],
              correctIndex: 1,
              explanation: 'Logos is the appeal to logic and factual evidence.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-lit-theme',
          subjectId: 'literature',
          category: 'Analytical',
          question: 'How does "theme" differ from "plot" or "moral"?',
          shortAnswer: 'Plot is events; moral is a rule; theme is the deeper insight or tension about human life.',
          detailedExplanation: {
            explorer:
              'Plot is what happened; moral is a command; theme is the big life question the story explores.',
            student:
              'Theme emerges indirectly through recurring motifs, foil characters, and consequence.',
            mastery:
              'Rich literature often sustains competing thematic pressures without didactic slogans.',
          },
          stepByStep: [
            'List plot events objectively.',
            'Trace how conflict transforms characters.',
            'Express the insight as a full statement, not one word.',
          ],
          commonMisconception: 'A single word like "ambition" is a topic; a theme states what the story reveals about ambition.',
        },
      ],
    },
    {
      id: 'psychology',
      storeId: 'arts',
      name: 'Psychology & Cognitive Science',
      scopeSummary: 'Memory systems, attention, motivation, habits, and cognitive biases.',
      topics: [
        {
          id: 'psych-memory',
          title: 'Working Memory, Consolidation & Cognitive Load',
          subtitle: 'Why cramming fails and how retrieval moves knowledge into long-term schemas.',
          readMinutes: 6,
          corePrinciple: 'Working memory holds ~4 chunks; active retrieval and sleep build permanent pathways.',
          formulaOrFramework: 'Sensory Input → Working Memory (~4 chunks) → Sleep & Recall → Long-Term Schema',
          levels: {
            explorer:
              'Your brain’s desk holds about four things at once! Grouping ideas into neat bundles and sleeping helps file them safely forever.',
            student:
              'Passive re-reading fakes fluency; active recall and spaced repetition drive real synaptic consolidation.',
            mastery:
              'Hippocampal-neocortical sharp-wave ripples transfer episodic traces into durable semantic networks.',
          },
          keyTakeaways: [
            'Chunking frees working memory for hard problem solving.',
            'Self-testing beats re-reading highlights.',
            'Sleep physically consolidates daytime learning.',
          ],
          realWorldApplication: 'Breaking long study sessions into focused active-recall intervals dramatically lifts retention.',
          quiz: [
            {
              id: 'q-psych-1',
              prompt: 'Why does passive re-reading deceive students before exams?',
              options: [
                'It deletes memory',
                'Familiarity creates an illusion of mastery without testing recall',
                'Reading only uses one eye',
                'Working memory is infinite',
              ],
              correctIndex: 1,
              explanation: 'Recognition is far easier than recalling answers from blank memory.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-psych-bias',
          subjectId: 'psychology',
          category: 'Conceptual',
          question: 'What is Confirmation Bias, and how can researchers guard against it?',
          shortAnswer: 'Searching for and remembering evidence that confirms existing beliefs while discounting counter-evidence.',
          detailedExplanation: {
            explorer:
              'Noticing only facts that agree with your favorite guess—smart learners check both sides fairly!',
            student:
              'Counter it by testing disconfirming queries and blind source evaluation.',
            mastery:
              'Asymmetric likelihood updating is mitigated through adversarial collaboration and pre-registration.',
          },
          stepByStep: [
            'State your starting hypothesis explicitly.',
            'Search deliberately for counter-evidence.',
            'Define what evidence would change your mind.',
          ],
          commonMisconception: 'High intelligence does not immunize people against confirmation bias.',
        },
      ],
    },
    {
      id: 'linguistics',
      storeId: 'arts',
      name: 'Linguistics & World Languages',
      scopeSummary: 'Phonetics, grammar systems, language families, scripts, and bilingual cognition.',
      topics: [
        {
          id: 'ling-families',
          title: 'How Languages Evolve & Share Roots',
          subtitle: 'Tracing Indo-European, Sino-Tibetan, and Semitic branches through sound shifts.',
          readMinutes: 5,
          corePrinciple: 'Spoken languages change systematically over generations via predictable sound laws.',
          formulaOrFramework: 'Sanskrit (Mātṛ) · Greek (Mētēr) · Latin (Māter) · English (Mother) · Bangla (Mā)',
          levels: {
            explorer:
              '"Mother" in English, "Mā" in Bangla, and "Madre" in Spanish all start with M because ancient cousins spoke one parent tongue!',
            student:
              'Historical linguists trace systematic sound correspondences across core vocabulary to separate shared ancestry from loanwords.',
            mastery:
              'Comparative reconstruction distinguishes regular phonological change from analogical leveling and areal convergence.',
          },
          keyTakeaways: [
            'Language evolution is systematic, not decay.',
            'Bilingualism trains executive attention control.',
            'Writing scripts (alphabets, abugidas, logograms) are distinct from spoken grammar.',
          ],
          realWorldApplication: 'Recognizing shared word roots unlocks scientific and legal vocabulary fast.',
          quiz: [
            {
              id: 'q-ling-1',
              prompt: 'Scripts like Bangla and Devanagari—where consonants carry a default vowel altered by marks—are called:',
              options: ['Logograms', 'Abugidas', 'Morse code', 'Hieroglyphs'],
              correctIndex: 1,
              explanation: 'Bangla and Devanagari are abugidas (alphasyllabaries).',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-ling-grammar',
          subjectId: 'linguistics',
          category: 'Conceptual',
          question: 'How do descriptive grammar and prescriptive grammar differ?',
          shortAnswer: 'Descriptive grammar maps how speakers actually talk; prescriptive grammar sets formal writing conventions.',
          detailedExplanation: {
            explorer:
              'Descriptive grammar observes how people really speak; prescriptive grammar is the formal rulebook for essays.',
            student:
              'All native dialects obey systematic rules; standard registers coordinate formal communication.',
            mastery:
              'Prestige dialects reflect historical political institutions rather than superior syntactic complexity.',
          },
          stepByStep: [
            'Distinguish natural spoken competence from editorial convention.',
            'Master formal register for essays while respecting dialect diversity.',
          ],
          commonMisconception: 'Colloquial dialects are rule-governed, not "broken grammar."',
        },
      ],
    },
    {
      id: 'fine-arts',
      storeId: 'arts',
      name: 'Art History & Music Theory',
      scopeSummary: 'Perspective, color harmony, architectural proportion, rhythm, and acoustics.',
      topics: [
        {
          id: 'arts-harmony',
          title: 'Harmonic Ratios in Music & Linear Perspective',
          subtitle: 'Why octaves sound pure (2:1) and vanishing points create depth on flat paper.',
          readMinutes: 6,
          corePrinciple: 'Perception finds beauty in whole-number acoustic ratios and geometric convergence.',
          formulaOrFramework: 'Octave = 2:1  |  Perfect Fifth = 3:2  |  1-Point / 2-Point Perspective',
          levels: {
            explorer:
              'Halving a guitar string plays the same note one octave higher! Painters draw parallel roads meeting at one horizon dot so flat paper looks 3D.',
            student:
              'Consonant intervals correspond to simple string ratios (2:1, 3:2), while linear perspective projects 3D space to vanishing points.',
            mastery:
              '12-tone equal temperament spaces semitones by 2^(1/12) to resolve the Pythagorean comma across key modulations.',
          },
          keyTakeaways: [
            'Mathematics and artistic beauty share deep structural links.',
            'Cool tones recede while warm tones advance visually.',
            'Rhythm orders time just as proportion orders space.',
          ],
          realWorldApplication: '3D graphics engines and audio synthesizers run on perspective matrices and harmonic ratios.',
          quiz: [
            {
              id: 'q-art-1',
              prompt: 'Doubling a vibrating string’s frequency produces which musical interval?',
              options: ['Minor second', 'Octave', 'Tritone', 'Major third'],
              correctIndex: 1,
              explanation: 'A 2:1 frequency ratio produces an octave.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-art-color',
          subjectId: 'fine-arts',
          category: 'Conceptual',
          question: 'Why do screens mix Red, Green, and Blue while printers mix Cyan, Magenta, and Yellow?',
          shortAnswer: 'Screens emit light additively (RGB), while inks absorb light subtractively (CMYK).',
          detailedExplanation: {
            explorer:
              'Light beams add up to white; paints drink up colors and reflect only what remains.',
            student:
              'Additive RGB combines emitted wavelengths; subtractive CMY filters reflected light from paper.',
            mastery:
              'Display colorimetry sums spectra linearly in CIE XYZ cone space; pigments multiply reflectance curves.',
          },
          stepByStep: [
            'Check if medium emits light (screen) or reflects ambient light (ink).',
            'Use RGB for emission; CMYK for print absorption.',
          ],
          commonMisconception: 'RYB is an older classroom shortcut; CMYK yields accurate print color.',
        },
      ],
    },
    {
      id: 'geography',
      storeId: 'arts',
      name: 'Human Geography & Cartography',
      scopeSummary: 'Map projections, river civilizations, urbanization, migration, and regional resources.',
      topics: [
        {
          id: 'geo-projections',
          title: 'Map Projections, Rivers & Why Cities Grow Where They Do',
          subtitle: 'Why every flat map distorts the round Earth—and why ports and deltas anchor nations.',
          readMinutes: 6,
          corePrinciple: 'No flat map can preserve area, shape, distance, and direction simultaneously.',
          formulaOrFramework: 'Globe (3D Sphere) → Cylindrical / Conic / Equal-Area Projection (Trade-Off)',
          levels: {
            explorer:
              'Try peeling an orange and flattening the peel onto a table without ripping or stretching it—impossible! Mapmakers face the same puzzle turning our round Earth into flat pages. That’s why Greenland looks giant on classroom maps even though Africa is 14 times bigger!',
            student:
              'Mercator projections preserve compass angles for sea navigation while exaggerating polar area; Equal-Area projections (like Robinson or Equal Earth) keep continent sizes honest. Historically, great cities clustered along navigable river deltas, natural harbors, and mountain passes that lowered transport costs.',
            mastery:
              'By Gauss’s Theorema Egregium, zero-distortion isometric mapping between a sphere of positive Gaussian curvature and a flat plane is mathematically impossible. Urban spatial economics models agglomeration economies alongside climate-vulnerability shifts in low-lying river deltas.',
          },
          keyTakeaways: [
            'Africa is ~14 times larger in land area than Greenland.',
            'Freshwater access, fertile silt, and river transport birthed nearly every early metropolis.',
            'Choosing the right map projection depends on whether you need true angles or true land area.',
          ],
          realWorldApplication:
            'GIS urban planners layer elevation, flood risk, and transit maps to build climate-resilient cities.',
          quiz: [
            {
              id: 'q-geo-1',
              prompt: 'Why does Greenland look nearly as large as Africa on a classic Mercator world map?',
              options: [
                'Greenland really is as big as Africa',
                'Mercator stretches areas near the poles to keep compass directions straight',
                'Africa shrinks in winter',
                'Oceans cover half of Africa',
              ],
              correctIndex: 1,
              explanation: 'Mercator conformal projection preserves angles by stretching high-latitude landmasses.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-geo-delta',
          subjectId: 'geography',
          category: 'Conceptual',
          question: 'Why are river deltas like the Bengal (Ganges-Brahmaputra) and Nile among the most densely populated places on Earth?',
          shortAnswer: 'Annual river silt builds extraordinarily fertile farmland alongside flat freshwater transport routes.',
          detailedExplanation: {
            explorer:
              'Slow rivers drop rich mud and tiny rock nutrients right before meeting the sea—making super-rich soil where rice and crops feed millions!',
            student:
              'Alluvial sediment deposits renew soil fertility naturally while flat waterways allow inexpensive irrigation, fishing, and trade links.',
            mastery:
              'Fluvial geomorphology balances aggradation from Himalayan sediment flux against sea-level rise and deltaic subsidence—making delta stewardship critical.',
          },
          stepByStep: [
            'Note how slowing river velocity drops suspended nutrient-rich silt.',
            'Connect fertile multi-crop harvests + flat waterways to sustained population density.',
          ],
          commonMisconception: 'Deltas thrive because of nutrient deposition and transport, though careful flood management is vital.',
        },
      ],
    },
    {
      id: 'civics',
      storeId: 'arts',
      name: 'Civics, Governance & World Cultures',
      scopeSummary: 'Constitutions, separation of powers, civic rights, diplomacy, and cultural heritage.',
      topics: [
        {
          id: 'civics-powers',
          title: 'Constitutions, Checks & Balances, and Civic Participation',
          subtitle: 'How democracies and institutions prevent concentrated power and protect citizen rights.',
          readMinutes: 6,
          corePrinciple: 'Dividing legislative, executive, and judicial authority guards liberty through mutual accountability.',
          formulaOrFramework: 'Legislature (Makes Law) ↔ Executive (Enforces Law) ↔ Judiciary (Interprets Law)',
          levels: {
            explorer:
              'In a fair game, one player shouldn’t write the rules, play the ball, AND be the referee all at once! Countries split power into three teams: lawmakers write rules, leaders run daily services, and independent judges make sure everyone—even leaders—plays fairly.',
            student:
              'Constitutional separation of powers creates mutual checks: parliaments pass budgets and laws, executives administer agencies, and independent courts strike down unconstitutional acts. Free press, local councils, and informed voters sustain accountability between elections.',
            mastery:
              'Institutional political science distinguishes majoritarian vs consensus systems, federalism vs unitary states, and inclusive extractive-proof institutions (Acemoglu & Robinson) that anchor long-run civic trust and property rights.',
          },
          keyTakeaways: [
            'Independent courts must be able to rule fairly even against sitting officials.',
            'Local municipal governance directly shapes schools, clean water, and roads.',
            'Civic literacy means verifying facts before sharing public claims.',
          ],
          realWorldApplication:
            'Understanding local budgets and constitutional rights empowers citizens to advocate effectively for community schools and parks.',
          quiz: [
            {
              id: 'q-civ-1',
              prompt: 'Why do constitutional systems keep courts independent from political leaders?',
              options: [
                'So judges never have to read laws',
                'So laws and constitutional rights apply equally even when leaders are challenged',
                'To eliminate elections',
                'So laws never change',
              ],
              correctIndex: 1,
              explanation: 'Judicial independence ensures impartial rule of law without political interference.',
            },
          ],
        },
      ],
      questions: [
        {
          id: 'qa-civ-rights',
          subjectId: 'civics',
          category: 'Analytical',
          question: 'Why are freedom of inquiry and a free press essential for scientific and economic progress, not just politics?',
          shortAnswer: 'Open questioning lets societies spot policy errors, expose corruption, and test new ideas without fear.',
          detailedExplanation: {
            explorer:
              'If nobody is allowed to point out a leaky boat, everyone gets wet! Asking honest questions helps communities fix problems early.',
            student:
              'Transparent reporting surfaces public health threats, budget waste, and safety hazards rapidly while fostering open scientific debate.',
            mastery:
              'Amartya Sen demonstrated that no functioning democracy with a free press has suffered a major famine because open information triggers rapid state response.',
          },
          stepByStep: [
            'Trace how suppressed feedback hides failures until crises escalate.',
            'Link open inquiry to faster error-correction in science, markets, and governance.',
          ],
          commonMisconception: 'Free inquiry strengthens stability by catching mistakes early rather than concealing them.',
        },
      ],
    },
  ],
};
