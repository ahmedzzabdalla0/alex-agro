import LandingTemplate from "@/components/templates/landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function LandingPage() {
  return <LandingTemplate />;
}
