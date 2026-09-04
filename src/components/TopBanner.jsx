import React, { useState } from 'react';
import { Sparkles, Send, X, ArrowRight } from 'lucide-react';

export default function TopBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-[#2ecc71] via-[#27ae60] to-[#16a085] text-white text-xs sm:text-sm font-semibold py-2 px-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 mx-auto sm:mx-0">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span>
              <strong>Yangi qabul ochildi!</strong> Kursga <strong>50% chegirma</strong> bilan yoziling va yopiq Telegram guruhga qo'shiling!
            </span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="https://t.me/temuurbek_21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white text-[#166534] hover:bg-emerald-50 text-xs px-3.5 py-1 rounded-full transition-all duration-200 font-bold shadow-sm"
          >
            <Send className="w-3 h-3 text-[#16a085]" />
            <span>Chegirmada olish</span>
            <ArrowRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => setVisible(false)}
            className="text-white/80 hover:text-white transition-colors p-0.5"
            title="Yopish"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

