import React from 'react';
import { MessageCircle, Calendar, ChevronDown } from 'lucide-react';
import { PROFESSIONAL_INFO } from '../data/content';
import heroCoverWebp from '../assets/hero_cover.webp';
import heroCoverJpg from '../assets/hero_cover.jpg';

interface HeroProps {
  onOpenSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#FCFCFA]"
    >
      {/* Ambient warm lighting in background */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-amber-200/20 via-amber-100/10 to-transparent blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* IMAGEM PRINCIPAL FULL WIDTH (BORDA A BORDA SEM MOLDURA/QUADRO) COM DEGRADÊ INFERIOR */}
      <div className="relative w-full overflow-hidden pt-16 sm:pt-20">
        <div className="relative w-full h-[52vh] sm:h-[65vh] md:h-[75vh] lg:h-[84vh] min-h-[380px] max-h-[850px] flex items-center justify-center">
          <picture className="w-full h-full">
            <source srcSet={heroCoverWebp} type="image/webp" />
            <source srcSet={heroCoverJpg} type="image/jpeg" />
            <img
              src={heroCoverJpg}
              alt="Mônica Azevedo - Psicóloga & Especialista em Neuropsicologia"
              className="w-full h-full object-cover object-top filter brightness-[1.01] contrast-[1.02]"
              loading="eager"
              onError={(e) => {
                (e.target as HTMLImageElement).src = PROFESSIONAL_INFO.heroCoverOriginalUrl;
              }}
              referrerPolicy="no-referrer"
            />
          </picture>

          {/* DEGRADÊ SUAVE NO FINAL DA IMAGEM DISSOLVENDO TOTALMENTE NA COR DA PÁGINA (#FCFCFA) */}
          <div 
            className="absolute inset-x-0 bottom-0 h-44 sm:h-64 md:h-80 bg-gradient-to-t from-[#FCFCFA] via-[#FCFCFA]/90 via-40% to-transparent pointer-events-none" 
            aria-hidden="true" 
          />
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL (POSICIONADO SOBRE A TRANSIÇÃO SUAVE DO DEGRADÊ) */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center -mt-16 sm:-mt-24 md:-mt-28 relative z-10 pb-16">
        
        {/* NOME & TITULAÇÃO */}
        <div className="space-y-3 mb-6 max-w-2xl">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight text-balance leading-tight drop-shadow-xs">
            {PROFESSIONAL_INFO.name}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-base sm:text-lg font-medium text-neutral-700">
            <span className="text-amber-700 font-semibold tracking-wide">
              {PROFESSIONAL_INFO.title}
            </span>
            <span className="hidden sm:inline text-neutral-300" aria-hidden="true">·</span>
            <span className="text-neutral-600">
              {PROFESSIONAL_INFO.specialty}
            </span>
          </div>

          {/* CRP Registro */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-widest pt-0.5">
            <span>{PROFESSIONAL_INFO.crp}</span>
          </div>
        </div>

        {/* FRASE ACOLHEDORA E ELEGANTE */}
        <div className="relative max-w-xl mx-auto my-3 px-6 py-3.5 bg-gradient-to-r from-amber-50/70 via-white to-amber-50/70 rounded-2xl border border-amber-200/60 shadow-xs backdrop-blur-xs">
          <p className="font-serif italic text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
            “{PROFESSIONAL_INFO.tagline}”
          </p>
        </div>

        {/* BOTÕES PRINCIPAIS DE AÇÃO */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Botão 1: Agendar Atendimento */}
          <button
            onClick={onOpenSchedule}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white btn-3d-gold inline-flex items-center justify-center gap-2.5 transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-gold-md hover:shadow-gold-lg"
          >
            <Calendar className="w-4 h-4 text-amber-100 group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">AGENDAR ATENDIMENTO</span>
          </button>

          {/* Botão 2: Fale Comigo no WhatsApp */}
          <a
            href={PROFESSIONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-neutral-900 bg-white hover:bg-neutral-50 border border-amber-300/80 hover:border-amber-400 shadow-gold-sm hover:shadow-gold-md transition-all duration-300 inline-flex items-center justify-center gap-2.5 group cursor-pointer active:scale-98"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">FALE COMIGO NO WHATSAPP</span>
          </a>
        </div>

        {/* Indicador de rolagem suave */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center gap-1.5 text-neutral-400 text-xs font-medium animate-bounce">
          <span>Deslize para conhecer</span>
          <ChevronDown className="w-4 h-4 text-amber-500/70" />
        </div>

      </div>
    </section>
  );
};
