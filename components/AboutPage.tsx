import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "./Container";

export type BeliefItem = {
  title: string;
  body: string;
};

type AboutPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  beliefsTitle: string;
  beliefsIntro: string;
  beliefs: BeliefItem[];
  backLabel: string;
  backHref: string;
};

export default function AboutPage({
  eyebrow,
  title,
  intro,
  beliefsTitle,
  beliefsIntro,
  beliefs,
  backLabel,
  backHref,
}: AboutPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-900 py-20 text-white md:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
        <Container>
          <div className="relative max-w-3xl">
            <Link
              href={backHref}
              className="mb-12 inline-flex items-center gap-3 text-lg font-semibold text-white transition-colors hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-900"
            >
              <ArrowLeft aria-hidden="true" size={22} />
              {backLabel}
            </Link>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">
              {eyebrow}
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300">
              {intro}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-amber-50 py-14 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
                {beliefsTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-neutral-700">
              {beliefsIntro}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-x-12 gap-y-0 lg:grid-cols-2">
            {beliefs.map((belief, index) => (
              <article
                key={belief.title}
                className="grid grid-cols-[3rem_1fr] gap-4 border-t border-neutral-200 py-8"
              >
                <span className="pt-1 text-sm font-semibold text-amber-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {belief.title}
                  </h3>
                  <p className="mt-3 leading-7 text-neutral-600">
                    {belief.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </Container>
      </section>
    </>
  );
}
