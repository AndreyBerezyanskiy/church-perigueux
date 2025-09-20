// app/[locale]/page.tsx
import { getLocale, getTranslations } from "next-intl/server";
import Container from "@/components/Container";

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <section className="bg-blue-100 py-20">
      <Container>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("welcome")}</h1>
      </Container>
    </section>
  );
}
