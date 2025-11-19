import { routing } from "@/i18n/routing";

export function getDirection(locale: (typeof routing.locales)[number]) {
  return locale === "en" ? "ltr" : "rtl";
}

export function removeLocale(path: string) {
  const parts = path.split("/");
  if (parts[1]?.length === 2) {
    return "/" + parts.slice(2).join("/");
  }
  return path;
}
