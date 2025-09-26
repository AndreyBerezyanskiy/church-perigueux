// app/[locale]/page.tsx
import { getLocale, getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import MainBanner from "@/components/MainBanner";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <MainBanner />
  );
}
