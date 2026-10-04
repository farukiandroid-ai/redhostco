import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import heroVisual from '../assets/hero-image.jpeg';

export const HeroSection: React.FC = () => {

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 px-6 lg:px-12 bg-gradient-to-b from-[#f9f9ff] via-[#f1f3ff] to-[#f9f9ff]"
    >
      {/* Ambient Radial Energy Flares */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#7657e8]/12 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>
      <div className="absolute top-32 right-8 w-[450px] h-[450px] bg-[#38c4d4]/12 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Narrative (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 shadow-sm border border-slate-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38c4d4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006973]"></span>
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#171c26] font-semibold">
              DIGITAL STUDIO • AI • CREATIVE TECHNOLOGY
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171c26] leading-[1.12]">
            Turn ideas into <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7657e8] via-[#5d3bce] to-[#006973]">
              digital products.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-[#484554] max-w-xl leading-relaxed">
            We design and build websites, apps, AI-powered experiences, content and digital growth systems for modern brands.
          </p>

          {/* CTA Action Group */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#141923] text-white font-medium text-sm transition-all duration-300 hover:bg-[#5d3bce] hover:shadow-[0_8px_20px_-4px_rgba(118,87,232,0.4)] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#171c26] font-medium text-sm shadow-sm border border-slate-200 hover:bg-[#f1f3ff] hover:text-[#5d3bce] transition-all duration-200 active:scale-[0.98]"
            >
              <span>Explore Services</span>
              <Layers className="w-4 h-4 text-[#5d3bce]" />
            </a>

          </div>

          {/* Trust Meta Tagline */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border-t border-slate-200/80 w-full max-w-lg">
            <span className="text-xs uppercase tracking-widest text-[#484554]/80 font-mono font-medium">
              Core Capabilities:
            </span>
            <div className="flex items-center gap-2.5 text-xs text-[#171c26] font-medium">
              <span className="hover:text-[#5d3bce] cursor-pointer">Web Designing</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-[#5d3bce] cursor-pointer">Mobile Apps</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-[#5d3bce] cursor-pointer">AI Content Creation</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-[#5d3bce] cursor-pointer">Creative Media</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-[#5d3bce] cursor-pointer">Digital Growth</span>
            </div>
          </div>
        </div>

        {/* Right Column: Product Visual */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center pt-4 lg:pt-0">
          <div className="relative w-full max-w-[560px] rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(225,233,255,0.68),rgba(214,247,255,0.7))] p-3 shadow-[0_28px_60px_-26px_rgba(92,75,170,0.27)] backdrop-blur-sm">
            <div className="absolute inset-8 rounded-[1.5rem] bg-gradient-to-br from-[#e9e3ff]/80 via-[#dffcff]/70 to-white blur-3xl" />
            <img
              src={heroVisual}
              alt="REDHOST Studio product showcase"
              className="relative w-full h-auto rounded-[1.4rem] object-cover shadow-[0_26px_55px_-24px_rgba(15,23,42,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
