import satori from "satori";
import sharp from "sharp";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");

// ---------------------------------------------------------------------------
// Brand tokens
// ---------------------------------------------------------------------------

const WIDTH = 1200;
const HEIGHT = 630;
const BG_DARK = "#111725";
const BLUE_ACCENT = "#95BEFA";
const WHITE = "#ffffff";
const FONT = "Alata";

// Logo: source 1454×417, rendered at LOGO_W wide (aspect ratio preserved).
// LOGO_PAD is applied equally to the top and right edges.
const LOGO_W = 210;
const LOGO_H = Math.round(LOGO_W * (417 / 1454)); // = 60
const LOGO_PAD = 24;

const LABEL_SIZE = 28;
const LABEL_SPACING = 5;
const META_SIZE = 26;   // date + authors
const BADGE_SIZE = 24;  // roadmap status badge
const TITLE_MAX_CHARS = 26;
const TITLE_MAX_CHARS_HERO = 20; // narrower when a hero image is present
const TITLE_LINE_GAP = 0.2;      // fraction of font size

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  "in-progress":         { bg: "#1a4a20", text: "#4caf50" },
  released:              { bg: "#1a2d4a", text: BLUE_ACCENT },
  "under-consideration": { bg: "#2a2a1a", text: "#f0c040" },
};

// ---------------------------------------------------------------------------
// Asset caching (read once per build worker)
// ---------------------------------------------------------------------------

let _font: Buffer | undefined;
let _logo: string | undefined;

function getFont(): Buffer {
  if (!_font)
    _font = readFileSync(resolve(root, "public/files/alata-latin-400-normal.woff"));
  return _font;
}

async function getLogo(): Promise<string> {
  if (!_logo) {
    const raw = readFileSync(
      resolve(root, "public/img/maplibre-logos/maplibre-logo-light-transparent-bg.png"),
    );
    _logo = (
      await sharp(raw).resize({ width: LOGO_W, height: LOGO_H, fit: "fill" }).png().toBuffer()
    ).toString("base64");
  }
  return _logo;
}

// ---------------------------------------------------------------------------
// Minimal element-tree types (compatible with satori)
// ---------------------------------------------------------------------------

type Style = Record<string, string | number>;
type VNodeChild = VNode | string | null;

interface VNode {
  type: string;
  props: { style?: Style; children?: VNodeChild | VNodeChild[]; src?: string; alt?: string };
}

const div = (style: Style, ...children: VNodeChild[]): VNode => ({
  type: "div",
  props: {
    style: { display: "flex", ...style },
    children: children.filter((c) => c !== null) as VNodeChild[],
  },
});

const img = (src: string, style: Style): VNode => ({
  type: "img",
  props: { src, alt: "", style },
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Break a title into at most maxLines word-wrapped lines of at most maxChars. */
function wrapTitle(text: string, maxChars: number, maxLines: number): string[] {
  const lines: string[] = [];
  let current = "";
  for (const word of text.split(/\s+/)) {
    if (lines.length === maxLines) break;
    const next = current ? `${current} ${word}` : word;
    if (next.length <= maxChars) {
      current = next;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current && lines.length < maxLines) lines.push(current);
  return lines;
}

/** Kebab-case slug → Title Cased display label */
export function toDisplayLabel(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Natural-language author list (max 3 names shown):
 *   1 → "Alice"          2 → "Alice and Bob"
 *   3 → "Alice, Bob and Charlie"     4+ → "Alice, Bob, Charlie, …"
 */
function formatAuthors(names: string[]): string {
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]}`;
  return `${names[0]}, ${names[1]}, ${names[2]}, \u2026`;
}

// ---------------------------------------------------------------------------
// Shared chrome
// ---------------------------------------------------------------------------

const background = (): VNode =>
  div({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: BG_DARK });

/** Section label (top-left) + MapLibre logo (top-right), both at LOGO_PAD from edges. */
function header(label: string, logo: string): VNode {
  const underlineW = Math.round(label.length * (LABEL_SIZE * 0.6 + LABEL_SPACING));
  return div(
    { position: "absolute", top: 0, left: 0, right: 0, height: 80 },
    div(
      { position: "absolute", top: LOGO_PAD, left: 60, flexDirection: "column" },
      div({ color: BLUE_ACCENT, fontSize: LABEL_SIZE, letterSpacing: LABEL_SPACING, fontFamily: FONT }, label),
      div({ width: underlineW, height: 1.5, background: BLUE_ACCENT, opacity: 0.5, marginTop: 4 }),
    ),
    img(`data:image/png;base64,${logo}`, {
      position: "absolute", top: LOGO_PAD, right: LOGO_PAD, width: LOGO_W, height: LOGO_H,
    }),
  );
}

const titleBlock = (lines: string[], size: number): VNode =>
  div(
    { flexDirection: "column", gap: Math.round(size * TITLE_LINE_GAP) },
    ...lines.map((line) => div({ color: WHITE, fontSize: size, fontFamily: FONT }, line)),
  );

async function renderToPng(element: VNode): Promise<Buffer> {
  const svg = await satori(element as unknown as Parameters<typeof satori>[0], {
    width: WIDTH,
    height: HEIGHT,
    fonts: [{ name: FONT, data: getFont(), weight: 400, style: "normal" }],
  });
  return sharp(Buffer.from(svg)).png().toBuffer();
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Generate an OG image for a news post. Pass real author display names, not slugs. */
export async function generateNewsOgImage(opts: {
  title: string;
  date: Date;
  authors: string[];
}): Promise<Buffer> {
  const { title, date, authors } = opts;
  const logo = await getLogo();
  const lines = wrapTitle(title, TITLE_MAX_CHARS, 3);
  const fontSize = lines.length === 1 ? 78 : lines.length === 2 ? 68 : 58;

  return renderToPng(
    div(
      { position: "relative", width: WIDTH, height: HEIGHT, overflow: "hidden" },
      background(),
      header("NEWS", logo),
      div(
        {
          position: "absolute", top: 100, left: 60, right: 60, bottom: 50,
          flexDirection: "column", justifyContent: "space-between",
        },
        titleBlock(lines, fontSize),
        div(
          { flexDirection: "column", gap: 14 },
          div({ color: BLUE_ACCENT, fontSize: META_SIZE, fontFamily: FONT },
            date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
          ),
          authors.length > 0
            ? div({ color: WHITE, fontSize: META_SIZE, fontFamily: FONT }, `by ${formatAuthors(authors)}`)
            : null,
        ),
      ),
    ),
  );
}

/** Generate an OG image for a roadmap item. */
export async function generateRoadmapOgImage(opts: {
  title: string;
  project: string;
  status: "under-consideration" | "in-progress" | "released";
  heroImagePath?: string;
}): Promise<Buffer> {
  const { title, project, status, heroImagePath } = opts;
  const logo = await getLogo();
  const statusColor = STATUS_COLORS[status] ?? { bg: "#222", text: WHITE };

  let heroEl: VNode | null = null;
  if (heroImagePath) {
    try {
      const resized = await sharp(readFileSync(heroImagePath))
        .resize({ width: 400, height: 350, fit: "contain", background: { r: 17, g: 23, b: 37, alpha: 1 } })
        .png()
        .toBuffer();
      heroEl = div(
        { position: "absolute", top: 100, right: 60, width: 420, height: 380, borderRadius: 14, overflow: "hidden", background: BG_DARK },
        img(`data:image/png;base64,${resized.toString("base64")}`, { width: 420, height: 380 }),
      );
    } catch { /* ignore missing hero image */ }
  }

  const lines = wrapTitle(title, heroEl ? TITLE_MAX_CHARS_HERO : TITLE_MAX_CHARS, 4);
  const fontSize = lines.length <= 2 ? 72 : 60;

  return renderToPng(
    div(
      { position: "relative", width: WIDTH, height: HEIGHT, overflow: "hidden" },
      background(),
      heroEl,
      header("ROADMAP", logo),
      div(
        {
          position: "absolute", top: 96, left: 60, right: heroEl ? 520 : 60, bottom: 50,
          flexDirection: "column", justifyContent: "space-between",
        },
        div(
          { flexDirection: "column", gap: 16 },
          div({ color: BLUE_ACCENT, fontSize: LABEL_SIZE, fontFamily: FONT }, toDisplayLabel(project)),
          titleBlock(lines, fontSize),
        ),
        div(
          {
            borderRadius: 18, padding: "10px 24px",
            background: statusColor.bg, border: `1.5px solid ${statusColor.text}`,
            color: statusColor.text, fontSize: BADGE_SIZE, fontFamily: FONT,
          },
          toDisplayLabel(status),
        ),
      ),
    ),
  );
}

