import { describe, expect, it } from "vitest";

import { defaultLanguage, languages } from "./languages";

describe("Studio languages", () => {
  it("uses French as the primary language", () => {
    expect(defaultLanguage).toBe("fr");
    expect(languages[0].id).toBe(defaultLanguage);
  });

  it("matches the languages available on the website", () => {
    expect(languages.map(({ id }) => id)).toEqual(["fr", "uk", "en", "ru"]);
  });
});
