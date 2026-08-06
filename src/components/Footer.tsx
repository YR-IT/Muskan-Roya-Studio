import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/photographyData';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook, MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1918] text-[#FAF8F5] pt-16 lg:pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="rounded-[2rem] bg-[#C5A059] text-[#1A1918] p-8 sm:p-10 lg:p-12 mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-2xl space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold">Book Us Now</p>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal leading-tight">
              Let us shape your wedding into a graceful visual story.
            </h3>
          </div>
          <motion.button
            onClick={onOpenBooking}
            className="bg-[#1A1918] text-[#FAF8F5] hover:bg-white hover:text-[#1A1918] px-6 py-3.5 text-xs uppercase tracking-[0.22em] font-semibold transition-all rounded-full"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Check Availability
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          <div className="lg:col-span-5 space-y-6">
            <button onClick={() => onNavigate('home')} className="text-left focus:outline-none">
              <Logo size="lg" lightMode />
            </button>

            <p className="font-serif italic text-base text-[#C5A059] font-light">
              "{BUSINESS_INFO.tagline}"
            </p>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-md">
              {BUSINESS_INFO.subtagline}. Luxury wedding photography, cinematic films, candid coverage, pre-wedding sessions, drone work, and premium albums crafted with editorial pacing.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 text-stone-300 hover:text-white hover:border-[#C5A059] flex items-center justify-center transition-all rounded-full" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={BUSINESS_INFO.youtubeUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 text-stone-300 hover:text-white hover:border-[#C5A059] flex items-center justify-center transition-all rounded-full" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={BUSINESS_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 text-stone-300 hover:text-white hover:border-[#C5A059] flex items-center justify-center transition-all rounded-full" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all rounded-full" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059]">Navigation</h3>
            <ul className="space-y-3 text-xs text-stone-400 font-light">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'portfolio', label: 'Portfolio Gallery' },
                { id: 'services', label: 'Services & Packages' },
                { id: 'testimonials', label: 'Client Praise' },
                { id: 'contact', label: 'Book Your Date' }
              ].map((link) => (
                <li key={link.id}>
                  <button onClick={() => onNavigate(link.id)} className="hover:text-white transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059]">Address & Contact</h3>
            <div className="space-y-3 text-xs text-stone-400 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.googleSitesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.fullAddress}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-medium transition-colors">{BUSINESS_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">{BUSINESS_INFO.email}</a>
              </p>
              <div className="pt-2">
                <a href={BUSINESS_INFO.googleSitesUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#C5A059] hover:underline flex items-center gap-1 font-mono uppercase tracking-wider">
                  <span>Google Maps Location</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
          <p>© {currentYear} Muskan Royal Photo Studio. All Rights Reserved.</p>
          <p>Capturing Emotions • Preserving Royal Memories</p>
        </div>
        <div className="pt-4 text-center text-[10px] text-stone-600 font-mono border-t border-white/5 mt-4">
          <p>
            Designed &amp; Developed by{' '}
            <a
              href="https://yritsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:text-white transition-colors hover:underline"
            >
              YR IT Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
