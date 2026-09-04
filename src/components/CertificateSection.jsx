import React, { useState } from 'react';
import { Award, QrCode, CheckCircle2, ShieldCheck, Download, Send, Maximize2, X } from 'lucide-react';

export default function CertificateSection() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="certificate" className="py-16 sm:py-20 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      {/* Sarlavha */}
      <div className="text-center space-y-3 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold shadow-xs">
          <Award className="w-3.5 h-3.5" />
          <span>Rasmiy Tasdiqlangan Hujjat</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Kurs Yakunida Rasmiy Sertifikat
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed px-2 sm:px-0">
          24 ta amaliy darsni yakunlagan har bir o'quvchiga unikal QR-kodli, muhrlangan va ishga kirishda qabul qilinadigan rasmiy sertifikat beriladi.
        </p>
      </div>

      {/* Asosiy Sertifikat Kartasi */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
        {/* Rasm va Preview Ramkasi */}
        <div className="relative group cursor-pointer" onClick={() => setIsZoomed(true)}>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 transition-all duration-300 group-hover:shadow-2xl">
            <img
              src="/certificate.png"
              alt="Kompyuter Savodxonligi Rasmiy Sertifikati"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />
          </div>

          {/* Hover Zoom Badge */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-slate-900/85 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Kattalashtirib ko'rish</span>
          </div>
        </div>

        {/* Sertifikatning 4 ta Muhim Xususiyati */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#104c96] flex items-center justify-center mb-2.5 font-bold">
              <QrCode className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">
              QR-kodli Tekshiruv
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Har bir sertifikat kompyutersavodxonligi.uz/verify orqali haqiqiyligi tekshiriladi.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#27ae60] flex items-center justify-center mb-2.5 font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">
              Rasmiy Muhr & Imzo
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Kurs muallifi Reyimberdiyev Temurbek tomonidan shaxsan tasdiqlanadi.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#00a896] flex items-center justify-center mb-2.5 font-bold">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">
              5 ta Yo'nalish Belgisi
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Windows, Word, Excel, PowerPoint va AI ko'nikmalari alohida ko'rsatiladi.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5 font-bold">
              <Download className="w-4 h-4" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">
              Chop Etishga Tayyor
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Rezyumega qo'shish va ramkaga solib qo'yish uchun yuqori sifatli PDF formatda beriladi.
            </p>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/70 via-slate-50 to-teal-50/70 border border-blue-100">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-extrabold text-slate-900">
              Siz ham ushbu sertifikat egasiga aylanishni xohlaysizmi?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Hozir kursga yoziling va 24 ta amaliy darsdan so'ng sertifikatingizni oling.
            </p>
          </div>

          <a
            href="https://t.me/temuurbek_21"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0088cc] hover:bg-[#007cb8] text-white text-xs px-5 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0 cursor-pointer min-h-[44px]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Sertifikatli kursga yozilish</span>
          </a>
        </div>
      </div>

      {/* Modal Zoom View with Touch-Friendly Close */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-11 right-0 sm:right-2 text-white bg-slate-800/80 hover:bg-slate-700 px-3 py-1.5 rounded-full transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold shadow-md"
            >
              <span>Yopish</span>
              <X className="w-4 h-4" />
            </button>
            <img
              src="/certificate.png"
              alt="Sertifikat to'liq o'lchamda"
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}
    </section>
  );
}