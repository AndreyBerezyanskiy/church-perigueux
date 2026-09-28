import { createClient } from "@sanity/client";

import { readSanityEnvironment } from "./env";

const config = readSanityEnvironment({
  NEXT_PUBLIC_SANITY_PROJECT_ID:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
});

export const sanityClient = createClient({
  ...config,
  useCdn: true,
});
