import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/photographyData';
import { ServiceItem } from '../types';
import { motion } from 'motion/react';
import { 
  Camera, 
  Film, 
  Heart, 
  Sun, 
  Music, 
  Sparkles, 
  Video, 
  Smile, 
  Check, 
  ArrowRight,
  Calculator,
  MessageCircle,
  X,
  BookOpen
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';
import { Reveal, StaggerItem, StaggerList } from './MotionHelpers';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  // Package Estimator Calculator state
  const [selectedPackage, setSelectedPackage] = useState<string>('Silver Package');
  const [calcDays, setCalcDays] = useState<number>(1);

  const packagePrices: Record<string, number> = {
    'Silver Package': 45000,
    'Gold Package': 74999,
    'Premium Package': 120000,
    'Premium Gold Package': 180000,
  };

  // Estimate calculation formula
  const calculateEstimatedTotal = () => {
    let base = packagePrices[selectedPackage] * calcDays;
    return {
      min: Math.round(base * 0.95),
      max: Math.round(base * 1.05)
    };
  };

  const estimatedCost = calculateEstimatedTotal();

  const handleSendWhatsAppEstimate = () => {
    const text = `Hello Muskan Royal Photo Studio! I calculated an estimated package on your website:
- Selected Package: ${selectedPackage}
- Duration: ${calcDays} Day(s)
- Estimated Range: ₹${estimatedCost.min.toLocaleString('en-IN')} - ₹${estimatedCost.max.toLocaleString('en-IN')}

I would like to discuss exact availability and lock in this quote for my dates.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#1A1918]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[1px] bg-[#C5A059]" />
              <span className="text-[#A38036] uppercase tracking-[0.28em] text-[10px] sm:text-xs font-semibold">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.08]">
              A more spacious service layout with larger imagery and cleaner detail hierarchy.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Each package is presented like a premium card, making the offering easier to scan on mobile while feeling more refined on desktop.
            </p>
          </div>
          <p className="text-stone-500 text-xs sm:text-sm max-w-md font-light">
            Premium Quality • Creative Storytelling • Professional Team • Fast Delivery • Cinematic Finish
          </p>
        </div>

        <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {SERVICES_DATA.map((service, index) => (
            <StaggerItem key={service.id} className="h-full">
              <div className="group overflow-hidden rounded-[1.75rem] border border-[#E7E3DC] bg-white shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between">
              <div className="relative overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className={`w-full h-auto object-contain transition-transform duration-700 ${
                    service.id === 'gold-package' ? 'scale-[1.18] group-hover:scale-[1.25]' : 'group-hover:scale-105'
                  }`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/65 via-transparent to-transparent" />
                <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-3 text-white">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.26em] text-[#EFE8D8] mb-2">0{index + 1}</div>
                    <h3 className="font-serif text-2xl font-normal leading-tight max-w-sm">{service.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-5 flex flex-col flex-grow justify-between">
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="grid grid-cols-1 gap-2">
                  {service.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-end border-t border-[#E7E3DC]">
                  <motion.button
                    onClick={() => setSelectedServiceModal(service)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#1A1918] hover:text-[#C5A059] transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                </div>
              </div>
                </div>
              </StaggerItem>
          ))}
          </StaggerList>

          <Reveal className="rounded-[2rem] bg-[#1A1918] text-[#FAF8F5] p-6 sm:p-8 lg:p-10 border border-[#1A1918] shadow-[0_24px_80px_rgba(26,25,24,0.22)]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div>
                <span className="text-[#C5A059] text-[10px] uppercase font-mono tracking-[0.28em] block mb-2">
                  Custom Estimator
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-normal text-white max-w-2xl">
                  Calculate an estimated package investment in one clean panel.
                </h3>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm max-w-md font-light">
                This remains interactive, but the presentation is now tighter and more premium.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
                    1. Select Wedding Package
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Silver Package',
                      'Gold Package',
                      'Premium Package',
                      'Premium Gold Package'
                    ].map((title) => {
                      const isSelected = selectedPackage === title;
                      return (
                        <button
                          key={title}
                          type="button"
                          onClick={() => setSelectedPackage(title)}
                          className={`p-3 text-xs text-left transition-all flex items-center justify-between border ${
                            isSelected
                              ? 'border-[#C5A059] bg-[#C5A059]/10 text-white font-medium'
                              : 'border-white/15 text-stone-400 hover:border-white/40'
                          }`}
                        >
                          <span>{title}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
                    2. Celebration Duration (Days)
                  </label>
                  <div className="flex items-center gap-3">
                    {[1, 2, 3, 4].map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setCalcDays(day)}
                        className={`flex-1 py-3 text-xs font-mono border transition-all ${
                          calcDays === day
                            ? 'bg-[#C5A059] text-[#1A1918] border-[#C5A059] font-bold'
                            : 'border-white/15 text-stone-400 hover:border-white/40'
                        }`}
                      >
                        {day} {day === 1 ? 'Day' : 'Days'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 border border-white/15 rounded-[1.5rem] p-6 sm:p-8 flex flex-col justify-between h-full text-center">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-2">
                    Estimated Investment Range
                  </span>
                  
                  <div className="text-3xl font-serif font-normal text-[#C5A059] my-3">
                    ₹{estimatedCost.min.toLocaleString('en-IN')} – ₹{estimatedCost.max.toLocaleString('en-IN')}
                  </div>

                  <p className="text-xs text-stone-400 font-light mb-6 leading-relaxed">
                    Includes color grading, dedicated crew management, and professional equipment.
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleSendWhatsAppEstimate}
                    className="w-full bg-[#25D366] text-white py-3.5 text-xs font-semibold uppercase tracking-[0.18em] flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-[#FAF8F5] text-[#1A1918] hover:bg-[#C5A059] hover:text-white py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all"
                  >
                    Book Your Wedding Date
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div 
          className="fixed inset-0 z-50 bg-[#1A1918]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedServiceModal(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white p-8 border border-[#E7E3DC] text-[#1A1918]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6 pb-4 border-b border-[#E7E3DC]">
              <div>
                <h3 className="font-serif text-3xl font-normal text-[#1A1918]">
                  {selectedServiceModal.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedServiceModal(null)}
                className="text-stone-400 hover:text-[#1A1918] p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-6 font-light">
              {selectedServiceModal.fullDesc}
            </p>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-3">Included Highlights:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedServiceModal.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-700 bg-[#FAF8F5] p-3 border border-[#E7E3DC]">
                    <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-[#E7E3DC]">
              <button
                onClick={() => {
                  setSelectedServiceModal(null);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="w-full sm:flex-1 bg-[#1A1918] text-[#FAF8F5] hover:bg-[#C5A059] py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all"
              >
                Send Inquiry
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Muskan Royal Photo Studio! I would like to inquire about the ${selectedServiceModal.title} package.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 border border-[#1A1918] text-[#1A1918] hover:bg-[#1A1918] hover:text-white py-3.5 text-xs font-semibold uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
