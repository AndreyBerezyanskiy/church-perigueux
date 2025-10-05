import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/i18n/config";
import Container from "./Container";
import { getTranslations } from "next-intl/server";
import SocialLinks from "./SocialLinks";

export default async function Footer({ locale }: { locale: Locale }) {
  const tHeader = await getTranslations({ locale, namespace: "header" });
  const tMainBanner = await getTranslations({ locale, namespace: "main_banner" });
  const [first, second] = tHeader("title").split("|");

  return (
    <footer className="py-10 md:py-40 bg-neutral-800 text-white ">
      <Container >
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center md:items-start">
          <Link href={`/${locale}`} className="flex gap-2 items-center">
            <Image src="/logo.jpg" alt="Logo" width={120} height={120} />
            <span>{first} <br /> {second}</span>
          </Link>
          <div className="flex flex-col gap-1">
            <span className="font-bold">{tMainBanner("address")}</span>
            <span>{tMainBanner("addressStreet")}</span>
            <span>{tMainBanner("addressCity")}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold">{tMainBanner("phone")}</span>
            <span>+33-7-68-34-12-45</span>
          </div>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  )
}