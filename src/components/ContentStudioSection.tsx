import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  TrendingUp,
  RotateCw,
  Film,
  Music,
  SlidersHorizontal
} from 'lucide-react';

export const ContentStudioSection: React.FC = () => {
  // Interactive Soundwave State
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(true);
  const [audioTempo, setAudioTempo] = useState<'1.0x' | '1.25x' | '1.5x'>('1.0x');
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Interactive ROAS Calculator State
  const [adSpend, setAdSpend] = useState<number>(10000);
  const estimatedRevenue = adSpend * 4.8;

  // 3D Object Rotation State
  const [rotationAngle, setRotationAngle] = useState<number>(-6);

  return (
    <section id="content" className="w-full py-20 lg:py-28 px-6 lg:px-12 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#90f1ff] text-[#006973] text-xs font-semibold tracking-wider uppercase">
              ATTENTION-DRIVEN CREATIVE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171c26] tracking-tight">
              Content designed for attention.
            </h2>
            <p className="text-sm sm:text-base text-[#484554] leading-relaxed">
              From concept to content, we help brands create digital assets that look modern, relevant and platform-ready.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#141923] text-white text-xs font-semibold hover:bg-[#5d3bce] transition-colors shadow-sm shrink-0"
          >
            <span>Create With Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Dynamic Social Media Aesthetic Visual Mosaic (5-Tile Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Tile 1: Instagram Reel Preview (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-white p-6 shadow-xs border border-slate-200/80 flex flex-col justify-between group hover:shadow-lg transition-all">
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#5d3bce] to-[#006973] flex items-center justify-center text-white font-bold text-xs">
                  R
                </span>
                <div>
                  <div className="text-xs font-bold text-[#171c26]">@redhost.ai</div>
                  <div className="text-[10px] text-slate-500">Instagram Trending</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#f1f3ff] font-mono text-[11px] text-[#5d3bce] font-bold">
                84.2k Views
              </span>
            </div>

            <div className="h-64 rounded-2xl bg-gradient-to-b from-[#7657e8]/15 via-[#f1f3ff] to-[#7657e8]/20 relative overflow-hidden flex items-center justify-center p-6 text-center border border-slate-100">
              <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md shadow-md flex items-center justify-center text-[#5d3bce] group-hover:scale-110 transition-transform">
                <Film className="w-8 h-8" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-left bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/80 shadow-xs">
                <div className="text-xs font-bold text-[#171c26]">
                  3 Web Design Secrets Every Founder Ignores
                </div>
                <div className="text-[10px] text-slate-500 flex items-center gap-2 mt-1 font-mono">
                  <span>• Original Audio</span>
                  <span>• 2.8k Saves</span>
                  <span className="text-[#006973] font-semibold">• High Retention</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tile 2: UGC Direct Response & ROAS Simulator (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-white p-6 shadow-xs border border-slate-200/80 flex flex-col justify-between group hover:shadow-lg transition-all">
            <div className="flex items-center justify-between pb-3">
              <span className="px-2 py-0.5 rounded-md bg-[#90f1ff] text-[#006973] text-[11px] font-semibold uppercase">
                UGC Direct Response
              </span>
              <span className="font-mono text-xs font-bold text-[#006973]">ROAS: 4.8x</span>
            </div>

            <div className="h-64 rounded-2xl bg-[#f1f3ff] p-5 flex flex-col justify-between border border-slate-200/70 relative overflow-hidden">
              <div className="bg-[#141923] text-white p-3 rounded-xl text-xs font-bold shadow-md">
                "Stop building SaaS apps with boring 2021 landing pages..."
              </div>

              {/* Interactive ROAS Calculator */}
              <div className="bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-600 font-medium">Monthly Ad Spend:</span>
                  <span className="font-mono font-bold text-[#171c26]">
                    ₹{(adSpend / 1000).toFixed(0)}k
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="50000"
                  step="5000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(parseInt(e.target.value))}
                  className="w-full accent-[#006973] cursor-pointer"
                />
                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-100">
                  <span className="text-slate-500">Projected Pipeline:</span>
                  <span className="font-mono font-extrabold text-[#006973] tabular-nums">
                    ₹{(estimatedRevenue / 1000).toFixed(1)}k
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-md p-2 rounded-xl text-xs border border-white/60">
                <div className="w-6 h-6 rounded-full bg-[#006973] flex items-center justify-center text-white font-bold text-[10px]">
                  C
                </div>
                <span className="font-bold text-[#171c26]">Creator Verified</span>
              </div>
            </div>
          </div>

          {/* Tile 3: 3D Product Render Graphic (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-white p-6 shadow-xs border border-slate-200/80 flex flex-col justify-between group hover:shadow-lg transition-all">
            <div className="flex items-center justify-between pb-4">
              <span className="px-2 py-0.5 rounded-md bg-[#e7deff] text-[#5d3bce] text-[11px] font-semibold uppercase">
                3D Key Visual
              </span>
              <button
                onClick={() => setRotationAngle((prev) => (prev === -6 ? 12 : -6))}
                className="flex items-center gap-1 font-mono text-[11px] text-slate-500 hover:text-[#5d3bce] cursor-pointer"
                title="Rotate 3D perspective"
              >
                <RotateCw className="w-3 h-3" />
                <span>Rotate</span>
              </button>
            </div>

            <div className="h-64 rounded-2xl bg-gradient-to-tr from-[#dee2f1] via-[#e9edfc] to-[#90f1ff]/30 flex items-center justify-center relative overflow-hidden border border-slate-200/60">
              {/* Stylized 3D Glass Object with dynamic transform */}
              <div
                style={{ transform: `rotate(${rotationAngle}deg)` }}
                className="w-36 h-48 rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/90 shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-500 cursor-pointer"
                onClick={() => setRotationAngle((prev) => prev + 45)}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7657e8] to-[#38c4d4] flex items-center justify-center text-white mb-2 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="font-bold text-xs text-[#171c26]">REDHOST O₂</span>
                <span className="text-[10px] text-slate-500 font-mono mt-1">ESSENTIAL SERUM</span>
                <span className="text-[8px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded mt-3">
                  Click to Spin
                </span>
              </div>
            </div>
          </div>

          {/* Tile 4: AI Concept Poster (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-white p-6 shadow-xs border border-slate-200/80 flex flex-col justify-between group hover:shadow-lg transition-all">
            <div className="flex items-center justify-between pb-4">
              <span className="text-xs font-bold text-[#171c26]">AI Concept Poster Generator</span>
              <span className="text-[11px] text-[#5d3bce] font-mono font-semibold">
                MIDJOURNEY v6.1 STAGED
              </span>
            </div>

            <div className="h-44 rounded-2xl bg-gradient-to-r from-[#7657e8]/15 via-[#f1f3ff] to-[#006973]/15 p-6 flex items-center justify-between border border-slate-200/70">
              <div className="space-y-2 max-w-sm">
                <span className="px-2 py-0.5 rounded bg-[#5d3bce] text-white text-[10px] font-bold uppercase">
                  Prompt System
                </span>
                <h4 className="font-display text-lg font-bold text-[#171c26]">
                  Algorithmic Aesthetic Synthesis
                </h4>
                <p className="text-xs text-[#484554] leading-relaxed">
                  Automated editorial billboard and social banner generation at sub-minute scale.
                </p>
              </div>

              {/* Poster thumbnail */}
              <div className="w-24 h-32 rounded-xl bg-white shadow-md border border-white/90 p-2 flex flex-col justify-between transform rotate-2 group-hover:rotate-0 transition-transform shrink-0">
                <div className="w-full h-18 bg-gradient-to-br from-[#5d3bce] to-[#38c4d4] rounded"></div>
                <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                <div className="h-1.5 w-1/2 bg-slate-100 rounded"></div>
              </div>
            </div>
          </div>

          {/* Tile 5: Viral Short-Form Video with Interactive Soundwave (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-white p-6 shadow-xs border border-slate-200/80 flex flex-col justify-between group hover:shadow-lg transition-all">
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-bold text-[#171c26]">
                High-Conversion Dynamic Soundwave
              </span>
              <span className="text-[11px] text-[#006973] font-mono font-semibold">
                RETENTION 82%
              </span>
            </div>

            <div className="h-44 rounded-2xl bg-[#f1f3ff] p-5 flex flex-col justify-between border border-slate-200/70">
              {/* Audio Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-8 h-8 rounded-full bg-[#141923] text-white flex items-center justify-center hover:bg-[#5d3bce] transition-colors cursor-pointer"
                    title={isPlayingAudio ? 'Pause Visualizer' : 'Play Visualizer'}
                  >
                    {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-xs font-bold text-[#171c26]">Sound Design • Pacing</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Tempo Pills */}
                  <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200 text-[10px] font-mono">
                    {(['1.0x', '1.25x', '1.5x'] as const).map((tempo) => (
                      <button
                        key={tempo}
                        onClick={() => setAudioTempo(tempo)}
                        className={`px-1.5 py-0.5 rounded cursor-pointer ${
                          audioTempo === tempo
                            ? 'bg-[#5d3bce] text-white font-bold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {tempo}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 rounded text-slate-500 hover:text-slate-800"
                    title="Toggle Audio Simulation"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#006973]" />}
                  </button>
                </div>
              </div>

              {/* Animated Frequency Bars */}
              <div className="flex items-end gap-1.5 h-16 w-full pt-2">
                {[30, 60, 100, 85, 50, 70, 95, 40, 80, 55, 90, 35, 65, 88, 45, 92].map(
                  (height, i) => (
                    <div
                      key={i}
                      style={{
                        height: isPlayingAudio ? `${height}%` : '20%',
                        animationDuration:
                          audioTempo === '1.5x' ? '0.5s' : audioTempo === '1.25x' ? '0.8s' : '1.2s'
                      }}
                      className={`flex-1 rounded-full transition-all duration-300 ${
                        i % 2 === 0
                          ? 'bg-[#5d3bce]'
                          : i % 3 === 0
                          ? 'bg-[#006973]'
                          : 'bg-[#7657e8]/60'
                      } ${isPlayingAudio ? 'animate-pulse' : 'opacity-40'}`}
                    ></div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
