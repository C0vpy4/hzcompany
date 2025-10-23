import { Fact, Hero, Txt, Ad, Projects, Form, Footer } from "@/components";

export default function Home() {
  return (
    <div className=" min-h-screen h-screen relative flex flex-col gap-20">
      <Hero />
      <Txt />
      <Fact />
      {/* <Ad /> */}
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}
