import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Blocks, Eye, Sparkles, CheckCircle2, Shield, Globe2, Award, Cpu } from 'lucide-react';

export const AboutSection = () => {
  const { lang } = useLanguage();
  const t = content[lang].about;

  const componentIcons = [Blocks, Eye, Award];
  const colorAccents = [
    { border: 'hover:border-cyan-400', badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30' },
    { border: 'hover:border-pink-400', badge: 'bg-pink-500/20 text-pink-300 border-pink-400/30' },
    { border: 'hover:border-yellow-400', badge: 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30' }
  ];

  return (
    <section id="about" className="py-24 relative canva-diamond-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <span>{t.sectionNum} // ABOUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-cyan-300/90 font-medium max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* Top Feature Box (Overview & Mission) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Text Description Box */}
          <div className="lg:col-span-6 glass-card p-8 rounded-3xl border border-white/15 text-left">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-sm font-black">BS</span>
              <span>Next-Gen STEAM Education</span>
            </h3>
            <p className="text-slate-200 text-base leading-relaxed mb-5">
              {t.desc1}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {t.desc2}
            </p>

            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-cyan-400" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Official Portal:</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-cyan-300">www.bricksync.org</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold">LIVE</span>
            </div>
          </div>

          {/* Slide 3 Mockup Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="glass-card rounded-3xl p-3 border border-white/15 shadow-2xl overflow-hidden group">
              <img
                src="/images/slide_03.png"
                alt="About BrickSync"
                className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-102 transition-transform duration-500"
              />
              <div className="mt-3 p-2 text-center text-xs text-slate-400 font-medium">
                BrickSync Web Dashboard & In-Game Mission Synchronization
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Components (Slide 4) */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
              {t.coreBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {t.coreTitle}
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              {t.coreSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.components.map((comp, idx) => {
              const Icon = componentIcons[idx % componentIcons.length];
              const accent = colorAccents[idx % colorAccents.length];
              return (
                <div
                  key={comp.num}
                  className={`glass-card glass-card-hover p-7 rounded-3xl border border-white/15 flex flex-col justify-between text-left transition-all ${accent.border}`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black text-cyan-400 font-mono">
                        {comp.num}
                      </span>
                      <div className="p-3 rounded-2xl bg-white/10 text-white">
                        <Icon className="w-6 h-6 text-cyan-300" />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-1">
                      {comp.title}
                    </h4>
                    <span className="text-xs font-semibold text-cyan-300 mb-4 block">
                      {comp.titleKo}
                    </span>

                    {/* Bullet Points */}
                    <ul className="space-y-3 mb-6">
                      {comp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Component Tech</span>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${accent.badge}`}>
                      {comp.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
