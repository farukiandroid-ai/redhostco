import React, { useEffect, useRef, useState } from 'react';
import {
  Globe,
  Smartphone,
  Cpu,
  Film,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  Layers
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';
import { ServiceArtwork, ServiceArtworkVariant } from './ServiceArtwork';

const SERVICE_CARD_CONTENT: Record<string, { description: string; benefits: string[]; artwork: ServiceArtworkVariant }> = {
  'website-development': {
    description: 'Create modern, responsive websites and landing pages that showcase your brand, attract customers, and help grow your business.',
    benefits: ['Business websites', 'Landing pages', 'Responsive design'],
    artwork: 'website'
  },
  'app-development': {
    description: 'Turn your ideas into practical digital experiences with user-friendly applications and custom business tools.',
    benefits: ['Web applications', 'Business tools', 'Custom solutions'],
    artwork: 'app'
  },
  'ai-solutions': {
    description: 'Use AI tools to create content, improve productivity, streamline repetitive tasks, and develop valuable digital skills.',
    benefits: ['AI tools and workflows', 'AI content creation', 'Practical training'],
    artwork: 'ai'
  },
  'digital-content': {
    description: 'Create engaging visual content, promotional videos, AI-powered creatives, and branded graphics for digital platforms.',
    benefits: ['Short-form videos and reels', 'Promotional creatives', 'UGC-style advertisements'],
    artwork: 'content'
  }
};

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!section || reduceMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
        window.removeEventListener('scroll', checkVisibility);
        window.removeEventListener('resize', checkVisibility);
      }
    }, { threshold: 0.12 });

    const checkVisibility = () => {
      const bounds = section.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.9 && bounds.bottom > 0) {
        setIsVisible(true);
        observer.disconnect();
        window.removeEventListener('scroll', checkVisibility);
        window.removeEventListener('resize', checkVisibility);
      }
    };

    observer.observe(section);
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility);
    checkVisibility();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

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
    <section id="services" ref={sectionRef} className={`services-section w-full bg-[#f7efef] px-6 py-20 text-[#111111] lg:px-12 lg:py-24 ${isVisible ? 'is-visible' : ''}`}>
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="services-reveal space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-500">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              Our Services
            </div>
            <h2 className="max-w-xl font-display text-3xl font-extrabold tracking-[-0.05em] text-[#111111] sm:text-4xl lg:text-[4rem]">
              Everything you need <br /> to build and grow.
            </h2>
          </div>

          <div className="max-w-[520px]">
            <p className="services-reveal text-base leading-relaxed text-[#4b4b4b]">
              From websites and apps to AI-powered creativity and digital marketing, we provide practical digital solutions built to help you grow.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES_DATA.map((service, index) => {
            const Icon = getIcon(service.icon);
            const cardContent = SERVICE_CARD_CONTENT[service.id];
            const artwork = cardContent?.artwork ?? (service.category === 'ai' ? 'ai' : service.category === 'content' || service.category === 'growth' ? 'content' : 'website');
            const benefits = cardContent?.benefits ?? service.tags.slice(0, 3);

            return (
              <article
                key={service.id}
                className="service-card services-reveal group flex h-full flex-col rounded-[22px] border border-black/[0.07] bg-[#f3f4e8] p-5 shadow-[0_16px_40px_-30px_rgba(35,35,22,0.28)] transition duration-300 hover:-translate-y-1.5 hover:border-[#f20d18]/25 hover:shadow-[0_24px_48px_-28px_rgba(35,35,22,0.32)] sm:p-6"
                style={{ '--card-index': index } as React.CSSProperties}
              >
                <div className="service-card__art mb-5 flex aspect-[1.62] items-center justify-center overflow-hidden rounded-[18px] bg-[radial-gradient(ellipse_at_50%_45%,#fffdf8_0%,#f7f5eb_66%,#eeeedf_100%)]">
                  <ServiceArtwork variant={artwork} />
                </div>

                <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#777777]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/85 text-[#F20D18] shadow-sm">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {service.category === 'web-app' ? 'Digital products' : service.category === 'ai' ? 'Artificial intelligence' : service.category === 'content' ? 'Creative studio' : 'Digital growth'}
                </div>

                <h3 className="mb-2 font-display text-xl font-bold leading-tight text-[#171717] sm:text-[1.35rem]">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#62625D]">{cardContent?.description ?? service.shortDesc}</p>

                <ul className="mb-5 space-y-2 text-[13px] text-[#34342F]">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F20D18]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="group/action mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-[#171717]/10 bg-white/80 px-4 text-sm font-semibold text-[#171717] transition-colors hover:border-[#F20D18]/30 hover:text-[#F20D18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F20D18] focus-visible:ring-offset-2"
                  aria-label={`Explore ${service.title}`}
                >
                  Explore Service
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/action:translate-x-1" aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
