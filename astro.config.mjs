// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";

export default defineConfig({
  base: "",
  integrations: [mdx(), solidJs(), icon()],
  output: "static",
  prefetch: true,
  site: "https://maplibre.org/",
});
