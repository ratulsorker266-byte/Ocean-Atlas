export type AgeLevel = 'explorer' | 'student' | 'mastery';

export type StoreId = 'science' | 'arts' | 'commerce' | 'applied';

export type LanguageCode = 'en' | 'bn' | 'hi' | 'ar' | 'es' | 'fr' | 'zh' | 'ja' | 'de' | 'pt';

export type FontScale = 'compact' | 'comfortable' | 'large';

export type ReadingTheme = 'paper' | 'warm' | 'contrast';

export type QuestionCategory = 'Conceptual' | 'Analytical' | 'Quantitative' | 'Case Study';

export interface MultiLevelExplanation {
  explorer: string;
  student: string;
  mastery: string;
}

export interface QuizItem {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TopicChapter {
  id: string;
  title: string;
  subtitle: string;
  readMinutes: number;
  corePrinciple: string;
  formulaOrFramework: string;
  levels: MultiLevelExplanation;
  keyTakeaways: string[];
  realWorldApplication: string;
  quiz: QuizItem[];
}

export interface QuestionEntry {
  id: string;
  subjectId: string;
  question: string;
  category: QuestionCategory;
  shortAnswer: string;
  detailedExplanation: MultiLevelExplanation;
  stepByStep: string[];
  commonMisconception: string;
}

export interface Subject {
  id: string;
  storeId: StoreId;
  name: string;
  scopeSummary: string;
  recommendedLabId?: 'equilibrium' | 'wave' | 'growth';
  topics: TopicChapter[];
  questions: QuestionEntry[];
}

export interface KnowledgeStore {
  id: StoreId;
  title: string;
  tagline: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  accentHex: string;
  accentTextClass: string;
  accentBorderClass: string;
  accentBgSoftClass: string;
  subjects: Subject[];
}

export interface StudyNote {
  id: string;
  subjectId: string;
  subjectName: string;
  storeId: StoreId;
  content: string;
  updatedAt: string;
  createdAt?: string;
}

export interface UserSettings {
  preferredLanguage: LanguageCode;
  bilingualMode: boolean;
  ageLevel: AgeLevel;
  fontScale: FontScale;
  readingTheme: ReadingTheme;
}

export type BookShelfCategory =
  | 'science-math'
  | 'cs-ai'
  | 'literature-bangla'
  | 'history-civics'
  | 'commerce-economics'
  | 'philosophy-psychology'
  | 'medicine-nature'
  | 'skills-languages';

export interface BookChapter {
  chapterNumber: number;
  title: string;
  titleBn: string;
  keyPrinciple: string;
  levels: MultiLevelExplanation;
  summaryBn: string;
  reflectionQuestion: string;
  reflectionAnswer: string;
  relatedPoemId?: string;
  encyclopediaQuery?: string;
}

export interface LibraryBook {
  id: string;
  title: string;
  titleBn: string;
  authorOrOrigin: string;
  era: string;
  category: BookShelfCategory;
  storeId: StoreId;
  subjectId: string;
  ageBand: 'All Ages' | 'Ages 6–12' | 'Ages 13–18' | 'Ages 18+';
  coverColorHex: string;
  readingMinutes: number;
  synopsis: string;
  synopsisBn: string;
  coreThesis: string;
  coreThesisBn: string;
  keyTakeaways: string[];
  keyTakeawaysBn: string[];
  chapters: BookChapter[];
}

export interface PoemWordGloss {
  word: string;
  meaningBn: string;
  meaningEn: string;
}

export interface CompletePoem {
  id: string;
  titleBn: string;
  titleEn: string;
  poetBn: string;
  poetEn: string;
  collectionBn: string;
  collectionEn: string;
  year: string;
  language: 'bn' | 'en';
  meterBn: string;
  meterEn: string;
  fullText: string;
  companionText?: string;
  companionLabelBn?: string;
  companionLabelEn?: string;
  backgroundBn: string;
  backgroundEn: string;
  explanationBn: string;
  explanationEn: string;
  wordMeanings: PoemWordGloss[];
  linkedBookId?: string;
  sourceUrl: string;
}

export interface EncyclopediaSection {
  heading: string;
  content: string;
}

export interface DeepArticleResponse {
  title: string;
  leadSummary: string;
  sections: EncyclopediaSection[];
  sourceTitle: string;
  sourceUrl: string;
  languageUsed: string;
}

