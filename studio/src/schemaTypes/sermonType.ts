import { defineField, defineType } from "sanity";

import { languageField, mainImageField, slugField, titleField } from "./shared";

export const sermonType = defineType({
  name: "sermon",
  title: "Prédications",
  type: "document",
  fields: [
    languageField,
    titleField,
    slugField,
    defineField({ name: "speaker", title: "Prédicateur", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "date", title: "Date", type: "date", validation: (rule) => rule.required() }),
    defineField({
      name: "youtubeUrl",
      title: "Lien YouTube",
      type: "url",
      validation: (rule) =>
        rule.required().uri({ scheme: ["https"] }).custom((url) =>
          !url || /(^https:\/\/)(www\.)?(youtube\.com|youtu\.be)\//.test(url)
            ? true
            : "Utilisez un lien YouTube valide",
        ),
    }),
    defineField({ name: "summary", title: "Résumé", type: "text", rows: 3, validation: (rule) => rule.max(300) }),
    defineField({ name: "scripture", title: "Référence biblique", type: "string", validation: (rule) => rule.max(160) }),
    defineField({ name: "series", title: "Série", type: "string", validation: (rule) => rule.max(120) }),
    mainImageField,
    defineField({ name: "featured", title: "Mettre en avant", type: "boolean", initialValue: false }),
  ],
  orderings: [{ title: "Date, plus récente", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "speaker", media: "mainImage" } },
});
