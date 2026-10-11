import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Send,
  CheckCircle2,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialBudget?: string;
  initialDetails?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'website',
  initialBudget = '10-25k',
  initialDetails = ''
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(initialService);
  const [budget, setBudget] = useState(initialBudget);
  const [details, setDetails] = useState(initialDetails);

  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialBudget) setBudget(initialBudget);
    if (initialDetails) setDetails(initialDetails);
  }, [initialService, initialBudget, initialDetails]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Please enter your name and work email.');
      return;
    }
    setErrorMsg('');
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setService('website');
    setBudget('10-25k');
    setDetails('');
    setStatus('idle');
  };

  return (
    <section id="contact" className="w-full py-20 lg:py-28 px-6 lg:px-12 bg-[#f7f3f4] border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e7deff] text-[#5d3bce] text-xs font-semibold tracking-wider uppercase">
            INITIATE CONTACT
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171c26] tracking-tight">
            Let’s discuss your next breakthrough.
          </h2>
          <p className="text-sm sm:text-base text-[#484554] leading-relaxed">
            Complete the project intake below and a senior partner will respond with an architecture overview and estimate within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-8">
              <h3 className="font-display text-2xl font-bold text-[#171c26]">
                Direct Channels
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e7deff] flex items-center justify-center text-[#5d3bce] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#484554] font-semibold">
                      Direct Inquiries
                    </div>
                    <a
                      href="mailto:redhost.tech@gmail.com"
                      className="text-base sm:text-lg font-bold text-[#171c26] hover:text-[#5d3bce] transition-colors"
                    >
                      redhost.tech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#90f1ff] flex items-center justify-center text-[#006973] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#484554] font-semibold">
                      Phone
                    </div>
                    <a
                      href="tel:+917002217401"
                      className="text-base sm:text-lg font-bold text-[#171c26] hover:text-[#006973] transition-colors"
                    >
                      +91 7002217401
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f1f3ff] flex items-center justify-center text-slate-800 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#484554] font-semibold">
                      Location
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-[#171c26]">
                      Guwahati, Assam, India- 781028
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="text-xs uppercase tracking-wider text-[#484554] mb-3 font-semibold">
                  Network
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Instagram'].map((net) => (
                    <a
                      key={net}
                      href="https://www.instagram.com/redhost.ai?stkn=MXd3bmp6bnIyeDdjNw=="
                      className="px-3 py-1.5 rounded-lg bg-[#f1f3ff] hover:bg-[#5d3bce] hover:text-white transition-colors text-xs font-semibold text-slate-700"
                    >
                      {net}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xl relative">
              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#171c26]">
                    Enquiry Transmitted
                  </h3>
                  <p className="text-sm text-[#484554] max-w-md leading-relaxed">
                    Thank you, {name || 'Partner'}. Your inquiry has been routed to REDHOST senior architects. We review scopes and respond within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    type="button"
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#141923] text-white text-xs font-semibold hover:bg-[#5d3bce] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#171c26]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                        className="w-full h-11 px-4 rounded-xl bg-white border border-slate-200/90 text-sm text-[#171c26] placeholder:text-slate-400 focus:border-[#5d3bce] focus:ring-2 focus:ring-[#5d3bce]/15 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#171c26]">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        required
                        className="w-full h-11 px-4 rounded-xl bg-white border border-slate-200/90 text-sm text-[#171c26] placeholder:text-slate-400 focus:border-[#5d3bce] focus:ring-2 focus:ring-[#5d3bce]/15 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#171c26]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91"
                        className="w-full h-11 px-4 rounded-xl bg-white border border-slate-200/90 text-sm text-[#171c26] placeholder:text-slate-400 focus:border-[#5d3bce] focus:ring-2 focus:ring-[#5d3bce]/15 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#171c26]">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder=""
                        className="w-full h-11 px-4 rounded-xl bg-white border border-slate-200/90 text-sm text-[#171c26] placeholder:text-slate-400 focus:border-[#5d3bce] focus:ring-2 focus:ring-[#5d3bce]/15 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#171c26]">
                      Service Needed
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl bg-white border border-slate-200/90 text-sm text-[#171c26] focus:border-[#5d3bce] focus:ring-2 focus:ring-[#5d3bce]/15 outline-none transition-all cursor-pointer"
                    >
                      <option value="website">Website Development & Flagships</option>
                      <option value="app">App Development (Web & Mobile)</option>
                      <option value="ai-solutions">AI Solutions & Automated Workflows</option>
                      <option value="content">Digital Content Creation & UGC</option>
                      <option value="promotion">Social Media & Online Promotion</option>
                      <option value="training">AI Tools & Corporate Training</option>
                      <option value="other">Multi-disciplinary Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#171c26]">
                      Project Details
                    </label>
                    <textarea
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      rows={4}
                      placeholder="Briefly describe your objectives, timelines, and current technology stack..."
                      className="w-full p-4 rounded-xl bg-white border border-slate-200/90 text-sm text-[#171c26] placeholder:text-slate-400 focus:border-[#5d3bce] focus:ring-2 focus:ring-[#5d3bce]/15 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 px-8 rounded-xl bg-[#141923] text-white text-sm font-bold transition-all duration-300 hover:bg-[#5d3bce] hover:shadow-[0_8px_20px_-4px_rgba(118,87,232,0.4)] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Transmitting to Senior Architects...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Enquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
