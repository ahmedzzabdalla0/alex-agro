import type { Metadata } from "next";
import "@/globals.css";
import { inter, oxanium } from "@/assets/shared/fonts/default";

export const metadata: Metadata = {
  title: {
    template: "%s | Alex Agro",
    default: "Alex Agro",
  },
  description:
    "Alex Agro, a leading Egyptian company in fertilizers and agricultural consulting, provides high-quality products and smart solutions to enhance soil health, boost crop yields, and promote sustainable growth.",
  appleWebApp: {
    title: "Alex Agro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oxanium.variable} bg-neutral-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
