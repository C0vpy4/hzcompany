import React from "react";
import { TxtVC, Vacancies } from "./components";
import { Footer } from "@/components";

export default function VacanciesPage() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <TxtVC />
      <div className="text-black self-start">доступные ваканси</div>
      <div className="flex flex-col gap-10 w-full">
        <Vacancies text="бухгалтер" right="удалёнка" />
        <Vacancies text="frontend developer" />
        <Vacancies text="backend developer" />
        <Vacancies text="designer" />
        <Vacancies text="Android&IOS dev" />
        <Vacancies text="Game developer" />
        <Vacancies text="Game designer" />
        <Vacancies text="Тестировщик" />
      </div>
      <Footer />
    </div>
  );
}
