import React, { useState } from 'react';
import { BookOpen, Sparkles, Check, ArrowRight } from 'lucide-react';
import { PROFESSIONAL_INFO } from '../data/content';

interface BookSectionProps {
  onOpenBookModal: () => void;
}

export const BookSection: React.FC<BookSectionProps> = ({ onOpenBookModal }) => {
  return (
    <section id="livro" className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF9F5] via-white to-[#FAF9F5] relative overflow-hidden">
      {/* Editorial backdrop illumination */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-200/20 via-amber-100/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/60 border border-amber-200/60 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Produção Literária</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
            Autora
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3">
            Conhecimento científico e vivência clínica compartilhados em obra editorial.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: 3D Book Presentation on Editorial Pedestal */}
          <div className="lg:col-span-6 flex justify-center perspective-1000">
            <div className="relative group cursor-pointer" onClick={onOpenBookModal}>
              
              {/* Studio ambient backlight */}
              <div 
                className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-amber-300/30 via-yellow-200/20 to-amber-400/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" 
                aria-hidden="true" 
              />

              {/* 3D Book Container with realistic shadow & depth */}
              <div className="relative z-10 p-2 sm:p-3 bg-white/40 backdrop-blur-xs rounded-2xl border border-amber-200/60 shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                
                {/* Book cover visual */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl bg-neutral-900 border border-amber-100">
                  <img
                    src={PROFESSIONAL_INFO.bookCoverUrl}
                    alt="Livro de autoria de Mônica Azevedo"
                    className="w-72 sm:w-80 md:w-96 max-w-full h-auto object-cover block"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Editorial gloss sheen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-white/10 to-transparent pointer-events-none" />
                  {/* Subtle book spine shadow on the left */}
                  <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-black/25 via-black/5 to-transparent pointer-events-none" />
                </div>

                {/* Pedestal surface reflection shadow */}
                <div className="w-full h-4 bg-gradient-to-b from-neutral-900/15 to-transparent blur-sm rounded-full mt-2" />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Presentation & Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-700">
                Obra Publicada
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight">
                Uma obra que conecta ciência, comportamento e acolhimento humano
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                De autoria da psicóloga <strong className="text-neutral-900 font-semibold">Mônica Azevedo</strong>, a publicação reflete anos de prática clínica e dedicação ao estudo aprofundado do comportamento, das relações e da saúde emocional.
              </p>
            </div>

            {/* Highlights list */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-3 text-sm text-neutral-700">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Reflexões enriquecedoras sobre o desenvolvimento emocional e comportamental.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-700">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Linguagem acessível e fundamentada na literatura técnica contemporânea.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-700">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Ideal para profissionais, estudantes e todos que valorizam o autocuidado.</span>
              </div>
            </div>

            {/* CONHEÇA O LIVRO BUTTON */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBookModal}
                className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white btn-3d-gold inline-flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>CONHEÇA O LIVRO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-xs text-neutral-500 sm:max-w-xs leading-normal">
                Clique para ver detalhes e solicitar informações sobre o exemplar.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
