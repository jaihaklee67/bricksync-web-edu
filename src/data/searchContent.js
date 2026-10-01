// Extra searchable phrases pulled from inside each page's own body content
// (not just its nav label), keyed by the same `view` values used in
// VIEW_TO_PATH (App.jsx) / content.js's nav menu. Lets the navbar search box
// match things like "AX" (which only appears inside CompanyPage's copy) and
// not just exact nav-menu titles.
export const pageContent = {
  ko: {
    about: [
      '브릭싱크 App', '레고 스파이크 + 레고 포트나이트', '브릭싱크 App의 3가지 핵심 구성요소',
      '실시간 피지컬-디지털 브릿지', 'AI 멀티모달 & 안전한 학습', '글로벌 크리에이터 비전',
      '1:1 실시간 매핑', '제로 설치', 'AI 인터랙션', 'COPPA 준수', 'UAI 전문성',
      '미래의 3D 크리에이터', '더 브릭 아일랜드', 'Web Bluetooth',
    ],
    company: [
      'AX', 'AX 대전환 시대', 'Physical AI', 'AI 크리에이티브 인재', 'AI 이노베이터',
      '피지털', 'Phygital', 'BrickSync 3대 핵심 학습 가치', '자율주행', '휴머노이드 로봇',
      '스마트 팩토리', 'Phy+gital 융합형 인재', '공학 인재', '리더쉽을 갖춘 미래형 인재',
    ],
    value: [
      '교육적 가치', '피지컬×디지털 통합 학습', '실전 컴퓨팅 사고력', 'AI 리터러시',
      'STEAM 융합', 'Verse·3D 창작', '안전하고 접근하기 쉬운 에듀테크',
    ],
    vision: [
      'Global Standard', '에픽게임즈 공식 인증', 'Epic Games 공인강사', 'UAI',
      'LEGO Fortnite 공식 검증 커리큘럼', '공식 수료증', 'AI 전문 연구진',
      '웹 기반 실시간 AI 인식', '컴퓨팅 사고력', 'CT', '자체 개발 출판 교재',
      'UEFN 실전가이드', '파트너십', '인증',
    ],
    quickstart: [
      '퀵스타트 가이드', 'Bricksync.exe', '계정 가입 및 로그인', '레고 모델 조립',
      'AI 레슨', '제스처 인식', '음성 인식', '사물 인식', '레고 허브 연결', '블록 코딩',
      '레고 포트나이트 맵 접속',
    ],
    download: [
      '다운로드', 'Bricksync.exe', 'The Brick Island', 'BrickSync Helper',
      'UEFN 실전 가이드북', '포트나이트 아일랜드 퀘스트 가이드',
    ],
    contact: [
      '문의', '학교 커리큘럼', '교사 워크숍', '파트너십', '일반 문의', '상담',
    ],
    faq: [
      'FAQ', '자주 묻는 질문', '교구', '수업환경', 'PC 사양', '수료증', '포트폴리오',
      '영어 수업', '방과후 수업', '출강',
    ],
    home: [
      '학습 로드맵', '레고 포트나이트 캠프', '스파크', 'Spark', '크리에이터', 'Creator',
      '이노베이터', 'Innovator', '마스터', 'Master', '수료율', '재수강률',
    ],
    education: [
      '커리큘럼', '피지컬 AI 레고 포트나이트 캠프', '맞춤형 교육 방식', '모듈형 커리큘럼',
      '전국 출강 서비스', '영어 수업',
    ],
    'uefn-verse': [
      'UEFN', 'Verse', '3D 메타버스', 'AI 메타버스', 'MCP', 'UEFN MCP',
      '피지컬 AI 로보틱스', '게임 크리에이션', '게임 맵',
    ],
    'unreal-engine': [
      'Unreal Engine', '언리얼 엔진', '모션캡처', '인터랙션', '물리 연동',
      '인터랙티브 미디어 아트', '컨피규레이터', '버추얼 휴먼', 'XR', '리얼타임 XR',
    ],
    'interactive-3d': [
      '인터렉티브', '미디어아트', 'LED 아나몰픽', '아나몰픽', '프로젝션 맵핑', '미디어 파사드',
      '센서 기반 인터랙션', '제스처',
    ],
    news: [
      'SNS', '소셜 네트워크', '유튜브', 'Youtube', '인스타그램', 'Instagram', '채널',
    ],
  },
  en: {
    about: [
      'BrickSync App', 'LEGO SPIKE + LEGO FORTNITE', '3 Core Components',
      'Real-time Phygital Bridge', 'AI Multimodal & Safe Learning', 'Global Creator Vision',
      '1:1 Live Mapping', 'Zero Installation', 'AI Interaction', 'COPPA Compliant',
      'UAI Expertise', 'Future 3D Creators', 'The Brick Island', 'Web Bluetooth',
    ],
    company: [
      'AX', 'AX Era', 'Physical AI', 'AI Creative Talent', 'AI Innovators', 'Phygital',
      'Core Learning Values', 'autonomous driving', 'humanoid robots', 'smart factories',
      'Phy+gital Talent', 'Engineering Mind', 'Future Leader',
    ],
    value: [
      'Educational Values', 'Phygital Learning', 'Practical Computational Thinking',
      'AI Literacy', 'STEAM Integration', 'Verse', '3D Creation', 'Safe & Accessible EdTech',
    ],
    vision: [
      'Global Standard', 'Epic Games–Certified', 'Epic Games Authorized Instructor', 'UAI',
      'LEGO Fortnite', 'Official Certificate', 'AI Research Engineers',
      'Real-Time Web-Based AI Recognition', 'Computational Thinking', 'CT',
      'Published Curriculum', 'UEFN Practical Guide Book', 'Partnership', 'Certification',
    ],
    quickstart: [
      'Quick Start Guide', 'Bricksync.exe', 'Sign-up and Login', 'Assembling the LEGO Model',
      'AI Lesson', 'Gesture Recognition', 'Voice Recognition', 'Object Recognition',
      'LEGO Hub', 'Block Coding', 'Lego Fortnite map',
    ],
    download: [
      'Download', 'Bricksync.exe', 'The Brick Island', 'BrickSync Helper',
      'UEFN Practical Guide Book', 'Fortnite Island Quest Manual',
    ],
    contact: [
      'Contact', 'School Curriculum', 'Teacher Workshop', 'Partnership', 'General / Support',
    ],
    faq: [
      'FAQ', 'Materials', 'Class Environment', 'PC specs', 'Certificate', 'Portfolio',
      'English classes', 'After-school programs',
    ],
    home: [
      'Learning Roadmap', 'LEGO Fortnite Camp', 'Spark', 'Creator', 'Innovator', 'Master',
      'Completion Rate', 'Re-enrollment Rate',
    ],
    education: [
      'Curriculum', 'LEGO Fortnite Camp', 'After-School', 'English classes',
    ],
    'uefn-verse': [
      'UEFN', 'Verse', '3D Metaverse', 'AI Metaverse', 'MCP', 'UEFN MCP',
      'Physical AI Robotics', 'Game Creation', 'Game Map',
    ],
    'unreal-engine': [
      'Unreal Engine', 'Motion Capture', 'Interaction', 'Physics', 'Interactive Media Art',
      'Configurator', 'Virtual Human', 'XR', 'Real-Time XR',
    ],
    'interactive-3d': [
      'Interactive', 'Media Art', 'LED Anamorphic', 'Anamorphic', 'Projection Mapping',
      'Media Facade', 'Sensor-Based Interaction', 'Gesture',
    ],
    news: [
      'SNS', 'Social Network', 'YouTube', 'Instagram', 'Channel',
    ],
  },
};
