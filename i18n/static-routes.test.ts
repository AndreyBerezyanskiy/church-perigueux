import { describe, expect, it } from "vitest";

import {
  getStaticPagePath,
  getStaticPageSection,
  getStaticPageType,
} from "./static-routes";

describe("static page routes", () => {
  it("recognizes localized about routes", () => {
    expect(getStaticPageType("fr", "a-propos")).toBe("about");
    expect(getStaticPageType("uk", "pro-nas")).toBe("about");
  });

  it("builds a localized about URL", () => {
    expect(getStaticPagePath("ru", "about")).toBe("/ru/o-tserkvi");
  });

  it("finds the section for a static page", () => {
    expect(getStaticPageSection("en", "about")).toBe("about");
  });

  it("rejects a static page without a route", () => {
    expect(() =>
      getStaticPageSection("fr", "missing" as "about"),
    ).toThrow("No static route for missing in fr");
  });
});
