import satori from "satori";
import sharp from "sharp";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";
import { BRAND_BG, BRAND_BLUE } from "../constants";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");

const WIDTH = 1200;
const HEIGHT = 630;
export const FONT = "Alata";

// Square logo: maplibre-logo-square-for-dark-bg.svg (400×400 source).
// LOGO_SIZE controls the rendered pixel size; LOGO_PAD is applied equally
// to the top and right edges.
export const LOGO_SIZE = 80;
export const LOGO_PAD = 24;

export const LABEL_SIZE = 28;
const LABEL_SPACING = 5;
export const META_SIZE = 26; // date + authors
export const TITLE_MAX_CHARS = 26;
const TITLE_LINE_GAP = 0.2; // fraction of font size

let _font: Buffer | undefined;
let _logo: string | undefined;

function getFont(): Buffer {
  if (!_font)
    _font = readFileSync(
      resolve(root, "public/files/alata-latin-400-normal.woff"),
    );
  return _font;
}

export async function getLogo(): Promise<string> {
  if (!_logo) {
    const raw = readFileSync(
      resolve(
        root,
        "public/img/maplibre-logos/maplibre-logo-square-for-dark-bg.svg",
      ),
    );
    _logo = (
      await sharp(raw)
        .resize({ width: LOGO_SIZE, height: LOGO_SIZE })
        .png()
        .toBuffer()
    ).toString("base64");
  }
  return _logo;
}

export type Style = Record<string, string | number>;
export type VNodeChild = VNode | string | null;

export interface VNode {
  type: string;
  props: {
    style?: Style;
    children?: VNodeChild | VNodeChild[];
    src?: string;
    alt?: string;
  };
}

export const div = (style: Style, ...children: VNodeChild[]): VNode => ({
  type: "div",
  props: {
    style: { display: "flex", ...style },
    children: children.filter((c) => c !== null) as VNodeChild[],
  },
});

export const img = (src: string, style: Style): VNode => ({
  type: "img",
  props: { src, alt: "", style },
});

/** Break a title into at most maxLines word-wrapped lines of at most maxChars. */
export function wrapTitle(
  text: string,
  maxChars: number,
  maxLines: number,
): string[] {
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

export const background = (): VNode =>
  div({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: BRAND_BG,
  });

/** Section label (top-left) + MapLibre logo (top-right), both at LOGO_PAD from edges. */
export function header(label: string, logo: string): VNode {
  const underlineW = Math.round(
    label.length * (LABEL_SIZE * 0.6 + LABEL_SPACING),
  );
  return div(
    {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: LOGO_SIZE + LOGO_PAD * 2,
    },
    div(
      {
        position: "absolute",
        top: LOGO_PAD,
        left: 60,
        flexDirection: "column",
      },
      div(
        {
          color: BRAND_BLUE,
          fontSize: LABEL_SIZE,
          letterSpacing: LABEL_SPACING,
          fontFamily: FONT,
        },
        label,
      ),
      div({
        width: underlineW,
        height: 1.5,
        background: BRAND_BLUE,
        opacity: 0.5,
        marginTop: 4,
      }),
    ),
    img(`data:image/png;base64,${logo}`, {
      position: "absolute",
      top: LOGO_PAD,
      right: LOGO_PAD,
      width: LOGO_SIZE,
      height: LOGO_SIZE,
    }),
  );
}

export const titleBlock = (lines: string[], size: number): VNode =>
  div(
    { flexDirection: "column", gap: Math.round(size * TITLE_LINE_GAP) },
    ...lines.map((line) =>
      div({ color: "#ffffff", fontSize: size, fontFamily: FONT }, line),
    ),
  );

export async function renderToPng(element: VNode): Promise<Buffer> {
  const svg = await satori(
    element as unknown as Parameters<typeof satori>[0],
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [{ name: FONT, data: getFont(), weight: 400, style: "normal" }],
    },
  );
  return sharp(Buffer.from(svg)).png().toBuffer();
}
