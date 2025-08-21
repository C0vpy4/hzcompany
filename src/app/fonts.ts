import localFont from "next/font/local";

export const cygre = localFont({
  src: [
    {
      path: "../../public/fonts/Cygre-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cygre-ThinIt.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cygre-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cygre-LightIt.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cygre-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cygre-BookIt.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cygre-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cygre-RegularIt.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cygre-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cygre-MediumIt.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cygre-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cygre-SemiBoldIt.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cygre-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cygre-BoldIt.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cygre-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cygre-ExtraBoldIt.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/Cygre-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cygre-BlackIt.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-cygre",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

export default cygre;
