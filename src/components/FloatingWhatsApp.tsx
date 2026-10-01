import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PROFESSIONAL_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Gentle welcoming tooltip */}
      {showTooltip && (
        <div className="relative mb-2.5 bg-white/95 backdrop-blur-md text-neutral-800 text-xs py-2 px-3.5 rounded-xl shadow-lg border border-amber-200/80 flex items-center gap-2 max-w-[210px] animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-medium">Olá! Precisa de atendimento?</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-neutral-600 p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating 3D WhatsApp Button */}
      <a
        href={PROFESSIONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#1EBE5D] via-[#25D366] to-[#4ADE80] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/90"
        aria-label="Falar com a psicóloga Mônica Azevedo no WhatsApp"
      >
        {/* Subtle 3D Top Gloss */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/35 to-transparent pointer-events-none" />

        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white relative z-10 drop-shadow-md group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
