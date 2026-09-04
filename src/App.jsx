import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoPreview from './components/VideoPreview';
import LessonsSection from './components/LessonsSection';
import CertificateSection from './components/CertificateSection';
import Mentor from './components/Mentor';
import Pricing from './components/Pricing';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';

export default function App() {
  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      {/* Header */}
      <Header onNavigate={handleNavigate} />

      <main className="flex-1">
        {/* Hero */}
        <Hero
          onGoToLessons={() => handleNavigate('lessons')}
          onGoToVideo={() => handleNavigate('preview')}
        />

        {/* 1-Lesson Video Preview */}
        <VideoPreview />

        {/* 24 Lessons 5-Module Accordion & Table */}
        <LessonsSection
          onOpenPreview={() => handleNavigate('preview')}
        />

        {/* Official Certificate Section */}
        <CertificateSection />

        {/* Mentor Info Card */}
        <Mentor />

        {/* Pricing & Closed Telegram Group Details */}
        <Pricing />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Floating Telegram Button */}
      <FloatingCTA />
    </div>
  );
}
