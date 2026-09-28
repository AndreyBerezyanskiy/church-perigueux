import { defineType } from "sanity";

import { contentField, languageField, mainImageField, slugField, titleField } from "./shared";

export const pageType = defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [languageField, titleField, slugField, mainImageField, contentField],
  preview: {
    select: { title: "title", subtitle: "language", media: "mainImage" },
  },
});
