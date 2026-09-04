import React from 'react';
import { X, CheckCircle2, Clock, BookOpen, Send, Play, FileText, ArrowRight } from 'lucide-react';
import LessonIcon from './LessonIcon';

export default function LessonModal({ lesson, onClose, onPlayPreview }) {
  if (!lesson) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-2xl w-full overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          style={{ backgroundColor: lesson.color }}
          className="p-6 text-white relative flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
              <LessonIcon name={lesson.icon} className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold tracking-wider">
                  Dars {lesson.number}
                </span>
                <span className="text-xs text-white/80 font-medium">
                  {lesson.moduleName}
                </span>
              </div>
              <h3 className="text-xl font-bold leading-tight text-white">
                {lesson.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/20 hover:bg-black/30 text-white flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Duration & Overview */}
          <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-4 h-4 text-[#104c96]" />
              <span>Dars davomiyligi: <strong>{lesson.duration}</strong></span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs">
              {lesson.badge}
            </span>
          </div>

          <div>
            <h4 className="font-bold text-sm text-slate-800 mb-2">Dars haqida qisqacha:</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-blue-50/40 p-4 rounded-2xl border border-blue-100/60">
              {lesson.shortDesc}
            </p>
          </div>

          {/* Topics Covered */}
          <div>
            <h4 className="font-bold text-sm text-slate-800 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#00a896]" />
              <span>Ushbu darsda o'rganiladigan asosiy mavzular:</span>
            </h4>
            <div className="space-y-2.5">
              {lesson.topics.map((t, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Homework assignment */}
          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
            <h4 className="font-bold text-xs sm:text-sm text-amber-900 mb-1 flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-700" />
              <span>Amaliy uyga vazifa:</span>
            </h4>
            <p className="text-xs sm:text-sm text-amber-800">
              {lesson.homework}
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          {lesson.isPreview ? (
            <button
              onClick={() => {
                onClose();
                onPlayPreview();
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Preview videoni tomosha qilish</span>
            </button>
          ) : (
            <span className="text-xs text-slate-500 text-center sm:text-left">
              To'liq video va fayllar yopiq Telegram guruhda
            </span>
          )}

          <a
            href="https://t.me/temuurbek_21"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-[#104c96] to-[#00a896] hover:from-[#0d3f7d] hover:to-[#008f80] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Telegram orqali xarid qilish</span>
          </a>
        </div>
      </div>
    </div>
  );
}
