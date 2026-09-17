import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

const COPY = {
  ko: {
    title: 'UEFN & Verse',
    subtitle: 'AI 활용 UEFN 3D 콘텐츠 개발',
    subtitle2: '(게임, 3D 애니메이션)',
    cards: [
      {
        image: '/images/uefn_verse_hero.webp',
        heading: 'AI × UEFN 3D 콘텐츠 개발',
        body: 'AI 기술과 에픽게임즈 UEFN을 결합한 3D 콘텐츠 제작 교육.',
      },
      {
        image: '/images/uefn_verse_mcp.png',
        heading: 'MCP 기반 기획 학습',
        body: 'MCP를 활용한 게임 에셋, 텍스처, NPC 인터랙션 기획법 학습.',
      },
      {
        image: '/images/uefn_verse_code.png',
        heading: 'Verse 코딩 & 멀티플레이',
        body: 'Verse 코딩으로 고급 게임 규칙 설계 및 멀티플레이 시스템 구축.',
      },
    ],
  },
  en: {
    title: 'UEFN & Verse',
    subtitle: 'AI-Powered UEFN 3D Content Development',
    subtitle2: '(Games, 3D Animation)',
    cards: [
      {
        image: '/images/uefn_verse_hero.webp',
        heading: 'AI × UEFN 3D Content',
        body: '3D content creation training that combines AI technology with Epic Games\' UEFN.',
      },
      {
        image: '/images/uefn_verse_mcp.png',
        heading: 'MCP-Based Planning',
        body: 'Learn to plan game assets, textures, and NPC interactions using MCP.',
      },
      {
        image: '/images/uefn_verse_code.png',
        heading: 'Verse Coding & Multiplayer',
        body: 'Design advanced game rules and build multiplayer systems with Verse coding.',
      },
    ],
  },
};

export const UefnVersePage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins bg-white">

      {/* Hero: full-bleed UEFN scene, flush under the navbar */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden -mt-20 sm:-mt-24 md:-mt-28">
        <img
          src="/images/uefn_verse_hero2.png"
          alt="UEFN & Verse"
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
