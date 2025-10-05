// app/[locale]/page.tsx
import { getTranslations } from "next-intl/server";
import MainBanner from "@/components/MainBanner";
import HowToGod from "@/components/HowToGod";
import GoogleMap from "@/components/GoogleMap";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tMainBanner = await getTranslations({ locale, namespace: "main_banner" });
  const tHowToGod = await getTranslations({ locale, namespace: "how_to_god" });

  return (
    <>
      <MainBanner t={tMainBanner} />
      <HowToGod t={tHowToGod} />
      <GoogleMap />
    </>
  );
}
