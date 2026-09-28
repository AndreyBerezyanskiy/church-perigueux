import { describe, expect, it } from "vitest";

import { getContentPath, getContentSection, getContentType } from "./content-routes";

describe("content routes", () => {
  it("uses the existing French navigation paths", () => {
    expect(getContentType("fr", "nouvelles")).toBe("news");
    expect(getContentType("fr", "predications")).toBe("sermon");
  });

  it("builds a localized detail URL", () => {
    expect(getContentPath("uk", "news", "obnovlennia")).toBe(
      "/uk/novyny/obnovlennia",
    );
  });

  it("builds a localized section URL", () => {
    expect(getContentPath("fr", "event")).toBe("/fr/evenements");
  });

  it("finds the public section for a content type", () => {
    expect(getContentSection("en", "gallery")).toBe("galleries");
  });

  it("rejects a content type without a route", () => {
    expect(() => getContentSection("fr", "missing" as "news")).toThrow(
      "No route for missing in fr",
    );
  });
});
