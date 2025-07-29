"use client";
import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="w-full bg-black py-16 px-8">
      {/* Заголовок */}
      <h1
        className="text-[200px] font-extrabold text-yellow-400 mb-16"
        style={{ fontFamily: "'Geist Sans', sans-serif" }}
      >
        PROJECTS
      </h1>

      {/* Список направлений */}
      <div className="flex flex-col gap-6">
        <div
          className="text-white text-[96px] font-mono font-bold"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          For companies
        </div>
        <div
          className="text-white text-[96px] font-mono font-bold"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          For teams
        </div>
        <div
          className="text-white text-[96px] font-mono italic"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          For peoples
        </div>
      </div>
    </section>
  );
};

export default Projects;
