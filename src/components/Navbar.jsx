import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Globe, Menu, X } from 'lucide-react';

export const Navbar = ({ currentView, setCurrentView, isHeaderOnly = false }) => {
  const { lang, toggleLang } = useLanguage();
  const t = content[lang].nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getViewKey = (title) => {
    const lower = title.toLowerCase();
    if (lower.includes('about')) return 'about';
    if (lower.includes('education')) return 'education';
    if (lower.includes('quick')) return 'quickstart';
    if (lower.includes('download')) return 'download';
    if (lower.includes('contact')) return 'contact';
    return 'home';
  };

  const handleMenuClick = (itemTitle) => {
    const viewKey = getViewKey(itemTitle);
    setCurrentView(viewKey);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`w-full pointer-events-auto font-poppins ${isHeaderOnly ? 'relative' : 'absolute top-0 left-0 right-0 z-50 pt-[2.0%] px-[4.8%]'}`}>
      <div className="w-full flex items-center justify-between gap-2 lg:gap-6">
        
        {/* Brand Logo - Scaled to match 80% menu */}
        <button
          onClick={() => setCurrentView('home')}
          className="flex items-center cursor-pointer text-left flex-shrink-0"
        >
          <img
            src="/images/bslogo_crop.png"
            alt="BrickSync Logo"
            className="h-[28px] sm:h-[36px] md:h-[44px] lg:h-[52px] xl:h-[60px] 2xl:h-[66px] w-auto object-contain"
          />
        </button>

        {/* Center Desktop Navigation Menu - 80% Scaled Fluid Typography */}
        <nav className="hidden md:flex items-center justify-center flex-1 min-w-0 px-2 lg:px-6 gap-[clamp(10px,1.6vw,44px)]">
          {t.menu.map((item) => {
            const viewKey = getViewKey(item.title);
            const isActive = (viewKey === currentView);

            return (
              <button
                key={item.title}
                onClick={() => handleMenuClick(item.title)}
                className={`text-[clamp(14px,1.55vw,30px)] font-normal transition-all hover:scale-105 tracking-[-0.01em] lg:tracking-normal whitespace-nowrap cursor-pointer font-poppins flex-shrink-0 ${
                  isActive 
                    ? 'text-[#fde047] font-medium' 
                    : 'text-white hover:text-cyan-200'
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </nav>

        {/* Right Language Button Pill - 80% Scaled */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <button
            onClick={toggleLang}
            className="group flex items-center gap-2 px-[clamp(12px,1.3vw,26px)] py-[clamp(6px,0.65vw,11px)] rounded-full bg-white text-[#0284c7] hover:bg-[#0284c7] hover:text-white border-2 border-white hover:border-[#0284c7] font-medium text-[clamp(12px,1.15vw,19px)] transition-all duration-200 hover:scale-105 active:scale-95 font-poppins cursor-pointer whitespace-nowrap"
          >
            <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-current transition-colors duration-200" />
            <span>{t.languageBtn}</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-full bg-white text-[#0284c7] hover:bg-[#0284c7] hover:text-white border border-white hover:border-[#0284c7] font-medium text-xs font-poppins transition-colors duration-200"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c2e60]/95 backdrop-blur-2xl border border-white/20 rounded-2xl mt-3 px-6 py-5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200 font-poppins">
          {t.menu.map((item) => {
            const viewKey = getViewKey(item.title);
            const isActive = (viewKey === currentView);

            return (
              <button
                key={item.title}
                onClick={() => handleMenuClick(item.title)}
                className={`py-2.5 text-lg text-left font-normal border-b border-white/10 font-poppins ${
                  isActive ? 'text-[#fde047] font-medium' : 'text-white hover:text-cyan-300'
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
