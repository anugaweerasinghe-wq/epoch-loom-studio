// @lovable.dev/vite-tanstack-config already includes everything needed.
// Do NOT add any extra plugins (like nitro) – Appwrite will handle the build.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
