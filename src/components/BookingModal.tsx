import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BUSINESS_INFO } from '../data/photographyData';
import { X, CheckCircle2, MessageCircle, Send, Loader2, AlertCircle } from 'lucide-react';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [fullName,   setFullName]   = useState('');
  const [phone,      setPhone]      = useState('');
  const [eventDate,  setEventDate]  = useState('');
  const [eventType,  setEventType]  = useState('Full Wedding Photography & Cinema');
  const [city,       setCity]       = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMsg,   setErrorMsg]   = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitState === 'loading') return;

    setSubmitState('loading');
    setErrorMsg('');

    const templateParams = {
      from_name:  fullName,
      reply_to:   'Not provided',
      phone,
      event_date: eventDate || 'To be decided',
      city:       city || 'Not specified',
      guests:     'Not specified',
      services:   eventType,
      message:    'Quick booking modal inquiry.',
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
      setErrorMsg('Could not send your request. Please try again or use WhatsApp below.');
      setSubmitState('error');
    }
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Muskan Royal Photo Studio! I'd like to book my wedding date:\n- Name: ${fullName}\n- Phone: ${phone}\n- Date: ${eventDate || 'TBD'}\n- Type: ${eventType}\n- Location: ${city}`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1A1918]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full bg-[#FAF8F5] p-8 border border-[#E7E3DC] text-[#1A1918]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-[#1A1918] p-2 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 h-[1px] bg-[#C5A059]" />
          <span className="text-[#A38036] uppercase tracking-[0.25em] text-[10px] font-semibold">
            📅 Limited Wedding Dates Available
          </span>
        </div>

        <h3 className="text-2xl font-serif font-normal text-[#1A1918] mb-2">
          Book Your Wedding Date Today!
        </h3>
        <p className="text-xs text-stone-500 font-light mb-6">
          🎁 Book Now &amp; Get Exclusive Wedding Offers. Fill in your details to check date availability.
        </p>

        {/* ── SUCCESS STATE ─────────────────────────────────────────────── */}
        {submitState === 'success' ? (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="w-10 h-10 text-[#C5A059] mx-auto" />
            <h4 className="font-serif text-xl font-normal text-[#1A1918]">Request Submitted ✅</h4>
            <p className="text-xs text-stone-600 font-light">
              Thank you, <strong>{fullName}</strong>. Your inquiry has been sent to{' '}
              <span className="text-[#C5A059] font-medium">{BUSINESS_INFO.email}</span>.
              We'll check availability for <strong>{eventDate || 'your date'}</strong> and reach out to{' '}
              <strong>{phone}</strong> shortly.
            </p>

            <button
              onClick={handleWhatsAppDirect}
              className="w-full bg-[#25D366] text-white py-3.5 text-xs uppercase font-semibold tracking-[0.18em] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Connect</span>
            </button>
          </div>

        ) : (
          /* ── FORM ──────────────────────────────────────────────────────── */
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-white border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-1">WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-1">Event Date *</label>
                <input
                  type="date"
                  required
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-white border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-1">City / Venue</label>
                <input
                  type="text"
                  placeholder="e.g. Bhiwani, Haryana"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-white border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-1">Coverage</label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-white border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] transition-colors"
                >
                  <option value="Full Wedding Photography & Cinema">Full Photography &amp; Cinema</option>
                  <option value="Pre-Wedding Shoot Only">Pre-Wedding Shoot Only</option>
                  <option value="Haldi & Mehendi Only">Haldi &amp; Mehendi Only</option>
                  <option value="Drone Cinematography">Drone Cinematography</option>
                  <option value="Premium Album Only">Premium Album Only</option>
                  <option value="Custom Event Coverage">Custom Event Coverage</option>
                </select>
              </div>
            </div>

            {/* ── ERROR BANNER ──────────────────────────────────────────── */}
            {submitState === 'error' && (
              <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="space-y-3 pt-2">
              <button
                type="submit"
                disabled={submitState === 'loading'}
                className="w-full bg-[#1A1918] hover:bg-[#C5A059] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 text-xs uppercase font-semibold tracking-[0.18em] transition-all flex items-center justify-center gap-2"
              >
                {submitState === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{submitState === 'error' ? 'Retry' : 'Book Your Wedding Date'}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full border border-[#1A1918] text-[#1A1918] hover:bg-[#1A1918] hover:text-white py-3.5 text-xs uppercase font-semibold tracking-[0.18em] flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Connect</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
