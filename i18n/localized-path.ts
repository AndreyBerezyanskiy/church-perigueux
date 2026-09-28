import { isLocale, type Locale } from "./config";
import {
  getStaticPagePath,
  getStaticPageType,
} from "./static-routes";
import {
  getContentPath,
  getContentType,
} from "@/sanity/content-routes";

export function getLocalizedPath(pathname: string, targetLocale: Locale) {
  const [, currentLocaleValue, section, ...rest] = pathname.split("/");

  if (!isLocale(currentLocaleValue) || !section) {
    return `/${targetLocale}`;
  }

  const staticPage = getStaticPageType(currentLocaleValue, section);
  if (staticPage) {
    return getStaticPagePath(targetLocale, staticPage);
  }

  const contentType = getContentType(currentLocaleValue, section);
  if (contentType) {
    return getContentPath(targetLocale, contentType, rest[0]);
  }

  return `/${targetLocale}/${section}${rest.length ? `/${rest.join("/")}` : ""}`;
}
