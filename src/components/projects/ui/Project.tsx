import React from "react";
import Image from "next/image";

type ProjectProps = {
  title: string;
  year: number | string;
  imageSrc: string;
  imageAlt?: string;
};

export const Project = ({ title, year, imageSrc, imageAlt }: ProjectProps) => {
  return (
    <div className="w-full">
      <div className="relative w-full  mx-auto">
        <div className="flex items-start justify-between px-2 sm:px-0">
          <div className="text-black text-sm sm:text-base font-['Cygre_Book'] leading-none">
            {title}
          </div>
          <div className="text-black text-sm sm:text-base font-['Cygre_Book'] leading-none">
            {year}
          </div>
        </div>
        <div className="relative mt-2 sm:mt-3 w-full aspect-[900/637] overflow-hidden ">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};
