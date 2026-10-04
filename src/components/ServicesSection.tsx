import React, { useState } from 'react';
import {
  Globe,
  Smartphone,
  Cpu,
  Film,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  selectedCategoryFilter?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  selectedCategoryFilter = 'all'
}) => {
  const [filter, setFilter] = useState<string>(selectedCategoryFilter);

  // Sync if parent passes changed category
  React.useEffect(() => {
    if (selectedCategoryFilter) {
      setFilter(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  const filterTabs = [
    { id: 'all', label: 'All Services (6)' },
    { id: 'web-app', label: 'Web & Apps' },
    { id: 'ai', label: 'AI Systems' },
    { id: 'content', label: 'Creative Content' },
    { id: 'growth', label: 'Growth Marketing' }
  ];

  const filteredServices =
    filter === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === filter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return Globe;
      case 'Smartphone':
        return Smartphone;
      case 'Cpu':
        return Cpu;
      case 'Film':
        return Film;
      case 'TrendingUp':
        return TrendingUp;
      case 'GraduationCap':
        return GraduationCap;
      default:
        return Layers;
    }
  };

  return (
    <section id="services" className="w-full py-20 lg:py-28 px-6 lg:px-12 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e7deff] text-[#5d3bce] text-xs font-semibold tracking-wider uppercase">
              OUR CAPABILITIES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171c26] tracking-tight">
              Everything you need to build a digital presence.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#484554] max-w-md leading-relaxed">
            From first idea to final launch, REDHOST combines technology, design, AI and digital creativity to forge undeniable leverage.
          </p>
        </div>

        {/* Interactive Segmented Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#f1f3ff] rounded-2xl w-fit border border-slate-200/70">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? 'bg-white text-[#171c26] shadow-sm border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = getIcon(service.icon);
            const isAi = service.category === 'ai';
            const isWeb = service.category === 'web-app';
            const isContent = service.category === 'content';

            const accentBadge = isAi
              ? 'bg-[#cbbeff]/50 text-[#5d3bce]'
              : isWeb
              ? 'bg-[#e7deff] text-[#5d3bce]'
              : isContent
              ? 'bg-[#90f1ff]/60 text-[#006973]'
              : 'bg-[#e4e0f4] text-[#171c26]';

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-white p-8 shadow-xs border border-slate-200/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Micro hover gradient top line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#7657e8] to-[#38c4d4] rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl ${accentBadge} flex items-center justify-center transition-colors duration-300 group-hover:bg-[#5d3bce] group-hover:text-white`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 group-hover:text-[#5d3bce] transition-colors">
                      {service.typicalTimeline}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#171c26] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#484554] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Capabilities Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-[#f1f3ff] text-slate-700 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-8 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    type="button"
                    className="text-xs font-bold text-[#5d3bce] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Inspect Blueprint & Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
