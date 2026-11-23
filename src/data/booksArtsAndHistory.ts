import { LibraryBook } from '../types/knowledge';

export const BOOKS_ARTS_AND_HISTORY: LibraryBook[] = [
  {
    id: 'book-gitanjali-tagore',
    title: 'Gitanjali & Rabindranath Tagore’s Poetics',
    titleBn: 'গীতাঞ্জলি ও রবীন্দ্র-কাব্যভাবনা',
    authorOrOrigin: 'Rabindranath Tagore · Bangla & World Literature',
    era: '1910–1913 · Nobel Laureate Classic',
    category: 'literature-bangla',
    storeId: 'arts',
    subjectId: 'literature',
    ageBand: 'All Ages',
    coverColorHex: '#7c2d12',
    readingMinutes: 24,
    synopsis:
      'Explore the lyrical grace, fearless quest for freedom (“Where the mind is without fear”), nature imagery, and humanist spirituality of Tagore’s masterwork.',
    synopsisBn:
      'গীতাঞ্জলি-র সংগীতময় গীতিকবিতা, “চিত্ত যেথা ভয়শূন্য” কবিতার নির্ভীক মানবতাবাদ এবং প্রকৃতি ও স্রষ্টার সাথে নিবিড় সম্পর্কের বিশ্লেষণ।',
    coreThesis:
      'True spiritual and creative freedom arises through joy, compassion, fearless inquiry, and union with everyday humanity.',
    coreThesisBn:
      'ভয়হীন মন, নির্মল আনন্দ, প্রকৃতির সাথে একাত্মতা ও সাধারণ মানুষের প্রতি ভালোবাসাতেই প্রকৃত মুক্তি নিহিত।',
    keyTakeaways: [
      'Spiritual fulfillment lives alongside ordinary work, rain, and soil—not escape from life.',
      'Simple everyday Bengali diction carries profound philosophical weight.',
      'Reason and fearless curiosity build an awakened, free society.',
    ],
    keyTakeawaysBn: [
      'সংসার ত্যাগ করে নয়, বরং মানুষের কর্ম ও প্রকৃতির মাঝেই মহত্ত্ব খুঁজতে হয়।',
      'সহজ ও সাবলীল বাংলা ভাষায় গভীরতম দার্শনিক অনুভূতি প্রকাশ পেয়েছে।',
      'ভয়হীন চিত্ত ও কুসংস্কারমুক্ত যুক্তিই একটি জাতির প্রকৃত জাগরণ আনে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Song Offerings and the Voice of Simplicity',
        titleBn: 'গীতাঞ্জলি ও সহজ প্রকাশের সৌন্দর্য',
        keyPrinciple: 'Poetic power grows when ornate stiffness yields to sincere musical cadence.',
        levels: {
          explorer:
            'Tagore wrote songs meant to be sung outdoors under monsoon clouds and starlit rivers, turning everyday words into gentle music.',
          student:
            'Blending Vaishnava lyricism, Upanishadic wonder, and Baul folk rhythm made Tagore’s Bengali prose-songs resonate globally in 1913.',
          mastery:
            'Tagore’s self-translation in the 1912 English Gitanjali reshaped rhythm into rhythmic prose-poems, balancing Eastern devotional intimacy with modernist clarity.',
        },
        summaryBn:
          'বাউল সুর, উপনিষদের ভাব ও বাংলার প্রকৃতির মেলবন্ধনে রবীন্দ্রনাথের গান হয়ে উঠেছে সাধারণ মানুষের প্রাণের ভাষা।',
        reflectionQuestion: 'Why did Tagore call Gitanjali “Song Offerings” rather than mere poems?',
        reflectionAnswer:
          'Because most pieces were originally composed with ragas and melodies to be sung aloud rather than only read silently.',
      },
      {
        chapterNumber: 2,
        title: 'Where the Mind Is Without Fear',
        titleBn: 'চিত্ত যেথা ভয়শূন্য, উচ্চ যেথা শির',
        keyPrinciple: 'Education and freedom flourish only where truth replaces narrow fear.',
        levels: {
          explorer:
            'Imagine a school and country where nobody is afraid to ask curious questions, everybody shares fairly, and knowledge is open to all!',
          student:
            'Written during colonial rule, Poem 35 envisions true independence as moral courage, open knowledge, and overcoming narrow social walls.',
          mastery:
            'Tagore critiques mechanical nationalism, urging universal humanism (“clear stream of reason”) instead of stagnant habit (“dreary desert sand of dead habit”).',
        },
        summaryBn:
          'রবীন্দ্রনাথ কেবল ভৌগোলিক স্বাধীনতা নয়, বরং কুসংস্কারমুক্ত যুক্তি, ভয়হীন মন ও উন্মুক্ত শিক্ষার স্বাধীনতার স্বপ্ন দেখেছিলেন।',
        reflectionQuestion: 'What does “dreary desert sand of dead habit” symbolize in Tagore’s poem?',
        reflectionAnswer:
          'Blind custom and prejudice that dry up fresh inquiry and social compassion.',
      },
      {
        chapterNumber: 3,
        title: 'Leave This Chanting: Dignity of Work',
        titleBn: 'ভজন পূজন সাধন আরাধনা: শ্রমের মর্যাদা',
        keyPrinciple: 'Compassion in daily labor surpasses isolated ritual.',
        levels: {
          explorer:
            'Real goodness isn’t hiding in a dark room—it is out in the warm sunshine helping farmers, builders, and neighbors side by side!',
          student:
            'Poem 11 rejects escapist asceticism, declaring solidarity with the tiller tilling hard ground and the pathmaker breaking stones.',
          mastery:
            'Tagore synthesizes ethical action (karma) with aesthetic unity, mirroring his practical rural reconstruction experiments at Sriniketan.',
        },
        summaryBn:
          'দরজা বন্ধ করে নয়, বরং রোদ-বৃষ্টিতে মাঠে কাজ করা চাষি ও পথ-নির্মাতা শ্রমিকের ঘামের মাঝেই সত্য ও মানবতার বাস।',
        reflectionQuestion: 'How does Tagore connect art and ordinary manual labor?',
        reflectionAnswer:
          'By affirming that creative care and dignity live wherever human beings build, plant, and serve others.',
      },
      {
        chapterNumber: 4,
        title: 'Nature, Monsoon & Santiniketan',
        titleBn: 'প্রকৃতি, বর্ষা ও শান্তিনিকেতন শিক্ষাভাবনা',
        keyPrinciple: 'Learning thrives when classrooms open directly to sky, trees, and curiosity.',
        levels: {
          explorer:
            'In Santiniketan, students often sat under shady mango trees instead of stiff brick walls, learning music, science, and painting together!',
          student:
            'Tagore rejected factory-style memorization, founding Visva-Bharati to unite natural observation, arts, and global cultural exchange.',
          mastery:
            'His educational essays anticipate modern holistic pedagogy—integrating emotional sensitivity, ecological stewardship, and scientific inquiry.',
        },
        summaryBn:
          'চার দেয়ালের মুখস্থবিদ্যার বদলে প্রকৃতির কোলে আনন্দময় পরিবেশে বিজ্ঞান, শিল্প ও মানবিকতা শেখার আদর্শ গড়ে তুলেছিলেন রবীন্দ্রনাথ।',
        reflectionQuestion: 'Why did Tagore dislike purely exam-centered schooling?',
        reflectionAnswer:
          'Because fear of grades crushes natural curiosity, creativity, and joy in understanding.',
      },
    ],
  },
  {
    id: 'book-nazrul-humanism',
    title: 'Rebel Poet & Equality: Kazi Nazrul Islam',
    titleBn: 'বিদ্রোহ ও সাম্যের কবি: কাজী নজরুল ইসলাম',
    authorOrOrigin: 'Kazi Nazrul Islam · National Poet Anthology',
    era: '1920s–1940s · Bengali Literature',
    category: 'literature-bangla',
    storeId: 'arts',
    subjectId: 'literature',
    ageBand: 'All Ages',
    coverColorHex: '#881337',
    readingMinutes: 21,
    synopsis:
      'Discover how “Bidrohi,” “Samyabadi,” and Nazrul’s fiery songs championed justice, youth courage, gender equality, and unity across faiths.',
    synopsisBn:
      '“বিদ্রোহী”, “সাম্যবাদী” ও নজরুলগীতি কীভাবে পরাধীনতার বিরুদ্ধে সাহস, নারী-পুরুষের সমতা ও সকল ধর্মের মানুষের ঐক্যের বাণী ছড়িয়েছিল।',
    coreThesis:
      'All oppression—colonial, economic, caste, or gender—crumbles when human dignity stands fearless.',
    coreThesisBn:
      'শোষণ, বৈষম্য ও অন্যায়ের বিরুদ্ধে মানবমর্যাদার নির্ভীক প্রতিবাদই সমতার সমাজ গড়ে তোলে।',
    keyTakeaways: [
      'Rebellion in Nazrul means breaking chains of injustice, never hatred of people.',
      '“Samyabadi” affirms equal dignity for laborers, women, and all faiths.',
      'Music and poetry mobilized millions during anti-colonial struggles.',
    ],
    keyTakeawaysBn: [
      'নজরুলের বিদ্রোহ অন্যায় ও পরাধীনতার শৃঙ্খল ভাঙার জন্য, মানুষের প্রতি ঘৃণার জন্য নয়।',
      'নারী, শ্রমিক ও সকল ধর্মের মানুষের সমমর্যাদা তাঁর কবিতার মূল সুর।',
      'কবিতা ও গান হয়ে উঠেছিল মুক্তিকামী মানুষের প্রাণের শক্তি।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Bidrohi: Thunder Against Oppression',
        titleBn: 'বিদ্রোহী: অন্যায়ের বিরুদ্ধে বজ্রকণ্ঠ',
        keyPrinciple: 'Self-respect awakens a silenced people to stand upright.',
        levels: {
          explorer:
            'Written in a single midnight burst of passion, “Bidrohi” says “Hold your head high!” to anyone who feels small or pushed around.',
          student:
            'Blending Sanskrit, Arabic, and Persian imagery, Nazrul declares war on tyranny until the cries of the oppressed cease to echo in the sky.',
          mastery:
            'Stylistically, Bidrohi fractures gentle Romantic meter with percussive alliteration, inaugurating anti-imperial modernist urgency in Bengali verse.',
        },
        summaryBn:
          'শোষকের রক্তচক্ষু উপেক্ষা করে নিপীড়িত মানুষের শির উঁচু করে দাঁড়ানোর অমর ঘোষণা হলো “বিদ্রোহী” কবিতা।',
        reflectionQuestion: 'When does Nazrul promise his rebel sword will finally rest?',
        reflectionAnswer:
          'Only when the cries of the oppressed no longer echo in the air and the tyrant’s sword is silenced.',
      },
      {
        chapterNumber: 2,
        title: 'Samyabadi & Dignity of Labor',
        titleBn: 'সাম্যবাদী ও শ্রমিকের অধিকার',
        keyPrinciple: 'Civilization stands on the shoulders of ordinary working hands.',
        levels: {
          explorer:
            'Who built the bridges, grew the rice, and paved the roads? Not kings sitting on golden chairs, but hardworking farmers and builders!',
          student:
            'In “Kuli-Majur,” Nazrul reminds elites that every palace and railway exists through workers’ sweat, challenging class arrogance directly.',
          mastery:
            'His poetry bridges literary modernism with early South Asian labor consciousness and peasant rights journalism.',
        },
        summaryBn:
          '“কুলি-মজুর” ও “সাম্যবাদী” কবিতায় নজরুল মনে করিয়ে দেন, প্রাসাদ ও সভ্যতার প্রতিটি ইটে মেহনতি মানুষের ঘাম মিশে আছে।',
        reflectionQuestion: 'Why did Nazrul write directly for farmers, coolies, and fishermen?',
        reflectionAnswer:
          'He believed literature belongs to every human heart, not merely parlor salons.',
      },
      {
        chapterNumber: 3,
        title: 'Nari: Equal Creators of History',
        titleBn: 'নারী: ইতিহাসের সমান অংশীদার',
        keyPrinciple: 'No society advances while half its minds and efforts remain uncredited.',
        levels: {
          explorer:
            '“Everything great and good in the world—half was built by women, and half by men!” Nazrul wanted girls and boys to share every opportunity.',
          student:
            'A century ahead of many peers, “Nari” condemns historic erasure of women’s labor, courage, and scholarship.',
          mastery:
            'Nazrul pairs mythic imagery with egalitarian critique, arguing liberation requires dismantling domestic and civic subjugation alike.',
        },
        summaryBn:
          '“বিশ্বের যা কিছু মহান সৃষ্টি চির কল্যাণকর, অর্ধেক তার করিয়াছে নারী অর্ধেক তার নর”—নারী-পুরুষের সমতার এক কালজয়ী দলিল।',
        reflectionQuestion: 'What core truth does Nazrul highlight in “Nari”?',
        reflectionAnswer:
          'Every achievement in human history relies equally on women’s contributions alongside men’s.',
      },
      {
        chapterNumber: 4,
        title: 'Communal Harmony & Nazrul Geeti',
        titleBn: 'সম্প্রীতি ও নজরুলসংগীত',
        keyPrinciple: 'Shared humanity transcends sectarian divides.',
        levels: {
          explorer:
            'Nazrul sang both joyful Eid songs and Shyama melodies, showing neighbors of different traditions can celebrate life like one family.',
          student:
            'Composing over 3,000 songs spanning classical ragas, ghazals, and marching anthems, he fused Hindu and Muslim cultural idioms seamlessly.',
          mastery:
            'His syncretic poetic lexicon remains an enduring South Asian model against communal polarization.',
        },
        summaryBn:
          'ভিন্ন ধর্ম ও সংস্কৃতির শব্দ ও সুরকে এক সুতোয় গেঁথে নজরুল প্রমাণ করেছেন মানুষ সবার আগে—সম্প্রীতিই জাতির শক্তি।',
        reflectionQuestion: 'How did Nazrul’s songs support unity across diverse communities?',
        reflectionAnswer:
          'By weaving imagery, music, and respect from every South Asian tradition into one shared cultural repertoire.',
      },
    ],
  },
  {
    id: 'book-pather-panchali',
    title: 'Pather Panchali: Rural Bengal & Empathy',
    titleBn: 'পথের পাঁচালী: গ্রামবাংলা ও মানবিক উপাখ্যান',
    authorOrOrigin: 'Bibhutibhushan Bandyopadhyay · Classic Fiction',
    era: '1929 · Modern Bengali Novel',
    category: 'literature-bangla',
    storeId: 'arts',
    subjectId: 'literature',
    ageBand: 'All Ages',
    coverColorHex: '#3f6212',
    readingMinutes: 22,
    synopsis:
      'Step through Apu and Durga’s eyes into the wonder of childhood, bamboo groves, passing trains, poverty, resilience, and quiet beauty.',
    synopsisBn:
      'অপু ও দুর্গার শৈশব, কাশবনের মাঠ, প্রথম ট্রেন দেখার বিস্ময়, দারিদ্র্যের লড়াই এবং জীবনের অদম্য সৌন্দর্যের কালজয়ী গল্প।',
    coreThesis:
      'Even amidst hardship, human curiosity, sibling love, and observant wonder illuminate life with timeless dignity.',
    coreThesisBn:
      'কঠিন দারিদ্র্যের মাঝেও শৈশবের কৌতূহল, ভাই-বোনের ভালোবাসা ও প্রকৃতির মায়া জীবনকে অমূল্য করে তোলে।',
    keyTakeaways: [
      'Small moments—rain, trains, storybooks—shape a lifelong imagination.',
      'Empathy turns ordinary village lives into universal literature.',
      'Loss and migration teach resilience while preserving roots in memory.',
    ],
    keyTakeawaysBn: [
      'বৃষ্টি, ট্রেন বা গল্পের বইয়ের মতো ছোট আনন্দই জীবনের বড় কল্পনা তৈরি করে।',
      'সাধারণ মানুষের সুখ-দুঃখ গভীর সহানুভূতির সাথে দেখলে তা বিশ্বসাহিত্যে পরিণত হয়।',
      'সংগ্রাম ও বিচ্ছেদের মাঝেও মানুষের পথচলা থেমে থাকে না।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Nishchindipur: Childhood & Wonder',
        titleBn: 'নিশ্চিন্দিপুর: শৈশবের বিস্ময়',
        keyPrinciple: 'Attention transforms ordinary surroundings into an enchanted universe.',
        levels: {
          explorer:
            'Apu and his sister Durga run across tall white kash flowers chasing the whistle of a steam train for the very first time!',
          student:
            'Bibhutibhushan renders rural Bengal with botanical precision and emotional warmth rather than idealized nostalgia.',
          mastery:
            'The episodic realism influenced Satyajit Ray’s landmark 1955 film trilogy, anchoring neorealist cinema across world art.',
        },
        summaryBn:
          'নিশ্চিন্দিপুরের বাঁশবাগান আর কাশবনের মধ্য দিয়ে দুর্গা ও অপুর চোখ দিয়ে দেখা প্রকৃতির অপরূপ বিস্ময়।',
        reflectionQuestion: 'What does the passing steam train symbolize for young Apu?',
        reflectionAnswer:
          'The wider world of books, discovery, and future horizons beyond the quiet village.',
      },
      {
        chapterNumber: 2,
        title: 'Hardship, Sarbajaya & Quiet Courage',
        titleBn: 'সর্বজয়ার সংগ্রাম ও মমতা',
        keyPrinciple: 'Everyday parental endurance sustains hope when resources run scarce.',
        levels: {
          explorer:
            'Apu’s mother works tirelessly every day so her children stay fed, healthy, and able to read and dream.',
          student:
            'Through Sarbajaya’s pride and sacrifice, the novel portrays rural economic fragility without robbing characters of dignity.',
          mastery:
            'The tension between Harihar’s gentle idealism and Sarbajaya’s material anxiety drives the household tragedy cleanly.',
        },
        summaryBn:
          'অভাবের সংসার আগলে রেখে সন্তানদের স্বপ্ন বাঁচিয়ে রাখার মা সর্বজয়ার নীরব কিন্তু অবিচল সংগ্রাম।',
        reflectionQuestion: 'Why is Sarbajaya sometimes strict even though she loves her children deeply?',
        reflectionAnswer:
          'Constant anxiety over food, roof repairs, and her children’s future weighs heavily on her.',
      },
      {
        chapterNumber: 3,
        title: 'Durga, Monsoon Rain & Memory',
        titleBn: 'দুর্গা ও বর্ষার স্মৃতি',
        keyPrinciple: 'Love leaves a lasting lens through which we view the world forever.',
        levels: {
          explorer:
            'Durga teaches Apu to notice wild fruits, bird nests, and monsoon puddles—memories Apu carries everywhere as he grows up.',
          student:
            'Durga embodies untamed vitality and generosity; her loss marks Apu’s painful passage from innocent wonder into reflection.',
          mastery:
            'Memory functions structurally in the novel as consolation against mortality and geographical displacement.',
        },
        summaryBn:
          'বর্ষায় ভেজা ও ঝড়ে আম কুড়ানোর স্মৃতির মাঝে দুর্গার প্রাণোচ্ছ্বল উপস্থিতি উপন্যাসকে গভীর আবেগে ভরিয়ে দেয়।',
        reflectionQuestion: 'How does Apu carry Durga’s spirit forward after leaving the village?',
        reflectionAnswer:
          'Through his lifelong tenderness toward nature, curiosity, and memory of their shared childhood.',
      },
      {
        chapterNumber: 4,
        title: 'The Endless Road Forward',
        titleBn: 'অবিরাম পথচলা',
        keyPrinciple: 'Life’s road invites courage even after sorrow.',
        levels: {
          explorer:
            'As the family boards the train toward Kashi, Apu discovers every ending opens a new chapter waiting ahead.',
          student:
            '“Pather Panchali” literally means “Song of the Little Road”—celebrating human persistence amidst impermanence.',
          mastery:
            'The closing departure balances mourning with existential openness, making the narrative a perennial Bildungsroman.',
        },
        summaryBn:
          'নিশ্চিন্দিপুর ছেড়ে নতুন শহরের পথে যাত্রা আমাদের শেখায় জীবন মানেই বেদনা পেরিয়ে সামনের অজানা পথে এগিয়ে যাওয়া।',
        reflectionQuestion: 'Why does the novel remain beloved by readers of every generation worldwide?',
        reflectionAnswer:
          'Its portrait of childhood curiosity, sibling affection, and resilience speaks universally across cultures.',
      },
    ],
  },
  {
    id: 'book-homers-odyssey',
    title: "Homer's Odyssey: Myth, Craft & Homecoming",
    titleBn: 'হোমারের ওডিসি: মহাকাব্য, বুদ্ধি ও স্বদেশ প্রত্যাবর্তন',
    authorOrOrigin: 'Homer · Ancient Greek Epic',
    era: 'c. 8th Century BCE',
    category: 'literature-bangla',
    storeId: 'arts',
    subjectId: 'literature',
    ageBand: 'Ages 13–18',
    coverColorHex: '#713f12',
    readingMinutes: 22,
    synopsis:
      'Why Odysseus relied on wit over brute force across ten stormy years at sea, and how storytelling defines human endurance.',
    synopsisBn:
      'শুধু গায়ের জোর নয়, বরং তীক্ষ্ণ বুদ্ধি, ধৈর্য ও স্মৃতির শক্তিতে কীভাবে ওডিসিউস দশ বছরের সমুদ্র-সংকট জয় করে ঘরে ফিরেছিলেন।',
    coreThesis:
      'Clever resourcefulness, loyalty, and self-restraint triumph where sheer physical force fails.',
    coreThesisBn:
      'পাশবিক শক্তির চেয়ে বিচক্ষণ বুদ্ধি, ধৈর্য ও আত্মসংযম মানুষকে বড় বিপদ থেকে রক্ষা করে।',
    keyTakeaways: [
      'Wit (“metis”) triumphs over monsters like the Cyclops.',
      'Temptations of forgetting and false ease threaten real purpose.',
      'Penelope’s patience mirrors Odysseus’s strategic endurance.',
    ],
    keyTakeawaysBn: [
      'দৈত্য বা বড় বাধার সামনে বুদ্ধি ও উপস্থিতবুদ্ধিই আসল অস্ত্র।',
      'লক্ষ্য ভুলে আরামে গা ভাসিয়ে দেওয়া প্রকৃত যাত্রার সবচেয়ে বড় বিপদ।',
      'ধৈর্য ও কৌশল সংকটময় সময়ে ঘর ও মর্যাদা রক্ষা করে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Wit Over Force: The Cyclops Cave',
        titleBn: 'শক্তির চেয়ে বুদ্ধির জয়',
        keyPrinciple: 'Knowing what NOT to boast is as smart as crafting a clever plan.',
        levels: {
          explorer:
            'Trapped by a giant one-eyed Cyclops, Odysseus tricks him by saying his name is “Nobody” and escapes hidden beneath woolly sheep!',
          student:
            'Homer contrasts Odysseus’s strategic mind (metis) with impulsive pride (hubris)—boasting his real name afterward brings Poseidon’s wrath.',
          mastery:
            'The hero’s identity paradox (“Nobody”) links ancient oral epic structure to linguistic ambiguity and tragic self-revelation.',
        },
        summaryBn:
          'দৈত্যের গুহায় আটকে পড়েও ওডিসিউস নিজেকে “কেউ না” বলে পরিচয় দিয়ে উপস্থিত বুদ্ধিতে প্রাণ বাঁচিয়েছিলেন।',
        reflectionQuestion: 'What single mistake prolonged Odysseus’s journey after escaping the Cyclops?',
        reflectionAnswer:
          'Bragging his real name out of pride while sailing away.',
      },
      {
        chapterNumber: 2,
        title: 'Sirens, Lotus-Eaters & Self-Mastery',
        titleBn: 'প্রলোভন ও আত্মসংযম',
        keyPrinciple: 'Awareness of our own weaknesses lets us build guardrails before temptation hits.',
        levels: {
          explorer:
            'To hear the enchanting Sirens without steering his ship onto rocks, Odysseus plugs his crew’s ears with beeswax and has himself tied to the mast!',
          student:
            'This famous “Ulysses pact” became a model in modern psychology and finance for binding future impulses ahead of time.',
          mastery:
            'Pre-commitment mechanisms resolve time-inconsistent preferences across behavioral economics and ethics.',
        },
        summaryBn:
          'নিজের দুর্বলতা আগে থেকে বুঝে সতর্ক ব্যবস্থা নেওয়াই আত্মসংযমের সেরা উদাহরণ।',
        reflectionQuestion: 'How is tying oneself to the mast used in modern study habits?',
        reflectionAnswer:
          'Putting phones in another room or using site blockers before studying removes distraction mid-task.',
      },
      {
        chapterNumber: 3,
        title: 'Telemachus Growing into Responsibility',
        titleBn: 'টেলিমেকাসের বেড়ে ওঠা',
        keyPrinciple: 'Maturity begins when young people speak up and seek the truth.',
        levels: {
          explorer:
            'While waiting for his father, young Telemachus sails across the sea asking wise elders for clues and finding his own courage.',
          student:
            'The opening books (Telemachy) form an early coming-of-age story paralleling his father’s voyage.',
          mastery:
            'Structural symmetry between father’s return and son’s emergence unites household order with civic hospitality (xenia).',
        },
        summaryBn:
          'বাবার অনুপস্থিতিতে কিশোর টেলিমেকাসের ভয় কাটিয়ে দায়িত্বশীল মানুষ হয়ে ওঠার গল্প।',
        reflectionQuestion: 'Why does the Odyssey open with the son rather than Odysseus himself?',
        reflectionAnswer:
          'To show what a household and society lose without responsible stewardship.',
      },
      {
        chapterNumber: 4,
        title: 'Penelope’s Loom & Homecoming',
        titleBn: 'পেনেলোপির ধৈর্য ও প্রত্যাবর্তন',
        keyPrinciple: 'True partnership relies on patience, wit, and mutual recognition.',
        levels: {
          explorer:
            'Penelope keeps greedy guests waiting by weaving a tapestry all day and secretly unweaving it every night until Odysseus finally comes home!',
          student:
            'Testing Odysseus with the secret of their immovable olive-tree bed proves Penelope matches her husband in caution and intelligence.',
          mastery:
            'The epic closes not in endless vengeance, but in Athena’s civic truce establishing peace over Ithaca.',
        },
        summaryBn:
          'দিনের বেলা বুনে আর রাতে সুতো খুলে বুদ্ধিমতী পেনেলোপি বছর বছর ধৈর্য ধরে নিজের পরিবারকে রক্ষা করেছিলেন।',
        reflectionQuestion: 'How did Penelope verify the stranger was truly Odysseus?',
        reflectionAnswer:
          'She mentioned moving their bridal bed, knowing only Odysseus knew one post was carved from a living rooted olive tree.',
      },
    ],
  },
  {
    id: 'book-shakespeare-tragedies',
    title: "Shakespeare's Tragedies: Character & Choice",
    titleBn: 'শেক্সপিয়রের ট্র্যাজেডি: চরিত্র ও পরিণতির নাটক',
    authorOrOrigin: 'William Shakespeare · World Drama',
    era: '1599–1606 · English Renaissance',
    category: 'literature-bangla',
    storeId: 'arts',
    subjectId: 'literature',
    ageBand: 'Ages 13–18',
    coverColorHex: '#581c87',
    readingMinutes: 21,
    synopsis:
      'Analyze Hamlet, Macbeth, and King Lear: how ambition, hesitation, flattery, and conscience turn human flaws into timeless drama.',
    synopsisBn:
      'হ্যামলেট, ম্যাকবেথ ও কিং লিয়ারের আলোকে লোভ, দ্বিধা, তোষামোদ ও বিবেকের দংশনের গভীর মনস্তাত্ত্বিক বিশ্লেষণ।',
    coreThesis:
      'Great tragedies show catastrophe growing not from random bad luck, but from believable choices inside flawed human hearts.',
    coreThesisBn:
      'মহান ট্র্যাজেডি কোনো দৈব দুর্ভাগ্য নয়, বরং মানুষের নিজের ভুল সিদ্ধান্ত, উচ্চাভিলাষ বা অন্ধ বিশ্বাসেরই পরিণতি।',
    keyTakeaways: [
      'Macbeth shows how one corrupt shortcut traps a person in deeper fear.',
      'Hamlet dramatizes moral reflection vs. paralysis.',
      'King Lear separates flattering words from genuine care.',
    ],
    keyTakeawaysBn: [
      'ম্যাকবেথ দেখায় একটি অনৈতিক শর্টকাট কীভাবে মানুষকে ভয়ের চোরাবালিতে টানে।',
      'হ্যামলেট নৈতিক দ্বিধা ও চিন্তার ভারসাম্যের সংকট তুলে ধরে।',
      'কিং লিয়ার মিথ্যা প্রশংসা ও সত্যিকারের ভালোবাসার পার্থক্য শেখায়।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Macbeth: The Price of Unchecked Ambition',
        titleBn: 'ম্যাকবেথ: লাগামহীন উচ্চাভিলাষের মূল্য',
        keyPrinciple: 'Shortcuts gained through betrayal destroy the peace they promised.',
        levels: {
          explorer:
            'A brave soldier steals a crown thinking it will make him happy—instead, guilt steals his sleep and turns everyone into an enemy.',
          student:
            'Once Macbeth crosses a moral line, protecting the stolen throne forces ever worse deeds, illustrating tragic reversal.',
          mastery:
            'Soliloquies (“Tomorrow, and tomorrow, and tomorrow”) reveal nihilistic isolation as ethical bonds collapse.',
        },
        summaryBn:
          'অন্যায় পথে ক্ষমতা পেলে শান্তি আসে না—বরং অপরাধবোধ ও হারানোর ভয় পুরো জীবন বিষিয়ে তোলে।',
        reflectionQuestion: 'Why couldn’t Macbeth enjoy being king after seizing the throne?',
        reflectionAnswer:
          'Paranoia and conscience destroyed his sleep, trust, and sense of purpose.',
      },
      {
        chapterNumber: 2,
        title: 'Hamlet: Conscience, Doubt & Proof',
        titleBn: 'হ্যামলেট: বিবেক ও সিদ্ধান্তহীনতা',
        keyPrinciple: 'Reflection protects justice, yet endless delay carries real cost.',
        levels: {
          explorer:
            'Prince Hamlet stages a play for the guilty king just to watch his face and make sure he has real proof before acting!',
          student:
            '“To be, or not to be” weighs moral integrity against grief and corruption inside a political court.',
          mastery:
            'Meta-theatricality (“The play’s the thing”) uses art itself as an instrument of empirical psychological truth.',
        },
        summaryBn:
          'সঠিক প্রমাণ খোঁজার জন্য নাটকের ভেতর নাটক সাজিয়েও হ্যামলেটের অতিরিক্ত দ্বিধা শেষ পর্যন্ত বড় ট্র্যাজেডি ডেকে আনে।',
        reflectionQuestion: 'Why did Hamlet stage “The Mousetrap” play?',
        reflectionAnswer:
          'To test whether his uncle’s reaction confirmed guilt rather than trusting an unverified accusation.',
      },
      {
        chapterNumber: 3,
        title: 'King Lear: Flattery vs. Truth',
        titleBn: 'কিং লিয়ার: তোষামোদ বনাম সত্য',
        keyPrinciple: 'True loyalty speaks plainly; loud flattery vanishes in storms.',
        levels: {
          explorer:
            'An old king gives everything to daughters who make fancy fake speeches, and learns too late which daughter truly cared.',
          student:
            'Only after losing his palace in a storm does Lear develop empathy for the homeless and see past flattering court illusions.',
          mastery:
            'Shakespeare strips royal authority down to “unaccommodated man,” equating wisdom with shared vulnerability.',
        },
        summaryBn:
          'মিষ্টি কথার তোষামোদে ভুলে প্রকৃত শুভাকাঙ্ক্ষীকে অবহেলা করলে বিপদের দিনে কেউ পাশে থাকে না।',
        reflectionQuestion: 'What does Cordelia mean when she says “Love, and be silent”?',
        reflectionAnswer:
          'Genuine devotion proves itself through steady deeds rather than competitive speeches for reward.',
      },
      {
        chapterNumber: 4,
        title: 'Why Shakespeare Still Feels Modern',
        titleBn: 'আজও কেন শেক্সপিয়র প্রাসঙ্গিক',
        keyPrinciple: 'Human motives—jealousy, courage, forgiveness—change far slower than technology.',
        levels: {
          explorer:
            'Shakespeare invented hundreds of everyday phrases like “break the ice” and “heart of gold” that people still speak today!',
          student:
            'His plays remain open to every culture and staging because they ask ethical questions without preaching easy slogans.',
          mastery:
            'Polyphonic characterization lets villains and heroes articulate compelling worldviews, cultivating deep literary empathy.',
        },
        summaryBn:
          'প্রযুক্তি বদলালেও মানুষের ভয়, লোভ, ভালোবাসা ও বিবেকের দ্বন্দ্ব বদলায় না—তাই শেক্সপিয়রের নাটক সর্বকালের।',
        reflectionQuestion: 'Why do audiences sympathize partly even with flawed tragic figures?',
        reflectionAnswer:
          'Because Shakespeare shows recognizable human pressures behind their tragic choices.',
      },
    ],
  },
  {
    id: 'book-fables-panchatantra',
    title: "Panchatantra & Aesop's Fables: Wisdom Stories",
    titleBn: 'পঞ্চতন্ত্র ও ঈশপের গল্প: ছোটদের নীতি ও বুদ্ধির ভান্ডার',
    authorOrOrigin: 'Vishnu Sharma & Aesop · Classic Fables',
    era: 'Antiquity · Ages 6–12 & All Readers',
    category: 'literature-bangla',
    storeId: 'arts',
    subjectId: 'literature',
    ageBand: 'Ages 6–12',
    coverColorHex: '#92400e',
    readingMinutes: 18,
    synopsis:
      'Timeless animal stories teaching clever thinking, teamwork, honesty, patience, and why steady effort beats careless boasting.',
    synopsisBn:
      'বুদ্ধিমান খরগোশ, তৃষ্ণার্ত কাক, কচ্ছপ ও খরগোশ এবং একতার শক্তির মতো অমর নীতিগল্প যা শিশু-কিশোরদের চিন্তা ও চরিত্র গড়ে তোলে।',
    coreThesis:
      'Playful stories plant lifelong moral compasses—teaching foresight, teamwork, and humility naturally.',
    coreThesisBn:
      'মজার গল্পের ছলে বুদ্ধিমত্তা, দলীয় একতা, সততা ও ধৈর্যের শিক্ষা সারা জীবনের পাথেয় হয়ে থাকে।',
    keyTakeaways: [
      'Brainpower and calm observation solve problems bigger than muscle alone.',
      'Small consistent steps beat lazy overconfidence.',
      'True friendship stands loyal when trouble arrives.',
    ],
    keyTakeawaysBn: [
      'শান্ত মাথা ও উপস্থিতবুদ্ধি বড় শক্তিকেও হার মানাতে পারে।',
      'অহংকার না করে নিয়মিত চেষ্টা করলে লক্ষ্য পূরণ হয়।',
      'বিপদের সময়েই প্রকৃত বন্ধুত্ব ও একতার পরিচয় পাওয়া যায়।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Thirsty Crow & Problem Solving',
        titleBn: 'তৃষ্ণার্ত কাক ও সৃজনশীল সমাধান',
        keyPrinciple: 'When a direct reach fails, look at what small tools sit around you.',
        levels: {
          explorer:
            'A thirsty crow found a pitcher with water at the bottom. Instead of giving up, it dropped pebbles one by one until the water rose right to its beak!',
          student:
            'Long before Archimedes’ water-displacement formula, this fable taught creative scientific resourcefulness.',
          mastery:
            'Lateral problem solving transforms physical constraints into stepping stones through iterative small actions.',
        },
        summaryBn:
          'কলসির তলায় থাকা পানি নাগাল না পেলেও নুড়ি ফেলে জলস্তর ওপরে তুলে বুদ্ধিমান কাক তৃষ্ণা মিটিয়েছিল।',
        reflectionQuestion: 'Why didn’t the crow fly away or try to tip the heavy pitcher?',
        reflectionAnswer:
          'Tipping might spill every drop; dropping pebbles raised the water safely within reach.',
      },
      {
        chapterNumber: 2,
        title: 'The Clever Rabbit & the Lion',
        titleBn: 'বুদ্ধিমান খরগোশ ও সিংহ',
        keyPrinciple: 'Calm wit defeats loud bullying.',
        levels: {
          explorer:
            'A tiny rabbit led a boastful lion to a deep well and showed him his own reflection—the lion roared at himself and jumped right in!',
          student:
            'Panchatantra emphasizes practical statecraft (niti): thinking calmly under fear protects entire communities.',
          mastery:
            'Turning an adversary’s pride against itself forms a classic asymmetric strategic trope.',
        },
        summaryBn:
          'ছোট্ট খরগোশ কূয়োর পানিতে সিংহের নিজের ছায়া দেখিয়ে শান্ত মাথায় গায়ের জোরকে পরাজিত করেছিল।',
        reflectionQuestion: 'What made the lion defeat himself at the well?',
        reflectionAnswer:
          'Blind anger and vanity kept him from recognizing his own reflection.',
      },
      {
        chapterNumber: 3,
        title: 'The Bundle of Sticks & Flock of Doves',
        titleBn: 'একতাই বল: পায়রার ঝাঁক ও কাঠির আঁটি',
        keyPrinciple: 'Cooperation lifts burdens impossible for any lone individual.',
        levels: {
          explorer:
            'Caught under a hunter’s heavy net, tiny doves flapped their wings UP together at the same count—carrying the whole net into the sky to safety!',
          student:
            'Collective coordination overcomes structural traps that crush isolated actors acting selfishly.',
          mastery:
            'Solving collective-action dilemmas builds enduring social capital and resilience.',
        },
        summaryBn:
          'শিকারির জালে আটকা পড়া ছোট ঘুঘু পাখিরা একসাথে উড়াল দিয়ে জালসমেত আকাশে উড়ে প্রাণ বাঁচিয়েছিল।',
        reflectionQuestion: 'What happens if every bird pulls in a different direction?',
        reflectionAnswer:
          'They waste energy fighting each other and nobody escapes.',
      },
      {
        chapterNumber: 4,
        title: 'Slow & Steady vs. Overconfidence',
        titleBn: 'ধৈর্যশীল কচ্ছপ ও অহংকারী খরগোশ',
        keyPrinciple: 'Consistent daily habits beat sporadic bursts followed by neglect.',
        levels: {
          explorer:
            'Taking a nap halfway because you think you’re too fast to lose lets the steady tortoise cross the finish line smiling!',
          student:
            'Sustained daily practice compounds reliably across schoolwork, music, and athletic craft.',
          mastery:
            'Compounding consistency outperforms erratic talent in long-horizon mastery curves.',
        },
        summaryBn:
          'প্রতিদিনের ছোট ছোট নিয়মিত চেষ্টা অহংকার ও অলসতার চেয়ে সবসময় বেশি সফলতা এনে দেয়।',
        reflectionQuestion: 'What real advantage did the tortoise hold?',
        reflectionAnswer:
          'Unbroken focus on the finish line without underestimating the distance.',
      },
    ],
  },
  {
    id: 'book-history-bengal',
    title: 'History of Bengal: Ancient Janapadas to 1971',
    titleBn: 'বাংলার ইতিহাস: প্রাচীন জনপদ থেকে ১৯৭১',
    authorOrOrigin: 'South Asian Historical Archive',
    era: 'Ancient Delta–1971',
    category: 'history-civics',
    storeId: 'arts',
    subjectId: 'history',
    ageBand: 'All Ages',
    coverColorHex: '#14532d',
    readingMinutes: 27,
    synopsis:
      'Journey through Gangaridai, Pala learning centers, Sonargaon & muslin trade, the 1952 Language Movement, and the birth of independent Bangladesh.',
    synopsisBn:
      'প্রাচীন পুণ্ড্র-গঙ্গারিডাই ও পাল যুগের জ্ঞানচর্চা, সোনালি মসলিন ও সোনারগাঁ, ১৯৫২-এর ভাষা আন্দোলন থেকে ১৯৭১ সালের মহান মুক্তিযুদ্ধের ইতিহাস।',
    coreThesis:
      'Rivers shaped Bengal’s fertile trade and pluralistic culture, while courage for mother tongue and self-rule forged modern nationhood.',
    coreThesisBn:
      'নদীমাতৃক বাংলার উর্বর সংস্কৃতি ও বাণিজ্য, আর মাতৃভাষা ও ন্যায্য অধিকারের জন্য আপসহীন সংগ্রামই আমাদের ইতিহাস।',
    keyTakeaways: [
      'Nalanda–Paharpur–Vikramshila made medieval Bengal a global center of scholarship.',
      'Bengali muslin reached markets across Asia, Africa, and Europe for centuries.',
      '21st February 1952 inspired UNESCO International Mother Language Day worldwide.',
    ],
    keyTakeawaysBn: [
      'পাহাড়পুর ও ময়নামতির বৌদ্ধ বিহার প্রাচীন বাংলার উচ্চশিক্ষার উজ্জ্বল কেন্দ্র ছিল।',
      'ঢাকার মসলিন ও সোনালি পাট শতাব্দীর পর শতাব্দী বিশ্ববাণিজ্যে খ্যাতি এনে দিয়েছে।',
      '১৯৫২-এর একুশে ফেব্রুয়ারি আজ সারা বিশ্বে আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে পালিত হয়।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Rivers, Janapadas & the Pala Golden Age',
        titleBn: 'নদী, প্রাচীন জনপদ ও পাল যুগ',
        keyPrinciple: 'Delta geography nourished dense agriculture, weaving, and monastic universities.',
        levels: {
          explorer:
            'Long ago Bengal’s mighty rivers carried boats full of spices, terracotta art, and students traveling to giant brick libraries like Paharpur!',
          student:
            'Regions like Pundravardhana, Vanga, and Samatata flourished under Gupta and Pala dynasties, creating Mahasthangarh and Somapura Mahavihara.',
          mastery:
            'Charyapada manuscripts (8th–12th c.) document the earliest surviving literary Bangla alongside cosmopolitan maritime trade via Tamralipti.',
        },
        summaryBn:
          'মহাস্থানগড়, পাহাড়পুর ও ময়নামতির প্রত্নতাত্ত্বিক নিদর্শন প্রাচীন বাংলার সমৃদ্ধ নগরসভ্যতা ও শিক্ষাপ্রতিষ্ঠানের সাক্ষ্য দেয়।',
        reflectionQuestion: 'Why did huge river deltas historically support thriving early civilizations?',
        reflectionAnswer:
          'Alluvial silt replenished crop fertility annually while rivers served as natural trade highways.',
      },
      {
        chapterNumber: 2,
        title: 'Sultanate, Sonargaon & World Muslin',
        titleBn: 'সুলতানি আমল, সোনারগাঁ ও মসলিন',
        keyPrinciple: 'Craftsmanship and vernacular patronage built a distinct regional synthesis.',
        levels: {
          explorer:
            'Artisans along the Shitalakshya River spun cotton thread so unbelievably fine that a whole muslin sari could pass right through a finger ring!',
          student:
            'Independent Bengal Sultanate rulers patronized Bengali poetry, built Sixty Dome Mosque, and made Bengal a textile powerhouse before colonial disruption.',
          mastery:
            'Proto-industrial Bengal accounted for a major share of global textile exports prior to deindustrialization under East India Company tariffs.',
        },
        summaryBn:
          'ষাটগম্বুজ মসজিদ, সোনারগাঁ ও জগদ্বিখ্যাত ঢাকাই মসলিন মধ্যযুগীয় বাংলার শিল্প ও স্থাপত্যের চূড়ান্ত উৎকর্ষ।',
        reflectionQuestion: 'Why could Dhaka muslin only be spun best near Bengal’s humid riverbanks?',
        reflectionAnswer:
          'Fine Phuti karpas cotton fibers required exact river moisture so threads wouldn’t snap during hand-spinning.',
      },
      {
        chapterNumber: 3,
        title: 'Renaissance, 1952 & Mother Language',
        titleBn: 'জাগরণ ও ১৯৫২-এর ভাষা আন্দোলন',
        keyPrinciple: 'Defending one’s mother tongue protects dignity, education, and identity.',
        levels: {
          explorer:
            'On February 21, 1952, brave students stood up peacefully so children could read, write, and dream in their own Bangla language!',
          student:
            'Starting with reformists like Rammohan, Vidyasagar, and Begum Rokeya—who championed girls’ education—civic awakening culminated in the Language Movement.',
          mastery:
            'Ekushey February established linguistic self-determination as a democratic cornerstone, honored globally by UNESCO since 1999.',
        },
        summaryBn:
          'বেগম রোকেয়ার নারীশিক্ষা প্রসার থেকে সালাম, বরকত, রফিক, জব্বারের আত্মত্যাগ—মাতৃভাষা ও অধিকার রক্ষার অবিনাশী অধ্যায়।',
        reflectionQuestion: 'Why did UNESCO declare February 21 International Mother Language Day?',
        reflectionAnswer:
          'To honor the unique sacrifice in Dhaka for linguistic diversity and mother-tongue education worldwide.',
      },
      {
        chapterNumber: 4,
        title: '1971: Liberation & Constitutional Ideals',
        titleBn: '১৯৭১: মহান মুক্তিযুদ্ধ ও স্বাধীনতা',
        keyPrinciple: 'Equality, human dignity, and social justice anchored a new republic.',
        levels: {
          explorer:
            'Ordinary farmers, students, mothers, and freedom fighters worked bravely together for nine months in 1971 to win a free country.',
          student:
            'Following the historic March 1971 call, the nine-month Liberation War united people across every district, leading to victory on December 16, 1971.',
          mastery:
            'The April 1971 Proclamation of Independence grounded sovereignty in equality, human dignity, and social justice.',
        },
        summaryBn:
          'সর্বস্তরের মানুষের ৯ মাসের ত্যাগ ও বীরত্বে ১৬ ডিসেম্বর ১৯৭১ সালে অর্জিত হয় স্বাধীন ও সার্বভৌম বাংলাদেশ।',
        reflectionQuestion: 'What core three ideals anchored the 1971 Proclamation of Independence?',
        reflectionAnswer: 'Equality, human dignity, and social justice.',
      },
    ],
  },
  {
    id: 'book-sapiens-civilization',
    title: 'Sapiens & The Arc of Human Civilization',
    titleBn: 'মানবসভ্যতার মহাযাত্রা: আদিম যুগ থেকে আধুনিক বিশ্ব',
    authorOrOrigin: 'World Anthropology & History Synthesis',
    era: 'Prehistory–21st Century',
    category: 'history-civics',
    storeId: 'arts',
    subjectId: 'history',
    ageBand: 'All Ages',
    coverColorHex: '#365314',
    readingMinutes: 25,
    synopsis:
      'Trace four great pivots—language & shared myths, farming villages, writing & empires, and modern science & global interdependence.',
    synopsisBn:
      'ভাষা, কৃষিবিপ্লব, লিপি-আইন-বাণিজ্য এবং বিজ্ঞান ও তথ্যবিপ্লব কীভাবে মানুষকে গুহা থেকে আধুনিক বৈশ্বিক সমাজে নিয়ে এসেছে।',
    coreThesis:
      'Flexible large-scale cooperation—powered by shared language, law, money, and knowledge—enabled humanity to build civilizations.',
    coreThesisBn:
      'ভাষা, লিখিত আইন, অর্থ ও জ্ঞান-বিনিময়ের মাধ্যমে বৃহৎ পরিসরে দলগত সহযোগিতাই মানবসভ্যতার আসল চালিকাশক্তি।',
    keyTakeaways: [
      'Language let early bands share warning, tools, and trust beyond small families.',
      'Agriculture fed cities and specialists—craftsmen, teachers, scribes.',
      'Writing preserved discoveries across generations so knowledge compounded.',
    ],
    keyTakeawaysBn: [
      'ভাষা মানুষকে শুধু খাদ্য নয়, বরং ধারণা ও কৌশল ভাগাভাগি করার শক্তি দিয়েছে।',
      'কৃষি মানুষের স্থায়ী বসতি, শহর ও বিভিন্ন পেশা গড়ে তুলেছে।',
      'লিপি ও ছাপাখানা জ্ঞানকে এক প্রজন্ম থেকে আরেক প্রজন্মে ধরে রেখেছে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Language, Fire & Shared Cooperation',
        titleBn: 'আগুন, ভাষা ও সহযোগিতা',
        keyPrinciple: 'Cooking unlocked brain energy while complex language scaled teamwork.',
        levels: {
          explorer:
            'Unlike ants that follow fixed instincts, humans can invent new games, new tools, and team up with hundreds of strangers fairly!',
          student:
            'Around 70,000 years ago, symbolic language allowed flexible planning, complex tool traditions, and global migration across continents.',
          mastery:
            'Cumulative cultural evolution lets human groups refine knowledge far faster than biological gene mutations alone.',
        },
        summaryBn:
          'আগুনের ব্যবহার ও ভাষার বিকাশ মানুষকে ছোট গোষ্ঠী পেরিয়ে বড় দলে সুশৃঙ্খলভাবে কাজ করার সুযোগ করে দেয়।',
        reflectionQuestion: 'Why did cooking food help early human brains grow larger?',
        reflectionAnswer:
          'Cooking pre-digests starches and proteins, yielding far more usable calories while saving gut digestion energy.',
      },
      {
        chapterNumber: 2,
        title: 'The Agricultural Revolution',
        titleBn: 'কৃষিবিপ্লব ও প্রথম শহর',
        keyPrinciple: 'Surplus grain created villages, specialization, and inequality.',
        levels: {
          explorer:
            'Planting wheat, rice, and lentils meant families didn’t have to wander all year—soon villages grew potters, carpenters, and schools!',
          student:
            'Domestication near the Fertile Crescent, Indus, Yangtze, and Nile created surplus grain, population booms, and early storage towns.',
          mastery:
            'Sedentary farming raised aggregate calories while simultaneously narrowing ancient diets and introducing infectious crowd diseases.',
        },
        summaryBn:
          'ধান-গম চাষের শুরু মানুষকে যাযাবর জীবন ছেড়ে নদী-তীরবর্তী স্থায়ী শহর ও কারিগরি পেশা গড়ে তুলতে সাহায্য করে।',
        reflectionQuestion: 'How did storing extra wheat lead to the invention of writing?',
        reflectionAnswer:
          'City granaries needed reliable tallies of who stored, traded, or owed grain—giving birth to clay tokens and cuneiform.',
      },
      {
        chapterNumber: 3,
        title: 'Money, Writing & Connected Trade',
        titleBn: 'লিপি, মুদ্রা ও বাণিজ্য পথ',
        keyPrinciple: 'Shared accounting systems bridge strangers across languages.',
        levels: {
          explorer:
            'Imagine trying to trade 50 heavy watermelons for shoes! Coins and writing let people trade across oceans smoothly.',
          student:
            'Alphabet scripts, minted coins, and Silk Road networks connected Mediterranean, South Asian, and East Asian inventions—paper, silk, spices, and zero.',
          mastery:
            'Monetary trust and standardized legal codes cut transaction friction across multi-ethnic empires.',
        },
        summaryBn:
          'মুদ্রা ও লিখিত হিসাব ভিন্ন ভাষা ও অঞ্চলের মানুষের মধ্যে বাণিজ্য ও সাংস্কৃতিক বিনিময়কে সহজ করে তোলে।',
        reflectionQuestion: 'Why is the Hindu-Arabic numeral zero considered one of civilization’s greatest leaps?',
        reflectionAnswer:
          'Positional zero makes arithmetic, banking, engineering, and computing vastly faster than clumsy Roman numerals.',
      },
      {
        chapterNumber: 4,
        title: 'Science & Our Shared Future',
        titleBn: 'বিজ্ঞানবিপ্লব ও আমাদের ভবিষ্যৎ',
        keyPrinciple: 'Admitting “we don’t know yet” sparked exponential discovery.',
        levels: {
          explorer:
            'Older books thought humans already knew everything; modern science asks questions, tests experiments, and makes life healthier for everyone.',
          student:
            'Pairing curiosity with printing, medicine, clean water, and renewable energy multiplied life expectancy worldwide within three centuries.',
          mastery:
            'Global interdependence now requires planetary stewardship—aligning technological power with ecological limits and human rights.',
        },
        summaryBn:
          '“আমরা এখনো জানি না”—এই বিনয়ী স্বীকারোক্তি থেকেই আধুনিক বিজ্ঞান, চিকিৎসাবিদ্যা ও বৈশ্বিক প্রগতির জন্ম।',
        reflectionQuestion: 'How did the printing press accelerate the Scientific Revolution?',
        reflectionAnswer:
          'It let researchers across countries check, replicate, and build upon exact published tables and diagrams.',
      },
    ],
  },
  {
    id: 'book-ancient-empires',
    title: 'Silk Road, Greece & Classical Civilizations',
    titleBn: 'সিল্ক রোড, গ্রিস ও প্রাচীন সাম্রাজ্যের ইতিবৃত্ত',
    authorOrOrigin: 'Comparative Ancient History',
    era: '3000 BCE–1400 CE',
    category: 'history-civics',
    storeId: 'arts',
    subjectId: 'history',
    ageBand: 'Ages 13–18',
    coverColorHex: '#78350f',
    readingMinutes: 20,
    synopsis:
      'Compare Mesopotamia, Egypt, Indus Valley, Athens, Rome, Gupta India, and the Silk Road exchanges that linked the ancient world.',
    synopsisBn:
      'মেসোপটেমিয়া, মিশর, সিন্ধু সভ্যতা, গ্রিস-রোম ও সিল্ক রোডের মাধ্যমে প্রাচীন বিশ্বের জ্ঞান, শিল্প ও বাণিজ্যের মেলবন্ধন।',
    coreThesis:
      'No great civilization grew in isolation—every classic golden age borrowed technologies and ideas from neighbors.',
    coreThesisBn:
      'কোনো সভ্যতাই একা গড়ে ওঠেনি; ব্যবসা ও ভ্রমণের মাধ্যমে প্রতিটি স্বর্ণযুগ একে অন্যের কাছ থেকে শিখেছে।',
    keyTakeaways: [
      'Indus Valley pioneered covered brick drainage and urban grids.',
      'Classical Athens experimented with citizen assemblies and drama.',
      'The Silk Road carried silk, paper, algebra, spices, and compasses.',
    ],
    keyTakeawaysBn: [
      'সিন্ধু সভ্যতায় পাকা নর্দমা ও পরিকল্পিত শহরের নিদর্শন ছিল।',
      'গ্রিস গণতন্ত্র, দর্শন ও নাট্যকলার ভিত্তি রচনা করেছিল।',
      'সিল্ক রোড কেবল পণ্য নয়, কাগজ, কম্পাস ও গণিতের জ্ঞান ছড়িয়ে দিয়েছিল।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Nile, Tigris & Indus Urban Planning',
        titleBn: 'নদী-তীরের প্রথম নগর সভ্যতা',
        keyPrinciple: 'Civic engineering—water supply, sanitation, standard weights—makes dense cities livable.',
        levels: {
          explorer:
            'Over 4,500 years ago, people in Mohenjo-daro built neat brick streets, home bathrooms, and covered drains cleaner than many later cities!',
          student:
            'While Egypt built stone monuments and Mesopotamia drafted Hammurabi’s laws, Indus artisans standardized weights and maritime dockyards at Lothal.',
          mastery:
            'Hydraulic management and standardized metrology reveal high administrative coordination across Indus settlements without royal tombs.',
        },
        summaryBn:
          'নদীমাতৃক সভ্যতাগুলোতে বাঁধ, স্নানাগার, উন্নত পয়ঃনিষ্কাশন ও ওজন পরিমাপের একক প্রাচীন প্রকৌশলের বিস্ময়কর উদাহরণ।',
        reflectionQuestion: 'What stands out most about Indus Valley cities compared to other ancient capitals?',
        reflectionAnswer:
          'Remarkable investment in public sanitation, brick grids, and uniform weights for everyday citizens.',
      },
      {
        chapterNumber: 2,
        title: 'Athens, Civic Debate & Golden Ages',
        titleBn: 'এথেন্স, নাগরিক বিতর্ক ও স্বর্ণযুগ',
        keyPrinciple: 'Open debate in civic squares fuels philosophy, history, and geometry.',
        levels: {
          explorer:
            'Ancient Greeks gathered in open markets called agoras to debate city rules, stage plays, and cheer Olympic footraces!',
          student:
            'Athenian direct democracy excluded women and enslaved people, yet introduced accountability by voting, jury trials, and open inquiry.',
          mastery:
            'Thucydides pioneered secular evidence-based history by analyzing power, fear, and self-interest rather than attributing wars to myths.',
        },
        summaryBn:
          'প্রাচীন এথেন্সে জনসভা, বিচারব্যবস্থা ও উন্মুক্ত যুক্তি-তর্কের চর্চা পরবর্তী গণতান্ত্রিক রাষ্ট্রচিন্তার ভিত্তি গড়ে।',
        reflectionQuestion: 'Who could vote in ancient Athens and who was excluded?',
        reflectionAnswer:
          'Free adult male citizens voted directly, while women, foreigners, and enslaved people were excluded.',
      },
      {
        chapterNumber: 3,
        title: 'Maurya, Rome & Law Across Borders',
        titleBn: 'মৌর্য ও রোমান সাম্রাজ্য: শাসন ও আইন',
        keyPrinciple: 'Roads, postal relays, and written edicts hold vast regions together.',
        levels: {
          explorer:
            'Emperor Ashoka carved kind rules on stone pillars across India, planting shade trees and building hospitals for travelers and animals alike!',
          student:
            'Rome united the Mediterranean with aqueducts and legal codes, while Ashoka pivoted from conquest at Kalinga to moral welfare (Dhamma).',
          mastery:
            'Imperial longevity depended equally on fiscal roads, provincial autonomy, and shared legal or ethical legitimacy.',
        },
        summaryBn:
          'সম্রাট অশোকের শিলালিপিতে কল্যাণমূলক শাসন আর রোমানদের সড়ক-সেতু-আইন বড় সাম্রাজ্য পরিচালনার মূল ভিত্তি ছিল।',
        reflectionQuestion: 'How did the Battle of Kalinga transform Emperor Ashoka’s rule?',
        reflectionAnswer:
          'Witnessing massive suffering led him to renounce wars of conquest and champion civic welfare and tolerance.',
      },
      {
        chapterNumber: 4,
        title: 'The Silk Road & House of Wisdom',
        titleBn: 'সিল্ক রোড ও বায়তুল হিকমাহ',
        keyPrinciple: 'Translation movements save and multiply human knowledge across eras.',
        levels: {
          explorer:
            'Caravans of camels carried silk from China, spices from India, and glass from Rome, trading stories and recipes along desert oases!',
          student:
            'In Baghdad’s House of Wisdom, scholars like Al-Khwarizmi blended Greek geometry with Indian numerals to create algebra and modern medicine.',
          mastery:
            'Cross-Eurasian intellectual synthesis between Baghdad, Cordoba, Nalanda, and Chang’an preserved and propelled world science.',
        },
        summaryBn:
          'বায়তুল হিকমাহ-য় গ্রিক, ভারতীয় ও পারসিক গ্রন্থ অনুবাদের ফলেই আল-খোয়ারিজমির অ্যালজেব্রা ও আধুনিক অপটিক্সের বিকাশ ঘটে।',
        reflectionQuestion: 'Where does the English word “Algorithm” come from?',
        reflectionAnswer:
          'From the Latinized name of scholar Muhammad ibn Musa al-Khwarizmi.',
      },
    ],
  },
  {
    id: 'book-constitutional-rights',
    title: 'Constitutional Law & Citizen Rights',
    titleBn: 'সাংবিধানিক আইন ও নাগরিক অধিকার',
    authorOrOrigin: 'Public Law & Civic Institutions',
    era: 'Magna Carta–Modern Constitutions',
    category: 'history-civics',
    storeId: 'commerce',
    subjectId: 'law',
    ageBand: 'Ages 13–18',
    coverColorHex: '#1e3a8a',
    readingMinutes: 20,
    synopsis:
      'Understand rule of law, separation of powers, fundamental human rights, contracts, and why fair courts protect ordinary citizens.',
    synopsisBn:
      'আইনের শাসন, ক্ষমতার পৃথক্‌করণ, মৌলিক মানবাধিকার, চুক্তি আইন এবং স্বাধীন বিচার বিভাগের প্রয়োজনীয়তা।',
    coreThesis:
      'Constitutions bind rulers as firmly as citizens so freedom rests on institutions rather than personal whim.',
    coreThesisBn:
      'সংবিধান শাসক ও নাগরিক উভয়কেই আইনের অধীনে রাখে যাতে মানুষের অধিকার ব্যক্তির মর্জির ওপর নির্ভর না করে।',
    keyTakeaways: [
      'Rule of law means nobody stands above fair legal accountability.',
      'Legislature, executive, and independent judiciary check one another.',
      'Rights carry corresponding civic duties to respect others’ rights.',
    ],
    keyTakeawaysBn: [
      'আইনের শাসন মানে আইনের চোখে ধনী-দরিদ্র ও ক্ষমতাবান সবাই সমান।',
      'আইনসভা, শাসনবিভাগ ও স্বাধীন বিচারবিভাগ একে অপরের ভারসাম্য রক্ষা করে।',
      'নিজের অধিকার ভোগের পাশাপাশি অন্যের অধিকারের সম্মান করা নাগরিক দায়িত্ব।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Why Laws Bind Even Leaders',
        titleBn: 'আইনের শাসন: কেউ আইনের ঊর্ধ্বে নয়',
        keyPrinciple: 'Power without legal limits inevitably tempts abuse.',
        levels: {
          explorer:
            'Imagine playing football where the referee changes the rules halfway just to help one team win—that wouldn’t be fair! A constitution is the fair rulebook for a whole country.',
          student:
            'From the 1215 Magna Carta to modern charters, rule of law ensures taxes, arrests, and punishments follow transparent public laws.',
          mastery:
            'Substantive rule of law combines procedural fairness, non-retroactivity, and judicial review against ultra vires executive orders.',
        },
        summaryBn:
          'খেলার নিয়ম সবার জন্য সমান না হলে যেমন খেলা হয় না, তেমনি সংবিধান ছাড়া কোনো রাষ্ট্র ন্যায়বিচার দিতে পারে না।',
        reflectionQuestion: 'What is the difference between “rule BY law” and “rule OF law”?',
        reflectionAnswer:
          'Rule OF law limits rulers themselves under independent courts, whereas rule BY law uses decrees solely as tools of control.',
      },
      {
        chapterNumber: 2,
        title: 'Three Branches & Checks and Balances',
        titleBn: 'ক্ষমতার পৃথক্‌করণ ও ভারসাম্য',
        keyPrinciple: 'Ambition must counteract ambition across separate branches.',
        levels: {
          explorer:
            'One group writes the rules (Legislature), one runs daily schools and roads (Executive), and wise judges settle disputes fairly (Judiciary).',
          student:
            'Montesquieu warned that merging lawmaking and judging in the same hands destroys impartial justice.',
          mastery:
            'Independent judicial security of tenure shields constitutional interpretation from short-term partisan pressure.',
        },
        summaryBn:
          'আইন প্রণয়ন, প্রশাসন ও বিচারকাজ আলাদা প্রতিষ্ঠানের হাতে থাকলে ক্ষমতার অপব্যবহার রোধ করা সহজ হয়।',
        reflectionQuestion: 'Why must judges remain independent from politicians?',
        reflectionAnswer:
          'So courts can fairly rule when a government ministry itself violates citizens’ constitutional rights.',
      },
      {
        chapterNumber: 3,
        title: 'Fundamental Rights & Fair Trial',
        titleBn: 'মৌলিক অধিকার ও ন্যায়বিচারের নিশ্চয়তা',
        keyPrinciple: 'Free speech, equal protection, and due process protect human dignity.',
        levels: {
          explorer:
            'Every child has the right to learn, speak respectfully, stay safe from harm, and be treated kindly regardless of background.',
          student:
            'Innocent until proven guilty, freedom from arbitrary arrest, and equal access to education anchor modern constitutional bills of rights.',
          mastery:
            'Proportionality tests balance fundamental rights cleanly against legitimate narrow public safety restrictions.',
        },
        summaryBn:
          'মত প্রকাশের স্বাধীনতা, শিক্ষার সুযোগ, আইনি সুরক্ষা ও নির্দোষ অনুমান আধুনিক মানবাধিকারের অবিচ্ছেদ্য অংশ।',
        reflectionQuestion: 'What does “presumption of innocence” mean in a fair court?',
        reflectionAnswer:
          'The prosecution carries the full burden of proving guilt beyond reasonable doubt; nobody needs to prove their innocence.',
      },
      {
        chapterNumber: 4,
        title: 'Contracts, Digital Rights & Everyday Law',
        titleBn: 'চুক্তি, ডিজিটাল অধিকার ও দৈনন্দিন আইন',
        keyPrinciple: 'Clear voluntary agreements power honest commerce and privacy.',
        levels: {
          explorer:
            'When you promise to mow a neighbor’s lawn for 500 taka and finish the job honestly, fair rules protect both you and your neighbor.',
          student:
            'Valid contracts require offer, acceptance, genuine consent, and consideration; modern data-privacy laws protect citizens’ digital footprints.',
          mastery:
            'Statutory consumer protections correct asymmetric fine-print power between global platforms and individual users.',
        },
        summaryBn:
          'চুক্তির শর্তাবলি, ভোক্তা অধিকার ও ব্যক্তিগত ডেটা সুরক্ষা আধুনিক সমাজের প্রতিদিনের নিরাপদ লেনদেন নিশ্চিত করে।',
        reflectionQuestion: 'Why isn’t a contract signed under threat legally valid?',
        reflectionAnswer:
          'Genuine free consent is mandatory—coercion voids legal agreement.',
      },
    ],
  },
  {
    id: 'book-scientific-revolution',
    title: 'The Scientific & Industrial Revolutions',
    titleBn: 'বিজ্ঞান ও শিল্প বিপ্লবের ইতিহাস',
    authorOrOrigin: 'History of Science & Technology',
    era: '1543–1900s',
    category: 'history-civics',
    storeId: 'arts',
    subjectId: 'history',
    ageBand: 'Ages 13–18',
    coverColorHex: '#334155',
    readingMinutes: 22,
    synopsis:
      'From telescopes and steam engines to electricity and vaccines—how experiment-driven inquiry remade work, cities, and human longevity.',
    synopsisBn:
      'দূরবীক্ষণ যন্ত্র, বাষ্পীয় ইঞ্জিন, বিদ্যুৎ ও টিকা কীভাবে মানুষের গড় আয়ু, যাতায়াত ও উৎপাদন ব্যবস্থাকে আমূল বদলে দিয়েছিল।',
    coreThesis:
      'Pairing experimental verification with mechanical and electrical energy unlocked unprecedented productivity and public health.',
    coreThesisBn:
      'পরীক্ষামূলক বিজ্ঞান ও যান্ত্রিক শক্তির সমন্বয় মানব ইতিহাসে অভূতপূর্ব উৎপাদন ও স্বাস্থ্যোন্নতি এনেছে।',
    keyTakeaways: [
      'Observation and reproducible experiments replaced blind dogma.',
      'Steam, steel, and electricity transformed transport and factories.',
      'Sanitation and germ theory saved more lives than any invention before.',
    ],
    keyTakeawaysBn: [
      'অন্ধ অনুমানের বদলে পর্যবেক্ষণ ও পরীক্ষা সত্য যাচাইয়ের মানদণ্ড হয়ে ওঠে।',
      'বাষ্পীয় ইঞ্জিন, রেলপথ ও বিদ্যুৎ যোগাযোগ ও শিল্প উৎপাদনকে বহুগুণ বাড়িয়ে দেয়।',
      'বিশুদ্ধ পানি ও জীবাণুতত্ত্ব মানুষের গড় আয়ু দ্বিগুণের বেশি বাড়িয়ে দেয়।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Telescopes, Microscopes & Empirical Proof',
        titleBn: 'দূরবীন, অণুবীক্ষণ ও পরীক্ষামূলক প্রমাণ',
        keyPrinciple: 'New instruments extend human senses into hidden worlds.',
        levels: {
          explorer:
            'Galileo pointed a handmade spyglass at Jupiter and spotted moons orbiting another planet, while Leeuwenhoek peered into rainwater and found tiny swimming microbes!',
          student:
            'Bacon’s empirical method and Royal Society journals demanded experiments anyone could repeat rather than appeals to ancient authority.',
          mastery:
            'Instrument-mediated observation coupled with mathematical modeling broke the boundary between terrestrial mechanics and celestial physics.',
        },
        summaryBn:
          'দূরবীন মহাকাশের নতুন জগৎ আর অণুবীক্ষণ যন্ত্র এক ফোঁটা পানির ভেতর ক্ষুদ্র জীবাণুর জগৎ মানুষের চোখের সামনে খুলে দেয়।',
        reflectionQuestion: 'Why was repeatability so revolutionary in early scientific journals?',
        reflectionAnswer:
          'Claims stood on open verifiable evidence anyone could test rather than personal status.',
      },
      {
        chapterNumber: 2,
        title: 'Coal, Steam & Factories',
        titleBn: 'কয়লা, বাষ্পীয় ইঞ্জিন ও কারখানা যুগ',
        keyPrinciple: 'Heat engines freed work from human and animal muscle limits.',
        levels: {
          explorer:
            'James Watt improved an engine powered by boiling steam so trains could pull whole towns of cargo across iron rails.',
          student:
            'Mechanization skyrocketed textile output while creating harsh early factory towns that forced labor laws, child-education rules, and trade unions.',
          mastery:
            'Thermodynamics emerged directly from engineers trying to maximize Carnot heat-to-work efficiency.',
        },
        summaryBn:
          'বাষ্পীয় ইঞ্জিন যাতায়াত ও উৎপাদন দ্রুত করলেও শুরুর কারখানাগুলোর কঠিন পরিবেশ শ্রম-আইন ও শিশুশিক্ষা বাধ্যতামূলক করার দাবি তোলে।',
        reflectionQuestion: 'What social reforms eventually protected workers during industrialization?',
        reflectionAnswer:
          'Bans on child labor, safety inspections, weekend limits, and universal public schooling.',
      },
      {
        chapterNumber: 3,
        title: 'Faraday, Maxwell & The Electric Grid',
        titleBn: 'ফ্যারাডে, ম্যাক্সওয়েল ও বিদ্যুৎ বিপ্লব',
        keyPrinciple: 'Invisible magnetic and electric fields power light, motors, and radio.',
        levels: {
          explorer:
            'Michael Faraday—a poor bookbinder’s boy who loved reading every book he bound—discovered how spinning magnets make electricity flow!',
          student:
            'Electromagnetic induction enabled power generators, electric motors, telegraph lines, and wireless radio communication.',
          mastery:
            'Maxwell’s four partial differential equations unified electricity, magnetism, and light into a single electromagnetic field.',
        },
        summaryBn:
          'মাইকেল ফ্যারাডের তড়িৎ-চৌম্বক আবেশ আবিষ্কারই আজকের পাওয়ার গ্রিড, মোটর ও আধুনিক বৈদ্যুতিক সভ্যতার ভিত্তি।',
        reflectionQuestion: 'How did Faraday learn science without attending elite universities?',
        reflectionAnswer:
          'Through tireless curiosity—reading books while binding them and repeating every experiment himself.',
      },
      {
        chapterNumber: 4,
        title: 'Germ Theory, Clean Water & Longevity',
        titleBn: 'জীবাণুতত্ত্ব ও মানব আয়ুষ্কালের উল্লম্ফন',
        keyPrinciple: 'Microscopic hygiene triumphs over once-fatal plagues.',
        levels: {
          explorer:
            'Before Pasteur and Lister, doctors didn’t know invisible germs lived on unwashed hands; simple handwashing and vaccines saved millions of children!',
          student:
            'Pasteurization, antiseptic surgery, municipal sewage pipes, and vaccines doubled global life expectancy from ~32 years to over 72.',
          mastery:
            'Public-health infrastructure yields higher mortality drops per dollar than almost any late-stage clinical intervention.',
        },
        summaryBn:
          'জীবাণুতত্ত্ব, হাত ধোয়া, পরিচ্ছন্ন পয়ঃনিষ্কাশন ও টিকা আবিষ্কার মানব ইতিহাসে সবচেয়ে বেশি মানুষের প্রাণ বাঁচিয়েছে।',
        reflectionQuestion: 'Why did Ignaz Semmelweis’s handwashing discovery face resistance before Pasteur?',
        reflectionAnswer:
          'Without knowing invisible bacteria existed, physicians struggled to believe clean-looking hands carried lethal agents.',
      },
    ],
  },
  {
    id: 'book-world-geography',
    title: 'World Geography, Oceans & Climate Belts',
    titleBn: 'বিশ্ব ভূগোল, মহাসাগর ও জলবায়ু বলয়',
    authorOrOrigin: 'Earth & Human Geography Atlas',
    era: 'Global Spatial Literacy',
    category: 'history-civics',
    storeId: 'arts',
    subjectId: 'geography',
    ageBand: 'All Ages',
    coverColorHex: '#0369a1',
    readingMinutes: 21,
    synopsis:
      'Explore continents, monsoons, ocean currents, mountain rain shadows, fertile deltas, and how geography shapes cities and climate.',
    synopsisBn:
      'মহাদেশ, মৌসুমি বায়ু, সমুদ্রস্রোত, নদী-বদ্বীপ ও পাহাড়ের অবস্থান কীভাবে মানুষের বসতি, কৃষি ও জলবায়ু নিয়ন্ত্রণ করে।',
    coreThesis:
      'Latitude, elevation, mountain barriers, and ocean currents explain nearly every climate zone and historic trade corridor on Earth.',
    coreThesisBn:
      'অক্ষাংশ, উচ্চতা, পর্বতমালা ও সমুদ্রস্রোতের অবস্থান থেকেই পৃথিবীর প্রতিটি অঞ্চলের আবহাওয়া ও সভ্যতার বিকাশ বোঝা যায়।',
    keyTakeaways: [
      'Latitude drives solar angle; oceans moderate coastal temperatures.',
      'The Himalayas steer South Asian summer monsoons over Bengal and India.',
      'River deltas host dense life while demanding careful flood resilience.',
    ],
    keyTakeawaysBn: [
      'সূর্যরশ্মির কোণ ও সমুদ্রের সান্নিধ্য অঞ্চলভেদে তাপমাত্রা নির্ধারণ করে।',
      'হিমালয় পর্বতমালা মৌসুমি বায়ুকে আটকে দক্ষিণ এশিয়ায় প্রচুর বৃষ্টি ঝরায়।',
      'নদীর বদ্বীপ অত্যন্ত উর্বর হলেও জলবায়ু পরিবর্তনের ঝুঁকি থেকে রক্ষার দাবি রাখে।',
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Continents, Plates & Mountain Chains',
        titleBn: 'মহাদেশ, টেকটনিক প্লেট ও পর্বতশ্রেণি',
        keyPrinciple: 'Slow colliding crust plates raise towering peaks and ocean trenches.',
        levels: {
          explorer:
            'Look at South America and Africa on a map—they fit together like puzzle pieces because all continents once formed a giant supercontinent!',
          student:
            'When the Indian plate collided with Eurasia, it pushed up the Himalayas—and that rise still lifts Mount Everest millimeters each year.',
          mastery:
            'Convection cells in Earth’s viscous mantle drive divergent ridges, subduction zones, and seismic volcanic arcs.',
        },
        summaryBn:
          'ভূত্বকের বিশাল প্লেটগুলোর ধীর সংঘর্ষেই হিমালয় পর্বতমালা তৈরি হয়েছে এবং প্লেট সীমান্তেই বেশিরভাগ ভূমিকম্প ঘটে।',
        reflectionQuestion: 'Why are ancient fossil seashells sometimes found high up in the Himalayas?',
        reflectionAnswer:
          'Those rocks once lay on the ancient Tethys ocean floor before tectonic collision lifted them skyward.',
      },
      {
        chapterNumber: 2,
        title: 'Monsoons, Trade Winds & Rain Shadows',
        titleBn: 'মৌসুমি বায়ু ও বৃষ্টিপাতের বিজ্ঞান',
        keyPrinciple: 'Differential land–sea heating drives seasonal winds bearing ocean moisture.',
        levels: {
          explorer:
            'In summer, land heats up faster than the cool Bay of Bengal; warm air rises over land and pulls rain clouds sweeping inland!',
          student:
            'Moist winds climb coastal mountains, cool, and drop heavy rain on the windward slope while leaving the far side (rain shadow) arid.',
          mastery:
            'ITCZ seasonal migration paired with Coriolis deflection organizes Hadley circulation cells, tropical monsoons, and 30° subtropical desert belts.',
        },
        summaryBn:
          'গ্রীষ্মে স্থলভাগ দ্রুত গরম হয়ে নিম্নচাপ সৃষ্টি করায় বঙ্গোপসাগর থেকে জলীয় বাষ্পপূর্ণ মৌসুমি বায়ু ছুটে এসে বর্ষা আনে।',
        reflectionQuestion: 'Why do most of the world’s largest deserts lie near 30° North and South latitude?',
        reflectionAnswer:
          'Dry cooled upper air from equatorial Hadley cells descends around 30° latitude, warming and evaporating moisture.',
      },
      {
        chapterNumber: 3,
        title: 'Great River Deltas & Port Cities',
        titleBn: 'মহা-বদ্বীপ ও বন্দর নগরী',
        keyPrinciple: 'Where rivers meet ocean tides, silt builds fertile lowlands and global hubs.',
        levels: {
          explorer:
            'The Ganges–Brahmaputra–Meghna Delta is the largest river delta on Earth—forming green islands, mangrove Sundarbans, and rich rice fields!',
          student:
            'Deltas depend on steady upstream sediment; upstream dams or rising seas heighten coastal salinity and erosion risks.',
          mastery:
            'Mangrove root systems attenuate storm-surge wave energy, making Sundarbans conservation critical coastal infrastructure.',
        },
        summaryBn:
          'পদ্মা-মেঘনা-যমুনার সম্মিলিত বদ্বীপ বিশ্বের বৃহত্তম, আর সুন্দরবনের ম্যানগ্রোভ বন প্রাকৃতিক ঢাল হিসেবে ঘূর্ণিঝড় থেকে উপকূলকে বাঁচায়।',
        reflectionQuestion: 'Why are mangrove forests vital barriers against tropical cyclones?',
        reflectionAnswer:
          'Dense intertwined roots absorb wave surge force, trap sediment, and protect inland farmland from saltwater flooding.',
      },
      {
        chapterNumber: 4,
        title: 'Map Projections & Global Interdependence',
        titleBn: 'মানচিত্র অভিক্ষেপ ও বৈশ্বিক সংযোগ',
        keyPrinciple: 'Every flat map trades area accuracy against angle shape.',
        levels: {
          explorer:
            'Try peeling an orange and squishing the peel flat—you have to stretch part of it! That is why flat maps make Greenland look huge compared to Africa.',
          student:
            'Mercator preserves compass angles for sailors while exaggerating polar area; Winkel tripel and Robinson balance size and shape better.',
          mastery:
            'Geographic Information Systems (GIS) combine satellite remote sensing with spatial coordinates to manage watersheds, transit, and disaster relief.',
        },
        summaryBn:
          'গোল পৃথিবীকে সমতল কাগজে আঁকতে গেলে মেরু অঞ্চল বড় দেখায়; তাই ভৌগোলিক সত্য বুঝতে প্রকৃত গোলক বা আধুনিক মানচিত্র দেখতে হয়।',
        reflectionQuestion: 'Which continent is actually 14 times larger than Greenland even though flat Mercator maps make them look similar?',
        reflectionAnswer: 'Africa.',
      },
    ],
  },
];
