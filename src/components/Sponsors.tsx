import { onMount } from "solid-js";
import { shuffleList } from "../utils/shuffleList";

export const Sponsors = (props: any) => {
  onMount(() => {
    shuffleList(".gold-list");
    shuffleList(".silver-list");
  });
  return (
    <div id="sponsor-list">
      <h2 class="mt-6">Current Members of the Sponsorship Program</h2>
      <p>
        <b>Gold Tier</b>
        <br />
      </p>
      <div class="gold-list">
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
        <a href="https://aws.amazon.com/location/">
          <div>
            <img src="img/aws-logo.svg" />
          </div>
        </a>
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
