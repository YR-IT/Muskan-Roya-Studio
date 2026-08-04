import React, { useState } from 'react';
import { ASSET_IMAGES, TESTIMONIALS } from '../data/photographyData';
import { Testimonial } from '../types';
import { Star, MapPin, X, Plus, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal, StaggerItem, StaggerList } from '../components/MotionHelpers';

export const ReviewsPage: React.FC = () => {
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
      weddingLocation: newReview.weddingLocation || 'Bhiwani, Haryana',
      rating: newReview.rating,
      review: newReview.review,
      avatarUrl: ASSET_IMAGES.heroBanner,
      date: 'Just Now'
    };

    setTestimonialsList([created, ...testimonialsList]);
    setIsModalOpen(false);
    setNewReview({ name: '', weddingLocation: '', rating: 5, review: '' });
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1A1918] min-h-screen">
      <section className="bg-[#1A1918] text-white py-20 text-center border-b border-white/10 relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.14),transparent_28%)]"
          animate={{ opacity: [0.7, 1, 0.75] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Reveal className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[#C5A059] uppercase tracking-[0.25em] text-xs font-mono mb-3 block">
            Client Feedback & Praise
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white mb-4">
            Words From Our Couples
          </h1>
          <p className="text-stone-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Read authentic reviews and experiences shared by couples who trusted Muskan Royal Photo Studio with their royal celebrations.
          </p>
        </Reveal>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <Reveal className="flex justify-between items-center mb-10 pb-4 border-b border-[#E7E3DC]">
          <div>
            <span className="text-2xl font-serif font-normal text-[#1A1918]">Verified Client Stories</span>
            <p className="text-xs text-stone-500 font-light mt-0.5">100% Satisfaction Rate across 500+ captured weddings</p>
          </div>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#1A1918] text-white hover:bg-[#C5A059] px-6 py-3 text-xs uppercase font-semibold tracking-widest transition-all rounded inline-flex items-center gap-2"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="w-4 h-4" />
            <span>Write a Review</span>
          </motion.button>
        </Reveal>

        <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonialsList.map((item) => (
            <StaggerItem key={item.id}>
              <div className="bg-white border border-[#E7E3DC] rounded-xl p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#C5A059] transition-all relative">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-stone-400 uppercase">{item.date}</span>
                  </div>

                  <Quote className="w-8 h-8 text-[#C5A059]/20 mb-3" />

                  <blockquote className="text-base sm:text-lg font-serif italic text-[#1A1918] leading-relaxed mb-8">
                    "{item.review}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-[#E7E3DC]">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#C5A059]/40"
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
      </section>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="relative max-w-md w-full bg-white p-8 rounded-xl border border-[#E7E3DC] text-[#1A1918]"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.96, y: 14, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E7E3DC]">
              <h3 className="font-serif text-2xl font-normal text-[#1A1918]">Share Your Experience</h3>
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
                  placeholder="e.g. Rahul & Sunita"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] rounded"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#1A1918] mb-1 font-semibold">Wedding Location</label>
                <input
                  type="text"
                  placeholder="e.g. Bhiwani, Haryana"
                  value={newReview.weddingLocation}
                  onChange={(e) => setNewReview({ ...newReview, weddingLocation: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] rounded"
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
                        className={`w-6 h-6 ${
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
                <label className="block text-xs uppercase tracking-widest text-[#1A1918] mb-1 font-semibold">Your Review</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about your experience with Muskan Royal Photo Studio..."
                  value={newReview.review}
                  onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E7E3DC] p-3 text-xs text-[#1A1918] focus:outline-none focus:border-[#C5A059] rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A1918] text-[#FAF8F5] hover:bg-[#C5A059] py-3.5 text-xs uppercase font-semibold tracking-[0.18em] transition-all rounded"
              >
                Submit Review
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
