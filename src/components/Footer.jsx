import React from 'react';
import { ExternalLink, Mail, Globe, Sparkles, Award } from 'lucide-react';

export const Footer = ({ setCurrentView }) => {
  return (
    <footer className="w-full bg-[#051124]/90 backdrop-blur-md border-t border-white/15 text-white font-poppins pt-12 sm:pt-16 pb-10 px-6 sm:px-10 lg:px-16 mt-auto select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Domain (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 mb-4 cursor-pointer hover:opacity-90 transition-opacity" 
              onClick={() => setCurrentView && setCurrentView('about')}
            >
              <img
                src="/images/bslogo_crop.png"
                alt="BrickSync Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-[460px] mb-6">
              An innovative Phygital AI computing platform seamlessly connecting hands-on LEGO SPIKE robotics with immersive UEFN Fortnite 3D interactive worlds.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="https://www.bricksync.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-cyan-300 text-xs font-semibold transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>www.bricksync.org</span>
                <ExternalLink className="w-3 h-3 text-cyan-400/80" />
              </a>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Island Code: 7603-2493-0825</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4 sm:mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/75 font-normal">
              <li>
                <button
                  onClick={() => setCurrentView && setCurrentView('about')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  About BrickSync
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView && setCurrentView('education')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  LEGO Fortnite Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView && setCurrentView('quickstart')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Quick Start Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView && setCurrentView('download')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Download & Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView && setCurrentView('contact')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Contact & Partnership
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Instructors & Contact Emails (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4 sm:mb-5">
              Leadership & Tech
            </h4>
            
            {/* Leadership Box */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white">Cliff Lee & Emma Jeon</span>
              </div>
              <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed pl-6">
                Epic Games Certified Unreal Authorized Instructors (UAI)
              </p>
            </div>

            {/* Contact Emails */}
            <div className="flex flex-col gap-2.5 pl-1">
              <a
                href="mailto:jaihaklee67@naver.com"
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-white/80 hover:text-cyan-300 transition-colors"
                title="Send email to Cliff Lee (jaihaklee67@naver.com)"
              >
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-poppins text-xs sm:text-sm font-normal">jaihaklee67@naver.com</span>
              </a>
              <a
                href="mailto:wjsthdb@naver.com"
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-white/80 hover:text-cyan-300 transition-colors"
                title="Send email to Emma Jeon (wjsthdb@naver.com)"
              >
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-poppins text-xs sm:text-sm font-normal">wjsthdb@naver.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 BrickSync (www.bricksync.org). All rights reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-2 text-white/60 text-[11px]">
            <span>Powered by</span>
            <span className="font-semibold text-cyan-300">UEFN (Verse)</span>
            <span>&amp;</span>
            <span className="font-semibold text-amber-300">LEGO SPIKE</span>
            <span>•</span>
            <span className="text-white/50">LEGO® & Fortnite® are trademarks of their respective owners.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
