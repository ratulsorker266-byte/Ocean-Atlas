import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  HelpCircle,
  Search,
} from 'lucide-react';
import { AGE_LEVEL_META, getStoreById } from '../data/knowledgeIndex';
import {
  AGE_LABELS_BY_LANG,
  getUIMessages,
  STORE_NAMES_BY_LANG,
  SUBJECT_NAMES_BN,
} from '../data/i18n';
import {
  getLanguageBannerNote,
  getLocalizedQuestion,
  getLocalizedSubjectName,
  getLocalizedTopic,
} from '../data/banglaKnowledge';
import { ALL_LIBRARY_BOOKS, getBookTitle } from '../data/booksCatalog';
import {
  AgeLevel,
  FontScale,
  LanguageCode,
  QuestionEntry,
  StoreId,
  Subject,
  TopicChapter,
} from '../types/knowledge';

interface StoreDetailViewProps {
  storeId: StoreId;
  initialSubjectId?: string;
  ageLevel: AgeLevel;
  language: LanguageCode;
  bilingualMode: boolean;
  fontScale: FontScale;
  onChangeAgeLevel: (level: AgeLevel) => void;
  onBackToStores: () => void;
  onOpenTopic: (storeId: StoreId, subjectId: string, topicId: string) => void;
  onOpenLab: (labId: 'equilibrium' | 'wave' | 'growth') => void;
  onOpenBook: (bookId: string) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  masteredTopicIds: string[];
}

export function StoreDetailView({
  storeId,
  initialSubjectId,
  ageLevel,
  language,
  bilingualMode,
  fontScale,
  onChangeAgeLevel,
  onBackToStores,
  onOpenTopic,
  onOpenLab,
  onOpenBook,
  bookmarkedIds,
  onToggleBookmark,
  masteredTopicIds,
}: StoreDetailViewProps) {
  const store = getStoreById(storeId);
  const t = getUIMessages(language);
  const storeLabel = STORE_NAMES_BY_LANG[language][store.id];
  const ageLabels = AGE_LABELS_BY_LANG[language];
  const langNotice = getLanguageBannerNote(language);

  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(
    initialSubjectId && store.subjects.some((s) => s.id === initialSubjectId)
      ? initialSubjectId
      : 'all'
  );
  const [storeMode, setStoreMode] = useState<'subjects' | 'qa'>('subjects');
  const [storeQuery, setStoreQuery] = useState('');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  useEffect(() => {
    setSelectedSubjectId(
      initialSubjectId && store.subjects.some((s) => s.id === initialSubjectId)
        ? initialSubjectId
        : 'all'
    );
    setStoreQuery('');
  }, [storeId, initialSubjectId, store.subjects]);

  const proseScaleClass =
    fontScale === 'large'
      ? 'text-base leading-relaxed'
      : fontScale === 'compact'
        ? 'text-[13px] leading-relaxed'
        : 'text-sm leading-relaxed';

  const queryLower = storeQuery.trim().toLowerCase();

  const visibleSubjects: Subject[] = (
    selectedSubjectId === 'all'
      ? store.subjects
      : store.subjects.filter((s) => s.id === selectedSubjectId)
  ).filter((s) => {
    if (!queryLower) return true;
    const localizedName = getLocalizedSubjectName(s.id, s.name, language, SUBJECT_NAMES_BN);
    const subjectMatch =
      s.name.toLowerCase().includes(queryLower) ||
      localizedName.toLowerCase().includes(queryLower) ||
      s.scopeSummary.toLowerCase().includes(queryLower);
    const topicMatch = s.topics.some((topic) => {
      const lt = getLocalizedTopic(topic, language);
      return (
        topic.title.toLowerCase().includes(queryLower) ||
        lt.title.toLowerCase().includes(queryLower) ||
        topic.levels[ageLevel].toLowerCase().includes(queryLower)
      );
    });
    const qMatch = s.questions.some((q) => {
      const lq = getLocalizedQuestion(q, language);
      return (
        q.question.toLowerCase().includes(queryLower) ||
        lq.question.toLowerCase().includes(queryLower) ||
        q.shortAnswer.toLowerCase().includes(queryLower)
      );
    });
    return subjectMatch || topicMatch || qMatch;
  });

  const levels: AgeLevel[] = ['explorer', 'student', 'mastery'];

  const renderTopicCard = (subject: Subject, topic: TopicChapter) => {
    const localizedTopic = getLocalizedTopic(topic, language);
    const localizedSubjectName = getLocalizedSubjectName(
      subject.id,
      subject.name,
      language,
      SUBJECT_NAMES_BN
    );
    const isMastered = masteredTopicIds.includes(topic.id);
    const isSaved = bookmarkedIds.includes(topic.id);

    return (
      <div
        key={topic.id}
        className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300"
      >
        <div>
          <div className="flex items-start justify-between gap-3">
            <div className="text-xs font-medium text-slate-500 tabular-nums">
              <span>{localizedSubjectName}</span>
              <span aria-hidden="true"> · </span>
              <span>{topic.readMinutes} min</span>
              {isMastered && (
                <>
                  <span aria-hidden="true"> · </span>
                  <span className="text-emerald-700 font-semibold">Mastered</span>
                </>
              )}
            </div>
            <button
              type="button"
              aria-label={isSaved ? 'Remove bookmark' : 'Bookmark chapter'}
              onClick={() => onToggleBookmark(topic.id)}
              className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-sky-700 cursor-pointer"
            >
              <Bookmark
                className={`h-4 w-4 ${isSaved ? 'fill-sky-700 text-sky-700' : ''}`}
                aria-hidden="true"
              />
            </button>
          </div>

          <h4 className="mt-2 font-display text-xl font-semibold text-slate-900">
            {localizedTopic.title}
          </h4>
          <p className="mt-1.5 text-sm text-slate-600">{localizedTopic.subtitle}</p>

          <p className={`mt-3 line-clamp-3 text-slate-700 ${proseScaleClass}`}>
            {localizedTopic.levels[ageLevel]}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="font-mono text-xs text-slate-500 tabular-nums">
            {topic.quiz.length} practice {topic.quiz.length === 1 ? 'question' : 'questions'}
          </span>
          <button
            type="button"
            onClick={() => onOpenTopic(store.id, subject.id, topic.id)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-800 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{t.openDeepLesson}</span>
          </button>
        </div>
      </div>
    );
  };

  const renderQuestionCard = (subject: Subject, q: QuestionEntry) => {
    const localizedQ = getLocalizedQuestion(q, language);
    const localizedSubjectName = getLocalizedSubjectName(
      subject.id,
      subject.name,
      language,
      SUBJECT_NAMES_BN
    );
    const isExpanded = expandedQuestionId === q.id;
    const isSaved = bookmarkedIds.includes(q.id);

    return (
      <div
        key={q.id}
        className="rounded-xl border border-slate-200 bg-white p-5 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="text-xs font-medium text-slate-500">
              <span className={store.accentTextClass}>{localizedSubjectName}</span>
              <span aria-hidden="true"> · </span>
              <span>{q.category}</span>
              <span aria-hidden="true"> · </span>
              <span>{ageLabels[ageLevel].label}</span>
            </div>
            <h4 className="mt-1.5 font-display text-lg font-semibold text-slate-900">
              {localizedQ.question}
            </h4>
            <p className={`mt-2 font-medium text-slate-700 ${proseScaleClass}`}>
              <span className="text-slate-500">{t.quickAnswerLabel} </span>
              {localizedQ.shortAnswer}
            </p>
          </div>

          <button
            type="button"
            aria-label={isSaved ? 'Remove question bookmark' : 'Bookmark question'}
            onClick={() => onToggleBookmark(q.id)}
            className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-sky-700 cursor-pointer shrink-0"
          >
            <Bookmark
              className={`h-4 w-4 ${isSaved ? 'fill-sky-700 text-sky-700' : ''}`}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="mt-4">
          <button
            type="button"
            onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 hover:text-sky-900 cursor-pointer"
          >
            <span>{isExpanded ? t.hideExplanation : t.readExplanation}</span>
            {isExpanded ? (
              <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 space-y-4 border-t border-slate-100 pt-4">
            <div>
              <h5 className="text-xs font-semibold text-slate-500">
                {ageLabels[ageLevel].label} ({ageLabels[ageLevel].ageRange})
              </h5>
              <p className={`mt-1.5 text-slate-700 ${proseScaleClass}`}>
                {localizedQ.detailedExplanation[ageLevel]}
              </p>
              {bilingualMode && language !== 'en' && localizedQ.detailedExplanation[ageLevel] !== q.detailedExplanation[ageLevel] && (
                <p className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">
                  <strong className="text-slate-800">English Reference: </strong>
                  {q.detailedExplanation[ageLevel]}
                </p>
              )}
            </div>

            <div>
              <h5 className="text-xs font-semibold text-slate-500">{t.stepByStepLabel}</h5>
              <ol className="mt-2 space-y-1.5 text-sm text-slate-700">
                {localizedQ.stepByStep.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono text-xs font-semibold text-sky-800 tabular-nums mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
              <div className="text-xs font-semibold text-slate-800">{t.pitfallLabel}</div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                {localizedQ.commonMisconception}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <button
        type="button"
        onClick={onBackToStores}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 transition-colors hover:text-slate-900 cursor-pointer"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{t.backToAllStores}</span>
      </button>

      {langNotice && (
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-xs leading-relaxed text-sky-900">
          {langNotice}
        </div>
      )}

      <div className="mt-5 grid grid-cols-1 gap-8 border-b border-slate-200 pb-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <p className={`text-xs font-semibold ${store.accentTextClass}`}>{storeLabel.tagline}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {storeLabel.title}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
            {store.description}
          </p>
        </div>

        <div className="lg:col-span-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-semibold text-slate-700">{t.readingDepthTitle}</div>
            <div className="mt-2 flex items-center gap-1 rounded-lg bg-slate-100 p-1">
              {levels.map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => onChangeAgeLevel(level)}
                  className={`flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    ageLevel === level
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {ageLabels[level].ageRange}
                </button>
              ))}
            </div>
            <div className="mt-2 text-[11px] text-slate-500">
              {AGE_LEVEL_META[ageLevel].description}
            </div>
          </div>
        </div>
      </div>

      {/* Store Search & View Mode */}
      <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={storeQuery}
            onChange={(e) => setStoreQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            aria-label="Search inside store"
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-1 rounded-lg bg-slate-200/70 p-1 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setStoreMode('subjects')}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
              storeMode === 'subjects' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{t.lessonsTab}</span>
          </button>
          <button
            type="button"
            onClick={() => setStoreMode('qa')}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
              storeMode === 'qa' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{t.qaTab}</span>
          </button>
        </div>
      </div>

      {/* Subject Filter Bar */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <button
          type="button"
          onClick={() => setSelectedSubjectId('all')}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
            selectedSubjectId === 'all'
              ? 'bg-slate-900 text-white'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          All ({store.subjects.length})
        </button>
        {store.subjects.map((subject) => (
          <button
            key={subject.id}
            type="button"
            onClick={() => setSelectedSubjectId(subject.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
              selectedSubjectId === subject.id
                ? 'bg-slate-900 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN)}
          </button>
        ))}
      </div>

      {/* Subjects Content */}
      <div className="mt-8 space-y-12">
        {visibleSubjects.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-sm text-slate-600">
              No subjects or chapters matched "{storeQuery}" inside this store.
            </p>
            <button
              type="button"
              onClick={() => {
                setStoreQuery('');
                setSelectedSubjectId('all');
              }}
              className="mt-3 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white cursor-pointer"
            >
              Show All Subjects in Store
            </button>
          </div>
        ) : (
          visibleSubjects.map((subject) => (
            <section key={subject.id} className="space-y-4">
              <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-3 sm:flex-row sm:items-end">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-slate-900">
                    {getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN)}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">{subject.scopeSummary}</p>
                </div>
                {subject.recommendedLabId && (
                  <button
                    type="button"
                    onClick={() => onOpenLab(subject.recommendedLabId!)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800 transition-colors hover:bg-sky-100 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{t.navLabs}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                )}
              </div>

              {storeMode === 'subjects' ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {subject.topics.map((topic) => renderTopicCard(subject, topic))}
                  </div>
                  {subject.questions.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-semibold text-slate-500">
                          {t.qaTab} ·{' '}
                          {getLocalizedSubjectName(
                            subject.id,
                            subject.name,
                            language,
                            SUBJECT_NAMES_BN
                          )}
                        </h3>
                        <button
                          type="button"
                          onClick={() => setStoreMode('qa')}
                          className="text-xs font-semibold text-sky-800 hover:underline cursor-pointer"
                        >
                          {t.qaTab}
                        </button>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {subject.questions.map((q) => renderQuestionCard(subject, q))}
                      </div>
                    </div>
                  )}

                  {(() => {
                    const relatedBooks = ALL_LIBRARY_BOOKS.filter(
                      (b) => b.subjectId === subject.id
                    );
                    if (relatedBooks.length === 0) return null;
                    return (
                      <div className="space-y-3">
                        <h3 className="text-xs font-semibold text-slate-500">
                          {language === 'bn'
                            ? 'এই বিষয়ের পূর্ণাঙ্গ বইসমূহ'
                            : 'Complete Study Books in This Subject'}
                        </h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {relatedBooks.map((book) => (
                            <button
                              key={book.id}
                              type="button"
                              onClick={() => onOpenBook(book.id)}
                              className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-slate-300 cursor-pointer"
                            >
                              <div className="min-w-0">
                                <div className="text-xs text-slate-500 truncate">
                                  {book.authorOrOrigin}
                                </div>
                                <div className="mt-1 font-display text-base font-semibold text-slate-900 truncate">
                                  {getBookTitle(book, language)}
                                </div>
                                <div className="mt-1 font-mono text-[11px] text-slate-500 tabular-nums">
                                  {book.chapters.length}{' '}
                                  {language === 'bn' ? 'অধ্যায়' : 'chapters'} · {book.readingMinutes}{' '}
                                  min
                                </div>
                              </div>
                              <ArrowRight
                                className="h-4 w-4 shrink-0 text-sky-700"
                                aria-hidden="true"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {subject.questions.map((q) => renderQuestionCard(subject, q))}
                </div>
              )}
            </section>
          ))
        )}
      </div>

      {masteredTopicIds.length > 0 && (
        <div className="mt-12 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-700" aria-hidden="true" />
            <span>
              Mastered chapters:{' '}
              <strong className="font-mono text-slate-900 tabular-nums">
                {masteredTopicIds.length}
              </strong>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
