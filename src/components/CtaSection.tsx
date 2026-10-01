import React from 'react';
import { MessageCircle, Instagram, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import { PROFESSIONAL_INFO } from '../data/content';

export const CtaSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      {/* Background radial gold glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-100/40 via-yellow-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN WHATSAPP CTA: "Vamos conversar?" */}
        <div className="relative p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-br from-[#FFFDF5] via-white to-amber-50/40 border border-amber-200/80 shadow-3d-card text-center mb-12 overflow-hidden">
          
          {/* Subtle top golden light line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300" />
          
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-semibold text-emerald-800 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Atendimento e Informações</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Vamos conversar?
            </h2>

            <p className="text-neutral-600 text-base sm:text-lg mt-4 leading-relaxed max-w-xl mx-auto">
              Se você está buscando orientação e acompanhamento profissional, entre em contato para saber mais sobre os atendimentos.
            </p>

            {/* BOTÃO GRANDE: FALAR PELO WHATSAPP */}
            <div className="mt-8 flex justify-center">
              <a
                href={PROFESSIONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl font-bold text-base sm:text-lg text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-98 cursor-pointer border border-emerald-400/40"
              >
                {/* 3D Top Bevel light */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">FALAR PELO WHATSAPP</span>
              </a>
            </div>

            <p className="text-xs text-neutral-400 mt-4">
              Resposta ágil e acolhedora para tirar suas dúvidas sobre agendamento.
            </p>
          </div>
        </div>

        {/* INSTAGRAM CTA: "Acompanhe meu trabalho" */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F5] border border-amber-200/60 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700">
              Redes Sociais
            </span>
            <h3 className="font-serif text-2xl font-bold text-neutral-900 mt-1">
              Acompanhe meu trabalho
            </h3>
            <p className="text-sm text-neutral-600 mt-1">
              Conteúdos sobre saúde emocional, comportamento e psicologia.
            </p>
          </div>

          {/* BOTÃO: SEGUIR NO INSTAGRAM */}
          <a
            href={PROFESSIONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2.5 group whitespace-nowrap active:scale-98"
          >
            <Instagram className="w-4 h-4 text-white group-hover:rotate-6 transition-transform" />
            <span>SEGUIR NO INSTAGRAM</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
