import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, BookOpen, HelpCircle, Search, X } from 'lucide-react';
import { ALL_STORES, getAllQuestions, getAllTopics } from '../data/knowledgeIndex';
import { getUIMessages, STORE_NAMES_BY_LANG, SUBJECT_NAMES_BN } from '../data/i18n';
import {
  getLocalizedQuestion,
  getLocalizedSubjectName,
  getLocalizedTopic,
} from '../data/banglaKnowledge';
import { ALL_LIBRARY_BOOKS, getBookTitle } from '../data/booksCatalog';
import { LanguageCode, StoreId } from '../types/knowledge';

interface SearchModalProps {
  isOpen: boolean;
  language: LanguageCode;
  onClose: () => void;
  onEnterStore: (storeId: StoreId, subjectId?: string) => void;
  onOpenTopic: (storeId: StoreId, subjectId: string, topicId: string) => void;
  onOpenBook: (bookId: string) => void;
}

export function SearchModal({
  isOpen,
  language,
  onClose,
  onEnterStore,
  onOpenTopic,
  onOpenBook,
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const t = getUIMessages(language);
  const storeNames = STORE_NAMES_BY_LANG[language];

  useEffect(() => {
    if (!isOpen) return;
    setQuery('');
    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const allTopics = useMemo(() => getAllTopics(), []);
  const allQuestions = useMemo(() => getAllQuestions(), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        books: ALL_LIBRARY_BOOKS.slice(0, 4),
        subjects: ALL_STORES.flatMap((store) =>
          store.subjects.slice(0, 2).map((subject) => ({ store, subject }))
        ),
        topics: allTopics.slice(0, 4),
        questions: allQuestions.slice(0, 4),
      };
    }

    const books = ALL_LIBRARY_BOOKS.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.titleBn.toLowerCase().includes(q) ||
        b.authorOrOrigin.toLowerCase().includes(q) ||
        b.synopsis.toLowerCase().includes(q)
    ).slice(0, 6);

    const subjects = ALL_STORES.flatMap((store) =>
      store.subjects
        .filter((subject) => {
          const bnName = SUBJECT_NAMES_BN[subject.id]?.toLowerCase() ?? '';
          return (
            subject.name.toLowerCase().includes(q) ||
            bnName.includes(q) ||
            subject.scopeSummary.toLowerCase().includes(q)
          );
        })
        .map((subject) => ({ store, subject }))
    ).slice(0, 6);

    const topics = allTopics
      .filter(({ topic, subject }) => {
        const locTopic = getLocalizedTopic(topic, language);
        const bnSubj = SUBJECT_NAMES_BN[subject.id]?.toLowerCase() ?? '';
        return (
          topic.title.toLowerCase().includes(q) ||
          topic.subtitle.toLowerCase().includes(q) ||
          locTopic.title.toLowerCase().includes(q) ||
          locTopic.subtitle.toLowerCase().includes(q) ||
          subject.name.toLowerCase().includes(q) ||
          bnSubj.includes(q)
        );
      })
      .slice(0, 6);

    const questions = allQuestions
      .filter(({ question, subject }) => {
        const locQ = getLocalizedQuestion(question, language);
        const bnSubj = SUBJECT_NAMES_BN[subject.id]?.toLowerCase() ?? '';
        return (
          question.question.toLowerCase().includes(q) ||
          question.shortAnswer.toLowerCase().includes(q) ||
          locQ.question.toLowerCase().includes(q) ||
          locQ.shortAnswer.toLowerCase().includes(q) ||
          subject.name.toLowerCase().includes(q) ||
          bnSubj.includes(q)
        );
      })
      .slice(0, 6);

    return { books, subjects, topics, questions };
  }, [query, allTopics, allQuestions, language]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Oceanic Atlas"
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 px-4 pt-16 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3.5">
          <Search className="h-4 w-4 text-slate-400 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-6">
          {results.books.length > 0 && (
            <div>
              <div className="px-2 text-xs font-semibold text-slate-500">
                {query.trim() ? 'Matching Books' : 'Featured Library Books'}
              </div>
              <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {results.books.map((book) => (
                  <button
                    key={book.id}
                    type="button"
                    onClick={() => {
                      onOpenBook(book.id);
                      onClose();
                    }}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-colors hover:bg-slate-100 cursor-pointer"
                  >
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-900 truncate">
                        {getBookTitle(book, language)}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {book.authorOrOrigin}
                      </div>
                    </div>
                    <ArrowRight className="ml-2 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.subjects.length > 0 && (
            <div>
              <div className="px-2 text-xs font-semibold text-slate-500">
                {query.trim() ? 'Matching Subjects' : 'Featured Subjects'}
              </div>
              <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {results.subjects.map(({ store, subject }) => (
                  <button
                    key={subject.id}
                    type="button"
                    onClick={() => {
                      onEnterStore(store.id, subject.id);
                      onClose();
                    }}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-colors hover:bg-slate-100 cursor-pointer"
                  >
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-900 truncate">
                        {getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN)}
                      </div>
                      <div className={`text-[11px] ${store.accentTextClass} truncate`}>
                        {storeNames[store.id].title}
                      </div>
                    </div>
                    <ArrowRight className="ml-2 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.topics.length > 0 && (
            <div>
              <div className="px-2 text-xs font-semibold text-slate-500">
                {query.trim() ? 'Matching Lessons' : 'Popular Chapters'}
              </div>
              <div className="mt-2 space-y-1">
                {results.topics.map(({ store, subject, topic }) => {
                  const locTopic = getLocalizedTopic(topic, language);
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => {
                        onOpenTopic(store.id, subject.id, topic.id);
                        onClose();
                      }}
                      className="flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-slate-100 cursor-pointer"
                    >
                      <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-slate-900">{locTopic.title}</div>
                        <div className="text-xs text-slate-500">
                          {getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN)}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {results.questions.length > 0 && (
            <div>
              <div className="px-2 text-xs font-semibold text-slate-500">
                {query.trim() ? 'Matching Q&A Walkthroughs' : 'Featured Questions'}
              </div>
              <div className="mt-2 space-y-1">
                {results.questions.map(({ store, subject, question }) => {
                  const locQ = getLocalizedQuestion(question, language);
                  return (
                    <button
                      key={question.id}
                      type="button"
                      onClick={() => {
                        onEnterStore(store.id, subject.id);
                        onClose();
                      }}
                      className="flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-slate-100 cursor-pointer"
                    >
                      <HelpCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-slate-900">{locQ.question}</div>
                        <div className="text-xs text-slate-500">
                          {getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN)}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {results.books.length === 0 &&
            results.subjects.length === 0 &&
            results.topics.length === 0 &&
            results.questions.length === 0 && (
              <div className="py-8 text-center text-sm text-slate-500">
                No subjects, chapters, or questions matched &ldquo;{query}&rdquo;.
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
