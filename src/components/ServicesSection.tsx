import React from 'react';
import { ArrowRight, Info, Sparkles } from 'lucide-react';
import { SERVICES_LIST, ServiceArea, PROFESSIONAL_INFO } from '../data/content';

interface ServicesSectionProps {
  onSelectService: (service: ServiceArea) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="atuacao" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      {/* Subtle backdrop ambient glows */}
      <div 
        className="absolute top-1/4 left-0 w-80 h-80 bg-amber-100/25 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-0 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-amber-700 mb-2">
            Especialidades & Prática Clínica
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Áreas de Atuação
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
            Abordagem clínica estruturada, integrando avaliação precisa, escuta acolhedora e intervenções respaldadas pela ciência psicológica.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FCFCFA] border border-amber-200/70 hover:border-amber-400/90 shadow-3d-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-gold-md ${
                index === 0 || index === 1 ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Subtle top light sheen on hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-3 bg-white rounded-xl shadow-xs border border-amber-100/90 inline-block transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50/80 px-2.5 py-1 rounded-md border border-amber-200/40">
                    Área Clínica
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-amber-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-amber-700/90 mt-0.5 mb-3">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Highlight points */}
                <ul className="space-y-1.5 mb-6 text-xs text-neutral-600">
                  {service.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button: Inquire about this specific service */}
              <div className="pt-4 border-t border-neutral-100/90 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 group-hover:text-amber-600 transition-colors cursor-pointer"
                >
                  <span>Saber mais sobre {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Disclaimer Note */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-amber-50/50 border border-amber-200/50 flex items-start gap-3 text-xs text-neutral-600 leading-relaxed">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong className="text-neutral-800">Nota informativa e ética:</strong> Os conteúdos apresentados acima têm caráter exclusivamente informativo sobre as áreas de atuação da psicologia e neuropsicologia, não configurando diagnóstico prévio nem promessa de resultados ou cura, em estrito respeito às normas do Conselho Federal de Psicologia.
          </p>
        </div>

      </div>
    </section>
  );
};
