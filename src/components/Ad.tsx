import React from "react";

export const Ad = () => {
  return (
    <div>
      <div className="relative w-full h-[60vh] sm:h-[70vh] max-w-[1821px] mx-auto mt-150">
        <div className="w-full flex justify-between">
          <div className="  text-black text-[clamp(0.875rem,2.5vw,1rem)] font-['Cygre_Book'] leading-none">
            hzlab
          </div>
          <div className="justify-start text-black text-[clamp(0.875rem,2.5vw,1rem)] font-['Cygre_Book'] leading-none">
            2025
          </div>
        </div>

        <img
          className=" inset-0 w-full h-full object-cover"
          src="https://placehold.co/1820x893"
          alt="Ad background"
        />
      </div>
    </div>
  );
};
