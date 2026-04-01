import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { getPublishedNews } from "../../../lib/collections";
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
  TITLE_MAX_CHARS,
  LOGO_PAD,
  LOGO_SIZE,
} from "../../../lib/og-image";
import { BRAND_BLUE } from "../../../constants";

/**
 * Natural-language author list (max 3 names shown):
 *   1. "Alice"
 *   2. "Alice and Bob"
 *   3. "Alice, Bob and Charlie"
 *   4. "Alice, Bob, Charlie, …"
 */
function formatAuthors(names: string[]): string {
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]}`;
  return `${names[0]}, ${names[1]}, ${names[2]}, \u2026`;
}

async function generateNewsOgImage(opts: {
  title: string;
  date: Date;
  authors: string[];
}): Promise<Buffer> {
  const { title, date, authors } = opts;
  const logo = await getLogo();
  const lines = wrapTitle(title, TITLE_MAX_CHARS, 3);
  const fontSize = lines.length === 1 ? 78 : lines.length === 2 ? 68 : 58;
  const contentTop = LOGO_PAD + 100;

  return renderToPng(
    div(
      { position: "relative", width: 1200, height: 630, overflow: "hidden" },
      background(),
      header("NEWS", logo),
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
        titleBlock(lines, fontSize),
        div(
          { flexDirection: "column", gap: 14 },
          div(
            { color: BRAND_BLUE, fontSize: META_SIZE, fontFamily: FONT },
            date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          ),
          authors.length > 0
            ? div(
                { color: "#ffffff", fontSize: META_SIZE, fontFamily: FONT },
                `by ${formatAuthors(authors)}`,
              )
            : null,
        ),
      ),
    ),
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPublishedNews();
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
