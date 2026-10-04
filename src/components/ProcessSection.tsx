import React, { useState } from 'react';
import { CheckCircle2, Clock, Terminal, Layers, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const stepDetails = [
    {
      tools: ['Figma', 'Linear', 'Notion Architecture', 'Loom'],
      clientTime: '2 hours / week for alignment',
      keyArtifact: 'Technical Architecture Specification & Wireframes'
    },
    {
      tools: ['Figma Tokens', 'Interactive Prototypes', 'Design System Library'],
      clientTime: '3 hours / week for visual feedback',
      keyArtifact: 'Production Figma Components & Motion Specs'
    },
    {
      tools: ['Next.js / React 19', 'TypeScript', 'Tailwind', 'GitHub CI/CD'],
      clientTime: 'Weekly staging review sprint',
      keyArtifact: 'Full-featured Staging Environment & Test Coverage'
    },
    {
      tools: ['Vercel Enterprise', 'PostHog', 'Core Web Vitals Monitor'],
      clientTime: 'Final go-live sign-off',
      keyArtifact: 'Zero-Downtime Deployment & Handover Training'
    }
  ];

  return (
    <section id="process" className="w-full py-20 lg:py-28 px-6 lg:px-12 bg-[radial-gradient(circle_at_top,_rgba(143,185,255,0.14),transparent_30%),linear-gradient(180deg,#f6f8ff_0%,#f9fbff_100%)]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dff9ff] text-[#006973] text-xs font-semibold tracking-wider uppercase ring-1 ring-[#bfeef6] shadow-sm">
            METHODOLOGY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            A simple process. A clear outcome.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We strip out bloated agency layers and replace them with rapid, linear execution.
          </p>
        </div>

        {/* 4-Step Horizontal Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setSelectedStep(idx)}
                className={`rounded-3xl bg-white p-8 shadow-xs border transition-all duration-300 flex flex-col justify-between space-y-6 relative cursor-pointer ${
                  isSelected
                    ? 'border-[#5d3bce] shadow-lg ring-2 ring-[#5d3bce]/15 -translate-y-1'
                    : 'border-slate-200/80 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      style={{ color: step.color }}
                      className="font-display text-3xl font-extrabold tabular-nums"
                    >
                      {step.step}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold ${
                        idx === 0
                          ? 'bg-[#e7deff] text-[#5d3bce]'
                          : idx === 1
                          ? 'bg-[#90f1ff] text-[#006973]'
                          : idx === 2
                          ? 'bg-[#f1f3ff] text-slate-700'
                          : 'bg-[#cbbeff]/60 text-[#5d3bce]'
                      }`}
                    >
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#171c26]">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#484554] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1">
                  <div className="text-[11px] font-bold text-[#171c26]">
                    Deliverable:
                  </div>
                  <div
                    style={{ color: step.color }}
                    className="text-xs font-semibold leading-snug"
                  >
                    {step.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Detailed Deep-Dive Card */}
        
      </div>
    </section>
  );
};
