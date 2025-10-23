"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const [hoveredButton, setHoveredButton] = useState<"first" | "second" | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Проверяем тему при монтировании
    const checkTheme = () => {
      setIsDarkTheme(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Отслеживаем изменения темы
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);
  return (
    <div className="font-cygre flex justify-center items-center flex-col p-20 w-full  min-h-screen  max-h-full max-w-full">
      <div className="justify-center absolute top-25 sm:top-15 text-black dark:text-white sm:text-8xl text-4xl font-cygre leading-[94.74px]">
        hzcompany
      </div>
      <div className="absolute top-25 lg:top-15 md:top-25 sm:top-10 flex  w-86 h-86  sm:w-full sm:h-full max-w-full ">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src="/abstract43g.png"
            alt="Abstract 3D object"
            fill
            className="object-contain "
          />
        </motion.div>
        <div className="absolute z-50 inline-flex flex-col sm:flex-row justify-center items-center gap-5 -bottom-20 sm:bottom-50 w-full group">
          <a href="#form" className="w-full">
            <motion.button
              type="button"
              className={`${
                hoveredButton === "first" || hoveredButton === "second"
                  ? isDarkTheme ? "default-button-black" : "default-button-white"
                  : isDarkTheme ? "default-button-black-second" : "default-button-white-second"
              } cursor-pointer w-full h-16 border border-black dark:border-white bg-transparent transition-all duration-300`}
              aria-label="присоединиться"
              onMouseEnter={() => setHoveredButton("first")}
              onMouseLeave={() => setHoveredButton(null)}
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 0.5,
              }}
            >
              <span
                className=" text-base font-cygre leading-none transition-colors duration-300 
                "
              >
                присоединиться
              </span>
            </motion.button>
          </a>
          <a href="#fact" className="w-full">
            <motion.button
              type="button"
              className={`${
                hoveredButton === "first" || hoveredButton === "second"
                  ? isDarkTheme ? "default-button-black-second" : "default-button-white-second"
                  : isDarkTheme ? "default-button-black" : "default-button-white"
              } cursor-pointer w-full h-16 border border-black dark:border-white transition-all duration-300`}
              aria-label="узнать больше"
              onMouseEnter={() => setHoveredButton("second")}
              onMouseLeave={() => setHoveredButton(null)}
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 0.5,
              }}
            >
              <span
                className=" text-base font-cygre leading-none transition-colors duration-300 
                "
              >
                узнать больше
              </span>
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};
