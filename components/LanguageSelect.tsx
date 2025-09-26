"use client";

import { useRouter, usePathname } from "next/navigation";
import { locales } from "@/i18n/config";
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
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
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
