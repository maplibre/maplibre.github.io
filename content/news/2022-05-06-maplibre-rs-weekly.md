---
title: "maplibre-rs: Weekly Progress"
date: "2022-05-06"
categories: ["maplibre-rs"]
authors: [maxammann]
---

[maplibre-rs](https://github.com/maplibre/maplibre-rs) is an upcoming and cross-platform vector map renderer written in Rust. If you want to get in touch with the developers visit the [#maplibre:matrix.org](https://matrix.to/#/#mapr:matrix.org) chat or our Slack at [osmus.slack.com](https://osmus.slack.com/).

## 📰 News

About one month ago, the MapLibre organisation started to host the maplibre-rs project (formerly known as mapr). I was happy about the opportunity and the support from the Geo community. It seems like I was not the first with the idea of a map rendering engine in Rust. In the discussion [#18](https://github.com/maplibre/maplibre-rs/discussions/18) a lot of people showed what they have been working on in the past.
The maplibre-rs project is the place where we can bundle our efforts to create a new, unique and fun rendering engine.

At about the same time, researchers form the University of Applied Sciences and Arts (HES-SO/HEIG-VD), Switzerland, approached the maplibre-rs project. The maplibre-rs implementation should serve as a proof of concept to show that a true cross-platform experience is possible with WebGPU and Rust.

I'm looking forward what we will create in the following year!

## 🏠 House Keeping

The following will summarizes what happened last week on GitHub.

### 🎁 New Features

- [#13](https://github.com/maplibre/maplibre-rs/pull/13), [#33](https://github.com/maplibre/maplibre-rs/pull/33) Add support for Gradle<br>
  It's not possible to easily use maplibre-rs on Android. Sadly only fullscreen is supported right now.
- [#15](https://github.com/maplibre/maplibre-rs/pull/15) Add support for XCode and Swift Packages<br>
  It's not possible to easily use maplibre-rs on iOS and macOS. Sadly only fullscreen is supported right now.
- [#43](https://github.com/maplibre/maplibre-rs/pull/43) Create a proper web package<br>
  It's not possible to easily use maplibre-rs on the web via an NPM package.
- [#46](https://github.com/maplibre/maplibre-rs/pull/46) Prepare for publishing on crates.io<br>
  Some preparations are finished and maplibre-rs is available [here](https://crates.io/crates/maplibre)
- [#38](https://github.com/maplibre/maplibre-rs/pull/38) optimize zoom bounds<br>
  Computing some coordinates is faster now.
- [#63](https://github.com/maplibre/maplibre-rs/pull/63) Move platform specific code to web<br>
  Most of the web related stuff lives now in the `web` crates and no longer in the core crate `maplibre`.

### 🔧 Fixes

- [#8](https://github.com/maplibre/maplibre-rs/pull/8) Rename to maplibre-rs

### 📄 Documentation

- [#52](https://github.com/maplibre/maplibre-rs/pull/52) Add packaging Documentation
- [#54](https://github.com/maplibre/maplibre-rs/pull/54) Improve the MacOS documentation

### 🧵 Current Discussions

- [#18](https://github.com/maplibre/maplibre-rs/discussions/18) Looking forward
  What's up in the mapping community?
- [#32](https://github.com/maplibre/maplibre-rs/discussions/32) Should the map be controlled from rust or from higher level languages?
  Input handling of maplibre-rs.
- [#49](https://github.com/maplibre/maplibre-rs/discussions/49) Introduce yourself!
  Who are you?

Some architectural discussions:

- [#75](https://github.com/maplibre/maplibre-rs/discussions/75) Usage of bevy game engine
- [#60](https://github.com/maplibre/maplibre-rs/discussions/60) Requirement of cross-origin isolated
- [#83](https://github.com/maplibre/maplibre-rs/discussions/83) Potential memory allocation issues on WASM

### 👋 New Contributors

- [@Drabble](https://github.com/Drabble): Thanks, for working on the documentation and testing maplibre-rs on different platforms!
- [@FabianWildgrube](https://github.com/FabianWildgrube): Thanks for experimenting with text rendering!
- [@nyurik](https://github.com/nyurik): Thanks, for reviews and optimizations!
- [@drwestco](https://github.com/drwestco): Thanks, for the awesome new logo for maplibre-rs!
- [@vladdoster](https://github.com/vladdoster), [@hdevalence](https://github.com/hdevalence): Thanks for improving the documentation!
