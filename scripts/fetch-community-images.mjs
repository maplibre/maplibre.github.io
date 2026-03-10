#!/usr/bin/env node
/**
 * Fetches community member profile images from GitHub and caches them locally.
 *
 * - Members with no cached image are always fetched.
 * - A random subset of members with an existing image are refreshed on each
 *   run so that avatars stay current over time without hitting rate limits.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");

const communityMembers = JSON.parse(
  await fs.readFile(path.join(rootDir, "src/content/community.json"), "utf-8"),
);

const imageDir = path.join(rootDir, "public/community");
await fs.mkdir(imageDir, { recursive: true });

const missingMembers = [];
const existingMembers = [];

for (const person of communityMembers) {
  const imagePath = path.join(imageDir, `${person.github}.png`);
  try {
    await fs.access(imagePath);
    existingMembers.push(person);
  } catch {
    missingMembers.push(person);
  }
}

// Refresh a random subset of members that already have an image so that
// avatars are gradually kept up-to-date without exhausting rate limits.
// With ~130 members and MAX_REFRESH=10 the full set rotates in ~13 runs.
const MAX_REFRESH = 10;
// Fisher-Yates shuffle to avoid the biased distribution of sort-based shuffling.
for (let i = existingMembers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [existingMembers[i], existingMembers[j]] = [
    existingMembers[j],
    existingMembers[i],
  ];
}
const toRefresh = existingMembers.slice(0, MAX_REFRESH);

const toFetch = [...missingMembers, ...toRefresh];

console.log(
  `Fetching ${missingMembers.length} missing image(s) and refreshing up to ${toRefresh.length} existing image(s).`,
);

for (const person of toFetch) {
  const imagePath = path.join(imageDir, `${person.github}.png`);
  try {
    const response = await fetch(
      `https://github.com/${person.github}.png?size=50`,
    );
    if (!response.ok) {
      console.error(
        `Failed to fetch image for ${person.github}: ${response.statusText}`,
      );
      continue;
    }
    const image = await response.arrayBuffer();
    await fs.writeFile(imagePath, Buffer.from(image));
    console.log(`Saved image for ${person.github}.`);
  } catch (error) {
    console.error(`Failed to fetch image for ${person.github}:`, error);
  }
}
