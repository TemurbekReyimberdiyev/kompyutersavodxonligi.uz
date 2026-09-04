import React, { useState } from 'react';
import { Send, Lock, FileText, Video, CheckCircle2, Download, Smartphone, HelpCircle, Maximize2, X, Sparkles } from 'lucide-react';

export default function ClosedGroupSection() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="group" className="py-16 sm:py-20 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      {/* Sarlavha */}
      <div className="text-center space-y-3 mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0088cc] text-xs font-bold shadow-xs">
          <Lock className="w-3.5 h-3.5" />
          <span>Eksklyuziv Materiallar Bazasi</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Yopiq Telegram Kanal Qanday Ko'rinishda?
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed px-2 sm:px-0">
          Har bir dars uchun video, taqdimot, testlar va amaliy fayllar to'plami.
        </p>
      </div>

      {/* Asosiy Showcase Karta */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-3.5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Telegram Mockup & Image (Ramkali va Yopiq Guruh Yozuvlari) */}
          <div className="lg:col-span-7">
            <div
              className="relative group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-slate-900/25 bg-slate-900 transition-all duration-300 hover:shadow-2xl hover:border-slate-600"
              onClick={() => setIsZoomed(true)}
            >
              {/* Telegram Desktop Titlebar - Ramka va Yopiq Guruh Yozuvlari */}
              <div className="bg-slate-800 text-slate-300 text-xs px-3.5 sm:px-4 py-2.5 flex items-center justify-between border-b border-slate-700/80 select-none">
                <div className="flex items-center gap-2 min-w-0 flex-1 mr-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0088cc] shrink-0 shadow-xs"></div>
                  <span className="font-semibold text-white text-[11px] sm:text-xs truncate">
                    Kompyuter Savodxonligi Materiallar
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-emerald-400 bg-emerald-950/70 px-2.5 py-1 rounded-md font-bold border border-emerald-500/30 shrink-0">
                  <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span>Yopiq Guruh</span>
                </div>
              </div>

              {/* Rasm: To'liq enli (w-full), chetlarida hech qanday qora bo'shliq qolmaydi */}
              <div className="relative overflow-hidden bg-slate-900">
                <img
                  src="/telegram-group.png"
                  alt="Yopiq Telegram Guruh - Kompyuter Savodxonligi Materiallar"
                  className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />

                {/* Hover Zoom Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-slate-900/85 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl flex items-center gap-1.5 shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Kattalashtirib ko'rish</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dars Paketining Tarkibi (O'ng tomon) — Qisqa va Londa */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#104c96]">Har Bir Dars Tarkibi</span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                1 ta dars ichida nimalar beriladi?
              </h3>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100/80">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-[#0088cc] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Video className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">1. To'liq HD Video Dars</h4>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded-lg shrink-0">
                  30–45 daqiqa
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100/80">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-[#27ae60] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">2. Taqdimot va Slaydlar</h4>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-lg shrink-0">
                  PDF format
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100/80">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">3. Amaliy Test Topshiriqlari</h4>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-lg shrink-0">
                  DOCX test
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100/80">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-[#00a896] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">4. Test Javoblari va Tahlili</h4>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-teal-700 bg-teal-100/80 px-2.5 py-1 rounded-lg shrink-0">
                  TXT kalitlar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 ta Asosiy Afzallik — Qisqa va Londa (Sarlavhaning o'zi) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-slate-100">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 flex items-center gap-3 hover:bg-slate-100/80 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0088cc] flex items-center justify-center shrink-0 font-bold shadow-xs">
              <Download className="w-4 h-4" />
            </div>
            <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">Bir Umrlik Kirish</h5>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 flex items-center gap-3 hover:bg-slate-100/80 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#27ae60] flex items-center justify-center shrink-0 font-bold shadow-xs">
              <Smartphone className="w-4 h-4" />
            </div>
            <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">Internetsiz Ko'rish</h5>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 flex items-center gap-3 hover:bg-slate-100/80 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 font-bold shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">Tartibli Navigatsiya</h5>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 flex items-center gap-3 hover:bg-slate-100/80 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-teal-100 text-[#00a896] flex items-center justify-center shrink-0 font-bold shadow-xs">
              <Send className="w-4 h-4" />
            </div>
            <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">To'g'ridan-to'g'ri Mentor</h5>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-[#104c96] text-white shadow-lg">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-teal-300 font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Guruhga qabul ochiq
            </div>
            <h4 className="text-sm sm:text-base font-extrabold text-white">
              Barcha 24 ta dars va materiallar bazasiga hoziroq qo'shiling!
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              To'lov tasdiqlangach, taklif havolasi darhol yuboriladi.
            </p>
          </div>

          <a
            href="https://t.me/temuurbek_21"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0088cc] to-[#00a896] hover:from-[#007cb8] hover:to-[#009688] text-white text-xs px-6 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-95 shrink-0 cursor-pointer min-h-[48px]"
          >
            <Send className="w-4 h-4" />
            <span>Yopiq guruhga qo'shilish</span>
          </a>
        </div>
      </div>

      {/* Modal Zoom View */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-11 right-0 sm:right-2 text-white bg-slate-800/80 hover:bg-slate-700 px-3 py-1.5 rounded-full transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold shadow-md"
            >
              <span>Yopish</span>
              <X className="w-4 h-4" />
            </button>
            <img
              src="/telegram-group.png"
              alt="Yopiq Telegram Kanal to'liq o'lchamda"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
