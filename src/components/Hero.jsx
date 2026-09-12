import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Image as ImageIcon, Check } from 'lucide-react';
import { Footer } from './Footer';

const COPY = {
  ko: {
    title: "Make it Physical. Play it Digital.",
    tagline: "AI 코딩으로 레고 에듀케이션 브릭과 포트나이트 메타버스 세계의 완벽한 연결",
    description: "세계 최초 리얼타임 Physical AI 교육, 지금 브릭싱크에서 시작해보세요!",
    journeyTitle: "연령별 브릭싱크 학습 로드맵",
    journeyTitlePre: "연령별 브릭싱크 ",
    journeyTitleHighlight: "학습 로드맵",
    journeyTitlePost: "",
    journeySubtitle: "5세부터 16+까지, 하나로 이어지는 BrickSync 성장 로드맵",
    campTitle: "레고 포트나이트 캠프 & 방과후 클래스",
    campSubtitle: "유아와 초등생들을 위한 단기 레고 포트나이트 코스. 개별 교육 리포트 및 공식 수료증 발급",
    campBannerTitle: "방학에도, 방과후에도 함께 모이자!\n레고 포트나이트 캠프에서!",
    campBannerDesc: "놀이·챌린지 기반 집중 캠프 — 매일 새로운 스토리로 조립하고 블록 코딩합니다",
    campCta: "캠프 자세히 보기"
  },
  en: {
    title: "Make it Physical. Play it Digital.",
    tagline: "A perfect connection between LEGO Education bricks and the Fortnite metaverse, through AI coding",
    description: "The world's first real-time Physical AI education — start now, at BrickSync!",
    journeyTitle: "BrickSync Learning Roadmap by Age",
    journeyTitlePre: "BrickSync ",
    journeyTitleHighlight: "Learning Roadmap",
    journeyTitlePost: " by Age",
    journeySubtitle: "One continuous BrickSync growth roadmap, from age 5 to 16+",
    campTitle: "LEGO Fortnite Camp & After-School Classes",
    campSubtitle: "A short-term LEGO Fortnite course for young children and elementary students. Individual progress reports and an official certificate of completion.",
    campBannerTitle: "Join us — school break or after school!\nAt the LEGO Fortnite Camp!",
    campBannerDesc: "An intensive, play- and challenge-based camp — a new story to build and code every day",
    campCta: "See the full camp"
  }
};

const CAMP_DAYS = {
  ko: [
    { day: "Day 3", theme: "캠프파이어 인디언 파티", media: "3일차 — 캠프파이어 조립 사진", image: "/images/camp_day3_building.jpg" },
    { day: "Day 2", theme: "사파리 어드벤처", media: "2일차 — 사파리 텐트를 조립하는 사진", image: "/images/camp_day2_fortnite.jpg" },
    { day: "Day 1", theme: "야생 동물과 친구 되기", media: "1일차 — 동물 캐릭터를 조립하는 아이 사진", image: "/images/camp_day1_coding.jpg" },
    { day: "Day 4", theme: "놀이공원", media: "4일차 — 놀이공원 그네를 조립하는 사진", image: "/images/camp_day4_blockcoding.jpg" }
  ],
  en: [
    { day: "Day 3", theme: "Campfire Party", media: "Day 3 — building a campfire", image: "/images/camp_day3_building.jpg" },
    { day: "Day 2", theme: "Safari Adventure", media: "Day 2 — assembling a safari tent", image: "/images/camp_day2_fortnite.jpg" },
    { day: "Day 1", theme: "Making friends with wild animals", media: "Day 1 — a child assembling an animal character", image: "/images/camp_day1_coding.jpg" },
    { day: "Day 4", theme: "Amusement Park", media: "Day 4 — building an amusement park swing", image: "/images/camp_day4_blockcoding.jpg" }
  ]
};

const STAGES = {
  ko: [
    {
      age: "5–7세",
      name: "스파크 (Spark)",
      tagline: "글을 몰라도 OK! 아이콘 블록으로 시작하는 컴퓨팅 사고력",
      bullets: [
        "글자 대신 직관적인 블록 코딩으로 배우는 기초 컴퓨팅 사고(CT)",
        "재미있는 스토리텔링 기반의 피지컬 블록 조립",
        "내가 만든 실물 블록과 3D 에셋이 상호작용하는 신기한 경험"
      ],
      bg: "#F1FE61", text: "black", media: "5–7세 아이가 SPIKE Essential로 조립하는 사진", image: "/images/stage_spark_5_7.jpg"
    },
    {
      age: "8–11세",
      name: "크리에이터 (Creator)",
      tagline: "AI 인터랙션 체험부터 UEFN 크리에이터 데뷔까지",
      bullets: [
        "음성·제스처 인식 기술을 활용한 피지컬 AI 인터랙션 기초 학습",
        "데이터 기반의 논리적 사고력과 프롬프트 활용법 습득",
        "UEFN(3D물리엔진)과 텍스트 블럭 코딩으로 나만의 3D 월드 제작"
      ],
      bg: "#029DF7", text: "white", media: "8–11세 아이가 UEFN 크리에이티브 툴을 쓰는 사진", image: "/images/stage_creator_8_11.jpg"
    },
    {
      age: "12–14세",
      name: "이노베이터 (Innovator)",
      tagline: "센서와 AI로 가상 세상과 진짜 로봇을 연결하는 고급 코딩",
      bullets: [
        "스마트 센서로 주변 정보를 수집해 가상 3D 공간에 똑같이 옮기는 디지털 트윈 기초",
        "로봇이 스스로 생각하고 판단하는 AI 행동 알고리즘(상-행동-보상) 원리 체득",
        "Verse 전문 코딩으로 나만의 게임 규칙을 만들고 로봇 제어 시스템 완성"
      ],
      bg: "#DE61FE", text: "white", media: "12–14세 학생이 Verse 코드를 작성하는 사진"
    },
    {
      age: "16세+",
      name: "마스터 (Master)",
      tagline: "컴퓨터 속에서 훈련시킨 AI를 실제 로봇에 넣어 작동시키는 실전 AI 코스",
      bullets: [
        "Python 시뮬레이터 가상 공간에서 AI가 스스로 학습하는 강화학습 실습",
        "학습된 AI 모델을 실제 로봇에 시스템으로 적용하기",
        "3D 게임 크리에이터를 넘어 실제 AI 로봇을 다루는 핵심 인재로 성장"
      ],
      bg: "#000000", text: "white", media: "16세 이상 학생이 로봇에 모델을 이식하는 사진"
    }
  ],
  en: [
    {
      age: "Age 5–7",
      name: "Spark",
      tagline: "No reading required — computational thinking starts with icon blocks",
      bullets: [
        "Foundational computational thinking (CT) through intuitive block coding instead of text",
        "Physical block assembly built around fun storytelling",
        "The wonder of watching a real brick you built interact with a 3D asset"
      ],
      bg: "#F1FE61", text: "black", media: "Photo of a 5–7 year old building with SPIKE Essential", image: "/images/stage_spark_5_7.jpg"
    },
    {
      age: "Age 8–11",
      name: "Creator",
      tagline: "From hands-on AI interaction to your debut as a UEFN creator",
      bullets: [
        "Foundations of physical AI interaction using voice and gesture recognition",
        "Data-driven logical thinking and prompt-writing skills",
        "Build your own 3D world in UEFN with text-based block coding"
      ],
      bg: "#029DF7", text: "white", media: "Photo of an 8–11 year old using UEFN creative tools", image: "/images/stage_creator_8_11.jpg"
    },
    {
      age: "Age 12–14",
      name: "Innovator",
      tagline: "Advanced coding that links sensors and AI to bridge the virtual world and a real robot",
      bullets: [
        "Digital twin basics — collecting real-world data with smart sensors and mirroring it in 3D",
        "Understanding the state-action-reward loop behind an AI robot's decision-making",
        "Write real Verse code to build your own game rules and complete a robot control system"
      ],
      bg: "#DE61FE", text: "white", media: "Photo of a 12–14 year old writing Verse code"
    },
    {
      age: "Age 16+",
      name: "Master",
      tagline: "A hands-on AI course that trains a model in software and deploys it to a real robot",
      bullets: [
        "Reinforcement learning practice — AI trains itself inside a Python simulator",
        "Deploying a trained AI model as a working system on a real robot",
        "Growing beyond a 3D game creator into a core talent who builds real AI robots"
      ],
      bg: "#000000", text: "white", media: "Photo of a 16+ student deploying a model to a robot"
    }
  ]
};

export const Hero = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];
  const stages = STAGES[lang];
  const campDays = CAMP_DAYS[lang];

  return (
    <div className="w-full min-h-full flex flex-col select-none font-poppins">
      {/* Full-bleed video hero */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#0a2754]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero_video_poster.jpg"
        >
          <source src="/images/hero_bg.mp4" type="video/mp4" />
        </video>

        {/* Scrim for text legibility over the footage */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/55 pointer-events-none" />

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-[clamp(2rem,4.7vw,6rem)] font-extrabold text-white tracking-tight leading-tight md:leading-none whitespace-normal md:whitespace-nowrap drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]">
            {t.title}
          </h1>
          <p className="mt-8 text-white text-xl sm:text-2xl md:text-3xl font-bold max-w-5xl leading-snug drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
            {t.tagline}
          </p>
          <p className="mt-3 text-white text-xl sm:text-2xl md:text-3xl font-bold max-w-5xl leading-snug drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
            {t.description}
          </p>
        </div>
      </div>

      {/* White content section below the video, KiwiCo-style */}
      <div className="w-full bg-white flex-1 flex flex-col items-center">

        {/* Colorful title banner with hand-drawn decorations */}
        <div className="relative w-full overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-32" style={{ backgroundColor: '#029DF7' }}>
          {/* dotted texture */}
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '22px 22px' }}
          />

          {/* decorative doodles */}
          <svg className="absolute top-8 left-[6%] sm:left-[10%] w-9 h-9 sm:w-14 sm:h-14 text-white/80 -rotate-6 pointer-events-none" viewBox="0 0 40 40" fill="none">
            <path d="M20 2 L22 15 L35 17 L22 19 L20 32 L18 19 L5 17 L18 15 Z" fill="currentColor" />
          </svg>
          <svg className="absolute top-10 right-[8%] sm:right-[12%] w-8 h-8 sm:w-12 sm:h-12 text-[#F1FE61] rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.45 1.1 1.15 1.1 1.95V16h5v-.25c0-.8.5-1.5 1.1-1.95A6 6 0 0 0 12 3Z" />
          </svg>
          <span className="absolute top-1/2 left-[4%] w-3 h-3 rounded-full bg-[#DE61FE] pointer-events-none" />
          <span className="absolute bottom-12 right-[6%] w-4 h-4 rounded-full bg-[#F1FE61] pointer-events-none" />
          <span className="absolute top-6 right-[30%] w-2.5 h-2.5 rounded-full bg-white/80 pointer-events-none" />

          <div className="relative z-10 max-w-[900px] mx-auto px-6 flex flex-col items-center text-center">
            <h2 className="text-[32px] sm:text-[52px] leading-tight font-extrabold text-white mb-3">
              {t.journeyTitlePre}
              <span className="relative inline-block mx-1">
                {t.journeyTitleHighlight}
                <svg className="absolute left-0 -bottom-2 w-full h-3" viewBox="0 0 200 14" preserveAspectRatio="none" fill="none">
                  <path d="M2 9 Q 30 2, 60 8 T 120 7 T 198 9" stroke="#F1FE61" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
              {t.journeyTitlePost}
            </h2>
            <p className="text-base sm:text-2xl font-semibold text-white/90 leading-snug">{t.journeySubtitle}</p>
          </div>

          {/* bottom wave transition into white */}
          <svg className="absolute bottom-0 left-0 w-full h-10 sm:h-14 pointer-events-none" viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>

        <div
          className="w-full flex flex-col items-center px-6 pt-10 sm:pt-14 pb-14 sm:pb-20"
          style={{
            backgroundColor: '#ffffff',
            backgroundImage:
              'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        >

        {/* Age-based learning journey cards */}
        <div className="w-full max-w-[1100px] flex flex-col items-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {stages.map((s) => (
              <button
                key={s.age}
                onClick={() => setCurrentView && setCurrentView('vision')}
                className="relative w-full rounded-3xl overflow-hidden text-left cursor-pointer outline-none group flex flex-col"
                style={{ backgroundColor: s.bg }}
              >
                {/* Photo strip */}
                <div className={`relative w-full aspect-[21/9] flex-shrink-0 ${s.image ? '' : 'flex flex-col items-center justify-center gap-1.5 border-b-2 border-dashed border-black/10 bg-black/5 px-4 text-center'}`}>
                  {s.image ? (
                    <img src={s.image} alt={`${s.age} - ${s.name}`} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <>
                      <ImageIcon className={`w-5 h-5 ${s.text === 'white' ? 'text-white/60' : 'text-black/40'}`} />
                      <span className={`text-[11px] sm:text-xs leading-snug ${s.text === 'white' ? 'text-white/70' : 'text-black/50'}`}>
                        {s.media}
                      </span>
                    </>
                  )}
                </div>

                {/* Text content */}
                <div className="relative z-10 flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-fit text-xs font-bold px-3 py-1 rounded-full ${
                        s.text === 'white' ? 'bg-white/20 text-white' : 'bg-black/10 text-black'
                      }`}
                    >
                      {s.age}
                    </span>
                  </div>
                  <span className={`text-lg sm:text-xl font-extrabold leading-snug ${s.text === 'white' ? 'text-white' : 'text-black'}`}>
                    {s.name}
                  </span>
                  <span className={`text-sm sm:text-base font-semibold leading-relaxed ${s.text === 'white' ? 'text-white/90' : 'text-black/80'}`}>
                    {s.tagline}
                  </span>
                  <ul className="flex flex-col gap-2 mt-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${s.text === 'white' ? 'text-white/70' : 'text-black/60'}`} />
                        <span className={`text-xs sm:text-sm leading-relaxed ${s.text === 'white' ? 'text-white/80' : 'text-black/70'}`}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Short-Term LEGO Fortnite Camp */}
        <div className="w-full max-w-[1100px] flex flex-col items-center mt-16 sm:mt-24">
          <h2 className="text-[48px] sm:text-[60px] leading-tight font-extrabold text-black mb-2 text-center">{t.campTitle}</h2>
          <p className="text-[clamp(0.95rem,1.9vw,2rem)] leading-snug text-black/60 mb-10 sm:mb-14 text-center whitespace-normal lg:whitespace-nowrap">{t.campSubtitle}</p>

          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-x-1.5 gap-y-8 sm:gap-y-10">
            {/* Banner card: text/CTA at top, photo fills the rest — square on mobile, stretches to match the two stacked cards on desktop */}
            <button
              onClick={() => setCurrentView && setCurrentView('education')}
              className="relative w-full aspect-square lg:aspect-auto lg:col-span-2 lg:row-span-2 overflow-hidden text-left cursor-pointer outline-none flex flex-col"
              style={{ backgroundColor: '#029DF7' }}
            >
              <div className="relative z-10 p-6 pb-4 flex-shrink-0">
                <span className="text-lg sm:text-2xl font-extrabold text-white leading-snug block mb-4 whitespace-pre-line drop-shadow-[0_1px_6px_rgba(0,0,0,0.25)]">
                  {t.campBannerTitle}
                </span>
                <span className="block w-fit ml-auto px-5 py-2.5 rounded-full bg-white text-[#029DF7] font-bold text-sm">
                  {t.campCta} →
                </span>
              </div>

              {/* Photo fills remaining space */}
              <div className="relative flex-1 overflow-hidden">
                <img
                  src="/images/camp_certificate_ceremony.jpg"
                  alt="BrickSync camp graduation — students holding their certificates of completion"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </button>

            {/* 4 small cards: label overlaid on the photo, KiwiCo-style, square corners, thin gaps */}
            {campDays.map((d, i) => {
              const tapeColors = ['#F1FE61', '#DE61FE', '#029DF7'];
              const tapeColor = tapeColors[i % tapeColors.length];
              const tapeText = tapeColor === '#F1FE61' ? '#000' : '#fff';
              const tapeDeg = i % 2 === 0 ? -4 : 4;
              return (
                <div key={d.day} className="relative aspect-square">
                  {/* Clipped inner box: photo / placeholder only */}
                  <div
                    className={`relative overflow-hidden w-full h-full flex flex-col ${
                      d.image ? '' : 'items-center justify-center gap-1.5 border-2 border-dashed border-black/10 bg-black/5 px-4 text-center'
                    }`}
                  >
                    {d.image && (
                      <img
                        src={d.image}
                        alt={`${d.day} - ${d.theme}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    {!d.image && (
                      <div className="absolute top-3 left-3 right-3 text-left">
                        <span className="inline-block text-xs sm:text-sm font-bold leading-snug text-black">
                          {d.day} · {d.theme}
                        </span>
                      </div>
                    )}
                    {!d.image && (
                      <span className="text-[11px] sm:text-xs text-black/50 leading-snug">{d.media}</span>
                    )}
                  </div>

                  {/* Tape label: sits outside the clipped box so it can straddle the top edge */}
                  {d.image && (
                    <div
                      className="absolute top-0 left-1/2 z-10"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${tapeDeg}deg)`,
                        filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))',
                      }}
                    >
                      <div
                        className="relative px-5 py-2"
                        style={{
                          backgroundColor: tapeColor,
                          opacity: 0.93,
                          clipPath:
                            'polygon(0% 0%, 8% 12%, 2% 26%, 9% 40%, 3% 54%, 8% 68%, 2% 84%, 0% 100%, 100% 100%, 92% 88%, 98% 74%, 91% 60%, 97% 46%, 92% 32%, 98% 16%, 100% 0%)',
                        }}
                      >
                        <span
                          className="relative z-10 text-xs sm:text-sm font-bold leading-snug whitespace-nowrap"
                          style={{ color: tapeText }}
                        >
                          {d.day} · {d.theme}
                        </span>
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              'linear-gradient(115deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.25) 100%)',
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
