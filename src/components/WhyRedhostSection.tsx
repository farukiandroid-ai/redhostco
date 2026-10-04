import React from 'react';
import { Palette, Terminal, Lightbulb, TrendingUp, Check, X } from 'lucide-react';
import { PHILOSOPHY_POINTS } from '../data/content';

export const WhyRedhostSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Palette':
        return Palette;
      case 'Terminal':
        return Terminal;
      case 'Lightbulb':
        return Lightbulb;
      default:
        return TrendingUp;
    }
  };

  const comparisonRows = [
    {
      metric: 'Delivery Velocity',
      traditional: '3 to 6 months in bloated meetings',
      redhost: '3 to 6 weeks linear sprint'
    },
    {
      metric: 'Architecture Quality',
      traditional: 'Outdated templates & generic page-builders',
      redhost: 'Modern TypeScript, Next.js & sub-10ms UI'
    },
    {
      metric: 'AI Implementation',
      traditional: 'Superficial ChatGPT iframe wrapper',
      redhost: 'Deterministic agentic pipelines & proprietary RAG'
    },
    {
      metric: 'Creative & Video Media',
      traditional: 'Static stock imagery & disconnected vendors',
      redhost: 'Direct-response viral short-form & 3D key visuals'
    }
  ];

  return (
    <section className="w-full py-20 lg:py-28 px-6 lg:px-12 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#90f1ff] text-[#006973] text-xs font-semibold tracking-wider uppercase">
            OUR PHILOSOPHY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171c26] tracking-tight">
            Technology meets creativity.
          </h2>
          <p className="text-sm sm:text-base text-[#484554] leading-relaxed">
            Most agencies are either slow design boutiques or cold engineering shops. We bridge the gap.
          </p>
        </div>

        {/* 4 Crisp Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PHILOSOPHY_POINTS.map((point) => {
            const Icon = getIcon(point.icon);
            return (
              <div
                key={point.title}
                className="p-8 rounded-3xl bg-[#f1f3ff] border border-slate-200/80 space-y-4 flex flex-col sm:flex-row items-start gap-6 hover:bg-[#e9edfc] transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[#5d3bce]" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl font-bold text-[#171c26]">
                      {point.title}
                    </h3>
                   
                  </div>
                  <p className="text-sm text-[#484554] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Comparison Matrix */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h4 className="font-display text-xl font-bold text-[#171c26]">
                The REDHOST Advantage
              </h4>
              <p className="text-xs text-[#484554] mt-0.5">
                How our modern studio methodology outpaces traditional legacy agencies
              </p>
            </div>
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-[#e7deff] text-[#5d3bce] text-xs font-semibold">
              Engineered for Speed
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-mono uppercase text-[11px]">
                  <th className="py-3 px-4">Evaluation Dimension</th>
                  <th className="py-3 px-4 text-slate-500">Legacy Agency Model</th>
                  <th className="py-3 px-4 text-[#5d3bce] font-bold">REDHOST Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#171c26]">{row.metric}</td>
                    <td className="py-3.5 px-4 text-slate-500 flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="py-3.5 px-4 text-[#171c26] font-semibold">
                      <div className="flex items-center gap-2 text-[#5d3bce]">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.redhost}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
