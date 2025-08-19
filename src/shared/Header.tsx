import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="w-20 h-10 relative">
        <div className="w-11 h-5 left-[43.08px] top-0 absolute bg-black border border-black" />
        <div className="w-10 h-5 left-[21.54px] top-[40px] absolute origin-top-left -rotate-90 bg-black border border-black" />
        <div className="w-10 h-5 left-0 top-[40px] absolute origin-top-left -rotate-90 bg-black border border-black" />
        <div className="w-11 h-5 left-[43.08px] top-[21.54px] absolute bg-black border border-black" />
      </div>
      <div data-property-1="Default" className="w-20 h-5 relative">
        <div className="w-20 h-px left-0 top-0 absolute bg-black" />
        <div className="w-20 h-px left-0 top-[9px] absolute bg-black" />
        <div className="w-20 h-px left-0 top-[18px] absolute bg-black" />
      </div>
      <a
        className="hidden sm:block cursor-pointer justify-start text-black text-base font-normal font-['Cygre'] underline leading-none"
        href="mailto:hzcompany@gmail.com"
      >
        hzcompany@gmail.com
      </a>
    </div>
  );
};
