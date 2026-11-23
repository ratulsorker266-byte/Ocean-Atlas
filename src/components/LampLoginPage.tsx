import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cloud,
  Globe,
  Loader2,
  MapPin,
  SlidersHorizontal,
} from 'lucide-react';
import { getUIMessages } from '../data/i18n';
import { LanguageCode } from '../types/knowledge';

interface LampLoginPageProps {
  language: LanguageCode;
  authLoading: boolean;
  authError: string | null;
  onSignInGoogle: () => Promise<boolean>;
  onSuccess: () => void;
  onBack: () => void;
  onOpenSettings: () => void;
  onQuickToggleLanguage: () => void;
}

const LOGIN_COPY = {
  en: {
    backToLibrary: 'Back to Library',
    pullToTurnOn: 'Pull string to turn on',
    pullToTurnOff: 'Pull to turn off',
    deskHintTitle: 'Study desk is resting',
    deskHintBody: 'Pull the brass lamp cord on the left to illuminate your sign-in desk.',
    deskHintCta: 'Or switch lamp on',
    welcome: 'Welcome to Oceanic Atlas',
    subtitle:
      'Sign in once with your Google account to sync books, historical places, study notes, and preferences across every device.',
    benefit1Title: 'Cloud-Synced Study Notebook',
    benefit1Desc: 'Keep bookmarks, mastered chapters, and saved landmark histories automatically backed up.',
    benefit2Title: '48 Guided Books & All Stores',
    benefit2Desc: 'Resume your exact reading depth and preferred language seamlessly anywhere.',
    benefit3Title: 'World Historical Atlas',
    benefit3Desc: 'Save historical sites and their behind-the-scenes stories directly to your notebook.',
    continueGoogle: 'Sign in with Google',
    connecting: 'Connecting to Google...',
    continueGuest: 'Continue browsing as guest',
    signedInTitle: 'Signed In Successfully',
    signedInBody: 'Returning to your study library...',
    securityNote: 'Single, passwordless Google authentication · Instant Cloud Sync',
  },
  bn: {
    backToLibrary: 'লাইব্রেরিতে ফিরুন',
    pullToTurnOn: 'আলো জ্বালাতে সুতা টানুন',
    pullToTurnOff: 'বন্ধ করতে টানুন',
    deskHintTitle: 'পড়ার টেবিলের বাতি নেভানো আছে',
    deskHintBody: 'বাম পাশের পিতলের সুতায় টান দিয়ে লগইন কার্ডটি আলোকিত করুন।',
    deskHintCta: 'অথবা বাতি জ্বালান',
    welcome: 'Oceanic Atlas-এ স্বাগতম',
    subtitle:
      'সব ডিভাইসে আপনার বই, সংরক্ষিত ঐতিহাসিক স্থান, নোটবুক ও পড়ার ভাষা সিঙ্ক রাখতে এক ক্লিকে Google দিয়ে সাইন ইন করুন।',
    benefit1Title: 'ক্লাউড সিঙ্কড স্টাডি নোটবুক',
    benefit1Desc: 'বুকমার্ক, সম্পন্ন অধ্যায় এবং প্রিয় নোটগুলো সবসময় সুরক্ষিত রাখুন।',
    benefit2Title: '৪৮টি পূর্ণাঙ্গ বই ও সব জ্ঞান-স্টোর',
    benefit2Desc: 'আপনার নির্বাচিত ভাষা ও বয়স-উপযোগী গভীরতা স্বয়ংক্রিয়ভাবে সংরক্ষিত থাকবে।',
    benefit3Title: 'ঐতিহাসিক বিশ্ব মানচিত্র',
    benefit3Desc: 'পৃথিবীর যেকোনো প্রান্তের ঐতিহাসিক স্থানের ইতিহাস ও কাহিনী সংরক্ষণ করুন।',
    continueGoogle: 'Google দিয়ে সাইন ইন করুন',
    connecting: 'Google-এর সাথে যুক্ত হচ্ছে...',
    continueGuest: 'অ্যাকাউন্ট ছাড়াই লাইব্রেরি দেখুন',
    signedInTitle: 'সফলভাবে সাইন ইন হয়েছে',
    signedInBody: 'আপনার লাইব্রেরিতে নিয়ে যাওয়া হচ্ছে...',
    securityNote: 'একক নিরাপদ Google লগইন · তাৎক্ষণিক ক্লাউড সিঙ্ক',
  },
} as const;

export function LampLoginPage({
  language,
  authLoading,
  authError,
  onSignInGoogle,
  onSuccess,
  onBack,
  onOpenSettings,
  onQuickToggleLanguage,
}: LampLoginPageProps) {
  const t = getUIMessages(language);
  const isBn = language === 'bn';
  const copy = isBn ? LOGIN_COPY.bn : LOGIN_COPY.en;

  const [lampOn, setLampOn] = useState(false);
  const [pullOffset, setPullOffset] = useState(0);
  const [isDraggingCord, setIsDraggingCord] = useState(false);
  const [signedInSuccess, setSignedInSuccess] = useState(false);

  const dragStartYRef = useRef<number | null>(null);
  const maxPullRef = useRef(0);
  const redirectTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (redirectTimerRef.current !== null) {
        window.clearTimeout(redirectTimerRef.current);
      }
    };
  }, []);

  const toggleLamp = () => {
    setLampOn((prev) => !prev);
  };

  const handleCordPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStartYRef.current = e.clientY;
    maxPullRef.current = 0;
    setIsDraggingCord(true);
  };

  const handleCordPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (dragStartYRef.current === null) return;
    const delta = Math.max(0, Math.min(46, e.clientY - dragStartYRef.current));
    maxPullRef.current = Math.max(maxPullRef.current, delta);
    setPullOffset(delta);
  };

  const handleCordPointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (dragStartYRef.current === null) return;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    const pulledDistance = maxPullRef.current;
    dragStartYRef.current = null;
    maxPullRef.current = 0;
    setIsDraggingCord(false);
    setPullOffset(0);

    if (pulledDistance >= 14 || pulledDistance < 6) {
      toggleLamp();
    }
  };

  const handleGoogleClick = async () => {
    const ok = await onSignInGoogle();
    if (ok) {
      setSignedInSuccess(true);
      redirectTimerRef.current = window.setTimeout(() => {
        onSuccess();
      }, 950);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#06131f] text-slate-100 select-none">
      {/* Deep ocean nocturnal atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(14,116,144,0.16),transparent_48%),radial-gradient(circle_at_80%_78%,rgba(12,74,110,0.14),transparent_52%)]"
      />

      {/* Ambient desk warm-cerulean illumination when lamp is ON */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          lampOn ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(ellipse 68% 62% at 52% 46%, rgba(251, 191, 36, 0.11) 0%, rgba(56, 189, 248, 0.08) 42%, transparent 76%)',
        }}
      />

      {/* Top Navigation Bar */}
      <div className="relative z-20 mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-lg border border-sky-200/15 bg-slate-900/60 px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-sky-300/35 hover:bg-slate-800/80 cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{copy.backToLibrary}</span>
          </button>
          <span className="hidden sm:inline-block font-display text-base font-semibold tracking-tight text-slate-100">
            {t.brand}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onQuickToggleLanguage}
            className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200/15 bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-sky-300/35 hover:bg-slate-800/80 cursor-pointer"
          >
            <Globe className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
            <span>{isBn ? 'English' : 'বাংলা'}</span>
          </button>
          <button
            type="button"
            onClick={onOpenSettings}
            className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200/15 bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-sky-300/35 hover:bg-slate-800/80 cursor-pointer"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
            <span className="hidden sm:inline">{t.navSettings}</span>
          </button>
        </div>
      </div>

      {/* Main Two-Zone Interactive Stage */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-84px)] max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-12 pt-4 lg:grid-cols-12">
        {/* Left Zone: Articulated Study Desk Lamp + Interactive Pull-String Cord */}
        <div className="relative flex flex-col items-center justify-center lg:col-span-5">
          <div className="relative h-[380px] w-[320px] sm:h-[430px] sm:w-[360px]">
            <svg
              viewBox="0 0 360 430"
              className="h-full w-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lampBeamGrad" x1="0.35" y1="0.18" x2="0.88" y2="0.95">
                  <stop offset="0%" stopColor="#fde68a" stopOpacity="0.46" />
                  <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lampShadeGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#26455d" />
                  <stop offset="100%" stopColor="#0f2334" />
                </linearGradient>
                <linearGradient id="lampArmGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="50%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>
                <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fffbeb" stopOpacity="1" />
                  <stop offset="45%" stopColor="#fbbf24" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </radialGradient>
              </defs>

              <ellipse
                cx="140"
                cy="394"
                rx="98"
                ry="11"
                fill={lampOn ? 'rgba(251, 191, 36, 0.16)' : 'rgba(2, 6, 23, 0.6)'}
                className="transition-all duration-500"
              />

              <polygon
                points="178,136 254,104 420,400 132,400"
                fill="url(#lampBeamGrad)"
                className={`transition-opacity duration-500 ${lampOn ? 'opacity-100' : 'opacity-0'}`}
              />

              <path
                d="M 80 390 C 80 374, 192 374, 192 390 L 198 396 L 74 396 Z"
                fill="#162d40"
                stroke="#38bdf8"
                strokeOpacity="0.22"
                strokeWidth="1.5"
              />
              <rect x="125" y="366" width="22" height="14" rx="4" fill="#c29243" />

              <line
                x1="136"
                y1="368"
                x2="76"
                y2="228"
                stroke="url(#lampArmGrad)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <circle cx="136" cy="368" r="8" fill="#1e3a52" stroke="#eab308" strokeWidth="2" />
              <circle cx="76" cy="228" r="10" fill="#1e3a52" stroke="#eab308" strokeWidth="2.5" />

              <line
                x1="76"
                y1="228"
                x2="176"
                y2="104"
                stroke="url(#lampArmGrad)"
                strokeWidth="9"
                strokeLinecap="round"
              />
              <circle cx="176" cy="104" r="8" fill="#1e3a52" stroke="#eab308" strokeWidth="2" />

              <g transform="translate(176, 104) rotate(-22)">
                <rect x="-8" y="-16" width="24" height="16" rx="5" fill="#c29243" />
                <circle
                  cx="38"
                  cy="24"
                  r={lampOn ? 22 : 11}
                  fill={lampOn ? 'url(#bulbGlow)' : '#334155'}
                  className="transition-all duration-300"
                />
                <path
                  d="M 4 -8 C 28 -18, 66 -2, 82 26 L 12 48 C -2 28, -4 6, 4 -8 Z"
                  fill="url(#lampShadeGrad)"
                  stroke={lampOn ? '#fbbf24' : '#38bdf8'}
                  strokeOpacity={lampOn ? '0.65' : '0.25'}
                  strokeWidth="1.75"
                />
                <line
                  x1="12"
                  y1="48"
                  x2="82"
                  y2="26"
                  stroke={lampOn ? '#fde68a' : '#64748b'}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            </svg>

            <div className="absolute left-[180px] top-[128px] sm:left-[182px] sm:top-[128px]">
              <button
                type="button"
                aria-pressed={lampOn}
                aria-label={lampOn ? copy.pullToTurnOff : copy.pullToTurnOn}
                onPointerDown={handleCordPointerDown}
                onPointerMove={handleCordPointerMove}
                onPointerUp={handleCordPointerUp}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleLamp();
                  }
                }}
                className="group relative flex flex-col items-center touch-none cursor-grab active:cursor-grabbing focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 rounded-md px-3 pb-3"
              >
                <div
                  className={`w-[2px] rounded-full bg-gradient-to-b from-amber-300/80 via-amber-400 to-amber-200 ${
                    isDraggingCord ? '' : 'transition-[height] duration-300 ease-out'
                  }`}
                  style={{ height: `${86 + pullOffset}px` }}
                />

                <div
                  className={`flex h-6 w-3.5 items-center justify-center rounded-full border shadow-md transition-colors duration-200 ${
                    lampOn
                      ? 'border-amber-200 bg-amber-400 shadow-amber-400/40'
                      : 'border-amber-500/70 bg-amber-500/90 group-hover:bg-amber-400'
                  }`}
                >
                  <span className="h-1 w-1 rounded-full bg-amber-950/50" />
                </div>

                <span
                  className={`mt-2.5 whitespace-nowrap rounded-md border px-2.5 py-1 text-[11px] font-medium transition-all duration-300 ${
                    lampOn
                      ? 'border-slate-700/70 bg-slate-900/70 text-slate-400 opacity-75 group-hover:opacity-100'
                      : 'border-amber-400/40 bg-slate-900/85 text-amber-200 shadow-lg'
                  }`}
                >
                  {lampOn ? copy.pullToTurnOff : copy.pullToTurnOn}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Zone: Unified Single Google Sign-In Card */}
        <div className="relative flex items-center justify-center lg:col-span-7">
          {/* Resting Prompt when Lamp is OFF */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 ${
              lampOn
                ? 'pointer-events-none opacity-0 translate-y-2'
                : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="max-w-sm rounded-2xl border border-sky-200/10 bg-slate-900/45 p-7 backdrop-blur-sm">
              <p className="font-display text-xl font-semibold text-slate-200">
                {copy.deskHintTitle}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{copy.deskHintBody}</p>
              <button
                type="button"
                onClick={() => setLampOn(true)}
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-amber-400/35 bg-amber-500/15 px-4 py-2 text-xs font-semibold text-amber-200 transition-colors hover:bg-amber-500/25 cursor-pointer"
              >
                <span>{copy.deskHintCta}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Illuminated Single Sign-In Card when Lamp is ON */}
          <div
            aria-hidden={!lampOn}
            className={`w-full max-w-md rounded-2xl border border-sky-200/15 bg-[#0b1d2c]/95 p-7 sm:p-8 shadow-2xl shadow-black/50 backdrop-blur-md transition-all duration-500 ${
              lampOn
                ? 'opacity-100 translate-y-0 scale-100'
                : 'pointer-events-none opacity-0 translate-y-6 scale-[0.98]'
            }`}
          >
            {signedInSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/15 text-emerald-300">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold text-white">
                  {copy.signedInTitle}
                </h2>
                <p className="mt-2 text-sm text-slate-300">{copy.signedInBody}</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h1 className="font-display text-3xl font-semibold tracking-tight text-white">
                    {copy.welcome}
                  </h1>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {copy.subtitle}
                  </p>
                </div>

                {/* Account Benefits Summary */}
                <div className="mb-6 space-y-3 rounded-xl border border-sky-200/10 bg-[#06131f]/75 p-4">
                  <div className="flex items-start gap-3">
                    <Cloud className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-semibold text-slate-100">{copy.benefit1Title}</div>
                      <div className="mt-0.5 text-[11px] leading-relaxed text-slate-400">
                        {copy.benefit1Desc}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-semibold text-slate-100">{copy.benefit2Title}</div>
                      <div className="mt-0.5 text-[11px] leading-relaxed text-slate-400">
                        {copy.benefit2Desc}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-semibold text-slate-100">{copy.benefit3Title}</div>
                      <div className="mt-0.5 text-[11px] leading-relaxed text-slate-400">
                        {copy.benefit3Desc}
                      </div>
                    </div>
                  </div>
                </div>

                {authError && (
                  <div
                    role="alert"
                    className="mb-4 rounded-xl border border-rose-400/30 bg-rose-500/10 px-3.5 py-2.5 text-xs leading-relaxed text-rose-200"
                  >
                    {authError}
                  </div>
                )}

                {/* Single Unified Professional Google Sign-In CTA */}
                <button
                  type="button"
                  onClick={() => void handleGoogleClick()}
                  disabled={authLoading}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-950/40 transition-colors hover:bg-slate-100 disabled:opacity-60 cursor-pointer"
                >
                  {authLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin text-sky-700" aria-hidden="true" />
                  ) : (
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
                      />
                    </svg>
                  )}
                  <span>{authLoading ? copy.connecting : copy.continueGoogle}</span>
                  {!authLoading && <ArrowRight className="h-4 w-4 text-slate-600" aria-hidden="true" />}
                </button>

                <p className="mt-3 text-center text-[11px] text-slate-400">
                  {copy.securityNote}
                </p>

                <div className="mt-5 border-t border-sky-200/10 pt-4 text-center">
                  <button
                    type="button"
                    onClick={onBack}
                    className="text-xs text-slate-400 transition-colors hover:text-slate-200 cursor-pointer"
                  >
                    {copy.continueGuest}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
