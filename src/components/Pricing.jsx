import React from 'react';
import { Send, ShieldCheck, Sparkles } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-100/60 border-t border-slate-200/80">
      <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#104c96] text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0088cc]" />
            <span>Eng Qulay va To'liq Ta'rif</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Kurs Narxi va To'liq Paketi
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto px-2 sm:px-0 leading-relaxed">
            Bir martalik to'lov evaziga barcha 24 ta dars, yopiq baza va mentor yordamiga umrbod ega bo'lasiz.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* VIP KURS CARDI — GENERAL ROCKET 2.0 REFERENCE STYLE (SAYT RANGLARIDA) */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#061426] via-[#092244] to-[#06162a] border border-sky-500/30 p-5 sm:p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(2,132,199,0.3)] overflow-hidden text-left text-white">
          
          {/* 1. Digital Tech Mosaic / Pixel Grid (Top Right) */}
          <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-25 overflow-hidden -z-0 select-none">
            <div className="grid grid-cols-6 gap-1.5 w-full h-full p-3">
              <div className="bg-sky-400 rounded-xs opacity-20"></div>
              <div className="bg-blue-500 rounded-xs opacity-40"></div>
              <div className="bg-sky-300 rounded-xs opacity-10"></div>
              <div className="bg-blue-600 rounded-xs opacity-70"></div>
              <div className="bg-sky-400 rounded-xs opacity-30"></div>
              <div className="bg-blue-400 rounded-xs opacity-60"></div>
              <div className="bg-sky-500 rounded-xs opacity-80"></div>
              <div className="bg-blue-700 rounded-xs opacity-25"></div>
              <div className="bg-sky-300 rounded-xs opacity-50"></div>
              <div className="bg-blue-500 rounded-xs opacity-15"></div>
              <div className="bg-sky-400 rounded-xs opacity-65"></div>
              <div className="bg-blue-600 rounded-xs opacity-35"></div>
              <div className="bg-sky-500 rounded-xs opacity-20"></div>
              <div className="bg-blue-400 rounded-xs opacity-75"></div>
              <div className="bg-sky-300 rounded-xs opacity-40"></div>
              <div className="bg-blue-700 rounded-xs opacity-90"></div>
              <div className="bg-sky-400 rounded-xs opacity-30"></div>
              <div className="bg-blue-500 rounded-xs opacity-50"></div>
            </div>
          </div>

          {/* 2. Ambient Lighting Glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#104c96]/35 blur-3xl rounded-full pointer-events-none -z-0"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-500/20 blur-3xl rounded-full pointer-events-none -z-0"></div>
          <div className="absolute -bottom-24 left-1/4 w-80 h-80 bg-[#00a896]/20 blur-3xl rounded-full pointer-events-none -z-0"></div>

          {/* 3. Top Row: Info (Left) & Credentials (Right) */}
          <div className="relative z-10 flex flex-wrap items-start justify-between gap-4 pb-4 sm:pb-6">
            {/* Top Left: Start & Davomiyligi */}
            <div className="space-y-1">
              <div className="text-xs sm:text-sm text-slate-200">
                <span className="font-medium text-slate-400">Start:</span>{' '}
                <span className="font-bold text-white">Qabul ochiq (Darhol)</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-200">
                <span className="font-medium text-slate-400">Davomiyligi:</span>{' '}
                <span className="font-bold text-white">24 ta dars (Umrbod)</span>
              </div>
            </div>

            {/* Top Right: Badges */}
            <div className="text-right space-y-0.5">
              <div className="text-xs sm:text-sm font-black text-sky-400 tracking-wider">
                BAKALAVR & MAGISTR
              </div>
              <div className="text-xs sm:text-sm font-black text-sky-300 tracking-wider">
                IT PARK MUTAXASSISI
              </div>
            </div>
          </div>

          {/* 4. Middle Section: Mentor Info (Left) & Mentor Portrait (Right) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Mentor Label & Name */}
            <div className="md:col-span-6 lg:col-span-5 space-y-1">
              <span className="text-xs sm:text-sm text-slate-300 font-medium">Bosh mentor:</span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic font-extrabold tracking-wide text-white uppercase leading-tight">
                REYIMBERDIYEV<br />
                TEMURBEK
              </h3>
            </div>

            {/* Mentor Photo */}
            <div className="md:col-span-6 lg:col-span-7 flex justify-center md:justify-end -my-4 sm:-my-6">
              <div className="relative">
                {/* Glow behind mentor */}
                <div className="absolute inset-0 bg-sky-500/25 blur-2xl rounded-full -z-10 scale-95"></div>
                <img
                  src="/mentor-cutout.png"
                  alt="Reyimberdiyev Temurbek"
                  className="w-48 sm:w-60 md:w-72 lg:w-80 h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
                />
              </div>
            </div>
          </div>

          {/* 5. Giant Title Banner: ⚡ KOMPYUTER SAVODXONLIGI 2.0 */}
          <div className="relative z-10 my-6 sm:my-8 pt-4 border-t border-sky-500/20">
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              {/* 3D Metallic Golden Lightning Bolt */}
              <div className="shrink-0">
                <svg
                  className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 drop-shadow-[0_4px_20px_rgba(245,158,11,0.6)]"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="goldFront" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF7B2" />
                      <stop offset="40%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="goldBevel" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#78350F" />
                      <stop offset="60%" stopColor="#B45309" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                    <linearGradient id="goldShine" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Bevel extrusion */}
                  <path d="M 52 8 L 22 52 L 44 52 L 28 92 L 78 44 L 54 44 Z" fill="url(#goldBevel)" transform="translate(3, 3)" opacity="0.7" />
                  {/* Front lightning face */}
                  <path d="M 54 6 L 24 50 L 46 50 L 30 90 L 78 42 L 54 42 Z" fill="url(#goldFront)" />
                  {/* Top gloss */}
                  <path d="M 54 6 L 24 50 L 36 50 L 54 18 Z" fill="url(#goldShine)" />
                </svg>
              </div>

              {/* Title Typography */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none text-white">
                KOMPYUTER SAVODXONLIGI{' '}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-[#00a896] bg-clip-text text-transparent">
                  2.0
                </span>
              </h2>
            </div>
          </div>

          {/* 6. Bottom Section: Kurs Tarkibi (Left) & Price Card (Right) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-2">
            {/* Left: Kurs Tarkibi */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                KURS TARKIBI:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>Windows 10/11 va Kompyuter asoslari</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>Microsoft Word (Hujjatlar, Arizalar, Blanklar)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>Microsoft Excel (Formulalar, Jadvallar, Hisobotlar)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>Microsoft PowerPoint (Professional slaydlar)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>Internet, Xavfsizlik & Sun'iy Intellekt (ChatGPT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>24 ta to'liq video darslik (HD sifatda)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>Amaliy topshiriqlar, konspektlar va testlar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>Shaxsiy mentor nazorati va savol-javob</span>
                </li>
              </ul>
            </div>

            {/* Right: Inset Price Card */}
            <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-[#091f3d]/90 backdrop-blur-md border border-sky-400/40 p-5 sm:p-7 shadow-2xl space-y-4">
              {/* Narx qatori */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-2.5 text-xs sm:text-sm text-slate-300 font-bold uppercase">
                  <span>KURS NARXI:</span>
                  <span className="text-slate-400 line-through decoration-rose-500 decoration-2 text-sm sm:text-base font-extrabold">
                    399,000
                  </span>
                </div>

                {/* Chegirma Pill Badge */}
                <div>
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md">
                    Cheklangan vaqt chegirmada:
                  </span>
                </div>

                {/* Asosiy Katta Narx */}
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
                    199,000
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-sky-400">
                    UZS
                  </span>
                </div>
              </div>

              {/* Action Button & Guarantees */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://t.me/temuurbek_21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-[#0088cc] via-[#104c96] to-[#00a896] hover:brightness-110 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-sky-900/40 transition-all active:scale-95 cursor-pointer min-h-[50px] text-center"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>Telegram orqali xarid qilish</span>
                </a>

                <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    100% Xavfsiz to'lov
                  </span>
                  <span>•</span>
                  <span>Click / Payme / Uzum Bank</span>
                  <span className="hidden xs:inline">•</span>
                  <span>Umrbod kirish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
