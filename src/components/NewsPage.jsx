import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

const YOUTUBE_URL = 'https://www.youtube.com/@BrickSync_PhysicalAI';
const INSTAGRAM_URL = 'https://www.instagram.com/brick_sync/';

const COPY = {
  ko: {
    tagline: '오늘도 여러분과 함께 새로운 세상을 만들어갑니다',
    title: 'BrickSync 소셜 네트워크 서비스',
  },
  en: {
    tagline: 'Building a new world together, every day',
    title: 'BrickSync Social Network Service',
  },
};

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

        <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-16 items-start px-4 sm:px-8 pb-20 sm:pb-28">
          {/* YouTube channel */}
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              src="/images/sns_youtube_title.png"
              alt="Youtube 채널 @BrickSync_PhysicalAI"
              className="w-[48.89%] h-auto select-none pointer-events-none mb-6 sm:mb-8"
            />
            <img
              src="/images/sns_youtube_card.png"
              alt="BrickSync YouTube"
              className="w-full h-auto select-none pointer-events-none rounded-2xl md:rounded-3xl shadow-[0_16px_50px_rgba(0,0,0,0.12)]"
            />
          </a>

          {/* Instagram channel */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              src="/images/sns_instagram_title.png"
              alt="Instagram 채널 @brick_sync"
              className="w-[37.78%] h-auto select-none pointer-events-none mb-6 sm:mb-8"
            />
            <img
              src="/images/sns_instagram_card.png"
              alt="BrickSync Instagram"
              className="w-[60.44%] h-auto select-none pointer-events-none rounded-2xl md:rounded-3xl shadow-[0_16px_50px_rgba(0,0,0,0.12)]"
            />
          </a>
        </div>
      </div>
      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
