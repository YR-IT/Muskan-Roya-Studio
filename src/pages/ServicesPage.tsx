import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/photographyData';
import { Check, MessageCircle, Calculator, Camera, Sparkles, Crown, Gem, Calendar, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal, StaggerItem, StaggerList } from '../components/MotionHelpers';

interface ServicesPageProps {
  onOpenBooking: () => void;
  onNavigate: (pageId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking, onNavigate }) => {
  // Estimator State
  const [selectedPackage, setSelectedPackage] = useState<string>('Silver Package');
  const [calcDays, setCalcDays] = useState<number>(1);

  const packagePrices: Record<string, number> = {
    'Silver Package': 45000,
    'Gold Package': 74999,
    'Premium Package': 120000,
    'Premium Gold Package': 180000,
  };

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

  const calculateEstimatedTotal = () => {
    let base = packagePrices[selectedPackage] * calcDays;
    return {
      min: Math.round(base * 0.95),
      max: Math.round(base * 1.05)
    };
  };

  const estimatedCost = calculateEstimatedTotal();

  const handleBookWhatsApp = (packageName: string) => {
    const text = `Hello Muskan Royal Photo Studio! I am interested in booking the *${packageName}* for my wedding. Please share the details and check availability for my dates.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1A1918] min-h-screen">
      {/* Services Banner Header */}
      <section className="bg-[#1A1918] text-white py-20 text-center border-b border-white/10 relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.16),transparent_28%)]"
          animate={{ opacity: [0.7, 1, 0.75] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Reveal className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[#C5A059] uppercase tracking-[0.25em] text-xs font-mono mb-3 block">
            Special Wedding Packages Available
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white mb-4">
            Services & Packages
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Premium Quality • Creative Storytelling • Professional Team • Fast Delivery • Stunning Cinematic Experience
          </p>
        </Reveal>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch mb-20">
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

        <Reveal className="bg-[#1A1918] text-white p-8 sm:p-12 rounded-xl border border-white/10 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block mb-1">
                Calculator Tool
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-normal text-white">
                Customize & Estimate Your Package
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-2">
                    Select Wedding Package:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                          className={`p-2.5 text-xs text-left transition-all flex items-center justify-between border rounded ${
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

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-2">
                      Duration:
                    </label>
                    <select
                      value={calcDays}
                      onChange={(e) => setCalcDays(Number(e.target.value))}
                      className="w-full bg-white/10 border border-white/20 p-2.5 text-xs text-white rounded focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value={1} className="bg-[#1A1918]">1 Day Celebration</option>
                      <option value={2} className="bg-[#1A1918]">2 Days Multi-Event</option>
                      <option value={3} className="bg-[#1A1918]">3 Days Grand Wedding</option>
                      <option value={4} className="bg-[#1A1918]">4 Days Destination Wedding</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 border border-white/15 p-6 rounded-xl text-center">
                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-1">
                  Estimated Investment
                </span>
                <div className="text-3xl font-serif font-normal text-[#C5A059] my-2">
                  ₹{estimatedCost.min.toLocaleString('en-IN')} – ₹{estimatedCost.max.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-stone-400 font-light mb-6">
                  Includes full professional team, equipment, and editing.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-[#FAF8F5] text-[#1A1918] hover:bg-[#C5A059] hover:text-white py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded"
                >
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
