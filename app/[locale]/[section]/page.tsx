import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import ContentGrid from "@/components/content/ContentGrid";
import { isLocale } from "@/i18n/config";
import { getContentList } from "@/sanity/content";
import { getContentType } from "@/sanity/content-routes";

export default async function ContentListPage({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale: localeParam, section } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const type = getContentType(localeParam, section);
  if (!type) {
    notFound();
  }

  const items = await getContentList(type, localeParam);
  const t = await getTranslations({ locale: localeParam, namespace: "content" });

  return (
    <ContentGrid
      title={t(`${type}.title`)}
      items={items}
      type={type}
      locale={localeParam}
      readMore={t("readMore")}
      emptyText={t("empty")}
    />
  );
}
