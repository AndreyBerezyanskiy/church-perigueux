import ContentCard from "./ContentCard";
import Container from "@/components/Container";
import type { ContentItem } from "@/sanity/content";
import type { ContentType } from "@/sanity/content-routes";
import { getContentPath } from "@/sanity/content-routes";
import type { Locale } from "@/i18n/config";

export default function ContentGrid({
  title,
  items,
  type,
  locale,
  readMore,
  emptyText,
}: {
  title: string;
  items: ContentItem[];
  type: ContentType;
  locale: Locale;
  readMore: string;
  emptyText: string;
}) {
  return (
    <Container>
      <section className="py-16">
        <h1 className="mb-8 text-4xl font-bold text-neutral-900">{title}</h1>
        {items.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ContentCard
                key={item._id}
                item={item}
                locale={locale}
                href={getContentPath(locale, type, item.slug)}
                readMore={readMore}
              />
            ))}
          </div>
        ) : (
          <p className="text-neutral-600">{emptyText}</p>
        )}
      </section>
    </Container>
  );
}
