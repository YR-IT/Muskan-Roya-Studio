import React, { useState } from 'react';
import { CINEMATIC_FILMS } from '../data/photographyData';
import { CinematicFilm } from '../types';
import { Play, Instagram, MapPin, Clock, X, ExternalLink, MessageCircle } from 'lucide-react';

interface CinematicFilmsProps {
  onOpenBooking: () => void;
}

export const CinematicFilms: React.FC<CinematicFilmsProps> = ({ onOpenBooking }) => {
  const [activeFilm, setActiveFilm] = useState<CinematicFilm | null>(null);

  return (
    <section id="films" className="py-24 bg-[#1A1918] text-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Eyebrow & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-white/15">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-[#C5A059] uppercase tracking-[0.25em] text-xs font-semibold">
                Cinematography
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white">
              Motion & Live Audio Films
            </h2>
          </div>
          <p className="text-stone-400 text-xs sm:text-sm max-w-md font-light">
            Sensory, emotional short film stories capturing natural vow exchanges, laughter, and high-energy celebrations.
          </p>
        </div>

        {/* Film Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CINEMATIC_FILMS.map((film) => (
            <div
              key={film.id}
              className="border border-white/15 bg-white/5 flex flex-col justify-between group hover:border-[#C5A059] transition-all"
            >
              {/* Thumbnail Container */}
              <div 
                className="relative aspect-video bg-black overflow-hidden cursor-pointer"
                onClick={() => setActiveFilm(film)}
              >
                <img
                  src={film.thumbnailUrl}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Overlay with Play Icon */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Category & Duration Tags */}
                <div className="absolute top-4 left-4 bg-[#1A1918]/80 text-[#C5A059] px-3 py-1 text-[10px] uppercase font-mono tracking-widest border border-white/10">
                  {film.category}
                </div>

                <div className="absolute bottom-4 right-4 bg-black/70 text-stone-300 px-2.5 py-1 text-[10px] font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C5A059]" />
                  <span>{film.duration}</span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-white mb-2 group-hover:text-[#C5A059] transition-colors">
                    {film.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-stone-400 mb-6 font-light">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{film.location}</span>
                    </span>
                    <span>&bull;</span>
                    <span className="text-white">{film.couple}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setActiveFilm(film)}
                    className="flex-1 bg-[#FAF8F5] hover:bg-[#C5A059] text-[#1A1918] hover:text-white py-3 text-xs font-semibold uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Teaser</span>
                  </button>

                  <a
                    href={film.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/20 hover:border-white text-stone-300 hover:text-white transition-colors flex items-center justify-center"
                    title="Open on Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Player */}
        {activeFilm && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setActiveFilm(null)}
          >
            <div 
              className="relative max-w-3xl w-full bg-[#1A1918] border border-white/20 p-8 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveFilm(null)}
                className="absolute top-4 right-4 text-white hover:text-[#C5A059] p-2"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-[#C5A059] text-[10px] font-mono uppercase tracking-widest mb-2">
                {activeFilm.category} &bull; {activeFilm.couple}
              </div>

              <h3 className="font-serif text-3xl font-normal text-white mb-6">
                {activeFilm.title}
              </h3>

              {/* Instagram Reel Container */}
              <div className="relative aspect-video bg-black border border-white/20 mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={activeFilm.thumbnailUrl}
                  alt={activeFilm.title}
                  className="w-full h-full object-cover filter brightness-50"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <Instagram className="w-10 h-10 text-[#C5A059] mb-3" />
                  <p className="font-serif text-xl font-normal text-white mb-2">
                    Watch Full Reel on Instagram
                  </p>
                  <p className="text-xs text-stone-400 max-w-sm mb-6 font-light">
                    Licensed soundtrack audio and 4K cinema master preview available directly on our official channel.
                  </p>
                  <a
                    href={activeFilm.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FAF8F5] text-[#1A1918] hover:bg-[#C5A059] hover:text-white px-8 py-3 text-xs uppercase font-semibold tracking-[0.2em] flex items-center gap-2 transition-all"
                  >
                    <span>Open Instagram Reel</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/15">
                <div className="text-xs text-stone-400 font-light">
                  {activeFilm.location} &bull; Muskan Royal Photo Studio Cinema Crew
                </div>

                <a
                  href={`https://wa.me/919518004158?text=${encodeURIComponent(`Hello Muskan Royal Photo Studio! I loved your film teaser: "${activeFilm.title}". I would like to inquire about 4K cinematic film packages.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

