import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/shared";

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
    <html lang="ru" className="">
      <body className="min-h-screen h-full font-cygre  font-['Cygre'] antialiased sm:px-20 px-2 py-10  ">
        <Header />
        {children}
      </body>
    </html>
  );
}
