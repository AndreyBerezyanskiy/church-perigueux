// app/[locale]/page.tsx
import { getTranslations } from "next-intl/server";
import MainBanner from "@/components/MainBanner";
import HowToGod from "@/components/HowToGod";
import GoogleMap from "@/components/GoogleMap";
import LatestContent from "@/components/content/LatestContent";
import { isLocale } from "@/i18n/config";
import { getLatestContent } from "@/sanity/content";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tMainBanner = await getTranslations({ locale, namespace: "main_banner" });
  const tHowToGod = await getTranslations({ locale, namespace: "how_to_god" });
  const tHome = await getTranslations({ locale, namespace: "home" });

  if (!isLocale(locale)) {
    return null;
  }

  const latestContent = await getLatestContent(locale);

  return (
    <>
      <MainBanner t={tMainBanner} locale={locale} />
      <HowToGod t={tHowToGod} />
      <LatestContent title={tHome("latestNews")} items={latestContent.news} type="news" locale={locale} />
      <LatestContent title={tHome("latestSermons")} items={latestContent.sermons} type="sermon" locale={locale} />
      <LatestContent title={tHome("upcomingEvents")} items={latestContent.events} type="event" locale={locale} />
      <GoogleMap />
    </>
  );
}
