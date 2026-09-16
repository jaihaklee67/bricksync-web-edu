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
    valueCaption1: "아이들의 두뇌는 직접 설계한 코드에 따라 실물 로봇을 움직이고 공간을 변화시킬 때 아이들의 뇌는 폭발적으로 활성화됩니다.",
    valueCaption2: "현실 세계를 실물 센서가 정확히 인식하도록 값을 조정하고 변수와 오류를 해결하는 과정에서 아이들의 공학 사고력은 성장합니다.",
    valueCaption3: "단순 컴퓨팅 역량을 추구한 것이 아닌, Physical AI로 현실의 문제를 해결하려는 사고를 훈련하여 리더형 인재를 양성합니다.",
    personasTitle: "BrickSync 가 키워내는 인재",
    personas: [
      {
        heading: "상상력을 화면 밖으로 꺼낼 줄\n아는 AI 크리에이티브 인재",
        body: "정답을 찾으려는 것이 아니라, “내 생각을 어떻게 현실 속에 살아있게 만들 수 있을까?” 스스로 상상하고 구현하는 아이. 코드를 '문법'이 아닌 '창작 도구'로 배우는 사람입니다.",
        image: "/images/persona_creative.jpg",
      },
      {
        heading: "문제 앞에서도 포기하지 않고\n오류를 해결하는 공학 인재",
        body: "오작동과 오류의 문제를 직면해도 좌절 대신 “왜 이런 결과가 나왔지?” 되짚어 변수를 하나씩 조정해나가는 사람. 실패를 데이터로 바꿀 줄 아는 끈기와 논리력을 갖춘 아이입니다.",
        image: "/images/persona_engineer.jpg",
      },
      {
        heading: "현실과 가상을 넘나드는 사람\nPhy+gital 융합형 인재",
        body: "디지털 세계의 논리와 물리적 세계의 제약을 동시 이해하고, 유기적으로 연결할 줄 아는 사람. 인공지능 로봇처럼 현실과 가상이 결합된 미래산업에서 꿈을 펼칠 인재로 성장시킵니다.",
        image: "/images/persona_phygital.jpg",
      },
      {
        heading: "AI 기술로 세상을 바꾸려는\n리더쉽을 갖춘 미래형 인재",
        body: "컴퓨팅 역량이 뛰어난 사람에 머무르지 않고, AI로\n문제를 발견하고 AI로 해결법을 설계·실행할 줄 아는\n미래를 이끄는 'AI 이노베이터'를 만들겠습니다.",
        image: "/images/persona_leader.jpg",
      },
    ],
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
    personasTitle: "The Talent BrickSync Cultivates",
    personas: [
      {
        heading: "The AI Creative Talent\nWho Brings Imagination to Life",
        body: "Not searching for the ‘right answer,’ but a child who imagines and builds their own ideas by asking, “How can I make this real?” Someone who learns code as a creative tool, not a grammar to memorize.",
        image: "/images/persona_creative.jpg",
      },
      {
        heading: "The Engineering Mind\nThat Never Gives Up on a Bug",
        body: "When something malfunctions or breaks, instead of frustration, this child asks “Why did this happen?” and adjusts one variable at a time. A child with the persistence and logic to turn failure into data.",
        image: "/images/persona_engineer.jpg",
      },
      {
        heading: "The Person Who Moves Between\nReal and Virtual — a Phy+gital Talent",
        body: "Someone who understands both digital logic and the constraints of the physical world, and knows how to connect them organically — growing into a talent who, like an AI robot, can dream big in a future where reality and the virtual merge.",
        image: "/images/persona_phygital.jpg",
      },
      {
        heading: "The Future Leader Who Wants\nto Change the World with AI",
        body: "Not stopping at strong computing skills — we're raising ‘AI Innovators’ who discover real-world problems and design and execute AI-driven solutions to lead the future.",
        image: "/images/persona_leader.jpg",
      },
    ],
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
            <h2 className="text-black text-[clamp(0.85rem,4.5vw,3rem)] font-bold whitespace-nowrap break-keep">{t.valuesTitle}</h2>
          </div>

          <div className="grid grid-cols-3 gap-[clamp(8px,2vw,32px)]">
            <div className="flex flex-col items-center text-center gap-[clamp(6px,1.5vw,24px)]">
              <img src="/images/value_circle_hands_on.png" alt="Hands-on Learning" className="w-[clamp(72px,26vw,320px)] h-auto object-contain" />
              <p className="text-black font-semibold leading-snug sm:leading-relaxed text-balance break-keep text-[clamp(7px,1.65vw,26px)]">{t.valueCaption1}</p>
            </div>
            <div className="flex flex-col items-center text-center gap-[clamp(6px,1.5vw,24px)]">
              <img src="/images/value_circle_problem_solving.png" alt="Problem Solving" className="w-[clamp(72px,26vw,320px)] h-auto object-contain" />
              <p className="text-black font-semibold leading-snug sm:leading-relaxed text-balance break-keep text-[clamp(7px,1.65vw,26px)]">{t.valueCaption2}</p>
            </div>
            <div className="flex flex-col items-center text-center gap-[clamp(6px,1.5vw,24px)]">
              <img src="/images/value_circle_empowering.png" alt="Empowering Solutions" className="w-[clamp(72px,26vw,320px)] h-auto object-contain" />
              <p className="text-black font-semibold leading-snug sm:leading-relaxed text-balance break-keep text-[clamp(7px,1.65vw,26px)]">{t.valueCaption3}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Talent personas */}
      <div className="relative w-full overflow-hidden pb-20 sm:pb-24 px-6">
        <div className="relative z-10 max-w-[1500px] mx-auto flex flex-col gap-6 sm:gap-8">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <span className="w-1.5 h-8 sm:h-10 bg-lime-400 rounded-full flex-shrink-0" />
            <h2 className="text-black text-[clamp(0.85rem,4.5vw,3rem)] font-bold whitespace-nowrap break-keep">{t.personasTitle}</h2>
          </div>
          {t.personas.map((p, i) => (
            <div
              key={i}
              className="w-full rounded-2xl sm:rounded-3xl border-2 border-[#f0d68a] overflow-hidden grid grid-cols-1 md:grid-cols-2"
            >
              <div
                className={`relative w-full aspect-[900/492] ${i % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <img src={p.image} alt={p.heading.replace('\n', ' ')} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="relative flex flex-col items-center justify-center text-center gap-4 sm:gap-5 px-6 py-10 sm:px-10 sm:py-8 bg-gradient-to-br from-white to-sky-50">
                <h3 className="text-black font-extrabold leading-snug whitespace-pre-line break-keep text-[clamp(1rem,2.6vw,1.75rem)]">
                  {p.heading}
                </h3>
                <p className="text-black/80 leading-relaxed break-keep whitespace-pre-line text-[clamp(0.45rem,calc(3.44vw_-_3.2px),1.3rem)] md:text-[clamp(0.55rem,1.4vw,1.45rem)]">
                  {p.body}
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
