import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AboutPage, { type BeliefItem } from "./AboutPage";

const beliefs: BeliefItem[] = [
  { title: "The Bible", body: "The Word of God." },
  { title: "The Church", body: "Christ is its head." },
];

describe("AboutPage", () => {
  it("renders the introduction and every belief", () => {
    render(
      <AboutPage
        eyebrow="Church"
        title="About us"
        intro="Our introduction"
        beliefsTitle="What we believe"
        beliefsIntro="Our shared confession"
        beliefs={beliefs}
        backLabel="Home"
        backHref="/en"
      />,
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "About us",
    );
    expect(screen.getByText("Our introduction")).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(2);
    expect(screen.getByText("The Bible")).toBeInTheDocument();
    expect(screen.getByText("The Church")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/en",
    );
  });
});
