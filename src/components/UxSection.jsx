import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Wrench, Code2, Bot, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';

export const UxSection = () => {
  const { lang } = useLanguage();
  const t = content[lang].ux;
  const [selectedStep, setSelectedStep] = useState(0);

  const stepIcons = [Wrench, Code2, Bot, Trophy];
  const stepColors = ['border-cyan-400', 'border-yellow-400', 'border-pink-400', 'border-emerald-400'];

  return (
    <section id="ux" className="py-24 relative canva-diamond-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <span>{t.sectionNum} // UX JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-cyan-300 font-medium max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Step Cards Grid (Slide 6 Content) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            const isCurrent = selectedStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setSelectedStep(idx)}
                className={`cursor-pointer glass-card glass-card-hover p-6 rounded-3xl border text-left flex flex-col justify-between transition-all ${
                  isCurrent ? 'border-cyan-400 bg-white/15 shadow-xl shadow-cyan-500/20 scale-102' : 'border-white/15'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-cyan-400 font-mono">
                      {step.step}
                    </span>
                    <div className={`p-2.5 rounded-xl ${isCurrent ? 'bg-cyan-500 text-slate-950' : 'bg-white/10 text-cyan-300'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 text-[11px] font-semibold mb-3 inline-block">
                    {step.badge}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold text-cyan-300 mb-3 block">
                    {step.titleKo}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-400">
                  <span>미션 자세히 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Slide 6 Visual Overview */}
        <div className="glass-card rounded-3xl p-4 sm:p-6 border border-white/15 shadow-2xl">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/images/slide_06.png"
              alt="BrickSync UX Flow"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 px-2 text-xs text-slate-300">
            <span>1. 하드웨어 조립 ➔ 2. 블록 코딩 미션 ➔ 3. AI 인식 제스처 ➔ 4. 포트나이트 8코인 클리어</span>
            <span className="font-mono text-cyan-400 font-bold">100% Phygital Feedback</span>
          </div>
        </div>

      </div>
    </section>
  );
};
