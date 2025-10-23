import { Footer } from "@/components";
import { Project } from "@/components/projects/ui/Project";
import React from "react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen mt-20 flex flex-col gap-10 ">
      <Project title="HZlab" year="2025" imageSrc="/projects/hzlab.png" />
      <Project title="HZrep" year="soon" imageSrc="/projects/hzrep.png" />
      
      <Footer />
    </div>
  );
}
