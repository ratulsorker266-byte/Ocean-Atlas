import { User } from 'firebase/auth';
import {
  Check,
  Download,
  Globe,
  LogIn,
  LogOut,
  SlidersHorizontal,
  Sparkles,
  X,
} from 'lucide-react';
import {
  AGE_LABELS_BY_LANG,
  getUIMessages,
  SUPPORTED_LANGUAGES,
} from '../data/i18n';
import {
  AgeLevel,
  FontScale,
  ReadingTheme,
  StudyNote,
  UserSettings,
} from '../types/knowledge';

interface SettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  authLoading: boolean;
  authError: string | null;
  onSignOut: () => void;
  onOpenLoginPage: () => void;
  settings: UserSettings;
  onUpdateSettings: (partial: Partial<UserSettings>) => void;
  notes: StudyNote[];
  bookmarkedIds: string[];
  masteredTopicIds: string[];
}

export function SettingsDrawer({
  isOpen,
  onClose,
  user,
  authLoading,
  authError,
  onSignOut,
  onOpenLoginPage,
  settings,
  onUpdateSettings,
  notes,
  bookmarkedIds,
  masteredTopicIds,
}: SettingsDrawerProps) {
  if (!isOpen) return null;

  const t = getUIMessages(settings.preferredLanguage);
  const ageLabels = AGE_LABELS_BY_LANG[settings.preferredLanguage];

  const handleExportArchive = () => {
    const lines = [
      `# Oceanic Atlas — Personal Study Archive`,
      `Exported: ${new Date().toLocaleString()}`,
      `Language: ${settings.preferredLanguage} | Depth: ${settings.ageLevel}`,
      `Mastered Chapters: ${masteredTopicIds.length} | Bookmarks: ${bookmarkedIds.length}`,
      '',
      '## Personal Study Notes',
      ...notes.map(
        (n) =>
          `\n### ${n.subjectName} (${new Date(n.updatedAt).toLocaleDateString()})\n${n.content}`
      ),
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'oceanic-atlas-study-archive.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.settingsTitle}
      className="fixed inset-0 z-50 flex justify-end bg-slate-900/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-md flex-col overflow-y-auto border-l border-slate-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <div className="flex items-center gap-2.5">
            <SlidersHorizontal className="h-4 w-4 text-sky-700" aria-hidden="true" />
            <h2 className="font-display text-lg font-semibold text-slate-900">
              {t.settingsTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close settings"
            className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 space-y-7 p-6">
          {/* Section 1: Google Account & Cloud Sync */}
          <section>
            <h3 className="text-xs font-semibold text-slate-500">{t.settingsAccountTitle}</h3>
            <div className="mt-2.5 rounded-xl border border-slate-200 bg-slate-50 p-4">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || 'Learner avatar'}
                        referrerPolicy="no-referrer"
                        className="h-10 w-10 rounded-full border border-slate-200 object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-sm font-semibold text-white">
                        {(user.displayName || user.email || 'U').charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-slate-900 truncate">
                        {user.displayName || 'Learner'}
                      </div>
                      <div className="text-xs text-slate-500 truncate">{user.email}</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-emerald-700">{t.cloudSyncActive}</div>
                  <button
                    type="button"
                    onClick={onSignOut}
                    disabled={authLoading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-50 cursor-pointer"
                  >
                    <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{t.signOut}</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs leading-relaxed text-slate-600">{t.guestLocalMode}</p>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenLoginPage();
                    }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-sky-800 cursor-pointer"
                  >
                    <LogIn className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{t.signInButton}</span>
                  </button>
                  {authError && (
                    <p className="text-xs text-rose-700 leading-relaxed">{authError}</p>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* Section 2: Reading Language (All Languages including Bangla) */}
          <section>
            <div className="flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-sky-700" aria-hidden="true" />
              <h3 className="text-xs font-semibold text-slate-500">{t.settingsLanguageTitle}</h3>
            </div>
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const active = settings.preferredLanguage === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => onUpdateSettings({ preferredLanguage: lang.code })}
                    className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left transition-colors cursor-pointer ${
                      active
                        ? 'border-sky-700 bg-sky-50 text-slate-900'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-semibold truncate">{lang.nativeName}</div>
                      <div className="text-[11px] text-slate-500 truncate">{lang.englishName}</div>
                    </div>
                    {active && <Check className="h-3.5 w-3.5 shrink-0 text-sky-700" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>

            {settings.preferredLanguage !== 'en' && (
              <label className="mt-3 flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.bilingualMode}
                  onChange={(e) => onUpdateSettings({ bilingualMode: e.target.checked })}
                  className="mt-0.5 h-4 w-4 accent-sky-700 rounded cursor-pointer"
                />
                <div>
                  <div className="text-xs font-semibold text-slate-900">
                    {t.settingsBilingualLabel}
                  </div>
                  <div className="mt-0.5 text-[11px] leading-relaxed text-slate-600">
                    {t.settingsBilingualHint}
                  </div>
                </div>
              </label>
            )}
          </section>

          {/* Section 3: Learner Depth */}
          <section>
            <h3 className="text-xs font-semibold text-slate-500">{t.settingsDepthTitle}</h3>
            <div className="mt-2.5 grid grid-cols-3 gap-2">
              {(['explorer', 'student', 'mastery'] as AgeLevel[]).map((level) => {
                const active = settings.ageLevel === level;
                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => onUpdateSettings({ ageLevel: level })}
                    className={`rounded-lg border px-2.5 py-2 text-left transition-colors cursor-pointer ${
                      active
                        ? 'border-sky-700 bg-sky-50 text-slate-900'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-semibold truncate">{ageLabels[level].label}</div>
                    <div className="font-mono text-[10px] text-slate-500 tabular-nums">
                      {ageLabels[level].ageRange}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Section 4: Reading Comfort (Text Scale + Paper Theme) */}
          <section>
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-sky-700" aria-hidden="true" />
              <h3 className="text-xs font-semibold text-slate-500">{t.settingsComfortTitle}</h3>
            </div>

            <div className="mt-2.5 space-y-3">
              <div>
                <div className="text-[11px] font-medium text-slate-600">Text Size</div>
                <div className="mt-1.5 grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'compact', label: 'Compact' },
                      { id: 'comfortable', label: 'Balanced' },
                      { id: 'large', label: 'Large' },
                    ] as Array<{ id: FontScale; label: string }>
                  ).map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onUpdateSettings({ fontScale: opt.id })}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                        settings.fontScale === opt.id
                          ? 'border-sky-700 bg-sky-50 text-slate-900'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-medium text-slate-600">Reading Surface</div>
                <div className="mt-1.5 grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'paper', label: 'Archival' },
                      { id: 'warm', label: 'Warm Book' },
                      { id: 'contrast', label: 'Crisp White' },
                    ] as Array<{ id: ReadingTheme; label: string }>
                  ).map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onUpdateSettings({ readingTheme: opt.id })}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                        settings.readingTheme === opt.id
                          ? 'border-sky-700 bg-sky-50 text-slate-900'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Export Study Archive */}
          <section className="border-t border-slate-200 pt-5">
            <h3 className="text-xs font-semibold text-slate-500">{t.settingsExportTitle}</h3>
            <button
              type="button"
              onClick={handleExportArchive}
              className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download Notes &amp; Progress (.md)</span>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
