"use client";
import React from "react";
import { motion } from "framer-motion";

export const Txt = () => {
  return (
    <div>
      <div className="font-cygre min-h-screen flex items-center justify-center flex-col gap-5">
        <motion.div
          className=" text-center justify-start text-black text-[clamp(1.75rem,6vw,6rem)] font-cygre sm:leading-[106.97px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          hzcompany — это технологическая организация нового типа
        </motion.div>
        <motion.div
          className=" text-center justify-start text-black text-[clamp(0.95rem,2.6vw,1rem)] font-cygre leading-none"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        >
          мы строим не просто платформу, а инфраструктуру прозрачного
          взаимодействия между людьми, задачами и знаниями
        </motion.div>
        <motion.div
          className="text-center justify-start text-black text-[clamp(0.95rem,2.6vw,1rem)] font-cygre"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          Наша цель — формировать безопасную, гибкую и масштабируемую среду, в
          которой каждый участник может создавать ценность и расти вместе с
          системой. Мы верим в силу архитектуры, дисциплины <br />и
          стратегического лидерства
        </motion.div>
      </div>
    </div>
  );
};
