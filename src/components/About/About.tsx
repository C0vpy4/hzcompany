"use client";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="w-full px-8 mt-96">
      {/* Заголовок */}
      <h1
        className="text-[200px] font-extrabold text-black mb-8"
        style={{ fontFamily: "'Geist Sans', sans-serif" }}
      >
        ABOUT US
      </h1>

      {/* Первый абзац */}
      <p
        className="text-[24px] text-black mb-10 ml-35 max-w-3xl"
        style={{ fontFamily: "'Geist Mono', sans-serif" }}
      >
        HZcompany — это технологическая организация нового типа. Мы строим не просто платформу, а инфраструктуру прозрачного взаимодействия между людьми, задачами и знаниями
      </p>

      {/* Второй абзац */}
      <p
        className="text-[24px] text-black mb-10 ml-70 max-w-3xl"
        style={{ fontFamily: "'Geist Mono', sans-serif" }}
      >
        Наша цель — формировать безопасную, гибкую и масштабируемую среду, в которой каждый участник может создавать ценность и расти вместе с системой. Мы верим в силу архитектуры, дисциплины и стратегического лидерства
        Мы создаём HZcompany как долгосрочную экосистему, в которой важна не только скорость, но и устойчивость, не только рост, но и предсказуемость
      </p>

      {/* Маленький текст */}
      <p
        className="text-[24px] text-black mb-16 ml-35"
        style={{ fontFamily: "'Geist Mono', sans-serif" }}
      >
        Если вы разделяете эти ценности — добро пожаловать
      </p>

      {/* Слоган */}
      <div className="mt-35 ">
        <p
          className="text-[96px] font-bold leading-tight text-right text-black"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Update the old<br />
          create the new<br />
          build the <br />
          </p>
          <p
          className="text-[96px]  leading-tight text-right text-black"
          style={{ fontFamily: "'Geist Mono', monospace" }}
          >
          <span className="italic">unimaginable</span>
        </p>
      </div>
    </section>
  );
};

export default About;



