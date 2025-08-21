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
  title: "HZ Company",
  description: "Современное веб-приложение на Next.js",
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
      <body className="min-h-screen h-full font-cygre antialiased sm:px-20 px-2 py-10 bg-white text-black dark:bg-black dark:text-white">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var useSystem=(s===null||s==='system');var d=(s==='dark')||(useSystem&&m);var c=document.documentElement.classList;c.toggle('dark', d);}catch(e){}})();`}
        </Script>
        <Header />
        {children}
      </body>
    </html>
  );
}
