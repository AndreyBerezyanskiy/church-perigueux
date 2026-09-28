import { describe, expect, it } from "vitest";

import { schemaTypes, translatedSchemaTypes } from "./index";

describe("content schemas", () => {
  it("registers every editor-facing content type", () => {
    expect(schemaTypes.map(({ name }) => name)).toEqual([
      "siteSettings",
      "page",
      "news",
      "event",
      "sermon",
      "blogPost",
      "gallery",
    ]);
  });

  it("enables document translations for content with localized text", () => {
    expect(translatedSchemaTypes).toEqual([
      "page",
      "news",
      "event",
      "sermon",
      "blogPost",
      "gallery",
    ]);
  });

  it("keeps global site settings as a single shared document", () => {
    expect(translatedSchemaTypes).not.toContain("siteSettings");
  });
});
