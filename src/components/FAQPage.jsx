import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

const COPY = {
  ko: {
    categories: [
      {
        id: 'general',
        label: '교육과정 & 일반',
        questions: [
          {
            q: '브릭싱크(BrickSync)는 어떤 교육 프로그램인가요?',
            a: '브릭싱크는 LEGO® SPIKE 하드웨어와 웹 기반 AI 인식 기술(제스처·음성·비전)을 결합하여, UEFN 기반 포트나이트 맵 \'더 브릭 아일랜드\'와 실시간으로 상호작용하는 피지컬 컴퓨팅 & AI 코딩 교육 프로그램입니다. 아이콘 블록 코딩부터 AI 리터러시, Verse 텍스트 코딩까지 연령별 단계에 맞춰 학습할 수 있습니다.',
          },
          {
            q: '코딩이나 레고 조립을 한 번도 안 해본 아이도 수강할 수 있나요?',
            a: '네, 가능합니다. 5~7세 \'스파크(Spark)\' 단계는 글을 몰라도 아이콘 블록만으로 시작할 수 있도록 설계되어 있어, 코딩이나 레고 조립 경험이 전혀 없는 아이도 무리 없이 따라올 수 있습니다.',
          },
          {
            q: '기존의 단순 레고 조립이나 블록 코딩 학원과 어떤 차이가 있나요?',
            a: '일반 레고 조립·블록 코딩 학원은 결과물이 오프라인에만 머무르지만, 브릭싱크는 직접 조립한 레고 브릭의 동작이 웹 브라우저를 거쳐 실시간으로 포트나이트 3D 가상 세계와 동기화됩니다. 피지컬(물리) 세계와 디지털(가상) 세계를 \'하나\'로 연결하는 것이 가장 큰 차별점입니다.',
          },
        ],
      },
      {
        id: 'materials',
        label: '교구 & 수업환경',
        questions: [
          {
            q: '수업을 들으려면 레고 교구를 별도로 구매해야 하나요?',
            a: '학교·기관 정규 출강 수업은 대부분 교구가 비치되어 있어 별도 구매가 필요 없습니다. 다만 온라인 클래스나 가정용 캠프의 경우 LEGO® SPIKE 키트 구매가 필요할 수 있으니, 신청 전 해당 과정의 준비물을 확인해주세요.',
          },
          {
            q: '수업에 필요한 PC 사양은 어떻게 되나요?',
            a: '브릭싱크는 크롬(Chrome) 브라우저의 Web Bluetooth 기능만 지원되면 실행 가능한 웹 앱으로, 별도의 고사양 PC나 프로그램 설치가 필요 없습니다. 다만 UEFN·언리얼 엔진 실습이 포함된 상위 과정은 원활한 3D 렌더링을 위해 일반 사무용 PC 이상의 사양을 권장합니다.',
          },
          {
            q: 'UEFN(포트나이트)이나 Verse 코딩이 초등학생에게 너무 어렵지 않나요?',
            a: '연령별로 난이도를 세분화했습니다. 초등 저학년은 아이콘 블록 코딩 중심으로 UEFN을 체험하고, Verse 텍스트 코딩은 12세 이상 \'이노베이터\' 단계부터 단계적으로 도입되어 무리 없이 학습할 수 있도록 커리큘럼을 설계했습니다.',
          },
        ],
      },
      {
        id: 'curriculum',
        label: '커리큘럼 & 수업진행',
        questions: [
          {
            q: '수업은 어떤 방식으로 진행되나요?',
            a: '레고 브릭 조립 → 아이콘/텍스트 블록 코딩 → 웹 앱을 통한 레고 허브 연결 → 포트나이트 3D 에셋 실시간 구동의 4단계로 진행됩니다. 학교·기관 오프라인 출강과 온라인 동영상 클래스(B2C) 형태를 모두 운영하고 있습니다.',
          },
          {
            q: '과정을 마치면 어떤 수료증이나 포트폴리오를 받게 되나요?',
            a: '전 과정 수료 시 에픽게임즈 포트나이트 공식 로고가 명시된 수료증(Certificate)이 발급되며, 직접 제작한 UEFN 맵·3D 에셋·코딩 프로젝트는 포트폴리오 형태로 보관하여 이후 상위 과정이나 대외 활동에 활용할 수 있습니다.',
          },
        ],
      },
      {
        id: 'institution',
        label: '기관/학교/출강',
        questions: [
          {
            q: '영어 유치원이나 국제학교를 위한 영어 수업도 지원되나요?',
            a: '네, 가능합니다. 브릭싱크는 100% 영어로 진행되는 수업을 지원하며, 영어 유치원 및 국제학교 커리큘럼에 맞춘 맞춤형 영어 수업 진행이 가능합니다.',
          },
          {
            q: '학교 방과후 수업이나 지자체 단체 출강도 가능한가요?',
            a: '네, 전국 초·중학교 방과후 수업, 소프트웨어 미래채움, 창의융합센터 등 지자체·기관 단체 출강을 지원합니다. 지역 제한 없이 에픽게임즈 공인 강사진이 직접 방문하여 수업을 진행합니다.',
          },
        ],
      },
    ],
  },
  en: {
    categories: [
      {
        id: 'general',
        label: 'Curriculum & General',
        questions: [
          {
            q: 'What kind of education program is BrickSync?',
            a: 'BrickSync combines LEGO® SPIKE hardware with web-based AI recognition (gesture, voice, and vision) to enable real-time interaction with "The Brick Island," a UEFN-based Fortnite map. It\'s a physical computing & AI coding program that scales from icon-block coding up to AI literacy and Verse text coding, matched to each age group.',
          },
          {
            q: 'Can a child who has never coded or built with LEGO before take the course?',
            a: 'Yes. Our 5-7 "Spark" level is designed so kids can start with icon blocks alone, no reading required, so children with zero prior coding or LEGO experience can follow along comfortably.',
          },
          {
            q: 'How is this different from a typical LEGO-building or block-coding academy?',
            a: 'A typical LEGO or block-coding academy\'s results stay offline. With BrickSync, the exact motion of the LEGO bricks you build syncs in real time, through the browser, with the 3D world inside Fortnite. Connecting the physical and digital worlds as "one" is what sets us apart.',
          },
        ],
      },
      {
        id: 'materials',
        label: 'Materials & Class Environment',
        questions: [
          {
            q: 'Do I need to buy LEGO materials separately to take the class?',
            a: 'For most on-site classes at partner institutions, materials are already provided, so no separate purchase is needed. For online classes or at-home camps, you may need a LEGO® SPIKE kit — please check the materials list for your course before enrolling.',
          },
          {
            q: 'What PC specs are needed for class?',
            a: 'BrickSync is a web app that only requires a Chrome browser with Web Bluetooth support — no high-end PC or software installation needed. For advanced courses that include UEFN or Unreal Engine work, we recommend at least a standard office-grade PC for smooth 3D rendering.',
          },
          {
            q: "Isn't UEFN (Fortnite) or Verse coding too difficult for elementary schoolers?",
            a: 'We\'ve broken difficulty down by age. Younger elementary students experience UEFN mainly through icon-block coding, while Verse text coding is introduced gradually starting at the 12+ "Innovator" level, keeping the curriculum approachable at every stage.',
          },
        ],
      },
      {
        id: 'curriculum',
        label: 'Curriculum & Class Flow',
        questions: [
          {
            q: 'How are classes structured?',
            a: 'Classes follow four steps: building LEGO bricks → icon/text block coding → connecting the LEGO hub through the web app → driving 3D assets in Fortnite in real time. We run both in-person classes at schools/institutions and online video classes (B2C).',
          },
          {
            q: 'What certificate or portfolio do I get after finishing?',
            a: "Graduates of the full course receive a certificate bearing the official Epic Games Fortnite logo. The UEFN maps, 3D assets, and coding projects students build along the way are kept as a portfolio for later advanced courses or other activities.",
          },
        ],
      },
      {
        id: 'institution',
        label: 'Institutions / Schools / On-site',
        questions: [
          {
            q: 'Do you support English classes for English kindergartens or international schools?',
            a: 'Yes. BrickSync offers classes conducted 100% in English, tailored to the curricula of English kindergartens and international schools.',
          },
          {
            q: 'Can you run after-school programs at schools or group sessions for local government programs?',
            a: 'Yes, we support after-school programs at elementary and middle schools nationwide, as well as group sessions for programs like Software Miraechaeum and Creative Convergence Centers. Our Epic Games–authorized instructors travel on-site anywhere in the country.',
          },
        ],
      },
    ],
  },
};

export const FAQPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const categories = COPY[lang].categories;
  const [activeId, setActiveId] = useState(categories[0].id);
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins bg-white">
      <div className="w-full flex flex-col items-center flex-1">
        <img
          src="/images/faq_banner.png"
          alt="FAQS"
          className="w-full h-auto object-cover select-none pointer-events-none -mt-20 sm:-mt-24 md:-mt-28"
        />

        <div className="w-full flex flex-col items-center px-4 sm:px-8 md:px-12 pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-24">
          <div className="w-full max-w-[1440px]">
            {/* Category tabs */}
            <div className="relative w-full flex flex-wrap sm:flex-nowrap justify-center gap-x-10 gap-y-4 sm:gap-x-16 md:gap-x-20">
              {categories.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    onMouseEnter={() => setActiveId(c.id)}
                    onClick={() => setActiveId(c.id)}
                    className="relative shrink-0 pb-4 sm:pb-5 text-left whitespace-nowrap outline-none"
                  >
                    <span
                      className={`font-bold break-keep transition-colors duration-300 text-[clamp(0.95rem,1.8vw,1.35rem)] ${
                        isActive ? 'text-[#3B82F6]' : 'text-black'
                      }`}
                    >
                      {c.label}
                    </span>
                    {/* Thicker blue active/hover indicator, sits above the thin orange base line */}
                    <span
                      className={`absolute left-0 bottom-0 h-[6px] w-full bg-[#3B82F6] origin-left transition-transform duration-300 ease-out z-10 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </button>
                );
              })}
              {/* Thin orange base line spanning full width, under all tabs */}
              <div className="absolute left-0 bottom-0 w-full h-[4px] bg-[#F97316]" />
            </div>

            {/* Q&A list — every category's panel is stacked in the same grid cell so the
                container height always matches the TALLEST category. This keeps the footer
                pinned at one fixed position regardless of which category (2 vs 3 questions,
                or longer/shorter answers) is currently showing, instead of the page shrinking
                and pulling the footer up. Only the active panel is visible/interactive. */}
            <div className="w-full grid">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`w-full flex flex-col [grid-area:1/1] transition-opacity duration-200 ${
                    cat.id === activeId ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
                  }`}
                  aria-hidden={cat.id !== activeId}
                >
                  {cat.questions.map((item, i) => (
                    <div
                      key={item.q}
                      className={`w-full py-8 sm:py-10 ${i !== cat.questions.length - 1 ? 'border-b-2 border-[#3B82F6]' : ''}`}
                    >
                      <p className="text-[#3B82F6] font-bold leading-snug text-balance break-keep text-[clamp(0.9rem,1.7vw,1.25rem)] mb-3 sm:mb-4">
                        <span className="font-extrabold">Q.</span> {item.q}
                      </p>
                      <p className="text-black leading-relaxed text-balance break-keep text-[clamp(0.85rem,1.5vw,1.15rem)] pl-6 -indent-6">
                        <span className="font-semibold">A:</span> {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
