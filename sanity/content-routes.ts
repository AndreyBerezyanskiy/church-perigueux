import type { Locale } from "@/i18n/config";

export const contentTypes = [
  "news",
  "event",
  "sermon",
  "blogPost",
  "gallery",
] as const;

export type ContentType = (typeof contentTypes)[number];

const routes: Record<Locale, Record<string, ContentType>> = {
  fr: {
    nouvelles: "news",
    evenements: "event",
    predications: "sermon",
    blog: "blogPost",
    galeries: "gallery",
  },
  uk: {
    novyny: "news",
    podii: "event",
    propovidi: "sermon",
    blog: "blogPost",
    galeriyi: "gallery",
  },
  en: {
    news: "news",
    events: "event",
    sermons: "sermon",
    blog: "blogPost",
    galleries: "gallery",
  },
  ru: {
    novosti: "news",
    sobytiya: "event",
    propovedi: "sermon",
    blog: "blogPost",
    galerii: "gallery",
  },
};

export function getContentType(locale: Locale, section: string) {
  return routes[locale][section];
}

export function getContentSection(locale: Locale, type: ContentType) {
  const section = Object.entries(routes[locale]).find(
    ([, value]) => value === type,
  )?.[0];

  if (!section) {
    throw new Error(`No route for ${type} in ${locale}`);
  }

  return section;
}

export function getContentPath(
  locale: Locale,
  type: ContentType,
  slug?: string,
) {
  const path = `/${locale}/${getContentSection(locale, type)}`;
  return slug ? `${path}/${slug}` : path;
}
