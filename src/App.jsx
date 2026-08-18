import React, { useState } from 'react';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileCallBar from './components/layout/MobileCallBar';

// Section Components
import HeroSection from './components/sections/HeroSection';
import FamilyHighlights from './components/sections/FamilyHighlights';
import SpecialSpotlight from './components/sections/SpecialSpotlight';
import FullWidthCinematicBanner from './components/sections/FullWidthCinematicBanner';
import AboutSection from './components/sections/AboutSection';
import MenuSection from './components/sections/MenuSection';
import WhyChooseUs from './components/sections/WhyChooseUs';
import ReviewsSection from './components/sections/ReviewsSection';
import LocationSection from './components/sections/LocationSection';
import FinalCTASection from './components/sections/FinalCTASection';

// UI Components
import ScrollProgress from './components/ui/ScrollProgress';
import MenuLightbox from './components/ui/MenuLightbox';
import BookingModal from './components/ui/BookingModal';
import ToastNotification from './components/ui/ToastNotification';
import RestaurantAmbienceControl from './components/ui/RestaurantAmbienceControl';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleOpenModal = (dish = null) => {
    setSelectedDish(dish);
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (index = 0) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0C0908] text-[#F5E6C8] selection:bg-[#E65100] selection:text-white font-sans antialiased">
      
      {/* Scroll Progress Line */}
      <ScrollProgress />

      {/* Toast Notification */}
      <ToastNotification message={toastMessage} />

      {/* Restaurant Ambience Audio Controller */}
      <RestaurantAmbienceControl />

      {/* Header Navbar */}
      <Navbar 
        onOpenModal={() => handleOpenModal(null)} 
        onOpenMenuLightbox={(idx) => handleOpenLightbox(idx)}
      />

      {/* Main Sections (Choreographed Directional Motion Journey) */}
      <main>
        {/* HERO: TOP->BOTTOM badge, BOTTOM->TOP headline, LEFT->RIGHT subtext, RIGHT->LEFT CTA, SCALE 0.85->1.0 food */}
        <HeroSection 
          onOpenModal={() => handleOpenModal(null)}
          onOpenMenuLightbox={(idx) => handleOpenLightbox(idx)}
        />
        
        {/* HIGHLIGHTS: 4-Way Staggered Cards (LEFT->RIGHT, BOTTOM->TOP, RIGHT->LEFT, TOP->BOTTOM) */}
        <FamilyHighlights onOpenModal={() => handleOpenModal(null)} />
        
        {/* SPOTLIGHT: Handi LEFT->CENTER, Details RIGHT->CENTER */}
        <SpecialSpotlight onOpenModal={() => handleOpenModal(null)} />
        
        {/* CINEMATIC BANNER: Parallax Feast Zoom (1.0 -> 1.08), TOP->BOTTOM title, RIGHT->LEFT CTA */}
        <FullWidthCinematicBanner onOpenModal={() => handleOpenModal(null)} />
        
        {/* ABOUT: Left image mask reveal LEFT->CENTER, Right text RIGHT->CENTER */}
        <AboutSection />
        
        {/* MENU: Alternating item entrances & smooth category slide transitions */}
        <MenuSection 
          onSelectDish={(dish) => handleOpenModal(dish)} 
          onOpenMenuLightbox={(idx) => handleOpenLightbox(idx)}
        />
        
        {/* WHY CHOOSE US: Staggered feature cards */}
        <WhyChooseUs />
        
        {/* REVIEWS: Verified rating & alternating review card entrances */}
        <ReviewsSection />
        
        {/* LOCATION: Address RIGHT->LEFT, Phone LEFT->RIGHT, Hours BOTTOM->TOP, Map TOP->BOTTOM */}
        <LocationSection onOpenModal={() => handleOpenModal(null)} />
        
        {/* FINAL CTA: Closing Statement "COME HUNGRY. LEAVE HAPPY." */}
        <FinalCTASection onOpenModal={() => handleOpenModal(null)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar */}
      <MobileCallBar 
        onOpenModal={() => handleOpenModal(null)} 
        onOpenMenuLightbox={(idx) => handleOpenLightbox(idx)}
      />

      {/* Physical Menu Lightbox Viewer */}
      <MenuLightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        initialIndex={lightboxIndex} 
      />

      {/* Booking & Pre-Order Modal */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedDish={selectedDish}
        onSuccess={(msg) => showToast(msg)}
      />

    </div>
  );
}
