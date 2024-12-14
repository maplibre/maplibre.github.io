import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

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

const authors = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/authors" }),
  schema: z.object({
    title: z.string(),
    handle: z.string(),
    github: z.optional(z.string()),
  }),
});

const bios = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/bio" }),
  schema: z.object({
    title: z.string(),
    handle: z.string(),
  }),
});

const roadmapItems = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/roadmap" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { news, authors, bios, roadmapItems };
