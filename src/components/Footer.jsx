import React from 'react';
import { Send, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 sm:py-12 text-xs border-t border-slate-800 pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#104c96] to-[#00a896] flex items-center justify-center text-white font-bold text-xs shrink-0">
              KS
            </div>
            <div className="text-left">
              <span className="font-extrabold text-white text-sm">kompyutersavodxonligi.uz</span>
              <p className="text-[11px] text-slate-500">Reyimberdiyev Temurbek mualliflik kursi</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] text-slate-400">
            <a href="#lessons" className="hover:text-white transition-colors">24 ta Dars</a>
            <span className="text-slate-700">•</span>
            <a href="#group" className="hover:text-white transition-colors">Yopiq Guruh</a>
            <span className="text-slate-700">•</span>
            <a href="#certificate" className="hover:text-white transition-colors">Sertifikat</a>
            <span className="text-slate-700">•</span>
            <a href="#preview" className="hover:text-white transition-colors">Bepul Video</a>
            <span className="text-slate-700">•</span>
            <a href="#mentor" className="hover:text-white transition-colors">Mentor</a>
            <span className="text-slate-700">•</span>
            <a href="#pricing" className="hover:text-white transition-colors">Kurs Narxi</a>
          </div>

          <a
            href="https://t.me/temuurbek_21"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white bg-slate-800/80 hover:bg-slate-800 px-4 py-2.5 rounded-xl transition-all font-semibold border border-slate-700/60 shadow-sm"
          >
            <Send className="w-3.5 h-3.5 text-[#0088cc]" />
            <span>@temuurbek_21</span>
          </a>
        </div>

        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600 text-center sm:text-left">
          <p>© {new Date().getFullYear()} kompyutersavodxonligi.uz. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-1.5 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Darslar yopiq Telegram guruhda 100% himoyalangan va tartiblangan.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
