import { useEffect, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';

export type LabId = 'equilibrium' | 'wave' | 'growth';

interface ConceptLabsViewProps {
  initialLab?: LabId;
}

export function ConceptLabsView({ initialLab = 'equilibrium' }: ConceptLabsViewProps) {
  const [activeLab, setActiveLab] = useState<LabId>(initialLab);

  useEffect(() => {
    setActiveLab(initialLab);
  }, [initialLab]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-semibold text-sky-800">
            Interactive Two-Zone Concept Simulators
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Concept Labs
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Manipulate real parameters and watch core laws across Economics, Physics, and
            Mathematics respond visually in real time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1 rounded-lg bg-slate-200/70 p-1 self-start lg:self-auto">
          <button
            type="button"
            onClick={() => setActiveLab('equilibrium')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
              activeLab === 'equilibrium' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Supply &amp; Demand Lab
          </button>
          <button
            type="button"
            onClick={() => setActiveLab('wave')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
              activeLab === 'wave' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Wave Interference Lab
          </button>
          <button
            type="button"
            onClick={() => setActiveLab('growth')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
              activeLab === 'growth' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
            }`}
          >
            Compound Growth Lab
          </button>
        </div>
      </div>

      <div className="mt-8">
        {activeLab === 'equilibrium' && <EquilibriumLab />}
        {activeLab === 'wave' && <WaveInterferenceLab />}
        {activeLab === 'growth' && <CompoundGrowthLab />}
      </div>
    </section>
  );
}

function EquilibriumLab() {
  const [demandShift, setDemandShift] = useState(0); // -25 to +25
  const [supplyShift, setSupplyShift] = useState(0); // -25 to +25
  const [priceCap, setPriceCap] = useState(100); // 100 = uncapped, lower = ceiling

  // Demand: P = (90 + demandShift) - 0.8 * Q
  // Supply: P = (10 - supplyShift) + 0.8 * Q
  const demandIntercept = 90 + demandShift;
  const supplyIntercept = 10 - supplyShift;
  const rawEqQ = (demandIntercept - supplyIntercept) / 1.6;
  const eqQ = Math.max(5, Math.min(95, rawEqQ));
  const eqP = Math.max(5, Math.min(95, supplyIntercept + 0.8 * eqQ));

  const effectiveCeiling = priceCap < 98 ? priceCap : null;
  const qDemandedAtCap = effectiveCeiling !== null ? Math.max(0, Math.min(100, (demandIntercept - effectiveCeiling) / 0.8)) : eqQ;
  const qSuppliedAtCap = effectiveCeiling !== null ? Math.max(0, Math.min(100, (effectiveCeiling - supplyIntercept) / 0.8)) : eqQ;
  const imbalance = qDemandedAtCap - qSuppliedAtCap;

  // Map data (Q: 0..100, P: 0..100) to SVG coords (plot x: 55..470, y: 270..30)
  const mapX = (q: number) => 55 + (q / 100) * 415;
  const mapY = (p: number) => 270 - (p / 100) * 240;

  const dStartP = Math.min(100, demandIntercept);
  const dStartQ = Math.max(0, (demandIntercept - dStartP) / 0.8);
  const dEndQ = Math.min(100, demandIntercept / 0.8);
  const dEndP = Math.max(0, demandIntercept - 0.8 * dEndQ);

  const sStartQ = Math.max(0, -supplyIntercept / 0.8);
  const sStartP = Math.max(0, supplyIntercept + 0.8 * sStartQ);
  const sEndQ = Math.min(100, (100 - supplyIntercept) / 0.8);
  const sEndP = Math.min(100, supplyIntercept + 0.8 * sEndQ);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Left Zone: Interactive Graph Stage */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-7">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-xl font-semibold text-slate-900">
            Market Equilibrium Coordinate Stage
          </h2>
          <span className="font-mono text-xs font-medium text-emerald-700 tabular-nums">
            {effectiveCeiling === null
              ? '● MARKET CLEARING'
              : imbalance > 1
                ? '▲ SHORTAGE ACTIVE'
                : imbalance < -1
                  ? '▲ SURPLUS ACTIVE'
                  : '● AT EQUILIBRIUM'}
          </span>
        </div>

        <svg
          viewBox="0 0 500 310"
          role="img"
          aria-label="Supply and demand curves with equilibrium marker"
          className="mt-4 w-full rounded-lg border border-slate-200 bg-slate-50"
        >
          {/* Grid lines */}
          {[20, 40, 60, 80].map((val) => (
            <g key={val}>
              <line
                x1={mapX(val)}
                y1={30}
                x2={mapX(val)}
                y2={270}
                stroke="#E2E8F0"
                strokeWidth="1"
              />
              <line
                x1={55}
                y1={mapY(val)}
                x2={470}
                y2={mapY(val)}
                stroke="#E2E8F0"
                strokeWidth="1"
              />
            </g>
          ))}

          {/* Axes */}
          <line x1={55} y1={270} x2={475} y2={270} stroke="#334155" strokeWidth="1.5" />
          <line x1={55} y1={25} x2={55} y2={270} stroke="#334155" strokeWidth="1.5" />
          <text x={260} y={296} textAnchor="middle" className="fill-slate-600 text-[11px] font-medium">
            Quantity (Q)
          </text>
          <text
            x={20}
            y={150}
            textAnchor="middle"
            transform="rotate(-90 20 150)"
            className="fill-slate-600 text-[11px] font-medium"
          >
            Price (P)
          </text>

          {/* Demand Curve */}
          <line
            x1={mapX(dStartQ)}
            y1={mapY(dStartP)}
            x2={mapX(dEndQ)}
            y2={mapY(dEndP)}
            stroke="#0284C7"
            strokeWidth="3"
          />
          <text
            x={mapX(dEndQ) - 18}
            y={mapY(dEndP) - 10}
            className="fill-sky-700 text-xs font-semibold"
          >
            Demand (D)
          </text>

          {/* Supply Curve */}
          <line
            x1={mapX(sStartQ)}
            y1={mapY(sStartP)}
            x2={mapX(sEndQ)}
            y2={mapY(sEndP)}
            stroke="#047857"
            strokeWidth="3"
          />
          <text
            x={mapX(sEndQ) - 24}
            y={mapY(sEndP) + 16}
            className="fill-emerald-700 text-xs font-semibold"
          >
            Supply (S)
          </text>

          {/* Price Ceiling / Control line if active */}
          {effectiveCeiling !== null && (
            <g>
              <line
                x1={55}
                y1={mapY(effectiveCeiling)}
                x2={470}
                y2={mapY(effectiveCeiling)}
                stroke="#DC2626"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <text
                x={64}
                y={mapY(effectiveCeiling) - 6}
                className="fill-red-600 text-[11px] font-semibold"
              >
                Regulated Price: ${effectiveCeiling.toFixed(0)}
              </text>
            </g>
          )}

          {/* Equilibrium dashed guides & marker */}
          <line
            x1={55}
            y1={mapY(eqP)}
            x2={mapX(eqQ)}
            y2={mapY(eqP)}
            stroke="#64748B"
            strokeDasharray="4 4"
            strokeWidth="1"
          />
          <line
            x1={mapX(eqQ)}
            y1={mapY(eqP)}
            x2={mapX(eqQ)}
            y2={270}
            stroke="#64748B"
            strokeDasharray="4 4"
            strokeWidth="1"
          />
          <circle cx={mapX(eqQ)} cy={mapY(eqP)} r="6" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2" />
          <text
            x={mapX(eqQ) + 10}
            y={mapY(eqP) - 8}
            className="fill-slate-900 font-mono text-xs font-semibold"
          >
            E* ({eqQ.toFixed(0)}, ${eqP.toFixed(0)})
          </text>
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-4 border-t border-slate-100 pt-4 text-center">
          <div>
            <div className="text-xs text-slate-500">Equilibrium Price P*</div>
            <div className="mt-0.5 font-mono text-lg font-semibold text-slate-900 tabular-nums">
              ${eqP.toFixed(1)}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Equilibrium Qty Q*</div>
            <div className="mt-0.5 font-mono text-lg font-semibold text-slate-900 tabular-nums">
              {eqQ.toFixed(1)} units
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Market Imbalance</div>
            <div className="mt-0.5 font-mono text-lg font-semibold text-slate-900 tabular-nums">
              {effectiveCeiling === null
                ? '0 units'
                : imbalance > 0
                  ? `−${imbalance.toFixed(1)} shortage`
                  : `+${Math.abs(imbalance).toFixed(1)} surplus`}
            </div>
          </div>
        </div>
      </div>

      {/* Right Zone: Parameter Controls & Live Annotations */}
      <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 lg:col-span-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-slate-900">
            Market Parameters
          </h3>
          <button
            type="button"
            onClick={() => {
              setDemandShift(0);
              setSupplyShift(0);
              setPriceCap(100);
            }}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 cursor-pointer"
          >
            <RotateCcw className="h-3 w-3" aria-hidden="true" />
            <span>Reset</span>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700">
              <label htmlFor="demand-shift">Demand Shift (Income / Popularity)</label>
              <span className="font-mono tabular-nums">
                {demandShift > 0 ? `+${demandShift}` : demandShift} units
              </span>
            </div>
            <input
              id="demand-shift"
              type="range"
              min={-25}
              max={25}
              value={demandShift}
              onChange={(e) => setDemandShift(Number(e.target.value))}
              className="mt-2 w-full accent-sky-700 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700">
              <label htmlFor="supply-shift">Supply Shift (Tech / Harvest Cost)</label>
              <span className="font-mono tabular-nums">
                {supplyShift > 0 ? `+${supplyShift}` : supplyShift} units
              </span>
            </div>
            <input
              id="supply-shift"
              type="range"
              min={-25}
              max={25}
              value={supplyShift}
              onChange={(e) => setSupplyShift(Number(e.target.value))}
              className="mt-2 w-full accent-emerald-700 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700">
              <label htmlFor="price-cap">Regulated Price Test (100 = Free Market)</label>
              <span className="font-mono tabular-nums">
                {priceCap >= 98 ? 'Off' : `$${priceCap}`}
              </span>
            </div>
            <input
              id="price-cap"
              type="range"
              min={15}
              max={100}
              value={priceCap}
              onChange={(e) => setPriceCap(Number(e.target.value))}
              className="mt-2 w-full accent-red-600 cursor-pointer"
            />
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-700">
          <div className="font-semibold text-slate-900">What You Are Observing</div>
          <p className="mt-1.5">
            {effectiveCeiling !== null && imbalance > 1
              ? `Because price is capped at $${effectiveCeiling} below equilibrium ($${eqP.toFixed(0)}), buyers want ${qDemandedAtCap.toFixed(0)} units while sellers only supply ${qSuppliedAtCap.toFixed(0)}—causing a shortage of ${imbalance.toFixed(0)} units.`
              : effectiveCeiling !== null && imbalance < -1
                ? `Because price is held at $${effectiveCeiling} above equilibrium ($${eqP.toFixed(0)}), sellers produce ${qSuppliedAtCap.toFixed(0)} units while buyers only purchase ${qDemandedAtCap.toFixed(0)}—creating an unsold surplus.`
                : `In an open market, price settles at $${eqP.toFixed(1)} where quantity demanded equals quantity supplied (${eqQ.toFixed(1)} units). Shift Demand or Supply to watch equilibrium adapt.`}
          </p>
        </div>
      </div>
    </div>
  );
}

function WaveInterferenceLab() {
  const [phaseDeg, setPhaseDeg] = useState(0);
  const [freq, setFreq] = useState(2);
  const [ampRatio, setAmpRatio] = useState(1.0);
  const [playing, setPlaying] = useState(true);
  const [timeOffset, setTimeOffset] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setTimeOffset((prev) => (prev + 0.08) % (Math.PI * 2));
    }, 30);
    return () => window.clearInterval(id);
  }, [playing]);

  const pointsCount = 120;
  const phaseRad = (phaseDeg * Math.PI) / 180;

  const buildPath = (fn: (xNorm: number) => number, baseLineY: number, scaleY: number) => {
    const pts: string[] = [];
    for (let i = 0; i <= pointsCount; i++) {
      const t = i / pointsCount;
      const x = 30 + t * 440;
      const y = baseLineY - fn(t) * scaleY;
      pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  };

  const w1 = (t: number) => Math.sin(t * Math.PI * 2 * freq - timeOffset);
  const w2 = (t: number) => ampRatio * Math.sin(t * Math.PI * 2 * freq - timeOffset + phaseRad);
  const sumW = (t: number) => w1(t) + w2(t);

  const resultantAmp = Math.sqrt(1 + ampRatio * ampRatio + 2 * ampRatio * Math.cos(phaseRad));
  const stateLabel =
    phaseDeg <= 30 || phaseDeg >= 330
      ? '● CONSTRUCTIVE INTERFERENCE'
      : phaseDeg >= 150 && phaseDeg <= 210
        ? '▲ DESTRUCTIVE CANCELLATION'
        : '◆ PARTIAL SUPERPOSITION';

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-7">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-xl font-semibold text-slate-900">
            Linear Wave Superposition Stage
          </h2>
          <span className="font-mono text-xs font-medium text-sky-800 tabular-nums">
            {stateLabel}
          </span>
        </div>

        <svg
          viewBox="0 0 500 300"
          role="img"
          aria-label="Two component waves and their superposed resultant wave"
          className="mt-4 w-full rounded-lg border border-slate-200 bg-slate-50"
        >
          {/* Reference baselines */}
          <line x1={30} y1={70} x2={470} y2={70} stroke="#CBD5E1" strokeDasharray="4 4" />
          <line x1={30} y1={140} x2={470} y2={140} stroke="#CBD5E1" strokeDasharray="4 4" />
          <line x1={30} y1={230} x2={470} y2={230} stroke="#94A3B8" strokeWidth="1" />

          <text x={34} y={46} className="fill-sky-700 text-[11px] font-semibold">
            Wave 1
          </text>
          <path d={buildPath(w1, 70, 22)} fill="none" stroke="#0284C7" strokeWidth="2" />

          <text x={34} y={116} className="fill-amber-700 text-[11px] font-semibold">
            Wave 2 (Phase {phaseDeg}°)
          </text>
          <path d={buildPath(w2, 140, 22)} fill="none" stroke="#D97706" strokeWidth="2" />

          <text x={34} y={185} className="fill-slate-900 text-[11px] font-semibold">
            Resultant Sum (Wave 1 + Wave 2)
          </text>
          <path d={buildPath(sumW, 230, 24)} fill="none" stroke="#0F172A" strokeWidth="3" />
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-4 border-t border-slate-100 pt-4 text-center">
          <div>
            <div className="text-xs text-slate-500">Phase Offset Δφ</div>
            <div className="mt-0.5 font-mono text-lg font-semibold text-slate-900 tabular-nums">
              {phaseDeg}°
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Resultant Amplitude</div>
            <div className="mt-0.5 font-mono text-lg font-semibold text-slate-900 tabular-nums">
              {resultantAmp.toFixed(2)}×
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Wave Energy (∝ A²)</div>
            <div className="mt-0.5 font-mono text-lg font-semibold text-slate-900 tabular-nums">
              {(resultantAmp * resultantAmp).toFixed(2)}×
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 lg:col-span-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-slate-900">Wave Controls</h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1 text-xs font-semibold text-white hover:bg-sky-800 cursor-pointer"
            >
              {playing ? (
                <>
                  <Pause className="h-3 w-3" aria-hidden="true" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-3 w-3" aria-hidden="true" />
                  <span>Play</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setPhaseDeg(0);
                setFreq(2);
                setAmpRatio(1.0);
              }}
              className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" aria-hidden="true" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700">
              <label htmlFor="phase-slider">Phase Offset Δφ (Try 180° to cancel!)</label>
              <span className="font-mono tabular-nums">{phaseDeg}°</span>
            </div>
            <input
              id="phase-slider"
              type="range"
              min={0}
              max={360}
              step={5}
              value={phaseDeg}
              onChange={(e) => setPhaseDeg(Number(e.target.value))}
              className="mt-2 w-full accent-sky-700 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700">
              <label htmlFor="freq-slider">Spatial Cycles (Frequency)</label>
              <span className="font-mono tabular-nums">{freq} cycles</span>
            </div>
            <input
              id="freq-slider"
              type="range"
              min={1}
              max={5}
              step={0.5}
              value={freq}
              onChange={(e) => setFreq(Number(e.target.value))}
              className="mt-2 w-full accent-sky-700 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700">
              <label htmlFor="amp-slider">Wave 2 Amplitude Ratio</label>
              <span className="font-mono tabular-nums">{ampRatio.toFixed(1)}×</span>
            </div>
            <input
              id="amp-slider"
              type="range"
              min={0.2}
              max={1.5}
              step={0.1}
              value={ampRatio}
              onChange={(e) => setAmpRatio(Number(e.target.value))}
              className="mt-2 w-full accent-amber-600 cursor-pointer"
            />
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-700">
          <div className="font-semibold text-slate-900">Physics Principle</div>
          <p className="mt-1.5">
            At Δφ = 0° (in phase), crests stack onto crests, doubling amplitude when Wave 2 matches
            Wave 1. At Δφ = 180° (antiphase), crests meet troughs and cancel flat—the exact math
            behind noise-canceling headphones and laser interferometry.
          </p>
        </div>
      </div>
    </div>
  );
}

function CompoundGrowthLab() {
  const [principal, setPrincipal] = useState(1000);
  const [ratePct, setRatePct] = useState(8);
  const [years, setYears] = useState(20);

  const series = Array.from({ length: years + 1 }, (_, yr) => {
    const simple = principal * (1 + (ratePct / 100) * yr);
    const compound = principal * Math.pow(1 + ratePct / 100, yr);
    return { yr, simple, compound };
  });

  const finalRow = series[series.length - 1];
  const maxVal = Math.max(finalRow.compound, principal * 2);
  const doublingYears = ratePct > 0 ? 72 / ratePct : Infinity;

  const mapX = (yr: number) => 55 + (yr / years) * 415;
  const mapY = (val: number) => 265 - (val / maxVal) * 225;

  const compoundPath = series
    .map((pt, i) => `${i === 0 ? 'M' : 'L'}${mapX(pt.yr).toFixed(1)},${mapY(pt.compound).toFixed(1)}`)
    .join(' ');
  const simplePath = series
    .map((pt, i) => `${i === 0 ? 'M' : 'L'}${mapX(pt.yr).toFixed(1)},${mapY(pt.simple).toFixed(1)}`)
    .join(' ');

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-7">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-xl font-semibold text-slate-900">
            Linear vs. Exponential Compounding Curve
          </h2>
          <span className="font-mono text-xs font-medium text-indigo-700 tabular-nums">
            Doubles every ~{doublingYears === Infinity ? '∞' : doublingYears.toFixed(1)} yrs
          </span>
        </div>

        <svg
          viewBox="0 0 500 300"
          role="img"
          aria-label="Comparison chart of linear simple growth and exponential compound growth"
          className="mt-4 w-full rounded-lg border border-slate-200 bg-slate-50"
        >
          <line x1={55} y1={265} x2={475} y2={265} stroke="#334155" strokeWidth="1.5" />
          <line x1={55} y1={30} x2={55} y2={265} stroke="#334155" strokeWidth="1.5" />

          <path d={simplePath} fill="none" stroke="#64748B" strokeWidth="2.5" strokeDasharray="5 4" />
          <path d={compoundPath} fill="none" stroke="#4338CA" strokeWidth="3" />

          <circle
            cx={mapX(years)}
            cy={mapY(finalRow.compound)}
            r="5"
            fill="#4338CA"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <circle
            cx={mapX(years)}
            cy={mapY(finalRow.simple)}
            r="4"
            fill="#64748B"
          />

          <text x={70} y={48} className="fill-indigo-700 text-xs font-semibold">
            Compound: FV = P(1 + r)ⁿ
          </text>
          <text x={70} y={66} className="fill-slate-600 text-xs font-medium">
            Simple Linear: FV = P(1 + rn)
          </text>
          <text x={265} y={290} textAnchor="middle" className="fill-slate-600 text-[11px] font-medium">
            Time Horizon (0 to {years} years)
          </text>
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-4 border-t border-slate-100 pt-4 text-center">
          <div>
            <div className="text-xs text-slate-500">Compound Final Value</div>
            <div className="mt-0.5 font-mono text-lg font-semibold text-indigo-700 tabular-nums">
              ${Math.round(finalRow.compound).toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Simple Linear Value</div>
            <div className="mt-0.5 font-mono text-lg font-semibold text-slate-700 tabular-nums">
              ${Math.round(finalRow.simple).toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500">Compounding Bonus</div>
            <div className="mt-0.5 font-mono text-lg font-semibold text-emerald-700 tabular-nums">
              +${Math.round(finalRow.compound - finalRow.simple).toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 lg:col-span-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-slate-900">Growth Variables</h3>
          <button
            type="button"
            onClick={() => {
              setPrincipal(1000);
              setRatePct(8);
              setYears(20);
            }}
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 cursor-pointer"
          >
            <RotateCcw className="h-3 w-3" aria-hidden="true" />
            <span>Reset</span>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700">
              <label htmlFor="principal-slider">Starting Principal (P)</label>
              <span className="font-mono tabular-nums">${principal.toLocaleString()}</span>
            </div>
            <input
              id="principal-slider"
              type="range"
              min={100}
              max={10000}
              step={100}
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="mt-2 w-full accent-indigo-700 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700">
              <label htmlFor="rate-slider">Annual Growth Rate (r)</label>
              <span className="font-mono tabular-nums">{ratePct}% / yr</span>
            </div>
            <input
              id="rate-slider"
              type="range"
              min={1}
              max={20}
              step={0.5}
              value={ratePct}
              onChange={(e) => setRatePct(Number(e.target.value))}
              className="mt-2 w-full accent-indigo-700 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700">
              <label htmlFor="years-slider">Time Horizon (n years)</label>
              <span className="font-mono tabular-nums">{years} years</span>
            </div>
            <input
              id="years-slider"
              type="range"
              min={5}
              max={40}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="mt-2 w-full accent-indigo-700 cursor-pointer"
            />
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-700">
          <div className="font-semibold text-slate-900">Why Exponent n Matters Most</div>
          <p className="mt-1.5">
            In science, population ecology, and personal savings alike, compound growth curves upward
            sharply in later years because previous growth generates new growth. Notice how adding
            just 10 extra years often creates more value than doubling the starting amount.
          </p>
        </div>
      </div>
    </div>
  );
}
