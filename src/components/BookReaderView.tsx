import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  NotebookPen,
} from 'lucide-react';
import { BOOK_SHELF_META, getBookById } from '../data/booksCatalog';
import { AGE_LABELS_BY_LANG, getUIMessages } from '../data/i18n';
import { getLanguageBannerNote } from '../data/banglaKnowledge';
import { AgeLevel, FontScale, LanguageCode, StoreId } from '../types/knowledge';

interface BookReaderViewProps {
  bookId: string;
  ageLevel: AgeLevel;
  language: LanguageCode;
  bilingualMode: boolean;
  fontScale: FontScale;
  onChangeAgeLevel: (level: AgeLevel) => void;
  onBackToLibrary: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  isMastered: boolean;
  onToggleMastered: () => void;
  onSaveNote: (subjectId: string, subjectName: string, storeId: StoreId, content: string) => void;
}

export function BookReaderView({
  bookId,
  ageLevel,
  language,
  bilingualMode,
  fontScale,
  onChangeAgeLevel,
  onBackToLibrary,
  isBookmarked,
  onToggleBookmark,
  isMastered,
  onToggleMastered,
  onSaveNote,
}: BookReaderViewProps) {
  const book = getBookById(bookId);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [showReflection, setShowReflection] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [noteSavedNotice, setNoteSavedNotice] = useState(false);

  const t = getUIMessages(language);
  const ageLabels = AGE_LABELS_BY_LANG[language];
  const langNotice = getLanguageBannerNote(language);

  useEffect(() => {
    setChapterIndex(0);
    setShowReflection(false);
  }, [bookId]);

  useEffect(() => {
    setShowReflection(false);
  }, [chapterIndex]);

  if (!book) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-12 text-center">
        <p className="text-sm text-slate-600">Book edition not found.</p>
        <button
          type="button"
          onClick={onBackToLibrary}
          className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white cursor-pointer"
        >
          Back to Book Library
        </button>
      </section>
    );
  }

  const chapter = book.chapters[chapterIndex] ?? book.chapters[0];
  const shelfMeta = BOOK_SHELF_META.find((s) => s.id === book.category);

  const proseSizeClass =
    fontScale === 'large'
      ? 'text-lg leading-loose'
      : fontScale === 'compact'
        ? 'text-sm leading-relaxed'
        : 'text-base leading-relaxed';

  const handleSaveBookNote = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = noteText.trim();
    if (!trimmed) return;
    const prefix = `${language === 'bn' ? book.titleBn : book.title} (${
      language === 'bn' ? chapter.titleBn : chapter.title
    })`;
    onSaveNote(book.subjectId, book.title.slice(0, 120), book.storeId, `${prefix}:\n${trimmed}`);
    setNoteText('');
    setNoteSavedNotice(true);
    window.setTimeout(() => setNoteSavedNotice(false), 2500);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      {/* Top Breadcrumb + Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <button
          type="button"
          onClick={onBackToLibrary}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{language === 'bn' ? 'সকল বইয়ের তালিকায় ফিরুন' : 'Back to Book Library'}</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-slate-200/70 p-1">
            {(['explorer', 'student', 'mastery'] as AgeLevel[]).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => onChangeAgeLevel(level)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  ageLevel === level ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                {ageLabels[level].label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleBookmark}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
              isBookmarked
                ? 'border-sky-700 bg-sky-50 text-sky-900'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Bookmark
              className={`h-3.5 w-3.5 ${isBookmarked ? 'fill-sky-700 text-sky-700' : ''}`}
              aria-hidden="true"
            />
            <span>{isBookmarked ? (language === 'bn' ? 'সংরক্ষিত' : 'Saved') : (language === 'bn' ? 'সেভ করুন' : 'Bookmark')}</span>
          </button>

          <button
            type="button"
            onClick={onToggleMastered}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
              isMastered
                ? 'border-emerald-700 bg-emerald-50 text-emerald-900'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>
              {isMastered
                ? language === 'bn'
                  ? 'পড়া সম্পন্ন'
                  : 'Completed'
                : language === 'bn'
                  ? 'সম্পন্ন চিহ্ন দিন'
                  : 'Mark Read'}
            </span>
          </button>
        </div>
      </div>

      {/* Main Split Reader */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Sidebar: Hardcover Overview & Chapter Index */}
        <aside className="space-y-6 lg:col-span-4">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="p-6 text-white" style={{ backgroundColor: book.coverColorHex }}>
              <div className="text-xs text-white/80">
                {language === 'bn' ? shelfMeta?.labelBn : shelfMeta?.labelEn}
              </div>
              <h1 className="mt-2 font-display text-2xl font-semibold leading-snug text-white">
                {language === 'bn' ? book.titleBn : book.title}
              </h1>
              {language === 'bn' && bilingualMode && (
                <p className="mt-1 text-xs text-white/80">{book.title}</p>
              )}
              <div className="mt-3 text-xs text-white/85">
                {book.authorOrOrigin}
                <span aria-hidden="true"> · </span>
                <span>{book.era}</span>
              </div>
            </div>

            <div className="p-5">
              <h2 className="text-xs font-semibold text-slate-500">
                {language === 'bn' ? 'অধ্যায় সূচিপত্র' : 'Book Chapters'}
              </h2>
              <nav aria-label="Book chapters" className="mt-3 space-y-1.5">
                {book.chapters.map((ch, idx) => {
                  const active = idx === chapterIndex;
                  return (
                    <button
                      key={ch.chapterNumber}
                      type="button"
                      onClick={() => setChapterIndex(idx)}
                      className={`flex w-full items-start gap-2.5 rounded-lg px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                        active
                          ? 'bg-sky-50 font-semibold text-sky-900'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="font-mono text-slate-400 tabular-nums shrink-0">
                        0{ch.chapterNumber}.
                      </span>
                      <span className="leading-snug">
                        {language === 'bn' ? ch.titleBn : ch.title}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <h3 className="text-xs font-semibold text-slate-500">
                  {language === 'bn' ? 'মূল বক্তব্য' : 'Central Thesis'}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-700">
                  {language === 'bn' ? book.coreThesisBn : book.coreThesis}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Book Note Composer */}
          <form
            onSubmit={handleSaveBookNote}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-center gap-2">
              <NotebookPen className="h-4 w-4 text-sky-700" aria-hidden="true" />
              <h2 className="text-xs font-semibold text-slate-900">
                {language === 'bn' ? 'এই বই থেকে নোট লিখুন' : 'Save a Reading Note'}
              </h2>
            </div>
            <textarea
              rows={3}
              maxLength={4500}
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder={
                language === 'bn'
                  ? 'এই অধ্যায়ের প্রিয় উক্তি বা সারসংক্ষেপ নোটবুকে সেভ করুন...'
                  : 'Jot down a key idea or quote from this chapter...'
              }
              className="mt-3 w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:bg-white focus:outline-none"
            />
            <div className="mt-2.5 flex items-center justify-between gap-2">
              <button
                type="submit"
                className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-sky-800 cursor-pointer"
              >
                {language === 'bn' ? 'নোট সেভ করুন' : 'Save to Notebook'}
              </button>
              {noteSavedNotice && (
                <span className="text-xs font-medium text-emerald-700">
                  {language === 'bn' ? 'নোট সংরক্ষিত!' : 'Saved!'}
                </span>
              )}
            </div>
          </form>
        </aside>

        {/* Right Main Reader Canvas */}
        <article className="space-y-6 lg:col-span-8">
          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span className="font-mono font-semibold text-sky-800 tabular-nums">
                {language === 'bn'
                  ? `অধ্যায় ০${chapter.chapterNumber} / ০${book.chapters.length}`
                  : `Chapter 0${chapter.chapterNumber} of 0${book.chapters.length}`}
              </span>
              <span>
                {ageLabels[ageLevel].label}
                <span aria-hidden="true"> · </span>
                <span>{ageLabels[ageLevel].ageRange}</span>
              </span>
            </div>

            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {language === 'bn' ? chapter.titleBn : chapter.title}
            </h2>
            {bilingualMode && language !== 'en' && (
              <p className="mt-1 text-sm text-slate-500">{chapter.title}</p>
            )}

            {langNotice && (
              <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 px-4 py-2.5 text-xs leading-relaxed text-sky-900">
                {langNotice}
              </div>
            )}

            {/* Guiding Principle */}
            <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="text-[11px] font-semibold text-slate-500">
                {language === 'bn' ? 'মূল নীতি' : 'Guiding Principle'}
              </div>
              <p className="mt-1 text-sm font-medium text-slate-900">{chapter.keyPrinciple}</p>
            </div>

            {/* Chapter Reading Prose */}
            {language === 'bn' ? (
              <div className="mt-6 space-y-5">
                <div>
                  <div className="text-xs font-semibold text-sky-800">বাংলা বিস্তারিত পাঠ</div>
                  <p className={`mt-2 text-slate-800 ${proseSizeClass}`}>{chapter.summaryBn}</p>
                </div>

                {bilingualMode && (
                  <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
                    <div className="text-xs font-semibold text-slate-500">
                      English Depth ({ageLabels[ageLevel].label})
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {chapter.levels[ageLevel]}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-6 space-y-5">
                <p className={`text-slate-800 ${proseSizeClass}`}>{chapter.levels[ageLevel]}</p>

                {bilingualMode && (
                  <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
                    <div className="text-xs font-semibold text-slate-500">
                      {t.settingsBilingualLabel} (বাংলা সারসংক্ষেপ)
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                      {chapter.summaryBn}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Interactive Self-Test Reflection */}
            <div className="mt-8 border-t border-slate-200 pt-6">
              <div className="text-xs font-semibold text-slate-500">
                {language === 'bn' ? 'নিজেকে যাচাই করুন' : 'Pause & Reflect'}
              </div>
              <p className="mt-1.5 text-base font-medium text-slate-900">
                {chapter.reflectionQuestion}
              </p>

              <button
                type="button"
                onClick={() => setShowReflection((prev) => !prev)}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 hover:text-sky-900 cursor-pointer"
              >
                {showReflection ? (
                  <>
                    <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{t.hideExplanation}</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{language === 'bn' ? 'উত্তর ও যুক্তি দেখুন' : 'Reveal Guided Answer'}</span>
                  </>
                )}
              </button>

              {showReflection && (
                <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50/60 px-4 py-3 text-sm leading-relaxed text-slate-800">
                  {chapter.reflectionAnswer}
                </div>
              )}
            </div>

            {/* Chapter Pagination */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
              <button
                type="button"
                disabled={chapterIndex === 0}
                onClick={() => setChapterIndex((i) => Math.max(0, i - 1))}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer disabled:cursor-default"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{language === 'bn' ? 'আগের অধ্যায়' : 'Previous Chapter'}</span>
              </button>

              <button
                type="button"
                disabled={chapterIndex >= book.chapters.length - 1}
                onClick={() =>
                  setChapterIndex((i) => Math.min(book.chapters.length - 1, i + 1))
                }
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-sky-800 disabled:opacity-40 cursor-pointer disabled:cursor-default"
              >
                <span>{language === 'bn' ? 'পরবর্তী অধ্যায়' : 'Next Chapter'}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Book Key Takeaways Summary Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-slate-900">
              {language === 'bn' ? 'এই বইয়ের মূল শিক্ষা' : 'Core Takeaways From This Book'}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {(language === 'bn' ? book.keyTakeawaysBn : book.keyTakeaways).map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-semibold text-sky-800 tabular-nums mt-0.5">
                    0{i + 1}.
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
