"use client";
import React from "react";
import { motion } from "framer-motion";

export const TxtVC = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-black font-cygre leading-tight text-[clamp(2rem,8vw,6rem)]"
      >
        хотите у нас работать?
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        className="mt-4 text-black font-cygre leading-snug text-[clamp(0.95rem,2.2vw,1.125rem)]"
      >
        присылайте резюме на hzcompanyteam@gmail.com
      </motion.div>
    </motion.div>
  );
};
