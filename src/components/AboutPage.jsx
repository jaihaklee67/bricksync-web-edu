import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

const COPY = {
  ko: {
    title: "BrickSync 앱",
    subtitle: "레고 스파이크 + 레고 포트나이트",
    body1: "브릭싱크는 레고 스파이크 하드웨어와 웹 기반 AI 제스처, 음성, 비전 인식기술을 결합하여 UEFN 기반의 포트나이트 맵 '더 브릭 아일랜드'와 실시간 상호작용을 가능하게 하는 혁신적인 Physics + Digital 컴퓨팅 및 AI 코딩 교육 플랫폼입니다.",
    body2: "학생들이 직관적인 아이콘 블록 코딩으로 만든 AI 알고리즘을 실행하면, 게임 내 레고 포트나이트 맵이 실시간 반응하고 즉각적인 코인 보상을 제공하여 컴퓨팅 사고력을 향상시키는 몰입형 학습 경험을 선사합니다.",
    websiteLabel: "www.bricksync.org",
    coreTitle: "브릭싱크 앱의 3가지 핵심 구성요소",
    coreSubtitle: "AI와 실시간 컴퓨팅을 통해 피지컬 놀이와 디지털 세상을 연결합니다",
    cores: [
      {
        num: "01",
        title: "실시간 피지컬-디지털 브릿지",
        bullets: [
          { bold: "1:1 실시간 매핑:", text: "LEGO SPIKE 센서와 모터를 UEFN 3D 월드에 오차 없이 그대로 연결합니다." },
          { bold: "제로 설치:", text: "크롬 브라우저의 Web Bluetooth 기능으로 별도 드라이버나 앱 설치 없이 바로 실행됩니다." },
        ],
      },
      {
        num: "02",
        title: "AI 멀티모달 & 안전한 학습",
        bullets: [
          { bold: "AI 인터랙션:", text: "브라우저 기반 비전(제스처, 사물 인식)과 음성 제어를 게이미피케이션 보상과 결합합니다." },
          { bold: "COPPA 준수:", text: "개인정보(PII) 없이 순수 물리 이벤트 데이터만 전송하여 아동의 프라이버시를 완전히 보호합니다." },
        ],
      },
      {
        num: "03",
        title: "글로벌 크리에이터 비전",
        bullets: [
          { bold: "UAI 전문성:", text: "에픽게임즈 공인 언리얼 강사진이 레고와 포트나이트를 통한 디지털 트윈 교육을 이끕니다." },
          { bold: "미래의 3D 크리에이터:", text: "전 세계 학생들이 직접 에셋을 제작하며 3D 크리에이터로 성장하도록 지원합니다." },
        ],
      },
    ],
    startGuideTitle: "브릭싱크 App 퀵스타트 가이드",
    startGuideSubtitle: "브릭싱크 앱을 빠르고 쉽게 시작하세요!",
    brickIslandTitle: "'더 브릭 아일랜드' 가상 공간 연결",
    brickIslandSubtitle: "브릭싱크를 포트나이트 맵에 연동하여 학습해보세요!",
  },
  en: {
    title: "What is Bricksync?",
    subtitle: "LEGO SPIKE + LEGO FORTNITE",
    body1: "BrickSync is an innovative phygital(Physics + Digital) computing & AI coding education platform combines LEGO SPIKE hardware with web-based AI recognition (gesture, voice, and vision) technologies to enable real-time interaction with the UEFN-based Fortnite map, \"The Brick Island.\"",
    body2: "When students execute algorithms created through intuitive icon-block coding, the in-game LEGO Fortnite map responds in real time and rewards them with immediate coins, delivering a next-generation immersive learning experience that enhances computational thinking.",
    websiteLabel: "www.bricksync.org",
    coreTitle: "BrickSync 3 Core Components",
    coreSubtitle: "Connecting Physical Play and Digital Worlds through AI & Real-Time Computing",
    cores: [
      {
        num: "01",
        title: "Real-time Phygital Bridge",
        bullets: [
          { bold: "1:1 Live Mapping:", text: "Connects LEGO SPIKE sensors and motors directly to UEFN 3D worlds." },
          { bold: "Zero Installation:", text: "Web Bluetooth via Chrome browser enables instant deployment without drivers or apps." },
        ],
      },
      {
        num: "02",
        title: "AI Multimodal & Safe Learning",
        bullets: [
          { bold: "AI Interaction:", text: "Integrates browser-based vision (gestures, objects) and voice control with gamified rewards." },
          { bold: "COPPA Compliant:", text: "Sends only physical event data without personal info (PII) for total child privacy." },
        ],
      },
      {
        num: "03",
        title: "Global Creator Vision",
        bullets: [
          { bold: "UAI Expertise:", text: "Led by Unreal Authorized Instructors to deliver digital twin education through LEGO and Fortnite." },
          { bold: "Future 3D Creators:", text: "Empowers global students to build assets and evolve into 3D creators." },
        ],
      },
    ],
    startGuideTitle: "BrickSync App Quick Start Guide",
    startGuideSubtitle: "Get started with the BrickSync app quickly and easily!",
    brickIslandTitle: "Connect to \"The Brick Island\" Virtual Space",
    brickIslandSubtitle: "Link BrickSync to the Fortnite map and start learning!",
  },
};

export const AboutPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">

      <div className="w-full flex flex-col items-center flex-1">
        {/* Full-width autoplay/loop banner video */}
        <div className="relative w-full -mt-20 sm:-mt-24 md:-mt-28">
          <video
            src="/images/about_hero_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover aspect-[32/9] select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </div>

        {/* Section 1: Overview (navy text panel + dashboard/photo showcase) */}
        {lang === 'ko' ? (
          <img
            src="/images/about_overview_ko.png"
            alt="BrickSync 앱 - 레고 스파이크 + 레고 포트나이트"
            className="w-full max-w-[1600px] h-auto object-contain flex-shrink-0 mt-16 sm:mt-24 mb-20 sm:mb-32 rounded-2xl"
          />
        ) : (
        <div className="w-full max-w-[1600px] md:aspect-video relative flex-shrink-0 mt-16 sm:mt-24 mb-20 sm:mb-32 flex flex-col md:flex-row overflow-hidden rounded-2xl">
          {/* Left: live-text overview panel */}
          <div
            className="w-full md:w-[46%] lg:w-[44%] md:h-full flex flex-col justify-center gap-[clamp(0.9rem,2.5vw,1.5rem)] md:gap-[clamp(0.6rem,1.6vw,1.5rem)] px-6 sm:px-10 md:px-[clamp(0.8rem,3vw,3.5rem)] py-8 sm:py-10 md:py-0 shrink-0"
            style={{ background: 'linear-gradient(115deg, #0e3568 0%, #1a4583 55%, #1c3f8c 100%)' }}
          >
            <div>
              <h2 className="text-white font-extrabold leading-tight break-keep text-[clamp(1.3rem,6vw,2.1rem)] md:text-[clamp(0.85rem,3.4vw,3rem)]">
                {t.title}
              </h2>
              <p className="text-[#F5C842] font-medium leading-snug break-keep text-[clamp(0.85rem,3vw,1.15rem)] md:text-[clamp(0.55rem,1.9vw,1.5rem)] mt-1.5 md:mt-[clamp(0.2rem,0.8vw,0.5rem)]">
                {t.subtitle}
              </p>
            </div>

            <p className="text-white/90 leading-relaxed text-balance break-keep text-[clamp(0.8rem,2.4vw,1rem)] md:text-[clamp(0.42rem,1.15vw,1rem)]">
              {t.body1}
            </p>
            <p className="text-white/90 leading-relaxed text-balance break-keep text-[clamp(0.8rem,2.4vw,1rem)] md:text-[clamp(0.42rem,1.15vw,1rem)]">
              {t.body2}
            </p>

            <a
              href="https://www.bricksync.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 md:gap-[clamp(0.3rem,0.9vw,0.6rem)] w-fit bg-white rounded-full pl-1.5 md:pl-[clamp(0.25rem,0.8vw,0.5rem)] pr-4 md:pr-[clamp(0.6rem,1.8vw,1.25rem)] py-1.5 md:py-[clamp(0.25rem,0.8vw,0.5rem)] hover:opacity-80 transition-opacity"
            >
              <span
                className="flex items-center justify-center rounded-full bg-[#1a4583] text-white shrink-0"
                style={{ width: 'clamp(1.3rem, 5.5vw, 1.75rem)', height: 'clamp(1.3rem, 5.5vw, 1.75rem)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[62%] h-[62%]">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9s1.3-6.5 3.8-9z" />
                </svg>
              </span>
              <span className="text-[#1a4583] font-semibold text-[clamp(0.8rem,2.6vw,0.95rem)] md:text-[clamp(0.4rem,1.3vw,1.05rem)] whitespace-nowrap">
                {t.websiteLabel}
              </span>
            </a>
          </div>

          {/* Right: product dashboard & classroom photo showcase (kept as image, UI/photo content) */}
          <div className="w-full md:flex-1 md:h-full flex items-center justify-center bg-black p-3 md:p-[clamp(0.3rem,1vw,1rem)]">
            <img
              src="/images/about_dashboard.png"
              alt="BrickSync Web Dashboard, The Brick Island Fortnite Map, and in-class learning photos"
              className="max-w-full md:max-h-full w-auto h-auto object-contain select-none pointer-events-none"
            />
          </div>
        </div>
        )}

        {/* Section 2 + 3 (KO): continuous white background from the Core Components title through the intro video */}
        {lang === 'ko' && (
          <div className="w-full bg-white flex flex-col items-center">
            <div className="w-full flex flex-col items-center pt-10 sm:pt-14 pb-8 sm:pb-10 px-4 sm:px-8">
              <h2 className="text-[#21140A] font-extrabold leading-tight break-keep text-center text-[clamp(1.1rem,4.04vw,4.04rem)] mb-2 sm:mb-3">
                {t.coreTitle}
              </h2>
              <p className="text-[#21140A]/80 whitespace-nowrap text-center text-[clamp(0.5rem,2.02vw,2rem)]">
                {t.coreSubtitle}
              </p>
            </div>

            <div className="w-full max-w-[1440px] flex flex-col items-center pb-12 sm:pb-16 px-4 sm:px-8">
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                {['/images/about_core_1.png', '/images/about_core_2.png', '/images/about_core_3.png'].map((src) => (
                  <img key={src} src={src} alt="" className="w-full h-auto object-contain" />
                ))}
              </div>
            </div>

            {/* Quick Start Guide banner + video */}
            <img
              src="/images/about_startguide_banner.png"
              alt="브릭싱크 App 퀵스타트 가이드 - 브릭싱크 앱을 빠르고 쉽게 시작하세요!"
              className="w-full max-w-[1600px] h-auto object-cover"
            />
            <div className="w-full max-w-[1440px] flex flex-col items-center pt-10 sm:pt-14 pb-20 sm:pb-24 px-4 sm:px-8">
              <div className="w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black/60 relative shadow-none">
                <video
                  src="/images/about_startguide_video.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* The Brick Island banner + video */}
            <img
              src="/images/about_brickisland_banner.png"
              alt="'더 브릭 아일랜드' 가상 공간 연결 - 브릭싱크를 포트나이트 맵에 연동하여 학습해보세요!"
              className="w-full max-w-[1600px] h-auto object-cover"
            />
            <div className="w-full max-w-[1440px] flex flex-col items-center pt-10 sm:pt-14 pb-20 sm:pb-24 px-4 sm:px-8">
              <div className="w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black/60 relative shadow-none">
                <video
                  src="/images/about_brickisland_video.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Section 2 + 3 (EN): unchanged dark/blue treatment */}
        {lang === 'en' && (
          <>
            <div className="w-full max-w-[1440px] flex flex-col items-center pt-10 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-8">
              <h2 className="text-white font-extrabold leading-tight break-keep text-center text-[clamp(1.1rem,3.6vw,2.75rem)] mb-2 sm:mb-3">
                {t.coreTitle}
              </h2>
              <p className="text-white/80 text-balance break-keep text-center max-w-2xl text-[clamp(0.7rem,1.5vw,1.1rem)] mb-8 sm:mb-12">
                {t.coreSubtitle}
              </p>

              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {t.cores.map((c) => (
                  <div
                    key={c.num}
                    className="rounded-3xl p-6 sm:p-7 flex flex-col text-left"
                    style={{ background: 'linear-gradient(135deg, #7FCBEA 0%, #1E8FD5 55%, #0068BD 100%)' }}
                  >
                    <span className="text-white font-black leading-none text-[clamp(2.2rem,4.5vw,3.25rem)] mb-3 sm:mb-4">
                      {c.num}
                    </span>
                    <h3 className="text-white font-bold leading-snug break-keep text-[clamp(1rem,1.7vw,1.3rem)] mb-3 sm:mb-4">
                      {c.title}
                    </h3>
                    <ul className="flex flex-col gap-2 sm:gap-3">
                      {c.bullets.map((b, i) => (
                        <li key={i} className="text-white/95 leading-relaxed text-balance break-keep text-[clamp(0.75rem,1.25vw,0.95rem)] flex gap-2">
                          <span className="shrink-0">•</span>
                          <span><span className="font-bold">{b.bold}</span> {b.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Start Guide banner + video */}
            <div
              className="w-full flex flex-col items-center text-center py-10 sm:py-14 px-4 sm:px-8"
              style={{ background: 'linear-gradient(100deg, #22c9c2 0%, #7c5cf0 30%, #a855c9 50%, #f0924a 70%, #f7d154 100%)' }}
            >
              <h2 className="text-white font-extrabold leading-tight break-keep text-[clamp(1.1rem,3.6vw,2.75rem)] mb-2 sm:mb-3">
                {t.startGuideTitle}
              </h2>
              <p className="text-[#3a1a6b] font-semibold text-balance break-keep text-[clamp(0.7rem,1.5vw,1.1rem)]">
                {t.startGuideSubtitle}
              </p>
            </div>
            <div className="w-full max-w-[1440px] flex flex-col items-center pt-10 sm:pt-14 pb-20 sm:pb-24 px-4 sm:px-8">
              <div className="w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black/60 relative shadow-none">
                <video
                  src="/images/about_startguide_video.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* The Brick Island banner + video */}
            <div
              className="w-full flex flex-col items-center text-center py-10 sm:py-14 px-4 sm:px-8"
              style={{ background: 'linear-gradient(100deg, #d92b2b 0%, #8fc31f 30%, #2fa84f 50%, #1f7fd1 70%, #2a3fa0 100%)' }}
            >
              <h2 className="text-white font-extrabold leading-tight break-keep text-[clamp(1.1rem,3.6vw,2.75rem)] mb-2 sm:mb-3">
                {t.brickIslandTitle}
              </h2>
              <p className="text-[#fff3b0] font-semibold text-balance break-keep text-[clamp(0.7rem,1.5vw,1.1rem)]">
                {t.brickIslandSubtitle}
              </p>
            </div>
            <div className="w-full max-w-[1440px] flex flex-col items-center pt-10 sm:pt-14 pb-20 sm:pb-24 px-4 sm:px-8">
              <div className="w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black/60 relative shadow-none">
                <video
                  src="/images/about_brickisland_video.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
