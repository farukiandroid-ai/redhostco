import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowRight, Search } from 'lucide-react';
import redhostLogo from '../assets/1-mainlogo.jpg';
import { SERVICES_DATA } from '../data/content';
import { PORTFOLIO_ITEMS } from '../data/portfolio';

const SITE_SEARCH_ITEMS = [
  { title: 'Home', description: 'REDHOST digital studio', href: '#hero', keywords: 'start ideas host grow' },
  ...SERVICES_DATA.map((service) => ({
    title: service.title,
    description: service.shortDesc,
    href: '#services',
    keywords: service.tags.join(' ')
  })),
  ...PORTFOLIO_ITEMS.map((item) => ({
    title: item.title,
    description: `${item.category} · ${item.description}`,
    href: '#content',
    keywords: item.category
  })),
  { title: 'Our Working Process', description: 'Discover, design, build, and launch', href: '#process', keywords: 'phases workflow' },
  { title: 'About REDHOST', description: 'Who we are and where we are based', href: '#about', keywords: 'company guwahati' },
  { title: 'Contact and Project Enquiry', description: 'Tell us about your next project', href: '#contact', keywords: 'email contact pricing enquiry' }
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!searchOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    searchInputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSearchOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      searchButtonRef.current?.focus();
    };
  }, [searchOpen]);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchResults = SITE_SEARCH_ITEMS.filter((item) =>
    `${item.title} ${item.description} ${item.keywords}`.toLowerCase().includes(normalizedQuery)
  ).slice(0, 8);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Portfolio', href: '#content' },
    { label: 'Pricing', href: '#contact' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto flex min-h-[5rem] w-full items-center justify-between gap-4 bg-[linear-gradient(105deg,#8f1622_0%,#bd4952_2%,#f1cece_16%,#fff8f7_42%,#fff_100%)] px-4 backdrop-blur-xl transition-all duration-300 sm:px-6 lg:px-8 xl:px-10">
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31e24] focus-visible:ring-offset-2"
          aria-label="REDHOST Studio Home"
        >
          <img
            src={redhostLogo}
            alt="REDHOST Studio"
            className="h-10 w-auto max-w-[150px] object-contain sm:h-11"
          />
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-slate-700 transition-colors duration-150 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            ref={searchButtonRef}
            type="button"
            aria-label="Search"
            aria-haspopup="dialog"
            onClick={() => setSearchOpen(true)}
            className="hidden h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-[0_1px_1px_rgba(15,23,42,0.04)] transition-colors hover:border-red-300 hover:text-red-500 sm:flex"
          >
            <Search className="h-4 w-4" />
          </button>

          <a
            href="#contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-5 text-white shadow-[0_10px_25px_-10px_rgba(239,68,68,0.8)] transition-all duration-200 hover:scale-[1.01] hover:shadow-[0_14px_30px_-12px_rgba(239,68,68,0.9)] active:scale-[0.98]"
          >
            <span className="text-sm font-semibold">Start a Project</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_1px_1px_rgba(15,23,42,0.04)] transition-colors hover:border-red-300 hover:text-red-500 lg:hidden"
            type="button"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mx-1 mt-2 space-y-4 rounded-2xl border border-[#e8c4c3] bg-[linear-gradient(105deg,#f1cece_0%,#fff8f7_46%,#fff_100%)] px-4 py-5 shadow-xl sm:mx-2 sm:px-6 lg:hidden">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-sm py-1.5 text-base font-medium text-slate-700 transition-colors hover:text-red-500"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 px-4 pt-[12vh] backdrop-blur-sm sm:pt-[15vh]"
          onMouseDown={(event) => event.target === event.currentTarget && setSearchOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="site-search-title"
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[#e7e7e4] bg-white shadow-2xl"
          >
            <form className="flex items-center gap-3 border-b border-[#e7e7e4] px-5" onSubmit={(event) => event.preventDefault()}>
              <Search className="h-5 w-5 shrink-0 text-[#e31e24]" aria-hidden="true" />
              <label id="site-search-title" className="sr-only">Search REDHOST</label>
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search services, projects, and pages..."
                className="h-16 min-w-0 flex-1 bg-transparent text-base text-[#191919] outline-none placeholder:text-[#999]"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#737373] transition-colors hover:bg-[#f7efef] hover:text-[#e31e24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31e24]"
              >
                <X className="h-4 w-4" />
              </button>
            </form>

            <div className="max-h-[55vh] overflow-y-auto p-3" aria-live="polite">
              <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a8885]">
                {normalizedQuery ? 'Search Results' : 'Explore REDHOST'}
              </p>
              {searchResults.length > 0 ? (
                <ul className="space-y-1">
                  {searchResults.map((result) => (
                    <li key={`${result.href}-${result.title}`}>
                      <a
                        href={result.href}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center justify-between gap-4 rounded-xl px-3 py-3 text-left transition-colors hover:bg-[#fff4f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31e24]"
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-semibold text-[#191919]">{result.title}</span>
                          <span className="mt-0.5 block truncate text-xs text-[#737373]">{result.description}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-[#e31e24]" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-3 py-8 text-center text-sm text-[#737373]">No matches found. Try another search term.</p>
              )}
            </div>
          </section>
        </div>
      )}
    </header>
  );
};
