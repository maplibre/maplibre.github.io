---
title: "maplibre-rs: Weekly Progress"
date: "2022-05-13"
categories: ["maplibre-rs"]
authors: [maxammann]
---

[maplibre-rs](https://github.com/maplibre/maplibre-rs) is an upcoming and cross-platform vector map renderer written in Rust. If you want to get in touch with the developers visit the [#maplibre:matrix.org](https://matrix.to/#/#mapr:matrix.org) chat or join the MapLibre (#maplibre and #maplibre-rs) community within the OpenStreetMap Slack. You can get an invite [here](https://osmus-slack.herokuapp.com/).

## 📰 News

If you haven't read the initial news then check it out [here]({{< ref "2022-05-06-maplibre-rs-weekly.md" >}}).
In the past week we continued to work on our collaboration with the University of Applied Sciences and Arts (HES-SO/HEIG-VD), Switzerland.
The main focus of the past week was on documentation and redesigning the renderer and the structure of the maplibre-rs library.

In the past week, I extracted the render from [Bevy](https://bevyengine.org/). After some discussions [on Github](https://github.com/maplibre/maplibre-rs/discussions/75), Slack and Matrix we concluded that writing a renderer specific to maps is the best option. In general, specialized renderers can be optimized better. By implementing a renderer ourselves, we also stay independent of other projects. For example, Bevy is a render engine (renderer + a lot more) for games. That means that features which are important for bevy are most likely not important for maplibre-rs and vice versa. For example, the Bevy renderer does not support a stencil.

Because I'm quite unexperienced in the world of 3D graphics, I dediced to base the renderer on some existing one. The best renderers in the Rust world are currently Bevy and rend3. After evaluating both renderers I decided to go with the Bevy one, because rend3 had usages of `unsafe. Both renderers are based around the idea of a [render graph](https://logins.github.io/graphics/2021/05/31/RenderGraphs.html).

## 🏠 House Keeping

The following will summarizes what happened last week on GitHub.

### 🎁 New Features

- {{< github-issue maplibre-rs 99 >}}<br>
  Experiment which renders to an Android Surface instead of the whole screen.
- {{< github-issue maplibre-rs 93 >}}, {{< github-issue maplibre-rs 94 >}}<br>
  Experiment with a new render engine. This will probably define the architecture of maplibre.
- {{< github-issue maplibre-rs 77 >}}<br>
  I'm not sure whether Futures should be `Send` or not.
- {{< github-issue maplibre-rs 80 >}}<br>
  Restructure and optimize WebWorker pool.
- {{< github-issue maplibre-rs 70 >}}<br>
  Experiment with a headless mode.
- {{< github-issue maplibre-rs 85 >}}<br>
- {{< github-issue maplibre-rs 86 >}}<br>
  Extract `winit` dependency from main crate.

### 🔧 Fixes

- {{< github-issue maplibre-rs 97 >}}<br>
  Remove `.unwrap()` from code.
- {{< github-issue maplibre-rs 88 >}}<br>
  Optimze WASM size.
- {{< github-issue maplibre-rs 81 >}}

### 📄 Documentation

- {{< github-issue maplibre-rs 84 >}}
- {{< github-issue maplibre-rs 87 >}}

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

- {{< github-user iakev >}} - For resolving `.unwrap()`s in the code
- {{< github-user neimsaci >}} - For adding contributors to the README


