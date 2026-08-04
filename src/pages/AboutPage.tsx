import React from 'react';
import { ASSET_IMAGES, BUSINESS_INFO } from '../data/photographyData';
import { ArrowRight, Check, Award, Clock, HeartHandshake, Camera, Film, Users, ShieldCheck, Target } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
  onNavigate: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1918]">
      {/* Editorial Header Banner */}
      <section className="relative py-20 bg-[#1A1918] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#C5A059] uppercase tracking-[0.3em] text-xs font-mono mb-3 block">
            About Muskan Royal Photo Studio
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white mb-6">
            Preserving Emotions & Royal Memories
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Crafting luxury wedding photography and 4K cinematic films with artistic vision, authentic storytelling, and unmatched dedication.
          </p>
        </div>
      </section>

      {/* Main Story & Values Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-[#C5A059]/10 text-[#A38036] px-3.5 py-1 text-xs uppercase font-mono tracking-widest border border-[#C5A059]/30">
              Welcome to Muskan Royal Photo Studio
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1918] leading-snug">
              Every Wedding is a Once-in-a-Lifetime Royal Celebration
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              At <strong>Muskan Royal Photo Studio</strong>, we believe every wedding is filled with love, deep-rooted traditions, unscripted emotions, and unforgettable moments. Our passion is to preserve these precious memories through fine-art luxury photography and cinematic storytelling.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              With years of creative experience, we specialize in Luxury Wedding Photography, 4K Cinematic Films, Candid Photography, Traditional Coverage, Pre-Wedding Shoots, Drone Cinematography, and Premium Albums. We utilize top-tier camera rigs, master prime lenses, specialized lighting, and expert color grading to ensure your memories stay timeless.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img 
              src={ASSET_IMAGES.bridalPortrait} 
              alt="Bridal Portrait" 
              className="w-full h-72 object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-500"
            />
            <img 
              src={ASSET_IMAGES.preWedding} 
              alt="Pre-wedding shoot" 
              className="w-full h-72 object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-500 mt-8"
            />
          </div>
        </div>

        {/* Vision & Mission Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white border border-[#E7E3DC] p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A059]/5 rounded-bl-full" />
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-normal text-[#1A1918] mb-4">Our Vision</h3>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              To become one of India's most trusted and admired luxury wedding photography studios by delivering world-class quality, artistic storytelling, and an unforgettable client experience.
            </p>
          </div>

          <div className="bg-white border border-[#E7E3DC] p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A059]/5 rounded-bl-full" />
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-normal text-[#1A1918] mb-4">Our Mission</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-light">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Capture every wedding with creativity, passion, and perfection.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Deliver premium-quality photography and 4K cinematic films.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Preserve genuine emotions and timeless royal memories.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Provide luxury albums with exceptional craftsmanship.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="bg-[#1A1918] text-white p-10 sm:p-16 rounded-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block mb-2">Excellence & Trust</span>
            <h3 className="text-3xl font-serif font-normal">Why Choose Muskan Royal Photo Studio?</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Luxury Wedding Photography', desc: 'High-art photography with professional cameras & advanced lighting.' },
              { title: '4K Cinematic Films', desc: 'Hollywood-grade cinematic films with live vows audio and custom scores.' },
              { title: 'Professional Crew', desc: 'Years of creative experience in managing grand celebrations.' },
              { title: 'Creative Storytelling', desc: 'Crafting custom cinematic narratives capturing genuine personalities.' },
              { title: 'Drone Coverage', desc: '4K aerial cinematography capturing grand baraat arrivals & venues.' },
              { title: 'Premium Luxury Albums', desc: 'Handcrafted archival leather albums with exceptional binding.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-[#C5A059] transition-all">
                <div className="text-xs font-mono text-[#C5A059] mb-2">0{idx + 1}</div>
                <h4 className="font-serif text-lg font-medium text-white mb-2">{item.title}</h4>
                <p className="text-stone-400 text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="bg-[#FAF8F5] text-[#1A1918] hover:bg-[#C5A059] hover:text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all inline-flex items-center gap-2"
            >
              <span>Book Your Wedding Date</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
