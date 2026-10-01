import React from 'react';
import { ShieldCheck, HeartHandshake, Brain, CheckCircle2, UserCheck } from 'lucide-react';
import { PROFESSIONAL_INFO } from '../data/content';
import monicaAboutWebp from '../assets/monica_about.webp';
import monicaAboutJpg from '../assets/monica_about.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 sm:py-24 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div 
        className="absolute top-1/2 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-72 h-72 bg-amber-100/30 rounded-full blur-2xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/60 border border-amber-200/60 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Perfil Profissional</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Sobre Mônica Azevedo
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Profile Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative card frame with soft gold lighting */}
              <div className="relative p-6 sm:p-8 bg-white/95 rounded-3xl border border-amber-200/80 shadow-3d-card text-center overflow-hidden">
                
                {/* Ambient top light */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-amber-200/35 rounded-full blur-xl pointer-events-none" />
                
                {/* Foto da Mônica na seção Perfil Profissional */}
                <div className="relative mb-5 mx-auto w-56 sm:w-64 aspect-square rounded-2xl overflow-hidden shadow-md border border-amber-200/80 flex items-center justify-center bg-amber-50/50 group">
                  <picture className="w-full h-full">
                    <source srcSet={monicaAboutWebp} type="image/webp" />
                    <source srcSet={monicaAboutJpg} type="image/jpeg" />
                    <img
                      src={monicaAboutJpg}
                      alt="Foto de Mônica Azevedo - Perfil Profissional"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = PROFESSIONAL_INFO.aboutPhotoUrl;
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </picture>
                  {/* Delicado reflexo interno dourado */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-amber-300/30 pointer-events-none" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-neutral-900">
                  {PROFESSIONAL_INFO.name}
                </h3>
                <p className="text-sm font-semibold text-amber-700 mt-1">
                  {PROFESSIONAL_INFO.specialty}
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {PROFESSIONAL_INFO.title}
                </p>

                {/* CRP Badge */}
                <div className="mt-5 pt-5 border-t border-neutral-100 flex items-center justify-center gap-2 text-xs font-bold text-neutral-700">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Registro Profissional: {PROFESSIONAL_INFO.crp}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio description & core competencies */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-neutral-700 leading-relaxed text-base sm:text-lg">
              <p>
                A prática clínica da psicóloga <strong className="text-neutral-950 font-semibold">Mônica Azevedo</strong> é orientada pelo acolhimento humano, rigor ético e embasamento científico, construindo um ambiente seguro e de mútua confiança para cada paciente.
              </p>
              <p>
                Como <strong className="text-amber-800 font-semibold">Especialista em Neuropsicologia</strong> e atuante em <strong className="text-neutral-900 font-semibold">Saúde Emocional & Comportamento</strong>, seu trabalho integra o entendimento do funcionamento cognitivo, dos processos emocionais e das dinâmicas do comportamento individual.
              </p>
            </div>

            {/* Destaques de Atuação Oficial */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-500 mb-3">
                Pilares de Atuação Clínica
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-amber-100/90 shadow-xs flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-neutral-900 block">Neuropsicologia</span>
                    <span className="text-xs text-neutral-500">Compreensão e funcionamento cognitivo</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-amber-100/90 shadow-xs flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-neutral-900 block">Avaliação Neuropsicológica</span>
                    <span className="text-xs text-neutral-500">Investigação clínica aprofundada</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-amber-100/90 shadow-xs flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-neutral-900 block">TCC</span>
                    <span className="text-xs text-neutral-500">Terapia Cognitivo-Comportamental</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-amber-100/90 shadow-xs flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-neutral-900 block">TEA & TDAH</span>
                    <span className="text-xs text-neutral-500">Acolhimento e olhar especializado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ethical stance box */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/50 flex items-center gap-3 text-xs sm:text-sm text-neutral-700">
              <HeartHandshake className="w-5 h-5 text-amber-700 shrink-0" />
              <span>
                Atendimento conduzido em conformidade com o Código de Ética Profissional do Psicólogo (CFP).
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
