import { Inter, Oxanium } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-inter",
});

export const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-oxanium",
});
