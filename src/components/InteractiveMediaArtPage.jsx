import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

const COPY = {
  ko: {
    title: '인터렉티브 & 미디어아트',
    subtitle: 'AI × 센서 × 실시간 그래픽으로 완성하는 체험형 미디어아트',
    subtitle2: '"공간을 가득 채우는 인터랙티브 아트 경험을 직접 만들어보자!"',
    cards: [
      {
        image: '/images/interactive_card1.jpg',
        heading: 'LED 아나몰픽 콘텐츠 제작',
        body: '센서와 실시간 그래픽을 결합해 관객 움직임에 반응하는 설치 작품을 제작합니다.',
      },
      {
        image: '/images/interactive_card2b.jpg',
        heading: '프로젝션 맵핑 & 미디어 파사드',
        body: '건물·오브젝트 표면에 영상을 투사하는 프로젝션 맵핑과 미디어 파사드 연출을 학습합니다.',
      },
      {
        image: '/images/interactive_card3.jpg',
        heading: '센서 기반 실시간 인터랙션',
        body: '카메라·센서로 손짓과 동작을 인식해 화면과 상호작용하는 인터페이스를 구현합니다.',
      },
    ],
  },
  en: {
    title: 'Interactive & Media Art',
    subtitle: 'Experiential media art built with AI, sensors, and real-time graphics',
    subtitle2: '"Build an interactive art experience that fills the whole room!"',
    cards: [
      {
        image: '/images/interactive_card1.jpg',
        heading: 'Real-Time Interactive Installations',
        body: 'Combine sensors and real-time graphics to build installations that react to audience movement.',
      },
      {
        image: '/images/interactive_card2b.jpg',
        heading: 'Projection Mapping & Media Facades',
        body: 'Learn to project visuals onto buildings and objects through projection mapping and media facade design.',
      },
      {
        image: '/images/interactive_card3.jpg',
        heading: 'Gesture & Sensor-Based Interaction',
        body: 'Use cameras and sensors to recognize gestures and motion, building interfaces that respond to the body.',
      },
    ],
  },
};

export const InteractiveMediaArtPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins bg-white">

      {/* Hero: full-bleed media-art billboard scene, flush under the navbar */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden -mt-20 sm:-mt-24 md:-mt-28">
        <img
          src="/images/interactive_media_hero.jpg"
          alt="Interactive & Media Art"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-2 sm:gap-3">
          <h1 className="text-white font-extrabold leading-tight break-keep text-[clamp(1.6rem,5.5vw,4.5rem)]">
            {t.title}
          </h1>
          <p className="text-white/95 font-semibold leading-snug break-keep text-[clamp(0.85rem,2.4vw,1.85rem)]">
            {t.subtitle}
          </p>
          <p className="text-white/80 leading-snug break-keep text-[clamp(0.7rem,1.8vw,1.35rem)]">
            {t.subtitle2}
          </p>
        </div>
      </div>

      {/* 3 feature cards */}
      <div className="w-full flex flex-col items-center flex-1 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12">
        <div className="w-full max-w-[2720px] grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {t.cards.map((c, i) => (
            <div
              key={i}
              className="flex flex-col rounded-[2rem] sm:rounded-[3rem] border border-black/10 overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="w-full aspect-video overflow-hidden bg-black">
                <img
                  src={c.image}
                  alt={c.heading}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
              <div className="flex flex-col gap-4 sm:gap-6 p-10 sm:p-12 md:p-14">
                <h3 className="text-black font-bold leading-snug break-keep text-[clamp(1.4rem,3.4vw,2.5rem)]">
                  {c.heading}
                </h3>
                <p className="text-black/70 leading-relaxed break-keep text-[clamp(1.1rem,2.4vw,1.9rem)]">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
