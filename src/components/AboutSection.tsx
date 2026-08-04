import React from 'react';
import { ASSET_IMAGES, BUSINESS_INFO, WHY_CHOOSE_US } from '../data/photographyData';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal, StaggerItem, StaggerList } from './MotionHelpers';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onOpenBooking, 
  onNavigate 
}) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#1A1918]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <Reveal className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[1px] bg-[#C5A059]" />
              <span className="text-[#A38036] uppercase tracking-[0.28em] text-[10px] sm:text-xs font-semibold">
                About Us
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.08] max-w-xl">
                A refined photography studio built around emotion and ceremony
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl">
                {BUSINESS_INFO.name} preserves weddings with a calmer, more cinematic structure. Instead of overwhelming the page, we let the story breathe through large imagery, editorial spacing, and precise information hierarchy.
              </p>
            </div>

            <blockquote className="border-l-2 border-[#C5A059] pl-6 py-1 font-serif italic text-2xl sm:text-3xl leading-snug text-[#1A1918] max-w-xl">
              "We don't just document events. We shape them into heirloom-worthy visual stories."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              {[
                { label: 'Weddings', value: BUSINESS_INFO.weddingsCaptured },
                { label: 'Experience', value: BUSINESS_INFO.experienceYears },
                { label: 'Coverage', value: BUSINESS_INFO.citiesCovered.split(',')[0] }
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#E7E3DC] bg-white p-5 text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-serif text-[#1A1918] leading-none">{item.value}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-stone-500">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={onOpenBooking}
                className="bg-[#1A1918] text-[#FAF8F5] hover:bg-[#C5A059] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 rounded-full"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Book Your Wedding Date</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>

              <button
                onClick={() => onNavigate('services')}
                className="border border-[#1A1918] text-[#1A1918] hover:bg-[#1A1918] hover:text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all rounded-full"
              >
                View Services & Pricing
              </button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 space-y-4 lg:sticky lg:top-28" delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_30px_80px_rgba(26,25,24,0.14)] aspect-[4/5]">
              <img
                src={ASSET_IMAGES.bridalPortrait}
                alt="Muskan Royal Photo Studio Wedding Portraiture"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/35 via-transparent to-transparent" />
            </div>

            <StaggerList className="grid grid-cols-2 gap-4">
              {[
                'Luxury Wedding Photography',
                '4K Cinematic Wedding Films',
                'Pre-Wedding Shoots',
                'Drone Cinematography'
              ].map((item) => (
                <StaggerItem key={item} className="rounded-2xl border border-[#E7E3DC] bg-white px-4 py-4 flex items-center gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#EFE8D8] text-[#A38036] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#1A1918] leading-snug">{item}</span>
                </StaggerItem>
              ))}
            </StaggerList>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1px] bg-[#C5A059]" />
                <span className="text-[#A38036] uppercase tracking-[0.25em] text-xs font-semibold">
                  Why Choose Us
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-normal text-[#1A1918] max-w-2xl">
                A calmer structure with stronger story hierarchy and premium visual pacing.
              </h3>
            </div>
            <p className="text-stone-500 text-xs sm:text-sm max-w-md font-light">
              The look is still warm and classic, but the layout now reads more like a polished studio portfolio.
            </p>
          </div>

          <StaggerList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {WHY_CHOOSE_US.map((item, index) => (
              <StaggerItem key={index} className="rounded-[1.5rem] border border-[#E7E3DC] bg-white p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#C5A059] transition-all">
                <div className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.28em] mb-4">
                  0{index + 1}
                </div>
                <h4 className="text-lg sm:text-xl font-serif font-medium text-[#1A1918] mb-3">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </div>
    </section>
  );
};
