import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { generateNewsOgImage } from "../../../lib/og-image";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("news");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post,
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const post = props as Awaited<
    ReturnType<typeof getCollection<"news">>
  >[number];

  const png = await generateNewsOgImage({
    title: post.data.title,
    date: post.data.date,
    categories: post.data.categories,
    authors: post.data.authors,
  });

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
