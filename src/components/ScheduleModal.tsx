import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';
import { PROFESSIONAL_INFO, ServiceArea } from '../data/content';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceArea | null;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState('Avaliação Neuropsicológica');
  const [modality, setModality] = useState('Presencial');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService.title);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect directly to the official WhatsApp link provided by the user
    window.open(PROFESSIONAL_INFO.whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-200/80 max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/60 text-xs font-semibold text-amber-800 mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendamento & Orientações</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900">
            Agendar Atendimento
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Psicóloga {PROFESSIONAL_INFO.name} ({PROFESSIONAL_INFO.crp})
          </p>
        </div>

        <form onSubmit={handleConfirm} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Seu Nome (opcional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Como prefere ser chamado(a)?"
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Área de Interesse
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="Avaliação Neuropsicológica">Avaliação Neuropsicológica</option>
              <option value="Neuropsicologia">Neuropsicologia Clínica</option>
              <option value="TCC">TCC (Terapia Cognitivo-Comportamental)</option>
              <option value="TEA">Atuação em TEA (Autismo)</option>
              <option value="TDAH">Atuação em TDAH</option>
              <option value="Saúde Emocional">Saúde Emocional & Comportamento Geral</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Modalidade
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setModality('Presencial')}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  modality === 'Presencial'
                    ? 'border-amber-500 bg-amber-50/80 text-amber-900 shadow-xs'
                    : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                Presencial (Belford Roxo)
              </button>
              <button
                type="button"
                onClick={() => setModality('Online')}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  modality === 'Online'
                    ? 'border-amber-500 bg-amber-50/80 text-amber-900 shadow-xs'
                    : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                Online
              </button>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/50 text-xs text-neutral-600 space-y-1">
            <p className="flex items-center gap-1.5 font-medium text-amber-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
              <span>Atendimento acolhedor e sigiloso</span>
            </p>
            <p>
              Você será direcionado diretamente ao WhatsApp profissional da psicóloga Mônica Azevedo para conferência de horários e valores.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-gold-sm transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CONVERSAR NO WHATSAPP</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
