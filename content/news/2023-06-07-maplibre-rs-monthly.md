---
title: "maplibre-rs monthly (special issue)"
# prettier-ignore
date: 2023-06-07T21:46:44+02:00
categories: ["maplibre-rs"]
authors: [maxammann]
---

It is finally time for a new maplibre-rs monthly! Or should I say yearly? The last update was 2022 and we already have 2023!
The development of maplibre-rs did not come to a total standstill, even though it may look like it did.

## 📰 News

Actually, we have great news about the project.

<div style="font-size: 20px; font-weight: bold; text-align: center">🎉🎉🎉 maplibre-rs is now a supported MapLibre project! 🎉🎉🎉</div>

#### What does that mean?

You may wonder what that means: The gist of it is that the project can now use donations to the MapLibre organization to incentivize development. As of today, it is not 100% clear how that will work out. One possibility is to use the existing [bounty program](https://maplibre.org/roadmap/step-by-step-bounties-guide/) to set a bounty for issues. But we are actively looking for ideas to put the donation to good use.

#### Why did maplibre-rs become a sponsored project?

The maplibre-rs project is a research-and-development (R&D) undertaking. While there is the goal of reaching feature parity with MapLibre Native or Web, this is years away and certainly not something we can reach with the current development pace. Though, what we can achieve right now is to put new ideas to the test. New fundamental concepts are relatively easy to implement in maplibre-rs, whereas in MapLibre Native  they would need a major refactoring. For instance, maplibre-rs has already proven, that WebGPU API is sufficient to implement a map renderer. Which means that MapLibre Native could actually target WebGPU in order to reach all platforms (including the Web).

#### What will happen next?

As already mentioned, we first have to see which incentives bring maplibre-rs forward. It is very difficult to create concrete bounties that early in a project's lifetime. This is due to the fact that we actually would need to create bounties for creating bounties.

**I am planning on doing a weekly "office-hour". During that time slot I will hang out in a public meeting room, and you are free to join, ask about the project or issues and nag me if I did not yet review your PR.** More on that in a separate news article, though.

#### Who on earth decided that?

The governing board by vote! If you did not yet know, MapLibre is governed by an [elected board](https://maplibre.org/about/).
See [here](https://github.com/maplibre/maplibre/pull/282) to have more insight on the process.

---

Back to the progress in maplibre-rs.
A lot has happened in the past half year. I have been focusing on getting the plugin architecture in a working state. It is now possible to enable or disable features like raster or vector rendering at compile time and runtime. This means that features are now well separated.

Right now, I am focusing on getting the projection correct in [this PR](https://github.com/maplibre/maplibre-rs/pull/233/). Unfortunately, there is quite some maths involved and the maplibre-gl-js source code does not explain much.
So in order to get this correct (and yes we absolutely have to get this 100% correct) I will have to do some math on paper and then create unit tests to validate my assumptions. This takes a lot of time, but is really fun!
This will definitely also benefit the other MapLibre projects, as I am documenting the insights. I created a [GeoGebra visualization](https://www.geogebra.org/m/cvhtwhng) of the current near and far plane calculations.

## 🏠 Housekeeping

The following will summarizes what happened last week on GitHub.

### 🎁 Merged Pull Requests

- [#285](https://github.com/maplibre/maplibre-rs/pull/285) chore: Inline format args by [@nyurik](https://github.com/nyurik)<br>
- [#282](https://github.com/maplibre/maplibre-rs/pull/282) chore: Bump consolidated dependencies by [@nyurik](https://github.com/nyurik)<br>
- [#281](https://github.com/maplibre/maplibre-rs/pull/281) chore: Consolidate dependency version mgmt by [@nyurik](https://github.com/nyurik)<br>
  Thanks for handling depedency updates!
- [#280](https://github.com/maplibre/maplibre-rs/pull/280) Format justfile using just's own --fmt by [@nyurik](https://github.com/nyurik)<br>
- [#279](https://github.com/maplibre/maplibre-rs/pull/279) Fix Apache license file by [@nyurik](https://github.com/nyurik)<br>
  And cleaning up!
- [#277](https://github.com/maplibre/maplibre-rs/pull/277) Update wgpu to 0.16 by [@maxammann](https://github.com/maxammann)<br>
  It is gerat to see wgpu progress!
- [#275](https://github.com/maplibre/maplibre-rs/pull/275) Fix webgpu demo by [@maxammann](https://github.com/maxammann)<br>
  WebGPU demo finally runs on stable Chrome!
- [#272](https://github.com/maplibre/maplibre-rs/pull/272) Upgrade to wgpu to fix issue on 0.15 by [@maxammann](https://github.com/maxammann)<br>
- [#271](https://github.com/maplibre/maplibre-rs/pull/271) Spell fixes, possibly breaking "Uninizalized" rename by [@nyurik](https://github.com/nyurik)<br>
  And even more cleanup by @nyurik!
- [#270](https://github.com/maplibre/maplibre-rs/pull/270) Fix shaders for Chrome 113 by [@maxammann](https://github.com/maxammann)<br>
- [#269](https://github.com/maplibre/maplibre-rs/pull/269) Upgrade Rust to nightly-2023-03-29 and 1.68 by [@maxammann](https://github.com/maxammann)<br>
- [#268](https://github.com/maplibre/maplibre-rs/pull/268) Add basic nix shell and direnv config (working on macOS) by [@maxammann](https://github.com/maxammann)<br>
  Finally got to learn nix and I definitely want to use it to some extent in the project!
- [#266](https://github.com/maplibre/maplibre-rs/pull/266) Dead code by [@Tristramg](https://github.com/Tristramg)<br>
- [#261](https://github.com/maplibre/maplibre-rs/pull/261) Remove unwrap from write_png by [@Tristramg](https://github.com/Tristramg)<br>
  Thanks for cleaning up!
- [#255](https://github.com/maplibre/maplibre-rs/pull/255) Debug line now have same pixel width by [@Tristramg](https://github.com/Tristramg)<br>
- [#253](https://github.com/maplibre/maplibre-rs/pull/253) Introduce Plugin API along with Raster Tiles by [@maxammann](https://github.com/maxammann)<br>
  We have now plugins!
- [#250](https://github.com/maplibre/maplibre-rs/pull/250) Upgrade wgpu to 0.15.1 by [@maxammann](https://github.com/maxammann)<br>
- [#249](https://github.com/maplibre/maplibre-rs/pull/249) Use prost Message from geozero by [@maxammann](https://github.com/maxammann)<br>
- [#243](https://github.com/maplibre/maplibre-rs/pull/243) Make warning more detailed by [@nyurik](https://github.com/nyurik)<br>
- [#241](https://github.com/maplibre/maplibre-rs/pull/241) Simplify and move Stencil reference functions by [@Tristramg](https://github.com/Tristramg)<br>
- [#240](https://github.com/maplibre/maplibre-rs/pull/240) Update trivial dependencies by [@Tristramg](https://github.com/Tristramg)<br>
- [#239](https://github.com/maplibre/maplibre-rs/pull/239) Apply some clippy hints by [@Tristramg](https://github.com/Tristramg)<br>
- [#238](https://github.com/maplibre/maplibre-rs/pull/238) use geo_types::Coord as geo_types::Coordinates is being deprecated by [@Tristramg](https://github.com/Tristramg)<br>
- [#237](https://github.com/maplibre/maplibre-rs/pull/237) Bump criterion to 0.4.0 by [@Tristramg](https://github.com/Tristramg)<br>
- [#236](https://github.com/maplibre/maplibre-rs/pull/236) Tile source fixes by [@maxammann](https://github.com/maxammann)<br>
- [#235](https://github.com/maplibre/maplibre-rs/pull/235) Bump prost crate version to 0.11.5 by [@Tristramg](https://github.com/Tristramg)<br>

### 🎁 New Issues

- [#283](https://github.com/maplibre/maplibre-rs/issues/283) 3D model experiemnts glTF by [@maxammann](https://github.com/maxammann)<br>
  It would be very fun to have some glTF models in maplibre-rs as a demo!

- [#263](https://github.com/maplibre/maplibre-rs/issues/263) WebAssembly: Not enough memory left by [@maxammann](https://github.com/maxammann)<br>
  WebAssembly can run out of memory when running in threaded mode.

- [#259](https://github.com/maplibre/maplibre-rs/issues/259) Experiment with other tesselation algorithm (earcut) by [@maxammann](https://github.com/maxammann)<br>
  This has the potential to speed things up.

- [#245](https://github.com/maplibre/maplibre-rs/issues/245) Improve buffer management by [@maxammann](https://github.com/maxammann)<br>
  Important one. Currently buffer management is overly simplified.

- [#244](https://github.com/maplibre/maplibre-rs/issues/244) Add support for TileJSON by [@maxammann](https://github.com/maxammann)<br>
  This would be handy for demos.

### 🧵 Current Discussions

None.

### 👋 Contributors

- [@nyurik](https://github.com/nyurik)
- [@terrorfisch](https://github.com/terrorfisch)
- [@Tristramg](https://github.com/Tristramg)
- [@kimpham54](https://github.com/kimpham54)

### About

[maplibre-rs](https://github.com/maplibre/maplibre-rs) is an upcoming and cross-platform vector map renderer written in Rust.
If you want to get in touch with the developers, visit the [#maplibre:matrix.org](https://matrix.to/#/#mapr:matrix.org) chat or join the MapLibre (#maplibre and #maplibre-rs) community within the OpenStreetMap Slack. You can get an invitation [here](https://slack.openstreetmap.us).
