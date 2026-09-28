import type { SchemaTypeDefinition } from "sanity";

import { blogPostType } from "./blogPostType";
import { eventType } from "./eventType";
import { galleryType } from "./galleryType";
import { newsType } from "./newsType";
import { pageType } from "./pageType";
import { sermonType } from "./sermonType";
import { siteSettingsType } from "./siteSettingsType";

export const translatedSchemaTypes = [
  "page",
  "news",
  "event",
  "sermon",
  "blogPost",
  "gallery",
];

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettingsType,
  pageType,
  newsType,
  eventType,
  sermonType,
  blogPostType,
  galleryType,
];
