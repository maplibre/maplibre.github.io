import type { APIContext } from "astro";
import rss, { type RSSFeedItem } from "@astrojs/rss";
import {
  getCollection,
  getEntry,
  render,
  type CollectionEntry,
} from "astro:content";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import mdxRenderer from "@astrojs/mdx/server.js";
import solidRenderer from "@astrojs/solid-js/server.js";

import { transform, walk } from "ultrahtml";
import sanitize from "ultrahtml/transformers/sanitize";

import { SITE_TITLE, SITE_DESCRIPTION } from "../../constants";

// need to make this endpoint dynamic with only one path
// otherwise the astro file will take precedence
export function getStaticPaths() {
  return [{ params: { slug: "index" } }];
}

export const prerender = true;

const container = await AstroContainer.create({});
container.addServerRenderer({ renderer: mdxRenderer, name: "mdx" });
container.addServerRenderer({ renderer: solidRenderer, name: "solid" });

const getAuthors = async (authors: string[]): Promise<string> => {
  const authorEntries = await Promise.all(
    authors.map(async (author) => await getEntry("authors", author)),
  );

  const authorTitles = authorEntries
    .map((author) => author?.data?.title)
    .filter(Boolean);

  if (authorTitles.length > 1) {
    const lastAuthor = authorTitles.pop();
    return `${authorTitles.join(", ")} and ${lastAuthor}`;
  }

  return authorTitles.join(", ");
};

const getPost = async (
  context: APIContext,
  post: CollectionEntry<"news">,
): Promise<RSSFeedItem> => {
  const content = await transform(
    await container.renderToString((await render(post)).Content),
    [
      async (node) => {
        await walk(node, async (node) => {
          if (node.name === "img" && node.attributes.src?.startsWith("/")) {
            node.attributes.src = context.site + node.attributes.src.slice(1);
          }
        });
        return node;
      },
      sanitize({
        dropElements: ["script", "style"],
      }),
    ],
  );

  return {
    title: post.data.title,
    pubDate: post.data.date,
    description: post.data.description,
    author: await getAuthors(post.data.authors),
    content,
    link: `/news/${post.id}/`,
  };
};

export async function GET(context: APIContext) {
  const news = await getCollection("news");
  const items = news.sort((a, b) => +b.data.date - +a.data.date).slice(0, 15);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site || "",
    items: await Promise.all(items.map(async (post) => getPost(context, post))),
    customData: `<language>en-US</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
  });
}
