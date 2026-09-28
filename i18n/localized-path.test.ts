import { describe, expect, it } from "vitest";

import { getLocalizedPath } from "./localized-path";

describe("localized paths", () => {
  it("translates the about page path", () => {
    expect(getLocalizedPath("/uk/pro-nas", "fr")).toBe("/fr/a-propos");
  });

  it("translates content paths and keeps the slug", () => {
    expect(getLocalizedPath("/fr/nouvelles/une-annonce", "en")).toBe(
      "/en/news/une-annonce",
    );
  });

  it("translates a content list path", () => {
    expect(getLocalizedPath("/fr/predications", "uk")).toBe(
      "/uk/propovidi",
    );
  });

  it("returns the target home page from the home page", () => {
    expect(getLocalizedPath("/fr", "uk")).toBe("/uk");
  });

  it("keeps unknown nested paths while changing the locale", () => {
    expect(getLocalizedPath("/fr/inconnu/page", "en")).toBe(
      "/en/inconnu/page",
    );
    expect(getLocalizedPath("/fr/inconnu", "uk")).toBe("/uk/inconnu");
  });

  it("handles a path without a supported locale", () => {
    expect(getLocalizedPath("/unknown/page", "fr")).toBe("/fr");
  });
});
