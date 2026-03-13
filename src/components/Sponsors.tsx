import { onMount } from "solid-js";
import { goldSponsors, silverSponsors } from "../data/sponsors";
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
        {goldSponsors.map((s) => (
          <a href={s.href}>
            <div>
              <img src={s.logo} alt={s.name} />
            </div>
          </a>
        ))}
      </div>

      <p>
        <br />
        <b>Silver Tier</b>
        <br />
      </p>

      <div class="silver-list">
        {silverSponsors.map((s) => (
          <a href={s.href}>
            <div>
              <img src={s.logo} alt={s.name} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
