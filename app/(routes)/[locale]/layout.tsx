import "@/globals.css";
import { getDirection } from "@/helpers/shared";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      template: `%s | ${t("title.default")}`,
      default: t("title.default"),
    },
    description: t("description.default"),
    appleWebApp: {
      title: t("title.default"),
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  type fonts = {
    primary: NextFontWithVariable;
    label: NextFontWithVariable;
  };

  const { primary, label } = (
    await import(`@/assets/shared/fonts/${locale}.ts`)
  ).default as fonts;

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body
        className={`${primary.variable} ${label.variable} bg-neutral-background antialiased`}
      >
        <NextIntlClientProvider messages={null}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
