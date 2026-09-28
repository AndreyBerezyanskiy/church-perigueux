import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { languages } from "./src/config/languages";
import { readStudioEnvironment } from "./src/config/environment";
import { schemaTypes, translatedSchemaTypes } from "./src/schemaTypes";
import { structure } from "./src/structure";

const environment = readStudioEnvironment({
  SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
  SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
});

export default defineConfig({
  name: "default",
  title: "Église Baptiste Évangélique de Périgueux",
  ...environment,
  plugins: [
    structureTool({ structure }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: languages,
      schemaTypes: translatedSchemaTypes,
      apiVersion: "2026-08-30",
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
