"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
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
              className="cursor-pointer w-full h-16 border border-black dark:border-white bg-transparent transition-all duration-300 
                hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black 
                group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black"
              aria-label="присоединиться"
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
                className="text-black dark:text-white text-base font-cygre leading-none transition-colors duration-300 
                group-hover:text-white hover:text-white dark:group-hover:text-black dark:hover:text-black"
              >
                присоединиться
              </span>
            </motion.button>
          </a>
          <a href="#fact" className="w-full">
            <motion.button
              type="button"
              className="cursor-pointer w-full h-16 border border-black dark:border-white bg-black dark:bg-white transition-all duration-300 
                hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white
                group-hover:bg-transparent group-hover:text-black dark:group-hover:bg-transparent dark:group-hover:text-white"
              aria-label="узнать больше"
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
                className="text-white dark:text-black text-base font-cygre leading-none transition-colors duration-300 
                group-hover:text-black hover:text-black dark:group-hover:text-white dark:hover:text-white"
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
