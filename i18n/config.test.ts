import { describe, expect, it } from "vitest";

import { defaultLocale, isLocale, locales } from "./config";

describe("locale configuration", () => {
  it("uses French as the default locale", () => {
    expect(defaultLocale).toBe("fr");
  });

  it("supports every public locale", () => {
    expect(locales).toEqual(["uk", "en", "fr", "ru"]);
  });

  it.each(locales)("accepts the %s locale", (locale) => {
    expect(isLocale(locale)).toBe(true);
  });

  it("rejects unsupported locales", () => {
    expect(isLocale("de")).toBe(false);
  });
});
