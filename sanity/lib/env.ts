const DEFAULT_DATASET = "production";
const API_VERSION = "2026-08-30";

type SanityEnvironment = {
  NEXT_PUBLIC_SANITY_PROJECT_ID?: string;
  NEXT_PUBLIC_SANITY_DATASET?: string;
};

export function readSanityEnvironment(env: SanityEnvironment) {
  const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
  const dataset =
    env.NEXT_PUBLIC_SANITY_DATASET?.trim() || DEFAULT_DATASET;

  if (!projectId) {
    throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID is required");
  }

  return {
    projectId,
    dataset,
    apiVersion: API_VERSION,
  };
}
