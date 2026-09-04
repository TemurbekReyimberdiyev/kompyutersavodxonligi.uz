import React from 'react';
import { Play, Send, ShieldCheck } from 'lucide-react';

export default function VideoPreview() {
  return (
    <section id="preview" className="py-14 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/70 text-red-700 text-xs font-bold shadow-xs">
            <Play className="w-3 h-3 fill-red-600 text-red-600" />
            <span>1-Dars Namoyishi (Mutlaqo Bepul)</span>
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            1-Dars: Kompyuter Asoslari va Tuzilishi
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto px-2 sm:px-0 leading-relaxed">
            Kursning o'qitish uslubi va sifatiga to'liq ishonch hosil qilishingiz uchun birinchi amaliy dars hamma uchun ochiq.
          </p>
        </div>

        {/* Video Player Frame */}
        <div className="max-w-3xl lg:max-w-4xl mx-auto bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/15 border border-slate-700/40">
          {/* Top Frame Bar */}
          <div className="bg-slate-800/90 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between border-b border-slate-700/50">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            </div>
            <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 truncate max-w-[200px] xs:max-w-xs sm:max-w-md">
              1-Dars: Kompyuter Texnik Asoslari • HD YouTube Pleer
            </span>
            <span className="text-[10px] bg-red-600 text-white font-bold px-2 py-0.5 rounded-sm">
              HD
            </span>
          </div>

          {/* Aspect Video */}
          <div className="relative aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/8aGhZQkoFbQ?rel=0"
              title="Kompyuter Savodxonligi 1-Dars Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video Bottom Note */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-[#00a896] shrink-0" />
            <span>Qolgan <strong>23 ta amaliy dars</strong> yopiq Telegram guruhda jamlangan:</span>
          </div>
          <a
            href="https://t.me/temuurbek_21"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0088cc] hover:bg-[#007cb8] text-white text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>To'liq kursga kirish (@temuurbek_21)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
