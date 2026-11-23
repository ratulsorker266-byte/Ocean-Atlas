import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  FlaskConical,
  HelpCircle,
  NotebookPen,
} from 'lucide-react';
import { AGE_LEVEL_META, getStoreById, getSubjectById } from '../data/knowledgeIndex';
import {
  AGE_LABELS_BY_LANG,
  getUIMessages,
  STORE_NAMES_BY_LANG,
  SUBJECT_NAMES_BN,
} from '../data/i18n';
import {
  getLanguageBannerNote,
  getLocalizedSubjectName,
  getLocalizedTopic,
} from '../data/banglaKnowledge';
import { AgeLevel, FontScale, LanguageCode, StoreId } from '../types/knowledge';

interface TopicReaderProps {
  storeId: StoreId;
  subjectId: string;
  topicId: string;
  ageLevel: AgeLevel;
  language: LanguageCode;
  bilingualMode: boolean;
  fontScale: FontScale;
  onChangeAgeLevel: (level: AgeLevel) => void;
  onBackToStore: () => void;
  onOpenTopic: (storeId: StoreId, subjectId: string, topicId: string) => void;
  onOpenLab: (labId: 'equilibrium' | 'wave' | 'growth') => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  isMastered: boolean;
  onToggleMastered: () => void;
  onSaveNote: (subjectId: string, subjectName: string, storeId: StoreId, text: string) => void;
}

export function TopicReader({
  storeId,
  subjectId,
  topicId,
  ageLevel,
  language,
  bilingualMode,
  fontScale,
  onChangeAgeLevel,
  onBackToStore,
  onOpenTopic,
  onOpenLab,
  isBookmarked,
  onToggleBookmark,
  isMastered,
  onToggleMastered,
  onSaveNote,
}: TopicReaderProps) {
  const store = getStoreById(storeId);
  const subject = getSubjectById(subjectId);
  const rawTopic = subject?.topics.find((t) => t.id === topicId);

  const t = getUIMessages(language);
  const storeLabel = STORE_NAMES_BY_LANG[language][store.id];
  const ageLabels = AGE_LABELS_BY_LANG[language];
  const langNotice = getLanguageBannerNote(language);

  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [noteDraft, setNoteDraft] = useState('');
  const [noteSavedNotice, setNoteSavedNotice] = useState(false);

  useEffect(() => {
    setSelectedAnswers({});
    setNoteSavedNotice(false);
  }, [topicId]);

  if (!subject || !rawTopic) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-sm text-slate-600">Chapter not found.</p>
        <button
          type="button"
          onClick={onBackToStore}
          className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white cursor-pointer"
        >
          Return to Store
        </button>
      </div>
    );
  }

  const topic = getLocalizedTopic(rawTopic, language);
  const localizedSubjectName = getLocalizedSubjectName(
    subject.id,
    subject.name,
    language,
    SUBJECT_NAMES_BN
  );

  const proseSizeClass =
    fontScale === 'large'
      ? 'text-[17px] leading-[1.85]'
      : fontScale === 'compact'
        ? 'text-[14px] leading-[1.65]'
        : 'text-[15.5px] leading-[1.75]';

  const storeChapters = store.subjects.flatMap((s) =>
    s.topics.map((tItem) => ({
      subjectId: s.id,
      subjectName: getLocalizedSubjectName(s.id, s.name, language, SUBJECT_NAMES_BN),
      topic: getLocalizedTopic(tItem, language),
      rawTopicId: tItem.id,
    }))
  );
  const currentIdx = storeChapters.findIndex((item) => item.rawTopicId === rawTopic.id);
  const prevChapter = currentIdx > 0 ? storeChapters[currentIdx - 1] : null;
  const nextChapter =
    currentIdx >= 0 && currentIdx < storeChapters.length - 1
      ? storeChapters[currentIdx + 1]
      : null;

  const levels: AgeLevel[] = ['explorer', 'student', 'mastery'];

  const handleSaveQuickNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteDraft.trim()) return;
    onSaveNote(subject.id, localizedSubjectName, store.id, noteDraft.trim());
    setNoteDraft('');
    setNoteSavedNotice(true);
    setTimeout(() => setNoteSavedNotice(false), 2500);
  };

  const hasLocalizedText = topic.levels[ageLevel] !== rawTopic.levels[ageLevel];

  return (
    <article className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBackToStore}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{storeLabel.title}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleBookmark}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
              isBookmarked
                ? 'border-sky-300 bg-sky-50 text-sky-800'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Bookmark
              className={`h-3.5 w-3.5 ${isBookmarked ? 'fill-sky-700 text-sky-700' : ''}`}
              aria-hidden="true"
            />
            <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>

          <button
            type="button"
            onClick={onToggleMastered}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
              isMastered
                ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{isMastered ? 'Mastered' : 'Mark Mastered'}</span>
          </button>
        </div>
      </div>

      {langNotice && (
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-xs leading-relaxed text-sky-900">
          {langNotice}
        </div>
      )}

      {/* Header & Meta */}
      <header className="mt-6 border-b border-slate-200 pb-7">
        <div className="text-xs font-medium text-slate-500 tabular-nums">
          <span className={store.accentTextClass}>{localizedSubjectName}</span>
          <span aria-hidden="true"> · </span>
          <span>{topic.readMinutes} min</span>
          <span aria-hidden="true"> · </span>
          <span>{ageLabels[ageLevel].label}</span>
        </div>

        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl text-balance">
          {topic.title}
        </h1>
        <p className="mt-2.5 text-base text-slate-600">{topic.subtitle}</p>
        {bilingualMode && language !== 'en' && topic.title !== rawTopic.title && (
          <p className="mt-1 text-xs font-medium text-slate-500">
            English Title: {rawTopic.title}
          </p>
        )}

        {/* Age-Level Switcher */}
        <div className="mt-6 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-800">{t.readingDepthTitle}</div>
            <div className="text-xs text-slate-500">{AGE_LEVEL_META[ageLevel].description}</div>
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 shrink-0">
            {levels.map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => onChangeAgeLevel(level)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  ageLevel === level
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {ageLabels[level].label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Lesson Content */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-8">
          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-display text-xl font-semibold text-slate-900">
              {ageLabels[ageLevel].label} ({ageLabels[ageLevel].ageRange})
            </h2>
            <p className={`mt-3 text-slate-700 ${proseSizeClass}`}>{topic.levels[ageLevel]}</p>

            {bilingualMode && language !== 'en' && hasLocalizedText && (
              <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-700">
                  English Side-by-Side Reference
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {rawTopic.levels[ageLevel]}
                </p>
              </div>
            )}
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-display text-xl font-semibold text-slate-900">
              Core Principle &amp; Formula
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{topic.corePrinciple}</p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-xs text-slate-900 sm:text-sm">
              {topic.formulaOrFramework}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-display text-xl font-semibold text-slate-900">Key Takeaways</h2>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-700">
              {topic.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-mono text-xs font-semibold text-sky-800 tabular-nums mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Interactive Self-Check Quiz */}
          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-sky-700" aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-slate-900">
                Quick Recall Check
              </h2>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Test your understanding immediately—select an option to inspect the explanation.
            </p>

            <div className="mt-5 space-y-6">
              {rawTopic.quiz.map((q) => {
                const chosen = selectedAnswers[q.id];
                const hasAnswered = chosen !== undefined;
                const isCorrect = chosen === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className="border-t border-slate-100 pt-5 first:border-t-0 first:pt-0"
                  >
                    <p className="text-sm font-semibold text-slate-900">{q.prompt}</p>
                    <div className="mt-3 grid grid-cols-1 gap-2">
                      {q.options.map((opt, idx) => {
                        let optionStyle =
                          'border-slate-200 bg-white text-slate-700 hover:bg-slate-50';
                        if (hasAnswered) {
                          if (idx === q.correctIndex) {
                            optionStyle =
                              'border-emerald-500 bg-emerald-50 text-emerald-900 font-medium';
                          } else if (idx === chosen) {
                            optionStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                          } else {
                            optionStyle = 'border-slate-200 bg-slate-50 text-slate-500';
                          }
                        }

                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() =>
                              setSelectedAnswers((prev) => ({ ...prev, [q.id]: idx }))
                            }
                            className={`rounded-lg border px-3.5 py-2.5 text-left text-xs sm:text-sm transition-colors cursor-pointer ${optionStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {hasAnswered && (
                      <div
                        className={`mt-3 rounded-lg border p-3.5 text-xs leading-relaxed ${
                          isCorrect
                            ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                            : 'border-amber-200 bg-amber-50 text-amber-900'
                        }`}
                      >
                        <span className="font-semibold">
                          {isCorrect ? 'Correct: ' : 'Not quite — Explanation: '}
                        </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Sequential Store Chapter Navigation */}
          <nav
            aria-label="Chapter navigation"
            className="grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-2"
          >
            {prevChapter ? (
              <button
                type="button"
                onClick={() =>
                  onOpenTopic(store.id, prevChapter.subjectId, prevChapter.rawTopicId)
                }
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-slate-300 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-slate-500">
                    Previous · {prevChapter.subjectName}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 truncate">
                    {prevChapter.topic.title}
                  </div>
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextChapter && (
              <button
                type="button"
                onClick={() =>
                  onOpenTopic(store.id, nextChapter.subjectId, nextChapter.rawTopicId)
                }
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-slate-300 cursor-pointer"
              >
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-slate-500">
                    Next · {nextChapter.subjectName}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 truncate">
                    {nextChapter.topic.title}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
              </button>
            )}
          </nav>
        </div>

        {/* Sidebar Context & Personal Note */}
        <aside className="space-y-6 lg:col-span-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-xs font-semibold text-slate-500">Real-World Connection</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              {topic.realWorldApplication}
            </p>
          </div>

          {subject.recommendedLabId && (
            <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-5">
              <h3 className="text-sm font-semibold text-slate-900">Explore This Concept Live</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Adjust variables and observe cause-and-effect inside our interactive lab.
              </p>
              <button
                type="button"
                onClick={() => onOpenLab(subject.recommendedLabId!)}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-700 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-800 cursor-pointer"
              >
                <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.navLabs}</span>
              </button>
            </div>
          )}

          <form
            onSubmit={handleSaveQuickNote}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-center gap-2">
              <NotebookPen className="h-4 w-4 text-slate-600" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-slate-900">{t.navNotebook}</h3>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Write a summary in your own words to lock it into memory.
            </p>
            <textarea
              rows={4}
              value={noteDraft}
              onChange={(e) => setNoteDraft(e.target.value)}
              placeholder={`Note for ${localizedSubjectName}...`}
              className="mt-3 w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-sky-600 focus:bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2.5 w-full rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-800 cursor-pointer"
            >
              Save Note
            </button>
            {noteSavedNotice && (
              <p className="mt-2 text-xs font-medium text-emerald-700">
                Saved to your Study Notebook.
              </p>
            )}
          </form>
        </aside>
      </div>
    </article>
  );
}
