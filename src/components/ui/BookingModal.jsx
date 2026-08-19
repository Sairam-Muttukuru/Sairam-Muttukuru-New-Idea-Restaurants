import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Flame, Sparkles, Check, Utensils, Car, ShoppingBag } from 'lucide-react';
import { diningModes } from '../../data/modeData';

export default function BookingModal({ 
  isOpen, 
  onClose, 
  selectedDish, 
  currentModeId, 
  onSuccess 
}) {
  const activeMode = diningModes.find(m => m.id === currentModeId) || diningModes[0];
  
  const [selectedExperience, setSelectedExperience] = useState(currentModeId || 'classic');
  const [orderType, setOrderType] = useState('dine-in');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [guestCount, setGuestCount] = useState('2 Persons');
  const [specialNote, setSpecialNote] = useState('');

  useEffect(() => {
    if (isOpen) {
      const mode = diningModes.find(m => m.id === (currentModeId || 'classic')) || diningModes[0];
      setSelectedExperience(mode.id);
      if (mode.bookingPrefill) {
        setGuestCount(mode.bookingPrefill.guests);
        if (!selectedDish) {
          setSpecialNote(mode.bookingPrefill.note);
        }
      }
    }
  }, [isOpen, currentModeId, selectedDish]);

  if (!isOpen) return null;

  const handleModeChange = (modeId) => {
    setSelectedExperience(modeId);
    const mode = diningModes.find(m => m.id === modeId);
    if (mode && mode.bookingPrefill) {
      setGuestCount(mode.bookingPrefill.guests);
      if (!selectedDish) {
        setSpecialNote(mode.bookingPrefill.note);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const modeObj = diningModes.find(m => m.id === selectedExperience) || activeMode;
    const msg = `*New Reservation / Order - Simhapuri Dhaba*\n- *Experience Mode:* ${modeObj.label}\n- *Type:* ${orderType.toUpperCase()}\n- *Name:* ${customerName}\n- *Phone:* ${customerPhone}\n- *Guests/Portions:* ${guestCount}\n- *Details:* ${specialNote || (selectedDish ? selectedDish.name : modeObj.curatedPlatter.name)}`;
    const whatsappUrl = `https://wa.me/917386823557?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
    onSuccess(`Connecting directly to our restaurant manager for your ${modeObj.label}!`);
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="bg-[#17120F] border border-white/20 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-xl bg-white/5 border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FFB300] uppercase tracking-wider">
              <Flame className="w-4 h-4 fill-current text-[#E65100]" /> DIRECT RESTAURANT RESERVATION
            </div>
            <h3 className="font-serif-title font-extrabold text-2xl text-white">
              {selectedDish ? `Pre-Order ${selectedDish.name}` : 'Table Reservation & Platter Hold'}
            </h3>
            <p className="text-xs text-[#A89B8C] font-medium">
              Submit your request to instantly connect with our restaurant manager on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Experience Mode Picker in Modal */}
            <div>
              <label className="block text-gray-300 font-bold mb-1.5">Select Dining Vibe / Occasion</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                {diningModes.map((mode) => {
                  const isSel = mode.id === selectedExperience;
                  return (
                    <button
                      type="button"
                      key={mode.id}
                      onClick={() => handleModeChange(mode.id)}
                      className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                        isSel
                          ? 'bg-white/20 text-white border-[#FFB300] font-extrabold shadow-md'
                          : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-black text-[#FFB300]">{mode.shortLabel}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Order Type Selector */}
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#0C0908] rounded-xl border border-white/10 font-bold text-gray-300">
              <button
                type="button"
                onClick={() => setOrderType('dine-in')}
                className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${orderType === 'dine-in' ? 'bg-[#E65100] text-white shadow-md' : 'hover:text-white'}`}
              >
                <Utensils className="w-3.5 h-3.5" /> Dine-in
              </button>
              <button
                type="button"
                onClick={() => setOrderType('takeaway')}
                className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${orderType === 'takeaway' ? 'bg-[#E65100] text-white shadow-md' : 'hover:text-white'}`}
              >
                <Car className="w-3.5 h-3.5" /> Drive-Thru
              </button>
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${orderType === 'delivery' ? 'bg-[#E65100] text-white shadow-md' : 'hover:text-white'}`}
              >
                <ShoppingBag className="w-3.5 h-3.5" /> Delivery
              </button>
            </div>

            <div>
              <label className="block text-gray-300 font-bold mb-1">Your Full Name *</label>
              <input 
                type="text" 
                required
                placeholder="Enter your name" 
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFB300]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-300 font-bold mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="Mobile number" 
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFB300]"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-bold mb-1">
                  {orderType === 'dine-in' ? 'Party Size / Guests' : 'Portions'}
                </label>
                <select 
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFB300]"
                >
                  <option value="1 Person">1 Person</option>
                  <option value="2 Persons">2 Persons (Couple)</option>
                  <option value="4 Persons Family">4 Persons (Family)</option>
                  <option value="6+ Large Group">6-10 Persons (Squad)</option>
                  <option value="10+ Celebration Party">10+ Group / Party</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-bold mb-1">Special Instructions & Seating Preference</label>
              <textarea 
                rows={2}
                placeholder="e.g. Candlelit corner / AC Hall / Outdoor seating / Pepper Chicken platter" 
                value={specialNote}
                onChange={(e) => setSpecialNote(e.target.value)}
                className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFB300]"
              />
            </div>

            <button 
              type="submit"
              className="btn-mode-primary w-full justify-center py-3.5 text-sm font-extrabold mt-1 shadow-xl rounded-xl flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" /> Dispatch Request via WhatsApp
            </button>

          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
