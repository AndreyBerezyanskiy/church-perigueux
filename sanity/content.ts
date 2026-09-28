import "server-only";

import { sanityClient } from "./lib/client";
import type { ContentType } from "./content-routes";
import type { Locale } from "@/i18n/config";

export type SanityImage = {
  url?: string;
  alt?: string;
  caption?: string;
};

export type ContentItem = {
  _id: string;
  _type: ContentType | "page";
  title: string;
  slug: string;
  excerpt?: string;
  summary?: string;
  description?: string;
  content?: unknown[];
  date?: string;
  startsAt?: string;
  endsAt?: string;
  location?: string;
  speaker?: string;
  author?: string;
  youtubeUrl?: string;
  scripture?: string;
  series?: string;
  mainImage?: SanityImage;
  photos?: SanityImage[];
};

const contentProjection = `{
  _id,
  _type,
  title,
  "slug": slug.current,
  excerpt,
  summary,
  description,
  content,
  "date": coalesce(date, publishedAt),
  startsAt,
  endsAt,
  location,
  speaker,
  author,
  youtubeUrl,
  scripture,
  series,
  "mainImage": mainImage {
    "url": asset->url,
    alt,
    caption
  },
  "photos": photos[] {
    "url": asset->url,
    alt,
    caption
  }
}`;

export async function getContentList(
  type: ContentType,
  locale: Locale,
  limit = 24,
) {
  return sanityClient.fetch<ContentItem[]>(
    `*[_type == $type && language == $locale && defined(slug.current)]
      | order(coalesce(startsAt, publishedAt, date) desc)[0...$limit] ${contentProjection}`,
    { type, locale, limit },
  );
}

export async function getContentItem(
  type: ContentType,
  locale: Locale,
  slug: string,
) {
  return sanityClient.fetch<ContentItem | null>(
    `*[_type == $type && language == $locale && slug.current == $slug][0] ${contentProjection}`,
    { type, locale, slug },
  );
}

export async function getLatestContent(locale: Locale) {
  const [news, sermons, events] = await Promise.all([
    getContentList("news", locale, 3),
    getContentList("sermon", locale, 3),
    getContentList("event", locale, 3),
  ]);

  return { news, sermons, events };
}
