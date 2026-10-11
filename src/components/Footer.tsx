import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Clock, Globe, X } from 'lucide-react';
import redhostLogo from '../assets/1-mainlogo.jpg';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const privacyCloseRef = React.useRef<HTMLButtonElement | null>(null);
  const termsCloseRef = React.useRef<HTMLButtonElement | null>(null);

  // Live Studio Clocks
  const [sfTime, setSfTime] = useState('');
  const [londonTime, setLondonTime] = useState('');

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setSfTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
      setLondonTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!privacyOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    privacyCloseRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPrivacyOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [privacyOpen]);

  useEffect(() => {
    if (!termsOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    termsCloseRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setTermsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [termsOpen]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#f5f0f1] pt-16 pb-12 text-slate-700 shadow-[0_-1px_12px_rgba(15,23,42,0.04)] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          <div className="lg:col-span-2 space-y-5">
            <a href="#hero" className="flex items-center">
              <img
                src={redhostLogo}
                alt="REDHOST Studio Logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-sm text-[#484554] max-w-sm leading-relaxed">
              Digital experiences, built for what’s next. Combining engineering discipline, generative AI, and editorial storytelling.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#171c26] mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-[#484554]">
              {['Home', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Home' ? '#hero' : item === 'Services' ? '#services' : '#contact'}
                    className="hover:text-[#5d3bce] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#171c26] mb-4">
              Services
            </div>
            <ul className="space-y-2.5 text-xs text-[#484554]">
              {[
                'Website Development',
                'App Development',
                'AI Solutions & Training',
                'Digital Content Creation',
                'Online Promotion',
                'AI Tools & Learning'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-[#5d3bce] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1" />
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 REDHOST CO. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              aria-haspopup="dialog"
              className="cursor-pointer bg-transparent p-0 text-inherit hover:text-[#e31e24] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31e24] focus-visible:ring-offset-2"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setTermsOpen(true)}
              aria-haspopup="dialog"
              className="cursor-pointer bg-transparent p-0 text-inherit hover:text-[#e31e24] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31e24] focus-visible:ring-offset-2"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {privacyOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
          onMouseDown={(event) => event.target === event.currentTarget && setPrivacyOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-policy-title"
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#e7e7e4] bg-white p-6 text-[#191919] shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-[#e7e7e4] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e31e24]">REDHOST</p>
                <h2 id="privacy-policy-title" className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                  Privacy Policy
                </h2>
                <p className="mt-2 text-sm text-[#737373]">Last updated: 10 October 2026</p>
              </div>
              <button
                ref={privacyCloseRef}
                type="button"
                onClick={() => setPrivacyOpen(false)}
                aria-label="Close Privacy Policy"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e7e7e4] text-[#555] transition-colors hover:border-red-200 hover:text-[#e31e24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31e24]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-5 text-sm leading-relaxed text-[#555555]">
              <p>REDHOST respects your privacy and is committed to protecting your personal information.</p>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">Information We Collect</h3>
                <p>We may collect information you provide through our website, including your name, email address, phone number, and project details when you contact us or request our services.</p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">How We Use Your Information</h3>
                <p>We use your information to respond to enquiries, provide our services, process transactions where applicable, and improve our website.</p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">Cookies and Third-Party Services</h3>
                <p>Our website may use cookies, analytics tools, or third-party services. These providers may process information according to their own privacy policies.</p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">Data Protection</h3>
                <p>We take reasonable measures to protect your information from unauthorized access, misuse, or disclosure. We do not sell your personal information.</p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">Your Rights</h3>
                <p>You may contact us to request access to, correction of, or deletion of your personal information, subject to applicable legal requirements.</p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">Contact Us</h3>
                <p>For privacy-related questions or requests, contact us at Email: <a className="font-medium text-[#e31e24] underline underline-offset-2" href="mailto:redhost.tech@gmail.com">redhost.tech@gmail.com</a>.</p>
              </div>

              <p className="border-t border-[#e7e7e4] pt-4 text-[#737373]">By using our website, you acknowledge this Privacy Policy.</p>
            </div>
          </section>
        </div>
      )}

      {termsOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
          onMouseDown={(event) => event.target === event.currentTarget && setTermsOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-of-service-title"
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#e7e7e4] bg-white p-6 text-[#191919] shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-[#e7e7e4] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e31e24]">REDHOST</p>
                <h2 id="terms-of-service-title" className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                  Terms of Service
                </h2>
                <p className="mt-2 text-sm text-[#737373]">Last updated: 10 October 2026</p>
              </div>
              <button
                ref={termsCloseRef}
                type="button"
                onClick={() => setTermsOpen(false)}
                aria-label="Close Terms of Service"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e7e7e4] text-[#555] transition-colors hover:border-red-200 hover:text-[#e31e24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31e24]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-5 text-sm leading-relaxed text-[#555555]">
              <p>Welcome to REDHOST. By accessing our website or using our services, you agree to these Terms of Service.</p>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">Our Services</h3>
                <p>REDHOST provides digital services, including website development, app development, AI training, digital content creation, and online promotion. Specific deliverables and timelines will be agreed upon with each client.</p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">Payments and Delivery</h3>
                <p>Prices, payment terms, and delivery timelines will be communicated before a project begins. Clients are responsible for providing accurate information and necessary materials.</p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">Intellectual Property</h3>
                <p>Unless otherwise agreed in writing, REDHOST retains ownership of its pre-existing tools, resources, and materials. Ownership and usage rights for client deliverables will be agreed upon for each project.</p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">Cancellations and Refunds</h3>
                <p>Cancellations and refunds are handled according to the agreed project terms and any applicable refund policy or legal requirements. Digital products and completed services may be subject to different conditions.</p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">Third-Party Services</h3>
                <p>We may use third-party tools and platforms to deliver our services. We are not responsible for disruptions or changes outside our reasonable control.</p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">Changes to These Terms</h3>
                <p>We may update these terms when necessary. Updated terms will be published on this page.</p>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-[#191919]">Contact Us</h3>
                <p>For questions about these terms, contact us at Email: <a className="font-medium text-[#e31e24] underline underline-offset-2" href="mailto:redhost.tech@gmail.com">redhost.tech@gmail.com</a>.</p>
              </div>

              <p className="border-t border-[#e7e7e4] pt-4 text-[#737373]">By using REDHOST&apos;s website or services, you agree to these terms.</p>
            </div>
          </section>
        </div>
      )}
    </footer>
  );
};
