import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-[100%] px-4 sm:px-2 lg:px-2 py-12 sm:py-16">
        <div className="flex items-center justify-center md:justify-between flex-col sm:flex-row">
          <div className="space-y-3 flex flex-col items-center md:items-start">
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

          <div className="w-full flex justify-center md:justify-end">
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center">
              <a
                href="https://www.tiktok.com/@hzcompan"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center font-cygre lowercase transition-colors border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
              >
                tt
              </a>
              <a
                href="https://t.me/hzcompanypr"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center font-cygre lowercase transition-colors border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
              >
                tg
              </a>
              <a
                href="https://www.youtube.com/@hzcompanik"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center font-cygre lowercase transition-colors border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
              >
                yt
              </a>

            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2 text-black dark:text-white text-base font-cygre px-4 sm:px-6 lg:px-4">
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
