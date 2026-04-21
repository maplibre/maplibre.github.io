export const SITE_TITLE = "MapLibre";
export const SITE_DESCRIPTION =
  "The MapLibre Organization is an umbrella for open-source mapping libraries.";

export const BRAND_BG = "#111725";
export const BRAND_BLUE = "#95BEFA";

export const ROADMAP_STATUSES = [
  "partially-funded",
  "under-consideration",
  "in-progress",
  "released",
] as const;
export type RoadmapStatus = (typeof ROADMAP_STATUSES)[number];
