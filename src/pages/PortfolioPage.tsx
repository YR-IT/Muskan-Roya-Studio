import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/photographyData';
import { CategoryType, GalleryItem } from '../types';
import { Camera, MapPin, Sparkles, Eye, X, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal, StaggerItem, StaggerList } from '../components/MotionHelpers';

interface PortfolioPageProps {
  onOpenBooking: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories: (CategoryType | 'All')[] = [
    'All',
    'Wedding',
    'Pre-Wedding',
    'Haldi & Mehendi',
    'Engagement & Reception',
    "Groom's Portrait"
  ];

  const filteredItems = selectedCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-[#FAF8F5] text-[#1A1918] min-h-screen">
      {/* Portfolio Header */}
      <section className="bg-[#1A1918] text-white py-16 text-center border-b border-white/10 relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.15),transparent_30%)]"
          animate={{ opacity: [0.65, 1, 0.72] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Reveal className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[#C5A059] uppercase tracking-[0.25em] text-xs font-mono mb-2 block">
            Visual Gallery
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white mb-4">
            Our Wedding Photography Portfolio
          </h1>
          <p className="text-stone-400 text-sm max-w-xl mx-auto font-light">
            Browse through our curated collection of candid moments, grand ceremonies, pre-wedding romance, and 4K drone visuals.
          </p>
        </Reveal>
      </section>

      {/* Category Filter Pills */}
      <section className="py-8 bg-white border-b border-[#E7E3DC]">
        <StaggerList className="max-w-7xl mx-auto px-6 flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <StaggerItem key={cat}>
              <motion.button
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1A1918] text-[#FAF8F5] shadow-sm'
                    : 'bg-[#FAF8F5] text-stone-600 hover:bg-[#E7E3DC]'
                }`}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {cat}
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <StaggerList key={selectedCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <StaggerItem key={item.id}>
              <div
                onClick={() => setActiveLightboxItem(item)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="overflow-hidden bg-stone-100 aspect-[4/5] relative mb-3 rounded-lg">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[10%] group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-[#1A1918]/80 text-[#FAF8F5] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1">
                    {item.category}
                  </div>
                </div>

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
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#1A1918] transition-colors shrink-0 mt-1" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>

        <Reveal className="mt-16 text-center bg-white border border-[#E7E3DC] p-10 rounded-xl">
          <h3 className="text-2xl font-serif text-[#1A1918] mb-3">Love Our Style?</h3>
          <p className="text-stone-500 text-xs sm:text-sm max-w-md mx-auto mb-6">
            Let us capture your royal celebration with the same artistic precision and passion.
          </p>
          <button
            onClick={onOpenBooking}
            className="bg-[#1A1918] text-white hover:bg-[#C5A059] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all inline-flex items-center gap-2"
          >
            <span>Book Your Date Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </Reveal>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveLightboxItem(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="relative max-w-4xl w-full bg-[#1A1918] text-white rounded-lg overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.96, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 text-white hover:text-[#C5A059] z-10 p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-[#1A1918] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block mb-1">
                  {activeLightboxItem.category} • {activeLightboxItem.location}
                </span>
                <h3 className="font-serif text-xl text-white">{activeLightboxItem.title}</h3>
                <p className="text-xs text-stone-400 font-light mt-1">{activeLightboxItem.description}</p>
              </div>

              <button
                onClick={() => {
                  setActiveLightboxItem(null);
                  onOpenBooking();
                }}
                className="bg-[#FAF8F5] text-[#1A1918] hover:bg-[#C5A059] hover:text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider shrink-0"
              >
                Book Date
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
