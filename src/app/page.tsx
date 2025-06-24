"use client";
import { motion } from "framer-motion";
import { MainButtons } from "@/shared/mainButtons";

export default function Home() {
  return (
    <div className="bg-[#FED702] min-h-screen h-screen overflow-hidden relative">
      {/* Верхняя черная секция */}
      <motion.div
        initial={{ height: "10%" }}
        animate={{ height: "70% " }}
        transition={{ duration: 0.7 }}
        className="w-full bg-black flex flex-col justify-end relative"
        style={{ zIndex: 40 }}
      >
        <div className="px-10 pb-0 h-full flex flex-col justify-end">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white text-2xl font-bold mb-2"
            style={{ fontFamily: "'Geist Mono', sans-serif" }}
          >
            We know what you need
          </motion.h2>

          <div
            className="justify-center -ml-3"
            style={{
              marginBottom: "-1%",
              transform: "translateY(0%)",
              letterSpacing: "-0.05em",
            }}
          >
            {"HZCOMPANY".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8 + index * 0.1,
                }}
                className="text-[200px] font-bold uppercase leading-[0.75] text-[#FED702]"
                style={{
                  fontFamily: "'Geist Sans', sans-serif",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Нижняя секция с кнопками */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-black text-4xl font-bold pt-12 relative z-40"
      >
        <MainButtons />
      </motion.div>
    </div>
  );
}
