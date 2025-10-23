import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/shared";
import { cygre } from "./fonts";
import { GeistSans, GeistMono } from "geist/font";
import Script from "next/script";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Hzcompany",
  description: "HZcompany — это инновационный холдинг, объединяющий десятки технологических, образовательных, финансовых и производственных проектов. Компания создает экосистему будущего, где технологии, образование и инвестиции работают вместе для развития человека и общества.",
  icons: {
    icon: '/icon',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="ru"
      className={`${GeistSans.variable} ${GeistMono.variable} ${cygre.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen h-full font-cygre antialiased sm:px-20 px-2 py-10 bg-white text-black dark:bg-black dark:text-white"
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(!t){localStorage.setItem('theme','light');t='light';}document.documentElement.classList.remove('dark');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})()`}
        </Script>
        <Header />
        {children}
      </body>
    </html>
  );
}
