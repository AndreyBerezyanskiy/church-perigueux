import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Locale, locales, defaultLocale } from "@/i18n/config";
import Container from "./Container";
import { getTranslations } from "next-intl/server";
import SocialLinks from "./SocialLinks";
import LanguageSelect from "./LanguageSelect";
import BurgerHeader from "./BurgerHeader";

export default async function Header({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "header" });
  const [first, second] = t("title").split("|");
  const navItems = ["main", "about", "news", "sermons", "contacts"];
  const items = navItems.map((item) => ({ label: t(`nav.${item}.label`), path: t(`nav.${item}.path`) }));
  // const t = useTranslations("header");
  // const pathname = usePathname();

  // const getPathForLocale = (newLocale: string) => {
  //   const segments = pathname.split("/");
  //   segments[1] = newLocale;
  //   return segments.join("/") || "/";
  // };

  return (
    <header>
      <Container >
        <div className="flex justify-between items-center">
          <Link href={`/${locale}`} className="flex gap-2 items-center">
            <Image src="/logo.jpg" alt="Logo" width={120} height={120} />
            <span>{first} <br /> {second}</span>
          </Link>
          {/* Desktop */}
          <nav className="hidden md:flex">
            <ul className="flex gap-4">
              {items.map((item) => (
                <li key={item.path}>
                  <Link
                    href={`/${locale}/${item.path}`}
                    // className={pathname === `/${locale}/${t(`nav.${item}.path`)}`
                    //   ? "font-bold"
                    //   : undefined
                    // }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:flex items-center gap-4">
          <SocialLinks />
          < LanguageSelect locale={locale} />
          </div>

          {/* Mobile */}
          <BurgerHeader locale={locale} items={items} />
        </div>
      </Container>
    </header>
  )
}