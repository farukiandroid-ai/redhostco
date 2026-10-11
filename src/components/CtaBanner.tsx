import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative isolate w-full overflow-hidden border-y border-slate-200/80 bg-[linear-gradient(135deg,#f6f8ff_0%,#edf4ff_38%,#fafdff_100%)] py-20 lg:py-28 px-6 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_50%,rgba(93,59,206,0.08),transparent_34%),radial-gradient(ellipse_at_15%_30%,rgba(56,196,212,0.10),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-end gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe8f7] bg-[#eaf7ff] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#006973] shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NEXT-GEN COLLABORATION</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.12]">
              Have an idea? <br />
              Let’s build it.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Tell us what you want to create. We’ll turn the idea into a clear digital direction with engineering rigor and market impact.
            </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col xl:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d93a33] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_-14px_rgba(217,58,51,0.65)] transition-all duration-200 hover:bg-[#bf2f2b] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
          </div>
      </div>
    </section>
  );
};
