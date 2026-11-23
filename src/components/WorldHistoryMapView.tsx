import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AdvancedMarker,
  APIProvider,
  Map as GoogleMap,
  MapMouseEvent,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import {
  BookmarkPlus,
  Check,
  Compass,
  ExternalLink,
  Globe,
  History,
  Landmark,
  Loader2,
  MapPin,
  Search,
  Sparkles,
} from 'lucide-react';
import { LanguageCode, StoreId } from '../types/knowledge';

interface DiscoveredPlace {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  category: string;
  types: string[];
  photoUrl: string | null;
  photoAttribution: string | null;
  googleMapsUri: string | null;
  editorialSummary: string | null;
  rating: number | null;
  userRatingCount: number | null;
}

interface HistoricalDossier {
  originEra: string;
  storyBehind: string;
  architectureSignificance: string;
  keyFacts: string[];
  sources: Array<{ title: string; uri: string }>;
}

interface WorldHistoryMapViewProps {
  language: LanguageCode;
  onSaveNote: (
    subjectId: string,
    subjectName: string,
    storeId: StoreId,
    content: string
  ) => void;
}

const QUICK_REGIONS: Array<{
  id: string;
  labelEn: string;
  labelBn: string;
  lat: number;
  lng: number;
  zoom: number;
}> = [
  { id: 'world', labelEn: 'World Globe', labelBn: 'সম্পূর্ণ পৃথিবী', lat: 24.5, lng: 35.0, zoom: 2.5 },
  { id: 'dhaka', labelEn: 'Bengal & Sonargaon', labelBn: 'ঢাকা ও সোনারগাঁও', lat: 23.7272, lng: 90.4093, zoom: 11 },
  { id: 'bogura', labelEn: 'Mahasthangarh', labelBn: 'মহাস্থানগড়', lat: 24.9614, lng: 89.3428, zoom: 12 },
  { id: 'agra', labelEn: 'Agra & Delhi', labelBn: 'আগ্রা ও দিল্লি', lat: 27.1751, lng: 78.0421, zoom: 12 },
  { id: 'cairo', labelEn: 'Giza & Cairo', labelBn: 'গিজা ও কায়রো', lat: 29.9792, lng: 31.1342, zoom: 12 },
  { id: 'rome', labelEn: 'Rome', labelBn: 'রোম (ইতালি)', lat: 41.8902, lng: 12.4922, zoom: 13 },
  { id: 'athens', labelEn: 'Athens', labelBn: 'এথেন্স (গ্রিস)', lat: 37.9715, lng: 23.7257, zoom: 13 },
  { id: 'kyoto', labelEn: 'Kyoto', labelBn: 'কিয়োটো (জাপান)', lat: 35.0116, lng: 135.7681, zoom: 12 },
  { id: 'istanbul', labelEn: 'Istanbul', labelBn: 'ইস্তাম্বুল', lat: 41.0086, lng: 28.9802, zoom: 13 },
  { id: 'cusco', labelEn: 'Machu Picchu & Cusco', labelBn: 'মাচু পিচু', lat: -13.1631, lng: -72.545, zoom: 11 },
];

const HERITAGE_PRIMARY_TYPES = [
  'historical_landmark',
  'historical_place',
  'cultural_landmark',
  'monument',
  'history_museum',
  'museum',
  'castle',
  'tourist_attraction',
];

const HERITAGE_FALLBACK_TYPES = [
  'museum',
  'tourist_attraction',
  'mosque',
  'hindu_temple',
  'buddhist_temple',
  'church',
  'park',
];

const MAP_COPY = {
  en: {
    kicker: 'Interactive World Heritage Atlas',
    title: 'Click Anywhere on Earth to Uncover Historical Places',
    subtitle:
      'Tap any city, coast, valley, or region on the world map. All nearby historical sites appear visually—select any site to view its real photograph and read the full story behind it.',
    searchPlaceholder: 'Search any country, city, or monument (e.g., Cairo, Samarkand, Angkor Wat)...',
    searchButton: 'Explore Area',
    radiusLabel: 'Search radius',
    promptOverlay: 'Click anywhere on the map to reveal nearby historical places',
    searchingPlaces: 'Scanning region for historical landmarks...',
    noPlacesTitle: 'No major heritage sites found right at this spot',
    noPlacesHint: 'Try clicking closer to a populated coast, river valley, or city, or increase the search radius to 50 km.',
    foundCountSuffix: 'historical places found around this location',
    selectPromptTitle: 'Select a historical marker on the map',
    selectPromptBody:
      'Click any golden marker pin on the map (or pick a landmark card below) to open its photograph and detailed historical story.',
    loadingStory: 'Researching verified historical archives & story behind this place...',
    originTitle: 'Historical Origin & Era',
    storyTitle: 'The Story Behind It',
    architectureTitle: 'Architecture & Cultural Legacy',
    factsTitle: 'Notable Historical Facts',
    sourcesTitle: 'Verified Historical Sources',
    saveNotebook: 'Save History to Study Notebook',
    savedNotebook: 'Saved to Notebook',
    openGoogleMaps: 'Open in Google Maps',
    photoCredit: 'Photo',
    loadingMap: 'Loading interactive World Atlas...',
    missingKeyTitle: 'Google Maps API key unavailable',
    missingKeyBody: 'Please make sure Google Maps Platform setup is active to view the interactive world map.',
    retryStory: 'Reload History',
  },
  bn: {
    kicker: 'ইন্টারঅ্যাক্টিভ বিশ্ব ঐতিহাসিক মানচিত্র',
    title: 'পৃথিবীর যেকোনো স্থানে ক্লিক করে ঐতিহাসিক জায়গা আবিষ্কার করুন',
    subtitle:
      'মানচিত্রের যেকোনো দেশ, শহর বা অঞ্চলে ক্লিক করুন—সেখানকার সকল ঐতিহাসিক স্থান ম্যাপে ভেসে উঠবে। যেকোনো স্থানে ক্লিক করলেই তার আসল ছবি এবং পেছনের সম্পূর্ণ ইতিহাস দেখা যাবে।',
    searchPlaceholder: 'যেকোনো দেশ, শহর বা ঐতিহাসিক স্থান খুঁজুন (যেমন: সোনারগাঁও, রোম, কায়রো)...',
    searchButton: 'খুঁজুন',
    radiusLabel: 'খোঁজার দূরত্ব',
    promptOverlay: 'মানচিত্রের যেকোনো জায়গায় ক্লিক করুন — আশেপাশের সব ঐতিহাসিক স্থান দেখা যাবে',
    searchingPlaces: 'এই এলাকার ঐতিহাসিক স্থানসমূহ খোঁজা হচ্ছে...',
    noPlacesTitle: 'ঠিক এই বিন্দুর আশেপাশে বড় ঐতিহাসিক নিদর্শন পাওয়া যায়নি',
    noPlacesHint: 'কোনো শহর, নদীর অববাহিকা বা উপকূলীয় অঞ্চলে ক্লিক করুন অথবা দূরত্ব ৫০ কিমি বাড়িয়ে দিন।',
    foundCountSuffix: 'টি ঐতিহাসিক স্থান পাওয়া গেছে',
    selectPromptTitle: 'মানচিত্র থেকে একটি ঐতিহাসিক স্থান নির্বাচন করুন',
    selectPromptBody:
      'ম্যাপে দেখা যাওয়া সোনালী পিনগুলোতে (বা নিচের তালিকায়) ক্লিক করলেই স্থানটির আসল ছবি এবং পেছনের বিস্তারিত ইতিহাস ভেসে উঠবে।',
    loadingStory: 'এই স্থানের ইতিহাস ও পেছনের কাহিনী তথ্যসূত্রসহ অনুসন্ধান করা হচ্ছে...',
    originTitle: 'ঐতিহাসিক যুগ ও প্রতিষ্ঠাকাল',
    storyTitle: 'এর পেছনের কাহিনী ও ঘটনাপ্রবাহ',
    architectureTitle: 'স্থাপত্যশৈলী ও সাংস্কৃতিক গুরুত্ব',
    factsTitle: 'গুরুত্বপূর্ণ ঐতিহাসিক তথ্য',
    sourcesTitle: 'নির্ভরযোগ্য তথ্যসূত্র',
    saveNotebook: 'ইতিহাস নোটবুকে সেভ করুন',
    savedNotebook: 'নোটবুকে সেভ হয়েছে',
    openGoogleMaps: 'Google Maps-এ দেখুন',
    photoCredit: 'ছবি সূত্র',
    loadingMap: 'বিশ্ব মানচিত্র লোড হচ্ছে...',
    missingKeyTitle: 'Google Maps কী পাওয়া যায়নি',
    missingKeyBody: 'ইন্টারঅ্যাক্টিভ বিশ্ব মানচিত্র দেখার জন্য Google Maps সেটআপ সক্রিয় থাকতে হবে।',
    retryStory: 'আবার চেষ্টা করুন',
  },
} as const;

function resolveMapsKeySync(): string {
  const metaKey = import.meta.env?.VITE_GOOGLE_MAPS_API_KEY;
  if (typeof metaKey === 'string' && metaKey.trim().length > 0) {
    return metaKey.trim();
  }
  const globalKey = (globalThis as Record<string, unknown>).GOOGLE_MAPS_API_KEY;
  if (typeof globalKey === 'string' && globalKey.trim().length > 0) {
    return globalKey.trim();
  }
  return '';
}

async function safeParseJson<T>(res: Response): Promise<T> {
  const text = await res.text();
  try {
    return JSON.parse(text) as T;
  } catch {
    if (!res.ok || text.trim().startsWith('<')) {
      throw new Error(
        `Historical service returned an unexpected response (${res.status}). Please retry in a moment.`
      );
    }
    throw new Error('Invalid JSON response received from server.');
  }
}

function getPlacePhotoUri(place: google.maps.places.Place): {
  url: string | null;
  attribution: string | null;
} {
  const firstPhoto = place.photos?.[0];
  if (!firstPhoto) {
    return { url: null, attribution: null };
  }
  try {
    const uri = firstPhoto.getURI({ maxWidth: 960, maxHeight: 560 });
    const author = firstPhoto.authorAttributions?.[0]?.displayName ?? null;
    return { url: uri || null, attribution: author };
  } catch {
    return { url: null, attribution: null };
  }
}

function mapPlaceResult(place: google.maps.places.Place): DiscoveredPlace | null {
  const loc = place.location;
  if (!loc || !place.displayName) return null;
  const lat = typeof loc.lat === 'function' ? loc.lat() : Number(loc.lat);
  const lng = typeof loc.lng === 'function' ? loc.lng() : Number(loc.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

  const { url, attribution } = getPlacePhotoUri(place);

  return {
    id: place.id || `${lat.toFixed(5)}_${lng.toFixed(5)}_${place.displayName}`,
    name: place.displayName,
    address: place.formattedAddress || '',
    lat,
    lng,
    category: place.primaryTypeDisplayName || 'Historical Site',
    types: Array.isArray(place.types) ? place.types : [],
    photoUrl: url,
    photoAttribution: attribution,
    googleMapsUri: place.googleMapsURI || null,
    editorialSummary: place.editorialSummary || null,
    rating: typeof place.rating === 'number' ? place.rating : null,
    userRatingCount:
      typeof place.userRatingCount === 'number' ? place.userRatingCount : null,
  };
}

interface InteractiveWorldMapInnerProps {
  language: LanguageCode;
  onSaveNote: WorldHistoryMapViewProps['onSaveNote'];
}

function InteractiveWorldMapInner({
  language,
  onSaveNote,
}: InteractiveWorldMapInnerProps) {
  const copy = language === 'bn' ? MAP_COPY.bn : MAP_COPY.en;
  const map = useMap();
  const placesLib = useMapsLibrary('places');

  const [clickedPoint, setClickedPoint] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [radiusMeters, setRadiusMeters] = useState<number>(30000);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchingPlaces, setSearchingPlaces] = useState(false);
  const [placesError, setPlacesError] = useState<string | null>(null);
  const [discoveredPlaces, setDiscoveredPlaces] = useState<DiscoveredPlace[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<DiscoveredPlace | null>(null);

  const [storyLoading, setStoryLoading] = useState(false);
  const [storyError, setStoryError] = useState<string | null>(null);
  const [activeStory, setActiveStory] = useState<HistoricalDossier | null>(null);
  const [fallbackPhotoUrl, setFallbackPhotoUrl] = useState<string | null>(null);
  const [savedPlaceIds, setSavedPlaceIds] = useState<Record<string, boolean>>({});

  // Cache using plain object dictionaries (never Map constructor to avoid shadowing <GoogleMap>)
  const storyCacheRef = useRef<Record<string, HistoricalDossier>>({});
  const wikiPhotoCacheRef = useRef<Record<string, string | null>>({});

  const discoverHistoricalPlacesAround = useCallback(
    async (lat: number, lng: number, preferredRadius: number, targetZoom?: number) => {
      if (!placesLib) return;

      setClickedPoint({ lat, lng });
      setSearchingPlaces(true);
      setPlacesError(null);

      if (map) {
        map.panTo({ lat, lng });
        const currentZoom = map.getZoom() ?? 3;
        if (targetZoom) {
          map.setZoom(targetZoom);
        } else if (currentZoom < 9) {
          map.setZoom(11);
        }
      }

      const fields = [
        'id',
        'displayName',
        'formattedAddress',
        'location',
        'primaryTypeDisplayName',
        'types',
        'photos',
        'googleMapsURI',
        'editorialSummary',
        'rating',
        'userRatingCount',
      ];

      try {
        let collected: DiscoveredPlace[] = [];

        const primaryResponse = await placesLib.Place.searchNearby({
          fields,
          locationRestriction: {
            center: { lat, lng },
            radius: Math.min(preferredRadius, 50000),
          },
          includedTypes: HERITAGE_PRIMARY_TYPES,
          maxResultCount: 20,
          language: language === 'bn' ? 'bn' : 'en',
        });

        collected = (primaryResponse.places || [])
          .map((p: google.maps.places.Place) => mapPlaceResult(p))
          .filter((item): item is DiscoveredPlace => item !== null);

        // If very few heritage landmarks appeared right at that spot, widen once to 50 km with broader heritage categories
        if (collected.length < 3) {
          const fallbackResponse = await placesLib.Place.searchNearby({
            fields,
            locationRestriction: {
              center: { lat, lng },
              radius: 50000,
            },
            includedTypes: HERITAGE_FALLBACK_TYPES,
            maxResultCount: 16,
            language: language === 'bn' ? 'bn' : 'en',
          });
          const seenIds: Record<string, boolean> = {};
          for (const p of collected) seenIds[p.id] = true;
          for (const raw of fallbackResponse.places || []) {
            const mapped = mapPlaceResult(raw);
            if (mapped && !seenIds[mapped.id]) {
              seenIds[mapped.id] = true;
              collected.push(mapped);
            }
          }
        }

        setDiscoveredPlaces(collected);
        if (collected.length > 0) {
          setSelectedPlace(collected[0]);
        } else {
          setSelectedPlace(null);
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        if (msg.includes('OVER_QUERY_LIMIT') || msg.includes('RESOURCE_EXHAUSTED')) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }
        setPlacesError(msg || 'Unable to scan this location right now.');
        setDiscoveredPlaces([]);
        setSelectedPlace(null);
      } finally {
        setSearchingPlaces(false);
      }
    },
    [placesLib, map, language]
  );

  const handleMapClick = useCallback(
    (e: MapMouseEvent) => {
      const latLng = e.detail.latLng;
      if (!latLng) return;
      void discoverHistoricalPlacesAround(latLng.lat, latLng.lng, radiusMeters);
    },
    [discoverHistoricalPlacesAround, radiusMeters]
  );

  const handleSearchArea = async (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q || !placesLib) return;

    setSearchingPlaces(true);
    setPlacesError(null);
    try {
      const { places } = await placesLib.Place.searchByText({
        textQuery: q,
        fields: ['id', 'displayName', 'location', 'viewport'],
        maxResultCount: 1,
        language: language === 'bn' ? 'bn' : 'en',
      });
      const first = places?.[0];
      if (first?.location) {
        const lat =
          typeof first.location.lat === 'function'
            ? first.location.lat()
            : Number(first.location.lat);
        const lng =
          typeof first.location.lng === 'function'
            ? first.location.lng()
            : Number(first.location.lng);
        if (first.viewport && map) {
          map.fitBounds(first.viewport);
        }
        await discoverHistoricalPlacesAround(lat, lng, radiusMeters, 12);
      } else {
        setPlacesError(
          language === 'bn'
            ? `"${q}" নামে কোনো এলাকা খুঁজে পাওয়া যায়নি।`
            : `No region found matching "${q}".`
        );
        setSearchingPlaces(false);
      }
    } catch (err: unknown) {
      setSearchingPlaces(false);
      setPlacesError(err instanceof Error ? err.message : 'Search failed.');
    }
  };

  const loadHistoryForPlace = useCallback(
    async (place: DiscoveredPlace, forceReload = false) => {
      const cacheKey = `${place.id}::${language}`;
      setFallbackPhotoUrl(null);
      setStoryError(null);

      // Fetch real Wikimedia archival photo fallback if Google Places returned no photo
      if (!place.photoUrl) {
        if (Object.prototype.hasOwnProperty.call(wikiPhotoCacheRef.current, place.id)) {
          setFallbackPhotoUrl(wikiPhotoCacheRef.current[place.id]);
        } else {
          fetch(
            `/api/history/wiki-photo?title=${encodeURIComponent(place.name)}&lat=${place.lat}&lng=${place.lng}&lang=${encodeURIComponent(language)}`
          )
            .then((r) => safeParseJson<{ imageUrl?: string | null }>(r))
            .then((data) => {
              const url = data.imageUrl ?? null;
              wikiPhotoCacheRef.current[place.id] = url;
              setFallbackPhotoUrl(url);
            })
            .catch(() => {
              wikiPhotoCacheRef.current[place.id] = null;
            });
        }
      }

      if (!forceReload && storyCacheRef.current[cacheKey]) {
        setActiveStory(storyCacheRef.current[cacheKey]);
        setStoryLoading(false);
        return;
      }

      setActiveStory(null);
      setStoryLoading(true);
      try {
        const res = await fetch('/api/history/place', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            placeName: place.name,
            regionHint: place.address,
            placeTypes: place.types,
            language,
            lat: place.lat,
            lng: place.lng,
          }),
        });
        const data = await safeParseJson<HistoricalDossier & { error?: string }>(res);
        if (!res.ok || data.error) {
          throw new Error(data.error || 'Could not retrieve historical narrative.');
        }
        storyCacheRef.current[cacheKey] = data;
        setActiveStory(data);
      } catch (err: unknown) {
        setStoryError(
          err instanceof Error ? err.message : 'Failed to load historical details.'
        );
      } finally {
        setStoryLoading(false);
      }
    },
    [language]
  );

  useEffect(() => {
    if (!selectedPlace) {
      setActiveStory(null);
      setStoryError(null);
      setFallbackPhotoUrl(null);
      return;
    }
    if (map) {
      map.panTo({ lat: selectedPlace.lat, lng: selectedPlace.lng });
    }
    void loadHistoryForPlace(selectedPlace);
  }, [selectedPlace, map, loadHistoryForPlace]);

  const handleSavePlaceHistory = () => {
    if (!selectedPlace || !activeStory) return;
    const summaryText = [
      `📍 ${selectedPlace.name} (${selectedPlace.address || `${selectedPlace.lat.toFixed(3)}, ${selectedPlace.lng.toFixed(3)}`})`,
      '',
      activeStory.originEra,
      '',
      activeStory.storyBehind,
      activeStory.architectureSignificance ? `\n${activeStory.architectureSignificance}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    onSaveNote('history', 'World History Atlas', 'arts', summaryText);
    setSavedPlaceIds((prev) => ({ ...prev, [selectedPlace.id]: true }));
  };

  const heroImageUrl = selectedPlace?.photoUrl || fallbackPhotoUrl;

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Header & Discovery Controls */}
      <div className="border-b border-slate-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-800">
          {copy.kicker}
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {copy.title}
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
          {copy.subtitle}
        </p>

        {/* Search + Radius Row */}
        <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <form onSubmit={(e) => void handleSearchArea(e)} className="flex flex-1 max-w-2xl gap-2">
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={copy.searchPlaceholder}
                className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-700 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={searchingPlaces || !searchQuery.trim()}
              className="rounded-xl bg-sky-700 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-sky-800 disabled:opacity-50 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copy.searchButton}
            </button>
          </form>

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="font-medium whitespace-nowrap">{copy.radiusLabel}:</span>
            {[10000, 30000, 50000].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => {
                  setRadiusMeters(r);
                  if (clickedPoint) {
                    void discoverHistoricalPlacesAround(clickedPoint.lat, clickedPoint.lng, r);
                  }
                }}
                className={`rounded-lg border px-2.5 py-1.5 font-mono text-xs tabular-nums transition-colors cursor-pointer ${
                  radiusMeters === r
                    ? 'border-sky-700 bg-sky-50 font-semibold text-sky-900'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {r / 1000} km
              </button>
            ))}
          </div>
        </div>

        {/* Quick Heritage Region Jump Strip */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {QUICK_REGIONS.map((region) => (
            <button
              key={region.id}
              type="button"
              onClick={() => {
                if (region.id === 'world') {
                  if (map) {
                    map.panTo({ lat: region.lat, lng: region.lng });
                    map.setZoom(region.zoom);
                  }
                  setClickedPoint(null);
                  setDiscoveredPlaces([]);
                  setSelectedPlace(null);
                } else {
                  void discoverHistoricalPlacesAround(
                    region.lat,
                    region.lng,
                    radiusMeters,
                    region.zoom
                  );
                }
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-900 cursor-pointer"
            >
              {region.id === 'world' ? (
                <Globe className="h-3.5 w-3.5 text-sky-700" aria-hidden="true" />
              ) : (
                <Compass className="h-3.5 w-3.5 text-amber-600" aria-hidden="true" />
              )}
              <span>{language === 'bn' ? region.labelBn : region.labelEn}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Workspace: World Map (Left) + Detailed Photo & History Story (Right) */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Interactive Google Map + Nearby Places Visual Strip */}
        <div className="space-y-4 lg:col-span-7">
          <div className="relative h-[460px] lg:h-[640px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <GoogleMap
              mapId="DEMO_MAP_ID"
              defaultCenter={{ lat: 24.5, lng: 35.0 }}
              defaultZoom={2.5}
              minZoom={2}
              gestureHandling="greedy"
              mapTypeControl={true}
              streetViewControl={false}
              fullscreenControl={true}
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              onClick={handleMapClick}
              style={{ width: '100%', height: '100%' }}
            >
              {/* Clicked Search Epicenter Marker */}
              {clickedPoint && (
                <AdvancedMarker position={clickedPoint} title="Clicked location">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-sky-700 text-white shadow-md">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>
                </AdvancedMarker>
              )}

              {/* All Discovered Historical Places Rendered Visually on Map */}
              {discoveredPlaces.map((place, index) => {
                const isSelected = selectedPlace?.id === place.id;
                return (
                  <AdvancedMarker
                    key={place.id}
                    position={{ lat: place.lat, lng: place.lng }}
                    title={place.name}
                    zIndex={isSelected ? 50 : 10 + index}
                    onClick={() => setSelectedPlace(place)}
                  >
                    <div
                      className={`group flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-semibold shadow-md transition-transform cursor-pointer ${
                        isSelected
                          ? 'scale-110 border-white bg-sky-800 text-white ring-2 ring-sky-400'
                          : 'border-amber-200 bg-amber-600 text-white hover:scale-105 hover:bg-amber-700'
                      }`}
                    >
                      <Landmark className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span className="max-w-[130px] truncate">{place.name}</span>
                    </div>
                  </AdvancedMarker>
                );
              })}
            </GoogleMap>

            {/* Floating Instructional Hint or Loading Status */}
            {!clickedPoint && !searchingPlaces && (
              <div className="pointer-events-none absolute left-4 right-4 bottom-4 flex justify-center">
                <div className="rounded-xl border border-slate-200 bg-white/95 px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-lg backdrop-blur-sm">
                  {copy.promptOverlay}
                </div>
              </div>
            )}

            {searchingPlaces && (
              <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-sky-200 bg-white/95 px-3.5 py-2 text-xs font-semibold text-sky-900 shadow-md">
                <Loader2 className="h-3.5 w-3.5 animate-spin text-sky-700" aria-hidden="true" />
                <span>{copy.searchingPlaces}</span>
              </div>
            )}
          </div>

          {placesError && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs text-rose-800">
              {placesError}
            </div>
          )}

          {/* Discovered Historical Places Grid Strip */}
          {clickedPoint && !searchingPlaces && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              {discoveredPlaces.length === 0 ? (
                <div className="py-4 text-center">
                  <p className="text-sm font-semibold text-slate-900">{copy.noPlacesTitle}</p>
                  <p className="mt-1 text-xs text-slate-600">{copy.noPlacesHint}</p>
                </div>
              ) : (
                <>
                  <div className="mb-3 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">
                      <span className="font-mono text-sky-800 tabular-nums">
                        {discoveredPlaces.length}
                      </span>{' '}
                      {copy.foundCountSuffix}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 tabular-nums">
                      {clickedPoint.lat.toFixed(3)}, {clickedPoint.lng.toFixed(3)}
                    </span>
                  </div>

                  <div className="grid max-h-60 grid-cols-1 gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
                    {discoveredPlaces.map((place) => {
                      const active = selectedPlace?.id === place.id;
                      return (
                        <button
                          key={place.id}
                          type="button"
                          onClick={() => setSelectedPlace(place)}
                          className={`flex items-start gap-3 rounded-xl border p-2.5 text-left transition-colors cursor-pointer ${
                            active
                              ? 'border-sky-700 bg-sky-50'
                              : 'border-slate-200 bg-slate-50/60 hover:border-slate-300 hover:bg-white'
                          }`}
                        >
                          {place.photoUrl ? (
                            <img
                              src={place.photoUrl}
                              alt={place.name}
                              className="h-12 w-12 shrink-0 rounded-lg object-cover border border-slate-200"
                            />
                          ) : (
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-amber-200 bg-amber-50 text-amber-700">
                              <Landmark className="h-5 w-5" aria-hidden="true" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-semibold text-slate-900 truncate">
                              {place.name}
                            </div>
                            <div className="mt-0.5 text-[11px] text-sky-800 truncate">
                              {place.category}
                            </div>
                            {place.address && (
                              <div className="mt-0.5 text-[11px] text-slate-500 truncate">
                                {place.address}
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Selected Landmark Photo + Detailed History & Story Behind It */}
        <aside className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {!selectedPlace ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-700">
                  <History className="h-7 w-7" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold text-slate-900">
                  {copy.selectPromptTitle}
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                  {copy.selectPromptBody}
                </p>
              </div>
            ) : (
              <div>
                {/* Real Photograph of the Selected Historical Site */}
                {heroImageUrl ? (
                  <div className="relative h-60 w-full bg-slate-900">
                    <img
                      src={heroImageUrl}
                      alt={selectedPlace.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    {selectedPlace.photoAttribution && (
                      <div className="absolute bottom-2.5 right-3 rounded bg-slate-950/75 px-2 py-0.5 text-[10px] text-slate-200">
                        {copy.photoCredit}: {selectedPlace.photoAttribution}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex h-32 items-center justify-center border-b border-slate-200 bg-slate-900 px-6 text-slate-200">
                    <div className="flex items-center gap-3">
                      <Landmark className="h-6 w-6 text-amber-400" aria-hidden="true" />
                      <span className="font-display text-lg font-semibold">
                        {selectedPlace.name}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Place Title, Category & Google Maps Link */}
                  <div className="border-b border-slate-200 pb-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-semibold text-amber-700">
                          {selectedPlace.category}
                        </div>
                        <h2 className="mt-1 font-display text-2xl font-semibold text-slate-900 leading-snug">
                          {selectedPlace.name}
                        </h2>
                      </div>
                      {selectedPlace.rating !== null && (
                        <div className="shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-right font-mono text-xs tabular-nums text-slate-800">
                          ★ {selectedPlace.rating.toFixed(1)}
                          {selectedPlace.userRatingCount ? (
                            <span className="block text-[10px] text-slate-500">
                              ({selectedPlace.userRatingCount.toLocaleString()})
                            </span>
                          ) : null}
                        </div>
                      )}
                    </div>

                    {selectedPlace.address && (
                      <p className="mt-2 flex items-start gap-1.5 text-xs text-slate-600">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                        <span>{selectedPlace.address}</span>
                      </p>
                    )}

                    <div className="mt-3 flex flex-wrap items-center gap-2.5">
                      {selectedPlace.googleMapsUri && (
                        <a
                          href={selectedPlace.googleMapsUri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                        >
                          <span>{copy.openGoogleMaps}</span>
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                      {activeStory && (
                        <button
                          type="button"
                          onClick={handleSavePlaceHistory}
                          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                            savedPlaceIds[selectedPlace.id]
                              ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                              : 'border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100'
                          }`}
                        >
                          {savedPlaceIds[selectedPlace.id] ? (
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          ) : (
                            <BookmarkPlus className="h-3.5 w-3.5" aria-hidden="true" />
                          )}
                          <span>
                            {savedPlaceIds[selectedPlace.id]
                              ? copy.savedNotebook
                              : copy.saveNotebook}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Detailed History & Behind-the-Scenes Story */}
                  <div className="mt-5 space-y-5">
                    {storyLoading && (
                      <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-10 text-center">
                        <Loader2 className="h-6 w-6 animate-spin text-sky-700" aria-hidden="true" />
                        <p className="mt-3 text-xs font-medium text-slate-600">
                          {copy.loadingStory}
                        </p>
                      </div>
                    )}

                    {storyError && !storyLoading && (
                      <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-800">
                        <p className="leading-relaxed">{storyError}</p>
                        <button
                          type="button"
                          onClick={() => void loadHistoryForPlace(selectedPlace, true)}
                          className="mt-2.5 rounded-lg border border-rose-300 bg-white px-3 py-1.5 font-semibold text-rose-900 hover:bg-rose-100 cursor-pointer"
                        >
                          {copy.retryStory}
                        </button>
                      </div>
                    )}

                    {activeStory && !storyLoading && (
                      <>
                        {activeStory.originEra && (
                          <section className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-4">
                            <h3 className="flex items-center gap-2 text-xs font-semibold text-amber-900">
                              <History className="h-3.5 w-3.5 text-amber-700" aria-hidden="true" />
                              <span>{copy.originTitle}</span>
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-800 whitespace-pre-line">
                              {activeStory.originEra}
                            </p>
                          </section>
                        )}

                        {activeStory.storyBehind && (
                          <section>
                            <h3 className="flex items-center gap-2 font-display text-base font-semibold text-slate-900">
                              <Sparkles className="h-4 w-4 text-sky-700" aria-hidden="true" />
                              <span>{copy.storyTitle}</span>
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                              {activeStory.storyBehind}
                            </p>
                          </section>
                        )}

                        {activeStory.architectureSignificance && (
                          <section className="border-t border-slate-200 pt-4">
                            <h3 className="font-display text-base font-semibold text-slate-900">
                              {copy.architectureTitle}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                              {activeStory.architectureSignificance}
                            </p>
                          </section>
                        )}

                        {activeStory.keyFacts.length > 0 && (
                          <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <h3 className="text-xs font-semibold text-slate-900">
                              {copy.factsTitle}
                            </h3>
                            <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-700">
                              {activeStory.keyFacts.map((fact, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-700" />
                                  <span>{fact}</span>
                                </li>
                              ))}
                            </ul>
                          </section>
                        )}

                        {activeStory.sources.length > 0 && (
                          <section className="border-t border-slate-200 pt-4">
                            <h3 className="text-[11px] font-semibold text-slate-500">
                              {copy.sourcesTitle}
                            </h3>
                            <ul className="mt-2 space-y-1">
                              {activeStory.sources.map((src) => (
                                <li key={src.uri}>
                                  <a
                                    href={src.uri}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs text-sky-800 hover:underline"
                                  >
                                    <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                                    <span className="truncate max-w-[320px]">{src.title}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </section>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export function WorldHistoryMapView({ language, onSaveNote }: WorldHistoryMapViewProps) {
  const copy = language === 'bn' ? MAP_COPY.bn : MAP_COPY.en;
  const [apiKey, setApiKey] = useState<string>(() => resolveMapsKeySync());
  const [loadingKey, setLoadingKey] = useState<boolean>(() => !resolveMapsKeySync());

  useEffect(() => {
    if (apiKey) return;
    let active = true;
    fetch('/api/maps/config')
      .then((r) => safeParseJson<{ apiKey?: string }>(r))
      .then((data) => {
        if (active && typeof data.apiKey === 'string' && data.apiKey.trim()) {
          setApiKey(data.apiKey.trim());
        }
      })
      .catch(() => {
        // Handled cleanly in empty state below
      })
      .finally(() => {
        if (active) setLoadingKey(false);
      });
    return () => {
      active = false;
    };
  }, [apiKey]);

  if (loadingKey) {
    return (
      <div className="mx-auto flex min-h-[520px] max-w-7xl flex-col items-center justify-center px-6 py-16 text-center">
        <Loader2 className="h-7 w-7 animate-spin text-sky-700" aria-hidden="true" />
        <p className="mt-3 text-sm font-medium text-slate-600">{copy.loadingMap}</p>
      </div>
    );
  }

  if (!apiKey) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16 text-center">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <Globe className="mx-auto h-8 w-8 text-sky-700" aria-hidden="true" />
          <h2 className="mt-4 font-display text-xl font-semibold text-slate-900">
            {copy.missingKeyTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {copy.missingKeyBody}
          </p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider
      apiKey={apiKey}
      libraries={['places', 'marker']}
      language={language === 'bn' ? 'bn' : 'en'}
      region={language === 'bn' ? 'BD' : 'US'}
    >
      <InteractiveWorldMapInner language={language} onSaveNote={onSaveNote} />
    </APIProvider>
  );
}
