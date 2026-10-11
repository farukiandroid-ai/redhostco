import React, { useState } from 'react';
import { Smartphone, Video, TrendingUp, Cpu, ChevronRight, Check } from 'lucide-react';

interface CapabilitiesBarProps {
  onSelectCategory?: (category: string) => void;
}

export const CapabilitiesBar: React.FC<CapabilitiesBarProps> = ({ onSelectCategory }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const capabilities = [
    {
      num: '01',
      title: 'Digital Products',
      subtitle: 'Web • Apps • AI',
      desc: 'High-performance frontend and native architectural execution engineered for scale.',
      icon: Smartphone,
      categoryKey: 'web-app',
      accent: '#5d3bce',
      bgPill: 'bg-[#e7deff]',
      textPill: 'text-[#5d3bce]',
      highlights: ['Next.js / React 19', 'Mobile Apps (iOS & Android)', 'Sub-10ms UI Latency']
    },
    {
      num: '02',
      title: 'Creative Content',
      subtitle: 'UGC • Social • Video',
      desc: 'Algorithm-tailored short-form media and dynamic viral aesthetic assets.',
      icon: Video,
      categoryKey: 'content',
      accent: '#006973',
      bgPill: 'bg-[#90f1ff]',
      textPill: 'text-[#006973]',
      highlights: ['TikTok / Reels Direct Response', '3D Visuals & Renders', 'High-Converting Hooks']
    },
    {
      num: '03',
      title: 'Digital Growth',
      subtitle: 'Promotion • Management',
      desc: 'Full-funnel performance marketing, conversion engineering, and semantic SEO.',
      icon: TrendingUp,
      categoryKey: 'growth',
      accent: '#141923',
      bgPill: 'bg-[#e4e0f4]',
      textPill: 'text-[#171c26]',
      highlights: ['Creative Velocity Testing', 'Conversion Optimization (CRO)', 'Cross-channel Scaling']
    },
    {
      num: '04',
      title: 'AI Tools & Automation',
      subtitle: 'Tools • Automation • Training',
      desc: 'AI-powered solutions, smart automation, improve productivity, and scale your business.',
      icon: Cpu,
      categoryKey: 'ai',
      accent: '#7657e8',
      bgPill: 'bg-[#cbbeff]/60',
      textPill: 'text-[#5d3bce]',
      highlights: ['AI Business Integration', 'Smart Workflow Automation', 'Hands-on AI Training']
    }
  ];

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-[#0e1015] border-y border-red-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = activeCard === idx;

            return (
              <div
                key={item.num}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => {
                  if (onSelectCategory) {
                    onSelectCategory(item.categoryKey);
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`group p-6 rounded-2xl bg-[#12161d] hover:bg-[#181e28] transition-all duration-300 border cursor-pointer flex flex-col justify-between space-y-4 relative ${
                  isHovered
                    ? 'border-red-400/40 shadow-md -translate-y-1'
                    : 'border-red-500/10 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`w-11 h-11 rounded-xl ${item.bgPill} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className={`w-5 h-5 ${item.textPill}`} />
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-red-400 transition-colors">
                    {item.num}
                  </span>
                </div>

                <div>
                  <div className="font-display text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </div>
                  <div className={`text-xs font-semibold mt-0.5 mb-2 ${item.textPill}`}>
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-700/80 space-y-1">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-200">
                        <Check className="w-3 h-3 text-red-400 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] font-semibold text-red-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
