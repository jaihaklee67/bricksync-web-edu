import React from 'react';
import { Footer } from './Footer';

export const DownloadPage = ({ setCurrentView }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">
      
      {/* Main Content Area */}
      <div className="w-full flex flex-col items-center flex-1 py-8 sm:py-12 md:py-14 px-4 sm:px-8 md:px-12">
        
        <div className="w-full max-w-[1480px] flex flex-col items-center pb-14 sm:pb-18 md:pb-24">
          
          {/* Top Download Button: Clean Convex / 3D Embossed White Pill (No Frame Line) */}
          <div className="w-[88%] max-w-[1302px] mb-6 sm:mb-8 md:mb-10">
            <a
              href="/Bricksync.exe"
              download="Bricksync.exe"
              className="w-full flex items-center justify-center py-3 sm:py-4 md:py-4.5 px-6 rounded-xl sm:rounded-2xl bg-white transition-all duration-300 cursor-pointer shadow-[0_4px_14px_rgba(0,35,80,0.12),inset_0_1px_0_rgba(255,255,255,1),inset_0_-2px_0_rgba(0,30,80,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,40,100,0.22),inset_0_1px_0_rgba(255,255,255,1),inset_0_-2px_0_rgba(0,30,80,0.08)] active:translate-y-0.5 active:scale-[0.995]"
              title="Click to download Bricksync.exe"
              aria-label="Download Bricksync.exe"
            >
              <span className="text-[#2b5a8f] font-normal text-base sm:text-xl md:text-2xl lg:text-[28px] tracking-tight">
                Download
              </span>
              <span className="text-[#08326e] font-bold text-base sm:text-xl md:text-2xl lg:text-[28px] tracking-tight ml-2">
                Bricksync.exe
              </span>
            </a>
          </div>

          {/* Main Island Graphic Card */}
          <div className="w-full flex justify-center">
            <img
              src="/images/download_island_card.png"
              alt="BrickSync Download - The Brick Island in LEGO Fortnite"
              className="w-full h-auto object-contain select-none pointer-events-none"
            />
          </div>

        </div>

      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
