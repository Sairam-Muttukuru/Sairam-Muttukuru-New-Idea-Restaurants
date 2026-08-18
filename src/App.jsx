import React, { useState } from 'react';
import { diningModes } from './data/modeData';

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
  const [currentModeId, setCurrentModeId] = useState('classic');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  const activeMode = diningModes.find(m => m.id === currentModeId) || diningModes[0];

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleSelectMode = (modeId) => {
    setCurrentModeId(modeId);
    const selected = diningModes.find(m => m.id === modeId);
    if (selected) {
      showToast(`✨ Switched to ${selected.emoji} ${selected.label} Mode!`);
    }
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
    <div className={`min-h-screen ${activeMode.themeClass} bg-[#0C0908] text-[#F5E6C8] selection:bg-[#E65100] selection:text-white font-sans antialiased transition-colors duration-700`}>
      
      {/* Scroll Progress Line */}
      <ScrollProgress />

      {/* Toast Notification */}
      <ToastNotification message={toastMessage} />

      {/* Restaurant Ambience Audio Controller */}
      <RestaurantAmbienceControl />

      {/* Header Navbar */}
      <Navbar 
        currentModeId={currentModeId}
        onOpenModal={() => handleOpenModal(null)} 
        onOpenMenuLightbox={(idx) => handleOpenLightbox(idx)}
      />

      {/* Main Sections */}
      <main>
        {/* HERO: Dynamic Theme, Badges, Content & Curated Platter */}
        <HeroSection 
          currentModeId={currentModeId}
          onSelectMode={handleSelectMode}
          onOpenModal={() => handleOpenModal(null)}
          onOpenMenuLightbox={(idx) => handleOpenLightbox(idx)}
        />
        
        {/* EXPERIENCES & OCCASIONS: Couple, Family, Friends, Get-Together Hub */}
        <FamilyHighlights 
          currentModeId={currentModeId}
          onSelectMode={handleSelectMode}
          onOpenModal={() => handleOpenModal(null)} 
        />
        
        {/* SPOTLIGHT: Handi Slow-Roasting */}
        <SpecialSpotlight onOpenModal={() => handleOpenModal(null)} />
        
        {/* CINEMATIC BANNER: Parallax Feast Zoom */}
        <FullWidthCinematicBanner onOpenModal={() => handleOpenModal(null)} />
        
        {/* ABOUT: Woodfire Dhaba Heritage */}
        <AboutSection />
        
        {/* MENU: Alternating item entrances & Category slide transitions */}
        <MenuSection 
          onSelectDish={(dish) => handleOpenModal(dish)} 
          onOpenMenuLightbox={(idx) => handleOpenLightbox(idx)}
        />
        
        {/* WHY CHOOSE US */}
        <WhyChooseUs />
        
        {/* REVIEWS */}
        <ReviewsSection />
        
        {/* LOCATION & HIGHWAY ACCESS */}
        <LocationSection onOpenModal={() => handleOpenModal(null)} />
        
        {/* FINAL CTA */}
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
        currentModeId={currentModeId}
        onSuccess={(msg) => showToast(msg)}
      />

    </div>
  );
}
