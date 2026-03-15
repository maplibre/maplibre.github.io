import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import {
  getLogo,
  renderToPng,
  background,
  header,
  titleBlock,
  div,
  wrapTitle,
  toDisplayLabel,
  FONT,
  META_SIZE,
  LABEL_SIZE,
  TITLE_MAX_CHARS,
  LOGO_PAD,
  LOGO_SIZE,
} from "../../../../lib/og-image";
import { BRAND_BLUE } from "../../../../constants";
import type { RoadmapStatus } from "../../../../constants";

const STATUS_COLOR: Record<RoadmapStatus, string> = {
  "in-progress": BRAND_BLUE,
  released: "#ffffff",
  "under-consideration": "#ffffff",
};

async function generateRoadmapOgImage(opts: {
  title: string;
  project: string;
  status: RoadmapStatus;
}): Promise<Buffer> {
  const { title, project, status } = opts;
  const logo = await getLogo();
  const statusColor = STATUS_COLOR[status];
  const lines = wrapTitle(title, TITLE_MAX_CHARS, 4);
  const fontSize = lines.length <= 2 ? 72 : 60;
  const contentTop = LOGO_PAD + 100;

  return renderToPng(
    div(
      { position: "relative", width: 1200, height: 630, overflow: "hidden" },
      background(),
      header("ROADMAP", logo),
      div(
        {
          position: "absolute",
          top: contentTop,
          left: 60,
          right: 60,
          bottom: 50,
          flexDirection: "column",
          justifyContent: "space-between",
        },
        div(
          { flexDirection: "column", gap: 16 },
          div(
            { color: BRAND_BLUE, fontSize: LABEL_SIZE, fontFamily: FONT },
            toDisplayLabel(project),
          ),
          titleBlock(lines, fontSize),
        ),
        div(
          {
            color: statusColor,
            fontSize: META_SIZE,
            fontFamily: FONT,
            fontWeight: 700,
          },
          toDisplayLabel(status),
        ),
      ),
    ),
  );
}

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

  const png = await generateRoadmapOgImage({
    title: item.data.title,
    project: item.data.project ?? "general",
    status: item.data.status,
  });

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
