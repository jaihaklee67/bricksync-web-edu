import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

// English asset set — the original, finished QuickStart guide. Do not modify
// these filenames/order; this is the reference layout the Korean version mirrors.
const EN_SECTIONS = [
  { src: '/images/quickstart_section_01_unified.png', alt: 'BrickSync Start Guide - 1. Download & Run Bricksync.exe' },
  { src: '/images/quickstart_section_02_unified.png', alt: 'BrickSync Start Guide - 2. Sign-up and Login for Student, Teacher, and Parent accounts' },
  { src: '/images/quickstart_section_03_unified.png', alt: 'BrickSync Start Guide - 3. Assembling the LEGO Model' },
  { src: '/images/quickstart_section_04_unified.png', alt: 'BrickSync Start Guide - 4. Try Lessons & AI Lessons' },
  { src: '/images/quickstart_section_05_unified.png', alt: 'BrickSync Start Guide - Connect with LEGO Hub & Block Coding' },
  { src: '/images/quickstart_section_06_unified.png', alt: 'BrickSync Start Guide - AI Lesson Gesture, Voice, and Object Recognition' },
  { src: '/images/quickstart_section_07_unified.png', alt: 'BrickSync Start Guide - 5. Access the Lego Fortnite map' },
  { src: '/images/quickstart_section_08_unified.png', alt: 'BrickSync Start Guide - 6. LEGO Spike, LEGO Fortnite real-time command execution' },
  { src: '/images/quickstart_section_09_unified.png', alt: 'BrickSync Start Guide - LEGO Education, BrickSync, and LEGO Fortnite execution' },
];

// Korean asset set, mirroring EN_SECTIONS' order/layout.
// Section 9 (closing execution-flow diagram) has no KR PNG yet — still using the EN placeholder.
//
// nativeWidth is each crop's actual pixel width. All 8 KR PNGs were cropped (with padding)
// from the same 5760x3240 source canvas/template, so text at a given "role" (e.g. the numbered
// pill-badge title) is the same absolute pixel size across all of them natively. But the crops
// themselves differ in width because each section has different content extent — so rendering
// every crop at the same `w-full` display width silently re-scales same-role text to different
// sizes per section. Fix: give each image a maxWidth proportional to its nativeWidth (see
// KO_SCALE below), so every crop is displayed at the same real-world scale instead of being
// force-fit to the container.
const KO_MAX_NATIVE_WIDTH = 4929; // widest crop (section 2) — this one uses the full 1480px container
const KO_SCALE = 1480 / KO_MAX_NATIVE_WIDTH;

const KO_SECTIONS = [
  { src: '/images/quickstart_kr_01.png', alt: '브릭싱크 스타트 가이드 - 1. 브릭싱크 실행 파일 다운로드 및 실행', nativeWidth: 3538 },
  { src: '/images/quickstart_kr_02.png', alt: '브릭싱크 스타트 가이드 - 2. 학생/교사/학부모 계정 가입 및 로그인', nativeWidth: 4929 },
  { src: '/images/quickstart_kr_03.png', alt: '브릭싱크 스타트 가이드 - 3. 레고 모델 조립', nativeWidth: 4220 },
  { src: '/images/quickstart_kr_04.png', alt: '브릭싱크 스타트 가이드 - 4. Lessons & AI Lessons 체험', nativeWidth: 3665 },
  { src: '/images/quickstart_kr_05.png', alt: '브릭싱크 스타트 가이드 - 레고 허브 연결 및 블록 코딩', nativeWidth: 4378 },
  { src: '/images/quickstart_kr_06.png', alt: '브릭싱크 스타트 가이드 - AI 레슨: 제스처, 음성, 사물 인식', nativeWidth: 3889 },
  { src: '/images/quickstart_kr_07.png', alt: '브릭싱크 스타트 가이드 - 5. 레고 포트나이트 맵 접속', nativeWidth: 4850 },
  { src: '/images/quickstart_kr_08.png', alt: '브릭싱크 스타트 가이드 - 6. 레고 스파이크, 레고 포트나이트 실시간 명령 실행', nativeWidth: 4818 },
  { src: '/images/quickstart_section_09_unified.png', alt: '브릭싱크 스타트 가이드 - 레고 에듀케이션, 브릭싱크, 레고 포트나이트 실행' },
];

export const QuickStartPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const sections = lang === 'ko' ? KO_SECTIONS : EN_SECTIONS;

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">

      {/* Main Content Area */}
      <div className="w-full flex flex-col items-center flex-1 py-8 sm:py-12 md:py-14 px-4 sm:px-8 md:px-12">
        {sections.map((s, i) => (
          <div
            key={s.src + i}
            className={`w-full max-w-[1480px] flex justify-center ${i === 6 ? 'mb-6 sm:mb-8' : i === 7 ? 'mb-8 sm:mb-12 md:mb-14' : 'mb-12 sm:mb-16 md:mb-20'}`}
          >
            <img
              src={s.src}
              alt={s.alt}
              className="w-full h-auto object-contain select-none pointer-events-none"
              style={s.nativeWidth ? { maxWidth: Math.round(s.nativeWidth * KO_SCALE) } : undefined}
            />
          </div>
        ))}

        {/* Real-time Demonstration Video 1: Left (Block Code & Physical LEGO Spin in Fortnite) */}
        <div className="w-full max-w-[1338px] flex justify-center mb-8 sm:mb-12 md:mb-14">
          <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/25 bg-black/10">
            <video
              src="/images/BrickSyncPlay_Left.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>

        {/* Real-time Demonstration Video 2: Right (Gesture AI & Real-time Fortnite Interactive Trigger) */}
        <div className="w-full max-w-[1338px] flex justify-center pb-14 sm:pb-18 md:pb-24">
          <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/25 bg-black/10">
            <video
              src="/images/BrickSyncPlay_Right.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>
      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
