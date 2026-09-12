import React from 'react';
import { ImageIcon } from 'lucide-react';

export const MediaPlaceholder = ({ icon: Icon = ImageIcon, label, aspect = 'aspect-video', className = '' }) => (
  <div
    className={`w-full ${aspect} rounded-3xl border-2 border-dashed border-cyan-200/40 bg-[#0b192e]/30 flex flex-col items-center justify-center gap-3 text-center px-6 py-8 ${className}`}
  >
    <Icon className="w-8 h-8 text-cyan-200/70 flex-shrink-0" />
    <span className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md">{label}</span>
  </div>
);
