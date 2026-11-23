import { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Compass, Globe, HelpCircle, Search } from 'lucide-react';
import { AGE_LEVEL_META, ALL_STORES, getAllQuestions, getAllTopics, getAtlasStats } from '../data/knowledgeIndex';
import {
  AGE_LABELS_BY_LANG,
  getUIMessages,
  SUBJECT_NAMES_BN,
  SUPPORTED_LANGUAGES,
} from '../data/i18n';
import { getLocalizedQuestion, getLocalizedSubjectName, getLocalizedTopic } from '../data/banglaKnowledge';
import { ALL_LIBRARY_BOOKS, getBookTitle } from '../data/booksCatalog';
import { AgeLevel, LanguageCode, StoreId } from '../types/knowledge';

interface HeroSectionProps {
  ageLevel: AgeLevel;
  language: LanguageCode;
  onChangeAgeLevel: (level: AgeLevel) => void;
  onOpenSettings: () => void;
  onJumpToStores: () => void;
  onJumpToBooks: () => void;
  onJumpToWorldMap: () => void;
  onJumpToCatalog: () => void;
  onEnterStore: (storeId: StoreId, subjectId?: string) => void;
  onOpenTopic: (storeId: StoreId, subjectId: string, topicId: string) => void;
  onOpenBook: (bookId: string) => void;
}

export function HeroSection({
  ageLevel,
  language,
  onChangeAgeLevel,
  onOpenSettings,
  onJumpToStores,
  onJumpToBooks,
  onJumpToWorldMap,
  onJumpToCatalog,
  onEnterStore,
  onOpenTopic,
  onOpenBook,
}: HeroSectionProps) {
  const stats = getAtlasStats();
  const levels: AgeLevel[] = ['explorer', 'student', 'mastery'];
  const [quickQuery, setQuickQuery] = useState('');

  const t = getUIMessages(language);
  const ageLabels = AGE_LABELS_BY_LANG[language];
  const currentLangMeta = SUPPORTED_LANGUAGES.find((l) => l.code === language) ?? SUPPORTED_LANGUAGES[0];

  const allTopics = useMemo(() => getAllTopics(), []);
  const allQuestions = useMemo(() => getAllQuestions(), []);

  const quickHits = useMemo(() => {
    const q = quickQuery.trim().toLowerCase();
    if (!q) return null;

    const subjects = ALL_STORES.flatMap((store) =>
      store.subjects
        .filter((s) => {
          const localizedName = getLocalizedSubjectName(s.id, s.name, language, SUBJECT_NAMES_BN);
          return (
            s.name.toLowerCase().includes(q) ||
            localizedName.toLowerCase().includes(q) ||
            s.scopeSummary.toLowerCase().includes(q)
          );
        })
        .map((subject) => ({ store, subject }))
    ).slice(0, 4);

    const topics = allTopics
      .filter(({ topic, subject }) => {
        const lt = getLocalizedTopic(topic, language);
        return (
          topic.title.toLowerCase().includes(q) ||
          lt.title.toLowerCase().includes(q) ||
          topic.subtitle.toLowerCase().includes(q) ||
          subject.name.toLowerCase().includes(q)
        );
      })
      .slice(0, 4);

    const questions = allQuestions
      .filter(({ question, subject }) => {
        const lq = getLocalizedQuestion(question, language);
        return (
          question.question.toLowerCase().includes(q) ||
          lq.question.toLowerCase().includes(q) ||
          question.shortAnswer.toLowerCase().includes(q) ||
          subject.name.toLowerCase().includes(q)
        );
      })
      .slice(0, 4);

    const books = ALL_LIBRARY_BOOKS.filter(
      (book) =>
        book.title.toLowerCase().includes(q) ||
        book.titleBn.toLowerCase().includes(q) ||
        book.authorOrOrigin.toLowerCase().includes(q) ||
        book.synopsis.toLowerCase().includes(q)
    ).slice(0, 4);

    return { subjects, topics, questions, books };
  }, [quickQuery, allTopics, allQuestions, language]);

  const popularShelves: Array<{ label: string; storeId: StoreId; subjectId: string }> = [
    {
      label: getLocalizedSubjectName('physics', 'Physics', language, SUBJECT_NAMES_BN),
      storeId: 'science',
      subjectId: 'physics',
    },
    {
      label: getLocalizedSubjectName('mathematics', 'Mathematics', language, SUBJECT_NAMES_BN),
      storeId: 'science',
      subjectId: 'mathematics',
    },
    {
      label: getLocalizedSubjectName('history', 'World History', language, SUBJECT_NAMES_BN),
      storeId: 'arts',
      subjectId: 'history',
    },
    {
      label: getLocalizedSubjectName('economics', 'Economics', language, SUBJECT_NAMES_BN),
      storeId: 'commerce',
      subjectId: 'economics',
    },
    {
      label: getLocalizedSubjectName('computer-science', 'Computing', language, SUBJECT_NAMES_BN),
      storeId: 'applied',
      subjectId: 'computer-science',
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wide text-sky-800">{t.heroKicker}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl text-balance leading-[1.15]">
              {t.heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              {t.heroSubtitle}
            </p>

            {/* Immediate Universal Library Finder */}
            <div className="relative mt-6 max-w-2xl">
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={quickQuery}
                  onChange={(e) => setQuickQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  aria-label={t.searchPlaceholder}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-sky-700 focus:bg-white focus:outline-none"
                />
              </div>

              {quickHits && (
                <div className="absolute left-0 right-0 z-20 mt-2 max-h-80 overflow-y-auto rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
                  {quickHits.subjects.length === 0 &&
                  quickHits.topics.length === 0 &&
                  quickHits.questions.length === 0 &&
                  quickHits.books.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-500">
                      No direct match for &ldquo;{quickQuery}&rdquo;. Try opening the{' '}
                      <button
                        type="button"
                        onClick={onJumpToCatalog}
                        className="font-semibold text-sky-700 underline cursor-pointer"
                      >
                        {t.openCatalogBtn}
                      </button>
                      .
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {quickHits.books.map((book) => (
                        <button
                          key={book.id}
                          type="button"
                          onClick={() => {
                            setQuickQuery('');
                            onOpenBook(book.id);
                          }}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs hover:bg-slate-100 cursor-pointer"
                        >
                          <div className="min-w-0">
                            <div className="font-semibold text-slate-900 truncate">
                              {getBookTitle(book, language)}
                            </div>
                            <div className="text-[11px] text-slate-500 truncate">
                              {language === 'bn' ? 'পূর্ণাঙ্গ বই' : 'Complete Book'} · {book.authorOrOrigin}
                            </div>
                          </div>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                        </button>
                      ))}
                      {quickHits.subjects.map(({ store, subject }) => (
                        <button
                          key={subject.id}
                          type="button"
                          onClick={() => {
                            setQuickQuery('');
                            onEnterStore(store.id, subject.id);
                          }}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs hover:bg-slate-100 cursor-pointer"
                        >
                          <div>
                            <div className="font-semibold text-slate-900">
                              {getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN)}
                            </div>
                            <div className="text-[11px] text-slate-500">{store.title}</div>
                          </div>
                          <ArrowRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                        </button>
                      ))}
                      {quickHits.topics.map(({ store, subject, topic }) => {
                        const lt = getLocalizedTopic(topic, language);
                        return (
                          <button
                            key={topic.id}
                            type="button"
                            onClick={() => {
                              setQuickQuery('');
                              onOpenTopic(store.id, subject.id, topic.id);
                            }}
                            className="flex w-full items-start gap-2.5 rounded-lg px-3 py-2 text-left text-xs hover:bg-slate-100 cursor-pointer"
                          >
                            <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-700" aria-hidden="true" />
                            <div>
                              <div className="font-semibold text-slate-900">{lt.title}</div>
                              <div className="text-[11px] text-slate-500">
                                {getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN)}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                      {quickHits.questions.map(({ store, subject, question }) => {
                        const lq = getLocalizedQuestion(question, language);
                        return (
                          <button
                            key={question.id}
                            type="button"
                            onClick={() => {
                              setQuickQuery('');
                              onEnterStore(store.id, subject.id);
                            }}
                            className="flex w-full items-start gap-2.5 rounded-lg px-3 py-2 text-left text-xs hover:bg-slate-100 cursor-pointer"
                          >
                            <HelpCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-700" aria-hidden="true" />
                            <div>
                              <div className="font-medium text-slate-900">{lq.question}</div>
                              <div className="text-[11px] text-slate-500">
                                {getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN)}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Quick Shelf Shortcuts */}
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500">
                <span className="font-medium text-slate-600">{t.quickShelvesLabel}</span>
                {popularShelves.map((shelf) => (
                  <button
                    key={shelf.subjectId}
                    type="button"
                    onClick={() => onEnterStore(shelf.storeId, shelf.subjectId)}
                    className="font-medium text-sky-800 hover:underline cursor-pointer"
                  >
                    {shelf.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onJumpToStores}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-sky-800 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                <Compass className="h-4 w-4" aria-hidden="true" />
                <span>{t.browseStoresBtn}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={onJumpToBooks}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:bg-slate-50 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                <BookOpen className="h-4 w-4 text-sky-700" aria-hidden="true" />
                <span>
                  {language === 'bn'
                    ? `বইসমূহ (${ALL_LIBRARY_BOOKS.length})`
                    : `${ALL_LIBRARY_BOOKS.length} Books`}
                </span>
              </button>
              <button
                type="button"
                onClick={onJumpToWorldMap}
                className="inline-flex items-center gap-2 rounded-lg border border-amber-300 bg-amber-50 px-4 py-2.5 text-sm font-semibold text-amber-950 transition-colors duration-150 hover:bg-amber-100 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              >
                <Globe className="h-4 w-4 text-amber-700" aria-hidden="true" />
                <span>{t.navWorldMap}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-sans text-sm font-semibold text-slate-900">
                  {t.readingDepthTitle}
                </h2>
                <span className="text-xs font-medium text-slate-500">{t.readingDepthLive}</span>
              </div>

              <div
                role="radiogroup"
                aria-label="Learner age and depth level"
                className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3"
              >
                {levels.map((level) => {
                  const selected = ageLevel === level;
                  return (
                    <button
                      key={level}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => onChangeAgeLevel(level)}
                      className={`rounded-lg border px-3 py-2.5 text-left transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${
                        selected
                          ? 'border-sky-700 bg-white text-slate-900 shadow-xs'
                          : 'border-slate-200 bg-transparent text-slate-600 hover:border-slate-300 hover:bg-white/60'
                      }`}
                    >
                      <div className="text-xs font-semibold text-slate-900 whitespace-nowrap truncate">
                        {ageLabels[level].label}
                      </div>
                      <div className="mt-0.5 font-mono text-[11px] text-slate-500 tabular-nums">
                        {ageLabels[level].ageRange}
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                <BookOpen className="mr-1.5 inline h-3.5 w-3.5 text-sky-700" aria-hidden="true" />
                {AGE_LEVEL_META[ageLevel].description}
              </p>
            </div>

            {/* Clean Language & Settings Shortcut Card */}
            <button
              type="button"
              onClick={onOpenSettings}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-left transition-colors hover:border-sky-300 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-sky-700 shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-xs font-semibold text-slate-900">
                    {t.settingsLanguageTitle}: {currentLangMeta.nativeName} ({currentLangMeta.englishName})
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Switch between Bangla, English, Hindi, Arabic, Spanish &amp; more
                  </div>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 shrink-0" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Full-width 4-column summary strip */}
        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-4">
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-900 tabular-nums">
              {stats.storesCount}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-600">{t.statStores}</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-900 tabular-nums">
              {stats.subjectsCount}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-600">{t.statSubjects}</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-900 tabular-nums">
              {ALL_LIBRARY_BOOKS.length}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-600">
              {language === 'bn' ? 'পূর্ণাঙ্গ বই (সকল বিষয়)' : 'Complete Books Across Genres'}
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-slate-900 tabular-nums">
              {stats.questionsCount}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-600">{t.statQuestions}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
