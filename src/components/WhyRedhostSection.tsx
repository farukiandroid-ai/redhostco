import React from 'react';
import { Palette, Terminal, Lightbulb, TrendingUp, Check, ArrowRight } from 'lucide-react';
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

  const features = [
    { title: 'Creative & Strategic Approach', description: 'Turning ideas into high-converting brand experiences.', icon: Palette },
    { title: 'Modern Technology', description: 'Using the latest tools, design systems, and AI automation.', icon: Terminal },
    { title: 'Dedicated Support', description: 'We work with you every step, even after delivery.', icon: Lightbulb },
    { title: 'Expertise That Delivers', description: 'Built for impact, growth, and performance.', icon: TrendingUp }
  ];

  return (
    <section className="w-full bg-[#f7efef] px-6 py-20 text-[#111111] lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1320px] grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-500">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            Why REDHOST
          </div>

          <h2 className="font-display text-3xl font-black tracking-[-0.06em] text-[#111111] sm:text-4xl lg:text-[4rem]">
            Your idea <br /> deserves better.
          </h2>

          <div className="space-y-4 pt-2">
            {features.slice(0, 2).map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-start gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-red-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff3f1] text-red-500">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold text-[#111111]">{feature.title}</div>
                    <p className="text-sm text-[#555]">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[28px] bg-white p-4 shadow-[0_25px_70px_-35px_rgba(239,68,68,0.5)] ring-1 ring-red-100">
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-[24px] bg-[#fff8f6] p-5 ring-1 ring-red-100">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-[#111111]">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[#555]">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_-16px_rgba(239,68,68,0.9)]"
            >
              Let’s Build Something Amazing
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
