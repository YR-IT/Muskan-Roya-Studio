import React from 'react';
import logoImg from '../assets/photos/Logo.jpg.jpeg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true,
  lightMode = false
}) => {
  const dimensions = {
    sm: { img: 'w-10 h-10', fontMain: 'text-sm', fontSub: 'text-[9px]' },
    md: { img: 'w-12 h-12', fontMain: 'text-base', fontSub: 'text-[10px]' },
    lg: { img: 'w-16 h-16', fontMain: 'text-xl', fontSub: 'text-[11px]' },
    xl: { img: 'w-20 h-20', fontMain: 'text-2xl', fontSub: 'text-xs' },
  }[size];

  const textColorMain = lightMode ? 'text-white' : 'text-[#1A1918]';
  const textColorSub = lightMode ? 'text-[#D8D2C7]' : 'text-[#A38036]';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image */}
      <img 
        src={logoImg} 
        alt="Muskan Royal Photo Studio Logo" 
        className={`object-contain rounded-full border border-[#C5A059]/40 shadow-sm shrink-0 ${dimensions.img}`}
      />

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-serif tracking-[0.15em] font-medium uppercase leading-none ${textColorMain} ${dimensions.fontMain}`}>
            Muskan Royal
          </span>
          <span className={`font-sans tracking-[0.25em] uppercase font-medium mt-1 ${textColorSub} ${dimensions.fontSub}`}>
            Photo Studio
          </span>
        </div>
      )}
    </div>
  );
};
