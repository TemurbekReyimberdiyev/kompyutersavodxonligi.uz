import React from 'react';
import { Send, CheckCircle2, Download, MessageSquare, ShieldCheck, Zap, ExternalLink } from 'lucide-react';

export default function TelegramGroup() {
  return (
    <section id="telegram" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-bold text-sky-700">
              <Send className="w-3.5 h-3.5 text-[#0088cc]" />
              <span>Yopiq Telegram Jamiyat</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Barcha 24 ta Dars <br />
              <span className="text-[#0088cc]">Yopiq Telegram Guruhida</span> Jamlangan!
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Biz o'rganuvchilarimizga maksimal qulaylik yaratish maqsadida darslarni maxsus yopiq Telegram kanal va guruhda tashkil etganmiz.
              Hech qanday murakkab saytlarga parollarni eslab qolish shart emas!
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0088cc] flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Har doim qo'l ostingizda</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Telefoningiz, planshetingiz yoki kompyuteringizdan istalgan vaqtda kiring va o'rganing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Tayyor amaliy fayllar va shablonlar</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Har bir dars ostiga tayyor Excel jadvallari, Word hujjatlari va andozalari biriktirilgan.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Reyimberdiyev Temurbek bilan bevosita aloqa</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Uyga vazifalarni tekshirish, savollarga javob olish va individual maslahatlar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Umrbod kirish huquqi</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Guruhdagi darslar hech qachon o'chirilmaydi, yangilanishlar bepul berib boriladi.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://t.me/temuurbek_21"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Telegram orqali guruhga kirish</span>
              </a>
            </div>
          </div>

          {/* Right Telegram Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-[#eef2f5] rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-200">
              {/* Telegram App Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-300">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#104c96] to-[#00a896] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  KS
                </div>
                <div className="text-left flex-1">
                  <div className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
                    <span>Kompyuter Savodxonligi (VIP)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="text-[11px] text-slate-500">24 ta darslik • Yopiq guruh</div>
                </div>
              </div>

              {/* Telegram Messages stream */}
              <div className="py-4 space-y-3 text-left text-xs">
                {/* Message 1 */}
                <div className="bg-white rounded-2xl p-3.5 shadow-xs border border-slate-100 space-y-2 max-w-[90%]">
                  <div className="font-bold text-[#104c96] text-[11px]">Reyimberdiyev Temurbek (Ustoz)</div>
                  <p className="text-slate-700">
                    👋 Assalomu alaykum qadrli o'quvchilar! Guruhimizga xush kelibsiz. Quyida 24 ta darslik to'liq video va amaliy materiallari bilan joylandi.
                  </p>
                  <span className="text-[10px] text-slate-400 block text-right">10:00</span>
                </div>

                {/* Message 2: Lesson 16 preview */}
                <div className="bg-white rounded-2xl p-3.5 shadow-xs border border-slate-100 space-y-2.5 max-w-[95%]">
                  <div className="font-bold text-[#104c96] text-[11px]">16-Dars: VLOOKUP va XLOOKUP sirlari</div>
                  <div className="rounded-xl bg-slate-900 text-white p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                        <Download className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-[11px]">VLOOKUP_amaliy_jadval.xlsx</div>
                        <div className="text-[10px] text-slate-400">1.4 MB • Excel shablon</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white">Yuklab olish</span>
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    Ushbu amaliy faylni ochib, videodagi 4 ta topshiriqni bajaring va menga yuboring!
                  </p>
                  <span className="text-[10px] text-slate-400 block text-right">10:15</span>
                </div>

                {/* Message 3: Student feedback */}
                <div className="bg-[#e1ffc7] rounded-2xl p-3.5 shadow-xs border border-emerald-100 space-y-1 ml-auto max-w-[85%]">
                  <p className="text-slate-800">
                    Ustoz, vazifani qilib yubordim, XLOOKUP formulasini juda sodda tushuntiribsiz, katta rahmat! 👍
                  </p>
                  <span className="text-[10px] text-slate-400 block text-right">10:42 ✓✓</span>
                </div>
              </div>

              <a
                href="https://t.me/temuurbek_21"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Guruh a'zosi bo'lish uchun yozing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
