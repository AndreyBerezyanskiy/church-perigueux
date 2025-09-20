"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Locale, locales, defaultLocale } from "@/i18n/config";
import Container from "./Container";

export default function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations("header");
  const pathname = usePathname();

  const getPathForLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/") || "/";
  };

  return (
    <header>
      <Container>
        <div className="flex">
          <span>Logo</span>
          <span>{t("title")}</span>
        </div>

      </Container>
    </header>
  )
}