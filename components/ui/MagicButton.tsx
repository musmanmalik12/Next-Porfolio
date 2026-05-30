import React from 'react';

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`relative inline-flex h-10 sm:h-12 overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300 group ${otherClasses || 'px-6 sm:px-8'}`}
      onClick={handleClick}
    >
      <span
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-700 group-hover:shadow-lg group-hover:shadow-indigo-500/40 transition-shadow duration-300"
      />
      <span
        className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-5 sm:px-7 text-xs sm:text-sm font-semibold gap-2 bg-slate-950 text-indigo-400 hover:text-indigo-300 transition-all duration-300 group-hover:-translate-y-0.5 active:translate-y-0"
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
