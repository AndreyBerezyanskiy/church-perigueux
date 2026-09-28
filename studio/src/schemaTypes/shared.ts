import { defineArrayMember, defineField } from "sanity";

export const languageField = defineField({
  name: "language",
  type: "string",
  hidden: true,
  readOnly: true,
});

export const titleField = defineField({
  name: "title",
  title: "Titre",
  type: "string",
  validation: (rule) => rule.required().max(120),
});

export const slugField = defineField({
  name: "slug",
  title: "Adresse web",
  type: "slug",
  options: { source: "title", maxLength: 96 },
  validation: (rule) => rule.required(),
});

export const imageFields = [
  defineField({
    name: "alt",
    title: "Description de l'image",
    type: "string",
    validation: (rule) => rule.required().max(160),
  }),
  defineField({
    name: "caption",
    title: "Légende",
    type: "string",
    validation: (rule) => rule.max(240),
  }),
];

export const mainImageField = defineField({
  name: "mainImage",
  title: "Image principale",
  type: "image",
  options: { hotspot: true },
  fields: imageFields,
});

export const contentField = defineField({
  name: "content",
  title: "Contenu",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Titre 2", value: "h2" },
        { title: "Titre 3", value: "h3" },
        { title: "Citation", value: "blockquote" },
      ],
      lists: [
        { title: "Liste à puces", value: "bullet" },
        { title: "Liste numérotée", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Gras", value: "strong" },
          { title: "Italique", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            title: "Lien",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "URL",
                type: "url",
                validation: (rule) => rule.required(),
              }),
            ],
          },
        ],
      },
    }),
  ],
});
