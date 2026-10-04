import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import redhostLogo from '../assets/redhost-logo-w-name.png';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Content', href: '#content' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_28px_rgba(23,28,38,0.08)] border-b border-slate-200/80'
          : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex min-h-[4.5rem] items-center justify-between gap-4">
        <a
          href="#hero"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31e24] focus-visible:ring-offset-2"
          aria-label="REDHOST Studio Home"
        >
          <img
            src={redhostLogo}
            alt="REDHOST: Ideas | Host | Grow"
            className="h-11 w-36 rounded-md object-cover object-center sm:h-12 sm:w-[9.5rem]"
          />
        </a>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-5" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative border-b-2 border-transparent py-2 text-[13px] font-semibold text-[#484554] transition-colors duration-150 hover:border-[#e31e24] hover:text-[#171c26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31e24] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="group inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#e31e24] px-3.5 text-white shadow-[0_4px_12px_rgba(227,30,36,0.2)] transition-all duration-200 hover:bg-[#bf1820] hover:shadow-[0_6px_16px_rgba(227,30,36,0.28)] active:scale-[0.98] sm:px-4"
          >
            <span className="text-xs font-semibold sm:text-sm">Start a Project</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#303641] transition-colors hover:border-[#e31e24]/40 hover:text-[#e31e24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31e24] lg:hidden"
            type="button"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden space-y-4 border-t border-slate-200 bg-white/98 px-4 py-5 shadow-xl backdrop-blur-2xl sm:px-6 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-sm py-1.5 text-base font-semibold text-[#303641] transition-colors hover:text-[#e31e24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31e24]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5 border-t border-slate-200/80 pt-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#e31e24] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_4px_12px_rgba(227,30,36,0.2)] transition hover:bg-[#bf1820]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
