import React from 'react';
import { Mail, Phone } from 'lucide-react';

const YouTubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.3 3.5-6.3 3.5Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5h1.6V4.3C16.3 4.2 15.3 4 14.2 4c-2.3 0-3.9 1.4-3.9 4v2.5H7.8v3h2.5V21h3.2Z" />
  </svg>
);

const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.6 5.8c-.9-.9-1.4-2.1-1.5-3.4h-3v13.2a2.6 2.6 0 1 1-2.6-2.6c.2 0 .5 0 .7.1v-3a5.6 5.6 0 1 0 4.9 5.5V9.3a8.6 8.6 0 0 0 4.9 1.5v-3a5.6 5.6 0 0 1-3.4-1.9Z" />
  </svg>
);

export const Footer = ({ setCurrentView }) => {
  return (
    <footer className="w-full bg-[#595959] border-t border-white/15 text-white font-poppins pt-12 sm:pt-16 pb-10 px-6 sm:px-10 lg:px-16 mt-auto select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
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
              대표자 : 이재학<br />
              사업자 등록 번호 : 350-49-01280
            </p>

            <div className="mt-auto flex flex-col gap-2">
              <div className="flex items-center gap-3 text-[11px] sm:text-xs text-white/70">
                <button
                  onClick={() => setCurrentView && setCurrentView('privacy')}
                  className="hover:text-cyan-300 transition-colors font-semibold"
                >
                  개인정보처리방침
                </button>
                <span className="text-white/30">|</span>
                <button
                  onClick={() => setCurrentView && setCurrentView('terms')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  이용약관
                </button>
              </div>
              <p className="text-[11px] sm:text-xs text-white/55 leading-relaxed">
                © 2026 BrickSync (www.bricksync.org). All rights reserved.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-wider mb-4 sm:mb-5">
              바로가기
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-normal">
              <li>
                <button
                  onClick={() => setCurrentView && setCurrentView('about')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  브릭싱크 소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView && setCurrentView('education')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  LEGO 포트나이트 교육
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView && setCurrentView('quickstart')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  빠른 시작 가이드
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView && setCurrentView('download')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  다운로드 및 자료
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView && setCurrentView('contact')}
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  문의 및 제휴
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Emails (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-wider mb-4 sm:mb-5">
              연락처
            </h4>

            {/* Contact Emails */}
            <div className="flex flex-col gap-2.5 pl-1">
              <a
                href="mailto:jaihaklee67@naver.com"
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-white/80 hover:text-cyan-300 transition-colors"
                title="Send email to Cliff Lee (jaihaklee67@naver.com)"
              >
                <Mail className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                <span className="font-poppins text-xs sm:text-sm font-normal">jaihaklee67@naver.com</span>
              </a>
              <a
                href="tel:+821027731619"
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-white/80 hover:text-cyan-300 transition-colors"
                title="Call +82 10-2773-1619"
              >
                <Phone className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                <span className="font-poppins text-xs sm:text-sm font-normal">+82 10-2773-1619</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mt-5">
              <a
                href="https://youtube.com/@BrickSync_PhysicalAI"
                target="_blank"
                rel="noopener noreferrer"
                title="BrickSync YouTube"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/brick_sync"
                target="_blank"
                rel="noopener noreferrer"
                title="BrickSync Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <span
                title="Facebook (준비 중)"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/40"
              >
                <FacebookIcon className="w-4 h-4" />
              </span>
              <span
                title="TikTok (준비 중)"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/40"
              >
                <TikTokIcon className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Trademark & Sponsorship Disclaimer */}
        <div className="mt-10 pt-6 border-t border-white/15">
          <p className="text-[11px] sm:text-xs text-white/45 leading-relaxed text-justify">
            LEGO® Education, LEGO® Education SPIKE™는 The LEGO Group의 상표입니다. Fortnite® 및 관련 상표는 Epic Games, Inc.의 상표입니다. 브릭싱크는 독립 교육 기업이며, The LEGO Group 또는 Epic Games, Inc.와 제휴하거나 이들의 후원·인증을 받지 않았습니다.
          </p>
        </div>

      </div>
    </footer>
  );
};
