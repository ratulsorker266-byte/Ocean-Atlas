import { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, HelpCircle, Search } from 'lucide-react';
import { ALL_STORES, getAllQuestions, getAllTopics } from '../data/knowledgeIndex';
import { getUIMessages, SUBJECT_NAMES_BN } from '../data/i18n';
import {
  getLocalizedQuestion,
  getLocalizedSubjectName,
  getLocalizedTopic,
} from '../data/banglaKnowledge';
import { ALL_LIBRARY_BOOKS, getBookSynopsis, getBookTitle } from '../data/booksCatalog';
import { REFERENCE_COMPENDIUM } from '../data/referenceCompendium';
import { LanguageCode, StoreId } from '../types/knowledge';

interface CatalogViewProps {
  language: LanguageCode;
  onEnterStore: (storeId: StoreId, subjectId?: string) => void;
  onOpenTopic: (storeId: StoreId, subjectId: string, topicId: string) => void;
  onOpenBook: (bookId: string) => void;
}

type CatalogKind = 'all' | 'books' | 'subjects' | 'chapters' | 'questions' | 'reference';

export function CatalogView({ language, onEnterStore, onOpenTopic, onOpenBook }: CatalogViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStore, setSelectedStore] = useState<'all' | StoreId>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [kindFilter, setKindFilter] = useState<CatalogKind>('all');

  const t = getUIMessages(language);

  const catalogEntries = useMemo(() => {
    const entries: Array<{
      id: string;
      title: string;
      subtitle: string;
      kind: 'book' | 'subject' | 'chapter' | 'question';
      storeId: StoreId;
      storeTitle: string;
      accentTextClass: string;
      subjectId: string;
      subjectName: string;
      topicId?: string;
      bookId?: string;
    }> = [];

    for (const book of ALL_LIBRARY_BOOKS) {
      const store = ALL_STORES.find((s) => s.id === book.storeId) ?? ALL_STORES[0];
      entries.push({
        id: `bk-${book.id}`,
        title: getBookTitle(book, language),
        subtitle: getBookSynopsis(book, language),
        kind: 'book',
        storeId: book.storeId,
        storeTitle: store.title,
        accentTextClass: store.accentTextClass,
        subjectId: book.subjectId,
        subjectName: book.authorOrOrigin,
        bookId: book.id,
      });
    }

    for (const store of ALL_STORES) {
      for (const subject of store.subjects) {
        const sName = getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN);
        entries.push({
          id: `subj-${subject.id}`,
          title: sName,
          subtitle: subject.scopeSummary,
          kind: 'subject',
          storeId: store.id,
          storeTitle: store.title,
          accentTextClass: store.accentTextClass,
          subjectId: subject.id,
          subjectName: sName,
        });
      }
    }

    for (const { store, subject, topic } of getAllTopics()) {
      const lt = getLocalizedTopic(topic, language);
      const sName = getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN);
      entries.push({
        id: `top-${topic.id}`,
        title: lt.title,
        subtitle: lt.subtitle,
        kind: 'chapter',
        storeId: store.id,
        storeTitle: store.title,
        accentTextClass: store.accentTextClass,
        subjectId: subject.id,
        subjectName: sName,
        topicId: topic.id,
      });
    }

    for (const { store, subject, question } of getAllQuestions()) {
      const lq = getLocalizedQuestion(question, language);
      const sName = getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN);
      entries.push({
        id: `qa-${question.id}`,
        title: lq.question,
        subtitle: lq.shortAnswer,
        kind: 'question',
        storeId: store.id,
        storeTitle: store.title,
        accentTextClass: store.accentTextClass,
        subjectId: subject.id,
        subjectName: sName,
      });
    }

    return entries.sort((a, b) => a.title.localeCompare(b.title));
  }, [language]);

  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    for (const item of catalogEntries) {
      const ch = item.title.trim().charAt(0).toUpperCase();
      if ((ch >= 'A' && ch <= 'Z') || ch >= '\u0980') letters.add(ch);
    }
    return Array.from(letters).sort().slice(0, 26);
  }, [catalogEntries]);

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return catalogEntries.filter((item) => {
      if (selectedStore !== 'all' && item.storeId !== selectedStore) return false;
      if (kindFilter === 'books' && item.kind !== 'book') return false;
      if (kindFilter === 'subjects' && item.kind !== 'subject') return false;
      if (kindFilter === 'chapters' && item.kind !== 'chapter') return false;
      if (kindFilter === 'questions' && item.kind !== 'question') return false;
      if (selectedLetter !== 'ALL') {
        const first = item.title.trim().charAt(0).toUpperCase();
        if (first !== selectedLetter) return false;
      }
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.subjectName.toLowerCase().includes(q) ||
        item.storeTitle.toLowerCase().includes(q)
      );
    });
  }, [catalogEntries, searchTerm, selectedStore, kindFilter, selectedLetter]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="border-b border-slate-200 pb-6">
        <p className="text-xs font-semibold text-sky-800">Complete Library Shelf Directory</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {t.navCatalog}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
          Find any subject, deep lesson chapter, Q&amp;A walkthrough, or core scientific &amp;
          economic reference constant in one place.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.searchPlaceholder}
            aria-label="Filter library catalog"
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

      {/* Entry Kind Tabs */}
      <div className="mt-4 flex flex-col justify-between gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-1 rounded-lg bg-slate-200/70 p-1 self-start">
          {(
            [
              { id: 'all', label: 'Everything' },
              { id: 'books', label: `Books (${ALL_LIBRARY_BOOKS.length})` },
              { id: 'subjects', label: '32 Subjects' },
              { id: 'chapters', label: 'Chapters' },
              { id: 'questions', label: 'Q&As' },
              { id: 'reference', label: t.referenceDeskTitle },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setKindFilter(tab.id)}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                kindFilter === tab.id ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <span className="font-mono text-xs text-slate-500 tabular-nums">
          {kindFilter === 'reference'
            ? `${REFERENCE_COMPENDIUM.length} core constants & formulas`
            : `${filtered.length} catalog entries`}
        </span>
      </div>

      {kindFilter === 'reference' ? (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {REFERENCE_COMPENDIUM.map((entry) => (
            <div
              key={entry.id}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="text-xs font-semibold text-sky-800">{entry.domain}</div>
              <h2 className="mt-1 font-display text-lg font-semibold text-slate-900">
                {entry.name}
              </h2>
              <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-900 tabular-nums">
                {entry.symbolOrFormula} → {entry.valueOrSummary}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{entry.note}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Alphabet Jump Strip */}
          <div className="mt-4 flex flex-wrap items-center gap-1">
            <button
              type="button"
              onClick={() => setSelectedLetter('ALL')}
              className={`rounded-md px-2.5 py-1 font-mono text-xs font-semibold transition-colors cursor-pointer ${
                selectedLetter === 'ALL'
                  ? 'bg-sky-700 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              ALL
            </button>
            {availableLetters.map((letter) => (
              <button
                key={letter}
                type="button"
                onClick={() => setSelectedLetter(letter)}
                className={`rounded-md px-2 py-1 font-mono text-xs font-semibold transition-colors cursor-pointer ${
                  selectedLetter === letter
                    ? 'bg-sky-700 text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Catalog Rows */}
          <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {filtered.length === 0 ? (
              <div className="p-10 text-center">
                <p className="text-sm text-slate-600">
                  No entries matched your current filter or letter selection.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedStore('all');
                    setSelectedLetter('ALL');
                    setKindFilter('all');
                  }}
                  className="mt-3 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white cursor-pointer"
                >
                  Show Full Library
                </button>
              </div>
            ) : (
              filtered.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (item.kind === 'book' && item.bookId) {
                      onOpenBook(item.bookId);
                    } else if (item.kind === 'chapter' && item.topicId) {
                      onOpenTopic(item.storeId, item.subjectId, item.topicId);
                    } else {
                      onEnterStore(item.storeId, item.subjectId);
                    }
                  }}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50 cursor-pointer"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                      <span className={item.accentTextClass}>{item.subjectName}</span>
                      <span aria-hidden="true">·</span>
                      <span>
                        {item.kind === 'book'
                          ? 'Complete Book'
                          : item.kind === 'subject'
                            ? 'Subject Shelf'
                            : item.kind === 'chapter'
                              ? 'Deep Lesson'
                              : 'Q&A Walkthrough'}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      {(item.kind === 'chapter' || item.kind === 'book') && (
                        <BookOpen className="h-3.5 w-3.5 shrink-0 text-sky-700" aria-hidden="true" />
                      )}
                      {item.kind === 'question' && (
                        <HelpCircle
                          className="h-3.5 w-3.5 shrink-0 text-emerald-700"
                          aria-hidden="true"
                        />
                      )}
                      <span className="font-display text-base font-semibold text-slate-900 truncate">
                        {item.title}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-600 line-clamp-1">{item.subtitle}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                </button>
              ))
            )}
          </div>
        </>
      )}
    </section>
  );
}
