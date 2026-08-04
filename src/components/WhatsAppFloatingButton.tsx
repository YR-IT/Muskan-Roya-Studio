import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';
import { motion } from 'motion/react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const defaultMsg = "Hello Muskan Royal Photo Studio! I'd like to inquire about wedding photography packages.";

  const handleSend = () => {
    const text = encodeURIComponent(customMsg || defaultMsg);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <motion.div
          className="mb-3 w-80 bg-[#3D2314] text-[#FAF6F0] rounded-2xl p-4 border-2 border-[#D4AF37]/60 shadow-2xl"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-start justify-between pb-3 border-b border-[#D4AF37]/30 mb-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border border-[#3D2314]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#FAF6F0]">Muskan Royal Photo Studio</h4>
                <p className="text-[10px] text-[#25D366] font-medium flex items-center gap-1">
                  <span>● Online & Ready to Chat</span>
                </p>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} className="text-[#D8C4B6] hover:text-[#FAF6F0] p-1">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-[#26130A] p-3 rounded-xl border border-[#D4AF37]/20 text-xs text-[#D8C4B6] mb-3">
            "Hello! 👋 Planning a wedding? Ask us anything about our luxury wedding packages, date availability, or special offers!"
          </div>

          <div className="space-y-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full bg-[#26130A] border border-[#D4AF37]/40 rounded-xl p-2.5 text-xs text-[#FAF6F0] focus:outline-none focus:border-[#D4AF37]"
            />

            <button
              onClick={handleSend}
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              Send on WhatsApp
            </button>
          </div>
        </motion.div>
      )}

      {/* Floating Circular Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 gold-glow"
        aria-label="Chat on WhatsApp"
        title="Instant WhatsApp Booking"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
        </span>
        
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </motion.button>
    </div>
  );
};
