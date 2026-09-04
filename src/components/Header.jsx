import React, { useState } from 'react';
import { Send, Menu, X, BookOpen, Award, Play, UserCheck, DollarSign, Lock } from 'lucide-react';

export default function Header({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#0f3d75] via-[#104c96] to-[#00a896] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform shrink-0">
            <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <path d="m8 10 3 3 5-5" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none">
              kompyutersavodxonligi<span className="text-[#00a896]">.uz</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wide">
              Reyimberdiyev Temurbek kursi
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (hidden on mobile, visible on md+) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-semibold text-slate-600">
          <button
            onClick={() => handleNavClick('lessons')}
            className="px-2.5 lg:px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          >
            24 ta Dars
          </button>
          <button
            onClick={() => handleNavClick('group')}
            className="px-2.5 lg:px-3 py-1.5 rounded-lg hover:bg-blue-50 text-[#0088cc] font-bold transition-colors cursor-pointer"
          >
            Yopiq Guruh
          </button>
          <button
            onClick={() => handleNavClick('certificate')}
            className="px-2.5 lg:px-3 py-1.5 rounded-lg hover:bg-emerald-50 text-emerald-700 font-bold transition-colors cursor-pointer"
          >
            Sertifikat
          </button>
          <button
            onClick={() => handleNavClick('preview')}
            className="px-2.5 lg:px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Bepul Video
          </button>
          <button
            onClick={() => handleNavClick('mentor')}
            className="px-2.5 lg:px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Mentor
          </button>
          <button
            onClick={() => handleNavClick('pricing')}
            className="px-2.5 lg:px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Narx
          </button>
        </nav>

        {/* Right Actions & Hamburger Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://t.me/temuurbek_21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#0088cc] hover:bg-[#007cb8] text-white px-3 sm:px-4 py-2 rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95 shrink-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
            </span>
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Telegram:</span>
            <span>@temuurbek_21</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => handleNavClick('lessons')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-800 font-bold text-sm text-left transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#104c96]" />
            <span>24 ta Amaliy Dars (Jadvallar)</span>
          </button>

          <button
            onClick={() => handleNavClick('group')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50/70 text-blue-800 font-bold text-sm text-left transition-colors cursor-pointer"
          >
            <Lock className="w-4 h-4 text-[#0088cc]" />
            <span>Yopiq Telegram Guruh & Materiallar</span>
          </button>

          <button
            onClick={() => handleNavClick('certificate')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50/70 text-emerald-800 font-bold text-sm text-left transition-colors cursor-pointer"
          >
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Rasmiy Sertifikat</span>
          </button>

          <button
            onClick={() => handleNavClick('preview')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-800 font-bold text-sm text-left transition-colors cursor-pointer"
          >
            <Play className="w-4 h-4 text-rose-500" />
            <span>1-Dars Bepul Video</span>
          </button>

          <button
            onClick={() => handleNavClick('mentor')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-800 font-bold text-sm text-left transition-colors cursor-pointer"
          >
            <UserCheck className="w-4 h-4 text-[#00a896]" />
            <span>Mentor: Reyimberdiyev Temurbek</span>
          </button>

          <button
            onClick={() => handleNavClick('pricing')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-800 font-bold text-sm text-left transition-colors cursor-pointer"
          >
            <DollarSign className="w-4 h-4 text-[#104c96]" />
            <span>Kurs Narxi va Yopiq Guruh</span>
          </button>
        </div>
      )}
    </header>
  );
}
