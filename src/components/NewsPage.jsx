import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from './Footer';

const YOUTUBE_CHANNEL_URL = 'https://youtube.com/@BrickSync_PhysicalAI';
const YOUTUBE_UPLOADS_PLAYLIST_ID = 'UUCJh961ZCzJJ2-DzrHsf_3g'; // BrickSync channel's uploads playlist — always reflects the latest videos automatically
const INSTAGRAM_PROFILE_URL = 'https://instagram.com/brick_sync';
const INSTAGRAM_POST_URLS = [
  'https://www.instagram.com/brick_sync/p/DdVGrTbD1-I/',
  'https://www.instagram.com/brick_sync/p/DdVGGckD9Yk/',
];

const YouTubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.3 3.5-6.3 3.5Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const COPY = {
  ko: {
    title: '알림 & 뉴스',
    subtitle: '브릭싱크의 최신 유튜브 영상과 인스타그램 소식을 확인하세요',
    ytTitle: '최신 유튜브 영상',
    ytDesc: '레고 스파이크, UEFN, 언리얼 엔진 교육 현장을 영상으로 만나보세요.',
    ytCta: '채널 구독하기',
    igTitle: '최신 인스타그램 게시물',
    igDesc: '브릭싱크의 교육 현장과 최신 소식을 인스타그램에서 확인하세요.',
    igCta: '팔로우하기',
    igLoading: '게시물을 불러오는 중...',
  },
  en: {
    title: 'Notifications & News',
    subtitle: "Check out BrickSync's latest YouTube videos and Instagram updates",
    ytTitle: 'Latest YouTube Videos',
    ytDesc: 'Watch our LEGO SPIKE, UEFN, and Unreal Engine education sessions in action.',
    ytCta: 'Subscribe on YouTube',
    igTitle: 'Latest Instagram Posts',
    igDesc: "See BrickSync's classrooms and latest updates on Instagram.",
    igCta: 'Follow us',
    igLoading: 'Loading posts...',
  },
};

const InstagramEmbed = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    const process = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };
    if (window.instgrm) {
      process();
    } else {
      const existing = document.getElementById('instagram-embed-script');
      if (!existing) {
        const script = document.createElement('script');
        script.id = 'instagram-embed-script';
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.onload = process;
        document.body.appendChild(script);
      } else {
        existing.addEventListener('load', process);
      }
    }
  }, [url]);

  return (
    <div ref={ref} className="w-full flex justify-center overflow-hidden rounded-2xl bg-white" style={{ minHeight: 600 }}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ width: '100%', margin: 0 }}
      />
    </div>
  );
};

export const NewsPage = ({ setCurrentView }) => {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">
      <div className="w-full flex flex-col items-center flex-1 py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12">
        <h1 className="text-white font-extrabold leading-tight break-keep text-center text-[clamp(1.4rem,4.2vw,3rem)] mb-2 sm:mb-3">
          {t.title}
        </h1>
        <p className="text-white/80 text-balance break-keep text-center max-w-2xl text-[clamp(0.8rem,1.6vw,1.15rem)] mb-12 sm:mb-16">
          {t.subtitle}
        </p>

        {/* YouTube Section */}
        <section className="w-full max-w-[1200px] flex flex-col items-center mb-16 sm:mb-24">
          <div className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5 sm:mb-6">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
              <h2 className="text-white font-bold flex items-center gap-2 text-[clamp(1.05rem,2vw,1.6rem)]">
                <YouTubeIcon className="w-[1em] h-[1em] text-red-500 shrink-0" />
                {t.ytTitle}
              </h2>
              <p className="text-white/70 text-balance break-keep text-[clamp(0.75rem,1.2vw,0.95rem)]">
                {t.ytDesc}
              </p>
            </div>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 shrink-0 bg-[#FF0033] hover:bg-[#e6002e] transition-colors text-white font-semibold rounded-full px-5 py-2.5 text-[clamp(0.75rem,1.1vw,0.9rem)] whitespace-nowrap"
            >
              <YouTubeIcon className="w-[1.1em] h-[1.1em]" />
              {t.ytCta}
            </a>
          </div>

          <div className="w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black/40">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/videoseries?list=${YOUTUBE_UPLOADS_PLAYLIST_ID}`}
              title="BrickSync YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Instagram Section */}
        <section className="w-full max-w-[1200px] flex flex-col items-center pb-8 sm:pb-12">
          <div className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5 sm:mb-6">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
              <h2 className="text-white font-bold flex items-center gap-2 text-[clamp(1.05rem,2vw,1.6rem)]">
                <InstagramIcon className="w-[1em] h-[1em] text-pink-400 shrink-0" />
                {t.igTitle}
              </h2>
              <p className="text-white/70 text-balance break-keep text-[clamp(0.75rem,1.2vw,0.95rem)]">
                {t.igDesc}
              </p>
            </div>
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 shrink-0 bg-gradient-to-tr from-[#FEDA75] via-[#D62976] to-[#4F5BD5] hover:opacity-90 transition-opacity text-white font-semibold rounded-full px-5 py-2.5 text-[clamp(0.75rem,1.1vw,0.9rem)] whitespace-nowrap"
            >
              <InstagramIcon className="w-[1.1em] h-[1.1em]" />
              {t.igCta}
            </a>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {INSTAGRAM_POST_URLS.map((url) => (
              <InstagramEmbed key={url} url={url} />
            ))}
          </div>
        </section>
      </div>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
