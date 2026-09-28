import Image from "next/image";

import type { SanityImage } from "@/sanity/content";

export default function ContentImage({
  image,
  className = "h-52 w-full object-cover",
}: {
  image?: SanityImage;
  className?: string;
}) {
  if (!image?.url) {
    return null;
  }

  return (
    <Image
      src={image.url}
      alt={image.alt || ""}
      width={1200}
      height={675}
      className={className}
    />
  );
}
