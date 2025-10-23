"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<string | null>(null);
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
    setMounted(true);
    try {
      const saved = localStorage.getItem("theme");
      if (!saved) {
        localStorage.setItem("theme", "light");
        setThemeState("light");
      } else {
        setThemeState(saved);
      }
    } catch {}
  }, []);

  // Синхронизация состояния темы с классом DOM
  useEffect(() => {
    if (!mounted || theme === null) return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, mounted]);

  // Кнопка циклично меняет тему: light <-> dark (без system)

  const cycleTheme = () => {
    const current = theme ?? "light";
    const next = current === "light" ? "dark" : "light";
    try {
      localStorage.setItem("theme", next);
      setThemeState(next);
    } catch {}
  };

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
    <div className="fixed inset-x-0 top-0 z-[100] pt-4 bg-white dark:bg-black">
      <div className="relative mx-auto w-full sm:px-20 px-2 flex justify-between py-3 items-center">
        <Link
          href="/"
          className="w-20 h-10 relative block cursor-pointer group"
          aria-label="На главную"
        >
          <div className="hidden sm:flex items-center justify-center gap-1 h-8">
            {/* Левая часть - два вертикальных прямоугольника */}
            <div className="flex gap-1">
              <div className={`w-[20px] h-10 ${theme === "dark" ? "burger-button-black" : "burger-button-white"}`} />
              <div className={`w-[20px] h-10 ${theme === "dark" ? "burger-button-black" : "burger-button-white"}`} />
            </div>
            
            {/* Правая часть - два горизонтальных прямоугольника */}
            <div className="flex flex-col justify-between h-10 gap-1">
              <div className={`w-10 h-[20px] ${theme === "dark" ? "burger-button-black" : "burger-button-white"}`} />
              <div className={`w-10 h-[20px] ${theme === "dark" ? "burger-button-black" : "burger-button-white"}`} />
            </div>
          </div>
        </Link>

        <motion.button
          aria-expanded={open}
          aria-controls="hzcompany-menu"
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.1 }}
          ref={buttonRef}
          className="w-20 h-5 absolute left-1/2 -translate-x-1/2"
        >
          <span className="sr-only">Открыть меню</span>

          <motion.div
            className={`w-20 h-px left-0 right-0 mx-auto top-0 absolute ${
              theme === "dark" ? "burger-button-black" : "burger-button-white"
            }`}
            animate={
              open
                ? { y: 9, rotate: 45, width: "50%" }
                : { y: 0, rotate: 0, width: "100%" }
            }
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <motion.div
            className={`w-20 h-px left-0 right-0 mx-auto top-[9px] absolute ${
              theme === "dark" ? "burger-button-black" : "burger-button-white"
            }`}
            animate={
              open
                ? { opacity: 0, width: "50%" }
                : { opacity: 1, width: "100%" }
            }
            transition={{ duration: 0.15 }}
          />
          <motion.div
            className={`w-20 h-px left-0 right-0 mx-auto top-[18px] absolute ${
              theme === "dark" ? "burger-button-black" : "burger-button-white"
            }`}
            animate={
              open
                ? { y: -9, rotate: -45, width: "50%" }
                : { y: 0, rotate: 0, width: "100%" }
            }
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </motion.button>

        <a
          className="hidden sm:block cursor-pointer justify-start text-black dark:text-white font-cygre text-base font-normal underline leading-none"
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
              className="absolute left-0 right-0 top-full z-50 bg-white dark:bg-black  text-black dark:text-white px-4 sm:px-6 lg:px-20 py-8 "
            >
              <div className="flex flex-col sm:flex-row justify-between gap-8 ">
                <div className="flex flex-col items-center sm:items-start space-y-4">
                  <a
                    href="#"
                    className="text-black dark:text-white text-base font-cygre leading-none hover:opacity-70 transition-opacity"
                  >
                    о нас
                  </a>
                  <a
                    href="/products"
                    className="text-black dark:text-white text-base font-cygre leading-none hover:opacity-70 transition-opacity"
                  >
                    продукты
                  </a>
                  <a
                    href="/vacancies"
                    className="text-black dark:text-white text-base font-cygre leading-none hover:opacity-70 transition-opacity"
                  >
                    вакансии
                  </a>
                  {mounted && (
                    <button
                      type="button"
                      onClick={cycleTheme}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          cycleTheme();
                        }
                      }}
                      className="text-black dark:text-white text-base font-cygre leading-none hover:opacity-70 transition-opacity cursor-pointer"
                      aria-label="Переключить тему"
                    >
                      тема:{" "}
                      {(theme ?? "light") === "light" ? "светлая" : "тёмная"}
                    </button>
                  )}
                </div>

                <div className="flex flex-col items-center justify-center space-y-4">
                  <a
                    href="mailto:hzcompanyteam@gmail.com"
                    className="text-black dark:text-white text-base font-cygre leading-none hover:opacity-70 transition-opacity"
                  >
                    hzcompanyteam@gmail.com
                  </a>
                  <a
                    href="tel:+79252283698"
                    className="text-black dark:text-white text-base font-cygre leading-none hover:opacity-70 transition-opacity"
                  >
                    +7 (968) 546 23 59
                  </a>
                  <div className="flex items-center justify-center  flex-col space-y-4">
                    <a
                      href="https://t.me/hzcompanypr"
                      className="text-black dark:text-white text-base font-cygre leading-none hover:opacity-70 transition-opacity"
                    >
                      telegram
                    </a>
                    <a
                      href="https://www.youtube.com/@hzcompanik"
                      className="text-black dark:text-white text-base font-cygre leading-none hover:opacity-70 transition-opacity"
                    >
                      youtube
                    </a>
                    <a
                      href="https://www.tiktok.com/@hzcompan"
                      className="text-black dark:text-white text-base font-cygre leading-none hover:opacity-70 transition-opacity"
                    >
                      tik tok
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center  sm:justify-start   space-y-4 sm:items-end">
                  <div className="text-black dark:text-white text-base font-cygre leading-none">
                    @ hzcompany 2025
                  </div>
                  <div className="text-black dark:text-white text-base font-cygre leading-none">
                    designed by Ivan Peter
                  </div>
                  <div className="text-black dark:text-white text-base font-cygre leading-none">
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
