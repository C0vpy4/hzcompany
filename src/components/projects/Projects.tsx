"use client";
import React from "react";
import Image from "next/image";
import { Project } from "./ui/Project";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Ad компонент */}
      <Project title="HZlab" year="2025" imageSrc="/projects/hzlab.png" className="mt-100 sm:mt-150"/>

      <div className="font-cygre grid grid-cols-1 sm:grid-cols-2 gap-10">
        <Project title="HZrep" year="soon" imageSrc="/projects/hzrep.png" />
        
        <div className="w-full">
          <div className="relative w-full mx-auto">
            <div className="flex items-start justify-between px-2 sm:px-0">
              <div className="text-black dark:text-white text-sm sm:text-base font-cygre leading-none">
                все продукты
              </div>
              <div className="text-black dark:text-white text-sm sm:text-base font-cygre leading-none">
                2026-2027
              </div>
            </div>
            <a
              href="/products"
              className="block relative mt-2 sm:mt-3 w-full h-[300px] sm:h-[400px] overflow-hidden border border-black dark:border-white hover:border-black dark:hover:border-white transition-colors duration-200 group"
              title="Смотреть все продукты"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl sm:text-6xl text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors duration-200 select-none">
                  +
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
};
