import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-[1210px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="space-y-3">
            <div className="text-black dark:text-white text-base font-cygre lowercase">
              hzcompanyteam@gmail.com
            </div>
            <div className="text-black dark:text-white text-base font-cygre lowercase">
              +79685462359
            </div>
            <a
              href="#fact"
              className="block text-black dark:text-white text-base font-cygre lowercase"
            >
              о нас
            </a>
            <a
              href="/products"
              className="block text-black dark:text-white text-base font-cygre lowercase"
            >
              продукты
            </a>
            <a
              href="/vacancies"
              className="block text-black dark:text-white text-base font-cygre lowercase"
            >
              вакансии
            </a>
            <a
              href="#form"
              className="block text-black dark:text-white text-base font-cygre lowercase"
            >
              заказать проект
            </a>
          </div>

          <div className="lg:col-span-7 ml-auto">
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-4 justify-items-center sm:justify-items-end">
              <a
                href="#"
                aria-label="VK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 border border-black dark:border-white flex items-center justify-center text-black dark:text-white font-cygre lowercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                vk
              </a>
              <a
                href="https://t.me/hzcompanypr"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 border border-black dark:border-white flex items-center justify-center text-black dark:text-white font-cygre lowercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                tg
              </a>
              <a
                href="https://www.youtube.com/@hzpank"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 border border-black dark:border-white flex items-center justify-center text-black dark:text-white font-cygre lowercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                yt
              </a>
              <a
                href="https://x.com/hzpank"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 border border-black dark:border-white flex items-center justify-center text-black dark:text-white font-cygre lowercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                x
              </a>
              <a
                href="https://www.instagram.com/hzpank/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 border border-black dark:border-white flex items-center justify-center text-black dark:text-white font-cygre lowercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                ig
              </a>
              <a
                href="#"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 border border-black dark:border-white flex items-center justify-center text-black dark:text-white font-cygre lowercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                tt
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-black dark:text-white text-base font-cygre px-4 sm:px-6 lg:px-8">
        <div>designed by Ivan Peter</div>
        <div>@ hzcompany 2025</div>
        <div>все права защищены</div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center overflow-hidden whitespace-nowrap text-black dark:text-white font-cygre leading-none text-[clamp(3rem,15vw,32rem)]">
          hzcompany
        </div>
      </div>
    </footer>
  );
};
