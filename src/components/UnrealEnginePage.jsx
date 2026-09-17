import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

const COPY = {
  ko: {
    title: 'Unreal Engine',
    subtitle: '인터렉션/모션캡쳐 활용',
    subtitle2: 'Unreal Engine 시뮬레이션 제작',
    cards: [
      {
        image: '/images/unreal_simulation.png',
        heading: '실시간 인터랙티브 시뮬레이션',
        body: '사용자 입력과 센서 반응에 실시간 동작하는 3D 시뮬레이션 구축.',
      },
      {
        image: '/images/unreal_configurator.png',
        heading: '고품질 컨피규레이터 제작',
        body: '건축, 산업 디자인, 제품 기획을 위한 고품질 컨피규레이터 제작.',
      },
      {
        image: '/images/unreal_virtualhuman.jpg',
        heading: '버추얼 휴먼 & 리얼타임 XR',
        body: '버추얼 휴먼 활용 리얼타임 XR 게임 및 영상 방송 콘텐츠 제작.',
      },
    ],
  },
  en: {
    title: 'Unreal Engine',
    subtitle: 'Interaction & Motion Capture-Driven',
    subtitle2: 'Unreal Engine Simulation Production',
    cards: [
      {
        image: '/images/unreal_simulation.png',
        heading: 'Real-Time Interactive Simulation',
        body: 'Build 3D simulations that react in real time to user input and sensor data.',
      },
      {
        image: '/images/unreal_configurator.png',
        heading: 'High-Quality Configurators',
        body: 'Create high-quality configurators for architecture, industrial design, and product planning.',
      },
      {
        image: '/images/unreal_virtualhuman.jpg',
        heading: 'Virtual Humans & Real-Time XR',
        body: 'Produce real-time XR games and broadcast content powered by virtual humans.',
      },
    ],
  },
};

export const UnrealEnginePage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins bg-white">

      {/* Hero: full-bleed Unreal Engine scene, flush under the navbar */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden -mt-20 sm:-mt-24 md:-mt-28">
        <img
          src="/images/unreal_hero.jpg"
          alt="Unreal Engine"
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
