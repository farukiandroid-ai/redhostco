import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import heroVisual from '../assets/hero-pc.jpeg';

const heroImageBlendStyle = {
  maskImage:
    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,127,126,0.38) 9%, rgba(239,68,68,0.8) 18%, rgba(0,0,0,1) 28%, rgba(0,0,0,1) 72%, rgba(239,68,68,0.72) 82%, rgba(255,255,255,0.2) 92%, rgba(255,255,255,0) 100%), linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(255,255,255,0) 100%)',
  WebkitMaskImage:
    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,127,126,0.38) 9%, rgba(239,68,68,0.8) 18%, rgba(0,0,0,1) 28%, rgba(0,0,0,1) 72%, rgba(239,68,68,0.72) 82%, rgba(255,255,255,0.2) 92%, rgba(255,255,255,0) 100%), linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(255,255,255,0) 100%)'
} as const;

const floatingCards = [
  { title: 'AI Solutions', icon: 'AI' },
  { title: 'Web Development', icon: 'Web' },
  { title: 'App Development', icon: 'App' },
  { title: 'Content Creation', icon: 'Content' }
];

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="scroll-mt-24 w-full bg-[#f5f1f1] px-6 pb-12 pt-6 lg:px-12">
      <div className="mx-auto max-w-[1320px] pt-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="pt-4 lg:pt-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2b2b2b] shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              Digital Studio • AI • Creative Technology
            </div>

            <h1 className="max-w-[650px] font-display text-[3rem] font-black leading-[0.88] tracking-[-0.07em] text-[#111111] sm:text-[4.5rem] md:text-[5.2rem] lg:text-[6rem]">
              Turn ideas into
              <br />
              digital <span className="text-red-500">products.</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-base leading-relaxed text-[#4b4b4b] sm:text-lg">
              We design and build websites, apps, AI-powered experiences, content and digital growth systems for modern brands.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(239,68,68,0.9)]"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-red-200 bg-white px-6 py-3 text-sm font-semibold text-[#111111] shadow-sm"
              >
                <span>Explore Services</span>
                <Layers className="h-4 w-4 text-red-500" />
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3 text-sm font-medium text-[#2d2d2d]">
              <div className="flex -space-x-2">
                {['R', 'H', 'A'].map((letter, index) => (
                  <div
                    key={letter + index}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f5f1f1] bg-gradient-to-br from-red-500 to-red-300 text-[10px] font-bold text-white"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <span>
                <span className="font-bold text-red-500">50+</span> Happy Clients
              </span>
            </div>
          </div>

          <div className="relative flex min-h-[520px] items-center justify-center overflow-visible lg:justify-end">
            <div className="pointer-events-none absolute inset-x-[-10%] inset-y-[8%] rounded-[50px] bg-[radial-gradient(circle_at_20%_35%,rgba(255,0,0,0.2),rgba(255,216,210,0.42)_18%,rgba(255,255,255,0.7)_36%,rgba(255,255,255,0)_68%)] blur-2xl" />

            <div className="relative z-10 h-[480px] w-full max-w-[760px] overflow-visible rounded-[38px] border border-[#f1d9d7]/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.2),rgba(255,218,214,0.4))] p-[1px] shadow-[0_22px_42px_-24px_rgba(239,68,68,0.34)] lg:h-[540px] lg:max-w-[820px]">
              <div className="relative h-full w-full overflow-hidden rounded-[37px] bg-[#f4efef]">
                <div className="absolute inset-0 rounded-[37px] bg-[linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0)_30%,rgba(239,68,68,0.06)_100%)]" />
                <div className="absolute inset-[10px] rounded-[30px] border border-white/50" />
                <img
                  src={heroVisual}
                  alt="Hero solution visual"
                  className="relative z-10 h-full w-full rounded-[30px] object-cover object-center select-none"
                  style={{
                    ...heroImageBlendStyle,
                    objectPosition: 'center center'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid max-w-[1200px] grid-cols-2 gap-4 rounded-[22px] bg-white/50 p-3 shadow-[0_20px_50px_-35px_rgba(17,24,39,0.18)] backdrop-blur-sm md:grid-cols-4">
          {[
            { value: '100+', label: 'Projects Completed' },
            { value: '50+', label: 'Happy Clients' },
            { value: '4.9', label: 'Client Satisfaction' },
            { value: '3+', label: 'Years Experience' }
          ].map((item) => (
            <div key={item.label} className="rounded-[18px] bg-[#fff7f5] p-4 text-center ring-1 ring-red-100">
              <div className="mb-2 flex items-center justify-center text-xl text-red-500">
                {item.label.includes('Years') ? '★' : item.label.includes('Projects') ? '👥' : item.label.includes('Clients') ? '✅' : '★'}
              </div>
              <div className="text-3xl font-extrabold tracking-[-0.06em] text-[#111111]">{item.value}</div>
              <div className="mt-1 text-sm text-[#4b4b4b]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
