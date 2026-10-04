import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Clock, Globe } from 'lucide-react';
import redhostLogo from '../assets/redhost-logo-w-name.png';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-white shadow-[0_-1px_12px_rgba(20,25,35,0.03)] pt-16 pb-12 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          {/* Brand Column (2 cols) */}
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 REDHOST CO. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-[#5d3bce] transition-colors">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-[#5d3bce] transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
