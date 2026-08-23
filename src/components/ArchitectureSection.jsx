import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Laptop, Cpu, Server, Gamepad2, ArrowRight, Play, CheckCircle, Zap, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ArchitectureSection = () => {
  const { lang } = useLanguage();
  const t = content[lang].architecture;

  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [pulseIndex, setPulseIndex] = useState(-1);

  const nodeIcons = [Cpu, Laptop, Server, Gamepad2];

  const runSignalSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setPulseIndex(0);

    const stepDuration = 700;
    
    setTimeout(() => setPulseIndex(1), stepDuration);
    setTimeout(() => setPulseIndex(2), stepDuration * 2);
    setTimeout(() => {
      setPulseIndex(3);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, stepDuration * 3);
    
    setTimeout(() => {
      setIsSimulating(false);
      setPulseIndex(-1);
    }, stepDuration * 4);
  };

  return (
    <section id="architecture" className="py-24 relative bg-[#091830] canva-diamond-bg border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <span>{t.sectionNum} // ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-cyan-300 font-medium max-w-2xl">
            {t.subtitle}
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Interactive Architecture Simulator Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl mb-12">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>{t.interactiveTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {t.interactiveHint}
              </p>
            </div>

            <button
              onClick={runSignalSimulation}
              disabled={isSimulating}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold shadow-lg transition-all ${
                isSimulating
                  ? 'bg-cyan-600 text-white cursor-wait animate-pulse'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white hover:scale-105 active:scale-95'
              }`}
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>동기화 신호 전송 중...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>{t.testSignalBtn}</span>
                </>
              )}
            </button>
          </div>

          {/* 4 Pipeline Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mt-8 relative">
            {t.nodes.map((node, index) => {
              const Icon = nodeIcons[index];
              const isPulsing = pulseIndex === index;
              const isSelected = activeStep === index;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer rounded-2xl p-5 text-left transition-all relative ${
                    isPulsing
                      ? 'bg-cyan-500/30 border-2 border-cyan-400 shadow-xl shadow-cyan-500/40 scale-105'
                      : isSelected
                      ? 'bg-white/15 border border-cyan-400/50 shadow-lg'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {/* Step Number Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-cyan-300">
                      STEP 0{index + 1}
                    </span>
                    <div className={`p-2.5 rounded-xl ${isPulsing ? 'bg-cyan-400 text-slate-950' : 'bg-white/10 text-cyan-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1">
                    {node.name}
                  </h4>
                  <span className="text-[11px] text-cyan-300 font-semibold block mb-2">
                    {node.subtitle}
                  </span>
                  
                  <div className="text-[11px] font-mono text-slate-400 bg-black/20 p-2 rounded-lg mb-3">
                    {node.tech}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {node.desc}
                  </p>

                  {/* Status Indicator */}
                  {isPulsing && (
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-300 font-bold animate-bounce">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>신호 처리 완료 (0.02s)</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Slide 5 Technical Diagram Image Embed */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-slate-950/60 p-2 sm:p-4">
              <img
                src="/images/slide_05.png"
                alt="BrickSync Architecture Diagram"
                className="w-full h-auto rounded-xl object-contain mx-auto"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
