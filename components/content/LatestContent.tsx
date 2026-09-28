import Link from "next/link";

import Container from "@/components/Container";
import type { ContentItem } from "@/sanity/content";
import type { ContentType } from "@/sanity/content-routes";
import { getContentPath } from "@/sanity/content-routes";
import type { Locale } from "@/i18n/config";

export default function LatestContent({
  title,
  items,
  type,
  locale,
}: {
  title: string;
  items: ContentItem[];
  type: ContentType;
  locale: Locale;
}) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="py-12">
      <Container>
        <h2 className="mb-6 text-3xl font-bold text-neutral-900">{title}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Link
              className="rounded-lg border border-amber-100 bg-white p-5 transition hover:border-amber-400"
              href={getContentPath(locale, type, item.slug)}
              key={item._id}
            >
              <h3 className="font-semibold text-neutral-900">{item.title}</h3>
              {(item.excerpt || item.summary) && (
                <p className="mt-2 text-sm text-neutral-600">{item.excerpt || item.summary}</p>
              )}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
