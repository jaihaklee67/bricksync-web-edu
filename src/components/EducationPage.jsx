import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

// English asset set — the original, finished LEGO Fortnite Education page. Do not modify
// these filenames/order; this is the reference layout the Korean version mirrors.
const EN_SECTIONS = [
  { src: '/images/education_section_01.png', alt: 'LEGO Fortnite Education with BrickSync', maxW: 1360, mb: 'mb-12 sm:mb-16 md:mb-20' },
  { src: '/images/education_section_02.png', alt: 'LEGO Fortnite Education Classes and Pop-Up Experience', maxW: 1360, mb: 'mb-12 sm:mb-16 md:mb-20' },
  { src: '/images/education_section_04.png', alt: 'BrickSync Curriculums Title and Description', maxW: 1360, mb: 'mb-8 sm:mb-10 md:mb-12' },
  { src: '/images/education_section_05.png', alt: 'LEGO Fortnite Education Curriculum Overview, Short-Term Camp, and After-School Programs', maxW: 1440, mb: 'pb-20', px: 'px-2 sm:px-4' },
];

// Korean asset set — TODO: replace each placeholder src below with the matching
// PNG once supplied, keeping this same order/section count to mirror EN_SECTIONS.
const KO_SECTIONS = [
  { src: '/images/education_section_01.png', alt: '브릭싱크와 함께하는 레고 포트나이트 교육', maxW: 1360, mb: 'mb-12 sm:mb-16 md:mb-20' },
  { src: '/images/education_section_02.png', alt: '레고 포트나이트 교육 클래스 및 팝업 체험', maxW: 1360, mb: 'mb-12 sm:mb-16 md:mb-20' },
  { src: '/images/education_section_04.png', alt: '브릭싱크 커리큘럼 타이틀 및 설명', maxW: 1360, mb: 'mb-8 sm:mb-10 md:mb-12' },
  { src: '/images/education_section_05.png', alt: '레고 포트나이트 교육 커리큘럼 개요, 단기 캠프 및 방과후 프로그램', maxW: 1440, mb: 'pb-20', px: 'px-2 sm:px-4' },
];

export const EducationPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const sections = lang === 'ko' ? KO_SECTIONS : EN_SECTIONS;

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">

      <div className="w-full flex flex-col items-center flex-1 py-8 sm:py-12 md:py-14 px-4 sm:px-8 md:px-12">
        {sections.map((s, i) => (
          <div
            key={s.src + i}
            className={`w-full flex justify-center ${s.mb} ${s.px || ''}`}
            style={{ maxWidth: s.maxW }}
          >
            <img
              src={s.src}
              alt={s.alt}
              className="w-full h-auto object-contain select-none pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
