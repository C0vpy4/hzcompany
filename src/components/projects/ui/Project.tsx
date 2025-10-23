import React from "react";
import Image from "next/image";

type ProjectProps = {
  title: string;
  year: number | string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
};

export const Project = ({ title, year, imageSrc, imageAlt, className }: ProjectProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full mx-auto">
        <div className="flex items-start justify-between px-2 sm:px-0">
          <div className="text-black dark:text-white text-sm sm:text-base font-cygre leading-none">
            {title}
          </div>
          <div className="text-black dark:text-white text-sm sm:text-base font-cygre leading-none">
            {year}
          </div>
        </div>
        <div className="relative mt-2 sm:mt-3 w-full h-[300px] sm:h-[400px] overflow-hidden">
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
