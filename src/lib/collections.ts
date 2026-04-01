import { getCollection, type CollectionEntry } from "astro:content";

type NewsFilter = (post: CollectionEntry<"news">) => boolean;

/**
 * Returns all news posts that are not drafts in production.
 * In development, all posts (including drafts) are returned.
 * An optional additional filter can be provided.
 */
export async function getPublishedNews(filter?: NewsFilter) {
  return getCollection("news", (post) => {
    if (import.meta.env.PROD && post.data.draft === true) return false;
    return filter ? filter(post) : true;
  });
}
