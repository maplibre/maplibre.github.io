---
title: "MapLibre Newsletter July 2023"
date: 2023-07-30
categories: ["newsletter"]
authors: [duje]
draft: false
---

# MapLibre Newsletter - July 2023

## Highlights

### COVTiles

We want to emphasize [Markus Tremmel's](https://github.com/mactrem) input of prototyping a new vector tile format called [COVTiles](https://github.com/mactrem/cov-tiles#cloud-optimized-vector-tiles-covtiles)

## MapLibre Native

### Harfbuzz

[Alan Wei Chen](https://github.com/alanchenboy) from the Grab Maps team opened a Pull Request to introduce Harfbuzz, the text shaping engine, in MapLibre Native. In the future this will allow to render Indic and South-East Asian languages such as Hindi or Khmer in MapLibre. Have a look at Alan's proposal and feel free to share your feedback at https://github.com/maplibre/maplibre-native/pull/1439!

### Renderer Modularization PRs

The new Modularized renderer architecture based on Drawables is being merged. The `topic/drawable` will be merged into `topic/drawable-reviewed`. The last improvement and fixes will be made on this branch, and then we will merge the changes into `main`. The legacy renderer pass will remain active until the Drawable renderer pass is stable enough. At that point, we will flip the switch and eventually the legacy renderer code will be removed. If you are interested in following along or make code reviews, please see an overview of the relevant PRs here: maplibre/maplibre-native#1389

- [Original Design Proposal](https://github.com/maplibre/maplibre-native/blob/main/design-proposals/2022-10-27-rendering-modularization.md)
- [MapLibre Phase 1 Design: Results](https://docs.google.com/document/d/1QtsUgDyD-Rt1McvJFz7HbHvEKli3tRVfxdW7fLDF-g8/edit#heading=h.dwpgby211stb)

### iOS

Alex Polvi contributed an [iOS getting started guide](https://github.com/maplibre/maplibre-native/blob/main/platform/ios/README.md), both for end-users of the library and those wanting to work on the library directly. It is now again possible to make developer builds of the test app for people that do not have a paid Apple Developer subscription. Thanks Alex!

As mentioned during the Technical Steering Committee this month, we now exclusively use Bazel for iOS build and Xcode configuration. Thanks to this it is possible to 'flatten' the confusing macOS and iOS directory structure. Marc Wilson is preparing a [PR](https://github.com/maplibre/maplibre-native/pull/1393) for this

We are now running an iOS render test on an a real iOS device for every PR. Thanks to the credits we have from AWS this is possible. You should be greeted with a green checkmark from your friendly MapLibre Native Bot when making a PR:

<img src="https://user-images.githubusercontent.com/23352538/257043827-3ec7ea6b-8757-4fa8-b4c6-b43787e329aa.png" style="max-width: 100%; height: auto;">

### Android

The design proposal from Fynn Godau to [overhaul the Annotations API on Android](https://github.com/maplibre/maplibre-native/blob/main/design-proposals/2023-06-17-android-annotations.md) has been merged.

### Metal

Work on the Metal rendering backend has started, and the first important steps have been completed. The first one being: drawing nothing with Metal. And the second one being: drawing a triangle with Metal!

<img src="https://user-images.githubusercontent.com/23352538/257043837-0dc17470-e1e7-49d5-8042-890482671023.png" style="max-width: 100%; height: auto;">

(Screenshot from Tim Sylvester showing a triangle rendered with Metal.)

## MapLibre GL JS

A rewrite of the new documentation site can be found [here](https://maplibre.org/maplibre-gl-js/docs/).

In addition, we released [v3.2.0](https://github.com/maplibre/maplibre-gl-js/releases/tag/v3.2.0) and [v3.2.1](https://github.com/maplibre/maplibre-gl-js/releases/tag/v3.2.1) with a lot of exciting new features and a lot of bug fixes. Click on the links above to see a detailed list of all the changes in each version.

## Events

[Bart Louwers](https://github.com/louwers) will be [holding a talk](https://www.linkedin.com/feed/update/urn:li:ugcPost:7090276373935620096/) at [FOSS4G NL](https://foss4g.nl/) in [Middelburg](https://www.openstreetmap.org/search?query=Middelburg#map=13/51.5053/3.6178) September 14th, 2023.

[Yuri Astrakhan](https://github.com/nyurik) will represent MapLibre at [FOSS4G NA](https://foss4gna.org/) in [Baltimore](https://www.openstreetmap.org/search?query=Baltimore#map=12/39.2847/-76.6205) October 23rd to 25th, 2023.

Come by and get to know us in person.

## Next Up

The Governing Board Elections 2023 are taking place August 24th, 2023. Please follow [this issue](https://github.com/maplibre/maplibre/issues/298) for all relevant news. You can suggest a new Voting Member thru [this issue](https://github.com/maplibre/maplibre/issues/300).
