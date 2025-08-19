import { Footer } from "@/components";
import { Project } from "@/components/projects/ui/Project";
import React from "react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen mt-20 flex flex-col gap-10 ">
      <Project title="HZbank" year="2021" imageSrc="/projects/hzbank.png" />
      <Project title="HZbank" year="2021" imageSrc="/projects/hzbank.png" />
      <Project title="HZbank" year="2021" imageSrc="/projects/hzbank.png" />
      <Project title="HZbank" year="2021" imageSrc="/projects/hzbank.png" />
      <Project title="HZbank" year="2021" imageSrc="/projects/hzbank.png" />
      <Project title="HZbank" year="2021" imageSrc="/projects/hzbank.png" />
      <Footer />
    </div>
  );
}
