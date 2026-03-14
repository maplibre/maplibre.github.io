import sharp from "sharp";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "../..");

// Cache the font and logo to avoid reading from disk on every call
let _fontBase64: string | undefined;
let _logoBase64: string | undefined;

function getFontBase64(): string {
  if (!_fontBase64) {
    const fontData = readFileSync(
      resolve(root, "public/files/alata-latin-400-normal.woff"),
    );
    _fontBase64 = fontData.toString("base64");
  }
  return _fontBase64;
}

async function getLogoBase64(): Promise<string> {
  if (!_logoBase64) {
    const logoBuffer = readFileSync(
      resolve(
        root,
        "public/img/maplibre-logos/maplibre-logo-light-transparent-bg.png",
      ),
    );
    const resized = await sharp(logoBuffer)
      .resize({ width: 260 })
      .png()
      .toBuffer();
    _logoBase64 = resized.toString("base64");
  }
  return _logoBase64;
}

/** Escape special XML/SVG characters */
function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Wrap text into lines of at most `maxWidth` pixels wide,
 * using an approximate character-based heuristic.
 */
function wrapTextApprox(text: string, maxCharsPerLine: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxCharsPerLine) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      // If single word is still too long, hard-break it
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

const BADGE_TEXT_SCALE = 11;
const BADGE_PADDING = 28;
const BADGE_SPACING = 40;
const MAX_BADGE_WIDTH = 200;
const MAX_BADGE_TOTAL_WIDTH = 210;

const WIDTH = 1200;
const HEIGHT = 630;

// Brand colors
const BG_DARK = "#0d1828";
const BG_MID = "#182840";
const BLUE_PRIMARY = "#306fca";
const BLUE_LIGHT = "#4a89ff";
const BLUE_SECONDARY = "#87b2f0";
const WHITE = "#ffffff";
const MUTED = "#8899bb";

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  "in-progress": { bg: "#1a4a20", text: "#4caf50" },
  released: { bg: "#1a3a4a", text: "#87b2f0" },
  "under-consideration": { bg: "#2a2a1a", text: "#f0c040" },
};

/**
 * Generate an OG image for a news post.
 */
export async function generateNewsOgImage(opts: {
  title: string;
  date: Date;
  categories: string[];
  authors: string[];
}): Promise<Buffer> {
  const { title, date, categories, authors } = opts;

  const fontBase64 = getFontBase64();
  const logoBase64 = await getLogoBase64();

  const titleLines = wrapTextApprox(title, 30).slice(0, 3);
  const fontSize =
    titleLines.length === 1 ? 64 : titleLines.length === 2 ? 58 : 50;
  const lineHeight = fontSize * 1.2;

  const titleStartY = 220;
  const titleSvg = titleLines
    .map(
      (line, i) =>
        `<text x="80" y="${titleStartY + i * lineHeight}" font-family="Alata, Liberation Sans, sans-serif" font-size="${fontSize}" fill="${WHITE}">${escapeXml(line)}</text>`,
    )
    .join("\n");

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const categoryBadges = categories
    .slice(0, 4)
    .map((cat, i) => {
      const label = cat
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      const badgeWidth = Math.min(
        label.length * BADGE_TEXT_SCALE + BADGE_PADDING,
        MAX_BADGE_WIDTH,
      );
      const x =
        80 +
        categories
          .slice(0, i)
          .reduce(
            (acc, c) =>
              acc +
              Math.min(
                c.replace(/-/g, " ").length * BADGE_TEXT_SCALE + BADGE_SPACING,
                MAX_BADGE_TOTAL_WIDTH,
              ),
            0,
          );
      return `<rect x="${x}" y="476" width="${badgeWidth}" height="32" rx="16" fill="#1058c0"/>
<text x="${x + badgeWidth / 2}" y="497" font-family="Alata, Liberation Sans, sans-serif" font-size="16" fill="${WHITE}" text-anchor="middle">${escapeXml(label)}</text>`;
    })
    .join("\n");

  const metaLine = [
    formattedDate,
    authors.length > 0
      ? `by ${authors.slice(0, 2).join(", ")}${authors.length > 2 ? ` +${authors.length - 2} more` : ""}`
      : "",
  ]
    .filter(Boolean)
    .join("  ·  ");

  const svg = buildSvg({
    fontBase64,
    logoBase64,
    sectionLabel: "NEWS",
    content: `
      ${titleSvg}
      ${categoryBadges}
      <text x="80" y="550" font-family="Alata, Liberation Sans, sans-serif" font-size="20" fill="${MUTED}">${escapeXml(metaLine)}</text>
    `,
  });

  return sharp(Buffer.from(svg)).png().toBuffer();
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

  const fontBase64 = getFontBase64();
  const logoBase64 = await getLogoBase64();

  // Labels
  const projectLabel = project
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const statusLabel = status
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const statusColor = STATUS_COLORS[status] ?? { bg: "#222", text: WHITE };

  // Embed hero image on the right side if available
  let heroImageSvg = "";
  if (heroImagePath) {
    try {
      const heroBuffer = readFileSync(heroImagePath);
      const heroResized = await sharp(heroBuffer)
        .resize({
          width: 420,
          height: 360,
          fit: "contain",
          background: { r: 24, g: 40, b: 64, alpha: 1 },
        })
        .png()
        .toBuffer();
      const heroBase64 = heroResized.toString("base64");
      heroImageSvg = `
        <rect x="720" y="140" width="430" height="360" rx="12" fill="#1a2840"/>
        <image href="data:image/png;base64,${heroBase64}" x="730" y="150" width="410" height="340" preserveAspectRatio="xMidYMid meet" clip-path="url(#heroClip)"/>
      `;
    } catch {
      // ignore missing hero image
    }
  }

  // Wrap title accounting for hero image taking right portion
  const maxChars = heroImagePath ? 22 : 30;
  const titleLines = wrapTextApprox(title, maxChars).slice(0, 4);
  const fontSize = titleLines.length <= 2 ? 58 : 48;
  const lineHeight = fontSize * 1.22;
  const titleStartY = 230;

  const titleSvg = titleLines
    .map(
      (line, i) =>
        `<text x="80" y="${titleStartY + i * lineHeight}" font-family="Alata, Liberation Sans, sans-serif" font-size="${fontSize}" fill="${WHITE}">${escapeXml(line)}</text>`,
    )
    .join("\n");

  // Status badge
  const statusBadgeWidth = statusLabel.length * 13 + 32;

  const content = `
    ${heroImageSvg}
    <!-- Project label -->
    <text x="80" y="195" font-family="Alata, Liberation Sans, sans-serif" font-size="22" fill="${BLUE_SECONDARY}">${escapeXml(projectLabel)}</text>
    <!-- Title -->
    ${titleSvg}
    <!-- Status badge -->
    <rect x="80" y="490" width="${statusBadgeWidth}" height="36" rx="18" fill="${statusColor.bg}"/>
    <rect x="80" y="490" width="${statusBadgeWidth}" height="36" rx="18" fill="none" stroke="${statusColor.text}" stroke-width="1.5"/>
    <text x="${80 + statusBadgeWidth / 2}" y="514" font-family="Alata, Liberation Sans, sans-serif" font-size="17" fill="${statusColor.text}" text-anchor="middle">${escapeXml(statusLabel)}</text>
  `;

  const svg = buildSvg({
    fontBase64,
    logoBase64,
    sectionLabel: "ROADMAP",
    content,
    heroClip: !!heroImagePath,
  });

  return sharp(Buffer.from(svg)).png().toBuffer();
}

function buildSvg(opts: {
  fontBase64: string;
  logoBase64: string;
  sectionLabel: string;
  content: string;
  heroClip?: boolean;
}): string {
  const { fontBase64, logoBase64, sectionLabel, content, heroClip } = opts;

  const heroClipDef = heroClip
    ? `<clipPath id="heroClip"><rect x="730" y="150" width="410" height="340" rx="10"/></clipPath>`
    : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <defs>
    <style>
      @font-face {
        font-family: 'Alata';
        src: url('data:font/woff;base64,${fontBase64}') format('woff');
        font-weight: 400;
        font-style: normal;
      }
    </style>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${BG_DARK};stop-opacity:1"/>
      <stop offset="100%" style="stop-color:${BG_MID};stop-opacity:1"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${BLUE_LIGHT};stop-opacity:1"/>
      <stop offset="100%" style="stop-color:${BLUE_PRIMARY};stop-opacity:1"/>
    </linearGradient>
    <linearGradient id="bottomFade" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${BG_DARK};stop-opacity:0"/>
      <stop offset="100%" style="stop-color:${BG_DARK};stop-opacity:0.8"/>
    </linearGradient>
    ${heroClipDef}
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)"/>

  <!-- Subtle dot-grid pattern for map feeling -->
  <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
    <circle cx="20" cy="20" r="1.2" fill="${BLUE_PRIMARY}" opacity="0.25"/>
  </pattern>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#dots)"/>

  <!-- Decorative diagonal lines (subtle) -->
  <g opacity="0.04" stroke="${BLUE_LIGHT}" stroke-width="1.5">
    <line x1="0" y1="0" x2="${WIDTH}" y2="${HEIGHT}"/>
    <line x1="300" y1="0" x2="${WIDTH}" y2="${HEIGHT - 300}"/>
    <line x1="600" y1="0" x2="${WIDTH}" y2="${HEIGHT - 600}"/>
    <line x1="0" y1="300" x2="${WIDTH - 300}" y2="${HEIGHT}"/>
  </g>

  <!-- Glowing circle accent (bottom right) -->
  <circle cx="1100" cy="580" r="220" fill="${BLUE_PRIMARY}" opacity="0.06"/>
  <circle cx="1100" cy="580" r="120" fill="${BLUE_PRIMARY}" opacity="0.06"/>

  <!-- Left accent bar -->
  <rect x="0" y="0" width="8" height="${HEIGHT}" fill="url(#accentGrad)"/>

  <!-- Top header strip -->
  <rect x="0" y="0" width="${WIDTH}" height="80" fill="${BG_DARK}" opacity="0.5"/>

  <!-- MapLibre logo (top right) -->
  <image href="data:image/png;base64,${logoBase64}" x="${WIDTH - 310}" y="18" width="260" height="45" preserveAspectRatio="xMidYMid meet"/>

  <!-- Section label (top left) -->
  <text x="80" y="50" font-family="Alata, Liberation Sans, sans-serif" font-size="20" fill="${BLUE_SECONDARY}" letter-spacing="5">${escapeXml(sectionLabel)}</text>
  <line x1="80" y1="58" x2="${sectionLabel.length * 20 + 80 + sectionLabel.length * 5}" y2="58" stroke="${BLUE_SECONDARY}" stroke-width="1.5" opacity="0.5"/>

  <!-- Page content -->
  ${content}

  <!-- Bottom bar -->
  <rect x="0" y="${HEIGHT - 42}" width="${WIDTH}" height="42" fill="${BG_DARK}" opacity="0.7"/>
  <text x="${WIDTH - 20}" y="${HEIGHT - 16}" font-family="Alata, Liberation Sans, sans-serif" font-size="18" fill="${MUTED}" text-anchor="end" opacity="0.8">maplibre.org</text>
</svg>`;
}
