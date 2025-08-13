export function shuffleList(selector: string): void {
  const container = document.querySelector(selector);
  if (!container) return;

  const items = Array.from(container.children);

  // Shuffle using Fisher-Yates algorithm
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  // Append shuffled items back to their container
  items.forEach((item) => container.appendChild(item));
}
