// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  base: "",
  integrations: [mdx(), solidJs()],
  output: "static",
  site: "https://maplibre.org/",
  vite: {
    ssr: {
      external: ["astro/container", "@astrojs/mdx"],
    },
  },
});
