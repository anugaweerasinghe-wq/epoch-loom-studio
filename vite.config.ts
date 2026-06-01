import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy target: Vercel by default, Cloudflare in the Lovable sandbox.
// Override with NITRO_PRESET=cloudflare-module if needed.
const preset =
  process.env.NITRO_PRESET ??
  (process.env.VERCEL || process.env.NOW_BUILDER ? "vercel" : "vercel");

export default defineConfig({
  nitro: { preset },
});
