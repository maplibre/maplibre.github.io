#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

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
// With ~150 members and MAX_REFRESH=25 the full set rotates in ~6 runs.
const MAX_REFRESH = 25;
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
    const newBuffer = Buffer.from(image);

    // Compare at the pixel level to avoid committing files that are binary-
    // different but visually identical (e.g. due to PNG metadata or
    // re-compression differences on GitHub's CDN).
    try {
      const [existingMeta, newMeta] = await Promise.all([
        sharp(imagePath).metadata(),
        sharp(newBuffer).metadata(),
      ]);
      if (
        existingMeta.width === newMeta.width &&
        existingMeta.height === newMeta.height &&
        existingMeta.channels === newMeta.channels
      ) {
        const [existingPixels, newPixels] = await Promise.all([
          sharp(imagePath).raw().toBuffer(),
          sharp(newBuffer).raw().toBuffer(),
        ]);
        if (existingPixels.equals(newPixels)) {
          console.log(`Skipped ${person.github} (no visual change).`);
          continue;
        }
      }
    } catch {
      // No existing file or image is unreadable — proceed to write
    }

    await fs.writeFile(imagePath, newBuffer);
    console.log(`Saved image for ${person.github}.`);
  } catch (error) {
    console.error(`Failed to fetch image for ${person.github}:`, error);
  }
}
