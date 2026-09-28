import { defineField, defineType } from "sanity";

import { imageFields } from "./shared";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({ name: "churchName", title: "Nom de l'église", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "logo", title: "Logo", type: "image", fields: imageFields }),
    defineField({ name: "address", title: "Adresse", type: "text", rows: 3, validation: (rule) => rule.required().max(300) }),
    defineField({ name: "phone", title: "Téléphone", type: "string", validation: (rule) => rule.max(40) }),
    defineField({ name: "email", title: "E-mail", type: "string", validation: (rule) => rule.email() }),
    defineField({ name: "facebookUrl", title: "Facebook", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram", type: "url" }),
    defineField({ name: "youtubeUrl", title: "YouTube", type: "url" }),
    defineField({ name: "mapEmbedUrl", title: "Lien Google Maps", type: "url" }),
  ],
});
