import React from "react";
import Image from "next/image";

export const Ad = () => {
  return (
    <div>
      <div className="mt-20relative w-full h-[60vh] sm:h-[70vh] max-w-[1821px] mx-auto mt-150">
        <div className="w-full flex justify-between">
          <div className="  text-black text-[clamp(0.875rem,2.5vw,1rem)] font-['Cygre_Book'] leading-none">
            hzlab
          </div>
          <div className="justify-start text-black text-[clamp(0.875rem,2.5vw,1rem)] font-['Cygre_Book'] leading-none">
            2025
          </div>
        </div>

        <div className="">
          <Image
            src="/projects/hzbank.png"
            alt="Ad background"
            fill
            className=""
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};
