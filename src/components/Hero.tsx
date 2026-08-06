import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';
import { motion } from 'motion/react';
import { TypewriterText } from './MotionHelpers';


// Animated counter that counts up from 0 to target when it enters view
function CountUp({ to, suffix = '', duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * to));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF8F5] text-[#1A1918]">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,160,89,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(26,25,24,0.06),transparent_32%)]"
        animate={{ opacity: [0.65, 1, 0.72], scale: [1, 1.015, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#C5A059]/10 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-[#1A1918]/5 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              className="relative rounded-[2rem] overflow-hidden bg-[#1A1918] shadow-[0_30px_90px_rgba(26,25,24,0.22)] aspect-[4/5] lg:aspect-[5/6]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <video
                className="w-full h-full object-cover object-center scale-[1.02]"
                src="https://res.cloudinary.com/xx77fplo/video/upload/v1786002421/WhatsApp_Video_2026-08-06_at_09.39.48_twus4m.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/55 via-transparent to-transparent" />
              <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between gap-4 text-white">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#EFE8D8] mb-2">Royal Storytelling</p>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal max-w-md leading-tight">
                    Motion-filled wedding stories in a single cinematic frame
                  </h2>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-8 lg:pl-4">
            <div className="space-y-4">
              <p className="text-[#A38036] uppercase tracking-[0.32em] text-[10px] sm:text-xs font-semibold">
                Luxury Wedding Photography & Cinematic Films
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.05] max-w-xl">
                <TypewriterText text="Your Love Deserves Royal Memories" speed={34} />
              </h1>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl">
                We craft weddings like an editorial story: graceful portraits, candid emotion, and cinematic films that feel timeless. The palette stays classic, the structure becomes cleaner, and the storytelling takes the lead.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { to: 500, suffix: '+', label: 'Weddings Captured' },
                { to: 8, suffix: '+', label: 'Years of Experience' },
                { to: 100, suffix: '%', label: 'Client Satisfaction' }
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#E7E3DC] bg-white/70 backdrop-blur-sm p-2 sm:p-4 text-center flex flex-col justify-center min-h-[90px] sm:min-h-0">
                  <div className="text-xl sm:text-3xl font-serif text-[#1A1918] leading-none">
                    <CountUp to={item.to} suffix={item.suffix} />
                  </div>
                  <div className="mt-1.5 text-[8px] sm:text-[10px] leading-tight uppercase tracking-[0.05em] sm:tracking-[0.22em] text-stone-500 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#1A1918] text-[#FAF8F5] hover:bg-[#C5A059] hover:text-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 rounded-full"
              >
                <span>Book Your Wedding Date</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('portfolio')}
                className="border border-[#1A1918] text-[#1A1918] hover:bg-[#1A1918] hover:text-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all rounded-full"
              >
                Explore Portfolio
              </button>
            </div>

            <div className="rounded-[1.75rem] border border-[#E7E3DC] bg-white/80 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#A38036] font-semibold">
                <span>Wedding Photography</span>
                <span>•</span>
                <span>Cinematic Films</span>
                <span>•</span>
                <span>Pre-Wedding</span>
                <span>•</span>
                <span>Drone Shots</span>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-stone-600">
                <span>{BUSINESS_INFO.fullAddress}</span>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1A1918] font-semibold hover:text-[#C5A059] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Quick WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
