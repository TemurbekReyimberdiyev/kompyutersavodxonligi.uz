import React from 'react';
import { Award, GraduationCap, Globe, Building2, ExternalLink, CheckCircle2, Send, Quote, Sparkles } from 'lucide-react';

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
          Kurs davomida sizni shaxsan qo'llab-quvvatlovchi, oliy ma'lumotli va xalqaro toifadagi amaliyotchi mutaxassis.
        </p>
      </div>

      {/* Asosiy Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden p-4 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Chap ustun: Real Rasm va Profil */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
            {/* Chiroyli Mentor Foto Kartasi */}
            <div className="relative group w-full max-w-[230px] sm:max-w-[250px] mx-auto">
              {/* Orqa fon nur effekti (Ambient Glow) */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#104c96] via-[#00a896] to-emerald-400 rounded-[28px] blur-md opacity-30 group-hover:opacity-60 transition duration-500 pointer-events-none"></div>

              {/* Tashqi rom (Premium Frame) */}
              <div className="relative rounded-[26px] p-1.5 bg-gradient-to-b from-white via-slate-100 to-slate-200 shadow-2xl border border-white/90">
                {/* Rasm konteyneri */}
                <div className="relative rounded-[20px] overflow-hidden aspect-[3/4] bg-slate-900 shadow-inner">
                  <img
                    src="/mentor.jpg"
                    alt="Reyimberdiyev Temurbek - IT Park Xorazm Mentori"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Nozik gradient qoplama */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent pointer-events-none"></div>

                  {/* Yuqori chap: Jonli Status Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg border border-white/15 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Bosh Mentor</span>
                  </div>

                  {/* Yuqori o'ng: IT Park Badge */}
                  <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-extrabold px-2 py-1 rounded-lg border border-white/80 shadow-sm flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-[#104c96]" />
                    <span>IT Park</span>
                  </div>

                  {/* Pastki oyna uslubidagi axborot chizig'i (Glassmorphic pill) */}
                  <div className="absolute bottom-2.5 inset-x-2.5 p-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/15 text-white text-center shadow-lg">
                    <div className="flex items-center justify-center gap-1 text-[11px] font-extrabold text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Tasdiqlangan Mutaxassis</span>
                    </div>
                    <p className="text-[9px] text-teal-200/90 font-medium mt-0.5">
                      Bakalavr & Magistr • 5+ yil tajriba
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 space-y-1">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Reyimberdiyev Temurbek
              </h3>
              <p className="text-xs font-semibold text-[#00a896]">
                IT va Kompyuter Savodxonligi bo'yicha amaliyotchi mentor
              </p>
              <div className="pt-1 flex items-center justify-center gap-1.5 text-xs text-slate-600">
                <Building2 className="w-3.5 h-3.5 text-[#104c96] shrink-0" />
                <span>Hozirda:</span>
                <a
                  href="https://www.itcenterxorazm.uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#104c96] hover:text-[#00a896] underline decoration-[#104c96]/30 hover:decoration-[#00a896] transition-colors"
                >
                  <span>IT Park Xorazm</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <a
              href="https://t.me/temuurbek_21"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0088cc] hover:bg-[#007cb8] text-white text-xs px-5 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all w-full active:scale-95 cursor-pointer min-h-[44px]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram orqali bog'lanish</span>
            </a>
          </div>

          {/* O'ng ustun: Shaxsiy Murojaat, Malaka va Statistikalar */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative bg-blue-50/50 p-4 sm:p-5 rounded-2xl border border-blue-100/80">
              <Quote className="w-6 h-6 text-[#104c96]/25 absolute top-3.5 right-3.5" />
              <p className="text-xs sm:text-sm text-slate-700 italic font-medium leading-relaxed pr-5 sm:pr-6">
                "Mening asosiy maqsadim — har bir o'quvchiga kompyuterni hech qanday qiyinchiliksiz, o'zbek tilida sodda va 100% amaliyot asosida o'rgatishdir. Kursda faqat ishda va kundalik hayotda zarur bo'ladigan eng kerakli ko'nikmalar jamlangan."
              </p>
            </div>

            {/* 4 ta Asosiy Ma'lumot / Malaka Kartalari */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#104c96] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">Bakalavr va Magistr</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    Oliy ma'lumotli mutaxassis — Bakalavr va Magistratura bosqichlarini muvaffaqiyatli tamomlagan.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#27ae60] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">Xalqaro Sertifikatlar</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    Axborot texnologiyalari va ta'lim bo'yicha nufuzli xalqaro darajadagi sertifikatlar sohibi.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-100 text-[#00a896] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">IT Park Xorazm</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    Hozirda{' '}
                    <a
                      href="https://www.itcenterxorazm.uz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#104c96] hover:text-[#00a896] underline inline-flex items-center gap-0.5"
                    >
                      IT Park Xorazm <ExternalLink className="w-2.5 h-2.5 inline" />
                    </a>{' '}
                    filialida amaliyotchi mutaxassis sifatida faoliyat yuritmoqda.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">24 ta Dars Muallifi</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    O'quvchilarni noldan boshlab professional darajagacha yetaklovchi tizimli amaliy dastur tuzuvchisi.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 ta Kichik Statistika Bloki */}
            <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3 pt-1">
              <div className="p-2 xs:p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="text-base xs:text-xl sm:text-2xl font-black text-[#104c96]">5+ yil</div>
                <div className="text-[9px] xs:text-[10px] sm:text-[11px] text-slate-500 mt-0.5 font-medium leading-tight">Amaliy tajriba</div>
              </div>

              <div className="p-2 xs:p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="text-base xs:text-xl sm:text-2xl font-black text-[#00a896]">1,000+</div>
                <div className="text-[9px] xs:text-[10px] sm:text-[11px] text-slate-500 mt-0.5 font-medium leading-tight">Shogirdlar</div>
              </div>

              <div className="p-2 xs:p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="text-base xs:text-xl sm:text-2xl font-black text-[#27ae60]">100%</div>
                <div className="text-[9px] xs:text-[10px] sm:text-[11px] text-slate-500 mt-0.5 font-medium leading-tight">Amaliy natija</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
