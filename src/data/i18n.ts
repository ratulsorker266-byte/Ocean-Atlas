import { AgeLevel, LanguageCode, StoreId } from '../types/knowledge';

export interface LanguageMeta {
  code: LanguageCode;
  nativeName: string;
  englishName: string;
  dir: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'bn', nativeName: 'বাংলা', englishName: 'Bangla', dir: 'ltr' },
  { code: 'en', nativeName: 'English', englishName: 'English', dir: 'ltr' },
  { code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi', dir: 'ltr' },
  { code: 'ar', nativeName: 'العربية', englishName: 'Arabic', dir: 'rtl' },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish', dir: 'ltr' },
  { code: 'fr', nativeName: 'Français', englishName: 'French', dir: 'ltr' },
  { code: 'zh', nativeName: '中文', englishName: 'Chinese', dir: 'ltr' },
  { code: 'ja', nativeName: '日本語', englishName: 'Japanese', dir: 'ltr' },
  { code: 'de', nativeName: 'Deutsch', englishName: 'German', dir: 'ltr' },
  { code: 'pt', nativeName: 'Português', englishName: 'Portuguese', dir: 'ltr' },
];

export interface UIMessages {
  brand: string;
  navStores: string;
  navBooks: string;
  navWorldMap: string;
  navCatalog: string;
  navQuestions: string;
  navLabs: string;
  navNotebook: string;
  navSettings: string;
  signInButton: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  searchPlaceholder: string;
  quickShelvesLabel: string;
  browseStoresBtn: string;
  openCatalogBtn: string;
  readingDepthTitle: string;
  readingDepthLive: string;
  statStores: string;
  statSubjects: string;
  statChapters: string;
  statQuestions: string;
  storesHeading: string;
  storesSubheading: string;
  enterStorePrefix: string;
  includedSubjects: string;
  openDeepLesson: string;
  readExplanation: string;
  hideExplanation: string;
  quickAnswerLabel: string;
  stepByStepLabel: string;
  pitfallLabel: string;
  backToAllStores: string;
  lessonsTab: string;
  qaTab: string;
  settingsTitle: string;
  settingsAccountTitle: string;
  settingsLanguageTitle: string;
  settingsBilingualLabel: string;
  settingsBilingualHint: string;
  settingsDepthTitle: string;
  settingsComfortTitle: string;
  settingsExportTitle: string;
  continueWithGoogle: string;
  signOut: string;
  cloudSyncActive: string;
  guestLocalMode: string;
  referenceDeskTitle: string;
}

const EN_MESSAGES: UIMessages = {
  brand: 'Oceanic Atlas',
  navStores: 'Stores',
  navBooks: 'Books',
  navWorldMap: 'World Map',
  navCatalog: 'Catalog A–Z',
  navQuestions: 'Question Bank',
  navLabs: 'Concept Labs',
  navNotebook: 'Notebook',
  navSettings: 'Settings',
  signInButton: 'Sign In',
  heroKicker: 'Science · Arts & Humanities · Commerce & Law · Applied Mastery',
  heroTitle: 'An ocean of structured study stores, built for every curious mind.',
  heroSubtitle:
    'Search any subject across human knowledge or explore dedicated stores for Science, Arts, Commerce, and Applied Skills—in your own language and at your ideal learning depth.',
  searchPlaceholder: 'Find any subject, chapter, formula, or question immediately...',
  quickShelvesLabel: 'Quick shelves:',
  browseStoresBtn: 'Browse Knowledge Stores',
  openCatalogBtn: 'Open A–Z Library Catalog',
  readingDepthTitle: 'Choose Your Reading Depth',
  readingDepthLive: 'Updates every store live',
  statStores: 'Dedicated Knowledge Stores',
  statSubjects: 'Academic & Life Disciplines',
  statChapters: 'Multi-Age Chapter Depths',
  statQuestions: 'Detailed Q&A Walkthroughs',
  storesHeading: 'Knowledge Stores',
  storesSubheading:
    'Select a dedicated store to explore all subjects, multi-age lessons, interactive labs, and step-by-step question explanations.',
  enterStorePrefix: 'Enter',
  includedSubjects: 'Included Subjects',
  openDeepLesson: 'Open Deep Lesson',
  readExplanation: 'Read Detailed Step-by-Step Explanation',
  hideExplanation: 'Hide Detailed Explanation',
  quickAnswerLabel: 'Quick Answer:',
  stepByStepLabel: 'Step-by-Step Breakdown',
  pitfallLabel: 'Common Pitfall to Avoid',
  backToAllStores: 'All Knowledge Stores',
  lessonsTab: 'Lessons',
  qaTab: 'Q&A Bank',
  settingsTitle: 'Library Settings & Account',
  settingsAccountTitle: 'Google Account & Cloud Sync',
  settingsLanguageTitle: 'Reading Language',
  settingsBilingualLabel: 'Bilingual Study Mode (Side-by-Side English)',
  settingsBilingualHint: 'Show the English reference alongside your selected language.',
  settingsDepthTitle: 'Learner Age & Depth',
  settingsComfortTitle: 'Reading Comfort',
  settingsExportTitle: 'Export Study Archive',
  continueWithGoogle: 'Continue with Google',
  signOut: 'Sign Out',
  cloudSyncActive: 'Cloud sync active across devices',
  guestLocalMode: 'Guest mode — saved locally in this browser',
  referenceDeskTitle: 'Universal Reference Desk',
};

const BN_MESSAGES: UIMessages = {
  brand: 'Oceanic Atlas',
  navStores: 'জ্ঞান-স্টোর',
  navBooks: 'বইসমূহ',
  navWorldMap: 'বিশ্ব মানচিত্র',
  navCatalog: 'তালিকা A–Z',
  navQuestions: 'প্রশ্ন ও ব্যাখ্যা',
  navLabs: 'কনসেপ্ট ল্যাব',
  navNotebook: 'নোটবুক',
  navSettings: 'সেটিংস',
  signInButton: 'লগইন',
  heroKicker: 'বিজ্ঞান · কলা ও মানবিক · বাণিজ্য ও আইন · ব্যবহারিক দক্ষতা',
  heroTitle: 'সবার জন্য সাজানো জ্ঞানের মহাসাগর—প্রতিটি বিষয় আলাদা স্টোরে।',
  heroSubtitle:
    'বিজ্ঞান, কলা, বাণিজ্য এবং ব্যবহারিক শিক্ষার প্রতিটি শাখা খুঁজে নিন এক জায়গায়। নিজের ভাষা ও বয়স উপযোগী গভীরতায় বিস্তারিত ব্যাখ্যা, প্রশ্নোত্তর ও ইন্টারঅ্যাক্টিভ ল্যাবে শিখুন।',
  searchPlaceholder: 'যেকোনো বিষয়, অধ্যায়, সূত্র বা প্রশ্ন তাৎক্ষণিক খুঁজুন...',
  quickShelvesLabel: 'দ্রুত প্রবেশ:',
  browseStoresBtn: 'জ্ঞান-স্টোর দেখুন',
  openCatalogBtn: 'সম্পূর্ণ A–Z লাইব্রেরি',
  readingDepthTitle: 'শেখার গভীরতা নির্বাচন করুন',
  readingDepthLive: 'সব স্টোরে সাথে সাথে বদলায়',
  statStores: 'আলাদা জ্ঞান-স্টোর',
  statSubjects: 'পূর্ণাঙ্গ বিষয়',
  statChapters: 'বয়স-উপযোগী অধ্যায়',
  statQuestions: 'বিস্তারিত প্রশ্নোত্তর',
  storesHeading: 'জ্ঞান-স্টোর সমূহ',
  storesSubheading:
    'যেকোনো স্টোরে প্রবেশ করে বিষয়ভিত্তিক গভীর পাঠ, কুইজ, ইন্টারঅ্যাক্টিভ ল্যাব এবং ধাপে ধাপে প্রশ্নোত্তর ব্যাখ্যা পড়ুন।',
  enterStorePrefix: 'প্রবেশ করুন:',
  includedSubjects: 'অন্তর্ভুক্ত বিষয়সমূহ',
  openDeepLesson: 'বিস্তারিত পাঠ খুলুন',
  readExplanation: 'ধাপে ধাপে বিস্তারিত ব্যাখ্যা পড়ুন',
  hideExplanation: 'ব্যাখ্যা লুকান',
  quickAnswerLabel: 'সংক্ষিপ্ত উত্তর:',
  stepByStepLabel: 'ধাপে ধাপে বিশ্লেষণ',
  pitfallLabel: 'সাধারণ ভুল ধারণা (সতর্কতা)',
  backToAllStores: 'সব জ্ঞান-স্টোর',
  lessonsTab: 'অধ্যায়',
  qaTab: 'প্রশ্নোত্তর ব্যাংক',
  settingsTitle: 'লাইব্রেরি সেটিংস ও অ্যাকাউন্ট',
  settingsAccountTitle: 'Google লগইন ও ক্লাউড সিঙ্ক',
  settingsLanguageTitle: 'পড়ার ভাষা নির্বাচন',
  settingsBilingualLabel: 'দ্বিভাষিক পঠন (বাংলা + English একসাথে)',
  settingsBilingualHint: 'আপনার নির্বাচিত ভাষার পাশাপাশি মূল ইংরেজি টেক্সটও দেখুন।',
  settingsDepthTitle: 'শিক্ষার্থীর বয়স ও স্তর',
  settingsComfortTitle: 'পড়ার স্বাচ্ছন্দ্য',
  settingsExportTitle: 'নোট ও বুকমার্ক ডাউনলোড',
  continueWithGoogle: 'Google দিয়ে লগইন করুন',
  signOut: 'সাইন আউট',
  cloudSyncActive: 'ক্লাউড সিঙ্ক চালু আছে',
  guestLocalMode: 'গেস্ট মোড — ব্রাউজারে সেভ থাকছে',
  referenceDeskTitle: 'সার্বজনীন রেফারেন্স ডেস্ক',
};

const PARTIAL_TRANSLATIONS: Record<Exclude<LanguageCode, 'en' | 'bn'>, Partial<UIMessages>> = {
  hi: {
    navStores: 'ज्ञान स्टोर',
    navBooks: 'पुस्तकें',
    navWorldMap: 'विश्व मानचित्र',
    navCatalog: 'सूची A–Z',
    navQuestions: 'प्रश्न बैंक',
    navLabs: 'लैब',
    navNotebook: 'नोटबुक',
    navSettings: 'सेटिंग्स',
    heroTitle: 'हर जिज्ञासु मन के लिए व्यवस्थित ज्ञान का महासागर।',
    searchPlaceholder: 'कोई भी विषय, अध्याय, सूत्र या प्रश्न खोजें...',
    browseStoresBtn: 'ज्ञान स्टोर देखें',
    openCatalogBtn: 'A–Z लाइब्रेरी खोलें',
    readingDepthTitle: 'पठन गहराई चुनें',
    storesHeading: 'ज्ञान स्टोर',
    settingsTitle: 'लाइब्रेरी सेटिंग्स और खाता',
    settingsLanguageTitle: 'पठन भाषा चुनें',
    continueWithGoogle: 'Google से साइन इन करें',
    signOut: 'साइन आउट',
  },
  ar: {
    navStores: 'المتاجر المعرفية',
    navBooks: 'المكتبة والكتب',
    navWorldMap: 'خريطة العالم',
    navCatalog: 'الفهرس A–Z',
    navQuestions: 'بنك الأسئلة',
    navLabs: 'المختبرات',
    navNotebook: 'الدفتر',
    navSettings: 'الإعدادات',
    heroTitle: 'محيط من المتاجر التعليمية المنظمة لكل عقل شغوف بالمعرفة.',
    searchPlaceholder: 'ابحث عن أي مادة أو درس أو معادلة أو سؤال فوراً...',
    browseStoresBtn: 'تصفح المتاجر المعرفية',
    openCatalogBtn: 'افتح فهرس المكتبة',
    readingDepthTitle: 'اختر عمق القراءة',
    storesHeading: 'المتاجر المعرفية',
    settingsTitle: 'إعدادات المكتبة والحساب',
    settingsLanguageTitle: 'لغة القراءة',
    continueWithGoogle: 'المتابعة باستخدام Google',
    signOut: 'تسجيل الخروج',
  },
  es: {
    navStores: 'Tiendas',
    navBooks: 'Libros',
    navWorldMap: 'Mapa Mundial',
    navCatalog: 'Catálogo A–Z',
    navQuestions: 'Preguntas',
    navLabs: 'Laboratorios',
    navNotebook: 'Cuaderno',
    navSettings: 'Ajustes',
    heroTitle: 'Un océano de bibliotecas temáticas para cada mente curiosa.',
    searchPlaceholder: 'Busca cualquier materia, capítulo, fórmula o pregunta...',
    browseStoresBtn: 'Explorar Tiendas del Saber',
    openCatalogBtn: 'Abrir Catálogo A–Z',
    readingDepthTitle: 'Elige tu nivel de lectura',
    storesHeading: 'Tiendas del Conocimiento',
    settingsTitle: 'Ajustes y Cuenta',
    settingsLanguageTitle: 'Idioma de lectura',
    continueWithGoogle: 'Continuar con Google',
    signOut: 'Cerrar sesión',
  },
  fr: {
    navStores: 'Rayons',
    navBooks: 'Livres',
    navWorldMap: 'Carte du Monde',
    navCatalog: 'Catalogue A–Z',
    navQuestions: 'Questions',
    navLabs: 'Labos',
    navNotebook: 'Carnet',
    navSettings: 'Paramètres',
    heroTitle: 'Un océan de savoirs structurés pour chaque esprit curieux.',
    searchPlaceholder: 'Rechercher une matière, un chapitre ou une question...',
    browseStoresBtn: 'Explorer les Rayons',
    openCatalogBtn: 'Ouvrir le Catalogue A–Z',
    readingDepthTitle: 'Choisir le niveau de lecture',
    storesHeading: 'Rayons du Savoir',
    settingsTitle: 'Paramètres et Compte',
    settingsLanguageTitle: 'Langue de lecture',
    continueWithGoogle: 'Continuer avec Google',
    signOut: 'Se déconnecter',
  },
  zh: {
    navStores: '知识分馆',
    navBooks: '经典书库',
    navWorldMap: '世界历史地图',
    navCatalog: 'A–Z 目录',
    navQuestions: '问答库',
    navLabs: '概念实验室',
    navNotebook: '学习笔记',
    navSettings: '设置',
    heroTitle: '为每一位求知者打造的跨学科知识海洋。',
    searchPlaceholder: '立即搜索任意学科、章节、公式或问题...',
    browseStoresBtn: '浏览知识分馆',
    openCatalogBtn: '打开 A–Z 图书馆目录',
    readingDepthTitle: '选择阅读深度',
    storesHeading: '知识分馆',
    settingsTitle: '图书馆设置与账户',
    settingsLanguageTitle: '阅读语言',
    continueWithGoogle: '使用 Google 登录',
    signOut: '退出登录',
  },
  ja: {
    navStores: '知識ストア',
    navBooks: '蔵書ライブラリ',
    navWorldMap: '世界歴史地図',
    navCatalog: 'A–Z 目録',
    navQuestions: 'Q&A バンク',
    navLabs: '体験ラボ',
    navNotebook: '学習ノート',
    navSettings: '設定',
    heroTitle: 'あらゆる探究心のために設計された体系的な知の海。',
    searchPlaceholder: '科目、章、公式、質問をすぐに検索...',
    browseStoresBtn: '知識ストアを見る',
    openCatalogBtn: 'A–Z 目録を開く',
    readingDepthTitle: '学習レベルを選択',
    storesHeading: '知識ストア一覧',
    settingsTitle: 'ライブラリ設定とアカウント',
    settingsLanguageTitle: '表示・学習言語',
    continueWithGoogle: 'Google でログイン',
    signOut: 'ログアウト',
  },
  de: {
    navStores: 'Fachbereiche',
    navBooks: 'Bücher',
    navWorldMap: 'Weltkarte',
    navCatalog: 'Katalog A–Z',
    navQuestions: 'Fragenbank',
    navLabs: 'Konzept-Labore',
    navNotebook: 'Notizbuch',
    navSettings: 'Einstellungen',
    heroTitle: 'Ein Ozean strukturierter Wissensbereiche für jedes Lernalter.',
    searchPlaceholder: 'Fach, Kapitel, Formel oder Frage sofort suchen...',
    browseStoresBtn: 'Fachbereiche entdecken',
    openCatalogBtn: 'A–Z Bibliothek öffnen',
    readingDepthTitle: 'Lesetiefe wählen',
    storesHeading: 'Wissensbereiche',
    settingsTitle: 'Einstellungen & Konto',
    settingsLanguageTitle: 'Lesesprache',
    continueWithGoogle: 'Mit Google fortfahren',
    signOut: 'Abmelden',
  },
  pt: {
    navStores: 'Lojas do Saber',
    navBooks: 'Livros',
    navWorldMap: 'Mapa Mundi',
    navCatalog: 'Catálogo A–Z',
    navQuestions: 'Banco de Questões',
    navLabs: 'Laboratórios',
    navNotebook: 'Caderno',
    navSettings: 'Configurações',
    heroTitle: 'Um oceano de bibliotecas temáticas para todas as idades.',
    searchPlaceholder: 'Pesquise qualquer matéria, capítulo, fórmula ou pergunta...',
    browseStoresBtn: 'Explorar Lojas do Saber',
    openCatalogBtn: 'Abrir Catálogo A–Z',
    readingDepthTitle: 'Escolha o nível de leitura',
    storesHeading: 'Lojas do Conhecimento',
    settingsTitle: 'Configurações e Conta',
    settingsLanguageTitle: 'Idioma de leitura',
    continueWithGoogle: 'Continuar com Google',
    signOut: 'Sair',
  },
};

export function getUIMessages(lang: LanguageCode): UIMessages {
  if (lang === 'bn') return BN_MESSAGES;
  if (lang === 'en') return EN_MESSAGES;
  return { ...EN_MESSAGES, ...PARTIAL_TRANSLATIONS[lang] };
}

export const STORE_NAMES_BY_LANG: Record<LanguageCode, Record<StoreId, { title: string; tagline: string }>> = {
  en: {
    science: {
      title: 'Science & Natural Philosophy Store',
      tagline: 'Physics, Chemistry, Biology, Mathematics, Astronomy, Medicine, Earth & Marine Sciences.',
    },
    arts: {
      title: 'Arts, Humanities & Literature Store',
      tagline: 'History, Philosophy, Literature, Psychology, Linguistics, Fine Arts, Geography & Civics.',
    },
    commerce: {
      title: 'Commerce, Economics & Law Store',
      tagline: 'Economics, Accounting, Finance, Strategy, Marketing, Law, Entrepreneurship & Public Policy.',
    },
    applied: {
      title: 'Engineering, Computing & Applied Life Store',
      tagline: 'Computing, Logic, Personal Finance, Ecology, Statistics, Study Science, Engineering & Media.',
    },
  },
  bn: {
    science: {
      title: 'বিজ্ঞান ও প্রকৃতিবিজ্ঞান স্টোর',
      tagline: 'পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান, গণিত, জ্যোতির্বিজ্ঞান, চিকিৎসাবিজ্ঞান, ভূ-বিজ্ঞান ও সমুদ্রবিজ্ঞান।',
    },
    arts: {
      title: 'কলা, মানবিক ও সাহিত্য স্টোর',
      tagline: 'বিশ্ব ইতিহাস, দর্শন ও নীতিশাস্ত্র, সাহিত্য, মনোবিজ্ঞান, ভাষাতত্ত্ব, চারুকলা, ভূগোল ও নাগরিক বিজ্ঞান।',
    },
    commerce: {
      title: 'বাণিজ্য, অর্থনীতি ও আইন স্টোর',
      tagline: 'অর্থনীতি, হিসাববিজ্ঞান, ফাইন্যান্স, ব্যবস্থাপনা, বিপণন ও বাণিজ্য, আইন, উদ্যোক্তা ও জননীতি।',
    },
    applied: {
      title: 'প্রকৌশল, কম্পিউটিং ও ব্যবহারিক জীবন স্টোর',
      tagline: 'কম্পিউটার বিজ্ঞান, যুক্তিবিজ্ঞান, আর্থিক সাক্ষরতা, বাস্তুসংস্থান, পরিসংখ্যান, পড়াশোনার বিজ্ঞান ও প্রকৌশল।',
    },
  },
  hi: {
    science: { title: 'विज्ञान और प्राकृतिक दर्शन स्टोर', tagline: 'भौतिकी, रसायन, जीव विज्ञान, गणित, खगोल विज्ञान, चिकित्सा और पृथ्वी विज्ञान।' },
    arts: { title: 'कला, मानविकी और साहित्य स्टोर', tagline: 'इतिहास, दर्शन, साहित्य, मनोविज्ञान, भाषाविज्ञान, ललित कला और भूगोल।' },
    commerce: { title: 'वाणिज्य, अर्थशास्त्र और कानून स्टोर', tagline: 'अर्थशास्त्र, लेखांकन, वित्त, प्रबंधन, विपणन, कानून और लोक नीति।' },
    applied: { title: 'इंजीनियरिंग, कंप्यूटिंग और व्यावहारिक कौशल', tagline: 'कंप्यूटर विज्ञान, तर्कशास्त्र, वित्तीय साक्षरता, पारिस्थितिकी और सांख्यिकी।' },
  },
  ar: {
    science: { title: 'متجر العلوم والفلسفة الطبيعية', tagline: 'الفيزياء والكيمياء والأحياء والرياضيات والفلك والطب وعلوم الأرض.' },
    arts: { title: 'متجر الآداب والإنسانيات', tagline: 'التاريخ والفلسفة والأدب وعلم النفس واللغويات والفنون والجغرافيا.' },
    commerce: { title: 'متجر التجارة والاقتصاد والقانون', tagline: 'الاقتصاد والمحاسبة والتمويل والإدارة والتسويق والقانون والسياسات العامة.' },
    applied: { title: 'متجر الهندسة والحوسبة والمهارات التطبيقية', tagline: 'علوم الحاسوب والمنطق والمالية الشخصية والبيئة والإحصاء وطرق التعلم.' },
  },
  es: {
    science: { title: 'Tienda de Ciencias y Filosofía Natural', tagline: 'Física, Química, Biología, Matemáticas, Astronomía, Medicina y Ciencias de la Tierra.' },
    arts: { title: 'Tienda de Artes, Humanidades y Literatura', tagline: 'Historia, Filosofía, Literatura, Psicología, Lingüística, Artes, Geografía y Civismo.' },
    commerce: { title: 'Tienda de Comercio, Economía y Derecho', tagline: 'Economía, Contabilidad, Finanzas, Estrategia, Marketing, Derecho y Políticas Públicas.' },
    applied: { title: 'Tienda de Ingeniería, Computación y Vida Práctica', tagline: 'Informática, Lógica, Finanzas Personales, Ecología, Estadística y Métodos de Estudio.' },
  },
  fr: {
    science: { title: 'Rayon Sciences & Philosophie Naturelle', tagline: 'Physique, Chimie, Biologie, Mathématiques, Astronomie, Médecine et Sciences de la Terre.' },
    arts: { title: 'Rayon Arts, Humanités & Littérature', tagline: 'Histoire, Philosophie, Littérature, Psychologie, Linguistique, Beaux-Arts et Géographie.' },
    commerce: { title: 'Rayon Commerce, Économie & Droit', tagline: 'Économie, Comptabilité, Finance, Stratégie, Marketing, Droit et Politiques Publiques.' },
    applied: { title: 'Rayon Ingénierie, Informatique & Vie Pratique', tagline: 'Informatique, Logique, Finances Personnelles, Écologie, Statistiques et Méthodes.' },
  },
  zh: {
    science: { title: '自然科学与数理分馆', tagline: '物理、化学、生物、数学、天文学、医学、地球与海洋科学。' },
    arts: { title: '人文、艺术与文学分馆', tagline: '世界历史、哲学伦理、文学修辞、心理学、语言学、艺术与地理。' },
    commerce: { title: '商业、经济与法律分馆', tagline: '微观与宏观经济、会计、金融、管理战略、市场贸易、法律与公共政策。' },
    applied: { title: '工程、计算与应用生活分馆', tagline: '计算机算法、逻辑推理、个人理财、生态农业、统计学与高效学习法。' },
  },
  ja: {
    science: { title: '科学・自然哲学ストア', tagline: '物理、化学、生物、数学、天文学、医学、地球・海洋科学。' },
    arts: { title: '芸術・人文学・文学ストア', tagline: '世界史、哲学、文学、心理学、言語学、美術・音楽理論、地理・公民。' },
    commerce: { title: '商業・経済・法学ストア', tagline: '経済学、会計、金融、経営戦略、マーケティング、法学、公共政策。' },
    applied: { title: '工学・情報科学・実践スキルストア', tagline: 'コンピュータ科学、論理学、家計管理、生態学、統計学、学習科学。' },
  },
  de: {
    science: { title: 'Naturwissenschaften & Mathematik', tagline: 'Physik, Chemie, Biologie, Mathematik, Astronomie, Medizin und Geowissenschaften.' },
    arts: { title: 'Geisteswissenschaften, Kunst & Literatur', tagline: 'Geschichte, Philosophie, Literatur, Psychologie, Sprachwissenschaft und Geographie.' },
    commerce: { title: 'Wirtschaft, Handel & Recht', tagline: 'VWL/BWL, Buchhaltung, Finanzen, Strategie, Marketing, Recht und Politik.' },
    applied: { title: 'Technik, Informatik & Alltagskompetenz', tagline: 'Informatik, Logik, Finanzbildung, Ökologie, Statistik und Lernmethoden.' },
  },
  pt: {
    science: { title: 'Loja de Ciências e Filosofia Natural', tagline: 'Física, Química, Biologia, Matemática, Astronomia, Medicina e Ciências da Terra.' },
    arts: { title: 'Loja de Artes, Humanidades e Literatura', tagline: 'História, Filosofia, Literatura, Psicologia, Linguística, Artes e Geografia.' },
    commerce: { title: 'Loja de Comércio, Economia e Direito', tagline: 'Economia, Contabilidade, Finanças, Estratégia, Marketing, Direito e Políticas.' },
    applied: { title: 'Loja de Engenharia, Computação e Vida Prática', tagline: 'Computação, Lógica, Finanças Pessoais, Ecologia, Estatística e Métodos de Estudo.' },
  },
};

export const AGE_LABELS_BY_LANG: Record<LanguageCode, Record<AgeLevel, { label: string; ageRange: string }>> = {
  en: {
    explorer: { label: 'Young Explorer', ageRange: 'Ages 6–12' },
    student: { label: 'School & College', ageRange: 'Ages 13–18' },
    mastery: { label: 'Deep Mastery', ageRange: 'Ages 18+' },
  },
  bn: {
    explorer: { label: 'শিশু-কিশোর', ageRange: 'বয়স ৬–১২' },
    student: { label: 'স্কুল ও কলেজ', ageRange: 'বয়স ১৩–১৮' },
    mastery: { label: 'উচ্চতর ও গভীর', ageRange: 'বয়স ১৮+' },
  },
  hi: {
    explorer: { label: 'युवा खोजकर्ता', ageRange: 'आयु 6–12' },
    student: { label: 'स्कूल व कॉलेज', ageRange: 'आयु 13–18' },
    mastery: { label: 'गहन विशेषज्ञता', ageRange: 'आयु 18+' },
  },
  ar: {
    explorer: { label: 'المستكشف الصغير', ageRange: '6–12 سنة' },
    student: { label: 'المدرسة والكلية', ageRange: '13–18 سنة' },
    mastery: { label: 'الإتقان المتقدم', ageRange: '18+ سنة' },
  },
  es: {
    explorer: { label: 'Explorador', ageRange: '6–12 años' },
    student: { label: 'Escolar y Prepa', ageRange: '13–18 años' },
    mastery: { label: 'Dominio Profundo', ageRange: '18+ años' },
  },
  fr: {
    explorer: { label: 'Jeune Explorateur', ageRange: '6–12 ans' },
    student: { label: 'Collège & Lycée', ageRange: '13–18 ans' },
    mastery: { label: 'Maîtrise Avancée', ageRange: '18+ ans' },
  },
  zh: {
    explorer: { label: '少年探索', ageRange: '6–12 岁' },
    student: { label: '中学与预科', ageRange: '13–18 岁' },
    mastery: { label: '深度精研', ageRange: '18 岁+' },
  },
  ja: {
    explorer: { label: 'キッズ探検', ageRange: '6–12歳' },
    student: { label: '中学・高校', ageRange: '13–18歳' },
    mastery: { label: '大学・専門', ageRange: '18歳+' },
  },
  de: {
    explorer: { label: 'Junge Entdecker', ageRange: '6–12 J.' },
    student: { label: 'Schule & Oberstufe', ageRange: '13–18 J.' },
    mastery: { label: 'Vertieftes Studium', ageRange: '18+ J.' },
  },
  pt: {
    explorer: { label: 'Jovem Explorador', ageRange: '6–12 anos' },
    student: { label: 'Escola e Médio', ageRange: '13–18 anos' },
    mastery: { label: 'Domínio Profundo', ageRange: '18+ anos' },
  },
};

export const SUBJECT_NAMES_BN: Record<string, string> = {
  physics: 'পদার্থবিজ্ঞান ও আলোকবিজ্ঞান',
  chemistry: 'রসায়ন ও পদার্থ',
  biology: 'জীববিজ্ঞান ও জিনতত্ত্ব',
  mathematics: 'গণিত ও ক্যালকুলাস',
  astronomy: 'জ্যোতির্বিজ্ঞান ও মহাকাশ',
  medicine: 'মানবদেহ ও চিকিৎসাবিজ্ঞান',
  'earth-science': 'ভূ-বিজ্ঞান ও আবহাওয়াবিজ্ঞান',
  'marine-env': 'সমুদ্রবিজ্ঞান ও পরিবেশ',
  history: 'বিশ্ব ইতিহাস ও সভ্যতা',
  philosophy: 'দর্শন ও নীতিশাস্ত্র',
  literature: 'বিশ্বসাহিত্য ও অলংকারশাস্ত্র',
  psychology: 'মনোবিজ্ঞান ও জ্ঞানবিজ্ঞান',
  linguistics: 'ভাষাতত্ত্ব ও বিশ্বভাষা',
  'fine-arts': 'চারুকলা ও সংগীততত্ত্ব',
  geography: 'মানব ভূগোল ও মানচিত্রবিজ্ঞান',
  civics: 'নাগরিক বিজ্ঞান ও বিশ্বসংস্কৃতি',
  economics: 'ব্যষ্টিক ও সামষ্টিক অর্থনীতি',
  accounting: 'হিসাববিজ্ঞান ও আর্থিক প্রতিবেদন',
  finance: 'কর্পোরেট ফাইন্যান্স ও বিনিয়োগ',
  management: 'ব্যবস্থাপনা ও কৌশল',
  marketing: 'বিপণন ও আন্তর্জাতিক বাণিজ্য',
  law: 'আইন ও নাগরিক প্রতিষ্ঠান',
  entrepreneurship: 'উদ্যোক্তা ও ব্যবসা গঠন',
  'public-policy': 'জননীতি ও বৈশ্বিক উন্নয়ন',
  'computer-science': 'কম্পিউটার বিজ্ঞান ও অ্যালগরিদম',
  logic: 'যুক্তিবিজ্ঞান ও সমালোচনামূলক চিন্তা',
  'life-finance': 'দৈনন্দিন আর্থিক ও জীবন দক্ষতা',
  ecology: 'বাস্তুসংস্থান ও টেকসই কৃষি',
  statistics: 'পরিসংখ্যান ও ডেটা সাক্ষরতা',
  'study-science': 'শেখার বিজ্ঞান ও স্মৃতিকৌশল',
  engineering: 'পুরকৌশল ও যন্ত্রকৌশল',
  'digital-media': 'ডিজিটাল সাক্ষরতা ও মিডিয়া নিরাপত্তা',
};
