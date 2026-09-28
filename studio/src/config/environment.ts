const DEFAULT_DATASET = "production";

type StudioEnvironment = {
  SANITY_STUDIO_PROJECT_ID?: string;
  SANITY_STUDIO_DATASET?: string;
};

export function readStudioEnvironment(env: StudioEnvironment) {
  const projectId = env.SANITY_STUDIO_PROJECT_ID?.trim();
  const dataset = env.SANITY_STUDIO_DATASET?.trim() || DEFAULT_DATASET;

  if (!projectId) {
    throw new Error("SANITY_STUDIO_PROJECT_ID is required");
  }

  return { projectId, dataset };
}
