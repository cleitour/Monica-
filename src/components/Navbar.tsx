import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFESSIONAL_INFO, NAV_LINKS } from '../data/content';

interface NavbarProps {
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-md shadow-sm border-b border-amber-100/60 py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#inicio"
            className="group flex items-center gap-2.5 text-neutral-900 focus-visible:outline-none"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-amber-700 transition-colors">
              {PROFESSIONAL_INFO.name}
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-neutral-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-600 transition-colors duration-200 relative py-1 focus-visible:outline-none focus-visible:text-amber-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button & Mobile Menu trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSchedule}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 rounded-lg shadow-gold-sm transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <span>Agendar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-amber-700 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Alternar menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-amber-100/80 px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-800 hover:text-amber-600 transition-colors py-1 border-b border-neutral-100/80"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full text-center py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg shadow-gold-sm"
              >
                Agendar Atendimento
              </button>
              <a
                href={PROFESSIONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold text-neutral-800 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200/80 transition-colors"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
