"use client";

import { useRouter, usePathname } from "next/navigation";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/i18n/localized-path";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSelect({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.push(getLocalizedPath(pathname, newLocale as Locale));
  };

  return (
    <Select onValueChange={handleChange} defaultValue={locale}>
      <SelectTrigger >
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {locales.map((lng) => (
          <SelectItem key={lng} value={lng}>
            {lng.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
