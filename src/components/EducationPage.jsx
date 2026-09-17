import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

// Maps a Hero roadmap card key to the curriculum image that contains it and
// where within that image (0 = top, 1 = bottom) that stage's panel sits, so a
// click can scroll straight to the right stage instead of just the section.
const STAGE_TARGETS = {
  spark: { stageKey: 'curriculum1', fraction: 0.48 },
  creator: { stageKey: 'curriculum1', fraction: 0.87 },
  innovator: { stageKey: 'curriculum2', fraction: 0.34 },
  master: { stageKey: 'curriculum2', fraction: 0.74 },
  camp: { stageKey: 'camp', fraction: 0.5 },
};

// Shared blue gradient used behind sections whose PNG is transparent (white text
// baked in with no background) — the page itself is white, so these sections need
// their own backdrop for the text to stay legible.
const BAND_GRADIENT = 'linear-gradient(135deg, #7FCBEA 0%, #1E8FD5 55%, #0068BD 100%)';

const KO_HIGHLIGHTS = [
  '맞춤형 교육 방식 : 학교·기관 오프라인 출강 및 온라인 동영상 클래스(B2C) 운영',
  '모듈형 커리큘럼 : 연령대별 및 희망기간별(단기 캠프/방과후/정규) 맞춤 설계',
  '전국 출강 서비스 : 지역 제한 없이 찾아가는 맞춤형 AI·코딩 교육 서비스 지원',
  '외국어(영어)수업 : 영어 유치원 및 국제학교를 위한 100% 영어 수업 진행 가능',
];

// English asset set — the original, finished LEGO Fortnite Education page. Do not modify
// these filenames/order; this is the reference layout the Korean version mirrors.
const EN_SECTIONS = [
  {
    src: '/images/education_section_01.png',
    alt: 'LEGO Fortnite Education with BrickSync',
    maxW: 1360,
    mb: 'mb-12 sm:mb-16 md:mb-20',
    bg: BAND_GRADIENT,
    pad: 'p-6 sm:p-10 md:p-14',
    rounded: 'rounded-2xl sm:rounded-3xl',
  },
  { src: '/images/education_section_02.png', alt: 'LEGO Fortnite Education Classes and Pop-Up Experience', maxW: 1360, mb: 'mb-12 sm:mb-16 md:mb-20' },
  {
    src: '/images/education_section_04.png',
    alt: 'BrickSync Curriculums Title and Description',
    maxW: 1360,
    mb: 'mb-8 sm:mb-10 md:mb-12',
    bg: BAND_GRADIENT,
    pad: 'py-4 sm:py-6 md:py-8',
  },
  { src: '/images/education_section_05.png', alt: 'LEGO Fortnite Education Curriculum Overview, Short-Term Camp, and After-School Programs', maxW: 1440, mb: 'pb-20', px: 'px-2 sm:px-4' },
];

// Korean asset set — TODO: replace each placeholder src below with the matching
// PNG once supplied, keeping this same order/section count to mirror EN_SECTIONS.
const KO_SECTIONS = [
  {
    src: '/images/education_kr_01.png',
    alt: '브릭싱크와 함께하는 레고 포트나이트 교육',
    maxW: 1360,
    mb: 'mb-6 sm:mb-8 md:mb-10',
    bg: BAND_GRADIENT,
    pad: 'p-6 sm:p-10 md:p-14',
    rounded: 'rounded-2xl sm:rounded-3xl',
  },
  {
    checklist: true,
    maxW: 1360,
    mb: 'mb-12 sm:mb-16 md:mb-20',
  },
  { src: '/images/education_section_02.png', alt: '레고 포트나이트 교육 클래스 및 팝업 체험', maxW: 1360, mb: 'mb-12 sm:mb-16 md:mb-20' },
  {
    src: '/images/education_kr_04.png',
    alt: 'BrickSync의 노하우가 담긴 커리큘럼',
    maxW: 1360,
    mb: 'mb-8 sm:mb-10 md:mb-12',
    rounded: 'rounded-2xl sm:rounded-3xl',
    stageKey: 'curriculum1',
  },
  {
    src: '/images/education_kr_04b.png',
    alt: 'BrickSync의 노하우가 담긴 커리큘럼 - 이노베이터, 마스터',
    maxW: 1360,
    mb: 'mb-20 sm:mb-24 md:mb-28',
    rounded: 'rounded-2xl sm:rounded-3xl',
    stageKey: 'curriculum2',
  },
  {
    src: '/images/education_kr_05.png',
    alt: '피지컬 AI 레고 포트나이트 캠프',
    maxW: 1360,
    mb: 'mb-8 sm:mb-10 md:mb-12',
    stageKey: 'camp',
  },
  {
    src: '/images/education_kr_06.png',
    alt: '피지컬 AI 레고 포트나이트 캠프 활동 목록',
    maxW: 1440,
    mb: 'mb-8 sm:mb-10 md:mb-12',
  },
  { src: '/images/education_section_05.png', alt: '레고 포트나이트 교육 커리큘럼 개요, 단기 캠프 및 방과후 프로그램', maxW: 1440, mb: 'mb-8 sm:mb-10 md:mb-12', px: 'px-2 sm:px-4' },
  {
    src: '/images/education_kr_07.png',
    alt: '레고 포트나이트 캠프 활동 및 수료식 사진',
    maxW: 1440,
    mb: 'pb-20',
    px: 'px-2 sm:px-4',
  },
];

export const EducationPage = ({ setCurrentView, scrollTarget, onScrollTargetHandled }) => {
  const { lang } = useLanguage();
  const sections = lang === 'ko' ? KO_SECTIONS : EN_SECTIONS;
  const stageRefs = useRef({});

  useEffect(() => {
    if (!scrollTarget) return;
    const target = STAGE_TARGETS[scrollTarget];
    if (!target) {
      onScrollTargetHandled && onScrollTargetHandled();
      return;
    }

    // The stage image loads asynchronously and the checklist above it can
    // reflow the layout, so retry for a moment until the element has real
    // height before measuring/scrolling to it.
    let attempts = 0;
    const tryScroll = () => {
      const el = stageRefs.current[target.stageKey];
      const scroller = el && el.closest('.overflow-y-auto');
      if (el && scroller && el.getBoundingClientRect().height > 0) {
        const rect = el.getBoundingClientRect();
        const targetViewportY = rect.top + rect.height * target.fraction;
        const delta = targetViewportY - scroller.clientHeight / 2;
        scroller.scrollTo({ top: scroller.scrollTop + delta, behavior: 'smooth' });
        onScrollTargetHandled && onScrollTargetHandled();
      } else if (attempts < 20) {
        attempts += 1;
        setTimeout(tryScroll, 100);
      } else {
        onScrollTargetHandled && onScrollTargetHandled();
      }
    };
    tryScroll();
  }, [scrollTarget, lang]);

  return (
    <div className="relative z-10 w-full min-h-full flex flex-col items-center justify-between select-none font-poppins bg-white -mt-20 sm:-mt-24 md:-mt-28 pt-20 sm:pt-24 md:pt-28">

      <div className="w-full flex flex-col items-center flex-1 py-8 sm:py-12 md:py-14 px-4 sm:px-8 md:px-12">
        {sections.map((s, i) => (
          <div
            key={(s.src || 'checklist') + i}
            ref={s.stageKey ? (el) => { stageRefs.current[s.stageKey] = el; } : undefined}
            className={`w-full flex justify-center ${s.mb} ${s.px || ''}`}
            style={{ maxWidth: s.maxW }}
          >
            {s.checklist ? (
              <ul className="flex flex-col gap-3 sm:gap-4">
                {KO_HIGHLIGHTS.map((line, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-[clamp(1.35rem,2.4vw,2.025rem)] h-[clamp(1.35rem,2.4vw,2.025rem)] text-[#1E8FD5] flex-shrink-0 mt-0.5" />
                    <span className="text-black font-medium break-keep text-[clamp(0.9rem,2.025vw,1.575rem)]">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            ) : s.bg ? (
              <div className={`w-full ${s.pad || ''} ${s.rounded || ''}`} style={{ background: s.bg }}>
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-auto object-contain select-none pointer-events-none"
                />
              </div>
            ) : (
              <img
                src={s.src}
                alt={s.alt}
                className={`w-full h-auto object-contain select-none pointer-events-none ${s.rounded || ''}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
