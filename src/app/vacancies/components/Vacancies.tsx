"use client";
import React, { PropsWithChildren, ReactNode, useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type VacanciesProps = {
  text: string;
  right?: ReactNode; // правый столбец (бейджи/мета). Необязателен
  className?: string;
  pin?: "top" | "bottom";
};

export const Vacancies = ({
  text,
  right,
  className,
  pin = "top",
}: PropsWithChildren<VacanciesProps>) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 80%", "end 20%"],
  });
  const rotateXRaw = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -12]);
  const yRaw = useTransform(scrollYProgress, [0, 1], [24, -24]);

  const rotateX = useSpring(rotateXRaw, { stiffness: 120, damping: 20 });
  const y = useSpring(yRaw, { stiffness: 120, damping: 20 });

  const stickyClass = useMemo(
    () => (pin === "bottom" ? "sticky bottom-0" : "sticky top-0"),
    [pin]
  );

  return (
    <div className={className ?? "w-full"} style={{ perspective: "1200px" }}>
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          y,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative w-full bg-white border border-black px-4 sm:px-6 lg:px-8 py-6 will-change-transform ${stickyClass}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-black font-['Cygre_Book'] leading-tight text-[clamp(2rem,6vw,6rem)]">
            {text}
          </h3>
          <div className="flex flex-col items-center justify-center gap-3">
            {right ? (
              <span className="text-black text-sm sm:text-base font-['Cygre_Book'] leading-none">
                {right}
              </span>
            ) : (
              <>
                <span className="text-black text-sm sm:text-base font-['Cygre_Book'] leading-none">
                  проектная работа
                </span>
                <span className="text-black text-sm sm:text-base font-['Cygre_Book'] leading-none">
                  удалёнка
                </span>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
