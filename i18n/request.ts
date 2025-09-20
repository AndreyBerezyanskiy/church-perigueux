// i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, Locale } from "./config";

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    locale = defaultLocale;
  }
  const baseLocale = locale.split("-")[0] as Locale;

  const currentLocale = locales.includes(baseLocale)
    ? baseLocale
    : defaultLocale;

  return {
    locale: currentLocale,
    messages: (await import(`../translations/${currentLocale}.json`)).default
  };
});
