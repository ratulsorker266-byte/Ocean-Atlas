import { useEffect, useRef, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { ActiveTab, Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StoreGrid } from './components/StoreGrid';
import { StoreDetailView } from './components/StoreDetailView';
import { TopicReader } from './components/TopicReader';
import { QuestionBankView } from './components/QuestionBankView';
import { ConceptLabsView, LabId } from './components/ConceptLabsView';
import { StudyNotebookView } from './components/StudyNotebookView';
import { CatalogView } from './components/CatalogView';
import { BookLibraryView } from './components/BookLibraryView';
import { BookReaderView } from './components/BookReaderView';
import { WorldHistoryMapView } from './components/WorldHistoryMapView';
import { LampLoginPage } from './components/LampLoginPage';
import { SearchModal } from './components/SearchModal';
import { SettingsDrawer } from './components/SettingsDrawer';
import { getUIMessages, SUPPORTED_LANGUAGES } from './data/i18n';
import {
  auth,
  db,
  googleProvider,
  handleFirestoreError,
  OperationType,
} from './lib/firebase';
import {
  AgeLevel,
  FontScale,
  LanguageCode,
  ReadingTheme,
  StoreId,
  StudyNote,
  UserSettings,
} from './types/knowledge';

type ViewRoute =
  | { type: 'home' }
  | { type: 'login' }
  | { type: 'books'; bookId?: string }
  | { type: 'world-map' }
  | { type: 'catalog' }
  | { type: 'store'; storeId: StoreId; subjectId?: string }
  | { type: 'topic'; storeId: StoreId; subjectId: string; topicId: string }
  | { type: 'questions' }
  | { type: 'labs'; labId: LabId }
  | { type: 'notebook' };

const STORAGE_KEYS = {
  settings: 'oceanic_atlas_settings',
  ageLevel: 'oceanic_atlas_age_level',
  bookmarks: 'oceanic_atlas_bookmarks',
  mastered: 'oceanic_atlas_mastered',
  notes: 'oceanic_atlas_notes',
};

const DEFAULT_SETTINGS: UserSettings = {
  preferredLanguage: 'en',
  bilingualMode: true,
  ageLevel: 'student',
  fontScale: 'comfortable',
  readingTheme: 'paper',
};

const VALID_LANGUAGES = new Set<LanguageCode>([
  'en',
  'bn',
  'hi',
  'ar',
  'es',
  'fr',
  'zh',
  'ja',
  'de',
  'pt',
]);
const VALID_AGE_LEVELS = new Set<AgeLevel>(['explorer', 'student', 'mastery']);
const VALID_FONT_SCALES = new Set<FontScale>(['compact', 'comfortable', 'large']);
const VALID_THEMES = new Set<ReadingTheme>(['paper', 'warm', 'contrast']);
const VALID_STORES = new Set<StoreId>(['science', 'arts', 'commerce', 'applied']);

function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function loadInitialSettings(): UserSettings {
  const legacyAge = readStorage<AgeLevel | null>(STORAGE_KEYS.ageLevel, null);
  const stored = readStorage<Partial<UserSettings>>(STORAGE_KEYS.settings, {});
  return {
    preferredLanguage:
      stored.preferredLanguage && VALID_LANGUAGES.has(stored.preferredLanguage)
        ? stored.preferredLanguage
        : DEFAULT_SETTINGS.preferredLanguage,
    bilingualMode:
      typeof stored.bilingualMode === 'boolean'
        ? stored.bilingualMode
        : DEFAULT_SETTINGS.bilingualMode,
    ageLevel:
      stored.ageLevel && VALID_AGE_LEVELS.has(stored.ageLevel)
        ? stored.ageLevel
        : legacyAge && VALID_AGE_LEVELS.has(legacyAge)
          ? legacyAge
          : DEFAULT_SETTINGS.ageLevel,
    fontScale:
      stored.fontScale && VALID_FONT_SCALES.has(stored.fontScale)
        ? stored.fontScale
        : DEFAULT_SETTINGS.fontScale,
    readingTheme:
      stored.readingTheme && VALID_THEMES.has(stored.readingTheme)
        ? stored.readingTheme
        : DEFAULT_SETTINGS.readingTheme,
  };
}

function toIsoString(value: unknown): string {
  if (value instanceof Timestamp) {
    return value.toDate().toISOString();
  }
  if (typeof value === 'string' && value.length > 0) {
    return value;
  }
  return new Date().toISOString();
}

function sanitizeIdList(list: unknown): string[] {
  if (!Array.isArray(list)) return [];
  return list
    .filter((item): item is string => typeof item === 'string' && item.trim().length > 0 && item.length <= 100)
    .slice(0, 200);
}

export default function App() {
  const [route, setRoute] = useState<ViewRoute>({ type: 'home' });
  const [settings, setSettings] = useState<UserSettings>(() => loadInitialSettings());
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() =>
    sanitizeIdList(readStorage<string[]>(STORAGE_KEYS.bookmarks, []))
  );
  const [masteredTopicIds, setMasteredTopicIds] = useState<string[]>(() =>
    sanitizeIdList(readStorage<string[]>(STORAGE_KEYS.mastered, []))
  );
  const [notes, setNotes] = useState<StudyNote[]>(() =>
    readStorage<StudyNote[]>(STORAGE_KEYS.notes, [])
  );

  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mapsQuotaExceeded, setMapsQuotaExceeded] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [, setFatalError] = useState<null>(null);

  // Refs prevent stale closures inside onSnapshot callbacks and prevent duplicate profile creation
  const settingsRef = useRef(settings);
  const bookmarksRef = useRef(bookmarkedIds);
  const masteredRef = useRef(masteredTopicIds);
  const notesRef = useRef(notes);
  const initializedUidRef = useRef<string | null>(null);
  const profileLoadedUidRef = useRef<string | null>(null);
  const lastContentRouteRef = useRef<ViewRoute>({ type: 'home' });

  useEffect(() => {
    settingsRef.current = settings;
    try {
      window.localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
      window.localStorage.setItem(STORAGE_KEYS.ageLevel, JSON.stringify(settings.ageLevel));
    } catch {
      // Ignore storage quota issues
    }
  }, [settings]);

  useEffect(() => {
    bookmarksRef.current = bookmarkedIds;
    try {
      window.localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify(bookmarkedIds));
    } catch {
      // Ignore storage quota issues
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    masteredRef.current = masteredTopicIds;
    try {
      window.localStorage.setItem(STORAGE_KEYS.mastered, JSON.stringify(masteredTopicIds));
    } catch {
      // Ignore storage quota issues
    }
  }, [masteredTopicIds]);

  useEffect(() => {
    notesRef.current = notes;
    if (!user || !user.emailVerified) {
      try {
        window.localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(notes));
      } catch {
        // Ignore storage quota issues
      }
    }
  }, [notes, user]);

  useEffect(() => {
    const langMeta =
      SUPPORTED_LANGUAGES.find((l) => l.code === settings.preferredLanguage) ??
      SUPPORTED_LANGUAGES[1];
    document.documentElement.lang = langMeta.code;
    document.documentElement.dir = langMeta.dir;
  }, [settings.preferredLanguage]);

  useEffect(() => {
    const onShortcut = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onShortcut);
    return () => window.removeEventListener('keydown', onShortcut);
  }, []);

  useEffect(() => {
    const onQuotaExceeded = () => setMapsQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', onQuotaExceeded);
    return () => window.removeEventListener('gmp-quota-exceeded', onQuotaExceeded);
  }, []);

  // Firebase Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      if (!firebaseUser) {
        initializedUidRef.current = null;
        profileLoadedUidRef.current = null;
        setNotes(readStorage<StudyNote[]>(STORAGE_KEYS.notes, []));
      }
    });
    return () => unsubscribe();
  }, []);

  // Firestore real-time cloud sync when signed in and email-verified
  useEffect(() => {
    if (!user || !user.emailVerified) return;

    const uid = user.uid;
    const userDocRef = doc(db, 'users', uid);

    const unsubProfile = onSnapshot(
      userDocRef,
      (snap) => {
        if (!snap.exists()) {
          if (initializedUidRef.current === uid) return;
          initializedUidRef.current = uid;

          const curSettings = settingsRef.current;
          const displayName = (
            user.displayName?.trim() ||
            user.email?.split('@')[0] ||
            'Learner'
          ).slice(0, 120);
          const email = (user.email || `${uid}@users.oceanic.local`).slice(0, 200);

          const profilePayload: Record<string, unknown> = {
            uid,
            displayName,
            email,
            preferredLanguage: curSettings.preferredLanguage,
            bilingualMode: curSettings.bilingualMode,
            ageLevel: curSettings.ageLevel,
            fontScale: curSettings.fontScale,
            readingTheme: curSettings.readingTheme,
            bookmarkedIds: sanitizeIdList(bookmarksRef.current),
            masteredTopicIds: sanitizeIdList(masteredRef.current),
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          };
          if (typeof user.photoURL === 'string' && user.photoURL.trim().length > 0) {
            profilePayload.photoURL = user.photoURL.trim().slice(0, 500);
          }

          void setDoc(userDocRef, profilePayload)
            .then(async () => {
              profileLoadedUidRef.current = uid;
              // Migrate any existing local guest notes into the user's cloud subcollection
              const guestNotes = notesRef.current.slice(0, 50);
              for (let i = 0; i < guestNotes.length; i++) {
                const gn = guestNotes[i];
                const safeContent = gn.content?.trim().slice(0, 5000);
                if (!safeContent) continue;
                const safeStore: StoreId = VALID_STORES.has(gn.storeId) ? gn.storeId : 'science';
                const safeSubjectId = /^[a-zA-Z0-9_-]{1,80}$/.test(gn.subjectId)
                  ? gn.subjectId
                  : 'physics';
                const safeNoteId = `note_${Date.now()}_${i}`;
                await setDoc(doc(db, 'users', uid, 'notes', safeNoteId), {
                  id: safeNoteId,
                  userId: uid,
                  subjectId: safeSubjectId,
                  subjectName: (gn.subjectName || safeSubjectId).trim().slice(0, 120),
                  storeId: safeStore,
                  content: safeContent,
                  createdAt: serverTimestamp(),
                  updatedAt: serverTimestamp(),
                });
              }
            })
            .catch((err) => {
              setFatalError(() => {
                handleFirestoreError(err, OperationType.CREATE, `users/${uid}`);
              });
            });
          return;
        }

        profileLoadedUidRef.current = uid;
        const data = snap.data();

        setSettings((prev) => ({
          preferredLanguage:
            typeof data.preferredLanguage === 'string' &&
            VALID_LANGUAGES.has(data.preferredLanguage as LanguageCode)
              ? (data.preferredLanguage as LanguageCode)
              : prev.preferredLanguage,
          bilingualMode:
            typeof data.bilingualMode === 'boolean' ? data.bilingualMode : prev.bilingualMode,
          ageLevel:
            typeof data.ageLevel === 'string' && VALID_AGE_LEVELS.has(data.ageLevel as AgeLevel)
              ? (data.ageLevel as AgeLevel)
              : prev.ageLevel,
          fontScale:
            typeof data.fontScale === 'string' && VALID_FONT_SCALES.has(data.fontScale as FontScale)
              ? (data.fontScale as FontScale)
              : prev.fontScale,
          readingTheme:
            typeof data.readingTheme === 'string' &&
            VALID_THEMES.has(data.readingTheme as ReadingTheme)
              ? (data.readingTheme as ReadingTheme)
              : prev.readingTheme,
        }));

        if (Array.isArray(data.bookmarkedIds)) {
          setBookmarkedIds(sanitizeIdList(data.bookmarkedIds));
        }
        if (Array.isArray(data.masteredTopicIds)) {
          setMasteredTopicIds(sanitizeIdList(data.masteredTopicIds));
        }
      },
      (err) => {
        if (!auth.currentUser) return;
        setFatalError(() => {
          handleFirestoreError(err, OperationType.GET, `users/${uid}`);
        });
      }
    );

    const notesQuery = query(
      collection(db, 'users', uid, 'notes'),
      where('userId', '==', uid)
    );

    const unsubNotes = onSnapshot(
      notesQuery,
      (querySnap) => {
        const cloudNotes: StudyNote[] = querySnap.docs.map((d) => {
          const nd = d.data();
          return {
            id: typeof nd.id === 'string' ? nd.id : d.id,
            subjectId: typeof nd.subjectId === 'string' ? nd.subjectId : 'physics',
            subjectName: typeof nd.subjectName === 'string' ? nd.subjectName : 'General',
            storeId:
              typeof nd.storeId === 'string' && VALID_STORES.has(nd.storeId as StoreId)
                ? (nd.storeId as StoreId)
                : 'science',
            content: typeof nd.content === 'string' ? nd.content : '',
            createdAt: toIsoString(nd.createdAt),
            updatedAt: toIsoString(nd.updatedAt),
          };
        });
        cloudNotes.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
        setNotes(cloudNotes);
      },
      (err) => {
        if (!auth.currentUser) return;
        setFatalError(() => {
          handleFirestoreError(err, OperationType.LIST, `users/${uid}/notes`);
        });
      }
    );

    return () => {
      unsubProfile();
      unsubNotes();
    };
  }, [user]);

  const handleSignInGoogle = async (): Promise<boolean> => {
    setAuthError(null);
    setAuthLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      return true;
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code ?? '';
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        setAuthError('Sign-in popup was closed before completing.');
      } else if (code === 'auth/popup-blocked') {
        setAuthError('Popup was blocked by the browser. Please allow popups for this site and try again.');
      } else {
        setAuthError(
          err instanceof Error ? err.message : 'Unable to sign in with Google right now.'
        );
      }
      return false;
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    setAuthError(null);
    setAuthLoading(true);
    try {
      await signOut(auth);
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : 'Failed to sign out.');
    } finally {
      setAuthLoading(false);
    }
  };

  const syncProfileFields = (fields: Record<string, unknown>) => {
    if (!user || !user.emailVerified || profileLoadedUidRef.current !== user.uid) return;
    const uid = user.uid;
    void updateDoc(doc(db, 'users', uid), {
      ...fields,
      updatedAt: serverTimestamp(),
    }).catch((err) => {
      setFatalError(() => {
        handleFirestoreError(err, OperationType.UPDATE, `users/${uid}`);
      });
    });
  };

  const updateSettings = (partial: Partial<UserSettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...partial };
      syncProfileFields({
        preferredLanguage: next.preferredLanguage,
        bilingualMode: next.bilingualMode,
        ageLevel: next.ageLevel,
        fontScale: next.fontScale,
        readingTheme: next.readingTheme,
      });
      return next;
    });
  };

  const handleChangeAgeLevel = (level: AgeLevel) => {
    updateSettings({ ageLevel: level });
  };

  const navigateTo = (next: ViewRoute) => {
    if (next.type !== 'login') {
      lastContentRouteRef.current = next;
    }
    setRoute(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeTab: ActiveTab =
    route.type === 'books'
      ? 'books'
      : route.type === 'world-map'
        ? 'world-map'
        : route.type === 'catalog'
          ? 'catalog'
          : route.type === 'questions'
            ? 'questions'
            : route.type === 'labs'
              ? 'labs'
              : route.type === 'notebook'
                ? 'notebook'
                : 'stores';

  const handleSelectTab = (tab: ActiveTab) => {
    if (tab === 'stores') navigateTo({ type: 'home' });
    else if (tab === 'books') navigateTo({ type: 'books' });
    else if (tab === 'world-map') navigateTo({ type: 'world-map' });
    else if (tab === 'catalog') navigateTo({ type: 'catalog' });
    else if (tab === 'questions') navigateTo({ type: 'questions' });
    else if (tab === 'labs') navigateTo({ type: 'labs', labId: 'equilibrium' });
    else navigateTo({ type: 'notebook' });
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : sanitizeIdList([...prev, id]);
      syncProfileFields({ bookmarkedIds: next });
      return next;
    });
  };

  const toggleMastered = (topicId: string) => {
    setMasteredTopicIds((prev) => {
      const next = prev.includes(topicId)
        ? prev.filter((item) => item !== topicId)
        : sanitizeIdList([...prev, topicId]);
      syncProfileFields({ masteredTopicIds: next });
      return next;
    });
  };

  const handleAddNote = (
    subjectId: string,
    subjectName: string,
    storeId: StoreId,
    content: string
  ) => {
    const cleanContent = content.trim().slice(0, 5000);
    if (!cleanContent) return;
    const cleanSubjectId = /^[a-zA-Z0-9_-]{1,80}$/.test(subjectId) ? subjectId : 'physics';
    const cleanSubjectName = (subjectName.trim() || cleanSubjectId).slice(0, 120);
    const cleanStoreId: StoreId = VALID_STORES.has(storeId) ? storeId : 'science';
    const noteId = `note_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

    if (user && user.emailVerified) {
      const uid = user.uid;
      void setDoc(doc(db, 'users', uid, 'notes', noteId), {
        id: noteId,
        userId: uid,
        subjectId: cleanSubjectId,
        subjectName: cleanSubjectName,
        storeId: cleanStoreId,
        content: cleanContent,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }).catch((err) => {
        setFatalError(() => {
          handleFirestoreError(err, OperationType.CREATE, `users/${uid}/notes/${noteId}`);
        });
      });
      return;
    }

    const nowIso = new Date().toISOString();
    const newNote: StudyNote = {
      id: noteId,
      subjectId: cleanSubjectId,
      subjectName: cleanSubjectName,
      storeId: cleanStoreId,
      content: cleanContent,
      createdAt: nowIso,
      updatedAt: nowIso,
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const handleDeleteNote = (noteId: string) => {
    if (user && user.emailVerified) {
      const uid = user.uid;
      void deleteDoc(doc(db, 'users', uid, 'notes', noteId)).catch((err) => {
        setFatalError(() => {
          handleFirestoreError(err, OperationType.DELETE, `users/${uid}/notes/${noteId}`);
        });
      });
      return;
    }
    setNotes((prev) => prev.filter((n) => n.id !== noteId));
  };

  const t = getUIMessages(settings.preferredLanguage);
  const langMeta =
    SUPPORTED_LANGUAGES.find((l) => l.code === settings.preferredLanguage) ??
    SUPPORTED_LANGUAGES[1];

  const surfaceThemeClass =
    settings.readingTheme === 'warm'
      ? 'bg-stone-50 text-stone-900'
      : settings.readingTheme === 'contrast'
        ? 'bg-white text-slate-950'
        : 'bg-slate-50 text-slate-900';

  return (
    <div dir={langMeta.dir} lang={langMeta.code} className={`flex min-h-screen flex-col ${surfaceThemeClass}`}>
      {mapsQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {route.type === 'login' ? (
        <LampLoginPage
          language={settings.preferredLanguage}
          authLoading={authLoading}
          authError={authError}
          onSignInGoogle={handleSignInGoogle}
          onSuccess={() => navigateTo(lastContentRouteRef.current)}
          onBack={() => navigateTo(lastContentRouteRef.current)}
          onOpenSettings={() => setSettingsOpen(true)}
          onQuickToggleLanguage={() =>
            updateSettings({
              preferredLanguage: settings.preferredLanguage === 'bn' ? 'en' : 'bn',
            })
          }
        />
      ) : (
        <>
          <Header
            activeTab={activeTab}
            onSelectTab={handleSelectTab}
            onOpenSettings={() => setSettingsOpen(true)}
            onOpenLogin={() => navigateTo({ type: 'login' })}
            language={settings.preferredLanguage}
            user={user}
          />

          <main className="flex-1">
        {route.type === 'home' && (
          <>
            <HeroSection
              ageLevel={settings.ageLevel}
              language={settings.preferredLanguage}
              onChangeAgeLevel={handleChangeAgeLevel}
              onOpenSettings={() => setSettingsOpen(true)}
              onJumpToStores={() => {
                document
                  .getElementById('knowledge-stores')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              onJumpToBooks={() => navigateTo({ type: 'books' })}
              onJumpToWorldMap={() => navigateTo({ type: 'world-map' })}
              onJumpToCatalog={() => navigateTo({ type: 'catalog' })}
              onEnterStore={(storeId, subjectId) =>
                navigateTo({ type: 'store', storeId, subjectId })
              }
              onOpenTopic={(storeId, subjectId, topicId) =>
                navigateTo({ type: 'topic', storeId, subjectId, topicId })
              }
              onOpenBook={(bookId) => navigateTo({ type: 'books', bookId })}
            />
            <StoreGrid
              language={settings.preferredLanguage}
              onEnterStore={(storeId, subjectId) =>
                navigateTo({ type: 'store', storeId, subjectId })
              }
              masteredTopicIds={masteredTopicIds}
            />
          </>
        )}

        {route.type === 'books' &&
          (route.bookId ? (
            <BookReaderView
              bookId={route.bookId}
              ageLevel={settings.ageLevel}
              language={settings.preferredLanguage}
              bilingualMode={settings.bilingualMode}
              fontScale={settings.fontScale}
              onChangeAgeLevel={handleChangeAgeLevel}
              onBackToLibrary={() => navigateTo({ type: 'books' })}
              isBookmarked={bookmarkedIds.includes(route.bookId)}
              onToggleBookmark={() => toggleBookmark(route.bookId!)}
              isMastered={masteredTopicIds.includes(route.bookId)}
              onToggleMastered={() => toggleMastered(route.bookId!)}
              onSaveNote={handleAddNote}
            />
          ) : (
            <BookLibraryView
              language={settings.preferredLanguage}
              bookmarkedIds={bookmarkedIds}
              masteredTopicIds={masteredTopicIds}
              onToggleBookmark={toggleBookmark}
              onOpenBook={(bookId) => navigateTo({ type: 'books', bookId })}
            />
          ))}

        {route.type === 'world-map' && (
          <WorldHistoryMapView
            language={settings.preferredLanguage}
            onSaveNote={handleAddNote}
          />
        )}

        {route.type === 'catalog' && (
          <CatalogView
            language={settings.preferredLanguage}
            onEnterStore={(storeId, subjectId) =>
              navigateTo({ type: 'store', storeId, subjectId })
            }
            onOpenTopic={(storeId, subjectId, topicId) =>
              navigateTo({ type: 'topic', storeId, subjectId, topicId })
            }
            onOpenBook={(bookId) => navigateTo({ type: 'books', bookId })}
          />
        )}

        {route.type === 'store' && (
          <StoreDetailView
            storeId={route.storeId}
            initialSubjectId={route.subjectId}
            ageLevel={settings.ageLevel}
            language={settings.preferredLanguage}
            bilingualMode={settings.bilingualMode}
            fontScale={settings.fontScale}
            onChangeAgeLevel={handleChangeAgeLevel}
            onBackToStores={() => navigateTo({ type: 'home' })}
            onOpenTopic={(storeId, subjectId, topicId) =>
              navigateTo({ type: 'topic', storeId, subjectId, topicId })
            }
            onOpenLab={(labId) => navigateTo({ type: 'labs', labId })}
            onOpenBook={(bookId) => navigateTo({ type: 'books', bookId })}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={toggleBookmark}
            masteredTopicIds={masteredTopicIds}
          />
        )}

        {route.type === 'topic' && (
          <TopicReader
            storeId={route.storeId}
            subjectId={route.subjectId}
            topicId={route.topicId}
            ageLevel={settings.ageLevel}
            language={settings.preferredLanguage}
            bilingualMode={settings.bilingualMode}
            fontScale={settings.fontScale}
            onChangeAgeLevel={handleChangeAgeLevel}
            onBackToStore={() =>
              navigateTo({ type: 'store', storeId: route.storeId, subjectId: route.subjectId })
            }
            onOpenTopic={(storeId, subjectId, topicId) =>
              navigateTo({ type: 'topic', storeId, subjectId, topicId })
            }
            onOpenLab={(labId) => navigateTo({ type: 'labs', labId })}
            isBookmarked={bookmarkedIds.includes(route.topicId)}
            onToggleBookmark={() => toggleBookmark(route.topicId)}
            isMastered={masteredTopicIds.includes(route.topicId)}
            onToggleMastered={() => toggleMastered(route.topicId)}
            onSaveNote={handleAddNote}
          />
        )}

        {route.type === 'questions' && (
          <QuestionBankView
            ageLevel={settings.ageLevel}
            language={settings.preferredLanguage}
            bilingualMode={settings.bilingualMode}
            fontScale={settings.fontScale}
            onChangeAgeLevel={handleChangeAgeLevel}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={toggleBookmark}
            onEnterStore={(storeId, subjectId) =>
              navigateTo({ type: 'store', storeId, subjectId })
            }
          />
        )}

        {route.type === 'labs' && <ConceptLabsView initialLab={route.labId} />}

        {route.type === 'notebook' && (
          <StudyNotebookView
            language={settings.preferredLanguage}
            bookmarkedIds={bookmarkedIds}
            masteredTopicIds={masteredTopicIds}
            notes={notes}
            onAddNote={handleAddNote}
            onDeleteNote={handleDeleteNote}
            onToggleBookmark={toggleBookmark}
            onOpenTopic={(storeId, subjectId, topicId) =>
              navigateTo({ type: 'topic', storeId, subjectId, topicId })
            }
            onEnterStore={(storeId, subjectId) =>
              navigateTo({ type: 'store', storeId, subjectId })
            }
            onOpenBook={(bookId) => navigateTo({ type: 'books', bookId })}
          />
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <div>
            <span className="font-display font-semibold text-slate-900">{t.brand}</span>
            <span aria-hidden="true"> · </span>
            <span>{t.heroKicker}</span>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => navigateTo({ type: 'home' })}
              className="hover:text-slate-900 cursor-pointer"
            >
              {t.navStores}
            </button>
            <button
              type="button"
              onClick={() => navigateTo({ type: 'books' })}
              className="hover:text-slate-900 cursor-pointer"
            >
              {t.navBooks}
            </button>
            <button
              type="button"
              onClick={() => navigateTo({ type: 'world-map' })}
              className="hover:text-slate-900 cursor-pointer"
            >
              {t.navWorldMap}
            </button>
            <button
              type="button"
              onClick={() => navigateTo({ type: 'catalog' })}
              className="hover:text-slate-900 cursor-pointer"
            >
              {t.navCatalog}
            </button>
            <button
              type="button"
              onClick={() => navigateTo({ type: 'questions' })}
              className="hover:text-slate-900 cursor-pointer"
            >
              {t.navQuestions}
            </button>
            <button
              type="button"
              onClick={() => navigateTo({ type: 'labs', labId: 'equilibrium' })}
              className="hover:text-slate-900 cursor-pointer"
            >
              {t.navLabs}
            </button>
            <button
              type="button"
              onClick={() => navigateTo({ type: 'notebook' })}
              className="hover:text-slate-900 cursor-pointer"
            >
              {t.navNotebook}
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hover:text-slate-900 cursor-pointer"
            >
              Search (⌘K)
            </button>
            <button
              type="button"
              onClick={() => setSettingsOpen(true)}
              className="font-semibold text-sky-800 hover:text-sky-900 cursor-pointer"
            >
              {t.navSettings}
            </button>
          </div>
        </div>
      </footer>
        </>
      )}

      <SettingsDrawer
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        user={user}
        authLoading={authLoading}
        authError={authError}
        onSignOut={() => void handleSignOut()}
        onOpenLoginPage={() => navigateTo({ type: 'login' })}
        settings={settings}
        onUpdateSettings={updateSettings}
        notes={notes}
        bookmarkedIds={bookmarkedIds}
        masteredTopicIds={masteredTopicIds}
      />

      <SearchModal
        isOpen={searchOpen}
        language={settings.preferredLanguage}
        onClose={() => setSearchOpen(false)}
        onEnterStore={(storeId, subjectId) =>
          navigateTo({ type: 'store', storeId, subjectId })
        }
        onOpenTopic={(storeId, subjectId, topicId) =>
          navigateTo({ type: 'topic', storeId, subjectId, topicId })
        }
        onOpenBook={(bookId) => navigateTo({ type: 'books', bookId })}
      />
    </div>
  );
}
