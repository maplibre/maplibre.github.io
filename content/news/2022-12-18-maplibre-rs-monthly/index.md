---
title: "maplibre-rs monthly"
date: "2022-12-18"
categories: ["maplibre-rs"]
authors: [maxammann]
draft: false
---

[maplibre-rs](https://github.com/maplibre/maplibre-rs) is an upcoming and cross-platform vector map renderer written in Rust. If you want to get in touch with the developers, visit the [#maplibre:matrix.org](https://matrix.to/#/#mapr:matrix.org) chat or join the MapLibre (#maplibre and #maplibre-rs) community within the OpenStreetMap Slack. You can get an invitation [here](https://slack.openstreetmap.us/).

## 📰 News

{{< page-figure "egui.png" "egui integration" 1000 >}}
egui integration
{{< /page-figure >}}
{{< page-figure "extrusion.png" "building extrusion" 1000 >}}
3D building extrusion
{{< /page-figure >}}
{{< page-figure "raster.png" "raster tile rendering" 1000 >}}
Raster tiles
{{< /page-figure >}}

<figure>
  <video
    class="w-50 p-3"
    src="sdf-rendering.webm"
    autoplay
    muted
    controls
    loop
  ></video>
  
  <figcaption>
    Text Rendering using SDFs
  </figcaption>
</figure>


## 🏠 House Keeping

The following will summarizes what happened last week on GitHub.

### 🎁 Merged Pull Requests

- [#227](https://github.com/maplibre/maplibre-rs/pull/227) Improve processing by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#226](https://github.com/maplibre/maplibre-rs/pull/226) Add debug lines and improve tile queuing by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#225](https://github.com/maplibre/maplibre-rs/pull/225) Add code back which changes the color dynamically by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#224](https://github.com/maplibre/maplibre-rs/pull/224) Automatically choose texture format based on adapter by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#222](https://github.com/maplibre/maplibre-rs/pull/222) Improve error handling by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#221](https://github.com/maplibre/maplibre-rs/pull/221) Fix regressions: Transferable flatbuffers by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#215](https://github.com/maplibre/maplibre-rs/pull/215) Upgrade to Ubuntu 22 in CI by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#214](https://github.com/maplibre/maplibre-rs/pull/214) Make writing rendered tiles to disk optional, and disable for bench by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#213](https://github.com/maplibre/maplibre-rs/pull/213) Fix tracy by using re-export by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#211](https://github.com/maplibre/maplibre-rs/pull/211) Switch to own host for test-data by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#209](https://github.com/maplibre/maplibre-rs/pull/209) Switch to powershell by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#208](https://github.com/maplibre/maplibre-rs/pull/208) justfile: automatically install wasm32 target for nightly toolchain by [@julienr](https://github.com/julienr)<br>
  TODO:remove or add comment

- [#207](https://github.com/maplibre/maplibre-rs/pull/207) Update Rust for CI and IDEs by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#206](https://github.com/maplibre/maplibre-rs/pull/206) Clippy fixes by [@julienr](https://github.com/julienr)<br>
  TODO:remove or add comment

- [#203](https://github.com/maplibre/maplibre-rs/pull/203) Fix regressions from structure refactoring by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#202](https://github.com/maplibre/maplibre-rs/pull/202) Upgrade npm dependencies by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#198](https://github.com/maplibre/maplibre-rs/pull/198) Upgrade wgpu to use wgpu-hal 14.1 by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#197](https://github.com/maplibre/maplibre-rs/pull/197) Clippy fixes by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#196](https://github.com/maplibre/maplibre-rs/pull/196) Fix rfc link in the README.md by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#195](https://github.com/maplibre/maplibre-rs/pull/195) Create a matrix job for apple by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#191](https://github.com/maplibre/maplibre-rs/pull/191) Fix stencil by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#189](https://github.com/maplibre/maplibre-rs/pull/189) Deduplicate and fix CI by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#188](https://github.com/maplibre/maplibre-rs/pull/188) Bootstrap RFCs and add initial RFC by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#183](https://github.com/maplibre/maplibre-rs/pull/183) Use DEPTH32FLOAT_STENCIL8 for metal support by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#181](https://github.com/maplibre/maplibre-rs/pull/181) Upgrade wgpu and fix CI by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#179](https://github.com/maplibre/maplibre-rs/pull/179) Refactor structure by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#177](https://github.com/maplibre/maplibre-rs/pull/177) Add demos by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#176](https://github.com/maplibre/maplibre-rs/pull/176) Fix cloudflare production deployment by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#174](https://github.com/maplibre/maplibre-rs/pull/174) New WASM executor by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#149](https://github.com/maplibre/maplibre-rs/pull/149) Define a minimum and maximum pitch by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

### 🎁 New Issues

- [#229](https://github.com/maplibre/maplibre-rs/issues/229) Limit work done per frame by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#217](https://github.com/maplibre/maplibre-rs/issues/217) Cancellable data/tile loading by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#216](https://github.com/maplibre/maplibre-rs/issues/216) Upgrade criterion and use cargo-criterion by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#212](https://github.com/maplibre/maplibre-rs/issues/212) Rendering does not work on Windows+Nvidia+Vulkan by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#201](https://github.com/maplibre/maplibre-rs/issues/201) Upgrade Rust to 1.65 by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#194](https://github.com/maplibre/maplibre-rs/issues/194) Switch to main wgpu branch by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#193](https://github.com/maplibre/maplibre-rs/issues/193) Texture format not supported by [@Drabble](https://github.com/Drabble)<br>
  TODO:remove or add comment

- [#190](https://github.com/maplibre/maplibre-rs/issues/190) Fix regressions introduced lately by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#187](https://github.com/maplibre/maplibre-rs/issues/187) maplibre-demo: High CPU and GPU usage on macOS while idle by [@vollkorntomate](https://github.com/vollkorntomate)<br>
  TODO:remove or add comment

- [#186](https://github.com/maplibre/maplibre-rs/issues/186) Use and doc the default input UI of maplibre-js by [@DerKarlos](https://github.com/DerKarlos)<br>
  TODO:remove or add comment

- [#185](https://github.com/maplibre/maplibre-rs/issues/185) Separation of map rendering and input controls in different Rust crates by [@DerKarlos](https://github.com/DerKarlos)<br>
  TODO:remove or add comment

- [#184](https://github.com/maplibre/maplibre-rs/issues/184) Web Demo is currently broken by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

- [#182](https://github.com/maplibre/maplibre-rs/issues/182) Flutter support by [@maxammann](https://github.com/maxammann)<br>
  TODO:remove or add comment

### 🧵 Current Discussions

TODO

### 👋 Contributors

- [@DerKarlos](https://github.com/DerKarlos)
- [@julienr](https://github.com/julienr)
- [@Quillasp](https://github.com/Quillasp)
- [@vollkorntomate](https://github.com/vollkorntomate)
