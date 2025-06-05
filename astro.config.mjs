// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // image: {
  //   domains: ["avatars.githubusercontent.com"],
  // },
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [tailwindcss()],
  },
});
