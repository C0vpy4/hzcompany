"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const Fact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y = useSpring(yRange, { stiffness: 200, damping: 20, mass: 0.2 });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  return (
    <div>
      <div
        ref={sectionRef}
        className="relative  flex flex-col items-start justify-start px-4 sm:px-20 "
      >
        <div className="w-full text-center text-black text-[clamp(1rem,5vw,6rem)] font-['Cygre_Book'] leading-tight  break-words">
          <span>каждый продукт - вера </span>
          <span className="text-neutral-500">в нас,</span>
        </div>
        <div className="w-full  text-end text-black text-[clamp(1rem,5vw,6rem)] font-['Cygre_Book'] leading-tight  break-words">
          в каждого человека по отдельности,
        </div>
        <div className="w-full text-right text-neutral-500 text-[clamp(1rem,5vw,6rem)] font-['Cygre_Book'] leading-tight break-words">
          технологии и качество
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 transform -top-[30px] sm:top-[140px] w-[90vw] sm:w-[75vw] lg:w-[60vw] max-w-[1500px] aspect-[4/4] pointer-events-none">
          <motion.div
            style={{ y, scale }}
            className="relative w-full h-full will-change-transform"
          >
            <Image
              src="/abstract42g.png"
              alt="Abstract 3D object"
              fill
              className="object-contain "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
