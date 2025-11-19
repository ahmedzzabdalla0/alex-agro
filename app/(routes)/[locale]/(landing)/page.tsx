import LandingTemplate from "@/components/templates/landing";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title.home"),
  };
}

export default function LandingPage() {
  return <LandingTemplate />;
}
