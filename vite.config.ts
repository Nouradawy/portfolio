import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "vercel",
    noExternals: ["tslib"],
  } as any,
  tanstackStart: {
    server: { entry: "server" },
  },
});
