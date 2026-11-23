import { useState } from 'react';
import { ArrowRight, Bookmark, CheckCircle2, NotebookPen, Trash2 } from 'lucide-react';
import {
  ALL_STORES,
  getAllQuestions,
  getAllSubjects,
  getAllTopics,
} from '../data/knowledgeIndex';
import { getUIMessages, STORE_NAMES_BY_LANG, SUBJECT_NAMES_BN } from '../data/i18n';
import {
  getLocalizedQuestion,
  getLocalizedSubjectName,
  getLocalizedTopic,
} from '../data/banglaKnowledge';
import { ALL_LIBRARY_BOOKS, getBookTitle } from '../data/booksCatalog';
import { LanguageCode, StoreId, StudyNote } from '../types/knowledge';

interface StudyNotebookViewProps {
  language: LanguageCode;
  bookmarkedIds: string[];
  masteredTopicIds: string[];
  notes: StudyNote[];
  onAddNote: (subjectId: string, subjectName: string, storeId: StoreId, content: string) => void;
  onDeleteNote: (noteId: string) => void;
  onToggleBookmark: (id: string) => void;
  onOpenTopic: (storeId: StoreId, subjectId: string, topicId: string) => void;
  onEnterStore: (storeId: StoreId, subjectId?: string) => void;
  onOpenBook: (bookId: string) => void;
}

export function StudyNotebookView({
  language,
  bookmarkedIds,
  masteredTopicIds,
  notes,
  onAddNote,
  onDeleteNote,
  onToggleBookmark,
  onOpenTopic,
  onEnterStore,
  onOpenBook,
}: StudyNotebookViewProps) {
  const t = getUIMessages(language);
  const storeNames = STORE_NAMES_BY_LANG[language];

  const allTopics = getAllTopics();
  const allQuestions = getAllQuestions();
  const allSubjects = getAllSubjects();

  const [selectedSubjectId, setSelectedSubjectId] = useState(allSubjects[0]?.id ?? 'physics');
  const [noteContent, setNoteContent] = useState('');

  const bookmarkedBooks = ALL_LIBRARY_BOOKS.filter((book) => bookmarkedIds.includes(book.id));
  const bookmarkedTopics = allTopics.filter(({ topic }) => bookmarkedIds.includes(topic.id));
  const bookmarkedQuestions = allQuestions.filter(({ question }) =>
    bookmarkedIds.includes(question.id)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = noteContent.trim();
    if (!trimmed) return;
    const subj = allSubjects.find((s) => s.id === selectedSubjectId);
    if (!subj) return;
    const localizedName = getLocalizedSubjectName(subj.id, subj.name, language, SUBJECT_NAMES_BN);
    onAddNote(subj.id, localizedName, subj.storeId, trimmed);
    setNoteContent('');
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="border-b border-slate-200 pb-6">
        <p className="text-xs font-semibold text-sky-800">{t.navNotebook}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {language === 'bn'
            ? 'ব্যক্তিগত স্টাডি নোটবুক ও অগ্রগতি'
            : 'Study Notebook & Mastery Tracker'}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
          {language === 'bn'
            ? 'আপনার বুকমার্ক করা অধ্যায়, সমাধান করা বিষয় এবং ব্যক্তিগত নোট এখানে স্বয়ংক্রিয়ভাবে সংরক্ষিত থাকে। Google লগইন করলে সব ডিভাইসে সিঙ্ক হবে।'
            : 'Your bookmarks, mastered chapters across every faculty store, and personal study notes are saved automatically and sync across devices when signed in with Google.'}
        </p>
      </div>

      {/* Store Mastery Overview */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ALL_STORES.map((store) => {
          const totalInStore = store.subjects.reduce((acc, s) => acc + s.topics.length, 0);
          const masteredInStore = store.subjects.reduce(
            (acc, s) => acc + s.topics.filter((tItem) => masteredTopicIds.includes(tItem.id)).length,
            0
          );
          const pct = totalInStore > 0 ? Math.round((masteredInStore / totalInStore) * 100) : 0;

          return (
            <button
              key={store.id}
              type="button"
              onClick={() => onEnterStore(store.id)}
              className="rounded-xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-slate-300 cursor-pointer"
            >
              <div className={`text-xs font-semibold ${store.accentTextClass}`}>
                {storeNames[store.id].title}
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="font-mono text-2xl font-semibold text-slate-900 tabular-nums">
                  {masteredInStore}/{totalInStore}
                </span>
                <span className="font-mono text-xs text-slate-500 tabular-nums">{pct}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full transition-all duration-300"
                  style={{ width: `${pct}%`, backgroundColor: store.accentHex }}
                />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left: Personal Notes Composer + List */}
        <div className="space-y-6 lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <div className="flex items-center gap-2">
              <NotebookPen className="h-4 w-4 text-sky-700" aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-slate-900">
                {language === 'bn' ? 'নতুন স্টাডি নোট লিখুন' : 'Write a Study Note'}
              </h2>
            </div>

            <div className="mt-4">
              <label htmlFor="note-subject" className="block text-xs font-semibold text-slate-700">
                {language === 'bn' ? 'বিষয় নির্বাচন' : 'Subject Store'}
              </label>
              <select
                id="note-subject"
                value={selectedSubjectId}
                onChange={(e) => setSelectedSubjectId(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-sky-600 focus:bg-white focus:outline-none"
              >
                {allSubjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {getLocalizedSubjectName(s.id, s.name, language, SUBJECT_NAMES_BN)}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="note-body" className="block text-xs font-semibold text-slate-700">
                {language === 'bn' ? 'সারসংক্ষেপ, সূত্র বা গুরুত্বপূর্ণ প্রশ্ন' : 'Summary, Formula, or Key Question'}
              </label>
              <textarea
                id="note-body"
                rows={4}
                maxLength={5000}
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder={
                  language === 'bn'
                    ? 'মনে রাখার জন্য নিজের ভাষায় মূল বিষয় বা সূত্র লিখে রাখুন...'
                    : 'Write a concept in your own words to lock it into long-term memory...'
                }
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:bg-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-800 cursor-pointer"
            >
              {language === 'bn' ? 'নোট সংরক্ষণ করুন' : 'Save Note to Archive'}
            </button>
          </form>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-500">
              {language === 'bn' ? `সংরক্ষিত নোট (${notes.length})` : `Saved Notes (${notes.length})`}
            </h3>
            {notes.length === 0 ? (
              <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
                {language === 'bn'
                  ? 'এখনো কোনো নোট লেখা হয়নি। ওপরে বা যেকোনো অধ্যায়ের ভেতর থেকে নোট যোগ করুন।'
                  : 'No notes written yet. Add your first summary above or inside any lesson chapter.'}
              </div>
            ) : (
              notes.map((note) => (
                <div
                  key={note.id}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-xs font-medium text-slate-500">
                      <span className="font-semibold text-sky-800">
                        {getLocalizedSubjectName(
                          note.subjectId,
                          note.subjectName,
                          language,
                          SUBJECT_NAMES_BN
                        )}
                      </span>
                      <span aria-hidden="true"> · </span>
                      <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
                    </div>
                    <button
                      type="button"
                      aria-label="Delete note"
                      onClick={() => onDeleteNote(note.id)}
                      className="rounded-md p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-700 cursor-pointer"
                    >
                      <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-800">
                    {note.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: Bookmarked Books, Lessons & Questions */}
        <div className="space-y-6 lg:col-span-5">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2">
              <Bookmark className="h-4 w-4 text-sky-700" aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-slate-900">
                {language === 'bn'
                  ? `বুকমার্ক করা বই (${bookmarkedBooks.length})`
                  : `Bookmarked Books (${bookmarkedBooks.length})`}
              </h2>
            </div>

            {bookmarkedBooks.length === 0 ? (
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                {language === 'bn'
                  ? 'বইয়ের লাইব্রেরি থেকে প্রিয় বইগুলো বুকমার্ক করে এখানে দ্রুত পড়ুন।'
                  : 'Bookmark any book from the Books Library to keep quick access here.'}
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {bookmarkedBooks.map((book) => (
                  <li
                    key={book.id}
                    className="flex items-center justify-between gap-3 border-t border-slate-100 pt-3 first:border-t-0 first:pt-0"
                  >
                    <button
                      type="button"
                      onClick={() => onOpenBook(book.id)}
                      className="text-left group cursor-pointer"
                    >
                      <div className="text-xs font-medium text-slate-500">
                        {book.authorOrOrigin}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-sky-800">
                        {getBookTitle(book, language)}
                      </div>
                    </button>
                    <button
                      type="button"
                      aria-label="Remove book bookmark"
                      onClick={() => onToggleBookmark(book.id)}
                      className="text-slate-400 hover:text-rose-600 cursor-pointer shrink-0"
                    >
                      <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2">
              <Bookmark className="h-4 w-4 text-sky-700" aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-slate-900">
                {language === 'bn'
                  ? `বুকমার্ক করা অধ্যায় (${bookmarkedTopics.length})`
                  : `Bookmarked Chapters (${bookmarkedTopics.length})`}
              </h2>
            </div>

            {bookmarkedTopics.length === 0 ? (
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                {language === 'bn'
                  ? 'যেকোনো জ্ঞান-স্টোরের অধ্যায় বুকমার্ক করলে দ্রুত পড়ার জন্য এখানে পাওয়া যাবে।'
                  : 'Bookmark any lesson chapter inside a Knowledge Store to keep quick access here.'}
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {bookmarkedTopics.map(({ store, subject, topic }) => {
                  const locTopic = getLocalizedTopic(topic, language);
                  const subjName = getLocalizedSubjectName(
                    subject.id,
                    subject.name,
                    language,
                    SUBJECT_NAMES_BN
                  );
                  return (
                    <li
                      key={topic.id}
                      className="flex items-center justify-between gap-3 border-t border-slate-100 pt-3 first:border-t-0 first:pt-0"
                    >
                      <button
                        type="button"
                        onClick={() => onOpenTopic(store.id, subject.id, topic.id)}
                        className="text-left group cursor-pointer"
                      >
                        <div className="text-xs font-medium text-slate-500">{subjName}</div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-sky-800">
                          {locTopic.title}
                        </div>
                      </button>
                      <button
                        type="button"
                        aria-label="Remove bookmark"
                        onClick={() => onToggleBookmark(topic.id)}
                        className="text-slate-400 hover:text-rose-600 cursor-pointer shrink-0"
                      >
                        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-700" aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-slate-900">
                {language === 'bn'
                  ? `সংরক্ষিত প্রশ্ন (${bookmarkedQuestions.length})`
                  : `Saved Questions (${bookmarkedQuestions.length})`}
              </h2>
            </div>

            {bookmarkedQuestions.length === 0 ? (
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                {language === 'bn'
                  ? 'পরীক্ষার আগে দ্রুত রিভিশনের জন্য প্রশ্ন ব্যাংক থেকে দরকারি প্রশ্ন বুকমার্ক করুন।'
                  : 'Bookmark challenging questions from any store’s Q&A Bank for fast review before exams.'}
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {bookmarkedQuestions.map(({ store, subject, question }) => {
                  const locQ = getLocalizedQuestion(question, language);
                  const subjName = getLocalizedSubjectName(
                    subject.id,
                    subject.name,
                    language,
                    SUBJECT_NAMES_BN
                  );
                  return (
                    <li
                      key={question.id}
                      className="flex items-start justify-between gap-3 border-t border-slate-100 pt-3 first:border-t-0 first:pt-0"
                    >
                      <button
                        type="button"
                        onClick={() => onEnterStore(store.id, subject.id)}
                        className="text-left group cursor-pointer"
                      >
                        <div className="text-xs font-medium text-slate-500">{subjName}</div>
                        <div className="text-sm font-medium text-slate-900 group-hover:text-sky-800">
                          {locQ.question}
                        </div>
                      </button>
                      <ArrowRight
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-slate-400"
                        aria-hidden="true"
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
