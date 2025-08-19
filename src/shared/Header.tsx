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
    <div className="fixed inset-x-0 top-0 z-[100] pt-4 bg-white">
      <div className="relative mx-auto w-full  sm:px-20 px-2 flex justify-between py-3 пк">
        <Link
          href="/"
          className="w-20 h-10 relative block cursor-pointer group"
          aria-label="На главную"
        >
          <div className="w-11 h-5 left-[43.08px] top-0 absolute bg-black border border-black" />
          <div className="w-10 h-5 left-[21.54px] top-[40px] absolute origin-top-left -rotate-90 bg-black border border-black" />
          <div className="w-10 h-5 left-0 top-[40px] absolute origin-top-left -rotate-90 bg-black border border-black" />
          <div className="w-11 h-5 left-[43.08px] top-[21.54px] absolute bg-black border border-black" />
        </Link>

        <motion.button
          aria-expanded={open}
          aria-controls="hzcompany-menu"
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.1 }}
          ref={buttonRef}
          className="w-20 h-5 relative"
        >
          <span className="sr-only">Открыть меню</span>

          <motion.div
            className="w-20 h-px left-0 right-0 mx-auto top-0 absolute bg-black"
            animate={
              open
                ? { y: 9, rotate: 45, width: "50%" }
                : { y: 0, rotate: 0, width: "100%" }
            }
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <motion.div
            className="w-20 h-px left-0 right-0 mx-auto top-[9px] absolute bg-black"
            animate={
              open
                ? { opacity: 0, width: "50%" }
                : { opacity: 1, width: "100%" }
            }
            transition={{ duration: 0.15 }}
          />
          <motion.div
            className="w-20 h-px left-0 right-0 mx-auto top-[18px] absolute bg-black"
            animate={
              open
                ? { y: -9, rotate: -45, width: "50%" }
                : { y: 0, rotate: 0, width: "100%" }
            }
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </motion.button>

        <a
          className="hidden sm:block cursor-pointer justify-start text-black text-base font-normal font-['Cygre'] underline leading-none"
          href="mailto:hzcompany@gmail.com"
        >
          hzcompanyteam@gmail.com
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
              className="absolute left-0 right-0 top-full z-50 bg-white  text-black px-4 sm:px-6 lg:px-20 py-8 "
            >
              <div className="flex flex-col sm:flex-row justify-between gap-8 ">
                <div className="flex flex-col items-center sm:items-start space-y-4">
                  <a
                    href="#"
                    className="text-black text-base font-['Cygre_Book'] leading-none hover:opacity-70 transition-opacity"
                  >
                    о нас
                  </a>
                  <a
                    href="/products"
                    className="text-black text-base font-['Cygre_Book'] leading-none hover:opacity-70 transition-opacity"
                  >
                    продукты
                  </a>
                  <a
                    href="/vacancies"
                    className="text-black text-base font-['Cygre_Book'] leading-none hover:opacity-70 transition-opacity"
                  >
                    вакансии
                  </a>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4">
                  <a
                    href="mailto:hzcompanyteam@gmail.com"
                    className="text-black text-base font-['Cygre_Book'] leading-none hover:opacity-70 transition-opacity"
                  >
                    hzcompanyteam@gmail.com
                  </a>
                  <a
                    href="tel:+79252283698"
                    className="text-black text-base font-['Cygre_Book'] leading-none hover:opacity-70 transition-opacity"
                  >
                    +7 (925) 228 36 98
                  </a>
                  <div className="flex items-center justify-center  flex-col space-y-4">
                    <a
                      href="https://t.me/hzcompanypr"
                      className="text-black text-base font-['Cygre_Book'] leading-none hover:opacity-70 transition-opacity"
                    >
                      telegram
                    </a>

                    <a
                      href="https://www.instagram.com/hzpank/"
                      className="text-black text-base font-['Cygre_Book'] leading-none hover:opacity-70 transition-opacity"
                    >
                      instagram
                    </a>
                    <a
                      href="https://x.com/hzpank"
                      className="text-black text-base font-['Cygre_Book'] leading-none hover:opacity-70 transition-opacity"
                    >
                      x
                    </a>
                    <a
                      href="https://www.youtube.com/@hzpank"
                      className="text-black text-base font-['Cygre_Book'] leading-none hover:opacity-70 transition-opacity"
                    >
                      youtube
                    </a>
                    <a
                      href="#"
                      className="text-black text-base font-['Cygre_Book'] leading-none hover:opacity-70 transition-opacity"
                    >
                      tik tok
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center  sm:justify-start   space-y-4 sm:items-end">
                  <div className="text-black text-base font-['Cygre_Book'] leading-none">
                    @ hzcompany 2025
                  </div>
                  <div className="text-black text-base font-['Cygre_Book'] leading-none">
                    designed by Ivan Peter
                  </div>
                  <div className="text-black text-base font-['Cygre_Book'] leading-none">
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
