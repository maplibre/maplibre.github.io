---
title: "MapLibre Newsletter April 2023"
date: 2023-04-14
categories: ["newsletter"]
authors: [wipfli]
draft: false
---

# MapLibre Newsletter - April 2023

## General

#### Bounty Program

TBD

## Past Events

TBD

## MapLibre GL Native

People interested in contributing can schedule a call with Bart Louwers, maintainer native: <a href="https://github.com/maplibre/maplibre-gl-native/discussions/898">maplibre/maplibre-gl-native#898</a>.

#### Bounties 💰

Have a look at all available [Bounties in MapLibre GL Native](https://github.com/maplibre/maplibre-gl-native/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%92%B0+bounty+S%22%2C%22%F0%9F%92%B0+bounty+M%22%2C%22%F0%9F%92%B0+bounty+L%22%2C%22%F0%9F%92%B0+bounty+XL%22%2C%22%F0%9F%92%B0+bounty+XXL%22+) and feel free to propose Bounties yourself. Read our [step-by-step Bounties guide](http://localhost:45707/roadmap/step-by-step-bounties-guide/).

#### Contributions

Contributions since March 20'th, 2023:

Most notable PRs

- First bounty was finalised by Loc Nguyen: Getting Started Guide MapLibre GL Native for Android has now step by step guides and also a demo codebase [#808](https://github.com/maplibre/maplibre-gl-native/issues/808)
- Thanks to Tadej Novak we have our first split repository initiative. We started with Qt platform [Qt platform](https://github.com/maplibre/maplibre-native-qt)
- Rendering Modularization work that will lead to metal implementation
- OpenGL 2 support is dropped. For the ones that still want to use OpenGL 2 please refear to: [opengl-2](https://github.com/maplibre/maplibre-gl-native/tree/opengl-2)

### Rendering Modularization & Metal project

Project highlights since March 20'th, 2023:

- Work was focused on shaders reorg and tests
- [Project roadmap](https://github.com/orgs/maplibre/projects/8)
- Upgrade to OpenGL ES 3.0
  - Motivation, consequences:
    - Most of android devices are compatible with ES 3.0
    - One platform that will suffer a drawback till metal will be implemented is MacOS.
    - A branch was be created for OpenGl ES 2.0 support: [opengl-2](https://github.com/maplibre/maplibre-gl-native/tree/opengl-2)

## MapLibre GL JS

#### Bounties 💰

Bounties completed since March 20'th 2023:

- Remove style-spec from the repo in favor of references to the npm package [Use @maplibre/maplibre-gl-style-spec in MapLibre GL JS](https://github.com/maplibre/maplibre-gl-js/issues/2194)
- Victor Gerard Temprano helped out with the opacity fix for serTerrain by adding a warnonce when it detects that a user is using the same source for a hillshade and for 3D terrain [Opacity fix for setTerrain](https://github.com/maplibre/maplibre-gl-js/issues/2035)
- Add queryTerrainElevation allows getting terrain elevation in meters at specific point ([#2264](https://github.com/maplibre/maplibre-gl-js/pull/2264))

#### Contributions

Most notable PRs since March 20th, 2023:

- Yi Zhang(Microsoft) - Improve initial loading performance by lazy serializing layers only when needed. ([#2306](https://github.com/maplibre/maplibre-gl-js/pull/2306))
- Victor Gerard Temprano - Adding a `warnonce` when terrain and hillshade source are the same ([#2298](https://github.com/maplibre/maplibre-gl-js/pull/2298))
- Cuong Nguyen - Add queryTerrainElevation allows getting terrain elevation in meters at specific point ([#2264](https://github.com/maplibre/maplibre-gl-js/pull/2264))

## MapLibre StyleSpecs

#### Debated design proposals:

- [Support for refreshTiles per tile source](https://github.com/maplibre/maplibre-style-spec/issues/61)
- [Expanding tileSources bounds](https://github.com/maplibre/maplibre-style-spec/issues/60)
- [Add elevation to symbol layer](https://github.com/maplibre/maplibre-style-spec/issues/62)
- [Update text-offset to better support variable anchor placement](https://github.com/maplibre/maplibre-style-spec/issues/112)

## Upcoming Events

TBD
