import { describe, expect, it } from "vitest";

import { readStudioEnvironment } from "./environment";

describe("readStudioEnvironment", () => {
  it("normalizes the project configuration", () => {
    expect(
      readStudioEnvironment({
        SANITY_STUDIO_PROJECT_ID: " project-id ",
        SANITY_STUDIO_DATASET: " staging ",
      }),
    ).toEqual({ projectId: "project-id", dataset: "staging" });
  });

  it("defaults to the production dataset", () => {
    expect(
      readStudioEnvironment({
        SANITY_STUDIO_PROJECT_ID: "project-id",
      }).dataset,
    ).toBe("production");
  });

  it("requires a project id", () => {
    expect(() => readStudioEnvironment({})).toThrow(
      "SANITY_STUDIO_PROJECT_ID is required",
    );
  });
});
