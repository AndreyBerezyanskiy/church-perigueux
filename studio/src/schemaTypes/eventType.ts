import { defineField, defineType } from "sanity";

import { contentField, languageField, mainImageField, slugField, titleField } from "./shared";

export const eventType = defineType({
  name: "event",
  title: "Événements",
  type: "document",
  fields: [
    languageField,
    titleField,
    slugField,
    defineField({ name: "startsAt", title: "Début", type: "datetime", validation: (rule) => rule.required() }),
    defineField({ name: "endsAt", title: "Fin", type: "datetime" }),
    defineField({ name: "location", title: "Lieu", type: "string", validation: (rule) => rule.max(160) }),
    defineField({ name: "registrationUrl", title: "Lien d'inscription", type: "url" }),
    mainImageField,
    contentField,
    defineField({ name: "featured", title: "Mettre en avant", type: "boolean", initialValue: false }),
  ],
  orderings: [
    { title: "Date de début, prochaine", name: "startsAtAsc", by: [{ field: "startsAt", direction: "asc" }] },
  ],
  preview: { select: { title: "title", subtitle: "startsAt", media: "mainImage" } },
});
