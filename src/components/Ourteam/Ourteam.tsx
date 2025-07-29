"use client";
import React from "react";

interface TeamMember {
  name: string;
  role: string;
  imageUrl?: string;
}

interface OurTeamProps {
  title?: string;
  titleClassName?: string;
  sectionClassName?: string;
  cardClassName?: string;
  cardImageClassName?: string;
  nameClassName?: string;
  roleClassName?: string;
  arrowClassName?: string;
  members?: TeamMember[];
}

const defaultTeam = [
  { name: "Ivan Ivanov", role: "UI & UI Designeg", imageUrl: undefined },
  { name: "Ivan Ivanov", role: "UI & UI Designeg", imageUrl: undefined },
  { name: "Ivan Ivanov", role: "UI & UI Designeg", imageUrl: undefined },
];

const OurTeam: React.FC<OurTeamProps> = ({
  title = "OUR TEAM",
  titleClassName = "text-[120px] font-extrabold text-yellow-400 mb-16",
  sectionClassName = "w-full bg-black py-16 px-8",
  cardClassName = "flex flex-col items-start w-[280px]",
  cardImageClassName = "w-[280px] h-[280px] bg-white/80 rounded-md mb-4 border border-gray-300",
  nameClassName = "text-white text-lg font-medium",
  roleClassName = "text-white text-sm",
  arrowClassName = "flex items-center ml-8",
  members = defaultTeam,
}) => {
  return (
    <section className={sectionClassName}>
      {/* Заголовок */}
      <h1
        className={titleClassName}
        style={{ fontFamily: "'Geist Sans', sans-serif" }}
      >
        {title}
      </h1>

      {/* Контейнер карточек и стрелки */}
      <div className="flex items-center">
        {/* Карточки */}
        <div className="flex gap-8 flex-1 justify-center">
          {members.map((member, idx) => (
            <div key={idx} className={cardClassName}>
              {/* Фото или заглушка */}
              {member.imageUrl ? (
                <img src={member.imageUrl} alt={member.name} className={cardImageClassName} />
              ) : (
                <div className={cardImageClassName} />
              )}
              <div className={nameClassName}>{member.name}</div>
              <div className={roleClassName}>{member.role}</div>
            </div>
          ))}
        </div>
        {/* Стрелка */}
        <div className={arrowClassName}>
          <svg width="48" height="48" fill="none" stroke="#FED702" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
