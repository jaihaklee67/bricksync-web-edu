import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { BookOpen, Users, Code, Box, CheckCircle2, Sparkles, Award } from 'lucide-react';

export const EducationSection = () => {
  const { lang } = useLanguage();
  const t = content[lang].education;

  const pillarIcons = [BookOpen, Users, Code, Box];

  return (
    <section id="education" className="py-24 relative bg-[#0a1b35] canva-diamond-bg border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <span>{t.sectionNum} // EDUCATION</span>
          </div>
          <div className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold mb-3 border border-pink-500/30">
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-cyan-300 font-medium max-w-3xl leading-relaxed">
            {t.subheadline}
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {t.summary}
          </p>
        </div>

        {/* 4 Educational Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div
                key={pillar.title}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-white/15 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-5 shadow-lg shadow-cyan-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-semibold text-cyan-300 block mb-3">
                    {pillar.titleKo}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>핵심 역량 강화</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slide 7 Real Evidence & Textbook Showcase */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 text-left">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>{t.materialsTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                실제 출판된 교재 및 초등학교/센터 방과후 수업 현장
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
                UEFN 공식 강사 저서
              </span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/15 bg-slate-950/60 p-2 sm:p-4">
            <img
              src="/images/slide_07.png"
              alt="LEGO Fortnite Education with BrickSync"
              className="w-full h-auto rounded-xl object-contain mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {t.materials.map((mat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">PROGRAM 0{i+1}</span>
                <h4 className="text-sm font-bold text-white mb-1">{mat.title}</h4>
                <p className="text-xs text-slate-300">{mat.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
