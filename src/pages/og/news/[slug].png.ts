import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { generateNewsOgImage, toDisplayLabel } from "../../../lib/og-image";

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

  // Resolve author slugs → real names via the bios collection
  const bios = await getCollection("bios");
  const handleToName = Object.fromEntries(
    bios.map((bio) => [bio.data.handle, bio.data.title]),
  );
  const authorNames = post.data.authors.map(
    (slug) => handleToName[slug] ?? toDisplayLabel(slug),
  );

  const png = await generateNewsOgImage({
    title: post.data.title,
    date: post.data.date,
    authors: authorNames,
  });

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
