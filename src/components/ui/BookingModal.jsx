import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Flame } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, selectedDish, onSuccess }) {
  const [orderType, setOrderType] = useState('dine-in');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [guestCount, setGuestCount] = useState('2 Persons');
  const [specialNote, setSpecialNote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Request - Simhapuri Dhaba*\n- *Type:* ${orderType.toUpperCase()}\n- *Name:* ${customerName}\n- *Phone:* ${customerPhone}\n- *Guests/Portions:* ${guestCount}\n- *Details:* ${specialNote || (selectedDish ? selectedDish.name : 'Standard Request')}`;
    const whatsappUrl = `https://wa.me/917386823557?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
    onSuccess("🎉 Connecting directly to our restaurant manager via WhatsApp!");
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="bg-[#17120F] border border-[#D84315]/40 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative"
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
              <Flame className="w-4 h-4 fill-current text-[#E65100]" /> DIRECT TABLE & ORDER RESERVATION
            </div>
            <h3 className="font-serif-title font-extrabold text-2xl text-white">
              {selectedDish ? `Pre-Order ${selectedDish.name}` : 'Table Reservation / Quick Order'}
            </h3>
            <p className="text-xs text-[#A89B8C] font-medium">
              Submit your request to instantly connect with our dhaba manager.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Order Type Selector */}
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#0C0908] rounded-xl border border-white/10 font-bold text-gray-300">
              <button
                type="button"
                onClick={() => setOrderType('dine-in')}
                className={`py-2.5 rounded-lg transition-all ${orderType === 'dine-in' ? 'bg-[#E65100] text-white shadow-md' : 'hover:text-white'}`}
              >
                🍽️ Dine-in
              </button>
              <button
                type="button"
                onClick={() => setOrderType('takeaway')}
                className={`py-2.5 rounded-lg transition-all ${orderType === 'takeaway' ? 'bg-[#E65100] text-white shadow-md' : 'hover:text-white'}`}
              >
                🚗 Drive-Thru
              </button>
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`py-2.5 rounded-lg transition-all ${orderType === 'delivery' ? 'bg-[#E65100] text-white shadow-md' : 'hover:text-white'}`}
              >
                🛵 Delivery
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
                className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FFB300]"
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
                  className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FFB300]"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-bold mb-1">
                  {orderType === 'dine-in' ? 'Guests' : 'Portions'}
                </label>
                <select 
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FFB300]"
                >
                  <option value="1 Person">1 Person</option>
                  <option value="2 Persons">2 Persons</option>
                  <option value="4 Persons Family">4 Persons (Family)</option>
                  <option value="6+ Large Group">6+ Large Group</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-bold mb-1">Special Instructions / Dishes</label>
              <textarea 
                rows={2}
                placeholder="e.g. 1 Pepper Chicken Full, 2 Rotis, Paneer Butter Masala" 
                value={specialNote}
                onChange={(e) => setSpecialNote(e.target.value)}
                className="w-full bg-[#0C0908] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FFB300]"
              />
            </div>

            <button 
              type="submit"
              className="btn-dhaba-primary w-full justify-center py-4 text-sm font-extrabold mt-2 shadow-xl"
            >
              <MessageSquare className="w-4 h-4" /> Dispatch Request via WhatsApp
            </button>

          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
