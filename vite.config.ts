import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy target: use Vercel preset when building on Vercel, otherwise
// fall back to the Lovable sandbox default (cloudflare-module). This keeps
// the Lovable preview/published site working unchanged.
const isVercel = !!process.env.VERCEL;
const presetOverride = process.env.NITRO_PRESET ?? (isVercel ? "vercel" : undefined);

export default defineConfig(
  presetOverride ? { nitro: { preset: presetOverride } } : {},
);
