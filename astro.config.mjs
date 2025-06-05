// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  // image: {
  //   domains: ["avatars.githubusercontent.com"],
  // },
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  output: "static",
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [tailwindcss()],
  },
});
