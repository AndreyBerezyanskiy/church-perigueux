import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    exclude: ["studio/**", "node_modules/**"],
    coverage: {
      provider: "v8",
      include: [
        "components/AboutPage.tsx",
        "i18n/config.ts",
        "i18n/localized-path.ts",
        "i18n/static-routes.ts",
        "sanity/lib/env.ts",
        "sanity/content-routes.ts",
      ],
      thresholds: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
    },
  },
});
