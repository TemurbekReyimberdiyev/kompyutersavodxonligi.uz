import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Send } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Kompyuterni umuman tushunmaydigan odam ham o'rgana oladimi?",
      a: "Albatta! Kurs aynan 0 dan, ya'ni kompyuterni yoqish, sichqoncha va klaviaturadan to'g'ri foydalanishdan boshlanadi. Har bir dars o'ta sodda, xalqchil va tushunarli tilda bosqichma-bosqich tushuntirilgan."
    },
    {
      q: "Darslarni qaysi vaqtda ko'rishim kerak? Muayyan vaqt belgilanadimi?",
      a: "Yo'q, qat'iy vaqt belgilanmagan. Barcha 24 ta darslik yopiq Telegram guruhida video formatda tayyor saqlanadi. O'zingizga qulay paytda — ertalab, tushlikda yoki kechqurun bemalol ko'rishingiz mumkin."
    },
    {
      q: "Darslar qancha muddat saqlanadi?",
      a: "Darslar yopiq guruhda umrbod qoladi! Kursni xarid qilganingizdan so'ng guruhdan chiqarilmaysiz va istalgan vaqtda qayta ko'rishingiz mumkin."
    },
    {
      q: "Savollarim bo'lsa yoki darsda tushunmay qolsam nima bo'ladi?",
      a: "Siz yolg'iz qolmaysiz! Maxsus yopiq chatda yoki shaxsan Reyimberdiyev Temurbek bilan Telegram orqali barcha savollaringizga tezkor javob olasiz."
    },
    {
      q: "Kurs yakunida sertifikat beriladimi?",
      a: "Ha! Kursning 24 ta darsini to'liq ko'rib, yakuniy amaliy loyihani topshirgan har bir o'quvchiga muvaffaqiyatli tamomlaganlik to'g'risida rasmiy Sertifikat beriladi."
    },
    {
      q: "Kursni qanday sotib olsam bo'ladi va to'lov qanday amalga oshiriladi?",
      a: "To'lov Click, Payme yoki Uzum Bank orqali amalga oshiriladi. Sotib olish uchun to'g'ridan-to'g'ri Telegram orqali yozing. To'lov tasdiqlangach, darhol yopiq guruhga qo'shilasiz."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#104c96] text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-[#104c96]" />
            <span>Savol-Javoblar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
            Ko'p Beriladigan Savollarga Javoblar
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Kurs bo'yicha barcha savollaringizga quyida to'liq oydinlik kiritilgan
          </p>
        </div>

        <div className="space-y-3 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-sm text-slate-800">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#104c96]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-slate-800">Boshqa savolingiz bormi?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Temurbekka to'g'ridan-to'g'ri yozing, barcha savollaringizga mamnuniyat bilan javob beramiz.</p>
          </div>

          <a
            href="https://t.me/temuurbek_21"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#0088cc] hover:bg-[#0077b5] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegramda yozish</span>
          </a>
        </div>
      </div>
    </section>
  );
}
