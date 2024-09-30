---
title: "MapLibre Newsletter September 2024"
date: "2024-09-30"
categories: ["newsletter"]
authors: [wipfli, ianthetechie, harel, bart]
draft: false
---

# MapLibre Newsletter - September 2024


## SwiftUI DSL

MapLibre has a new hosted project: the [SwiftUI DSL for MapLibre native](https://github.com/maplibre/swiftui-dsl)! Originally started by Ian Wagner from [Stadia Maps](https://stadiamaps.com/), the goal of the project is to give MapLibre developers on iOS an experience that rivals the latest MapKit for SwiftUI APIs.

[Jacob Fielding](https://github.com/archdoog) ([Rallista](https://rallista.app/)), [Patrick Wolowicz](https://subzero.eu/) and [Patrick Kladek](https://github.com/Patrick-Kladek) ([HudHud](https://hudhud.sa/en)) shared the same vision, and have each contributed significantly to the ongoing development over the last year. This is a great example of the collaboration that MapLibre seeks to enable across the industry, and the authors are excited to have the project officially hosted under the MapLibre organization.

If you'd like to help shape the future of MapLibre in SwiftUI, join us in the `#maplibre-swiftui-compose-playground` channel on [Slack](https://slack.openstreetmap.us/).

## MapLibre GL JS

## Web

In this month three version were released: 4.7.0, 4.7.1 and 5.0.0-pre.1.
The prerelease of version 5 is meant to get some feedback on the newly added globe feature!
We are also planning some breaking changes as part of this version which you can find here, most of them are not disruptive:
- https://github.com/maplibre/maplibre-gl-js/issues/3834

Apart from the exiting news about the globe finally making its way to the main branch there are also some experiments to allow controlling the roll angle of the map to facilitate for some aviation use cases.
![image](https://github.com/user-attachments/assets/0a0771e6-11d9-40b4-9c49-409733b420dc)

More about it can be found here, there are bounties related to this effort as well if you are interested in developing this, or if your company needs this feature you can chip-in for the costs:
- https://github.com/maplibre/maplibre-gl-js/issues/4717#issuecomment-2368502154


## MapLibre Native

- The most significant development this month was the [MapLibre Native Android pre-release](https://github.com/maplibre/maplibre-native/releases/tag/android-v11.3.0-vulkan-pre0) that uses [Vulkan](https://www.vulkan.org/) for rendering. We did some benchmarks and the results [look promising](https://github.com/maplibre/maplibre-native/issues/2787#issuecomment-2368938676). Especially newer devices seem to benefit from this modern graphics API, although we are still validating these results and exploring opportunities to take advantage of Vulkan's capabilities. Since the Vulkan backend is still in development, now is the best time to try it out and to let us know any regressions you encounter (either as an issue or in the [pre-release thread](https://github.com/maplibre/maplibre-native/issues/2787)). You can test it by using `11.3.0-vulkan-pre0` as a version (or the latest Vulkan version from [Maven Central](https://central.sonatype.com/artifact/org.maplibre.gl/android-sdk/versions)).

- Support for [`textFitWidth` and `textFitHeight`](https://maplibre.org/maplibre-style-spec/sprite/#text-fit-properties) properties landed in [#2780](https://github.com/maplibre/maplibre-native/pull/2780) this month. Support for specifying [padding for icons](https://maplibre.org/maplibre-style-spec/types/#padding) on all sides separately landed in [#2845](https://github.com/maplibre/maplibre-native/pull/2845). Both features are used in Bing Maps, and were implemented by Microsoft engineers (among which Alexey Kon). We are thankful for these contributions that work towards [feature parity with MapLibre GL JS](https://github.com/maplibre/maplibre-native/issues?q=is%3Aissue+is%3Aopen+label%3Ajs-parity).

- MapLibre Native Android [11.3.0](https://github.com/maplibre/maplibre-native/releases/tag/android-v11.3.0), [11.4.0](https://github.com/maplibre/maplibre-native/releases/tag/android-v11.4.0) and [11.5.0](https://github.com/maplibre/maplibre-native/releases/tag/android-v11.5.0) were released. This last release inadvertently included a small API change, which will mostly be resolved again by [#2880](https://github.com/maplibre/maplibre-native/pull/2880#pullrequestreview-2336900203). A pesky bug in the emulator was plaguing MapLibre Native Android ever since 11.0.0, but we added a workaround in the latest release, so that working with the emulator should be viable again.

- MapLibre Native iOS [6.6.0](https://github.com/maplibre/maplibre-native/releases/tag/ios-v6.6.0) and [6.7.0](https://github.com/maplibre/maplibre-native/releases/tag/ios-v6.7.0) were released.

- MapLibre Node.js 6.0.0 was released which brings support for Metal on macOS, and uses the new [drawable](https://github.com/maplibre/maplibre-native/blob/main/design-proposals/2022-10-27-rendering-modularization.md) renderer architecture.

- Support for [PMTiles](https://github.com/protomaps/PMTiles) may come to MapLibre Native soon! There is an open PR ([#2882](https://github.com/maplibre/maplibre-native/pull/2882)) from Tiago Costa with a request to try it out.



## Meetings and Events

The next monthly meetings will take place as usual on the second Wednesday of the month, i.e., on Wednesday, October 9th, 2024. The calls are open to everyone, feel free to join and say hi!

- MapLibre Navigation, October 9th, 2024, 6 to 7 PM CEST
- MapLibre Native, October 9th, 2024, 7 to 8 PM CEST
- MapLibre GL JS, October 9th, 2024, 8 to 9 PM CEST

You can find the zoom links for these meetings in the MapLibre Slack channel. Get an automated invite to join the Slack channel now at https://slack.openstreetmap.us/.

