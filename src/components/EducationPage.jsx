import React from 'react';
import { Footer } from './Footer';

export const EducationPage = ({ setCurrentView }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">
      
      <div className="w-full flex flex-col items-center flex-1 py-8 sm:py-12 md:py-14 px-4 sm:px-8 md:px-12">
        {/* Section 1: Intro Text Graphic */}
        <div className="w-full max-w-[1360px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/education_section_01.png"
            alt="LEGO Fortnite Education with BrickSync"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 2: Education 02 Image */}
        <div className="w-full max-w-[1360px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/education_section_02.png"
            alt="LEGO Fortnite Education Classes and Pop-Up Experience"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 3: education_04 Image (BrickSync Curriculums Title + 3-line Description) */}
        <div className="w-full max-w-[1360px] flex justify-center mb-8 sm:mb-10 md:mb-12">
          <img
            src="/images/education_section_04.png"
            alt="BrickSync Curriculums Title and Description"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 4: education_05 Image (3-Column Curriculum Cards) */}
        <div className="w-full max-w-[1440px] flex justify-center pb-20 px-2 sm:px-4">
          <img
            src="/images/education_section_05.png"
            alt="LEGO Fortnite Education Curriculum Overview, Short-Term Camp, and After-School Programs"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
