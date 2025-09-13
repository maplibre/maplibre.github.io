---
title: Birk Skyum
handle: birk
---

<div class="text-center mb-5">
    <img
        src="https://avatars.githubusercontent.com/u/74932975?v=4"
        width="150"
        class="rounded-circle mt-3"
    />
    <h3 class="m-3">Birk Skyum</h3>
    <p>Co-founder of MapLibre and Member of the Governing Board</p>
    <p><a href="https://www.linkedin.com/in/birkskyum/">LinkedIn</a> · <a href="https://github.com/birkskyum">GitHub</a> · <a href="https://osmus.slack.com/team/U02GUMY099R">Slack</a>
</div>

My name is Birk Skyum, and I'm a co-founder of MapLibre. It's a privilege to work with so many passionate and talented contributors, and I'm grateful for the progress we've made together as a community. I’d be truly honored to serve another term and help keep our open stack, and our shared vision, moving forward.

My approach is simple: focus on what brings the most long-term strategic value to MapLibre and its users. Here’s a snapshot of some things I’ve worked on this past year.

### My Contributions This Year

_Feature development:_

- **Globe support** – Added projection expression syntax to the style spec for adaptive projection transitions ([PR](https://github.com/maplibre/maplibre-style-spec/pull/888))
- **Globe support** – Enabled terrain features for globe mode in MapLibre GL JS ([PR](https://github.com/maplibre/maplibre-gl-js/pull/4977))

_Maintenance tasks:_

- **GL JS Testing and Coverage** – Modernized tests by moving from Jest to Vitest ([PR](https://github.com/maplibre/maplibre-gl-js/pull/4728)). This is a stepping stone toward adopting [Rolldown](https://rolldown.rs/), which will make our GL JS toolchain much faster.
- **WIP – MapLibre Native Qt SDK** – Adding Vulkan, Metal, and OpenGL 3+ support ([PR](https://github.com/maplibre/maplibre-native-qt/pull/216)). This upgrade is key for expanding our reach among automotive OEMs and Qt developers.

_Community contributions:_

- [**Made with MapLibre**](https://madewithmaplibre.com/) – I started this showcase to highlight great projects and help boost MapLibre adoption.
- **Growing MapLibre in Python** – I led the migration to MapLibre GL JS as the default for plotly.js v3 ([writeup](https://plotly.com/blog/plotly-is-switching-to-maplibre/)). With plotly.py v6 ([released Jan 28](https://github.com/plotly/plotly.py/releases/tag/v6.0.0)), MapLibre is now poised to become a go-to for Python mapping (plotly.py has [500k-1m daily downloads](https://pypistats.org/packages/plotly)), which is bringing new people into our community.
- **Cross-Platform SDKs** – Cross-platform SDKs continue to be a popular choice among mobile developers [trends](https://makeitnew.io/cross-platform-mobile-development-trends-you-need-to-know-in-2025-a00ff6cc34f3). This year, I’ve worked to support onboarding and facilitate maintenance for all four of our MapLibre Native cross-platform SDKs—React Native, Compose, Flutter, and Qt, so we can offer users a strong and unified experience.
- **TSC Meetings** – I regularly attend our Native and GL JS meetings to stay in sync and always be available for feedback or support.

---

### My Vision and Priorities for the Board

My goal is simple: make MapLibre the highest-quality, most widely adopted map rendering stack in the world. I’m excited about what’s ahead and want to help keep our momentum going:

- Push GL JS forward with [Luma.gl](https://luma.gl/) for WebGL2 and WebGPU support
- Help Native strengthen Vulkan/Metal support and remove blockers for broader industry adoption
- Move forward an additional WebGPU backed on Native, aimed at the web target, for long-term strategic reasons.

- Explore new Native features (like Globe or Terrain) to close the gap with GL JS

- Improve support for AR/VR and 3D engines

- Improve support for in-car navigation (e.g. upgrade Qt SDK, C FFI)
- See the MapLibre Tile format adopted in real-world cases
- Support Martin in delivering server-rendering with MapLibre Native
- Experiment with AI tools for repetitive or time-consuming tasks to boost productivity

### Making MapLibre Portable: Cross-Platform Ambitions

To help us stay ahead of the curve, I plan to keep experimenting with emerging tech and share what I learn with the board:

**MapLibre Native in the Browser** – Last year, we got Native running in the browser with WebAssembly ([demo](https://birkskyum.github.io/maplibre-native-wasm/)). There’s lots of room to improve performance and build paths, so my next focus is a WebGL2 build for the drawables renderer, right after the [Qt SDK refactor](https://github.com/maplibre/maplibre-native-qt/pull/216) lands. I think we can have WebGL2 ready before year’s end, and then WebGPU is up next.

**MapLibre GL JS Beyond the Browser** – Once GL JS is fully migrated to luma.gl, I’d like to explore its potential outside the browser, such as for server rendering or desktop/mobile apps.
