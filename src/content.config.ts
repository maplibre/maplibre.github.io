import { defineCollection } from "astro:content";
import { z } from "astro/zod";

import { glob } from "astro/loaders";
import { ROADMAP_STATUSES } from "./constants";

const news = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()),
    authors: z.array(z.string()),
    draft: z.optional(z.boolean()),
    description: z.optional(z.string()),
  }),
});

const bios = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/bio" }),
  schema: z.object({
    title: z.string(),
    handle: z.string(),
    github: z.optional(z.string()),
  }),
});

const roadmapItems = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/roadmap" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      heroImage: z.optional(
        z.preprocess(
          (val) => (typeof val === "string" ? { url: val } : val),
          z.object({
            url: image(),
            fit: z.optional(z.enum(["fill", "contain", "cover"])),
            credit: z.optional(z.string()),
            creditUrl: z.optional(z.string().url()),
          }),
        ),
      ),
      status: z.enum(ROADMAP_STATUSES),
      project: z
        .enum([
          "general",
          "maplibre-native",
          "maplibre-gl-js",
          "maplibre-tile-format",
          "martin-tile-server",
        ])
        .default("general"),
      released: z.optional(
        z.string().transform((str) => {
          const [month, year] = str.split(" ");
          return new Date(`${month} 1, ${year}`);
        }),
      ),
      links: z.optional(
        z.object({
          developer: z.optional(z.string().url()),
          funding: z.optional(z.string().url()),
        }),
      ),
    }),
});

export const collections = { news, bios, roadmapItems };
