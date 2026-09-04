import React, { useState } from 'react';
import { modules5Data } from '../data/lessonsData';
import { ChevronDown, Play, Send, Clock, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

export default function LessonsSection({ onOpenPreview }) {
  // 1-modul boshlang'ich holatda ochiq turadi
  const [openModules, setOpenModules] = useState([1]);

  const toggleModule = (id) => {
    if (openModules.includes(id)) {
      setOpenModules(openModules.filter((mId) => mId !== id));
    } else {
      setOpenModules([...openModules, id]);
    }
  };

  const expandAll = () => setOpenModules([1, 2, 3, 4, 5]);
  const collapseAll = () => setOpenModules([]);

  return (
    <section id="lessons" className="py-16 max-w-5xl mx-auto px-4 sm:px-6 text-left">
      {/* Sarlavha & Filtrlar */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#104c96] text-xs font-bold shadow-xs">
          <Layers className="w-3.5 h-3.5" />
          <span>Tizimli Ta'lim Dasturi • 5 Modul • 24 ta Dars</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Kursning To'liq Dasturi va Rejasi
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Har bir modul noldan boshlab amaliy natijaga olib chiqadi. Modulni bosing va darslar jadvalini batafsil ko'ring.
        </p>

        {/* Tezkor Boshqaruv Tugmalari */}
        <div className="pt-2 flex items-center justify-center gap-2.5 text-xs font-semibold">
          <button
            onClick={expandAll}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs transition-all cursor-pointer active:scale-95"
          >
            Barchasini ochish
          </button>
          <button
            onClick={collapseAll}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs transition-all cursor-pointer active:scale-95"
          >
            Barchasini yopish
          </button>
        </div>
      </div>

      {/* 5 ta Modul (Akkordeon & Jadval) */}
      <div className="space-y-4">
        {modules5Data.map((mod) => {
          const isOpen = openModules.includes(mod.id);
          return (
            <div
              key={mod.id}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-blue-300/80 shadow-md shadow-slate-200/50'
                  : 'border-slate-200/90 shadow-xs hover:border-slate-300'
              }`}
            >
              {/* Modul Sarlavhasi (Bosiladigan Accordion Bar) */}
              <button
                onClick={() => toggleModule(mod.id)}
                className={`w-full p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors text-left cursor-pointer ${
                  isOpen ? 'bg-slate-50/60' : 'hover:bg-slate-50/80'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    style={{ backgroundColor: mod.color }}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white font-black text-xs sm:text-sm shrink-0 shadow-xs"
                  >
                    0{mod.id}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 truncate">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-slate-500 truncate mt-0.5 font-normal">
                      {mod.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="text-xs font-bold bg-[#e8f8f0] text-[#27ae60] border border-[#27ae60]/20 px-2.5 py-1 rounded-lg">
                    {mod.lessonsCount} ta dars
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-[#104c96]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Modul Darslari Jadvali (Ochilganda Ko'rinadi) */}
              {isOpen && (
                <div className="border-t border-slate-100 bg-white p-2 sm:p-4 overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[580px]">
                    <thead>
                      <tr className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/80 border-b border-slate-200/80 rounded-lg">
                        <th className="py-2.5 px-3 w-14 text-center rounded-l-lg">№</th>
                        <th className="py-2.5 px-3">Dars Nomi va Mazmuni</th>
                        <th className="py-2.5 px-3 w-28">Davomiyligi</th>
                        <th className="py-2.5 px-3 w-32">Holati</th>
                        <th className="py-2.5 px-3 w-36 text-right rounded-r-lg">Amal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                      {mod.lessons.map((lesson) => (
                        <tr
                          key={lesson.number}
                          className="hover:bg-slate-50/80 transition-colors group"
                        >
                          {/* № */}
                          <td className="py-3 px-3 text-center align-top">
                            <span className="inline-block font-mono font-bold text-xs px-2 py-0.5 rounded-md bg-[#e8f8f0] text-[#27ae60] border border-[#27ae60]/20">
                              {lesson.number < 10 ? `0${lesson.number}` : lesson.number}
                            </span>
                          </td>

                          {/* Dars Nomi va Mazmuni */}
                          <td className="py-3 px-3 align-top">
                            <div className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-[#104c96] transition-colors">
                              {lesson.title}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                              {lesson.desc}
                            </div>
                          </td>

                          {/* Vaqti */}
                          <td className="py-3 px-3 align-top text-slate-600 whitespace-nowrap text-xs">
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span className="font-medium">{lesson.duration}</span>
                            </div>
                          </td>

                          {/* Holati */}
                          <td className="py-3 px-3 align-top whitespace-nowrap">
                            {lesson.isPreview ? (
                              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md border border-rose-200">
                                <Play className="w-2.5 h-2.5 fill-rose-700" />
                                Bepul Ochiq
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/60">
                                Yopiq Guruh
                              </span>
                            )}
                          </td>

                          {/* Harakat / Link */}
                          <td className="py-3 px-3 align-top text-right whitespace-nowrap">
                            {lesson.isPreview ? (
                              <button
                                onClick={onOpenPreview}
                                className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-xs transition-all cursor-pointer active:scale-95"
                              >
                                <Play className="w-3 h-3 fill-white" />
                                <span>Videoni ko'rish</span>
                              </button>
                            ) : (
                              <a
                                href="https://t.me/temuurbek_21"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 bg-[#0088cc]/10 hover:bg-[#0088cc] text-[#0088cc] hover:text-white border border-[#0088cc]/25 text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-xs transition-all"
                              >
                                <Send className="w-2.5 h-2.5" />
                                <span>Telegramda</span>
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

