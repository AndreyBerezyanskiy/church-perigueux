import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import ContentArticle from "@/components/content/ContentArticle";
import { isLocale } from "@/i18n/config";
import { getContentItem } from "@/sanity/content";
import { getContentType } from "@/sanity/content-routes";

export default async function ContentDetailPage({
  params,
}: {
  params: Promise<{ locale: string; section: string; slug: string }>;
}) {
  const { locale: localeParam, section, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const type = getContentType(localeParam, section);
  if (!type) {
    notFound();
  }

  const item = await getContentItem(type, localeParam, slug);
  if (!item) {
    notFound();
  }

  const t = await getTranslations({ locale: localeParam, namespace: "content" });

  return <ContentArticle item={item} locale={localeParam} watchOnYoutube={t("watchOnYoutube")} />;
}
