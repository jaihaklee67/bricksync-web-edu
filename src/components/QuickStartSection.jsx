import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Bluetooth, Globe, Gamepad2, ArrowRight, CheckCircle2 } from 'lucide-react';

export const QuickStartSection = () => {
  const { lang } = useLanguage();
  const t = content[lang].quickStart;

  const icons = [Bluetooth, Globe, Gamepad2];

  return (
    <section id="quick-start" className="py-24 relative bg-[#091a33] canva-diamond-bg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <span>HOW TO PLAY // QUICK START</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-cyan-300 font-medium max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.steps.map((step, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={step.num}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-white/15 text-left flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-cyan-400 font-mono">
                      STEP {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-cyan-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>간편 설정 완료</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
