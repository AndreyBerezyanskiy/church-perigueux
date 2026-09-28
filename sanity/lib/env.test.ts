import { describe, expect, it } from "vitest";

import { readSanityEnvironment } from "./env";

describe("readSanityEnvironment", () => {
  it("returns a normalized Sanity configuration", () => {
    expect(
      readSanityEnvironment({
        NEXT_PUBLIC_SANITY_PROJECT_ID: " project-id ",
        NEXT_PUBLIC_SANITY_DATASET: " staging ",
      }),
    ).toEqual({
      projectId: "project-id",
      dataset: "staging",
      apiVersion: "2026-08-30",
    });
  });

  it("uses the production dataset by default", () => {
    expect(
      readSanityEnvironment({
        NEXT_PUBLIC_SANITY_PROJECT_ID: "project-id",
      }).dataset,
    ).toBe("production");
  });

  it("requires a project id", () => {
    expect(() => readSanityEnvironment({})).toThrow(
      "NEXT_PUBLIC_SANITY_PROJECT_ID is required",
    );
  });
});
