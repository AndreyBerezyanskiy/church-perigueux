import type { Locale } from "./config";

export const staticPageTypes = ["about"] as const;

export type StaticPageType = (typeof staticPageTypes)[number];

const routes: Record<Locale, Record<string, StaticPageType>> = {
  fr: { "a-propos": "about" },
  uk: { "pro-nas": "about" },
  en: { about: "about" },
  ru: { "o-tserkvi": "about" },
};

export function getStaticPageType(locale: Locale, section: string) {
  return routes[locale][section];
}

export function getStaticPageSection(locale: Locale, type: StaticPageType) {
  const section = Object.entries(routes[locale]).find(
    ([, value]) => value === type,
  )?.[0];

  if (!section) {
    throw new Error(`No static route for ${type} in ${locale}`);
  }

  return section;
}

export function getStaticPagePath(locale: Locale, type: StaticPageType) {
  return `/${locale}/${getStaticPageSection(locale, type)}`;
}
