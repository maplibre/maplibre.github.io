---
title: "maplibre-rs monthly"
date: "2022-12-18"
categories: ["maplibre-rs"]
authors: [maxammann]
draft: false
---

[maplibre-rs](https://github.com/maplibre/maplibre-rs) is an upcoming and cross-platform vector map renderer written in Rust. If you want to get in touch with the developers, visit the [#maplibre:matrix.org](https://matrix.to/#/#mapr:matrix.org) chat or join the MapLibre (#maplibre and #maplibre-rs) community within the OpenStreetMap Slack. You can get an invitation [here](https://slack.openstreetmap.us/).

## 📰 News

Technically, this is not a "monthly" as I did not find the time in the past months to regularly write these.
A lot has happened in the past months, though!

At least three major features and a few quality-of-developer-life features are cooking and are soon ready for testing.
For better debugging I integreated egui into maplibre-rs. This should make it easy to display statistics like the current FPS or selected feature on the map. I could also imagine that a style editor in the style of [Maputnik](https://maputnik.github.io/) could be feasible.

Apart from egui, I also added a visualizing red border around tiles. This helped to improve the data loading performance of the renderer, as it become obvious which data loaded too slow.

{{< page-figure "egui.png" "egui integration" 1000 >}}
egui integration
{{< /page-figure >}}

In late summer, [@Drabble](https://github.com/Drabble) already started working on a proof-of-concept for extruded 3D buildings. The work required several rebases over the months, but it survived and looks stunning!
As per-feature rendering is currently missing, all buildings have the same hight right now. I hope to change that in the near future.
Though, I noticed that implementing design changes are usually accompanied by multiple concrete problems. 
As we integrate more features which are dependent on feature properties (building height, color properties, etc.) the required design changes will be uncovered.

{{< page-figure "extrusion.png" "building extrusion" 1000 >}}
3D building extrusion
{{< /page-figure >}}


In parallel [@Quillasp](https://github.com/Quillasp) worked on adding raster tile support to maplibre-rs. It already works on native platforms (Android, iOS, Linux, Windows) and in browsers. Though, the decoding of the images is done using WebWorkers. In the future, the browser should be tasked with the decoding jobs.

{{< page-figure "raster.png" "raster tile rendering" 1000 >}}
Raster tiles
{{< /page-figure >}}

Last but not least, I ported the SDF font rendering from the maps-rs prototype by [Luke Seelenbinder](https://github.com/lseelenbinder).
On the second try, it worked quite perfectly. Currently, there is no collision detection in place, which means that labels overlap while zooming in and out. Collision detection on its own is an interesting problem. On the OSM Slack we discussed whether this could be implemented on the GPU.
Current ideas for that are documented in a deck.gl [GitHub issue](https://github.com/visgl/deck.gl/issues/7374).


<figure>
  <video
    class="w-50 p-3"
    src="sdf-rendering.webm"
    autoplay
    muted
    loop
  ></video>
  
  <figcaption>
    Text Rendering using SDFs
  </figcaption>
</figure>

All of the above features are not yet merged into the main branch of maplibre-rs as further design changed need to happen.
For example, the management of GPU resources is very verbose right now. Additions of GPU resources and requires changes in some core 
engine `struct`. To mitigate this, further abstractions need to be invented.
After those design changes and resolving all discussions in the PRs we can merge in the features.

Apart from those new features, [kim pham](https://github.com/kimpham54) is currently working on parsing the MapLibre style specification, including its expressions.
Based on this work, the plan is that we generate statistics about the most frequently used style specification features.
This way we can create issues for all the missing features and prioritize them according to their usage.

Finally, I want to mention that maplibre-rs has now an RFC process described [here](https://maplibre.org/maplibre-rs/docs/book/rfc/0001-rfc-process.html). Based on that, I wrote an RFC about how data is exchanged between WebWorkers and the main thread [here](https://github.com/maplibre/maplibre-rs/pull/223). I think this is a great way to document progress. Let's see how that process will be used in the future!

## 🏠 Housekeeping

The following will summarizes what happened last week on GitHub.

### 🎁 Merged Pull Requests

- [#227](https://github.com/maplibre/maplibre-rs/pull/227) Improve processing by [@maxammann](https://github.com/maxammann)<br>
  Tiles are processed now immediately, instead of distributing work over frames.

- [#226](https://github.com/maplibre/maplibre-rs/pull/226) Add debug lines and improve tile queuing by [@maxammann](https://github.com/maxammann)<br>
  Red lines around tiles were added for debugging. Queuing of tiles has also been improved.

- [#224](https://github.com/maplibre/maplibre-rs/pull/224) Automatically choose texture format based on adapter by [@maxammann](https://github.com/maxammann)<br>
  Texture formats are now selected based on what the GPU supports.

- [#222](https://github.com/maplibre/maplibre-rs/pull/222) Improve error handling by [@maxammann](https://github.com/maxammann)<br>
  Complete rewrite of errors throuout maplibre-rs to follow best practices.

- [#214](https://github.com/maplibre/maplibre-rs/pull/214) Make writing rendered tiles to disk optional, and disable for bench by [@maxammann](https://github.com/maxammann)<br>
  Benchmarks no longer write PNGs to disk.

- [#213](https://github.com/maplibre/maplibre-rs/pull/213) Fix tracy by using re-export by [@maxammann](https://github.com/maxammann)<br>

- [#211](https://github.com/maplibre/maplibre-rs/pull/211) Switch to own host for test-data by [@maxammann](https://github.com/maxammann)<br>

- [#209](https://github.com/maplibre/maplibre-rs/pull/209) Switch to powershell by [@maxammann](https://github.com/maxammann)<br>
  Some windows goodies.

- [#208](https://github.com/maplibre/maplibre-rs/pull/208) justfile: automatically install wasm32 target for nightly toolchain by [@julienr](https://github.com/julienr)<br>

- [#206](https://github.com/maplibre/maplibre-rs/pull/206) Clippy fixes by [@julienr](https://github.com/julienr)<br>

- [#195](https://github.com/maplibre/maplibre-rs/pull/195) Create a matrix job for apple by [@maxammann](https://github.com/maxammann)<br>
  Improves CI time by a factor of 3.

- [#188](https://github.com/maplibre/maplibre-rs/pull/188) Bootstrap RFCs and add initial RFC by [@maxammann](https://github.com/maxammann)<br>
  We have now an official RFC process!

- [#174](https://github.com/maplibre/maplibre-rs/pull/174) New WASM executor by [@maxammann](https://github.com/maxammann)<br>
  We are no longer restricted to use SharedArrayBuffer. This means maplibre-rs runs now on any website!

- [#149](https://github.com/maplibre/maplibre-rs/pull/149) Define a minimum and maximum pitch by [@maxammann](https://github.com/maxammann)<br>

### 🎁 New Issues

- [#229](https://github.com/maplibre/maplibre-rs/issues/229) Limit work done per frame by [@maxammann](https://github.com/maxammann)<br>
  This should reduce frame drops.


- [#216](https://github.com/maplibre/maplibre-rs/issues/216) Upgrade criterion and use cargo-criterion by [@maxammann](https://github.com/maxammann)<br>

- [#212](https://github.com/maplibre/maplibre-rs/issues/212) Rendering does not work on Windows+Nvidia+Vulkan by [@maxammann](https://github.com/maxammann)<br>
  This could need some reproduction by windows folks.

- [#201](https://github.com/maplibre/maplibre-rs/issues/201) Upgrade Rust to 1.65 by [@maxammann](https://github.com/maxammann)<br>
  New goodies!


- [#187](https://github.com/maplibre/maplibre-rs/issues/187) maplibre-demo: High CPU and GPU usage on macOS while idle by [@vollkorntomate](https://github.com/vollkorntomate)<br>
  Discussions about idling.

- [#185](https://github.com/maplibre/maplibre-rs/issues/185) Separation of map rendering and input controls in different Rust crates by [@DerKarlos](https://github.com/DerKarlos)<br>
  Discussion about input handling.

- [#182](https://github.com/maplibre/maplibre-rs/issues/182) Flutter support by [@maxammann](https://github.com/maxammann)<br>
  Just an idea :)

### 🧵 Current Discussions

None

### 👋 Contributors

- [@DerKarlos](https://github.com/DerKarlos) - Thanks for discussions about input handling!
- [@julienr](https://github.com/julienr) - Thanks for code improvements!
- [@Quillasp](https://github.com/Quillasp) - Thanks for raster tile rendering!
- [@vollkorntomate](https://github.com/vollkorntomate) - Thanks for raising a discussion about CPU/GPU usage!


