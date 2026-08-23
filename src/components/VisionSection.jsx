import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Sparkles, Trophy, Handshake, Target, CheckCircle2, ArrowRight } from 'lucide-react';

export const VisionSection = () => {
  const { lang } = useLanguage();
  const t = content[lang].vision;

  const benefitIcons = [Target, Trophy, Handshake];

  return (
    <section id="vision" className="py-24 relative bg-[#09152b] canva-diamond-bg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <span>{t.sectionNum} // VISION & ROADMAP</span>
          </div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-bold mb-3 border border-yellow-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.headline}
          </h2>
          <p className="text-lg text-cyan-300 font-medium max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Key Benefit Cards (Slide 9) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {t.benefits.map((ben, idx) => {
            const Icon = benefitIcons[idx % benefitIcons.length];
            return (
              <div
                key={ben.num}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-white/15 flex flex-col justify-between text-left relative overflow-hidden"
              >
                {/* Background Number Watermark */}
                <div className="absolute top-4 right-6 text-7xl font-black text-white/5 font-mono pointer-events-none">
                  {ben.num}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-cyan-400 font-mono">
                      {ben.num}
                    </span>
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {ben.title}
                  </h3>
                  <span className="text-xs font-semibold text-cyan-300 block mb-5">
                    {ben.titleKo}
                  </span>

                  <ul className="space-y-3.5">
                    {ben.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-400">
                  <span>지속 가능한 가치 창출</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Slide 9 Presentation Visual Embed */}
        <div className="glass-card rounded-3xl p-4 sm:p-6 border border-white/15 shadow-2xl">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/images/slide_09.png"
              alt="BrickSync + LEGO Key Benefits"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
