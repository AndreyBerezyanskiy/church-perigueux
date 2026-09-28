import Link from "next/link";

import ContentImage from "./ContentImage";
import type { ContentItem } from "@/sanity/content";

export default function ContentCard({
  item,
  href,
  locale,
  readMore,
}: {
  item: ContentItem;
  href: string;
  locale: string;
  readMore: string;
}) {
  const date = item.startsAt || item.date;

  return (
    <article className="overflow-hidden rounded-lg border border-amber-100 bg-white shadow-sm">
      <ContentImage image={item.mainImage} />
      <div className="flex h-full flex-col gap-3 p-5">
        {date && (
          <time className="text-sm text-neutral-500" dateTime={date}>
            {new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(
              new Date(date),
            )}
          </time>
        )}
        <h2 className="text-xl font-semibold text-neutral-900">{item.title}</h2>
        {(item.excerpt || item.summary || item.description) && (
          <p className="text-neutral-700">
            {item.excerpt || item.summary || item.description}
          </p>
        )}
        {(item.speaker || item.author) && (
          <p className="text-sm text-neutral-600">{item.speaker || item.author}</p>
        )}
        <Link className="mt-auto font-medium text-amber-700 hover:underline" href={href}>
          {readMore}
        </Link>
      </div>
    </article>
  );
}
