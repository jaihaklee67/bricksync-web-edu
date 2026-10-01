import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutPage } from './components/AboutPage';
import { CompanyPage } from './components/CompanyPage';
import { ValuePage } from './components/ValuePage';
import { VisionPage } from './components/VisionPage';
import { EducationPage } from './components/EducationPage';
import { UefnVersePage } from './components/UefnVersePage';
import { UnrealEnginePage } from './components/UnrealEnginePage';
import { InteractiveMediaArtPage } from './components/InteractiveMediaArtPage';
import { ComingSoonPage } from './components/ComingSoonPage';
import { QuickStartPage } from './components/QuickStartPage';
import { NewsPage } from './components/NewsPage';
import { FAQPage } from './components/FAQPage';
import { DownloadPage } from './components/DownloadPage';
import { ContactPage } from './components/ContactPage';

// Every page gets its own real URL (so it can be linked, bookmarked, and
// refreshed directly) instead of the whole site living at one address with
// content swapped by JS state. `currentView` is derived from the URL path,
// and setCurrentView navigates to the matching path — every existing child
// component that already calls setCurrentView('xxx') keeps working as-is.
const VIEW_TO_PATH = {
  home: '/',
  company: '/company',
  value: '/value',
  vision: '/vision',
  about: '/app',
  education: '/legofortnite',
  'uefn-verse': '/uefn-verse',
  'unreal-engine': '/unreal-engine',
  'interactive-3d': '/interactive-3d',
  quickstart: '/quickstart',
  download: '/download',
  contact: '/contact',
  news: '/sns',
  faq: '/faq',
  privacy: '/privacy',
  terms: '/terms',
};
const PATH_TO_VIEW = Object.fromEntries(
  Object.entries(VIEW_TO_PATH).map(([view, path]) => [path, view])
);

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentView = PATH_TO_VIEW[location.pathname] || 'home';
  const setCurrentView = (viewKey) => navigate(VIEW_TO_PATH[viewKey] || '/');
  const [eduScrollTarget, setEduScrollTarget] = useState(null);

  const goToEducationStage = (stageKey) => {
    setEduScrollTarget(stageKey);
    setCurrentView('education');
  };

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
          <div className="w-full flex-shrink-0 z-50 bg-white">
            <Navbar currentView={currentView} setCurrentView={setCurrentView} isHeaderOnly={true} />
          </div>

          {/* Main Content Area: Dedicated Scroll Containers */}
          <main className="w-full flex-1 overflow-hidden relative">
            {currentView === 'home' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar">
                <Hero setCurrentView={setCurrentView} goToEducationStage={goToEducationStage} />
              </div>
            )}

            {currentView === 'company' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar">
                <CompanyPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'value' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <ValuePage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'vision' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar">
                <VisionPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'about' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <AboutPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'education' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <EducationPage
                  setCurrentView={setCurrentView}
                  scrollTarget={eduScrollTarget}
                  onScrollTargetHandled={() => setEduScrollTarget(null)}
                />
              </div>
            )}

            {currentView === 'uefn-verse' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <UefnVersePage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'unreal-engine' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <UnrealEnginePage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'interactive-3d' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <InteractiveMediaArtPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'quickstart' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <QuickStartPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'download' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <DownloadPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'contact' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <ContactPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'news' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <NewsPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'faq' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <FAQPage setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'privacy' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <ComingSoonPage pageKey="privacy" setCurrentView={setCurrentView} />
              </div>
            )}

            {currentView === 'terms' && (
              <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth relative custom-scrollbar pt-20 sm:pt-24 md:pt-28">
                <ComingSoonPage pageKey="terms" setCurrentView={setCurrentView} />
              </div>
            )}
          </main>

        </div>

      </div>
    </LanguageProvider>
  );
}
