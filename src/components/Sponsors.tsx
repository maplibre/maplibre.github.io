import { onMount } from "solid-js";

export const Sponsors = (props: any) => {
  function shuffleSponsorList(selector) {
    const list = document.querySelector(selector);
    if (!list) return;
    const items = Array.from(list.querySelectorAll("a"));

    // Shuffle using Fisher-Yates algorithm
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    // Append shuffled items back to their container
    items.forEach((item) => list.appendChild(item));
  }

  onMount(() => {
  shuffleSponsorList(".gold-list");
  shuffleSponsorList(".silver-list");
})
  return (
    <div id="sponsor-list">
      <h2 class="mt-6">Current Members of the Sponsorship Program</h2>
      <p>
        <b>Gold Tier</b>
        <br />
      </p>
      <div class="gold-list">
        <a href="https://aws.amazon.com/location/">
          <div>
            <img src="img/aws-logo.svg" />
          </div>
        </a>

        <a href="https://www.meta.com/">
          <div>
            <img src="img/meta-logo.svg" />
          </div>
        </a>

        <a href="https://www.microsoft.com/">
          <div>
            <img src="img/msft-logo.svg" />
          </div>
        </a>
      </div>

      <p>
        <br />
        <b>Silver Tier</b>
        <br />
      </p>

      <div class="silver-list">
        <a href="https://www.mierune.co.jp/?lang=en">
          <div>
            <img src="img/mierune-logo.svg" />
          </div>
        </a>
        <a href="https://komoot.com/">
          <div>
            <img src="img/komoot-logo.svg" />
          </div>
        </a>
        <a href="https://www.jawg.io/">
          <div>
            <img src="img/jawgmaps-logo.svg" />
          </div>
        </a>
        <a href="https://www.radar.com/">
          <div>
            <img src="img/radar-logo.svg" />
          </div>
        </a>
        <a href="https://www.mappedin.com/">
          <div>
            <img src="img/mappedin-logo.svg" />
          </div>
        </a>
        <a href="https://mapme.com/">
          <div>
            <img src="img/mapme-logo.svg" />
          </div>
        </a>
        <a href="https://www.maptiler.com/">
          <div>
            <img src="img/maptiler-logo.svg" />
          </div>
        </a>
      </div>
    </div>
  );
};
