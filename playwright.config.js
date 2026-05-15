import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://localhost:3001",
  },
  webServer: {
    command: "npx http-server test-public -p 3001 --cors -c-1",
    url: "http://localhost:3001",
    reuseExistingServer: !process.env.CI,
  },
});
