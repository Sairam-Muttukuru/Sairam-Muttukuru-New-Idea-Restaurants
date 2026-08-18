import React from 'react';
import { Flame } from 'lucide-react';

export default function ToastNotification({ message }) {
  if (!message) return null;

  return (
    <div className="fixed top-24 right-5 z-[1200] bg-[#17120F] border border-[#FFB300] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top duration-300">
      <Flame className="w-5 h-5 text-[#FFB300] fill-current" />
      <span className="font-extrabold text-xs sm:text-sm">{message}</span>
    </div>
  );
}
