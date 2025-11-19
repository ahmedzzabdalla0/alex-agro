import { Inter, Oxanium } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-primary",
});

export const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-label",
});

const defualtFonts = {
  primary: inter,
  label: oxanium,
};

export default defualtFonts;
