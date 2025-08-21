"use client";
import React from "react";
import { Project } from "./ui/Project";

export const Projects = () => {
  return (
    <div className="font-cygre grid grid-cols-1 sm:grid-cols-2 gap-10">
      <Project title="HZbank" year="soon" imageSrc="/projects/hzbank.png" />
      <Project
        title="HZlogistic"
        year="soon"
        imageSrc="/projects/hzlogistiks.png"
      />
      <Project title="HZhouse" year="soon" imageSrc="/projects/3.png" />
      <div className="w-full">
        <div className="relative w-full mx-auto">
          <div className="flex items-start justify-between px-2 sm:px-0">
            <div className="text-black text-sm sm:text-base font-cygre leading-none">
              все продукты
            </div>
            <div className="text-black text-sm sm:text-base font-cygre leading-none">
              2025-2028
            </div>
          </div>
          <a
            href="/products"
            className="block relative mt-2 sm:mt-3 w-full aspect-square overflow-hidden  border border-black hover:border-black transition-colors duration-200 group"
            title="Смотреть все продукты"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl sm:text-6xl text-black group-hover:text-black transition-colors duration-200 select-none">
                +
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
