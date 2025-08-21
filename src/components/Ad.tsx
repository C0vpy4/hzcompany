import React from "react";
import Image from "next/image";

export const Ad = () => {
  return (
    <div>
      <div className="font-cygre relative w-full  max-w-[1821px] mx-auto mt-100 sm:mt-150">
        <div className="w-full flex justify-between">
          <div className="  text-black text-[clamp(0.875rem,2.5vw,1rem)] font-cygre leading-none">
            hzlab
          </div>
          <div className="justify-start text-black text-[clamp(0.875rem,2.5vw,1rem)] font-cygre leading-none">
            2025
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full h-[40vh] sm:h-[60vh]">
            <Image
              src="/projects/hzbank.png"
              alt="Ad background"
              layout="fill"
              objectFit="contain"
              className="object-contain"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
