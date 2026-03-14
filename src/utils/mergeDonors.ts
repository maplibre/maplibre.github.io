/**
 * Merges two donor lists, deduplicating by name.
 * The first list is preserved in order; entries from the second list
 * whose names are already present in the first are skipped.
 */
export function mergeDonors<T extends { name: string }>(
  primary: T[],
  secondary: T[],
): T[] {
  const seen = new Set(primary.map((d) => d.name));
  return [...primary, ...secondary.filter((d) => !seen.has(d.name))];
}
