import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Gamepad2, MapPin, Compass, Copy, Check, Waves, FerrisWheel, Flag, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const MapSection = () => {
  const { lang } = useLanguage();
  const t = content[lang].map;
  const [activeZone, setActiveZone] = useState('beach');
  const [copied, setCopied] = useState(false);

  const copyIslandCode = () => {
    navigator.clipboard.writeText(t.islandCode);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const zoneIcons = {
    beach: Waves,
    amusement: FerrisWheel,
    racing: Flag
  };

  const selectedZoneData = t.zones.find(z => z.id === activeZone) || t.zones[0];

  return (
    <section id="map" className="py-24 relative canva-diamond-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <span>{t.sectionNum} // FORTNITE MAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-cyan-300 font-medium max-w-2xl">
            {t.subtitle}
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {t.desc}
          </p>

          {/* Island Code Card */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-3xl glass-card border border-cyan-400/40 shadow-2xl bg-cyan-950/30">
            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-lg">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider block">FORTNITE ISLAND CODE</span>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-wider font-mono">{t.islandCode}</span>
              </div>
            </div>
            
            <button
              onClick={copyIslandCode}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>복사되었습니다!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>코드 복사하기</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3 World Zones Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {t.zones.map((zone) => {
            const Icon = zoneIcons[zone.id] || Compass;
            const isActive = activeZone === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30 border border-cyan-300/40 scale-105'
                    : 'glass-card text-slate-300 hover:text-white hover:bg-white/15'
                }`}
              >
                <Icon className="w-4 h-4 text-cyan-300" />
                <span>{zone.nameKo}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Zone Attractions & Slide 8 Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Attraction List */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-white/15 text-left">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>{selectedZoneData.nameKo}</span>
            </h3>
            <span className="text-xs font-mono text-cyan-300 block mb-6">
              Interactive Attractions & Missions
            </span>

            <div className="space-y-4">
              {selectedZoneData.attractions.map((att, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-black text-white font-mono">{att.name}</span>
                    <span className="text-xs font-bold text-cyan-400">{att.nameKo}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {att.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 8 Screenshot Embed */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-3 sm:p-4 border border-white/15 shadow-2xl">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/slide_08.png"
                  alt="The Brick Island Map"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-2 text-xs text-slate-400">
                <span>The Brick Island In-Game Zones & 4 Thematic Caves</span>
                <span className="font-mono text-cyan-300 font-bold">Island Code: {t.islandCode}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
