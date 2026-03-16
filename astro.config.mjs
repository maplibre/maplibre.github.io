// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import astroBrokenLinksChecker from "astro-broken-links-checker";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  base: "",
  integrations: [
    mdx({
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          { behavior: "wrap", properties: { className: ["heading-link"] } },
        ],
      ],
    }),
    solidJs(),
    icon(),
    sitemap(),
    astroBrokenLinksChecker({
      checkExternalLinks: false, // Optional: check external links (default: false)
      cacheExternalLinks: true, // Optional: cache verified external links to disk (default: true)
      throwError: true, // Optional: fail the build if broken links are found (default: false)
      linkCheckerDir: ".link-checker", // Optional: directory for cache and log files (default: '.link-checker')
    }),
  ],
  output: "static",
  prefetch: true,
  site: "https://maplibre.org/",
});
