import React from 'react';
import { Send, Sparkles } from 'lucide-react';

export default function Header({ onNavigate }) {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0f3d75] via-[#104c96] to-[#00a896] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
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
            <span className="text-[10px] text-slate-600 font-medium tracking-wide">
              Reyimberdiyev Temurbek kursi
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600">
          <button
            onClick={() => onNavigate('lessons')}
            className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          >
            24 ta Dars
          </button>
          <button
            onClick={() => onNavigate('certificate')}
            className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer text-[#00a896] font-bold"
          >
            Sertifikat
          </button>
          <button
            onClick={() => onNavigate('preview')}
            className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Bepul Video
          </button>
          <button
            onClick={() => onNavigate('mentor')}
            className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Mentor
          </button>
          <button
            onClick={() => onNavigate('pricing')}
            className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Narx va Guruh
          </button>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://t.me/temuurbek_21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#007cb8] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
            </span>
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Telegram:</span>
            <span>@temuurbek_21</span>
          </a>
        </div>
      </div>
    </header>
  );
}
