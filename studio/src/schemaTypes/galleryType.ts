import { defineField, defineType } from "sanity";

import { imageFields, languageField, mainImageField, slugField, titleField } from "./shared";

export const galleryType = defineType({
  name: "gallery",
  title: "Galeries photo",
  type: "document",
  fields: [
    languageField,
    titleField,
    slugField,
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (rule) => rule.max(300) }),
    mainImageField,
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      validation: (rule) => rule.required().min(1),
      of: [{ type: "image", options: { hotspot: true }, fields: imageFields }],
    }),
  ],
  orderings: [{ title: "Date, plus récente", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "date", media: "mainImage" } },
});
