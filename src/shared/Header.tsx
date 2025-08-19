"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedInsidePanel =
        !!panelRef.current && panelRef.current.contains(target);
      const clickedOnButton =
        !!buttonRef.current && buttonRef.current.contains(target);
      if (open && !clickedInsidePanel && !clickedOnButton) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-0 z-[100] py-4 bg-white/40 backdrop-blur-sm">
      <div className="relative mx-auto w-full max-w-[1210px] px-4 sm:px-6 lg:px-8 flex justify-between py-3">
        <Link
          href="/"
          className="w-20 h-10 relative block cursor-pointer"
          aria-label="На главную"
        >
          <div className="w-11 h-5 left-[43.08px] top-0 absolute bg-black border border-black" />
          <div className="w-10 h-5 left-[21.54px] top-[40px] absolute origin-top-left -rotate-90 bg-black border border-black" />
          <div className="w-10 h-5 left-0 top-[40px] absolute origin-top-left -rotate-90 bg-black border border-black" />
          <div className="w-11 h-5 left-[43.08px] top-[21.54px] absolute bg-black border border-black" />
        </Link>

        <button
          aria-expanded={open}
          aria-controls="hzcompany-menu"
          onClick={() => setOpen((v) => !v)}
          ref={buttonRef}
          className="w-20 h-5 relative"
        >
          <span className="sr-only">Открыть меню</span>
          <motion.div
            className="w-20 h-px left-0 top-0 absolute bg-black"
            animate={open ? { y: 9, rotate: 45 } : { y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <motion.div
            className="w-20 h-px left-0 top-[9px] absolute bg-black"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.div
            className="w-20 h-px left-0 top-[18px] absolute bg-black"
            animate={open ? { y: -9, rotate: -45 } : { y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </button>

        <a
          className="hidden sm:block cursor-pointer justify-start text-black text-base font-normal font-['Cygre'] underline leading-none"
          href="mailto:hzcompany@gmail.com"
        >
          hzcompany@gmail.com
        </a>

        <AnimatePresence>
          {open && (
            <motion.div
              id="hzcompany-menu"
              ref={panelRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full mt-4 z-50 bg-white  text-black px-4 sm:px-6 lg:px-8 py-8 "
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block justify-start text-black text-base font-['Cygre_Book'] leading-none"
                  >
                    о нас
                  </a>
                  <a
                    href="#"
                    className="block justify-start text-black text-base font-['Cygre_Book'] leading-none"
                  >
                    продукты
                  </a>
                  <a
                    href="/vacancies"
                    className="block justify-start text-black text-base font-['Cygre_Book'] leading-none"
                  >
                    вакансии
                  </a>
                </div>

                <div className="w-40 inline-flex flex-col justify-start items-start gap-4 md:gap-6">
                  <a
                    href="mailto:hzcompany@gmail.com"
                    className="self-stretch justify-start text-black text-base font-['Cygre_Book'] leading-none"
                  >
                    hzcompany@gmail.com
                  </a>
                  <a
                    href="tel:+79252283698"
                    className="self-stretch justify-start text-black text-base font-['Cygre_Book'] leading-none"
                  >
                    +7 (925) 228 36 98
                  </a>

                  <a
                    href="#"
                    className="self-stretch justify-start text-black text-base font-['Cygre_Book'] leading-none"
                  >
                    telegram
                  </a>
                  <a
                    href="#"
                    className="self-stretch justify-start text-black text-base font-['Cygre_Book'] leading-none"
                  >
                    vk
                  </a>
                  <a
                    href="#"
                    className="self-stretch justify-start text-black text-base font-['Cygre_Book'] leading-none"
                  >
                    instagram
                  </a>
                  <a
                    href="#"
                    className="self-stretch justify-start text-black text-base font-['Cygre_Book'] leading-none"
                  >
                    x
                  </a>
                  <a
                    href="#"
                    className="self-stretch justify-start text-black text-base font-['Cygre_Book'] leading-none"
                  >
                    youtube
                  </a>
                  <a
                    href="#"
                    className="self-stretch justify-start text-black text-base font-['Cygre_Book'] leading-none"
                  >
                    tik tok
                  </a>
                </div>

                <div className="space-y-3">
                  <div className="justify-start text-black text-base font-['Cygre_Book'] leading-none">
                    @ hzcompany 2025
                  </div>
                  <div className="justify-start text-black text-base font-['Cygre_Book'] leading-none">
                    designed by Ivan Peter
                  </div>
                  <div className="justify-start text-black text-base font-['Cygre_Book'] leading-none">
                    все права защищены
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
