import React, { useState } from 'react';
import { GalleryItem, CategoryType } from '../types';
import { GALLERY_ITEMS } from '../data/photographyData';
import { MapPin, X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface PortfolioGalleryProps {
  onOpenBooking: () => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories: CategoryType[] = [
    'All',
    'Wedding',
    'Pre-Wedding',
    'Haldi & Mehendi',
    'Engagement & Reception',
    "Groom's Portrait",
    'Baby & Maternity'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => 
        prev === 0 ? filteredItems.length - 1 : (prev! - 1)
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => 
        (prev! + 1) % filteredItems.length
      );
    }
  };

  const currentLightboxItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="portfolio" className="py-24 bg-white text-[#1A1918]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Eyebrow & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-[#E7E3DC]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-[#A38036] uppercase tracking-[0.25em] text-xs font-semibold">
                Curated Visual Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#1A1918]">
              Portfolio Gallery
            </h2>
          </div>
          <p className="text-stone-500 text-xs sm:text-sm max-w-md font-light">
            Every frame is composed with fine-art precision — celebrating heritage, spontaneous laughter, and sacred traditions across India & beyond.
          </p>
        </div>

        {/* Minimalist Filter Bar */}
        <div className="flex items-center gap-6 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-[#E7E3DC]/60">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium uppercase tracking-[0.18em] transition-all whitespace-nowrap shrink-0 pb-2 relative ${
                  isActive
                    ? 'text-[#1A1918] font-semibold'
                    : 'text-stone-400 hover:text-[#1A1918]'
                }`}
              >
                {cat}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C5A059]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="overflow-hidden bg-stone-100 aspect-[4/5] relative mb-3">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[10%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Category Label */}
                <div className="absolute top-4 left-4 bg-[#1A1918]/80 text-[#FAF8F5] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1">
                  {item.category}
                </div>
              </div>

              {/* Photo Title & Location */}
              <div className="flex items-start justify-between gap-2 pt-1">
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#1A1918] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-light mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C5A059]" />
                    <span>{item.location}</span>
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#1A1918] transition-colors shrink-0 mt-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 border border-[#E7E3DC]">
            <p className="font-serif text-xl text-stone-600">No images available in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-3 text-xs uppercase tracking-widest text-[#C5A059] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Minimalist Booking Banner */}
        <div className="mt-20 border border-[#1A1918] p-8 md:p-12 text-center bg-[#1A1918] text-[#FAF8F5]">
          <h3 className="text-2xl sm:text-4xl font-serif font-normal mb-3">
            Inquire About Date Availability
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-light">
            We limit the number of commissions each season to ensure exquisite craftsmanship for every client.
          </p>
          <button
            onClick={onOpenBooking}
            className="bg-[#FAF8F5] text-[#1A1918] hover:bg-[#C5A059] hover:text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all"
          >
            Check Calendar Availability
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-[#1A1918]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#1A1918] border border-white/20 text-[#FAF8F5] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 text-white hover:text-[#C5A059] p-2"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Photo Viewport */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px]">
              <img
                src={currentLightboxItem.imageUrl}
                alt={currentLightboxItem.title}
                className="max-h-[80vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 border border-white/20 bg-black/40 hover:bg-black/80 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 border border-white/20 bg-black/40 hover:bg-black/80 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Sidebar Details */}
            <div className="w-full md:w-80 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/15 bg-[#1A1918]">
              <div>
                <span className="text-[#C5A059] text-[10px] uppercase font-mono tracking-widest block mb-2">
                  {currentLightboxItem.category}
                </span>

                <h3 className="font-serif text-2xl font-normal leading-snug mb-3">
                  {currentLightboxItem.title}
                </h3>

                <p className="text-xs text-stone-400 flex items-center gap-1.5 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{currentLightboxItem.location}</span>
                </p>

                <p className="text-xs text-stone-300 leading-relaxed font-light mb-6">
                  {currentLightboxItem.description}
                </p>
              </div>

              <button
                onClick={() => {
                  closeLightbox();
                  onOpenBooking();
                }}
                className="w-full bg-[#FAF8F5] text-[#1A1918] hover:bg-[#C5A059] hover:text-white py-3 text-xs uppercase tracking-[0.2em] font-semibold transition-all"
              >
                Inquire For Dates
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

