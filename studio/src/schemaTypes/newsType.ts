import { defineField, defineType } from "sanity";

import { contentField, imageFields, languageField, mainImageField, slugField, titleField } from "./shared";

export const newsType = defineType({
  name: "news",
  title: "Actualités",
  type: "document",
  fields: [
    languageField,
    titleField,
    slugField,
    defineField({
      name: "excerpt",
      title: "Résumé",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    mainImageField,
    contentField,
    defineField({
      name: "gallery",
      title: "Photos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true }, fields: imageFields }],
    }),
    defineField({ name: "featured", title: "Mettre en avant", type: "boolean", initialValue: false }),
  ],
  orderings: [
    { title: "Date de publication, plus récente", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: { select: { title: "title", subtitle: "publishedAt", media: "mainImage" } },
});
