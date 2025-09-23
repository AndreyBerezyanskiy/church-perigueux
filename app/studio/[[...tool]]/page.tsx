/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */
// app/studio/[[...tool]]/page.tsx
import { redirect } from "next/navigation";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

const isProd = process.env.NODE_ENV === "production";

export default function StudioPage() {
  if (isProd) {
    redirect("https://church-perigueux.sanity.studio");
  }

  return <NextStudio config={config} />;
}