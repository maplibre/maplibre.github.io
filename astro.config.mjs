// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  base: "",
  integrations: [mdx(), solidJs()],
  output: "static",
  prefetch: true,
  site: "https://maplibre.org/",
});
