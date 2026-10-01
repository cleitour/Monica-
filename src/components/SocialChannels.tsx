import React from 'react';
import { ExternalLink, Play, ArrowRight } from 'lucide-react';
import { PROFESSIONAL_INFO } from '../data/content';

export const SocialChannels: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-amber-100/60 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#EAB308_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest font-semibold text-amber-700 mb-1">
            Conexão Direta
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
            Canais Digitais Oficiais
          </h2>
          <p className="text-sm text-neutral-500 max-w-md mx-auto mt-2">
            Acompanhe conteúdos, reflexões e participações especiais sobre saúde mental e neuropsicologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          
          {/* INSTAGRAM CARD COM EFEITO 3D OFICIAL */}
          <a
            href={PROFESSIONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-5 bg-gradient-to-br from-white via-[#FCFCFA] to-amber-50/30 rounded-2xl border border-amber-200/70 shadow-3d-card hover:border-amber-300 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              {/* 3D Glossy Instagram Icon */}
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] p-0.5 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                {/* 3D Top Bevel Gloss */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="w-full h-full rounded-2xl flex items-center justify-center bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] shadow-inner">
                  {/* Official Instagram SVG Icon */}
                  <svg
                    className="w-7 h-7 text-white drop-shadow-md"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  Instagram
                </span>
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                  @psicologa.monicazevedo
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Reflexões, artigos e dia a dia
                </p>
              </div>
            </div>

            <div className="p-2 text-neutral-400 group-hover:text-amber-600 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </div>
          </a>

          {/* YOUTUBE CARD COM EFEITO 3D OFICIAL */}
          <a
            href={PROFESSIONAL_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-5 bg-gradient-to-br from-white via-[#FCFCFA] to-amber-50/30 rounded-2xl border border-amber-200/70 shadow-3d-card hover:border-amber-300 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              {/* 3D Glossy YouTube Icon */}
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#CC0000] to-[#FF0000] p-0.5 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                {/* 3D Gloss Sheen */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/35 to-transparent pointer-events-none" />
                <div className="w-full h-full rounded-2xl flex items-center justify-center bg-[#FF0000] shadow-inner">
                  {/* Official YouTube Play SVG */}
                  <svg
                    className="w-7 h-7 text-white drop-shadow-md fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                  YouTube
                </span>
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
                  Entrevista ao Vivo
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Assista ao debate completo
                </p>
              </div>
            </div>

            <div className="p-2 text-neutral-400 group-hover:text-red-500 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};
