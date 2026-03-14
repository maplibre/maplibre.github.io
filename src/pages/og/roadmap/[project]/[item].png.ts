import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { generateRoadmapOgImage } from "../../../../lib/og-image";

export const getStaticPaths: GetStaticPaths = async () => {
  const roadmapItems = await getCollection("roadmapItems");

  return roadmapItems.map((item) => {
    const projectId = item.data.project ?? "general";
    const slug = item.id.split("/").slice(-1)[0];

    return {
      params: { project: projectId, item: slug },
      props: item,
    };
  });
};

export const GET: APIRoute = async ({ props }) => {
  const item = props as Awaited<
    ReturnType<typeof getCollection<"roadmapItems">>
  >[number];

  const heroImage = item.data.heroImage as {
    src: string;
    width: number;
    height: number;
    format: string;
    fsPath: string;
  };

  const png = await generateRoadmapOgImage({
    title: item.data.title,
    project: item.data.project ?? "general",
    status: item.data.status,
    heroImagePath: heroImage?.fsPath,
  });

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
