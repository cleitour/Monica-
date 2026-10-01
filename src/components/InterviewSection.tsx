import React, { useState } from 'react';
import { Play, ExternalLink, Tv, Sparkles } from 'lucide-react';
import { PROFESSIONAL_INFO } from '../data/content';

export const InterviewSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="entrevista" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div 
        className="absolute top-1/3 right-0 w-80 h-80 bg-red-100/20 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-xs font-semibold text-red-700 uppercase tracking-widest mb-3">
            <Tv className="w-3.5 h-3.5" />
            <span>Participação em Mídia</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Entrevista
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3">
            Acompanhe a participação ao vivo da psicóloga Mônica Azevedo sobre temas centrais da saúde emocional e neuropsicologia.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Video Player Card / Thumbnail */}
        <div className="max-w-3xl mx-auto bg-[#FAFAF8] rounded-3xl p-3 sm:p-5 border border-amber-200/70 shadow-3d-card">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 shadow-inner group">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${PROFESSIONAL_INFO.youtubeVideoId}?autoplay=1`}
                title="Entrevista ao Vivo com Mônica Azevedo"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
                {/* High-res YouTube thumbnail with fallback backdrop */}
                <img
                  src={`https://img.youtube.com/vi/${PROFESSIONAL_INFO.youtubeVideoId}/maxresdefault.jpg`}
                  alt="Miniatura da entrevista com Mônica Azevedo"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity duration-300"
                  onError={(e) => {
                    // Fallback to hqdefault if maxresdefault is not cached
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${PROFESSIONAL_INFO.youtubeVideoId}/hqdefault.jpg`;
                  }}
                  referrerPolicy="no-referrer"
                />

                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30 group-hover:from-black/70 transition-colors" />

                {/* 3D Play Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(true);
                  }}
                  className="relative z-10 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 active:scale-95 border-2 border-white/80 cursor-pointer"
                  aria-label="Reproduzir entrevista no player"
                >
                  <Play className="w-7 sm:w-8 h-7 sm:h-8 fill-current ml-1" />
                </button>

                {/* Video Info Overlays */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex items-end justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-300 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                      Entrevista Completa
                    </span>
                    <h3 className="text-base sm:text-lg font-bold mt-1 text-white line-clamp-1">
                      Mônica Azevedo no YouTube
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-300 bg-black/40 px-2 py-1 rounded backdrop-blur-xs hidden sm:block">
                    Clique para assistir
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Action Bar */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Disponível no canal oficial do YouTube
              </p>
              <p className="text-xs text-neutral-400 mt-0.5">
                Assista pelo navegador ou direto no app do YouTube
              </p>
            </div>

            {/* ASSISTA À ENTREVISTA BUTTON */}
            <a
              href={PROFESSIONAL_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#CC0000] via-[#E60000] to-[#FF0000] hover:from-[#B30000] hover:to-[#CC0000] shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2 group active:scale-98"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>ASSISTA À ENTREVISTA</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
