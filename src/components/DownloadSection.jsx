import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Download, FileText, Map, ShieldCheck, Sparkles } from 'lucide-react';

export const DownloadSection = () => {
  const { lang } = useLanguage();
  const t = content[lang].download;

  const icons = [Download, FileText, Map];

  return (
    <section id="download" className="py-24 relative bg-[#071428] canva-diamond-bg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <span>RESOURCES // DOWNLOAD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-cyan-300 font-medium max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* Download Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.name}
                className={`glass-card p-8 rounded-3xl border text-left flex flex-col justify-between transition-all hover:scale-102 ${
                  item.isPrimary ? 'border-cyan-400/50 bg-cyan-950/20 shadow-xl shadow-cyan-500/10' : 'border-white/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-cyan-300 border border-white/10">
                      {item.tag}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/10 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <button
                  onClick={() => alert(`${item.name} 다운로드가 준비되었습니다.`)}
                  className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    item.isPrimary
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>{item.btnText}</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
