import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function getLanguageName(code: string): string {
  const map: Record<string, string> = {
    bn: 'Bengali (বাংলা)',
    en: 'English',
    hi: 'Hindi (हिन्दी)',
    ar: 'Arabic (العربية)',
    es: 'Spanish (Español)',
    fr: 'French (Français)',
    zh: 'Simplified Chinese (中文)',
    ja: 'Japanese (日本語)',
    de: 'German (Deutsch)',
    pt: 'Portuguese (Português)',
  };
  return map[code] || 'English';
}

function extractTagSection(raw: string, tag: string): string {
  const regex = new RegExp(`\\[${tag}\\]([\\s\\S]*?)(?=\\[[A-Z_]+\\]|$)`, 'i');
  const match = raw.match(regex);
  return match ? match[1].trim() : '';
}

const WIKI_LANG_ALLOWLIST = new Set([
  'bn',
  'en',
  'hi',
  'ar',
  'es',
  'fr',
  'zh',
  'ja',
  'de',
  'pt',
]);

const WIKI_HEADERS = {
  'User-Agent': 'OceanicAtlasEducationalApp/1.0 (educational world atlas)',
};

const SKIPPED_WIKI_SECTION_RE =
  /^(references|see also|external links|notes|bibliography|further reading|gallery|citations|sources|তথ্যসূত্র|আরও দেখুন|বহিঃসংযোগ|পাদটীকা|গ্রন্থপঞ্জি|ছবি|গ্যালারি)$/i;

const HISTORY_SECTION_RE =
  /(history|background|origin|origins|story|foundation|construction|establishment|etymology|ইতিহাস|পটভূমি|নামকরণ|নির্মাণ|প্রতিষ্ঠা|প্রেক্ষাপট)/i;

const ARCHITECTURE_SECTION_RE =
  /(architecture|design|description|structure|significance|legacy|monument|features|স্থাপত্য|নকশা|বিবরণ|তাৎপর্য|গঠন|বৈশিষ্ট্য)/i;

interface HistoricalDossierPayload {
  originEra: string;
  storyBehind: string;
  architectureSignificance: string;
  keyFacts: string[];
  sources: Array<{ title: string; uri: string }>;
}

function splitWikiSections(extract: string): {
  lead: string;
  sections: Array<{ heading: string; body: string }>;
} {
  const headingRe = /={2,4}\s*([^=\n]+?)\s*={2,4}/g;
  const matches = [...extract.matchAll(headingRe)];

  if (matches.length === 0) {
    return { lead: extract.trim(), sections: [] };
  }

  const lead = extract.slice(0, matches[0].index ?? 0).trim();
  const sections: Array<{ heading: string; body: string }> = [];

  for (let i = 0; i < matches.length; i += 1) {
    const match = matches[i];
    const heading = (match[1] ?? '').trim();
    const bodyStart = (match.index ?? 0) + match[0].length;
    const bodyEnd =
      i + 1 < matches.length ? (matches[i + 1].index ?? extract.length) : extract.length;
    const body = extract.slice(bodyStart, bodyEnd).trim();
    if (heading && body && !SKIPPED_WIKI_SECTION_RE.test(heading)) {
      sections.push({ heading, body });
    }
  }

  return { lead, sections };
}

function splitCleanSentences(text: string): string[] {
  return text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?।])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 24);
}

async function queryWikipediaExtract(
  wikiLang: string,
  placeName: string,
  regionHint: string,
  lat: number | null,
  lng: number | null
): Promise<{ title: string; url: string; extract: string } | null> {
  const apiBase = `https://${wikiLang}.wikipedia.org/w/api.php`;

  const fetchExtractByTitle = async (title: string) => {
    const url = `${apiBase}?action=query&prop=extracts|info&inprop=url&explaintext=1&exsectionformat=wiki&titles=${encodeURIComponent(
      title
    )}&format=json&redirects=1&origin=*`;
    const r = await fetch(url, { headers: WIKI_HEADERS });
    if (!r.ok) return null;
    const data = (await r.json()) as {
      query?: {
        pages?: Record<
          string,
          { missing?: string; title?: string; fullurl?: string; extract?: string }
        >;
      };
    };
    const pages = Object.values(data.query?.pages ?? {});
    const page = pages.find((p) => !p.missing && p.extract && p.extract.trim().length > 80);
    if (!page || !page.title || !page.extract) return null;
    return {
      title: page.title,
      url:
        page.fullurl ||
        `https://${wikiLang}.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
      extract: page.extract.trim(),
    };
  };

  // 1. Direct exact title match
  const direct = await fetchExtractByTitle(placeName);
  if (direct) return direct;

  // 2. Full-text search on Wikipedia
  const queryTerms = [placeName, regionHint ? `${placeName} ${regionHint.split(',')[0]}` : '']
    .filter(Boolean);
  for (const term of queryTerms) {
    const searchUrl = `${apiBase}?action=query&list=search&srsearch=${encodeURIComponent(
      term
    )}&srlimit=3&format=json&origin=*`;
    const sr = await fetch(searchUrl, { headers: WIKI_HEADERS });
    if (sr.ok) {
      const sd = (await sr.json()) as {
        query?: { search?: Array<{ title?: string }> };
      };
      for (const hit of sd.query?.search ?? []) {
        if (!hit.title) continue;
        const found = await fetchExtractByTitle(hit.title);
        if (found) return found;
      }
    }
  }

  // 3. Coordinate geosearch fallback
  if (lat !== null && lng !== null && Number.isFinite(lat) && Number.isFinite(lng)) {
    const geoUrl = `${apiBase}?action=query&list=geosearch&gscoord=${lat}|${lng}&gsradius=2500&gslimit=3&format=json&origin=*`;
    const gr = await fetch(geoUrl, { headers: WIKI_HEADERS });
    if (gr.ok) {
      const gd = (await gr.json()) as {
        query?: { geosearch?: Array<{ title?: string }> };
      };
      for (const hit of gd.query?.geosearch ?? []) {
        if (!hit.title) continue;
        const found = await fetchExtractByTitle(hit.title);
        if (found) return found;
      }
    }
  }

  return null;
}

async function fetchWikipediaDossier(
  placeName: string,
  regionHint: string,
  lat: number | null,
  lng: number | null,
  languageCode: string
): Promise<HistoricalDossierPayload | null> {
  const preferredLang = WIKI_LANG_ALLOWLIST.has(languageCode) ? languageCode : 'en';
  const langOrder = preferredLang === 'en' ? ['en'] : [preferredLang, 'en'];

  for (const lang of langOrder) {
    try {
      const page = await queryWikipediaExtract(lang, placeName, regionHint, lat, lng);
      if (!page) continue;

      const { lead, sections } = splitWikiSections(page.extract);
      const leadSentences = splitCleanSentences(lead);

      const originEra =
        leadSentences.slice(0, 3).join(' ') || lead.slice(0, 520).trim();

      const historySections = sections.filter((s) => HISTORY_SECTION_RE.test(s.heading));
      const archSections = sections.filter(
        (s) => !HISTORY_SECTION_RE.test(s.heading) && ARCHITECTURE_SECTION_RE.test(s.heading)
      );
      const otherSections = sections.filter(
        (s) => !HISTORY_SECTION_RE.test(s.heading) && !ARCHITECTURE_SECTION_RE.test(s.heading)
      );

      const storyParts: string[] = [];
      for (const sec of historySections) {
        storyParts.push(sec.body);
      }
      if (storyParts.length === 0 && leadSentences.length > 3) {
        storyParts.push(leadSentences.slice(3).join(' '));
      }
      if (storyParts.length === 0 && otherSections.length > 0) {
        storyParts.push(otherSections[0].body);
      }
      if (storyParts.length === 0) {
        storyParts.push(lead);
      }
      const storyBehind = storyParts.join('\n\n').slice(0, 2200).trim();

      const archParts =
        archSections.length > 0
          ? archSections.map((s) => s.body)
          : otherSections.slice(0, 1).map((s) => s.body);
      const architectureSignificance = archParts.join('\n\n').slice(0, 1200).trim();

      const factPool = [
        ...leadSentences.slice(2),
        ...splitCleanSentences(storyBehind),
      ];
      const uniqueFacts: string[] = [];
      const seenFacts = new Set<string>();
      for (const f of factPool) {
        if (uniqueFacts.length >= 4) break;
        if (f.length >= 30 && f.length <= 240 && !seenFacts.has(f)) {
          seenFacts.add(f);
          uniqueFacts.push(f);
        }
      }

      return {
        originEra,
        storyBehind,
        architectureSignificance,
        keyFacts: uniqueFacts,
        sources: [
          {
            title: `${page.title} — Wikipedia (${lang.toUpperCase()})`,
            uri: page.url,
          },
        ],
      };
    } catch {
      // Try next language edition cleanly
    }
  }

  return null;
}

let geminiQuotaCooldownUntil = 0;

function isQuotaExceededError(err: unknown): boolean {
  const msg = err instanceof Error ? err.message : String(err);
  return msg.includes('429') || msg.includes('RESOURCE_EXHAUSTED');
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  // Safely expose provisioned Maps API key config at runtime (never hardcoded)
  app.get('/api/maps/config', (_req, res) => {
    const apiKey =
      process.env.VITE_GOOGLE_MAPS_API_KEY?.trim() ||
      process.env.GOOGLE_MAPS_API_KEY?.trim() ||
      '';
    res.json({ apiKey });
  });

  // Fallback real archival photo lookup via Wikimedia / Wikipedia when Places photo is unavailable
  app.get('/api/history/wiki-photo', async (req, res) => {
    const title = typeof req.query.title === 'string' ? req.query.title.trim().slice(0, 140) : '';
    const langParam =
      typeof req.query.lang === 'string' ? req.query.lang.trim().slice(0, 10) : 'en';
    const lat = Number(req.query.lat);
    const lng = Number(req.query.lng);

    if (!title) {
      res.json({ imageUrl: null });
      return;
    }

    const langsToTry =
      WIKI_LANG_ALLOWLIST.has(langParam) && langParam !== 'en' ? [langParam, 'en'] : ['en'];

    for (const lang of langsToTry) {
      try {
        const summaryUrl = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
          title
        )}`;
        const summaryRes = await fetch(summaryUrl, { headers: WIKI_HEADERS });
        if (summaryRes.ok) {
          const data = (await summaryRes.json()) as {
            originalimage?: { source?: string };
            thumbnail?: { source?: string };
          };
          const img = data.originalimage?.source || data.thumbnail?.source || null;
          if (img) {
            res.json({ imageUrl: img });
            return;
          }
        }

        if (Number.isFinite(lat) && Number.isFinite(lng)) {
          const searchUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${lat}|${lng}&gsradius=2500&gslimit=3&format=json&origin=*`;
          const geoRes = await fetch(searchUrl, { headers: WIKI_HEADERS });
          if (geoRes.ok) {
            const geoData = (await geoRes.json()) as {
              query?: { geosearch?: Array<{ title?: string }> };
            };
            const nearbyTitle = geoData.query?.geosearch?.[0]?.title;
            if (nearbyTitle) {
              const nearbySummary = await fetch(
                `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
                  nearbyTitle
                )}`,
                { headers: WIKI_HEADERS }
              );
              if (nearbySummary.ok) {
                const nd = (await nearbySummary.json()) as {
                  originalimage?: { source?: string };
                  thumbnail?: { source?: string };
                };
                const img = nd.originalimage?.source || nd.thumbnail?.source || null;
                if (img) {
                  res.json({ imageUrl: img });
                  return;
                }
              }
            }
          }
        }
      } catch {
        // Fall through cleanly
      }
    }

    res.json({ imageUrl: null });
  });

  // Historical story & background endpoint powered by Gemini + Google Search grounding,
  // with automatic retry and live Wikipedia historical encyclopedia API fallback.
  app.post('/api/history/place', async (req, res) => {
    const body = req.body as {
      placeName?: unknown;
      regionHint?: unknown;
      placeTypes?: unknown;
      language?: unknown;
      lat?: unknown;
      lng?: unknown;
    };

    const placeName =
      typeof body.placeName === 'string' ? body.placeName.trim().slice(0, 160) : '';
    const regionHint =
      typeof body.regionHint === 'string' ? body.regionHint.trim().slice(0, 200) : '';
    const languageCode =
      typeof body.language === 'string' ? body.language.trim().slice(0, 10) : 'en';
    const placeTypes = Array.isArray(body.placeTypes)
      ? body.placeTypes.filter((t): t is string => typeof t === 'string').slice(0, 6)
      : [];
    const lat = typeof body.lat === 'number' && Number.isFinite(body.lat) ? body.lat : null;
    const lng = typeof body.lng === 'number' && Number.isFinite(body.lng) ? body.lng : null;

    if (!placeName) {
      res.status(400).json({ error: 'Place name is required.' });
      return;
    }

    const ai = getGeminiClient();
    const targetLanguage = getLanguageName(languageCode);
    let lastGeminiErrorMessage = '';
    const inQuotaCooldown = Date.now() < geminiQuotaCooldownUntil;

    if (ai && !inQuotaCooldown) {
      const prompt = `You are a distinguished historian and curator for an educational world atlas.
Research the real historical place: "${placeName}"${regionHint ? ` (located near ${regionHint})` : ''}${
        placeTypes.length > 0 ? ` [Category tags: ${placeTypes.join(', ')}]` : ''
      }.

Write an engaging, accurate, and richly detailed educational history in ${targetLanguage}.
Format your output strictly using these exact section headers (keep the bracketed English tags exactly as written, while writing all content inside them in ${targetLanguage}):

[ORIGIN_ERA]
Write 2-3 clear sentences covering when this place was built or established, who built or founded it, and its historical period/dynasty.

[STORY_BEHIND]
Write 2 detailed paragraphs explaining the true story behind this place — why it was built, dramatic events, battles, treaties, cultural breakthroughs, or human stories connected to it.

[ARCHITECTURE_SIGNIFICANCE]
Write 1 detailed paragraph about its architectural craftsmanship, design highlights, and why it matters to world heritage and learners today.

[KEY_FACTS]
Provide 3 short bullet points (each starting with "- ") highlighting remarkable historical facts or dates.

If specific historical dates are uncertain, state what historians know accurately without fabricating legends as fact.`;

      const attempts: Array<{ model: string; withSearch: boolean }> = [
        { model: 'gemini-4-hydrogen', withSearch: true },
        { model: 'gemini-4-hydrogen', withSearch: false },
      ];

      for (const attempt of attempts) {
        try {
          const response = await ai.models.generateContent({
            model: attempt.model,
            contents: prompt,
            ...(attempt.withSearch ? { config: { tools: [{ googleSearch: {} }] } } : {}),
          });

          const rawText = (response.text ?? '').trim();
          if (!rawText) continue;

          const originEra = extractTagSection(rawText, 'ORIGIN_ERA');
          const storyBehind = extractTagSection(rawText, 'STORY_BEHIND');
          const architectureSignificance = extractTagSection(
            rawText,
            'ARCHITECTURE_SIGNIFICANCE'
          );
          const factsRaw = extractTagSection(rawText, 'KEY_FACTS');

          const keyFacts = factsRaw
            .split('\n')
            .map((line) => line.replace(/^[-•*]\s*/, '').trim())
            .filter((line) => line.length > 0)
            .slice(0, 5);

          const chunks =
            response.candidates?.[0]?.groundingMetadata?.groundingChunks ?? [];
          const sources: Array<{ title: string; uri: string }> = [];
          const seenUris = new Set<string>();

          for (const chunk of chunks) {
            const web = chunk.web;
            if (web?.uri && !seenUris.has(web.uri)) {
              seenUris.add(web.uri);
              sources.push({
                title: web.title || web.uri,
                uri: web.uri,
              });
            }
          }

          res.json({
            originEra: originEra || rawText.slice(0, 500),
            storyBehind: storyBehind || rawText,
            architectureSignificance,
            keyFacts,
            sources: sources.slice(0, 5),
          });
          return;
        } catch (err: unknown) {
          lastGeminiErrorMessage =
            err instanceof Error ? err.message : 'Unable to retrieve historical dossier right now.';
          if (isQuotaExceededError(err)) {
            geminiQuotaCooldownUntil = Date.now() + 5 * 60 * 1000;
            console.warn(
              'Gemini historical research quota reached; routing to live Wikipedia archive.'
            );
            break;
          }
          console.warn(
            `Historical place research attempt (${attempt.model}, search=${attempt.withSearch}) fallback:`,
            lastGeminiErrorMessage
          );
        }
      }
    } else if (inQuotaCooldown) {
      lastGeminiErrorMessage = 'RESOURCE_EXHAUSTED: Gemini API quota cooldown active.';
    } else {
      lastGeminiErrorMessage = 'Historical research API key is not configured.';
    }

    // Live Wikipedia Encyclopedia fallback when Gemini quota is exhausted or unavailable
    const wikiDossier = await fetchWikipediaDossier(
      placeName,
      regionHint,
      lat,
      lng,
      languageCode
    );
    if (wikiDossier) {
      res.json(wikiDossier);
      return;
    }

    const isQuotaError =
      lastGeminiErrorMessage.includes('429') ||
      lastGeminiErrorMessage.includes('RESOURCE_EXHAUSTED');

    // Return 429 or 422 (never 502/503, which reverse proxies intercept with HTML error pages)
    res.status(isQuotaError ? 429 : 422).json({
      error: isQuotaError
        ? languageCode === 'bn'
          ? 'ঐতিহাসিক তথ্যসেবার কোটা সাময়িকভাবে পূর্ণ হয়েছে এবং এই স্থানের উইকিপিডিয়া নিবন্ধ পাওয়া যায়নি। কিছুক্ষণ পর আবার চেষ্টা করুন অথবা Settings > Secrets থেকে বিলিং-সক্রিয় API কী নির্বাচন করুন।'
          : 'Historical research quota is currently exhausted and no matching Wikipedia archive entry was found for this spot. Please try again shortly or configure a billing-enabled API key in Settings > Secrets.'
        : lastGeminiErrorMessage || 'Unable to retrieve historical dossier right now.',
    });
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (_req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Oceanic Atlas server listening on http://0.0.0.0:${PORT}`);
  });
}

void startServer();
