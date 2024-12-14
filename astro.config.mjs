// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  integrations: [mdx(), solidJs()],
});
