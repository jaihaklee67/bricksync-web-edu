import React from 'react';

export const Hero = () => {
  return (
    <section className="relative w-full h-full overflow-hidden select-none bg-transparent">

      {/* Shift entire composition further upward away from bottom edge */}
      <div className="relative w-full h-full -translate-y-[9.5%]">
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
        <div className="absolute left-[6.5%] top-[31.0%] w-[40.5%] pointer-events-none select-none z-[4]">
          <img
            src="/images/logo_lego_cropped.png"
            alt="The bricks I built with my hands comes to life in the world of LEGO FORTNITE Island!"
            className="w-full h-auto object-contain select-none"
          />
        </div>
      </div>

    </section>
  );
};
