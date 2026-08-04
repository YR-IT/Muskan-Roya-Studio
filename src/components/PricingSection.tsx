import React from 'react';
import { motion } from 'motion/react';
import { Camera, Sparkles, Crown, Gem, Check, Calendar, Phone } from 'lucide-react';
import { Reveal, StaggerItem, StaggerList } from './MotionHelpers';
import { BUSINESS_INFO } from '../data/photographyData';

interface PricingSectionProps {
  onOpenBooking: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const packages = [
    {
      name: 'Silver Package',
      price: '₹45,000',
      icon: Camera,
      badge: '📸 Classic',
      description: 'Complete wedding photography coverage capturing your precious moments.',
      features: [
        'Complete wedding photography coverage',
        'Professional photography by experienced photographers',
        'Beautifully captured memories of your special day',
      ],
      popular: false,
      color: 'border-slate-200 bg-white/60',
      accentColor: 'text-slate-500',
    },
    {
      name: 'Gold Package',
      price: '₹74,999',
      icon: Sparkles,
      badge: '🌟 Recommended',
      description: 'Enhanced coverage including both professional photography & videography.',
      features: [
        'Enhanced wedding photography coverage',
        'Professional photography & videography',
        'Premium editing with high-quality final deliverables',
      ],
      popular: false,
      color: 'border-yellow-200 bg-white/60',
      accentColor: 'text-[#C5A059]',
    },
    {
      name: 'Premium Package',
      price: '₹1,20,000',
      icon: Crown,
      badge: '👑 Best Value',
      description: 'Comprehensive cinematic wedding experience with custom album.',
      features: [
        'Comprehensive wedding coverage',
        'Cinematic wedding videography',
        'Creative pre-wedding and special moments shoot',
        'Premium-quality wedding album and professional editing',
      ],
      popular: true,
      color: 'border-[#C5A059] bg-[#FAF8F5]/90 shadow-[0_20px_50px_rgba(197,160,89,0.12)]',
      accentColor: 'text-[#C5A059]',
    },
    {
      name: 'Premium Gold Package',
      price: '₹1,80,000',
      icon: Gem,
      badge: '💎 Luxury Experience',
      description: 'Our most luxurious cinematic package with exclusive presentation.',
      features: [
        'Our most luxurious wedding experience',
        'Complete cinematic wedding coverage',
        'Premium photography & videography',
        'Exclusive creative shoots',
        'Luxury wedding album with exceptional presentation',
      ],
      popular: false,
      color: 'border-amber-400 bg-[#1A1918] text-[#FAF8F5]',
      accentColor: 'text-amber-400',
    },
  ];

  const handleBookWhatsApp = (packageName: string) => {
    const text = `Hello Muskan Royal Photo Studio! I am interested in booking the *${packageName}* for my wedding. Please share the details and check availability for my dates.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#FAF6F0] text-[#3D2314] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-[1px] bg-[#C5A059]" />
            <span className="text-[#A38036] uppercase tracking-[0.28em] text-[10px] sm:text-xs font-semibold">
              Wedding Packages
            </span>
            <span className="w-10 h-[1px] bg-[#C5A059]" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif font-normal leading-[1.1] mt-2">
            Royal Photos – Wedding Packages
          </h2>
          
          <p className="text-[#A38036] font-medium text-sm sm:text-base italic tracking-wide">
            ✨ Celebrate Your Special Day with Timeless Memories ✨
          </p>
          
          <p className="text-stone-500 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto pt-2">
            At <strong>Royal Photos</strong>, we believe every wedding tells a beautiful story. Our thoughtfully crafted wedding packages are designed to capture every precious moment with elegance, creativity, and perfection.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            const isDark = pkg.name === 'Premium Gold Package';
            
            return (
              <StaggerItem key={pkg.name} className="flex">
                <div className={`flex flex-col w-full rounded-[2rem] border p-6 sm:p-8 transition-all duration-300 relative justify-between ${pkg.color} ${pkg.popular ? 'ring-2 ring-[#C5A059] ring-offset-4 ring-offset-[#FAF6F0]' : ''}`}>
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white px-4 py-1 text-[10px] font-semibold tracking-widest uppercase rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}
                  
                  <div>
                    {/* Badge and Icon */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span className={`text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full ${isDark ? 'bg-white/10 text-amber-300' : 'bg-[#FAF6F0] text-[#A38036]'}`}>
                        {pkg.badge}
                      </span>
                      <IconComponent className={`w-5 h-5 ${pkg.accentColor}`} />
                    </div>

                    {/* Header Info */}
                    <div className="space-y-2 mb-6">
                      <h3 className="text-xl sm:text-2xl font-serif font-semibold">
                        {pkg.name}
                      </h3>
                      <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-500'} font-light min-h-[32px]`}>
                        {pkg.description}
                      </p>
                      <div className="pt-2">
                        <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
                          {pkg.price}
                        </span>
                      </div>
                    </div>

                    <hr className={`my-6 ${isDark ? 'border-white/10' : 'border-[#E7E3DC]'}`} />

                    {/* Features list */}
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className={`w-4 h-4 mt-1 shrink-0 ${pkg.accentColor}`} />
                          <span className={`text-xs sm:text-sm font-light ${isDark ? 'text-stone-300' : 'text-stone-600'} leading-snug`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Call to Actions */}
                  <div className="space-y-3 mt-auto">
                    <motion.button
                      onClick={() => handleBookWhatsApp(pkg.name)}
                      className={`w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 border ${
                        isDark 
                          ? 'bg-amber-400 text-stone-900 border-amber-400 hover:bg-transparent hover:text-amber-400' 
                          : 'bg-[#C5A059] text-white border-[#C5A059] hover:bg-transparent hover:text-[#C5A059]'
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>WhatsApp Enquire</span>
                    </motion.button>
                    
                    <button
                      onClick={onOpenBooking}
                      className={`w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 border ${
                        isDark
                          ? 'border-white/15 hover:bg-white/5 text-stone-200'
                          : 'border-stone-200 hover:bg-stone-50 text-stone-600'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Online</span>
                    </button>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerList>

        {/* Footer banner */}
        <Reveal className="mt-20 lg:mt-24 p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#1A1918] to-[#2D2A26] text-[#FAF8F5] relative overflow-hidden shadow-xl text-center">
          <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-xl sm:text-3xl font-serif font-normal">
              Create Memories That Last a Lifetime
            </h3>
            
            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              With <strong>Royal Photos</strong>, every smile, every emotion, and every celebration is captured with passion and artistry—so you can relive your most cherished moments forever.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={onOpenBooking}
                className="bg-white text-stone-900 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A059] hover:text-white transition-all w-full sm:w-auto"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Wedding Today
              </motion.button>
              
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-stone-300 hover:text-[#C5A059] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
