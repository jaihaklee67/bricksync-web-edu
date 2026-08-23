import React from 'react';
import { Footer } from './Footer';

export const AboutPage = ({ setCurrentView }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">
      
      <div className="w-full flex flex-col items-center flex-1">
        {/* Section 1: Main Overview Stage (16:9 Proportional Canvas) */}
        <div className="w-full max-w-[1600px] aspect-video relative flex-shrink-0 my-2">
          
          {/* Layer 1: Left Overview Card & Text (about_1.png) */}
          <img
            src="/images/about_1.png"
            alt="About BrickSync - What is BrickSync?"
            className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none z-10"
          />

          {/* Layer 2: Right Visual Dashboard & Photos (about_2.png) */}
          <img
            src="/images/about_2.png"
            alt="About BrickSync - Dashboard UI and Learning Class Photos"
            className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none z-11"
          />

          {/* Interactive Clickable Link for www.bricksync.org */}
          <a
            href="https://www.bricksync.org"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[4.8%] top-[82.4%] w-[24.5%] h-[5.6%] rounded-full cursor-pointer z-20 hover:opacity-80 transition-opacity"
            title="Visit BrickSync Official Website (www.bricksync.org)"
            aria-label="Visit BrickSync Official Website"
          />
        </div>

        {/* Section 2: Core Pillars (about_3.png: 01 Phygital Bridge, 02 AI Learning, 03 Global Vision) */}
        <div className="w-full max-w-[1440px] flex justify-center pt-6 pb-12 sm:pb-16 px-4 sm:px-8">
          <img
            src="/images/about_section_03.png"
            alt="BrickSync Core Pillars - 01 Phygital Bridge, 02 AI Multimodal, 03 Global Creator Vision"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 3: Intro Video Section */}
        <div className="w-full max-w-[1440px] flex flex-col items-center pb-20 sm:pb-24 px-4 sm:px-8">
          {/* Title matching BrickSync 3 Core Components typography */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight text-center mb-6 sm:mb-8">
            Bricksync intro Video
          </h2>

          {/* 16:9 Video Player matching width of 3 cards above */}
          <div className="w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black/60 relative shadow-none">
            <video
              src="/images/Bricksync.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
