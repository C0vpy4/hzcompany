import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/shared";
import { cygre } from "./fonts";
import { GeistSans, GeistMono } from "geist/font";

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
      lang="ru"
      className={`${GeistSans.variable} ${GeistMono.variable} ${cygre.variable}`}
    >
      <body className="min-h-screen h-full font-cygre antialiased sm:px-20 px-2 py-10">
        <Header />
        {children}
      </body>
    </html>
  );
}
