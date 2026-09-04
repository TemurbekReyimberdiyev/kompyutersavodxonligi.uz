import React from 'react';
import { Play, Send, CheckCircle2, Sparkles, ShieldCheck, FileSpreadsheet, Award } from 'lucide-react';

export default function Hero({ onGoToLessons, onGoToVideo }) {
  return (
    <section className="hero-gradient text-white py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden text-center">
      {/* Subtle Ambient Background Pattern */}
      <div className="absolute inset-0 hero-pattern pointer-events-none opacity-25"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-6">
        {/* Modern Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-teal-200 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>Mualliflik kursi: Reyimberdiyev Temurbek</span>
          <span className="text-white/40">•</span>
          <span className="text-teal-300">Yopiq guruhga qabul ochiq</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
          Kompyuter Savodxonligi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-indigo-200">
            24 ta Amaliy Darsda
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
          Windows, Word, Excel, PowerPoint va Sun'iy intellekt (AI) asoslari. Murakkab terminlarsiz, sodda o'zbek tilida va 100% amaliyot asosida o'rganing. Darslar maxsus <strong>yopiq Telegram guruhda</strong> umrbod saqlanadi.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="https://t.me/temuurbek_21"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white text-[#0d3b75] hover:bg-blue-50 font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center gap-2.5 active:scale-95 cursor-pointer"
          >
            <Send className="w-4 h-4 text-[#0088cc]" />
            <span>Kursga yozilish (@temuurbek_21)</span>
          </a>

          <button
            onClick={onGoToVideo}
            className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/25 backdrop-blur-md shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-red-400 text-red-400" />
            <span>1-Darsni ko'rish (Bepul)</span>
          </button>
        </div>

        {/* 4 Feature Badges */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto text-xs text-blue-100 font-medium">
          <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl px-3 py-2 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-300 shrink-0" />
            <span className="truncate">24 ta Video Dars</span>
          </div>
          <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl px-3 py-2 flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-300 shrink-0" />
            <span className="truncate">Yopiq Telegram Guruh</span>
          </div>
          <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl px-3 py-2 flex items-center justify-center gap-2">
            <FileSpreadsheet className="w-3.5 h-3.5 text-teal-300 shrink-0" />
            <span className="truncate">Tayyor Shablonlar</span>
          </div>
          <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl px-3 py-2 flex items-center justify-center gap-2">
            <Award className="w-3.5 h-3.5 text-teal-300 shrink-0" />
            <span className="truncate">Rasmiy Sertifikat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
