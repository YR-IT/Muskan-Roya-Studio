import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BookingModal } from './components/BookingModal';

// Dedicated Standalone Pages
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ServicesPage } from './pages/ServicesPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#3D2314] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#3D2314] overflow-x-clip">
      {/* Navigation Bar */}
      <Navbar
        activeSection={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* Main Page Routing */}
      <main className="flex-grow pt-20">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {currentPage === 'home' && (
            <>
            <Hero
              onNavigate={handleNavigate}
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
            <AboutSection
              onNavigate={handleNavigate}
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
            <PortfolioGallery
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
            <ServicesSection
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
            <PricingSection
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
            <TestimonialsSection />
            <ContactSection />
            </>
          )}

          {currentPage === 'about' && (
            <AboutPage
              onNavigate={handleNavigate}
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
          )}

          {currentPage === 'portfolio' && (
            <PortfolioPage
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onOpenBooking={() => setIsBookingModalOpen(true)}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'testimonials' && (
            <ReviewsPage />
          )}

          {currentPage === 'contact' && (
            <ContactPage />
          )}
        </motion.div>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* Persistent Floating WhatsApp Widget */}
      <WhatsAppFloatingButton />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
