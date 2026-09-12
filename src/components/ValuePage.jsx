import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Blocks, Brain, Sparkles, ArrowRightLeft, ShieldCheck, Video } from 'lucide-react';
import { Footer } from './Footer';
import { MediaPlaceholder } from './MediaPlaceholder';

const COPY = {
  ko: {
    eyebrow: "EDUCATIONAL VALUES",
    title: "우리가 추구하는 교육적 가치",
    lead: "BrickSync는 아이가 손으로 만든 것이 실시간으로 살아 움직이는 경험을 통해, 다섯 가지 교육적 가치를 실현합니다.",
    values: [
      {
        title: "피지컬×디지털 통합 학습",
        subtitle: "Phygital Learning",
        desc: "손으로 조립한 실물이 UEFN과 실시간 1:1로 동기화되어, 아이가 만든 것이 곧 게임 속 인터랙티브 컨트롤러가 되는 경험을 제공합니다.",
        media: "LEGO 조립 → 포트나이트 실시간 반응 데모 영상"
      },
      {
        title: "실전 컴퓨팅 사고력",
        subtitle: "Practical Computational Thinking",
        desc: "센서·모터 신호를 UEFN Verse 로직에 직접 매핑하는 과정에서 논리적 사고, 데이터 흐름, 문제 해결 능력을 기릅니다.",
        media: "블록 코딩 화면 + 미션 완료 스크린샷"
      },
      {
        title: "AI 리터러시 & STEAM 융합",
        subtitle: "AI Literacy & STEAM Integration",
        desc: "음성 프롬프트, 제스처·사물 인식 등 생성형 AI 리터러시를 로보틱스·엔지니어링 교육과 함께 다룹니다.",
        media: "AI 제스처/음성 인식 수업 장면 사진 또는 영상"
      },
      {
        title: "Verse·3D 창작으로 가는 디딤돌",
        subtitle: "Stepping Stone to Verse & 3D Creation",
        desc: "블록 코딩에서 텍스트 기반 Verse 스크립팅으로 자연스럽게 전환시켜, 콘텐츠 소비자가 아닌 메타버스 창작자로 성장시킵니다.",
        media: "블록 코딩 ↔ Verse 코드 비교 스크린샷"
      },
      {
        title: "안전하고 접근하기 쉬운 에듀테크",
        subtitle: "Safe & Accessible EdTech (COPPA-Compliant)",
        desc: "브라우저 기반 Web Bluetooth로 별도 설치 없이 사용 가능하며, 개인식별정보(PII)를 수집하지 않아 아동 정보 보호 기준(COPPA)을 준수합니다.",
        media: "브라우저 접속 화면 또는 COPPA 관련 안내 이미지"
      }
    ]
  },
  en: {
    eyebrow: "EDUCATIONAL VALUES",
    title: "The Educational Values We Pursue",
    lead: "Through the experience of watching what a child builds by hand come to life in real time, BrickSync puts five educational values into practice.",
    values: [
      {
        title: "Phygital Learning",
        subtitle: "Seamless Physical & Digital Integration",
        desc: "Hands-on LEGO builds sync 1:1 with UEFN in real time, turning what a child builds into an interactive in-game controller.",
        media: "Demo video: LEGO build → real-time Fortnite reaction"
      },
      {
        title: "Practical Computational Thinking",
        subtitle: "",
        desc: "Builds core logic, data flow, and problem-solving skills as students map physical sensor and motor signals directly to UEFN Verse actions.",
        media: "Block-coding screen + mission-completion screenshot"
      },
      {
        title: "AI Literacy & STEAM Integration",
        subtitle: "",
        desc: "Incorporates voice-based prompting and AI recognition, fostering generative AI literacy and prompt design alongside robotics and engineering concepts.",
        media: "Photo or clip of an AI gesture/voice recognition lesson"
      },
      {
        title: "Stepping Stone to Verse & 3D Creation",
        subtitle: "",
        desc: "Serves as a Verse-compatible block coding bridge, enabling a seamless transition to text-based Verse scripting and guiding students from content consumers to meta-creators.",
        media: "Side-by-side screenshot: block coding vs. Verse code"
      },
      {
        title: "Safe & Accessible EdTech",
        subtitle: "COPPA-Compliant",
        desc: "Deploys easily via browser-based Web Bluetooth with no installs, and maintains COPPA compliance by processing zero personally identifiable information (PII).",
        media: "Browser sign-in screen or a COPPA-compliance graphic"
      }
    ]
  }
};

const ICONS = [Blocks, Brain, Sparkles, ArrowRightLeft, ShieldCheck];

export const ValuePage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">
      <div className="w-full flex flex-col items-center flex-1 py-8 sm:py-12 md:py-14 px-4 sm:px-8 md:px-12">

        <div className="w-full max-w-[900px] flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-[#0b192e]/50 border border-cyan-200/30">
            {t.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            {t.title}
          </h1>
          <p className="text-white text-lg sm:text-xl leading-relaxed font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
            {t.lead}
          </p>
        </div>

        <div className="w-full max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {t.values.map((v, idx) => {
            const Icon = ICONS[idx];
            return (
              <div
                key={v.title}
                className={`rounded-3xl bg-[#0b192e]/40 border border-white/20 overflow-hidden flex flex-col ${
                  idx === t.values.length - 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <MediaPlaceholder icon={Video} label={v.media} aspect="aspect-video" className="rounded-none border-x-0 border-t-0 !rounded-t-3xl" />
                <div className="p-6 sm:p-7 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-100 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg sm:text-xl font-bold text-white leading-tight">{v.title}</span>
                      {v.subtitle && (
                        <span className="text-xs sm:text-sm text-cyan-200 font-mono">{v.subtitle}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
