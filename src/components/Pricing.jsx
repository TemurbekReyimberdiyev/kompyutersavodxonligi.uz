import React from 'react';
import { Send, Check, ShieldCheck, Sparkles, Zap, Lock } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Eng Qulay va To'liq Ta'rif</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Kurs Narxi va Yopiq Guruhga Kirish
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Bir martalik to'lov evaziga barcha 24 ta dars va materiallarga umrbod ega bo'lasiz.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-200/90 text-left relative overflow-hidden">
          {/* Top Decorative Strip */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#104c96] via-[#00a896] to-[#27ae60]"></div>

          {/* Pricing Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00a896] uppercase tracking-wider">
                <Lock className="w-3 h-3" />
                <span>Yopiq Telegram Guruh</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                To'liq Kurs Paketi (24 ta Dars)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Hech qanday oylik to'lovlarsiz, bir martalik to'lov
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <div className="flex items-center gap-2 sm:justify-end">
                <span className="text-3xl sm:text-4xl font-black text-[#104c96] tracking-tight">
                  199,000
                </span>
                <span className="text-sm font-extrabold text-slate-700">so'm</span>
                <span className="text-[11px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full border border-rose-200">
                  -50%
                </span>
              </div>
              <div className="text-xs text-slate-400 line-through mt-0.5 sm:text-right">
                Asl narxi: 399,000 so'm
              </div>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="py-6 space-y-3.5 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#e8f8f0] text-[#27ae60] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span><strong>24 ta to'liq video darslik (HD)</strong> — Windows 10/11, Word, Excel, PowerPoint, Internet va zamonaviy AI.</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#e8f8f0] text-[#27ae60] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span><strong>Yopiq Telegram guruhiga umrbod a'zolik</strong> — darslar hech qachon o'chirilmaydi, istalgan qurilmangizdan o'rganasiz.</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#e8f8f0] text-[#27ae60] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span><strong>Amaliy shablonlar va tayyor hujjatlar</strong> — arizalar, hisobot jadvallari, taqdimot slaydlari jamlanmasi.</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#e8f8f0] text-[#27ae60] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span><strong>Reyimberdiyev Temurbek bilan shaxsiy savol-javob</strong> — qiyin mavzularda shaxsan yordam beriladi.</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#e8f8f0] text-[#27ae60] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span><strong>Rasmiy Kurs Sertifikati</strong> — kurs yakunida bilimingizni tasdiqlovchi sertifikat taqdim etiladi.</span>
            </div>
          </div>

          {/* Action Button & Payment Notice */}
          <div className="pt-2">
            <a
              href="https://t.me/temuurbek_21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0088cc] via-[#104c96] to-[#00a896] hover:opacity-95 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-blue-900/15 hover:shadow-2xl hover:-translate-y-0.5 transition-all active:scale-95 cursor-pointer"
            >
              <Send className="w-5 h-5" />
              <span>Sotib olish uchun Telegramga yozish (@temuurbek_21)</span>
            </a>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 font-medium">
              <span className="flex items-center gap-1 text-slate-600">
                <ShieldCheck className="w-3.5 h-3.5 text-[#27ae60]" />
                100% Xavfsiz to'lov
              </span>
              <span>•</span>
              <span>Click / Payme / Uzum Bank</span>
              <span>•</span>
              <span>To'lovdan so'ng darhol guruhga qo'shilasiz</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
