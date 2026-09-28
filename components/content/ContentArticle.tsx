import { PortableText } from "@portabletext/react";
import type { ComponentProps } from "react";

import Container from "@/components/Container";
import type { ContentItem } from "@/sanity/content";
import ContentImage from "./ContentImage";

type PortableTextValue = ComponentProps<typeof PortableText>["value"];

export default function ContentArticle({
  item,
  locale,
  watchOnYoutube,
}: {
  item: ContentItem;
  locale: string;
  watchOnYoutube: string;
}) {
  const date = item.startsAt || item.date;

  return (
    <Container>
      <article className="mx-auto max-w-3xl py-16">
        {date && (
          <time className="text-sm text-neutral-500" dateTime={date}>
            {new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(
              new Date(date),
            )}
          </time>
        )}
        <h1 className="mt-3 text-4xl font-bold text-neutral-900">{item.title}</h1>
        {(item.speaker || item.author) && (
          <p className="mt-3 text-neutral-600">{item.speaker || item.author}</p>
        )}
        <ContentImage image={item.mainImage} className="my-8 h-auto w-full rounded-lg object-cover" />
        {item.youtubeUrl && (
          <p className="mb-8">
            <a className="font-medium text-amber-700 hover:underline" href={item.youtubeUrl} target="_blank" rel="noreferrer">
              {watchOnYoutube}
            </a>
          </p>
        )}
        {item.content?.length ? (
          <div className="prose prose-neutral max-w-none">
            <PortableText value={item.content as PortableTextValue} />
          </div>
        ) : (
          <p className="text-neutral-700">{item.excerpt || item.summary || item.description}</p>
        )}
      </article>
    </Container>
  );
}
