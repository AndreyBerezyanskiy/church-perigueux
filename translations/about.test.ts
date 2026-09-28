import { describe, expect, it } from "vitest";

import uk from "./uk.json";

describe("about page translations", () => {
  it("contains the complete Ukrainian statement of faith", () => {
    expect(uk.about.title).toBeTruthy();
    expect(uk.about.intro).toBeTruthy();
    expect(uk.about.beliefs.length).toBeGreaterThan(0);
    expect(new Set(uk.about.beliefs.map((belief) => belief.title)).size).toBe(
      uk.about.beliefs.length,
    );

    for (const belief of uk.about.beliefs) {
      expect(belief.title).toBeTruthy();
      expect(belief.body).toBeTruthy();
    }
  });
});
