import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Building2, Compass } from 'lucide-react';
import { PROFESSIONAL_INFO } from '../data/content';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFESSIONAL_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const encodedAddress = encodeURIComponent(PROFESSIONAL_INFO.address.full);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="localizacao" className="py-20 sm:py-24 bg-[#FAF9F5] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div 
        className="absolute top-1/2 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/60 border border-amber-200/60 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Consultório Presencial</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Onde estamos
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3">
            Espaço acolhedor, reservado e de fácil acesso para seus atendimentos presenciais.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column Grid: Address Details + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Structured Address Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-white rounded-3xl border border-amber-200/70 shadow-3d-card">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900">
                    Consultório de Psicologia
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Belford Roxo · Rio de Janeiro
                  </p>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-4 text-sm text-neutral-700 divide-y divide-neutral-100">
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-0.5">
                    Endereço
                  </span>
                  <p className="font-semibold text-neutral-900 text-base">
                    {PROFESSIONAL_INFO.address.street}
                  </p>
                </div>

                <div className="pt-3">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-0.5">
                    Unidade
                  </span>
                  <p className="font-medium text-neutral-800">
                    {PROFESSIONAL_INFO.address.room}
                  </p>
                </div>

                <div className="pt-3">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-0.5">
                    Bairro / Município
                  </span>
                  <p className="font-medium text-neutral-800">
                    {PROFESSIONAL_INFO.address.district} — {PROFESSIONAL_INFO.address.city} / {PROFESSIONAL_INFO.address.state}
                  </p>
                </div>

                <div className="pt-3">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-0.5">
                    CEP & País
                  </span>
                  <p className="font-medium text-neutral-800">
                    CEP {PROFESSIONAL_INFO.address.zip} — {PROFESSIONAL_INFO.address.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions: COMO CHEGAR + Copiar Endereço */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
              <a
                href={PROFESSIONAL_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white btn-3d-gold inline-flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
              >
                <Navigation className="w-4 h-4" />
                <span>COMO CHEGAR</span>
              </a>

              <button
                onClick={handleCopy}
                className="py-3 px-4 rounded-xl font-medium text-xs text-neutral-700 bg-amber-50/70 hover:bg-amber-100/70 border border-amber-200/60 inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                title="Copiar endereço completo"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-neutral-500" />}
                <span>{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-amber-200/70 shadow-3d-card bg-neutral-100 min-h-[350px] lg:min-h-[420px] relative">
            <iframe
              title="Localização do Consultório no Mapa"
              src={mapEmbedUrl}
              className="w-full h-full min-h-[380px] lg:min-h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Top glass pill badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-neutral-200/60 text-xs font-semibold text-neutral-800 flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Belford Roxo, RJ</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
