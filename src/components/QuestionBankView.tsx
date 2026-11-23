import { useMemo, useState } from 'react';
import { Bookmark, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { ALL_STORES, getAllQuestions } from '../data/knowledgeIndex';
import {
  AGE_LABELS_BY_LANG,
  getUIMessages,
  SUBJECT_NAMES_BN,
} from '../data/i18n';
import {
  getLanguageBannerNote,
  getLocalizedQuestion,
  getLocalizedSubjectName,
} from '../data/banglaKnowledge';
import { AgeLevel, FontScale, LanguageCode, QuestionCategory, StoreId } from '../types/knowledge';

interface QuestionBankViewProps {
  ageLevel: AgeLevel;
  language: LanguageCode;
  bilingualMode: boolean;
  fontScale: FontScale;
  onChangeAgeLevel: (level: AgeLevel) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  onEnterStore: (storeId: StoreId, subjectId?: string) => void;
}

export function QuestionBankView({
  ageLevel,
  language,
  bilingualMode,
  fontScale,
  onChangeAgeLevel,
  bookmarkedIds,
  onToggleBookmark,
  onEnterStore,
}: QuestionBankViewProps) {
  const [selectedStore, setSelectedStore] = useState<'all' | StoreId>('all');
  const [selectedCategory, setSelectedCategory] = useState<'all' | QuestionCategory>('all');
  const [query, setQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const t = getUIMessages(language);
  const ageLabels = AGE_LABELS_BY_LANG[language];
  const langNotice = getLanguageBannerNote(language);

  const allQuestions = useMemo(() => getAllQuestions(), []);
  const categories: Array<'all' | QuestionCategory> = [
    'all',
    'Conceptual',
    'Analytical',
    'Quantitative',
    'Case Study',
  ];

  const proseScaleClass =
    fontScale === 'large'
      ? 'text-base leading-relaxed'
      : fontScale === 'compact'
        ? 'text-[13px] leading-relaxed'
        : 'text-sm leading-relaxed';

  const filtered = useMemo(() => {
    const qLower = query.trim().toLowerCase();
    return allQuestions.filter(({ store, subject, question }) => {
      if (selectedStore !== 'all' && store.id !== selectedStore) return false;
      if (selectedCategory !== 'all' && question.category !== selectedCategory) return false;
      if (!qLower) return true;
      const lq = getLocalizedQuestion(question, language);
      const sName = getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN);
      return (
        question.question.toLowerCase().includes(qLower) ||
        lq.question.toLowerCase().includes(qLower) ||
        question.shortAnswer.toLowerCase().includes(qLower) ||
        lq.shortAnswer.toLowerCase().includes(qLower) ||
        sName.toLowerCase().includes(qLower) ||
        subject.name.toLowerCase().includes(qLower)
      );
    });
  }, [allQuestions, selectedStore, selectedCategory, query, language]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-7 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-semibold text-sky-800">
            Cross-Disciplinary Questions &amp; Deep Explanations
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t.navQuestions}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Every question includes a summary answer, multi-age detailed explanation, step-by-step
            breakdown, and common misconceptions to avoid.
          </p>
        </div>

        <div className="flex items-center gap-1 rounded-lg bg-slate-200/70 p-1 self-start lg:self-auto shrink-0">
          {(['explorer', 'student', 'mastery'] as AgeLevel[]).map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => onChangeAgeLevel(level)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                ageLevel === level ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {ageLabels[level].label}
            </button>
          ))}
        </div>
      </div>

      {langNotice && (
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-xs leading-relaxed text-sky-900">
          {langNotice}
        </div>
      )}

      {/* Filters & Search */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            aria-label="Search questions"
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 lg:col-span-7">
          <button
            type="button"
            onClick={() => setSelectedStore('all')}
            className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
              selectedStore === 'all'
                ? 'bg-slate-900 text-white'
                : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            All Stores
          </button>
          {ALL_STORES.map((store) => (
            <button
              key={store.id}
              type="button"
              onClick={() => setSelectedStore(store.id)}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedStore === store.id
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {store.id === 'science'
                ? 'Science'
                : store.id === 'arts'
                  ? 'Arts'
                  : store.id === 'commerce'
                    ? 'Commerce'
                    : 'Applied'}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Types' : cat}
            </button>
          ))}
        </div>

        <span className="font-mono text-xs text-slate-500 tabular-nums">
          {filtered.length} / {allQuestions.length}
        </span>
      </div>

      {/* Results */}
      <div className="mt-6 space-y-4">
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-sm font-medium text-slate-700">
              No questions matched your current search or filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSelectedStore('all');
                setSelectedCategory('all');
              }}
              className="mt-3 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filtered.map(({ store, subject, question }) => {
            const lq = getLocalizedQuestion(question, language);
            const sName = getLocalizedSubjectName(
              subject.id,
              subject.name,
              language,
              SUBJECT_NAMES_BN
            );
            const isExpanded = expandedId === question.id;
            const isSaved = bookmarkedIds.includes(question.id);

            return (
              <article
                key={question.id}
                className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                      <button
                        type="button"
                        onClick={() => onEnterStore(store.id, subject.id)}
                        className={`${store.accentTextClass} hover:underline cursor-pointer`}
                      >
                        {sName}
                      </button>
                      <span aria-hidden="true">·</span>
                      <span>{question.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{ageLabels[ageLevel].label}</span>
                    </div>

                    <h2 className="mt-1.5 font-display text-lg font-semibold text-slate-900 sm:text-xl">
                      {lq.question}
                    </h2>
                    <p className={`mt-2 text-slate-700 ${proseScaleClass}`}>
                      <span className="font-semibold text-slate-900">{t.quickAnswerLabel} </span>
                      {lq.shortAnswer}
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-label={isSaved ? 'Remove bookmark' : 'Bookmark question'}
                    onClick={() => onToggleBookmark(question.id)}
                    className="rounded-md p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-sky-700 cursor-pointer shrink-0"
                  >
                    <Bookmark
                      className={`h-4 w-4 ${isSaved ? 'fill-sky-700 text-sky-700' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : question.id)}
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
                      <h3 className="text-xs font-semibold text-slate-500">
                        {ageLabels[ageLevel].label} ({ageLabels[ageLevel].ageRange})
                      </h3>
                      <p className={`mt-1.5 text-slate-700 ${proseScaleClass}`}>
                        {lq.detailedExplanation[ageLevel]}
                      </p>
                      {bilingualMode &&
                        language !== 'en' &&
                        lq.detailedExplanation[ageLevel] !==
                          question.detailedExplanation[ageLevel] && (
                          <p className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">
                            <strong className="text-slate-800">English Reference: </strong>
                            {question.detailedExplanation[ageLevel]}
                          </p>
                        )}
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-slate-500">{t.stepByStepLabel}</h3>
                      <ol className="mt-2 space-y-1.5 text-sm text-slate-700">
                        {lq.stepByStep.map((step, idx) => (
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
                        {lq.commonMisconception}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
