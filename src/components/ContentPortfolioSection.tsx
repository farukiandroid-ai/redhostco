import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Play, Sparkles, X } from 'lucide-react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS, PortfolioCategory, PortfolioItem } from '../data/portfolio';
import { PortfolioArtwork } from './PortfolioArtwork';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  className: string;
  failed: boolean;
  onMediaError: (id: string, mediaType?: 'image' | 'video') => void;
  onOpen: (item: PortfolioItem) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, index, className, failed, onMediaError, onOpen }) => {
  const previewPath = item.mediaType === 'video' ? item.posterPath ?? item.imagePath : item.imagePath;

  return (
    <article className={className} style={{ '--portfolio-index': index } as React.CSSProperties}>
      <button
        type="button"
        className="portfolio-card__button"
        onClick={() => onOpen(item)}
        aria-label={`View project concept: ${item.title}`}
      >
        <span className="portfolio-card__visual" style={{ aspectRatio: item.aspectRatio }}>
          {previewPath && !failed ? (
            <img
              src={previewPath}
              alt={item.imageAlt}
              loading="lazy"
              width="960"
              height="720"
              onError={() => onMediaError(item.id)}
            />
          ) : (
            <span className="portfolio-card__fallback" role="img" aria-label={item.imageAlt}>
              <PortfolioArtwork variant={item.artwork} />
            </span>
          )}
          {item.mediaType === 'video' && (
            <span className="portfolio-card__play" aria-hidden="true">
              <Play className="h-4 w-4 fill-current" />
            </span>
          )}
          <span className="portfolio-card__demo">Concept</span>
          <span className="portfolio-card__view">
            View Project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </span>
        <span className="portfolio-card__meta">
          <span className="portfolio-card__category">{item.category}</span>
          <span className="portfolio-card__title">{item.title}</span>
          <span className="portfolio-card__description">{item.description}</span>
        </span>
      </button>
    </article>
  );
};

interface PortfolioModalProps {
  item: PortfolioItem;
  imageFailed: boolean;
  videoFailed: boolean;
  onMediaError: (id: string, mediaType?: 'image' | 'video') => void;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, imageFailed, videoFailed, onMediaError, onClose }) => {
  const dialogRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], video[controls], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  const previewPath = item.mediaType === 'video' ? item.posterPath ?? item.imagePath : item.imagePath;
  const media = item.mediaType === 'video' && item.videoPath && !videoFailed ? (
    <video
      className="portfolio-modal__media"
      controls
      playsInline
      poster={item.posterPath ?? undefined}
      onError={() => onMediaError(item.id, 'video')}
    >
      <source src={item.videoPath} />
      Your browser does not support embedded video.
    </video>
  ) : previewPath && !imageFailed ? (
    <img
      className="portfolio-modal__media"
      src={previewPath}
      alt={item.imageAlt}
      width="1200"
      height="900"
      onError={() => onMediaError(item.id)}
    />
  ) : (
    <div className="portfolio-modal__fallback" role="img" aria-label={item.imageAlt}>
      <PortfolioArtwork variant={item.artwork} />
    </div>
  );

  return (
    <div className="portfolio-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section
        ref={dialogRef}
        className="portfolio-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-modal-title"
      >
        <div className="portfolio-modal__header">
          <div>
            <span className="portfolio-modal__category">{item.category} · Concept</span>
            <h3 id="portfolio-modal-title">{item.title}</h3>
          </div>
          <button ref={closeRef} className="portfolio-modal__close" type="button" onClick={onClose} aria-label="Close project details">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="portfolio-modal__visual" style={{ aspectRatio: item.aspectRatio }}>
          {media}
        </div>
        <p className="portfolio-modal__description">{item.description}</p>
        <div className="portfolio-modal__footer">
          <span>This is a demonstration concept, not a completed client project.</span>
          <a href="#contact" onClick={onClose} className="portfolio-button portfolio-button--primary">
            Start a Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
};

export const ContentPortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All Work' | PortfolioCategory>('All Work');
  const [filterRevision, setFilterRevision] = useState(0);
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [failedAssets, setFailedAssets] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const featured = PORTFOLIO_ITEMS.find((item) => item.featured) ?? PORTFOLIO_ITEMS[0];

  useEffect(() => {
    const section = sectionRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!section || reduceMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const reveal = () => {
      const bounds = section.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) {
        setIsVisible(true);
        observer.disconnect();
        window.removeEventListener('scroll', reveal);
        window.removeEventListener('resize', reveal);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) reveal();
    }, { threshold: 0.04 });

    observer.observe(section);
    window.addEventListener('scroll', reveal, { passive: true });
    window.addEventListener('resize', reveal);
    reveal();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('resize', reveal);
    };
  }, []);

  const visibleItems = PORTFOLIO_ITEMS.filter((item) => activeCategory === 'All Work' || item.category === activeCategory);
  const markAssetFailed = (id: string, mediaType: 'image' | 'video' = 'image') => {
    const assetKey = mediaType === 'video' ? `${id}:video` : id;
    setFailedAssets((current) => ({ ...current, [assetKey]: true }));
  };

  return (
    <section
      id="content"
      ref={sectionRef}
      className={`portfolio-page ${isVisible ? 'portfolio-page--visible' : ''}`}
    >
      <div className="portfolio-shell">
        <header className="portfolio-hero">
          <div className="portfolio-hero__copy portfolio-reveal">
            <div className="portfolio-eyebrow"><span /> AI-Powered Creative Studio</div>
            <h1>
              Content that captures attention.
              <span>Creativity that moves brands forward.</span>
            </h1>
            <p>
              From AI-generated visuals and cinematic videos to social media campaigns and digital advertising, we help brands turn ideas into compelling digital content.
            </p>
            <div className="portfolio-hero__actions">
              <a href="#portfolio-grid" className="portfolio-button portfolio-button--primary">
                Explore Our Work <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="portfolio-button portfolio-button--secondary">Start a Project</a>
            </div>
          </div>
          <div className="portfolio-hero__art" aria-hidden="true">
            <div className="portfolio-hero__orbit" />
            <div className="portfolio-hero__shape portfolio-hero__shape--red" />
            <div className="portfolio-hero__shape portfolio-hero__shape--mint" />
            <div className="portfolio-hero__shape portfolio-hero__shape--paper"><Sparkles /></div>
          </div>
        </header>

        <section id="portfolio-grid" className="portfolio-work" aria-labelledby="portfolio-heading">
          <div className="portfolio-work__intro">
            <div className="portfolio-reveal">
              <span className="portfolio-kicker">Selected Creative Work</span>
              <h2 id="portfolio-heading">Ideas brought to life.</h2>
              <p>Explore creative concepts, AI visuals, advertising experiments, and digital campaigns.</p>
            </div>
            <nav className="portfolio-filters" aria-label="Filter portfolio projects">
              {PORTFOLIO_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={activeCategory === category ? 'portfolio-filter portfolio-filter--active' : 'portfolio-filter'}
                  aria-pressed={activeCategory === category}
                  onClick={() => {
                    setActiveCategory(category);
                    setFilterRevision((revision) => revision + 1);
                  }}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>

          <div className="portfolio-grid" aria-live="polite">
            {visibleItems.map((item, index) => (
              <PortfolioCard
                key={`${filterRevision}-${item.id}`}
                className={filterRevision ? 'portfolio-card portfolio-card--filtered' : 'portfolio-card'}
                item={item}
                index={index}
                failed={Boolean(failedAssets[item.id])}
                onMediaError={markAssetFailed}
                onOpen={setActiveItem}
              />
            ))}
          </div>
        </section>

        <section className="portfolio-feature" aria-labelledby="portfolio-feature-heading">
          <div className="portfolio-feature__copy portfolio-reveal">
            <span className="portfolio-kicker">Featured Experiment</span>
            <h2 id="portfolio-feature-heading">What happens when creativity meets AI?</h2>
            <p>
              We explore AI-powered visual storytelling, expressive video production, and new ways to make digital experiences feel more human.
            </p>
            <a href="#portfolio-grid" className="portfolio-text-link">
              Explore the Collection <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="portfolio-feature__visual" role="img" aria-label={featured.imageAlt}>
            <PortfolioArtwork variant={featured.artwork} />
            <span className="portfolio-feature__label"><Sparkles className="h-3.5 w-3.5" /> Creative Experiments</span>
            <span className="portfolio-feature__index">RH · 06</span>
          </div>
        </section>

        <section className="portfolio-cta" aria-labelledby="portfolio-cta-heading">
          <div className="portfolio-cta__decoration" aria-hidden="true" />
          <div>
            <span className="portfolio-kicker">Have an idea worth creating?</span>
            <h2 id="portfolio-cta-heading">Let’s turn your next concept into something people notice.</h2>
          </div>
          <a href="#contact" className="portfolio-button portfolio-button--primary">
            Let’s Create Together <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </section>
      </div>

      {activeItem && (
        <PortfolioModal
          item={activeItem}
          imageFailed={Boolean(failedAssets[activeItem.id])}
          videoFailed={Boolean(failedAssets[`${activeItem.id}:video`])}
          onMediaError={markAssetFailed}
          onClose={() => setActiveItem(null)}
        />
      )}
    </section>
  );
};