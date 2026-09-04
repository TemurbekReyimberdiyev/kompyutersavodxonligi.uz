import React from 'react';
import { Award, Users, CheckCircle2, Send, ShieldCheck, Sparkles, Quote } from 'lucide-react';

export default function Mentor() {
  return (
    <section id="mentor" className="py-16 sm:py-20 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      {/* Sarlavha */}
      <div className="text-center space-y-3 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#104c96] text-xs font-bold shadow-xs">
          <Award className="w-3.5 h-3.5" />
          <span>Kurs Muallifi & Bosh Mentor</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Mentor Bilan Tanishing
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed px-2 sm:px-0">
          Kurs davomida sizni shaxsan qo'llab-quvvatlovchi va amaliy savollaringizga to'liq javob beruvchi mutaxassis.
        </p>
      </div>

      {/* Asosiy Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg shadow-slate-200/40 overflow-hidden p-5 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Chap ustun: Shaxsiy Profil va Aloqa */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
            <div className="relative">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#0c3160] via-[#104c96] to-[#00a896] text-white flex flex-col items-center justify-center shadow-xl ring-4 ring-slate-100">
                <span className="font-black text-3xl sm:text-5xl tracking-tight">RT</span>
                <span className="text-[9px] sm:text-[10px] tracking-widest text-teal-200 uppercase font-semibold mt-1">Mentor</span>
              </div>
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#27ae60] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1 whitespace-nowrap">
                <CheckCircle2 className="w-3 h-3" />
                <span>Tasdiqlangan Mutaxassis</span>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Reyimberdiyev Temurbek
              </h3>
              <p className="text-xs font-semibold text-[#00a896] mt-0.5">
                IT va Kompyuter Savodxonligi bo'yicha amaliyotchi mentor
              </p>
            </div>

            <a
              href="https://t.me/temuurbek_21"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0088cc] hover:bg-[#007cb8] text-white text-xs px-5 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all w-full active:scale-95 cursor-pointer min-h-[44px]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Bog'lanish: @temuurbek_21</span>
            </a>
          </div>

          {/* O'ng ustun: Shaxsiy Murojaat, Ko'nikmalar va Statistikalar */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative bg-blue-50/50 p-4 sm:p-5 rounded-2xl border border-blue-100/80">
              <Quote className="w-6 h-6 text-[#104c96]/25 absolute top-3.5 right-3.5" />
              <p className="text-xs sm:text-sm text-slate-700 italic font-medium leading-relaxed pr-5 sm:pr-6">
                "Mening asosiy maqsadim — har bir o'quvchiga kompyuterni hech qanday qiyinchiliksiz, o'zbek tilida sodda va 100% amaliyot asosida o'rgatishdir. Kursda faqat ishda va kundalik hayotda zarur bo'ladigan eng kerakli ko'nikmalar jamlangan."
              </p>
            </div>

            {/* 4 ta Asosiy Yondashuv */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-[#e8f8f0] text-[#27ae60] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>24 ta tizimli amaliy dars muallifi</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-blue-50 text-[#104c96] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <span>Shaxsiy savol-javob va mentor nazorati</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-teal-50 text-[#00a896] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Mustaqil ishlash darajasiga kafolat</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>Zamonaviy AI & foydali dasturlar</span>
              </div>
            </div>

            {/* 3 ta Kichik Statistika Bloki */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="text-lg xs:text-xl sm:text-2xl font-black text-[#104c96]">5+ yil</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 font-medium leading-tight">Amaliy tajriba</div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="text-lg xs:text-xl sm:text-2xl font-black text-[#00a896]">1,000+</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 font-medium leading-tight">Shogirdlar soni</div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="text-lg xs:text-xl sm:text-2xl font-black text-[#27ae60]">100%</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 font-medium leading-tight">Amaliy natija</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
