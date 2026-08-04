import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MapPin, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';
import { motion } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  onNavigate,
  onOpenBooking 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home', num: '01' },
    { id: 'about', label: 'About', num: '02' },
    { id: 'portfolio', label: 'Portfolio', num: '03' },
    { id: 'services', label: 'Services', num: '04' },
    { id: 'testimonials', label: 'Reviews', num: '05' },
    { id: 'contact', label: 'Contact', num: '06' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div 
        className={`bg-[#1A1918] text-stone-300 transition-all duration-300 border-b border-white/10 ${
          isScrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'h-auto py-2 px-6 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono tracking-wider gap-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3 h-3 text-[#C5A059]" />
              <span>{BUSINESS_INFO.location}</span>
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="hidden sm:inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline font-serif italic text-stone-400 text-xs normal-case tracking-normal">
              Luxury Wedding Photography & Cinematic Films
            </span>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:text-white transition-colors flex items-center gap-1 uppercase font-medium text-[10px]"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span>WhatsApp Direct</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-3 shadow-sm border-b border-[#E7E3DC]' 
            : 'bg-[#FAF8F5]/92 backdrop-blur-sm py-4 border-b border-[#E7E3DC]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button 
            onClick={() => handleLinkClick('home')} 
            className="text-left focus:outline-none group"
            aria-label="Muskan Royal Photo Studio"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </button>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center justify-center flex-1 gap-8">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <motion.button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-[11px] font-mono tracking-[0.18em] uppercase transition-all duration-200 py-1.5 ${
                    isActive
                      ? 'text-[#1A1918] font-bold'
                      : 'text-stone-500 hover:text-[#1A1918]'
                  }`}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Consultation CTA */}
          <div className="hidden xl:flex items-center gap-4">
            <motion.button
              onClick={onOpenBooking}
              className="bg-[#1A1918] text-[#FAF8F5] hover:bg-[#C5A059] hover:text-white border border-[#1A1918] hover:border-[#C5A059] px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-full"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 xl:hidden">
            <motion.button
              onClick={onOpenBooking}
              className="bg-[#1A1918] text-[#FAF8F5] hover:bg-[#C5A059] px-3.5 py-2 text-[10px] uppercase tracking-widest font-medium transition-colors rounded-full"
              whileTap={{ scale: 0.97 }}
            >
              Book Now
            </motion.button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1A1918] hover:text-[#C5A059] focus:outline-none transition-colors"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Overlay Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[57px] z-40 bg-[#FAF8F5] xl:hidden flex flex-col justify-between p-8 overflow-y-auto animate-fadeIn border-t border-[#E7E3DC]">
          <div className="max-w-md mx-auto w-full py-4 space-y-6">
            <div className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C5A059] border-b border-[#E7E3DC] pb-3">
              Navigation
            </div>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between py-2 text-left group transition-all ${
                      isActive ? 'text-[#1A1918]' : 'text-stone-500 hover:text-[#1A1918]'
                    }`}
                  >
                    <span className="font-serif text-2xl font-normal tracking-wide">
                      {link.label}
                    </span>
                    <span className="font-mono text-xs text-[#C5A059]">
                      {link.num}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Footer & Quick Actions */}
          <div className="max-w-md mx-auto w-full pt-6 border-t border-[#E7E3DC] space-y-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#1A1918] text-[#FAF8F5] hover:bg-[#C5A059] py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all"
            >
              Book Your Wedding Date
            </button>

            <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono pt-2">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#1A1918]">
                {BUSINESS_INFO.phone}
              </a>
              <span>•</span>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline flex items-center gap-1"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
