import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import ContentGrid from "@/components/content/ContentGrid";
import AboutPage, { type BeliefItem } from "@/components/AboutPage";
import { isLocale } from "@/i18n/config";
import { getStaticPageType } from "@/i18n/static-routes";
import { getContentList } from "@/sanity/content";
import { getContentType } from "@/sanity/content-routes";

type PageParams = Promise<{ locale: string; section: string }>;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { locale, section } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (getStaticPageType(locale, section) === "about") {
    if (locale !== "uk") {
      return {};
    }

    const t = await getTranslations({ locale, namespace: "about" });
    return { title: t("title"), description: t("intro") };
  }

  const type = getContentType(locale, section);
  if (!type) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "content" });
  return { title: t(`${type}.title`) };
}

export default async function ContentListPage({
  params,
}: {
  params: PageParams;
}) {
  const { locale: localeParam, section } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const staticPage = getStaticPageType(localeParam, section);
  if (staticPage === "about") {
    if (localeParam !== "uk") {
      notFound();
    }

    const [t, tHeader] = await Promise.all([
      getTranslations({ locale: localeParam, namespace: "about" }),
      getTranslations({ locale: localeParam, namespace: "header" }),
    ]);

    return (
      <AboutPage
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
        beliefsTitle={t("beliefsTitle")}
        beliefsIntro={t("beliefsIntro")}
        beliefs={t.raw("beliefs") as BeliefItem[]}
        backLabel={tHeader("nav.main.label")}
        backHref={`/${localeParam}`}
      />
    );
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
