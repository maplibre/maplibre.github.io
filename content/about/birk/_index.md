---
title: About - Birk Skyum
weight: 10
---

<div class="text-center mb-5">
    <img
        src="https://avatars.githubusercontent.com/u/74932975?v=4"
        width="150"
        class="rounded-circle mt-3"
    />
    <h3 class="m-3">Birk Skyum</h3>
    <p>Member of the Governing Board</p>
    <p><a href="https://www.linkedin.com/in/birkskyum/">LinkedIn</a> · <a href="https://github.com/birkskyum">GitHub</a> · <a href="https://osmus.slack.com/team/U02GUMY099R">Slack</a>
</div>

Hi, I'm Birk. I've been contributing since the early days of MapLibre, and I've been on the board since the first election cycle two years ago, and it's been some constructive years. I've been honored to represent the community for this long, and I'd love to continue my work for another term.

There is a lot going on right now on all fronts, which is awesome. To give an idea about some of the concrete work I've been leading in the past year, here's a review.

# Efforts in the Past year

From 2021-2023 I spent the majority of my time working on tooling, general maintenance, testing, modern node compat, CI for native and gl js, typescript, splitting out style spec, docs etc., but that all runs well now, and we even have excellent maintainers that keeps improving on it.

This past year I directed my attention more towards community and R&D:

### DevRel - Community and ecosystem

I've been focusing on helping onboard projects that can benefit from MapLibre to our community, and make sure our compatibility in the ecosystem stays high. Notable examples are:

- [Plotly.js](https://github.com/plotly/plotly.js) (MIT-license), an awesome python plotting library, with 4m weekly downloads, that will have support maplibre from the next minor (RC release any day now), and exclusively support maplibre from next major. ( https://github.com/plotly/plotly.js/pull/7015#issuecomment-2275965617 )

- [Kepler.gl](https://kepler.gl/) (MIT-license), a great tool for data visualization, which now runs on maplibre instead of mapbox, so the entire stack is foss again. ( https://github.com/keplergl/kepler.gl/pull/2461 )

- [Deck.gl](https://deck.gl/) (MIT-license), I've been trying to facilitate better sync with deck.gl - it was requested maplibre exposed more camera internals, which is in place as part of MapLibre GL JS 4.5.2. ( https://github.com/maplibre/maplibre-gl-js/pull/3136 )

- [OpenPilot](https://github.com/commaai/openpilot) (MIT-license) - Took contact to the team. It's running MapLibre Native now https://github.com/commaai/openpilot/issues/26739

I expect to start collaborating with this team soon - there's a vote on this change in progress.

- [Apache Superset](https://github.com/apache/superset) (ofc. Apache license - 61k GitHub stars) - https://github.com/apache/superset/issues/28356

### Breaking new ground - Healthy competition amongst our renderers

In the past year I've been thinking a lot about our long-term strategy, around if we can unify maplibre to a single renderer. In that case we have to figure if it's possible to make MapLibre Native run on the web, and if MapLibre GL JS can be fast enough for mobile use, or if it's better to introduce a third renderer that's a bit of both. I don't know the answer here, but I know that we can pursue each to learn more, and then reassess at a later point. My work in this regard is:

_**Can we make Native portable?**_

I've been doing some pioneering work regarding exploring our options for [MapLibre Native Wasm](https://birkskyum.github.io/maplibre-native-wasm/) compilation to run in the browser, which I demonstrated with our first Wasm demo [here](https://birkskyum-maplibre-native-wasm.pages.dev/qt-for-webassembly/webgl1-from-opengl2-legacy-renderer/). This could be the first baby step towards increasing the portability of Native to web, thus making it truly cross-platform.

_**Can we make GL JS fast?**_

I push for our MapLibre GL JS to move forward towards a [modular graphics backend](https://github.com/maplibre/maplibre-gl-js/issues/4511), so that we can begin refactor to adopt faster WebGL2 and WebGPU functionality. I started [migrating to webgl2](https://github.com/maplibre/maplibre-gl-js/pull/2599) a year ago, but due to a lack of this refactor we had to put this work on hold, and even down-compile to webgl1. If we can make GL JS run super fast, and it already have super high portability, and a much simpler codebase, then I believe it can stand the pressure of the Native renderers.
