import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

const COPY = {
  'uefn-verse': {
    ko: {
      title: 'UEFN & Verse',
      desc: 'UEFN(Unreal Editor for Fortnite)과 Verse 스크립팅 기반 커리큘럼을 준비 중입니다.'
    },
    en: {
      title: 'UEFN & Verse',
      desc: 'A curriculum built on UEFN (Unreal Editor for Fortnite) and Verse scripting is coming soon.'
    }
  },
  'unreal-engine': {
    ko: {
      title: 'Unreal Engine',
      desc: '언리얼 엔진 기반 교육 콘텐츠를 준비 중입니다.'
    },
    en: {
      title: 'Unreal Engine',
      desc: 'Unreal Engine based educational content is coming soon.'
    }
  },
  'news': {
    ko: {
      title: '알림 & 뉴스',
      desc: 'BrickSync의 소식과 공지사항을 준비 중입니다.'
    },
    en: {
      title: 'Notifications & News',
      desc: 'BrickSync news and announcements are coming soon.'
    }
  },
  'faq': {
    ko: {
      title: 'FAQ',
      desc: '자주 묻는 질문 페이지를 준비 중입니다.'
    },
    en: {
      title: 'FAQ',
      desc: 'A frequently asked questions page is coming soon.'
    }
  },
  'privacy': {
    ko: {
      title: '개인정보처리방침',
      desc: '개인정보처리방침 페이지를 준비 중입니다.'
    },
    en: {
      title: 'Privacy Policy',
      desc: 'Our privacy policy page is coming soon.'
    }
  },
  'terms': {
    ko: {
      title: '이용약관',
      desc: '이용약관 페이지를 준비 중입니다.'
    },
    en: {
      title: 'Terms of Service',
      desc: 'Our terms of service page is coming soon.'
    }
  }
};

export const ComingSoonPage = ({ pageKey, setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[pageKey][lang];

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">
      <div className="w-full flex-1 flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h1>
        <p className="text-base sm:text-lg text-white/70 max-w-xl">{t.desc}</p>
      </div>
      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
