import React from "react";
import Image from "next/image";

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

        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1820x893"
            alt="Ad background"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};
