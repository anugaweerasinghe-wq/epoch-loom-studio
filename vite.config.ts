import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitropack/vite";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      nitro({
        preset: "vercel",
      }),
    ],
  },
});
