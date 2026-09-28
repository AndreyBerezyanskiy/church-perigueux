import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Église de Périgueux")
    .items([
      S.listItem()
        .title("Paramètres du site")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("news").title("Actualités"),
      S.documentTypeListItem("event").title("Événements"),
      S.documentTypeListItem("sermon").title("Prédications"),
      S.documentTypeListItem("blogPost").title("Articles de blog"),
      S.documentTypeListItem("gallery").title("Galeries photo"),
    ]);
