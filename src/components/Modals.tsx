import React from 'react';
import { X, Check, ArrowRight, Clock, Layers, Cpu, Award } from 'lucide-react';
import { ServiceItem, CaseStudy } from '../types';

interface ServiceBlueprintModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForInquiry: (serviceId: string) => void;
}

export const ServiceBlueprintModal: React.FC<ServiceBlueprintModalProps> = ({
  service,
  onClose,
  onSelectForInquiry
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#5d3bce] font-semibold">
              SERVICE BLUEPRINT
            </span>
            <h3 className="font-display text-2xl font-bold text-[#171c26] mt-1">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Narrative Description */}
        <p className="text-sm text-[#484554] leading-relaxed">
          {service.fullDesc}
        </p>

        {/* Core Deliverables */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-[#171c26] uppercase tracking-wider">
            Verified Deliverables
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#f1f3ff] flex items-center gap-2.5 text-xs text-slate-800"
              >
                <Check className="w-4 h-4 text-[#5d3bce] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-[#171c26] uppercase tracking-wider">
            Production Technology Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-100 font-mono text-xs text-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline & SLA Banner */}
        <div className="p-4 rounded-2xl bg-[#f9f9ff] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-[#171c26]">
            <Clock className="w-4 h-4 text-[#006973]" />
            <span>Typical Deployment Timeline: <strong>{service.typicalTimeline}</strong></span>
          </div>

          <button
            onClick={() => {
              onSelectForInquiry(service.id);
              onClose();
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
            type="button"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#5d3bce] text-white text-xs font-bold hover:bg-[#7657e8] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Initiate This Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onSelectForInquiry: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  study,
  onClose,
  onSelectForInquiry
}) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#5d3bce] font-semibold">
              {study.category} • {study.year}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#171c26] mt-1">
              {study.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Client: <span className="font-semibold text-slate-800">{study.client}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-[#171c26] uppercase tracking-wider">
            Executive Summary
          </div>
          <p className="text-sm text-[#484554] leading-relaxed">
            {study.overview}
          </p>
        </div>

        {/* Quantified Outcome Metrics */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-[#171c26] uppercase tracking-wider">
            Quantified Business Impact
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {study.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#f1f3ff] border border-slate-200/80">
                <div className="text-xs text-slate-500 font-medium">{m.label}</div>
                <div className="font-display text-2xl font-bold text-[#171c26] mt-1 tabular-nums">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-600 mt-1">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Deliverables */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-[#171c26] uppercase tracking-wider">
            Shipped Architecture & Artifacts
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {study.deliverables.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 flex items-center gap-2.5 text-xs text-slate-800">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-5 rounded-2xl bg-[#141923] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold">Interested in similar outcomes?</div>
            <div className="text-xs text-slate-300">
              We deploy senior engineers and creative directors to deliver your product.
            </div>
          </div>
          <button
            onClick={() => {
              onSelectForInquiry();
              onClose();
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
            type="button"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#5d3bce] text-white text-xs font-bold hover:bg-[#7657e8] transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Start a Similar Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
