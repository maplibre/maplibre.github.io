import satori from "satori";
import sharp from "sharp";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");

// ---------------------------------------------------------------------------
// Asset caching (font + logo are read once per build worker)
// ---------------------------------------------------------------------------

let _fontData: Buffer | undefined;
let _logoBase64: string | undefined;

function getFontData(): Buffer {
  if (!_fontData) {
    _fontData = readFileSync(
      resolve(root, "public/files/alata-latin-400-normal.woff"),
    );
  }
  return _fontData;
}

async function getLogoBase64(): Promise<string> {
  if (!_logoBase64) {
    const logoBuffer = readFileSync(
      resolve(
        root,
        "public/img/maplibre-logos/maplibre-logo-light-transparent-bg.png",
      ),
    );
    // Source is 1454×417; preserve aspect ratio at LOGO_WIDTH wide
    const resized = await sharp(logoBuffer)
      .resize({ width: LOGO_WIDTH, height: LOGO_HEIGHT, fit: "fill" })
      .png()
      .toBuffer();
    _logoBase64 = resized.toString("base64");
  }
  return _logoBase64;
}

// ---------------------------------------------------------------------------
// Minimal element-tree types (subset of ReactNode, compatible with satori)
// ---------------------------------------------------------------------------

type Style = Record<string, string | number>;

type VNodeChild = VNode | string | null;

interface VNode {
  type: string;
  props: {
    style?: Style;
    children?: VNodeChild | VNodeChild[];
    src?: string;
    alt?: string;
  };
}

/** Create a flex-displayed div with optional children */
function div(style: Style, ...children: VNodeChild[]): VNode {
  return {
    type: "div",
    props: {
      style: { display: "flex", ...style },
      children: children.filter((c) => c !== null) as VNodeChild[],
    },
  };
}

/** Create an img element */
function img(src: string, style: Style): VNode {
  return { type: "img", props: { src, alt: "", style } };
}

/** Wrap text into lines of at most maxCharsPerLine (character-count heuristic) */
function wrapText(text: string, maxCharsPerLine: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxCharsPerLine) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      if (word.length > maxCharsPerLine) {
        let remaining = word;
        while (remaining.length > maxCharsPerLine) {
          lines.push(remaining.slice(0, maxCharsPerLine));
          remaining = remaining.slice(maxCharsPerLine);
        }
        current = remaining;
      } else {
        current = word;
      }
    }
  }
  if (current) lines.push(current);
  return lines;
}

/** Convert a kebab-case slug into a title-cased display label */
export function toDisplayLabel(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// ---------------------------------------------------------------------------
// Brand tokens (sourced from /src/pages/brand-assets.astro)
// ---------------------------------------------------------------------------

const WIDTH = 1200;
const HEIGHT = 630;

// Official MapLibre brand colors
const BG_DARK = "#111725"; // Background (dark)
const BLUE_PRIMARY = "#285DAA"; // Primary
const BLUE_ACCENT = "#95BEFA"; // Accent
const WHITE = "#ffffff";

const FONT_FAMILY = "Alata";

// Logo source is 1454×417; rendered at LOGO_WIDTH wide (aspect ratio preserved)
const LOGO_WIDTH = 210;
const LOGO_HEIGHT = Math.round(LOGO_WIDTH * (417 / 1454)); // = 60

// Section label typography constants
const SECTION_LABEL_FONT_SIZE = 20;
const SECTION_LABEL_LETTER_SPACING = 5;
// Approximate px advance per character for Alata at the label font size + letter spacing
const SECTION_LABEL_CHAR_WIDTH =
  SECTION_LABEL_FONT_SIZE * 0.6 + SECTION_LABEL_LETTER_SPACING;

// Title line gap as a fraction of font size (20% produces comfortable leading)
const TITLE_LINE_GAP_RATIO = 0.2;

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  "in-progress": { bg: "#1a4a20", text: "#4caf50" },
  released: { bg: "#1a2d4a", text: BLUE_ACCENT },
  "under-consideration": { bg: "#2a2a1a", text: "#f0c040" },
};

// ---------------------------------------------------------------------------
// Shared chrome (background, header)
// ---------------------------------------------------------------------------

/** Flat dark background — no gradients per brand guidelines */
function background(): VNode {
  return div({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: BG_DARK,
  });
}

/** Top header strip: section label left, logo right */
function header(sectionLabel: string, logoBase64: string): VNode {
  return div(
    {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 80,
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 60px",
    },
    // Section label + underline
    div(
      { flexDirection: "column" },
      div(
        {
          color: BLUE_ACCENT,
          fontSize: SECTION_LABEL_FONT_SIZE,
          letterSpacing: SECTION_LABEL_LETTER_SPACING,
          fontFamily: FONT_FAMILY,
        },
        sectionLabel,
      ),
      div({
        width: Math.round(sectionLabel.length * SECTION_LABEL_CHAR_WIDTH),
        height: 1.5,
        background: BLUE_ACCENT,
        opacity: 0.5,
        marginTop: 4,
      }),
    ),
    // MapLibre logo — exact aspect ratio, no squishing
    img(`data:image/png;base64,${logoBase64}`, {
      width: LOGO_WIDTH,
      height: LOGO_HEIGHT,
    }),
  );
}

/** Title block: render each wrapped line as a separate flex div */
function titleBlock(
  titleLines: string[],
  fontSize: number,
  style: Style = {},
): VNode {
  return div(
    {
      flexDirection: "column",
      gap: Math.round(fontSize * TITLE_LINE_GAP_RATIO),
      ...style,
    },
    ...titleLines.map((line) =>
      div({ color: WHITE, fontSize, fontFamily: FONT_FAMILY }, line),
    ),
  );
}

/** Render the root VNode tree to a PNG buffer via satori + sharp */
async function renderToPng(root: VNode): Promise<Buffer> {
  const svg = await satori(root as unknown as Parameters<typeof satori>[0], {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      {
        name: FONT_FAMILY,
        data: getFontData(),
        weight: 400,
        style: "normal",
      },
    ],
  });
  return sharp(Buffer.from(svg)).png().toBuffer();
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Generate an OG image for a news post.
 * @param authors - Real author display names (not slugs).
 */
export async function generateNewsOgImage(opts: {
  title: string;
  date: Date;
  categories: string[];
  authors: string[];
}): Promise<Buffer> {
  const { title, date, categories, authors } = opts;
  const logoBase64 = await getLogoBase64();

  const titleLines = wrapText(title, 30).slice(0, 3);
  const fontSize =
    titleLines.length === 1 ? 62 : titleLines.length === 2 ? 55 : 48;

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const metaLine = [
    formattedDate,
    authors.length > 0
      ? `by ${authors.slice(0, 2).join(", ")}${authors.length > 2 ? ` +${authors.length - 2} more` : ""}`
      : "",
  ]
    .filter(Boolean)
    .join("  ·  ");

  const categoryBadges =
    categories.length > 0
      ? div(
          { gap: 10, flexWrap: "wrap" },
          ...categories.slice(0, 4).map((cat) =>
            div(
              {
                background: BLUE_PRIMARY,
                borderRadius: 16,
                padding: "6px 16px",
                color: WHITE,
                fontSize: 15,
                fontFamily: FONT_FAMILY,
              },
              toDisplayLabel(cat),
            ),
          ),
        )
      : null;

  const element = div(
    {
      position: "relative",
      width: WIDTH,
      height: HEIGHT,
      fontFamily: FONT_FAMILY,
      overflow: "hidden",
    },
    background(),
    header("NEWS", logoBase64),
    // Main content area
    div(
      {
        position: "absolute",
        top: 100,
        left: 60,
        right: 60,
        bottom: 50,
        flexDirection: "column",
        justifyContent: "space-between",
      },
      titleBlock(titleLines, fontSize),
      div(
        { flexDirection: "column", gap: 12 },
        categoryBadges,
        div({ color: WHITE, fontSize: 19, fontFamily: FONT_FAMILY }, metaLine),
      ),
    ),
  );

  return renderToPng(element);
}

/**
 * Generate an OG image for a roadmap item.
 */
export async function generateRoadmapOgImage(opts: {
  title: string;
  project: string;
  status: "under-consideration" | "in-progress" | "released";
  heroImagePath?: string;
}): Promise<Buffer> {
  const { title, project, status, heroImagePath } = opts;
  const logoBase64 = await getLogoBase64();

  const projectLabel = toDisplayLabel(project);
  const statusLabel = toDisplayLabel(status);
  const statusColor = STATUS_COLORS[status] ?? { bg: "#222", text: WHITE };

  // Load + resize hero image if present
  let heroEl: VNode | null = null;
  if (heroImagePath) {
    try {
      const heroBuffer = readFileSync(heroImagePath);
      const heroResized = await sharp(heroBuffer)
        .resize({
          width: 400,
          height: 350,
          fit: "contain",
          background: { r: 17, g: 23, b: 37, alpha: 1 },
        })
        .png()
        .toBuffer();
      const heroBase64 = heroResized.toString("base64");
      heroEl = div(
        {
          position: "absolute",
          top: 100,
          right: 60,
          width: 420,
          height: 380,
          borderRadius: 14,
          overflow: "hidden",
          background: BG_DARK,
        },
        img(`data:image/png;base64,${heroBase64}`, {
          width: 420,
          height: 380,
        }),
      );
    } catch {
      // ignore missing hero image
    }
  }

  const maxChars = heroEl ? 22 : 30;
  const titleLines = wrapText(title, maxChars).slice(0, 4);
  const fontSize = titleLines.length <= 2 ? 55 : 46;

  const statusBadge = div(
    {
      borderRadius: 18,
      padding: "8px 20px",
      background: statusColor.bg,
      border: `1.5px solid ${statusColor.text}`,
      color: statusColor.text,
      fontSize: 16,
      fontFamily: FONT_FAMILY,
    },
    statusLabel,
  );

  const element = div(
    {
      position: "relative",
      width: WIDTH,
      height: HEIGHT,
      fontFamily: FONT_FAMILY,
      overflow: "hidden",
    },
    background(),
    heroEl,
    header("ROADMAP", logoBase64),
    // Main content area
    div(
      {
        position: "absolute",
        top: 96,
        left: 60,
        right: heroEl ? 520 : 60,
        bottom: 50,
        flexDirection: "column",
        justifyContent: "space-between",
      },
      div(
        { flexDirection: "column", gap: 16 },
        div(
          {
            color: BLUE_ACCENT,
            fontSize: 21,
            fontFamily: FONT_FAMILY,
          },
          projectLabel,
        ),
        titleBlock(titleLines, fontSize),
      ),
      statusBadge,
    ),
  );

  return renderToPng(element);
}
