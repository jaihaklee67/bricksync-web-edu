import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Rocket, Sparkles, Cpu, Puzzle, Globe2, Image as ImageIcon, Map } from 'lucide-react';
import { Footer } from './Footer';
import { MediaPlaceholder } from './MediaPlaceholder';

const COPY = {
  ko: {
    eyebrow: "ROADMAP & VISION",
    title: "우리가 나아갈 방향",
    lead: "BrickSync는 나이에 맞춰 코딩의 첫 성취에서 강화학습 실천까지, 하나로 이어지는 4단계 성장 여정을 만들어가고 있습니다.",
    stagesTitle: "연령별 4단계 성장 로드맵",
    stages: [
      {
        stage: "Stage 1",
        age: "5–7세",
        title: "Build it & it moves",
        desc: "조립한 블록 순서가 그대로 포트나이트 속 움직임으로 재현되는, 코딩의 첫 성취 경험.",
        media: "SPIKE Essential 키트 사진"
      },
      {
        stage: "Stage 2",
        age: "8–11세",
        title: "Data-driven thinking & world-building",
        desc: "브라우저 AI 인식(MediaPipe)과 음성 프롬프트로 Verse 호환 블록 코딩을 구성하고, UEFN 크리에이티브 툴로 직접 스테이지를 제작합니다.",
        media: "SPIKE Prime 키트 사진"
      },
      {
        stage: "Stage 3",
        age: "12–14세",
        title: "Collect data, teach behavior & transition to Verse",
        desc: "센서 데이터로 UEFN 디지털 트윈을 학습시키는 양방향 파이프라인을 경험하며, Gymnasium 표준 AI 학습 루프(관찰–행동–보상)를 익히고 첫 Verse 코드를 작성합니다.",
        media: "Science & AI 키트 사진"
      },
      {
        stage: "Stage 4",
        age: "16세+",
        title: "Train virtually & implant",
        desc: "Python Gym 환경에서 강화학습(PPO)으로 모델을 학습시키고, 이를 실제 로봇에 이식해 현실과의 격차를 측정합니다 — Fortnite 창작자이자 RL 실천가로 완성됩니다.",
        media: "Technic/Mindstorms 로봇 사진"
      }
    ],
    contentDirTitle: "교육 콘텐츠 확장 방향",
    contentDir: [
      { title: "생성형 AI 프롬프팅·AI 리터러시 확장", desc: "자연어·음성 기반 프롬프트 엔지니어링 커리큘럼을 확장합니다." },
      { title: "Gymnasium ML/RL·Verse 스크립팅 표준화", desc: "PPO/DQN 강화학습 에이전트와 UEFN 시각화를 결합한 표준 연구 환경을 구축합니다." },
      { title: "하드웨어·맵·크리에이터 생태계 확장", desc: "SPIKE Essential/Prime/Science & AI/Technic 등 지원 하드웨어와 맵, 크리에이터 생태계를 확장합니다." }
    ],
    businessDirTitle: "비즈니스 확장 방향",
    businessDirDesc: "한국에서 검증한 교육 모델을 Epic의 전 세계 UAI(Unreal Authorized Instructor) 네트워크를 통해 표준화된 형태로 확산합니다.",
    mapMediaLabel: "한국 → APAC → 글로벌 확장 경로를 보여주는 지도 그래픽",
    regions: [
      { region: "Region A", place: "대한민국", desc: "이미 검증된 시장 — 파일럿 수업, UAI 네트워크, LEGO SPIKE 방과후 인프라 확보" },
      { region: "Region B", place: "아시아태평양(APAC)", desc: "교육용 로보틱스 시장에서 가장 빠르게 성장 중인 지역 — 국가별 STEAM·AI 리터러시 기준에 맞춰 현지화" },
      { region: "Region C", place: "글로벌", desc: "APAC에서 검증한 지역 이식 모델을 전 세계로 확장 — 피지컬 AI·코딩 학습 도구의 글로벌 표준을 지향" }
    ]
  },
  en: {
    eyebrow: "ROADMAP & VISION",
    title: "Where We're Headed",
    lead: "BrickSync is building one continuous growth journey — from a child's first coding win to real reinforcement-learning practice — across four age-tiered stages.",
    stagesTitle: "4-Stage Growth Roadmap by Age",
    stages: [
      {
        stage: "Stage 1",
        age: "Age 5–7",
        title: "Build it & it moves",
        desc: "The sequence a child assembles in blocks is mirrored live as movement inside Fortnite — a first taste of what coding achieves.",
        media: "SPIKE Essential kit photo"
      },
      {
        stage: "Stage 2",
        age: "Age 8–11",
        title: "Data-driven thinking & world-building",
        desc: "Students compose Verse-compatible block coding using browser-based AI recognition (MediaPipe) and voice prompting, and build their own stages with UEFN creative tools.",
        media: "SPIKE Prime kit photo"
      },
      {
        stage: "Stage 3",
        age: "Age 12–14",
        title: "Collect data, teach behavior & transition to Verse",
        desc: "A bidirectional pipeline trains a UEFN digital twin from sensor data, teaching the core AI loop (observation–action–reward) used in Gymnasium, and students write their first Verse code.",
        media: "Science & AI kit photo"
      },
      {
        stage: "Stage 4",
        age: "Age 16+",
        title: "Train virtually & implant",
        desc: "Students train a model with reinforcement learning (PPO) in a Python Gym environment, then deploy it to a real robot and measure the sim-to-real gap — graduating as both a Fortnite creator and an RL practitioner.",
        media: "Technic / Mindstorms robot photo"
      }
    ],
    contentDirTitle: "Curriculum Expansion Direction",
    contentDir: [
      { title: "Generative AI prompting & AI literacy", desc: "Expanding natural-language and voice-based prompt engineering curriculum." },
      { title: "Gymnasium ML/RL & Verse scripting standard", desc: "Building a standard research environment pairing PPO/DQN reinforcement learning agents with UEFN visualization." },
      { title: "Hardware, maps & creator ecosystem", desc: "Expanding supported hardware (SPIKE Essential/Prime/Science & AI/Technic), maps, and the creator ecosystem." }
    ],
    businessDirTitle: "Business Expansion Direction",
    businessDirDesc: "Scaling the education model proven in Korea into a standardized offering through Epic's worldwide UAI (Unreal Authorized Instructor) network.",
    mapMediaLabel: "Map graphic showing the Korea → APAC → Global expansion path",
    regions: [
      { region: "Region A", place: "South Korea", desc: "An already-proven market — pilot classes, a UAI network, and existing LEGO SPIKE after-school infrastructure" },
      { region: "Region B", place: "APAC", desc: "The fastest-growing region in educational robotics — localized to each country's STEAM & AI literacy standards" },
      { region: "Region C", place: "Global", desc: "Extending the region-proven transplant model worldwide, toward becoming the global standard for phygital AI & coding learning tools" }
    ]
  }
};

export const VisionPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];
  const contentIcons = [Sparkles, Cpu, Puzzle];

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

        {/* 4-Stage Roadmap */}
        <div className="w-full max-w-[1200px] flex flex-col items-center mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 sm:mb-10 text-center">
            {t.stagesTitle}
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {t.stages.map((s) => (
              <div
                key={s.stage}
                className="rounded-3xl bg-[#0b192e]/40 border border-white/20 overflow-hidden flex flex-col"
              >
                <MediaPlaceholder icon={ImageIcon} label={s.media} aspect="aspect-square" className="rounded-none border-x-0 border-t-0 !rounded-t-3xl" />
                <div className="p-5 sm:p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-200 uppercase tracking-wider">{s.stage}</span>
                    <span className="text-xs sm:text-sm font-semibold text-amber-200 bg-amber-500/15 border border-amber-300/30 rounded-full px-2.5 py-0.5">{s.age}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">{s.title}</h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Expansion */}
        <div className="w-full max-w-[1100px] flex flex-col items-center mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 sm:mb-10 text-center">
            {t.contentDirTitle}
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {t.contentDir.map((c, idx) => {
              const Icon = contentIcons[idx];
              return (
                <div
                  key={c.title}
                  className="p-6 rounded-3xl bg-[#0b192e]/40 border border-white/20 flex flex-col gap-3"
                >
                  <Icon className="w-5 h-5 text-cyan-200" />
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">{c.title}</span>
                  <span className="text-sm sm:text-base text-white/90 leading-relaxed">{c.desc}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Business Expansion */}
        <div className="w-full max-w-[1100px] flex flex-col items-center">
          <div className="flex items-center gap-2 mb-3">
            <Rocket className="w-5 h-5 text-cyan-200" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center">
              {t.businessDirTitle}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/90 text-center max-w-[760px] mb-8 sm:mb-10">
            {t.businessDirDesc}
          </p>

          <div className="w-full mb-8 sm:mb-10">
            <MediaPlaceholder icon={Map} label={t.mapMediaLabel} aspect="aspect-[21/9]" />
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {t.regions.map((r) => (
              <div
                key={r.region}
                className="p-6 rounded-3xl bg-[#0b192e]/40 border border-white/20 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-cyan-200" />
                  <span className="text-xs font-mono font-bold text-cyan-200 uppercase tracking-wider">{r.region}</span>
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">{r.place}</span>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
