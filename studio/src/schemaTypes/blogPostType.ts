import { defineField, defineType } from "sanity";

import { contentField, languageField, mainImageField, slugField, titleField } from "./shared";

export const blogPostType = defineType({
  name: "blogPost",
  title: "Articles de blog",
  type: "document",
  fields: [
    languageField,
    titleField,
    slugField,
    defineField({ name: "author", title: "Auteur", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "publishedAt", title: "Date de publication", type: "datetime", validation: (rule) => rule.required() }),
    defineField({ name: "excerpt", title: "Résumé", type: "text", rows: 3, validation: (rule) => rule.required().max(300) }),
    defineField({ name: "category", title: "Catégorie", type: "string", validation: (rule) => rule.max(80) }),
    defineField({ name: "tags", title: "Mots-clés", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    mainImageField,
    contentField,
    defineField({ name: "featured", title: "Mettre en avant", type: "boolean", initialValue: false }),
  ],
  orderings: [{ title: "Date de publication, plus récente", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "author", media: "mainImage" } },
});
