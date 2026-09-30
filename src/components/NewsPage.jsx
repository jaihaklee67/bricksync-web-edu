import React from 'react';
import { Footer } from './Footer';

export const NewsPage = ({ setCurrentView }) => {
  return (
    <div className="relative z-10 w-full min-h-full flex flex-col items-center justify-between select-none font-poppins bg-black -mt-20 sm:-mt-24 md:-mt-28">
      <img
        src="/images/sns_hero.png"
        alt="BrickSync SNS"
        className="w-full h-auto select-none pointer-events-none"
      />
      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};
