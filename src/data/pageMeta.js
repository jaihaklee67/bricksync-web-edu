// Per-page <title> and meta description, keyed by the same `view` values as
// VIEW_TO_PATH (App.jsx). Applied client-side by PageMeta.jsx on every
// navigation/language switch so each URL gets its own title in search
// results and browser tabs.
const SITE = { ko: '브릭싱크 BrickSync', en: 'BrickSync' };

export const pageMeta = {
  ko: {
    home: {
      title: '브릭싱크 BrickSync | 피지컬 AI 레고 포트나이트 코딩 교육',
      description: '브릭싱크(BrickSync)는 레고 스파이크와 AI 인식 기술로 포트나이트(UEFN)와 실시간 연동되는 피지컬 AI 코딩 교육 프로그램입니다. 5세부터 16세 이상까지 연령별 커리큘럼과 방과후·캠프 수업을 운영합니다.',
    },
    company: {
      title: `교육 이념 | ${SITE.ko}`,
      description: 'AX 대전환 시대, 현실과 가상을 연결하는 Physical AI 교육으로 AI 크리에이티브 인재를 키우는 브릭싱크의 교육 이념과 핵심 학습 가치를 소개합니다.',
    },
    value: {
      title: `교육적 가치 | ${SITE.ko}`,
      description: '피지컬×디지털 통합 학습, 실전 컴퓨팅 사고력, AI 리터러시와 STEAM 융합 등 브릭싱크가 추구하는 교육적 가치를 소개합니다.',
    },
    vision: {
      title: `파트너십 & 인증 | ${SITE.ko}`,
      description: '에픽게임즈 공인 강사(UAI), 레고 포트나이트 공식 검증 커리큘럼과 수료증 발급 등 브릭싱크의 파트너십과 인증 현황을 소개합니다.',
    },
    about: {
      title: `브릭싱크 App | ${SITE.ko}`,
      description: '직접 조립한 레고 스파이크의 움직임이 웹을 거쳐 포트나이트 3D 세계와 실시간으로 동기화되는 브릭싱크 App의 3가지 핵심 구성요소를 소개합니다.',
    },
    education: {
      title: `레고 포트나이트 교육 | ${SITE.ko}`,
      description: '유아와 초등학생을 위한 레고 포트나이트 교육. 연령별 커리큘럼, 단기 캠프, 방과후 프로그램과 전국 출강 서비스를 안내합니다.',
    },
    'uefn-verse': {
      title: `3D 메타버스 개발 | ${SITE.ko}`,
      description: '포트나이트 에디터(UEFN)와 Verse를 활용해 AI로 나만의 3D 메타버스와 게임을 만드는 3D 메타버스 개발 과정을 소개합니다.',
    },
    'unreal-engine': {
      title: `AI 시뮬레이션 | ${SITE.ko}`,
      description: '모션캡처, 인터랙션, 물리 연동 기반의 고성능 3D 환경 구축. 컨피규레이터와 버추얼 휴먼 제작 등 AI 시뮬레이션 과정을 소개합니다.',
    },
    'interactive-3d': {
      title: `인터렉티브 & 미디어아트 | ${SITE.ko}`,
      description: 'LED 아나몰픽 콘텐츠, 프로젝션 맵핑과 미디어 파사드, 센서 기반 실시간 인터랙션을 배우는 인터렉티브 & 미디어아트 과정을 소개합니다.',
    },
    quickstart: {
      title: `퀵스타트 가이드 | ${SITE.ko}`,
      description: '브릭싱크 실행 파일 다운로드부터 레고 허브 연결, 블록 코딩, 레고 포트나이트 맵 접속까지 3단계로 바로 시작하는 퀵스타트 가이드입니다.',
    },
    download: {
      title: `다운로드 | ${SITE.ko}`,
      description: '브릭싱크 실행 파일(Bricksync.exe)과 UEFN 실전 가이드북 등 교육용 자료를 내려받을 수 있습니다.',
    },
    contact: {
      title: `1:1 상담 문의 | ${SITE.ko}`,
      description: '학교·기관 도입, 교사 워크숍, 파트너십 등 브릭싱크 AI 교육 관련 문의를 남겨주세요.',
    },
    faq: {
      title: `자주 묻는 질문 FAQ | ${SITE.ko}`,
      description: '교육과정, 교구와 수업환경, 커리큘럼, 학교·기관 출강 등 브릭싱크 교육에 대해 자주 묻는 질문과 답변입니다.',
    },
    news: {
      title: `SNS | ${SITE.ko}`,
      description: '브릭싱크의 유튜브 채널과 인스타그램 소식을 확인하세요.',
    },
    privacy: {
      title: `개인정보처리방침 | ${SITE.ko}`,
      description: '브릭싱크 개인정보처리방침 안내 페이지입니다.',
    },
    terms: {
      title: `이용약관 | ${SITE.ko}`,
      description: '브릭싱크 이용약관 안내 페이지입니다.',
    },
  },
  en: {
    home: {
      title: 'BrickSync | Physical AI LEGO Fortnite Coding Education',
      description: 'BrickSync connects LEGO SPIKE hardware and AI recognition with Fortnite (UEFN) in real time — a Physical AI coding education program with age-based curriculums, after-school classes, and camps.',
    },
    company: {
      title: `Education Philosophy | ${SITE.en}`,
      description: 'In the AX era, BrickSync nurtures AI creative talent through Physical AI education that bridges the real and virtual worlds.',
    },
    value: {
      title: `Educational Values | ${SITE.en}`,
      description: 'Phygital learning, practical computational thinking, and AI literacy with STEAM integration — the educational values BrickSync pursues.',
    },
    vision: {
      title: `Partnerships & Certifications | ${SITE.en}`,
      description: 'Epic Games Authorized Instructors (UAI), a LEGO Fortnite verified curriculum, and official certificates — BrickSync partnerships and certifications.',
    },
    about: {
      title: `BrickSync App | ${SITE.en}`,
      description: 'The 3 core components of the BrickSync App, which syncs the motion of LEGO SPIKE builds with the Fortnite 3D world in real time.',
    },
    education: {
      title: `LEGO Fortnite Education | ${SITE.en}`,
      description: 'LEGO Fortnite education for young children and elementary students: age-based curriculums, short-term camps, after-school programs, and on-site services.',
    },
    'uefn-verse': {
      title: `3D Metaverse Development | ${SITE.en}`,
      description: 'Build your own 3D metaverse and games with AI using Unreal Editor for Fortnite (UEFN) and Verse.',
    },
    'unreal-engine': {
      title: `AI Simulation | ${SITE.en}`,
      description: 'High-performance 3D environments driven by motion capture, interaction, and physics — including configurators and virtual humans.',
    },
    'interactive-3d': {
      title: `Interactive & Media Art | ${SITE.en}`,
      description: 'Learn LED anamorphic content, projection mapping and media facades, and sensor-based real-time interaction.',
    },
    quickstart: {
      title: `Quick Start Guide | ${SITE.en}`,
      description: 'Get started in 3 steps: download BrickSync, connect your LEGO hub and block-code, then join the LEGO Fortnite map.',
    },
    download: {
      title: `Download | ${SITE.en}`,
      description: 'Download Bricksync.exe and educational resources such as the UEFN practical guide book.',
    },
    contact: {
      title: `1:1 Consultation | ${SITE.en}`,
      description: 'Contact BrickSync about school or institution adoption, teacher workshops, and partnerships.',
    },
    faq: {
      title: `FAQ | ${SITE.en}`,
      description: 'Frequently asked questions about BrickSync curriculum, materials, class environment, and on-site programs.',
    },
    news: {
      title: `SNS | ${SITE.en}`,
      description: 'Follow BrickSync on YouTube and Instagram.',
    },
    privacy: {
      title: `Privacy Policy | ${SITE.en}`,
      description: 'BrickSync privacy policy.',
    },
    terms: {
      title: `Terms of Service | ${SITE.en}`,
      description: 'BrickSync terms of service.',
    },
  },
};
