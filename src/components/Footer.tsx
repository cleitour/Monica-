import React from 'react';
import { MapPin, Phone, Instagram, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { PROFESSIONAL_INFO, NAV_LINKS } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-12 border-t border-neutral-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Professional Identification */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                {PROFESSIONAL_INFO.name}
              </h3>
              <p className="text-amber-400 text-sm font-semibold mt-1">
                {PROFESSIONAL_INFO.title}
              </p>
              <p className="text-neutral-400 text-xs">
                {PROFESSIONAL_INFO.specialty}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-800 text-neutral-300 text-xs font-mono font-semibold border border-neutral-700/60">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{PROFESSIONAL_INFO.crp}</span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Atuação orientada pelo acolhimento, escuta atenta e respeito à individualidade, em consonância com as diretrizes do Conselho Federal de Psicologia.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Navegação
            </p>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Contato & Localização
            </p>

            <div className="space-y-3 text-xs text-neutral-300">
              {/* WhatsApp */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">WhatsApp</span>
                  <a
                    href={PROFESSIONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {PROFESSIONAL_INFO.whatsappUrl}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Instagram Oficial</span>
                  <a
                    href={PROFESSIONAL_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 transition-colors"
                  >
                    @psicologa.monicazevedo
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Endereço</span>
                  <p className="text-neutral-400 leading-relaxed">
                    {PROFESSIONAL_INFO.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} {PROFESSIONAL_INFO.name} · {PROFESSIONAL_INFO.crp}. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
