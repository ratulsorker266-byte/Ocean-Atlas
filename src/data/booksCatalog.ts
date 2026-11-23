import { BOOKS_ARTS_AND_HISTORY } from './booksArtsAndHistory';
import { BOOKS_COMMERCE_AND_MIND } from './booksCommerceAndMind';
import { BOOKS_LIFE_AND_SKILLS } from './booksLifeAndSkills';
import { BOOKS_SCIENCE_AND_TECH } from './booksScienceAndTech';
import { BookShelfCategory, LanguageCode, LibraryBook } from '../types/knowledge';

export const ALL_LIBRARY_BOOKS: LibraryBook[] = [
  ...BOOKS_SCIENCE_AND_TECH,
  ...BOOKS_ARTS_AND_HISTORY,
  ...BOOKS_COMMERCE_AND_MIND,
  ...BOOKS_LIFE_AND_SKILLS,
];

export const BOOK_SHELF_META: Array<{
  id: BookShelfCategory;
  labelEn: string;
  labelBn: string;
  descriptionEn: string;
  descriptionBn: string;
}> = [
  {
    id: 'science-math',
    labelEn: 'Physics, Math & Life Sciences',
    labelBn: 'পদার্থ, গণিত, রসায়ন ও জীববিজ্ঞান',
    descriptionEn: 'Newton, Relativity, Euclid, Calculus, Chemistry & DNA Classics',
    descriptionBn: 'নিউটন, আপেক্ষিকতা, জ্যামিতি, ক্যালকুলাস, রসায়ন ও ডিএনএ',
  },
  {
    id: 'cs-ai',
    labelEn: 'Computing, AI & Statistics',
    labelBn: 'কম্পিউটিং, এআই ও পরিসংখ্যান',
    descriptionEn: 'Algorithms, Computer Architecture, Machine Learning, Cryptography & Probability',
    descriptionBn: 'অ্যালগরিদম, হার্ডওয়্যার, কৃত্রিম বুদ্ধিমত্তা, সাইবার নিরাপত্তা ও পরিসংখ্যান',
  },
  {
    id: 'literature-bangla',
    labelEn: 'Bangla & World Literature',
    labelBn: 'বাংলা ও বিশ্বসাহিত্য',
    descriptionEn: 'Tagore, Nazrul, Pather Panchali, Odyssey, Shakespeare & Fables',
    descriptionBn: 'রবীন্দ্রনাথ, নজরুল, পথের পাঁচালী, ওডিসি, শেক্সপিয়র ও নীতিগল্প',
  },
  {
    id: 'history-civics',
    labelEn: 'History, Law & World Geography',
    labelBn: 'ইতিহাস, আইন ও বিশ্ব ভূগোল',
    descriptionEn: 'History of Bengal, Sapiens, Silk Road, Constitutional Rights & Geography',
    descriptionBn: 'বাংলার ইতিহাস, মানবসভ্যতা, সিল্ক রোড, সাংবিধানিক আইন ও ভূগোল',
  },
  {
    id: 'commerce-economics',
    labelEn: 'Economics, Finance & Ventures',
    labelBn: 'অর্থনীতি, ফাইন্যান্স ও ব্যবসা',
    descriptionEn: 'Markets, Central Banks, Accounting, Compounding, Game Theory & Startups',
    descriptionBn: 'অর্থনীতি, ব্যাংকিং, হিসাববিজ্ঞান, বিনিয়োগ, গেম থিওরি ও উদ্যোক্তা',
  },
  {
    id: 'philosophy-psychology',
    labelEn: 'Philosophy, Mind, Logic & Faiths',
    labelBn: 'দর্শন, মনোবিজ্ঞান, যুক্তি ও ধর্ম',
    descriptionEn: 'Plato, Eastern Wisdom, Virtue Ethics, Cognitive Science, Logic & World Religions',
    descriptionBn: 'প্লেটো, প্রাচ্য দর্শন, নীতিশাস্ত্র, মনোবিজ্ঞান, যুক্তি ও বিশ্বধর্ম',
  },
  {
    id: 'medicine-nature',
    labelEn: 'Medicine, Ecology & Oceans',
    labelBn: 'চিকিৎসা, কৃষি, পরিবেশ ও সমুদ্র',
    descriptionEn: 'Anatomy, Immunity & Vaccines, Nutrition, Ecology, Botany & Marine Biology',
    descriptionBn: 'মানবদেহ, টিকা ও জীবাণু, পুষ্টি, বাস্তুসংস্থান, কৃষি ও সমুদ্রবিজ্ঞান',
  },
  {
    id: 'skills-languages',
    labelEn: 'Languages, Study Craft & Engineering',
    labelBn: 'ভাষা, পড়াশোনার বিজ্ঞান, প্রকৌশল ও শিল্প',
    descriptionEn: 'Rhetoric, Linguistics, Study Memory, Personal Finance, Bridges & Fine Arts',
    descriptionBn: 'বাকপটুতা, ভাষাতত্ত্ব, স্মৃতিকৌশল, ব্যক্তিগত অর্থ, প্রকৌশল ও চারুকলা',
  },
];

export function getBookById(bookId: string): LibraryBook | undefined {
  return ALL_LIBRARY_BOOKS.find((b) => b.id === bookId);
}

export function getBookTitle(book: LibraryBook, lang: LanguageCode): string {
  return lang === 'bn' ? book.titleBn : book.title;
}

export function getBookSynopsis(book: LibraryBook, lang: LanguageCode): string {
  return lang === 'bn' ? book.synopsisBn : book.synopsis;
}

export function getBookChapterCount(): number {
  return ALL_LIBRARY_BOOKS.reduce((acc, b) => acc + b.chapters.length, 0);
}
