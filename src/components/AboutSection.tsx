import React from 'react';
import { CheckCircle2, Rocket, Star, Cpu, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 lg:py-28 px-6 lg:px-12 bg-[#f1f3ff]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Narrative Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e7deff] text-[#5d3bce] text-xs font-semibold tracking-wider uppercase">
            WHO WE ARE
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171c26] tracking-tight">
            Built for the new digital era.
          </h2>

          <p className="text-base sm:text-lg text-[#484554] leading-relaxed">
            REDHOST is a digital technology and creative platform focused on building modern digital experiences through design, development, AI and content. We partner with founders, forward-thinking enterprises, and modern creators to translate ambitious ideas into durable software and engaging digital identities.
          </p>

          <div className="flex items-center gap-3 pt-2 text-xs font-medium text-slate-600">
            <MapPin className="w-4 h-4 text-[#5d3bce]" />
            <span>Guwahati, Assam, India- 781028</span>
          </div>
        </div>

        {/* Operational Metrics (5 cols) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between h-40 hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-6 h-6 text-[#006973]" />
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#171c26] tabular-nums">
                99.8%
              </div>
              <div className="text-xs text-[#484554] font-medium mt-0.5">
                On-time Delivery Rate
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between h-40 hover:shadow-md transition-shadow">
            <Rocket className="w-6 h-6 text-[#5d3bce]" />
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#171c26] tabular-nums">
                35+
              </div>
              <div className="text-xs text-[#484554] font-medium mt-0.5">
                Active Deployments
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between h-40 hover:shadow-md transition-shadow">
            <Star className="w-6 h-6 text-[#7657e8] fill-[#7657e8]" />
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#171c26] tabular-nums">
                4.9<span className="text-base font-normal text-slate-400">/5</span>
              </div>
              <div className="text-xs text-[#484554] font-medium mt-0.5">
                Client Trust Score
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between h-40 hover:shadow-md transition-shadow">
            <Cpu className="w-6 h-6 text-[#006973]" />
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#171c26] tabular-nums">
                22+
              </div>
              <div className="text-xs text-[#484554] font-medium mt-0.5">
                AI workshop sessions and consultations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
