export const content = {
  ko: {
    nav: {
      menu: [
        {
          title: "브릭싱크 소개",
          view: "company",
          submenu: [
            { title: "교육 이념", view: "company" },
            { title: "파트너십 & 인증", view: "vision" }
          ]
        },
        {
          title: "기술",
          view: "about",
          submenu: [
            { title: "브릭싱크 App", view: "about" },
            { title: "퀵스타트 가이드", view: "quickstart" },
            { title: "다운로드", view: "download" }
          ]
        },
        {
          title: "교육",
          view: "education",
          submenu: [
            { title: "레고 포트나이트", view: "education" },
            { title: "UEFN&Verse", view: "uefn-verse" },
            { title: "언리얼 엔진", view: "unreal-engine" }
          ]
        },
        {
          title: "문의",
          view: "contact",
          submenu: [
            { title: "FAQ", view: "faq" },
            { title: "1:1 상담 문의", view: "contact" }
          ]
        }
      ],
      languageBtn: "Language",
      islandCode: "7603-2493-0825",
      copied: "코드 복사 완료!"
    },
    hero: {
      headlinePart1: "The",
      headlinePart2: "I built",
      headlineLine2: "with my own hands",
      headlineLine3: "comes to life",
      headlineLine4: "in the world of",
      headlineHighlight: "FORTNITE Island!",
      headlineKo: {
        line1: "내 손으로 직접 조립한",
        line2: "가",
        line3: "세상에서",
        line4: "살아 움직입니다!"
      },
      badge: "Unreal Authorized Instructors Project",
      authors: "Author : Cliff Lee & Emma Jeon",
      description: "LEGO SPIKE 교구와 웹 기반 AI(비전·모션·음성), 그리고 언리얼 엔진 기반 UEFN 포트나이트 맵 “The Brick Island”를 실시간으로 결합하여 아이들에게 살아 움직이는 코딩 경험을 제공합니다.",
      btnPlay: "포트나이트 맵 코드 복사",
      btnExplore: "자세히 알아보기",
      stats: [
        { label: "실시간 신호 지연", value: "< 50ms" },
        { label: "설치 필요 없음", value: "Web BLE" },
        { label: "인게임 인터랙티브 미션", value: "8 Coins" },
        { label: "아동 정보 보호", value: "COPPA 100%" }
      ]
    },
    quickStart: {
      title: "Quick Start Guide",
      subtitle: "3단계로 바로 시작하는 브릭싱크 피지컬 코딩",
      steps: [
        {
          num: "01",
          title: "LEGO SPIKE 조립 및 전원 켜기",
          desc: "SPIKE 허브와 모터, 센서를 조립하고 블루투스 버튼을 눌러 페어링 대기 상태로 만듭니다."
        },
        {
          num: "02",
          title: "크롬 브라우저에서 BrickSync 접속",
          desc: "별도 프로그램 설치 없이 크롬(Chrome) 또는 엣지(Edge)에서 Web Bluetooth로 레고를 1초 만에 연결합니다."
        },
        {
          num: "03",
          title: "포트나이트 'The Brick Island' 접속",
          desc: "포트나이트에서 섬 코드 7603-2493-0825를 입력하고 접속하여 블록 코드로 게임 속 어트랙션을 작동시킵니다."
        }
      ]
    },
    download: {
      title: "Download & Resources",
      subtitle: "브릭싱크 런처 및 교육용 자료 다운로드",
      items: [
        {
          name: "BrickSync Helper for Windows",
          tag: "v1.2.0 (Official)",
          desc: "백그라운드 트레이 상주 및 로컬 Python 브릿지 신호 릴레이 런처 프로그램",
          btnText: "Windows용 다운로드 (.exe)",
          isPrimary: true
        },
        {
          name: "UEFN 실전 가이드북 & 커리큘럼",
          tag: "PDF Guide",
          desc: "초중등 학교 및 방과후 창의융합교실을 위한 주차별 수업 계획서와 지도 가이드",
          btnText: "커리큘럼 PDF 다운로드",
          isPrimary: false
        },
        {
          name: "포트나이트 아일랜드 퀘스트 가이드",
          tag: "Map Quest",
          desc: "8개 골드 코인 획득 미션 맵과 레고 조립도 및 블록 코딩 샘플 코드집",
          btnText: "퀘스트 맵 가이드 받기",
          isPrimary: false
        }
      ]
    },
    contact: {
      title: "Contact & Partnership",
      subtitle: "학교/기관 도입 문의 및 강사 연수 신청",
      desc: "브릭싱크는 전국 초·중학교, 소프트웨어 미래채움, 창의융합센터, 코딩 학원과의 교육 협력을 환영합니다. 에픽게임즈 공인 강사진이 직접 방문 연수 및 컨설팅을 제공합니다.",
      form: {
        nameLabel: "성함 / 담당자 직함",
        orgLabel: "소속 학교 / 기관명",
        emailLabel: "이메일 주소",
        phoneLabel: "연락처",
        messageLabel: "문의 내용 (도입 인원, 예상 일정 등)",
        submitBtn: "도입 및 제안서 문의하기",
        successMsg: "문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다!"
      },
      authorsTitle: "프로젝트 총괄 및 UEFN 공인 강사진",
      authors: "Cliff Lee & Emma Jeon",
      authorRole: "Unreal Authorized Instructors (Epic Games UAI)",
      email: "contact@bricksync.org"
    },
    about: {
      sectionNum: "01",
      title: "About BrickSync",
      subtitle: "What is BrickSync?",
      desc1: "BrickSync(브릭싱크)는 LEGO SPIKE 하드웨어와 웹 브라우저 기반의 AI 인식(제스처, 음성, 비전) 기술을 결합하여, UEFN 기반 포트나이트 메타버스 맵 “The Brick Island”와 실시간으로 상호작용하는 혁신적인 피지컬 컴퓨팅 & AI 코딩 교육 플랫폼입니다.",
      desc2: "학생들이 직관적인 아이콘 블록 코딩으로 작성한 알고리즘을 실행하면 게임 속 레고 월드가 즉각 반응하며 보상 코인을 지급합니다. 이를 통해 컴퓨팅 사고력(Computational Thinking)과 창의적 문제 해결 능력을 극대화합니다.",
      coreBadge: "3 Core Components",
      coreTitle: "BrickSync의 3대 핵심 축",
      coreSubtitle: "AI와 실시간 컴퓨팅으로 물리적 놀이와 디지털 세상을 하나로 연결합니다",
      components: [
        {
          num: "01",
          title: "Real-time Phygital Bridge",
          titleKo: "실시간 피지컬-디지털 브릿지",
          points: [
            "1:1 Live Mapping: LEGO SPIKE 센서 및 모터를 UEFN 3D 월드에 오차 없이 1:1 실시간 매핑",
            "Zero Installation: 크롬/엣지 브라우저의 Web Bluetooth(BLE)를 통해 별도 드라이버 설치 없이 즉시 실행"
          ],
          tag: "Web Bluetooth & UEFN"
        },
        {
          num: "02",
          title: "AI Multimodal & Safe Learning",
          titleKo: "AI 멀티모달 & 안전한 아동 학습",
          points: [
            "AI Interaction: 브라우저 기반 비전(제스처, 사물) 및 음성 인식을 포트나이트 게임 보상과 유기적 연동",
            "COPPA Compliant: 개인정보(PII) 수집 없이 순수 물리 이벤트 신호만 전송하여 아동 프라이버시 100% 보호"
          ],
          tag: "Computer Vision & Audio AI"
        },
        {
          num: "03",
          title: "Global Creator Vision",
          titleKo: "글로벌 3D 크리에이터 비전",
          points: [
            "UAI Expertise: 에픽게임즈 공인 언리얼 강사진(UAI)이 직접 설계한 검증된 레고-포트나이트 디지털 트윈 교육",
            "Future 3D Creators: 전 세계 학생들이 직접 3D 에셋을 설계하고 인터랙션을 구축하는 미래형 창작자로 성장"
          ],
          tag: "Unreal Authorized Instructor"
        }
      ]
    },
    architecture: {
      sectionNum: "02",
      title: "BrickSync Architecture",
      subtitle: "4-Tier Real-Time Data Pipeline",
      description: "시스템은 BrickSync.exe를 통해 시스템 트레이에 상주하며 웹 앱을 자동 실행합니다. LEGO SPIKE 하드웨어는 웹 애플리케이션과 BLE 신호를 주고받으며 블록 코딩 스크립트를 해석합니다. 로컬 Python 브릿지 서버는 웹 명령을 즉각적인 가상 입력으로 변환하고, 최종적으로 UEFN 포트나이트 맵이 Verse 로직을 실행하여 3D 에셋을 실시간 가동합니다.",
      interactiveTitle: "인터랙티브 파이프라인 시뮬레이터",
      interactiveHint: "버튼을 클릭하여 레고 센서에서 포트나이트 3D 월드로 이어지는 실시간 신호 흐름을 확인해보세요.",
      testSignalBtn: "동기화 신호(Sync Signal) 전송 테스트",
      nodes: [
        {
          id: "step1",
          name: "BrickSync.exe & LEGO SPIKE",
          subtitle: "Physical Hardware & Launcher",
          tech: "BLE Hub & Sensors / Motors",
          desc: "BrickSync.exe가 브라우저 자동 실행 및 백그라운드 관리. LEGO SPIKE 허브와 센서/모터가 2-way BLE 신호 송수신."
        },
        {
          id: "step2",
          name: "Web Application",
          subtitle: "Chrome / Edge Web Browser",
          tech: "Web Bluetooth & Block Engine",
          desc: "블록 코드 인터프리터, 학습 진도 데이터 관리, Web BLE 통신, 브릿지 서버와의 초고속 WebSocket 연결."
        },
        {
          id: "step3",
          name: "Local Bridge Server",
          subtitle: "Python Relay Engine",
          tech: "Python WebSocket & Input Relay",
          desc: "웹 앱에서 수신된 알고리즘 명령을 시스템 키보드/컨트롤러 가상 이벤트로 초고속 변환 전달."
        },
        {
          id: "step4",
          name: "LEGO Fortnite Map",
          subtitle: "UEFN & Verse Scripting",
          tech: "Verse Runtime & 3D Interactive Assets",
          desc: "Verse 코드가 가상 입력을 받아 포트나이트 월드 내 잠수함, 관람차, 레이싱카 3D 에셋을 실시간 구동 및 코인 보상."
        }
      ]
    },
    ux: {
      sectionNum: "03",
      title: "BrickSync UX",
      subtitle: "4단계 몰입형 학습 경험 (Learning Journey)",
      steps: [
        {
          step: "01",
          title: "LEGO Block Assembly",
          titleKo: "레고 블록 조립 및 하드웨어 구성",
          desc: "허브, 모터, 카메라 센서, 라이트 모듈을 활용하여 실제 레고 SPIKE 키트를 창의적으로 조립합니다.",
          badge: "Physical Assembly"
        },
        {
          step: "02",
          title: "Block Code Mission",
          titleKo: "블록 코딩 미션 (Try Missions)",
          desc: "조립된 레고에 동작과 기능을 부여하는 블록 코드를 작성합니다. “Try Missions”를 통해 포트나이트 맵의 에셋을 조작하는 알고리즘을 구성합니다.",
          badge: "Visual Block Coding"
        },
        {
          step: "03",
          title: "AI Learning Mission",
          titleKo: "AI 멀티모달 학습 미션",
          desc: "웹캠을 통한 제스처/사물 인식과 음성 명령을 결합하여, 포트나이트 속 레고 오브젝트에 스마트한 AI 제어 명령을 전달합니다.",
          badge: "AI Vision & Voice"
        },
        {
          step: "04",
          title: "Fortnite Map: The Brick Island",
          titleKo: "포트나이트 맵 연동 & 8코인 획득",
          desc: "포트나이트 전용 맵 “The Brick Island”를 실행하여 브릭싱크와 연결합니다. 모든 미션을 성공적으로 완수하여 8개의 황금 코인을 획득합니다!",
          badge: "UEFN Metaverse Quest"
        }
      ]
    },
    education: {
      sectionNum: "04",
      title: "LEGO Fortnite Education",
      badge: "Korea Launch -> Global Expansion",
      headline: "한국에서의 성공적 런칭, 글로벌 에듀테크로의 도약!",
      subheadline: "에픽게임즈 공인 언리얼 강사(UAI) Cliff Lee & Emma Jeon이 이끄는 국내 최초 레고 포트나이트 유아/초등 교육",
      summary: "BrickSync는 물리적 레고와 포트나이트 디지털 에셋을 실시간 “ONE(하나)”으로 연결하여, 어린이들에게 직관적이고 몰입도 높은 차세대 STEAM 학습 경험을 선사합니다.",
      pillars: [
        {
          title: "English & Storytelling",
          titleKo: "영어 & 스토리텔링",
          desc: "직접 조립한 레고 창작물과 포트나이트 속 모험을 영어로 표현하고 발표하는 창의적 스토리텔링"
        },
        {
          title: "Teamwork & Engineering",
          titleKo: "팀워크 & 엔지니어링",
          desc: "친구들과 함께 실시간으로 작동하는 스마트 레고 타운과 인게임 인터랙션을 협동하여 빌드"
        },
        {
          title: "Computer Science",
          titleKo: "컴퓨터 사이언스",
          desc: "논리적 블록 코딩, 이벤트 드리븐 구조, 디버깅을 통한 핵심 컴퓨팅 사고력 체득"
        },
        {
          title: "Metaverse Digital Twin",
          titleKo: "메타버스 디지털 트윈",
          desc: "현실의 물리적 레고 조립체가 포트나이트 3D 가상 세계에 1:1로 미러링되는 디지털 트윈 경험"
        }
      ],
      materialsTitle: "공식 교재 및 실제 방과후 수업 현장",
      materials: [
        { title: "UEFN 실전 가이드북", desc: "초보자도 쉽게 따라하는 언리얼 엔진 UEFN 게임 제작" },
        { title: "LEGO로 만나는 코딩 세상", desc: "놀이로 배우는 레고 포트나이트 유초등 코딩 커리큘럼" },
        { title: "방과후 학교 프로젝트", desc: "초등학교 및 창의융합교실에서의 실제 체험 수업 운영" }
      ]
    },
    map: {
      sectionNum: "05",
      title: "Map : The Brick Island",
      subtitle: "UEFN 기반 포트나이트 공식 교육 전용 섬",
      islandCode: "7603-2493-0825",
      playText: "포트나이트에서 아일랜드 코드로 바로 플레이하세요",
      desc: "The Brick Island는 3개의 뚜렷한 월드 존(Beach, Amusement Park, Racing)과 4개의 테마 동굴로 구성되어 있습니다. 플레이어는 레고 스타일 탈것을 타고 동굴을 탐험하며 각 어트랙션을 방문하고, 브릭싱크 코딩으로 에셋을 작동시킵니다.",
      zonesTitle: "3 Distinct World Zones & Attractions",
      zones: [
        {
          id: "beach",
          name: "Beach Zone",
          nameKo: "비치 존 (해변 탐험)",
          attractions: [
            { name: "SUBMARINE", nameKo: "해저 탐험 잠수함", desc: "심해로 잠수하여 해양 생태계와 보물을 탐사하는 잠수함" },
            { name: "BOAT", nameKo: "탐험 보트", desc: "해안가를 따라 이동하며 브릭 아일랜드 주변을 탐색하는 쾌속정" }
          ]
        },
        {
          id: "amusement",
          name: "Amusement Park Zone",
          nameKo: "어뮤즈먼트 파크 존 (놀이공원)",
          attractions: [
            { name: "FERRIS WHEEL", nameKo: "대관람차", desc: "레고 SPIKE 모터 회전 속도 코딩으로 실시간 회전하는 거대 관람차" },
            { name: "MAGIC SWING", nameKo: "매직 스윙", desc: "가속도 센서와 연동되어 하늘 높이 스윙하는 인터랙티브 놀이기구" },
            { name: "CABIN", nameKo: "휴식 오두막", desc: "플레이어들이 모여 미션을 점검하고 보상을 확인하는 아늑한 쉼터" },
            { name: "MONSTER ALARM", nameKo: "몬스터 알람", desc: "AI 비전 센서로 움직임을 감지해 침입자를 경고하는 스마트 알람" }
          ]
        },
        {
          id: "racing",
          name: "Racing Zone",
          nameKo: "레이싱 존 (스피드 트랙)",
          attractions: [
            { name: "CAVE CAR", nameKo: "동굴 레이싱 카", desc: "동굴 터널 코스를 질주하며 장애물을 돌파하는 하이퍼 레고 카" },
            { name: "SIREN", nameKo: "레이싱 스타트 사이렌", desc: "빛과 소리 센서로 출발 신호를 알리고 랩타임을 측정하는 사이렌" }
          ]
        }
      ]
    },
    vision: {
      sectionNum: "06",
      title: "Vision & Roadmap",
      badge: "BrickSync + LEGO",
      headline: "KEY BENEFITS & FUTURE VISION",
      subtitle: "글로벌 에듀테크 생태계를 혁신하는 3가지 시너지",
      benefits: [
        {
          num: "01",
          title: "Maximizing Physical Brick Engagement (Phygital Synergy)",
          titleKo: "물리적 레고 블록의 가치 극대화 (피지털 시너지)",
          points: [
            "Empowering Physical Play: 브릭싱크는 레고 SPIKE 하드웨어를 UEFN을 직접 조작하는 실시간 컨트롤러로 진화시킵니다.",
            "Extended Playtime & Utility: 학생들이 손으로 만지는 레고의 촉감과 디지털 화면의 즉각적 피드백이 맞물려 물리적 레고 세트의 활용도와 지속적 몰입감을 극대화합니다."
          ]
        },
        {
          num: "02",
          title: "Elevating Brand Leadership in AI & Metaverse Education",
          titleKo: "AI 및 메타버스 교육 분야의 글로벌 브랜드 리더십 확보",
          points: [
            "Next-Gen AI Standard: 웹 기반 AI 비전, 음성 인식, 3D 디지털 트윈 기술을 결합하여 레고 에듀케이션 키트를 차세대 AI 컴퓨팅 교육의 글로벌 표준으로 포지셔닝합니다.",
            "Future-Ready Curriculum: 유초등 학생들이 단순 게임 소비자를 넘어 능동적인 3D 메타버스 크리에이터로 성장하는 미래형 커리큘럼을 제공합니다."
          ]
        },
        {
          num: "03",
          title: "Brand & Marketing Synergy",
          titleKo: "LEGO × Epic Games의 글로벌 브랜드 마케팅 시너지",
          points: [
            "Creating LEGO × Epic Games Synergy in EdTech: 전 세계적으로 사랑받는 두 거대 브랜드(LEGO와 Epic Games)의 가치를 연결하여 에듀테크 산업에서 독보적인 교육 네트워크를 형성합니다.",
            "UGC Creator Generation: 두 브랜드 IP를 활용한 방대한 양의 사용자 제작 콘텐츠(UGC)와 차세대 크리에이터 생태계를 촉진합니다."
          ]
        }
      ]
    },
    footer: {
      description: "BrickSync is an innovative Phygital AI computing platform connecting LEGO SPIKE with UEFN Fortnite The Brick Island.",
      authorsTitle: "Project Leads & Unreal Authorized Instructors",
      authors: "Cliff Lee & Emma Jeon",
      domain: "www.bricksync.org",
      copyright: "© 2026 BrickSync. All rights reserved. LEGO® and Fortnite® are trademarks of their respective owners."
    }
  },
  en: {
    nav: {
      menu: [
        {
          title: "About",
          view: "company",
          submenu: [
            { title: "Education Philosophy", view: "company" },
            { title: "Partnerships & Certifications", view: "vision" }
          ]
        },
        {
          title: "Technology",
          view: "about",
          submenu: [
            { title: "BrickSyncApp", view: "about" },
            { title: "QuickStart", view: "quickstart" },
            { title: "Download", view: "download" }
          ]
        },
        {
          title: "Education",
          view: "education",
          submenu: [
            { title: "LEGO Fortnite", view: "education" },
            { title: "UEFN&Verse", view: "uefn-verse" },
            { title: "Unreal Engine", view: "unreal-engine" }
          ]
        },
        {
          title: "Contact",
          view: "contact",
          submenu: [
            { title: "FAQ", view: "faq" },
            { title: "1:1 Consultation", view: "contact" }
          ]
        }
      ],
      languageBtn: "Language",
      islandCode: "7603-2493-0825",
      copied: "Code Copied!"
    },
    hero: {
      headlinePart1: "The",
      headlinePart2: "I built",
      headlineLine2: "with my own hands",
      headlineLine3: "comes to life",
      headlineLine4: "in the world of",
      headlineHighlight: "FORTNITE Island!",
      headlineKo: {
        line1: "The LEGO spike I built",
        line2: "with my own hands",
        line3: "comes to life in the world of",
        line4: "LEGO FORTNITE Island!"
      },
      badge: "Unreal Authorized Instructors Project",
      authors: "Author : Cliff Lee & Emma Jeon",
      description: "An innovative physical computing & AI coding platform combining LEGO SPIKE hardware with web-based AI recognition and the UEFN Fortnite map \"The Brick Island\".",
      btnPlay: "Copy Fortnite Island Code",
      btnExplore: "Explore Architecture",
      stats: [
        { label: "Real-time Latency", value: "< 50ms" },
        { label: "Zero Driver Install", value: "Web BLE" },
        { label: "Interactive Missions", value: "8 Coins" },
        { label: "Child Privacy", value: "COPPA 100%" }
      ]
    },
    quickStart: {
      title: "Quick Start Guide",
      subtitle: "Get Started in 3 Simple Steps",
      steps: [
        {
          num: "01",
          title: "Assemble LEGO SPIKE & Power On",
          desc: "Assemble your SPIKE hub, motors, and sensors. Turn on Bluetooth pairing mode."
        },
        {
          num: "02",
          title: "Open BrickSync on Chrome",
          desc: "No installation needed. Connect to LEGO SPIKE instantly via Web Bluetooth."
        },
        {
          num: "03",
          title: "Launch Fortnite 'The Brick Island'",
          desc: "Enter Island Code 7603-2493-0825 in Fortnite and trigger in-game assets with code!"
        }
      ]
    },
    download: {
      title: "Download & Resources",
      subtitle: "Official Launchers & Teaching Materials",
      items: [
        {
          name: "BrickSync Helper for Windows",
          tag: "v1.2.0 (Official)",
          desc: "Background system tray helper and Python bridge relay engine.",
          btnText: "Download for Windows (.exe)",
          isPrimary: true
        },
        {
          name: "UEFN Practical Guide Book & Syllabus",
          tag: "PDF Guide",
          desc: "Weekly curriculum and teacher lesson plans for schools and centers.",
          btnText: "Download Curriculum PDF",
          isPrimary: false
        },
        {
          name: "Fortnite Island Quest Manual",
          tag: "Map Quest",
          desc: "8 Gold Coin mission guide, LEGO assembly diagrams, and sample block code.",
          btnText: "Get Quest Manual",
          isPrimary: false
        }
      ]
    },
    contact: {
      title: "Contact & Partnership",
      subtitle: "Inquiries for School Adoption & Educator Workshops",
      desc: "BrickSync welcomes educational partnerships with schools, STEAM centers, and coding academies worldwide. Led by Unreal Authorized Instructors.",
      form: {
        nameLabel: "Your Name / Title",
        orgLabel: "School / Organization Name",
        emailLabel: "Email Address",
        phoneLabel: "Phone Number",
        messageLabel: "Message (Expected learners, schedule, etc.)",
        submitBtn: "Send Inquiry & Request Proposal",
        successMsg: "Thank you! Your inquiry has been submitted. We will get back to you shortly!"
      },
      authorsTitle: "Project Leads & Unreal Authorized Instructors",
      authors: "Cliff Lee & Emma Jeon",
      authorRole: "Unreal Authorized Instructors (Epic Games UAI)",
      email: "contact@bricksync.org"
    },
    about: {
      sectionNum: "01",
      title: "About BrickSync",
      subtitle: "What is BrickSync?",
      desc1: "BrickSync is an innovative physical computing & AI coding education platform that combines LEGO SPIKE hardware with web-based AI recognition (gesture, voice, and vision) technologies to enable real-time interaction with the UEFN-based Fortnite map, \"The Brick Island\".",
      desc2: "When students execute algorithms created through intuitive icon-block coding, the in-game LEGO world responds in real time and rewards them with immediate coins, delivering a next-generation immersive learning experience that enhances computational thinking.",
      coreBadge: "3 Core Components",
      coreTitle: "BrickSync 3 Core Components",
      coreSubtitle: "Connecting Physical Play and Digital Worlds through AI & Real-Time Computing",
      components: [
        {
          num: "01",
          title: "Real-time Phygital Bridge",
          titleKo: "Real-time Phygital Bridge",
          points: [
            "1:1 Live Mapping: Connects LEGO SPIKE sensors and motors directly to UEFN 3D worlds.",
            "Zero Installation: Web Bluetooth via Chrome browser enables instant deployment without drivers or apps."
          ],
          tag: "Web Bluetooth & UEFN"
        },
        {
          num: "02",
          title: "AI Multimodal & Safe Learning",
          titleKo: "AI Multimodal & Safe Learning",
          points: [
            "AI Interaction: Integrates browser-based vision (gestures, objects) and voice control with gamified rewards.",
            "COPPA Compliant: Sends only physical event data without personal info (PII) for total child privacy."
          ],
          tag: "Computer Vision & Audio AI"
        },
        {
          num: "03",
          title: "Global Creator Vision",
          titleKo: "Global Creator Vision",
          points: [
            "UAI Expertise: Led by Unreal Authorized Instructors to deliver digital twin education through LEGO and Fortnite.",
            "Future 3D Creators: Empowers global students to build assets and evolve into 3D creators."
          ],
          tag: "Unreal Authorized Instructor"
        }
      ]
    },
    architecture: {
      sectionNum: "02",
      title: "BrickSync Architecture",
      subtitle: "4-Tier Real-Time Data Pipeline",
      description: "The system executes BrickSync.exe to auto-launch a web app while staying resident in the tray. LEGO Spike hardware exchanges BLE signals with the web application, which parses block-coding scripts and manages learning data. A local Python bridge server translates these web commands into virtual keyboard inputs. Finally, the UEFN Fortnite map receives these inputs and executes Verse logic to activate in-game 3D assets in real time.",
      interactiveTitle: "Interactive Pipeline Simulator",
      interactiveHint: "Click the button to simulate a live sync signal traveling from the LEGO Spike kit to the UEFN Fortnite world!",
      testSignalBtn: "Transmit Test Sync Signal",
      nodes: [
        {
          id: "step1",
          name: "BrickSync.exe & LEGO SPIKE",
          subtitle: "Physical Hardware & Launcher",
          tech: "BLE Hub & Sensors / Motors",
          desc: "BrickSync.exe startup management & system tray residency. LEGO Spike hardware exchanges BLE signals."
        },
        {
          id: "step2",
          name: "Web Application",
          subtitle: "Chrome / Edge Web Browser",
          tech: "Web Bluetooth & Block Engine",
          desc: "Block code interpretation, learning data storage, LEGO Spike BLE connection & real-time bridge communication."
        },
        {
          id: "step3",
          name: "Local Bridge Server",
          subtitle: "Python Relay Engine",
          tech: "Python WebSocket & Input Relay",
          desc: "Local signal relay Server translates web app commands into instantaneous virtual keyboard/controller inputs."
        },
        {
          id: "step4",
          name: "LEGO Fortnite Map",
          subtitle: "UEFN & Verse Scripting",
          tech: "Verse Runtime & 3D Interactive Assets",
          desc: "Verse Conversion Input -> Controller Execution -> Real-time 3D Asset Activation & Coin Rewards."
        }
      ]
    },
    ux: {
      sectionNum: "03",
      title: "BrickSync UX",
      subtitle: "4-Step Immersive Learning Journey",
      steps: [
        {
          step: "01",
          title: "LEGO Block Assembly",
          titleKo: "LEGO Block Assembly",
          desc: "Assemble the LEGO SPIKE kit using the hub, motor, camera sensor, and light module.",
          badge: "Physical Assembly"
        },
        {
          step: "02",
          title: "Block Code Mission",
          titleKo: "Block Code Mission",
          desc: "Connect code blocks to build a system that gives movement and functionality to the assembled LEGO build. Write code through \"Try Missions\" to trigger and operate assets on the Fortnite map.",
          badge: "Visual Block Coding"
        },
        {
          step: "03",
          title: "AI Learning Mission",
          titleKo: "AI Learning Mission",
          desc: "Deliver block code commands to Fortnite assets using voice inputs or by recognizing gestures and objects through the camera.",
          badge: "AI Vision & Voice"
        },
        {
          step: "04",
          title: "Fortnite Map: The Brick Island",
          titleKo: "Fortnite Map: The Brick Island",
          desc: "Launch the Fortnite map \"The Brick Island\" and link the commands designed in BrickSync to in-game assets. Successfully complete all missions to collect all 8 coins and win!",
          badge: "UEFN Metaverse Quest"
        }
      ]
    },
    education: {
      sectionNum: "04",
      title: "LEGO Fortnite Education",
      badge: "Korea Launch -> Global Expansion",
      headline: "A Successful Launch in Korea, Expanding to Global Education!",
      subheadline: "Pioneering LEGO Fortnite Early Childhood Education in Korea Led by Unreal Authorized Instructors Cliff Lee & Emma Jeon",
      summary: "BrickSync connects physical LEGO and Fortnite assets in real time as \"ONE\", providing young children with an intuitive and immersive STEAM learning experience.",
      pillars: [
        {
          title: "English & Storytelling",
          titleKo: "English & Storytelling",
          desc: "Creative presentation of LEGO builds in English."
        },
        {
          title: "Teamwork & Engineering",
          titleKo: "Teamwork & Engineering",
          desc: "Collaborative building of interactive LEGO smart towns."
        },
        {
          title: "Computer Science",
          titleKo: "Computer Science",
          desc: "Logical block coding and problem-solving skills."
        },
        {
          title: "Metaverse Digital Twin",
          titleKo: "Metaverse Digital Twin",
          desc: "Real-world physical builds mirrored in LEGO Fortnite."
        }
      ],
      materialsTitle: "Official Textbooks & Active After-School Classes",
      materials: [
        { title: "UEFN Practical Guide Book", desc: "Comprehensive guide for UEFN game development and mechanics." },
        { title: "LEGO Coding World Curriculum", desc: "Early childhood STEAM curriculum fusing physical play with virtual coding." },
        { title: "After-School Program Showcase", desc: "Real-world classrooms across elementary schools and STEAM centers." }
      ]
    },
    map: {
      sectionNum: "05",
      title: "Map : The Brick Island",
      subtitle: "Official UEFN Fortnite Educational Map",
      islandCode: "7603-2493-0825",
      playText: "Play it now in Fortnite using Island Code",
      desc: "The Brick Island features 3 distinct world zones and a network of 4 unique Caves (Boats, Submarines, Amusement parks, and Racing). Players navigate these caves riding LEGO-styled vehicles to explore destinations and trigger assets via BrickSync.",
      zonesTitle: "3 Distinct World Zones & Attractions",
      zones: [
        {
          id: "beach",
          name: "Beach Zone",
          nameKo: "Beach Zone",
          attractions: [
            { name: "SUBMARINE", nameKo: "SUBMARINE", desc: "Dive into deep underwater caves to explore marine ecosystems and search for lost treasures." },
            { name: "BOAT", nameKo: "BOAT", desc: "Speed across crystal coastal waters to scout out new island missions." }
          ]
        },
        {
          id: "amusement",
          name: "Amusement Park Zone",
          nameKo: "Amusement Park Zone",
          attractions: [
            { name: "FERRIS WHEEL", nameKo: "FERRIS WHEEL", desc: "Giant ferris wheel spinning in real-time mapped to LEGO SPIKE motor rotation speed." },
            { name: "MAGIC SWING", nameKo: "MAGIC SWING", desc: "Interactive swing attraction responding to accelerometer and gesture sensors." },
            { name: "CABIN", nameKo: "CABIN", desc: "Cozy clubhouse for students to review mission logs and earn bonus points." },
            { name: "MONSTER ALARM", nameKo: "MONSTER ALARM", desc: "AI vision security system alerting players when surprise guests approach." }
          ]
        },
        {
          id: "racing",
          name: "Racing Zone",
          nameKo: "Racing Zone",
          attractions: [
            { name: "CAVE CAR", nameKo: "CAVE CAR", desc: "High-speed LEGO vehicle navigating subterranean obstacle courses." },
            { name: "SIREN", nameKo: "SIREN", desc: "Automated light & sound race starter calculating real-time lap times." }
          ]
        }
      ]
    },
    vision: {
      sectionNum: "06",
      title: "Vision & Roadmap",
      badge: "BrickSync + LEGO",
      headline: "KEY BENEFITS & FUTURE VISION",
      subtitle: "3 Strategic Pillars Empowering the Global EdTech Ecosystem",
      benefits: [
        {
          num: "01",
          title: "Maximizing Physical Brick Engagement (Phygital Synergy)",
          titleKo: "Maximizing Physical Brick Engagement",
          points: [
            "Empowering Physical Play: BrickSync transforms LEGO SPIKE hardware into an interactive real-time controller for UEFN (Unreal Editor for Fortnite).",
            "Extended Playtime & Utility: Students stay hands-on with physical LEGO bricks while experiencing immediate digital responsiveness, driving sustained interest and higher usage of physical LEGO sets."
          ]
        },
        {
          num: "02",
          title: "Elevating Brand Leadership in AI & Metaverse Education",
          titleKo: "Brand Leadership in AI & Metaverse Education",
          points: [
            "Next-Gen AI Standard: By integrating BrickSync's web-based AI vision, voice recognition, and 3D digital twin technologies, LEGO Education kits are positioned as the global standard for cutting-edge AI and computational thinking education.",
            "Future-Ready Curriculum: Enhances LEGO's educational portfolio with a next-generation platform that empowers young learners to become active 3D creators."
          ]
        },
        {
          num: "03",
          title: "Brand & Marketing Synergy",
          titleKo: "LEGO x Epic Games Brand Synergy",
          points: [
            "Creating LEGO × Epic Games Synergy in EdTech: BrickSync bridges the values of two globally beloved brands, aiming to help both leaders build a high-value educational network together in the EdTech sector.",
            "UGC Creator Generation: As this collaboration empowers more future creators, it will drive the generation of vast amounts of user-created content featuring the LEGO × Epic Games IP."
          ]
        }
      ]
    },
    footer: {
      description: "BrickSync is an innovative Phygital AI computing platform connecting LEGO SPIKE with UEFN Fortnite The Brick Island.",
      authorsTitle: "Project Leads & Unreal Authorized Instructors",
      authors: "Cliff Lee & Emma Jeon",
      domain: "www.bricksync.org",
      copyright: "© 2026 BrickSync. All rights reserved. LEGO® and Fortnite® are trademarks of their respective owners."
    }
  }
};
