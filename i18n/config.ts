export const locales = ["uk", "en", "fr", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uk";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}