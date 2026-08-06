import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BUSINESS_INFO } from '../data/photographyData';
import { InquiryFormData } from '../types';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, Clock, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal, StaggerItem, StaggerList } from '../components/MotionHelpers';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: 'Luxury Wedding Photography & Cinema',
    city: 'Bhiwani, Haryana',
    estimatedGuests: '200 - 500',
    budgetRange: '₹1.5 Lakhs - ₹3 Lakhs',
    message: '',
    servicesNeeded: ['Luxury Wedding Photography', '4K Cinematic Films']
  });

  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

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
    setErrorMsg('');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.fullName,
          reply_to:   formData.email || 'Not provided',
          phone:      formData.phone,
          event_date: formData.eventDate || 'To be decided',
          city:       formData.city,
          guests:     formData.estimatedGuests,
          services:   formData.servicesNeeded.join(', ') || 'Not specified',
          message:    formData.message || 'No additional message.',
          to_email:   BUSINESS_INFO.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitState('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg('Could not send your inquiry. Please try again or reach us on WhatsApp.');
      setSubmitState('error');
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Muskan Royal Photo Studio! Here is my booking inquiry:
- Name: ${formData.fullName}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Event Date: ${formData.eventDate || 'To be decided'}
- City/Venue: ${formData.city}
- Event Type: ${formData.eventType}
- Estimated Guests: ${formData.estimatedGuests}
- Services Needed: ${formData.servicesNeeded.join(', ')}
- Notes: ${formData.message || 'None'}`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1A1918] min-h-screen">
      {/* Contact Header */}
      <section className="bg-[#1A1918] text-white py-20 text-center border-b border-white/10 relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.14),transparent_28%)]"
          animate={{ opacity: [0.7, 1, 0.75] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Reveal className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[#C5A059] uppercase tracking-[0.25em] text-xs font-mono mb-3 block">
            Plan Your Celebration
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white mb-4">
            Contact Us For A Luxury Experience
          </h1>
          <p className="text-stone-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Share your wedding date, venue, and vision. We will help you build a complete photography and cinema plan for your celebration.
          </p>
        </Reveal>
      </section>

      {/* Main Form & Information Layout */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Side */}
          <Reveal className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-xl border border-[#E7E3DC] shadow-sm">
            <h2 className="text-3xl font-serif font-normal text-[#1A1918] mb-2">
              Book Your Wedding Date
            </h2>
            <p className="text-xs text-stone-500 font-light mb-8">
              🎁 Book Now & Get Exclusive Wedding Offers • 📅 Limited Wedding Dates Available
            </p>

            {submitState === 'success' ? (
              <motion.div
                className="p-8 bg-[#FAF8F5] border border-[#C5A059] rounded-lg text-center space-y-4"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 className="w-12 h-12 text-[#C5A059] mx-auto" />
                <h3 className="font-serif text-2xl text-[#1A1918]">Inquiry Submitted Successfully!</h3>
                <p className="text-xs text-stone-600 font-light">
                  Thank you, <strong>{formData.fullName}</strong>. Your inquiry has been sent to{' '}
                  <span className="text-[#C5A059] font-medium">{BUSINESS_INFO.email}</span>.
                  We'll verify date availability and contact you at <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-2">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] inline-flex items-center gap-2 rounded"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Connect on WhatsApp (+91 9518004158)</span>
                  </a>
                </div>
              </motion.div>
              ) : (
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
                      className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3.5 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] rounded"
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
                      className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3.5 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] rounded"
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
                      className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3.5 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-2">Event Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3.5 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-3">Select Services Needed</label>
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
                        className={`p-3 text-xs border rounded flex items-center gap-2 cursor-pointer transition-all ${
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
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#1A1918] mb-2">Message & Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event venue, timing, or special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3.5 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] rounded"
                  />
                </div>

                {submitState === 'error' && (
                  <motion.div
                    className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded text-xs text-red-700"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <motion.button
                    type="submit"
                    disabled={submitState === 'loading'}
                    className="flex-1 bg-[#1A1918] hover:bg-[#C5A059] disabled:opacity-60 disabled:cursor-not-allowed text-[#FAF8F5] hover:text-white py-4 text-xs uppercase font-semibold tracking-[0.18em] transition-all flex items-center justify-center gap-2 rounded"
                    whileHover={submitState !== 'loading' ? { y: -2 } : {}}
                    whileTap={submitState !== 'loading' ? { scale: 0.98 } : {}}
                  >
                    {submitState === 'loading' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending…</span></>
                    ) : (
                      <><Send className="w-4 h-4 text-[#C5A059]" /><span>{submitState === 'error' ? 'Retry' : 'Submit Inquiry'}</span></>
                    )}
                  </motion.button>

                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-[#1A1918] text-[#1A1918] hover:bg-[#1A1918] hover:text-white py-4 text-xs uppercase font-semibold tracking-[0.18em] transition-all flex items-center justify-center gap-2 rounded"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Now</span>
                  </a>
                </div>
              </form>
            )}
          </Reveal>

          {/* Location & Map Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-xl border border-[#E7E3DC] shadow-sm space-y-6">
              <div>
                <span className="text-[#C5A059] text-xs font-mono uppercase tracking-widest block mb-1">Our Studio Address</span>
                <h3 className="text-xl font-serif text-[#1A1918]">Muskan Royal Photo Studio</h3>
                <a
                  href={BUSINESS_INFO.googleSitesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-stone-600 font-light mt-2 leading-relaxed hover:text-[#C5A059] transition-colors block"
                >
                  {BUSINESS_INFO.fullAddress}
                </a>
              </div>

              <div className="space-y-3 pt-2 border-t border-[#E7E3DC] text-xs text-stone-600">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-[#1A1918] hover:text-[#C5A059]">
                    +91 9518004158
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C5A059]" />
                  <span>{BUSINESS_INFO.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Open 7 Days: 9:00 AM – 9:00 PM</span>
                </div>
              </div>

              <div className="aspect-square w-full rounded-lg overflow-hidden border border-[#E7E3DC] mt-4">
                <iframe
                  title="Studio Map"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3491.85!2d76.110897!3d28.677356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzM4LjUiTiA3NsKwMDYnNDEuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="filter contrast-[1.05]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
