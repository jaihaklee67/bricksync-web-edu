import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

const COPY = {
  ko: {
    eyebrow: "Global Standard Physical AI Education",
    title: "Physical AI 기술력과 공신력을 지닌\nBrickSync 교육",
    body: "브릭싱크는 세계 최고 수준의 AI기반 3D 엔진 기술력을 가진 에픽게임즈(Epic Games)의 공인 인프라와 첨단 기술, 그리고 검증된 자체 교재 라인업을 결합하여 가장 안전하고 확실한 차세대 융합 교육 프로그램을 제공합니다.",
    badgesTitle: "에픽게임즈 공식 인증 교육 환경",
    badges: [
      { image: "/images/vision_badge_uai.png", title: "Epic Games 공인강사 (UAI)\n레고 포트나이트 교육 직강", desc: "에픽게임즈의 심사를 통해 검증된 공인 강사들이 직접 교육 과정 및 커리큘럼을 설계, 지도" },
      { image: "/images/vision_badge_lego.png", title: "LEGO Fortnite 공식 검증\n커리큘럼 & 교구", desc: "LEGO®와 Fortnite®의 공식 가이드라인을 준수하여 개발한 교육용 웹앱 BrickSync 및 UEFN 에디터 제공" },
      { image: "/images/vision_badge_certificate.png", title: "레고 포트나이트 코스\n공식 수료증 발급", desc: "교육 수료생에게는 에픽게임즈 포트나이트 공식 로고가 명시된 수료증(Certificate)이 발급" },
    ],
    aiSectionTitle: "AI 전문 연구진 기반의 교육 솔루션 설계",
    aiSectionBody: "AI·SW 공학 전문 연구진이 교구 및 알고리즘 개발에 참여하여, 단순 체험을 넘어선 수준 높은 AI 학습 구조를 구축했습니다.",
    aiLeft: {
      captionImage: "/images/vision_ai_caption_left.png",
      captionWidthPct: 77.9,
      captionTitle: "웹 기반 실시간 AI 인식 기술\n(Web Bluetooth & Vision AI)",
      graphic: "/images/vision_ai_letter_left.png",
    },
    aiRight: {
      captionImage: "/images/vision_ai_caption_right.png",
      captionWidthPct: 61.5,
      captionTitle: "체계적인 AI 리터러시\n& 컴퓨팅 사고력(CT) 체득",
      graphic: "/images/vision_ai_letter_right.png",
    },
    booksTitle: "자체 개발 정식 출판 교재 라인업",
    booksBody: "LEGO Fortnite 유아 블록 코딩부터 전문 UEFN Verse 언어 활용 Physical AI 콘텐츠 개발까지, 연령에 따른 성장 단계별 난이도에 맞춰진 체계적 학습 교재들은 브릭싱크 교육을 더욱 탄탄하게 해줍니다.",
    books: [
      {
        level: "1",
        image: "/images/vision_book_1.png",
        pillColor: "#E2CDF7",
        levelColor: "#8C52FF",
        title: "LEGO® 와 Fortnite로 만드는 코딩 세상",
        desc: "레고브릭을 이용한 스토리텔링과 블럭코딩 기반 메타버스 인터랙션을 결합하여 유아 및 초등 저학년의 흥미를 이끄는 기초 단계 워크북.",
      },
      {
        level: "2",
        image: "/images/vision_book_2.png",
        pillColor: "#C8EEFF",
        levelColor: "#0371C2",
        title: "LEGO® 와 UEFN으로 만드는 코딩 세상",
        desc: "복잡한 모터 및 센서 장치들이 활용되는 실물 브릭을 작동하기 위한 텍스트 코딩과 기초 Verse 학습으로 UEFN 가상 공간과 연동하는 본격적 Physical AI 기초 코딩 학습서.",
      },
      {
        level: "3",
        image: "/images/vision_book_3.png",
        pillColor: "#F1FE61",
        levelColor: "#343E43",
        title: "UEFN 실전가이드 book",
        desc: "Verse 언어 기초부터 UEFN 에디터 사용의 깊이 있는 것까지, 포트나이트 맵 퍼블리싱에 도전하기 위한 프로페셔널 포트나이트 크리에이터 실전 지침서.",
      },
    ],
  },
  en: {
    eyebrow: "Global Standard Physical AI Education",
    title: "BrickSync Education, Backed by\nPhysical AI Technology and Credibility",
    body: "BrickSync combines Epic Games' officially authorized infrastructure and advanced technology — built on the world's leading AI-driven 3D engine — with a proven, self-developed curriculum lineup to deliver the safest, most reliable next-generation convergence education program.",
    badgesTitle: "Officially Epic Games–Certified Education Environment",
    badges: [
      { image: "/images/vision_badge_uai.png", title: "Epic Games Authorized Instructor (UAI)\nLive LEGO Fortnite Instruction", desc: "Instructors verified through Epic Games' rigorous review personally design and lead the curriculum and course." },
      { image: "/images/vision_badge_lego.png", title: "Officially Verified LEGO Fortnite\nCurriculum & Courseware", desc: "The BrickSync web app and UEFN editor were built to LEGO®'s and Fortnite®'s official guidelines." },
      { image: "/images/vision_badge_certificate.png", title: "Official Certificate Upon\nCompleting the LEGO Fortnite Course", desc: "Graduates receive a certificate bearing the official Epic Games Fortnite logo." },
    ],
    aiSectionTitle: "Education Solutions Designed by\nExpert AI Research Engineers",
    aiSectionBody: "Our AI/SW engineering research team takes part directly in developing the courseware and algorithms, building a sophisticated AI learning structure that goes beyond simple hands-on experience.",
    aiLeft: {
      captionImage: "/images/vision_ai_caption_left.png",
      captionWidthPct: 77.9,
      captionTitle: "Real-Time Web-Based AI Recognition\n(Web Bluetooth & Vision AI)",
      graphic: "/images/vision_ai_letter_left.png",
    },
    aiRight: {
      captionImage: "/images/vision_ai_caption_right.png",
      captionWidthPct: 61.5,
      captionTitle: "Systematic AI Literacy &\nComputational Thinking (CT)",
      graphic: "/images/vision_ai_letter_right.png",
    },
    booksTitle: "Officially Published, Self-Developed Curriculum",
    booksBody: "From early-childhood LEGO Fortnite block coding to advanced UEFN Verse–powered Physical AI content development, our systematic textbooks — matched to each growth stage — make BrickSync education even stronger.",
    books: [
      {
        level: "1",
        image: "/images/vision_book_1.png",
        pillColor: "#E2CDF7",
        levelColor: "#8C52FF",
        title: "Coding World Made with LEGO® and Fortnite",
        desc: "A foundational workbook combining LEGO-brick storytelling with block-coding-based metaverse interaction, designed to spark interest in early-childhood and lower-elementary learners.",
      },
      {
        level: "2",
        image: "/images/vision_book_2.png",
        pillColor: "#C8EEFF",
        levelColor: "#0371C2",
        title: "Coding World Made with LEGO® and UEFN",
        desc: "A hands-on Physical AI coding textbook covering text-based coding and foundational Verse to operate real bricks with complex motors and sensors, linking them to the UEFN virtual space.",
      },
      {
        level: "3",
        image: "/images/vision_book_3.png",
        pillColor: "#F1FE61",
        levelColor: "#343E43",
        title: "UEFN Practical Guide Book",
        desc: "A professional Fortnite creator's field guide — from the basics of the Verse language to in-depth UEFN editor use — for anyone taking on the challenge of publishing a Fortnite map.",
      },
    ],
  }
};

export const VisionPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <div className="w-full min-h-full flex flex-col items-center select-none font-poppins bg-white">
      <img
        src="/images/vision_hero_banner.jpg"
        alt="BrickSync office — Creative Physical AI Education & Platform"
        className="w-full h-auto object-cover aspect-[2400/759]"
      />

      <div className="w-full flex flex-col items-center text-center py-12 sm:py-16 md:py-20 px-6">
        {lang === 'ko' ? (
          <img
            src="/images/vision_trust_eyebrow.png"
            alt={t.eyebrow}
            className="w-full max-w-[617px] h-auto object-contain mb-4 sm:mb-6"
          />
        ) : (
          <span className="text-black font-bold break-keep text-[clamp(0.8rem,1.6vw,1.15rem)] mb-4 sm:mb-6">
            {t.eyebrow}
          </span>
        )}
        {lang === 'ko' ? (
          <img
            src="/images/vision_trust_title.png"
            alt={t.title.replace('\n', ' ')}
            className="w-full max-w-[902px] h-auto object-contain mb-6 sm:mb-8"
          />
        ) : (
          <h2 className="text-blue-600 font-extrabold leading-snug whitespace-pre-line break-keep text-[clamp(1.3rem,3.4vw,2.5rem)] mb-6 sm:mb-8">
            {t.title}
          </h2>
        )}
        <p className="text-black leading-relaxed text-balance break-keep text-[clamp(0.85rem,1.5vw,1.15rem)] max-w-[1000px] mb-10 sm:mb-14">
          {t.body}
        </p>
        <img
          src="/images/vision_trust_illustration.png"
          alt="Unreal Engine and Fortnite authorized instructor illustration"
          className="w-full max-w-[900px] h-auto object-contain mb-16 sm:mb-24"
        />

        <h2 className="w-full max-w-[1200px] text-center text-black font-bold whitespace-nowrap break-keep text-[clamp(0.5rem,4.5vw,2.625rem)] mb-6 sm:mb-8">
          {t.badgesTitle}
        </h2>

        {lang === 'ko' ? (
          <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {t.badges.map((b) => (
              <img
                key={b.image}
                src={b.image}
                alt={b.title.replace('\n', ' ')}
                className="w-full h-auto object-contain"
              />
            ))}
          </div>
        ) : (
          <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {t.badges.map((b) => (
              <div key={b.title} className="rounded-2xl border border-gray-200 p-6 flex flex-col items-center text-center gap-3">
                <h3 className="text-black font-bold leading-snug whitespace-pre-line break-keep text-[clamp(0.95rem,1.8vw,1.15rem)]">
                  {b.title}
                </h3>
                <p className="text-black/70 leading-relaxed text-balance break-keep text-[clamp(0.8rem,1.4vw,1rem)]">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="w-full max-w-[1200px] flex flex-col items-center text-center mt-16 sm:mt-24">
          {lang === 'ko' ? (
            <img
              src="/images/vision_ai_section_title.png"
              alt={t.aiSectionTitle}
              className="w-full max-w-[707px] h-auto object-contain mb-4 sm:mb-6"
            />
          ) : (
            <h2 className="text-black font-extrabold leading-snug whitespace-pre-line break-keep text-[clamp(1.15rem,3vw,2.625rem)] mb-4 sm:mb-6">
              {t.aiSectionTitle}
            </h2>
          )}
          <p className="text-black leading-relaxed text-balance break-keep text-[clamp(0.8rem,1.4vw,1.15rem)] max-w-[1100px]">
            {t.aiSectionBody}
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 mt-10 sm:mt-14">
            {[t.aiLeft, t.aiRight].map((col) => (
              <div key={col.graphic} className="flex flex-col items-center text-center gap-4 sm:gap-6">
                {lang === 'ko' ? (
                  <img
                    src={col.captionImage}
                    alt={col.captionTitle.replace('\n', ' ')}
                    className="w-full h-auto object-contain"
                    style={{ maxWidth: `${col.captionWidthPct}%` }}
                  />
                ) : (
                  <h3 className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent font-extrabold leading-snug whitespace-pre-line break-keep text-[clamp(0.95rem,1.8vw,1.3rem)]">
                    {col.captionTitle}
                  </h3>
                )}
                <img
                  src={col.graphic}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[1200px] flex flex-col items-center text-center mt-16 sm:mt-24">
          <h2 className="text-black font-extrabold leading-snug break-keep text-[clamp(1.15rem,5.2vw,2.625rem)] mb-4 sm:mb-6">
            {t.booksTitle}
          </h2>
          <p className="text-black leading-relaxed text-balance break-keep text-[clamp(0.8rem,1.4vw,1.15rem)] max-w-[1100px] mb-10 sm:mb-14">
            {t.booksBody}
          </p>

          <div className="w-full flex flex-col gap-6 sm:gap-8">
            {t.books.map((b) => (
              <div
                key={b.level}
                className="w-full rounded-3xl sm:rounded-full flex flex-col sm:flex-row items-center text-center sm:text-left gap-5 sm:gap-10 md:gap-12 px-8 sm:px-12 md:px-16 py-9 sm:py-8 md:py-10"
                style={{ backgroundColor: b.pillColor }}
              >
                <div className="flex sm:flex-col items-center justify-center gap-2 sm:gap-0 shrink-0 sm:w-24 md:w-28">
                  <span className="font-extrabold leading-tight text-[clamp(1.15rem,2.1vw,1.7rem)]" style={{ color: b.levelColor }}>
                    Level
                  </span>
                  <span className="font-extrabold leading-tight text-[clamp(1.15rem,2.1vw,1.7rem)]" style={{ color: b.levelColor }}>
                    {b.level}
                  </span>
                </div>
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-36 sm:w-44 md:w-52 h-auto object-contain rounded-xl shrink-0"
                />
                <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-4">
                  <h3 className="text-black font-bold leading-snug break-keep text-[clamp(1.25rem,2.5vw,2rem)]">
                    {b.title}
                  </h3>
                  <p className="text-black/80 leading-relaxed text-balance break-keep text-[clamp(0.95rem,1.7vw,1.25rem)]">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
