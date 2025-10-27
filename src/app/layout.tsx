import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/shared";
import { cygre } from "./fonts";
import { GeistSans, GeistMono } from "geist/font";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Hzcompany - Инновационный технологический холдинг",
    template: "%s | Hzcompany"
  },
  description: "hzcompany — это технологическая организация нового типа. Мы строим инфраструктуру прозрачного взаимодействия между людьми, задачами и знаниями. Формируем безопасную, гибкую и масштабируемую среду для создания ценности.",
  keywords: [
    "технологии",
    "инновации", 
    "образование",
    "инвестиции",
    "холдинг",
    "разработка",
    "стартапы",
    "финансы",
    "производство",
    "экосистема"
  ],
  authors: [{ name: "Hzcompany" }],
  creator: "Hzcompany",
  publisher: "Hzcompany",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hzcompany.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'ru-RU': '/ru',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://hzcompany.vercel.app',
    siteName: 'Hzcompany',
    title: 'Hzcompany - Технологическая организация нового типа',
    description: 'hzcompany — это технологическая организация нового типа. Мы строим инфраструктуру прозрачного взаимодействия между людьми, задачами и знаниями.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Hzcompany - Технологическая организация нового типа',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hzcompany - Технологическая организация нового типа',
    description: 'hzcompany — это технологическая организация нового типа. Мы строим инфраструктуру прозрачного взаимодействия между людьми, задачами и знаниями.',
    images: ['/twitter-image.svg'],
    creator: '@hzcompany',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: [
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#000000' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
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
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hzcompany",
              "description": "hzcompany — это технологическая организация нового типа. Мы строим инфраструктуру прозрачного взаимодействия между людьми, задачами и знаниями.",
              "url": "https://hzcompany.vercel.app",
              "logo": "https://hzcompany.com/logo.png",
              "foundingDate": "2024",
              "industry": "Technology",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "RU"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["Russian", "English"]
              },
              "sameAs": [
                "https://twitter.com/hzcompany",
                "https://linkedin.com/company/hzcompany",
                "https://github.com/hzcompany"
              ],
              "knowsAbout": [
                "Технологии",
                "Инновации",
                "Образование",
                "Инвестиции",
                "Разработка",
                "Стартапы"
              ]
            })
          }}
        />
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
