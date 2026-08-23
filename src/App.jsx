import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutPage } from './components/AboutPage';
import { EducationPage } from './components/EducationPage';
import { QuickStartPage } from './components/QuickStartPage';
import { DownloadPage } from './components/DownloadPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <LanguageProvider>
      <div className="relative w-screen h-screen overflow-hidden select-none bg-[#0a2754]">
        
        {/* 1. Global Full-Bleed Background Image (100% Screen Fill) */}
        <img
          src="/images/BackGround.png"
          alt="BrickSync Background"
          className="fixed inset-0 w-full h-full object-cover object-center select-none pointer-events-none z-0"
        />

        {/* 2. Global Layout: Fixed Top Header across all pages */}
        <div className="relative z-10 w-full h-full flex flex-col justify-start overflow-hidden">
          
          {/* Fixed Top Navbar across entire site */}
          <div className="w-full flex-shrink-0 z-50 pt-[1.8%] pb-[1.4%] px-[4.8%] bg-transparent">
            <Navbar currentView={currentView} setCurrentView={setCurrentView} isHeaderOnly={true} />
          </div>

          {/* Main Content Area: Dedicated Scroll Containers */}
          <main className="w-full flex-1 overflow-hidden relative">
            {currentView === 'home' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar">
                <Hero setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'about' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar">
                <AboutPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'education' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar">
                <EducationPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'quickstart' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar">
                <QuickStartPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'download' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar">
                <DownloadPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'contact' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar">
                <ContactPage setCurrentView={setCurrentView} />
              </div>
            )}
          </main>

        </div>

      </div>
    </LanguageProvider>
  );
}
