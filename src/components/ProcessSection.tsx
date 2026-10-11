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
    <section id="process" className="w-full bg-[#f7efef] px-6 py-20 text-[#191919] lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-[11px] font-semibold tracking-[0.18em] uppercase border border-red-200">
            Our Working Process
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.05em] text-[#191919]">
            A simple process. A clear outcome.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setSelectedStep(idx)}
                className={`rounded-[1.5rem] border p-5 text-left transition-all duration-300 ${
                  isSelected
                    ? 'border-red-300 bg-[#fff3f2] shadow-[0_18px_45px_-32px_rgba(180,35,35,0.3)]'
                    : 'border-[#e7e7e4] bg-white hover:border-red-200 hover:shadow-[0_18px_45px_-32px_rgba(180,35,35,0.18)]'
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-display text-4xl font-black tracking-[-0.06em] text-red-600">{step.step}</span>
                  <span className="rounded-full border border-red-200 bg-red-50 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-red-700">
                    {step.phase}
                  </span>
                </div>

                <h3 className="mb-2 font-display text-xl font-bold text-[#191919]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#737373]">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
