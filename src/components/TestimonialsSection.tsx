import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/photographyData';
import { Testimonial } from '../types';
import { Star, MapPin, X, Plus, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal, StaggerItem, StaggerList } from './MotionHelpers';

export const TestimonialsSection: React.FC = () => {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    weddingLocation: '',
    rating: 5,
    review: ''
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;

    const created: Testimonial = {
      id: `test-${Date.now()}`,
      name: newReview.name,
      role: 'Verified Couple',
      weddingLocation: newReview.weddingLocation || 'Delhi NCR',
      rating: newReview.rating,
      review: newReview.review,
      avatarUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80',
      date: 'Just Now'
    };

    setTestimonialsList([created, ...testimonialsList]);
    setIsModalOpen(false);
    setNewReview({ name: '', weddingLocation: '', rating: 5, review: '' });
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#1A1918]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-14">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[1px] bg-[#C5A059]" />
              <span className="text-[#A38036] uppercase tracking-[0.28em] text-[10px] sm:text-xs font-semibold">
                Client Testimonials
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.08] max-w-2xl">
              Words from couples who trusted us with their biggest day.
            </h2>
          </div>
          <p className="text-stone-500 text-xs sm:text-sm max-w-md font-light">
            These reviews now sit inside a calmer editorial layout, so the section feels like a feature spread instead of a wall of cards.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-start">
          <Reveal className="xl:col-span-4 rounded-[2rem] bg-[#1A1918] text-[#FAF8F5] p-8 sm:p-10 shadow-[0_24px_80px_rgba(26,25,24,0.18)] space-y-8 xl:sticky xl:top-28">
            <div>
              <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center mb-6 text-[#C5A059]">
                <Quote className="w-6 h-6" />
              </div>
              <blockquote className="font-serif italic text-2xl sm:text-3xl leading-snug">
                "We wanted something timeless, and the team delivered exactly that."
              </blockquote>
            </div>

            <div className="space-y-3 text-sm text-stone-400 font-light">
              <p>Over 500 weddings captured</p>
              <p>Fast communication on WhatsApp</p>
              <p>Luxury albums and cinematic films</p>
            </div>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#FAF8F5] text-[#1A1918] hover:bg-[#C5A059] hover:text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all inline-flex items-center justify-center gap-2 rounded-full"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus className="w-4 h-4" />
              <span>Share Your Experience</span>
            </motion.button>
          </Reveal>

          <StaggerList className="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonialsList.map((item) => (
              <StaggerItem key={item.id}>
                <div className="rounded-[1.75rem] bg-white border border-[#E7E3DC] p-6 sm:p-8 flex flex-col justify-between hover:border-[#C5A059] hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-[0.18em]">{item.date}</span>
                  </div>

                  <blockquote className="text-base sm:text-lg font-serif italic text-[#1A1918] leading-relaxed mb-8">
                    "{item.review}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-[#E7E3DC]">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover grayscale-[20%]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-serif font-medium text-base text-[#1A1918]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5 font-light">
                      <MapPin className="w-3 h-3 text-[#C5A059]" />
                      <span>{item.weddingLocation}</span>
                    </p>
                  </div>
                </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#1A1918]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-md w-full bg-white p-8 border border-[#E7E3DC] text-[#1A1918]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E7E3DC]">
              <h3 className="font-serif text-2xl font-normal text-[#1A1918]">Leave a Review</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-[#1A1918]">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#1A1918] mb-1 font-semibold">Couple Name(s)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Priya & Arjun"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#1A1918] mb-1 font-semibold">Wedding Location</label>
                <input
                  type="text"
                  placeholder="e.g., Taj Palace, New Delhi"
                  value={newReview.weddingLocation}
                  onChange={(e) => setNewReview({ ...newReview, weddingLocation: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#1A1918] mb-1 font-semibold">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="p-1"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= newReview.rating
                            ? 'fill-[#C5A059] text-[#C5A059]'
                            : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#1A1918] mb-1 font-semibold">Your Experience</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share details about your experience with our photography & films team..."
                  value={newReview.review}
                  onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A1918] text-[#FAF8F5] hover:bg-[#C5A059] py-3.5 text-xs uppercase font-semibold tracking-[0.18em] transition-all"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

