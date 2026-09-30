import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

const YOUTUBE_URL = 'https://www.youtube.com/@BrickSync_PhysicalAI';
const INSTAGRAM_URL = 'https://www.instagram.com/brick_sync/';

const COPY = {
  ko: {
    tagline: '오늘도 여러분과 함께 새로운 세상을 만들어갑니다',
    title: 'BrickSync 소셜 네트워크 서비스',
    ytLabel: 'Youtube 채널',
    ytHandle: '@BrickSync_PhysicalAI',
    igLabel: 'Instagram 채널',
    igHandle: '@brick_sync',
  },
  en: {
    tagline: 'Building a new world together, every day',
    title: 'BrickSync Social Network Service',
    ytLabel: 'Youtube Channel',
    ytHandle: '@BrickSync_PhysicalAI',
    igLabel: 'Instagram Channel',
    igHandle: '@brick_sync',
  },
};

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

export const NewsPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <div className="relative z-10 w-full min-h-full flex flex-col items-center justify-between select-none font-poppins bg-[#fbfffa] -mt-20 sm:-mt-24 md:-mt-28">
      <div className="w-full flex flex-col items-center">
        <img
          src="/images/sns_banner.png"
          alt="BrickSync SNS"
          className="w-full h-auto select-none pointer-events-none"
        />
        <div className="w-full flex flex-col items-center pt-10 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-8">
          <p className="text-black whitespace-nowrap text-center text-[clamp(0.5rem,2.02vw,2rem)] mb-2 sm:mb-3">
            {t.tagline}
          </p>
          <h2 className="font-extrabold leading-tight break-keep text-center text-[clamp(1.1rem,4.04vw,4.04rem)] bg-gradient-to-r from-[#13A1A4] to-[#7CD858] bg-clip-text text-transparent">
            {t.title}
          </h2>
        </div>

        {/* YouTube channel */}
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex flex-col items-center px-4 sm:px-8 pb-16 sm:pb-24"
        >
          <YouTubeIcon className="w-[clamp(2.2rem,4.5vw,3.5rem)] h-[clamp(2.2rem,4.5vw,3.5rem)] text-[#FF0033] mb-2 sm:mb-3" />
          <h3 className="text-black font-extrabold leading-tight break-keep text-center text-[clamp(1.3rem,3.4vw,2.6rem)]">
            {t.ytLabel}
          </h3>
          <p className="text-black font-extrabold leading-tight text-center text-[clamp(1.3rem,3.4vw,2.6rem)] mb-6 sm:mb-8">
            {t.ytHandle}
          </p>
          <img
            src="/images/sns_youtube_card.png"
            alt="BrickSync YouTube"
            className="w-full h-auto select-none pointer-events-none rounded-2xl md:rounded-3xl shadow-[0_16px_50px_rgba(0,0,0,0.12)]"
            style={{ maxWidth: 900 }}
          />
        </a>

        {/* Instagram channel */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex flex-col items-center px-4 sm:px-8 pb-20 sm:pb-28"
        >
          <InstagramIcon className="w-[clamp(2rem,4vw,3.1rem)] h-[clamp(2rem,4vw,3.1rem)] text-[#D62976] mb-2 sm:mb-3" />
          <h3 className="text-black font-extrabold leading-tight break-keep text-center text-[clamp(1.3rem,3.4vw,2.6rem)]">
            {t.igLabel}
          </h3>
          <p className="text-black font-extrabold leading-tight text-center text-[clamp(1.3rem,3.4vw,2.6rem)] mb-6 sm:mb-8">
            {t.igHandle}
          </p>
          <img
            src="/images/sns_instagram_card.png"
            alt="BrickSync Instagram"
            className="w-full h-auto select-none pointer-events-none rounded-2xl md:rounded-3xl shadow-[0_16px_50px_rgba(0,0,0,0.12)]"
            style={{ maxWidth: 544 }}
          />
        </a>
      </div>
      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
