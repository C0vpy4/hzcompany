import type { Metadata } from "next";
import { Header } from "@/shared/Header";
import "./globals.css";
import About from "@/components/About/About";
import OurTeam from "@/components/Ourteam/Ourteam";
import Projects from "@/components/projects/Projects";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "HZ Company",
  description: "Современное веб-приложение на Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-[#FED702] font-sans antialiased">
        <Header />
        {children}
        <About />
        <OurTeam />
        <Projects />
      </body>
    </html>
  );
}
