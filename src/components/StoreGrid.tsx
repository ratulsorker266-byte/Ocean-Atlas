import { useState } from 'react';
import { ArrowRight, BookMarked } from 'lucide-react';
import { ALL_STORES } from '../data/knowledgeIndex';
import { getUIMessages, STORE_NAMES_BY_LANG, SUBJECT_NAMES_BN } from '../data/i18n';
import { getLocalizedSubjectName } from '../data/banglaKnowledge';
import { KnowledgeStore, LanguageCode, StoreId } from '../types/knowledge';

interface StoreGridProps {
  language: LanguageCode;
  onEnterStore: (storeId: StoreId, subjectId?: string) => void;
  masteredTopicIds: string[];
}

function StoreIllustration({ store, title }: { store: KnowledgeStore; title: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex aspect-[4/3] w-full flex-col items-center justify-center rounded-lg border ${store.accentBorderClass} ${store.accentBgSoftClass} p-6 text-center`}
      >
        <BookMarked className={`h-8 w-8 ${store.accentTextClass}`} aria-hidden="true" />
        <p className="mt-2 font-display text-base font-semibold text-slate-800">{title}</p>
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
      <img
        src={store.imagePath}
        alt={store.imageAlt}
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </div>
  );
}

export function StoreGrid({ language, onEnterStore, masteredTopicIds }: StoreGridProps) {
  const t = getUIMessages(language);
  const storeLabels = STORE_NAMES_BY_LANG[language];

  return (
    <section id="knowledge-stores" className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">
            {t.storesHeading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            {t.storesSubheading}
          </p>
        </div>
        <p className="text-xs font-medium text-slate-500 tabular-nums">
          4 Faculties · 32 Subjects · 10 Languages
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {ALL_STORES.map((store) => {
          const totalTopics = store.subjects.reduce((acc, s) => acc + s.topics.length, 0);
          const totalQuestions = store.subjects.reduce((acc, s) => acc + s.questions.length, 0);
          const masteredCount = store.subjects.reduce(
            (acc, s) => acc + s.topics.filter((tItem) => masteredTopicIds.includes(tItem.id)).length,
            0
          );
          const localizedStore = storeLabels[store.id];

          return (
            <article
              key={store.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300"
            >
              <div>
                <StoreIllustration store={store} title={localizedStore.title} />

                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 tabular-nums">
                  <span className={store.accentTextClass}>{store.subjects.length} Subjects</span>
                  <span aria-hidden="true">·</span>
                  <span>{totalTopics} Deep Chapters</span>
                  <span aria-hidden="true">·</span>
                  <span>{totalQuestions} Detailed Q&amp;As</span>
                  {masteredCount > 0 && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-700">{masteredCount} Mastered</span>
                    </>
                  )}
                </div>

                <h3 className="mt-2 font-display text-2xl font-semibold text-slate-900">
                  {localizedStore.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {localizedStore.tagline}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <div className="text-xs font-semibold text-slate-500">{t.includedSubjects}</div>
                  <div className="mt-2.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {store.subjects.map((subject) => (
                      <button
                        key={subject.id}
                        type="button"
                        onClick={() => onEnterStore(store.id, subject.id)}
                        className="flex items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                      >
                        <span className="truncate">
                          {getLocalizedSubjectName(subject.id, subject.name, language, SUBJECT_NAMES_BN)}
                        </span>
                        <ArrowRight className="ml-2 h-3 w-3 shrink-0 text-slate-400" aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <button
                  type="button"
                  onClick={() => onEnterStore(store.id)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-sky-800 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                >
                  <span>
                    {t.enterStorePrefix} {localizedStore.title}
                  </span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
