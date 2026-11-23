import { User } from 'firebase/auth';
import { LogIn, SlidersHorizontal } from 'lucide-react';
import { getUIMessages } from '../data/i18n';
import { LanguageCode } from '../types/knowledge';

export type ActiveTab =
  | 'stores'
  | 'books'
  | 'world-map'
  | 'catalog'
  | 'questions'
  | 'labs'
  | 'notebook';

interface HeaderProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenSettings: () => void;
  onOpenLogin: () => void;
  language: LanguageCode;
  user: User | null;
}

export function Header({
  activeTab,
  onSelectTab,
  onOpenSettings,
  onOpenLogin,
  language,
  user,
}: HeaderProps) {
  const t = getUIMessages(language);

  const navItems: Array<{ id: ActiveTab; label: string }> = [
    { id: 'stores', label: t.navStores },
    { id: 'books', label: t.navBooks },
    { id: 'world-map', label: t.navWorldMap },
    { id: 'catalog', label: t.navCatalog },
    { id: 'questions', label: t.navQuestions },
    { id: 'labs', label: t.navLabs },
    { id: 'notebook', label: t.navNotebook },
  ];

  const userFirstName =
    user?.displayName?.split(' ')[0] || user?.email?.split('@')[0];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-3.5">
        <button
          type="button"
          onClick={() => onSelectTab('stores')}
          className="font-display text-xl font-semibold tracking-tight text-slate-900 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
        >
          {t.brand}
        </button>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700 ${
                  isActive ? 'text-sky-800' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-3.5 h-0.5 bg-sky-700"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center shrink-0">
          {user ? (
            <button
              type="button"
              onClick={onOpenSettings}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-sky-800 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'Account'}
                  referrerPolicy="no-referrer"
                  className="h-4 w-4 rounded-full object-cover"
                />
              ) : (
                <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{`${userFirstName} · ${t.navSettings}`}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onOpenLogin}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-sky-800 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
            >
              <LogIn className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.signInButton}</span>
            </button>
          )}
        </div>
      </div>

      {/* Compact single-row mobile navigation */}
      <nav
        aria-label="Mobile navigation"
        className="flex md:hidden items-center justify-between gap-2 border-t border-slate-100 px-4 py-2 overflow-x-auto"
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              className={`px-2.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                isActive ? 'bg-sky-50 text-sky-800' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
