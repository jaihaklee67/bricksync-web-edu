import React from 'react';
import { Footer } from './Footer';

export const Hero = ({ setCurrentView }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">
      
      <div className="w-full flex flex-col items-center flex-1">
        {/* Section 1: Initial Viewport Screen (User sees ONLY this before scrolling) */}
        <section className="relative w-full h-[calc(100vh-90px)] min-h-[580px] flex items-center justify-center overflow-hidden flex-shrink-0">
          <div className="relative w-full h-full max-w-[177.78vh] max-h-[56.25vw] aspect-video overflow-hidden -translate-y-[9.5%]">
            
            {/* 2. Enlarged Fortnite Theme Park Screen: hero_bg.png */}
            <div className="absolute right-0 top-[23.5%] w-[49%] max-w-[1020px] pointer-events-none select-none z-[2]">
              <img
                src="/images/hero_bg.png"
                alt="Fortnite Theme Park Screen"
                className="w-full h-auto object-contain object-right select-none"
              />
            </div>

            {/* 3. LEGO SPIKE Ferris Wheel: lego_ferris_wheel_crop.png */}
            <div className="absolute left-[42.5%] top-[13.5%] h-[65.5%] pointer-events-none select-none z-[3]">
              <img
                src="/images/lego_ferris_wheel_crop.png"
                alt="LEGO SPIKE Ferris Wheel"
                className="h-full w-auto object-contain select-none"
              />
            </div>

            {/* 4. Block Coding Puzzle: code_blocks_crop.png */}
            <div className="absolute left-[46.2%] top-[74.5%] w-[24.5%] pointer-events-none select-none z-[5]">
              <img
                src="/images/code_blocks_crop.png"
                alt="LEGO Spike Block Coding"
                className="w-full h-auto object-contain select-none"
              />
            </div>

            {/* 5. 3D Fortnite Character: character_crop.png */}
            <div className="absolute left-[68.6%] top-[52.0%] h-[46.0%] pointer-events-none select-none z-[6]">
              <img
                src="/images/character_crop.png"
                alt="Fortnite Minifigure on Neon Pedestal"
                className="h-full w-auto object-contain select-none"
              />
            </div>

            {/* 6. Headline Text Graphic: logo_lego_cropped.png */}
            <div className="absolute left-[6.5%] top-[33.5%] w-[42.0%] pointer-events-none select-none z-[4]">
              <img
                src="/images/logo_lego_cropped.png"
                alt="The LEGO spike I built with my own hands comes to life in the world of LEGO FORTNITE Island!"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Scrolled Full-Bleed 16:9 Video (Edge-to-Edge, No Margin) */}
        <section className="w-full relative flex flex-col items-center justify-center bg-black/70 z-20">
          <div className="w-full aspect-video relative overflow-hidden flex items-center justify-center">
            <video
              src="/images/Bricksync.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
