import { useMemo, useState } from 'react';
import { ArrowRight, Bookmark, BookOpen, CheckCircle2, Search } from 'lucide-react';
import {
  ALL_LIBRARY_BOOKS,
  BOOK_SHELF_META,
  getBookChapterCount,
  getBookSynopsis,
  getBookTitle,
} from '../data/booksCatalog';
import { getUIMessages } from '../data/i18n';
import { BookShelfCategory, LanguageCode, StoreId } from '../types/knowledge';

interface BookLibraryViewProps {
  language: LanguageCode;
  bookmarkedIds: string[];
  masteredTopicIds: string[];
  onToggleBookmark: (id: string) => void;
  onOpenBook: (bookId: string) => void;
}

export function BookLibraryView({
  language,
  bookmarkedIds,
  masteredTopicIds,
  onToggleBookmark,
  onOpenBook,
}: BookLibraryViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedShelf, setSelectedShelf] = useState<'all' | BookShelfCategory>('all');
  const [selectedStore, setSelectedStore] = useState<'all' | StoreId | 'bookmarked'>('all');

  const t = getUIMessages(language);
  const totalChapters = useMemo(() => getBookChapterCount(), []);

  const filteredBooks = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return ALL_LIBRARY_BOOKS.filter((book) => {
      if (selectedShelf !== 'all' && book.category !== selectedShelf) return false;
      if (selectedStore === 'bookmarked' && !bookmarkedIds.includes(book.id)) return false;
      if (
        selectedStore !== 'all' &&
        selectedStore !== 'bookmarked' &&
        book.storeId !== selectedStore
      ) {
        return false;
      }
      if (!q) return true;
      return (
        book.title.toLowerCase().includes(q) ||
        book.titleBn.toLowerCase().includes(q) ||
        book.authorOrOrigin.toLowerCase().includes(q) ||
        book.synopsis.toLowerCase().includes(q) ||
        book.synopsisBn.toLowerCase().includes(q) ||
        book.chapters.some(
          (ch) =>
            ch.title.toLowerCase().includes(q) ||
            ch.titleBn.toLowerCase().includes(q) ||
            ch.keyPrinciple.toLowerCase().includes(q)
        )
      );
    });
  }, [searchTerm, selectedShelf, selectedStore, bookmarkedIds]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <p className="text-xs font-semibold text-sky-800">
          {language === 'bn'
            ? 'বিশ্বকোষীয় গ্রন্থাগার · সকল প্রকার ও সকল বয়সের বই'
            : 'Universal Grand Library · Every Genre & Academic Discipline'}
        </p>
        <div className="mt-2 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t.navBooks}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              {language === 'bn'
                ? 'বিজ্ঞান, গণিত, প্রোগ্রামিং ও এআই, বাংলা ও বিশ্বসাহিত্য, ইতিহাস, আইন, অর্থনীতি, দর্শন, ধর্ম, চিকিৎসাবিজ্ঞান এবং দৈনন্দিন দক্ষতার পূর্ণাঙ্গ অধ্যায়ভিত্তিক বইয়ের ভান্ডার।'
                : 'Read complete multi-chapter study editions across Science, Mathematics, AI, Bangla & World Literature, History, Law, Economics, Philosophy, World Religions, Medicine, Ecology, and Everyday Mastery.'}
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500 shrink-0">
            <span className="font-mono font-semibold text-slate-900 tabular-nums">
              {ALL_LIBRARY_BOOKS.length} {language === 'bn' ? 'টি বই' : 'Complete Books'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono font-semibold text-slate-900 tabular-nums">
              {totalChapters} {language === 'bn' ? 'টি অধ্যায়' : 'Guided Chapters'}
            </span>
          </div>
        </div>
      </div>

      {/* Search & Store Filter */}
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
            placeholder={
              language === 'bn'
                ? 'বইয়ের নাম, লেখক, বা বিষয় লিখুন (বাংলা বা English)...'
                : 'Search book title, author, chapter topic, or বাংলা title...'
            }
            aria-label="Search books"
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 lg:col-span-7">
          {(
            [
              { id: 'all', label: language === 'bn' ? 'সকল বিভাগ' : 'All Faculties' },
              { id: 'science', label: language === 'bn' ? 'বিজ্ঞান' : 'Science' },
              { id: 'arts', label: language === 'bn' ? 'কলা ও সাহিত্য' : 'Arts & Lit' },
              { id: 'commerce', label: language === 'bn' ? 'বাণিজ্য ও আইন' : 'Commerce & Law' },
              { id: 'applied', label: language === 'bn' ? 'দক্ষতা ও প্রযুক্তি' : 'Tech & Skills' },
              { id: 'bookmarked', label: language === 'bn' ? 'বুকমার্ক' : 'Saved Shelf' },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedStore(item.id)}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedStore === item.id
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 8-Shelf Genre Tabs */}
      <div className="mt-5 flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-5">
        <button
          type="button"
          onClick={() => setSelectedShelf('all')}
          className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
            selectedShelf === 'all'
              ? 'bg-sky-800 text-white'
              : 'bg-slate-200/70 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {language === 'bn' ? `সবগুলো (${ALL_LIBRARY_BOOKS.length})` : `All Genres (${ALL_LIBRARY_BOOKS.length})`}
        </button>
        {BOOK_SHELF_META.map((shelf) => (
          <button
            key={shelf.id}
            type="button"
            onClick={() => setSelectedShelf(shelf.id)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedShelf === shelf.id
                ? 'bg-sky-800 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {language === 'bn' ? shelf.labelBn : shelf.labelEn}
          </button>
        ))}
      </div>

      {/* Active Filter Readout */}
      <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
        <span>
          {selectedShelf === 'all'
            ? language === 'bn'
              ? 'সবগুলো তাক দেখানো হচ্ছে'
              : 'Showing all curated library shelves'
            : (() => {
                const s = BOOK_SHELF_META.find((item) => item.id === selectedShelf);
                return s ? (language === 'bn' ? s.descriptionBn : s.descriptionEn) : '';
              })()}
        </span>
        <span className="font-mono tabular-nums">
          {filteredBooks.length} {language === 'bn' ? 'টি বই পাওয়া গেছে' : 'books'}
        </span>
      </div>

      {/* Book Grid */}
      {filteredBooks.length === 0 ? (
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-10 text-center">
          <p className="text-sm text-slate-600">
            {language === 'bn'
              ? 'আপনার খোঁজা শব্দ বা ফিল্টারের সাথে কোনো বই মেলেনি।'
              : 'No books matched your current search or shelf selection.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm('');
              setSelectedShelf('all');
              setSelectedStore('all');
            }}
            className="mt-3 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white cursor-pointer"
          >
            {language === 'bn' ? 'সব বই দেখুন' : 'Reset Filters'}
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => {
            const title = getBookTitle(book, language);
            const synopsis = getBookSynopsis(book, language);
            const isSaved = bookmarkedIds.includes(book.id);
            const isDone = masteredTopicIds.includes(book.id);
            const shelfMeta = BOOK_SHELF_META.find((s) => s.id === book.category);

            return (
              <article
                key={book.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-slate-300"
              >
                {/* Classical Hardcover Plate Top */}
                <div
                  className="flex flex-col justify-between p-5 text-white"
                  style={{ backgroundColor: book.coverColorHex }}
                >
                  <div className="flex items-center justify-between gap-2 text-[11px] text-white/80">
                    <span className="truncate">
                      {language === 'bn' ? shelfMeta?.labelBn : shelfMeta?.labelEn}
                    </span>
                    <button
                      type="button"
                      onClick={() => onToggleBookmark(book.id)}
                      aria-label={isSaved ? 'Remove book bookmark' : 'Bookmark book'}
                      className="rounded-md p-1 text-white/90 hover:bg-white/15 cursor-pointer shrink-0"
                    >
                      <Bookmark
                        className={`h-4 w-4 ${isSaved ? 'fill-white text-white' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-white">
                    {title}
                  </h2>
                  <p className="mt-1.5 text-xs text-white/80 truncate">{book.authorOrOrigin}</p>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono tabular-nums">
                        {book.chapters.length} {language === 'bn' ? 'অধ্যায়' : 'chapters'}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{book.readingMinutes} min</span>
                      <span aria-hidden="true">·</span>
                      <span>{book.ageBand}</span>
                      {isDone && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>{language === 'bn' ? 'সম্পন্ন' : 'Read'}</span>
                          </span>
                        </>
                      )}
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-3">
                      {synopsis}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <button
                      type="button"
                      onClick={() => onOpenBook(book.id)}
                      className="inline-flex w-full items-center justify-between rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-800 cursor-pointer"
                    >
                      <span className="inline-flex items-center gap-2">
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>
                          {language === 'bn' ? 'বইটি পড়ুন (৪ অধ্যায়)' : 'Open & Read Full Book'}
                        </span>
                      </span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
