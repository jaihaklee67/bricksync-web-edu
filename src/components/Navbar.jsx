import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Globe, Menu, X, ChevronDown, Search } from 'lucide-react';

export const Navbar = ({ currentView, setCurrentView }) => {
  const { lang, toggleLang } = useLanguage();
  const t = content[lang].nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuClick = (viewKey) => {
    setCurrentView(viewKey);
    setMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
  };

  const searchIndex = t.menu.flatMap((item) => [
    { title: item.title, view: item.view },
    ...(item.submenu ? item.submenu.map((sub) => ({ title: sub.title, view: sub.view })) : [])
  ]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;
    const match = searchIndex.find((entry) => entry.title.toLowerCase().includes(q));
    if (match) {
      handleMenuClick(match.view);
      setSearchQuery('');
    }
  };

  return (
    <header className="w-full pointer-events-auto font-poppins relative">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between gap-3 lg:gap-6 h-16 sm:h-20 px-5 sm:px-8 lg:px-10">

        {/* Brand Logo */}
        <button
          onClick={() => setCurrentView('home')}
          className="flex items-center cursor-pointer text-left flex-shrink-0 outline-none"
        >
          <img
            src="/images/bslogo_color_wordmark.png"
            alt="BrickSync Logo"
            className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain"
          />
        </button>

        {/* Center Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center justify-center flex-1 min-w-0 px-2 lg:px-6 gap-[clamp(10px,1.6vw,40px)]">
          {t.menu.map((item) => {
            const isActive = item.view === currentView ||
              (item.submenu && item.submenu.some((sub) => sub.view === currentView));

            return (
              <div key={item.title} className={item.submenu ? 'relative group flex-shrink-0' : 'flex-shrink-0'}>
                <button
                  onClick={() => handleMenuClick(item.view)}
                  className={`flex items-center gap-1 text-[clamp(14px,1.45vw,20px)] font-semibold transition-colors tracking-[-0.01em] whitespace-nowrap cursor-pointer font-poppins outline-none ${
                    isActive ? 'text-[#029DF7]' : 'text-black hover:text-[#029DF7]'
                  }`}
                >
                  {item.title}
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 flex-shrink-0 transition-transform group-hover:rotate-180" />
                  )}
                </button>

                {item.submenu && (
                  <div className="absolute left-0 top-full pt-3 z-50 opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <div className="flex flex-col items-start gap-5 whitespace-nowrap min-w-[220px] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] px-8 py-7">
                      {item.submenu.map((sub) => (
                        <button
                          key={sub.title}
                          onClick={() => handleMenuClick(sub.view)}
                          className={`text-base font-medium font-poppins whitespace-nowrap transition-colors outline-none ${
                            sub.view === currentView ? 'text-[#029DF7]' : 'text-black hover:text-[#029DF7]'
                          }`}
                        >
                          {sub.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Search + Language + CTA */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-black/15 text-sm font-semibold text-black hover:border-[#029DF7] hover:text-[#029DF7] transition-colors font-poppins outline-none"
          >
            <Globe className="w-4 h-4" />
            <span>{lang === 'ko' ? 'KO' : 'EN'}</span>
          </button>

          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search BrickSync"
              className="w-36 lg:w-48 pl-4 pr-9 py-2 rounded-full border border-black/15 text-sm text-black placeholder:text-black/40 outline-none focus:border-[#029DF7] transition-colors font-poppins"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-black/50 hover:text-[#029DF7] transition-colors outline-none"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          <button
            onClick={() => handleMenuClick('download')}
            className="px-5 py-2.5 rounded-full bg-[#029DF7] text-white hover:bg-black font-bold text-sm lg:text-base transition-colors font-poppins whitespace-nowrap cursor-pointer outline-none"
          >
            다운로드
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-black/5 text-black hover:text-[#029DF7] transition-colors outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.15)] px-6 py-5 flex flex-col gap-1 font-poppins z-50">
          <form onSubmit={handleSearchSubmit} className="relative mb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search BrickSync"
              className="w-full pl-4 pr-9 py-2.5 rounded-full border border-black/15 text-sm text-black placeholder:text-black/40 outline-none focus:border-[#029DF7] transition-colors font-poppins"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-black/50 hover:text-[#029DF7] transition-colors outline-none"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 self-start px-3.5 py-2 mb-3 rounded-full border border-black/15 text-sm font-semibold text-black hover:border-[#029DF7] hover:text-[#029DF7] transition-colors font-poppins outline-none"
          >
            <Globe className="w-4 h-4" />
            <span>{lang === 'ko' ? 'KO' : 'EN'}</span>
          </button>

          {t.menu.map((item) => {
            const isActive = item.view === currentView ||
              (item.submenu && item.submenu.some((sub) => sub.view === currentView));
            const isOpen = openMobileSubmenu === item.title;

            return (
              <div key={item.title} className="flex flex-col">
                <button
                  onClick={() => item.submenu ? setOpenMobileSubmenu(isOpen ? null : item.title) : handleMenuClick(item.view)}
                  className={`py-2.5 text-lg text-left font-semibold border-b border-black/10 font-poppins flex items-center justify-between outline-none ${
                    isActive ? 'text-[#029DF7]' : 'text-black hover:text-[#029DF7]'
                  }`}
                >
                  {item.title}
                  {item.submenu && (
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {item.submenu && (
                  <div className={`overflow-hidden transition-[max-height] duration-300 ease-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="flex flex-col pl-4">
                      {item.submenu.map((sub) => (
                        <button
                          key={sub.title}
                          onClick={() => handleMenuClick(sub.view)}
                          className={`py-2 text-base text-left font-semibold font-poppins outline-none ${
                            sub.view === currentView ? 'text-[#029DF7]' : 'text-black hover:text-[#029DF7]'
                          }`}
                        >
                          {sub.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <button
            onClick={() => handleMenuClick('download')}
            className="mt-3 px-5 py-2.5 rounded-full bg-[#029DF7] text-white hover:bg-black font-bold text-base transition-colors font-poppins outline-none"
          >
            다운로드
          </button>
        </div>
      )}
    </header>
  );
};
