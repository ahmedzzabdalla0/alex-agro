import { Noto_Kufi_Arabic, Changa } from "next/font/google";

export const noto_kufi = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-primary",
});

export const changa = Changa({
  subsets: ["arabic", "latin"],
  weight: ["700"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-label",
});

const defualtFonts = {
  primary: noto_kufi,
  label: changa,
};

export default defualtFonts;
