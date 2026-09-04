import React from 'react';
import { Send, MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
      {/* Tooltip bubble */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-lg whitespace-nowrap pointer-events-none">
        Temurbek bilan bog'lanish (@temuurbek_21)
      </div>

      <a
        href="https://t.me/temuurbek_21"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram orqali bog'lanish"
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#0088cc] to-[#00a896] hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center text-white"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a896] opacity-30"></span>
        <Send className="w-6 h-6 ml-0.5" />
      </a>
    </div>
  );
}
