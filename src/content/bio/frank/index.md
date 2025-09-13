---
title: Frank Elsinga
handle: frank
---

<div class="text-center mb-5">
    <img
        src="https://avatars.githubusercontent.com/u/26258709?v=4"
        width="150"
        class="rounded-circle mt-3"
    />
    <h3 class="m-3">Frank Elsinga</h3>
    <p>Member of the Governing Board</p>
    <p><a href="https://www.linkedin.com/in/frankelsinga/">LinkedIn</a> · <a href="https://github.com/CommanderStorm">GitHub</a> · <a href="https://osmus.slack.com/team/U07SNL36BN3">Slack</a>
</div>

My name is Frank, and I work at the TU Munich, where I focus on geospatial and open-source projects.
I am at the start of my career and have much to learn.
While I’m early in my career, I bring fresh energy and a strong commitment to connecting MapLibre with two communities I know well: research and governments.
I believe these connections can unlock new opportunities for funding, collaboration, and long-term sustainability.

## My Contributions This Year

I have been a maintainer of `maplibre/martin` starting at `v0.15.0`.

Implemented Features

- Developed a [frontend interface](https://github.com/maplibre/martin/releases/taag/v0.18.0) ([demo](https://nav.tum.de/tiles/)) for easier exploration of tiles.
- Add [ETag Headers](https://github.com/maplibre/martin/releases/tag/v0.17.0) for better caching
- Integrate [serving MapLibre styles](https://github.com/maplibre/martin/releases/tag/v0.16.0), simplifying deployments and laying the groundwork for deeper integrations
- [SDF icons](https://github.com/maplibre/martin/releases/taag/v0.15.0) enabling SVG-like rendering of scalable symbols

Maintenance

- Reworked Martin's CI, saving 30% of runtime and sped up contributor feedback cycles
- Reworked Martin's documentation to make us more approachable for new contributors/users
- Answered/reviewed issues, discussions, PRs, … ⇒ regular maintainer things
- Reworked smaller parts of maplibre.org like news or about us to be better fitting

Community engagement:

- Regularly attend TSC meetings to stay aligned with project direction
- I attended the following conferences this year so far:
  - FOSDEM to become a better OSS maintainer
  - FOSSGIS to get a feel for the geo community
  - FOSS4G Europe to advertise Martin and talk to other developers

## My goals as a board member

### R&D / Funding

- Build a more solid foundation with academia
  - A clear offer statement (⇒ thesis, but also general papers) and
  - in the research-outreach direction
- Revisit governmental funding.
  There are a few ongoing initiatives in Europe where participating might be interesting and where I think we should at least apply.
  There are other initiatives on route to make governmental OSS contracting less painful, where we should likely contribute as well.

### Making MapLibre a stronger community

- Improve relationships with our integrations.
  Both in our official wording being less dismissive and in small gestures, I want to see some appreciation towards their maintainers.
  I would advocate for supporting maintainers to advertise their work at local (tool-specific) conferences or via special merch.
- At Open Source @ TUM, I introduced small, dual-purpose “Christmas” gifts for contributions past a semi-arbitrary bar with great effect. Sending a bit of merch and a handwritten card goes a long way.
  Being an international community, we would need to be more diverse in the concrete messaging (Christmas, Hanukkah, …), but the idea should be transferable.
  <details><summary>Mockup (click to expand)</summary>

  <img width="50%" alt="image" src="https://github.com/user-attachments/assets/bab69ba6-fcfc-448b-ae5a-f43a9499bda6" />

  </details>

- Apply more of [“isovalents learnings” around building communities](https://archive.fosdeam.org/2024/schedule/event/fosdem-2024-2776-building-an-open-source-community-one-friend-at-a-time/).

## My goals unrelated to the board

- Rework the roadmap at https://maplibre.org/roadmap to be clearer and more visually appealing
  - Explain what the roadmap is (how items get added, what being on the roadmap eans)
  - Propose a less strict option for non-core projects like martin to have a roadmap, but communicate that this is volunteer-driven
- Release [Martin v1.0](https://github.com/maplibre/martin/discussions/1805)
- Make `maplibre-native-rs` production-ready and usable in more than just Martin's context
- Experiment with bringing cheaper MLT conversion into Martin
- Help in the MLT pushdown/onboarding effort in the tooling we rely on
- Help to present Maplibre at FOSDEM, FOSSGIS, IAA and other more local conferences not already covered by @nyurik to gain/keep mind share

### A little more about me

In my spare time, I contribute to open-source projects.
My journey in the community started with a local student club, [`Open Source @ TUM e.V.`](https://tum.dev), I helped revive it from just one active alumnus into a hub with €5k/year in funding.

As part of this club, I started a [Roomfinder](https://nav.tum.de/navigate?coming_from=5510.02.001&q_from=Chemie&from=chemie&q_to=MW+2001+Rudolf-Diesel-H%C3%B6rsaal&to=5510.02.001&mode=pedestrian) which gradually began to replace the three different legacy Roomfinders our university had accrued at this point.
Initially built on Mapbox, this choice quickly outgrew our budget, leading to a migration to a self-hosted solution.
Originally, we migrated to TileServer GL and then used Martin after contributing SDF sprites support.

Work wise, I am employed by the TU Munich as a student assistant to work on our Roomfinder.
We use MapLibre GL JS and Martin.
