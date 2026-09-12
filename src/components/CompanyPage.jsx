import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Trophy, Award, Globe2, Mail, BookOpen, Video, Images, UserRound } from 'lucide-react';
import { Footer } from './Footer';
import { MediaPlaceholder } from './MediaPlaceholder';

const COPY = {
  ko: {
    eyebrow: "PHYSICAL AI EDUCATION",
    title: "모든 세대를 위한 피지컬 AI 교육, BrickSync",
    lead: "BrickSync는 유아부터 성인까지 전 세대를 대상으로 피지컬 AI(Physical AI) 교육을 제공하는 글로벌 에듀테크 기업입니다.",
    mission: "디지털 세계를 만드는 힘과 물리 세계를 움직이는 힘, 이 두 가지가 만나는 지점에서 다음 세대의 창작자와 엔지니어를 길러내는 것이 BrickSync의 목표입니다.",
    heroMediaLabel: "브랜드/팀 소개 영상 (16:9) — BrickSync 소개 영상 또는 대표 인터뷰 클립",
    audienceTitle: "누구를 위한 교육인가",
    audienceDesc: "BrickSync는 특정 연령대에 머물지 않습니다. 블록으로 첫 논리적 사고를 배우는 유아부터, 실제 엔진과 AI 프레임워크로 프로덕트를 만드는 성인까지 — 하나의 연속된 학습 여정으로 연결합니다.",
    globalTitle: "글로벌 에듀테크로서",
    globalDesc: "BrickSync는 한 지역, 한 언어에 머무르지 않는 교육을 지향합니다. 3D 엔진과 AI라는, 국경 없이 통용되는 기술 언어를 기반으로 전 세계 학습자에게 동일한 수준의 교육 경험을 제공합니다.",
    trackRecordTitle: "실증된 성과",
    trackRecord: [
      { value: "43명", label: "파일럿 3기수 누적 참여 (여름캠프·겨울캠프·방과후)" },
      { value: "100%", label: "완주율 — 전원 수료증 취득" },
      { value: "200%", label: "기수별 지원자 증가율" },
      { value: "4.8/5.0", label: "학부모·기관·학생 만족도" }
    ],
    trackRecordMediaLabel: "파일럿 캠프 실제 수업 사진 3~4장 — 아이들이 조립·코딩·발표하는 모습",
    booksTitle: "자체 출판 교재 시리즈",
    booksDesc: "국내 최초, 유아 블록코딩부터 전문 UEFN 개발까지 단계별로 이어지는 3단계 교재를 직접 집필·출판했습니다.",
    books: [
      { level: "입문", title: "LEGO & Fortnite로 배우는 코딩 세계" },
      { level: "중급", title: "LEGO & UEFN으로 배우는 코딩 세계" },
      { level: "심화", title: "포트나이트 크리에이터를 위한 실전 UEFN 가이드" }
    ],
    bookMediaLabel: "표지 사진",
    teamTitle: "팀 & 리더십",
    teamPhotoLabel: "프로필 사진"
  },
  en: {
    eyebrow: "PHYSICAL AI EDUCATION",
    title: "Physical AI Education for Every Generation",
    lead: "BrickSync is a global edtech company delivering Physical AI education to learners of every generation, from early childhood to adulthood.",
    mission: "BrickSync's goal is to raise the next generation of creators and engineers at the intersection of two forces: the power to build digital worlds, and the power to move the physical world.",
    heroMediaLabel: "Brand / team intro video (16:9) — BrickSync intro reel or founder interview clip",
    audienceTitle: "Who It's For",
    audienceDesc: "BrickSync doesn't stop at one age group. From toddlers learning their first logical thinking with blocks, to adults building real products with engines and AI frameworks — it's one continuous learning journey.",
    globalTitle: "A Global EdTech",
    globalDesc: "BrickSync aims for education that isn't confined to one region or language. Built on the borderless technical languages of 3D engines and AI, it delivers the same quality of education to learners worldwide.",
    trackRecordTitle: "Proven Track Record",
    trackRecord: [
      { value: "43", label: "Students across 3 pilot cycles (summer / winter camp / after-school)" },
      { value: "100%", label: "Completion rate — every participant certified" },
      { value: "200%", label: "Applicant growth cohort over cohort" },
      { value: "4.8/5.0", label: "Satisfaction from parents, institutions & students" }
    ],
    trackRecordMediaLabel: "3–4 real pilot-camp photos — kids building, coding, and presenting",
    booksTitle: "Published Textbook Series",
    booksDesc: "A first-of-its-kind, self-authored 3-level series spanning early-childhood block coding through professional UEFN development.",
    books: [
      { level: "Basic", title: "Coding World with LEGO & Fortnite" },
      { level: "Intermediate", title: "Coding World with LEGO & UEFN" },
      { level: "Advanced", title: "Practical UEFN Guide for Fortnite Creators" }
    ],
    bookMediaLabel: "Cover photo",
    teamTitle: "Team & Leadership",
    teamPhotoLabel: "Profile photo"
  }
};

const TEAM = [
  {
    name: "Cliff Lee",
    email: "jaihaklee67@naver.com",
    credentials: {
      ko: ["Unreal Authorized Instructor (UAI)", "Unity Certified Instructor", "LEGO Education Specialist", "서강대학교 AI·SW대학원 소프트웨어공학 석사", "DMAF2026 글로벌 미디어아트 전시 테크니컬 디렉터"],
      en: ["Unreal Authorized Instructor (UAI)", "Unity Certified Instructor", "LEGO Education Specialist", "M.S. in Software Engineering, Sogang University AI & SW Graduate School", "Technical Director, DMAF2026 global media art exhibition"]
    }
  },
  {
    name: "Emma Jeon",
    email: "wjsthdb@naver.com",
    credentials: {
      ko: ["Unreal Authorized Instructor (UAI)", "LEGO Education Specialist", "네이버 제페토(ZEPETO) 2023 Featured Creator", "ZGM 3D 캐릭터·의상 디자이너"],
      en: ["Unreal Authorized Instructor (UAI)", "LEGO Education Specialist", "Naver ZEPETO 2023 Featured Creator", "3D Character/Costume Designer at ZGM"]
    }
  }
];

export const CompanyPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">
      <div className="w-full flex flex-col items-center flex-1 py-8 sm:py-12 md:py-14 px-4 sm:px-8 md:px-12">

        {/* Hero */}
        <div className="w-full max-w-[900px] flex flex-col items-center text-center mb-8 sm:mb-10">
          <span className="inline-block text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-[#0b192e]/50 border border-cyan-200/30">
            {t.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            {t.title}
          </h1>
          <p className="text-white text-lg sm:text-xl leading-relaxed mb-5 font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
            {t.lead}
          </p>
          <p className="text-white/95 text-base sm:text-lg leading-relaxed font-semibold bg-[#0b192e]/35 rounded-2xl px-5 py-4 border border-white/10">
            {t.mission}
          </p>
        </div>

        <div className="w-full max-w-[900px] mb-14 sm:mb-20">
          <MediaPlaceholder icon={Video} label={t.heroMediaLabel} />
        </div>

        {/* Audience + Global */}
        <div className="w-full max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-14 sm:mb-20">
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0b192e]/40 border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{t.audienceTitle}</h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">{t.audienceDesc}</p>
          </div>
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0b192e]/40 border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-cyan-200" />
              {t.globalTitle}
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">{t.globalDesc}</p>
          </div>
        </div>

        {/* Track Record */}
        <div className="w-full max-w-[1100px] flex flex-col items-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 sm:mb-10 text-center">
            {t.trackRecordTitle}
          </h2>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.trackRecord.map((r) => (
              <div
                key={r.label}
                className="flex flex-col items-center text-center gap-2 p-5 sm:p-6 rounded-3xl bg-[#0b192e]/40 border border-white/20"
              >
                <Trophy className="w-6 h-6 text-amber-300 mb-1" />
                <span className="text-2xl sm:text-3xl font-extrabold text-white">{r.value}</span>
                <span className="text-xs sm:text-sm text-white/90 leading-snug">{r.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[1100px] mb-14 sm:mb-20">
          <MediaPlaceholder icon={Images} label={t.trackRecordMediaLabel} aspect="aspect-[21/9]" />
        </div>

        {/* Published Books */}
        <div className="w-full max-w-[1100px] flex flex-col items-center mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 text-center">
            {t.booksTitle}
          </h2>
          <p className="text-sm sm:text-base text-white/90 text-center max-w-[720px] mb-8 sm:mb-10">
            {t.booksDesc}
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {t.books.map((b) => (
              <div
                key={b.title}
                className="rounded-3xl bg-[#0b192e]/40 border border-white/20 flex flex-col gap-3 overflow-hidden"
              >
                <MediaPlaceholder icon={BookOpen} label={t.bookMediaLabel} aspect="aspect-[4/3]" className="rounded-none border-x-0 border-t-0 !rounded-t-3xl" />
                <div className="flex flex-col gap-2 px-6 pb-6">
                  <span className="text-xs font-mono font-bold text-cyan-200 uppercase tracking-wider">{b.level}</span>
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">{b.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team & Leadership */}
        <div className="w-full max-w-[1100px] flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 sm:mb-10 text-center">
            {t.teamTitle}
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl bg-[#0b192e]/40 border border-white/20 overflow-hidden flex flex-col"
              >
                <MediaPlaceholder icon={UserRound} label={t.teamPhotoLabel} aspect="aspect-square" className="rounded-none border-x-0 border-t-0 !rounded-t-3xl" />
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-lg sm:text-xl font-bold text-white">{member.name}</span>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {member.credentials[lang].map((c) => (
                      <li key={c} className="text-sm sm:text-base text-white/90 leading-relaxed">
                        {c}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm sm:text-base text-cyan-200 hover:text-cyan-100 transition-colors mt-1 font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.bricksync.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 sm:mt-12 px-5 py-2.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-200/40 text-white text-sm sm:text-base font-semibold transition-all"
          >
            <Globe2 className="w-4 h-4" />
            <span>www.bricksync.org</span>
          </a>
        </div>
      </div>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
