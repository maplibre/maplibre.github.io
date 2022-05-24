---
title: "maplibre-rs monthly"
date: 2022-05-23T20:16:02+02:00
categories: ["maplibre-rs"]
authors: [maxammann]
draft: true
---

[maplibre-rs](https://github.com/maplibre/maplibre-rs) is an upcoming and cross-platform vector map renderer written in Rust. If you want to get in touch with the developers visit the [#maplibre:matrix.org](https://matrix.to/#/#mapr:matrix.org) chat or join the MapLibre (#maplibre and #maplibre-rs) community within the OpenStreetMap Slack. You can get an invite [here](https://osmus-slack.herokuapp.com/).

## 📰 News

If you haven't read the last news then check it out [here]({{< ref "2022-05-13-maplibre-rs-weekly.md" >}})

Today, we merged the new renderer for maplibre-rs. It is based on bevy. Thanks bevy-devs for your outstanding progress on developing a game engine in Rust! Thank you very much for making your work open-source!

This week we continued to work on the scientific publication around maplibre-rs. Checkout the previous weekly for more information.

From now on this news will only be posted monthly, as I will have significantly less time for maplibre-rs in the next 3 months.

## 🏠 House Keeping

The following will summarizes what happened last week on GitHub.

### 🎁 Merged Pull Requests

- [#104](https://github.com/maplibre/maplibre-rs/pull/104) Create a MacOS application artifact in GHA by [@Drabble](https://github.com/Drabble)<br>
  You can now download the demo for macOS directly on the Github Action page.
- [#103](https://github.com/maplibre/maplibre-rs/pull/103) Add Windows as a target OS in Cargo dependencies by [@Drabble](https://github.com/Drabble)<br>
  Windows is now officially tested and supported
- [#102](https://github.com/maplibre/maplibre-rs/pull/102) Create the how-to-run.md documentation by [@Drabble](https://github.com/Drabble)<br>
  We split the documentation for building the library for development purposes and actual library development.
- [#101](https://github.com/maplibre/maplibre-rs/pull/101) Create a Windows executable artifact in GHA by [@Drabble](https://github.com/Drabble)<br>
  You can now download the demo for Windows directly on the Github Action page.
- [#100](https://github.com/maplibre/maplibre-rs/pull/100) Improve apple iOS configuration by [@Drabble](https://github.com/Drabble)<br>
  The demo runs now in the simulator on x86_64
- [#93](https://github.com/maplibre/maplibre-rs/pull/93) Add Render Graph from Bevy by [@maxammann](https://github.com/maxammann)<br>
  A render based on render graphs is now implemented.

### 🎁 New Issues

- [#112](https://github.com/maplibre/maplibre-rs/issues/112) Support Middleware API by [@maxammann](https://github.com/maxammann)<br>
  We might want to make it easier for other Rust apps to include maplibre-rs
- [#108](https://github.com/maplibre/maplibre-rs/issues/108) &#34;cargo test&#34; fails with &#34;android-ndk-sys only supports compiling for Android&#34; by [@dmarcoux](https://github.com/dmarcoux)<br>
  Thanks for raising awareness for our tests!
- [#107](https://github.com/maplibre/maplibre-rs/issues/107) Hide SQLite3 dependency behind a feature flag by [@maxammann](https://github.com/maxammann)<br>
  Task for making sqlite3 an optional dependency

### 🧵 Current Discussions

- [#18](https://github.com/maplibre/maplibre-rs/discussions/18) Looking forward
  What's up in the mapping community?
- [#32](https://github.com/maplibre/maplibre-rs/discussions/32) Should the map be controlled from rust or from higher level languages?
  Input handling of maplibre-rs.
- [#49](https://github.com/maplibre/maplibre-rs/discussions/49) Introduce yourself!
  Who are you?

### 👋 Contributors

- [@jackson211](https://github.com/jackson211)
- [@maxammann](https://github.com/maxammann)
- [@dmarcoux](https://github.com/dmarcoux)
- [@Drabble](https://github.com/Drabble)
