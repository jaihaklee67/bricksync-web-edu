import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

const COPY = {
  ko: {
    headline: "Physical AI 우리 아이의 경쟁력입니다.",
    body1: "BrickSync는 AX 대전환 시대(AX Era)를 살아갈 아이들에게\n현실과 가상을 유기적으로 연결(Sync)하는 차세대 AI 융합 교육을 제시합니다.",
    body2: "오늘날의 AI 및 코딩 교육은 지나치게 모니터 화면 안에 갇혀 있습니다.\n단순히 텍스트 코드를 입력하고 모니터 속 움직임을 관찰하는 수동적\n교육방식은 다가올 미래를 주도할 'AI 크리에이티브 인재'로 성장시키기 어렵습니다.",
    body3: "BrickSync의 Physical AI 교육은 기존의 단순 소프트웨어적 학습방식을 벗어나,\n물리적 하드웨어·센서를 통해 인공지능이 현실 세계를 직접 인식하고, 학습과 훈련을\n통해 스스로 판단하여 행동하는 입체적 알고리즘 설계를 가르칩니다.",
    body4: "자율주행, 휴머노이드 로봇, 스마트 팩토리 등 미래 글로벌 핵심 산업의 중심에는\nPhysical AI가 있습니다. 세상을 이끌어가는 'AI 이노베이터'로 성장할 아이들에게\n피지털(Physical + Digital) 역량 강화는 이제 선택이 아닌 필수입니다.",
    valuesTitle: "BrickSync 3대 핵심 학습 가치",
    valueCaption1: "아이들의 두뇌는 직접 설계한 코드에 따라\n실물 로봇을 움직이고 공간을 변화시킬 때\n아이들의 뇌는 폭발적으로 활성화됩니다.",
    valueCaption2: "현실 세계를 실물 센서가 정확히 인식하도록\n값을 조정하고 변수와 오류를 해결하는 과정\n에서 아이들의 공학 사고력은 성장합니다.",
    valueCaption3: "단순 컴퓨팅 역량을 추구한 것이 아닌,\nPhysical AI로 현실의 문제를 해결하려는\n사고를 훈련하여 리더형 인재를 양성합니다.",
  },
  en: {
    headline: "Physical AI Is Your Child's Competitive Edge.",
    body1: "For children who will live through the AX (AI Transformation) era,\nBrickSync offers next-generation AI-convergence education that organically connects the real and the virtual (Sync).",
    body2: "Today's AI and coding education is too often confined to the screen.\nA passive style of learning — typing text code and watching it move on a\nmonitor — struggles to grow the 'AI Creative Talent' who will lead the future.",
    body3: "BrickSync's Physical AI education moves beyond simple software-based learning.\nThrough physical hardware and sensors, it teaches AI to perceive the real world\ndirectly, and to design algorithms that learn, train, and act on their own judgment.",
    body4: "Physical AI sits at the center of tomorrow's key global industries — autonomous\ndriving, humanoid robots, smart factories. For children growing into the 'AI\nInnovators' who will lead the world, Phygital (Physical + Digital) skill is no longer optional.",
    valuesTitle: "BrickSync's 3 Core Learning Values",
    valueCaption1: "When children move real robots and transform physical space by running code they designed themselves, their brains light up with explosive activity.",
    valueCaption2: "As children adjust real sensor values so they accurately perceive the physical world, and work through variables and errors, their engineering mindset grows.",
    valueCaption3: "Rather than chasing raw computing skill alone, we train children to think through real-world problems with Physical AI — cultivating true leaders.",
  }
};

export const CompanyPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <div className="w-full min-h-full flex flex-col font-poppins select-none">

      {/* Intro video — native 32:9 aspect, no cropping */}
      <div className="relative w-full aspect-[32/9] overflow-hidden bg-[#0a2754]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/brand_story_hero_poster.jpg"
        >
          <source src="/images/brand_story_hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Philosophy + venn diagram */}
      <div className="relative w-full overflow-hidden pt-16 pb-16 sm:pt-20 sm:pb-20 px-6">
        <div className="relative z-10 max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-10 items-center">
          {lang === 'ko' ? (
            <img src="/images/brand_story_body.png" alt="BrickSync brand philosophy" className="w-full h-auto object-contain" />
          ) : (
            <div className="flex flex-col gap-5 sm:gap-6">
              <p className="text-black text-lg sm:text-xl leading-relaxed whitespace-pre-line">{t.body1}</p>
              <p className="text-black text-lg sm:text-xl leading-relaxed whitespace-pre-line">{t.body2}</p>
              <p className="text-black text-lg sm:text-xl leading-relaxed whitespace-pre-line">{t.body3}</p>
              <p className="text-black text-lg sm:text-xl leading-relaxed whitespace-pre-line">{t.body4}</p>
            </div>
          )}

          <div className="relative w-full max-w-[560px] mx-auto aspect-[4/3]">
            <img
              src="/images/brand_story_venn.png"
              alt="Hands-on Learning, Problem Solving, Empowering Solutions"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* 3 Core Learning Values */}
      <div className="relative w-full overflow-hidden pt-4 pb-20 sm:pb-24 px-6">
        <div className="relative z-10 max-w-[1500px] mx-auto">
          <div className="flex items-center gap-4 mb-12 sm:mb-16">
            <span className="w-1.5 h-8 sm:h-10 bg-lime-400 rounded-full flex-shrink-0" />
            <h2 className="text-black text-4xl sm:text-5xl font-bold">{t.valuesTitle}</h2>
          </div>

          <div className="grid grid-cols-3 gap-[clamp(8px,2vw,32px)]">
            <div className="flex flex-col items-center text-center gap-[clamp(6px,1.5vw,24px)]">
              <img src="/images/value_circle_hands_on.png" alt="Hands-on Learning" className="w-[clamp(72px,26vw,320px)] h-auto object-contain" />
              <p className="text-black font-semibold leading-snug sm:leading-relaxed whitespace-pre-line text-[clamp(10px,1.65vw,26px)]">{t.valueCaption1}</p>
            </div>
            <div className="flex flex-col items-center text-center gap-[clamp(6px,1.5vw,24px)]">
              <img src="/images/value_circle_problem_solving.png" alt="Problem Solving" className="w-[clamp(72px,26vw,320px)] h-auto object-contain" />
              <p className="text-black font-semibold leading-snug sm:leading-relaxed whitespace-pre-line text-[clamp(10px,1.65vw,26px)]">{t.valueCaption2}</p>
            </div>
            <div className="flex flex-col items-center text-center gap-[clamp(6px,1.5vw,24px)]">
              <img src="/images/value_circle_empowering.png" alt="Empowering Solutions" className="w-[clamp(72px,26vw,320px)] h-auto object-contain" />
              <p className="text-black font-semibold leading-snug sm:leading-relaxed whitespace-pre-line text-[clamp(10px,1.65vw,26px)]">{t.valueCaption3}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
