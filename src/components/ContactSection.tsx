import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BUSINESS_INFO } from '../data/photographyData';
import { InquiryFormData } from '../types';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Instagram, Youtube, Facebook, Navigation, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal, StaggerItem, StaggerList } from './MotionHelpers';

// ── EmailJS config read from Vite env vars ──────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

interface ContactSectionProps {
  initialService?: string;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: 'Luxury Wedding Photography & Cinema',
    city: 'Bhiwani / Haryana',
    estimatedGuests: '200 - 500',
    budgetRange: '₹1.5 Lakhs - ₹3 Lakhs',
    message: '',
    servicesNeeded: initialService ? [initialService] : ['Luxury Wedding Photography', '4K Cinematic Wedding Film']
  });

  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckboxChange = (service: string) => {
    if (formData.servicesNeeded.includes(service)) {
      setFormData({ ...formData, servicesNeeded: formData.servicesNeeded.filter(s => s !== service) });
    } else {
      setFormData({ ...formData, servicesNeeded: [...formData.servicesNeeded, service] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitState === 'loading') return;

    setSubmitState('loading');
    setErrorMessage('');

    const templateParams = {
      from_name:  formData.fullName,
      reply_to:   formData.email || 'Not provided',
      phone:      formData.phone,
      event_date: formData.eventDate || 'To be decided',
      city:       formData.city,
      guests:     formData.estimatedGuests,
      services:   formData.servicesNeeded.join(', ') || 'Not specified',
      message:    formData.message || 'No additional message.',
      to_email:   BUSINESS_INFO.email,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitState('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMessage(
        'We could not send your inquiry right now. Please try again or reach us directly on WhatsApp.'
      );
      setSubmitState('error');
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Muskan Royal Photo Studio! Here is my booking inquiry:\n- Name: ${formData.fullName}\n- Phone: ${formData.phone}\n- Email: ${formData.email}\n- Event Date: ${formData.eventDate || 'To be decided'}\n- City/Venue: ${formData.city}\n- Event Type: ${formData.eventType}\n- Estimated Guests: ${formData.estimatedGuests}\n- Services Needed: ${formData.servicesNeeded.join(', ')}\n- Notes: ${formData.message || 'None'}`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] text-[#1A1918]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-[#E7E3DC]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-[#A38036] uppercase tracking-[0.25em] text-xs font-semibold">
                📞 Call / WhatsApp Now: +91 9518004158
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#1A1918]">
              Book Your Wedding Date Today!
            </h2>
          </div>
          <p className="text-stone-500 text-xs sm:text-sm max-w-md font-light">
            🎁 <strong>Book Now &amp; Get Exclusive Wedding Offers</strong><br />
            📅 <strong>Limited Wedding Dates Available</strong>
          </p>
        </div>

        {/* Contact Info Cards */}
        <StaggerList className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StaggerItem>
            <div className="bg-white p-8 border border-[#E7E3DC] hover:border-[#C5A059] transition-all rounded-[1.5rem] shadow-sm">
            <MapPin className="w-5 h-5 text-[#C5A059] mb-4" />
            <h3 className="font-serif font-medium text-lg text-[#1A1918] mb-1">Our Address</h3>
            <p className="text-xs text-stone-500 font-light mb-2">{BUSINESS_INFO.fullAddress}</p>
            <span className="text-[10px] font-mono text-[#C5A059] uppercase">Muskan Royal Photo Studio</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-white p-8 border border-[#E7E3DC] hover:border-[#C5A059] transition-all rounded-[1.5rem] shadow-sm">
            <Phone className="w-5 h-5 text-[#C5A059] mb-4" />
            <h3 className="font-serif font-medium text-lg text-[#1A1918] mb-1">Call / WhatsApp</h3>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm text-[#1A1918] font-bold hover:text-[#C5A059]">
              {BUSINESS_INFO.phone}
            </a>
            <span className="block text-[10px] font-mono text-stone-400 uppercase mt-2">Mon – Sun, 9am - 9pm IST</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-white p-8 border border-[#E7E3DC] hover:border-[#C5A059] transition-all rounded-[1.5rem] shadow-sm">
            <Mail className="w-5 h-5 text-[#C5A059] mb-4" />
            <h3 className="font-serif font-medium text-lg text-[#1A1918] mb-1">Email Inquiry</h3>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xs text-[#1A1918] font-medium hover:text-[#C5A059]">
              {BUSINESS_INFO.email}
            </a>
            <span className="block text-[10px] font-mono text-stone-400 uppercase mt-2">Response Within 24 Hours</span>
            </div>
          </StaggerItem>
        </StaggerList>

        {/* Form and Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Booking Form */}
          <Reveal className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#E7E3DC] rounded-[2rem] shadow-sm">
            <h3 className="text-2xl font-serif font-normal text-[#1A1918] mb-2">
              Book Your Wedding Date
            </h3>
            <p className="text-xs text-stone-500 font-light mb-8">
              Fill out your wedding details to receive an exclusive quote and confirm date availability.
            </p>

            {/* ── SUCCESS STATE ─────────────────────────────────────────────── */}
            {submitState === 'success' ? (
              <motion.div
                className="p-8 bg-[#FAF8F5] border border-[#C5A059] text-center space-y-4 rounded-xl"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle2 className="w-10 h-10 text-[#C5A059] mx-auto" />
                <h4 className="font-serif text-2xl font-normal text-[#1A1918]">Inquiry Received!</h4>
                <p className="text-xs text-stone-600 font-light">
                  Thank you, <strong>{formData.fullName}</strong>. Your inquiry has been sent to{' '}
                  <span className="text-[#C5A059] font-medium">{BUSINESS_INFO.email}</span>.
                  Our team will review your event dates and contact you shortly.
                </p>

                <div className="pt-4">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] inline-flex items-center gap-2 rounded-full"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect on WhatsApp (+91 9518004158)</span>
                  </a>
                </div>
              </motion.div>

            ) : (
              /* ── FORM ──────────────────────────────────────────────────────── */
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-2">WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9518004158"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-2">Event Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-2">City / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Bhiwani, Haryana"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-2">Guest Count</label>
                    <select
                      value={formData.estimatedGuests}
                      onChange={(e) => setFormData({ ...formData, estimatedGuests: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] transition-colors"
                    >
                      <option value="Under 100">Intimate (&lt; 100)</option>
                      <option value="100 - 300">100 - 300 Guests</option>
                      <option value="300 - 600">300 - 600 Guests</option>
                      <option value="600+">600+ Grand Celebration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-3">Services Needed</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      'Luxury Wedding Photography',
                      '4K Cinematic Films',
                      'Candid Photography',
                      'Pre-Wedding Shoot',
                      'Drone Cinematography',
                      'Premium Luxury Albums'
                    ].map((svc) => (
                      <label
                        key={svc}
                        className={`p-3 text-xs border flex items-center gap-2 cursor-pointer transition-all ${
                          formData.servicesNeeded.includes(svc)
                            ? 'border-[#C5A059] bg-[#C5A059]/10 text-[#1A1918] font-medium'
                            : 'border-[#E7E3DC] bg-[#FAF8F5] text-stone-600'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.servicesNeeded.includes(svc)}
                          onChange={() => handleCheckboxChange(svc)}
                          className="accent-[#C5A059]"
                        />
                        <span>{svc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-2">Message &amp; Details</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your wedding plans, venue details, or any special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                {/* ── ERROR BANNER ──────────────────────────────────────────── */}
                {submitState === 'error' && (
                  <motion.div
                    className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* ── ACTION BUTTONS ────────────────────────────────────────── */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <motion.button
                    type="submit"
                    disabled={submitState === 'loading'}
                    className="flex-1 bg-[#1A1918] hover:bg-[#C5A059] disabled:opacity-60 disabled:cursor-not-allowed text-[#FAF8F5] hover:text-white py-3.5 text-xs uppercase font-semibold tracking-[0.18em] transition-all flex items-center justify-center gap-2"
                    whileHover={submitState !== 'loading' ? { y: -2 } : {}}
                    whileTap={submitState !== 'loading' ? { scale: 0.98 } : {}}
                  >
                    {submitState === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#C5A059]" />
                        <span>{submitState === 'error' ? 'Retry Inquiry' : 'Submit Inquiry'}</span>
                      </>
                    )}
                  </motion.button>

                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-[#1A1918] text-[#1A1918] hover:bg-[#1A1918] hover:text-white py-3.5 text-xs uppercase font-semibold tracking-[0.18em] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Now</span>
                  </a>
                </div>
              </form>
            )}
          </Reveal>

          {/* Map & Social Links */}
          <Reveal className="lg:col-span-5 space-y-8" delay={0.12}>
            <div className="bg-white p-8 border border-[#E7E3DC] rounded-[2rem] shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif font-medium text-xl text-[#1A1918]">Studio Address</h3>
                  <p className="text-xs text-stone-500 font-light mt-1">{BUSINESS_INFO.fullAddress}</p>
                </div>

                <a
                  href="https://maps.google.com/?q=Nandgaon+Bhiwani+Haryana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#1A1918] text-[#1A1918] hover:bg-[#1A1918] hover:text-white p-2.5 transition-all"
                  title="Get Directions"
                >
                  <Navigation className="w-4 h-4" />
                </a>
              </div>

              <div className="aspect-square w-full border border-[#E7E3DC] overflow-hidden">
                <iframe
                  title="Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111874.52495392233!2d76.0828551465225!3d28.78912239634629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391264c8d50adbf3%3A0xb69666bc9ee6ce50!2sBhiwani%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-[1.05] grayscale-[0.3]"
                />
              </div>
            </div>

            <div className="bg-[#1A1918] text-white p-8 border border-[#1A1918] rounded-[2rem] shadow-[0_24px_80px_rgba(26,25,24,0.18)]">
              <h3 className="font-serif font-normal text-xl text-white mb-2">
                Muskan Royal Photo Studio
              </h3>
              <p className="text-xs text-stone-400 font-light mb-6">
                Capturing Emotions • Preserving Royal Memories
              </p>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 hover:border-[#C5A059] text-xs font-mono uppercase text-stone-300 hover:text-white transition-all flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <Instagram className="w-3.5 h-3.5 text-[#C5A059]" />
                </a>

                <a
                  href={BUSINESS_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 hover:border-[#C5A059] text-xs font-mono uppercase text-stone-300 hover:text-white transition-all flex items-center justify-between"
                >
                  <span>YouTube</span>
                  <Youtube className="w-3.5 h-3.5 text-[#C5A059]" />
                </a>

                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 hover:border-[#C5A059] text-xs font-mono uppercase text-stone-300 hover:text-white transition-all flex items-center justify-between"
                >
                  <span>Facebook</span>
                  <Facebook className="w-3.5 h-3.5 text-[#C5A059]" />
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 hover:border-[#C5A059] text-xs font-mono uppercase text-stone-300 hover:text-white transition-all flex items-center justify-between"
                >
                  <span>WhatsApp</span>
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
