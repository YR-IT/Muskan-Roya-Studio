import React, { useState } from 'react';
import { CINEMATIC_FILMS, BUSINESS_INFO } from '../data/photographyData';
import { CinematicFilm } from '../types';
import { Play, Instagram, MapPin, Clock, X, ExternalLink, MessageCircle, Film } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal, StaggerItem, StaggerList } from '../components/MotionHelpers';

interface FilmsPageProps {
  onOpenBooking: () => void;
}

export const FilmsPage: React.FC<FilmsPageProps> = ({ onOpenBooking }) => {
  const [activeFilm, setActiveFilm] = useState<CinematicFilm | null>(null);

  return (
    <div className="bg-[#1A1918] text-[#FAF8F5] min-h-screen">
      {/* Films Header */}
      <section className="py-20 text-center border-b border-white/10 relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.16),transparent_28%)]"
          animate={{ opacity: [0.7, 1, 0.75] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Reveal className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[#C5A059] uppercase tracking-[0.25em] text-xs font-mono mb-3 block">
            4K Cinematic Experience
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white mb-4">
            Cinematic Wedding Films
          </h1>
          <p className="text-stone-400 text-sm max-w-xl mx-auto font-light">
            Hollywood-grade cinema cameras, live audio vow recordings, licensed music scores, and sweeping 4K aerial cinematography.
          </p>
        </Reveal>
      </section>

      {/* Featured Video Showcase Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CINEMATIC_FILMS.map((film) => (
            <StaggerItem key={film.id}>
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-[#C5A059] transition-all flex flex-col justify-between">
              <div 
                className="relative aspect-video bg-black overflow-hidden cursor-pointer"
                onClick={() => setActiveFilm(film)}
              >
                <img
                  src={film.thumbnailUrl}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-[#1A1918]/90 text-[#C5A059] px-3 py-1 text-[10px] uppercase font-mono tracking-widest border border-white/10 rounded">
                  {film.category}
                </div>

                <div className="absolute bottom-4 right-4 bg-black/80 text-stone-300 px-3 py-1 text-[10px] font-mono rounded flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C5A059]" />
                  <span>{film.duration}</span>
                </div>
              </div>

              <div className="p-6">
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

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setActiveFilm(film)}
                    className="flex-1 bg-[#FAF8F5] hover:bg-[#C5A059] text-[#1A1918] hover:text-white py-3 text-xs font-semibold uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-all rounded"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Film Teaser</span>
                  </button>

                  <a
                    href={film.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/20 hover:border-white text-stone-300 hover:text-white transition-colors flex items-center justify-center rounded"
                    title="Open on Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>

        <Reveal className="mt-16 bg-gradient-to-r from-stone-900 to-[#1A1918] border border-[#C5A059]/40 p-10 rounded-xl text-center">
          <Film className="w-10 h-10 text-[#C5A059] mx-auto mb-4" />
          <h3 className="text-3xl font-serif text-white mb-2">Want a Cinematic Film for Your Wedding?</h3>
          <p className="text-stone-400 text-xs sm:text-sm max-w-lg mx-auto mb-6">
            We capture 4K video, aerial drone shots, live sound recording, and full feature documentary edits.
          </p>
          <button
            onClick={onOpenBooking}
            className="bg-[#C5A059] text-black hover:bg-white hover:text-black px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all rounded"
          >
            Inquire About Film Packages
          </button>
        </Reveal>
      </section>

      {/* Video Lightbox Modal */}
      {activeFilm && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveFilm(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="relative max-w-3xl w-full bg-[#1A1918] border border-white/20 p-8 text-white rounded-xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.96, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => setActiveFilm(null)}
              className="absolute top-4 right-4 text-white hover:text-[#C5A059] p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-[#C5A059] text-[10px] font-mono uppercase tracking-widest mb-2">
              {activeFilm.category} &bull; {activeFilm.couple}
            </div>

            <h3 className="font-serif text-3xl font-normal text-white mb-6">
              {activeFilm.title}
            </h3>

            <div className="relative aspect-video bg-black border border-white/20 mb-6 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={activeFilm.thumbnailUrl}
                alt={activeFilm.title}
                className="w-full h-full object-cover filter brightness-50"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Instagram className="w-10 h-10 text-[#C5A059] mb-3" />
                <p className="font-serif text-xl font-normal text-white mb-2">
                  Watch Full Reel on Instagram
                </p>
                <p className="text-xs text-stone-400 max-w-sm mb-6 font-light">
                  4K master preview and audio live vows available on our official channel.
                </p>
                <a
                  href={activeFilm.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FAF8F5] text-[#1A1918] hover:bg-[#C5A059] hover:text-white px-8 py-3 text-xs uppercase font-semibold tracking-[0.2em] flex items-center gap-2 transition-all rounded"
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
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Muskan Royal Photo Studio! I loved your film teaser: "${activeFilm.title}". I would like to inquire about 4K cinematic film packages.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 rounded"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
