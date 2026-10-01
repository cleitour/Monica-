import React from 'react';
import { X, BookOpen, MessageCircle, ExternalLink, Check } from 'lucide-react';
import { PROFESSIONAL_INFO } from '../data/content';

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookModal: React.FC<BookModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const bookInquiryWhatsapp = `${PROFESSIONAL_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Olá, psicóloga Mônica! Gostaria de saber mais informações sobre o seu livro e como adquiri-lo.'
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-200/80 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          {/* Book Image */}
          <div className="sm:col-span-5 flex justify-center">
            <div className="relative p-2 bg-neutral-50 rounded-2xl border border-amber-200/60 shadow-lg">
              <img
                src={PROFESSIONAL_INFO.bookCoverUrl}
                alt="Livro de autoria de Mônica Azevedo"
                className="w-48 sm:w-full h-auto object-cover rounded-xl shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Book Details */}
          <div className="sm:col-span-7 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/50">
                Obra Autoral
              </span>
              <h3 className="font-serif text-2xl font-bold text-neutral-900 mt-2">
                Conheça o Livro
              </h3>
              <p className="text-xs text-neutral-500">
                Autoria: {PROFESSIONAL_INFO.name} ({PROFESSIONAL_INFO.crp})
              </p>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Esta publicação reúne reflexões, embasamento técnico e a sensibilidade do olhar clínico desenvolvido por Mônica Azevedo ao longo de sua trajetória profissional em psicologia e neuropsicologia.
            </p>

            <div className="space-y-2 text-xs text-neutral-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Conteúdo focado no desenvolvimento humano e saúde mental</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Linguagem acessível a profissionais e ao público em geral</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Exemplares disponíveis sob consulta</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={PROFESSIONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md inline-flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar informações no WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs text-neutral-500 hover:text-neutral-800 transition-colors"
              >
                Fechar detalhes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
